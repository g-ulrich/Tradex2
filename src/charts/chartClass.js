import $ from 'jquery';
import { createChart, CrosshairMode } from "lightweight-charts";
import {CHART_THEMES} from '../charts/options';
import { getRandomAlphaNum, formatVolume, formatCurrency, getMean } from '../util';
import { getSignalColumns } from '../datatables/myColumns/signals';
import { SimpleTableData } from '../datatables/simple';

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
            <div id="${this.headerId}" class="w-100">
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
            class="text-uppercase p-1 rounded text-white font-weight-bold" 
            value="${this.symbol}" 
            placeholder="Symbol" 
            type="search" 
            style="width: 100px;font-weight: 700;outline: 0;background-color:rgba(255,255,255,0.05);border:0px;">
            <button class="btn btn-sm btn-primary rounded mb-1 mr-2">
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
                class="p-1 text-white font-weight-bold"
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
            if (obj.interval == this.params.interval && obj.unit == this.params.unit) {
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
                ${this.params.interval == obj?.interval && this.params.unit == obj?.unit ? 'selected':''}>${obj?.name}</option>`;
            });
            $(`#${this.headerId}`).append(`
                <select id="${selectId}"
                    class="p-1 text-white font-weight-bold"
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
                    class="p-1 text-white font-weight-bold"
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

    _legendItemWrapper(_chartSeries, title, val){
        var _chartItem = _chartSeries[title.toLowerCase().replace(':', '')].obj;
        var isSeriesVisible = _chartItem._internal__series._private__options.visible;
        var actionId = `action_${this.containerId}_${getRandomAlphaNum(10)}`;
        var valueId = `value_${this.containerId}_${getRandomAlphaNum(10)}`;
        var eye = `<span id="${actionId}_eye" 
                style="cursor:pointer;"
                class="text-muted pl-2">
                <i class="fa-solid fa-eye${isSeriesVisible ? '' : '-slash'}"></i>
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


    _isEyeSlashed(actionId){
        return $(`#${actionId}_eye svg`).hasClass('fa-eye-slash') || 
                $(`#${actionId}_eye i`).hasClass('fa-eye-slash');
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
                $(`#${actionId}`).addClass('rounded text-white');
                $(`#${actionId}`).css({'background-color': 'rgba(0,0,0,1)'});
            },
            mouseleave: () => {
                $(`#${valueId}`).show();
                $eye.hide();
                $trash.hide();
                $(`#${actionId}`).removeClass('rounded text-white');
                $(`#${actionId}`).css({'background-color': 'rgba(0,0,0,0.0)'});
            }
        });

        $eye.on('click', ()=>{
            if (this._isEyeSlashed(actionId)) {
                _chartItem.applyOptions({visible:true});
                $eye.empty();
                $eye.append(`<i class="fa-solid fa-eye"></i>`);
            } else {
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
                <span class="orderFormSymbolName"id="${this.barDetailsId}"></span></br>
                ${this._colorOHLC('O', obj.open, color)}
                ${this._colorOHLC('H', obj.high, color)}
                ${this._colorOHLC('L', obj.low, color)}
                ${this._colorOHLC('C', obj.close, color)}
                ${this._getPercentage(obj)}
                <br/>`;
            } else if (obj.title == "vol"){
                var chunk = this._legendItemWrapper(_chartSeries, "Vol:", formatVolume(obj.value));
                ids.push(chunk);
                html +=  chunk.html + "<br/>";
            } else {
                var chunk = this._legendItemWrapper(_chartSeries, obj.title, obj.value);
                ids.push(chunk);
                html +=  chunk.html + "<br/>";
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
    constructor(containerId, orderForm){
        this.orderForm = orderForm;
        this.containerId = containerId;
        this.header = new Header(this.containerId);
        this.chart = createChart(this.containerId, {...CHART_THEMES.defaultChart});
        this._setResizeListener();
        this._setCrosshairListener();
        this._setClickListener();
        this.legend = new Legend(this.containerId, this.header);
        this.lastBar = {};
        this.lastQuote = null;
        this.allBars = [];
        this.series = {};
        this.pl = 0;
        this.lastPriceClicked = null;   
        this.setWatermark(`${this.header.symbol}:${this.header.getIntervalName()}`);
        this.signals = new SimpleTableData({
            title: "Signals",
            containerID: "signals",
            columns: getSignalColumns(),
            dom: 't',
        });
    }

    _chartHeight(){
        return parseInt(window.innerHeight * .8);//this.height;
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
        this.chart.resize($(`#${this.containerId}`).width(), this._chartHeight());
    }

  
    _setResizeListener(){ 
        const $container = $(`#${this.containerId}`);
        this.chart.applyOptions({ width: $container.width(), height: this._chartHeight() });
        window.addEventListener("resize", ()=>{
            this.chart.resize($container.width(), this._chartHeight());
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

    setQuote(quote){
        this.lastQuote = quote;
    }

    setStreamQuote(quote){
        // if (!this.lastQuote){
            let merged = { };
            Object.keys(this.lastQuote).forEach(key => {
                if (quote[key] !== undefined) {
                    merged[key] = quote[key]; 
                }else{
                    merged[key] = this.lastQuote[key];
                }
            });
            this.lastQuote = merged;
            this.orderForm.updateQuote(merged);
        // }
    }

    setBars(bars){
        bars.forEach((bar)=>{
            this._pushBar(bar);
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
        this._pushBar(mergedBar);
        this._message(this.lastBar, mergedBar);
        this.setNextBar(mergedBar);
      }

    _message(){
        var newArray = this.allBars.slice(-5);
        var percentages = [];
        newArray.forEach((bar)=>{
            var pl = bar.close - bar.open;
            percentages.push((pl / bar.close)*100);
        });
        var avgPerc = Math.abs(getMean(percentages));
        var cur = this.allBars[this.allBars.length - 1];
        var curPl = cur.close - cur.open;
        var curPerc = Math.abs((curPl / cur.close) * 100);
        var prev = this.allBars[this.allBars.length - 2];
        var isVolgtr = cur.volume > prev.volume;
        var isCurUp = cur.close > cur.open;
        var isPrevUp = prev.close > prev.open;
        var msg = "";
        var desc = "";
            if (isVolgtr & !isPrevUp & isCurUp){
                msg = 'buy';
                desc = "Volume is greater then prev, prev candle is down and cur is up."
            } 
            if (isVolgtr & isPrevUp & isCurUp){
                msg = 'buy';
                desc = "Volume is greater then prev, prev is up and cur is up.";
            } 
            if (!isVolgtr & !isPrevUp & !isCurUp) {
                msg = "buy"
                desc = "Volume is lower then prev, prev is down and cur is down.";
            }
        // Down
        if (!isVolgtr & !isPrevUp & isCurUp) {
            msg = "sell";
            desc = "Volume is lower then prev, prev is down and cur is up.";
        }
        if (!isVolgtr & isPrevUp & !isCurUp) {
            msg = "sell";
            desc = "Volume is lower then prev, prev is up and cur is down.";
        }
        if (isVolgtr & !isPrevUp & !isCurUp) {
            msg = "sell";
            desc = "Volume is greater the prev, prev is down and cur is down.";
        }

        if (avgPerc < curPerc & isCurUp) {
            msg = "buy";
            desc = `The averge gain of ${avgPerc.toFixed(2)}% is less than the current ${curPerc.toFixed(2)}% and the cur is up.`
        }
        if (avgPerc < curPerc & !isCurUp) {
            msg = "sell";
            desc = `The averge gain of ${avgPerc.toFixed(2)}% is less than the current ${curPerc.toFixed(2)}% and the cur is down.`
        }
        
    
        var row = this.signals.getLastRowAdded();
        if (row != null & msg == 'sell'){
            if (row.action == 'buy'){
                this.pl += cur.close - row.price;
            }
        }
        var payload = [{
            action: msg,
            price: cur?.close.toFixed(2),
            pl: this.pl.toFixed(2),
            desc: desc
            }];
        if (msg !== "") {
            if (row == null & msg !== 'sell') { // init
                this.signals.addRow(this.signals, payload);
            } else if (row != null) {
                if (msg !== row.action){
                    this.signals.addRow(this.signals, payload);

                }
            }
        }
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


    
    
}