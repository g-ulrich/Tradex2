/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/fontawesome/js/all.min.js":
/*!***************************************!*\
  !*** ./src/fontawesome/js/all.min.js ***!
  \***************************************/
/***/ (() => {

/*!
 * Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.

/***/ }),

/***/ "./src/fontawesome/js/fontawesome.min.js":
/*!***********************************************!*\
  !*** ./src/fontawesome/js/fontawesome.min.js ***!
  \***********************************************/
/***/ (() => {

/*!
 * Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
!function () {
  "use strict";

  function n(a, t) {
    var e,
      n = Object.keys(a);
    return Object.getOwnPropertySymbols && (e = Object.getOwnPropertySymbols(a), t && (e = e.filter(function (t) {
      return Object.getOwnPropertyDescriptor(a, t).enumerable;
    })), n.push.apply(n, e)), n;
  }
  function k(a) {
    for (var t = 1; t < arguments.length; t++) {
      var e = null != arguments[t] ? arguments[t] : {};
      t % 2 ? n(Object(e), !0).forEach(function (t) {
        s(a, t, e[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(e)) : n(Object(e)).forEach(function (t) {
        Object.defineProperty(a, t, Object.getOwnPropertyDescriptor(e, t));
      });
    }
    return a;
  }
  function i(t) {
    return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t;
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    })(t);
  }
  function r(t, a) {
    for (var e = 0; e < a.length; e++) {
      var n = a[e];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
    }
  }
  function s(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
      value: e,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[a] = e, t;
  }
  function m(t, a) {
    return function (t) {
      if (Array.isArray(t)) return t;
    }(t) || function (t, a) {
      var e = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
      if (null != e) {
        var n,
          i,
          r = [],
          o = !0,
          s = !1;
        try {
          for (e = e.call(t); !(o = (n = e.next()).done) && (r.push(n.value), !a || r.length !== a); o = !0);
        } catch (t) {
          s = !0, i = t;
        } finally {
          try {
            o || null == e.return || e.return();
          } finally {
            if (s) throw i;
          }
        }
        return r;
      }
    }(t, a) || e(t, a) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function l(t) {
    return function (t) {
      if (Array.isArray(t)) return o(t);
    }(t) || function (t) {
      if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
    }(t) || e(t) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function e(t, a) {
    if (t) {
      if ("string" == typeof t) return o(t, a);
      var e = Object.prototype.toString.call(t).slice(8, -1);
      return "Map" === (e = "Object" === e && t.constructor ? t.constructor.name : e) || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? o(t, a) : void 0;
    }
  }
  function o(t, a) {
    (null == a || a > t.length) && (a = t.length);
    for (var e = 0, n = new Array(a); e < a; e++) n[e] = t[e];
    return n;
  }
  function t() {}
  var a = {},
    c = {},
    f = null,
    u = {
      mark: t,
      measure: t
    };
  try {
    "undefined" != typeof window && (a = window), "undefined" != typeof document && (c = document), "undefined" != typeof MutationObserver && (f = MutationObserver), "undefined" != typeof performance && (u = performance);
  } catch (t) {}
  var d = (a.navigator || {}).userAgent,
    b = void 0 === d ? "" : d,
    g = a,
    h = c,
    p = f,
    d = u,
    v = !!g.document,
    y = !!h.documentElement && !!h.head && "function" == typeof h.addEventListener && "function" == typeof h.createElement,
    w = ~b.indexOf("MSIE") || ~b.indexOf("Trident/"),
    a = "___FONT_AWESOME___",
    x = 16,
    A = "svg-inline--fa",
    O = "data-fa-i2svg",
    N = "data-fa-pseudo-element",
    P = "data-fa-pseudo-element-pending",
    S = "data-prefix",
    C = "data-icon",
    j = "fontawesome-i2svg",
    E = "async",
    z = ["HTML", "HEAD", "STYLE", "SCRIPT"],
    M = function () {
      try {
        return !0;
      } catch (t) {
        return !1;
      }
    }(),
    I = "classic",
    L = "sharp",
    Y = [I, L];
  function R(t) {
    return new Proxy(t, {
      get: function (t, a) {
        return a in t ? t[a] : t[I];
      }
    });
  }
  var T = R((s(c = {}, I, {
      fa: "solid",
      fas: "solid",
      "fa-solid": "solid",
      far: "regular",
      "fa-regular": "regular",
      fal: "light",
      "fa-light": "light",
      fat: "thin",
      "fa-thin": "thin",
      fad: "duotone",
      "fa-duotone": "duotone",
      fab: "brands",
      "fa-brands": "brands",
      fak: "kit",
      fakd: "kit",
      "fa-kit": "kit",
      "fa-kit-duotone": "kit"
    }), s(c, L, {
      fa: "solid",
      fass: "solid",
      "fa-solid": "solid",
      fasr: "regular",
      "fa-regular": "regular",
      fasl: "light",
      "fa-light": "light",
      fast: "thin",
      "fa-thin": "thin"
    }), c)),
    D = R((s(f = {}, I, {
      solid: "fas",
      regular: "far",
      light: "fal",
      thin: "fat",
      duotone: "fad",
      brands: "fab",
      kit: "fak"
    }), s(f, L, {
      solid: "fass",
      regular: "fasr",
      light: "fasl",
      thin: "fast"
    }), f)),
    F = R((s(u = {}, I, {
      fab: "fa-brands",
      fad: "fa-duotone",
      fak: "fa-kit",
      fal: "fa-light",
      far: "fa-regular",
      fas: "fa-solid",
      fat: "fa-thin"
    }), s(u, L, {
      fass: "fa-solid",
      fasr: "fa-regular",
      fasl: "fa-light",
      fast: "fa-thin"
    }), u)),
    H = R((s(b = {}, I, {
      "fa-brands": "fab",
      "fa-duotone": "fad",
      "fa-kit": "fak",
      "fa-light": "fal",
      "fa-regular": "far",
      "fa-solid": "fas",
      "fa-thin": "fat"
    }), s(b, L, {
      "fa-solid": "fass",
      "fa-regular": "fasr",
      "fa-light": "fasl",
      "fa-thin": "fast"
    }), b)),
    W = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,
    _ = "fa-layers-text",
    U = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
    X = R((s(c = {}, I, {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat"
    }), s(c, L, {
      900: "fass",
      400: "fasr",
      300: "fasl",
      100: "fast"
    }), c)),
    f = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    u = f.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
    B = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"],
    q = {
      GROUP: "duotone-group",
      SWAP_OPACITY: "swap-opacity",
      PRIMARY: "primary",
      SECONDARY: "secondary"
    },
    b = new Set();
  Object.keys(D[I]).map(b.add.bind(b)), Object.keys(D[L]).map(b.add.bind(b));
  var V = [].concat(Y, l(b), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", q.GROUP, q.SWAP_OPACITY, q.PRIMARY, q.SECONDARY]).concat(f.map(function (t) {
      return "".concat(t, "x");
    })).concat(u.map(function (t) {
      return "w-".concat(t);
    })),
    G = g.FontAwesomeConfig || {};
  h && "function" == typeof h.querySelector && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach(function (t) {
    var a = m(t, 2),
      t = a[0],
      a = a[1],
      t = "" === (t = function (t) {
        var a = h.querySelector("script[" + t + "]");
        if (a) return a.getAttribute(t);
      }(t)) || "false" !== t && ("true" === t || t);
    null != t && (G[a] = t);
  });
  c = {
    styleDefault: "solid",
    familyDefault: "classic",
    cssPrefix: "fa",
    replacementClass: A,
    autoReplaceSvg: !0,
    autoAddCss: !0,
    autoA11y: !0,
    searchPseudoElements: !1,
    observeMutations: !0,
    mutateApproach: "async",
    keepOriginalSource: !0,
    measurePerformance: !1,
    showMissingIcons: !0
  };
  G.familyPrefix && (G.cssPrefix = G.familyPrefix);
  var K = k(k({}, c), G);
  K.autoReplaceSvg || (K.observeMutations = !1);
  var J = {};
  Object.keys(c).forEach(function (a) {
    Object.defineProperty(J, a, {
      enumerable: !0,
      set: function (t) {
        K[a] = t, Q.forEach(function (t) {
          return t(J);
        });
      },
      get: function () {
        return K[a];
      }
    });
  }), Object.defineProperty(J, "familyPrefix", {
    enumerable: !0,
    set: function (t) {
      K.cssPrefix = t, Q.forEach(function (t) {
        return t(J);
      });
    },
    get: function () {
      return K.cssPrefix;
    }
  }), g.FontAwesomeConfig = J;
  var Q = [];
  var Z = x,
    $ = {
      size: 16,
      x: 0,
      y: 0,
      rotate: 0,
      flipX: !1,
      flipY: !1
    };
  var tt = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  function at() {
    for (var t = 12, a = ""; 0 < t--;) a += tt[62 * Math.random() | 0];
    return a;
  }
  function et(t) {
    for (var a = [], e = (t || []).length >>> 0; e--;) a[e] = t[e];
    return a;
  }
  function nt(t) {
    return t.classList ? et(t.classList) : (t.getAttribute("class") || "").split(" ").filter(function (t) {
      return t;
    });
  }
  function it(t) {
    return "".concat(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function rt(e) {
    return Object.keys(e || {}).reduce(function (t, a) {
      return t + "".concat(a, ": ").concat(e[a].trim(), ";");
    }, "");
  }
  function ot(t) {
    return t.size !== $.size || t.x !== $.x || t.y !== $.y || t.rotate !== $.rotate || t.flipX || t.flipY;
  }
  function st() {
    var t,
      a,
      e = A,
      n = J.cssPrefix,
      i = J.replacementClass,
      r = ':host,:root{--fa-font-solid:normal 900 1em/1 "Font Awesome 6 Solid";--fa-font-regular:normal 400 1em/1 "Font Awesome 6 Regular";--fa-font-light:normal 300 1em/1 "Font Awesome 6 Light";--fa-font-thin:normal 100 1em/1 "Font Awesome 6 Thin";--fa-font-duotone:normal 900 1em/1 "Font Awesome 6 Duotone";--fa-font-sharp-solid:normal 900 1em/1 "Font Awesome 6 Sharp";--fa-font-sharp-regular:normal 400 1em/1 "Font Awesome 6 Sharp";--fa-font-sharp-light:normal 300 1em/1 "Font Awesome 6 Sharp";--fa-font-sharp-thin:normal 100 1em/1 "Font Awesome 6 Sharp";--fa-font-brands:normal 400 1em/1 "Font Awesome 6 Brands"}svg:not(:host).svg-inline--fa,svg:not(:root).svg-inline--fa{overflow:visible;box-sizing:content-box}.svg-inline--fa{display:var(--fa-display,inline-block);height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-2xs{vertical-align:.1em}.svg-inline--fa.fa-xs{vertical-align:0}.svg-inline--fa.fa-sm{vertical-align:-.0714285705em}.svg-inline--fa.fa-lg{vertical-align:-.2em}.svg-inline--fa.fa-xl{vertical-align:-.25em}.svg-inline--fa.fa-2xl{vertical-align:-.3125em}.svg-inline--fa.fa-pull-left{margin-right:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-pull-right{margin-left:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-li{width:var(--fa-li-width,2em);top:.25em}.svg-inline--fa.fa-fw{width:var(--fa-fw-width,1.25em)}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:var(--fa-counter-background-color,#ff253a);border-radius:var(--fa-counter-border-radius,1em);box-sizing:border-box;color:var(--fa-inverse,#fff);line-height:var(--fa-counter-line-height,1);max-width:var(--fa-counter-max-width,5em);min-width:var(--fa-counter-min-width,1.5em);overflow:hidden;padding:var(--fa-counter-padding,.25em .5em);right:var(--fa-right,0);text-overflow:ellipsis;top:var(--fa-top,0);-webkit-transform:scale(var(--fa-counter-scale,.25));transform:scale(var(--fa-counter-scale,.25));-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:var(--fa-bottom,0);right:var(--fa-right,0);top:auto;-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:var(--fa-bottom,0);left:var(--fa-left,0);right:auto;top:auto;-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{top:var(--fa-top,0);right:var(--fa-right,0);-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:var(--fa-left,0);right:auto;top:var(--fa-top,0);-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:top left;transform-origin:top left}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-2xs{font-size:.625em;line-height:.1em;vertical-align:.225em}.fa-xs{font-size:.75em;line-height:.0833333337em;vertical-align:.125em}.fa-sm{font-size:.875em;line-height:.0714285718em;vertical-align:.0535714295em}.fa-lg{font-size:1.25em;line-height:.05em;vertical-align:-.075em}.fa-xl{font-size:1.5em;line-height:.0416666682em;vertical-align:-.125em}.fa-2xl{font-size:2em;line-height:.03125em;vertical-align:-.1875em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:var(--fa-li-margin,2.5em);padding-left:0}.fa-ul>li{position:relative}.fa-li{left:calc(var(--fa-li-width,2em) * -1);position:absolute;text-align:center;width:var(--fa-li-width,2em);line-height:inherit}.fa-border{border-color:var(--fa-border-color,#eee);border-radius:var(--fa-border-radius,.1em);border-style:var(--fa-border-style,solid);border-width:var(--fa-border-width,.08em);padding:var(--fa-border-padding,.2em .25em .15em)}.fa-pull-left{float:left;margin-right:var(--fa-pull-margin,.3em)}.fa-pull-right{float:right;margin-left:var(--fa-pull-margin,.3em)}.fa-beat{-webkit-animation-name:fa-beat;animation-name:fa-beat;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,ease-in-out);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-bounce{-webkit-animation-name:fa-bounce;animation-name:fa-bounce;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1))}.fa-fade{-webkit-animation-name:fa-fade;animation-name:fa-fade;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-beat-fade{-webkit-animation-name:fa-beat-fade;animation-name:fa-beat-fade;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-flip{-webkit-animation-name:fa-flip;animation-name:fa-flip;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,ease-in-out);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-shake{-webkit-animation-name:fa-shake;animation-name:fa-shake;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,linear);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,2s);animation-duration:var(--fa-animation-duration,2s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,linear);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin-reverse{--fa-animation-direction:reverse}.fa-pulse,.fa-spin-pulse{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,steps(8));animation-timing-function:var(--fa-animation-timing,steps(8))}@media (prefers-reduced-motion:reduce){.fa-beat,.fa-beat-fade,.fa-bounce,.fa-fade,.fa-flip,.fa-pulse,.fa-shake,.fa-spin,.fa-spin-pulse{-webkit-animation-delay:-1ms;animation-delay:-1ms;-webkit-animation-duration:1ms;animation-duration:1ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-transition-delay:0s;transition-delay:0s;-webkit-transition-duration:0s;transition-duration:0s}}@-webkit-keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}@keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}@-webkit-keyframes fa-bounce{0%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}10%{-webkit-transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0);transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{-webkit-transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em));transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{-webkit-transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0);transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{-webkit-transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em));transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em))}64%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}100%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}}@keyframes fa-bounce{0%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}10%{-webkit-transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0);transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{-webkit-transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em));transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{-webkit-transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0);transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{-webkit-transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em));transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em))}64%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}100%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}}@-webkit-keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@-webkit-keyframes fa-beat-fade{0%,100%{opacity:var(--fa-beat-fade-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(var(--fa-beat-fade-scale,1.125));transform:scale(var(--fa-beat-fade-scale,1.125))}}@keyframes fa-beat-fade{0%,100%{opacity:var(--fa-beat-fade-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(var(--fa-beat-fade-scale,1.125));transform:scale(var(--fa-beat-fade-scale,1.125))}}@-webkit-keyframes fa-flip{50%{-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@keyframes fa-flip{50%{-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@-webkit-keyframes fa-shake{0%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}4%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}24%,8%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}12%,28%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}16%{-webkit-transform:rotate(-22deg);transform:rotate(-22deg)}20%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}32%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}36%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}100%,40%{-webkit-transform:rotate(0);transform:rotate(0)}}@keyframes fa-shake{0%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}4%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}24%,8%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}12%,28%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}16%{-webkit-transform:rotate(-22deg);transform:rotate(-22deg)}20%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}32%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}36%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}100%,40%{-webkit-transform:rotate(0);transform:rotate(0)}}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}.fa-rotate-by{-webkit-transform:rotate(var(--fa-rotate-angle,0));transform:rotate(var(--fa-rotate-angle,0))}.fa-stack{display:inline-block;vertical-align:middle;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;z-index:var(--fa-stack-z-index,auto)}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:var(--fa-inverse,#fff)}.fa-sr-only,.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.fa-sr-only-focusable:not(:focus),.sr-only-focusable:not(:focus){position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color,currentColor);opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color,currentColor);opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fa-duotone.fa-inverse,.fad.fa-inverse{color:var(--fa-inverse,#fff)}';
    return "fa" === n && i === e || (t = new RegExp("\\.".concat("fa", "\\-"), "g"), a = new RegExp("\\--".concat("fa", "\\-"), "g"), e = new RegExp("\\.".concat(e), "g"), r = r.replace(t, ".".concat(n, "-")).replace(a, "--".concat(n, "-")).replace(e, ".".concat(i))), r;
  }
  var ct = !1;
  function ft() {
    J.autoAddCss && !ct && (function (t) {
      if (t && y) {
        var a = h.createElement("style");
        a.setAttribute("type", "text/css"), a.innerHTML = t;
        for (var e = h.head.childNodes, n = null, i = e.length - 1; -1 < i; i--) {
          var r = e[i],
            o = (r.tagName || "").toUpperCase();
          -1 < ["STYLE", "LINK"].indexOf(o) && (n = r);
        }
        h.head.insertBefore(a, n);
      }
    }(st()), ct = !0);
  }
  b = {
    mixout: function () {
      return {
        dom: {
          css: st,
          insertCss: ft
        }
      };
    },
    hooks: function () {
      return {
        beforeDOMElementCreation: function () {
          ft();
        },
        beforeI2svg: function () {
          ft();
        }
      };
    }
  }, f = g || {};
  f[a] || (f[a] = {}), f[a].styles || (f[a].styles = {}), f[a].hooks || (f[a].hooks = {}), f[a].shims || (f[a].shims = []);
  function lt() {
    h.removeEventListener("DOMContentLoaded", lt), dt = 1, mt.map(function (t) {
      return t();
    });
  }
  var ut = f[a],
    mt = [],
    dt = !1;
  function bt(t) {
    y && (dt ? setTimeout(t, 0) : mt.push(t));
  }
  function pt(t) {
    var e,
      a = t.tag,
      n = t.attributes,
      i = void 0 === n ? {} : n,
      n = t.children,
      n = void 0 === n ? [] : n;
    return "string" == typeof t ? it(t) : "<".concat(a, " ").concat((e = i, Object.keys(e || {}).reduce(function (t, a) {
      return t + "".concat(a, '="').concat(it(e[a]), '" ');
    }, "").trim()), ">").concat(n.map(pt).join(""), "</").concat(a, ">");
  }
  function vt(t, a, e) {
    if (t && t[a] && t[a][e]) return {
      prefix: a,
      iconName: e,
      icon: t[a][e]
    };
  }
  y && ((dt = (h.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(h.readyState)) || h.addEventListener("DOMContentLoaded", lt));
  function gt(t, a, e, n) {
    for (var i, r, o = Object.keys(t), s = o.length, c = void 0 !== n ? ht(a, n) : a, f = void 0 === e ? (i = 1, t[o[0]]) : (i = 0, e); i < s; i++) f = c(f, t[r = o[i]], r, t);
    return f;
  }
  var ht = function (i, r) {
    return function (t, a, e, n) {
      return i.call(r, t, a, e, n);
    };
  };
  function yt(t) {
    t = function (t) {
      for (var a = [], e = 0, n = t.length; e < n;) {
        var i,
          r = t.charCodeAt(e++);
        55296 <= r && r <= 56319 && e < n ? 56320 == (64512 & (i = t.charCodeAt(e++))) ? a.push(((1023 & r) << 10) + (1023 & i) + 65536) : (a.push(r), e--) : a.push(r);
      }
      return a;
    }(t);
    return 1 === t.length ? t[0].toString(16) : null;
  }
  function kt(n) {
    return Object.keys(n).reduce(function (t, a) {
      var e = n[a];
      return !!e.icon ? t[e.iconName] = e.icon : t[a] = e, t;
    }, {});
  }
  function wt(t, a, e) {
    var n = (2 < arguments.length && void 0 !== e ? e : {}).skipHooks,
      e = void 0 !== n && n,
      n = kt(a);
    "function" != typeof ut.hooks.addPack || e ? ut.styles[t] = k(k({}, ut.styles[t] || {}), n) : ut.hooks.addPack(t, kt(a)), "fas" === t && wt("fa", a);
  }
  var xt = ut.styles,
    At = ut.shims,
    Ot = (s(u = {}, I, Object.values(F[I])), s(u, L, Object.values(F[L])), u),
    Nt = null,
    Pt = {},
    St = {},
    Ct = {},
    jt = {},
    Et = {},
    zt = (s(c = {}, I, Object.keys(T[I])), s(c, L, Object.keys(T[L])), c);
  function Mt(t, a) {
    var e = a.split("-"),
      a = e[0],
      e = e.slice(1).join("-");
    return a !== t || "" === e || ~V.indexOf(e) ? null : e;
  }
  function It() {
    function t(n) {
      return gt(xt, function (t, a, e) {
        return t[e] = gt(a, n, {}), t;
      }, {});
    }
    Pt = t(function (a, t, e) {
      return t[3] && (a[t[3]] = e), t[2] && t[2].filter(function (t) {
        return "number" == typeof t;
      }).forEach(function (t) {
        a[t.toString(16)] = e;
      }), a;
    }), St = t(function (a, t, e) {
      return a[e] = e, t[2] && t[2].filter(function (t) {
        return "string" == typeof t;
      }).forEach(function (t) {
        a[t] = e;
      }), a;
    }), Et = t(function (a, t, e) {
      t = t[2];
      return a[e] = e, t.forEach(function (t) {
        a[t] = e;
      }), a;
    });
    var i = "far" in xt || J.autoFetchSvg,
      a = gt(At, function (t, a) {
        var e = a[0],
          n = a[1],
          a = a[2];
        return "far" !== n || i || (n = "fas"), "string" == typeof e && (t.names[e] = {
          prefix: n,
          iconName: a
        }), "number" == typeof e && (t.unicodes[e.toString(16)] = {
          prefix: n,
          iconName: a
        }), t;
      }, {
        names: {},
        unicodes: {}
      });
    Ct = a.names, jt = a.unicodes, Nt = Dt(J.styleDefault, {
      family: J.familyDefault
    });
  }
  function Lt(t, a) {
    return (Pt[t] || {})[a];
  }
  function Yt(t, a) {
    return (Et[t] || {})[a];
  }
  function Rt(t) {
    return Ct[t] || {
      prefix: null,
      iconName: null
    };
  }
  f = function (t) {
    Nt = Dt(t.styleDefault, {
      family: J.familyDefault
    });
  }, Q.push(f), It();
  function Tt() {
    return {
      prefix: null,
      iconName: null,
      rest: []
    };
  }
  function Dt(t, a) {
    var e = (1 < arguments.length && void 0 !== a ? a : {}).family,
      a = void 0 === e ? I : e,
      e = T[a][t],
      e = D[a][t] || D[a][e],
      t = t in ut.styles ? t : null;
    return e || t || null;
  }
  var Ft = (s(a = {}, I, Object.keys(F[I])), s(a, L, Object.keys(F[L])), a);
  function Ht(t, a) {
    var a = (1 < arguments.length && void 0 !== a ? a : {}).skipLookups,
      n = void 0 !== a && a,
      i = (s(a = {}, I, "".concat(J.cssPrefix, "-").concat(I)), s(a, L, "".concat(J.cssPrefix, "-").concat(L)), a),
      r = null,
      o = I;
    (t.includes(i[I]) || t.some(function (t) {
      return Ft[I].includes(t);
    })) && (o = I), (t.includes(i[L]) || t.some(function (t) {
      return Ft[L].includes(t);
    })) && (o = L);
    a = t.reduce(function (t, a) {
      var e = Mt(J.cssPrefix, a);
      return xt[a] ? (a = Ot[o].includes(a) ? H[o][a] : a, r = a, t.prefix = a) : -1 < zt[o].indexOf(a) ? (r = a, t.prefix = Dt(a, {
        family: o
      })) : e ? t.iconName = e : a !== J.replacementClass && a !== i[I] && a !== i[L] && t.rest.push(a), !n && t.prefix && t.iconName && (e = "fa" === r ? Rt(t.iconName) : {}, a = Yt(t.prefix, t.iconName), e.prefix && (r = null), t.iconName = e.iconName || a || t.iconName, t.prefix = e.prefix || t.prefix, "far" !== t.prefix || xt.far || !xt.fas || J.autoFetchSvg || (t.prefix = "fas")), t;
    }, Tt());
    return (t.includes("fa-brands") || t.includes("fab")) && (a.prefix = "fab"), (t.includes("fa-duotone") || t.includes("fad")) && (a.prefix = "fad"), a.prefix || o !== L || !xt.fass && !J.autoFetchSvg || (a.prefix = "fass", a.iconName = Yt(a.prefix, a.iconName) || a.iconName), "fa" !== a.prefix && "fa" !== r || (a.prefix = Nt || "fas"), a;
  }
  var u = function () {
      function t() {
        !function (t, a) {
          if (!(t instanceof a)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.definitions = {};
      }
      var a, e, n;
      return a = t, (e = [{
        key: "add",
        value: function () {
          for (var e = this, t = arguments.length, a = new Array(t), n = 0; n < t; n++) a[n] = arguments[n];
          var i = a.reduce(this._pullDefinitions, {});
          Object.keys(i).forEach(function (t) {
            e.definitions[t] = k(k({}, e.definitions[t] || {}), i[t]), wt(t, i[t]);
            var a = F[I][t];
            a && wt(a, i[t]), It();
          });
        }
      }, {
        key: "reset",
        value: function () {
          this.definitions = {};
        }
      }, {
        key: "_pullDefinitions",
        value: function (i, t) {
          var r = t.prefix && t.iconName && t.icon ? {
            0: t
          } : t;
          return Object.keys(r).map(function (t) {
            var a = r[t],
              e = a.prefix,
              t = a.iconName,
              n = a.icon,
              a = n[2];
            i[e] || (i[e] = {}), 0 < a.length && a.forEach(function (t) {
              "string" == typeof t && (i[e][t] = n);
            }), i[e][t] = n;
          }), i;
        }
      }]) && r(a.prototype, e), n && r(a, n), Object.defineProperty(a, "prototype", {
        writable: !1
      }), t;
    }(),
    c = [],
    Wt = {},
    _t = {},
    Ut = Object.keys(_t);
  function Xt(t, a) {
    for (var e = arguments.length, n = new Array(2 < e ? e - 2 : 0), i = 2; i < e; i++) n[i - 2] = arguments[i];
    return (Wt[t] || []).forEach(function (t) {
      a = t.apply(null, [a].concat(n));
    }), a;
  }
  function Bt(t) {
    for (var a = arguments.length, e = new Array(1 < a ? a - 1 : 0), n = 1; n < a; n++) e[n - 1] = arguments[n];
    (Wt[t] || []).forEach(function (t) {
      t.apply(null, e);
    });
  }
  function qt(t) {
    var a = t,
      t = Array.prototype.slice.call(arguments, 1);
    return _t[a] ? _t[a].apply(null, t) : void 0;
  }
  function Vt(t) {
    "fa" === t.prefix && (t.prefix = "fas");
    var a = t.iconName,
      t = t.prefix || Nt;
    if (a) return a = Yt(t, a) || a, vt(Gt.definitions, t, a) || vt(ut.styles, t, a);
  }
  var Gt = new u(),
    Kt = {
      noAuto: function () {
        J.autoReplaceSvg = !1, J.observeMutations = !1, Bt("noAuto");
      },
      config: J,
      dom: {
        i2svg: function () {
          var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
          return y ? (Bt("beforeI2svg", t), qt("pseudoElements2svg", t), qt("i2svg", t)) : Promise.reject("Operation requires a DOM of some kind.");
        },
        watch: function () {
          var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
            a = t.autoReplaceSvgRoot;
          !1 === J.autoReplaceSvg && (J.autoReplaceSvg = !0), J.observeMutations = !0, bt(function () {
            Jt({
              autoReplaceSvgRoot: a
            }), Bt("watch", t);
          });
        }
      },
      parse: {
        icon: function (t) {
          if (null === t) return null;
          if ("object" === i(t) && t.prefix && t.iconName) return {
            prefix: t.prefix,
            iconName: Yt(t.prefix, t.iconName) || t.iconName
          };
          if (Array.isArray(t) && 2 === t.length) {
            var a = 0 === t[1].indexOf("fa-") ? t[1].slice(3) : t[1],
              e = Dt(t[0]);
            return {
              prefix: e,
              iconName: Yt(e, a) || a
            };
          }
          if ("string" == typeof t && (-1 < t.indexOf("".concat(J.cssPrefix, "-")) || t.match(W))) {
            a = Ht(t.split(" "), {
              skipLookups: !0
            });
            return {
              prefix: a.prefix || Nt,
              iconName: Yt(a.prefix, a.iconName) || a.iconName
            };
          }
          return "string" == typeof t ? {
            prefix: Nt,
            iconName: Yt(Nt, t) || t
          } : void 0;
        }
      },
      library: Gt,
      findIconDefinition: Vt,
      toHtml: pt
    },
    Jt = function () {
      var t = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
        t = void 0 === t ? h : t;
      (0 < Object.keys(ut.styles).length || J.autoFetchSvg) && y && J.autoReplaceSvg && Kt.dom.i2svg({
        node: t
      });
    };
  function Qt(a, t) {
    return Object.defineProperty(a, "abstract", {
      get: t
    }), Object.defineProperty(a, "html", {
      get: function () {
        return a.abstract.map(pt);
      }
    }), Object.defineProperty(a, "node", {
      get: function () {
        if (y) {
          var t = h.createElement("div");
          return t.innerHTML = a.html, t.children;
        }
      }
    }), a;
  }
  function Zt(t) {
    var a = t.icons,
      e = a.main,
      n = a.mask,
      i = t.prefix,
      r = t.iconName,
      o = t.transform,
      s = t.symbol,
      c = t.title,
      f = t.maskId,
      l = t.titleId,
      u = t.extra,
      m = t.watchable,
      d = void 0 !== m && m,
      b = n.found ? n : e,
      a = b.width,
      t = b.height,
      m = "fak" === i,
      b = [J.replacementClass, r ? "".concat(J.cssPrefix, "-").concat(r) : ""].filter(function (t) {
        return -1 === u.classes.indexOf(t);
      }).filter(function (t) {
        return "" !== t || !!t;
      }).concat(u.classes).join(" "),
      b = {
        children: [],
        attributes: k(k({}, u.attributes), {}, {
          "data-prefix": i,
          "data-icon": r,
          class: b,
          role: u.attributes.role || "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 ".concat(a, " ").concat(t)
        })
      },
      t = m && !~u.classes.indexOf("fa-fw") ? {
        width: "".concat(a / t * 16 * .0625, "em")
      } : {};
    d && (b.attributes[O] = ""), c && (b.children.push({
      tag: "title",
      attributes: {
        id: b.attributes["aria-labelledby"] || "title-".concat(l || at())
      },
      children: [c]
    }), delete b.attributes.title);
    var p,
      v,
      g,
      h,
      y,
      t = k(k({}, b), {}, {
        prefix: i,
        iconName: r,
        main: e,
        mask: n,
        maskId: f,
        transform: o,
        symbol: s,
        styles: k(k({}, t), u.styles)
      }),
      n = n.found && e.found ? qt("generateAbstractMask", t) || {
        children: [],
        attributes: {}
      } : qt("generateAbstractIcon", t) || {
        children: [],
        attributes: {}
      },
      e = n.children,
      n = n.attributes;
    return t.children = e, t.attributes = n, s ? (v = (p = t).prefix, g = p.iconName, h = p.children, y = p.attributes, p = !0 === (p = p.symbol) ? "".concat(v, "-").concat(J.cssPrefix, "-").concat(g) : p, [{
      tag: "svg",
      attributes: {
        style: "display: none;"
      },
      children: [{
        tag: "symbol",
        attributes: k(k({}, y), {}, {
          id: p
        }),
        children: h
      }]
    }]) : (g = (v = t).children, y = v.main, p = v.mask, h = v.attributes, t = v.styles, ot(v = v.transform) && y.found && !p.found && (p = y.width / y.height / 2, y = .5, h.style = rt(k(k({}, t), {}, {
      "transform-origin": "".concat(p + v.x / 16, "em ").concat(y + v.y / 16, "em")
    }))), [{
      tag: "svg",
      attributes: h,
      children: g
    }]);
  }
  function $t(t) {
    var a = t.content,
      e = t.width,
      n = t.height,
      i = t.transform,
      r = t.title,
      o = t.extra,
      s = t.watchable,
      c = void 0 !== s && s,
      t = k(k(k({}, o.attributes), r ? {
        title: r
      } : {}), {}, {
        class: o.classes.join(" ")
      });
    c && (t[O] = "");
    s = k({}, o.styles);
    ot(i) && (s.transform = (o = (c = {
      transform: i,
      startCentered: !0,
      width: e,
      height: n
    }).transform, i = c.width, n = void 0 === (e = c.height) ? x : e, c = void 0 !== (e = c.startCentered) && e, e = "", e += c && w ? "translate(".concat(o.x / Z - (void 0 === i ? x : i) / 2, "em, ").concat(o.y / Z - n / 2, "em) ") : c ? "translate(calc(-50% + ".concat(o.x / Z, "em), calc(-50% + ").concat(o.y / Z, "em)) ") : "translate(".concat(o.x / Z, "em, ").concat(o.y / Z, "em) "), e += "scale(".concat(o.size / Z * (o.flipX ? -1 : 1), ", ").concat(o.size / Z * (o.flipY ? -1 : 1), ") "), e += "rotate(".concat(o.rotate, "deg) ")), s["-webkit-transform"] = s.transform);
    s = rt(s);
    0 < s.length && (t.style = s);
    s = [];
    return s.push({
      tag: "span",
      attributes: t,
      children: [a]
    }), r && s.push({
      tag: "span",
      attributes: {
        class: "sr-only"
      },
      children: [r]
    }), s;
  }
  var ta = ut.styles;
  function aa(t) {
    var a = t[0],
      e = t[1],
      t = m(t.slice(4), 1)[0];
    return {
      found: !0,
      width: a,
      height: e,
      icon: Array.isArray(t) ? {
        tag: "g",
        attributes: {
          class: "".concat(J.cssPrefix, "-").concat(q.GROUP)
        },
        children: [{
          tag: "path",
          attributes: {
            class: "".concat(J.cssPrefix, "-").concat(q.SECONDARY),
            fill: "currentColor",
            d: t[0]
          }
        }, {
          tag: "path",
          attributes: {
            class: "".concat(J.cssPrefix, "-").concat(q.PRIMARY),
            fill: "currentColor",
            d: t[1]
          }
        }]
      } : {
        tag: "path",
        attributes: {
          fill: "currentColor",
          d: t
        }
      }
    };
  }
  var ea = {
    found: !1,
    width: 512,
    height: 512
  };
  function na(i, r) {
    var o = r;
    return "fa" === r && null !== J.styleDefault && (r = Nt), new Promise(function (t, a) {
      var e, n;
      qt("missingIconAbstract");
      if ("fa" === o && (n = Rt(i) || {}, i = n.iconName || i, r = n.prefix || r), i && r && ta[r] && ta[r][i]) return t(aa(ta[r][i]));
      e = i, n = r, M || J.showMissingIcons || !e || console.error('Icon with name "'.concat(e, '" and prefix "').concat(n, '" is missing.')), t(k(k({}, ea), {}, {
        icon: J.showMissingIcons && i && qt("missingIconAbstract") || {}
      }));
    });
  }
  function ia() {}
  function ra(t) {
    oa.mark("".concat(sa, " ").concat(t, " ends")), oa.measure("".concat(sa, " ").concat(t), "".concat(sa, " ").concat(t, " begins"), "".concat(sa, " ").concat(t, " ends"));
  }
  var oa = J.measurePerformance && d && d.mark && d.measure ? d : {
      mark: ia,
      measure: ia
    },
    sa = 'FA "6.5.2"',
    ca = {
      begin: function (t) {
        return oa.mark("".concat(sa, " ").concat(t, " begins")), function () {
          return ra(t);
        };
      },
      end: ra
    },
    fa = function () {};
  function la(t) {
    return "string" == typeof (t.getAttribute ? t.getAttribute(O) : null);
  }
  function ua(t) {
    return h.createElementNS("http://www.w3.org/2000/svg", t);
  }
  function ma(t) {
    return h.createElement(t);
  }
  var da = {
    replace: function (t) {
      var a = t[0];
      a.parentNode && (t[1].forEach(function (t) {
        a.parentNode.insertBefore(function a(e, t) {
          var t = (1 < arguments.length && void 0 !== t ? t : {}).ceFn,
            n = void 0 === t ? "svg" === e.tag ? ua : ma : t;
          if ("string" == typeof e) return h.createTextNode(e);
          var i = n(e.tag);
          return Object.keys(e.attributes || []).forEach(function (t) {
            i.setAttribute(t, e.attributes[t]);
          }), (e.children || []).forEach(function (t) {
            i.appendChild(a(t, {
              ceFn: n
            }));
          }), i;
        }(t), a);
      }), null === a.getAttribute(O) && J.keepOriginalSource ? (t = h.createComment((t = " ".concat((t = a).outerHTML, " "), t = "".concat(t, "Font Awesome fontawesome.com "))), a.parentNode.replaceChild(t, a)) : a.remove());
    },
    nest: function (t) {
      var a = t[0],
        e = t[1];
      if (~nt(a).indexOf(J.replacementClass)) return da.replace(t);
      var n = new RegExp("".concat(J.cssPrefix, "-.*"));
      delete e[0].attributes.id, e[0].attributes.class && (t = e[0].attributes.class.split(" ").reduce(function (t, a) {
        return (a === J.replacementClass || a.match(n) ? t.toSvg : t.toNode).push(a), t;
      }, {
        toNode: [],
        toSvg: []
      }), e[0].attributes.class = t.toSvg.join(" "), 0 === t.toNode.length ? a.removeAttribute("class") : a.setAttribute("class", t.toNode.join(" ")));
      e = e.map(pt).join("\n");
      a.setAttribute(O, ""), a.innerHTML = e;
    }
  };
  function ba(t) {
    t();
  }
  function pa(e, t) {
    var n = "function" == typeof t ? t : fa;
    0 === e.length ? n() : (J.mutateApproach === E ? g.requestAnimationFrame || ba : ba)(function () {
      var t = !0 !== J.autoReplaceSvg && da[J.autoReplaceSvg] || da.replace,
        a = ca.begin("mutate");
      e.map(t), a(), n();
    });
  }
  var va = !1;
  function ga() {
    va = !0;
  }
  function ha() {
    va = !1;
  }
  var ya = null;
  function ka(t) {
    var r, o, a, s;
    p && J.observeMutations && (a = t.treeCallback, r = void 0 === a ? fa : a, a = t.nodeCallback, o = void 0 === a ? fa : a, a = t.pseudoElementsCallback, s = void 0 === a ? fa : a, t = void 0 === (t = t.observeMutationsRoot) ? h : t, ya = new p(function (t) {
      var i;
      va || (i = Nt, et(t).forEach(function (t) {
        var a, e, n;
        "childList" === t.type && 0 < t.addedNodes.length && !la(t.addedNodes[0]) && (J.searchPseudoElements && s(t.target), r(t.target)), "attributes" === t.type && t.target.parentNode && J.searchPseudoElements && s(t.target.parentNode), "attributes" === t.type && la(t.target) && ~B.indexOf(t.attributeName) && ("class" === t.attributeName && (e = t.target, n = e.getAttribute ? e.getAttribute(S) : null, e = e.getAttribute ? e.getAttribute(C) : null, n && e) ? (e = (a = Ht(nt(t.target))).prefix, a = a.iconName, t.target.setAttribute(S, e || i), a && t.target.setAttribute(C, a)) : (a = t.target) && a.classList && a.classList.contains && a.classList.contains(J.replacementClass) && o(t.target));
      }));
    }), y && ya.observe(t, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    }));
  }
  function wa(t) {
    var a = t.getAttribute("data-prefix"),
      e = t.getAttribute("data-icon"),
      n = void 0 !== t.innerText ? t.innerText.trim() : "",
      i = Ht(nt(t));
    return i.prefix || (i.prefix = Nt), a && e && (i.prefix = a, i.iconName = e), i.iconName && i.prefix || (i.prefix && 0 < n.length && (i.iconName = (e = i.prefix, n = t.innerText, (St[e] || {})[n] || Lt(i.prefix, yt(t.innerText)))), !i.iconName && J.autoFetchSvg && t.firstChild && t.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = t.firstChild.data)), i;
  }
  function xa(t, a) {
    var e = 1 < arguments.length && void 0 !== a ? a : {
        styleParser: !0
      },
      n = wa(t),
      i = n.iconName,
      r = n.prefix,
      o = n.rest,
      s = (a = et((s = t).attributes).reduce(function (t, a) {
        return "class" !== t.name && "style" !== t.name && (t[a.name] = a.value), t;
      }, {}), n = s.getAttribute("title"), s = s.getAttribute("data-fa-title-id"), J.autoA11y && (n ? a["aria-labelledby"] = "".concat(J.replacementClass, "-title-").concat(s || at()) : (a["aria-hidden"] = "true", a.focusable = "false")), a),
      a = Xt("parseNodeAttributes", {}, t),
      c = e.styleParser ? (e = (c = t).getAttribute("style"), c = [], c = e ? e.split(";").reduce(function (t, a) {
        var e = a.split(":"),
          a = e[0],
          e = e.slice(1);
        return a && 0 < e.length && (t[a] = e.join(":").trim()), t;
      }, {}) : c) : [];
    return k({
      iconName: i,
      title: t.getAttribute("title"),
      titleId: t.getAttribute("data-fa-title-id"),
      prefix: r,
      transform: $,
      mask: {
        iconName: null,
        prefix: null,
        rest: []
      },
      maskId: null,
      symbol: !1,
      extra: {
        classes: o,
        styles: c,
        attributes: s
      }
    }, a);
  }
  var Aa = ut.styles;
  function Oa(t) {
    var a = "nest" === J.autoReplaceSvg ? xa(t, {
      styleParser: !1
    }) : xa(t);
    return ~a.extra.classes.indexOf(_) ? qt("generateLayersText", t, a) : qt("generateSvgReplacementMutation", t, a);
  }
  var Na = new Set();
  function Pa(t) {
    var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
    if (!y) return Promise.resolve();
    function i(t) {
      return a.add("".concat(j, "-").concat(t));
    }
    function r(t) {
      return a.remove("".concat(j, "-").concat(t));
    }
    var a = h.documentElement.classList,
      e = J.autoFetchSvg ? Na : Y.map(function (t) {
        return "fa-".concat(t);
      }).concat(Object.keys(Aa));
    e.includes("fa") || e.push("fa");
    var o = [".".concat(_, ":not([").concat(O, "])")].concat(e.map(function (t) {
      return ".".concat(t, ":not([").concat(O, "])");
    })).join(", ");
    if (0 === o.length) return Promise.resolve();
    e = [];
    try {
      e = et(t.querySelectorAll(o));
    } catch (t) {}
    if (!(0 < e.length)) return Promise.resolve();
    i("pending"), r("complete");
    var s = ca.begin("onTree"),
      c = e.reduce(function (t, a) {
        try {
          var e = Oa(a);
          e && t.push(e);
        } catch (t) {
          M || "MissingIcon" === t.name && console.error(t);
        }
        return t;
      }, []);
    return new Promise(function (a, e) {
      Promise.all(c).then(function (t) {
        pa(t, function () {
          i("active"), i("complete"), r("pending"), "function" == typeof n && n(), s(), a();
        });
      }).catch(function (t) {
        s(), e(t);
      });
    });
  }
  function Sa(t) {
    var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
    Oa(t).then(function (t) {
      t && pa([t], a);
    });
  }
  Y.map(function (t) {
    Na.add("fa-".concat(t));
  }), Object.keys(T[I]).map(Na.add.bind(Na)), Object.keys(T[L]).map(Na.add.bind(Na));
  function Ca(t) {
    var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
      e = a.transform,
      n = void 0 === e ? $ : e,
      i = void 0 !== (e = a.symbol) && e,
      r = void 0 === (e = a.mask) ? null : e,
      o = void 0 === (e = a.maskId) ? null : e,
      s = void 0 === (e = a.title) ? null : e,
      c = void 0 === (e = a.titleId) ? null : e,
      f = void 0 === (e = a.classes) ? [] : e,
      l = void 0 === (e = a.attributes) ? {} : e,
      u = void 0 === (e = a.styles) ? {} : e;
    if (t) {
      var m = t.prefix,
        d = t.iconName,
        b = t.icon;
      return Qt(k({
        type: "icon"
      }, t), function () {
        return Bt("beforeDOMElementCreation", {
          iconDefinition: t,
          params: a
        }), J.autoA11y && (s ? l["aria-labelledby"] = "".concat(J.replacementClass, "-title-").concat(c || at()) : (l["aria-hidden"] = "true", l.focusable = "false")), Zt({
          icons: {
            main: aa(b),
            mask: r ? aa(r.icon) : {
              found: !1,
              width: null,
              height: null,
              icon: {}
            }
          },
          prefix: m,
          iconName: d,
          transform: k(k({}, $), n),
          symbol: i,
          title: s,
          maskId: o,
          titleId: c,
          extra: {
            attributes: l,
            styles: u,
            classes: f
          }
        });
      });
    }
  }
  var Na = l(Na),
    f = {
      mixout: function () {
        return {
          icon: (n = Ca, function (t) {
            var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
              e = (t || {}).icon ? t : Vt(t || {}),
              t = (t = a.mask) && ((t || {}).icon ? t : Vt(t || {}));
            return n(e, k(k({}, a), {}, {
              mask: t
            }));
          })
        };
        var n;
      },
      hooks: function () {
        return {
          mutationObserverCallbacks: function (t) {
            return t.treeCallback = Pa, t.nodeCallback = Sa, t;
          }
        };
      },
      provides: function (t) {
        t.i2svg = function (t) {
          var a = t.node,
            t = t.callback;
          return Pa(void 0 === a ? h : a, void 0 === t ? function () {} : t);
        }, t.generateSvgReplacementMutation = function (n, t) {
          var i = t.iconName,
            r = t.title,
            o = t.titleId,
            s = t.prefix,
            c = t.transform,
            f = t.symbol,
            a = t.mask,
            l = t.maskId,
            u = t.extra;
          return new Promise(function (e, t) {
            Promise.all([na(i, s), a.iconName ? na(a.iconName, a.prefix) : Promise.resolve({
              found: !1,
              width: 512,
              height: 512,
              icon: {}
            })]).then(function (t) {
              var a = m(t, 2),
                t = a[0],
                a = a[1];
              e([n, Zt({
                icons: {
                  main: t,
                  mask: a
                },
                prefix: s,
                iconName: i,
                transform: c,
                symbol: f,
                maskId: l,
                title: r,
                titleId: o,
                extra: u,
                watchable: !0
              })]);
            }).catch(t);
          });
        }, t.generateAbstractIcon = function (t) {
          var a,
            e = t.children,
            n = t.attributes,
            i = t.main,
            r = t.transform,
            t = rt(t.styles);
          return 0 < t.length && (n.style = t), ot(r) && (a = qt("generateAbstractTransformGrouping", {
            main: i,
            transform: r,
            containerWidth: i.width,
            iconWidth: i.width
          })), e.push(a || i.icon), {
            children: e,
            attributes: n
          };
        };
      }
    },
    a = {
      mixout: function () {
        return {
          layer: function (t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
              a = e.classes,
              n = void 0 === a ? [] : a;
            return Qt({
              type: "layer"
            }, function () {
              Bt("beforeDOMElementCreation", {
                assembler: t,
                params: e
              });
              var a = [];
              return t(function (t) {
                Array.isArray(t) ? t.map(function (t) {
                  a = a.concat(t.abstract);
                }) : a = a.concat(t.abstract);
              }), [{
                tag: "span",
                attributes: {
                  class: ["".concat(J.cssPrefix, "-layers")].concat(l(n)).join(" ")
                },
                children: a
              }];
            });
          }
        };
      }
    },
    u = {
      mixout: function () {
        return {
          counter: function (i) {
            var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
              t = r.title,
              o = void 0 === t ? null : t,
              t = r.classes,
              s = void 0 === t ? [] : t,
              t = r.attributes,
              c = void 0 === t ? {} : t,
              t = r.styles,
              f = void 0 === t ? {} : t;
            return Qt({
              type: "counter",
              content: i
            }, function () {
              return Bt("beforeDOMElementCreation", {
                content: i,
                params: r
              }), t = {
                content: i.toString(),
                title: o,
                extra: {
                  attributes: c,
                  styles: f,
                  classes: ["".concat(J.cssPrefix, "-layers-counter")].concat(l(s))
                }
              }, a = t.content, e = t.title, n = t.extra, t = k(k(k({}, n.attributes), e ? {
                title: e
              } : {}), {}, {
                class: n.classes.join(" ")
              }), 0 < (n = rt(n.styles)).length && (t.style = n), (n = []).push({
                tag: "span",
                attributes: t,
                children: [a]
              }), e && n.push({
                tag: "span",
                attributes: {
                  class: "sr-only"
                },
                children: [e]
              }), n;
              var t, a, e, n;
            });
          }
        };
      }
    },
    d = {
      mixout: function () {
        return {
          text: function (t) {
            var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
              e = a.transform,
              n = void 0 === e ? $ : e,
              e = a.title,
              i = void 0 === e ? null : e,
              e = a.classes,
              r = void 0 === e ? [] : e,
              e = a.attributes,
              o = void 0 === e ? {} : e,
              e = a.styles,
              s = void 0 === e ? {} : e;
            return Qt({
              type: "text",
              content: t
            }, function () {
              return Bt("beforeDOMElementCreation", {
                content: t,
                params: a
              }), $t({
                content: t,
                transform: k(k({}, $), n),
                title: i,
                extra: {
                  attributes: o,
                  styles: s,
                  classes: ["".concat(J.cssPrefix, "-layers-text")].concat(l(r))
                }
              });
            });
          }
        };
      },
      provides: function (t) {
        t.generateLayersText = function (t, a) {
          var e,
            n = a.title,
            i = a.transform,
            r = a.extra,
            o = null,
            s = null;
          return w && (e = parseInt(getComputedStyle(t).fontSize, 10), o = (a = t.getBoundingClientRect()).width / e, s = a.height / e), J.autoA11y && !n && (r.attributes["aria-hidden"] = "true"), Promise.resolve([t, $t({
            content: t.innerHTML,
            width: o,
            height: s,
            transform: i,
            title: n,
            extra: r,
            watchable: !0
          })]);
        };
      }
    },
    ja = new RegExp('"', "ug"),
    Ea = [1105920, 1112319];
  function za(b, p) {
    var v = "".concat(P).concat(p.replace(":", "-"));
    return new Promise(function (e, t) {
      if (null !== b.getAttribute(v)) return e();
      var n,
        i,
        r,
        o,
        a,
        s,
        c,
        f = et(b.children).filter(function (t) {
          return t.getAttribute(N) === p;
        })[0],
        l = g.getComputedStyle(b, p),
        u = l.getPropertyValue("font-family").match(U),
        m = l.getPropertyValue("font-weight"),
        d = l.getPropertyValue("content");
      if (f && !u) return b.removeChild(f), e();
      u && "none" !== d && "" !== d ? (s = l.getPropertyValue("content"), a = ~["Sharp"].indexOf(u[2]) ? L : I, n = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(u[2]) ? D[a][u[2].toLowerCase()] : X[a][m], d = (l = (l = (d = s).replace(ja, ""), a = 0, s = (m = l).length, c = 55296 <= (d = m.charCodeAt(a)) && d <= 56319 && a + 1 < s && 56320 <= (c = m.charCodeAt(a + 1)) && c <= 57343 ? 1024 * (d - 55296) + c - 56320 + 65536 : d, d = Ea[0] <= c && c <= Ea[1], {
        value: yt((c = 2 === l.length && l[0] === l[1]) ? l[0] : l),
        isSecondary: d || c
      })).value, c = l.isSecondary, l = u[0].startsWith("FontAwesome"), u = Lt(n, d), i = u, l && (d = jt[l = d], l = Lt("fas", l), (l = d || (l ? {
        prefix: "fas",
        iconName: l
      } : null) || {
        prefix: null,
        iconName: null
      }).iconName && l.prefix && (u = l.iconName, n = l.prefix)), !u || c || f && f.getAttribute(S) === n && f.getAttribute(C) === i ? e() : (b.setAttribute(v, i), f && b.removeChild(f), (o = (r = {
        iconName: null,
        title: null,
        titleId: null,
        prefix: null,
        transform: $,
        symbol: !1,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        extra: {
          classes: [],
          styles: {},
          attributes: {}
        }
      }).extra).attributes[N] = p, na(u, n).then(function (t) {
        var a = Zt(k(k({}, r), {}, {
            icons: {
              main: t,
              mask: Tt()
            },
            prefix: n,
            iconName: i,
            extra: o,
            watchable: !0
          })),
          t = h.createElementNS("http://www.w3.org/2000/svg", "svg");
        "::before" === p ? b.insertBefore(t, b.firstChild) : b.appendChild(t), t.outerHTML = a.map(pt).join("\n"), b.removeAttribute(v), e();
      }).catch(t))) : e();
    });
  }
  function Ma(t) {
    return Promise.all([za(t, "::before"), za(t, "::after")]);
  }
  function Ia(t) {
    return !(t.parentNode === document.head || ~z.indexOf(t.tagName.toUpperCase()) || t.getAttribute(N) || t.parentNode && "svg" === t.parentNode.tagName);
  }
  function La(i) {
    if (y) return new Promise(function (t, a) {
      var e = et(i.querySelectorAll("*")).filter(Ia).map(Ma),
        n = ca.begin("searchPseudoElements");
      ga(), Promise.all(e).then(function () {
        n(), ha(), t();
      }).catch(function () {
        n(), ha(), a();
      });
    });
  }
  function Ya(t) {
    return t.toLowerCase().split(" ").reduce(function (t, a) {
      var e = a.toLowerCase().split("-"),
        a = e[0],
        n = e.slice(1).join("-");
      if (a && "h" === n) return t.flipX = !0, t;
      if (a && "v" === n) return t.flipY = !0, t;
      if (n = parseFloat(n), isNaN(n)) return t;
      switch (a) {
        case "grow":
          t.size = t.size + n;
          break;
        case "shrink":
          t.size = t.size - n;
          break;
        case "left":
          t.x = t.x - n;
          break;
        case "right":
          t.x = t.x + n;
          break;
        case "up":
          t.y = t.y - n;
          break;
        case "down":
          t.y = t.y + n;
          break;
        case "rotate":
          t.rotate = t.rotate + n;
      }
      return t;
    }, {
      size: 16,
      x: 0,
      y: 0,
      flipX: !1,
      flipY: !1,
      rotate: 0
    });
  }
  var Ra = !1,
    Ta = {
      x: 0,
      y: 0,
      width: "100%",
      height: "100%"
    };
  function Da(t) {
    return t.attributes && (t.attributes.fill || !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]) && (t.attributes.fill = "black"), t;
  }
  var Fa;
  Fa = {
    mixoutsTo: Kt
  }.mixoutsTo, c = [b, f, a, u, d, {
    hooks: function () {
      return {
        mutationObserverCallbacks: function (t) {
          return t.pseudoElementsCallback = La, t;
        }
      };
    },
    provides: function (t) {
      t.pseudoElements2svg = function (t) {
        t = t.node;
        J.searchPseudoElements && La(void 0 === t ? h : t);
      };
    }
  }, {
    mixout: function () {
      return {
        dom: {
          unwatch: function () {
            ga(), Ra = !0;
          }
        }
      };
    },
    hooks: function () {
      return {
        bootstrap: function () {
          ka(Xt("mutationObserverCallbacks", {}));
        },
        noAuto: function () {
          ya && ya.disconnect();
        },
        watch: function (t) {
          t = t.observeMutationsRoot;
          Ra ? ha() : ka(Xt("mutationObserverCallbacks", {
            observeMutationsRoot: t
          }));
        }
      };
    }
  }, {
    mixout: function () {
      return {
        parse: {
          transform: Ya
        }
      };
    },
    hooks: function () {
      return {
        parseNodeAttributes: function (t, a) {
          a = a.getAttribute("data-fa-transform");
          return a && (t.transform = Ya(a)), t;
        }
      };
    },
    provides: function (t) {
      t.generateAbstractTransformGrouping = function (t) {
        var a = t.main,
          e = t.transform,
          n = t.containerWidth,
          i = t.iconWidth,
          r = {
            transform: "translate(".concat(n / 2, " 256)")
          },
          t = "translate(".concat(32 * e.x, ", ").concat(32 * e.y, ") "),
          n = "scale(".concat(e.size / 16 * (e.flipX ? -1 : 1), ", ").concat(e.size / 16 * (e.flipY ? -1 : 1), ") "),
          e = "rotate(".concat(e.rotate, " 0 0)"),
          i = {
            outer: r,
            inner: {
              transform: "".concat(t, " ").concat(n, " ").concat(e)
            },
            path: {
              transform: "translate(".concat(i / 2 * -1, " -256)")
            }
          };
        return {
          tag: "g",
          attributes: k({}, i.outer),
          children: [{
            tag: "g",
            attributes: k({}, i.inner),
            children: [{
              tag: a.icon.tag,
              children: a.icon.children,
              attributes: k(k({}, a.icon.attributes), i.path)
            }]
          }]
        };
      };
    }
  }, {
    hooks: function () {
      return {
        parseNodeAttributes: function (t, a) {
          var e = a.getAttribute("data-fa-mask"),
            e = e ? Ht(e.split(" ").map(function (t) {
              return t.trim();
            })) : Tt();
          return e.prefix || (e.prefix = Nt), t.mask = e, t.maskId = a.getAttribute("data-fa-mask-id"), t;
        }
      };
    },
    provides: function (t) {
      t.generateAbstractMask = function (t) {
        var a = t.children,
          e = t.attributes,
          n = t.main,
          i = t.mask,
          r = t.maskId,
          o = t.transform,
          s = n.width,
          c = n.icon,
          f = i.width,
          t = i.icon,
          o = (i = (n = {
            transform: o,
            containerWidth: f,
            iconWidth: s
          }).transform, o = n.containerWidth, f = n.iconWidth, s = {
            transform: "translate(".concat(o / 2, " 256)")
          }, n = "translate(".concat(32 * i.x, ", ").concat(32 * i.y, ") "), o = "scale(".concat(i.size / 16 * (i.flipX ? -1 : 1), ", ").concat(i.size / 16 * (i.flipY ? -1 : 1), ") "), i = "rotate(".concat(i.rotate, " 0 0)"), {
            outer: s,
            inner: {
              transform: "".concat(n, " ").concat(o, " ").concat(i)
            },
            path: {
              transform: "translate(".concat(f / 2 * -1, " -256)")
            }
          }),
          i = {
            tag: "rect",
            attributes: k(k({}, Ta), {}, {
              fill: "white"
            })
          },
          f = c.children ? {
            children: c.children.map(Da)
          } : {},
          f = {
            tag: "g",
            attributes: k({}, o.inner),
            children: [Da(k({
              tag: c.tag,
              attributes: k(k({}, c.attributes), o.path)
            }, f))]
          },
          o = {
            tag: "g",
            attributes: k({}, o.outer),
            children: [f]
          },
          f = "mask-".concat(r || at()),
          r = "clip-".concat(r || at()),
          o = {
            tag: "mask",
            attributes: k(k({}, Ta), {}, {
              id: f,
              maskUnits: "userSpaceOnUse",
              maskContentUnits: "userSpaceOnUse"
            }),
            children: [i, o]
          },
          o = {
            tag: "defs",
            children: [{
              tag: "clipPath",
              attributes: {
                id: r
              },
              children: "g" === (t = t).tag ? t.children : [t]
            }, o]
          };
        return a.push(o, {
          tag: "rect",
          attributes: k({
            fill: "currentColor",
            "clip-path": "url(#".concat(r, ")"),
            mask: "url(#".concat(f, ")")
          }, Ta)
        }), {
          children: a,
          attributes: e
        };
      };
    }
  }, {
    provides: function (t) {
      var r = !1;
      g.matchMedia && (r = g.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function () {
        var t = [],
          a = {
            fill: "currentColor"
          },
          e = {
            attributeType: "XML",
            repeatCount: "indefinite",
            dur: "2s"
          };
        t.push({
          tag: "path",
          attributes: k(k({}, a), {}, {
            d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
          })
        });
        var n = k(k({}, e), {}, {
            attributeName: "opacity"
          }),
          i = {
            tag: "circle",
            attributes: k(k({}, a), {}, {
              cx: "256",
              cy: "364",
              r: "28"
            }),
            children: []
          };
        return r || i.children.push({
          tag: "animate",
          attributes: k(k({}, e), {}, {
            attributeName: "r",
            values: "28;14;28;28;14;28;"
          })
        }, {
          tag: "animate",
          attributes: k(k({}, n), {}, {
            values: "1;0;1;1;0;1;"
          })
        }), t.push(i), t.push({
          tag: "path",
          attributes: k(k({}, a), {}, {
            opacity: "1",
            d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
          }),
          children: r ? [] : [{
            tag: "animate",
            attributes: k(k({}, n), {}, {
              values: "1;0;0;0;0;1;"
            })
          }]
        }), r || t.push({
          tag: "path",
          attributes: k(k({}, a), {}, {
            opacity: "0",
            d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
          }),
          children: [{
            tag: "animate",
            attributes: k(k({}, n), {}, {
              values: "0;0;1;1;0;0;"
            })
          }]
        }), {
          tag: "g",
          attributes: {
            class: "missing"
          },
          children: t
        };
      };
    }
  }, {
    hooks: function () {
      return {
        parseNodeAttributes: function (t, a) {
          a = a.getAttribute("data-fa-symbol");
          return t.symbol = null !== a && ("" === a || a), t;
        }
      };
    }
  }], Wt = {}, Object.keys(_t).forEach(function (t) {
    -1 === Ut.indexOf(t) && delete _t[t];
  }), c.forEach(function (t) {
    var a,
      e = t.mixout ? t.mixout() : {};
    Object.keys(e).forEach(function (a) {
      "function" == typeof e[a] && (Fa[a] = e[a]), "object" === i(e[a]) && Object.keys(e[a]).forEach(function (t) {
        Fa[a] || (Fa[a] = {}), Fa[a][t] = e[a][t];
      });
    }), t.hooks && (a = t.hooks(), Object.keys(a).forEach(function (t) {
      Wt[t] || (Wt[t] = []), Wt[t].push(a[t]);
    })), t.provides && t.provides(_t);
  }), function (t) {
    try {
      for (var a = arguments.length, e = new Array(1 < a ? a - 1 : 0), n = 1; n < a; n++) e[n - 1] = arguments[n];
      t.apply(void 0, e);
    } catch (t) {
      if (!M) throw t;
    }
  }(function (t) {
    v && (g.FontAwesome || (g.FontAwesome = Kt), bt(function () {
      Jt(), Bt("bootstrap");
    })), ut.hooks = k(k({}, ut.hooks), {}, {
      addPack: function (t, a) {
        ut.styles[t] = k(k({}, ut.styles[t] || {}), a), It(), Jt();
      },
      addPacks: function (t) {
        t.forEach(function (t) {
          var a = m(t, 2),
            t = a[0],
            a = a[1];
          ut.styles[t] = k(k({}, ut.styles[t] || {}), a);
        }), It(), Jt();
      },
      addShims: function (t) {
        var a;
        (a = ut.shims).push.apply(a, l(t)), It(), Jt();
      }
    });
  });
}();

/***/ }),

