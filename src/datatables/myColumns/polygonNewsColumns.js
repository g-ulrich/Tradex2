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
    var url = window.location.href;
    row?.tickers.forEach((ticker, i)=>{ 
        var target= "";
        var href ="";
        if (!url.includes("trade")) {
            target = `target="_blank"`;
            href= `href="trade.html?symbol=${ticker}"`;
        }else{
            target ="";
            const url = new URL(url);
            href="";
            // const params = new URLSearchParams(url.search);
            // href = `href="${url.replace(params.get('symbol'), ticker)}"`;
        }
        html += `<a 
            ${target}
            ${href}
            class="bg-glass px-2 text-muted">
        ${ticker}</a>
        `
        // ${i % 2 === 0 && i != 0? '<br/>' : ''}
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
            data: 'published_utc', name: 'Title', render: 
            function (data, type, row, meta) {
                var html = getTickerHtml(row);
                var dt = new Date(data);
               return `<div>
               <span class="text-muted">
                <span style="background-color:rgba(255,255,255,0.1);margin-right: .25rem" 
                    class="px-1 py-1 rounded">
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
                    ${row?.title}
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

               /*
                width: 500px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: block;
                    overflow: hidden;
               */
            }
        },
        // {
        //     data: 'tickers', name: 'Symbols', headerCls: 'text-end', render: 
        //     function (data, type, row, meta) {
        //         var html = "";
        //         var url = window.location.href;
        //         data.forEach((ticker, i)=>{ 
        //             var target= "";
        //             var href ="";
        //             if (!url.includes("trade")) {
        //                 target = `target="_blank"`;
        //                 href= `href="trade.html?symbol=${ticker}"`;
        //             }else{
        //                 target ="";
        //                 const urlObj = new URL(url);
        //                 href = urlObj.searchParams.set('symbol', ticker);
        //             }
        //             html += `<a 
        //                 ${target}
        //                 ${href}
        //                 class="bg-glass px-2 text-muted">
        //             ${ticker}</a>
        //             ${i % 2 === 0 && i != 0? '<br/>' : ''}`
        //         });
        //        return `<div 
        //        style="height: 50px;
        //        overflow-y:auto;"
        //        class="text-end">${html}</div>`;
        //     }
        // },
    ]
};

/*
{
  "count": 1,
  "next_url": "https://api.polygon.io:443/v2/reference/news?cursor=eyJsaW1pdCI6MSwic29ydCI6InB1Ymxpc2hlZF91dGMiLCJvcmRlciI6ImFzY2VuZGluZyIsInRpY2tlciI6e30sInB1Ymxpc2hlZF91dGMiOnsiZ3RlIjoiMjAyMS0wNC0yNiJ9LCJzZWFyY2hfYWZ0ZXIiOlsxNjE5NDA0Mzk3MDAwLG51bGxdfQ",
  "request_id": "831afdb0b8078549fed053476984947a",
  "results": [
    {
      "amp_url": "https://amp.benzinga.com/amp/content/20784086",
      "article_url": "https://www.benzinga.com/markets/cryptocurrency/21/04/20784086/cathie-wood-adds-more-coinbase-skillz-trims-square",
      "author": "Rachit  Vats",
      "description": "<p>Cathie Wood-led Ark Investment Management on Friday snapped up another 221,167 shares of the cryptocurrency exchange <strong>Coinbase Global Inc </strong>(NASDAQ <a class=\"ticker\" href=\"https://www.benzinga.com/stock/coin#NASDAQ\">COIN</a>) worth about $64.49 million on the stock&rsquo;s Friday&rsquo;s dip and also its fourth-straight loss.</p>\n<p>The investment firm&rsquo;s <strong>Ark Innovation ETF</strong> (NYSE <a class=\" ticker\" href=\"https://www.benzinga.com/stock/arkk#NYSE\">ARKK</a>) bought the shares of the company that closed 0.63% lower at $291.60 on Friday, giving the cryptocurrency exchange a market cap of $58.09 billion. Coinbase&rsquo;s market cap has dropped from $85.8 billion on its blockbuster listing earlier this month.</p>\n<p>The New York-based company also added another 3,873 shares of the mobile gaming company <strong>Skillz Inc</strong> (NYSE <a class=\" ticker\" href=\"https://www.benzinga.com/stock/sklz#NYSE\">SKLZ</a>), <a href=\"http://www.benzinga.com/markets/cryptocurrency/21/04/20762794/cathie-woods-ark-loads-up-another-1-2-million-shares-in-skillz-also-adds-coinbase-draftkin\" >just a day after</a> snapping 1.2 million shares of the stock.</p>\n <p>ARKK bought the shares of the company which closed ...</p><p><a href=https://www.benzinga.com/markets/cryptocurrency/21/04/20784086/cathie-wood-adds-more-coinbase-skillz-trims-square alt=Cathie Wood Adds More Coinbase, Skillz, Trims Square>Full story available on Benzinga.com</a></p>",
      "id": "nJsSJJdwViHZcw5367rZi7_qkXLfMzacXBfpv-vD9UA",
      "image_url": "https://cdn2.benzinga.com/files/imagecache/og_image_social_share_1200x630/images/story/2012/andre-francois-mckenzie-auhr4gcqcce-unsplash.jpg?width=720",
      "keywords": [
        "Sector ETFs",
        "Penny Stocks",
        "Cryptocurrency",
        "Small Cap",
        "Markets",
        "Trading Ideas",
        "ETFs"
      ],
      "published_utc": "2021-04-26T02:33:17Z",
      "publisher": {
        "favicon_url": "https://s3.polygon.io/public/public/assets/news/favicons/benzinga.ico",
        "homepage_url": "https://www.benzinga.com/",
        "logo_url": "https://s3.polygon.io/public/public/assets/news/logos/benzinga.svg",
        "name": "Benzinga"
      },
      "tickers": [
        "DOCU",
        "DDD",
        "NIU",
        "ARKF",
        "NVDA",
        "SKLZ",
        "PCAR",
        "MASS",
        "PSTI",
        "SPFR",
        "TREE",
        "PHR",
        "IRDM",
        "BEAM",
        "ARKW",
        "ARKK",
        "ARKG",
        "PSTG",
        "SQ",
        "IONS",
        "SYRS"
      ],
      "title": "Cathie Wood Adds More Coinbase, Skillz, Trims Square"
    }
  ],
  "status": "OK"
}

*/