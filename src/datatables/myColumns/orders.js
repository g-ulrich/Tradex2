import {convertToEST, formatCurrency} from '../../util';

export const getOrderColumns = () => {
    return [
        {
            data: 'Legs[0].Symbol', 
            name: 'Symbol',
            render: function(data, type, row) {
                return row.Legs && row.Legs.length > 0? row.Legs[0].Symbol : '';
            }
        },
        {
            data: 'Legs[0].BuyOrSell', 
            name: 'Action',
            render: function(data, type, row) {
                return row.Legs && row.Legs.length > 0? row.Legs[0].BuyOrSell : '';
            }
        },
        { data: 'OrderType', name: 'Order' },
        { data: 'StatusDescription', name: 'Status' },
        {
            data: 'Legs[0].QuantityOrdered', 
            name: 'Shares',
            render: function(data, type, row) {
                return `<div class="text-start">${row.Legs && row.Legs.length > 0? row.Legs[0].QuantityOrdered : ''}`;
            }
        },
        {
            data: '', 
            name: 'Price',
            render: function(data, type, row) {
                var price = row.Legs[0]?.ExecutionPrice;
                return `<div class="text-start">${price ? `$${formatCurrency(row.Legs[0]?.ExecutionPrice)}` : ""}</div>`;
            }
        },
        
        
        { data: 'Duration', name: 'Duration' },
        { data: 'OpenedDateTime', name: 'Opened',
            render: function(data, type, row) {
                return convertToEST(data);
            } 
        },
        { data: 'AccountID', name: 'Account ID', render: function(data, type, row){
            return`<div class="text-start">${data}`;
            } 
        },
        // { data: 'Currency', name: 'Currency' },
        
        { data: 'OrderID', name: 'Order ID', render: function(data, type, row){
            return`<div class="text-start">${data}`;
            }  
        },
        // { data: 'Status', name: 'Status' },
        
        // Nested fields from the first Leg object
        // {
        //     data: 'Legs[0].AssetType', 
        //     name: 'Asset Type',
        //     render: function(data, type, row) {
        //         return row.Legs && row.Legs.length > 0? row.Legs[0].AssetType : '';
        //     }
        // },
        
        // {
        //     data: 'Legs[0].ExecQuantity', 
        //     name: 'Exec Quantity',
        //     render: function(data, type, row) {
        //         return row.Legs && row.Legs.length > 0? row.Legs[0].ExecQuantity : '';
        //     }
        // },
        
        // {
        //     data: '', 
        //     name: 'Expiration Date',
        //     render: function(data, type, row) {
        //         return row.Legs[0]?.ExpirationDate || '';
        //     }
        // },
        // // {
        // //     data: 'Legs[0].OpenOrClose', 
        // //     name: 'Open/Close',
        // //     render: function(data, type, row) {
        // //         return row.Legs && row.Legs.length > 0? row.Legs[0].OpenOrClose : '';
        // //     }
        // // },
        // {
        //     data: '', 
        //     name: 'Option Type',
        //     render: function(data, type, row) {
        //         return row.Legs[0]?.OptionType || '';
        //     }
        // },
        
        // {
        //     data: 'Legs[0].QuantityRemaining', 
        //     name: 'Quantity Remaining',
        //     render: function(data, type, row) {
        //         return row.Legs && row.Legs.length > 0? row.Legs[0].QuantityRemaining : '';
        //     }
        // },
        // // {
        // //     data: 'Legs[0].StrikePrice', 
        // //     name: 'Strike Price',
        // //     render: function(data, type, row) {
        // //         return row.Legs && row.Legs.length > 0? row.Legs[0].StrikePrice : '';
        // //     }
        // // },
        // // {
        // //     data: 'Legs[0].Underlying', 
        // //     name: 'Underlying',
        // //     render: function(data, type, row) {
        // //         return row.Legs && row.Legs.length > 0? row.Legs[0].Underlying : '';
        // //     }
        // // },
        
        // // Additional fields
        // { data: 'CommissionFee', name: 'Commission Fee' },
        // { data: '', name: 'Good Till Date',render: 
        //     function(data, type, row) {
        //         return row?.GoodTillDate || '';
        //     } 
        // },
        // { data: 'MarketActivationRules[0].RuleType', name: 'Market Activation Rule Type' },
        // { data: 'MarketActivationRules[0].Symbol', name: 'Market Activation Rule Symbol' },
        // { data: 'MarketActivationRules[0].Predicate', name: 'Market Activation Rule Predicate' },
        // { data: 'MarketActivationRules[0].TriggerKey', name: 'Market Activation Rule Trigger Key' },
        // { data: 'MarketActivationRules[0].Price', name: 'Market Activation Rule Price' },
        // { data: 'OrderID', name: 'Order ID' },
        // { data: 'OpenedDateTime', name: 'Opened Date Time' },
        // { data: 'OrderType', name: 'Order Type' },
        // { data: 'PriceUsedForBuyingPower', name: 'Price Used For Buying Power' },
        // { data: 'Routing', name: 'Routing' },
        // { data: '', name: 'Advanced Options',render: 
        //     function(data, type, row) {
        //         return row?.AdvancedOptions || '';
        //     }  
        // },
        // { data: 'TimeActivationRules[0].RuleType', name: 'Time Activation Rule Type' }, // Assuming there's at least one rule
        // { data: 'UnbundledRouteFee', name: 'Unbundled Route Fee' }
    ];
};