/***/ "./src/pages/common/core.js":
/*!**********************************!*\
  !*** ./src/pages/common/core.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* reexport default from dynamic */ jquery__WEBPACK_IMPORTED_MODULE_0___default.a),
/* harmony export */   TSHandler: () => (/* binding */ TSHandler)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fontawesome_js_fontawesome_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../fontawesome/js/fontawesome.min */ "./src/fontawesome/js/fontawesome.min.js");
/* harmony import */ var _fontawesome_js_fontawesome_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fontawesome_js_fontawesome_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fontawesome_js_all_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../fontawesome/js/all.min */ "./src/fontawesome/js/all.min.js");
/* harmony import */ var _fontawesome_js_all_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fontawesome_js_all_min__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_scrollbar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/scrollbar.css */ "./src/pages/css/scrollbar.css");
/* harmony import */ var _tradestation_enpoints_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tradestation/enpoints/main */ "./src/tradestation/enpoints/main.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav */ "./src/pages/common/nav.js");






window.ts = new _tradestation_enpoints_main__WEBPACK_IMPORTED_MODULE_4__.TS();

const TIMEOUT_MSECONDS = 500;
jquery__WEBPACK_IMPORTED_MODULE_0___default()(() => {
  new InitRenderer();
});
class InitRenderer {
  constructor() {
    this.isTokenLiveInterval = null;
    this.isTokenLive();
    setInterval(() => {
      window.ts.refreshToken();
    }, 60000 * 5);
    const nav = new _nav__WEBPACK_IMPORTED_MODULE_5__.Nav();
  }
  isTokenLive() {
    if (window.ts.token) {
      if (this.isTokenLiveInterval) {
        clearInterval(this.isTokenLiveInterval);
      }
      if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").is(":visible")) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").css('display', 'block');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").hide();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").fadeIn(TIMEOUT_MSECONDS);
      }
    }
    if (!this.isTokenLiveInterval) {
      this.isTokenLiveInterval = setInterval(this.isTokenLive, TIMEOUT_MSECONDS - 200);
    }
  }
}
class TSHandler {
  constructor(promiseFunc, ...funcArgs) {
    this.func = promiseFunc;
    this.resp = null;
    this.get(...funcArgs);
  }
  get(...args) {
    this.func(...args).then(resp => {
      this.resp = resp;
    }).catch(error => {
      console.log("[ERROR]", error);
    });
  }
}

