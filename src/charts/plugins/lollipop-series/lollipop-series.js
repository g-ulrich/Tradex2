var _ = Object.defineProperty;
var f = (o, t, i) => t in o ? _(o, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : o[t] = i;
var r = (o, t, i) => (f(o, typeof t != "symbol" ? t + "" : t, i), i);
import { customSeriesDefaultOptions as x } from "lightweight-charts";
const P = {
  ...x,
  lineWidth: 2
};
function b(o) {
  return Math.floor(o * 0.5);
}
function m(o, t, i = 1, s) {
  const n = Math.round(t * o), l = s ? i : Math.round(i * t), h = b(l);
  return { position: n - h, length: l };
}
function v(o, t, i) {
  const s = Math.round(i * o), n = Math.round(i * t);
  return {
    position: Math.min(s, n),
    length: Math.abs(n - s) + 1
  };
}
class M {
  constructor() {
    r(this, "_data", null);
    r(this, "_options", null);
  }
  draw(t, i) {
    t.useBitmapCoordinateSpace(
      (s) => this._drawImpl(s, i)
    );
  }
  update(t, i) {
    this._data = t, this._options = i;
  }
  _drawImpl(t, i) {
    if (this._data === null || this._data.bars.length === 0 || this._data.visibleRange === null || this._options === null)
      return;
    const s = this._options, n = this._data.bars.map((a) => ({
      x: a.x,
      y: i(a.originalData.value) ?? 0
    })), l = Math.min(this._options.lineWidth, this._data.barSpacing), h = this._data.barSpacing, u = Math.floor(h / 2), p = i(0);
    for (let a = this._data.visibleRange.from; a < this._data.visibleRange.to; a++) {
      const e = n[a], c = m(
        e.x,
        t.horizontalPixelRatio,
        l
      ), d = v(
        p ?? 0,
        e.y,
        t.verticalPixelRatio
      );
      t.context.beginPath(), t.context.fillStyle = s.color, t.context.fillRect(
        c.position,
        d.position,
        c.length,
        d.length
      ), t.context.arc(
        e.x * t.horizontalPixelRatio,
        e.y * t.verticalPixelRatio,
        u * t.horizontalPixelRatio,
        0,
        Math.PI * 2
      ), t.context.fill();
    }
  }
}
class B {
  constructor() {
    r(this, "_renderer");
    this._renderer = new M();
  }
  priceValueBuilder(t) {
    return [0, t.value];
  }
  isWhitespace(t) {
    return t.value === void 0;
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
  B as LollipopSeries
};
