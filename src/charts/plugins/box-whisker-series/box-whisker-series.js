var w = Object.defineProperty;
var C = (o, t, i) => t in o ? w(o, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : o[t] = i;
var d = (o, t, i) => (C(o, typeof t != "symbol" ? t + "" : t, i), i);
import { customSeriesDefaultOptions as W } from "lightweight-charts";
const Y = {
  ...W,
  whiskerColor: "rgba(106, 27, 154, 1)",
  lowerQuartileFill: "rgba(103, 58, 183, 1)",
  upperQuartileFill: "rgba(233, 30, 99, 1)",
  outlierColor: "rgba(149, 152, 161, 1)"
};
function q(o) {
  return Math.floor(o * 0.5);
}
function u(o, t, i = 1, e) {
  const r = Math.round(t * o), a = e ? i : Math.round(i * t), l = q(a);
  return { position: r - l, length: a };
}
function f(o, t, i) {
  const e = Math.round(i * o), r = Math.round(i * t);
  return {
    position: Math.min(e, r),
    length: Math.abs(r - e) + 1
  };
}
function k(o) {
  return Math.max(1, Math.floor(o));
}
function g(o) {
  return k(o) / o;
}
function R(o, t) {
  if (o >= 2.5 && o <= 4)
    return Math.floor(3 * t);
  const l = 1 - 0.2 * Math.atan(
    Math.max(4, o) - 4
  ) / (Math.PI * 0.5), h = Math.floor(o * l * t), n = Math.floor(o * t), s = Math.min(h, n);
  return Math.max(Math.floor(t), s);
}
function P(o, t) {
  let i = R(o, t);
  return i >= 2 && Math.floor(t) % 2 !== i % 2 && i--, i;
}
function v(o) {
  const t = P(o, 1), i = Math.floor(o), e = P(o / 2, 1);
  return {
    body: t,
    medianLine: Math.max(i, t),
    extremeLines: e,
    outlierRadius: Math.min(t, 4)
  };
}
class L {
  constructor() {
    d(this, "_data", null);
    d(this, "_options", null);
  }
  draw(t, i) {
    t.useBitmapCoordinateSpace(
      (e) => this._drawImpl(e, i)
    );
  }
  update(t, i) {
    this._data = t, this._options = i;
  }
  _drawImpl(t, i) {
    if (this._data === null || this._data.bars.length === 0 || this._data.visibleRange === null || this._options === null)
      return;
    const e = this._options, r = this._data.bars.map((n) => ({
      quartilesY: n.originalData.quartiles.map((s) => i(s) ?? 0),
      outliers: (n.originalData.outliers || []).map((s) => i(s) ?? 0),
      x: n.x
    })), a = v(this._data.barSpacing), l = g(
      t.horizontalPixelRatio
    ), h = g(
      t.verticalPixelRatio
    );
    for (let n = this._data.visibleRange.from; n < this._data.visibleRange.to; n++) {
      const s = r[n];
      a.outlierRadius > 2 && this._drawOutliers(
        t.context,
        s,
        a.outlierRadius,
        e,
        t.horizontalPixelRatio,
        t.verticalPixelRatio
      ), this._drawWhisker(
        t.context,
        s,
        a.extremeLines,
        e,
        t.horizontalPixelRatio,
        t.verticalPixelRatio,
        l,
        h
      ), this._drawBox(
        t.context,
        s,
        a.body,
        e,
        t.horizontalPixelRatio,
        t.verticalPixelRatio
      ), this._drawMedianLine(
        t.context,
        s,
        a.medianLine,
        e,
        t.horizontalPixelRatio,
        t.verticalPixelRatio,
        h
      );
    }
  }
  _drawWhisker(t, i, e, r, a, l, h, n) {
    t.save(), t.fillStyle = r.whiskerColor;
    const s = u(
      i.x,
      a,
      h
    ), p = f(
      i.quartilesY[0],
      i.quartilesY[1],
      l
    );
    t.fillRect(
      s.position,
      p.position,
      s.length,
      p.length
    );
    const m = f(
      i.quartilesY[3],
      i.quartilesY[4],
      l
    );
    t.fillRect(
      s.position,
      m.position,
      s.length,
      m.length
    );
    const c = u(
      i.x,
      a,
      e
    ), _ = u(
      i.quartilesY[4],
      l,
      n
    );
    t.fillRect(
      c.position,
      _.position,
      c.length,
      _.length
    );
    const M = u(
      i.quartilesY[0],
      l,
      n
    );
    t.fillRect(
      c.position,
      M.position,
      c.length,
      M.length
    ), t.restore();
  }
  _drawBox(t, i, e, r, a, l) {
    t.save();
    const h = f(
      i.quartilesY[2],
      i.quartilesY[3],
      l
    ), n = f(
      i.quartilesY[1],
      i.quartilesY[2],
      l
    ), s = u(i.x, a, e);
    t.fillStyle = r.lowerQuartileFill, t.fillRect(
      s.position,
      n.position,
      s.length,
      n.length
    ), t.fillStyle = r.upperQuartileFill, t.fillRect(
      s.position,
      h.position,
      s.length,
      h.length
    ), t.restore();
  }
  _drawMedianLine(t, i, e, r, a, l, h) {
    const n = u(i.x, a, e), s = u(
      i.quartilesY[2],
      l,
      h
    );
    t.save(), t.fillStyle = r.whiskerColor, t.fillRect(n.position, s.position, n.length, s.length), t.restore();
  }
  _drawOutliers(t, i, e, r, a, l) {
    t.save();
    const h = u(i.x, a, 1, !0);
    t.fillStyle = r.outlierColor, t.lineWidth = 0, i.outliers.forEach((n) => {
      t.beginPath();
      const s = u(n, l, 1, !0);
      t.arc(h.position, s.position, e, 0, 2 * Math.PI), t.fill(), t.closePath();
    }), t.restore();
  }
}
class S {
  constructor() {
    d(this, "_renderer");
    this._renderer = new L();
  }
  priceValueBuilder(t) {
    return [t.quartiles[4], t.quartiles[0], t.quartiles[2]];
  }
  isWhitespace(t) {
    return t.quartiles === void 0;
  }
  renderer() {
    return this._renderer;
  }
  update(t, i) {
    this._renderer.update(t, i);
  }
  defaultOptions() {
    return Y;
  }
}
export {
  S as WhiskerBoxSeries
};
