import {$, setColumnWidths} from './common/core';
import "./css/bootstrap-discord.min.css";
import Chart from "../charts/chartClass";
import { getVerticalTabHTML, getHorizontalTabHTML, isMarketOpen } from '../util';
import { PositionsTable } from '../datatables/positionsTableClass';
import { EdgarTable } from '../datatables/edgarTableClass';
import OrderForm from './components/orderFormClass';
import {NewsTable} from '../datatables/newsTableClass';
import OrderBookLevel1 from './components/orderBookLevel1Class';
import addTabs from './components/toggleTabs';



$(()=>{
    console.log("Market open: ", isMarketOpen());
    $("title").attr("title", "Tradex2 | Trade");
    $("#spinner").show();
    $("#contentContainer").hide();
    
    // $("#nav").hide();
    setTimeout(()=>{
        $("#spinner").fadeOut();
        $("#contentContainer").fadeIn();
        var orderForm = new OrderForm("orders");
        setColumnWidths(.6,.4);
        var chart = new Chart("tradeChart", orderForm);
        var symbol = chart.header.symbol;
        orderForm.startQuoteStream(symbol);
        new PositionsTable("positions");
        new EdgarTable("edgar", symbol);
        new NewsTable("news", symbol);
        new OrderBookLevel1("orderBookLevel1", symbol);
        uiBindings(chart);
        $(`#news`).hide();
        $(`#orders`).hide();
        addTabs(['orderBookLevel1', 'orders', 'positions', 'edgar', 'news']);
    }, 2000);
    window.addEventListener('resize', () => {
        setColumnWidths();
    });
});



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
