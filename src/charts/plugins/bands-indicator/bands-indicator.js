var m = Object.defineProperty;
var I = (r, t, e) => t in r ? m(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var n = (r, t, e) => (I(r, typeof t != "symbol" ? t + "" : t, e), e);
function p(r) {
  if (r === void 0)
    throw new Error("Value is undefined");
  return r;
}
class x {
  constructor() {
    n(this, "_chart");
    n(this, "_series");
    n(this, "_requestUpdate");
    // This method is a class property to maintain the
    // lexical 'this' scope (due to the use of the arrow function)
    // and to ensure its reference stays the same, so we can unsubscribe later.
    n(this, "_fireDataUpdated", (t) => {
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
    return p(this._chart);
  }
  get series() {
    return p(this._series);
  }
}
function T(r) {
  return JSON.parse(JSON.stringify(r));
}
class f {
  constructor(t) {
    n(this, "numbers");
    n(this, "cache");
    this.numbers = t, this.cache = /* @__PURE__ */ new Map();
  }
  findClosestIndex(t, e) {
    const s = `${t}:${e}`;
    if (this.cache.has(s))
      return this.cache.get(s);
    const i = this._performSearch(t, e);
    return this.cache.set(s, i), i;
  }
  _performSearch(t, e) {
    let s = 0, i = this.numbers.length - 1;
    if (t <= this.numbers[0].time)
      return 0;
    if (t >= this.numbers[i].time)
      return i;
    for (; s <= i; ) {
      const a = Math.floor((s + i) / 2), o = this.numbers[a].time;
      if (o === t)
        return a;
      o > t ? i = a - 1 : s = a + 1;
    }
    return e === "left" ? s : i;
  }
}
class w {
  constructor(t, e = 10) {
    n(this, "_arr");
    n(this, "_chunkSize");
    n(this, "_cache");
    this._arr = t, this._chunkSize = e, this._cache = /* @__PURE__ */ new Map();
  }
  getMinMax(t, e) {
    const s = `${t}:${e}`;
    if (s in this._cache)
      return this._cache.get(s);
    const i = {
      lower: 1 / 0,
      upper: -1 / 0
    }, a = Math.floor(t / this._chunkSize), o = Math.floor(e / this._chunkSize);
    for (let c = a; c <= o; c++) {
      const h = c * this._chunkSize, l = Math.min(
        (c + 1) * this._chunkSize - 1,
        this._arr.length - 1
      ), _ = `${h}:${l}`;
      if (_ in this._cache.keys()) {
        const u = this._cache.get(s);
        this._check(u, i);
      } else {
        const u = {
          lower: 1 / 0,
          upper: -1 / 0
        };
        for (let d = h; d <= l; d++)
          this._check(this._arr[d], u);
        this._cache.set(_, u), this._check(u, i);
      }
    }
    return this._cache.set(s, i), i;
  }
  _check(t, e) {
    t.lower < e.lower && (e.lower = t.lower), t.upper > e.upper && (e.upper = t.upper);
  }
}
class g {
  constructor(t) {
    n(this, "_viewData");
    this._viewData = t;
  }
  draw() {
  }
  drawBackground(t) {
    const e = this._viewData.data;
    t.useBitmapCoordinateSpace((s) => {
      const i = s.context;
      i.scale(s.horizontalPixelRatio, s.verticalPixelRatio), i.strokeStyle = this._viewData.options.lineColor, i.lineWidth = this._viewData.options.lineWidth, i.beginPath();
      const a = new Path2D(), o = new Path2D();
      a.moveTo(e[0].x, e[0].upper), o.moveTo(e[0].x, e[0].upper);
      for (const h of e)
        a.lineTo(h.x, h.upper), o.lineTo(h.x, h.upper);
      const c = e.length - 1;
      a.lineTo(e[c].x, e[c].lower), o.moveTo(e[c].x, e[c].lower);
      for (let h = e.length - 2; h >= 0; h--)
        a.lineTo(e[h].x, e[h].lower), o.lineTo(e[h].x, e[h].lower);
      a.lineTo(e[0].x, e[0].upper), a.closePath(), i.stroke(o), i.fillStyle = this._viewData.options.fillColor, i.fill(a);
    });
  }
}
class D {
  constructor(t) {
    n(this, "_source");
    n(this, "_data");
    this._source = t, this._data = {
      data: [],
      options: this._source._options
    };
  }
  update() {
    const t = this._source.series, e = this._source.chart.timeScale();
    this._data.data = this._source._bandsData.map((s) => ({
      x: e.timeToCoordinate(s.time) ?? -100,
      upper: t.priceToCoordinate(s.upper) ?? -100,
      lower: t.priceToCoordinate(s.lower) ?? -100
    }));
  }
  renderer() {
    return new g(this._data);
  }
}
function b(r) {
  if (r.close)
    return r.close;
  if (r.value)
    return r.value;
}
const V = {
  lineColor: "rgb(25, 200, 100)",
  fillColor: "rgba(25, 200, 100, 0.25)",
  lineWidth: 1
};
class v extends x {
  constructor(e = {}) {
    super();
    n(this, "_paneViews");
    n(this, "_seriesData", []);
    n(this, "_bandsData", []);
    n(this, "_options");
    n(this, "_timeIndices");
    n(this, "_upperLower");
    n(this, "_minValue", Number.POSITIVE_INFINITY);
    n(this, "_maxValue", Number.NEGATIVE_INFINITY);
    this._options = { ...V, ...e }, this._paneViews = [new D(this)], this._timeIndices = new f([]), this._upperLower = new w([]);
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
    this._seriesData = T(this.series.data()), this.calculateBands(), e === "full" && (this._timeIndices = new f(
      this._seriesData
    ));
  }
  calculateBands() {
    const e = new Array(this._seriesData.length);
    let s = 0;
    this._minValue = Number.POSITIVE_INFINITY, this._maxValue = Number.NEGATIVE_INFINITY, this._seriesData.forEach((i) => {
      const a = b(i);
      if (a === void 0)
        return;
      const o = a * 1.1, c = a * 0.9;
      o > this._maxValue && (this._maxValue = o), c < this._minValue && (this._minValue = c), e[s] = {
        upper: o,
        lower: c,
        time: i.time
      }, s += 1;
    }), e.length = s, this._bandsData = e, this._upperLower = new w(this._bandsData, 4);
  }
  autoscaleInfo(e, s) {
    const i = this.chart.timeScale(), a = i.coordinateToTime(
      i.logicalToCoordinate(e) ?? 0
    ) ?? 0, o = i.coordinateToTime(
      i.logicalToCoordinate(s) ?? 5e9
    ) ?? 5e9, c = this._timeIndices.findClosestIndex(a, "left"), h = this._timeIndices.findClosestIndex(o, "right"), l = this._upperLower.getMinMax(c, h);
    return {
      priceRange: {
        minValue: l.lower,
        maxValue: l.upper
      }
    };
  }
}
export {
  v as BandsIndicator
};
