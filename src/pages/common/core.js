import $ from 'jquery';
export { $ };
import '../../fontawesome/js/fontawesome.min';
import '../../fontawesome/js/all.min';
import '../css/scrollbar.css';
import {TS} from '../../tradestation/enpoints/main';
window.ts = new TS();
import {Nav} from './nav';


const TIMEOUT_MSECONDS = 500; 

$(()=>{
    new InitRenderer();
});

class InitRenderer {
    constructor(){
        this.isTokenLiveInterval = null;
        this.isTokenLive();
        setInterval(() => {
            window.ts.refreshToken();
        }, 60000*5);
        const nav = new Nav();
    }

    isTokenLive(){
        if (window.ts.token) {
            if (this.isTokenLiveInterval){
                clearInterval(this.isTokenLiveInterval);
            }
            if (!$("body").is(":visible")) {
                $("body").css('display', 'block');
                $("body").hide();
                $("body").fadeIn(TIMEOUT_MSECONDS);
            }
        }
        if (!this.isTokenLiveInterval){
            this.isTokenLiveInterval = setInterval(this.isTokenLive, TIMEOUT_MSECONDS-200);
        }
    }
}


export class TSHandler{
    constructor(promiseFunc, ...funcArgs){
        this.func = promiseFunc;
        this.resp = null;
        this.get(...funcArgs);
    }

    get(...args){
        this.func(...args).then(resp => {
            this.resp = resp;
          }).catch(error => {
            console.log("[ERROR]",error)
          });
    }
}