import $ from 'jquery';
import { createChart, CrosshairMode } from "lightweight-charts";
import {CHART_THEMES} from '../charts/options';
import { sortJsonArrayByKey, getRandomAlphaNum, maxJsonArrayVal, minJsonArrayVal, sessionHighlighter} from '../util';
import Legend from './chartLegendClass';
import Header from './chartHeaderClass';
import {setMarketDataBarsAndStream, setMarketDataQuotesAndStream, prependMarketDataBars} from '../charts/customAPIBindings/getData';
import { SessionHighlighting } from './plugins/session-highlighting/session-highlighting';

export default class Chart{
    constructor(containerId, orderForm){
        this.orderForm = orderForm;
        this.containerId = containerId;
        this.header = new Header(this.containerId);
        this.chart = createChart(this.containerId, {...CHART_THEMES.defaultChart});
        this._setResizeListener();
        this._setCrosshairListener();
        this._setClickListener();
        this.lastRange = null;
        this.loadingNewRangeData = false;
        this._setRangeListener();
        this.legend = new Legend(this.containerId, this.header);
        this.lastBar = {};
        this.lastQuote = null;
        this.allBars = [];
        this.series = {};
        this.pl = 0;
        this.color = {
            success: "#0b9657",
            primary: "#7289da",
            secondary: "#99aab5"
        };
        this.lastPriceClicked = null;   
        this.setWatermark(`${this.header.symbol}:${this.header.getIntervalName()}`);


//         const container = document.getElementById(this.containerId);
// const background = document.createElement('div');
// // place below the chart
// background.style.zIndex = -1;
// background.style.position = 'absolute';
// // set size and position to match container
// background.style.inset = '0px';
// background.style.backgroundImage = `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOTIiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMjkyIDEyOCI++PC9zdmc+")`;
// background.style.backgroundRepeat = 'no-repeat';
// background.style.backgroundPosition = 'center';
// background.style.opacity = '0.5';
// container.appendChild(background);



        this.addCandlestickSeries("bars");
        this.addHistogramSeries("vol");
        setMarketDataBarsAndStream(this, this.header.symbol, this.header.params);
        this._startQuoteStream();
        const self = this;
        setInterval(()=>{self.setHighLowMarkers()}, 5000);
    }

    _chartHeight(){
        return $(`#${this.containerId}`).height();//parseInt(window.innerHeight * .8);//this.height;
    }

    info(msg){
        console.log(`[INFO] ChartClass: ${msg}`);
    }

    error(msg){
        console.log(`[error] ChartClass: ${msg}`);
    }


    _setClickListener(){
        // left clikc buy

        this.chart.subscribeClick((e)=>{
            var price = this.series['bars'].obj.coordinateToPrice(e.point.y);
            this.orderForm.updateBuyButton(price);
            this.orderForm.updateSellButton(price);
            this.lastPriceClicked = price;
            // this.addPriceLine("buy", price);
        });
    }

    _setRangeListener(){
        setTimeout(()=>{
            this.chart.timeScale().subscribeVisibleTimeRangeChange(
                (range) =>{
                    if (this.lastRange !== null && this.allBars.length > 0){
                        var needData = range.from == this.lastRange.from && this.allBars[0].time == range.from  ? true : false;
                        if (needData && !this.loadingNewRangeData){
                            this.loadingNewRangeData = true;
                            prependMarketDataBars(this, this.header.params);
                            setTimeout(()=>{
                                this.loadingNewRangeData = false;
                            }, 5000);
                            // .then(newData => {
                            //     // Prepend new data to the existing series
                            //     // lineSeries.setData([ ...newData, ...lineSeries.data() ]);
                            // });
                            console.log(needData, this.lastRange, range);
                        }
                    }
                    this.lastRange = range;
                });
        }, 2000);
    }
  
    _setCrosshairListener(){
        this.chart.subscribeCrosshairMove(e => {
            if (e.time !== undefined){
                var series = [];
                e.seriesData.forEach((value, key) => {
                    series.push({...value, title: key._internal__series._private__options.title});
                });
                this.legend.update(this.series, series);
            }
        });
    }

    _resizeChart(w, h){
        const $container = $(`#${this.containerId}`);
        var hid = $(`#${this.header.headerId}`).height();
        var w = w ? w : $container.width();
        var h = h ? h :$container.height() -hid;
        this.chart.resize(w, h);
        return {width: w, height: h};
    }

  
    _setResizeListener(){ 
        this.chart.applyOptions(this._resizeChart());
        window.addEventListener("resize", ()=>{
            this._resizeChart();
        });
    }

