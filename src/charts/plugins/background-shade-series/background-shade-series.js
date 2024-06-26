var p = Object.defineProperty;
var f = (r, t, o) => t in r ? p(r, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[t] = o;
var a = (r, t, o) => (f(r, typeof t != "symbol" ? t + "" : t, o), o);
import { customSeriesDefaultOptions as g } from "lightweight-charts";
const _ = {
  ...g,
  lowColor: "rgb(50, 50, 255)",
  highColor: "rgb(255, 50, 50)",
  lowValue: 0,
  highValue: 100,
  opacity: 0.8
};
function m(r, t, o) {
  const s = r - t, l = r + t, e = Math.round(
    s * o
  ), n = Math.round(
    l * o
  ) - e;
  return {
    position: e,
    length: n
  };
}
function c(r) {
  const t = r.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (!t)
    throw new Error("Invalid RGB string");
  return [
    parseInt(t[1], 10),
    parseInt(t[2], 10),
    parseInt(t[3], 10)
  ];
}
class b {
  constructor(t, o) {
    a(this, "color1");
    a(this, "color2");
    this.color1 = c(t), this.color2 = c(o);
  }
  createInterpolator(t, o) {
    const s = o - t, l = [
      this.color2[0] - this.color1[0],
      this.color2[1] - this.color1[1],
      this.color2[2] - this.color1[2]
    ];
    return (e) => {
      const i = (e - t) / s;
      return `rgb(${[
        Math.round(this.color1[0] + l[0] * i),
        Math.round(this.color1[1] + l[1] * i),
        Math.round(this.color1[2] + l[2] * i)
      ].join(",")})`;
    };
  }
}
class w {
  constructor() {
    a(this, "_data", null);
    a(this, "_options", null);
  }
  draw(t) {
    t.useBitmapCoordinateSpace((o) => this._drawImpl(o));
  }
  update(t, o) {
    this._data = t, this._options = o;
  }
  _drawImpl(t) {
    if (this._data === null || this._data.bars.length === 0 || this._data.visibleRange === null || this._options === null)
      return;
    const o = this._options, s = new b(
      o.lowColor,
      o.highColor
    ).createInterpolator(o.lowValue, o.highValue), l = this._data.bars.map((i) => ({
      color: s(i.originalData.value),
      x: i.x
    })), e = this._data.barSpacing / 2;
    for (let i = this._data.visibleRange.from; i < this._data.visibleRange.to; i++) {
      const n = l[i], h = m(n.x, e, t.horizontalPixelRatio), u = 0, d = t.bitmapSize.height;
      t.context.fillStyle = n.color || "rgba(0, 0, 0, 0)", t.context.fillRect(h.position, u, h.length, d);
    }
  }
}
class W {
  constructor() {
    a(this, "_renderer");
    this._renderer = new w();
  }
  priceValueBuilder(t) {
    return [NaN];
  }
  isWhitespace(t) {
    return t.value === void 0;
  }
  renderer() {
    return this._renderer;
  }
  update(t, o) {
    this._renderer.update(t, o);
  }
  defaultOptions() {
    return _;
  }
}
export {
  W as BackgroundShadeSeries
};
