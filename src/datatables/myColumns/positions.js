import { convertUTCToEST, formatCurrency} from '../../util';

function renderArrow(data, condition){
    var cls = condition > 0 ? 'success' : 'primary';
    var arrow = condition > 0 ? '270' : '90';
    return   `<span class="text-${cls}">
    <i class="fa-solid fa-play fa-rotate-${arrow}"></i> ${data}</span>`;
}

function getArrow(condition){
    var arrow = condition > 0 ? '270' : '90';
    return   `<i class="fa-solid fa-play fa-rotate-${arrow}"></i>`;
}

function getPlusOrMinus(val){
    return val > 0 ? '+' : '';
}

function renderCurrency(data, row, key){
    var cls = parseInt(row[key]) > 0 ? 'success' : 'primary';
    return `<span class="text-${cls}">$${formatCurrency(data)}</span>`;
  }

function renderColor(data, row, condition){
    // TodaysProfitLoss
    var cls = condition ? 'success' : 'primary';
    return `<span class="text-${cls}">${data}</span>`;
}

export const get_table_positions_columns = () => {
    return [
        {
            data: '', name: '', width: 55, render: 
            function (data, type, row, meta) {
                return (
                    `<button data-symbol="${row?.Symbol}" class="tradeSymbol btn btn-sm btn-primary text-white">Trade</button>`
                );
           }
        },
        {
            data: 'Symbol', name: 'Symbol / Avg.', render: 
            function (symbol, type, row, meta) {
                var shares = row?.Quantity;
                var type = row?.AssetType;
                // UnrealizedProfitLossQty
                // var avgPrice = parseFloat(row?.Last)-parseFloat(row?.UnrealizedProfitLossQty)
                return (
                    `${type}:${symbol}<br/>
                    <span>${shares} Shares · ${parseFloat(row?.AveragePrice).toFixed(2)}</span>`
                );
           }
        },
        {
            data: 'MarketValue', name: 'Today\'s PL', headerCls: 'text-center', render: 
            function (marketValue, type, row, meta) {
                var plDol = formatCurrency(row?.TodaysProfitLoss);
                var plPer = ((parseFloat(row?.TodaysProfitLoss) / parseFloat(marketValue)) * 100).toFixed(2);
                var arrow = getArrow(parseFloat(row?.TodaysProfitLoss) > 0);
                var finalPLVal = renderColor(
                    `${getPlusOrMinus(parseFloat(row?.TodaysProfitLoss))}$${plDol} ${arrow} ${plPer}%`,
                     null,
                     parseFloat(row?.TodaysProfitLoss) >= 0);
                return (`<div class="text-center">$${formatCurrency(marketValue)}<br/>${finalPLVal}</div>`);
           }
        },
        {
            data: 'TotalCost', name: 'Total PL', headerCls: 'text-end', render: 
            function (totalCost, type, row, meta) {
                var plDol = parseFloat(row?.MarketValue)-parseFloat(totalCost);
                var plPer = ((plDol / parseFloat(totalCost)) * 100).toFixed(2);
                var arrow = getArrow(plDol > 0);
                var finalPLVal = renderColor(
                    `${getPlusOrMinus(plDol)}$${formatCurrency(plDol.toFixed(2))} ${arrow} ${plPer}%`,
                     null,
                     plDol >= 0);
                return (`<div class="text-end">$${formatCurrency(totalCost)}<br/>${finalPLVal}</div>`);
           }
        },
    ]
};


