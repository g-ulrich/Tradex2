(function(l,o){typeof exports=="object"&&typeof module<"u"?o(exports,require("lightweight-charts")):typeof define=="function"&&define.amd?define(["exports","lightweight-charts"],o):(l=typeof globalThis<"u"?globalThis:l||self,o(l.HeatmapSeries={},l.LightweightCharts))})(this,function(l,o){"use strict";var x=Object.defineProperty;var w=(l,o,h)=>o in l?x(l,o,{enumerable:!0,configurable:!0,writable:!0,value:h}):l[o]=h;var m=(l,o,h)=>(w(l,typeof o!="symbol"?o+"":o,h),h);const h={...o.customSeriesDefaultOptions,lastValueVisible:!1,priceLineVisible:!1,cellShader:s=>{const t=Math.min(Math.max(0,s),100);return`rgba(0, ${100+t*1.55}, ${0+t}, ${.2+t*.8})`},cellBorderWidth:1,cellBorderColor:"transparent"};function _(s,t,i){const e=s-t,a=s+t,n=Math.round(e*i),r=Math.round(a*i)-n;return{position:n,length:r}}function b(s,t,i){const e=Math.round(i*s),a=Math.round(i*t);return{position:Math.min(e,a),length:Math.abs(a-e)+1}}class W{constructor(){m(this,"_data",null);m(this,"_options",null)}draw(t,i){t.useBitmapCoordinateSpace(e=>this._drawImpl(e,i))}update(t,i){this._data=t,this._options=i}_drawImpl(t,i){if(this._data===null||this._data.bars.length===0||this._data.visibleRange===null||this._options===null)return;const e=this._options,a=this._data.bars.map(d=>({x:d.x,cells:d.originalData.cells.map(r=>({amount:r.amount,low:i(r.low),high:i(r.high)}))})),n=this._data.barSpacing>e.cellBorderWidth*3;for(let d=this._data.visibleRange.from;d<this._data.visibleRange.to;d++){const r=a[d],u=_(r.x,this._data.barSpacing/2,t.horizontalPixelRatio),c=n?e.cellBorderWidth*t.horizontalPixelRatio:0,f=n?e.cellBorderWidth*t.verticalPixelRatio:0;for(const g of r.cells){const p=b(g.low,g.high,t.verticalPixelRatio);t.context.fillStyle=e.cellShader(g.amount),t.context.fillRect(u.position+c,p.position+f,u.length-c*2,p.length-1-f*2),n&&e.cellBorderWidth&&e.cellBorderColor!=="transparent"&&(t.context.beginPath(),t.context.rect(u.position+c/2,p.position+f/2,u.length-c,p.length-1-f),t.context.strokeStyle=e.cellBorderColor,t.context.lineWidth=c,t.context.stroke())}}}}class B{constructor(){m(this,"_renderer");this._renderer=new W}priceValueBuilder(t){if(t.cells.length<1)return[NaN];let i=1/0,e=-1/0;t.cells.forEach(n=>{n.low<i&&(i=n.low),n.high>e&&(e=n.high)});const a=i+(e-i)/2;return[i,e,a]}isWhitespace(t){return t.cells===void 0||t.cells.length<1}renderer(){return this._renderer}update(t,i){this._renderer.update(t,i)}defaultOptions(){return h}}l.HeatMapSeries=B,Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});