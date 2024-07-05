import {$} from './common/core';
import "./css/bootstrap-discord.min.css";
import Chart from "../charts/chartClass";
import { getVerticalTabHTML, getHorizontalTabHTML } from '../util';
import { PositionsTable } from '../datatables/positionsTableClass';
import { EdgarTable } from '../datatables/edgarTableClass';
import OrderForm from './components/orderFormClass';
import {NewsTable} from '../datatables/newsTableClass';



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
        new NewsTable("news", symbol);
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
    $(".resize").append(getVerticalTabHTML());
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
    $(".sortable > div").prepend(getHorizontalTabHTML());
    $(".tab").css({'cursor': 'all-scroll'});
}
