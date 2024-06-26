var b = Object.defineProperty;
var v = (f, t, a) => t in f ? b(f, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : f[t] = a;
var _ = (f, t, a) => (v(f, typeof t != "symbol" ? t + "" : t, a), a);
import { customSeriesDefaultOptions as w } from "lightweight-charts";
const g = {
  ...w,
  colors: [
    { line: "rgb(41, 98, 255)", area: "rgba(41, 98, 255, 0.2)" },
    { line: "rgb(225, 87, 90)", area: "rgba(225, 87, 90, 0.2)" },
    { line: "rgb(242, 142, 44)", area: "rgba(242, 142, 44, 0.2)" },
    { line: "rgb(164, 89, 209)", area: "rgba(164, 89, 209, 0.2)" },
    { line: "rgb(27, 156, 133)", area: "rgba(27, 156, 133, 0.2)" }
  ],
  lineWidth: 2
};
function T(f) {
  let t = 0;
  return f.map((a) => {
    const e = t + a;
    return t = e, e;
  });
}
class k {
  constructor() {
    _(this, "_data", null);
    _(this, "_options", null);
  }
  draw(t, a) {
    t.useBitmapCoordinateSpace(
      (e) => this._drawImpl(e, a)
    );
  }
  update(t, a) {
    this._data = t, this._options = a;
  }
  _drawImpl(t, a) {
    if (this._data === null || this._data.bars.length === 0 || this._data.visibleRange === null || this._options === null)
      return;
    const e = this._options, o = this._data.bars.map((n) => ({
      x: n.x,
      ys: T(n.originalData.values).map(
        (u) => a(u) ?? 0
      )
    })), d = a(0) ?? 0, x = this._createLinePaths(
      o,
      this._data.visibleRange,
      t,
      d * t.verticalPixelRatio
    ), s = this._createAreas(x), c = e.colors.length;
    s.forEach((n, u) => {
      t.context.fillStyle = e.colors[u % c].area, t.context.fill(n);
    }), t.context.lineWidth = e.lineWidth * t.verticalPixelRatio, t.context.lineJoin = "round", x.forEach((n, u) => {
      u != 0 && (t.context.beginPath(), t.context.strokeStyle = e.colors[(u - 1) % c].line, t.context.stroke(n.path));
    });
  }
  _createLinePaths(t, a, e, o) {
    const { horizontalPixelRatio: d, verticalPixelRatio: x } = e, s = [], c = [];
    let n = !0;
    for (let r = a.from; r < a.to; r++) {
      const p = t[r];
      let l = 0;
      p.ys.forEach((P, y) => {
        if (y % 2 !== 0)
          return;
        const i = p.x * d, h = P * x;
        n ? (s[l] = {
          path: new Path2D(),
          first: { x: i, y: h },
          last: { x: i, y: h }
        }, s[l].path.moveTo(i, h)) : (s[l].path.lineTo(i, h), s[l].last.x = i, s[l].last.y = h), l += 1;
      }), n = !1;
    }
    n = !0;
    for (let r = a.to - 1; r >= a.from; r--) {
      const p = t[r];
      let l = 0;
      p.ys.forEach((P, y) => {
        if (y % 2 === 0)
          return;
        const i = p.x * d, h = P * x;
        n ? (c[l] = {
          path: new Path2D(),
          first: { x: i, y: h },
          last: { x: i, y: h }
        }, c[l].path.moveTo(i, h)) : (c[l].path.lineTo(i, h), c[l].last.x = i, c[l].last.y = h), l += 1;
      }), n = !1;
    }
    const u = {
      path: new Path2D(),
      first: { x: s[0].last.x, y: o },
      last: { x: s[0].first.x, y: o }
    };
    u.path.moveTo(s[0].last.x, o), u.path.lineTo(s[0].first.x, o);
    const m = [u];
    for (let r = 0; r < s.length; r++)
      m.push(s[r]), r < c.length && m.push(c[r]);
    return m;
  }
  _createAreas(t) {
    const a = [];
    for (let e = 1; e < t.length; e++) {
      const o = new Path2D(t[e - 1].path);
      o.lineTo(t[e].first.x, t[e].first.y), o.addPath(t[e].path), o.lineTo(t[e - 1].first.x, t[e - 1].first.y), o.closePath(), a.push(o);
    }
    return a;
  }
}
class L {
  constructor() {
    _(this, "_renderer");
    this._renderer = new k();
  }
  priceValueBuilder(t) {
    return [
      0,
      t.values.reduce(
        (a, e) => a + e,
        0
      )
    ];
  }
  isWhitespace(t) {
    var a;
    return !((a = t.values) != null && a.length);
  }
  renderer() {
    return this._renderer;
  }
  update(t, a) {
    this._renderer.update(t, a);
  }
  defaultOptions() {
    return g;
  }
}
export {
  L as StackedAreaSeries
};
