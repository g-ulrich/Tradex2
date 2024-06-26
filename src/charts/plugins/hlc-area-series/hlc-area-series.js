var w = Object.defineProperty;
var v = (s, t, i) => t in s ? w(s, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : s[t] = i;
var g = (s, t, i) => (v(s, typeof t != "symbol" ? t + "" : t, i), i);
import { customSeriesDefaultOptions as L } from "lightweight-charts";
const P = {
  ...L,
  highLineColor: "#049981",
  lowLineColor: "#F23645",
  closeLineColor: "#878993",
  areaBottomColor: "rgba(242, 54, 69, 0.2)",
  areaTopColor: "rgba(4, 153, 129, 0.2)",
  highLineWidth: 2,
  lowLineWidth: 2,
  closeLineWidth: 2
};
class m {
  constructor() {
    g(this, "_data", null);
    g(this, "_options", null);
  }
  draw(t, i) {
    t.useBitmapCoordinateSpace(
      (l) => this._drawImpl(l, i)
    );
  }
  update(t, i) {
    this._data = t, this._options = i;
  }
  _drawImpl(t, i) {
    if (this._data === null || this._data.bars.length === 0 || this._data.visibleRange === null || this._options === null)
      return;
    const l = this._options, u = this._data.bars.map((o) => ({
      x: o.x * t.horizontalPixelRatio,
      high: i(o.originalData.high) * t.verticalPixelRatio,
      low: i(o.originalData.low) * t.verticalPixelRatio,
      close: i(o.originalData.close) * t.verticalPixelRatio
    })), e = t.context;
    e.beginPath();
    const x = new Path2D(), _ = new Path2D(), h = new Path2D(), a = u[this._data.visibleRange.from];
    x.moveTo(a.x, a.low), _.moveTo(a.x, a.high);
    for (let o = this._data.visibleRange.from + 1; o < this._data.visibleRange.to; o++) {
      const n = u[o];
      x.lineTo(n.x, n.low), _.lineTo(n.x, n.high);
    }
    const r = u[this._data.visibleRange.to - 1];
    h.moveTo(r.x, r.close);
    for (let o = this._data.visibleRange.to - 2; o >= this._data.visibleRange.from; o--) {
      const n = u[o];
      h.lineTo(n.x, n.close);
    }
    const c = new Path2D(_);
    c.lineTo(r.x, r.close), c.addPath(h), c.lineTo(a.x, a.high), c.closePath(), e.fillStyle = l.areaTopColor, e.fill(c);
    const d = new Path2D(x);
    d.lineTo(r.x, r.close), d.addPath(h), d.lineTo(a.x, a.low), d.closePath(), e.fillStyle = l.areaBottomColor, e.fill(d), e.lineJoin = "round", e.strokeStyle = l.lowLineColor, e.lineWidth = l.lowLineWidth * t.verticalPixelRatio, e.stroke(x), e.strokeStyle = l.highLineColor, e.lineWidth = l.highLineWidth * t.verticalPixelRatio, e.stroke(_), e.strokeStyle = l.closeLineColor, e.lineWidth = l.closeLineWidth * t.verticalPixelRatio, e.stroke(h);
  }
}
class R {
  constructor() {
    g(this, "_renderer");
    this._renderer = new m();
  }
  priceValueBuilder(t) {
    return [t.low, t.high, t.close];
  }
  isWhitespace(t) {
    return t.close === void 0;
  }
  renderer() {
    return this._renderer;
  }
  update(t, i) {
    this._renderer.update(t, i);
  }
  defaultOptions() {
    return P;
  }
}
export {
  R as HLCAreaSeries
};
