var w = Object.defineProperty;
var g = (r, t, e) => t in r ? w(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var i = (r, t, e) => (g(r, typeof t != "symbol" ? t + "" : t, e), e);
import { isBusinessDay as x } from "lightweight-charts";
function n(r) {
  if (r === void 0)
    throw new Error("Value is undefined");
  return r;
}
class v {
  constructor() {
    i(this, "_chart");
    i(this, "_series");
    i(this, "_requestUpdate");
    // This method is a class property to maintain the
    // lexical 'this' scope (due to the use of the arrow function)
    // and to ensure its reference stays the same, so we can unsubscribe later.
    i(this, "_fireDataUpdated", (t) => {
      this.dataUpdated && this.dataUpdated(t);
    });
  }
  requestUpdate() {
    this._requestUpdate && this._requestUpdate();
  }
  attached({ chart: t, series: e, requestUpdate: s }) {
    this._chart = t, this._series = e, this._series.subscribeDataChanged(this._fireDataUpdated), this._requestUpdate = s, this.requestUpdate();
  }
  detached() {
    var t;
    (t = this._series) == null || t.unsubscribeDataChanged(this._fireDataUpdated), this._chart = void 0, this._series = void 0, this._requestUpdate = void 0;
  }
  get chart() {
    return n(this._chart);
  }
  get series() {
    return n(this._series);
  }
}
function l(r, t, e) {
  const s = Math.round(e * r), o = Math.round(e * t);
  return {
    position: Math.min(s, o),
    length: Math.abs(o - s) + 1
  };
}
class f {
  constructor(t, e, s) {
    i(this, "_p1");
    i(this, "_p2");
    i(this, "_fillColor");
    this._p1 = t, this._p2 = e, this._fillColor = s;
  }
  draw(t) {
    t.useBitmapCoordinateSpace((e) => {
      if (this._p1.x === null || this._p1.y === null || this._p2.x === null || this._p2.y === null)
        return;
      const s = e.context, o = l(
        this._p1.x,
        this._p2.x,
        e.horizontalPixelRatio
      ), a = l(
        this._p1.y,
        this._p2.y,
        e.verticalPixelRatio
      );
      s.fillStyle = this._fillColor, s.fillRect(
        o.position,
        a.position,
        o.length,
        a.length
      );
    });
  }
}
class m {
  constructor(t) {
    i(this, "_source");
    i(this, "_p1", { x: null, y: null });
    i(this, "_p2", { x: null, y: null });
    this._source = t;
  }
  update() {
    const t = this._source.series, e = t.priceToCoordinate(this._source._p1.price), s = t.priceToCoordinate(this._source._p2.price), o = this._source.chart.timeScale(), a = o.timeToCoordinate(this._source._p1.time), d = o.timeToCoordinate(this._source._p2.time);
    this._p1 = { x: a, y: e }, this._p2 = { x: d, y: s };
  }
  renderer() {
    return new f(
      this._p1,
      this._p2,
      this._source._options.fillColor
    );
  }
}
class C {
  constructor(t, e, s, o) {
    i(this, "_p1");
    i(this, "_p2");
    i(this, "_fillColor");
    i(this, "_vertical", !1);
    this._p1 = t, this._p2 = e, this._fillColor = s, this._vertical = o;
  }
  draw(t) {
    t.useBitmapCoordinateSpace((e) => {
      if (this._p1 === null || this._p2 === null)
        return;
      const s = e.context;
      s.globalAlpha = 0.5;
      const o = l(
        this._p1,
        this._p2,
        this._vertical ? e.verticalPixelRatio : e.horizontalPixelRatio
      );
      s.fillStyle = this._fillColor, this._vertical ? s.fillRect(0, o.position, 15, o.length) : s.fillRect(o.position, 0, o.length, 15);
    });
  }
}
class _ {
  constructor(t, e) {
    i(this, "_source");
    i(this, "_p1", null);
    i(this, "_p2", null);
    i(this, "_vertical", !1);
    this._source = t, this._vertical = e;
  }
  update() {
    [this._p1, this._p2] = this.getPoints();
  }
  renderer() {
    return new C(
      this._p1,
      this._p2,
      this._source._options.fillColor,
      this._vertical
    );
  }
  zOrder() {
    return "bottom";
  }
}
class b extends _ {
  getPoints() {
    const t = this._source.series, e = t.priceToCoordinate(this._source._p1.price), s = t.priceToCoordinate(this._source._p2.price);
    return [e, s];
  }
}
class P extends _ {
  getPoints() {
    const t = this._source.chart.timeScale(), e = t.timeToCoordinate(this._source._p1.time), s = t.timeToCoordinate(this._source._p2.time);
    return [e, s];
  }
}
class p {
  constructor(t, e) {
    i(this, "_source");
    i(this, "_p");
    i(this, "_pos", null);
    this._source = t, this._p = e;
  }
  coordinate() {
    return this._pos ?? -1;
  }
  visible() {
    return this._source._options.showLabels;
  }
  tickVisible() {
    return this._source._options.showLabels;
  }
  textColor() {
    return this._source._options.labelTextColor;
  }
  backColor() {
    return this._source._options.labelColor;
  }
  movePoint(t) {
    this._p = t, this.update();
  }
}
class h extends p {
  update() {
    const t = this._source.chart.timeScale();
    this._pos = t.timeToCoordinate(this._p.time);
  }
  text() {
    return this._source._options.timeLabelFormatter(this._p.time);
  }
}
class c extends p {
  update() {
    const t = this._source.series;
    this._pos = t.priceToCoordinate(this._p.price);
  }
  text() {
    return this._source._options.priceLabelFormatter(this._p.price);
  }
}
const V = {
  fillColor: "rgba(200, 50, 100, 0.75)",
  previewFillColor: "rgba(200, 50, 100, 0.25)",
  labelColor: "rgba(200, 50, 100, 1)",
  labelTextColor: "white",
  showLabels: !0,
  priceLabelFormatter: (r) => r.toFixed(2),
  timeLabelFormatter: (r) => typeof r == "string" ? r : (x(r) ? new Date(r.year, r.month, r.day) : new Date(r * 1e3)).toLocaleDateString()
};
class u extends v {
  constructor(e, s, o = {}) {
    super();
    i(this, "_options");
    i(this, "_p1");
    i(this, "_p2");
    i(this, "_paneViews");
    i(this, "_timeAxisViews");
    i(this, "_priceAxisViews");
    i(this, "_priceAxisPaneViews");
    i(this, "_timeAxisPaneViews");
    this._p1 = e, this._p2 = s, this._options = {
      ...V,
      ...o
    }, this._paneViews = [new m(this)], this._timeAxisViews = [
      new h(this, e),
      new h(this, s)
    ], this._priceAxisViews = [
      new c(this, e),
      new c(this, s)
    ], this._priceAxisPaneViews = [new b(this, !0)], this._timeAxisPaneViews = [new P(this, !1)];
  }
  updateAllViews() {
    this._paneViews.forEach((e) => e.update()), this._timeAxisViews.forEach((e) => e.update()), this._priceAxisViews.forEach((e) => e.update()), this._priceAxisPaneViews.forEach((e) => e.update()), this._timeAxisPaneViews.forEach((e) => e.update());
  }
  priceAxisViews() {
    return this._priceAxisViews;
  }
  timeAxisViews() {
    return this._timeAxisViews;
  }
  paneViews() {
    return this._paneViews;
  }
  priceAxisPaneViews() {
    return this._priceAxisPaneViews;
  }
  timeAxisPaneViews() {
    return this._timeAxisPaneViews;
  }
  applyOptions(e) {
    this._options = { ...this._options, ...e }, this.requestUpdate();
  }
}
class R extends u {
  constructor(t, e, s = {}) {
    super(t, e, s), this._options.fillColor = this._options.previewFillColor;
  }
  updateEndPoint(t) {
    this._p2 = t, this._paneViews[0].update(), this._timeAxisViews[1].movePoint(t), this._priceAxisViews[1].movePoint(t), this.requestUpdate();
  }
}
class T {
  constructor(t, e, s, o) {
    i(this, "_chart");
    i(this, "_series");
    i(this, "_drawingsToolbarContainer");
    i(this, "_defaultOptions");
    i(this, "_rectangles");
    i(this, "_previewRectangle");
    i(this, "_points", []);
    i(this, "_drawing", !1);
    i(this, "_toolbarButton");
    i(this, "_clickHandler", (t) => this._onClick(t));
    i(this, "_moveHandler", (t) => this._onMouseMove(t));
    this._chart = t, this._series = e, this._drawingsToolbarContainer = s, this._addToolbarButton(), this._defaultOptions = o, this._rectangles = [], this._chart.subscribeClick(this._clickHandler), this._chart.subscribeCrosshairMove(this._moveHandler);
  }
  remove() {
    this.stopDrawing(), this._chart && (this._chart.unsubscribeClick(this._clickHandler), this._chart.unsubscribeCrosshairMove(this._moveHandler)), this._rectangles.forEach((t) => {
      this._removeRectangle(t);
    }), this._rectangles = [], this._removePreviewRectangle(), this._chart = void 0, this._series = void 0, this._drawingsToolbarContainer = void 0;
  }
  startDrawing() {
    this._drawing = !0, this._points = [], this._toolbarButton && (this._toolbarButton.style.fill = "rgb(100, 150, 250)");
  }
  stopDrawing() {
    this._drawing = !1, this._points = [], this._toolbarButton && (this._toolbarButton.style.fill = "rgb(0, 0, 0)");
  }
  isDrawing() {
    return this._drawing;
  }
  _onClick(t) {
    if (!this._drawing || !t.point || !t.time || !this._series)
      return;
    const e = this._series.coordinateToPrice(t.point.y);
    e !== null && this._addPoint({
      time: t.time,
      price: e
    });
  }
  _onMouseMove(t) {
    if (!this._drawing || !t.point || !t.time || !this._series)
      return;
    const e = this._series.coordinateToPrice(t.point.y);
    e !== null && this._previewRectangle && this._previewRectangle.updateEndPoint({
      time: t.time,
      price: e
    });
  }
  _addPoint(t) {
    this._points.push(t), this._points.length >= 2 && (this._addNewRectangle(this._points[0], this._points[1]), this.stopDrawing(), this._removePreviewRectangle()), this._points.length === 1 && this._addPreviewRectangle(this._points[0]);
  }
  _addNewRectangle(t, e) {
    const s = new u(t, e, { ...this._defaultOptions });
    this._rectangles.push(s), n(this._series).attachPrimitive(s);
  }
  _removeRectangle(t) {
    n(this._series).detachPrimitive(t);
  }
  _addPreviewRectangle(t) {
    this._previewRectangle = new R(t, t, {
      ...this._defaultOptions
    }), n(this._series).attachPrimitive(this._previewRectangle);
  }
  _removePreviewRectangle() {
    this._previewRectangle && (n(this._series).detachPrimitive(this._previewRectangle), this._previewRectangle = void 0);
  }
  _addToolbarButton() {
    if (!this._drawingsToolbarContainer)
      return;
    const t = document.createElement("div");
    t.style.width = "20px", t.style.height = "20px", t.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M315.4 15.5C309.7 5.9 299.2 0 288 0s-21.7 5.9-27.4 15.5l-96 160c-5.9 9.9-6.1 22.2-.4 32.2s16.3 16.2 27.8 16.2H384c11.5 0 22.2-6.2 27.8-16.2s5.5-22.3-.4-32.2l-96-160zM288 312V456c0 22.1 17.9 40 40 40H472c22.1 0 40-17.9 40-40V312c0-22.1-17.9-40-40-40H328c-22.1 0-40 17.9-40 40zM128 512a128 128 0 1 0 0-256 128 128 0 1 0 0 256z"/></svg>', t.addEventListener("click", () => {
      this.isDrawing() ? this.stopDrawing() : this.startDrawing();
    }), this._drawingsToolbarContainer.appendChild(t), this._toolbarButton = t;
    const e = document.createElement("input");
    e.type = "color", e.value = "#C83264", e.style.width = "24px", e.style.height = "20px", e.style.border = "none", e.style.padding = "0px", e.style.backgroundColor = "transparent", e.addEventListener("change", () => {
      const s = e.value;
      this._defaultOptions.fillColor = s + "CC", this._defaultOptions.previewFillColor = s + "77", this._defaultOptions.labelColor = s;
    }), this._drawingsToolbarContainer.appendChild(e);
  }
}
export {
  T as RectangleDrawingTool
};
