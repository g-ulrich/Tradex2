import $ from 'jquery';
window.$ = $;
window.jQuery = $;
export { $};

import '../../fontawesome/js/fontawesome.min';
import '../../fontawesome/js/all.min';
import '../css/scrollbar.css';
import '../css/custom.css';
import {TS} from '../../tradestation/enpoints/main';
import Polygon from '../../polygon/main';
window.ts = new TS();
window.p = new Polygon()
// import {Nav} from './nav';


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
        // const nav = new Nav();
        $("#contentContainer").css('height', window.innerHeight);
        addSpinnerClass();
        $("#spinner").hide();
        $("#nav").append(`
        <a href="home.html">
        <i class="fa-solid fa-house"></i>
        </a>
        <br/>
        <a href="trade.html" target="_blank"><i class="fa-solid fa-building-columns"></i></a>
        <br/>
        <a href="settings.html"><i class="fa-solid fa-gear"></i></a>   
        `);
        window.addEventListener('resize', () => {
            $("#contentContainer").css('height', window.innerHeight);
        });
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
            window.ts.refreshToken();
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

function addSpinnerClass(){
    $("body").append(`<div id="spinner" 
        style="top: 50%;left:50%; transform: translate(-50%, -50%);"
        class="position-absolute h1 p-5 bg-glass text-white">
        <i class="fa-solid fa-spinner fa-spin"></i>   
    </div>`)
}
