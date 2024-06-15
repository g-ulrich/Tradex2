import $ from 'jquery';
import { createChart, CrosshairMode } from "lightweight-charts";
import {CHART_THEMES} from '../charts/options';
import { getRandomAlphaNum } from '../util';


export default class Chart{
    constructor(containerId){
        this.containerId = containerId;
        this.headerId = `${this.containerId}_${getRandomAlphaNum(20)}`
        this.chart = createChart(this.containerId, {...CHART_THEMES.defaultChart});
        this.height = 400;
        this._setResizeListener();
        this._setHeader();
        this.lastBar = {};
        this.series = {};
    }

    _updateChartHeight(n){
        this.height = n;
        this.chart.resize($(`#${this.containerId}`), this.height);
    }

    info(msg){
        console.log(`[INFO] ChartClass: ${msg}`);
    }

    error(msg){
        console.log(`[error] ChartClass: ${msg}`);
    }

    _setHeader(){
        $(`#${this.containerId}`).prepend(`
        <div id="${this.headerId}" class="w-100 pb-1">
        </div>
        `);
        $(`#${this.headerId}`).hide();
    }

    addSymbolInput(){
        const $container = $(`#${this.containerId}`);
        const $header = $(`#${this.headerId}`);
        $header.append(`
            <input 
            class="text-uppercase p-1 text-white font-weight-bold rounded" 
            value="" 
            placeholder="Symbol" 
            type="search" 
            style="width: 100px;font-weight: 700;outline: 0;background-color:rgba(255,255,255,0.05);border:0px;">
            <button class="btn btn-sm btn-primary mb-1 mr-2">
                <i class="fa-solid fa-magnifying-glass fa-rotate-90"></i>
            </button>
        `);
        $(`#${this.headerId} input`).on('keypress', function(event) {
            if (event.which == 13) {
                console.log(event.target);
                // todo get all parameters in a function
                var symbol = $(`#${this.headerId} input`).val().toUpperCase();
                if (symbol.trim() != "") {
                    console.log(symbol);
                }
            }
        });
        $(`#${this.headerId} button`).on('click', ()=>{
            // todo get all parameters in a function
            var symbol = $(`#${this.headerId} input`).val().toUpperCase();
            if (symbol.trim() != "") {
                console.log(symbol);
            }
        });
        this.chart.resize($container.width(), this.height);
        $header.fadeIn();
    }

    _setResizeListener(){
        const $container = $(`#${this.containerId}`);
        this.chart.applyOptions({ width: $container.width(), height: this.height });
        window.addEventListener("resize", ()=>{
            this.chart.resize($container.width(), this.height);
        });
    }

    _getCandleBarSeriesOption(seriesObj){
        seriesObj.applyOptions({
            upColor: "#0b9657",// success
            downColor: "#7289da", // primary
            borderDownColor: "#7289da", // primary
            borderUpColor: "#0b9657", // success
            wickDownColor: "#99aab5", // secondary
            wickUpColor: "#99aab5" // secondary
          });
        return seriesObj;
    }

    addCandlestickSeries(name){
        var candles = this.chart.addCandlestickSeries();
        candles = this._getCandleBarSeriesOption(candles);
        this.series[name] = {
            id: this.series.length,
            name: name,
            obj: candles
        }
    }

    _getHistogramVolumeOption(seriesObj){
        seriesObj.applyOptions({priceFormat: { type: 'volume' }, 
            overlay: true, 
            priceScaleId: 'volume_scale'});
        seriesObj.priceScale().applyOptions({
            scaleMargins: { top: 0.8, bottom: 0 },
          });
        return seriesObj;
    }
    addHistogramSeries(name){
        var histogram = this.chart.addHistogramSeries();
        if (name.toLowerCase() == "volume"){
            histogram = this._getHistogramVolumeOption(histogram);
        }
        this.series[name] = {
            id: this.series.length,
            name: name,
            obj: histogram
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
        return bar;
    }

    setBars(bars){
        bars.forEach((bar)=>{
            this.setNextBar(bar);
        });
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
        this.setNextBar(mergedBar);
      }

    setNextBar(bar){
        var newBar = this._processNextBar(bar);
        Object.keys(this.series).forEach(name => {
            var series = this.series[name];
            if (series?.obj){
                this.lastBar = newBar;
                series.obj.update(newBar);
            }
        });
    } 
    
}