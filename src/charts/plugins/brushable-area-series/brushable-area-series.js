var R = Object.defineProperty;
var m = (s, e, n) => e in s ? R(s, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : s[e] = n;
var c = (s, e, n) => (m(s, typeof e != "symbol" ? e + "" : e, n), n);
import { customSeriesDefaultOptions as x } from "lightweight-charts";
const C = {
  ...x,
  lineColor: "rgb(40,98,255)",
  topColor: "rgba(40,98,255, 0.4)",
  bottomColor: "rgba(40,98,255, 0)",
  lineWidth: 2,
  basePrice: 0,
  brushRanges: []
};
class S {
  constructor() {
    c(this, "_data", null);
    c(this, "_options", null);
  }
  draw(e, n) {
    e.useBitmapCoordinateSpace(
      (l) => this._drawImpl(l, n)
    );
  }
  update(e, n) {
    this._data = e, this._options = n;
  }
  _drawImpl(e, n) {
    if (this._data === null || this._data.bars.length === 0 || this._data.visibleRange === null || this._options === null)
      return;
    const l = this._options, g = this._data.bars.map((t) => ({
      x: Math.round(t.x * e.horizontalPixelRatio),
      y: n(t.originalData.value) * e.verticalPixelRatio
    })), i = e.context, b = e.bitmapSize.height, p = (t) => {
      if (typeof l.brushRanges == "string")
        return l;
      const a = l.brushRanges.findIndex(
        (r) => t >= r.range.from && t < r.range.to
      );
      return a >= 0 ? l.brushRanges[a].style : l;
    }, d = new Array(
      this._data.visibleRange.to
    ), u = g[this._data.visibleRange.from];
    let f = u.y;
    for (let t = this._data.visibleRange.from + 1; t < this._data.visibleRange.to; t++) {
      d[t] = p(t);
      const a = g[t];
      a.y < f && (f = a.y);
    }
    const _ = /* @__PURE__ */ new Map();
    function y(t, a) {
      const r = t + a;
      if (_.has(r))
        return _.get(r);
      const h = i.createLinearGradient(0, b, 0, f);
      return h.addColorStop(0, t), h.addColorStop(1, a), _.set(r, h), h;
    }
    let o = [u.x, u.y];
    for (let t = this._data.visibleRange.from + 1; t < this._data.visibleRange.to; t++) {
      const a = g[t], r = d[t];
      i.beginPath(), i.moveTo(o[0], o[1]), i.lineTo(a.x, a.y), i.lineTo(a.x, b), i.lineTo(o[0], b), i.closePath(), i.fillStyle = y(r.bottomColor, r.topColor), i.fill(), o = [a.x, a.y];
    }
    o = [u.x, u.y];
    for (let t = this._data.visibleRange.from + 1; t < this._data.visibleRange.to; t++) {
      const a = g[t], r = d[t], h = t > 0 ? d[t - 1] !== r : !1, v = t === this._data.visibleRange.to - 1 ? !0 : d[t + 1] !== r;
      h && (i.beginPath(), i.moveTo(o[0], o[1])), i.lineTo(a.x, a.y), v && (i.strokeStyle = r.lineColor, i.lineWidth = r.lineWidth * e.verticalPixelRatio, i.stroke()), o = [a.x, a.y];
    }
  }
}
class T {
  constructor() {
    c(this, "_renderer");
    this._renderer = new S();
  }
  priceValueBuilder(e) {
    return [e.value];
  }
  isWhitespace(e) {
    return e.value === void 0;
  }
  renderer() {
    return this._renderer;
  }
  update(e, n) {
    this._renderer.update(e, n);
  }
  defaultOptions() {
    return C;
  }
}
export {
  T as BrushableAreaSeries
};
