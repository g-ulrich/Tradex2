import { convertUTCToEST, formatCurrency, formatVolume} from '../../util';

function renderArrow(data, condition){
    var cls = condition > 0 ? 'success' : 'primary';
    var arrow = condition > 0 ? '270' : '90';
    return   `<span class="text-${cls}">
    <i class="fa-solid fa-play fa-rotate-${arrow}"></i> ${data}</span>`;
}

function getArrow(condition){
    var arrow = condition >= 0 ? '270' : '90';
    return   `<i class="fa-solid fa-play fa-rotate-${arrow}"></i>`;
}

function getPlusOrMinus(val){
    return val > 0 ? '+' : '';
}

function renderCurrency(data, row, key){
    var cls = parseInt(row[key]) > 0 ? 'success' : 'primary';
    return `<span class="text-${cls}">$${formatCurrency(data.toFixed(2))}</span>`;
  }

function renderColor(data, row, condition){
    // TodaysProfitLoss
    var cls = condition ? 'success' : 'primary';
    return `<span class="text-${cls}">${data}</span>`;
}

export const get_table_edgar_columns = () => {
    return [
        {
            data: 'dateReport', name: 'Date', render: 
            function (data, type, row, meta) {
               return `${row?.fiscalPeriod} · ${row?.fiscalYear}<br/>
               <span class="text-muted">${data}</span>`;
            }
        },
        {
            data: 'eps', name: 'EPS', headerCls: 'text-center', render: 
            function (data, type, row, meta) {
                var eps = data ? parseFloat(data) : 0.0;
                var dilutedeps = row?.epsDiluted ? row?.epsDiluted : 0.0;
                return `<div class="text-center">${formatCurrency(eps.toFixed(2))}<br/>
                        <span class="text-muted">${formatCurrency((dilutedeps).toFixed(2))}</span></div>`;
            }
        },
        {
            data: 'sharesOutstanding', name: 'Rev. / Shares', headerCls: 'text-center', render: 
            function (data, type, row, meta) {
                var sharesOut = data ? data : 0.0; 
                var revenue = row?.revenueTotal ? row?.revenueTotal : 0.0;
                return `<div class="text-center">$${formatVolume(revenue.toFixed(2))}<br/>
                ${formatVolume(sharesOut.toFixed(2))}</div>`;
            }
        },
        {
            data: 'profitGross', name: 'PL', headerCls: 'text-end', render: 
            function (data, type, row, meta) {
                var gross = data ? data : 0.0;
                var exp = row?.expenseOperating ? row?.expenseOperating : 0.0;
                var net = gross - exp;
                return `<div class="text-end">
                <span class="text-${net >= 0 ? 'success' : 'primary'}">N ${getArrow(net)} $${formatVolume(net.toFixed(2))}</span><br/>
                <span class="text-${gross >= 0 ? 'success' : 'primary'}">G ${getArrow(gross)} $${formatVolume(gross.toFixed(2))}</span>
                </div>`;
            }
        }
    ]
};

/*
assetCurrent: null
assetCurrentAccountsReceivable: null
assetCurrentCashEquivalents: null
assetCurrentInventory: null
assetCurrentInvestments: null
assetNonCurrent: null
assetNonCurrentGoodwill: null
assetNonCurrentIntangibleLessGoodwill: null
assetNonCurrentInvestments: null
assetNonCurrentPPEGross: null
assetNonCurrentPPENet: null
assetTotal: null
cashFlowCapex: null
cashFlowDeferredTax: -2489000000
cashFlowDividendsPaid: 395000000
cashFlowDividendsPaidPreferred: null
cashFlowFree: null
cashFlowOperating: 28090000000
cashFlowWorkingCapitalNonCash: null
dateFiled: "2024-02-21"
dateReport: "2024-01-28"
ebit: 32972000000
ebitda: null
eps: 12.05
epsDiluted: 11.93
equityRetainedEarnings: null
equityStockPreferred: null
equityTotal: null
expenseDepreciation: 1508000000
expenseDepreciationAccumulated: null
expenseInterest: 257000000
expenseNonCashOther: 278000000
expenseOperating: 11329000000
expenseResearchDevelopment: 8675000000
expenseStockCompensation: 3549000000
expenseTax: 4058000000
expenseTotal: 31162000000
fiscalPeriod: "FY"
fiscalYear: 2024
form: "10-K"
incomeNet: 29760000000
incomeOperating: 32972000000
isTTM: true
liabilityCurrent: null
liabilityCurrentAccountsPayable: null
liabilityCurrentDebt: null
liabilityNonCurrent: null
liabilityNonCurrentDebt: null
liabilityTotal: null
profitGross: 44301000000
revenueCost: 16621000000
revenueOperating: 32972000000
revenueTotal: 60922000000
sharesOutstanding: 2469000000
sharesOutstandingDiluted: 2494000000

*/