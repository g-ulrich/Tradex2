import $ from 'jquery';
import { getRandomAlphaNum } from '../util';


export default class Header{
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
        this.addSymbolInput();
        this.addChartTypes();
        this.addInterval();
        this.addSession();
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
}
