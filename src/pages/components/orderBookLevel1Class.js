

import $ from 'jquery';
import {getRandomAlphaNum} from '../../util';
import {setMarketDataQuotesAndStream} from '../../charts/customAPIBindings/getData';

export default class OrderBookLevel1{
    constructor(containerId, symbol){
        this.containerId = containerId;
        this.symbol = symbol;
        this.lastQuote = null;
        this._setForm();
        this.startQuoteStream(symbol);
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
        // $(".orderFormBid").text(`${formatCurrency(quote?.Bid)} Bid`);
        $(".bidPrice").text(parseFloat(quote?.Bid).toFixed(2));
        $(".bidSize").text(quote?.BidSize);

        $(".orderFormAsk").css('width', `${aP}%`);
        $(".orderFormAsk").attr('aria-valuenow', `${aP}`);
        $(".askPrice").text(parseFloat(quote?.Ask).toFixed(2));
        $(".askSize").text(quote?.AskSize);

        $(".halted").addClass(quote?.MarketFlags.IsHalted ? 'text-danger' : 'text-muted'); 
        $(".halted").attr('title', quote?.MarketFlags.IsHalted ? 'Is halted' : 'Is not halted')
        $(".delayed").addClass(quote?.MarketFlags.IsDelayed ? 'text-danger' : 'text-muted'); 
        $(".delayed").attr('title', quote?.MarketFlags.IsDelayed ? 'Is delayed' : 'Is not delayed')

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

   
   

    _setForm(){
        $(`#${this.containerId}`).append(`
           <div class="container-fluid px-2">
                <div class="row">
                    
                    <div class="col-6 px-1 h4 m-0">Order Book - Level 1</div>
                    <div class="col-6 px-1 py-1 m-0 text-muted text-end">
                        <span class="halted">Halted</span>
                        <span class="delayed">Delayed</span>
                    </div>

                    <div class="col-12 px-1">
                    
                        <div class="progress bg-dark rounded-top" style="margin-top:.25rem;">
                            <div 
                                class="orderFormBid progress-bar text-primary bg-success" 
                                role="progressbar" 
                                style="width: 50%" 
                                aria-valuenow="50" 
                                aria-valuemin="0" 
                                aria-valuemax="100"></div>

                            <div 
                                class="orderFormAsk progress-bar text-success bg-primary" 
                                role="progressbar" 
                                style="width: 50%" 
                                aria-valuenow="50" 
                                aria-valuemin="0" 
                                aria-valuemax="100"></div>
                        </div>
                        
                    
                    </div>

                    <div class="col-6" style="padding-right: 0px;padding-left:.25rem;">
                        <div class="row m-0 p-1  bg-success-soft rounded-bottom-left">
                                <div class="col-4 p-0 text-success">Bid</div>
                                <div class="col-4 p-0 text-white text-center bidSize">0</div>
                                <div class="col-4 p-0 text-success text-end bidPrice">0.00</div>
                            </div>
                    </div>
                    <div class="col-6" style="padding-left: 0px;padding-right:.25rem;">
                            <div class="row m-0 p-1 bg-primary-soft rounded-bottom-right">
                                <div class="col-4 p-0 text-primary">Ask</div>
                                <div class="col-4 p-0 text-white text-center askSize">0</div>
                                <div class="col-4 p-0 text-primary text-end askPrice">0.00</div>
                            </div>
                    </div>
                    
                </div>
           </div>
        `);
          
    }

}