// const reports = await secEdgarApi.getReports({ symbol: 'AAPL' })
import { getNewsColumns } from './myColumns/polygonNewsColumns';
import {SimpleTableData} from './simple'
import $ from 'jquery';

function setNews(tableCls, symbol) {
    window.p.getNews(symbol).then(array => {
        tableCls.setPollData(tableCls, array);
    }).catch(error => {
        console.log("[ERROR] setNews", error);
        setTimeout(() => {
            setNews();
        }, 1000);
    });
}


export class NewsTable{
    constructor(containerId, symbol){
        this.containerId = containerId;
        this.symbol = symbol;
        this.table = new SimpleTableData({
            title: `${symbol? symbol + ' ':''}News`,
            containerID: this.containerId,
            columns: getNewsColumns(),
            dom: 't',
        });
        setNews(this.table, this.symbol);
        setInterval(()=>{
            setNews(this.table, this.symbol);
        }, 60*1000);
    }

}