/***/ }),

/***/ "./src/pages/common/nav.js":
/*!*********************************!*\
  !*** ./src/pages/common/nav.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Nav: () => (/* binding */ Nav)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util */ "./src/util.js");


class Nav {
  constructor() {
    this.id = `nav_`;
    this.$body = jquery__WEBPACK_IMPORTED_MODULE_0___default()("body");
    this.links = [{
      name: "Home",
      title: "Home",
      href: "home.html"
    }, {
      name: "Trade",
      title: "Trade",
      href: "trade.html",
      target: "_blank"
    }, {
      name: "Settings",
      title: "Settings",
      href: "settings.html"
    }];
    this.init();
    setInterval(this.setTitle, 1000);
  }
  getlinks() {
    var html = "";
    this.links.forEach(obj => {
      var target = obj?.target ? `target="${obj.target}"` : '';
      html += `<li class="nav-item"><a ${target} href="${obj?.href}" title="${obj?.title}" class="py-0 px-2 nav-link">${obj?.name}</a></li>`;
    });
    return html;
  }
  hideLinks() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#${this.id}links`).hide();
  }
  getIcon() {
    return `<img height="26" src="../resources/images/icon.png"/>`;
  }
  setTitle(txt) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#title").text(`${!txt ? '' : txt}${(0,_util__WEBPACK_IMPORTED_MODULE_1__.hhmmss)()}`);
  }
  init() {
    this.$body.prepend(`
            <nav id="${this.id}" class="container-fluid bg-dark" style="padding-top: 2px;padding-bottom:2px;">
                <div class="row px-2">    
                    <div class="col-4 py-0 px-0 navbar navbar-expand-sm navbar-dark">
                       <a class="p-0" href="home.html">${this.getIcon()}</a>
                        <ul id="${this.id}links" class="navbar-nav w-100">
                            ${this.getlinks()}
                        </ul>
                    </div>
                    <div id="title" class="col-4 text-center"></div>
                    <div class="col-4"></div>
                </div>
            </nav>
        `);
    this.setTitle();
  }
}

