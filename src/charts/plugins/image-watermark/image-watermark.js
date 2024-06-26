var E = Object.defineProperty;
var W = (a, e, t) => e in a ? E(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t;
var i = (a, e, t) => (W(a, typeof e != "symbol" ? e + "" : e, t), t);
class H {
  constructor(e, t) {
    i(this, "_source");
    i(this, "_view");
    this._source = e, this._view = t;
  }
  draw(e) {
    e.useMediaCoordinateSpace((t) => {
      const h = t.context, s = this._view._placement;
      if (s) {
        if (!this._source._imgElement)
          throw new Error("Image element missing.");
        h.globalAlpha = this._source._options.alpha ?? 1, h.drawImage(
          this._source._imgElement,
          s.x,
          s.y,
          s.width,
          s.height
        );
      }
    });
  }
}
class f {
  constructor(e) {
    i(this, "_source");
    i(this, "_placement", null);
    this._source = e;
  }
  zOrder() {
    return "bottom";
  }
  update() {
    this._placement = this._determinePlacement();
  }
  renderer() {
    return new H(this._source, this);
  }
  _determinePlacement() {
    if (!this._source._chart)
      return null;
    const e = this._source._chart.priceScale("left").width(), t = this._source._chart.timeScale().width(), h = e, s = this._source._chart.chartElement().clientHeight - this._source._chart.timeScale().height(), r = Math.round(t / 2) + h, u = Math.round(s / 2) + 0, c = this._source._options.padding ?? 0;
    let n = t - 2 * c, o = s - 2 * c;
    this._source._options.maxHeight && (o = Math.min(
      o,
      this._source._options.maxHeight
    )), this._source._options.maxWidth && (n = Math.min(n, this._source._options.maxWidth));
    const d = n / this._source._imageWidth, g = o / this._source._imageHeight, _ = Math.min(d, g), l = this._source._imageWidth * _, m = this._source._imageHeight * _, p = r - 0.5 * l, w = u - 0.5 * m;
    return {
      x: p,
      y: w,
      height: m,
      width: l
    };
  }
}
class x {
  constructor(e, t) {
    i(this, "_paneViews");
    i(this, "_imgElement", null);
    i(this, "_imageUrl");
    i(this, "_options");
    i(this, "_imageHeight", 0);
    // don't draw until loaded fully
    i(this, "_imageWidth", 0);
    i(this, "_chart", null);
    i(this, "_containerElement", null);
    i(this, "_requestUpdate");
    this._imageUrl = e, this._options = t, this._paneViews = [new f(this)];
  }
  attached({ chart: e, requestUpdate: t }) {
    this._chart = e, this._requestUpdate = t, this._containerElement = e.chartElement(), this._imgElement = new Image(), this._imgElement.onload = () => {
      var h, s;
      this._imageHeight = ((h = this._imgElement) == null ? void 0 : h.naturalHeight) ?? 1, this._imageWidth = ((s = this._imgElement) == null ? void 0 : s.naturalWidth) ?? 1, this._paneViews.forEach((r) => r.update()), this.requestUpdate();
    }, this._imgElement.src = this._imageUrl;
  }
  detached() {
    this._imgElement = null;
  }
  requestUpdate() {
    this._requestUpdate && this._requestUpdate();
  }
  updateAllViews() {
    this._paneViews.forEach((e) => e.update());
  }
  paneViews() {
    return this._paneViews;
  }
}
export {
  x as ImageWatermark
};
