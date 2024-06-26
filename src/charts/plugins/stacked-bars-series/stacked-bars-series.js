var _ = Object.defineProperty;
var B = (o, t, n) => t in o ? _(o, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : o[t] = n;
var f = (o, t, n) => (B(o, typeof t != "symbol" ? t + "" : t, n), n);
import { customSeriesDefaultOptions as M } from "lightweight-charts";
const w = {
  ...M,
  colors: [
    "#2962FF",
    "#E1575A",
    "#F28E2C",
    "rgb(164, 89, 209)",
    "rgb(27, 156, 133)"
  ]
}, b = 4, v = 1;
function m(o, t) {
  return Math.ceil(o * t) <= v ? 0 : Math.max(1, Math.floor(t));
}
function W(o, t, n) {
  return Math.round(o * t) - (n ?? m(o, t));
}
function x(o, t) {
  const n = m(o, t), i = W(
    o,
    t,
    n
  ), s = i % 2 === 0, c = (i - (s ? 0 : 1)) / 2;
  return {
    spacing: n,
    shiftLeft: s,
    columnHalfWidthBitmap: c,
    horizontalPixelRatio: t
  };
}
function R(o, t, n) {
  const i = o * t.horizontalPixelRatio, s = Math.round(i), c = {
    left: s - t.columnHalfWidthBitmap,
    right: s + t.columnHalfWidthBitmap - (t.shiftLeft ? 1 : 0),
    shiftLeft: s > i
  }, a = t.spacing + 1;
  return n && c.left - n.right !== a && (n.shiftLeft ? n.right = c.left - a : c.left = n.right + a), c;
}
function C(o, t, n, i, s) {
  const c = x(t, n);
  let a;
  for (let l = i; l < Math.min(s, o.length); l++)
    o[l].column = R(o[l].x, c, a), a = o[l].column;
  const e = o.reduce(
    (l, r, u) => {
      if (!r.column || u < i || u > s)
        return l;
      r.column.right < r.column.left && (r.column.right = r.column.left);
      const h = r.column.right - r.column.left + 1;
      return Math.min(l, h);
    },
    Math.ceil(t * n)
  );
  c.spacing > 0 && e < b && o.forEach(
    (l, r) => !l.column || r < i || r > s ? void 0 : l.column.right - l.column.left + 1 <= e ? l : (l.column.shiftLeft ? l.column.right -= 1 : l.column.left += 1, l.column)
  );
}
function L(o, t, n) {
  const i = Math.round(n * o), s = Math.round(n * t);
  return {
    position: Math.min(i, s),
    length: Math.abs(s - i) + 1
  };
}
function k(o) {
  let t = 0;
  return o.map((n) => {
    const i = t + n;
    return t = i, i;
  });
}
class E {
  constructor() {
    f(this, "_data", null);
    f(this, "_options", null);
  }
  draw(t, n) {
    t.useBitmapCoordinateSpace(
      (i) => this._drawImpl(i, n)
    );
  }
  update(t, n) {
    this._data = t, this._options = n;
  }
  _drawImpl(t, n) {
    if (this._data === null || this._data.bars.length === 0 || this._data.visibleRange === null || this._options === null)
      return;
    const i = this._options, s = this._data.bars.map((a) => ({
      x: a.x,
      ys: k(a.originalData.values).map(
        (e) => n(e) ?? 0
      )
    }));
    C(
      s,
      this._data.barSpacing,
      t.horizontalPixelRatio,
      this._data.visibleRange.from,
      this._data.visibleRange.to
    );
    const c = n(0) ?? 0;
    for (let a = this._data.visibleRange.from; a < this._data.visibleRange.to; a++) {
      const e = s[a], l = e.column;
      if (!l)
        return;
      let r = c;
      const u = Math.min(Math.max(t.horizontalPixelRatio, l.right - l.left), this._data.barSpacing * t.horizontalPixelRatio);
      e.ys.forEach((h, p) => {
        const g = i.colors[p % i.colors.length], d = L(r, h, t.verticalPixelRatio);
        t.context.fillStyle = g, t.context.fillRect(
          l.left,
          d.position,
          u,
          d.length
        ), r = h;
      });
    }
  }
}
class H {
  constructor() {
    f(this, "_renderer");
    this._renderer = new E();
  }
  priceValueBuilder(t) {
    return [
      0,
      t.values.reduce(
        (n, i) => n + i,
        0
      )
    ];
  }
  isWhitespace(t) {
    var n;
    return !((n = t.values) != null && n.length);
  }
  renderer() {
    return this._renderer;
  }
  update(t, n) {
    this._renderer.update(t, n);
  }
  defaultOptions() {
    return w;
  }
}
export {
  H as StackedBarsSeries
};
