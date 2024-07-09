import { $, setColumnWidths} from './common/core';
import { getDateNDaysAgo, getVerticalTabHTML, getHorizontalTabHTML } from '../util';
import { get_table_positions_columns } from '../datatables/myColumns/positions';
import { get_table_accounts_columns } from '../datatables/myColumns/accounts';
import { getOrderColumns } from '../datatables/myColumns/orders';
import "./css/bootstrap-discord.min.css";
import { SimpleTableData } from '../datatables/simple';
import { PositionsTable } from '../datatables/positionsTableClass';
import {NewsTable} from '../datatables/newsTableClass';


function initAccountInfo() {
    window.ts.account.getAccounts().then(accounts => {
        const accountIds = accounts.map(item => item["AccountID"]);
        // initAccountsTableIntervals(
        //     setPositionsTableData,
        //     initPositionsTable(),
        //     accountIds, 10000);
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

// Accounts Table
function initAccountsTable() {
    return new SimpleTableData({
        title: "Accounts",
        containerID: "account", //returns id
        columns: get_table_accounts_columns(),
        dom: 't',
    });
}

function setAccountsTableData(table, accountIds) {
    window.ts.account.getAccountBalances(accountIds).then(array => {
        // window.ts.account.configBalances(array)
        table.setPollData(table, array);
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
        containerID: "todayorders",
        columns: getOrderColumns(),
        dom: 't',
    });
}

function setTodaysOrdersTableData(table, accountIds) {
    window.ts.account.getOrders(accountIds).then(array => {
        // window.ts.account.configBalances(array)
        table.setPollData(table, array);
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
        title: "Historical Orders <span class='text-muted'>(30 days)</span>",
        containerID: "orders",
        columns: getOrderColumns(),
        // dom: 't',
        order: [[2, "desc"]]
    });
}

function setOrdersTableData(table, accountIds) {
    window.ts.account.getHistoricalOrders(accountIds, getDateNDaysAgo(30)).then(array => {
        // window.ts.account.configBalances(array)
        table.setPollData(table, array);
    }).catch(error => {
        console.log("[ERROR] setOrdersTableData", error);
        setTimeout(() => {
            setOrdersTableData(table, accountIds);
        }, 1000);
    });
}

$(() => {
    if (window.ts.token) {
        initHome();
    } else {
        setTimeout(() => {
            initHome();
        }, 1000);
    }
});

function initHome() {
    $("#spinner").show();
    $("#contentContainer").hide();
    // $("#nav").hide();
    setTimeout(()=>{
        $("#spinner").fadeOut();
        $("#contentContainer").fadeIn();
        setColumnWidths(.5, .5);
        initAccountInfo();
        new PositionsTable("position", true);
        uiBindings();

        window.p.getMarketStatus().then(array => {
            console.log(typeof array, array);
        }).catch(error => {
            console.log("[ERROR] getMarketStatus", error);
            // setTimeout(() => {
            //     setAccountsTableData(table, accountIds);
            // }, 1000);
        });

    }, 2000);


    window.addEventListener('resize', () => {
        setColumnWidths();
    });
}


function uiBindings(chartCls){
    $("#leftcol").resizable({ 
        handles: 'e',
        // resize: function( e, ui ) {
        //     chartCls._resizeChart();
        // },
        // minWidth: 500,
    });
    $(".resize").append(getVerticalTabHTML());
    $(".sortable").sortable({
        start: function( e, ui ) {
            var _id = e.target.id;
            $(`#${_id} > div`).addClass('border');
        },
        stop: function(e, ui) {
            var _id = e.target.id;
            $(`#${_id} > div`).removeClass('border');
        }
    });
    $(".sortable").children('div').each(function() {
        if (!$(this).hasClass('tab')){
            $(this).append(getHorizontalTabHTML());
        }
      });
   
    $(".tab").css({'cursor': 'all-scroll'});
}
