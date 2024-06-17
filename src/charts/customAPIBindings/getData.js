export function setMarketDataBarsAndStream(chart, symbol, params){
    var params = params ? params : {
        interval : '5',
        unit : 'Minute',
        barsback : '100',
        sessiontemplate : 'Default'
      };
    setTimeout(()=>{
        window.ts.marketData.streamBars(chart, "testing", symbol, params);
    }, 5000);
    // const self = this;
    window.ts.marketData.getBars(symbol, params).then(bars => {
        var candles = window.ts.marketData.bars2Candles(bars)
        chart.setBars(candles);
    }).catch(error => {
        console.log("[ERROR] setAndPollCandles " + error);
        setTimeout(() => {
            console.log("[INFO] _pollMarketDataGetBars trying again...");
            _pollMarketDataGetBars(chart, symbol);
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

}