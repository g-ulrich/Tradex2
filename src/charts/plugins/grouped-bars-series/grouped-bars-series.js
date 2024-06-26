var f = Object.defineProperty;
var _ = (s, t, o) => t in s ? f(s, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : s[t] = o;
var p = (s, t, o) => (_(s, typeof t != "symbol" ? t + "" : t, o), o);
import { customSeriesDefaultOptions as m } from "lightweight-charts";
const B = {
  ...m,
  colors: [
    "#2962FF",
    "#E1575A",
    "#F28E2C",
    "rgb(164, 89, 209)",
    "rgb(27, 156, 133)"
  ]
};
function v(s) {
  return Math.floor(s * 0.5);
}
function x(s, t, o = 1, n) {
  const a = Math.round(t * s), c = n ? o : Math.round(o * t), g = v(c);
  return { position: a - g, length: c };
}
function P(s, t, o) {
  const n = Math.round(o * s), a = Math.round(o * t);
  return {
    position: Math.min(n, a),
    length: Math.abs(a - n) + 1
  };
}
class b {
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
    const n = this._options, a = this._data.barSpacing, c = this._data.bars.map((i) => {
      const u = i.originalData.values.length, e = a / (u + 1), d = e / 2 + i.x - a / 2 + e / 2;
      return {
        singleBarWidth: e,
        singleBars: i.originalData.values.map((r, l) => ({
          y: o(r) ?? 0,
          color: n.colors[l % n.colors.length],
          x: d + l * e
        }))
      };
    }), g = o(0) ?? 0;
    for (let i = this._data.visibleRange.from; i < this._data.visibleRange.to; i++) {
      const u = c[i];
      let e;
      u.singleBars.forEach((h) => {
        const d = P(
          g,
          h.y,
          t.verticalPixelRatio
        ), r = x(
          h.x,
          t.horizontalPixelRatio,
          u.singleBarWidth
        );
        t.context.beginPath(), t.context.fillStyle = h.color;
        const l = e ? r.position - e : 0;
        t.context.fillRect(
          r.position - l,
          d.position,
          r.length + l,
          d.length
        ), e = r.position + r.length;
      });
    }
  }
}
class w {
  constructor() {
    p(this, "_renderer");
    this._renderer = new b();
  }
  priceValueBuilder(t) {
    return [
      0,
      ...t.values
    ];
  }
  isWhitespace(t) {
    var o;
    return !((o = t.values) != null && o.length);
  }
  renderer() {
    return this._renderer;
  }
  update(t, o) {
    this._renderer.update(t, o);
  }
  defaultOptions() {
    return B;
  }
}
export {
  w as GroupedBarsSeries
};