/***/ }),

/***/ "./src/tradestation/enpoints/accounts.js":
/*!***********************************************!*\
  !*** ./src/tradestation/enpoints/accounts.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Accounts: () => (/* binding */ Accounts)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_2__);
/**
 * @fileoverview
 * This file contains the implementation of the Accounts class that interacts with the TradeStation API.
 * It utilizes the OpenAPI specification version 3.0.3.
 *
 * @description
 * # Authentication
 * For more information on authorization and gaining an access/refresh token,
 * please visit: [Authentication](/docs/fundamentals/authentication/auth-overview).
 * <SecurityDefinitions />
 *
 * @version V3
 *
 * @termsOfService
 * [TradeStation API Guidelines for Acceptance](http://elasticbeanstalk-us-east-1-525856068889.s3.amazonaws.com/wp-content/uploads/2014/03/Guidelines_For_Acceptance.pdf)
 *
 * @contact
 * - Name: TradeStation API Team
 * - Email: ClientServices@tradestation.com
 * - URL: [TradeStation API Developer Portal](https://developer.tradestation.com/webapi)
 *
 * @license
 * - Name: Services Agreement For Application Developers
 * - URL: [Agreement for WebAPI Developers](https://s3.amazonaws.com/elasticbeanstalk-us-east-1-525856068889/wp-content/uploads/2016/02/Agreement-for-WebAPI-Developers_v5C.pdf)
 *
 * @server
 * - URL: https://api.tradestation.com
 */



class Accounts {
  constructor(accessToken) {
    this.baseUrl = 'https://api.tradestation.com/v3/brokerage';
    this.accessToken = accessToken;
    this.isRefreshingToken = false;
    // streams
    this.allStreams = {};
  }
  info(msg = "") {
    console.log(`${(0,_util__WEBPACK_IMPORTED_MODULE_1__.currentESTTime)()} Accounts [INFO] - ${msg}`);
  }
  error(msg = "") {
    console.error(`${(0,_util__WEBPACK_IMPORTED_MODULE_1__.currentESTTime)()} Accounts [ERROR] - ${msg}`);
  }
  timestamp_UTC2EST(timestamp) {
    return new Date(timestamp).toLocaleString("en-US", {
      timeZone: "America/New_York"
    });
  }
  killAllStreams() {
    this.info("Killing All Open Streams In MarketData.");
    for (const key in this.allStreams) {
      if (this.allStreams?.[key]) {
        this.allStreams[key].abort(); //.cancel();
        delete this.allStreams[key];
      }
    }
  }
  killAllStreamsById(id) {
    this.info("Killing All Open Streams In MarketData.");
    for (const key in this.allStreams) {
      if ((0,_util__WEBPACK_IMPORTED_MODULE_1__.isSubStr)(key, id)) {
        this.allStreams[key].abort(); //.cancel();
        delete this.allStreams[key];
      }
    }
  }
  killStreamByKey(key) {
    if (this.allStreams?.[key]) {
      this.allStreams[key].abort(); //.cancel();
      delete this.allStreams[key];
    }
  }
  async refreshToken() {
    if (!this.isRefreshingToken) {
      this.isRefreshingToken = true;
      electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.send('getRefreshToken');
      electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.on('sendRefreshToken', (event, arg) => {
        const accessToken = arg.ts?.access_token;
        if (typeof accessToken === 'string') {
          if (this.accessToken !== accessToken) {
            this.info(`new refreshToken() length: ${accessToken.length}, Token: ${accessToken.slice(0, 5)}...${accessToken.slice(-5)})`);
          }
          this.accessToken = accessToken;
        }
        this.isRefreshingToken = false;
      });
    }
  }

