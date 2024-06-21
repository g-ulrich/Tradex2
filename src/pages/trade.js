import { $} from './common/core';
import "./css/bootstrap-discord.min.css";
import {Chart} from "../charts/chartClass";
import {Data} from "../charts/customAPIBindings/getData";
import {getRandomAlphaNum, formatCurrency} from "../util";
import { get_table_positions_columns } from '../datatables/myColumns/positions';
import { SimpleTableData } from '../datatables/simple';
import { PositionsTable } from '../datatables/positionsTableClass';

class OrderForm{
    constructor(containerId){
        this.containerId = containerId;
        this.orderBtnId = `${this.containerId}_${getRandomAlphaNum(5)}`;
        this.shares = 10;
        this.type = "Market";
        this.price = null;
        this.lastQuote = null;
        this._setForm();
        this.updateType(this.type);
        this.updateBuyButton();
        this.updateSellButton();
        this.updateOrderSummary(`Order ${this.shares} shares at market price.`);
        this._bindSharesInput();
    }

    updateType(txt){
        this.type = txt;
        $(".orderFormType").empty();
        $(".orderFormType").append(`Type: <span class="text-white">${this.type}</span>`);
    }

 
    _buttonReset(action){
        this.updateType("Limit");
        setTimeout(()=>{
            this.updateType("Market");
            $(`#${this.orderBtnId}_${action}`).text(`${action} ${this.shares} @ Mkt`);
        },8000);
    }

    updateBuyButton(price){
        if (price) {
            this.price = parseFloat(price.toFixed(3));
            $(`#${this.orderBtnId}_buy`).text(`Buy ${this.shares} @ ${this.price}`);
            var total = this.shares * this.price;
            this.updateOrderSummary(`
            Buy ${this.shares} shares at ${formatCurrency(price.toFixed(3))}.
            <br/>For an estimated total of ${formatCurrency(total.toFixed(2))}
            `);
            this._buttonReset("Limit", "buy");
        } else {
            this.price = null;
            $(`#${this.orderBtnId}_buy`).text(`Buy ${this.shares} @ Mkt`);
        }
    }

    updateSellButton(price){
        if (price) {
            this.price = parseFloat(price.toFixed(3));
            $(`#${this.orderBtnId}_sell`).text(`Sell ${this.shares} @ ${this.price}`);
            this._buttonReset("sell");
        } else {
            this.price = null;
            $(`#${this.orderBtnId}_sell`).text(`Sell ${this.shares} @ Mkt`);
        }
    }

    _getQuoteColor(quote, key){
        var color = "muted";
        if (this.lastQuote !== null){
            var _new = parseFloat(quote[key]);
            var _old = parseFloat(this.lastQuote[key]);
            color = _new > _old ? 'success' : _new < _old ? 'primary' : color;
            $(`.bg${key}`).addClass('bg-primary');
        }else{
        }
        return `text-${color}`;
    }

    _bgQuote(quote, key){
        if (this.lastQuote !== null){
            var _new = parseFloat(quote[key]);
            var _old = parseFloat(this.lastQuote[key]);
            if (_new !== _old ) {
                $(`.bg${key}`).css({'background-color': 'rgba(255,255,255,0.1)'});
            }
        }else{
            $(`.bg${key}`).css({'background-color': 'rgba(255,255,255,0.0)'});
        }
    }

    _elementQuoteUpdates(quote){
        $('.orderFormAsk').empty();
        $('.orderFormBid').empty();
        $('.orderFormAsk').append(`<span class="bgAsk rounded px-1">Ask: 
            <span class="${this._getQuoteColor(quote, 'Ask')}">${quote?.Ask}</span></span>
            <br/><span class="bgAskSize rounded px-1">Size: 
            <span class="${this._getQuoteColor(quote, 'AskSize')}">${quote?.AskSize}</span></span>`);
        $('.orderFormBid').append(`<span class="bgBid rounded px-1">Bid: 
            <span class="${this._getQuoteColor(quote, 'Bid')}">${quote?.Bid}</span></span>
            <br/><span class="bgBidSize rounded px-1">Size: 
            <span class="${this._getQuoteColor(quote, 'BidSize')}">${quote?.BidSize}</span></span>`);
        this._bgQuote(quote, 'Ask');
        this._bgQuote(quote, 'AskSize');
        this._bgQuote(quote, 'Bid');
        this._bgQuote(quote, 'BidSize');
        }

