var c = Object.defineProperty;
var h = (t, i, e) => i in t ? c(t, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[i] = e;
var l = (t, i, e) => (h(t, typeof i != "symbol" ? i + "" : i, e), e);
import { MismatchDirection as u } from "lightweight-charts";
function _(t) {
  return Math.floor(t * 0.5);
}
function p(t, i, e = 1, r) {
  const s = Math.round(i * t), o = r ? e : Math.round(e * i), n = _(o);
  return { position: s - n, length: o };
}
class d {
  constructor() {
    l(this, "_price", null);
    l(this, "_x", null);
    l(this, "_color", "#000000");
  }
  update(i, e, r) {
    this._price = i, this._color = e, this._x = r;
  }
  draw(i) {
    i.useBitmapCoordinateSpace((e) => {
      if (this._price === null || this._x === null)
        return;
      const r = Math.round(this._x * e.horizontalPixelRatio), s = p(this._price, e.verticalPixelRatio, e.verticalPixelRatio), o = s.position + s.length / 2, n = e.context;
      n.beginPath(), n.setLineDash([
        4 * e.verticalPixelRatio,
        2 * e.verticalPixelRatio
      ]), n.moveTo(r, o), n.lineTo(e.bitmapSize.width, o), n.strokeStyle = this._color, n.lineWidth = e.verticalPixelRatio, n.stroke();
    });
  }
}
class f {
  constructor() {
    l(this, "_renderer");
    this._renderer = new d();
  }
  renderer() {
    return this._renderer;
  }
  update(i, e, r) {
    this._renderer.update(i, e, r);
  }
}
class w {
  constructor() {
    l(this, "_paneViews");
    l(this, "_chart", null);
    l(this, "_series", null);
    this._paneViews = [new f()];
  }
  attached({ chart: i, series: e }) {
    this._chart = i, this._series = e, this._series.applyOptions({
      priceLineVisible: !1
    });
  }
  detached() {
    this._chart = null, this._series = null;
  }
  updateAllViews() {
    if (!this._series || !this._chart)
      return;
    const i = this._series.options();
    let e = i.priceLineColor || i.color || "#000000";
    const r = this._series.dataByIndex(
      1e5,
      u.NearestLeft
    );
    let s = null, o = null;
    r && (r.color !== void 0 && (e = r.color), s = P(r), o = this._chart.timeScale().timeToCoordinate(r.time));
    const n = s !== null ? this._series.priceToCoordinate(s) : null;
    this._paneViews.forEach((a) => a.update(n, e, o));
  }
  paneViews() {
    return this._paneViews;
  }
}
function P(t) {
  return t.value !== void 0 ? t.value : t.close !== void 0 ? t.close : null;
}
export {
  w as PartialPriceLine
};
