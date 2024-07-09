import $ from 'jquery';
import {getRandomAlphaNum} from '../../util';


export default class Dialog{
    constructor(containerId, params){
        this.containerId = containerId;
        this.id = `${containerId}_${getRandomAlphaNum(10)}`;
        this.w = params?.width || '200';
        this.h = params?.height || '';
        this.title = params?.title || '';
        // Position is relative to the containerId.
        this.relative = params?.relative || false;
        this._isRelative();
        this._sethtml();
        $(`#${this.id}`).draggable();
        this._closeBindings();
        this.hide();
    }

    show(){
        $(`#${this.id}`).show();
    }

    hide(){
        $(`#${this.id}`).hide();
    }

    _hideAllOtherDialogs(){
        $("._dialog").fadeOut();
    }

    _closeBindings(){
        const id = `#${this.id}`;
        const self = this;
        $(document).on('click', (e) => {
            var $target = $(e.target);
            if (!$target.closest(id).length && 
                !$target.is(id) && 
                $(id).is(":visible")) {
                self.hide();
            }
          });
        
          // Prevent clicks within the dialog from closing it
          $(id).on('click', (e) => {
            e.stopPropagation();
          });

          $(`#${this.id}_x`).on('click', ()=>{
            self.hide();
          });

          $(`#${this.containerId}`).css('cursor','pointer');

          $(`#${this.containerId}`).on('click', (e) => {
            e.stopPropagation();
            self._hideAllOtherDialogs();
            self.show();
          });

    }

    _isRelative(){
        if(this.relative){
            const $_ = $(`#${this.containerId}`);
            if (!$_.hasClass('position-relative')){
                $_.addClass('position-relative');
            }
        }
    }

    _getDialogStyling(){
        var height = this.h != '' ? `height:${this.h}px;` : '';
        var containerHeight = `${parseInt($(`#${this.containerId}`).height() * 1.5)}px`;
        return `
                z-index:999;
                width:${this.w}px;
                margin-left:-${parseInt(this.w)/2}px;
                ${height}
                top: ${this.relative ? containerHeight : '50%'};
                left: ${this.relative ? '0px' : '50%'};
                
            `;
            // ${this.relative ? '0px' : 'transform: translate(-50%, -50%);'}
    }
    
    _sethtml(){
        const $_ = $(`#${this.containerId}`);
        $_.append(`
        <div id="${this.id}" 
            class="_dialog bg-glass position-absolute shadow border"
            style="${this._getDialogStyling()}">
            <div style="cursor:all-scroll;" class="p-2 w-100 text-muted">${this.title} 
                <div id="${this.id}_x" style="cursor:pointer;" class="px-1 dialog-list-item float-end mx-2">
                    <i class="fa-solid fa-xmark"></i>
                </div>
            </div>
            <div class="p-1 w-100" id="${this.id}_body"></div>
        </div>
        `);
    }

    setbody(html){
        $(`#${this.id}_body`).append(html);
    }
}