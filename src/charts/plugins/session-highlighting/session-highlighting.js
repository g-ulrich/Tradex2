var f = Object.defineProperty;
var w = (i, t, e) => t in i ? f(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var a = (i, t, e) => (w(i, typeof t != "symbol" ? t + "" : t, e), e);
function c(i) {
  if (i === void 0)
    throw new Error("Value is undefined");
  return i;
}
class m {
  constructor() {
    a(this, "_chart");
    a(this, "_series");
    a(this, "_requestUpdate");
    // This method is a class property to maintain the
    // lexical 'this' scope (due to the use of the arrow function)
    // and to ensure its reference stays the same, so we can unsubscribe later.
    a(this, "_fireDataUpdated", (t) => {
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
    return c(this._chart);
  }
  get series() {
    return c(this._series);
  }
}
class b {
  constructor(t) {
    a(this, "_viewData");
    this._viewData = t;
  }
  draw(t) {
    const e = this._viewData.data;
    t.useBitmapCoordinateSpace((s) => {
      const d = s.context, _ = 0, u = s.bitmapSize.height, r = s.horizontalPixelRatio * this._viewData.barWidth / 2, l = -1 * (r + 1), p = s.bitmapSize.width;
      e.forEach((o) => {
        const h = o.x * s.horizontalPixelRatio;
        if (h < l)
          return;
        d.fillStyle = o.color || "rgba(0, 0, 0, 0)";
        const n = Math.max(0, Math.round(h - r)), g = Math.min(p, Math.round(h + r));
        d.fillRect(n, _, g - n, u);
      });
    });
  }
}
class x {
  constructor(t) {
    a(this, "_source");
    a(this, "_data");
    this._source = t, this._data = {
      data: [],
      barWidth: 6,
      options: this._source._options
    };
  }
  update() {
    const t = this._source.chart.timeScale();
    this._data.data = this._source._backgroundColors.map((e) => ({
      x: t.timeToCoordinate(e.time) ?? -100,
      color: e.color
    })), this._data.data.length > 1 ? this._data.barWidth = this._data.data[1].x - this._data.data[0].x : this._data.barWidth = 6;
  }
  renderer() {
    return new b(this._data);
  }
  zOrder() {
    return "bottom";
  }
}
const U = {};
class S extends m {
  constructor(e, s = {}) {
    super();
    a(this, "_paneViews");
    a(this, "_seriesData", []);
    a(this, "_backgroundColors", []);
    a(this, "_options");
    a(this, "_highlighter");
    this._highlighter = e, this._options = { ...U, ...s }, this._paneViews = [new x(this)];
  }
  updateAllViews() {
    this._paneViews.forEach((e) => e.update());
  }
  paneViews() {
    return this._paneViews;
  }
  attached(e) {
    super.attached(e), this.dataUpdated("full");
  }
  dataUpdated(e) {
    this._backgroundColors = this.series.data().map((s) => ({
      time: s.time,
      color: this._highlighter(s.time)
    })), this.requestUpdate();
  }
}
export {
  S as SessionHighlighting
};