    _getCandleBarSeriesOption(seriesObj, title){
        var success = "#0b9657";
        var primary = "#7289da";
        var secondary = "#99aab5";
        seriesObj.applyOptions({
            title: title,
            //bar
            thinBars: false,
            // line
            color: success,
            // area
            topColor: success,
            bottomColor: primary,
            lineColor: success,
            lineWidth: '.5',
            // candle
            upColor: success,
            downColor: primary,
            borderDownColor: primary,
            borderUpColor: success,
            wickDownColor: secondary,
            wickUpColor: secondary,
            // markers: []
          });
        return seriesObj;
    }

    addCandlestickSeries(name){
        // This method name is not indicative of the series type that will represent that bar data.
        let candles;
        if (this.header.chartType == 'column'){
            candles = this.chart.addCandlestickSeries();
        } else if (this.header.chartType == 'area') {
            candles = this.chart.addAreaSeries();
        } else if (this.header.chartType == 'line') { 
            candles = this.chart.addLineSeries();
        }  else if (this.header.chartType == 'gantt') {
            candles = this.chart.addBarSeries();
        } else {
            candles = this.chart.addCandlestickSeries();
        }
        candles = this._getCandleBarSeriesOption(candles, name);
        this.series[name] = {
            id: this.series.length,
            name: name,
            obj: candles
        }
    }

    _getHistogramVolumeOption(seriesObj, title){
        seriesObj.applyOptions({priceFormat: { type: 'volume' }, 
            title: title,
            overlay: true, 
            priceScaleId: 'volume_scale'});
        seriesObj.priceScale().applyOptions({
            scaleMargins: { top: 0.8, bottom: 0 },
          });
        return seriesObj;
    }
    addHistogramSeries(name){
        var histogram = this.chart.addHistogramSeries();
        if (name.toLowerCase() == "vol" || name.toLowerCase() == "volume"){
            histogram = this._getHistogramVolumeOption(histogram, name);
        }
        this.series[name] = {
            id: this.series.length,
            name: name,
            obj: histogram
        }
    }

  

    addPriceLine(name, price){
        var success = "#0b9657";
        var primary = "#7289da";
        var params = {
            color: name.toLowerCase() === 'buy' ? success : primary,
            lineWidth: 2,
            lastValueVisible: true,
            priceLineVisible: true,
            price: price,
            lineStyle: 2, // LineStyle.Dashed
            axisLabelVisible: true,
            title: name,};
        // var params = {	 
        //     price: price,
        //     color: "red",
        //     lineWidth: 1,
        //     axisLabelVisible: true,
        // }
        var barSeries = this.series['bars'].obj;
        var series = barSeries.createPriceLine(params);
        var seriesName = `${name}_${getRandomAlphaNum(2)}`;
        this.series[seriesName] = {
            id: this.series.length,
            name: seriesName,
            obj: series
        }
    }

    setWatermark(text, fontSize, color, visible){
        this.chart.applyOptions({watermark: {
            text: text ? text : "",
            fontSize: fontSize ? fontSize : 60,
            color: color ? color : "rgba(256, 256, 256, 0.1)",
            visible: visible ? visible : true
          }});
    }

    _processNextBar(bar){
        bar.color = bar.close < bar.open ? 
        "rgba(114, 137, 218, .2)" // primary
        : "rgba(11, 150, 87, .2)" // success
        return bar;
    }

    _setVisibleRange(){
        this.chart.timeScale().setVisibleRange({
            from: this.allBars[this.allBars.length -25].time,
            to: this.allBars[this.allBars.length -1].time,
        });
    }

    _pushBar(bar){
        if (this.allBars.length > 1){
            var lastBar = this.allBars[this.allBars.length - 1];
            if (lastBar.time === bar.time) {
                this.allBars[this.allBars.length - 1] = bar;
            }else{
                this.allBars.push(bar);
            }
        }else{
            this.allBars.push(bar);
        }
    }

    _startQuoteStream(){
        setMarketDataQuotesAndStream(this, this.header.symbol)
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
        this.lastQuote = merged;
    }

    setBars(bars){
        bars.forEach((bar)=>{
            this._pushBar(bar);
            this.setNextBar(bar);
        });
        // this.setData(bars);
        this._setVisibleRange();
        this.setHighLowMarkers();
        this.setSessionHighlights();
    }

    setNextStreamBar(bar) {
        let mergedBar = { };
        Object.keys(bar).forEach(key => {
          if (!isNaN(bar[key]) && bar[key] !== this.lastBar[key]) {
            mergedBar[key] = bar[key];
          }else{
            mergedBar[key] = this.lastBar[key];
          }
        });
        this._pushBar(mergedBar);
        this.setNextBar(mergedBar);
      }

