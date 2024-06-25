import { get_table_positions_columns } from './myColumns/positions';
import {SimpleTableData} from './simple'
import $ from 'jquery';

function initAccountInfo(tableCls) {
    window.ts.account.getAccounts().then(accounts => {
        const accountIds = accounts.map(item => item["AccountID"]);
        setPositionsTableData(tableCls, accountIds);
    }).catch(error => {
        console.log("[ERROR] initAccountInfo", error);
        setTimeout(() => {
            initAccountInfo();
        }, 1000);
    });
}

function setPositionsTableData(tableCls, accountIds) {
    window.ts.account.getPositions(accountIds).then(array => {
        tableCls.setPollData(tableCls, array);
        window.ts.account.streamPositions(tableCls, array, "_", accountIds);
    }).catch(error => {
        console.log("[ERROR] setPositionsTableData", error);
        setTimeout(() => {
            setPositionsTableData(table, accountIds);
        }, 1000);
    });
}


export class PositionsTable{
    constructor(containerId, changeBindTarget){
        this.containerId = containerId;
        this.target = changeBindTarget;
        this.table = new SimpleTableData({
            title: "Positions",
            containerID: this.containerId,
            columns: get_table_positions_columns(),
            dom: 't',
        });
        initAccountInfo(this.table);
        this._bindings();

    }

    _bindings(){
        const self = this;
        $(document).on('click', '.tradeSymbol', function() {
            const urlparams = new URLSearchParams({
                symbol: $(this).attr('data-symbol'),
                chartType: "",
                interval: "",
                unit: "",
                barsback: "",
                sessiontemplate: ""
              }).toString();
              if (self.target){
                window.open(`trade.html?${urlparams}`, '_blank');

              }else{
                window.location.href = `trade.html?${urlparams}`;
              }
        });
    }
}