import {convertToEST, formatCurrency} from '../../util';

export const getSignalColumns = () => {
    return [
        
        { data: 'action', name: 'Action',
            render: function(data, type, row) {
                return data;
            } 
        },
        { data: 'price', name: 'Price',
            render: function(data, type, row) {
                return formatCurrency(data);
            } 
        },
        { data: 'pl', name: 'PL',
            render: function(data, type, row) {
                return formatCurrency(data);
            } 
        },
        { data: 'desc', name: 'Description',
            render: function(data, type, row) {
                return data;
            } 
        },
    ];
};