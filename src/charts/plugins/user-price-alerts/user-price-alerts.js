var x = Object.defineProperty;
var y = (o, e, t) => e in o ? x(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var a = (o, e, t) => (y(o, typeof e != "symbol" ? e + "" : e, t), t);
const R = [
  new Path2D(
    "M5.34004 1.12254C4.7902 0.438104 3.94626 0 3 0C1.34315 0 0 1.34315 0 3C0 3.94626 0.438104 4.7902 1.12254 5.34004C1.04226 5.714 1 6.10206 1 6.5C1 9.36902 3.19675 11.725 6 11.9776V10.9725C3.75002 10.7238 2 8.81628 2 6.5C2 4.01472 4.01472 2 6.5 2C8.81628 2 10.7238 3.75002 10.9725 6H11.9776C11.9574 5.77589 11.9237 5.55565 11.8775 5.34011C12.562 4.79026 13.0001 3.9463 13.0001 3C13.0001 1.34315 11.6569 0 10.0001 0C9.05382 0 8.20988 0.438111 7.66004 1.12256C7.28606 1.04227 6.89797 1 6.5 1C6.10206 1 5.714 1.04226 5.34004 1.12254ZM4.28255 1.46531C3.93534 1.17484 3.48809 1 3 1C1.89543 1 1 1.89543 1 3C1 3.48809 1.17484 3.93534 1.46531 4.28255C2.0188 3.02768 3.02768 2.0188 4.28255 1.46531ZM8.71751 1.46534C9.97237 2.01885 10.9812 3.02774 11.5347 4.28262C11.8252 3.93541 12.0001 3.48812 12.0001 3C12.0001 1.89543 11.1047 1 10.0001 1C9.51199 1 9.06472 1.17485 8.71751 1.46534Z"
  ),
  new Path2D("M7 7V4H8V8H5V7H7Z"),
  new Path2D("M10 8V10H8V11H10V13H11V11H13V10H11V8H10Z")
], S = [
  new Path2D(
    "M5.11068 1.65894C3.38969 2.08227 1.98731 3.31569 1.33103 4.93171C0.938579 4.49019 0.700195 3.90868 0.700195 3.27148C0.700195 1.89077 1.81948 0.771484 3.2002 0.771484C3.9664 0.771484 4.65209 1.11617 5.11068 1.65894Z"
  ),
  new Path2D(
    "M12.5 3.37148C12.5 4.12192 12.1694 4.79514 11.6458 5.25338C11.0902 3.59304 9.76409 2.2857 8.09208 1.7559C8.55066 1.21488 9.23523 0.871484 10 0.871484C11.3807 0.871484 12.5 1.99077 12.5 3.37148Z"
  ),
  new Path2D(
    "M6.42896 11.4999C8.91424 11.4999 10.929 9.48522 10.929 6.99994C10.929 4.51466 8.91424 2.49994 6.42896 2.49994C3.94367 2.49994 1.92896 4.51466 1.92896 6.99994C1.92896 9.48522 3.94367 11.4999 6.42896 11.4999ZM6.00024 3.99994V6.99994H4.00024V7.99994H7.00024V3.99994H6.00024Z"
  ),
  new Path2D(
    "M4.08902 0.934101C4.4888 1.08621 4.83946 1.33793 5.11068 1.65894C5.06565 1.67001 5.02084 1.68164 4.97625 1.69382C4.65623 1.78123 4.34783 1.89682 4.0539 2.03776C3.16224 2.4653 2.40369 3.12609 1.8573 3.94108C1.64985 4.2505 1.47298 4.58216 1.33103 4.93171C1.05414 4.6202 0.853937 4.23899 0.760047 3.81771C0.720863 3.6419 0.700195 3.45911 0.700195 3.27148C0.700195 1.89077 1.81948 0.771484 3.2002 0.771484C3.51324 0.771484 3.81285 0.829023 4.08902 0.934101ZM12.3317 4.27515C12.4404 3.99488 12.5 3.69015 12.5 3.37148C12.5 1.99077 11.3807 0.871484 10 0.871484C9.66727 0.871484 9.34974 0.936485 9.05938 1.05448C8.68236 1.20769 8.35115 1.45027 8.09208 1.7559C8.43923 1.8659 8.77146 2.00942 9.08499 2.18265C9.96762 2.67034 10.702 3.39356 11.2032 4.26753C11.3815 4.57835 11.5303 4.90824 11.6458 5.25338C11.947 4.98973 12.1844 4.65488 12.3317 4.27515ZM9.18112 3.43939C8.42029 2.85044 7.46556 2.49994 6.42896 2.49994C3.94367 2.49994 1.92896 4.51466 1.92896 6.99994C1.92896 9.48522 3.94367 11.4999 6.42896 11.4999C8.91424 11.4999 10.929 9.48522 10.929 6.99994C10.929 5.55126 10.2444 4.26246 9.18112 3.43939ZM6.00024 3.99994H7.00024V7.99994H4.00024V6.99994H6.00024V3.99994Z"
  )
], H = 10, M = new Path2D(
  "M9.35359 1.35359C9.11789 1.11789 8.88219 0.882187 8.64648 0.646484L5.00004 4.29293L1.35359 0.646484C1.11791 0.882212 0.882212 1.11791 0.646484 1.35359L4.29293 5.00004L0.646484 8.64648C0.882336 8.88204 1.11804 9.11774 1.35359 9.35359L5.00004 5.70714L8.64648 9.35359C8.88217 9.11788 9.11788 8.88217 9.35359 8.64649L5.70714 5.00004L9.35359 1.35359Z"
);
class b {
  constructor() {
    a(this, "_listeners", []);
  }
  subscribe(e, t, i) {
    const s = {
      callback: e,
      linkedObject: t,
      singleshot: i === !0
    };
    this._listeners.push(s);
  }
  unsubscribe(e) {
    const t = this._listeners.findIndex(
      (i) => e === i.callback
    );
    t > -1 && this._listeners.splice(t, 1);
  }
  unsubscribeAll(e) {
    this._listeners = this._listeners.filter(
      (t) => t.linkedObject !== e
    );
  }
  fire(e) {
    const t = [...this._listeners];
    this._listeners = this._listeners.filter(
      (i) => !i.singleshot
    ), t.forEach(
      (i) => i.callback(e)
    );
  }
  hasListeners() {
    return this._listeners.length > 0;
  }
  destroy() {
    this._listeners = [];
  }
}
class L {
  constructor() {
    a(this, "_chart");
    a(this, "_series");
    a(this, "_unSubscribers", []);
    a(this, "_clicked", new b());
    a(this, "_mouseMoved", new b());
  }
  attached(e, t) {
    this._chart = e, this._series = t;
    const i = this._chart.chartElement();
    this._addMouseEventListener(
      i,
      "mouseleave",
      this._mouseLeave
    ), this._addMouseEventListener(
      i,
      "mousemove",
      this._mouseMove
    ), this._addMouseEventListener(
      i,
      "click",
      this._mouseClick
    );
  }
  detached() {
    this._series = void 0, this._clicked.destroy(), this._mouseMoved.destroy(), this._unSubscribers.forEach((e) => {
      e();
    }), this._unSubscribers = [];
  }
  clicked() {
    return this._clicked;
  }
  mouseMoved() {
    return this._mouseMoved;
  }
  _addMouseEventListener(e, t, i) {
    const s = i.bind(this);
    e.addEventListener(t, s);
    const r = () => {
      e.removeEventListener(t, s);
    };
    this._unSubscribers.push(r);
  }
  _mouseLeave() {
    this._mouseMoved.fire(null);
  }
  _mouseMove(e) {
    this._mouseMoved.fire(this._determineMousePosition(e));
  }
  _mouseClick(e) {
    this._clicked.fire(this._determineMousePosition(e));
  }
  _determineMousePosition(e) {
    if (!this._chart || !this._series)
      return null;
    const t = this._chart.chartElement(), i = t.getBoundingClientRect(), s = this._series.priceScale().width(), r = this._chart.timeScale().height(), n = e.clientX - i.x, h = e.clientY - i.y, l = h > t.clientHeight - r, c = t.clientWidth - s - n, d = c < 0;
    return {
      x: n,
      y: h,
      xPositionRelativeToPriceScale: c,
      overPriceScale: d,
      overTimeScale: l
    };
  }
}
class P {
  constructor() {
    a(this, "_data", null);
  }
  update(e) {
    this._data = e;
  }
}
function z(o) {
  return Math.floor(o * 0.5);
}
function v(o, e, t = 1, i) {
  const s = Math.round(e * o), r = i ? t : Math.round(t * e), n = z(r);
  return { position: s - n, length: r };
}
class A extends P {
  draw(e) {
    e.useBitmapCoordinateSpace((t) => {
      if (!this._data)
        return;
      this._drawAlertLines(t), this._drawAlertIcons(t), this._data.alerts.some(
        (s) => s.showHover && s.hoverRemove
      ) || (this._drawCrosshairLine(t), this._drawCrosshairLabelButton(t)), this._drawAlertLabel(t);
    });
  }
  _drawHorizontalLine(e, t) {
    const i = e.context;
    try {
      const s = v(
        t.y,
        e.verticalPixelRatio,
        t.lineWidth
      ), r = s.position + s.length / 2;
      i.save(), i.beginPath(), i.lineWidth = t.lineWidth, i.strokeStyle = t.color;
      const n = 4 * e.horizontalPixelRatio;
      i.setLineDash([n, n]), i.moveTo(0, r), i.lineTo(
        (t.width - 21) * e.horizontalPixelRatio,
        r
      ), i.stroke();
    } finally {
      i.restore();
    }
  }
  _drawAlertLines(e) {
    var i;
    if (!((i = this._data) != null && i.alerts))
      return;
    const t = this._data.color;
    this._data.alerts.forEach((s) => {
      this._drawHorizontalLine(e, {
        width: e.mediaSize.width,
        lineWidth: 1,
        color: t,
        y: s.y
      });
    });
  }
  _drawAlertIcons(e) {
    var s;
    if (!((s = this._data) != null && s.alerts))
      return;
    const t = this._data.color, i = this._data.alertIcon;
    this._data.alerts.forEach((r) => {
      this._drawLabel(e, {
        width: e.mediaSize.width,
        labelHeight: 17,
        y: r.y,
        roundedCorners: 2,
        icon: i,
        iconScaling: 13 / 13,
        padding: {
          left: 4,
          top: 2
        },
        color: t
      });
    });
  }
  _calculateLabelWidth(e) {
    return 9 * 2 + 26 + e * 5.81;
  }
  _drawAlertLabel(e) {
    var h;
    if (!((h = this._data) != null && h.alerts))
      return;
    const t = e.context, i = this._data.alerts.find((l) => l.showHover);
    if (!i || !i.showHover)
      return;
    const s = this._calculateLabelWidth(i.text.length), r = v(
      e.mediaSize.width / 2,
      e.horizontalPixelRatio,
      s
    ), n = v(
      i.y,
      e.verticalPixelRatio,
      20
    );
    t.save();
    try {
      const l = 4 * e.horizontalPixelRatio;
      t.beginPath(), t.roundRect(
        r.position,
        n.position,
        r.length,
        n.length,
        l
      ), t.fillStyle = "#FFFFFF", t.fill();
      const c = r.position + r.length - 26 * e.horizontalPixelRatio;
      i.hoverRemove && (t.beginPath(), t.roundRect(
        c,
        n.position,
        26 * e.horizontalPixelRatio,
        n.length,
        [0, l, l, 0]
      ), t.fillStyle = "#F0F3FA", t.fill()), t.beginPath();
      const d = v(
        c / e.horizontalPixelRatio,
        e.horizontalPixelRatio,
        1
      );
      t.fillStyle = "#F1F3FB", t.fillRect(
        d.position,
        n.position,
        d.length,
        n.length
      ), t.beginPath(), t.roundRect(
        r.position,
        n.position,
        r.length,
        n.length,
        l
      ), t.strokeStyle = "#131722", t.lineWidth = 1 * e.horizontalPixelRatio, t.stroke(), t.beginPath(), t.fillStyle = "#131722", t.textBaseline = "middle", t.font = `${Math.round(12 * e.verticalPixelRatio)}px sans-serif`, t.fillText(
        i.text,
        r.position + 9 * e.horizontalPixelRatio,
        i.y * e.verticalPixelRatio
      ), t.beginPath();
      const u = 9;
      t.translate(
        c + e.horizontalPixelRatio * (26 - u) / 2,
        (i.y - 5) * e.verticalPixelRatio
      );
      const C = u / H * e.horizontalPixelRatio;
      t.scale(C, C), t.fillStyle = "#131722", t.fill(M, "evenodd");
    } finally {
      t.restore();
    }
  }
  _drawCrosshairLine(e) {
    var t;
    (t = this._data) != null && t.crosshair && this._drawHorizontalLine(e, {
      width: e.mediaSize.width,
      lineWidth: 1,
      color: this._data.color,
      y: this._data.crosshair.y
    });
  }
  _drawCrosshairLabelButton(e) {
    var t, i;
    !((t = this._data) != null && t.button) || !((i = this._data) != null && i.crosshair) || this._drawLabel(e, {
      width: e.mediaSize.width,
      labelHeight: 21,
      y: this._data.crosshair.y,
      roundedCorners: [2, 0, 0, 2],
      icon: this._data.button.crosshairLabelIcon,
      iconScaling: 13 / 13,
      padding: {
        left: 4,
        top: 4
      },
      color: this._data.button.hovering ? this._data.button.hoverColor : this._data.color
    });
  }
  _drawLabel(e, t) {
    const i = e.context;
    try {
      i.save(), i.beginPath();
      const s = v(
        t.y,
        e.verticalPixelRatio,
        t.labelHeight
      ), r = (t.width - (21 + 1)) * e.horizontalPixelRatio;
      i.roundRect(
        r,
        s.position,
        21 * e.horizontalPixelRatio,
        s.length,
        p(t.roundedCorners, e.horizontalPixelRatio)
      ), i.fillStyle = t.color, i.fill(), i.beginPath(), i.translate(
        r + t.padding.left * e.horizontalPixelRatio,
        s.position + t.padding.top * e.verticalPixelRatio
      ), i.scale(
        t.iconScaling * e.horizontalPixelRatio,
        t.iconScaling * e.verticalPixelRatio
      ), i.fillStyle = "#FFFFFF", t.icon.forEach((n) => {
        i.beginPath(), i.fill(n, "evenodd");
      });
    } finally {
      i.restore();
    }
  }
}
function p(o, e) {
  return typeof o == "number" ? o * e : o.map((t) => t * e);
}
class V extends P {
  draw(e) {
    e.useBitmapCoordinateSpace((t) => {
      this._data && this._drawCrosshairLabel(t);
    });
  }
  _drawCrosshairLabel(e) {
    var i;
    if (!((i = this._data) != null && i.crosshair))
      return;
    const t = e.context;
    try {
      const r = e.bitmapSize.width - 8 * e.horizontalPixelRatio;
      t.save(), t.beginPath(), t.fillStyle = this._data.color;
      const n = v(this._data.crosshair.y, e.verticalPixelRatio, 21), h = 2 * e.horizontalPixelRatio;
      t.roundRect(
        0,
        n.position,
        r,
        n.length,
        [0, h, h, 0]
      ), t.fill(), t.beginPath(), t.fillStyle = "#FFFFFF", t.textBaseline = "middle", t.textAlign = "right", t.font = `${Math.round(12 * e.verticalPixelRatio)}px sans-serif`;
      const l = t.measureText(this._data.crosshair.text);
      t.fillText(
        this._data.crosshair.text,
        l.width + 10 * e.horizontalPixelRatio,
        this._data.crosshair.y * e.verticalPixelRatio
      );
    } finally {
      t.restore();
    }
  }
}
class m {
  constructor(e) {
    a(this, "_renderer");
    this._renderer = e ? new V() : new A();
  }
  zOrder() {
    return "top";
  }
  renderer() {
    return this._renderer;
  }
  update(e) {
    this._renderer.update(e);
  }
}
class W {
  constructor() {
    a(this, "_alertAdded", new b());
    a(this, "_alertRemoved", new b());
    a(this, "_alertChanged", new b());
    a(this, "_alertsChanged", new b());
    a(this, "_alerts");
    a(this, "_alertsArray", []);
    this._alerts = /* @__PURE__ */ new Map(), this._alertsChanged.subscribe(() => {
      this._updateAlertsArray();
    }, this);
  }
  destroy() {
    this._alertsChanged.unsubscribeAll(this);
  }
  alertAdded() {
    return this._alertAdded;
  }
  alertRemoved() {
    return this._alertRemoved;
  }
  alertChanged() {
    return this._alertChanged;
  }
  alertsChanged() {
    return this._alertsChanged;
  }
  addAlert(e) {
    const t = this._getNewId(), i = {
      price: e,
      id: t
    };
    return this._alerts.set(t, i), this._alertAdded.fire(i), this._alertsChanged.fire(), t;
  }
  removeAlert(e) {
    this._alerts.has(e) && (this._alerts.delete(e), this._alertRemoved.fire(e), this._alertsChanged.fire());
  }
  alerts() {
    return this._alertsArray;
  }
  _updateAlertsArray() {
    this._alertsArray = Array.from(this._alerts.values()).sort((e, t) => t.price - e.price);
  }
  _getNewId() {
    let e = Math.round(Math.random() * 1e6).toString(16);
    for (; this._alerts.has(e); )
      e = Math.round(Math.random() * 1e6).toString(16);
    return e;
  }
}
class F extends W {
  constructor() {
    super();
    a(this, "_chart");
    a(this, "_series");
    a(this, "_mouseHandlers");
    a(this, "_paneViews", []);
    a(this, "_pricePaneViews", []);
    a(this, "_lastMouseUpdate", null);
    a(this, "_currentCursor", null);
    a(this, "_symbolName", "");
    a(this, "_hoveringID", "");
    this._mouseHandlers = new L();
  }
  attached({ chart: t, series: i, requestUpdate: s }) {
    this._chart = t, this._series = i, this._paneViews = [new m(!1)], this._pricePaneViews = [new m(!0)], this._mouseHandlers.attached(t, i), this._mouseHandlers.mouseMoved().subscribe((r) => {
      this._lastMouseUpdate = r, s();
    }, this), this._mouseHandlers.clicked().subscribe((r) => {
      if (r && this._series) {
        if (this._isHovering(r)) {
          const n = this._series.coordinateToPrice(r.y);
          n && (this.addAlert(n), s());
        }
        this._hoveringID && (this.removeAlert(this._hoveringID), s());
      }
    }, this);
  }
  detached() {
    this._mouseHandlers.mouseMoved().unsubscribeAll(this), this._mouseHandlers.clicked().unsubscribeAll(this), this._mouseHandlers.detached(), this._series = void 0;
  }
  paneViews() {
    return this._paneViews;
  }
  priceAxisPaneViews() {
    return this._pricePaneViews;
  }
  updateAllViews() {
    var s;
    const t = this.alerts(), i = this._calculateRendererData(
      t,
      this._lastMouseUpdate
    );
    this._currentCursor = null, ((s = i == null ? void 0 : i.button) != null && s.hovering || i != null && i.alerts.some((r) => r.showHover && r.hoverRemove)) && (this._currentCursor = "pointer"), this._paneViews.forEach((r) => r.update(i)), this._pricePaneViews.forEach((r) => r.update(i));
  }
  hitTest() {
    return this._currentCursor ? {
      cursorStyle: this._currentCursor,
      externalId: "user-alerts-primitive",
      zOrder: "top"
    } : null;
  }
  setSymbolName(t) {
    this._symbolName = t;
  }
  _isHovering(t) {
    return !!(t && t.xPositionRelativeToPriceScale >= 1 && t.xPositionRelativeToPriceScale < 21);
  }
  _isHoveringRemoveButton(t, i, s, r) {
    if (!t || !i || Math.abs(t.y - s) > 20 / 2)
      return !1;
    const h = 9 * 2 + 26 + r * 5.81, l = (i + h - 26) * 0.5;
    return Math.abs(t.x - l) <= 26 / 2;
  }
  /**
   * We are calculating this here instead of within a view
   * because the data is identical for both Renderers so lets
   * rather calculate it once here.
   */
  _calculateRendererData(t, i) {
    var C;
    if (!this._series)
      return null;
    const s = this._series.priceFormatter(), r = i && !i.overTimeScale, n = r, h = i && this._series.coordinateToPrice(i.y), l = s.format(h ?? -100);
    let c = 1 / 0, d = -1;
    const u = t.map((g, f) => {
      const _ = this._series.priceToCoordinate(g.price) ?? -100;
      if (i != null && i.y && _ >= 0) {
        const w = Math.abs(i.y - _);
        w < c && (d = f, c = w);
      }
      return {
        y: _,
        showHover: !1,
        price: g.price,
        id: g.id
      };
    });
    if (this._hoveringID = "", d >= 0 && c < 50) {
      const g = ((C = this._chart) == null ? void 0 : C.timeScale().width()) ?? 0, f = u[d], _ = `${this._symbolName} crossing ${this._series.priceFormatter().format(f.price)}`, w = this._isHoveringRemoveButton(
        i,
        g,
        f.y,
        _.length
      );
      u[d] = {
        ...u[d],
        showHover: !0,
        text: _,
        hoverRemove: w
      }, w && (this._hoveringID = f.id);
    }
    return {
      alertIcon: S,
      alerts: u,
      button: n ? {
        hovering: this._isHovering(i),
        hoverColor: "#50535E",
        crosshairLabelIcon: R
      } : null,
      color: "#131722",
      crosshair: r ? {
        y: i.y,
        text: l
      } : null
    };
  }
}
export {
  F as UserPriceAlerts
};
