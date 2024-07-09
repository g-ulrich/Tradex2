import {$} from './common/core';
import "./css/bootstrap-discord.min.css";
import {NewsTable} from '../datatables/newsTableClass';


$(()=>{
    window.title = "Tradex2 | News";
    $("#spinner").show();
    $("#contentContainer").hide();
    
    // $("#nav").hide();
    setTimeout(()=>{
        $("#spinner").fadeOut();
        $("#contentContainer").fadeIn();
        new NewsTable("news", symbol);
    }, 2000);
});


