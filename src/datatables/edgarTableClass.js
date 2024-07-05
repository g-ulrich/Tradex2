// const reports = await secEdgarApi.getReports({ symbol: 'AAPL' })
import { get_table_edgar_columns } from './myColumns/edgarReport';
import {SimpleTableData} from './simple'
import { secEdgarApi } from 'sec-edgar-api';
import $ from 'jquery';


function getEdgarReports(tableCls, symbol) {
    secEdgarApi.getReports({ symbol: symbol }).then(reports => {
        var r = reports.slice(-5);
        tableCls.setPollData(tableCls, r);
    }).catch(error => {
        console.log("[ERROR] getEdgarReports", error);
        setTimeout(() => {
            getEdgarReports(tableCls, symbol);
        }, 1000);
    });
}


export class EdgarTable{
    constructor(containerId, symbol){
        this.containerId = containerId;
        this.symbol = symbol;
        this.table = new SimpleTableData({
            title: `${this.symbol} SEC Reports`,
            containerID: this.containerId,
            columns: get_table_edgar_columns(),
            dom: 't',
        });
        getEdgarReports(this.table, this.symbol);
    }

}