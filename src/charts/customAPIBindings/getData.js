import {getRandomAlphaNum} from '../../util';

export function setMarketDataQuotesAndStream(cls, symbol){
    window.ts.marketData.getQuoteSnapshots(symbol).then(quote => {
        cls.setQuote(quote[0]);
        window.ts.marketData.streamQuotes(cls, `q_${getRandomAlphaNum(5)}`, symbol);
    }).catch(error => {
        console.log("[ERROR] setMarketDataQuotesAndStream " + error);
        setTimeout(() => {
            console.log("[INFO] setMarketDataQuotesAndStream trying again...");
            setMarketDataQuotesAndStream(chart, symbol);
        }, 1000);
    });
}


export function setMarketDataBarsAndStream(cls, symbol, params){
    var params = params ? params : {
        interval : '5',
        unit : 'Minute',
        barsback : '100',
        sessiontemplate : 'Default'
      };
    window.ts.marketData.getBars(symbol, params).then(bars => {
        var candles = window.ts.marketData.bars2Candles(bars);
        cls.setBars(candles);
        window.ts.marketData.streamBars(cls, `c_${getRandomAlphaNum(10)}`, symbol, params);
    }).catch(error => {
        console.log("[ERROR] setMarketDataBarsAndStream " + error);
        setTimeout(() => {
            console.log("[INFO] setMarketDataBarsAndStream trying again...");
            setMarketDataBarsAndStream(cls, symbol, params);
        }, 1000);
    });
}   

export class Data{
    constructor(chartClass){
        this.chart = chartClass;
        this.symbol = "SPY";
        this.params = {
            interval : '5',
            unit : 'Minute',
            barsback : '100',
            sessiontemplate : 'Default'
          };
    }

    updateSymbol(symbol){
        this.symbol = symbol;
    }

    startBarStream(symbol, params){
        setMarketDataBarsAndStream(this.chart, symbol, params);
    }

    startQuoteStream(symbol){
        setMarketDataQuotesAndStream(this.chart, symbol)
    }

    startPositionsStream(tableCls){
        initAccountInfo(tableCls.table);
    }

}