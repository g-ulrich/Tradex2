import { formatCurrency} from '../../util';

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

export const get_table_accounts_columns = () => {
    return [
        {
            data: 'Equity', name: 'Type',
            render: function (equity, type, row, meta) { 
                var eq = renderColor(`$${formatCurrency(equity)}`, null, parseFloat(row?.TodaysProfitLoss) > 0)
                return `${eq}<br/>${row?.AccountType} #${row?.AccountID}`; 
            }
        },
        {
            data: 'MarketValue', name: 'Value / Today\'s PL', headerCls: 'text-center',
            render: function (marketValue, type, row, meta) {
                var plDol = formatCurrency(row?.TodaysProfitLoss);
                var plPer = ((parseFloat(row?.TodaysProfitLoss) / parseFloat(marketValue)) * 100).toFixed(2);
                var arrow = getArrow(parseFloat(row?.TodaysProfitLoss) > 0);
                var finalPLVal = renderColor(
                    `${getPlusOrMinus(parseFloat(row?.TodaysProfitLoss))}$${plDol} ${arrow} ${plPer}%`,
                     null,
                     parseFloat(row?.TodaysProfitLoss) > 0);
                return (`<div class="text-center">$${formatCurrency(marketValue)}<br/>
                ${parseInt(row?.TodaysProfitLoss) != 0 ? finalPLVal : '-'}
                </div>`);
           }
        },
        {
            data: 'CashBalance', name: 'Cash / Power', headerCls: 'text-end',
            render: function (cash, type, row, meta) { 
                return `<div class="text-end">$${formatCurrency(cash)}<br/>$${formatCurrency(row?.BuyingPower)}</div>`;
            }
        },
        ]

};



/*
Balance     Today PL        Cash / Unsettled
$10,000     $4,000           
#120423     +$10.0 ^ 12.3%  


{
        data: 'AccountID', name: 'ID',
        render: function (data, type, row, meta) { return renderColor(data, row, parseInt(row?.TodaysProfitLoss) > 0) }
    },
    {
        data: 'AccountType', name: 'Type',
        render: function (data, type, row, meta) { return renderColor(data, row, parseInt(row?.TodaysProfitLoss) > 0) }
    },
    {
        data: 'TodaysProfitLoss', name: 'PL',
        render: function (data, type, row, meta) { return renderCurrency(data, row, "TodaysProfitLoss") }
    },
    {
        data: 'CashBalance', name: 'Cash',
        render: function (data, type, row, meta) { return renderCurrency(data, row, "TodaysProfitLoss") }
    },
    {
        data: 'Equity', name: 'Eq',
        render: function (data, type, row, meta) { return renderCurrency(data, row, "TodaysProfitLoss") }
    },
    {
        data: 'MarketValue', name: 'Value',
        render: function (data, type, row, meta) { return renderCurrency(data, row, "TodaysProfitLoss") }
    },
    {
        data: 'BuyingPower', name: 'Power',
        render: function (data, type, row, meta) { return renderCurrency(data, row, "TodaysProfitLoss") }
    },
    {
        data: 'UnclearedDeposit', name: 'Unsettled',
        render: function (data, type, row, meta) { return renderCurrency(data, row, "TodaysProfitLoss") }
    }
*/

