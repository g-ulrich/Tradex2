(function(e,o){typeof exports=="object"&&typeof module<"u"?o(exports,require("lightweight-charts")):typeof define=="function"&&define.amd?define(["exports","lightweight-charts"],o):(e=typeof globalThis<"u"?globalThis:e||self,o(e.GroupedBarsSeries={},e.LightweightCharts))})(this,function(e,o){"use strict";var y=Object.defineProperty;var w=(e,o,a)=>o in e?y(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a;var _=(e,o,a)=>(w(e,typeof o!="symbol"?o+"":o,a),a);const a={...o.customSeriesDefaultOptions,colors:["#2962FF","#E1575A","#F28E2C","rgb(164, 89, 209)","rgb(27, 156, 133)"]};function m(l){return Math.floor(l*.5)}function b(l,t,s=1,n){const u=Math.round(t*l),d=n?s:Math.round(s*t),B=m(d);return{position:u-B,length:d}}function v(l,t,s){const n=Math.round(s*l),u=Math.round(s*t);return{position:Math.min(n,u),length:Math.abs(u-n)+1}}class x{constructor(){_(this,"_data",null);_(this,"_options",null)}draw(t,s){t.useBitmapCoordinateSpace(n=>this._drawImpl(n,s))}update(t,s){this._data=t,this._options=s}_drawImpl(t,s){if(this._data===null||this._data.bars.length===0||this._data.visibleRange===null||this._options===null)return;const n=this._options,u=this._data.barSpacing,d=this._data.bars.map(i=>{const p=i.originalData.values.length,r=u/(p+1),g=r/2+i.x-u/2+r/2;return{singleBarWidth:r,singleBars:i.originalData.values.map((h,c)=>({y:s(h)??0,color:n.colors[c%n.colors.length],x:g+c*r}))}}),B=s(0)??0;for(let i=this._data.visibleRange.from;i<this._data.visibleRange.to;i++){const p=d[i];let r;p.singleBars.forEach(f=>{const g=v(B,f.y,t.verticalPixelRatio),h=b(f.x,t.horizontalPixelRatio,p.singleBarWidth);t.context.beginPath(),t.context.fillStyle=f.color;const c=r?h.position-r:0;t.context.fillRect(h.position-c,g.position,h.length+c,g.length),r=h.position+h.length})}}}class P{constructor(){_(this,"_renderer");this._renderer=new x}priceValueBuilder(t){return[0,...t.values]}isWhitespace(t){var s;return!((s=t.values)!=null&&s.length)}renderer(){return this._renderer}update(t,s){this._renderer.update(t,s)}defaultOptions(){return a}}e.GroupedBarsSeries=P,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});