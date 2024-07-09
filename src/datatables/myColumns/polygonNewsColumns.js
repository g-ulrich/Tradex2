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

function getTickerHtml(row){
    var html = "";
    // var url = window.location.href;
    // url = url.href;
    row?.tickers.forEach((ticker, i)=>{ 
        var target= "";
        var href ="";
            target = `target="_blank"`;
            href= `href="trade.html?symbol=${ticker}"`;
        html += `<a 
            ${target}
            ${href}
            class="bg-glass px-2 text-muted">
        ${ticker}</a>`
    });
return html;
}

export const getNewsColumns = () => {
    return [
//         {
//             data: 'image_url', name: '', width: 200, render: 
            
//             function (data, type, row, meta) {
//                 /*<a title="${row?.publisher.name}:${row?.article_url}"
//                     href="${row?.article_url}" target="_blank">
//  </a>
//                 */
//                return `
               
//                     <div style="display: flex;
//                     align-items: center;
//                     justify-content: center;
//                     overflow: hidden;
//                     width:199px;
//                     max-height:350px;
//                     " 
//                     class="">
//                         <img style="object-fit: cover;" 
//                         class="rounded"
//                         src="${data}"/>
//                     </div>
//               `;
//             }
//         },
        {
            data: 'published_utc', name: 'Articles', render: 
            function (data, type, row, meta) {
                var html = getTickerHtml(row);
                var dt = new Date(data);
               return `<div>
               <span class="text-muted">
                <span style="background-color:rgba(255,255,255,0.1);margin-right: .25rem" 
                    class="px-1 py-1 rounded float-end">
                    <a title="${row?.publisher.name}:${row?.article_url}"
                    href="${row?.article_url}" target="_blank">
                        <img height="14"src="${row?.publisher.logo_url}" />
                    </a>
                </span>
                 ${dt.toLocaleString()}
               </span>
               <br/>
                <span 
                    style="white-space:normal;"
                    class="h5 m-0" 
                    title="${row?.title}">
                   <a class="text-white"
                    title="${row?.publisher.name}:${row?.article_url}"
                    href="${row?.article_url}" target="_blank"> ${row?.title} </a>
                </span>
                <br/>
                <span 
                    style="white-space:normal;"
                    title="${row?.description}" 
                    class="text-muted">
                    ${row?.description}
                </span>
                <div style="white-space:normal;"
                    class="text-start">${html}</div>
               </div>`;
            }
        },
       
    ]
};
