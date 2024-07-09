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
        this.interval = null;
        this.setData();
        this.addSymbolInput();
    }

    setData(){
        setNews(this.table, this.symbol);
        this.interval = setInterval(()=>{
            setNews(this.table, this.symbol);
        }, 60*1000);
    }

    reload(){
        clearInterval(this.interval);
        this.setData();
        this.table.updateTitle(this.symbol + " News");
    }

    addSymbolInput(){
        var $id = $(`#${this.containerId}_title h4`);
        $id.append(`
            <input 
            class="text-uppercase p-1 rounded text-white font-weight-bold" 
            value="" 
            placeholder="Symbol" 
            type="search" 
            style="font-size: 1rem;width: 100px;font-weight: 700;outline: 0;background-color:rgba(255,255,255,0.05);border:0px;">
            <button class="btn btn-sm btn-primary rounded px-2 py-1">
                <i class="fa-solid fa-magnifying-glass fa-rotate-90"></i>
            </button>
        `);

        this._addSymbolInputBindings();
    }

    _addSymbolInputBindings($id){
        var id = `${this.containerId}_title h4`;
        $(`#${id}`).on('keypress', 'input', (event) => {
            if (event.which == 13) {
                var symbol = event.target.value;
                if (symbol.trim() != "") {
                    this.symbol = symbol.toUpperCase();
                    this.reload();
                }
            }
        });
        $(`#${id}`).on('click', 'button', ()=>{
            // todo get all parameters in a function
            var symbol = $(`#${id} input`).val();
            if (symbol.trim() != "") {
                this.symbol = symbol.toUpperCase();
                this.reload();
            }
        });
    }

}