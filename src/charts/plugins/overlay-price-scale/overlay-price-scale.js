var f = Object.defineProperty;
var g = (n, t, i) => t in n ? f(n, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : n[t] = i;
var a = (n, t, i) => (g(n, typeof t != "symbol" ? t + "" : t, i), i);
class S {
  constructor() {
    a(this, "_data", null);
  }
  update(t) {
    this._data = t;
  }
  draw(t) {
    t.useMediaCoordinateSpace((i) => {
      if (!this._data)
        return;
      const s = this._calculatePriceScale(
        i.mediaSize.height,
        this._data
      ), o = s.reduce((d, h) => Math.max(d, h.label.length), 0), r = "".padEnd(o, "0"), e = i.context, c = this._data.options.side === "left";
      e.font = "12px -apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif", e.textAlign = "center", e.textBaseline = "top";
      const l = e.measureText(r).width, u = c ? 10 : i.mediaSize.width - 10 - l, _ = u + 3 + Math.round(l / 2);
      s.forEach((d) => {
        e.beginPath();
        const h = d.y - 12 / 2;
        e.roundRect(
          u,
          h,
          l + 3 * 2,
          12 + 2 * 2,
          4
        ), e.fillStyle = this._data.options.backgroundColor, e.fill(), e.beginPath(), e.fillStyle = this._data.options.textColor, e.fillText(d.label, _, h + 2, l);
      });
    });
  }
  _calculatePriceScale(t, i) {
    const s = [], o = Math.round(10);
    let r = o;
    for (; r <= t - o; )
      s.push(r), r += 40;
    return s.map((c) => {
      const p = i.coordinateToPrice(c);
      return p === null ? null : {
        label: i.priceFormatter.format(p),
        y: c
      };
    }).filter((c) => !!c);
  }
}
class b {
  constructor() {
    a(this, "_renderer");
    this._renderer = new S();
  }
  renderer() {
    return this._renderer;
  }
  update(t) {
    this._renderer.update(t);
  }
}
const P = {
  textColor: "rgb(0, 0, 0)",
  backgroundColor: "rgba(255, 255, 255, 0.6)",
  side: "left"
};
class w {
  constructor(t) {
    a(this, "_paneViews");
    a(this, "_chart", null);
    a(this, "_series", null);
    a(this, "_requestUpdate");
    a(this, "_options");
    this._options = {
      ...P,
      ...t
    }, this._paneViews = [new b()];
  }
  applyOptions(t) {
    this._options = {
      ...this._options,
      ...t
    }, this._requestUpdate && this._requestUpdate();
  }
  attached({ chart: t, series: i, requestUpdate: s }) {
    this._chart = t, this._series = i, this._requestUpdate = s;
  }
  detached() {
    this._chart = null, this._series = null;
  }
  updateAllViews() {
    if (!this._series || !this._chart)
      return;
    const t = (e) => this._series.coordinateToPrice(e), i = (e) => this._series.priceToCoordinate(e), s = this._series.priceFormatter(), o = this._options, r = {
      coordinateToPrice: t,
      priceToCoordinate: i,
      priceFormatter: s,
      options: o
    };
    this._paneViews.forEach((e) => e.update(r));
  }
  paneViews() {
    return this._paneViews;
  }
}
export {
  w as OverlayPriceScale
};