    updateQuote(quote){
        this._elementQuoteUpdates(quote);
        this.lastQuote = quote;
        /**
         * Ask: "138.19"
AskSize: "300"
Bid: "138.16"
BidSize: "100"
Close: "138.1687"
DailyOpenInterest: "0"
High: "140.75999"
High52Week: "136.33"
High52WeekTimestamp: "2024-06-18T00:00:00Z"
Last: "138.1687"
LastSize: "1050"
LastVenue: "TRF"
Low: "136.13"
Low52Week: "39.23001"
Low52WeekTimestamp: "2023-10-31T00:00:00Z"
MarketFlags: {IsDelayed: false, IsHardToBorrow: false, IsBats: false, IsHalted: false}
NetChange: "2.5887"
NetChangePct: "0.0191"
Open: "139.8"
PreviousClose: "135.58"
PreviousVolume: "294335054"
Symbol: "NVDA"
TickSizeTier: "0"
TradeTime: "2024-06-20T15:44:32Z"
VWAP: "138.954417998483"
Volume: "199978526"
         */
    }

    updateOrderSummary(msg){
        $(".orderSummary").empty();
        $(".orderSummary").append(msg);
    }

    updateShareSize(){
        var newVal = $('.orderFormShares').val();
        this.shares = parseInt(newVal);
        this.updateSellButton();
        this.updateBuyButton();
        this.updateOrderSummary(`Order ${this.shares} shares at market price.`);
    }

    _bindSharesInput(){
        $(".orderFormShares").on('change', ()=>{
            this.updateShareSize();
        });
    }

    _setForm(){
        $(`#${this.containerId}`).append(`
           <div class="container-fluid px-2">
                <div class="row">
                    <div class="orderFormSymbolName col-12 px-1 h5 text-center"></div>
                    <div class="text-center col-6 text-muted">Shares:
                    <input 
                        class="orderFormShares text-center p-1 text-white  rounded font-weight-bold" 
                        value="${this.shares}" 
                        placeholder="shares" 
                        type="number" 
                        style="width: 70px;font-weight: 700;outline: 0;background-color:rgba(255,255,255,0.05);border:0px;"></div>
                    <div class="orderFormType text-center col-6 py-1 text-muted">Type: <span class="text-white">${this.type}</span></div>
                    <div class="col-12 my-1"></div>
                    <div class="col-6 px-1">
                        <button style="font-size: 30px;height:100px;"  id="${this.orderBtnId}_buy" class="w-100 text-white btn btn-sm btn-success">
                            Buy ${this.shares} @ mkt
                        </button>
                    </div>
                    
                    <div class="col-6 px-1">
                        <button style="font-size: 30px;height:100px" id="${this.orderBtnId}_sell" class="w-100 text-white btn btn-sm btn-primary">
                            Sell ${this.shares} @ mkt
                        </button>
                    </div>
                    <div class="col-12 my-1"></div>
                    
                    <div class="orderFormAsk col-6 px-1 text-center text-muted"></div>
                    <div class="orderFormBid col-6 px-1 text-center text-muted"></div>
                    
                    <div class="col-12 px-1 my-1 text-muted">
                        <div style="background-color:rgba(255,255,255,0.1)" class="col-12 text-center orderSummary rounded px-1 py-1"></div>
                    </div>
                </div>
           </div>
        `);
    }

}



function initAccountInfo() {
    window.ts.account.getAccounts().then(accounts => {
        const accountIds = accounts.map(item => item["AccountID"]);
        // initAccountsTableIntervals(
        //     setPositionsTableData,
        //     initPositionsTable(),
        //     accountIds, 10000);
        // window.ts.account.streamPositions("_", accountIds);
        setPositionsTableData(null, accountIds);
    }).catch(error => {
        console.log("[ERROR] initAccountInfo", error);
        setTimeout(() => {
            initAccountInfo();
        }, 1000);
    });
}

// function initPositionsTable() {
//     return new SimpleTableData({
//         title: "Positions",
//         containerID: "positions",
//         columns: get_table_positions_columns(),
//         dom: 't',
//     });
// }

function setPositionsTableData(table, accountIds) {
    window.ts.account.getPositions(accountIds).then(array => {
        // table.setData(table, array);
        // setTimeout(()=>{
        // window.ts.symbol._setSymbolDataToPositions(array);
        // }, 500);
        window.ts.account.streamPositions(array, "_", accountIds);
    }).catch(error => {
        console.log("[ERROR] setPositionsTableData", error);
        setTimeout(() => {
            setPositionsTableData(table, accountIds);
        }, 1000);
    });
}

// function initAccountsTableIntervals(mainfunc, table, accountIds, intervalSeconds) {
//     mainfunc(table, accountIds);
//     setInterval(() => {
//         mainfunc(table, accountIds);
//     }, intervalSeconds);
// }



$(()=>{
    $("#nav_links").hide();
    var orderForm = new OrderForm("orders");
    var chart = new Chart("tradeChart", orderForm);
    chart.addCandlestickSeries("bars");
    chart.addHistogramSeries("vol");
    const data = new Data(chart);
    data.startBarStream(chart.header.symbol, chart.header.params);
    data.startQuoteStream(chart.header.symbol);
    new PositionsTable("positions");

});