import { $} from './common/core';
import "./css/bootstrap-discord.min.css";
import {Chart} from "../charts/chartClass";
import {Data} from "../charts/customAPIBindings/getData";
import {getRandomAlphaNum} from "../util";


class OrderForm{
    constructor(containerId){
        this.containerId = containerId;
        this.orderBtnId = `${this.containerId}_${getRandomAlphaNum(5)}`;
        this.shares = 10;
        this.type = "Market";
        this.price = null;
        this._setForm();
        this.updateBuyButton();
        this.updateSellButton();
    }

 

    updateBuyButton(price){
        console.log(price);
        if (price) {
            this.price = parseFloat(price.toFixed(3));
            $(`#${this.orderBtnId}_buy`).text(`Buy ${this.shares} @ ${this.price}`);
        } else {
            this.price = null;
            $(`#${this.orderBtnId}_buy`).text(`Buy ${this.shares} @ Mkt`);
        }
    }

    updateSellButton(price){
        if (price) {
            this.price = parseFloat(price.toFixed(3));
            $(`#${this.orderBtnId}_sell`).text(`Sell ${this.shares} @ ${this.price}`);
        } else {
            this.price = null;
            $(`#${this.orderBtnId}_sell`).text(`Sell ${this.shares} @ Mkt`);
        }
       
    }


    _setForm(){
        $(`#${this.containerId}`).append(`
           <div class="container-fluid px-2">
                <div class="row">
                    <div class="orderFormSymbolName col-12 px-1 h5 text-center"></div>
                    <div class="col-6 px-1 text-center text-muted">
                        Ask: 0.00
                    </div>
                    <div class="col-6 px-1 text-center text-muted">
                        Bid: 0.00
                    </div>
                    <div class="col-6 px-1">
                        <button id="${this.orderBtnId}_buy" class="w-100 text-white btn btn-sm btn-success">
                            Buy 10 @ mkt
                        </button>
                    </div>
                    
                    <div class="col-6 px-1">
                        <button id="${this.orderBtnId}_sell" class="w-100 text-white btn btn-sm btn-primary">
                            Sell 10 @ mkt
                        </button>
                    </div>
                </div>
           </div>
        `);
    }

}


$(()=>{
    $("#nav_links").hide();
    var orderForm = new OrderForm("orders");
    var chart = new Chart("tradeChart", orderForm);
    chart.addCandlestickSeries("bars");
    chart.addHistogramSeries("vol");
    const data = new Data(chart);
    data.startBarStream(chart.header.symbol, chart.header.params);
  
});