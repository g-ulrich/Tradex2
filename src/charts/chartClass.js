import $ from 'jquery';
import { createChart, CrosshairMode } from "lightweight-charts";
import {CHART_THEMES} from '../charts/options';
import { getRandomAlphaNum, formatVolume } from '../util';

class Header{
    constructor(containerId){
        this.containerId = containerId;
        this.headerId = `${this.containerId}_${getRandomAlphaNum(20)}`;
        this.symbol = "";
        this.chartType = "";
        this.params = {};
        this.frequencyArray = [];
        this._setParamDefaults();
        this._setHeader();
        this.init();
    }

    _setParamDefaults(){
        this.symbol = "SPY";
        this.chartType = "column";
        this.params = {
            interval : '5',
            unit : 'Minute',
            barsback : '100',
            sessiontemplate : 'Default'
          };
        this.frequencyArray = [{interval: '5', name: '5m', unit: 'Minute'},
            {interval: '1', name: '1m', unit: 'Minute'},
            {interval: '10', name: '10m', unit: 'Minute'},
            {interval: '15', name: '15m', unit: 'Minute'},
            {interval: '30', name: '30m', unit: 'Minute'},
            {interval: '60', name: '1hr', unit: 'Minute'},
            {interval: '1', name: '1D', unit: 'Daily'},
            {interval: '1', name: '1W', unit: 'Weekly'},
            {interval: '1', name: '1M', unit: 'Monthly'},
          ];
        this._getParamsFromURL();
    }

    _processURLParams(paramCls, key){
        var param = paramCls.get(key);
        var isSymbolOrChartType = this[key] && this[key] !== "";
        return param !== null && param !== "" ? param : isSymbolOrChartType ? this[key] : this.params[key];
    }

    _getParamsFromURL(){
        const urlP = new URLSearchParams(window.location.search);
        this.symbol = this._processURLParams(urlP, 'symbol');
        this.chartType = this._processURLParams(urlP, 'chartType');
        this.params = {
            interval : this._processURLParams(urlP, 'interval'),
            unit : this._processURLParams(urlP, 'unit'),
            barsback : this._processURLParams(urlP, 'barsback'),
            sessiontemplate : this._processURLParams(urlP, 'sessiontemplate'),
          };
    }

    reloadPage(){
        const urlparams = new URLSearchParams({
            symbol: this.symbol,
            chartType: this.chartType,
            interval: this.params.interval,
            unit: this.params.unit,
            barsback: this.params.barsback,
            sessiontemplate: this.params.sessiontemplate,
        }).toString();
        window.location.href = `trade.html?${urlparams}`;
    }

    _setHeader(){
        $(`#${this.containerId}`).prepend(`
        <div id="${this.headerId}" class="w-100 pb-1">
        </div>
        `);
    }
    
    _addSymbolInputBindings(){
        $(`#${this.headerId} input`).on('keypress', (event) => {
            if (event.which == 13) {
                var symbol = event.target.value;
                if (symbol.trim() != "") {
                    this.symbol = symbol.toUpperCase();
                    this.reloadPage();
                }
            }
        });
        $(`#${this.headerId} button`).on('click', ()=>{
            // todo get all parameters in a function
            var symbol = $(`#${this.headerId} input`).val();
            if (symbol.trim() != "") {
                this.symbol = symbol.toUpperCase();
                this.reloadPage();
            }
        });
    }

    addSymbolInput(){
        $(`#${this.headerId}`).append(`
            <input 
            class="text-uppercase p-1 text-white font-weight-bold rounded" 
            value="${this.symbol}" 
            placeholder="Symbol" 
            type="search" 
            style="width: 100px;font-weight: 700;outline: 0;background-color:rgba(255,255,255,0.05);border:0px;">
            <button class="btn btn-sm btn-primary mb-1 mr-2">
                <i class="fa-solid fa-magnifying-glass fa-rotate-90"></i>
            </button>
        `);
        this._addSymbolInputBindings();
    }

    addChartTypes(){
        const chartTypeId = `chartType_${this.headerId}_${getRandomAlphaNum(10)}`;
        const selectId = `select_${this.headerId}_${getRandomAlphaNum(10)}`;
        $(`#${this.headerId}`).append(`
            <span id="${chartTypeId}"><i class="fa-solid fa-chart-${this.chartType}"></i></span>
            <select id="${selectId}"
                class="p-1 text-white font-weight-bold rounded"
                style="width: 100px;font-weight: 700;outline: 0;background-color:rgba(255,255,255,0.05);border:0px;"
                >
                <option ${this.chartType == 'column' ? 'selected' : ''}>column</option>
                <option ${this.chartType == 'line' ? 'selected' : ''}>line</option>
                <option ${this.chartType == 'gantt' ? 'selected' : ''}>gantt</option>
                <option ${this.chartType == 'area' ? 'selected' : ''}>area</option>
            </select>
        `);
        $(`#${selectId}`).on('change', () => {
            this.chartType = $(`#${selectId}`).val();
            $(`#${chartTypeId}`).empty();
            $(`#${chartTypeId}`).append(`<i class="fa-solid fa-chart-${this.chartType}"></i>`);
            this.reloadPage();
        });
    }

