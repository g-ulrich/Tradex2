import { $} from './common/core';
import "./css/bootstrap-discord.min.css";
import Chart from "../charts/chartClass";
import {Data} from "../charts/customAPIBindings/getData";
import { PositionsTable } from '../datatables/positionsTableClass';
// import { secEdgarApi } from 'sec-edgar-api';
import OrderForm from './components/orderFormClass';


$(()=>{
    $("#nav_links").hide();
    new PositionsTable("positions");
    var orderForm = new OrderForm("orders");
    var chart = new Chart("tradeChart", orderForm);
    var symbol = chart.header.symbol;
    
    // data.startQuoteStream(symbol);

    orderForm.startQuoteStream(symbol);
});