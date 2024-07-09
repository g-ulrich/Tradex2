import $ from 'jquery';
import { getRandomAlphaNum } from '../util';
import Dialog from '../pages/components/dialog';

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
        this._setPageTitle();
    }

    _setPageTitle(){
        document.title = this.getDetailedSymbolName();
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
        var chartTypes = [{icon: 'column', title: 'Candle'},
            {icon: 'gantt', title: 'Bar'},
            // {name: 'line', icon: ''},
            // {name: 'area', icon: ''}
        ];
        $(`#${this.headerId}`).append(`
            <span id="${chartTypeId}" class="dialog-list-item py-1 px-2 text-center"><i class="fa-solid fa-chart-${this.chartType}"></i></span>
        `);
        
        var dialog = new Dialog(chartTypeId, {relative: true, title:`<i class="fa-solid fa-chart-${this.chartType}"></i> Chart Type`});
   
       // create html for dialog
       var html = `<div id="${selectId}">`;
       chartTypes.forEach((item)=>{
           var cls = this.chartType == item.icon ? '-selected' : ''
           html += `<div class="px-1 dialog-list-item${cls}"
           data-name="${item.icon}">
           <i class="fa-solid fa-chart-${item.icon}"></i> 
           ${item.title}</div>`;
       });
       html += `</div>`;
       dialog.setbody(html);

        $(`#${selectId}`).on('click', (e) => {
            var data = e.target.dataset;
            this.chartType = data.name;
            $(`#${chartTypeId}`).empty();
            $(`#${chartTypeId}`).append(`<i class="fa-solid fa-chart-${data.name}"></i>`);
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
            
            $(`#${this.headerId}`).append(`
                <span id="${selectId}_icon" class="dialog-list-item py-1 px-2 text-center"><i class="fa-solid fa-timeline"></i></span>
            `);

            var d = new Dialog(`${selectId}_icon`, {relative: true, title:`Interval`});
            var html = `<div id="${selectId}">`;
            this.frequencyArray.forEach((obj)=>{
                var cls = this.params.interval == obj?.interval && this.params.unit == obj?.unit ? '-selected' : '';
                html += `<div class="px-1 dialog-list-item${cls}" 
                    data-unit="${obj?.unit}" 
                    data-interval="${obj?.interval}">
                    ${obj?.name}</div>`;
            });
            html += `</div>`;
            d.setbody(html);
   
            $(`#${selectId} div`).on('click', (e) => {
                var data = e.target.dataset;
                this.params.interval = data.interval;
                this.params.unit = data.unit;
                this.reloadPage();
            });
    }

    addSession(){
            const selectId = `select_${this.headerId}_${getRandomAlphaNum(10)}`;

            var sessions = ['Default', 'USEQ24Hour', 'USEQPre', 'USEQPost', 'USEQPreAndPost'];

            $(`#${this.headerId}`).append(`
                <span id="${selectId}_icon" class="dialog-list-item py-1 px-2 text-center" ><i class="fa-solid fa-clock"></i></span>
            `);

            var dialog = new Dialog(`${selectId}_icon`, {relative: true, title: 'Session'});
            // create html for dialog
            var html = `<div id="${selectId}">`;
            sessions.forEach((item)=>{
                var cls = this.params.sessiontemplate == item ? '-selected' : ''
                html += `<div class="px-1 dialog-list-item${cls}">${item}</div>`;
            });
            html += `</div>`;
            dialog.setbody(html);

            $(`#${selectId} div`).on('click', (e) => {
                this.params.sessiontemplate = e.target.textContent;
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
