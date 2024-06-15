import { $ } from './common/core';
import "./css/bootstrap-discord.min.css";
import Chart from "../charts/chartClass";
// import {CHART_THEMES} from '../charts/options';

// import { createChart, CrosshairMode } from "lightweight-charts";

// const chart = createChart("tradeChart", {...CHART_THEMES.defaultChart,
//   watermark: {
//     text: "XYZ",
//     fontSize: 256,
//     color: "rgba(256, 256, 256, 0.1)",
//     visible: true
//   }
// });

// const candleSeries = chart.addCandlestickSeries();
// candleSeries.applyOptions({
//     upColor: "#0b9657",// success
//     downColor: "#7289da", // primary
//     borderDownColor: "#7289da", // primary
//     borderUpColor: "#0b9657", // success
//     wickDownColor: "#99aab5", // secondary
//     wickUpColor: "#99aab5" // secondary
//   });

// const volumeSeries = chart.addHistogramSeries(
//     {priceFormat: { type: 'volume' }, 
//     overlay: true, 
//     priceScaleId: 'volume_scale'});
// volumeSeries.priceScale().applyOptions({
//     scaleMargins: { top: 0.8, bottom: 0 },
//   });

// for (let i = 0; i < 150; i++) {
//   /**
//    * 1. get configuration ( start time, speed, tick_timeframe, symbol, candle timeframe)
//    * 2. get requested candles ( 100*tick_timeframe/timeframe )
//    * 3. update series using available data.
//    * 4. puase and start button ( default all things are stopped.)
//    * 5. date picker or using scroller change date..
//    * **/
//   const bar = nextBar();
//   candleSeries.update(bar);
//   volumeSeries.update(bar);
// }

// resize();

// setInterval(() => {
//   const bar = nextBar();
//   candleSeries.update(bar);
//   volumeSeries.update(bar);
// }, 3000);

// window.addEventListener("resize", resize, false);

// function resize() {
//   chart.applyOptions({ width: window.innerWidth, height: window.innerHeight });

//   setTimeout(() => chart.timeScale().fitContent(), 0);
// }
// function get_next_bars(start_ts) {}
// function nextBar() {
//   if (!nextBar.date) nextBar.date = new Date(2020, 0, 0);
//   if (!nextBar.bar) nextBar.bar = { open: 100, high: 104, low: 98, close: 103 };

//   nextBar.date.setDate(nextBar.date.getDate() + 1);
//   nextBar.bar.time = {
//     year: nextBar.date.getFullYear(),
//     month: nextBar.date.getMonth() + 1,
//     day: nextBar.date.getDate()
//   };

//   let old_price = nextBar.bar.close;
//   let volatility = 0.1;
//   let rnd = Math.random();
//   let change_percent = 2 * volatility * rnd;

//   if (change_percent > volatility) change_percent -= 2 * volatility;

//   let change_amount = old_price * change_percent;
//   nextBar.bar.open = nextBar.bar.close;
//   nextBar.bar.close = old_price + change_amount;
//   nextBar.bar.high =
//     Math.max(nextBar.bar.open, nextBar.bar.close) +
//     Math.abs(change_amount) * Math.random();
//   nextBar.bar.low =
//     Math.min(nextBar.bar.open, nextBar.bar.close) -
//     Math.abs(change_amount) * Math.random();
//   nextBar.bar.value = Math.random() * 100;
//   nextBar.bar.color =
//     nextBar.bar.close < nextBar.bar.open
//       ? "rgba(114, 137, 218, .2)" // primary
//       : "rgba(11, 150, 87, .2)"; // success

//   return nextBar.bar;
// }

function _pollMarketDataGetBars(chart, symbol, params){
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

$(()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const symbol = "SPY";//urlParams.get('symbol');

    var chart = new Chart("tradeChart");
    chart.addCandlestickSeries("bars");
    chart.addHistogramSeries("volume");
    // $("#symbol").text(symbol);
    chart.addSymbolInput();
    $(`#${chart.headerId} input`).val(symbol);
    chart.setWatermark(symbol);
    _pollMarketDataGetBars(chart, symbol);
});