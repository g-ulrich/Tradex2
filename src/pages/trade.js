import {$} from './common/core';
import "./css/bootstrap-discord.min.css";
import Chart from "../charts/chartClass";
import { PositionsTable } from '../datatables/positionsTableClass';
import { EdgarTable } from '../datatables/edgarTableClass';

import OrderForm from './components/orderFormClass';



$(()=>{
    $("#spinner").show();
    $("#contentContainer").hide();
    // $("#nav").hide();
    setTimeout(()=>{
        $("#spinner").fadeOut();
        $("#contentContainer").fadeIn();
        setColumnWidths();
        var orderForm = new OrderForm("orders");
        var chart = new Chart("tradeChart", orderForm);
        var symbol = chart.header.symbol;
        orderForm.startQuoteStream(symbol);
        new PositionsTable("positions");
        new EdgarTable("edgar", symbol);
        uiBindings(chart);
        
    }, 2000);

    window.addEventListener('resize', () => {
        setColumnWidths();
    });
});

function setColumnWidths(){
    var bodyWidth = $("#body").width();
    $("#leftcol").css("width", bodyWidth*.7);
    $("#rightcol").css("width", bodyWidth*.3);
}

function uiBindings(chartCls){
    $("#leftcol").resizable({ 
        handles: 'e',
        resize: function( e, ui ) {
            chartCls._resizeChart();
        },
        minWidth: 500,
    });
    $(".sortable").sortable({
        start: function( e, ui ) {
            var _id = e.target.id;
            $(`#${_id} > div`).addClass('border');
        },
        stop: function(e, ui) {
            var _id = e.target.id;
            $(`#${_id} > div`).removeClass('border');
        }
    });
    $(".sortable > div").prepend(`
        <div class="tab position-absolute bg-glass text-muted px-3 py-0" 
        style="
        
        z-index:2;top:0px;
        line-height:0px;
        left:50%;
        margin-left:-23.5px;
        margin-top:-9px;
        "
        >
        <i class="p-0 fa-solid fa-grip-lines"></i>
      </div>    
    `);
    $(".tab").css({'cursor': 'all-scroll'});
    $(".tab").css({'cursor': 'all-scroll'});
}
