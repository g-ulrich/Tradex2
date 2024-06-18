import $ from 'jquery';
import { createChart, CrosshairMode } from "lightweight-charts";
import {CHART_THEMES} from '../charts/options';
import { getRandomAlphaNum, formatVolume, formatCurrency } from '../util';

class Header{
    constructor(containerId){
        this.containerId = containerId;
        this.headerId = `${this.containerId}_${getRandomAlphaNum(20)}`;
        this.orderBtnId = `${this.containerId}_${getRandomAlphaNum(20)}`;
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
                style="width: 90px;font-weight: 700;outline: 0;background-color:rgba(255,255,255,0.05);border:0px;"
                >
                <option class="text-white bg-secondary"${this.chartType == 'column' ? 'selected' : ''}>column</option>
                <option class="text-white bg-secondary"${this.chartType == 'line' ? 'selected' : ''}>line</option>
                <option class="text-white bg-secondary"${this.chartType == 'gantt' ? 'selected' : ''}>gantt</option>
                <option class="text-white bg-secondary"${this.chartType == 'area' ? 'selected' : ''}>area</option>
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
        var str = "";
        this.frequencyArray.forEach((obj)=>{
            if (obj.interval == this.params.interval) {
                str = obj.name;
            }
        });
        return str;
    }

    getDetailedSymbolName(){
        return `${this.symbol}:${this.getIntervalName()}`;
    }

    addInterval(){
            const selectId = `select_${this.headerId}_${getRandomAlphaNum(10)}`;
            var optionsHtml = "";
            this.frequencyArray.forEach((obj)=>{
                optionsHtml += `<option class="text-white bg-secondary" data-unit="${obj?.unit}" data-interval="${obj?.interval}"
                ${this.params.interval == obj?.interval ? 'selected':''}>${obj?.name}</option>`;
            });
            $(`#${this.headerId}`).append(`
                <select id="${selectId}"
                    class="p-1 text-white font-weight-bold rounded"
                    style="width: 65px;font-weight: 700;outline: 0;background-color:rgba(255,255,255,0.05);border:0px;"
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
                    style="width: 140px;font-weight: 700;outline: 0;background-color:rgba(255,255,255,0.05);border:0px;"
                    >
                    <option class="text-white bg-secondary" ${this.params.sessiontemplate == 'Default' ? 'selected' : ''}>Default</option>
                    <option class="text-white bg-secondary" ${this.params.sessiontemplate == 'USEQPre' ? 'selected' : ''}>USEQPre</option>
                    <option class="text-white bg-secondary" ${this.params.sessiontemplate == 'USEQPost' ? 'selected' : ''}>USEQPost</option>
                    <option class="text-white bg-secondary" ${this.params.sessiontemplate == 'USEQPreAndPost' ? 'selected' : ''}>USEQPreAndPost</option>
                    <option class="text-white bg-secondary" ${this.params.sessiontemplate == 'USEQ24Hour' ? 'selected' : ''}>USEQ24Hour</option>
                </select>
            `);
            $(`#${selectId}`).on('change', () => {
                this.params.sessiontemplate = $(`#${selectId}`).val();
                console.log(this.params);
                this.reloadPage();
            });
    }

    addButtons(){
        $(`#${this.headerId}`).append(`
        <button id="${this.orderBtnId}_buy" class="float-end text-white mx-2 mb-1 btn btn-sm btn-success">Buy 10 @ $100</button>
        <button id="${this.orderBtnId}_sell" class="float-end text-white mx-2 mb-1 btn btn-sm btn-primary">Sell 10 @ $100</button>
        `);
    }

    updateButtons(price){
        $(`#${this.orderBtnId}_buy`).text(`Buy @ ${price}`);
        $(`#${this.orderBtnId}_sell`).text(`Sell @ ${price}`);
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
        this.addButtons();
        // $(`#${this.headerId}`).fadeIn();
    }


}

class Legend{
    constructor(containerId, _header){
        this.containerId = containerId;
        this.header = _header;
        this.barDetailsId = `details_${getRandomAlphaNum(10)}`;
        this._setLegend();
        this._getSymbolDetails();
    }

    _getSymbolDetails(){
            var symbol = this.header.symbol;
            if (symbol){
                this._prependSymbolInputToContainer();
                window.ts.symbol._setSymbolDescrptionForId(`${this.barDetailsId}_`, symbol);
            } else{
                setTimeout(()=>{
                    this._getSymbolDetails();
                }, 500);
            }
    }

    _prependSymbolInputToContainer(){
        $(`#${this.containerId} table div`).prepend(
            `<span id="${this.barDetailsId}_" class="d-none"></span>`
        );
    }

    _setLegend(){
        $(`#${this.containerId} table div`).append(
            `<span id="${this.containerId}_legend" style="z-index:2;" class="position-absolute"></span>`
        );
    }

    _legendItemWrapper(title, val){
        var actionId = `action_${this.containerId}_${getRandomAlphaNum(10)}`;
        var valueId = `value_${this.containerId}_${getRandomAlphaNum(10)}`;
        var eye = `<span id="${actionId}_eye" 
                style="cursor:pointer;"
                class="text-muted ml-1">
                <i class="fa-solid fa-eye"></i>
            </span>`;
        var trash = title.toLowerCase().replace(':', '') !== 'vol' ? `<span id="${actionId}_trash"
                style="cursor:pointer;"
                class="text-muted ml-1">
                <i class="fa-solid fa-trash-can"></i>
            </span>` : '';
        var action = `<span id="${actionId}" class="text-muted">${title}${eye}${trash}</span>`;
        var value = `<span id="${valueId}">${val}</span>`;
        return {html: `${action}${value}`, title:title, actionId: actionId, valueId: valueId};
    }

