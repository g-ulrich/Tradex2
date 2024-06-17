import { $, AccountsHandler, TSHandler, DataTable } from './common/core';
import { formatCurrency, getRandomAlphaNum, getDateNDaysAgo } from '../util';
import { get_table_positions_columns } from '../datatables/myColumns/positions';
import { get_table_accounts_columns } from '../datatables/myColumns/accounts';
import { getOrderColumns } from '../datatables/myColumns/orders';
import "./css/bootstrap-discord.min.css";
import { SimpleTableData } from '../datatables/simple';


function appendToLeft(id){
    const eleId = `${id}_${getRandomAlphaNum(5)}`;
    $("#left_container").append(`<div id="${eleId}" class="w-100 bg-dark rounded p-1 mb-2"></div>`);
    return eleId;
}

function appendToRight(id){
    const eleId = `${id}_${getRandomAlphaNum(5)}`;
    $("#right_container").append(`<div id="${eleId}" class="w-100 bg-dark rounded p-1 mb-2"></div>`);
    return eleId;
}


function initAccountInfo() {
    window.ts.account.getAccounts().then(accounts => {
        const accountIds = accounts.map(item => item["AccountID"]);
        initAccountsTableIntervals(
            setPositionsTableData,
            initPositionsTable(),
            accountIds, 10000);
        initAccountsTableIntervals(
            setAccountsTableData,
            initAccountsTable(),
            accountIds, 30000);

        initAccountsTableIntervals(
            setTodaysOrdersTableData,
            initTodaysOrdersTable(),
            accountIds, 30000);

        initAccountsTableIntervals(
            setOrdersTableData,
            initOrdersTable(),
            accountIds, 60000*2);
    }).catch(error => {
        console.log("[ERROR] initAccountInfo", error);
        setTimeout(() => {
            initAccountInfo();
        }, 1000);
    });
}

function initAccountsTableIntervals(mainfunc, table, accountIds, intervalSeconds) {
    mainfunc(table, accountIds);
    setInterval(() => {
        mainfunc(table, accountIds);
    }, intervalSeconds);
}

// Positions table
function initPositionsTable() {
    return new SimpleTableData({
        title: "Positions",
        containerID: appendToLeft("position"), // returns id
        columns: get_table_positions_columns(),
        dom: 't',
    });
}

function setPositionsTableData(table, accountIds) {
    window.ts.account.getPositions(accountIds).then(array => {
        table.setData(table, array);
        // setTimeout(()=>{
        window.ts.symbol._setSymbolDataToPositions(array);
        // }, 500);
    }).catch(error => {
        console.log("[ERROR] setPositionsTableData", error);
        setTimeout(() => {
            setPositionsTableData(table, accountIds);
        }, 1000);
    });
}

// Accounts Table
function initAccountsTable() {
    return new SimpleTableData({
        title: "Accounts",
        containerID: appendToRight("account"), //returns id
        columns: get_table_accounts_columns(),
        dom: 't',
    });
}

function setAccountsTableData(table, accountIds) {
    window.ts.account.getAccountBalances(accountIds).then(array => {
        // window.ts.account.configBalances(array)
        table.setData(table, array);
    }).catch(error => {
        console.log("[ERROR] setAccountsTableData", error);
        setTimeout(() => {
            setAccountsTableData(table, accountIds);
        }, 1000);
    });
}

// set order history
function initTodaysOrdersTable() {
    return new SimpleTableData({
        title: "Todays Orders",
        containerID: appendToLeft("orders"),
        columns: getOrderColumns(),
        dom: 't',
    });
}

function setTodaysOrdersTableData(table, accountIds) {
    window.ts.account.getOrders(accountIds).then(array => {
        // window.ts.account.configBalances(array)
        table.setData(table, array);
    }).catch(error => {
        console.log("[ERROR] setTodaysOrdersTableData", error);
        setTimeout(() => {
            setTodaysOrdersTableData(table, accountIds);
        }, 1000);
    });
}

// set order history
function initOrdersTable() {
    return new SimpleTableData({
        title: "Historical Orders",
        containerID: appendToLeft("orders"),
        columns: getOrderColumns(),
        // dom: 't',
    });
}

function setOrdersTableData(table, accountIds) {
    window.ts.account.getHistoricalOrders(accountIds, getDateNDaysAgo(10)).then(array => {
        // window.ts.account.configBalances(array)
        table.setData(table, array);
    }).catch(error => {
        console.log("[ERROR] setOrdersTableData", error);
        setTimeout(() => {
            setOrdersTableData(table, accountIds);
        }, 1000);
    });
}

// Assuming the current URL is something like "http://example.com/trade.html?symbol=MSFT"
const urlParams = new URLSearchParams(window.location.search);
const symbol = urlParams.get('symbol');

console.log(symbol); // This will log "MSFT" if the URL is "http://example.com/trade.html?symbol=MSFT"
$(() => {
    if (window.ts.token) {
        initHome();
    } else {
        setTimeout(() => {
            initHome();
        }, 1000);
    }

    $(document).on('click', '.tradeSymbol', function() {
        const urlparams = new URLSearchParams({
            symbol: $(this).attr('data-symbol'),
            chartType: "column",
            interval: "",
            unit: "",
            barsback: "",
            sessiontemplate: "",
        }).toString();
        window.open(`trade.html?${urlparams}`, '_blank');
    });
});

function initHome() {
    initAccountInfo();

}