    // setData(bars){
    //     Object.keys(this.series).forEach(name => {
    //         var series = this.series[name];
    //         if (series?.obj && name == 'volume'){
    //             this.lastBar = bars[bars.length-1];
    //             series.obj.setData(bars);
    //         } else {
    //             this.lastBar = bars[bars.length-1];
    //             if (this.header.chartType == 'area' || this.header.chartType == 'line') {
    //                 newBar.value = newBar?.close;
    //             }
    //             series.obj.setData(bars);
    //         }
    //     });
    // }

    setNextBar(bar){
        var newBar = this._processNextBar(bar);
        Object.keys(this.series).forEach(name => {
            var series = this.series[name];
            if (series?.obj && name == 'volume'){
                this.lastBar = newBar;
                series.obj.update(newBar);
            } else {
                this.lastBar = newBar;
                if (this.header.chartType == 'area' || this.header.chartType == 'line') {
                    newBar.value = newBar?.close;
                }
                series.obj.update(newBar);
            }
        });
        
    } 

    setSessionHighlights(){
        var params = this.header.params;
        if (params?.sessiontemplate == 'USEQ24Hour' && params?.unit == "Minute"){
            var bars = this.allBars;
            if (bars.length > 1){
                var seriesObj = this.series['bars']?.obj;
                seriesObj.attachPrimitive(
                    new SessionHighlighting(sessionHighlighter)
                );
            }
        }
    }

    setMarkersForOrders(orders){
        // // TODO get legs
        // var orderHistory = [];
        // const legs = orderHistory.map((order)=>{
        //     try {
        //       return{...order,
        //         BuyOrSell: order.Legs[0]?.BuyOrSell,
        //         QuantityOrdered: order.Legs[0]?.QuantityOrdered
        //       }
        //     }catch (error) {
        //       console.error("insertcandles legs", error);
        //     }
        //   });
        // const markersArray = legs.map((order)=>{
        //     const setMarkerPos = (orderDT) => {
        //         const old_epoch = new Date(orderDT).getTime();
        //         const new_epoch = old_epoch + ((-5 * 60) * 60 * 1000); // utc to est
        //         return candles[findClosestEpochIndex(candles, new_epoch/1000)].time;
        //       }
        //     var time = setMarkerPos(typeof order?.ClosedDateTime === 'undefined' ? order?.OpenedDateTime : order?.ClosedDateTime);
        //     return { time: time,
        //       position: order?.BuyOrSell !== 'Buy' ? 'aboveBar' : 'belowBar',
        //       color: order?.BuyOrSell !== 'Buy' ? '#e91e63' :  '#2196F3',
        //       shape: order?.BuyOrSell !== 'Buy' ? 'arrowDown' : 'arrowUp',
        //       text: (order?.BuyOrSell !== 'Buy' ?
        //                order?.BuyOrSell : 'Buy') +
        //                 `${order?.Status !== 'FLL' ? ` (${order?.Status})` : ' (FLL)'}` +
        //                  ` ${order?.QuantityOrdered} @ `+
        //                   `$${parseFloat(order?.FilledPrice === '0' ?
        //                     order?.LimitPrice :
        //                     order?.FilledPrice).toFixed(2)}`}
        //     });

    }

    setHighLowMarkers(){
        try {
            var bars = this.allBars;
            if (bars.length > 1){
                var seriesObj = this.series['bars']?.obj;
                var maxBar = maxJsonArrayVal(bars, 'high');
                var minBar = minJsonArrayVal(bars, 'low');
                // High
                var high = {
                    id: 'high',
                    time: maxBar.time,
                    position: 'aboveBar',
                    color: this.color.secondary,
                    // shape: 'square',
                    size: .01,
                    text: `H @ ${maxBar.high.toFixed(2)}`,
                    // price: maxBar.high
                };
                // L0w
                var low = {
                    id: 'low',
                    time: minBar.time,
                    position: 'belowBar',
                    color: this.color.secondary,
                    // shape: 'square',
                    size: .01,
                    text: `L @ ${minBar.low.toFixed(2)}`,
                    // price: minBar.low
                };
                this.addMarkers(seriesObj, [low, high]);
            }
        } catch (error) {
            this.error(`setHighLowMarkers() - ${error}`);
        }
    }

    addMarkers(seriesObj, array){
        if (seriesObj){
            var sortedArray = sortJsonArrayByKey(array, 'time');
            seriesObj.setMarkers(sortedArray);
        }
    }
    
}