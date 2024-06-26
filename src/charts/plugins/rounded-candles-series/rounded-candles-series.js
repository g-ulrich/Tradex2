var _ = Object.defineProperty;
var C = (i, t, o) => t in i ? _(i, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : i[t] = o;
var p = (i, t, o) => (C(i, typeof t != "symbol" ? t + "" : t, o), o);
import { customSeriesDefaultOptions as w } from "lightweight-charts";
function m(i, t) {
  if (i >= 2.5 && i <= 4)
    return Math.floor(3 * t);
  const a = 1 - 0.2 * Math.atan(
    Math.max(4, i) - 4
  ) / (Math.PI * 0.5), d = Math.floor(i * a * t), c = Math.floor(i * t), r = Math.min(d, c);
  return Math.max(Math.floor(t), r);
}
function S(i, t) {
  let o = m(i, t);
  return o >= 2 && Math.floor(t) % 2 !== o % 2 && o--, o;
}
function M(i) {
  return Math.max(1, Math.floor(i));
}
function b(i) {
  return M(i) / i;
}
function k(i) {
  return Math.floor(i * 0.5);
}
function f(i, t, o = 1, n) {
  const e = Math.round(t * i), s = n ? o : Math.round(o * t), a = k(s);
  return { position: e - a, length: s };
}
function g(i, t, o) {
  const n = Math.round(o * i), e = Math.round(o * t);
  return {
    position: Math.min(n, e),
    length: Math.abs(e - n) + 1
  };
}
class x {
  constructor() {
    p(this, "_data", null);
    p(this, "_options", null);
  }
  draw(t, o) {
    t.useBitmapCoordinateSpace(
      (n) => this._drawImpl(n, o)
    );
  }
  update(t, o) {
    this._data = t, this._options = o;
  }
  _drawImpl(t, o) {
    if (this._data === null || this._data.bars.length === 0 || this._data.visibleRange === null || this._options === null)
      return;
    let n = -1 / 0;
    const e = this._data.bars.map((a) => {
      const d = a.originalData.close >= n;
      n = a.originalData.close ?? n;
      const c = o(a.originalData.open) ?? 0, r = o(a.originalData.high) ?? 0, l = o(a.originalData.low) ?? 0, h = o(a.originalData.close) ?? 0;
      return {
        openY: c,
        highY: r,
        lowY: l,
        closeY: h,
        x: a.x,
        isUp: d
      };
    }), s = this._options.radius(this._data.barSpacing);
    this._drawWicks(t, e, this._data.visibleRange), this._drawCandles(t, e, this._data.visibleRange, s);
  }
  _drawWicks(t, o, n) {
    if (this._data === null || this._options === null)
      return;
    const {
      context: e,
      horizontalPixelRatio: s,
      verticalPixelRatio: a
    } = t, d = b(s);
    for (let c = n.from; c < n.to; c++) {
      const r = o[c];
      e.fillStyle = r.isUp ? this._options.wickUpColor : this._options.wickDownColor;
      const l = g(r.lowY, r.highY, a), h = f(r.x, s, d);
      e.fillRect(h.position, l.position, h.length, l.length);
    }
  }
  _drawCandles(t, o, n, e) {
    if (this._data === null || this._options === null)
      return;
    const {
      context: s,
      horizontalPixelRatio: a,
      verticalPixelRatio: d
    } = t, c = S(this._data.barSpacing, 1);
    for (let r = n.from; r < n.to; r++) {
      const l = o[r], h = g(Math.min(l.openY, l.closeY), Math.max(l.openY, l.closeY), d), u = f(l.x, a, c);
      s.fillStyle = l.isUp ? this._options.upColor : this._options.downColor, s.roundRect ? (s.beginPath(), s.roundRect(u.position, h.position, u.length, h.length, e), s.fill()) : s.fillRect(u.position, h.position, u.length, h.length);
    }
  }
}
const P = {
  ...w,
  upColor: "#26a69a",
  downColor: "#ef5350",
  wickVisible: !0,
  borderVisible: !0,
  borderColor: "#378658",
  borderUpColor: "#26a69a",
  borderDownColor: "#ef5350",
  wickColor: "#737375",
  wickUpColor: "#26a69a",
  wickDownColor: "#ef5350",
  radius: function(i) {
    return i < 4 ? 0 : i / 3;
  }
};
class Y {
  constructor() {
    p(this, "_renderer");
    this._renderer = new x();
  }
  priceValueBuilder(t) {
    return [t.high, t.low, t.close];
  }
  renderer() {
    return this._renderer;
  }
  isWhitespace(t) {
    return t.close === void 0;
  }
  update(t, o) {
    this._renderer.update(t, o);
  }
  defaultOptions() {
    return P;
  }
}
export {
  Y as RoundedCandleSeries
};