  /**
   * Fetches the list of Brokerage Accounts available for the current user.
   * @returns {Promise<Array>} - Promise resolving to the list of brokerage accounts.
   */
  async getAccounts() {
    this.refreshToken();
    const url = `${this.baseUrl}/accounts`;
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`
      }
    }).then(response => response.data.Accounts).catch(error => {
      this.error(`getAccounts() - ${error}, ${this.accessToken}`);
      throw error;
    });
    return response;
  }
  setAllAccounts(setter) {
    (async () => {
      try {
        const arr = await this.getAccounts();
        if (Array.isArray(arr)) {
          setter(arr);
        } else {
          if (!arr?.Error) {
            setter([arr]);
          }
        }
      } catch (error) {
        this.error(`setAllAccounts() ${error}`);
      }
    })();
  }
  setAccounts(setter, type = 'Cash') {
    (async () => {
      try {
        const arr = await this.getAccounts();
        if (type === '') {
          setter(arr);
        } else {
          arr.forEach(i => {
            if (i.AccountType === type) {
              setter(i);
            }
          });
        }
      } catch (error) {
        this.error(`setAccounts() ${error}`);
      }
    })();
  }
  setAccountID(setter, type = "Cash") {
    (async () => {
      try {
        const arr = await this.getAccounts();
        arr.forEach(i => {
          if (i.AccountType === type) {
            setter(i.AccountID);
          }
        });
      } catch (error) {
        this.error(`setAccountID() ${error}`);
      }
    })();
  }

  /**
     * Fetches brokerage account balances for one or more given accounts.
     * @param {string} accountIds - List of valid Account IDs for the authenticated user in comma-separated format.
     * @returns {Promise<Array>} - Promise resolving to the list of account balances.
     */

  getAccountBalancesAJAX(accountIDs) {
    return {
      url: `${this.baseUrl}/accounts/${accountIDs}/balances`,
      dataSrc: 'Balances',
      type: 'GET',
      headers: {
        Authorization: `Bearer ${this.accessToken}`
      }
    };
  }
  async getAccountBalances(accounts) {
    this.refreshToken();
    if (accounts !== null) {
      const url = `${this.baseUrl}/accounts/${accounts}/balances`;
      return axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`
        }
      }).then(response => response.data.Balances).catch(error => {
        this.error(`getAccountBalances() ${error}`);
      });
    }
  }
  configBalances(arr) {
    var newBalances = [];
    arr.forEach(obj => {
      newBalances.push({
        ...obj,
        CashBalance: parseFloat(obj?.CashBalance),
        BuyingPower: parseFloat(obj?.BuyingPower),
        Equity: parseFloat(obj?.Equity),
        MarketValue: parseFloat(obj?.MarketValue),
        TodaysProfitLoss: parseFloat(obj?.TodaysProfitLoss),
        UnclearedDeposit: parseFloat(obj?.UnclearedDeposit),
        Commission: parseFloat(obj?.Commission)
      });
    });
    return newBalances;
  }
  setAllAccountBalances(setter, accountIds) {
    if (accountIds !== null || typeof accountIds !== 'undefined') {
      (async () => {
        try {
          const arr = await this.getAccountBalances(accountIds);
          setter(this.configBalances(arr));
        } catch (error) {
          this.error(`setAccountBalances() ${error}`);
        }
      })();
    }
  }
  setAccountBalances(setter, accountIds, type = 'Cash') {
    if (accountIds !== null || typeof accountIds !== 'undefined') {
      (async () => {
        try {
          const arr = await this.getAccountBalances(accountIds);
          if (type === '') {
            setter(arr[0]);
          } else {
            if (arr) {
              arr.forEach((obj, index) => {
                if (obj.AccountType === type) {
                  setter(obj);
                  // break;
                }
              });
            } else {
              // setter(arr);
            }
          }
        } catch (error) {
          this.error(`setAccountBalances() ${error}`);
        }
      })();
    }
  }

  /**
   * Fetches the Beginning of Day Balances for the given Accounts.
   * @param {string} accountIds - List of valid Account IDs for the authenticated user in comma separated format.
   * @returns {Promise<Array>} - Promise resolving to the list of Beginning of Day Balances.
   */
  getBalancesBOD(accountIds) {
    const url = `${this.baseUrl}/accounts/${accountIds}/bodbalances`;
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`
      }
    }).then(response => response.data.BODBalances).catch(error => {
      this.error(`getBalancesBOD() ${error}`);
    });
  }

  /**
    * Fetches Historical Orders for the given Accounts except open orders, sorted in descending order of time closed.
    * @param {string} accounts - List of valid Account IDs for the authenticated user in a comma-separated format.
    * @param {string} since - Historical orders since date (format: "YYYY-MM-DD").
    * @param {number} pageSize - The number of requests returned per page when paginating responses (optional).
    * @param {string} nextToken - An encrypted token with a lifetime of 1 hour for use with paginated order responses (optional).
    * @returns {Promise<Object>} - Promise resolving to the historical orders.
    */
  getHistoricalOrders(accounts, since, pageSize, nextToken) {
    this.refreshToken();
    const url = `${this.baseUrl}/accounts/${accounts}/historicalorders`;
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`
      },
      params: {
        since,
        pageSize,
        nextToken
      }
    }).then(response => response.data.Orders).catch(error => {
      this.error(`getHistoricalOrders - ${error}`);
    });
  }
  formatHistoricalOrders(arr) {
    var newArr = [];
    if (arr !== null) {
      arr.forEach(obj => {
        const legs = obj?.Legs;
        newArr.push({
          ...obj,
          OpenedDateTime: this.timestamp_UTC2EST(obj?.OpenedDateTime),
          Symbol: legs ? legs[0].Symbol : ' - ',
          QuantityOrdered: legs ? legs[0].QuantityOrdered : '0',
          BuyOrSell: legs ? legs[0].BuyOrSell : ' - '
        });
      });
    } else {
      newArr = [];
    }
    newArr.sort((a, b) => parseInt(a.OrderID) - parseInt(b.OrderID));
    newArr.reverse();
    return newArr;
  }
  setHistoricalOrders(setter, accounts, since, pageSize, nextToken) {
    if (accounts !== null) {
      (async () => {
        try {
          const past = await this.getHistoricalOrders(accounts, since, pageSize, nextToken);
          const today = await this.getOrders(accounts, pageSize, nextToken);
          const array = [...past, ...today];
          setter(this.formatHistoricalOrders(array));
        } catch (error) {
          this.error(`setHistoricalOrders() ${error}`);
        }
      })();
    }
  }
  setHistoricalOrdersBySymbol(setter, symbol, accounts, since, pageSize, nextToken) {
    (async () => {
      try {
        const arr = await this.getHistoricalOrders(accounts, since, pageSize, nextToken);
        var filteredOrders = [];
        arr.forEach(obj => {
          const legSymbol = obj.Legs[0]?.Symbol;
          if (symbol === legSymbol) {
            filteredOrders.push(obj);
          }
        });
        setter(arr);
      } catch (error) {
        this.error(`setHistoricalOrdersBySymbol() ${error}`);
      }
    })();
  }

  /**
     * Fetches Historical Orders for the given Accounts except open orders,
     * filtered by given Order IDs prior to the current date, sorted in descending order of time closed.
     * @param {string} accounts - List of valid Account IDs for the authenticated user in a comma-separated format.
     * @param {string} orderIds - List of valid Order IDs for the authenticated user for given accounts in a comma-separated format.
     * @param {string} since - Historical orders since date.
     * @returns {Promise<Object>} - Promise resolving to the historical orders.
     */
  getHistoricalOrdersByOrderID(accounts, orderIds, since) {
    const id_token = this.ts.getTokenId();
    const url = `${this.baseUrl}/accounts/${accounts}/historicalorders/${orderIds}?since=${since}`;
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`
      }
    }).then(response => response.data).catch(error => {
      console.error('Error fetching historical orders:', error);
      throw error;
    });
  }

  /**
   * Fetches today's orders and open orders for the given Accounts, sorted in descending order of time placed for open and time executed for closed.
   * @param {string} accounts - List of valid Account IDs for the authenticated user in comma-separated format; for example "61999124,68910124".
   * @param {number} [pageSize=600] - The number of requests returned per page when paginating responses.
   * @param {string} [nextToken] - An encrypted token with a lifetime of 1 hour for use with paginated order responses.
   * @returns {Promise<Object>} - Promise resolving to the list of orders.
   */
  getOrders(accounts, pageSize, nextToken) {
    this.refreshToken();
    if (accounts !== null) {
      const url = `${this.baseUrl}/accounts/${accounts}/orders`;
      const params = {
        pageSize,
        nextToken
      };
      return axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`
        },
        params
      }).then(response => response.data.Orders).catch(error => {
        console.error('Error fetching orders:', error);
      });
    }
  }
  setOrders(setter, accounts, pageSize, nextToken) {
    if (accounts !== null) {
      (async () => {
        try {
          const arr = await this.getOrders(accounts, pageSize, nextToken);
          setter(this.formatHistoricalOrders(arr));
        } catch (error) {
          this.error(`setOrdersBySymbol() ${error}`);
        }
      })();
    }
  }
  setOrdersBySymbol(setter, symbol, accounts, pageSize, nextToken) {
    if (accounts !== null) {
      (async () => {
        try {
          const arr = await this.getOrders(accounts, pageSize, nextToken);
          var filteredOrders = [];
          arr.forEach(obj => {
            const legSymbol = obj.Legs[0]?.Symbol;
            if (symbol === legSymbol) {
              filteredOrders.push(obj);
            }
          });
          setter(filteredOrders);
        } catch (error) {
          this.error(`setOrdersBySymbol() ${error}`);
        }
      })();
    }
  }

  /**
    * Fetches today's orders and open orders for the given Accounts, filtered by given Order IDs.
    * @param {string} accountIds - List of valid Account IDs for the authenticated user in comma-separated format.
    * @param {string} orderIds - List of valid Order IDs for the authenticated user for given accounts in comma-separated format.
    * @returns {Promise<Array>} - Promise resolving to the list of orders.
    */
  getOrdersByOrderID(accountIds, orderIds) {
    const url = `${this.baseUrl}/accounts/${accountIds}/orders/${orderIds}`;
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`
      }
    }).then(response => response.data.Orders).catch(error => {
      console.error('Error fetching orders:', error);
      throw error;
    });
  }

  /**
   * Fetches positions for the given Accounts.
   * @param {string} accounts - List of valid Account IDs for the authenticated user in a comma-separated format.
   * @param {string} [symbol] - List of valid symbols in a comma-separated format for filtering positions.
   * @returns {Promise<Array>} - Promise resolving to the list of positions.
   */

  getPositionsAJAX(accountIDs) {
    return {
      url: `${this.baseUrl}/accounts/${accountIDs}/positions`,
      dataSrc: 'Positions',
      type: 'GET',
      headers: {
        Authorization: `Bearer ${this.accessToken}`
      }
    };
  }
  getPositions(accounts, symbol) {
    this.refreshToken();
    if (accounts !== null) {
      const url = `${this.baseUrl}/accounts/${accounts}/positions`;

      // Optional query parameter for symbol
      // const params = symbol ? { symbol } : {};

      return axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`
        }
        // params,
      }).then(response => response.data.Positions).catch(error => {
        console.error('Error fetching positions:', error);
        throw error;
      });
    }
  }
  setPostions(setter, accounts) {
    (async () => {
      try {
        const arr = await this.getPositions(accounts);
        setter(arr);
      } catch (error) {
        this.error(`setPostions() ${error}`);
      }
    })();
  }

  /**
  * Fetches wallet information for a specific crypto account.
  * @param {string} accountID - The ID of the crypto account.
  * @returns {Promise<Array>} - Promise resolving to the list of wallets for the specified crypto account.
  */
  getWallets(accountID) {
    const id_token = this.ts.getTokenId();
    const url = `${this.baseUrl}/accounts/${accountID}/wallets`;
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`
      }
    }).then(response => response.data.Wallets).catch(error => {
      console.error('Error fetching wallets:', error);
      throw error;
    });
  }

  /**
   * Streams wallet information for the specified crypto account.
   * @param {string} account - A valid crypto Account ID for the authenticated user.
   * @returns {Promise<Stream>} - Promise resolving to the stream of wallet information.
   */
  streamWallets(account) {
    const id_token = this.ts.getTokenId();
    const url = `${this.baseUrl}/stream/accounts/${account}/wallets`;
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        Accept: 'application/vnd.tradestation.streams.v2+json'
      },
      responseType: 'stream'
    }).then(response => response.data).catch(error => {
      console.error('Error streaming wallets:', error);
      throw error;
    });
  }

  /**
  * Streams orders for the given accounts.
  * @param {string} accountIds - List of valid Account IDs for the authenticated user in comma-separated format.
  * @returns {Promise<Array>} - Promise resolving to the streamed orders.
  */
  //  streamOrders(accountIds) {
  //   const url = `${this.baseUrl}/stream/accounts/${accountIds}/orders`;

  //   return axios.get(url, {
  //     headers: {
  //       Authorization: `Bearer ${this.accessToken}`,
  //     },
  //     responseType: 'stream', // To handle streaming response
  //   })
  //     .then(response => {
  //       // Handle the streamed data here
  //       response.data.on('data', data => {
  //         console.log(data.toString());
  //         // Process the streamed data as needed
  //       });
  //     })
  //     .catch(error => {
  //       console.error('Error streaming orders:', error);
  //       throw error;
  //     });
  // }

  async streamOrders(setter, streamIdPrefix, accountIds) {
    const streamId = `${streamIdPrefix}${accountIds}`;
    console.log("in order stream func", streamId);
    if (!this.allStreams?.[streamId]) {
      this.refreshToken();
      try {
        const controller = new AbortController();
        const signal = controller.signal;
        const url = `${this.baseUrl}/stream/accounts/${accountIds}/orders`;
        const response = await fetch(url, {
          method: 'get',
          signal: signal,
          headers: {
            Authorization: `Bearer ${this.accessToken}` // Replace with your actual access token
          }
        });
        const reader = response.body.getReader();
        this.allStreams[streamId] = controller;
        // Process the streaming data
        const processChunks = async () => {
          while (this.allStreams?.[streamId]) {
            try {
              const {
                done,
                value
              } = await reader.read();
              if (done || !this.allStreams?.[streamId]) {
                this.info(`Break ${streamIdPrefix}${accountIds}!`);
                break;
              }
              const jsonString = new TextDecoder().decode(value);
              const jsonData = JSON.parse(jsonString.trim());
              console.log("jsonData", typeof jsonData, jsonData);

              // setter(jsonData);
            } catch (error) {
              const msg = error.message.toLowerCase();
              if ((0,_util__WEBPACK_IMPORTED_MODULE_1__.isSubStr)(msg, 'network')) {
                this.info("Network Error");
              } else if ((0,_util__WEBPACK_IMPORTED_MODULE_1__.isSubStr)(msg, 'whitespace')) {
                this.info("None-whitespace Error");
              } else {
                this.error(`streamOrders() while ${error}`);
              }
            }
          }
        };
        if (this.allStreams?.[streamId]) {
          processChunks();
        } else {
          this.info(`Killed stream for ${streamIdPrefix}${accountIds}.`);
        }
      } catch (error) {
        this.error(`streamOrders() - ${error}`);
      }
    } else {
      this.info(`${streamIdPrefix}${accountIds} is active.`);
    }
  }

  /**
  * Streams orders for the given accounts and orders.
  * @param {string} accountIds - List of valid Account IDs for the authenticated user in comma-separated format.
  * @param {string} ordersIds - List of valid Order IDs for the account IDs in comma-separated format.
  * @returns {Promise<Array>} - Promise resolving to the list of streamed orders.
  */
  streamOrdersByOrderId(accountIds, ordersIds) {
    const id_token = this.ts.getTokenId();
    const url = `${this.baseUrl}/stream/accounts/${accountIds}/orders/${ordersIds}`;
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`
      }
    }).then(response => response.data.Orders).catch(error => {
      console.error('Error streaming orders by order ID:', error);
      throw error;
    });
  }

  /**
   * Streams positions for the given accounts.
   * @param {string} accountIds - List of valid Account IDs for the authenticated user in comma separated format.
   * @param {boolean} [changes=false] - A boolean value that specifies whether or not position updates are streamed as changes.
   * @returns {Promise<Array>} - Promise resolving to the streamed positions.
   */
  async streamPositions(setter, streamIdPrefix, accountIds, changes = false) {
    const streamId = `${streamIdPrefix}${accountIds}`;
    if (!this.allStreams?.[streamId]) {
      this.refreshToken();
      try {
        const controller = new AbortController();
        const signal = controller.signal;
        const params = new URLSearchParams({
          changes: String(changes)
        }).toString();
        const url = `${this.baseUrl}/stream/accounts/${accountIds}/positions?${params}`;
        const response = await fetch(url, {
          method: 'get',
          signal: signal,
          headers: {
            Authorization: `Bearer ${this.accessToken}`
          }
        });
        const reader = response.body.getReader();
        this.allStreams[streamId] = controller;
        const processChunks = async () => {
          while (this.allStreams?.[streamId]) {
            try {
              const {
                done,
                value
              } = await reader.read();
              if (done || !this.allStreams?.[streamId]) {
                this.info(`Breaking stream for ${streamId}...`);
                break;
              }
              const jsonString = new TextDecoder().decode(value);
              const jsonData = JSON.parse(jsonString.trim());
              if (jsonData?.Symbol) {
                ;
                setter(prev => [jsonData]);
              }
            } catch (error) {
              const msg = error.message.toLowerCase();
              if ((0,_util__WEBPACK_IMPORTED_MODULE_1__.isSubStr)(msg, 'network')) {
                this.info("Network Error");
                await this.delay(1000 * 5);
              } else if ((0,_util__WEBPACK_IMPORTED_MODULE_1__.isSubStr)(msg, 'whitespace')) {
                this.info("None-whitespace Error");
              } else {
                this.error(`streamPositions() while ${error}`);
              }
            }
          }
        };
        if (this.allStreams?.[streamId]) {
          processChunks();
        } else {
          this.info(`Killed stream for ${symbol}.`);
        }
      } catch (error) {
        this.error(`streamBars() - ${error}`);
      }
    } else {
      this.info(`${symbol} stream already active.`);
    }
  }
}

/***/ }),

/***/ "./src/tradestation/enpoints/endpoints.js":
/*!************************************************!*\
  !*** ./src/tradestation/enpoints/endpoints.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class TSEndpoints {
  constructor() {
    // Base URL for TradeStation API
    this.baseURL = 'https://api.tradestation.com/v2/';
    this.signinURL = 'https://signin.tradestation.com/';
    this.apiURL = 'https://api.tradestation.com';
    this.callbackURL = 'http://localhost';
    this.tokenBaseURL = `${this.signinURL}oauth/token`;
  }
  getAuth(clientId) {
    // for redirect
    // https://api.tradestation.com/docs/fundamentals/authentication/auth-code
    const scope = "openid offline_access profile MarketData ReadAccount Trade Crypto Matrix OptionSpreads";
    return `${this.signinURL}authorize?response_type=code&client_id=${clientId}&redirect_uri=${this.callbackURL}&audience=${this.apiURL}&scope=${scope}`;
  }

  // Method to get market data endpoint
  getMarketData(symbol, timeframe) {
    // Example market data endpoint with parameters
    return `${this.baseURL}marketdata/symbols?symbol=${symbol || 'AAPL'}&timeframe=${timeframe || '1d'}`;
  }

  // Method to get account information endpoint
  getAccountInformation() {
    return `${this.baseURL}accounts`;
  }

  // Method to get position information endpoint
  getPositionInformation(accountId) {
    return `${this.baseURL}accounts/${accountId}/positions`;
  }

  // Method to get orders information endpoint
  getOrdersInformation(accountId) {
    return `${this.baseURL}accounts/${accountId}/orders`;
  }

  // Method to get trades information endpoint
  getTradesInformation(accountId) {
    return `${this.baseURL}accounts/${accountId}/trades`;
  }

  // Method to get crypto information endpoint
  getCryptoInformation(accountId) {
    return `${this.baseURL}accounts/${accountId}/crypto`;
  }

  // Add more methods for other common endpoints as needed
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TSEndpoints);

/***/ }),

/***/ "./src/tradestation/enpoints/main.js":
/*!*******************************************!*\
  !*** ./src/tradestation/enpoints/main.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TS: () => (/* binding */ TS),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./endpoints */ "./src/tradestation/enpoints/endpoints.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _accounts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accounts */ "./src/tradestation/enpoints/accounts.js");
/* harmony import */ var _marketData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marketData */ "./src/tradestation/enpoints/marketData.js");
/* harmony import */ var _orders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./orders */ "./src/tradestation/enpoints/orders.js");
/* harmony import */ var _symbols__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./symbols */ "./src/tradestation/enpoints/symbols.js");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_6__);

// import Cookies from 'js-cookie';






class TS {
  constructor() {
    this.endpoints = new _endpoints__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.refreshToken();
    this.token = null;
    // Nested Classes
    this.account = null;
    this.marketData = null;
    this.order = null;
    this.symbol = null;
  }
  info(msg = "") {
    console.log(`${(0,_util__WEBPACK_IMPORTED_MODULE_1__.currentESTDatetime)()} TS [INFO] - ${msg}`);
  }
  error(msg = "") {
    console.error(`${(0,_util__WEBPACK_IMPORTED_MODULE_1__.currentESTDatetime)()} TS [ERROR] - ${msg}`);
  }
  refreshClasses(accessToken) {
    this.info(`TS Classes (token: ${typeof accessToken === 'string' ? 'success' : 'failure'}, length: ${accessToken?.length}, Token: ${accessToken?.slice(0, 5)}...${accessToken?.slice(-5)})`);
    if (this.account === null) {
      this.account = new _accounts__WEBPACK_IMPORTED_MODULE_2__.Accounts(accessToken);
      this.marketData = new _marketData__WEBPACK_IMPORTED_MODULE_3__.MarketData(accessToken);
      this.order = new _orders__WEBPACK_IMPORTED_MODULE_4__.Orders(accessToken);
      this.symbol = new _symbols__WEBPACK_IMPORTED_MODULE_5__.Symbols(accessToken);
    } else {
      this.account.accessToken = accessToken;
      this.marketData.accessToken = accessToken;
      this.order.accessToken = accessToken;
      this.symbol.accessToken = accessToken;
    }
  }
  async refreshToken() {
    electron__WEBPACK_IMPORTED_MODULE_6__.ipcRenderer.send('getRefreshToken');
    electron__WEBPACK_IMPORTED_MODULE_6__.ipcRenderer.on('sendRefreshToken', (event, arg) => {
      this.token = arg.ts;
      this.refreshClasses(this.token?.access_token);
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TS);

/***/ }),

/***/ "./src/tradestation/enpoints/marketData.js":
/*!*************************************************!*\
  !*** ./src/tradestation/enpoints/marketData.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarketData: () => (/* binding */ MarketData)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_2__);
