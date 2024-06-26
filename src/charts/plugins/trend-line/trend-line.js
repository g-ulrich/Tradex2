var _ = Object.defineProperty;
var c = (l, t, i) => t in l ? _(l, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : l[t] = i;
var n = (l, t, i) => (c(l, typeof t != "symbol" ? t + "" : t, i), i);
class p {
  constructor(t, i, e, o, s) {
    n(this, "_p1");
    n(this, "_p2");
    n(this, "_text1");
    n(this, "_text2");
    n(this, "_options");
    this._p1 = t, this._p2 = i, this._text1 = e, this._text2 = o, this._options = s;
  }
  draw(t) {
    t.useBitmapCoordinateSpace((i) => {
      if (this._p1.x === null || this._p1.y === null || this._p2.x === null || this._p2.y === null)
        return;
      const e = i.context, o = Math.round(this._p1.x * i.horizontalPixelRatio), s = Math.round(this._p1.y * i.verticalPixelRatio), r = Math.round(this._p2.x * i.horizontalPixelRatio), a = Math.round(this._p2.y * i.verticalPixelRatio);
      e.lineWidth = this._options.width, e.strokeStyle = this._options.lineColor, e.beginPath(), e.moveTo(o, s), e.lineTo(r, a), e.stroke(), this._options.showLabels && (this._drawTextLabel(i, this._text1, o, s, !0), this._drawTextLabel(i, this._text2, r, a, !1));
    });
  }
  _drawTextLabel(t, i, e, o, s) {
    t.context.font = "24px Arial", t.context.beginPath();
    const r = 5 * t.horizontalPixelRatio, a = t.context.measureText(i), h = s ? a.width + r * 4 : 0;
    t.context.fillStyle = this._options.labelBackgroundColor, t.context.roundRect(e + r - h, o - 24, a.width + r * 2, 24 + r, 5), t.context.fill(), t.context.beginPath(), t.context.fillStyle = this._options.labelTextColor, t.context.fillText(i, e + r * 2 - h, o);
  }
}
class x {
  constructor(t) {
    n(this, "_source");
    n(this, "_p1", { x: null, y: null });
    n(this, "_p2", { x: null, y: null });
    this._source = t;
  }
  update() {
    const t = this._source._series, i = t.priceToCoordinate(this._source._p1.price), e = t.priceToCoordinate(this._source._p2.price), o = this._source._chart.timeScale(), s = o.timeToCoordinate(this._source._p1.time), r = o.timeToCoordinate(this._source._p2.time);
    this._p1 = { x: s, y: i }, this._p2 = { x: r, y: e };
  }
  renderer() {
    return new p(
      this._p1,
      this._p2,
      "" + this._source._p1.price.toFixed(1),
      "" + this._source._p2.price.toFixed(1),
      this._source._options
    );
  }
}
const u = {
  lineColor: "rgb(0, 0, 0)",
  width: 6,
  showLabels: !0,
  labelBackgroundColor: "rgba(255, 255, 255, 0.85)",
  labelTextColor: "rgb(0, 0, 0)"
};
class m {
  constructor(t, i, e, o, s) {
    n(this, "_chart");
    n(this, "_series");
    n(this, "_p1");
    n(this, "_p2");
    n(this, "_paneViews");
    n(this, "_options");
    n(this, "_minPrice");
    n(this, "_maxPrice");
    this._chart = t, this._series = i, this._p1 = e, this._p2 = o, this._minPrice = Math.min(this._p1.price, this._p2.price), this._maxPrice = Math.max(this._p1.price, this._p2.price), this._options = {
      ...u,
      ...s
    }, this._paneViews = [new x(this)];
  }
  autoscaleInfo(t, i) {
    const e = this._pointIndex(this._p1), o = this._pointIndex(this._p2);
    return e === null || o === null || i < e || t > o ? null : {
      priceRange: {
        minValue: this._minPrice,
        maxValue: this._maxPrice
      }
    };
  }
  updateAllViews() {
    this._paneViews.forEach((t) => t.update());
  }
  paneViews() {
    return this._paneViews;
  }
  _pointIndex(t) {
    const i = this._chart.timeScale().timeToCoordinate(t.time);
    return i === null ? null : this._chart.timeScale().coordinateToLogical(i);
  }
}
export {
  m as TrendLine
};