    _colorOHLC(char, val, condition){
        return `<span class="text-muted">${char}:</span>
        <span class="text-${condition ? 'success' : 'primary'}">${val}</span>`;
    }

    _legendBindings(_chartItem, actionId, valueId){
        var $eye = $(`#${actionId}_eye`);
        var $trash = $(`#${actionId}_trash`);
        $eye.hide();
        $trash.hide();
        // hover
        $(`#${actionId}`).on({
            mouseenter: () => {
                $(`#${valueId}`).hide();
                $eye.show();
                $trash.show();
                // $(this).addClass('rounded bg-secondary');
            },
            mouseleave: () => {
                $(`#${valueId}`).show();
                $eye.hide();
                $trash.hide();
                // $(this).removeClass('rounded bg-secondary');
            }
        });

        $eye.on('click', ()=>{
            if ($(`#${actionId}_eye svg`).hasClass('fa-eye-slash') || 
                $(`#${actionId}_eye i`).hasClass('fa-eye-slash')) {
                _chartItem.applyOptions({visible:true});
                $eye.empty();
                $eye.append(`<i class="fa-solid fa-eye"></i>`);
            } else {
                console.log(_chartItem.visible);
                _chartItem.applyOptions({visible:false});
                $eye.empty();
                $eye.append(`<i class="fa-solid fa-eye-slash"></i>`);
            }
        });

        $trash.on('click', ()=>{

        });
    }

    _getArrow(condition){
        var arrow = condition ? '270' : '90';
        return  `<i class="fa-solid fa-play fa-rotate-${arrow}"></i>`;
    }

    _getPlusOrMinus(condition){
        return condition ? '+' : '';
    }

    _getPercentage(bar){
        var condition = bar.close - bar.open >= 0;
        var cls = `class="text-${condition ? 'success' : 'primary'}"`;
        var pl = bar.close - bar.open;
        return `<span ${cls}>
        ${this._getPlusOrMinus(condition)}
        ${formatCurrency(pl.toFixed(2))}
        ${this._getArrow(condition)}
        ${((pl / bar.close)*100).toFixed(2)}%
        </span>`;
    }

    update(_chartSeries, series){
        const $legend = $(`#${this.containerId}_legend`);
        var html = "";
        var ids = [];
        series.forEach(obj => {
            if (obj.title == "bars"){
                var color = obj.close > obj.open;
                html += `<span ></span>
                <span id="${this.barDetailsId}"></span> 
                ${this._colorOHLC('O', obj.open, color)}
                ${this._colorOHLC('H', obj.high, color)}
                ${this._colorOHLC('L', obj.low, color)}
                ${this._colorOHLC('C', obj.close, color)}
                ${this._getPercentage(obj)}
                <br/>`;
            } else if (obj.title == "vol"){
                var chunk = this._legendItemWrapper("Vol:", formatVolume(obj.value));
                ids.push(chunk);
                html +=  chunk.html;
            } else {
                var chunk = this._legendItemWrapper(obj.title, obj.value);
                ids.push(chunk);
                html +=  chunk.html;
            }
        });
        $legend.empty();
        $legend.append(html);
        $(`#${this.barDetailsId}`).text($(`#${this.barDetailsId}_`).text());
        ids.forEach((obj)=>{
            var _chartItem = _chartSeries[obj.title.toLowerCase().replace(':', '')];
            this._legendBindings(_chartItem.obj, obj.actionId, obj.valueId);
        });
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
        this._setClickListener();
        this.legend = new Legend(this.containerId, this.header);
        this.lastBar = {};
        this.allBars = [];
        this.series = {};
        this.setWatermark(`${this.header.symbol}:${this.header.getIntervalName()}`);
    }

    info(msg){
        console.log(`[INFO] ChartClass: ${msg}`);
    }

    error(msg){
        console.log(`[error] ChartClass: ${msg}`);
    }


    _setClickListener(){
        this.chart.subscribeClick((e)=>{
            var price = this.series['bars'].obj.coordinateToPrice(e.point.y);
            this.header.updateButtons(price.toFixed(2));
            this.addPriceLine("Action", price)
        });
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

    _setPriceLine(name){
        const series = this.chart.addLineSeries({
            color: '#2962FF',
            lineWidth: 2,
            // disabling built-in price lines
            lastValueVisible: false,
            priceLineVisible: false,
        });
        this.series[name] = {
            id: this.series.length,
            name: name,
            obj: series
        }
    }

    addPriceLine(name, price){
        name = `${name}_${getRandomAlphaNum(2)}`
        console.log(price);
        const params = {
            price: price,
            color: '#26a69a',
            lineStyle: 2, // LineStyle.Dashed
            axisLabelVisible: true,
            title: name,
        };
        this._setPriceLine(name);
        this.series[name].obj.createPriceLine(params);
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

    _setVisibleRange(){
        this.chart.timeScale().setVisibleRange({
            from: this.allBars[this.allBars.length -25].time,
            to: this.allBars[this.allBars.length -1].time,
        });
    }

    setBars(bars){
        bars.forEach((bar)=>{
            this.allBars.push(bar);
            this.setNextBar(bar);
        });
        this._setVisibleRange();
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
        this.allBars.push(mergedBar);
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

    // setMarkers(){

    // }
    
}