/**
 * @fileoverview
 * This file contains the implementation of the Accounts class that interacts with the TradeStation API.
 * It utilizes the OpenAPI specification version 3.0.3.
 *
 * @description
 * # Authentication
 * For more information on authorization and gaining an access/refresh token,
 * please visit: [Authentication](/docs/fundamentals/authentication/auth-overview).
 * <SecurityDefinitions />
 *
 * @version V3
 *
 * @termsOfService
 * [TradeStation API Guidelines for Acceptance](http://elasticbeanstalk-us-east-1-525856068889.s3.amazonaws.com/wp-content/uploads/2014/03/Guidelines_For_Acceptance.pdf)
 *
 * @contact
 * - Name: TradeStation API Team
 * - Email: ClientServices@tradestation.com
 * - URL: [TradeStation API Developer Portal](https://developer.tradestation.com/webapi)
 *
 * @license
 * - Name: Services Agreement For Application Developers
 * - URL: [Agreement for WebAPI Developers](https://s3.amazonaws.com/elasticbeanstalk-us-east-1-525856068889/wp-content/uploads/2016/02/Agreement-for-WebAPI-Developers_v5C.pdf)
 *
 * @server
 * - URL: https://api.tradestation.com
 */



class MarketData {
  constructor(accessToken) {
    this.ts = window.ts;
    this.baseUrl = 'https://api.tradestation.com/v3/marketdata';
    this.accessToken = accessToken;
    this.isRefreshingToken = false;
    // stream
    this.allStreams = {};
  }
  info(msg = "") {
    console.log(`${(0,_util__WEBPACK_IMPORTED_MODULE_1__.currentESTTime)()} MarketData [INFO] - ${msg}`);
  }
  error(msg = "") {
    console.error(`${(0,_util__WEBPACK_IMPORTED_MODULE_1__.currentESTTime)()} MarketData [ERROR] - ${msg}`);
  }
  killAllStreams() {
    this.info("Killing All Open Streams In MarketData.");
    for (const key in this.allStreams) {
      if (this.allStreams?.[key]) {
        this.allStreams[key].abort(); //.cancel();
        delete this.allStreams[key];
      }
    }
  }
  killAllStreamsById(id) {
    this.info("Killing All Open Streams In MarketData.");
    for (const key in this.allStreams) {
      if ((0,_util__WEBPACK_IMPORTED_MODULE_1__.isSubStr)(key, id)) {
        this.allStreams[key].abort(); //.cancel();
        delete this.allStreams[key];
      }
    }
  }
  killStreamByKey(key) {
    if (this.allStreams?.[key]) {
      this.allStreams[key].abort(); //.cancel();
      delete this.allStreams[key];
    }
  }
  async refreshToken() {
    if (!this.isRefreshingToken) {
      this.isRefreshingToken = true;
      electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.send('getRefreshToken');
      electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.on('sendRefreshToken', (event, arg) => {
        const accessToken = arg.ts?.access_token;
        if (typeof accessToken === 'string') {
          if (this.accessToken !== accessToken) {
            this.info(`new refreshToken() length: ${accessToken.length}, Token: ${accessToken.slice(0, 5)}...${accessToken.slice(-5)})`);
          }
          this.accessToken = accessToken;
        }
        this.isRefreshingToken = false;
      });
    }
  }
  async delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  localEpochToGMT(epoch) {
    const now = new Date();
    const timezoneOffset = now.getTimezoneOffset() * 60 * 1000; // -5 hours * 60 minutes/hour * 60 seconds/minute * 1000 milliseconds/second
    return (epoch - timezoneOffset) / 1000;
  }
  epoch_UTC2EST(epoch) {
    return parseInt(new Date(epoch).getTime() + -5 * 60 * 60 * 1000);
  }
  timestamp_UTC2EST(timestamp) {
    // Parse the input date string
    const date = new Date(timestamp);
    return date.toLocaleString();
    // return new Date(timestamp).toLocaleString("en-US", {timeZone: "America/New_York"});
  }
  formatBar(bar) {
    return {
      time: bar.Epoch,
      open: bar.Open,
      high: bar.High,
      low: bar.Low,
      close: bar.Close,
      volume: bar.TotalVolume,
      // for volume bars
      value: bar.TotalVolume,
      color: bar.Close < bar.Open ? "rgba(114, 137, 218, .2)" // primary
      : "rgba(11, 150, 87, .2)" // success
    };
  }
  bars2Candles(bars) {
    return bars.map(bar => {
      return this.formatBar(bar);
    });
  }
  fixBar(bar) {
    return {
      ...bar,
      Close: parseFloat(bar.Close),
      High: parseFloat(bar.High),
      Low: parseFloat(bar.Low),
      Open: parseFloat(bar.Open),
      TotalVolume: parseInt(bar.TotalVolume),
      Epoch: this.localEpochToGMT(bar.Epoch),
      // / 1000,
      TimeStamp: this.timestamp_UTC2EST(bar.TimeStamp)
    };
  }

