import $ from 'jquery';
import { getRandomAlphaNum, formatVolume, formatCurrency } from '../util';


export default class Legend{
    constructor(containerId, _header){
        this.containerId = containerId;
        this.header = _header;
        this.barDetailsId = `details_${getRandomAlphaNum(10)}`;
        this._setLegend();
        window.ts.symbol._setFullSymbolName(this.header.symbol);
    }

    _setLegend(){
        $(`#${this.containerId} table div`).append(
            `<span class="fullSymbolName d-none"></span>
            <span id="${this.containerId}_legend" style="z-index:2;" class="position-absolute"></span>`
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
                <span id="${this.barDetailsId}"></span></br>
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
        $(`#${this.barDetailsId}`).empty();
        $(`#${this.barDetailsId}`).append($(`.fullSymbolName`).html());
        ids.forEach((obj)=>{
            var _chartItem = _chartSeries[obj.title.toLowerCase().replace(':', '')];
            this._legendBindings(_chartItem.obj, obj.actionId, obj.valueId);
        });
    }

}
