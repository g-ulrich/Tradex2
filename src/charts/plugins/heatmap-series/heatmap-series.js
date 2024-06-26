var p = Object.defineProperty;
var m = (e, t, i) => t in e ? p(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var u = (e, t, i) => (m(e, typeof t != "symbol" ? t + "" : t, i), i);
import { customSeriesDefaultOptions as _ } from "lightweight-charts";
const W = {
  ..._,
  lastValueVisible: !1,
  priceLineVisible: !1,
  cellShader: (e) => {
    const t = Math.min(Math.max(0, e), 100);
    return `rgba(0, ${100 + t * 1.55}, ${0 + t}, ${0.2 + t * 0.8})`;
  },
  cellBorderWidth: 1,
  cellBorderColor: "transparent"
};
function B(e, t, i) {
  const l = e - t, a = e + t, o = Math.round(
    l * i
  ), s = Math.round(
    a * i
  ) - o;
  return {
    position: o,
    length: s
  };
}
function b(e, t, i) {
  const l = Math.round(i * e), a = Math.round(i * t);
  return {
    position: Math.min(l, a),
    length: Math.abs(a - l) + 1
  };
}
class g {
  constructor() {
    u(this, "_data", null);
    u(this, "_options", null);
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
    const l = this._options, a = this._data.bars.map((n) => ({
      x: n.x,
      cells: n.originalData.cells.map((s) => ({
        amount: s.amount,
        low: i(s.low),
        high: i(s.high)
      }))
    })), o = this._data.barSpacing > l.cellBorderWidth * 3;
    for (let n = this._data.visibleRange.from; n < this._data.visibleRange.to; n++) {
      const s = a[n], h = B(
        s.x,
        this._data.barSpacing / 2,
        t.horizontalPixelRatio
      ), r = o ? l.cellBorderWidth * t.horizontalPixelRatio : 0, d = o ? l.cellBorderWidth * t.verticalPixelRatio : 0;
      for (const f of s.cells) {
        const c = b(
          f.low,
          f.high,
          t.verticalPixelRatio
        );
        t.context.fillStyle = l.cellShader(f.amount), t.context.fillRect(
          h.position + r,
          c.position + d,
          h.length - r * 2,
          c.length - 1 - d * 2
        ), o && l.cellBorderWidth && l.cellBorderColor !== "transparent" && (t.context.beginPath(), t.context.rect(
          h.position + r / 2,
          c.position + d / 2,
          h.length - r,
          c.length - 1 - d
        ), t.context.strokeStyle = l.cellBorderColor, t.context.lineWidth = r, t.context.stroke());
      }
    }
  }
}
class M {
  constructor() {
    u(this, "_renderer");
    this._renderer = new g();
  }
  priceValueBuilder(t) {
    if (t.cells.length < 1)
      return [NaN];
    let i = 1 / 0, l = -1 / 0;
    t.cells.forEach((o) => {
      o.low < i && (i = o.low), o.high > l && (l = o.high);
    });
    const a = i + (l - i) / 2;
    return [i, l, a];
  }
  isWhitespace(t) {
    return t.cells === void 0 || t.cells.length < 1;
  }
  renderer() {
    return this._renderer;
  }
  update(t, i) {
    this._renderer.update(t, i);
  }
  defaultOptions() {
    return W;
  }
}
export {
  M as HeatMapSeries
};