  /**
   * Fetches marketdata bars for the given symbol, interval, and timeframe.
   * @param {string} symbol - The valid symbol string.
   * @param {string} [interval='1'] - Interval that each bar will consist of.
   * @param {string} [unit='Daily'] - Unit of time for each bar interval. Minute, Daily, Weekly, Monthly
   * @param {string} [barsback='1'] - Number of bars back to fetch.
   * @param {string} [firstdate] - The first date formatted as 'YYYY-MM-DD 2020-04-20T18:00:00Z'. - no default
   * @param {string} [lastdate] - The last date formatted as 'YYYY-MM-DD 2020-04-20T18:00:00Z'. - Defaults to current timestamp
   * @param {string} [sessiontemplate='Default'] - United States (US) stock market session templates. USEQPre, USEQPost, USEQPreAndPost, USEQ24Hour,Default.
   * @returns {Promise<object>} - Promise resolving to the fetched marketdata bars.
   */
  async getBars(symbol, params) {
    this.refreshToken();
    const interval = params?.interval || '1';
    const unit = params?.unit || 'Daily';
    const barsback = params?.barsback || '1';
    const firstdate = params?.firstdate || '';
    const lastdate = params?.lastdate || new Date().toISOString();
    const sessiontemplate = params?.sessiontemplate || 'Default';
    const url = `${this.baseUrl}/barcharts/${symbol}`;
    const options = {
      params: {
        interval,
        unit,
        barsback,
        // firstdate,
        // lastdate,
        sessiontemplate
      },
      headers: {
        Authorization: `Bearer ${this.accessToken}`
      }
    };
    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, options);
      const bars = response.data.Bars;
      const newBars = bars.map(bar => {
        return this.fixBar(bar);
      });
      return newBars;
    } catch (error) {
      this.error(`getBars() - ${error}`);
      throw error;
    }
  }
  setBars(setter, symbol, params) {
    (async () => {
      try {
        const arr = await this.getBars(symbol, params);
        setter(arr);
      } catch (error) {
        this.error(`setBars() ${error}`);
      }
    })();
  }
  setCandles(setter, symbol, params) {
    (async () => {
      try {
        const arr = await this.getBars(symbol, params);
        setter(this.bars2Candles(arr));
      } catch (error) {
        this.error(`setBars() ${error}`);
      }
    })();
  }

  /**
   * Streams marketdata bars for the given symbol, interval, and timeframe.
   * @param {string} symbol - The valid symbol string.
   * @param {string} [interval='1'] - Interval that each bar will consist of.
   * @param {string} [unit='Daily'] - Unit of time for each bar interval.
   * @param {string} [barsback='1'] - The bars back.
   * @param {string} [sessiontemplate] - United States (US) stock market session templates.
   * @returns {Promise<Stream>} - Promise resolving to the streamed marketdata bars.
   */

  updateVolume(ref, bar, upColor, downColor) {
    ref.current?.update({
      time: bar.time,
      value: bar.volume,
      color: bar.open > bar.close ? downColor || '#7289DA' : upColor || 'rgb(87,242,135)'
    });
  }

  // async streamBarsAlgo(setter, id, symbol, strategyFunc, options){
  //   const streamId = `${id}${symbol}`;
  //   if (!this.allStreams?.[streamId]) {
  //     this.refreshToken();
  //     try {
  //       const controller = new AbortController();
  //       const signal = controller.signal;
  //       const { interval, unit, barsback, sessiontemplate } = options;

  // const params = new URLSearchParams({
  //   interval: String(interval),
  //   unit: String(unit),
  //   barsback: String(barsback),
  //   sessiontemplate: String(sessiontemplate),
  // }).toString();

  // const url = `${this.baseUrl}/stream/barcharts/${symbol}?${params}`;
  //       const response = await fetch(url, {
  //         method: 'get',
  //         signal: signal,
  //         headers: {
  //           Authorization: `Bearer ${this.accessToken}`, // Replace with your actual access token
  //         },
  //       });
  //       const reader = response.body.getReader();
  //       this.allStreams[streamId] = controller;
  //       // Process the streaming data
  //       const processChunks = async () => {
  //         while (this.allStreams?.[streamId]) {
  //           try {
  //             const { done, value } = await reader.read();
  //             if (done || !this.allStreams?.[streamId]) {
  //               this.info(`Breaking stream for ${symbol}...`);
  //               break;
  //             }
  //             const jsonString = new TextDecoder().decode(value);
  //             const jsonData = JSON.parse(jsonString.trim());
  //             const newBar = this.fixBar(jsonData);
  //             setter(newBar);
  //           } catch (error) {
  //             const msg = error.message.toLowerCase();
  //             if (isSubStr(msg, 'network')) {
  //               this.info("Network Error");
  //               await this.delay(1000 * 5);
  //             }else if (isSubStr(msg, 'whitespace')){
  //               this.info("None-whitespace Error");
  //             } else {
  //               this.error(`streamBars() while ${error}`);
  //             }
  //           }
  //         }
  //       };
  //       if (this.allStreams?.[streamId]) {
  //         processChunks();
  //       }else{
  //         this.info(`Killed stream for ${symbol}.`)
  //       }
  //     } catch (error) {
  //       this.error(`streamBars() - ${error}`);
  //     }
  //   } else {
  //     this.info(`${symbol} stream already active.`)
  //   }
  // }

  async streamBars(chart, streamIdPrefix, symbol, params) {
    const streamId = `${streamIdPrefix}${symbol}`;
    if (!this.allStreams?.[streamId]) {
      this.refreshToken();
      try {
        const controller = new AbortController();
        const signal = controller.signal;
        const urlParams = new URLSearchParams(params).toString();
        const url = `${this.baseUrl}/stream/barcharts/${symbol}?${urlParams}`;
        const response = await fetch(url, {
          method: 'get',
          signal: signal,
          headers: {
            Authorization: `Bearer ${this.accessToken}` // Replace with your actual access token
          }
        });
        console.log(response);
        const reader = response.body.getReader();
        this.allStreams[streamId] = controller;
        // Process the streaming data
        const processChunks = async () => {
          while (this.allStreams?.[streamId]) {
            try {
              const {
                done,
                value
              } = await reader.read();
              if (done || !this.allStreams?.[streamId]) {
                this.info(`Breaking stream for ${symbol}...`);
                break;
              }
              const jsonString = new TextDecoder().decode(value);
              this.info(`symbol ${symbol}`);
              const jsonData = JSON.parse(jsonString.trim());
              const newBar = this.fixBar(jsonData);
              chart.setNextStreamBar(this.formatBar(newBar));
            } catch (error) {
              const msg = error.message.toLowerCase();
              if ((0,_util__WEBPACK_IMPORTED_MODULE_1__.isSubStr)(msg, 'network')) {
                this.info("Network Error");
                await this.delay(1000 * 5);
              } else if ((0,_util__WEBPACK_IMPORTED_MODULE_1__.isSubStr)(msg, 'whitespace')) {
                this.info("None-whitespace Error");
              } else {
                this.error(`streamBars() while ${error}`);
              }
            }
          }
        };
        if (this.allStreams?.[streamId]) {
          processChunks();
        } else {
          this.info(`Killed stream for ${symbol}.`);
        }
      } catch (error) {
        this.error(`streamBars() - ${error}`);
      }
    } else {
      this.info(`${symbol} stream already active.`);
    }
  }

  /**
  * Fetches all crypto Symbol Names information.
  * @returns {Promise<Array<string>>} - Promise resolving to an array of crypto symbol names.
  */
  async getCryptoSymbolNames() {
    const url = `${this.baseUrl}/symbollists/cryptopairs/symbolnames`;
    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`
        }
      });
      return response.data.SymbolNames;
    } catch (error) {
      throw new Error(`Error fetching crypto symbol names: ${error.message}`);
    }
  }

  /**
   * Fetches symbol details and formatting information for one or more symbols.
   * @param {string} symbols - List of valid symbols in comma-separated format (e.g., "MSFT,BTCUSD").
   * @returns {Promise<object>} - Promise resolving to the symbol details response.
   */
  async getSymbolDetails(symbols) {
    this.refreshToken();
    const url = `${this.baseUrl}/symbols/${symbols}`;
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`
      }
    }).then(response => response.data.Symbols).catch(error => {
      this.error(`getSymbolDetails() - ${error}`);
      throw error;
    });
  }
  setSymbolDetails(setter, symbols) {
    (async () => {
      try {
        const arr = await this.getSymbolDetails(symbols);
        setter(arr);
        // console.log(arr);
      } catch (error) {
        this.error(`setSymbolDetails() ${error}`);
      }
    })();
  }

  /**
   * Get the available option contract expiration dates for the underlying symbol.
   * @param {string} underlying - The symbol for the underlying security.
   * @param {number} [strikePrice] - Strike price (optional).
   * @returns {Promise<Array<object>>} - Promise resolving to an array of option expirations.
   */
  async getOptionExpirations(underlying, strikePrice = null) {
    const url = `${this.baseUrl}/options/expirations/${underlying}`;
    const params = strikePrice ? {
      strikePrice
    } : {};
    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`
        },
        params
      });
      return response.data.Expirations;
    } catch (error) {
      throw new Error(`Error fetching option expirations: ${error.message}`);
    }
  }

  /**
   * Analyze the risk vs. reward of a potential option trade.
   * @param {object} riskRewardInput - Risk vs. reward analysis input.
   * @returns {Promise<object>} - Promise resolving to the risk vs. reward analysis result.
   */
  async getOptionRiskReward(riskRewardInput) {
    const url = `${this.baseUrl}/options/riskreward`;
    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(url, riskRewardInput, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.accessToken}`
        }
      });
      return response.data;
    } catch (error) {
      throw new Error(`Error analyzing option risk vs. reward: ${error.message}`);
    }
  }

  /**
   * Get the available spread types for option chains.
   * @returns {Promise<Array<object>>} - Promise resolving to an array of option spread types.
   */
  async getOptionSpreadTypes() {
    const url = `${this.baseUrl}/options/spreadtypes`;
    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`
        }
      });
      return response.data.SpreadTypes;
    } catch (error) {
      throw new Error(`Error fetching option spread types: ${error.message}`);
    }
  }

  /**
   * Get the available strike prices for a spread type and expiration date.
   * @param {string} underlying - The symbol for the underlying security.
   * @param {string} [spreadType = "Single"] - The name of the spread type (optional, default is "Single").
   * @param {number} [strikeInterval = 1] - Specifies the desired interval between the strike prices (optional, default is 1).
   * @param {string} [expiration] - Date on which the option contract expires; must be a valid expiration date (optional).
   * @param {string} [expiration2] - Second contract expiration date required for Calendar and Diagonal spreads (optional).
   * @returns {Promise<object>} - Promise resolving to the option strikes for the specified parameters.
   */
  async getOptionStrikes(underlying, spreadType = 'Single', strikeInterval = 1, expiration, expiration2) {
    const url = `${this.baseUrl}/options/strikes/${underlying}`;
    const params = {
      spreadType,
      strikeInterval,
      expiration,
      expiration2
    };
    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`
        },
        params
      });
      return {
        SpreadType: response.data.SpreadType,
        Strikes: response.data.Strikes
      };
    } catch (error) {
      throw new Error(`Error fetching option strikes: ${error.message}`);
    }
  }

  /**
   * Streams a chain of option spreads for a given underlying symbol, spread type, and expiration.
   * @param {string} underlying - The symbol for the underlying security on which the option contracts are based.
   * @param {string} [expiration] - Date on which the option contract expires; must be a valid expiration date. Defaults to the next contract expiration date.
   * @param {string} [expiration2] - Second contract expiration date required for Calendar and Diagonal spreads.
   * @param {number} [strikeProximity=5] - Specifies the number of spreads to display above and below the priceCenter.
   * @param {string} [spreadType='Single'] - Specifies the name of the spread type to use.
   * @param {number} [riskFreeRate] - The theoretical rate of return of an investment with zero risk. Defaults to the current quote for $IRX.X. The percentage rate should be specified as a decimal value.
   * @param {number} [priceCenter] - Specifies the strike price center. Defaults to the last quoted price for the underlying security.
   * @param {number} [strikeInterval=1] - Specifies the desired interval between the strike prices in a spread. It must be greater than or equal to 1. A value of 1 uses consecutive strikes; a value of 2 skips one between strikes; and so on.
   * @param {boolean} [enableGreeks=true] - Specifies whether or not greeks properties are returned.
   * @param {string} [strikeRange='All'] - If the filter is `ITM` (in-the-money), the chain includes only spreads that have an intrinsic value greater than zero. If the filter is `OTM` (out-of-the-money), the chain includes only spreads that have an intrinsic value equal to zero.
   * @param {string} [optionType='All'] - Filters the spreads by a specific option type. Valid values are `All`, `Call`, and `Put`.
   * @returns {Promise<Stream>} - Promise resolving to the streamed option chain.
   */
  streamOptionChain(underlying, expiration, expiration2, strikeProximity = 5, spreadType = 'Single', riskFreeRate, priceCenter, strikeInterval = 1, enableGreeks = true, strikeRange = 'All', optionType = 'All') {
    const url = `${this.baseUrl}/stream/options/chains/${underlying}`;
    const params = {
      expiration,
      expiration2,
      strikeProximity,
      spreadType,
      riskFreeRate,
      priceCenter,
      strikeInterval,
      enableGreeks,
      strikeRange,
      optionType
    };
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, {
      params,
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        Accept: 'application/vnd.tradestation.streams.v2+json'
      },
      responseType: 'stream'
    });
  }

  /**
   * Streams price quotes and greeks for the specified option spread.
   * @param {string} legs_0_Symbol - Option contract symbol or underlying symbol to be traded for this leg.
   * @param {number} [legs_0_Ratio=1] - The number of option contracts or underlying shares for this leg, relative to the other legs. Use a positive number to represent a buy trade and a negative number to represent a sell trade.
   * @param {number} [riskFreeRate] - The theoretical rate of return of an investment with zero risk. Defaults to the current quote for $IRX.X. The percentage rate should be specified as a decimal value.
   * @param {boolean} [enableGreeks=true] - Specifies whether or not greeks properties are returned.
   * @returns {Promise<Stream>} - Promise resolving to the streamed option quotes.
   */
  streamOptionQuotes(legs_0_Symbol, legs_0_Ratio = 1, riskFreeRate, enableGreeks = true) {
    const url = `${this.baseUrl}/stream/options/quotes`;
    const params = {
      'legs[0].Symbol': legs_0_Symbol,
      'legs[0].Ratio': legs_0_Ratio,
      riskFreeRate,
      enableGreeks
    };
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, {
      params,
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        Accept: 'application/vnd.tradestation.streams.v2+json'
      },
      responseType: 'stream'
    });
  }

  /**
   * Fetches a full snapshot of the latest Quote for the given Symbols.
   * @param {string} symbols - List of valid symbols in a comma-separated format.
   * @returns {Promise<Quotes>} - Promise resolving to the snapshot of the latest Quote.
   */
  async getQuoteSnapshots(symbols) {
    this.refreshToken();
    const url = `${this.baseUrl}/quotes/${symbols}`;
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`
      }
    }).then(response => response.data.Quotes).catch(error => {
      console.error('Error fetching account balances:', error);
      throw error;
    });
  }
  setQuoteSnapshots(setter, symbols) {
    (async () => {
      try {
        const arr = await this.getQuoteSnapshots(symbols);
        this.info(`setQuoteSnapshots() hit`);
        setter(prev => arr);
      } catch (error) {
        this.error(`setQuoteSnapshots() ${error}`);
      }
    })();
  }

  /**
   * Streams Quote changes for one or more symbols.
   * @param {string} symbols - List of valid symbols in a comma-separated format.
   * @returns {Promise<QuoteStream>} - Promise resolving to the streamed Quote changes.
   */

  // async streamQuotes(setter, streamIdPrefix, symbols) {

  //     this.refreshToken();
  //     try {
  //       const url = `${this.baseUrl}/stream/quotes/${symbols}`;
  //       const headers = new Headers({
  //         'Authorization': `Bearer ${this.accessToken}`
  //       });
  //       fetch(url, { method: 'GET', headers: headers })
  //         .then(response => {
  //           if (!response.ok) {
  //             throw new Error(`HTTP error! status: ${response.status}`);
  //           }
  //           return response.body;
  //         })
  //         .then(stream => {
  //           const reader = stream.getReader();
  //           return new ReadableStream({
  //             start(controller) {
  //               function push() {
  //                 reader.read().then(({ done, value }) => {
  //                   if (done) {
  //                     controller.close();
  //                     return;
  //                   }
  //                   controller.enqueue(value);
  //                   push();
  //                 });
  //               }
  //               push();
  //             }
  //           });
  //         })
  //         .then(stream => {
  //           // Here you can process the stream data
  //           const reader = stream.getReader();
  //           // while (true){
  //             reader.read().then(function process({ done, value }) {
  //               if (done) {
  //                 console.log('Stream complete');
  //                 return;
  //               }

  //               try {
  //                 const decoder = new TextDecoder();
  //                 const jsonString = decoder.decode(value);
  //                 const jsonObject = JSON.parse(jsonString);
  //                 setter(jsonObject);
  //                 return jsonObject;
  //               } catch (error) {
  //                 console.log(`streamQuotes ${error}`);
  //                 return;
  //               }
  //             });
  //           // }
  //         })
  //         .catch(err => {
  //           this.error(`streamQuotes ${err}`);
  //         });
  //     } catch (error) {
  //       this.error(`streamQuotes ${error}`);
  //     }

  // }
  async streamQuotes(setter, streamIdPrefix, symbols) {
    const streamId = `${streamIdPrefix}${symbols}`;
    if (!this.allStreams?.[streamId]) {
      this.refreshToken();
      try {
        const controller = new AbortController();
        const signal = controller.signal;
        const url = `${this.baseUrl}/stream/quotes/${symbols}`;
        const response = await fetch(url, {
          method: 'get',
          signal: signal,
          headers: {
            Authorization: `Bearer ${this.accessToken}` // Replace with your actual access token
          }
        });
        const reader = response.body.getReader();
        this.allStreams[streamId] = controller;
        // Process the streaming data
        const processChunks = async () => {
          while (this.allStreams?.[streamId]) {
            try {
              const {
                done,
                value
              } = await reader.read();
              if (done || !this.allStreams?.[streamId]) {
                this.info(`Break q_${symbols}!`);
                break;
              }
              const jsonString = new TextDecoder().decode(value);
              const jsonData = JSON.parse(jsonString.trim());
              setter(jsonData);
            } catch (error) {
              const msg = error.message.toLowerCase();
              if ((0,_util__WEBPACK_IMPORTED_MODULE_1__.isSubStr)(msg, 'network')) {
                this.info("Network Error");
                await this.delay(1000 * 5);
              } else if ((0,_util__WEBPACK_IMPORTED_MODULE_1__.isSubStr)(msg, 'whitespace')) {
                // this.info("None-whitespace Error");
              } else {
                this.error(`streamQuotes() while ${error}`);
              }
            }
          }
        };
        if (this.allStreams?.[streamId]) {
          processChunks();
        } else {
          this.info(`Killed stream for ${streamIdPrefix}${symbols}.`);
        }
      } catch (error) {
        this.error(`streamQuotes() - ${error}`);
      }
    } else {
      this.info(`${streamIdPrefix}${symbols} is active.`);
    }
  }

  /**
   * Streams market depth quotes for equities, futures, and stock options.
   * A separate quote is returned for each price, side, and participant.
   * @param {string} symbol - A valid symbol for the security.
   * @param {number} [maxLevels=20] - The maximum number of market depth levels to return. Must be a positive integer. Defaults to 20 if omitted.
   * @returns {Promise<MarketDepthQuoteStream>} - Promise resolving to the streamed market depth quotes.
   */
  streamMarketDepthQuotes(symbol, maxLevels = 20) {
    const url = `${this.baseUrl}/stream/marketdepth/quotes/${symbol}`;
    const params = {
      maxlevels: maxLevels
    };
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, {
      params,
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        Accept: 'application/vnd.tradestation.streams.v2+json'
      },
      responseType: 'stream'
    });
  }

  /**
   * Streams aggregate market depth quotes for equities, futures, and stock options.
   * A separate quote is returned for each price and side, using aggregated data from the participants.
   * @param {string} symbol - A valid symbol for the security.
   * @param {number} [maxLevels=20] - The maximum number of market depth levels to return. Must be a positive integer. Defaults to 20 if omitted.
   * @returns {Promise<MarketDepthAggregateStream>} - Promise resolving to the streamed aggregate market depth quotes.
   */
  streamMarketDepthAggregates(symbol, maxLevels = 20) {
    const url = `${this.baseUrl}/stream/marketdepth/aggregates/${symbol}`;
    const params = {
      maxlevels: maxLevels
    };
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, {
      params,
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        Accept: 'application/vnd.tradestation.streams.v2+json'
      },
      responseType: 'stream'
    });
  }

  /**
   * Streams tick bars data for the regular session from a number of bars back,
   * each bar returned separated by interval number of ticks.
   * @param {string} symbol - A Symbol Name.
   * @param {number} interval - Interval for each bar returned (in ticks).
   * @param {number} barsBack - The number of bars to stream, going back from the current time.
   * @returns {Promise<Object>} - Promise resolving to the tick bar response.
   */
  streamTickBars(symbol, interval, barsBack) {
    const url = `https://api.tradestation.com/v2/stream/tickbars/${symbol}/${interval}/${barsBack}`;
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`
      }
    }).then(response => response.data).catch(error => {
      console.error('Error streaming tick bars:', error);
      throw error;
    });
  }
}

/***/ }),

/***/ "./src/tradestation/enpoints/orders.js":
/*!*********************************************!*\
  !*** ./src/tradestation/enpoints/orders.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Orders: () => (/* binding */ Orders)
/* harmony export */ });
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @fileoverview
 * This file contains the implementation of the Accounts class that interacts with the TradeStation API.
 * It utilizes the OpenAPI specification version 3.0.3.
 *
 * @description
 * # Authentication
 * For more information on authorization and gaining an access/refresh token,
 * please visit: [Authentication](/docs/fundamentals/authentication/auth-overview).
 * <SecurityDefinitions />
 *
 * @version V3
 *
 * @termsOfService
 * [TradeStation API Guidelines for Acceptance](http://elasticbeanstalk-us-east-1-525856068889.s3.amazonaws.com/wp-content/uploads/2014/03/Guidelines_For_Acceptance.pdf)
 *
 * @contact
 * - Name: TradeStation API Team
 * - Email: ClientServices@tradestation.com
 * - URL: [TradeStation API Developer Portal](https://developer.tradestation.com/webapi)
 *
 * @license
 * - Name: Services Agreement For Application Developers
 * - URL: [Agreement for WebAPI Developers](https://s3.amazonaws.com/elasticbeanstalk-us-east-1-525856068889/wp-content/uploads/2016/02/Agreement-for-WebAPI-Developers_v5C.pdf)
 *
 * @server
 * - URL: https://api.tradestation.com
 */
const axios = __webpack_require__(/*! axios */ "axios");

class Orders {
  constructor(accessToken) {
    this.baseUrl = 'https://api.tradestation.com/v3/orderexecution'; // Update with the correct base URL
    this.accessToken = accessToken;
    this.isRefreshingToken = false;
  }
  info(msg = "") {
    console.log(`${currentESTTime()} Orders [INFO] - ${msg}`);
  }
  error(msg = "") {
    console.error(`${currentESTTime()} Orders [ERROR] - ${msg}`);
  }
  async refreshToken() {
    if (!this.isRefreshingToken) {
      this.isRefreshingToken = true;
      electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send('getRefreshToken');
      electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.on('sendRefreshToken', (event, arg) => {
        const accessToken = arg.ts?.access_token;
        if (typeof accessToken === 'string') {
          if (this.accessToken !== accessToken) {
            this.info(`new refreshToken() length: ${accessToken.length}, Token: ${accessToken.slice(0, 5)}...${accessToken.slice(-5)})`);
          }
          this.accessToken = accessToken;
        }
        this.isRefreshingToken = false;
      });
    }
  }

  /**
   * Confirm an order without placing it.
   * @param {Object} order - The order details.
   * @returns {Promise<Array>} - Promise resolving to the order confirmations.
   */
  confirmOrder(order) {
    const url = `${this.baseUrl}/orderconfirm`;
    return axios.post(url, order, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        'Content-Type': 'application/json'
      }
    }).then(response => response.data.Confirmations).catch(error => {
      console.error('Error confirming order:', error);
      throw error;
    });
  }

  /**
     * Confirm a group order.
     * @param {Object} groupOrder - The group order details.
     * @returns {Promise<Array>} - Promise resolving to the order confirmations.
     */
  confirmGroupOrder(groupOrder) {
    const url = `${this.baseUrl}/ordergroupconfirm`;
    return axios.post(url, groupOrder, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        'Content-Type': 'application/json'
      }
    }).then(response => response.data.OrderConfirmResponses).catch(error => {
      console.error('Error confirming group order:', error);
      throw error;
    });
  }

  /**
     * Place a group order.
     * @param {Object} groupOrder - The group order details.
     * @returns {Promise<Array>} - Promise resolving to the order responses.
     */
  placeGroupOrder(groupOrder) {
    const url = `${this.baseUrl}/ordergroups`;
    return axios.post(url, groupOrder, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        'Content-Type': 'application/json'
      }
    }).then(response => response.data.Orders).catch(error => {
      console.error('Error placing group order:', error);
      throw error;
    });
  }

  /**
     * Place a general order.
     * @param {Object} order - The order details.
     * @returns {Promise<Array>} - Promise resolving to the order responses.
     */

  _simple(accountId, orderType, quantity, symbol, timeInForce, action) {
    if (accountId === undefined || orderType === undefined || quantity === undefined || symbol === undefined || timeInForce === undefined || action === undefined) {
      return null;
    } else {
      const order = {
        AccountID: accountId,
        Symbol: symbol,
        Quantity: quantity.toString(),
        OrderType: orderType,
        TradeAction: action.toUpperCase(),
        TimeInForce: {
          Duration: timeInForce
        }
        // "Route": "Intelligent"
      };
      console.log("Order blob", order);
      return order;
    }
  }
  placeOrder(order) {
    this.refreshToken();
    try {
      const url = `${this.baseUrl}/orders`;
      return axios.post(url, order, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          'Content-Type': 'application/json'
        }
      }).then(response => response.data.Orders).catch(error => {
        console.error('Error placing order:', error);
        throw error;
      });
    } catch (error) {
      this.error(`placeOrder() - ${error}`);
    }
  }

  /**
     * Replace an active order with a modified version of that order.
     * @param {string} orderID - The OrderID for the order to replace.
     * @param {Object} replacementOrder - The modified order details.
     * @returns {Promise<Object>} - Promise resolving to the order response.
     */
  replaceOrder(orderID, replacementOrder) {
    const url = `${this.baseUrl}/orders/${orderID}`;
    return axios.put(url, replacementOrder, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        'Content-Type': 'application/json'
      }
    }).then(response => response.data).catch(error => {
      console.error('Error replacing order:', error);
      throw error;
    });
  }

  /**
     * Get activation triggers for placing orders.
     * @returns {Promise<Array>} - Promise resolving to the activation triggers.
     */
  getActivationTriggers() {
    const url = `${this.baseUrl}/activationtriggers`;
    return axios.get(url, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`
      }
    }).then(response => response.data.ActivationTriggers).catch(error => {
      console.error('Error getting activation triggers:', error);
      throw error;
    });
  }

  /**
    * Get a list of valid routes that a client can specify when posting an order.
    * @returns {Promise<Array>} - Promise resolving to the list of routes.
    */
  getRoutes() {
    const url = `${this.baseUrl}/routes`;
    return axios.get(url, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`
      }
    }).then(response => response.data.Routes).catch(error => {
      console.error('Error getting routes:', error);
      throw error;
    });
  }
}

/***/ }),

/***/ "./src/tradestation/enpoints/symbols.js":
/*!**********************************************!*\
  !*** ./src/tradestation/enpoints/symbols.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Symbols: () => (/* binding */ Symbols)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/**
 * @fileoverview
 * This file contains the implementation of the Accounts class that interacts with the TradeStation API.
 * It utilizes the OpenAPI specification version 3.0.3.
 *
 * @description
 * # Authentication
 * For more information on authorization and gaining an access/refresh token,
 * please visit: [Authentication](/docs/fundamentals/authentication/auth-overview).
 * <SecurityDefinitions />
 *
 * @version V3
 *
 * @termsOfService
 * [TradeStation API Guidelines for Acceptance](http://elasticbeanstalk-us-east-1-525856068889.s3.amazonaws.com/wp-content/uploads/2014/03/Guidelines_For_Acceptance.pdf)
 *
 * @contact
 * - Name: TradeStation API Team
 * - Email: ClientServices@tradestation.com
 * - URL: [TradeStation API Developer Portal](https://developer.tradestation.com/webapi)
 *
 * @license
 * - Name: Services Agreement For Application Developers
 * - URL: [Agreement for WebAPI Developers](https://s3.amazonaws.com/elasticbeanstalk-us-east-1-525856068889/wp-content/uploads/2016/02/Agreement-for-WebAPI-Developers_v5C.pdf)
 *
 * @server
 * - URL: https://api.tradestation.com
 */



class Symbols {
  constructor(accessToken) {
    this.accessToken = accessToken;
    this.isRefreshingToken = false;
    this.baseUrl = 'https://api.tradestation.com/v2/data/symbols';
  }
  async refreshToken() {
    if (!this.isRefreshingToken) {
      this.isRefreshingToken = true;
      electron__WEBPACK_IMPORTED_MODULE_1__.ipcRenderer.send('getRefreshToken');
      electron__WEBPACK_IMPORTED_MODULE_1__.ipcRenderer.on('sendRefreshToken', (event, arg) => {
        const accessToken = arg.ts?.access_token;
        if (typeof accessToken === 'string') {
          if (this.accessToken !== accessToken) {
            this.info(`new refreshToken() length: ${accessToken.length}, Token: ${accessToken.slice(0, 5)}...${accessToken.slice(-5)})`);
          }
          this.accessToken = accessToken;
        }
        this.isRefreshingToken = false;
      });
    }
  }

  /**
   * Suggests symbols semantically based upon partial input of symbol name,
   * company name, or description. Does not return Options symbols.
   * @param {string} text - Symbol text for suggestion. Partial input of a symbol name, company name, or description.
   * @param {number} [top] - The top number of results to return.
   * @param {string} [filter] - An OData filter to apply to the results.
   * @returns {Promise<SymbolSuggestDefinition>} - Promise resolving to the suggested symbols.
   */
  async suggestSymbols(text, top, filter) {
    this.refreshToken();
    const url = `${this.baseUrl}/suggest/${text}`;
    const params = {
      $top: top,
      $filter: filter
    };
    const response = axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, {
      params,
      headers: {
        Authorization: `Bearer ${this.accessToken}`
      }
    }).then(response => response).catch(error => {
      this.error(`getAccounts() - ${error}, ${this.accessToken}`);
      throw error;
    });
    return response;
  }
  _setSymbolDataToPositions(posArray) {
    posArray.forEach(pos => {
      this.suggestSymbols(pos?.Symbol).then(arr => {
        var detailsArray = arr.data;
        detailsArray.forEach(sym => {
          var cat = sym?.Category.toLowerCase();
          var type = pos?.AssetType.toLowerCase();
          if (cat == type && sym?.Name == pos?.Symbol) {
            jquery__WEBPACK_IMPORTED_MODULE_2___default()(`#positions_table_${pos?.Symbol}_exchange`).text(sym?.Exchange + ":");
            jquery__WEBPACK_IMPORTED_MODULE_2___default()(`#positions_table_${pos?.Symbol}_desc`).text(sym?.Description);
          }
        });
      }).catch(error => {
        console.log("[ERROR] suggestSymbols", error);
      });
    });
  }

  /**
   * Searches symbols based upon input criteria including Name, Category, and Country.
   * @param {string} criteria - Criteria represented as Key/value pairs (`&` separated).
   * @returns {Promise<SymbolSearchDefinition>} - Promise resolving to the symbol search response.
   */
  async searchSymbols(criteria) {
    this.refreshToken();
    const url = `${this.baseUrl}/search/${criteria}`;
    const response = axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`
      }
    }).then(response => response).catch(error => {
      this.error(`getAccounts() - ${error}, ${this.accessToken}`);
      throw error;
    });
    return response;
    ;
  }
}

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ESTToGMT: () => (/* binding */ ESTToGMT),
/* harmony export */   GMTtoEST: () => (/* binding */ GMTtoEST),
/* harmony export */   YTDInDays: () => (/* binding */ YTDInDays),
/* harmony export */   arrayToJsonArray: () => (/* binding */ arrayToJsonArray),
/* harmony export */   checkDing: () => (/* binding */ checkDing),
/* harmony export */   convertDatetimeToEpoch: () => (/* binding */ convertDatetimeToEpoch),
/* harmony export */   convertJSONArrayToJSON: () => (/* binding */ convertJSONArrayToJSON),
/* harmony export */   convertToEST: () => (/* binding */ convertToEST),
/* harmony export */   convertUTCToEST: () => (/* binding */ convertUTCToEST),
/* harmony export */   currentESTDatetime: () => (/* binding */ currentESTDatetime),
/* harmony export */   currentESTTime: () => (/* binding */ currentESTTime),
/* harmony export */   extractValuesById: () => (/* binding */ extractValuesById),
/* harmony export */   findObjectById: () => (/* binding */ findObjectById),
/* harmony export */   findObjectByVal: () => (/* binding */ findObjectByVal),
/* harmony export */   formatCurrency: () => (/* binding */ formatCurrency),
/* harmony export */   formatVolume: () => (/* binding */ formatVolume),
/* harmony export */   generateAlphaNumString: () => (/* binding */ generateAlphaNumString),
/* harmony export */   generateCandleData: () => (/* binding */ generateCandleData),
/* harmony export */   generateLineData: () => (/* binding */ generateLineData),
/* harmony export */   generateRandomData: () => (/* binding */ generateRandomData),
/* harmony export */   getAllFunctions: () => (/* binding */ getAllFunctions),
/* harmony export */   getCurrentTime: () => (/* binding */ getCurrentTime),
/* harmony export */   getDateNDaysAgo: () => (/* binding */ getDateNDaysAgo),
/* harmony export */   getFunctionParameters: () => (/* binding */ getFunctionParameters),
/* harmony export */   getHeightFromClass: () => (/* binding */ getHeightFromClass),
/* harmony export */   getIndexByVal: () => (/* binding */ getIndexByVal),
/* harmony export */   getRandomAlphaNum: () => (/* binding */ getRandomAlphaNum),
/* harmony export */   getRandomRGB: () => (/* binding */ getRandomRGB),
/* harmony export */   hhmmss: () => (/* binding */ hhmmss),
/* harmony export */   inArray: () => (/* binding */ inArray),
/* harmony export */   inJsonArray: () => (/* binding */ inJsonArray),
/* harmony export */   isCurTimeDivisibleByMinsWithTolerance: () => (/* binding */ isCurTimeDivisibleByMinsWithTolerance),
/* harmony export */   isFloat: () => (/* binding */ isFloat),
/* harmony export */   isStringInArray: () => (/* binding */ isStringInArray),
/* harmony export */   isSubStr: () => (/* binding */ isSubStr),
/* harmony export */   jsonArrayToArrayByKey: () => (/* binding */ jsonArrayToArrayByKey),
/* harmony export */   randNum: () => (/* binding */ randNum),
/* harmony export */   removeDupsFromJsonArr: () => (/* binding */ removeDupsFromJsonArr),
/* harmony export */   renameKey: () => (/* binding */ renameKey),
/* harmony export */   resolveHtmlPath: () => (/* binding */ resolveHtmlPath),
/* harmony export */   rgbColors: () => (/* binding */ rgbColors),
/* harmony export */   strHas: () => (/* binding */ strHas),
/* harmony export */   titleBarheight: () => (/* binding */ titleBarheight)
/* harmony export */ });
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url */ "url");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_2__);
/* eslint import/prefer-default-export: off */



function resolveHtmlPath(htmlFileName) {
  if (true) {
    const port = process.env.PORT || 3001;
    const url = new url__WEBPACK_IMPORTED_MODULE_0__.URL(`http://localhost:${port}`);
    url.pathname = htmlFileName;
    return url.href;
  }
  return `file://${path__WEBPACK_IMPORTED_MODULE_1___default().resolve(__dirname, "../renderer/", htmlFileName)}`;
}
function hhmmss() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  hours = hours.toString().padStart(2, '0');
  minutes = minutes.toString().padStart(2, '0');
  seconds = seconds.toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds} ${ampm}`;
}
function currentESTDatetime() {
  // '12/06/2023, 11:39:12 AM'
  const dt = new Date();
  return dt.toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "EST"
  });
}
const renameKey = (jsonArray, oldKey, newKey) => {
  return jsonArray.map(obj => {
    if (obj.hasOwnProperty(oldKey)) {
      obj[newKey] = obj[oldKey];
      delete obj[oldKey];
    }
    return obj;
  });
};
const getHeightFromClass = classStr => {
  const ele = document.getElementsByClassName(classStr)[0];
  if (typeof ele !== 'undefined') {
    return ele.length > 0 ? ele.offsetHeight : 30;
  } else {
    return 30;
  }
};
const titleBarheight = () => {
  return getHeightFromClass("cet-titlebar");
};
const findObjectByVal = (jsonArray, desiredValue, keyToCheck) => {
  for (let i = 0; i < jsonArray.length; i++) {
    if (jsonArray[i][keyToCheck] === desiredValue) {
      return jsonArray[i];
    }
  }
  return null; // Return null if no match is found
};
const inArray = (array, item) => {
  var x = [];
  array.forEach(i => {
    if (item.toLowerCase() === i.toLowerCase()) {
      x.push(i);
    }
  });
  return x.length > 0 ? true : false;
};
const currentESTTime = () => {
  const dt = new Date();
  return dt.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZone: 'EST'
  });
};
const getCurrentTime = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};
const formatCurrency = amount => {
  return parseFloat(amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })).toFixed(2);
};
const randNum = (start, finish) => {
  const range = finish - start + 1;
  return Math.floor(Math.random() * range) + start;
};
const generateRandomData = () => {
  const symbols = ["AAPL", "GOOGL", "AMZN", "MSFT", "TSLA", "FB", "NFLX", "NVDA", "V", "PYPL", "INTC", "AMD", "CSCO", "IBM", "ORCL", "QCOM", "GS", "JPM", "BA", "MMM", "DIS", "XOM", "CVX", "PFE", "WMT", "KO", "PEP", "HD", "CAT", "MRK", "VZ", "AAP", "BA", "C", "DOW", "GS", "IBM", "JNJ", "MCD", "NKE", "PG", "TRV", "UNH", "VZ", "WBA", "WMT", "XOM"];
  const randomData = [];
  for (let i = 0; i < symbols.length; i++) {
    const randomObject = {
      Symbol: symbols[i],
      Open: randNum(1, 2),
      PreviousClose: randNum(1, 2),
      Last: randNum(1, 5),
      Ask: randNum(1, 2),
      AskSize: randNum(1, 2),
      Bid: randNum(1, 2),
      BidSize: randNum(1, 2),
      NetChange: randNum(1, 2),
      NetChangePct: randNum(-10, 10),
      High52Week: randNum(1, 2),
      High52WeekTimestamp: "2022-01-10T00:00:00Z",
      // Replace with actual date logic if needed
      Low52Week: randNum(1, 2),
      Low52WeekTimestamp: "2022-06-20T00:00:00Z",
      // Replace with actual date logic if needed
      Volume: randNum(1, 2),
      PreviousVolume: randNum(1, 2),
      Close: randNum(1, 2),
      DailyOpenInterest: Math.floor(Math.random() * 1000),
      TradeTime: new Date().toISOString(),
      // Current timestamp
      TickSizeTier: Math.floor(Math.random() * 3),
      // Assuming 0, 1, 2 as possible values
      MarketFlags: {
        IsDelayed: false,
        IsHardToBorrow: Math.random() < 0.2,
        // 20% chance of being true
        IsBats: Math.random() < 0.3,
        // 30% chance of being true
        IsHalted: Math.random() < 0.1 // 10% chance of being true
      }
    };
    randomData.push(randomObject);
  }
  return randomData;
};
const strHas = (str, substr) => {
  return str.indexOf(substr) !== -1;
};
const isCurTimeDivisibleByMinsWithTolerance = (min, sec) => {
  const currentDate = new Date();
  const currentMinute = currentDate.getMinutes();
  const currentSecond = currentDate.getSeconds();
  if (currentSecond >= 30 && currentSecond <= 30 + sec) {
    return currentMinute % min === 0;
  }
  return false;
};
const generateAlphaNumString = n => {
  const alphanumericChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let randomString = '';
  for (let i = 0; i < n; i++) {
    const randomIndex = Math.floor(Math.random() * alphanumericChars.length);
    randomString += alphanumericChars[randomIndex];
  }
  return randomString;
};
const YTDInDays = () => {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  var beginningOfYear = new Date(currentYear, 0, 1);
  var differenceInMilliseconds = currentDate - beginningOfYear;
  var differenceInDays = Math.round(differenceInMilliseconds / (24 * 60 * 60 * 1000));
  return differenceInDays;
};
const ESTToGMT = timestamp => {
  return (timestamp + 5 * 60 * 60 * 1000) / 1000;
};
const GMTtoEST = timestamp => {
  return (timestamp - 5 * 60 * 60 * 1000) / 1000;
};
const getIndexByVal = (jsonArr, key, val) => {
  let index = -1;
  for (let i = 0; i < jsonArr.length; i++) {
    if (jsonArr[i][key] === val) {
      index = i;
      break;
    }
  }
  return index;
};
const generateLineData = (n, freq) => {
  var jsonArray = [];
  var currentTime = new Date().getTime();
  var lastVal = 0;
  for (var i = 0; i < n; i++) {
    var timestamp = Math.floor(currentTime / 1000); // Convert milliseconds to seconds
    var randomValue = Math.random() * 100; // generates a random float between 0 and 100
    lastVal += 1;
    var dataPoint = {
      time: timestamp,
      value: randomValue - lastVal
    };
    jsonArray.push(dataPoint);

    // Decrease the time by the specified frequency (in minutes)
    currentTime -= freq * 60 * 1000; // Convert minutes to milliseconds
  }
  return jsonArray.reverse(); // Reverse the array to match the provided data order
};
const generateCandleData = (n, freq, forChart) => {
  const chart = typeof forChart !== 'undefined' ? forChart : true;
  const jsonArray = [];
  var timestamp = new Date().getTime() / 1000;
  var lastClose = 0;
  const randomValue = Math.random() * 100;
  for (let i = 0; i < n; i++) {
    timestamp += 1000 * 60 * freq;
    lastClose += 1;
    const open = randomValue + lastClose;
    const high = open + .5;
    const low = open - .5;
    const close = open + .1;
    const volume = Math.random() * 1000;
    const dataPoint = {
      time: timestamp,
      close: close,
      open: open,
      high: high,
      low: low,
      volume: volume
    };
    jsonArray.push(dataPoint);
    lastClose = close;
  }
  return jsonArray;
};
const convertJSONArrayToJSON = jsonArray => {
  var jsonObject = {};
  jsonArray.forEach(function (item) {
    for (var key in item) {
      if (item.hasOwnProperty(key)) {
        if (!jsonObject[key]) {
          jsonObject[key] = [];
        }
        jsonObject[key].push(item[key]);
      }
    }
  });
  return jsonObject;
};
const inJsonArray = (jsonArray, key, value) => {
  for (let i = 0; i < jsonArray.length; i++) {
    const obj = jsonArray[i];
    if (key in obj) {
      if (obj[key] === value) {
        return true; // Value exists
      }
    }
  }
  return false; // Value does not exist
};
const jsonArrayToArrayByKey = (jsonArray, key) => {
  const extractedData = [];
  jsonArray.forEach((obj, i) => {
    extractedData.push(obj[key]);
  });
  return extractedData;
};
const arrayToJsonArray = (arr, keyName) => {
  const jsonArray = [];
  arr.forEach(function (item) {
    jsonArray.push({
      [keyName]: item
    });
  });
  return jsonArray;
};
const isSubStr = (string, substring) => {
  if (string.indexOf(substring) !== -1) {
    return true;
  } else {
    return false;
  }
};
const getAllFunctions = file => {
  const functions = [];
  for (const property in file) {
    if (typeof file[property] === 'function' && !property.startsWith('render')) {
      const functionInfo = {
        name: property,
        parameters: getFunctionParameters(file[property])
      };
      functions.push(functionInfo);
    }
  }
  return functions;
};
const getFunctionParameters = func => {
  const parameterNames = [];
  const functionString = func.toString();
  const parameterRegex = /\(([^\)]*)\)\s*=>/;
  const match = functionString.match(parameterRegex);
  if (match && match[1]) {
    const parameters = match[1].split(',');
    for (const parameter of parameters) {
      const paramNameArr = parameter.trim().replaceAll(' ', '').split('=');
      parameterNames.push({
        var: paramNameArr[0],
        val: paramNameArr[paramNameArr.length - 1]
      });
    }
  }
  return parameterNames;
};
const isFloat = n => {
  if (typeof n === 'number' && !Number.isInteger(n)) {
    return true;
  } else {
    return false;
  }
};
const isStringInArray = (targetString, array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === targetString) {
      return true;
    }
  }
  return false;
};
const rgbColors = ["rgb(255, 0, 0)",
// Red
"rgb(0, 255, 0)",
// Green
"rgb(0, 0, 255)",
// Blue
"rgb(255, 255, 0)",
// Yellow
"rgb(255, 0, 255)",
// Magenta
"rgb(0, 255, 255)",
// Cyan
"rgb(255, 128, 0)",
// Orange
"rgb(128, 0, 255)",
// Purple
"rgb(0, 255, 128)",
// Lime
"rgb(128, 255, 0)",
// Chartreuse
"rgb(255, 128, 128)",
// Light Red
"rgb(128, 255, 128)",
// Light Green
"rgb(128, 128, 255)",
// Light Blue
"rgb(255, 255, 128)",
// Light Yellow
"rgb(255, 128, 255)",
// Light Magenta
"rgb(128, 255, 255)",
// Light Cyan
"rgb(255, 165, 0)",
// Orange
"rgb(160, 32, 240)",
// Indigo
"rgb(0, 255, 192)",
// Turquoise
"rgb(255, 69, 0)" // Orange-Red
];
const getRandomRGB = () => {
  return rgbColors[Math.floor(Math.random() * rgbColors.length)];
};
const findObjectById = (jsonArray, key, value) => {
  for (let i = 0; i < jsonArray.length; i++) {
    if (jsonArray[i][key] === value) {
      return jsonArray[i];
    }
  }
  return null; // return null if no match is found
};
const removeDupsFromJsonArr = (jsonArray, key) => {
  if (jsonArray !== null || jsonArray !== undefined) {
    const uniqueValues = {};
    for (let i = 0; i < jsonArray.length; i++) {
      const item = jsonArray[i];
      const value = item[key];
      if (!uniqueValues[value]) {
        uniqueValues[value] = item;
      }
    }
    const uniqueArray = Object.values(uniqueValues);
    return uniqueArray;
  } else {
    return jsonArray;
  }
};
const getDateNDaysAgo = n => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - n);
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};
const convertDatetimeToEpoch = datetimeString => {
  // "2024-01-31T16:04:18Z"
  const datetime = new Date(datetimeString);
  const estDatetime = datetime.toLocaleString('en-US', {
    timeZone: 'America/New_York'
  });
  const epochTime = new Date(estDatetime).getTime();
  return epochTime / 1000;
};
const getRandomAlphaNum = length => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }
  return randomString;
};
const checkDing = soundPlayed => {
  const currentTime = new Date();
  if (currentTime.getHours() === 16 && currentTime.getSeconds() === 0 || currentTime.getHours() === 9 && currentTime.getMinutes() === 30 && currentTime.getSeconds() === 0) {
    if (!soundPlayed) {
      electron__WEBPACK_IMPORTED_MODULE_2__.ipcRenderer.send('playDing');
      soundPlayed = true;
    }
  } else {
    soundPlayed = false;
  }
  return soundPlayed;
};
const extractValuesById = (jsonArray, id) => {
  const valuesArray = [];
  jsonArray.forEach(obj => {
    valuesArray.push(obj?.[id]);
  });
  return valuesArray;
};
function convertToEST(dateTimeString) {
  // Parse the input date string
  const date = new Date(dateTimeString);
  return date.toLocaleString();
}
function convertUTCToEST(utcTimestamp) {
  // Create a Date object from the UTC timestamp
  const date = new Date(utcTimestamp);

  // Calculate the offset for EST (UTC-5 hours)
  const estOffset = -5;

  // Adjust the date object to EST
  const estDate = new Date(date.getTime() + estOffset * 60 * 60 * 1000);

  // Format the date in a readable format
  const formattedDate = estDate.toLocaleString("en-US", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  return formattedDate;
}
const formatVolume = number => {
  const suffixes = ["", "K", "M", "B"];
  const suffixNum = Math.floor(("" + number).length / 3);
  let shortNumber = parseFloat((suffixNum !== 0 ? number / Math.pow(1000, suffixNum) : number).toPrecision(5));
  if (shortNumber % 1 !== 0) {
    shortNumber = shortNumber.toFixed(3);
  }
  return shortNumber + suffixes[suffixNum];
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/pages/css/bootstrap-discord.min.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/css/bootstrap-discord.min.css ***!
  \***************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/pages/css/scrollbar.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/css/scrollbar.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n::-webkit-scrollbar {\r\n    width: 20px;\r\n}\r\n::-webkit-scrollbar-corner {\r\n    background: rgba(0,0,0,0);\r\n}\r\n::-webkit-scrollbar-thumb {\r\n    background-color: #5f5858;\r\n    border-radius: 6px;\r\n    border: 4px solid rgba(0,0,0,0);\r\n    background-clip: content-box;\r\n    min-width: 32px;\r\n    min-height: 32px;\r\n}\r\n::-webkit-scrollbar-track {\r\n    background-color: rgba(0,0,0,0);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/pages/css/scrollbar.css"],"names":[],"mappings":";AACA;IACI,WAAW;AACf;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,yBAAyB;IACzB,kBAAkB;IAClB,+BAA+B;IAC/B,4BAA4B;IAC5B,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,+BAA+B;AACnC","sourcesContent":["\r\n::-webkit-scrollbar {\r\n    width: 20px;\r\n}\r\n::-webkit-scrollbar-corner {\r\n    background: rgba(0,0,0,0);\r\n}\r\n::-webkit-scrollbar-thumb {\r\n    background-color: #5f5858;\r\n    border-radius: 6px;\r\n    border: 4px solid rgba(0,0,0,0);\r\n    background-clip: content-box;\r\n    min-width: 32px;\r\n    min-height: 32px;\r\n}\r\n::-webkit-scrollbar-track {\r\n    background-color: rgba(0,0,0,0);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/pages/css/bootstrap-discord.min.css":
/*!*************************************************!*\
  !*** ./src/pages/css/bootstrap-discord.min.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_bootstrap_discord_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./bootstrap-discord.min.css */ "./node_modules/css-loader/dist/cjs.js!./src/pages/css/bootstrap-discord.min.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_bootstrap_discord_min_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_bootstrap_discord_min_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/pages/css/scrollbar.css":
/*!*************************************!*\
  !*** ./src/pages/css/scrollbar.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_scrollbar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./scrollbar.css */ "./node_modules/css-loader/dist/cjs.js!./src/pages/css/scrollbar.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_scrollbar_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_scrollbar_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("electron");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("jquery");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************************!*\
  !*** ./src/pages/settings.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/core */ "./src/pages/common/core.js");
/* harmony import */ var _css_bootstrap_discord_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/bootstrap-discord.min.css */ "./src/pages/css/bootstrap-discord.min.css");


(0,_common_core__WEBPACK_IMPORTED_MODULE_0__.$)(() => {
  (0,_common_core__WEBPACK_IMPORTED_MODULE_0__.$)("#content").append("Hello there.");
});
})();

/******/ })()
;
//# sourceMappingURL=settings.js.map