    getIntervalName(){
        return `${this.params.interval}${this.params.unit.substring(0, 1)}`;
    }
    addInterval(){
            const selectId = `select_${this.headerId}_${getRandomAlphaNum(10)}`;
            var optionsHtml = "";
            this.frequencyArray.forEach((obj)=>{
                optionsHtml += `<option data-unit="${obj?.unit}" data-interval="${obj?.interval}"
                ${this.params.interval == obj?.interval ? 'selected':''}>${obj?.name}</option>`;
            });
            $(`#${this.headerId}`).append(`
                <select id="${selectId}"
                    class="p-1 text-white font-weight-bold rounded"
                    style="width: 100px;font-weight: 700;outline: 0;background-color:rgba(255,255,255,0.05);border:0px;"
                    >
                    ${optionsHtml}
                </select>
            `);
            $(`#${selectId}`).on('change', () => {
                this.params.interval = $(`#${selectId}`).find('option:selected').attr('data-interval');
                this.params.unit = $(`#${selectId}`).find('option:selected').attr('data-unit');
                this.reloadPage();
            });
    }

    addSession(){
            const selectId = `select_${this.headerId}_${getRandomAlphaNum(10)}`;
    
            $(`#${this.headerId}`).append(`
                <select id="${selectId}"
                    class="p-1 text-white font-weight-bold rounded"
                    style="width: 100px;font-weight: 700;outline: 0;background-color:rgba(255,255,255,0.05);border:0px;"
                    >
                    <option ${this.params.sessiontemplate == 'Default' ? 'selected' : ''}>Default</option>
                    <option ${this.params.sessiontemplate == 'USEQPre' ? 'selected' : ''}>USEQPre</option>
                    <option ${this.params.sessiontemplate == 'USEQPost' ? 'selected' : ''}>USEQPost</option>
                    <option ${this.params.sessiontemplate == 'USEQPreAndPost' ? 'selected' : ''}>USEQPreAndPost</option>
                    <option ${this.params.sessiontemplate == 'USEQ24Hour' ? 'selected' : ''}>USEQ24Hour</option>
                </select>
            `);
            $(`#${selectId}`).on('change', () => {
                this.params.sessiontemplate = $(`#${selectId}`).val();
                console.log(this.params);
                this.reloadPage();
            });
    }

    hide(){
        $(`#${this.headerId}`).hide();
    }

    show(){
        $(`#${this.headerId}`).show();
    }

    init(){
        this.addSymbolInput();
        this.addChartTypes();
        this.addInterval();
        this.addSession();
        // $(`#${this.headerId}`).fadeIn();
    }


}

class Legend{
    constructor(containerId){
        this.containerId = containerId;
        this._setLegend();
    }

    _setLegend(){
        $(`#${this.containerId} table div`).append(
            `<span id="${this.containerId}_legend" style="z-index:2;" class="position-absolute"></span>`
        );
    }

    _legendItemWrapper(html){
        return '';
    }

    _eyeInsert(title){
        return `<i id="${this.containerId}_eye_${title}" class="fa-solid fa-eye"></i>`;
    }

    update(array){
        const $legend = $(`#${this.containerId}_legend`);
        var html = "";
        var _s = "<span class='text-muted'>";
        var s_ = "</span>";
        array.forEach(obj => {
            if (obj.title == "bars"){;
                html += `<span class="text-${obj.close > obj.open ? 'success' : 'primary'}">
                ${_s}O:${s_}${obj.open} 
                ${_s}H:${s_}${obj.high} 
                ${_s}L:${s_}${obj.low} 
                ${_s}C:${s_}${obj.close}${s_}<br/>`;
            } else if (obj.title == "vol"){
                html += `${this._eyeInsert()} ${_s}Vol${s_} ${formatVolume(obj.value)}`;
            }
        });
        $legend.empty();
        $legend.append(html);
    }

}

export class Chart{
    constructor(containerId){
        this.containerId = containerId;
        this.header = new Header(this.containerId);
        this.chart = createChart(this.containerId, {...CHART_THEMES.defaultChart});
        this.height = 400;
        this._setResizeListener();
        this._setCrosshairListener();
        this.legend = new Legend(this.containerId);
        this.lastBar = {};
        this.series = {};
        this.setWatermark(`${this.header.symbol}:${this.header.getIntervalName()}`);
    }

    info(msg){
        console.log(`[INFO] ChartClass: ${msg}`);
    }

    error(msg){
        console.log(`[error] ChartClass: ${msg}`);
    }

  
    _setCrosshairListener(){
        this.chart.subscribeCrosshairMove(e => {
            if (e.time !== undefined){
                var array = [];
                e.seriesData.forEach((value, key) => {
                    array.push({...value, title: key._internal__series._private__options.title});
                });
                this.legend.update(array);
            }
        });
    }

    _resizeChart(){
        this.chart.resize($(`#${this.containerId}`).width(), parseInt(window.innerHeight * .8));
    }

  
    _setResizeListener(){
        const $container = $(`#${this.containerId}`);
        this.chart.applyOptions({ width: $container.width(), height: parseInt(window.innerHeight * .8) });
        window.addEventListener("resize", ()=>{
            this.chart.resize($container.width(), parseInt(window.innerHeight * .8));
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
    
}