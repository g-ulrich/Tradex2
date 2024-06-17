import { $} from './common/core';
import "./css/bootstrap-discord.min.css";
import {Chart} from "../charts/chartClass";
import {Data} from "../charts/customAPIBindings/getData";



$(()=>{
    $("#nav_links").hide();
    var chart = new Chart("tradeChart");
    chart.addCandlestickSeries("bars");
    chart.addHistogramSeries("vol");
    const data = new Data(chart);
    data.startBarStream(chart.header.symbol, chart.header.params);
  
});