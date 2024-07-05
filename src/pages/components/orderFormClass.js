import $ from 'jquery';
import {getRandomAlphaNum, formatCurrency} from '../../util';
import {setMarketDataQuotesAndStream} from '../../charts/customAPIBindings/getData';

export default class OrderForm{
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
            this._buttonReset("buy");
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
        /*
        orderFormBid
        orderFormAsk
        orderFormLast
        */
    //     <div class="orderFormBid progress-bar bg-success text-end px-1" role="progressbar" 
    //     style="width: 30%" 
    //     aria-valuenow="30" 
    //     aria-valuemin="0" 
    //     aria-valuemax="100">
    //  121.67 Bid
    // </div>
        var aP = 0;
        var bP = 0;
        var bSize = parseInt(quote?.BidSize);
        var aSize = parseInt(quote?.AskSize);
        if (aSize > bSize){
            bP = parseInt((bSize/aSize)*100);
            aP = 100 - bP;
        }else {
            aP = parseInt((aSize/bSize)*100);
            bP = 100-aP;
        }

        $(".orderFormBid").css('width', `${bP}%`);
        $(".orderFormBid").attr('aria-valuenow', `${bP}`);
        $(".orderFormBid").text(`${formatCurrency(quote?.Bid)} Bid`);

        $(".orderFormAsk").css('width', `${aP}%`);
        $(".orderFormAsk").attr('aria-valuenow', `${aP}`);
        $(".orderFormAsk").text(`Ask ${formatCurrency(quote?.Ask)}`);
        // $('.orderFormAsk').empty();
        // $('.orderFormBid').empty();
        // $('.orderFormAsk').append(`<span class="bgAsk rounded px-1">Ask: 
        //     <span class="${this._getQuoteColor(quote, 'Ask')}">${quote?.Ask}</span></span>
        //     <br/><span class="bgAskSize rounded px-1">Size: 
        //     <span class="${this._getQuoteColor(quote, 'AskSize')}">${quote?.AskSize}</span></span>`);
        // $('.orderFormBid').append(`<span class="bgBid rounded px-1">Bid: 
        //     <span class="${this._getQuoteColor(quote, 'Bid')}">${quote?.Bid}</span></span>
        //     <br/><span class="bgBidSize rounded px-1">Size: 
        //     <span class="${this._getQuoteColor(quote, 'BidSize')}">${quote?.BidSize}</span></span>`);
        // this._bgQuote(quote, 'Ask');
        // this._bgQuote(quote, 'AskSize');
        // this._bgQuote(quote, 'Bid');
        // this._bgQuote(quote, 'BidSize');
        }

    startQuoteStream(symbol){
        window.ts.symbol._setFullSymbolName(symbol);
        setMarketDataQuotesAndStream(this, symbol);
    }

    setQuote(quote){
        this.lastQuote = quote;
    }

    setStreamQuote(quote){
        let merged = { };
        Object.keys(this.lastQuote).forEach(key => {
            if (quote[key] !== undefined) {
                merged[key] = quote[key]; 
            }else{
                merged[key] = this.lastQuote[key];
            }
        });
        this._elementQuoteUpdates(merged);
        this.lastQuote = merged;
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
                    <div class="fullSymbolName col-12 px-1 h5 text-center"></div>
                    <div class="text-center col-6 text-muted">Shares:
                    <input 
                        class="orderFormShares text-center p-1 text-white  rounded font-weight-bold" 
                        value="${this.shares}" 
                        placeholder="shares" 
                        type="number" 
                        style="width: 70px;font-weight: 700;outline: 0;background-color:rgba(255,255,255,0.05);border:0px;"></div>
                    <div class="orderFormType text-center col-6 py-1 text-muted">Type: <span class="text-white">${this.type}</span></div>
                    <div class="col-12 my-1"></div>
                    
                    <div class="col-12 my-1 px-1">
                    
                        <div class="progress bg-dark">
      
                            <div class="orderFormAsk progress-bar text-success bg-glass px-1" role="progressbar" 
                            style="width: 69%" 
                            aria-valuenow="70" 
                            aria-valuemin="0" 
                            aria-valuemax="100">
                                Ask 121.69
                            </div>
                            
                            
                            <div class="orderFormBid progress-bar text-primary bg-glass px-1" role="progressbar" 
                                style="width: 30%" 
                                aria-valuenow="30" 
                                aria-valuemin="0" 
                                aria-valuemax="100">
                             121.67 Bid
                            </div>

                        </div>
                    
                    </div>
                    
                    
                    <div class="col-12 px-1 my-1 text-muted">
                        <div style="background-color:rgba(255,255,255,0.1)" class="col-12 text-center orderSummary rounded px-1 py-1"></div>
                    </div>

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
                </div>
           </div>
        `);

        // <div class="orderFormAsk col-6 px-1 text-center text-muted"></div>
                    // <div class="orderFormBid col-6 px-1 text-center text-muted"></div>
                    
    }

}