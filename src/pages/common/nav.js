import $ from 'jquery';
import {hhmmss, getRandomAlphaNum} from '../../util';

export class Nav {
    constructor(){
        this.id = `nav_`;
        this.$body = $("body");
        this.links = [
            {name: "Home", title: "Home", href:"home.html"},
            {name: "Trade", title: "Trade", href:"trade.html", target:"_blank"},
            {name: "Settings", title: "Settings", href:"settings.html"}
        ]
        this.init();
        setInterval(this.setTitle, 1000);
    }

    getlinks(){
        var html = "";
        
        this.links.forEach(obj => {
            var target = obj?.target ? `target="${obj.target}"` : '';
            html += `<li class="nav-item"><a ${target} href="${obj?.href}" title="${obj?.title}" class="py-0 px-2 nav-link">${obj?.name}</a></li>`;
        });
        return html;
    }

    hideLinks(){
        $(`#${this.id}links`).hide();
    }

    getIcon(){
        return `<img height="26" src="../resources/images/icon.png"/>`;
    }

    setTitle(txt){
        $("#title").text(`${!txt ? '': txt}${hhmmss()}`);
    }

    init(){
        this.$body.prepend(`
            <nav id="${this.id}" class="container-fluid bg-dark" style="padding-top: 2px;padding-bottom:2px;">
                <div class="row px-2">    
                    <div class="col-4 py-0 px-0 navbar navbar-expand-sm navbar-dark">
                       <a class="p-0" href="home.html">${this.getIcon()}</a>
                        <ul id="${this.id}links" class="navbar-nav w-100">
                            ${this.getlinks()}
                        </ul>
                    </div>
                    <div id="title" class="col-4 text-center"></div>
                    <div class="col-4"></div>
                </div>
            </nav>
        `);
        this.setTitle();
    }
}