/*
        {
            data: 'Symbol', name: 'Symbol',
            render: function (data, type, row, meta) { return renderArrow(data, parseInt(row?.TodaysProfitLoss) > 0) }
        },
        {
            data: 'Quantity', name: 'Shares',
            render: function (data, type, row, meta) { return renderColor(data, row, parseInt(row?.TodaysProfitLoss) > 0) }
        },
        {
            data: '', name: 'Total PL', render: function (data, type, row) {
                var total = parseFloat(row?.MarketValue)-parseFloat(row?.TotalCost);
                return renderCurrency(total.toFixed(2), row, "TodaysProfitLoss"); // Assuming formatCurrency is a function that formats currency
            }
        },
        {
            data: 'TodaysProfitLoss', name: 'PL', render: function (data, type, row) {
                return renderCurrency(data, row, "TodaysProfitLoss"); // Assuming formatCurrency is a function that formats currency
            }
        },
        {
            data: 'AveragePrice', name: 'Avg. Price', render: function (data, type, row) {
                return renderCurrency(data, row, "TodaysProfitLoss"); // Assuming formatCurrency is a function that formats currency
            }
        },
        {
            data: 'Last', name: 'Last', render: function (data, type, row) {
                return renderCurrency(data, row, "TodaysProfitLoss"); // Assuming formatCurrency is a function that formats currency
            }
        },
        {
            data: 'MarketValue', name: 'Value', render: function (data, type, row) {
                return renderCurrency(data, row, "TodaysProfitLoss"); // Assuming formatCurrency is a function that formats currency
            }
        },
        {
            data: 'AssetType', name: 'Asset',
            render: function (data, type, row, meta) { return renderColor(data, row, parseInt(row?.TodaysProfitLoss) > 0) }
        },
        {
            data: 'Bid', name: 'Bid', render: function (data, type, row) {
                return renderCurrency(data, row, "TodaysProfitLoss"); // Assuming formatCurrency is a function that formats currency
            }
        },
        {
            data: 'Ask', name: 'Ask', render: function (data, type, row) {
                return renderCurrency(data, row, "TodaysProfitLoss"); // Assuming formatCurrency is a function that formats currency
            }
        },
       
        {
            data: 'TotalCost', name: 'Total Cost', render: function (data, type, row) {
                return renderCurrency(data, row, "TodaysProfitLoss"); // Assuming formatCurrency is a function that formats currency
            }
        },
    
        {
            data: 'LongShort', name: 'LS',
            render: function (data, type, row, meta) { return renderColor(data, row, parseInt(row?.TodaysProfitLoss) > 0) }
        },
        
        {
            data: 'PositionID', name: 'Pos.ID',
            render: function (data, type, row, meta) { return renderColor(data, row, parseInt(row?.TodaysProfitLoss) > 0) }
        },
        {
            data: 'ConversionRate', name: 'Conv. Rate',
            render: function (data, type, row, meta) { return renderColor(data, row, parseInt(row?.TodaysProfitLoss) > 0) }
        },
        {
            data: 'DayTradeRequirement', name: 'Trade Req.',
            render: function (data, type, row, meta) { return renderColor(data, row, parseInt(row?.TodaysProfitLoss) > 0) }
        },
        {
            data: 'InitialRequirement', name: 'Init. Req.',
            render: function (data, type, row, meta) { return renderColor(data, row, parseInt(row?.TodaysProfitLoss) > 0) }
        },
        {
            data: 'Timestamp', name: 'Time', render: function (data, type, row) {
                return renderColor(convertUTCToEST(data), row, parseInt(row?.TodaysProfitLoss) > 0);
            }
        },
        
        {
            data: 'MarkToMarketPrice', name: 'M2M Price', render: function (data, type, row) {
                return renderCurrency(data, row, "TodaysProfitLoss"); // Assuming formatCurrency is a function that formats currency
            }
        },
        {
            data: 'UnrealizedProfitLoss', name: 'Unrealized PL', render: function (data, type, row) {
                return renderCurrency(data, row, "TodaysProfitLoss"); // Assuming formatCurrency is a function that formats currency
            }
        },
        {
            data: 'UnrealizedProfitLossPercent', name: 'Unrealized PL %',
            render: function (data, type, row, meta) { return renderColor(data, row, parseInt(row?.TodaysProfitLoss) > 0) }
        },
        {
            data: 'UnrealizedProfitLossQty', name: 'Unrealized PL Qty',
            render: function (data, type, row, meta) { return renderColor(data, row, parseInt(row?.TodaysProfitLoss) > 0) }
        }
*/