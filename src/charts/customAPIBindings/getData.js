
export function setMarketDataQuotesAndStream(chart, symbol){
    window.ts.marketData.getQuoteSnapshots(symbol).then(quote => {
        chart.setQuote(quote[0]);
        window.ts.marketData.streamQuotes(chart, "quotes", symbol);
    }).catch(error => {
        console.log("[ERROR] setMarketDataQuotesAndStream " + error);
        setTimeout(() => {
            console.log("[INFO] setMarketDataQuotesAndStream trying again...");
            setMarketDataQuotesAndStream(chart, symbol);
        }, 1000);
    });
}


export function setMarketDataBarsAndStream(chart, symbol, params){
    var params = params ? params : {
        interval : '5',
        unit : 'Minute',
        barsback : '100',
        sessiontemplate : 'Default'
      };
    window.ts.marketData.getBars(symbol, params).then(bars => {
        var candles = window.ts.marketData.bars2Candles(bars)
        chart.setBars(candles);
        window.ts.marketData.streamBars(chart, "testing", symbol, params);
    }).catch(error => {
        console.log("[ERROR] setMarketDataBarsAndStream " + error);
        setTimeout(() => {
            console.log("[INFO] setMarketDataBarsAndStream trying again...");
            setMarketDataBarsAndStream(chart, symbol, params);
        }, 1000);
    });
}   


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
        window.ts.account.streamPositions(tableCls, array, "_", accountIds);
    }).catch(error => {
        console.log("[ERROR] setPositionsTableData", error);
        setTimeout(() => {
            setPositionsTableData(table, accountIds);
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