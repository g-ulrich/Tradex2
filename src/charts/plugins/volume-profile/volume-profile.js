var _ = Object.defineProperty;
var u = (a, t, i) => t in a ? _(a, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : a[t] = i;
var o = (a, t, i) => (u(a, typeof t != "symbol" ? t + "" : t, i), i);
function c(a, t, i) {
  const s = Math.round(i * a), e = Math.round(i * t);
  return {
    position: Math.min(s, e),
    length: Math.abs(e - s) + 1
  };
}
class d {
  constructor(t) {
    o(this, "_data");
    this._data = t;
  }
  draw(t) {
    t.useBitmapCoordinateSpace((i) => {
      if (this._data.x === null || this._data.top === null)
        return;
      const s = i.context, e = c(
        this._data.x,
        this._data.x + this._data.width,
        i.horizontalPixelRatio
      ), h = c(
        this._data.top,
        this._data.top - this._data.columnHeight * this._data.items.length,
        i.verticalPixelRatio
      );
      s.fillStyle = "rgba(0, 0, 255, 0.2)", s.fillRect(
        e.position,
        h.position,
        e.length,
        h.length
      ), s.fillStyle = "rgba(80, 80, 255, 0.8)", this._data.items.forEach((r) => {
        if (r.y === null)
          return;
        const n = c(
          r.y,
          r.y - this._data.columnHeight,
          i.verticalPixelRatio
        ), l = c(
          this._data.x,
          this._data.x + r.width,
          i.horizontalPixelRatio
        );
        s.fillRect(
          l.position,
          n.position,
          l.length,
          n.length - 2
          // 1 to close gaps
        );
      });
    });
  }
}
class m {
  constructor(t) {
    o(this, "_source");
    o(this, "_x", null);
    o(this, "_width", 6);
    o(this, "_columnHeight", 0);
    o(this, "_top", null);
    o(this, "_items", []);
    this._source = t;
  }
  update() {
    const t = this._source._vpData, i = this._source._series, s = this._source._chart.timeScale();
    this._x = s.timeToCoordinate(t.time), this._width = s.options().barSpacing * t.width;
    const e = i.priceToCoordinate(t.profile[0].price) ?? 0, h = i.priceToCoordinate(t.profile[1].price) ?? s.height();
    this._columnHeight = Math.max(1, e - h);
    const r = t.profile.reduce(
      (n, l) => Math.max(n, l.vol),
      0
    );
    this._top = e, this._items = t.profile.map((n) => ({
      y: i.priceToCoordinate(n.price),
      width: this._width * n.vol / r
    }));
  }
  renderer() {
    return new d({
      x: this._x,
      top: this._top,
      columnHeight: this._columnHeight,
      width: this._width,
      items: this._items
    });
  }
}
class x {
  constructor(t, i, s) {
    o(this, "_chart");
    o(this, "_series");
    o(this, "_vpData");
    o(this, "_minPrice");
    o(this, "_maxPrice");
    o(this, "_paneViews");
    o(this, "_vpIndex", null);
    this._chart = t, this._series = i, this._vpData = s, this._minPrice = 1 / 0, this._maxPrice = -1 / 0, this._vpData.profile.forEach((e) => {
      e.price < this._minPrice && (this._minPrice = e.price), e.price > this._maxPrice && (this._maxPrice = e.price);
    }), this._paneViews = [new m(this)];
  }
  updateAllViews() {
    this._paneViews.forEach((t) => t.update());
  }
  // Ensures that the VP is within autoScale
  autoscaleInfo(t, i) {
    const s = this._chart.timeScale().timeToCoordinate(this._vpData.time);
    if (s === null)
      return null;
    const e = this._chart.timeScale().coordinateToLogical(s);
    return e === null || i < e || t > e + this._vpData.width ? null : {
      priceRange: {
        minValue: this._minPrice,
        maxValue: this._maxPrice
      }
    };
  }
  paneViews() {
    return this._paneViews;
  }
}
export {
  x as VolumeProfile
};
