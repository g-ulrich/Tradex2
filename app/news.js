/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/datatables/datatables.min.js":
/*!******************************************!*\
  !*** ./src/datatables/datatables.min.js ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * This combined file was created by the DataTables downloader builder:
 *   https://datatables.net/download
 *
 * To rebuild or modify this file with the latest versions of the included
 * software please visit:
 *   https://datatables.net/download/#dt/dt-2.0.8
 *
 * Included libraries:
 *   DataTables 2.0.8
 */

/*! DataTables 2.0.8
 * © SpryMedia Ltd - datatables.net/license
 */
!function (n) {
  "use strict";

  var a;
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (t) {
    return n(t, window, document);
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(function (V, q, _) {
  "use strict";

  function g(t) {
    var e = parseInt(t, 10);
    return !isNaN(e) && isFinite(t) ? e : null;
  }
  function o(t, e, n) {
    var a = typeof t,
      r = "string" == a;
    return "number" == a || "bigint" == a || !!y(t) || (e && r && (t = R(t, e)), n && r && (t = t.replace(P, "")), !isNaN(parseFloat(t)) && isFinite(t));
  }
  function l(t, e, n) {
    var a;
    return !!y(t) || ("string" != typeof t || !t.match(/<(input|select)/i)) && (y(a = t) || "string" == typeof a) && !!o(I(t), e, n) || null;
  }
  function v(t, e, n, a) {
    var r = [],
      o = 0,
      i = e.length;
    if (void 0 !== a) for (; o < i; o++) t[e[o]][n] && r.push(t[e[o]][n][a]);else for (; o < i; o++) t[e[o]] && r.push(t[e[o]][n]);
    return r;
  }
  function h(t, e) {
    var n,
      a = [];
    void 0 === e ? (e = 0, n = t) : (n = e, e = t);
    for (var r = e; r < n; r++) a.push(r);
    return a;
  }
  function b(t) {
    for (var e = [], n = 0, a = t.length; n < a; n++) t[n] && e.push(t[n]);
    return e;
  }
  var C,
    U,
    e,
    t,
    $ = function (t, H) {
      var W, X, B;
      return $.factory(t, H) ? $ : this instanceof $ ? V(t).DataTable(H) : (X = void 0 === (H = t), B = (W = this).length, X && (H = {}), this.api = function () {
        return new U(this);
      }, this.each(function () {
        var n = 1 < B ? Zt({}, H, !0) : H,
          a = 0,
          t = this.getAttribute("id"),
          r = !1,
          e = $.defaults,
          o = V(this);
        if ("table" != this.nodeName.toLowerCase()) Z(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);else {
          V(this).trigger("options.dt", n), nt(e), at(e.column), z(e, e, !0), z(e.column, e.column, !0), z(e, V.extend(n, o.data()), !0);
          for (var i = $.settings, a = 0, l = i.length; a < l; a++) {
            var s = i[a];
            if (s.nTable == this || s.nTHead && s.nTHead.parentNode == this || s.nTFoot && s.nTFoot.parentNode == this) {
              var E = (void 0 !== n.bRetrieve ? n : e).bRetrieve,
                k = (void 0 !== n.bDestroy ? n : e).bDestroy;
              if (X || E) return s.oInstance;
              if (k) {
                new $.Api(s).destroy();
                break;
              }
              return void Z(s, 0, "Cannot reinitialise DataTable", 3);
            }
            if (s.sTableId == this.id) {
              i.splice(a, 1);
              break;
            }
          }
          null !== t && "" !== t || (t = "DataTables_Table_" + $.ext._unique++, this.id = t);
          var u = V.extend(!0, {}, $.models.oSettings, {
              sDestroyWidth: o[0].style.width,
              sInstance: t,
              sTableId: t,
              colgroup: V("<colgroup>").prependTo(this),
              fastData: function (t, e, n) {
                return G(u, t, e, n);
              }
            }),
            t = (u.nTable = this, u.oInit = n, i.push(u), u.api = new U(u), u.oInstance = 1 === W.length ? W : o.dataTable(), nt(n), n.aLengthMenu && !n.iDisplayLength && (n.iDisplayLength = Array.isArray(n.aLengthMenu[0]) ? n.aLengthMenu[0][0] : V.isPlainObject(n.aLengthMenu[0]) ? n.aLengthMenu[0].value : n.aLengthMenu[0]), n = Zt(V.extend(!0, {}, e), n), Q(u.oFeatures, n, ["bPaginate", "bLengthChange", "bFilter", "bSort", "bSortMulti", "bInfo", "bProcessing", "bAutoWidth", "bSortClasses", "bServerSide", "bDeferRender"]), Q(u, n, ["ajax", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "iStateDuration", "bSortCellsTop", "iTabIndex", "sDom", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", "caption", "layout", ["iCookieDuration", "iStateDuration"], ["oSearch", "oPreviousSearch"], ["aoSearchCols", "aoPreSearchCols"], ["iDisplayLength", "_iDisplayLength"]]), Q(u.oScroll, n, [["sScrollX", "sX"], ["sScrollXInner", "sXInner"], ["sScrollY", "sY"], ["bScrollCollapse", "bCollapse"]]), Q(u.oLanguage, n, "fnInfoCallback"), K(u, "aoDrawCallback", n.fnDrawCallback), K(u, "aoStateSaveParams", n.fnStateSaveParams), K(u, "aoStateLoadParams", n.fnStateLoadParams), K(u, "aoStateLoaded", n.fnStateLoaded), K(u, "aoRowCallback", n.fnRowCallback), K(u, "aoRowCreatedCallback", n.fnCreatedRow), K(u, "aoHeaderCallback", n.fnHeaderCallback), K(u, "aoFooterCallback", n.fnFooterCallback), K(u, "aoInitComplete", n.fnInitComplete), K(u, "aoPreDrawCallback", n.fnPreDrawCallback), u.rowIdFn = J(n.rowId), u),
            c = ($.__browser || (P = {}, $.__browser = P, j = V("<div/>").css({
              position: "fixed",
              top: 0,
              left: -1 * q.pageXOffset,
              height: 1,
              width: 1,
              overflow: "hidden"
            }).append(V("<div/>").css({
              position: "absolute",
              top: 1,
              left: 1,
              width: 100,
              overflow: "scroll"
            }).append(V("<div/>").css({
              width: "100%",
              height: 10
            }))).appendTo("body"), p = j.children(), O = p.children(), P.barWidth = p[0].offsetWidth - p[0].clientWidth, P.bScrollbarLeft = 1 !== Math.round(O.offset().left), j.remove()), V.extend(t.oBrowser, $.__browser), t.oScroll.iBarWidth = $.__browser.barWidth, u.oClasses),
            d = (V.extend(c, $.ext.classes, n.oClasses), o.addClass(c.table), u.oFeatures.bPaginate || (n.iDisplayStart = 0), void 0 === u.iInitDisplayStart && (u.iInitDisplayStart = n.iDisplayStart, u._iDisplayStart = n.iDisplayStart), u.oLanguage),
            f = (V.extend(!0, d, n.oLanguage), d.sUrl ? (V.ajax({
              dataType: "json",
              url: d.sUrl,
              success: function (t) {
                z(e.oLanguage, t), V.extend(!0, d, t, u.oInit.oLanguage), tt(u, null, "i18n", [u], !0), Et(u);
              },
              error: function () {
                Z(u, 0, "i18n file loading error", 21), Et(u);
              }
            }), r = !0) : tt(u, null, "i18n", [u]), []),
            h = this.getElementsByTagName("thead"),
            p = It(u, h[0]);
          if (n.aoColumns) f = n.aoColumns;else if (p.length) for (l = p[a = 0].length; a < l; a++) f.push(null);
          for (a = 0, l = f.length; a < l; a++) rt(u);
          var g,
            m,
            v,
            b,
            y,
            D,
            x,
            S = u,
            T = n.aoColumnDefs,
            w = f,
            M = p,
            _ = function (t, e) {
              ot(u, t, e);
            },
            C = S.aoColumns;
          if (w) for (g = 0, m = w.length; g < m; g++) w[g] && w[g].name && (C[g].sName = w[g].name);
          if (T) for (g = T.length - 1; 0 <= g; g--) {
            var I = void 0 !== (x = T[g]).target ? x.target : void 0 !== x.targets ? x.targets : x.aTargets;
            for (Array.isArray(I) || (I = [I]), v = 0, b = I.length; v < b; v++) {
              var A = I[v];
              if ("number" == typeof A && 0 <= A) {
                for (; C.length <= A;) rt(S);
                _(A, x);
              } else if ("number" == typeof A && A < 0) _(C.length + A, x);else if ("string" == typeof A) for (y = 0, D = C.length; y < D; y++) "_all" === A ? _(y, x) : -1 !== A.indexOf(":name") ? C[y].sName === A.replace(":name", "") && _(y, x) : M.forEach(function (t) {
                t[y] && (t = V(t[y].cell), A.match(/^[a-z][\w-]*$/i) && (A = "." + A), t.is(A)) && _(y, x);
              });
            }
          }
          if (w) for (g = 0, m = w.length; g < m; g++) _(g, w[g]);
          var L,
            F,
            N,
            j,
            P = o.children("tbody").find("tr").eq(0),
            R = (P.length && (L = function (t, e) {
              return null !== t.getAttribute("data-" + e) ? e : null;
            }, V(P[0]).children("th, td").each(function (t, e) {
              var n,
                a = u.aoColumns[t];
              a || Z(u, 0, "Incorrect column count", 18), a.mData === t && (n = L(e, "sort") || L(e, "order"), e = L(e, "filter") || L(e, "search"), null === n && null === e || (a.mData = {
                _: t + ".display",
                sort: null !== n ? t + ".@data-" + n : void 0,
                type: null !== n ? t + ".@data-" + n : void 0,
                filter: null !== e ? t + ".@data-" + e : void 0
              }, a._isArrayHost = !0, ot(u, t)));
            })), u.oFeatures),
            O = function () {
              if (void 0 === n.aaSorting) {
                var t = u.aaSorting;
                for (a = 0, l = t.length; a < l; a++) t[a][1] = u.aoColumns[a].asSorting[0];
              }
              Yt(u), K(u, "aoDrawCallback", function () {
                (u.bSorted || "ssp" === et(u) || R.bDeferRender) && Yt(u);
              });
              var e = o.children("caption"),
                e = (u.caption && (e = 0 === e.length ? V("<caption/>").appendTo(o) : e).html(u.caption), e.length && (e[0]._captionSide = e.css("caption-side"), u.captionNode = e[0]), 0 === h.length && (h = V("<thead/>").appendTo(o)), u.nTHead = h[0], V("tr", h).addClass(c.thead.row), o.children("tbody")),
                e = (0 === e.length && (e = V("<tbody/>").insertAfter(h)), u.nTBody = e[0], o.children("tfoot"));
              if (0 === e.length && (e = V("<tfoot/>").appendTo(o)), u.nTFoot = e[0], V("tr", e).addClass(c.tfoot.row), n.aaData) for (a = 0; a < n.aaData.length; a++) Y(u, n.aaData[a]);else "dom" == et(u) && ut(u, V(u.nTBody).children("tr"));
              u.aiDisplay = u.aiDisplayMaster.slice(), !(u.bInitialised = !0) === r && Et(u);
            };
          K(u, "aoDrawCallback", Gt), n.bStateSave ? (R.bStateSave = !0, N = O, (F = u).oFeatures.bStateSave ? void 0 !== (j = F.fnStateLoadCallback.call(F.oInstance, F, function (t) {
            Jt(F, t, N);
          })) && Jt(F, j, N) : N()) : O();
        }
      }), W = null, this);
    },
    c = ($.ext = C = {
      buttons: {},
      classes: {},
      builder: "dt/dt-2.0.8",
      errMode: "alert",
      feature: [],
      features: {},
      search: [],
      selector: {
        cell: [],
        column: [],
        row: []
      },
      legacy: {
        ajax: null
      },
      pager: {},
      renderer: {
        pageButton: {},
        header: {}
      },
      order: {},
      type: {
        className: {},
        detect: [],
        render: {},
        search: {},
        order: {}
      },
      _unique: 0,
      fnVersionCheck: $.fnVersionCheck,
      iApiIndex: 0,
      sVersion: $.version
    }, V.extend(C, {
      afnFiltering: C.search,
      aTypes: C.type.detect,
      ofnSearch: C.type.search,
      oSort: C.type.order,
      afnSortData: C.order,
      aoFeatures: C.feature,
      oStdClasses: C.classes,
      oPagination: C.pager
    }), V.extend($.ext.classes, {
      container: "dt-container",
      empty: {
        row: "dt-empty"
      },
      info: {
        container: "dt-info"
      },
      length: {
        container: "dt-length",
        select: "dt-input"
      },
      order: {
        canAsc: "dt-orderable-asc",
        canDesc: "dt-orderable-desc",
        isAsc: "dt-ordering-asc",
        isDesc: "dt-ordering-desc",
        none: "dt-orderable-none",
        position: "sorting_"
      },
      processing: {
        container: "dt-processing"
      },
      scrolling: {
        body: "dt-scroll-body",
        container: "dt-scroll",
        footer: {
          self: "dt-scroll-foot",
          inner: "dt-scroll-footInner"
        },
        header: {
          self: "dt-scroll-head",
          inner: "dt-scroll-headInner"
        }
      },
      search: {
        container: "dt-search",
        input: "dt-input"
      },
      table: "dataTable",
      tbody: {
        cell: "",
        row: ""
      },
      thead: {
        cell: "",
        row: ""
      },
      tfoot: {
        cell: "",
        row: ""
      },
      paging: {
        active: "current",
        button: "dt-paging-button",
        container: "dt-paging",
        disabled: "disabled"
      }
    }), {}),
    d = /[\r\n\u2028]/g,
    L = /<([^>]*>)/g,
    F = Math.pow(2, 28),
    N = /^\d{2,4}[./-]\d{1,2}[./-]\d{1,2}([T ]{1}\d{1,2}[:.]\d{2}([.:]\d{2})?)?$/,
    j = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^", "-"].join("|\\") + ")", "g"),
    P = /['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,
    y = function (t) {
      return !t || !0 === t || "-" === t;
    },
    R = function (t, e) {
      return c[e] || (c[e] = new RegExp(Pt(e), "g")), "string" == typeof t && "." !== e ? t.replace(/\./g, "").replace(c[e], ".") : t;
    },
    f = function (t, e, n) {
      var a = [],
        r = 0,
        o = t.length;
      if (void 0 !== n) for (; r < o; r++) t[r] && t[r][e] && a.push(t[r][e][n]);else for (; r < o; r++) t[r] && a.push(t[r][e]);
      return a;
    },
    I = function (t) {
      if (t.length > F) throw new Error("Exceeded max str len");
      var e;
      for (t = t.replace(L, ""); (t = (e = t).replace(/<script/i, "")) !== e;);
      return e;
    },
    u = function (t) {
      return "string" == typeof (t = Array.isArray(t) ? t.join(",") : t) ? t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : t;
    },
    O = function (t, e) {
      var n;
      return "string" != typeof t ? t : (n = t.normalize("NFD")).length !== t.length ? (!0 === e ? t + " " : "") + n.replace(/[\u0300-\u036f]/g, "") : n;
    },
    x = function (t) {
      if (Array.from && Set) return Array.from(new Set(t));
      if (function (t) {
        if (!(t.length < 2)) for (var e = t.slice().sort(), n = e[0], a = 1, r = e.length; a < r; a++) {
          if (e[a] === n) return !1;
          n = e[a];
        }
        return !0;
      }(t)) return t.slice();
      var e,
        n,
        a,
        r = [],
        o = t.length,
        i = 0;
      t: for (n = 0; n < o; n++) {
        for (e = t[n], a = 0; a < i; a++) if (r[a] === e) continue t;
        r.push(e), i++;
      }
      return r;
    },
    E = function (t, e) {
      if (Array.isArray(e)) for (var n = 0; n < e.length; n++) E(t, e[n]);else t.push(e);
      return t;
    };
  function D(e, t) {
    t && t.split(" ").forEach(function (t) {
      t && e.classList.add(t);
    });
  }
  function k(e) {
    var n,
      a,
      r = {};
    V.each(e, function (t) {
      (n = t.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(n[1] + " ") && (a = t.replace(n[0], n[2].toLowerCase()), r[a] = t, "o" === n[1]) && k(e[t]);
    }), e._hungarianMap = r;
  }
  function z(e, n, a) {
    var r;
    e._hungarianMap || k(e), V.each(n, function (t) {
      void 0 === (r = e._hungarianMap[t]) || !a && void 0 !== n[r] || ("o" === r.charAt(0) ? (n[r] || (n[r] = {}), V.extend(!0, n[r], n[t]), z(e[r], n[r], a)) : n[r] = n[t]);
    });
  }
  $.util = {
    diacritics: function (t, e) {
      if ("function" != typeof t) return O(t, e);
      O = t;
    },
    debounce: function (n, a) {
      var r;
      return function () {
        var t = this,
          e = arguments;
        clearTimeout(r), r = setTimeout(function () {
          n.apply(t, e);
        }, a || 250);
      };
    },
    throttle: function (a, t) {
      var r,
        o,
        i = void 0 !== t ? t : 200;
      return function () {
        var t = this,
          e = +new Date(),
          n = arguments;
        r && e < r + i ? (clearTimeout(o), o = setTimeout(function () {
          r = void 0, a.apply(t, n);
        }, i)) : (r = e, a.apply(t, n));
      };
    },
    escapeRegex: function (t) {
      return t.replace(j, "\\$1");
    },
    set: function (a) {
      var f;
      return V.isPlainObject(a) ? $.util.set(a._) : null === a ? function () {} : "function" == typeof a ? function (t, e, n) {
        a(t, "set", e, n);
      } : "string" != typeof a || -1 === a.indexOf(".") && -1 === a.indexOf("[") && -1 === a.indexOf("(") ? function (t, e) {
        t[a] = e;
      } : (f = function (t, e, n) {
        for (var a, r, o, i, l = ft(n), n = l[l.length - 1], s = 0, u = l.length - 1; s < u; s++) {
          if ("__proto__" === l[s] || "constructor" === l[s]) throw new Error("Cannot set prototype values");
          if (a = l[s].match(dt), r = l[s].match(p), a) {
            if (l[s] = l[s].replace(dt, ""), t[l[s]] = [], (a = l.slice()).splice(0, s + 1), i = a.join("."), Array.isArray(e)) for (var c = 0, d = e.length; c < d; c++) f(o = {}, e[c], i), t[l[s]].push(o);else t[l[s]] = e;
            return;
          }
          r && (l[s] = l[s].replace(p, ""), t = t[l[s]](e)), null !== t[l[s]] && void 0 !== t[l[s]] || (t[l[s]] = {}), t = t[l[s]];
        }
        n.match(p) ? t[n.replace(p, "")](e) : t[n.replace(dt, "")] = e;
      }, function (t, e) {
        return f(t, e, a);
      });
    },
    get: function (r) {
      var o, f;
      return V.isPlainObject(r) ? (o = {}, V.each(r, function (t, e) {
        e && (o[t] = $.util.get(e));
      }), function (t, e, n, a) {
        var r = o[e] || o._;
        return void 0 !== r ? r(t, e, n, a) : t;
      }) : null === r ? function (t) {
        return t;
      } : "function" == typeof r ? function (t, e, n, a) {
        return r(t, e, n, a);
      } : "string" != typeof r || -1 === r.indexOf(".") && -1 === r.indexOf("[") && -1 === r.indexOf("(") ? function (t) {
        return t[r];
      } : (f = function (t, e, n) {
        var a, r, o;
        if ("" !== n) for (var i = ft(n), l = 0, s = i.length; l < s; l++) {
          if (d = i[l].match(dt), a = i[l].match(p), d) {
            if (i[l] = i[l].replace(dt, ""), "" !== i[l] && (t = t[i[l]]), r = [], i.splice(0, l + 1), o = i.join("."), Array.isArray(t)) for (var u = 0, c = t.length; u < c; u++) r.push(f(t[u], e, o));
            var d = d[0].substring(1, d[0].length - 1);
            t = "" === d ? r : r.join(d);
            break;
          }
          if (a) i[l] = i[l].replace(p, ""), t = t[i[l]]();else {
            if (null === t || null === t[i[l]]) return null;
            if (void 0 === t || void 0 === t[i[l]]) return;
            t = t[i[l]];
          }
        }
        return t;
      }, function (t, e) {
        return f(t, e, r);
      });
    },
    stripHtml: function (t) {
      var e = typeof t;
      if ("function" != e) return "string" == e ? I(t) : t;
      I = t;
    },
    escapeHtml: function (t) {
      var e = typeof t;
      if ("function" != e) return "string" == e || Array.isArray(t) ? u(t) : t;
      u = t;
    },
    unique: x
  };
  var r = function (t, e, n) {
    void 0 !== t[e] && (t[n] = t[e]);
  };
  function nt(t) {
    r(t, "ordering", "bSort"), r(t, "orderMulti", "bSortMulti"), r(t, "orderClasses", "bSortClasses"), r(t, "orderCellsTop", "bSortCellsTop"), r(t, "order", "aaSorting"), r(t, "orderFixed", "aaSortingFixed"), r(t, "paging", "bPaginate"), r(t, "pagingType", "sPaginationType"), r(t, "pageLength", "iDisplayLength"), r(t, "searching", "bFilter"), "boolean" == typeof t.sScrollX && (t.sScrollX = t.sScrollX ? "100%" : ""), "boolean" == typeof t.scrollX && (t.scrollX = t.scrollX ? "100%" : "");
    var e = t.aoSearchCols;
    if (e) for (var n = 0, a = e.length; n < a; n++) e[n] && z($.models.oSearch, e[n]);
    t.serverSide && !t.searchDelay && (t.searchDelay = 400);
  }
  function at(t) {
    r(t, "orderable", "bSortable"), r(t, "orderData", "aDataSort"), r(t, "orderSequence", "asSorting"), r(t, "orderDataType", "sortDataType");
    var e = t.aDataSort;
    "number" != typeof e || Array.isArray(e) || (t.aDataSort = [e]);
  }
  function rt(t) {
    var e = $.defaults.column,
      n = t.aoColumns.length,
      e = V.extend({}, $.models.oColumn, e, {
        aDataSort: e.aDataSort || [n],
        mData: e.mData || n,
        idx: n,
        searchFixed: {},
        colEl: V("<col>").attr("data-dt-column", n)
      }),
      e = (t.aoColumns.push(e), t.aoPreSearchCols);
    e[n] = V.extend({}, $.models.oSearch, e[n]);
  }
  function ot(t, e, n) {
    function a(t) {
      return "string" == typeof t && -1 !== t.indexOf("@");
    }
    var r = t.aoColumns[e],
      o = (null != n && (at(n), z($.defaults.column, n, !0), void 0 === n.mDataProp || n.mData || (n.mData = n.mDataProp), n.sType && (r._sManualType = n.sType), n.className && !n.sClass && (n.sClass = n.className), e = r.sClass, V.extend(r, n), Q(r, n, "sWidth", "sWidthOrig"), e !== r.sClass && (r.sClass = e + " " + r.sClass), void 0 !== n.iDataSort && (r.aDataSort = [n.iDataSort]), Q(r, n, "aDataSort")), r.mData),
      i = J(o);
    r.mRender && Array.isArray(r.mRender) && (n = (e = r.mRender.slice()).shift(), r.mRender = $.render[n].apply(q, e)), r._render = r.mRender ? J(r.mRender) : null;
    r._bAttrSrc = V.isPlainObject(o) && (a(o.sort) || a(o.type) || a(o.filter)), r._setter = null, r.fnGetData = function (t, e, n) {
      var a = i(t, e, void 0, n);
      return r._render && e ? r._render(a, e, t, n) : a;
    }, r.fnSetData = function (t, e, n) {
      return m(o)(t, e, n);
    }, "number" == typeof o || r._isArrayHost || (t._rowReadObject = !0), t.oFeatures.bSort || (r.bSortable = !1);
  }
  function M(t) {
    var e = t;
    if (e.oFeatures.bAutoWidth) {
      var n,
        a,
        r = e.nTable,
        o = e.aoColumns,
        i = e.oScroll,
        l = i.sY,
        s = i.sX,
        i = i.sXInner,
        u = X(e, "bVisible"),
        c = r.getAttribute("width"),
        d = r.parentNode,
        f = r.style.width,
        f = (f && -1 !== f.indexOf("%") && (c = f), tt(e, null, "column-calc", {
          visible: u
        }, !1), V(r.cloneNode()).css("visibility", "hidden").removeAttr("id")),
        h = (f.append("<tbody>"), V("<tr/>").appendTo(f.find("tbody")));
      for (f.append(V(e.nTHead).clone()).append(V(e.nTFoot).clone()), f.find("tfoot th, tfoot td").css("width", ""), f.find("thead th, thead td").each(function () {
        var t = lt(e, this, !0, !1);
        t ? (this.style.width = t, s && V(this).append(V("<div/>").css({
          width: t,
          margin: 0,
          padding: 0,
          border: 0,
          height: 1
        }))) : this.style.width = "";
      }), n = 0; n < u.length; n++) {
        p = u[n], a = o[p];
        var p = function (t, e) {
            var n = t.aoColumns[e];
            if (!n.maxLenString) {
              for (var a, r = "", o = -1, i = 0, l = t.aiDisplayMaster.length; i < l; i++) {
                var s = t.aiDisplayMaster[i],
                  s = vt(t, s)[e],
                  s = s && "object" == typeof s && s.nodeType ? s.innerHTML : s + "";
                s = s.replace(/id=".*?"/g, "").replace(/name=".*?"/g, ""), (a = I(s).replace(/&nbsp;/g, " ")).length > o && (r = s, o = a.length);
              }
              n.maxLenString = r;
            }
            return n.maxLenString;
          }(e, p),
          g = C.type.className[a.sType],
          m = p + a.sContentPadding,
          p = -1 === p.indexOf("<") ? _.createTextNode(m) : m;
        V("<td/>").addClass(g).addClass(a.sClass).append(p).appendTo(h);
      }
      V("[name]", f).removeAttr("name");
      var v = V("<div/>").css(s || l ? {
          position: "absolute",
          top: 0,
          left: 0,
          height: 1,
          right: 0,
          overflow: "hidden"
        } : {}).append(f).appendTo(d),
        b = (s && i ? f.width(i) : s ? (f.css("width", "auto"), f.removeAttr("width"), f.width() < d.clientWidth && c && f.width(d.clientWidth)) : l ? f.width(d.clientWidth) : c && f.width(c), 0),
        y = f.find("tbody tr").eq(0).children();
      for (n = 0; n < u.length; n++) {
        var D = y[n].getBoundingClientRect().width;
        b += D, o[u[n]].sWidth = A(D);
      }
      r.style.width = A(b), v.remove(), c && (r.style.width = A(c)), !c && !s || e._reszEvt || (V(q).on("resize.DT-" + e.sInstance, $.util.throttle(function () {
        e.bDestroying || M(e);
      })), e._reszEvt = !0);
    }
    for (var x = t, S = x.aoColumns, T = 0; T < S.length; T++) {
      var w = lt(x, [T], !1, !1);
      S[T].colEl.css("width", w);
    }
    i = t.oScroll;
    "" === i.sY && "" === i.sX || Xt(t), tt(t, null, "column-sizing", [t]);
  }
  function H(t, e) {
    t = X(t, "bVisible");
    return "number" == typeof t[e] ? t[e] : null;
  }
  function T(t, e) {
    t = X(t, "bVisible").indexOf(e);
    return -1 !== t ? t : null;
  }
  function W(t) {
    var e = t.aoHeader,
      n = t.aoColumns,
      a = 0;
    if (e.length) for (var r = 0, o = e[0].length; r < o; r++) n[r].bVisible && "none" !== V(e[0][r].cell).css("display") && a++;
    return a;
  }
  function X(t, n) {
    var a = [];
    return t.aoColumns.map(function (t, e) {
      t[n] && a.push(e);
    }), a;
  }
  function B(t) {
    for (var e, n, a, r, o, i, l, s = t.aoColumns, u = t.aoData, c = $.ext.type.detect, d = 0, f = s.length; d < f; d++) {
      if (l = [], !(o = s[d]).sType && o._sManualType) o.sType = o._sManualType;else if (!o.sType) {
        for (e = 0, n = c.length; e < n; e++) {
          for (a = 0, r = u.length; a < r; a++) if (u[a]) {
            if (void 0 === l[a] && (l[a] = G(t, a, d, "type")), !(i = c[e](l[a], t)) && e !== c.length - 2) break;
            if ("html" === i && !y(l[a])) break;
          }
          if (i) {
            o.sType = i;
            break;
          }
        }
        o.sType || (o.sType = "string");
      }
      var h = C.type.className[o.sType],
        h = (h && (it(t.aoHeader, d, h), it(t.aoFooter, d, h)), C.type.render[o.sType]);
      if (h && !o._render) {
        o._render = $.util.get(h), p = b = v = m = g = void 0;
        for (var p, g = t, m = d, v = g.aoData, b = 0; b < v.length; b++) v[b].nTr && (p = G(g, b, m, "display"), v[b].displayData[m] = p, ct(v[b].anCells[m], p));
      }
    }
  }
  function it(t, e, n) {
    t.forEach(function (t) {
      t[e] && t[e].unique && D(t[e].cell, n);
    });
  }
  function lt(t, e, n, a) {
    Array.isArray(e) || (e = st(e));
    for (var r, o = 0, i = t.aoColumns, l = 0, s = e.length; l < s; l++) {
      var u = i[e[l]],
        c = n ? u.sWidthOrig : u.sWidth;
      if (a || !1 !== u.bVisible) {
        if (null == c) return null;
        "number" == typeof c ? (r = "px", o += c) : (u = c.match(/([\d\.]+)([^\d]*)/)) && (o += +u[1], r = 3 === u.length ? u[2] : "px");
      }
    }
    return o + r;
  }
  function st(t) {
    t = V(t).closest("[data-dt-column]").attr("data-dt-column");
    return t ? t.split(",").map(function (t) {
      return +t;
    }) : [];
  }
  function Y(t, e, n, a) {
    for (var r = t.aoData.length, o = V.extend(!0, {}, $.models.oRow, {
        src: n ? "dom" : "data",
        idx: r
      }), i = (o._aData = e, t.aoData.push(o), t.aoColumns), l = 0, s = i.length; l < s; l++) i[l].sType = null;
    t.aiDisplayMaster.push(r);
    e = t.rowIdFn(e);
    return void 0 !== e && (t.aIds[e] = o), !n && t.oFeatures.bDeferRender || bt(t, r, n, a), r;
  }
  function ut(n, t) {
    var a;
    return (t = t instanceof V ? t : V(t)).map(function (t, e) {
      return a = mt(n, e), Y(n, a.data, e, a.cells);
    });
  }
  function G(t, e, n, a) {
    "search" === a ? a = "filter" : "order" === a && (a = "sort");
    var r = t.aoData[e];
    if (r) {
      var o = t.iDraw,
        i = t.aoColumns[n],
        r = r._aData,
        l = i.sDefaultContent,
        s = i.fnGetData(r, a, {
          settings: t,
          row: e,
          col: n
        });
      if (void 0 === (s = "display" !== a && s && "object" == typeof s && s.nodeName ? s.innerHTML : s)) return t.iDrawError != o && null === l && (Z(t, 0, "Requested unknown parameter " + ("function" == typeof i.mData ? "{function}" : "'" + i.mData + "'") + " for row " + e + ", column " + n, 4), t.iDrawError = o), l;
      if (s !== r && null !== s || null === l || void 0 === a) {
        if ("function" == typeof s) return s.call(r);
      } else s = l;
      return null === s && "display" === a ? "" : s = "filter" === a && (e = $.ext.type.search)[i.sType] ? e[i.sType](s) : s;
    }
  }
  function ct(t, e) {
    e && "object" == typeof e && e.nodeName ? V(t).empty().append(e) : t.innerHTML = e;
  }
  var dt = /\[.*?\]$/,
    p = /\(\)$/;
  function ft(t) {
    return (t.match(/(\\.|[^.])+/g) || [""]).map(function (t) {
      return t.replace(/\\\./g, ".");
    });
  }
  var J = $.util.get,
    m = $.util.set;
  function ht(t) {
    return f(t.aoData, "_aData");
  }
  function pt(t) {
    t.aoData.length = 0, t.aiDisplayMaster.length = 0, t.aiDisplay.length = 0, t.aIds = {};
  }
  function gt(t, e, n, a) {
    var r,
      o,
      i = t.aoData[e];
    if (i._aSortData = null, i._aFilterData = null, i.displayData = null, "dom" !== n && (n && "auto" !== n || "dom" !== i.src)) {
      var l = i.anCells,
        s = vt(t, e);
      if (l) if (void 0 !== a) ct(l[a], s[a]);else for (r = 0, o = l.length; r < o; r++) ct(l[r], s[r]);
    } else i._aData = mt(t, i, a, void 0 === a ? void 0 : i._aData).data;
    var u = t.aoColumns;
    if (void 0 !== a) u[a].sType = null, u[a].maxLenString = null;else {
      for (r = 0, o = u.length; r < o; r++) u[r].sType = null, u[r].maxLenString = null;
      yt(t, i);
    }
  }
  function mt(t, e, n, a) {
    function r(t, e) {
      var n;
      "string" == typeof t && -1 !== (n = t.indexOf("@")) && (n = t.substring(n + 1), m(t)(a, e.getAttribute(n)));
    }
    function o(t) {
      void 0 !== n && n !== d || (l = f[d], s = t.innerHTML.trim(), l && l._bAttrSrc ? (m(l.mData._)(a, s), r(l.mData.sort, t), r(l.mData.type, t), r(l.mData.filter, t)) : h ? (l._setter || (l._setter = m(l.mData)), l._setter(a, s)) : a[d] = s), d++;
    }
    var i,
      l,
      s,
      u = [],
      c = e.firstChild,
      d = 0,
      f = t.aoColumns,
      h = t._rowReadObject;
    a = void 0 !== a ? a : h ? {} : [];
    if (c) for (; c;) "TD" != (i = c.nodeName.toUpperCase()) && "TH" != i || (o(c), u.push(c)), c = c.nextSibling;else for (var p = 0, g = (u = e.anCells).length; p < g; p++) o(u[p]);
    var e = e.firstChild ? e : e.nTr;
    return e && (e = e.getAttribute("id")) && m(t.rowId)(a, e), {
      data: a,
      cells: u
    };
  }
  function vt(t, e) {
    var n = t.aoData[e],
      a = t.aoColumns;
    if (!n.displayData) {
      n.displayData = [];
      for (var r = 0, o = a.length; r < o; r++) n.displayData.push(G(t, e, r, "display"));
    }
    return n.displayData;
  }
  function bt(t, e, n, a) {
    var r,
      o,
      i,
      l,
      s,
      u,
      c = t.aoData[e],
      d = c._aData,
      f = [],
      h = t.oClasses.tbody.row;
    if (null === c.nTr) {
      for (r = n || _.createElement("tr"), c.nTr = r, c.anCells = f, D(r, h), r._DT_RowIndex = e, yt(t, c), l = 0, s = t.aoColumns.length; l < s; l++) {
        i = t.aoColumns[l], (o = (u = !n || !a[l]) ? _.createElement(i.sCellType) : a[l]) || Z(t, 0, "Incorrect column count", 18), o._DT_CellIndex = {
          row: e,
          column: l
        }, f.push(o);
        var p = vt(t, e);
        !u && (!i.mRender && i.mData === l || V.isPlainObject(i.mData) && i.mData._ === l + ".display") || ct(o, p[l]), i.bVisible && u ? r.appendChild(o) : i.bVisible || u || o.parentNode.removeChild(o), i.fnCreatedCell && i.fnCreatedCell.call(t.oInstance, o, G(t, e, l), d, e, l);
      }
      tt(t, "aoRowCreatedCallback", "row-created", [r, d, e, f]);
    } else D(c.nTr, h);
  }
  function yt(t, e) {
    var n = e.nTr,
      a = e._aData;
    n && ((t = t.rowIdFn(a)) && (n.id = t), a.DT_RowClass && (t = a.DT_RowClass.split(" "), e.__rowc = e.__rowc ? x(e.__rowc.concat(t)) : t, V(n).removeClass(e.__rowc.join(" ")).addClass(a.DT_RowClass)), a.DT_RowAttr && V(n).attr(a.DT_RowAttr), a.DT_RowData) && V(n).data(a.DT_RowData);
  }
  function Dt(t, e) {
    var n,
      a = t.oClasses,
      r = t.aoColumns,
      o = "header" === e ? t.nTHead : t.nTFoot,
      i = "header" === e ? "sTitle" : e;
    if (o) {
      if (("header" === e || f(t.aoColumns, i).join("")) && 1 === (n = (n = V("tr", o)).length ? n : V("<tr/>").appendTo(o)).length) for (var l = V("td, th", n).length, s = r.length; l < s; l++) V("<th/>").html(r[l][i] || "").appendTo(n);
      var u = It(t, o, !0);
      "header" === e ? t.aoHeader = u : t.aoFooter = u, V(o).children("tr").attr("role", "row"), V(o).children("tr").children("th, td").each(function () {
        te(t, e)(t, V(this), a);
      });
    }
  }
  function xt(t, e, n) {
    var a,
      r,
      o,
      i,
      l,
      s = [],
      u = [],
      c = t.aoColumns,
      t = c.length;
    if (e) {
      for (n = n || h(t).filter(function (t) {
        return c[t].bVisible;
      }), a = 0; a < e.length; a++) s[a] = e[a].slice().filter(function (t, e) {
        return n.includes(e);
      }), u.push([]);
      for (a = 0; a < s.length; a++) for (r = 0; r < s[a].length; r++) if (l = i = 1, void 0 === u[a][r]) {
        for (o = s[a][r].cell; void 0 !== s[a + i] && s[a][r].cell == s[a + i][r].cell;) u[a + i][r] = null, i++;
        for (; void 0 !== s[a][r + l] && s[a][r].cell == s[a][r + l].cell;) {
          for (var d = 0; d < i; d++) u[a + d][r + l] = null;
          l++;
        }
        var f = V("span.dt-column-title", o);
        u[a][r] = {
          cell: o,
          colspan: l,
          rowspan: i,
          title: (f.length ? f : V(o)).html()
        };
      }
      return u;
    }
  }
  function St(t, e) {
    for (var n, a, r = xt(t, e), o = 0; o < e.length; o++) {
      if (n = e[o].row) for (; a = n.firstChild;) n.removeChild(a);
      for (var i = 0; i < r[o].length; i++) {
        var l = r[o][i];
        l && V(l.cell).appendTo(n).attr("rowspan", l.rowspan).attr("colspan", l.colspan);
      }
    }
  }
  function S(t, e) {
    if (r = "ssp" == et(s = t), void 0 !== (i = s.iInitDisplayStart) && -1 !== i && (s._iDisplayStart = !r && i >= s.fnRecordsDisplay() ? 0 : i, s.iInitDisplayStart = -1), -1 !== tt(t, "aoPreDrawCallback", "preDraw", [t]).indexOf(!1)) w(t, !1);else {
      var l,
        n = [],
        a = 0,
        r = "ssp" == et(t),
        o = t.aiDisplay,
        i = t._iDisplayStart,
        s = t.fnDisplayEnd(),
        u = t.aoColumns,
        c = V(t.nTBody);
      if (t.bDrawing = !0, r) {
        if (!t.bDestroying && !e) return 0 === t.iDraw && c.empty().append(Tt(t)), (l = t).iDraw++, w(l, !0), void At(l, function (e) {
          function n(t, e) {
            return "function" == typeof a[t][e] ? "function" : a[t][e];
          }
          var a = e.aoColumns,
            t = e.oFeatures,
            r = e.oPreviousSearch,
            o = e.aoPreSearchCols;
          return {
            draw: e.iDraw,
            columns: a.map(function (e, t) {
              return {
                data: n(t, "mData"),
                name: e.sName,
                searchable: e.bSearchable,
                orderable: e.bSortable,
                search: {
                  value: o[t].search,
                  regex: o[t].regex,
                  fixed: Object.keys(e.searchFixed).map(function (t) {
                    return {
                      name: t,
                      term: e.searchFixed[t].toString()
                    };
                  })
                }
              };
            }),
            order: $t(e).map(function (t) {
              return {
                column: t.col,
                dir: t.dir,
                name: n(t.col, "sName")
              };
            }),
            start: e._iDisplayStart,
            length: t.bPaginate ? e._iDisplayLength : -1,
            search: {
              value: r.search,
              regex: r.regex,
              fixed: Object.keys(e.searchFixed).map(function (t) {
                return {
                  name: t,
                  term: e.searchFixed[t].toString()
                };
              })
            }
          };
        }(l), function (t) {
          var e = l,
            n = Lt(e, t = t),
            a = Ft(e, "draw", t),
            r = Ft(e, "recordsTotal", t),
            t = Ft(e, "recordsFiltered", t);
          if (void 0 !== a) {
            if (+a < e.iDraw) return;
            e.iDraw = +a;
          }
          n = n || [], pt(e), e._iRecordsTotal = parseInt(r, 10), e._iRecordsDisplay = parseInt(t, 10);
          for (var o = 0, i = n.length; o < i; o++) Y(e, n[o]);
          e.aiDisplay = e.aiDisplayMaster.slice(), S(e, !0), kt(e), w(e, !1);
        });
      } else t.iDraw++;
      if (0 !== o.length) for (var d = r ? t.aoData.length : s, f = r ? 0 : i; f < d; f++) {
        for (var h = o[f], p = t.aoData[h], g = (null === p.nTr && bt(t, h), p.nTr), m = 0; m < u.length; m++) {
          var v = u[m],
            b = p.anCells[m];
          D(b, C.type.className[v.sType]), D(b, v.sClass), D(b, t.oClasses.tbody.cell);
        }
        tt(t, "aoRowCallback", null, [g, p._aData, a, f, h]), n.push(g), a++;
      } else n[0] = Tt(t);
      tt(t, "aoHeaderCallback", "header", [V(t.nTHead).children("tr")[0], ht(t), i, s, o]), tt(t, "aoFooterCallback", "footer", [V(t.nTFoot).children("tr")[0], ht(t), i, s, o]), c[0].replaceChildren ? c[0].replaceChildren.apply(c[0], n) : (c.children().detach(), c.append(V(n))), V(t.nTableWrapper).toggleClass("dt-empty-footer", 0 === V("tr", t.nTFoot).length), tt(t, "aoDrawCallback", "draw", [t], !0), t.bSorted = !1, t.bFiltered = !1, t.bDrawing = !1;
    }
  }
  function s(t, e, n) {
    var a = t.oFeatures,
      r = a.bSort,
      a = a.bFilter;
    void 0 !== n && !0 !== n || (r && zt(t), a ? Nt(t, t.oPreviousSearch) : t.aiDisplay = t.aiDisplayMaster.slice()), !0 !== e && (t._iDisplayStart = 0), t._drawHold = e, S(t), t._drawHold = !1;
  }
  function Tt(t) {
    var e = t.oLanguage,
      n = e.sZeroRecords,
      a = et(t);
    return t.iDraw < 1 && "ssp" === a || t.iDraw <= 1 && "ajax" === a ? n = e.sLoadingRecords : e.sEmptyTable && 0 === t.fnRecordsTotal() && (n = e.sEmptyTable), V("<tr/>").append(V("<td />", {
      colSpan: W(t),
      class: t.oClasses.empty.row
    }).html(n))[0];
  }
  function wt(t, e, n) {
    for (var i = {}, a = (V.each(e, function (t, e) {
        if (null !== e) {
          var t = t.replace(/([A-Z])/g, " $1").split(" "),
            n = (i[t[0]] || (i[t[0]] = {}), 1 === t.length ? "full" : t[1].toLowerCase()),
            a = i[t[0]],
            r = function (e, n) {
              V.isPlainObject(n) ? Object.keys(n).map(function (t) {
                e.push({
                  feature: t,
                  opts: n[t]
                });
              }) : e.push(n);
            };
          if (a[n] && a[n].contents || (a[n] = {
            contents: []
          }), Array.isArray(e)) for (var o = 0; o < e.length; o++) r(a[n].contents, e[o]);else r(a[n].contents, e);
          Array.isArray(a[n].contents) || (a[n].contents = [a[n].contents]);
        }
      }), Object.keys(i).map(function (t) {
        return 0 !== t.indexOf(n) ? null : {
          name: t,
          val: i[t]
        };
      }).filter(function (t) {
        return null !== t;
      })), r = (a.sort(function (t, e) {
        t = +t.name.replace(/[^0-9]/g, "");
        return +e.name.replace(/[^0-9]/g, "") - t;
      }), "bottom" === n && a.reverse(), []), o = 0, l = a.length; o < l; o++) a[o].val.full && (r.push({
      full: a[o].val.full
    }), _t(t, r[r.length - 1]), delete a[o].val.full), Object.keys(a[o].val).length && (r.push(a[o].val), _t(t, r[r.length - 1]));
    return r;
  }
  function _t(o, i) {
    function l(t, e) {
      return C.features[t] || Z(o, 0, "Unknown feature: " + t), C.features[t].apply(this, [o, e]);
    }
    V.each(i, function (t) {
      for (var e, n = i[t].contents, a = 0, r = n.length; a < r; a++) n[a] && ("string" == typeof n[a] ? n[a] = l(n[a], null) : V.isPlainObject(n[a]) ? n[a] = l(n[a].feature, n[a].opts) : "function" == typeof n[a].node ? n[a] = n[a].node(o) : "function" == typeof n[a] && (e = n[a](o), n[a] = "function" == typeof e.node ? e.node() : e));
    });
  }
  function Ct(e) {
    var a,
      t = e.oClasses,
      n = V(e.nTable),
      r = V("<div/>").attr({
        id: e.sTableId + "_wrapper",
        class: t.container
      }).insertBefore(n);
    if (e.nTableWrapper = r[0], e.sDom) for (var o, i, l, s, u, c, d = e, t = e.sDom, f = r, h = t.match(/(".*?")|('.*?')|./g), p = 0; p < h.length; p++) o = null, "<" == (i = h[p]) ? (l = V("<div/>"), "'" != (s = h[p + 1])[0] && '"' != s[0] || (s = s.replace(/['"]/g, ""), u = "", -1 != s.indexOf(".") ? (c = s.split("."), u = c[0], c = c[1]) : "#" == s[0] ? u = s : c = s, l.attr("id", u.substring(1)).addClass(c), p++), f.append(l), f = l) : ">" == i ? f = f.parent() : "t" == i ? o = Wt(d) : $.ext.feature.forEach(function (t) {
      i == t.cFeature && (o = t.fnInit(d));
    }), o && f.append(o);else {
      var n = wt(e, e.layout, "top"),
        t = wt(e, e.layout, "bottom"),
        g = te(e, "layout");
      n.forEach(function (t) {
        g(e, r, t);
      }), g(e, r, {
        full: {
          table: !0,
          contents: [Wt(e)]
        }
      }), t.forEach(function (t) {
        g(e, r, t);
      });
    }
    var n = e,
      t = n.nTable,
      m = "" !== n.oScroll.sX || "" !== n.oScroll.sY;
    n.oFeatures.bProcessing && (a = V("<div/>", {
      id: n.sTableId + "_processing",
      class: n.oClasses.processing.container,
      role: "status"
    }).html(n.oLanguage.sProcessing).append("<div><div></div><div></div><div></div><div></div></div>"), m ? a.prependTo(V("div.dt-scroll", n.nTableWrapper)) : a.insertBefore(t), V(t).on("processing.dt.DT", function (t, e, n) {
      a.css("display", n ? "block" : "none");
    }));
  }
  function It(t, e, n) {
    for (var a, r, o, i, l, s, u = t.aoColumns, c = V(e).children("tr"), d = e && "thead" === e.nodeName.toLowerCase(), f = [], h = 0, p = c.length; h < p; h++) f.push([]);
    for (h = 0, p = c.length; h < p; h++) for (r = (a = c[h]).firstChild; r;) {
      if ("TD" == r.nodeName.toUpperCase() || "TH" == r.nodeName.toUpperCase()) {
        var g,
          m,
          v,
          b,
          y,
          D = [];
        for (b = (b = +r.getAttribute("colspan")) && 0 != b && 1 != b ? b : 1, y = (y = +r.getAttribute("rowspan")) && 0 != y && 1 != y ? y : 1, l = function (t, e, n) {
          for (var a = t[e]; a[n];) n++;
          return n;
        }(f, h, 0), s = 1 == b, n && (s && (ot(t, l, V(r).data()), g = u[l], m = r.getAttribute("width") || null, (v = r.style.width.match(/width:\s*(\d+[pxem%]+)/)) && (m = v[1]), g.sWidthOrig = g.sWidth || m, d ? (null === g.sTitle || g.autoTitle || (r.innerHTML = g.sTitle), !g.sTitle && s && (g.sTitle = I(r.innerHTML), g.autoTitle = !0)) : g.footer && (r.innerHTML = g.footer), g.ariaTitle || (g.ariaTitle = V(r).attr("aria-label") || g.sTitle), g.className) && V(r).addClass(g.className), 0 === V("span.dt-column-title", r).length && V("<span>").addClass("dt-column-title").append(r.childNodes).appendTo(r), d) && 0 === V("span.dt-column-order", r).length && V("<span>").addClass("dt-column-order").appendTo(r), i = 0; i < b; i++) {
          for (o = 0; o < y; o++) f[h + o][l + i] = {
            cell: r,
            unique: s
          }, f[h + o].row = a;
          D.push(l + i);
        }
        r.setAttribute("data-dt-column", x(D).join(","));
      }
      r = r.nextSibling;
    }
    return f;
  }
  function At(n, t, a) {
    function e(t) {
      var e = n.jqXHR ? n.jqXHR.status : null;
      (null === t || "number" == typeof e && 204 == e) && Lt(n, t = {}, []), (e = t.error || t.sError) && Z(n, 0, e), n.json = t, tt(n, null, "xhr", [n, t, n.jqXHR], !0), a(t);
    }
    var r,
      o = n.ajax,
      i = n.oInstance,
      l = (V.isPlainObject(o) && o.data && (l = "function" == typeof (r = o.data) ? r(t, n) : r, t = "function" == typeof r && l ? l : V.extend(!0, t, l), delete o.data), {
        url: "string" == typeof o ? o : "",
        data: t,
        success: e,
        dataType: "json",
        cache: !1,
        type: n.sServerMethod,
        error: function (t, e) {
          -1 === tt(n, null, "xhr", [n, null, n.jqXHR], !0).indexOf(!0) && ("parsererror" == e ? Z(n, 0, "Invalid JSON response", 1) : 4 === t.readyState && Z(n, 0, "Ajax error", 7)), w(n, !1);
        }
      });
    V.isPlainObject(o) && V.extend(l, o), n.oAjaxData = t, tt(n, null, "preXhr", [n, t, l], !0), "function" == typeof o ? n.jqXHR = o.call(i, t, e, n) : "" === o.url ? (i = {}, $.util.set(o.dataSrc)(i, []), e(i)) : (n.jqXHR = V.ajax(l), r && (o.data = r));
  }
  function Lt(t, e, n) {
    var a = "data";
    if (V.isPlainObject(t.ajax) && void 0 !== t.ajax.dataSrc && ("string" == typeof (t = t.ajax.dataSrc) || "function" == typeof t ? a = t : void 0 !== t.data && (a = t.data)), !n) return "data" === a ? e.aaData || e[a] : "" !== a ? J(a)(e) : e;
    m(a)(e, n);
  }
  function Ft(t, e, n) {
    var t = V.isPlainObject(t.ajax) ? t.ajax.dataSrc : null;
    return t && t[e] ? J(t[e])(n) : (t = "", "draw" === e ? t = "sEcho" : "recordsTotal" === e ? t = "iTotalRecords" : "recordsFiltered" === e && (t = "iTotalDisplayRecords"), void 0 !== n[t] ? n[t] : n[e]);
  }
  function Nt(n, t) {
    var e = n.aoPreSearchCols;
    if (B(n), "ssp" != et(n)) {
      for (var a, r, o, i, l, s = n, u = s.aoColumns, c = s.aoData, d = 0; d < c.length; d++) if (c[d] && !(l = c[d])._aFilterData) {
        for (o = [], a = 0, r = u.length; a < r; a++) u[a].bSearchable ? "string" != typeof (i = null === (i = G(s, d, a, "filter")) ? "" : i) && i.toString && (i = i.toString()) : i = "", i.indexOf && -1 !== i.indexOf("&") && (Rt.innerHTML = i, i = Ot ? Rt.textContent : Rt.innerText), i.replace && (i = i.replace(/[\r\n\u2028]/g, "")), o.push(i);
        l._aFilterData = o, l._sFilterRow = o.join("  "), 0;
      }
      n.aiDisplay = n.aiDisplayMaster.slice(), jt(n.aiDisplay, n, t.search, t), V.each(n.searchFixed, function (t, e) {
        jt(n.aiDisplay, n, e, {});
      });
      for (var f = 0; f < e.length; f++) {
        var h = e[f];
        jt(n.aiDisplay, n, h.search, h, f), V.each(n.aoColumns[f].searchFixed, function (t, e) {
          jt(n.aiDisplay, n, e, {}, f);
        });
      }
      for (var p, g, m = n, v = $.ext.search, b = m.aiDisplay, y = 0, D = v.length; y < D; y++) {
        for (var x = [], S = 0, T = b.length; S < T; S++) g = b[S], p = m.aoData[g], v[y](m, p._aFilterData, g, p._aData, S) && x.push(g);
        b.length = 0, b.push.apply(b, x);
      }
    }
    n.bFiltered = !0, tt(n, null, "search", [n]);
  }
  function jt(t, e, n, a, r) {
    if ("" !== n) {
      for (var o = 0, i = [], l = "function" == typeof n ? n : null, s = n instanceof RegExp ? n : l ? null : function (t, e) {
          var a = [],
            e = V.extend({}, {
              boundary: !1,
              caseInsensitive: !0,
              exact: !1,
              regex: !1,
              smart: !0
            }, e);
          "string" != typeof t && (t = t.toString());
          if (t = O(t), e.exact) return new RegExp("^" + Pt(t) + "$", e.caseInsensitive ? "i" : "");
          {
            var n, r, o;
            t = e.regex ? t : Pt(t), e.smart && (n = (t.match(/!?["\u201C][^"\u201D]+["\u201D]|[^ ]+/g) || [""]).map(function (t) {
              var e,
                n = !1;
              return "!" === t.charAt(0) && (n = !0, t = t.substring(1)), '"' === t.charAt(0) ? t = (e = t.match(/^"(.*)"$/)) ? e[1] : t : "“" === t.charAt(0) && (t = (e = t.match(/^\u201C(.*)\u201D$/)) ? e[1] : t), n && (1 < t.length && a.push("(?!" + t + ")"), t = ""), t.replace(/"/g, "");
            }), r = a.length ? a.join("") : "", o = e.boundary ? "\\b" : "", t = "^(?=.*?" + o + n.join(")(?=.*?" + o) + ")(" + r + ".)*$");
          }
          return new RegExp(t, e.caseInsensitive ? "i" : "");
        }(n, a), o = 0; o < t.length; o++) {
        var u = e.aoData[t[o]],
          c = void 0 === r ? u._sFilterRow : u._aFilterData[r];
        (l && l(c, u._aData, t[o], r) || s && s.test(c)) && i.push(t[o]);
      }
      for (t.length = i.length, o = 0; o < i.length; o++) t[o] = i[o];
    }
  }
  var Pt = $.util.escapeRegex,
    Rt = V("<div>")[0],
    Ot = void 0 !== Rt.textContent;
  function Et(n) {
    var a,
      t,
      e,
      r,
      o,
      i,
      l = n.iInitDisplayStart;
    n.bInitialised ? (Dt(n, "header"), Dt(n, "footer"), St(n, n.aoHeader), St(n, n.aoFooter), Ct(n), e = (t = n).nTHead, i = e.querySelectorAll("tr"), r = t.bSortCellsTop, o = ':not([data-dt-order="disable"]):not([data-dt-order="icon-only"])', !0 === r ? e = i[0] : !1 === r && (e = i[i.length - 1]), Vt(t, e, e === t.nTHead ? "tr" + o + " th" + o + ", tr" + o + " td" + o : "th" + o + ", td" + o), Ut(t, r = [], t.aaSorting), t.aaSorting = r, Bt(n), w(n, !0), tt(n, null, "preInit", [n], !0), s(n), "ssp" != (i = et(n)) && ("ajax" == i ? At(n, {}, function (t) {
      var e = Lt(n, t);
      for (a = 0; a < e.length; a++) Y(n, e[a]);
      n.iInitDisplayStart = l, s(n), w(n, !1), kt(n);
    }) : (kt(n), w(n, !1)))) : setTimeout(function () {
      Et(n);
    }, 200);
  }
  function kt(t) {
    var e;
    t._bInitComplete || (e = [t, t.json], t._bInitComplete = !0, M(t), tt(t, null, "plugin-init", e, !0), tt(t, "aoInitComplete", "init", e, !0));
  }
  function Mt(t, e) {
    e = parseInt(e, 10);
    t._iDisplayLength = e, Kt(t), tt(t, null, "length", [t, e]);
  }
  function Ht(t, e, n) {
    var a = t._iDisplayStart,
      r = t._iDisplayLength,
      o = t.fnRecordsDisplay();
    if (0 === o || -1 === r) a = 0;else if ("number" == typeof e) o < (a = e * r) && (a = 0);else if ("first" == e) a = 0;else if ("previous" == e) (a = 0 <= r ? a - r : 0) < 0 && (a = 0);else if ("next" == e) a + r < o && (a += r);else if ("last" == e) a = Math.floor((o - 1) / r) * r;else {
      if ("ellipsis" === e) return;
      Z(t, 0, "Unknown paging action: " + e, 5);
    }
    o = t._iDisplayStart !== a;
    t._iDisplayStart = a, tt(t, null, o ? "page" : "page-nc", [t]), o && n && S(t);
  }
  function w(t, e) {
    tt(t, null, "processing", [t, e]);
  }
  function Wt(t) {
    var e,
      n,
      a,
      r,
      o,
      i,
      l,
      s,
      u,
      c,
      d,
      f,
      h,
      p = V(t.nTable),
      g = t.oScroll;
    return "" === g.sX && "" === g.sY ? t.nTable : (e = g.sX, n = g.sY, a = t.oClasses.scrolling, o = (r = t.captionNode) ? r._captionSide : null, u = V(p[0].cloneNode(!1)), i = V(p[0].cloneNode(!1)), c = function (t) {
      return t ? A(t) : null;
    }, (l = p.children("tfoot")).length || (l = null), u = V(s = "<div/>", {
      class: a.container
    }).append(V(s, {
      class: a.header.self
    }).css({
      overflow: "hidden",
      position: "relative",
      border: 0,
      width: e ? c(e) : "100%"
    }).append(V(s, {
      class: a.header.inner
    }).css({
      "box-sizing": "content-box",
      width: g.sXInner || "100%"
    }).append(u.removeAttr("id").css("margin-left", 0).append("top" === o ? r : null).append(p.children("thead"))))).append(V(s, {
      class: a.body
    }).css({
      position: "relative",
      overflow: "auto",
      width: c(e)
    }).append(p)), l && u.append(V(s, {
      class: a.footer.self
    }).css({
      overflow: "hidden",
      border: 0,
      width: e ? c(e) : "100%"
    }).append(V(s, {
      class: a.footer.inner
    }).append(i.removeAttr("id").css("margin-left", 0).append("bottom" === o ? r : null).append(p.children("tfoot"))))), c = u.children(), d = c[0], f = c[1], h = l ? c[2] : null, V(f).on("scroll.DT", function () {
      var t = this.scrollLeft;
      d.scrollLeft = t, l && (h.scrollLeft = t);
    }), V("th, td", d).on("focus", function () {
      var t = d.scrollLeft;
      f.scrollLeft = t, l && (f.scrollLeft = t);
    }), V(f).css("max-height", n), g.bCollapse || V(f).css("height", n), t.nScrollHead = d, t.nScrollBody = f, t.nScrollFoot = h, t.aoDrawCallback.push(Xt), u[0]);
  }
  function Xt(e) {
    var t = e.oScroll.iBarWidth,
      n = V(e.nScrollHead).children("div"),
      a = n.children("table"),
      r = e.nScrollBody,
      o = V(r),
      i = V(e.nScrollFoot).children("div"),
      l = i.children("table"),
      s = V(e.nTHead),
      u = V(e.nTable),
      c = e.nTFoot && V("th, td", e.nTFoot).length ? V(e.nTFoot) : null,
      d = e.oBrowser,
      f = r.scrollHeight > r.clientHeight;
    if (e.scrollBarVis !== f && void 0 !== e.scrollBarVis) e.scrollBarVis = f, M(e);else {
      if (e.scrollBarVis = f, u.children("thead, tfoot").remove(), (f = s.clone().prependTo(u)).find("th, td").removeAttr("tabindex"), f.find("[id]").removeAttr("id"), c && (m = c.clone().prependTo(u)).find("[id]").removeAttr("id"), e.aiDisplay.length) for (var h = u.children("tbody").eq(0).children("tr").eq(0).children("th, td").map(function (t) {
          return {
            idx: H(e, t),
            width: V(this).outerWidth()
          };
        }), p = 0; p < h.length; p++) {
        var g = e.aoColumns[h[p].idx].colEl[0];
        g.style.width.replace("px", "") !== h[p].width && (g.style.width = h[p].width + "px");
      }
      a.find("colgroup").remove(), a.append(e.colgroup.clone()), c && (l.find("colgroup").remove(), l.append(e.colgroup.clone())), V("th, td", f).each(function () {
        V(this.childNodes).wrapAll('<div class="dt-scroll-sizing">');
      }), c && V("th, td", m).each(function () {
        V(this.childNodes).wrapAll('<div class="dt-scroll-sizing">');
      });
      var s = Math.floor(u.height()) > r.clientHeight || "scroll" == o.css("overflow-y"),
        f = "padding" + (d.bScrollbarLeft ? "Left" : "Right"),
        m = u.outerWidth();
      a.css("width", A(m)), n.css("width", A(m)).css(f, s ? t + "px" : "0px"), c && (l.css("width", A(m)), i.css("width", A(m)).css(f, s ? t + "px" : "0px")), u.children("colgroup").prependTo(u), o.trigger("scroll"), !e.bSorted && !e.bFiltered || e._drawHold || (r.scrollTop = 0);
    }
  }
  function A(t) {
    return null === t ? "0px" : "number" == typeof t ? t < 0 ? "0px" : t + "px" : t.match(/\d$/) ? t + "px" : t;
  }
  function Bt(t) {
    var e = t.aoColumns;
    for (t.colgroup.empty(), a = 0; a < e.length; a++) e[a].bVisible && t.colgroup.append(e[a].colEl);
  }
  function Vt(o, t, e, i, l) {
    Qt(t, e, function (t) {
      var e = !1,
        n = void 0 === i ? st(t.target) : [i];
      if (n.length) {
        for (var a = 0, r = n.length; a < r; a++) if (!1 !== function (t, e, n, a) {
          function r(t, e) {
            var n = t._idx;
            return (n = void 0 === n ? s.indexOf(t[1]) : n) + 1 < s.length ? n + 1 : e ? null : 0;
          }
          var o,
            i = t.aoColumns[e],
            l = t.aaSorting,
            s = i.asSorting;
          if (!i.bSortable) return !1;
          "number" == typeof l[0] && (l = t.aaSorting = [l]);
          (a || n) && t.oFeatures.bSortMulti ? -1 !== (i = f(l, "0").indexOf(e)) ? null === (o = null === (o = r(l[i], !0)) && 1 === l.length ? 0 : o) ? l.splice(i, 1) : (l[i][1] = s[o], l[i]._idx = o) : (a ? l.push([e, s[0], 0]) : l.push([e, l[0][1], 0]), l[l.length - 1]._idx = 0) : l.length && l[0][0] == e ? (o = r(l[0]), l.length = 1, l[0][1] = s[o], l[0]._idx = o) : (l.length = 0, l.push([e, s[0]]), l[0]._idx = 0);
        }(o, n[a], a, t.shiftKey) && (e = !0), 1 === o.aaSorting.length && "" === o.aaSorting[0][1]) break;
        e && (w(o, !0), setTimeout(function () {
          zt(o), qt(o, o.aiDisplay), w(o, !1), s(o, !1, !1), l && l();
        }, 0));
      }
    });
  }
  function qt(t, e) {
    if (!(e.length < 2)) {
      for (var n = t.aiDisplayMaster, a = {}, r = {}, o = 0; o < n.length; o++) a[n[o]] = o;
      for (o = 0; o < e.length; o++) r[e[o]] = a[e[o]];
      e.sort(function (t, e) {
        return r[t] - r[e];
      });
    }
  }
  function Ut(n, a, t) {
    function e(t) {
      var e;
      V.isPlainObject(t) ? void 0 !== t.idx ? a.push([t.idx, t.dir]) : t.name && -1 !== (e = f(n.aoColumns, "sName").indexOf(t.name)) && a.push([e, t.dir]) : a.push(t);
    }
    if (V.isPlainObject(t)) e(t);else if (t.length && "number" == typeof t[0]) e(t);else if (t.length) for (var r = 0; r < t.length; r++) e(t[r]);
  }
  function $t(t) {
    var e,
      n,
      a,
      r,
      o,
      i,
      l,
      s = [],
      u = $.ext.type.order,
      c = t.aoColumns,
      d = t.aaSortingFixed,
      f = V.isPlainObject(d),
      h = [];
    if (t.oFeatures.bSort) for (Array.isArray(d) && Ut(t, h, d), f && d.pre && Ut(t, h, d.pre), Ut(t, h, t.aaSorting), f && d.post && Ut(t, h, d.post), e = 0; e < h.length; e++) if (c[l = h[e][0]]) for (n = 0, a = (r = c[l].aDataSort).length; n < a; n++) i = c[o = r[n]].sType || "string", void 0 === h[e]._idx && (h[e]._idx = c[o].asSorting.indexOf(h[e][1])), h[e][1] && s.push({
      src: l,
      col: o,
      dir: h[e][1],
      index: h[e]._idx,
      type: i,
      formatter: u[i + "-pre"],
      sorter: u[i + "-" + h[e][1]]
    });
    return s;
  }
  function zt(t, e, n) {
    var a,
      r,
      o,
      i,
      l,
      c,
      d = [],
      s = $.ext.type.order,
      f = t.aoData,
      u = t.aiDisplayMaster;
    for (B(t), void 0 !== e ? (l = t.aoColumns[e], c = [{
      src: e,
      col: e,
      dir: n,
      index: 0,
      type: l.sType,
      formatter: s[l.sType + "-pre"],
      sorter: s[l.sType + "-" + n]
    }], u = u.slice()) : c = $t(t), a = 0, r = c.length; a < r; a++) {
      i = c[a], S = x = D = g = p = h = y = b = v = m = void 0;
      var h,
        p,
        g,
        m = t,
        v = i.col,
        b = m.aoColumns[v],
        y = $.ext.order[b.sSortDataType];
      y && (h = y.call(m.oInstance, m, v, T(m, v)));
      for (var D = $.ext.type.order[b.sType + "-pre"], x = m.aoData, S = 0; S < x.length; S++) x[S] && ((p = x[S])._aSortData || (p._aSortData = []), p._aSortData[v] && !y || (g = y ? h[S] : G(m, S, v, "sort"), p._aSortData[v] = D ? D(g, m) : g));
    }
    if ("ssp" != et(t) && 0 !== c.length) {
      for (a = 0, o = u.length; a < o; a++) d[a] = a;
      c.length && "desc" === c[0].dir && d.reverse(), u.sort(function (t, e) {
        for (var n, a, r, o, i = c.length, l = f[t]._aSortData, s = f[e]._aSortData, u = 0; u < i; u++) if (n = l[(o = c[u]).col], a = s[o.col], o.sorter) {
          if (0 !== (r = o.sorter(n, a))) return r;
        } else if (0 !== (r = n < a ? -1 : a < n ? 1 : 0)) return "asc" === o.dir ? r : -r;
        return (n = d[t]) < (a = d[e]) ? -1 : a < n ? 1 : 0;
      });
    } else 0 === c.length && u.sort(function (t, e) {
      return t < e ? -1 : e < t ? 1 : 0;
    });
    return void 0 === e && (t.bSorted = !0, tt(t, null, "order", [t, c])), u;
  }
  function Yt(t) {
    var e,
      n,
      a,
      r = t.aLastSort,
      o = t.oClasses.order.position,
      i = $t(t),
      l = t.oFeatures;
    if (l.bSort && l.bSortClasses) {
      for (e = 0, n = r.length; e < n; e++) a = r[e].src, V(f(t.aoData, "anCells", a)).removeClass(o + (e < 2 ? e + 1 : 3));
      for (e = 0, n = i.length; e < n; e++) a = i[e].src, V(f(t.aoData, "anCells", a)).addClass(o + (e < 2 ? e + 1 : 3));
    }
    t.aLastSort = i;
  }
  function Gt(n) {
    var t;
    n._bLoadingState || (t = {
      time: +new Date(),
      start: n._iDisplayStart,
      length: n._iDisplayLength,
      order: V.extend(!0, [], n.aaSorting),
      search: V.extend({}, n.oPreviousSearch),
      columns: n.aoColumns.map(function (t, e) {
        return {
          visible: t.bVisible,
          search: V.extend({}, n.aoPreSearchCols[e])
        };
      })
    }, n.oSavedState = t, tt(n, "aoStateSaveParams", "stateSaveParams", [n, t]), n.oFeatures.bStateSave && !n.bDestroying && n.fnStateSaveCallback.call(n.oInstance, n, t));
  }
  function Jt(n, t, e) {
    var a,
      r,
      o = n.aoColumns,
      i = (n._bLoadingState = !0, n._bInitComplete ? new $.Api(n) : null);
    if (t && t.time) {
      var l = n.iStateDuration;
      if (0 < l && t.time < +new Date() - 1e3 * l) n._bLoadingState = !1;else if (-1 !== tt(n, "aoStateLoadParams", "stateLoadParams", [n, t]).indexOf(!1)) n._bLoadingState = !1;else if (t.columns && o.length !== t.columns.length) n._bLoadingState = !1;else {
        if (n.oLoadedState = V.extend(!0, {}, t), tt(n, null, "stateLoadInit", [n, t], !0), void 0 !== t.length && (i ? i.page.len(t.length) : n._iDisplayLength = t.length), void 0 !== t.start && (null === i ? (n._iDisplayStart = t.start, n.iInitDisplayStart = t.start) : Ht(n, t.start / n._iDisplayLength)), void 0 !== t.order && (n.aaSorting = [], V.each(t.order, function (t, e) {
          n.aaSorting.push(e[0] >= o.length ? [0, e[1]] : e);
        })), void 0 !== t.search && V.extend(n.oPreviousSearch, t.search), t.columns) {
          for (a = 0, r = t.columns.length; a < r; a++) {
            var s = t.columns[a];
            void 0 !== s.visible && (i ? i.column(a).visible(s.visible, !1) : o[a].bVisible = s.visible), void 0 !== s.search && V.extend(n.aoPreSearchCols[a], s.search);
          }
          i && i.columns.adjust();
        }
        n._bLoadingState = !1, tt(n, "aoStateLoaded", "stateLoaded", [n, t]);
      }
    } else n._bLoadingState = !1;
    e();
  }
  function Z(t, e, n, a) {
    if (n = "DataTables warning: " + (t ? "table id=" + t.sTableId + " - " : "") + n, a && (n += ". For more information about this error, please see https://datatables.net/tn/" + a), e) q.console && console.log && console.log(n);else {
      e = $.ext, e = e.sErrMode || e.errMode;
      if (t && tt(t, null, "dt-error", [t, a, n], !0), "alert" == e) alert(n);else {
        if ("throw" == e) throw new Error(n);
        "function" == typeof e && e(t, a, n);
      }
    }
  }
  function Q(n, a, t, e) {
    Array.isArray(t) ? V.each(t, function (t, e) {
      Array.isArray(e) ? Q(n, a, e[0], e[1]) : Q(n, a, e);
    }) : (void 0 === e && (e = t), void 0 !== a[t] && (n[e] = a[t]));
  }
  function Zt(t, e, n) {
    var a, r;
    for (r in e) Object.prototype.hasOwnProperty.call(e, r) && (a = e[r], V.isPlainObject(a) ? (V.isPlainObject(t[r]) || (t[r] = {}), V.extend(!0, t[r], a)) : n && "data" !== r && "aaData" !== r && Array.isArray(a) ? t[r] = a.slice() : t[r] = a);
    return t;
  }
  function Qt(t, e, n) {
    V(t).on("click.DT", e, function (t) {
      n(t);
    }).on("keypress.DT", e, function (t) {
      13 === t.which && (t.preventDefault(), n(t));
    }).on("selectstart.DT", e, function () {
      return !1;
    });
  }
  function K(t, e, n) {
    n && t[e].push(n);
  }
  function tt(e, t, n, a, r) {
    var o = [];
    return t && (o = e[t].slice().reverse().map(function (t) {
      return t.apply(e.oInstance, a);
    })), null !== n && (t = V.Event(n + ".dt"), n = V(e.nTable), t.dt = e.api, n[r ? "trigger" : "triggerHandler"](t, a), r && 0 === n.parents("body").length && V("body").trigger(t, a), o.push(t.result)), o;
  }
  function Kt(t) {
    var e = t._iDisplayStart,
      n = t.fnDisplayEnd(),
      a = t._iDisplayLength;
    n <= e && (e = n - a), e -= e % a, t._iDisplayStart = e = -1 === a || e < 0 ? 0 : e;
  }
  function te(t, e) {
    var t = t.renderer,
      n = $.ext.renderer[e];
    return V.isPlainObject(t) && t[e] ? n[t[e]] || n._ : "string" == typeof t && n[t] || n._;
  }
  function et(t) {
    return t.oFeatures.bServerSide ? "ssp" : t.ajax ? "ajax" : "dom";
  }
  function ee(t, e, n) {
    var a = t.fnFormatNumber,
      r = t._iDisplayStart + 1,
      o = t._iDisplayLength,
      i = t.fnRecordsDisplay(),
      l = t.fnRecordsTotal(),
      s = -1 === o;
    return e.replace(/_START_/g, a.call(t, r)).replace(/_END_/g, a.call(t, t.fnDisplayEnd())).replace(/_MAX_/g, a.call(t, l)).replace(/_TOTAL_/g, a.call(t, i)).replace(/_PAGE_/g, a.call(t, s ? 1 : Math.ceil(r / o))).replace(/_PAGES_/g, a.call(t, s ? 1 : Math.ceil(i / o))).replace(/_ENTRIES_/g, t.api.i18n("entries", "", n)).replace(/_ENTRIES-MAX_/g, t.api.i18n("entries", "", l)).replace(/_ENTRIES-TOTAL_/g, t.api.i18n("entries", "", i));
  }
  var ne = [],
    n = Array.prototype;
  U = function (t, e) {
    if (!(this instanceof U)) return new U(t, e);
    function n(t) {
      t = t, e = $.settings, a = f(e, "nTable");
      var n,
        e,
        a,
        r = t ? t.nTable && t.oFeatures ? [t] : t.nodeName && "table" === t.nodeName.toLowerCase() ? -1 !== (r = a.indexOf(t)) ? [e[r]] : null : t && "function" == typeof t.settings ? t.settings().toArray() : ("string" == typeof t ? n = V(t).get() : t instanceof V && (n = t.get()), n ? e.filter(function (t, e) {
          return n.includes(a[e]);
        }) : void 0) : [];
      r && o.push.apply(o, r);
    }
    var o = [];
    if (Array.isArray(t)) for (var a = 0, r = t.length; a < r; a++) n(t[a]);else n(t);
    this.context = 1 < o.length ? x(o) : o, e && this.push.apply(this, e), this.selector = {
      rows: null,
      cols: null,
      opts: null
    }, U.extend(this, this, ne);
  }, $.Api = U, V.extend(U.prototype, {
    any: function () {
      return 0 !== this.count();
    },
    context: [],
    count: function () {
      return this.flatten().length;
    },
    each: function (t) {
      for (var e = 0, n = this.length; e < n; e++) t.call(this, this[e], e, this);
      return this;
    },
    eq: function (t) {
      var e = this.context;
      return e.length > t ? new U(e[t], this[t]) : null;
    },
    filter: function (t) {
      t = n.filter.call(this, t, this);
      return new U(this.context, t);
    },
    flatten: function () {
      var t = [];
      return new U(this.context, t.concat.apply(t, this.toArray()));
    },
    get: function (t) {
      return this[t];
    },
    join: n.join,
    includes: function (t) {
      return -1 !== this.indexOf(t);
    },
    indexOf: n.indexOf,
    iterator: function (t, e, n, a) {
      var r,
        o,
        i,
        l,
        s,
        u,
        c,
        d,
        f = [],
        h = this.context,
        p = this.selector;
      for ("string" == typeof t && (a = n, n = e, e = t, t = !1), o = 0, i = h.length; o < i; o++) {
        var g = new U(h[o]);
        if ("table" === e) void 0 !== (r = n.call(g, h[o], o)) && f.push(r);else if ("columns" === e || "rows" === e) void 0 !== (r = n.call(g, h[o], this[o], o)) && f.push(r);else if ("every" === e || "column" === e || "column-rows" === e || "row" === e || "cell" === e) for (c = this[o], "column-rows" === e && (u = he(h[o], p.opts)), l = 0, s = c.length; l < s; l++) d = c[l], void 0 !== (r = "cell" === e ? n.call(g, h[o], d.row, d.column, o, l) : n.call(g, h[o], d, o, l, u)) && f.push(r);
      }
      return f.length || a ? ((t = (a = new U(h, t ? f.concat.apply([], f) : f)).selector).rows = p.rows, t.cols = p.cols, t.opts = p.opts, a) : this;
    },
    lastIndexOf: n.lastIndexOf,
    length: 0,
    map: function (t) {
      t = n.map.call(this, t, this);
      return new U(this.context, t);
    },
    pluck: function (t) {
      var e = $.util.get(t);
      return this.map(function (t) {
        return e(t);
      });
    },
    pop: n.pop,
    push: n.push,
    reduce: n.reduce,
    reduceRight: n.reduceRight,
    reverse: n.reverse,
    selector: null,
    shift: n.shift,
    slice: function () {
      return new U(this.context, this);
    },
    sort: n.sort,
    splice: n.splice,
    toArray: function () {
      return n.slice.call(this);
    },
    to$: function () {
      return V(this);
    },
    toJQuery: function () {
      return V(this);
    },
    unique: function () {
      return new U(this.context, x(this.toArray()));
    },
    unshift: n.unshift
  }), q.__apiStruct = ne, U.extend = function (t, e, n) {
    if (n.length && e && (e instanceof U || e.__dt_wrapper)) for (var a, r = 0, o = n.length; r < o; r++) "__proto__" !== (a = n[r]).name && (e[a.name] = "function" === a.type ? function (e, n, a) {
      return function () {
        var t = n.apply(e || this, arguments);
        return U.extend(t, t, a.methodExt), t;
      };
    }(t, a.val, a) : "object" === a.type ? {} : a.val, e[a.name].__dt_wrapper = !0, U.extend(t, e[a.name], a.propExt));
  }, U.register = e = function (t, e) {
    if (Array.isArray(t)) for (var n = 0, a = t.length; n < a; n++) U.register(t[n], e);else for (var r = t.split("."), o = ne, i = 0, l = r.length; i < l; i++) {
      var s,
        u,
        c = function (t, e) {
          for (var n = 0, a = t.length; n < a; n++) if (t[n].name === e) return t[n];
          return null;
        }(o, u = (s = -1 !== r[i].indexOf("()")) ? r[i].replace("()", "") : r[i]);
      c || o.push(c = {
        name: u,
        val: {},
        methodExt: [],
        propExt: [],
        type: "object"
      }), i === l - 1 ? (c.val = e, c.type = "function" == typeof e ? "function" : V.isPlainObject(e) ? "object" : "other") : o = s ? c.methodExt : c.propExt;
    }
  }, U.registerPlural = t = function (t, e, n) {
    U.register(t, n), U.register(e, function () {
      var t = n.apply(this, arguments);
      return t === this ? this : t instanceof U ? t.length ? Array.isArray(t[0]) ? new U(t.context, t[0]) : t[0] : void 0 : t;
    });
  };
  function ae(t, e) {
    var n, a;
    return Array.isArray(t) ? (n = [], t.forEach(function (t) {
      t = ae(t, e);
      n.push.apply(n, t);
    }), n.filter(function (t) {
      return t;
    })) : "number" == typeof t ? [e[t]] : (a = e.map(function (t) {
      return t.nTable;
    }), V(a).filter(t).map(function () {
      var t = a.indexOf(this);
      return e[t];
    }).toArray());
  }
  function re(r, o, t) {
    var e, n;
    t && (e = new U(r)).one("draw", function () {
      t(e.ajax.json());
    }), "ssp" == et(r) ? s(r, o) : (w(r, !0), (n = r.jqXHR) && 4 !== n.readyState && n.abort(), At(r, {}, function (t) {
      pt(r);
      for (var e = Lt(r, t), n = 0, a = e.length; n < a; n++) Y(r, e[n]);
      s(r, o), kt(r), w(r, !1);
    }));
  }
  function oe(t, e, n, a, r) {
    for (var o, i, l, s, u = [], c = typeof e, d = 0, f = (e = e && "string" != c && "function" != c && void 0 !== e.length ? e : [e]).length; d < f; d++) for (l = 0, s = (i = e[d] && e[d].split && !e[d].match(/[[(:]/) ? e[d].split(",") : [e[d]]).length; l < s; l++) (o = (o = n("string" == typeof i[l] ? i[l].trim() : i[l])).filter(function (t) {
      return null != t;
    })) && o.length && (u = u.concat(o));
    var h = C.selector[t];
    if (h.length) for (d = 0, f = h.length; d < f; d++) u = h[d](a, r, u);
    return x(u);
  }
  function ie(t) {
    return (t = t || {}).filter && void 0 === t.search && (t.search = t.filter), V.extend({
      search: "none",
      order: "current",
      page: "all"
    }, t);
  }
  function le(t) {
    var e = new U(t.context[0]);
    return t.length && e.push(t[0]), e.selector = t.selector, e.length && 1 < e[0].length && e[0].splice(1), e;
  }
  e("tables()", function (t) {
    return null != t ? new U(ae(t, this.context)) : this;
  }), e("table()", function (t) {
    var t = this.tables(t),
      e = t.context;
    return e.length ? new U(e[0]) : t;
  }), [["nodes", "node", "nTable"], ["body", "body", "nTBody"], ["header", "header", "nTHead"], ["footer", "footer", "nTFoot"]].forEach(function (e) {
    t("tables()." + e[0] + "()", "table()." + e[1] + "()", function () {
      return this.iterator("table", function (t) {
        return t[e[2]];
      }, 1);
    });
  }), [["header", "aoHeader"], ["footer", "aoFooter"]].forEach(function (n) {
    e("table()." + n[0] + ".structure()", function (t) {
      var t = this.columns(t).indexes().flatten(),
        e = this.context[0];
      return xt(e, e[n[1]], t);
    });
  }), t("tables().containers()", "table().container()", function () {
    return this.iterator("table", function (t) {
      return t.nTableWrapper;
    }, 1);
  }), e("tables().every()", function (n) {
    var a = this;
    return this.iterator("table", function (t, e) {
      n.call(a.table(e), e);
    });
  }), e("caption()", function (r, o) {
    var t,
      e = this.context;
    return void 0 === r ? (t = e[0].captionNode) && e.length ? t.innerHTML : null : this.iterator("table", function (t) {
      var e = V(t.nTable),
        n = V(t.captionNode),
        a = V(t.nTableWrapper);
      n.length || (n = V("<caption/>").html(r), t.captionNode = n[0], o) || (e.prepend(n), o = n.css("caption-side")), n.html(r), o && (n.css("caption-side", o), n[0]._captionSide = o), (a.find("div.dataTables_scroll").length ? (t = "top" === o ? "Head" : "Foot", a.find("div.dataTables_scroll" + t + " table")) : e).prepend(n);
    }, 1);
  }), e("caption.node()", function () {
    var t = this.context;
    return t.length ? t[0].captionNode : null;
  }), e("draw()", function (e) {
    return this.iterator("table", function (t) {
      "page" === e ? S(t) : s(t, !1 === (e = "string" == typeof e ? "full-hold" !== e : e));
    });
  }), e("page()", function (e) {
    return void 0 === e ? this.page.info().page : this.iterator("table", function (t) {
      Ht(t, e);
    });
  }), e("page.info()", function () {
    var t, e, n, a, r;
    if (0 !== this.context.length) return e = (t = this.context[0])._iDisplayStart, n = t.oFeatures.bPaginate ? t._iDisplayLength : -1, a = t.fnRecordsDisplay(), {
      page: (r = -1 === n) ? 0 : Math.floor(e / n),
      pages: r ? 1 : Math.ceil(a / n),
      start: e,
      end: t.fnDisplayEnd(),
      length: n,
      recordsTotal: t.fnRecordsTotal(),
      recordsDisplay: a,
      serverSide: "ssp" === et(t)
    };
  }), e("page.len()", function (e) {
    return void 0 === e ? 0 !== this.context.length ? this.context[0]._iDisplayLength : void 0 : this.iterator("table", function (t) {
      Mt(t, e);
    });
  }), e("ajax.json()", function () {
    var t = this.context;
    if (0 < t.length) return t[0].json;
  }), e("ajax.params()", function () {
    var t = this.context;
    if (0 < t.length) return t[0].oAjaxData;
  }), e("ajax.reload()", function (e, n) {
    return this.iterator("table", function (t) {
      re(t, !1 === n, e);
    });
  }), e("ajax.url()", function (e) {
    var t = this.context;
    return void 0 === e ? 0 === t.length ? void 0 : (t = t[0], V.isPlainObject(t.ajax) ? t.ajax.url : t.ajax) : this.iterator("table", function (t) {
      V.isPlainObject(t.ajax) ? t.ajax.url = e : t.ajax = e;
    });
  }), e("ajax.url().load()", function (e, n) {
    return this.iterator("table", function (t) {
      re(t, !1 === n, e);
    });
  });
  function se(o, i, t, e) {
    function l(t, e) {
      var n;
      if (Array.isArray(t) || t instanceof V) for (var a = 0, r = t.length; a < r; a++) l(t[a], e);else t.nodeName && "tr" === t.nodeName.toLowerCase() ? (t.setAttribute("data-dt-row", i.idx), s.push(t)) : (n = V("<tr><td></td></tr>").attr("data-dt-row", i.idx).addClass(e), V("td", n).addClass(e).html(t)[0].colSpan = W(o), s.push(n[0]));
    }
    var s = [];
    l(t, e), i._details && i._details.detach(), i._details = V(s), i._detailsShow && i._details.insertAfter(i.nTr);
  }
  function ue(t, e) {
    var n = t.context;
    if (n.length && t.length) {
      var a = n[0].aoData[t[0]];
      if (a._details) {
        (a._detailsShow = e) ? (a._details.insertAfter(a.nTr), V(a.nTr).addClass("dt-hasChild")) : (a._details.detach(), V(a.nTr).removeClass("dt-hasChild")), tt(n[0], null, "childRow", [e, t.row(t[0])]);
        var i = n[0],
          r = new U(i),
          a = ".dt.DT_details",
          e = "draw" + a,
          t = "column-sizing" + a,
          a = "destroy" + a,
          l = i.aoData;
        if (r.off(e + " " + t + " " + a), f(l, "_details").length > 0) {
          r.on(e, function (t, e) {
            if (i !== e) return;
            r.rows({
              page: "current"
            }).eq(0).each(function (t) {
              var e = l[t];
              if (e._detailsShow) e._details.insertAfter(e.nTr);
            });
          });
          r.on(t, function (t, e) {
            if (i !== e) return;
            var n,
              a = W(e);
            for (var r = 0, o = l.length; r < o; r++) {
              n = l[r];
              if (n && n._details) n._details.each(function () {
                var t = V(this).children("td");
                if (t.length == 1) t.attr("colspan", a);
              });
            }
          });
          r.on(a, function (t, e) {
            if (i !== e) return;
            for (var n = 0, a = l.length; n < a; n++) if (l[n] && l[n]._details) me(r, n);
          });
        }
        ge(n);
      }
    }
  }
  function ce(t, e, n, a, r, o) {
    for (var i = [], l = 0, s = r.length; l < s; l++) i.push(G(t, r[l], e, o));
    return i;
  }
  function de(t, e, n) {
    var a = t.aoHeader;
    return a[void 0 !== n ? n : t.bSortCellsTop ? 0 : a.length - 1][e].cell;
  }
  function fe(e, n) {
    return function (t) {
      return y(t) || "string" != typeof t || (t = t.replace(d, " "), e && (t = I(t)), n && (t = O(t, !1))), t;
    };
  }
  var he = function (t, e) {
      var n,
        a = [],
        r = t.aiDisplay,
        o = t.aiDisplayMaster,
        i = e.search,
        l = e.order,
        e = e.page;
      if ("ssp" == et(t)) return "removed" === i ? [] : h(0, o.length);
      if ("current" == e) for (u = t._iDisplayStart, c = t.fnDisplayEnd(); u < c; u++) a.push(r[u]);else if ("current" == l || "applied" == l) {
        if ("none" == i) a = o.slice();else if ("applied" == i) a = r.slice();else if ("removed" == i) {
          for (var s = {}, u = 0, c = r.length; u < c; u++) s[r[u]] = null;
          o.forEach(function (t) {
            Object.prototype.hasOwnProperty.call(s, t) || a.push(t);
          });
        }
      } else if ("index" == l || "original" == l) for (u = 0, c = t.aoData.length; u < c; u++) t.aoData[u] && ("none" == i || -1 === (n = r.indexOf(u)) && "removed" == i || 0 <= n && "applied" == i) && a.push(u);else if ("number" == typeof l) {
        var d = zt(t, l, "asc");
        if ("none" === i) a = d;else for (u = 0; u < d.length; u++) (-1 === (n = r.indexOf(d[u])) && "removed" == i || 0 <= n && "applied" == i) && a.push(d[u]);
      }
      return a;
    },
    pe = (e("rows()", function (n, a) {
      void 0 === n ? n = "" : V.isPlainObject(n) && (a = n, n = ""), a = ie(a);
      var t = this.iterator("table", function (t) {
        return e = oe("row", e = n, function (n) {
          var t = g(n),
            a = r.aoData;
          if (null !== t && !o) return [t];
          if (i = i || he(r, o), null !== t && -1 !== i.indexOf(t)) return [t];
          if (null == n || "" === n) return i;
          if ("function" == typeof n) return i.map(function (t) {
            var e = a[t];
            return n(t, e._aData, e.nTr) ? t : null;
          });
          if (n.nodeName) return t = n._DT_RowIndex, e = n._DT_CellIndex, void 0 !== t ? a[t] && a[t].nTr === n ? [t] : [] : e ? a[e.row] && a[e.row].nTr === n.parentNode ? [e.row] : [] : (t = V(n).closest("*[data-dt-row]")).length ? [t.data("dt-row")] : [];
          if ("string" == typeof n && "#" === n.charAt(0)) {
            var e = r.aIds[n.replace(/^#/, "")];
            if (void 0 !== e) return [e.idx];
          }
          t = b(v(r.aoData, i, "nTr"));
          return V(t).filter(n).map(function () {
            return this._DT_RowIndex;
          }).toArray();
        }, r = t, o = a), "current" !== o.order && "applied" !== o.order || qt(r, e), e;
        var r, e, o, i;
      }, 1);
      return t.selector.rows = n, t.selector.opts = a, t;
    }), e("rows().nodes()", function () {
      return this.iterator("row", function (t, e) {
        return t.aoData[e].nTr || void 0;
      }, 1);
    }), e("rows().data()", function () {
      return this.iterator(!0, "rows", function (t, e) {
        return v(t.aoData, e, "_aData");
      }, 1);
    }), t("rows().cache()", "row().cache()", function (n) {
      return this.iterator("row", function (t, e) {
        t = t.aoData[e];
        return "search" === n ? t._aFilterData : t._aSortData;
      }, 1);
    }), t("rows().invalidate()", "row().invalidate()", function (n) {
      return this.iterator("row", function (t, e) {
        gt(t, e, n);
      });
    }), t("rows().indexes()", "row().index()", function () {
      return this.iterator("row", function (t, e) {
        return e;
      }, 1);
    }), t("rows().ids()", "row().id()", function (t) {
      for (var e = [], n = this.context, a = 0, r = n.length; a < r; a++) for (var o = 0, i = this[a].length; o < i; o++) {
        var l = n[a].rowIdFn(n[a].aoData[this[a][o]]._aData);
        e.push((!0 === t ? "#" : "") + l);
      }
      return new U(n, e);
    }), t("rows().remove()", "row().remove()", function () {
      return this.iterator("row", function (t, e) {
        var n = t.aoData,
          a = n[e],
          r = t.aiDisplayMaster.indexOf(e),
          r = (-1 !== r && t.aiDisplayMaster.splice(r, 1), 0 < t._iRecordsDisplay && t._iRecordsDisplay--, Kt(t), t.rowIdFn(a._aData));
        void 0 !== r && delete t.aIds[r], n[e] = null;
      }), this;
    }), e("rows.add()", function (o) {
      var t = this.iterator("table", function (t) {
          for (var e, n = [], a = 0, r = o.length; a < r; a++) (e = o[a]).nodeName && "TR" === e.nodeName.toUpperCase() ? n.push(ut(t, e)[0]) : n.push(Y(t, e));
          return n;
        }, 1),
        e = this.rows(-1);
      return e.pop(), e.push.apply(e, t), e;
    }), e("row()", function (t, e) {
      return le(this.rows(t, e));
    }), e("row().data()", function (t) {
      var e,
        n = this.context;
      return void 0 === t ? n.length && this.length && this[0].length ? n[0].aoData[this[0]]._aData : void 0 : ((e = n[0].aoData[this[0]])._aData = t, Array.isArray(t) && e.nTr && e.nTr.id && m(n[0].rowId)(t, e.nTr.id), gt(n[0], this[0], "data"), this);
    }), e("row().node()", function () {
      var t = this.context;
      if (t.length && this.length && this[0].length) {
        t = t[0].aoData[this[0]];
        if (t && t.nTr) return t.nTr;
      }
      return null;
    }), e("row.add()", function (e) {
      e instanceof V && e.length && (e = e[0]);
      var t = this.iterator("table", function (t) {
        return e.nodeName && "TR" === e.nodeName.toUpperCase() ? ut(t, e)[0] : Y(t, e);
      });
      return this.row(t[0]);
    }), V(_).on("plugin-init.dt", function (t, e) {
      var a = new U(e);
      a.on("stateSaveParams.DT", function (t, e, n) {
        for (var a = e.rowIdFn, r = e.aiDisplayMaster, o = [], i = 0; i < r.length; i++) {
          var l = r[i],
            l = e.aoData[l];
          l._detailsShow && o.push("#" + a(l._aData));
        }
        n.childRows = o;
      }), a.on("stateLoaded.DT", function (t, e, n) {
        pe(a, n);
      }), pe(a, a.state.loaded());
    }), function (t, e) {
      e && e.childRows && t.rows(e.childRows.map(function (t) {
        return t.replace(/([^:\\]*(?:\\.[^:\\]*)*):/g, "$1\\:");
      })).every(function () {
        tt(t.settings()[0], null, "requestChild", [this]);
      });
    }),
    ge = $.util.throttle(function (t) {
      Gt(t[0]);
    }, 500),
    me = function (t, e) {
      var n = t.context;
      n.length && (e = n[0].aoData[void 0 !== e ? e : t[0]]) && e._details && (e._details.remove(), e._detailsShow = void 0, e._details = void 0, V(e.nTr).removeClass("dt-hasChild"), ge(n));
    },
    ve = "row().child",
    be = ve + "()",
    ye = (e(be, function (t, e) {
      var n = this.context;
      return void 0 === t ? n.length && this.length && n[0].aoData[this[0]] ? n[0].aoData[this[0]]._details : void 0 : (!0 === t ? this.child.show() : !1 === t ? me(this) : n.length && this.length && se(n[0], n[0].aoData[this[0]], t, e), this);
    }), e([ve + ".show()", be + ".show()"], function () {
      return ue(this, !0), this;
    }), e([ve + ".hide()", be + ".hide()"], function () {
      return ue(this, !1), this;
    }), e([ve + ".remove()", be + ".remove()"], function () {
      return me(this), this;
    }), e(ve + ".isShown()", function () {
      var t = this.context;
      return t.length && this.length && t[0].aoData[this[0]] && t[0].aoData[this[0]]._detailsShow || !1;
    }), /^([^:]+)?:(name|title|visIdx|visible)$/),
    be = (e("columns()", function (n, a) {
      void 0 === n ? n = "" : V.isPlainObject(n) && (a = n, n = ""), a = ie(a);
      var t = this.iterator("table", function (t) {
        return e = n, l = a, s = (i = t).aoColumns, u = f(s, "sName"), c = f(s, "sTitle"), t = $.util.get("[].[].cell")(i.aoHeader), d = x(E([], t)), oe("column", e, function (n) {
          var a,
            t = g(n);
          if ("" === n) return h(s.length);
          if (null !== t) return [0 <= t ? t : s.length + t];
          if ("function" == typeof n) return a = he(i, l), s.map(function (t, e) {
            return n(e, ce(i, e, 0, 0, a), de(i, e)) ? e : null;
          });
          var e,
            r,
            o = "string" == typeof n ? n.match(ye) : "";
          if (o) switch (o[2]) {
            case "visIdx":
            case "visible":
              return o[1] ? (e = parseInt(o[1], 10)) < 0 ? [(r = s.map(function (t, e) {
                return t.bVisible ? e : null;
              }))[r.length + e]] : [H(i, e)] : s.map(function (t, e) {
                return t.bVisible ? e : null;
              });
            case "name":
              return u.map(function (t, e) {
                return t === o[1] ? e : null;
              });
            case "title":
              return c.map(function (t, e) {
                return t === o[1] ? e : null;
              });
            default:
              return [];
          }
          return n.nodeName && n._DT_CellIndex ? [n._DT_CellIndex.column] : (t = V(d).filter(n).map(function () {
            return st(this);
          }).toArray()).length || !n.nodeName ? t : (t = V(n).closest("*[data-dt-column]")).length ? [t.data("dt-column")] : [];
        }, i, l);
        var i, e, l, s, u, c, d;
      }, 1);
      return t.selector.cols = n, t.selector.opts = a, t;
    }), t("columns().header()", "column().header()", function (n) {
      return this.iterator("column", function (t, e) {
        return de(t, e, n);
      }, 1);
    }), t("columns().footer()", "column().footer()", function (n) {
      return this.iterator("column", function (t, e) {
        return t.aoFooter.length ? t.aoFooter[void 0 !== n ? n : 0][e].cell : null;
      }, 1);
    }), t("columns().data()", "column().data()", function () {
      return this.iterator("column-rows", ce, 1);
    }), t("columns().render()", "column().render()", function (o) {
      return this.iterator("column-rows", function (t, e, n, a, r) {
        return ce(t, e, 0, 0, r, o);
      }, 1);
    }), t("columns().dataSrc()", "column().dataSrc()", function () {
      return this.iterator("column", function (t, e) {
        return t.aoColumns[e].mData;
      }, 1);
    }), t("columns().cache()", "column().cache()", function (o) {
      return this.iterator("column-rows", function (t, e, n, a, r) {
        return v(t.aoData, r, "search" === o ? "_aFilterData" : "_aSortData", e);
      }, 1);
    }), t("columns().init()", "column().init()", function () {
      return this.iterator("column", function (t, e) {
        return t.aoColumns[e];
      }, 1);
    }), t("columns().nodes()", "column().nodes()", function () {
      return this.iterator("column-rows", function (t, e, n, a, r) {
        return v(t.aoData, r, "anCells", e);
      }, 1);
    }), t("columns().titles()", "column().title()", function (n, a) {
      return this.iterator("column", function (t, e) {
        "number" == typeof n && (a = n, n = void 0);
        e = V("span.dt-column-title", this.column(e).header(a));
        return void 0 !== n ? (e.html(n), this) : e.html();
      }, 1);
    }), t("columns().types()", "column().type()", function () {
      return this.iterator("column", function (t, e) {
        e = t.aoColumns[e].sType;
        return e || B(t), e;
      }, 1);
    }), t("columns().visible()", "column().visible()", function (n, a) {
      var e = this,
        r = [],
        t = this.iterator("column", function (t, e) {
          if (void 0 === n) return t.aoColumns[e].bVisible;
          !function (t, e, n) {
            var a,
              r,
              o = t.aoColumns,
              i = o[e],
              l = t.aoData;
            if (void 0 === n) return i.bVisible;
            if (i.bVisible === n) return !1;
            if (n) for (var s = f(o, "bVisible").indexOf(!0, e + 1), u = 0, c = l.length; u < c; u++) l[u] && (r = l[u].nTr, a = l[u].anCells, r) && r.insertBefore(a[e], a[s] || null);else V(f(t.aoData, "anCells", e)).detach();
            return i.bVisible = n, Bt(t), !0;
          }(t, e, n) || r.push(e);
        });
      return void 0 !== n && this.iterator("table", function (t) {
        St(t, t.aoHeader), St(t, t.aoFooter), t.aiDisplay.length || V(t.nTBody).find("td[colspan]").attr("colspan", W(t)), Gt(t), e.iterator("column", function (t, e) {
          r.includes(e) && tt(t, null, "column-visibility", [t, e, n, a]);
        }), r.length && (void 0 === a || a) && e.columns.adjust();
      }), t;
    }), t("columns().widths()", "column().width()", function () {
      var t = this.columns(":visible").count(),
        t = V("<tr>").html("<td>" + Array(t).join("</td><td>") + "</td>"),
        n = (V(this.table().body()).append(t), t.children().map(function () {
          return V(this).outerWidth();
        }));
      return t.remove(), this.iterator("column", function (t, e) {
        t = T(t, e);
        return null !== t ? n[t] : 0;
      }, 1);
    }), t("columns().indexes()", "column().index()", function (n) {
      return this.iterator("column", function (t, e) {
        return "visible" === n ? T(t, e) : e;
      }, 1);
    }), e("columns.adjust()", function () {
      return this.iterator("table", function (t) {
        M(t);
      }, 1);
    }), e("column.index()", function (t, e) {
      var n;
      if (0 !== this.context.length) return n = this.context[0], "fromVisible" === t || "toData" === t ? H(n, e) : "fromData" === t || "toVisible" === t ? T(n, e) : void 0;
    }), e("column()", function (t, e) {
      return le(this.columns(t, e));
    }), e("cells()", function (g, t, m) {
      var a, r, o, i, l, s, e;
      return V.isPlainObject(g) && (void 0 === g.row ? (m = g, g = null) : (m = t, t = null)), V.isPlainObject(t) && (m = t, t = null), null == t ? this.iterator("table", function (t) {
        return a = t, t = g, e = ie(m), d = a.aoData, f = he(a, e), n = b(v(d, f, "anCells")), h = V(E([], n)), p = a.aoColumns.length, oe("cell", t, function (t) {
          var e,
            n = "function" == typeof t;
          if (null == t || n) {
            for (o = [], i = 0, l = f.length; i < l; i++) for (r = f[i], s = 0; s < p; s++) u = {
              row: r,
              column: s
            }, (!n || (c = d[r], t(u, G(a, r, s), c.anCells ? c.anCells[s] : null))) && o.push(u);
            return o;
          }
          return V.isPlainObject(t) ? void 0 !== t.column && void 0 !== t.row && -1 !== f.indexOf(t.row) ? [t] : [] : (e = h.filter(t).map(function (t, e) {
            return {
              row: e._DT_CellIndex.row,
              column: e._DT_CellIndex.column
            };
          }).toArray()).length || !t.nodeName ? e : (c = V(t).closest("*[data-dt-row]")).length ? [{
            row: c.data("dt-row"),
            column: c.data("dt-column")
          }] : [];
        }, a, e);
        var a, e, r, o, i, l, s, u, c, d, f, n, h, p;
      }) : (e = m ? {
        page: m.page,
        order: m.order,
        search: m.search
      } : {}, a = this.columns(t, e), r = this.rows(g, e), e = this.iterator("table", function (t, e) {
        var n = [];
        for (o = 0, i = r[e].length; o < i; o++) for (l = 0, s = a[e].length; l < s; l++) n.push({
          row: r[e][o],
          column: a[e][l]
        });
        return n;
      }, 1), e = m && m.selected ? this.cells(e, m) : e, V.extend(e.selector, {
        cols: t,
        rows: g,
        opts: m
      }), e);
    }), t("cells().nodes()", "cell().node()", function () {
      return this.iterator("cell", function (t, e, n) {
        t = t.aoData[e];
        return t && t.anCells ? t.anCells[n] : void 0;
      }, 1);
    }), e("cells().data()", function () {
      return this.iterator("cell", function (t, e, n) {
        return G(t, e, n);
      }, 1);
    }), t("cells().cache()", "cell().cache()", function (a) {
      return a = "search" === a ? "_aFilterData" : "_aSortData", this.iterator("cell", function (t, e, n) {
        return t.aoData[e][a][n];
      }, 1);
    }), t("cells().render()", "cell().render()", function (a) {
      return this.iterator("cell", function (t, e, n) {
        return G(t, e, n, a);
      }, 1);
    }), t("cells().indexes()", "cell().index()", function () {
      return this.iterator("cell", function (t, e, n) {
        return {
          row: e,
          column: n,
          columnVisible: T(t, n)
        };
      }, 1);
    }), t("cells().invalidate()", "cell().invalidate()", function (a) {
      return this.iterator("cell", function (t, e, n) {
        gt(t, e, a, n);
      });
    }), e("cell()", function (t, e, n) {
      return le(this.cells(t, e, n));
    }), e("cell().data()", function (t) {
      var e,
        n,
        a,
        r,
        o,
        i = this.context,
        l = this[0];
      return void 0 === t ? i.length && l.length ? G(i[0], l[0].row, l[0].column) : void 0 : (e = i[0], n = l[0].row, a = l[0].column, r = e.aoColumns[a], o = e.aoData[n]._aData, r.fnSetData(o, t, {
        settings: e,
        row: n,
        col: a
      }), gt(i[0], l[0].row, "data", l[0].column), this);
    }), e("order()", function (e, t) {
      var n = this.context,
        a = Array.prototype.slice.call(arguments);
      return void 0 === e ? 0 !== n.length ? n[0].aaSorting : void 0 : ("number" == typeof e ? e = [[e, t]] : 1 < a.length && (e = a), this.iterator("table", function (t) {
        t.aaSorting = Array.isArray(e) ? e.slice() : e;
      }));
    }), e("order.listener()", function (e, n, a) {
      return this.iterator("table", function (t) {
        Vt(t, e, {}, n, a);
      });
    }), e("order.fixed()", function (e) {
      var t;
      return e ? this.iterator("table", function (t) {
        t.aaSortingFixed = V.extend(!0, {}, e);
      }) : (t = (t = this.context).length ? t[0].aaSortingFixed : void 0, Array.isArray(t) ? {
        pre: t
      } : t);
    }), e(["columns().order()", "column().order()"], function (n) {
      var a = this;
      return n ? this.iterator("table", function (t, e) {
        t.aaSorting = a[e].map(function (t) {
          return [t, n];
        });
      }) : this.iterator("column", function (t, e) {
        for (var n = $t(t), a = 0, r = n.length; a < r; a++) if (n[a].col === e) return n[a].dir;
        return null;
      }, 1);
    }), t("columns().orderable()", "column().orderable()", function (n) {
      return this.iterator("column", function (t, e) {
        t = t.aoColumns[e];
        return n ? t.asSorting : t.bSortable;
      }, 1);
    }), e("processing()", function (e) {
      return this.iterator("table", function (t) {
        w(t, e);
      });
    }), e("search()", function (e, n, a, r) {
      var t = this.context;
      return void 0 === e ? 0 !== t.length ? t[0].oPreviousSearch.search : void 0 : this.iterator("table", function (t) {
        t.oFeatures.bFilter && Nt(t, "object" == typeof n ? V.extend(t.oPreviousSearch, n, {
          search: e
        }) : V.extend(t.oPreviousSearch, {
          search: e,
          regex: null !== n && n,
          smart: null === a || a,
          caseInsensitive: null === r || r
        }));
      });
    }), e("search.fixed()", function (e, n) {
      var t = this.iterator(!0, "table", function (t) {
        t = t.searchFixed;
        return e ? void 0 === n ? t[e] : (null === n ? delete t[e] : t[e] = n, this) : Object.keys(t);
      });
      return void 0 !== e && void 0 === n ? t[0] : t;
    }), t("columns().search()", "column().search()", function (a, r, o, i) {
      return this.iterator("column", function (t, e) {
        var n = t.aoPreSearchCols;
        if (void 0 === a) return n[e].search;
        t.oFeatures.bFilter && ("object" == typeof r ? V.extend(n[e], r, {
          search: a
        }) : V.extend(n[e], {
          search: a,
          regex: null !== r && r,
          smart: null === o || o,
          caseInsensitive: null === i || i
        }), Nt(t, t.oPreviousSearch));
      });
    }), e(["columns().search.fixed()", "column().search.fixed()"], function (n, a) {
      var t = this.iterator(!0, "column", function (t, e) {
        t = t.aoColumns[e].searchFixed;
        return n ? void 0 === a ? t[n] : (null === a ? delete t[n] : t[n] = a, this) : Object.keys(t);
      });
      return void 0 !== n && void 0 === a ? t[0] : t;
    }), e("state()", function (t, e) {
      var n;
      return t ? (n = V.extend(!0, {}, t), this.iterator("table", function (t) {
        !1 !== e && (n.time = +new Date() + 100), Jt(t, n, function () {});
      })) : this.context.length ? this.context[0].oSavedState : null;
    }), e("state.clear()", function () {
      return this.iterator("table", function (t) {
        t.fnStateSaveCallback.call(t.oInstance, t, {});
      });
    }), e("state.loaded()", function () {
      return this.context.length ? this.context[0].oLoadedState : null;
    }), e("state.save()", function () {
      return this.iterator("table", function (t) {
        Gt(t);
      });
    }), $.use = function (t, e) {
      "lib" === e || t.fn ? V = t : "win" == e || t.document ? _ = (q = t).document : "datetime" !== e && "DateTime" !== t.type || ($.DateTime = t);
    }, $.factory = function (t, e) {
      var n = !1;
      return t && t.document && (_ = (q = t).document), e && e.fn && e.fn.jquery && (V = e, n = !0), n;
    }, $.versionCheck = function (t, e) {
      for (var n, a, r = (e || $.version).split("."), o = t.split("."), i = 0, l = o.length; i < l; i++) if ((n = parseInt(r[i], 10) || 0) !== (a = parseInt(o[i], 10) || 0)) return a < n;
      return !0;
    }, $.isDataTable = function (t) {
      var r = V(t).get(0),
        o = !1;
      return t instanceof $.Api || (V.each($.settings, function (t, e) {
        var n = e.nScrollHead ? V("table", e.nScrollHead)[0] : null,
          a = e.nScrollFoot ? V("table", e.nScrollFoot)[0] : null;
        e.nTable !== r && n !== r && a !== r || (o = !0);
      }), o);
    }, $.tables = function (e) {
      var t = !1,
        n = (V.isPlainObject(e) && (t = e.api, e = e.visible), $.settings.filter(function (t) {
          return !(e && !V(t.nTable).is(":visible"));
        }).map(function (t) {
          return t.nTable;
        }));
      return t ? new U(n) : n;
    }, $.camelToHungarian = z, e("$()", function (t, e) {
      e = this.rows(e).nodes(), e = V(e);
      return V([].concat(e.filter(t).toArray(), e.find(t).toArray()));
    }), V.each(["on", "one", "off"], function (t, n) {
      e(n + "()", function () {
        var t = Array.prototype.slice.call(arguments),
          e = (t[0] = t[0].split(/\s/).map(function (t) {
            return t.match(/\.dt\b/) ? t : t + ".dt";
          }).join(" "), V(this.tables().nodes()));
        return e[n].apply(e, t), this;
      });
    }), e("clear()", function () {
      return this.iterator("table", function (t) {
        pt(t);
      });
    }), e("error()", function (e) {
      return this.iterator("table", function (t) {
        Z(t, 0, e);
      });
    }), e("settings()", function () {
      return new U(this.context, this.context);
    }), e("init()", function () {
      var t = this.context;
      return t.length ? t[0].oInit : null;
    }), e("data()", function () {
      return this.iterator("table", function (t) {
        return f(t.aoData, "_aData");
      }).flatten();
    }), e("trigger()", function (e, n, a) {
      return this.iterator("table", function (t) {
        return tt(t, null, e, n, a);
      }).flatten();
    }), e("ready()", function (t) {
      var e = this.context;
      return t ? this.tables().every(function () {
        this.context[0]._bInitComplete ? t.call(this) : this.on("init", function () {
          t.call(this);
        });
      }) : e.length ? e[0]._bInitComplete || !1 : null;
    }), e("destroy()", function (c) {
      return c = c || !1, this.iterator("table", function (t) {
        var e = t.oClasses,
          n = t.nTable,
          a = t.nTBody,
          r = t.nTHead,
          o = t.nTFoot,
          i = V(n),
          a = V(a),
          l = V(t.nTableWrapper),
          s = t.aoData.map(function (t) {
            return t ? t.nTr : null;
          }),
          u = e.order,
          o = (t.bDestroying = !0, tt(t, "aoDestroyCallback", "destroy", [t], !0), c || new U(t).columns().visible(!0), l.off(".DT").find(":not(tbody *)").off(".DT"), V(q).off(".DT-" + t.sInstance), n != r.parentNode && (i.children("thead").detach(), i.append(r)), o && n != o.parentNode && (i.children("tfoot").detach(), i.append(o)), t.colgroup.remove(), t.aaSorting = [], t.aaSortingFixed = [], Yt(t), V("th, td", r).removeClass(u.canAsc + " " + u.canDesc + " " + u.isAsc + " " + u.isDesc).css("width", ""), a.children().detach(), a.append(s), t.nTableWrapper.parentNode),
          r = t.nTableWrapper.nextSibling,
          u = c ? "remove" : "detach",
          a = (i[u](), l[u](), !c && o && (o.insertBefore(n, r), i.css("width", t.sDestroyWidth).removeClass(e.table)), $.settings.indexOf(t));
        -1 !== a && $.settings.splice(a, 1);
      });
    }), V.each(["column", "row", "cell"], function (t, s) {
      e(s + "s().every()", function (a) {
        var r,
          o = this.selector.opts,
          i = this,
          l = 0;
        return this.iterator("every", function (t, e, n) {
          r = i[s](e, o), "cell" === s ? a.call(r, r[0][0].row, r[0][0].column, n, l) : a.call(r, e, n, l), l++;
        });
      });
    }), e("i18n()", function (t, e, n) {
      var a = this.context[0],
        t = J(t)(a.oLanguage);
      return "string" == typeof (t = V.isPlainObject(t = void 0 === t ? e : t) ? void 0 !== n && void 0 !== t[n] ? t[n] : t._ : t) ? t.replace("%d", n) : t;
    }), $.version = "2.0.8", $.settings = [], $.models = {}, $.models.oSearch = {
      caseInsensitive: !0,
      search: "",
      regex: !1,
      smart: !0,
      return: !1
    }, $.models.oRow = {
      nTr: null,
      anCells: null,
      _aData: [],
      _aSortData: null,
      _aFilterData: null,
      _sFilterRow: null,
      src: null,
      idx: -1,
      displayData: null
    }, $.models.oColumn = {
      idx: null,
      aDataSort: null,
      asSorting: null,
      bSearchable: null,
      bSortable: null,
      bVisible: null,
      _sManualType: null,
      _bAttrSrc: !1,
      fnCreatedCell: null,
      fnGetData: null,
      fnSetData: null,
      mData: null,
      mRender: null,
      sClass: null,
      sContentPadding: null,
      sDefaultContent: null,
      sName: null,
      sSortDataType: "std",
      sSortingClass: null,
      sTitle: null,
      sType: null,
      sWidth: null,
      sWidthOrig: null,
      maxLenString: null,
      searchFixed: null
    }, $.defaults = {
      aaData: null,
      aaSorting: [[0, "asc"]],
      aaSortingFixed: [],
      ajax: null,
      aLengthMenu: [10, 25, 50, 100],
      aoColumns: null,
      aoColumnDefs: null,
      aoSearchCols: [],
      bAutoWidth: !0,
      bDeferRender: !0,
      bDestroy: !1,
      bFilter: !0,
      bInfo: !0,
      bLengthChange: !0,
      bPaginate: !0,
      bProcessing: !1,
      bRetrieve: !1,
      bScrollCollapse: !1,
      bServerSide: !1,
      bSort: !0,
      bSortMulti: !0,
      bSortCellsTop: null,
      bSortClasses: !0,
      bStateSave: !1,
      fnCreatedRow: null,
      fnDrawCallback: null,
      fnFooterCallback: null,
      fnFormatNumber: function (t) {
        return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands);
      },
      fnHeaderCallback: null,
      fnInfoCallback: null,
      fnInitComplete: null,
      fnPreDrawCallback: null,
      fnRowCallback: null,
      fnStateLoadCallback: function (t) {
        try {
          return JSON.parse((-1 === t.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + t.sInstance + "_" + location.pathname));
        } catch (t) {
          return {};
        }
      },
      fnStateLoadParams: null,
      fnStateLoaded: null,
      fnStateSaveCallback: function (t, e) {
        try {
          (-1 === t.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + t.sInstance + "_" + location.pathname, JSON.stringify(e));
        } catch (t) {}
      },
      fnStateSaveParams: null,
      iStateDuration: 7200,
      iDisplayLength: 10,
      iDisplayStart: 0,
      iTabIndex: 0,
      oClasses: {},
      oLanguage: {
        oAria: {
          orderable: ": Activate to sort",
          orderableReverse: ": Activate to invert sorting",
          orderableRemove: ": Activate to remove sorting",
          paginate: {
            first: "First",
            last: "Last",
            next: "Next",
            previous: "Previous"
          }
        },
        oPaginate: {
          sFirst: "«",
          sLast: "»",
          sNext: "›",
          sPrevious: "‹"
        },
        entries: {
          _: "entries",
          1: "entry"
        },
        sEmptyTable: "No data available in table",
        sInfo: "Showing _START_ to _END_ of _TOTAL_ _ENTRIES-TOTAL_",
        sInfoEmpty: "Showing 0 to 0 of 0 _ENTRIES-TOTAL_",
        sInfoFiltered: "(filtered from _MAX_ total _ENTRIES-MAX_)",
        sInfoPostFix: "",
        sDecimal: "",
        sThousands: ",",
        sLengthMenu: "_MENU_ _ENTRIES_ per page",
        sLoadingRecords: "Loading...",
        sProcessing: "",
        sSearch: "Search:",
        sSearchPlaceholder: "",
        sUrl: "",
        sZeroRecords: "No matching records found"
      },
      oSearch: V.extend({}, $.models.oSearch),
      layout: {
        topStart: "pageLength",
        topEnd: "search",
        bottomStart: "info",
        bottomEnd: "paging"
      },
      sDom: null,
      searchDelay: null,
      sPaginationType: "full_numbers",
      sScrollX: "",
      sScrollXInner: "",
      sScrollY: "",
      sServerMethod: "GET",
      renderer: null,
      rowId: "DT_RowId",
      caption: null
    }, k($.defaults), $.defaults.column = {
      aDataSort: null,
      iDataSort: -1,
      ariaTitle: "",
      asSorting: ["asc", "desc", ""],
      bSearchable: !0,
      bSortable: !0,
      bVisible: !0,
      fnCreatedCell: null,
      mData: null,
      mRender: null,
      sCellType: "td",
      sClass: "",
      sContentPadding: "",
      sDefaultContent: null,
      sName: "",
      sSortDataType: "std",
      sTitle: null,
      sType: null,
      sWidth: null
    }, k($.defaults.column), $.models.oSettings = {
      oFeatures: {
        bAutoWidth: null,
        bDeferRender: null,
        bFilter: null,
        bInfo: !0,
        bLengthChange: !0,
        bPaginate: null,
        bProcessing: null,
        bServerSide: null,
        bSort: null,
        bSortMulti: null,
        bSortClasses: null,
        bStateSave: null
      },
      oScroll: {
        bCollapse: null,
        iBarWidth: 0,
        sX: null,
        sXInner: null,
        sY: null
      },
      oLanguage: {
        fnInfoCallback: null
      },
      oBrowser: {
        bScrollbarLeft: !1,
        barWidth: 0
      },
      ajax: null,
      aanFeatures: [],
      aoData: [],
      aiDisplay: [],
      aiDisplayMaster: [],
      aIds: {},
      aoColumns: [],
      aoHeader: [],
      aoFooter: [],
      oPreviousSearch: {},
      searchFixed: {},
      aoPreSearchCols: [],
      aaSorting: null,
      aaSortingFixed: [],
      sDestroyWidth: 0,
      aoRowCallback: [],
      aoHeaderCallback: [],
      aoFooterCallback: [],
      aoDrawCallback: [],
      aoRowCreatedCallback: [],
      aoPreDrawCallback: [],
      aoInitComplete: [],
      aoStateSaveParams: [],
      aoStateLoadParams: [],
      aoStateLoaded: [],
      sTableId: "",
      nTable: null,
      nTHead: null,
      nTFoot: null,
      nTBody: null,
      nTableWrapper: null,
      bInitialised: !1,
      aoOpenRows: [],
      sDom: null,
      searchDelay: null,
      sPaginationType: "two_button",
      pagingControls: 0,
      iStateDuration: 0,
      aoStateSave: [],
      aoStateLoad: [],
      oSavedState: null,
      oLoadedState: null,
      bAjaxDataGet: !0,
      jqXHR: null,
      json: void 0,
      oAjaxData: void 0,
      sServerMethod: null,
      fnFormatNumber: null,
      aLengthMenu: null,
      iDraw: 0,
      bDrawing: !1,
      iDrawError: -1,
      _iDisplayLength: 10,
      _iDisplayStart: 0,
      _iRecordsTotal: 0,
      _iRecordsDisplay: 0,
      oClasses: {},
      bFiltered: !1,
      bSorted: !1,
      bSortCellsTop: null,
      oInit: null,
      aoDestroyCallback: [],
      fnRecordsTotal: function () {
        return "ssp" == et(this) ? +this._iRecordsTotal : this.aiDisplayMaster.length;
      },
      fnRecordsDisplay: function () {
        return "ssp" == et(this) ? +this._iRecordsDisplay : this.aiDisplay.length;
      },
      fnDisplayEnd: function () {
        var t = this._iDisplayLength,
          e = this._iDisplayStart,
          n = e + t,
          a = this.aiDisplay.length,
          r = this.oFeatures,
          o = r.bPaginate;
        return r.bServerSide ? !1 === o || -1 === t ? e + a : Math.min(e + t, this._iRecordsDisplay) : !o || a < n || -1 === t ? a : n;
      },
      oInstance: null,
      sInstance: null,
      iTabIndex: 0,
      nScrollHead: null,
      nScrollFoot: null,
      aLastSort: [],
      oPlugins: {},
      rowIdFn: null,
      rowId: null,
      caption: "",
      captionNode: null,
      colgroup: null
    }, $.ext.pager);
  V.extend(be, {
    simple: function () {
      return ["previous", "next"];
    },
    full: function () {
      return ["first", "previous", "next", "last"];
    },
    numbers: function () {
      return ["numbers"];
    },
    simple_numbers: function () {
      return ["previous", "numbers", "next"];
    },
    full_numbers: function () {
      return ["first", "previous", "numbers", "next", "last"];
    },
    first_last: function () {
      return ["first", "last"];
    },
    first_last_numbers: function () {
      return ["first", "numbers", "last"];
    },
    _numbers: Ne,
    numbers_length: 7
  }), V.extend(!0, $.ext.renderer, {
    pagingButton: {
      _: function (t, e, n, a, r) {
        var t = t.oClasses.paging,
          o = [t.button];
        return a && o.push(t.active), r && o.push(t.disabled), {
          display: a = "ellipsis" === e ? V('<span class="ellipsis"></span>').html(n)[0] : V("<button>", {
            class: o.join(" "),
            role: "link",
            type: "button"
          }).html(n),
          clicker: a
        };
      }
    },
    pagingContainer: {
      _: function (t, e) {
        return e;
      }
    }
  });
  function De(t) {
    return t.replace(/[\W]/g, "_");
  }
  function xe(t, e, n, a, r) {
    return q.moment ? t[e](r) : q.luxon ? t[n](r) : a ? t[a](r) : t;
  }
  var Se = !1;
  function Te(t, e, n) {
    var a;
    if (q.moment) {
      if (!(a = q.moment.utc(t, e, n, !0)).isValid()) return null;
    } else if (q.luxon) {
      if (!(a = e && "string" == typeof t ? q.luxon.DateTime.fromFormat(t, e) : q.luxon.DateTime.fromISO(t)).isValid) return null;
      a.setLocale(n);
    } else e ? (Se || alert("DataTables warning: Formatted date without Moment.js or Luxon - https://datatables.net/tn/17"), Se = !0) : a = new Date(t);
    return a;
  }
  function we(s) {
    return function (a, r, o, i) {
      0 === arguments.length ? (o = "en", a = r = null) : 1 === arguments.length ? (o = "en", r = a, a = null) : 2 === arguments.length && (o = r, r = a, a = null);
      var l = "datetime" + (r ? "-" + De(r) : "");
      return $.ext.type.order[l] || $.type(l, {
        detect: function (t) {
          return t === l && l;
        },
        order: {
          pre: function (t) {
            return t.valueOf();
          }
        },
        className: "dt-right"
      }), function (t, e) {
        var n;
        return null == t && (t = "--now" === i ? (n = new Date(), new Date(Date.UTC(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds()))) : ""), "type" === e ? l : "" === t ? "sort" !== e ? "" : Te("0000-01-01 00:00:00", null, o) : !(null === r || a !== r || "sort" === e || "type" === e || t instanceof Date) || null === (n = Te(t, a, o)) ? t : "sort" === e ? n : (t = null === r ? xe(n, "toDate", "toJSDate", "")[s]() : xe(n, "format", "toFormat", "toISOString", r), "display" === e ? u(t) : t);
      };
    };
  }
  var _e = ",",
    Ce = ".";
  if (void 0 !== q.Intl) try {
    for (var Ie = new Intl.NumberFormat().formatToParts(100000.1), a = 0; a < Ie.length; a++) "group" === Ie[a].type ? _e = Ie[a].value : "decimal" === Ie[a].type && (Ce = Ie[a].value);
  } catch (t) {}
  $.datetime = function (n, a) {
    var r = "datetime-detect-" + De(n);
    a = a || "en", $.ext.type.order[r] || $.type(r, {
      detect: function (t) {
        var e = Te(t, n, a);
        return !("" !== t && !e) && r;
      },
      order: {
        pre: function (t) {
          return Te(t, n, a) || 0;
        }
      },
      className: "dt-right"
    });
  }, $.render = {
    date: we("toLocaleDateString"),
    datetime: we("toLocaleString"),
    time: we("toLocaleTimeString"),
    number: function (r, o, i, l, s) {
      return null == r && (r = _e), null == o && (o = Ce), {
        display: function (t) {
          if ("number" != typeof t && "string" != typeof t) return t;
          if ("" === t || null === t) return t;
          var e = t < 0 ? "-" : "",
            n = parseFloat(t),
            a = Math.abs(n);
          if (1e11 <= a || a < 1e-4 && 0 !== a) return (a = n.toExponential(i).split(/e\+?/))[0] + " x 10<sup>" + a[1] + "</sup>";
          if (isNaN(n)) return u(t);
          n = n.toFixed(i), t = Math.abs(n);
          a = parseInt(t, 10), n = i ? o + (t - a).toFixed(i).substring(2) : "";
          return (e = 0 === a && 0 === parseFloat(n) ? "" : e) + (l || "") + a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, r) + n + (s || "");
        }
      };
    },
    text: function () {
      return {
        display: u,
        filter: u
      };
    }
  };
  var i = $.ext.type,
    Ae = ($.type = function (a, t, e) {
      if (!t) return {
        className: i.className[a],
        detect: i.detect.find(function (t) {
          return t.name === a;
        }),
        order: {
          pre: i.order[a + "-pre"],
          asc: i.order[a + "-asc"],
          desc: i.order[a + "-desc"]
        },
        render: i.render[a],
        search: i.search[a]
      };
      function n(t, e) {
        i[t][a] = e;
      }
      function r(n) {
        function t(t, e) {
          return !0 === (t = n(t, e)) ? a : t;
        }
        Object.defineProperty(t, "name", {
          value: a
        });
        var e = i.detect.findIndex(function (t) {
          return t.name === a;
        });
        -1 === e ? i.detect.unshift(t) : i.detect.splice(e, 1, t);
      }
      function o(t) {
        i.order[a + "-pre"] = t.pre, i.order[a + "-asc"] = t.asc, i.order[a + "-desc"] = t.desc;
      }
      void 0 === e && (e = t, t = null), "className" === t ? n("className", e) : "detect" === t ? r(e) : "order" === t ? o(e) : "render" === t ? n("render", e) : "search" === t ? n("search", e) : t || (e.className && n("className", e.className), void 0 !== e.detect && r(e.detect), e.order && o(e.order), void 0 !== e.render && n("render", e.render), void 0 !== e.search && n("search", e.search));
    }, $.types = function () {
      return i.detect.map(function (t) {
        return t.name;
      });
    }, $.type("string", {
      detect: function () {
        return "string";
      },
      order: {
        pre: function (t) {
          return y(t) ? "" : "string" == typeof t ? t.toLowerCase() : t.toString ? t.toString() : "";
        }
      },
      search: fe(!1, !0)
    }), $.type("html", {
      detect: function (t) {
        return y(t) || "string" == typeof t && -1 !== t.indexOf("<") ? "html" : null;
      },
      order: {
        pre: function (t) {
          return y(t) ? "" : t.replace ? I(t).trim().toLowerCase() : t + "";
        }
      },
      search: fe(!0, !0)
    }), $.type("date", {
      className: "dt-type-date",
      detect: function (t) {
        var e;
        return (!t || t instanceof Date || N.test(t)) && (null !== (e = Date.parse(t)) && !isNaN(e) || y(t)) ? "date" : null;
      },
      order: {
        pre: function (t) {
          t = Date.parse(t);
          return isNaN(t) ? -1 / 0 : t;
        }
      }
    }), $.type("html-num-fmt", {
      className: "dt-type-numeric",
      detect: function (t, e) {
        e = e.oLanguage.sDecimal;
        return l(t, e, !0) ? "html-num-fmt" : null;
      },
      order: {
        pre: function (t, e) {
          e = e.oLanguage.sDecimal;
          return Ae(t, e, L, P);
        }
      },
      search: fe(!0, !0)
    }), $.type("html-num", {
      className: "dt-type-numeric",
      detect: function (t, e) {
        e = e.oLanguage.sDecimal;
        return l(t, e) ? "html-num" : null;
      },
      order: {
        pre: function (t, e) {
          e = e.oLanguage.sDecimal;
          return Ae(t, e, L);
        }
      },
      search: fe(!0, !0)
    }), $.type("num-fmt", {
      className: "dt-type-numeric",
      detect: function (t, e) {
        e = e.oLanguage.sDecimal;
        return o(t, e, !0) ? "num-fmt" : null;
      },
      order: {
        pre: function (t, e) {
          e = e.oLanguage.sDecimal;
          return Ae(t, e, P);
        }
      }
    }), $.type("num", {
      className: "dt-type-numeric",
      detect: function (t, e) {
        e = e.oLanguage.sDecimal;
        return o(t, e) ? "num" : null;
      },
      order: {
        pre: function (t, e) {
          e = e.oLanguage.sDecimal;
          return Ae(t, e);
        }
      }
    }), function (t, e, n, a) {
      var r;
      return 0 === t || t && "-" !== t ? "number" == (r = typeof t) || "bigint" == r ? t : +(t = (t = e ? R(t, e) : t).replace && (n && (t = t.replace(n, "")), a) ? t.replace(a, "") : t) : -1 / 0;
    });
  V.extend(!0, $.ext.renderer, {
    footer: {
      _: function (t, e, n) {
        e.addClass(n.tfoot.cell);
      }
    },
    header: {
      _: function (d, f, h) {
        f.addClass(h.thead.cell), d.oFeatures.bSort || f.addClass(h.order.none);
        var t = d.bSortCellsTop,
          e = f.closest("thead").find("tr"),
          n = f.parent().index();
        "disable" === f.attr("data-dt-order") || "disable" === f.parent().attr("data-dt-order") || !0 === t && 0 !== n || !1 === t && n !== e.length - 1 || V(d.nTable).on("order.dt.DT", function (t, e, n) {
          var a, r, o, i, l, s, u, c;
          d === e && (a = h.order, c = e.api.columns(f), r = d.aoColumns[c.flatten()[0]], o = c.orderable().includes(!0), i = "", u = c.indexes(), l = c.orderable(!0).flatten(), s = "," + n.map(function (t) {
            return t.col;
          }).join(",") + ",", f.removeClass(a.isAsc + " " + a.isDesc).toggleClass(a.none, !o).toggleClass(a.canAsc, o && l.includes("asc")).toggleClass(a.canDesc, o && l.includes("desc")), -1 !== (l = s.indexOf("," + u.toArray().join(",") + ",")) && (s = c.order(), f.addClass(s.includes("asc") ? a.isAsc : "" + s.includes("desc") ? a.isDesc : "")), 0 === l ? (u = n[0], c = r.asSorting, f.attr("aria-sort", "asc" === u.dir ? "ascending" : "descending"), i = c[u.index + 1] ? "Reverse" : "Remove") : f.removeAttr("aria-sort"), f.attr("aria-label", o ? r.ariaTitle + e.api.i18n("oAria.orderable" + i) : r.ariaTitle), o) && (f.find(".dt-column-title").attr("role", "button"), f.attr("tabindex", 0));
        });
      }
    },
    layout: {
      _: function (t, e, n) {
        var a = V("<div/>").addClass("dt-layout-row").appendTo(e);
        V.each(n, function (t, e) {
          t = e.table ? "" : "dt-" + t + " ";
          e.table && a.addClass("dt-layout-table"), V("<div/>").attr({
            id: e.id || null,
            class: "dt-layout-cell " + t + (e.className || "")
          }).append(e.contents).appendTo(a);
        });
      }
    }
  }), $.feature = {}, $.feature.register = function (t, e, n) {
    $.ext.features[t] = e, n && C.feature.push({
      cFeature: n,
      fnInit: e
    });
  }, $.feature.register("info", function (t, s) {
    var e, n, u;
    return t.oFeatures.bInfo ? (e = t.oLanguage, n = t.sTableId, u = V("<div/>", {
      class: t.oClasses.info.container
    }), s = V.extend({
      callback: e.fnInfoCallback,
      empty: e.sInfoEmpty,
      postfix: e.sInfoPostFix,
      search: e.sInfoFiltered,
      text: e.sInfo
    }, s), t.aoDrawCallback.push(function (t) {
      var e = s,
        n = u,
        a = t._iDisplayStart + 1,
        r = t.fnDisplayEnd(),
        o = t.fnRecordsTotal(),
        i = t.fnRecordsDisplay(),
        l = i ? e.text : e.empty;
      i !== o && (l += " " + e.search), l += e.postfix, l = ee(t, l), e.callback && (l = e.callback.call(t.oInstance, t, a, r, o, i, l)), n.html(l), tt(t, null, "info", [t, n[0], l]);
    }), t._infoEl || (u.attr({
      "aria-live": "polite",
      id: n + "_info",
      role: "status"
    }), V(t.nTable).attr("aria-describedby", n + "_info"), t._infoEl = u), u) : null;
  }, "i");
  var Le = 0;
  function Fe(t, e, n, a) {
    var r = t.oLanguage.oPaginate,
      o = {
        display: "",
        active: !1,
        disabled: !1
      };
    switch (e) {
      case "ellipsis":
        o.display = "&#x2026;", o.disabled = !0;
        break;
      case "first":
        o.display = r.sFirst, 0 === n && (o.disabled = !0);
        break;
      case "previous":
        o.display = r.sPrevious, 0 === n && (o.disabled = !0);
        break;
      case "next":
        o.display = r.sNext, 0 !== a && n !== a - 1 || (o.disabled = !0);
        break;
      case "last":
        o.display = r.sLast, 0 !== a && n !== a - 1 || (o.disabled = !0);
        break;
      default:
        "number" == typeof e && (o.display = t.fnFormatNumber(e + 1), n === e) && (o.active = !0);
    }
    return o;
  }
  function Ne(t, e, n, a) {
    var r = [],
      o = Math.floor(n / 2),
      i = a ? 2 : 1,
      l = a ? 1 : 0;
    return e <= n ? r = h(0, e) : 1 === n ? r = [t] : 3 === n ? t <= 1 ? r = [0, 1, "ellipsis"] : e - 2 <= t ? (r = h(e - 2, e)).unshift("ellipsis") : r = ["ellipsis", t, "ellipsis"] : t <= o ? ((r = h(0, n - i)).push("ellipsis"), a && r.push(e - 1)) : e - 1 - o <= t ? ((r = h(e - (n - i), e)).unshift("ellipsis"), a && r.unshift(0)) : ((r = h(t - o + i, t + o - l)).push("ellipsis"), r.unshift("ellipsis"), a && (r.push(e - 1), r.unshift(0))), r;
  }
  $.feature.register("search", function (n, t) {
    var e, a, r, o, i, l, s, u, c, d;
    return n.oFeatures.bFilter ? (e = n.oClasses.search, a = n.sTableId, c = n.oLanguage, r = n.oPreviousSearch, o = '<input type="search" class="' + e.input + '"/>', -1 === (t = V.extend({
      placeholder: c.sSearchPlaceholder,
      text: c.sSearch
    }, t)).text.indexOf("_INPUT_") && (t.text += "_INPUT_"), t.text = ee(n, t.text), c = t.text.match(/_INPUT_$/), s = t.text.match(/^_INPUT_/), i = t.text.replace(/_INPUT_/, ""), l = "<label>" + t.text + "</label>", s ? l = "_INPUT_<label>" + i + "</label>" : c && (l = "<label>" + i + "</label>_INPUT_"), (s = V("<div>").addClass(e.container).append(l.replace(/_INPUT_/, o))).find("label").attr("for", "dt-search-" + Le), s.find("input").attr("id", "dt-search-" + Le), Le++, u = function (t) {
      var e = this.value;
      r.return && "Enter" !== t.key || e != r.search && (r.search = e, Nt(n, r), n._iDisplayStart = 0, S(n));
    }, c = null !== n.searchDelay ? n.searchDelay : 0, d = V("input", s).val(r.search).attr("placeholder", t.placeholder).on("keyup.DT search.DT input.DT paste.DT cut.DT", c ? $.util.debounce(u, c) : u).on("mouseup.DT", function (t) {
      setTimeout(function () {
        u.call(d[0], t);
      }, 10);
    }).on("keypress.DT", function (t) {
      if (13 == t.keyCode) return !1;
    }).attr("aria-controls", a), V(n.nTable).on("search.dt.DT", function (t, e) {
      n === e && d[0] !== _.activeElement && d.val("function" != typeof r.search ? r.search : "");
    }), s) : null;
  }, "f"), $.feature.register("paging", function (t, e) {
    if (!t.oFeatures.bPaginate) return null;
    (e = V.extend({
      buttons: $.ext.pager.numbers_length,
      type: t.sPaginationType,
      boundaryNumbers: !0
    }, e)).numbers && (e.buttons = e.numbers);
    function n() {
      !function t(e, n, a) {
        if (!e._bInitComplete) return;
        var r = $.ext.pager[a.type],
          o = e.oLanguage.oAria.paginate || {},
          i = e._iDisplayStart,
          l = e._iDisplayLength,
          s = e.fnRecordsDisplay(),
          u = -1 === l,
          c = u ? 0 : Math.ceil(i / l),
          d = u ? 1 : Math.ceil(s / l),
          f = r().map(function (t) {
            return "numbers" === t ? Ne(c, d, a.buttons, a.boundaryNumbers) : t;
          }).flat();
        var h = [];
        for (var p = 0; p < f.length; p++) {
          var g = f[p],
            m = Fe(e, g, c, d),
            v = te(e, "pagingButton")(e, g, m.display, m.active, m.disabled);
          V(v.clicker).attr({
            "aria-controls": e.sTableId,
            "aria-disabled": m.disabled ? "true" : null,
            "aria-current": m.active ? "page" : null,
            "aria-label": o[g],
            "data-dt-idx": g,
            tabIndex: m.disabled ? -1 : e.iTabIndex
          }), "number" != typeof g && V(v.clicker).addClass(g), Qt(v.clicker, {
            action: g
          }, function (t) {
            t.preventDefault(), Ht(e, t.data.action, !0);
          }), h.push(v.display);
        }
        i = te(e, "pagingContainer")(e, h);
        u = n.find(_.activeElement).data("dt-idx");
        n.empty().append(i);
        void 0 !== u && n.find("[data-dt-idx=" + u + "]").trigger("focus");
        h.length && 1 < a.numbers && V(n).height() >= 2 * V(h[0]).outerHeight() - 10 && t(e, n, V.extend({}, a, {
          numbers: a.numbers - 2
        }));
      }(t, a, e);
    }
    var a = V("<div/>").addClass(t.oClasses.paging.container + " paging_" + e.type);
    return t.aoDrawCallback.push(n), V(t.nTable).on("column-sizing.dt.DT", n), a;
  }, "p");
  var je = 0;
  return $.feature.register("pageLength", function (a, t) {
    var e = a.oFeatures;
    if (!e.bPaginate || !e.bLengthChange) return null;
    t = V.extend({
      menu: a.aLengthMenu,
      text: a.oLanguage.sLengthMenu
    }, t);
    var e = a.oClasses.length,
      n = a.sTableId,
      r = t.menu,
      o = [],
      i = [];
    if (Array.isArray(r[0])) o = r[0], i = r[1];else for (p = 0; p < r.length; p++) V.isPlainObject(r[p]) ? (o.push(r[p].value), i.push(r[p].label)) : (o.push(r[p]), i.push(r[p]));
    for (var l = t.text.match(/_MENU_$/), s = t.text.match(/^_MENU_/), u = t.text.replace(/_MENU_/, ""), t = "<label>" + t.text + "</label>", c = (s ? t = "_MENU_<label>" + u + "</label>" : l && (t = "<label>" + u + "</label>_MENU_"), V("<div/>").addClass(e.container).append(t.replace("_MENU_", "<span></span>"))), d = [], f = (c.find("label")[0].childNodes.forEach(function (t) {
        t.nodeType === Node.TEXT_NODE && d.push({
          el: t,
          text: t.textContent
        });
      }), function (e) {
        d.forEach(function (t) {
          t.el.textContent = ee(a, t.text, e);
        });
      }), h = V("<select/>", {
        name: n + "_length",
        "aria-controls": n,
        class: e.select
      }), p = 0; p < o.length; p++) h[0][p] = new Option("number" == typeof i[p] ? a.fnFormatNumber(i[p]) : i[p], o[p]);
    return c.find("label").attr("for", "dt-length-" + je), h.attr("id", "dt-length-" + je), je++, c.find("span").replaceWith(h), V("select", c).val(a._iDisplayLength).on("change.DT", function () {
      Mt(a, V(this).val()), S(a);
    }), V(a.nTable).on("length.dt.DT", function (t, e, n) {
      a === e && (V("select", c).val(n), f(n));
    }), f(a._iDisplayLength), c;
  }, "l"), ((V.fn.dataTable = $).$ = V).fn.dataTableSettings = $.settings, V.fn.dataTableExt = $.ext, V.fn.DataTable = function (t) {
    return V(this).dataTable(t).api();
  }, V.each($, function (t, e) {
    V.fn.DataTable[t] = e;
  }), $;
});

/*! DataTables styling integration
 * © SpryMedia Ltd - datatables.net/license
 */
!function (t) {
  var o, d;
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery"), __webpack_require__(/*! datatables.net */ "datatables.net")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (e) {
    return t(e, window, document);
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(function (e, n, t) {
  "use strict";

  return e.fn.dataTable;
});

/***/ }),

/***/ "./src/datatables/myColumns/polygonNewsColumns.js":
/*!********************************************************!*\
  !*** ./src/datatables/myColumns/polygonNewsColumns.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNewsColumns: () => (/* binding */ getNewsColumns)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util */ "./src/util.js");

function renderArrow(data, condition) {
  var cls = condition > 0 ? 'success' : 'primary';
  var arrow = condition > 0 ? '270' : '90';
  return `<span class="text-${cls}">
    <i class="fa-solid fa-play fa-rotate-${arrow}"></i> ${data}</span>`;
}
function getArrow(condition) {
  var arrow = condition >= 0 ? '270' : '90';
  return `<i class="fa-solid fa-play fa-rotate-${arrow}"></i>`;
}
function getPlusOrMinus(val) {
  return val > 0 ? '+' : '';
}
function renderCurrency(data, row, key) {
  var cls = parseInt(row[key]) > 0 ? 'success' : 'primary';
  return `<span class="text-${cls}">$${(0,_util__WEBPACK_IMPORTED_MODULE_0__.formatCurrency)(data.toFixed(2))}</span>`;
}
function renderColor(data, row, condition) {
  // TodaysProfitLoss
  var cls = condition ? 'success' : 'primary';
  return `<span class="text-${cls}">${data}</span>`;
}
function getTickerHtml(row) {
  var html = "";
  // var url = window.location.href;
  // url = url.href;
  row?.tickers.forEach((ticker, i) => {
    var target = "";
    var href = "";
    target = `target="_blank"`;
    href = `href="trade.html?symbol=${ticker}"`;
    html += `<a 
            ${target}
            ${href}
            class="bg-glass px-2 text-muted">
        ${ticker}</a>`;
  });
  return html;
}
const getNewsColumns = () => {
  return [
  //         {
  //             data: 'image_url', name: '', width: 200, render: 

  //             function (data, type, row, meta) {
  //                 /*<a title="${row?.publisher.name}:${row?.article_url}"
  //                     href="${row?.article_url}" target="_blank">
  //  </a>
  //                 */
  //                return `

  //                     <div style="display: flex;
  //                     align-items: center;
  //                     justify-content: center;
  //                     overflow: hidden;
  //                     width:199px;
  //                     max-height:350px;
  //                     " 
  //                     class="">
  //                         <img style="object-fit: cover;" 
  //                         class="rounded"
  //                         src="${data}"/>
  //                     </div>
  //               `;
  //             }
  //         },
  {
    data: 'published_utc',
    name: 'Articles',
    render: function (data, type, row, meta) {
      var html = getTickerHtml(row);
      var dt = new Date(data);
      return `<div>
               <span class="text-muted">
                <span style="background-color:rgba(255,255,255,0.1);margin-right: .25rem" 
                    class="px-1 py-1 rounded float-end">
                    <a title="${row?.publisher.name}:${row?.article_url}"
                    href="${row?.article_url}" target="_blank">
                        <img height="14"src="${row?.publisher.logo_url}" />
                    </a>
                </span>
                 ${dt.toLocaleString()}
               </span>
               <br/>
                <span 
                    style="white-space:normal;"
                    class="h5 m-0" 
                    title="${row?.title}">
                   <a class="text-white"
                    title="${row?.publisher.name}:${row?.article_url}"
                    href="${row?.article_url}" target="_blank"> ${row?.title} </a>
                </span>
                <br/>
                <span 
                    style="white-space:normal;"
                    title="${row?.description}" 
                    class="text-muted">
                    ${row?.description}
                </span>
                <div style="white-space:normal;"
                    class="text-start">${html}</div>
               </div>`;
    }
  }];
};

/***/ }),

/***/ "./src/datatables/newsTableClass.js":
/*!******************************************!*\
  !*** ./src/datatables/newsTableClass.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewsTable: () => (/* binding */ NewsTable)
/* harmony export */ });
/* harmony import */ var _myColumns_polygonNewsColumns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myColumns/polygonNewsColumns */ "./src/datatables/myColumns/polygonNewsColumns.js");
/* harmony import */ var _simple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simple */ "./src/datatables/simple.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
// const reports = await secEdgarApi.getReports({ symbol: 'AAPL' })



function setNews(tableCls, symbol) {
  window.p.getNews(symbol).then(array => {
    tableCls.setPollData(tableCls, array);
  }).catch(error => {
    console.log("[ERROR] setNews", error);
    setTimeout(() => {
      setNews();
    }, 1000);
  });
}
class NewsTable {
  constructor(containerId, symbol) {
    this.containerId = containerId;
    this.symbol = symbol;
    this.table = new _simple__WEBPACK_IMPORTED_MODULE_1__.SimpleTableData({
      title: `${symbol ? symbol + ' ' : ''}News`,
      containerID: this.containerId,
      columns: (0,_myColumns_polygonNewsColumns__WEBPACK_IMPORTED_MODULE_0__.getNewsColumns)(),
      dom: 't'
    });
    this.interval = null;
    this.setData();
    this.addSymbolInput();
  }
  setData() {
    setNews(this.table, this.symbol);
    this.interval = setInterval(() => {
      setNews(this.table, this.symbol);
    }, 60 * 1000);
  }
  reload() {
    clearInterval(this.interval);
    this.setData();
    this.table.updateTitle(this.symbol + " News");
  }
  addSymbolInput() {
    var $id = jquery__WEBPACK_IMPORTED_MODULE_2___default()(`#${this.containerId}_title h4`);
    $id.append(`
            <input 
            class="text-uppercase p-1 rounded text-white font-weight-bold" 
            value="" 
            placeholder="Symbol" 
            type="search" 
            style="font-size: 1rem;width: 100px;font-weight: 700;outline: 0;background-color:rgba(255,255,255,0.05);border:0px;">
            <button class="btn btn-sm btn-primary rounded px-2 py-1">
                <i class="fa-solid fa-magnifying-glass fa-rotate-90"></i>
            </button>
        `);
    this._addSymbolInputBindings();
  }
  _addSymbolInputBindings($id) {
    var id = `${this.containerId}_title h4`;
    jquery__WEBPACK_IMPORTED_MODULE_2___default()(`#${id}`).on('keypress', 'input', event => {
      if (event.which == 13) {
        var symbol = event.target.value;
        if (symbol.trim() != "") {
          this.symbol = symbol.toUpperCase();
          this.reload();
        }
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_2___default()(`#${id}`).on('click', 'button', () => {
      // todo get all parameters in a function
      var symbol = jquery__WEBPACK_IMPORTED_MODULE_2___default()(`#${id} input`).val();
      if (symbol.trim() != "") {
        this.symbol = symbol.toUpperCase();
        this.reload();
      }
    });
  }
}

/***/ }),

/***/ "./src/datatables/simple.js":
/*!**********************************!*\
  !*** ./src/datatables/simple.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleTableAjax: () => (/* binding */ SimpleTableAjax),
/* harmony export */   SimpleTableData: () => (/* binding */ SimpleTableData)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./src/util.js");
/* harmony import */ var _datatables_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datatables.min.css */ "./src/datatables/datatables.min.css");
/* harmony import */ var _datatables_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datatables.min.js */ "./src/datatables/datatables.min.js");
/* harmony import */ var _datatables_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_datatables_min_js__WEBPACK_IMPORTED_MODULE_3__);




class SimpleTableAjax {
  constructor(params) {
    this.params = params;
    this.intervalSeconds = params?.intervalSeconds || null;
    this.globalClassName = params?.globalClassName || null;
    this.dom = params?.dom || "lfrtip", this.title = params?.title || "";
    this.id = params?.containerID;
    this.tableId = `${this.id}_${(0,_util__WEBPACK_IMPORTED_MODULE_1__.getRandomAlphaNum)(10)}`;
    this.ajax = params?.ajax || null;
    this.cols = params?.columns || null;
    this.table = null;
    this.init();
  }
  createTitleContainer() {
    if (this.title !== "") {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#${this.id}`).prepend(`<div id="${this.id}_title" class="w-100 px-1">
                <h4 class="m-0">${this.title}
                    <span id="${this.tableId}_lastupdate" class="float-end text-muted h6 mb-0 mt-1">${(0,_util__WEBPACK_IMPORTED_MODULE_1__.hhmmss)()}</span>
                </h4>
            </div>`);
    }
  }
  setHeaders() {
    var html = `<thead><tr>`;
    this.cols.forEach((obj, i) => {
      var cls = obj?.headerCls ? obj?.headerCls : '';
      html += `<th class="text-muted ${cls}" style="font-weight:200;">${obj?.name}</th>`;
    });
    html += `</tr></thead>`;
    return html;
  }
  setContainer() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#${this.id}`).append(`<table id="${this.tableId}" class="display overflow compact nowrap w-100 ">
                ${this.setHeaders()}
            </table>`);
  }
  reloadTable(self) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#${self.tableId}_lastupdate`).empty();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#${self.tableId}_lastupdate`).append(`<i class="fa-solid fa-spinner fa-spin"></i>`);
    // self.table.ajax = self.updateAjaxHeader();
    // self.
    // self.table.ajax.url(self.ajax.url).load(additionalParams);
    // self.table.ajax.reload();
    self.table.destroy();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#${self.id}`).empty();
    console.log("Destroy?");
    new SimpleTableAjax({
      ...self.params,
      ajax: self.updateAjaxHeader()
    });
    setTimeout(() => {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#${self.tableId}_lastupdate`).empty();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#${self.tableId}_lastupdate`).text((0,_util__WEBPACK_IMPORTED_MODULE_1__.hhmmss)());
    }, 500);
  }
  bgAlpha(alpha) {
    return {
      'background-color': `rgba(255, 255, 255,${alpha})`
    };
  }
  updateAjaxHeader() {
    if (this.globalClassName) {
      console.log("Update header...", window.ts[this.globalClassName].accessToken);
      return {
        ...this.ajax,
        headers: {
          Authorization: `Bearer ${window.ts[this.globalClassName].accessToken}`
        }
      };
    }
  }
  init() {
    this.createTitleContainer();
    this.setContainer();
    const self = this;
    this.table = new _datatables_min_js__WEBPACK_IMPORTED_MODULE_3__(`#${this.tableId}`, {
      dom: self.dom,
      processing: false,
      serverSide: false,
      responsive: true,
      ajax: this.updateAjaxHeader(),
      columns: this.cols,
      scrollX: true,
      // scrollY: 200
      rowCallback: function (row, data, index) {
        if (index % 2 == 0) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(row).css(self.bgAlpha(.03));
        }
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(row).hover(() => jquery__WEBPACK_IMPORTED_MODULE_0___default()(row).css(self.bgAlpha(.1)), () => {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(row).css(self.bgAlpha(index % 2 == 0 ? .03 : .0));
        });
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#${this.tableId} tbody`).addClass('border-top');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#${this.tableId}_lastupdate`).text((0,_util__WEBPACK_IMPORTED_MODULE_1__.hhmmss)());

    // Conditional statement for reloading the table on an interval
    if (this.intervalSeconds) {
      const self = this;
      setInterval(function () {
        self.reloadTable(self);
      }, this.intervalSeconds);
    }
  }
}
class SimpleTableData {
  constructor(params) {
    this.params = params;
    this.dom = params?.dom || "", this.title = params?.title || "";
    this.id = params?.containerID;
    this.tableId = `${this.id}_${(0,_util__WEBPACK_IMPORTED_MODULE_1__.getRandomAlphaNum)(10)}`;
    this.cols = params?.columns || null;
    this.table = null;
    this.table = this.initTable();
    this.lastRowAdded = null;
  }
  updateTitle(txt) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#${this.id}_title_txt`).text(txt);
  }
  createTitleContainer() {
    if (this.title !== "") {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#${this.id}`).prepend(`<div id="${this.id}_title" class="w-100 px-1">
                <h4 class="m-0"><span id="${this.id}_title_txt">${this.title}</span>
                    <span id="${this.tableId}_lastupdate" class="float-end text-muted h6 mb-0 mt-1">${(0,_util__WEBPACK_IMPORTED_MODULE_1__.hhmmss)()}</span>
                </h4>
            </div>`);
    }
  }
  setHeaders() {
    var html = `<thead><tr>`;
    this.cols.forEach((obj, i) => {
      var cls = obj?.headerCls ? obj?.headerCls : '';
      var style = obj?.headerStyle ? obj?.headerStyle : '';
      html += `<th class="text-muted ${cls}" style="font-weight:200;${style}">${obj?.name}</th>`;
    });
    html += `</tr></thead>`;
    return html;
  }
  setContainer() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#${this.id}`).append(`<table id="${this.tableId}" class="display overflow compact nowrap w-100 ">
                ${this.setHeaders()}
            </table>`);
  }
  getLastRowAdded() {
    return this.lastRowAdded;
  }
  addRow(self, data) {
    self.table.rows.add(data).draw(false);
    this.lastRowAdded = data[0];
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#${self.tableId}_lastupdate`).text((0,_util__WEBPACK_IMPORTED_MODULE_1__.hhmmss)());
  }
  setStreamData(self, data) {
    self.table.clear();
    self.table.rows.add(data).draw();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#${self.tableId}_lastupdate`).text((0,_util__WEBPACK_IMPORTED_MODULE_1__.hhmmss)());
  }
  setPollData(self, data) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#${self.tableId}_lastupdate`).empty();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#${self.tableId}_lastupdate`).append(`<i class="fa-solid fa-spinner fa-spin"></i>`);
    try {
      self.table.clear();
    } catch (error) {
      console.error(error);
    }
    self.table.rows.add(data).draw();
    setTimeout(() => {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#${self.tableId}_lastupdate`).empty();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#${self.tableId}_lastupdate`).text((0,_util__WEBPACK_IMPORTED_MODULE_1__.hhmmss)());
    }, 500);
  }
  bgAlpha(alpha) {
    return {
      'background-color': `rgba(255, 255, 255,${alpha})`
    };
  }
  initTable() {
    this.createTitleContainer();
    this.setContainer();
    const self = this;
    var table = new _datatables_min_js__WEBPACK_IMPORTED_MODULE_3__(`#${this.tableId}`, {
      dom: self.dom,
      processing: false,
      serverSide: false,
      responsive: true,
      data: [],
      columns: this.cols,
      order: this.params?.order ? this.params?.order : [[0, "asc"]],
      scrollX: true,
      // scrollY: 200
      rowCallback: function (row, data, index) {
        if (index % 2 == 0) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(row).css(self.bgAlpha(.03));
        }
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(row).hover(() => jquery__WEBPACK_IMPORTED_MODULE_0___default()(row).css(self.bgAlpha(.1)), () => {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(row).css(self.bgAlpha(index % 2 == 0 ? .03 : .0));
        });
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#${this.tableId} tbody`).addClass('border-top');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#${this.tableId}_lastupdate`).text((0,_util__WEBPACK_IMPORTED_MODULE_1__.hhmmss)());
    return table;
  }
}

/***/ }),

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
/* harmony export */   TSHandler: () => (/* binding */ TSHandler),
/* harmony export */   setColumnWidths: () => (/* binding */ setColumnWidths)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fontawesome_js_fontawesome_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../fontawesome/js/fontawesome.min */ "./src/fontawesome/js/fontawesome.min.js");
/* harmony import */ var _fontawesome_js_fontawesome_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fontawesome_js_fontawesome_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fontawesome_js_all_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../fontawesome/js/all.min */ "./src/fontawesome/js/all.min.js");
/* harmony import */ var _fontawesome_js_all_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fontawesome_js_all_min__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_scrollbar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/scrollbar.css */ "./src/pages/css/scrollbar.css");
/* harmony import */ var _css_custom_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/custom.css */ "./src/pages/css/custom.css");
/* harmony import */ var _tradestation_enpoints_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../tradestation/enpoints/main */ "./src/tradestation/enpoints/main.js");
/* harmony import */ var _polygon_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../polygon/main */ "./src/polygon/main.js");

window.$ = (jquery__WEBPACK_IMPORTED_MODULE_0___default());
window.jQuery = (jquery__WEBPACK_IMPORTED_MODULE_0___default());







window.ts = new _tradestation_enpoints_main__WEBPACK_IMPORTED_MODULE_5__.TS();
window.p = new _polygon_main__WEBPACK_IMPORTED_MODULE_6__["default"]();
// import {Nav} from './nav';

const TIMEOUT_MSECONDS = 500;
jquery__WEBPACK_IMPORTED_MODULE_0___default()(() => {
  new InitRenderer();
});
function setColumnWidths(w1, w2) {
  w1 = w1 ? w1 : .5;
  w2 = w2 ? w2 : .5;
  var bodyWidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#content").width();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#leftcol").css("width", bodyWidth * w1);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#rightcol").css("width", bodyWidth * w2);
}
class InitRenderer {
  constructor() {
    this.isTokenLiveInterval = null;
    this.isTokenLive();
    setInterval(() => {
      window.ts.refreshToken();
    }, 60000 * 5);
    // const nav = new Nav();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#contentContainer").css('height', window.innerHeight);
    addSpinnerClass();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#spinner").hide();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#nav").append(`
        <a href="home.html">
        <i class="fa-solid fa-house"></i>
        </a>
        <br/>
        <a href="trade.html" target="_blank"><i class="fa-solid fa-building-columns"></i></a>
        <br/>
        <a href="settings.html"><i class="fa-solid fa-gear"></i></a>   
        <br/>
        <a href="news.html" target="_blank"><i class="fa-solid fa-newspaper"></i></a>
       
        `);
    window.addEventListener('resize', () => {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#contentContainer").css('height', window.innerHeight);
    });
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
      window.ts.refreshToken();
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
function addSpinnerClass() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").append(`<div id="spinner" 
        style="top: 50%;left:50%; transform: translate(-50%, -50%);"
        class="position-absolute h1 p-5 bg-glass text-white">
        <i class="fa-solid fa-spinner fa-spin"></i>   
    </div>`);
}

/***/ }),

/***/ "./src/polygon/main.js":
/*!*****************************!*\
  !*** ./src/polygon/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Polygon)
/* harmony export */ });
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! luxon */ "luxon");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



class Polygon {
  constructor() {
    this.baseUrl = 'https://api.polygon.io';
    this.pollCount = [];
    this.key = null;
    this._getKey();
  }
  _setKey(k) {
    this.key = k;
  }
  async _getKey() {
    electron__WEBPACK_IMPORTED_MODULE_1__.ipcRenderer.send('getPolygonToken');
    electron__WEBPACK_IMPORTED_MODULE_1__.ipcRenderer.on('sendPolygonToken', (event, arg) => {
      this._setKey(arg.key);
    });
  }
  _isKey() {
    return this.key !== null ? true : false;
  }
  _updatePollCount() {
    /*
        Can make api request 5 times every minute on free.
    */
    if (this.pollCount.length > 0) {
      var first = this.pollCount[0];
      var last = this.pollCount[this.pollCount.length - 1];
      const elapsedSeconds = Math.floor((last.time - first.time) / 1000);
      if (elapsedSeconds > 60) {
        this.pollCount = [];
      }
    }
    this.pollCount.push({
      id: this.pollCount.length,
      time: luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.now()
    });
  }
  _canProceed() {
    if (this.pollCount.length < 5 && this._isKey()) {
      return true;
    } else {
      return false;
    }
  }
  async getMarketStatus() {
    if (this._canProceed()) {
      const url = `${this.baseUrl}/v1/marketstatus/now?apiKey=${this.key}`;
      const response = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(url, {}).then(response => {
        this._updatePollCount();
        return response.data;
      }).catch(error => {
        console.error(`getMarketStatus() - ${error}`);
        throw error;
      });
      return response;
    }
  }
  async getNews(ticker) {
    if (this._canProceed()) {
      const url = `${this.baseUrl}/v2/reference/news`;
      const params = new URLSearchParams({
        limit: 20,
        apiKey: this.key
      }).toString();
      const symbol = ticker ? `&ticker=${ticker}` : '';
      const response = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${url}?${params}${symbol}`, {}).then(response => {
        this._updatePollCount();
        return response.data.results;
      }).catch(error => {
        console.error(`getNews() - ${error}`);
        throw error;
      });
      return response;
    }
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
  async streamPositions(tableCls, positionsArray, streamIdPrefix, accountIds, changes = false) {
    const streamId = `${streamIdPrefix}${accountIds}`;
    let positions = positionsArray; // initial Array containing the data.
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
                // If it isnt in positions add it and return
                let symbolInPositions = false;
                positions.forEach(pos => {
                  if (pos?.Symbol === jsonData?.Symbol) {
                    symbolInPositions = true;
                  }
                });
                if (!symbolInPositions) {
                  positions.push(jsonData);
                } else {
                  // if the symbol is in positions replace.
                  let newPositions = [];
                  positions.forEach((pos, i) => {
                    if (pos?.Symbol != jsonData?.Symbol) {
                      newPositions.push(pos);
                    }
                  });
                  newPositions.push(jsonData);
                  positions = newPositions;
                }
                tableCls.setStreamData(tableCls, positions);
              }
            } catch (error) {
              const msg = error.message.toLowerCase();
              if ((0,_util__WEBPACK_IMPORTED_MODULE_1__.isSubStr)(msg, 'network')) {
                this.info("Network Error");
                await this.delay(1000 * 5);
              } else if ((0,_util__WEBPACK_IMPORTED_MODULE_1__.isSubStr)(msg, 'whitespace')) {
                this.info("None-whitespace Error");
              } else if ((0,_util__WEBPACK_IMPORTED_MODULE_1__.isSubStr)(msg, 'syntaxerror')) {
                this.info("SyntaxError");
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
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
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
    var newBars = [];
    bars.forEach(bar => {
      if (bar.Close !== 0) {
        newBars.push(this.formatBar(bar));
      }
    });
    return newBars;
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
  async getBarsByLastDate(symbol, params) {
    this.refreshToken();
    const url = `${this.baseUrl}/barcharts/${symbol}`;
    const options = {
      params: {
        interval: params?.interval || '1',
        unit: params?.unit || 'Daily',
        barsback: params?.barsback || '1',
        // firstdate,
        lastdate: params?.lastdate || new Date().toISOString(),
        sessiontemplate: params?.sessiontemplate || 'Default'
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
      this.error(`getBarsByLastDate() - ${error}`);
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

  async streamQuotes(cls, streamIdPrefix, symbols) {
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
              const q = JSON.parse(jsonString.trim());
              cls.setStreamQuote(q);
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
  _setFullSymbolName(symbol) {
    this.suggestSymbols(symbol).then(arr => {
      var detailsArray = arr.data;
      detailsArray.forEach(sym => {
        var cat = sym?.Category.toLowerCase();
        if (sym?.Name == symbol) {
          var title = `${sym?.Exchange}:${symbol} · ${sym?.Description}`;
          // $(`#${id}`).text(title);
          jquery__WEBPACK_IMPORTED_MODULE_2___default()(`.fullSymbolName`).empty();
          jquery__WEBPACK_IMPORTED_MODULE_2___default()(`.fullSymbolName`).append(`${sym?.Exchange}:${symbol} ·
                      <span class="text-muted">${sym?.Description}</span>`);
          document.title = `${sym?.Exchange} : ${symbol} · ${sym?.Description}`;
        }
      });
    }).catch(error => {
      // console.log("[ERROR] _setSymbolDescrptionForId",error);
    });
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
/* harmony export */   formatDateWithPrecision: () => (/* binding */ formatDateWithPrecision),
/* harmony export */   formatVolume: () => (/* binding */ formatVolume),
/* harmony export */   generateAlphaNumString: () => (/* binding */ generateAlphaNumString),
/* harmony export */   generateCandleData: () => (/* binding */ generateCandleData),
/* harmony export */   generateLineData: () => (/* binding */ generateLineData),
/* harmony export */   generateRandomData: () => (/* binding */ generateRandomData),
/* harmony export */   getAllFunctions: () => (/* binding */ getAllFunctions),
/* harmony export */   getBarTimeDate: () => (/* binding */ getBarTimeDate),
/* harmony export */   getCurrentTime: () => (/* binding */ getCurrentTime),
/* harmony export */   getDateNDaysAgo: () => (/* binding */ getDateNDaysAgo),
/* harmony export */   getFunctionParameters: () => (/* binding */ getFunctionParameters),
/* harmony export */   getHeightFromClass: () => (/* binding */ getHeightFromClass),
/* harmony export */   getHorizontalTabHTML: () => (/* binding */ getHorizontalTabHTML),
/* harmony export */   getIndexByVal: () => (/* binding */ getIndexByVal),
/* harmony export */   getMean: () => (/* binding */ getMean),
/* harmony export */   getRandomAlphaNum: () => (/* binding */ getRandomAlphaNum),
/* harmony export */   getRandomRGB: () => (/* binding */ getRandomRGB),
/* harmony export */   getVerticalTabHTML: () => (/* binding */ getVerticalTabHTML),
/* harmony export */   hhmmss: () => (/* binding */ hhmmss),
/* harmony export */   inArray: () => (/* binding */ inArray),
/* harmony export */   inJsonArray: () => (/* binding */ inJsonArray),
/* harmony export */   isCurTimeDivisibleByMinsWithTolerance: () => (/* binding */ isCurTimeDivisibleByMinsWithTolerance),
/* harmony export */   isFloat: () => (/* binding */ isFloat),
/* harmony export */   isMarketOpen: () => (/* binding */ isMarketOpen),
/* harmony export */   isStringInArray: () => (/* binding */ isStringInArray),
/* harmony export */   isSubStr: () => (/* binding */ isSubStr),
/* harmony export */   jsonArrayToArrayByKey: () => (/* binding */ jsonArrayToArrayByKey),
/* harmony export */   maxJsonArrayVal: () => (/* binding */ maxJsonArrayVal),
/* harmony export */   minJsonArrayVal: () => (/* binding */ minJsonArrayVal),
/* harmony export */   randNum: () => (/* binding */ randNum),
/* harmony export */   removeDupsFromJsonArr: () => (/* binding */ removeDupsFromJsonArr),
/* harmony export */   renameKey: () => (/* binding */ renameKey),
/* harmony export */   resolveHtmlPath: () => (/* binding */ resolveHtmlPath),
/* harmony export */   rgbColors: () => (/* binding */ rgbColors),
/* harmony export */   sessionHighlighter: () => (/* binding */ sessionHighlighter),
/* harmony export */   sortJsonArrayByKey: () => (/* binding */ sortJsonArrayByKey),
/* harmony export */   strHas: () => (/* binding */ strHas),
/* harmony export */   titleBarheight: () => (/* binding */ titleBarheight)
/* harmony export */ });
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url */ "url");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lightweight_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lightweight-charts */ "lightweight-charts");
/* harmony import */ var lightweight_charts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lightweight_charts__WEBPACK_IMPORTED_MODULE_3__);
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
  number = parseFloat(number);
  var isNeg = number < 0 ? true : false;
  var suffix = "";
  var val = number;
  if (Math.abs(number) > 999999999999) {
    suffix = "T";
    val = val / 999999999999;
  } else if (Math.abs(number) > 999999999) {
    suffix = "B";
    val = val / 999999999;
  } else if (Math.abs(number) > 999999) {
    suffix = "M";
    val = val / 999999;
  } else if (Math.abs(number) > 999) {
    suffix = "K";
    val = val / 999;
  }
  return formatCurrency(val.toFixed(3)) + suffix;
};
function getMean(arr) {
  let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  let average = sum / arr.length;
  return average;
}
const sortJsonArrayByKey = (jsonArray, key) => {
  return jsonArray.sort((a, b) => {
    return a[key] - b[key];
  });
};
function maxJsonArrayVal(jsonArray, key) {
  let max = jsonArray[0][key]; // Start with the smallest possible number
  let obj = jsonArray[0];
  jsonArray.forEach(item => {
    if (item[key] > max) {
      max = item[key];
      obj = item;
    }
  });
  return obj;
}
function minJsonArrayVal(jsonArray, key) {
  let min = jsonArray[0][key]; // Start with the largest possible number
  let obj = jsonArray[0];
  jsonArray.forEach(item => {
    if (item[key] < min) {
      min = item[key];
      obj = item;
    }
  });
  return obj;
}
function getBarTimeDate(time) {
  if ((0,lightweight_charts__WEBPACK_IMPORTED_MODULE_3__.isUTCTimestamp)(time)) {
    return new Date(time * 1000);
  } else if (isBusinessDay(time)) {
    return new Date(time.year, time.month, time.day);
  } else {
    return new Date(time);
  }
}
const sessionHighlighter = time => {
  const date = getBarTimeDate(time);
  const offset = 4;
  const hours = date.getHours();
  const minute = date.getMinutes();
  var isBeforeOpen = hours == 9 - offset && minute <= 30 || hours < 9 - offset;
  var isAfterClose = hours >= 16 - offset;
  if (isBeforeOpen) {
    return 'rgba(41, 98, 255, 0.08)';
  } else if (isAfterClose) {
    return 'rgba(41, 98, 255, 0.08)';
  } else {
    return 'rgba(0, 0, 0, 0)';
  }
};
function getHorizontalTabHTML() {
  return `
            <div class="tab position-absolute bg-glass text-muted px-3 py-0" 
                style="
                z-index:2;top:0px;
                line-height:0px;
                left:50%;
                margin-left:-23.5px;
                margin-top:-9px;
                ">
                <i class="p-0 fa-solid fa-grip-lines"></i>
            </div>    
            `;
}
function getVerticalTabHTML() {
  return `<div class="tab position-absolute bg-glass text-muted py-3 px-1" 
              style="z-index:2;right:0px;width:15px;top:50%;margin-right:-7.5px;">
              <i class="fa-solid fa-grip-lines-vertical"></i>
            </div>`;
}
function isMarketOpen() {
  const now = new Date();
  const hr = now.getHours();
  const min = now.getMinutes();
  const t = parseInt(`${hr}${min}`);
  var isPre = t >= 730 && t < 930;
  var isReg = t >= 930 && hr <= 16;
  var isPost = hr > 16 && hr <= 20;
  var status = isPre ? 'pre' : isReg ? 'reg' : isPost ? 'post' : 'closed';
  return status;
}
function formatDateWithPrecision(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed, so we add 1 and pad with leading zeros if necessary
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  // Extracting only the first two digits of milliseconds
  const milliseconds = String(date.getMilliseconds()).padStart(3, '0').substring(0, 2);
  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/datatables/datatables.min.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/datatables/datatables.min.css ***!
  \*********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n * This combined file was created by the DataTables downloader builder:\n *   https://datatables.net/download\n *\n * To rebuild or modify this file with the latest versions of the included\n * software please visit:\n *   https://datatables.net/download/#dt/dt-2.0.8\n *\n * Included libraries:\n *   DataTables 2.0.8\n */\n\n:root{--dt-row-selected: 13, 110, 253;--dt-row-selected-text: 255, 255, 255;--dt-row-selected-link: 9, 10, 11;--dt-row-stripe: 0, 0, 0;--dt-row-hover: 0, 0, 0;--dt-column-ordering: 0, 0, 0;--dt-html-background: white}:root.dark{--dt-html-background: rgb(33, 37, 41)}table.dataTable td.dt-control{text-align:center;cursor:pointer}table.dataTable td.dt-control:before{display:inline-block;box-sizing:border-box;content:\"\";border-top:5px solid transparent;border-left:10px solid rgba(0, 0, 0, 0.5);border-bottom:5px solid transparent;border-right:0px solid transparent}table.dataTable tr.dt-hasChild td.dt-control:before{border-top:10px solid rgba(0, 0, 0, 0.5);border-left:5px solid transparent;border-bottom:0px solid transparent;border-right:5px solid transparent}html.dark table.dataTable td.dt-control:before,:root[data-bs-theme=dark] table.dataTable td.dt-control:before{border-left-color:rgba(255, 255, 255, 0.5)}html.dark table.dataTable tr.dt-hasChild td.dt-control:before,:root[data-bs-theme=dark] table.dataTable tr.dt-hasChild td.dt-control:before{border-top-color:rgba(255, 255, 255, 0.5);border-left-color:transparent}div.dt-scroll-body thead tr,div.dt-scroll-body tfoot tr{height:0}div.dt-scroll-body thead tr th,div.dt-scroll-body thead tr td,div.dt-scroll-body tfoot tr th,div.dt-scroll-body tfoot tr td{height:0 !important;padding-top:0px !important;padding-bottom:0px !important;border-top-width:0px !important;border-bottom-width:0px !important}div.dt-scroll-body thead tr th div.dt-scroll-sizing,div.dt-scroll-body thead tr td div.dt-scroll-sizing,div.dt-scroll-body tfoot tr th div.dt-scroll-sizing,div.dt-scroll-body tfoot tr td div.dt-scroll-sizing{height:0 !important;overflow:hidden !important}table.dataTable thead>tr>th:active,table.dataTable thead>tr>td:active{outline:none}table.dataTable thead>tr>th.dt-orderable-asc span.dt-column-order:before,table.dataTable thead>tr>th.dt-ordering-asc span.dt-column-order:before,table.dataTable thead>tr>td.dt-orderable-asc span.dt-column-order:before,table.dataTable thead>tr>td.dt-ordering-asc span.dt-column-order:before{position:absolute;display:block;bottom:50%;content:\"▲\";content:\"▲\"/\"\"}table.dataTable thead>tr>th.dt-orderable-desc span.dt-column-order:after,table.dataTable thead>tr>th.dt-ordering-desc span.dt-column-order:after,table.dataTable thead>tr>td.dt-orderable-desc span.dt-column-order:after,table.dataTable thead>tr>td.dt-ordering-desc span.dt-column-order:after{position:absolute;display:block;top:50%;content:\"▼\";content:\"▼\"/\"\"}table.dataTable thead>tr>th.dt-orderable-asc,table.dataTable thead>tr>th.dt-orderable-desc,table.dataTable thead>tr>th.dt-ordering-asc,table.dataTable thead>tr>th.dt-ordering-desc,table.dataTable thead>tr>td.dt-orderable-asc,table.dataTable thead>tr>td.dt-orderable-desc,table.dataTable thead>tr>td.dt-ordering-asc,table.dataTable thead>tr>td.dt-ordering-desc{position:relative;padding-right:30px}table.dataTable thead>tr>th.dt-orderable-asc span.dt-column-order,table.dataTable thead>tr>th.dt-orderable-desc span.dt-column-order,table.dataTable thead>tr>th.dt-ordering-asc span.dt-column-order,table.dataTable thead>tr>th.dt-ordering-desc span.dt-column-order,table.dataTable thead>tr>td.dt-orderable-asc span.dt-column-order,table.dataTable thead>tr>td.dt-orderable-desc span.dt-column-order,table.dataTable thead>tr>td.dt-ordering-asc span.dt-column-order,table.dataTable thead>tr>td.dt-ordering-desc span.dt-column-order{position:absolute;right:12px;top:0;bottom:0;width:12px}table.dataTable thead>tr>th.dt-orderable-asc span.dt-column-order:before,table.dataTable thead>tr>th.dt-orderable-asc span.dt-column-order:after,table.dataTable thead>tr>th.dt-orderable-desc span.dt-column-order:before,table.dataTable thead>tr>th.dt-orderable-desc span.dt-column-order:after,table.dataTable thead>tr>th.dt-ordering-asc span.dt-column-order:before,table.dataTable thead>tr>th.dt-ordering-asc span.dt-column-order:after,table.dataTable thead>tr>th.dt-ordering-desc span.dt-column-order:before,table.dataTable thead>tr>th.dt-ordering-desc span.dt-column-order:after,table.dataTable thead>tr>td.dt-orderable-asc span.dt-column-order:before,table.dataTable thead>tr>td.dt-orderable-asc span.dt-column-order:after,table.dataTable thead>tr>td.dt-orderable-desc span.dt-column-order:before,table.dataTable thead>tr>td.dt-orderable-desc span.dt-column-order:after,table.dataTable thead>tr>td.dt-ordering-asc span.dt-column-order:before,table.dataTable thead>tr>td.dt-ordering-asc span.dt-column-order:after,table.dataTable thead>tr>td.dt-ordering-desc span.dt-column-order:before,table.dataTable thead>tr>td.dt-ordering-desc span.dt-column-order:after{left:0;opacity:.125;line-height:9px;font-size:.8em}table.dataTable thead>tr>th.dt-orderable-asc,table.dataTable thead>tr>th.dt-orderable-desc,table.dataTable thead>tr>td.dt-orderable-asc,table.dataTable thead>tr>td.dt-orderable-desc{cursor:pointer}table.dataTable thead>tr>th.dt-orderable-asc:hover,table.dataTable thead>tr>th.dt-orderable-desc:hover,table.dataTable thead>tr>td.dt-orderable-asc:hover,table.dataTable thead>tr>td.dt-orderable-desc:hover{outline:2px solid rgba(0, 0, 0, 0.05);outline-offset:-2px}table.dataTable thead>tr>th.dt-ordering-asc span.dt-column-order:before,table.dataTable thead>tr>th.dt-ordering-desc span.dt-column-order:after,table.dataTable thead>tr>td.dt-ordering-asc span.dt-column-order:before,table.dataTable thead>tr>td.dt-ordering-desc span.dt-column-order:after{opacity:.6}table.dataTable thead>tr>th.sorting_desc_disabled span.dt-column-order:after,table.dataTable thead>tr>th.sorting_asc_disabled span.dt-column-order:before,table.dataTable thead>tr>td.sorting_desc_disabled span.dt-column-order:after,table.dataTable thead>tr>td.sorting_asc_disabled span.dt-column-order:before{display:none}table.dataTable thead>tr>th:active,table.dataTable thead>tr>td:active{outline:none}div.dt-scroll-body>table.dataTable>thead>tr>th,div.dt-scroll-body>table.dataTable>thead>tr>td{overflow:hidden}:root.dark table.dataTable thead>tr>th.dt-orderable-asc:hover,:root.dark table.dataTable thead>tr>th.dt-orderable-desc:hover,:root.dark table.dataTable thead>tr>td.dt-orderable-asc:hover,:root.dark table.dataTable thead>tr>td.dt-orderable-desc:hover,:root[data-bs-theme=dark] table.dataTable thead>tr>th.dt-orderable-asc:hover,:root[data-bs-theme=dark] table.dataTable thead>tr>th.dt-orderable-desc:hover,:root[data-bs-theme=dark] table.dataTable thead>tr>td.dt-orderable-asc:hover,:root[data-bs-theme=dark] table.dataTable thead>tr>td.dt-orderable-desc:hover{outline:2px solid rgba(255, 255, 255, 0.05)}div.dt-processing{position:absolute;top:50%;left:50%;width:200px;margin-left:-100px;margin-top:-22px;text-align:center;padding:2px;z-index:10}div.dt-processing>div:last-child{position:relative;width:80px;height:15px;margin:1em auto}div.dt-processing>div:last-child>div{position:absolute;top:0;width:13px;height:13px;border-radius:50%;background:rgb(13, 110, 253);background:rgb(var(--dt-row-selected));animation-timing-function:cubic-bezier(0, 1, 1, 0)}div.dt-processing>div:last-child>div:nth-child(1){left:8px;animation:datatables-loader-1 .6s infinite}div.dt-processing>div:last-child>div:nth-child(2){left:8px;animation:datatables-loader-2 .6s infinite}div.dt-processing>div:last-child>div:nth-child(3){left:32px;animation:datatables-loader-2 .6s infinite}div.dt-processing>div:last-child>div:nth-child(4){left:56px;animation:datatables-loader-3 .6s infinite}@keyframes datatables-loader-1{0%{transform:scale(0)}100%{transform:scale(1)}}@keyframes datatables-loader-3{0%{transform:scale(1)}100%{transform:scale(0)}}@keyframes datatables-loader-2{0%{transform:translate(0, 0)}100%{transform:translate(24px, 0)}}table.dataTable.nowrap th,table.dataTable.nowrap td{white-space:nowrap}table.dataTable th,table.dataTable td{box-sizing:border-box}table.dataTable th.dt-left,table.dataTable td.dt-left{text-align:left}table.dataTable th.dt-center,table.dataTable td.dt-center{text-align:center}table.dataTable th.dt-right,table.dataTable td.dt-right{text-align:right}table.dataTable th.dt-justify,table.dataTable td.dt-justify{text-align:justify}table.dataTable th.dt-nowrap,table.dataTable td.dt-nowrap{white-space:nowrap}table.dataTable th.dt-empty,table.dataTable td.dt-empty{text-align:center;vertical-align:top}table.dataTable th.dt-type-numeric,table.dataTable th.dt-type-date,table.dataTable td.dt-type-numeric,table.dataTable td.dt-type-date{text-align:right}table.dataTable thead th,table.dataTable thead td,table.dataTable tfoot th,table.dataTable tfoot td{text-align:left}table.dataTable thead th.dt-head-left,table.dataTable thead td.dt-head-left,table.dataTable tfoot th.dt-head-left,table.dataTable tfoot td.dt-head-left{text-align:left}table.dataTable thead th.dt-head-center,table.dataTable thead td.dt-head-center,table.dataTable tfoot th.dt-head-center,table.dataTable tfoot td.dt-head-center{text-align:center}table.dataTable thead th.dt-head-right,table.dataTable thead td.dt-head-right,table.dataTable tfoot th.dt-head-right,table.dataTable tfoot td.dt-head-right{text-align:right}table.dataTable thead th.dt-head-justify,table.dataTable thead td.dt-head-justify,table.dataTable tfoot th.dt-head-justify,table.dataTable tfoot td.dt-head-justify{text-align:justify}table.dataTable thead th.dt-head-nowrap,table.dataTable thead td.dt-head-nowrap,table.dataTable tfoot th.dt-head-nowrap,table.dataTable tfoot td.dt-head-nowrap{white-space:nowrap}table.dataTable tbody th.dt-body-left,table.dataTable tbody td.dt-body-left{text-align:left}table.dataTable tbody th.dt-body-center,table.dataTable tbody td.dt-body-center{text-align:center}table.dataTable tbody th.dt-body-right,table.dataTable tbody td.dt-body-right{text-align:right}table.dataTable tbody th.dt-body-justify,table.dataTable tbody td.dt-body-justify{text-align:justify}table.dataTable tbody th.dt-body-nowrap,table.dataTable tbody td.dt-body-nowrap{white-space:nowrap}table.dataTable{width:100%;margin:0 auto;border-spacing:0}table.dataTable thead th,table.dataTable tfoot th{font-weight:bold}table.dataTable>thead>tr>th,table.dataTable>thead>tr>td{padding:10px;border-bottom:1px solid rgba(0, 0, 0, 0.3)}table.dataTable>thead>tr>th:active,table.dataTable>thead>tr>td:active{outline:none}table.dataTable>tfoot>tr>th,table.dataTable>tfoot>tr>td{border-top:1px solid rgba(0, 0, 0, 0.3);padding:10px 10px 6px 10px}table.dataTable>tbody>tr{background-color:transparent}table.dataTable>tbody>tr:first-child>*{border-top:none}table.dataTable>tbody>tr:last-child>*{border-bottom:none}table.dataTable>tbody>tr.selected>*{box-shadow:inset 0 0 0 9999px rgba(13, 110, 253, 0.9);box-shadow:inset 0 0 0 9999px rgba(var(--dt-row-selected), 0.9);color:rgb(255, 255, 255);color:rgb(var(--dt-row-selected-text))}table.dataTable>tbody>tr.selected a{color:rgb(9, 10, 11);color:rgb(var(--dt-row-selected-link))}table.dataTable>tbody>tr>th,table.dataTable>tbody>tr>td{padding:8px 10px}table.dataTable.row-border>tbody>tr>*,table.dataTable.display>tbody>tr>*{border-top:1px solid rgba(0, 0, 0, 0.15)}table.dataTable.row-border>tbody>tr:first-child>*,table.dataTable.display>tbody>tr:first-child>*{border-top:none}table.dataTable.row-border>tbody>tr.selected+tr.selected>td,table.dataTable.display>tbody>tr.selected+tr.selected>td{border-top-color:rgba(13, 110, 253, 0.65);border-top-color:rgba(var(--dt-row-selected), 0.65)}table.dataTable.cell-border>tbody>tr>*{border-top:1px solid rgba(0, 0, 0, 0.15);border-right:1px solid rgba(0, 0, 0, 0.15)}table.dataTable.cell-border>tbody>tr>*:first-child{border-left:1px solid rgba(0, 0, 0, 0.15)}table.dataTable.cell-border>tbody>tr:first-child>*{border-top:1px solid rgba(0, 0, 0, 0.3)}table.dataTable.stripe>tbody>tr:nth-child(odd)>*,table.dataTable.display>tbody>tr:nth-child(odd)>*{box-shadow:inset 0 0 0 9999px rgba(0, 0, 0, 0.023);box-shadow:inset 0 0 0 9999px rgba(var(--dt-row-stripe), 0.023)}table.dataTable.stripe>tbody>tr:nth-child(odd).selected>*,table.dataTable.display>tbody>tr:nth-child(odd).selected>*{box-shadow:inset 0 0 0 9999px rgba(13, 110, 253, 0.923);box-shadow:inset 0 0 0 9999px rgba(var(--dt-row-selected), 0.923)}table.dataTable.hover>tbody>tr:hover>*,table.dataTable.display>tbody>tr:hover>*{box-shadow:inset 0 0 0 9999px rgba(0, 0, 0, 0.035);box-shadow:inset 0 0 0 9999px rgba(var(--dt-row-hover), 0.035)}table.dataTable.hover>tbody>tr.selected:hover>*,table.dataTable.display>tbody>tr.selected:hover>*{box-shadow:inset 0 0 0 9999px #0d6efd !important;box-shadow:inset 0 0 0 9999px rgba(var(--dt-row-selected), 1) !important}table.dataTable.order-column>tbody tr>.sorting_1,table.dataTable.order-column>tbody tr>.sorting_2,table.dataTable.order-column>tbody tr>.sorting_3,table.dataTable.display>tbody tr>.sorting_1,table.dataTable.display>tbody tr>.sorting_2,table.dataTable.display>tbody tr>.sorting_3{box-shadow:inset 0 0 0 9999px rgba(0, 0, 0, 0.019);box-shadow:inset 0 0 0 9999px rgba(var(--dt-column-ordering), 0.019)}table.dataTable.order-column>tbody tr.selected>.sorting_1,table.dataTable.order-column>tbody tr.selected>.sorting_2,table.dataTable.order-column>tbody tr.selected>.sorting_3,table.dataTable.display>tbody tr.selected>.sorting_1,table.dataTable.display>tbody tr.selected>.sorting_2,table.dataTable.display>tbody tr.selected>.sorting_3{box-shadow:inset 0 0 0 9999px rgba(13, 110, 253, 0.919);box-shadow:inset 0 0 0 9999px rgba(var(--dt-row-selected), 0.919)}table.dataTable.display>tbody>tr:nth-child(odd)>.sorting_1,table.dataTable.order-column.stripe>tbody>tr:nth-child(odd)>.sorting_1{box-shadow:inset 0 0 0 9999px rgba(0, 0, 0, 0.054);box-shadow:inset 0 0 0 9999px rgba(var(--dt-column-ordering), 0.054)}table.dataTable.display>tbody>tr:nth-child(odd)>.sorting_2,table.dataTable.order-column.stripe>tbody>tr:nth-child(odd)>.sorting_2{box-shadow:inset 0 0 0 9999px rgba(0, 0, 0, 0.047);box-shadow:inset 0 0 0 9999px rgba(var(--dt-column-ordering), 0.047)}table.dataTable.display>tbody>tr:nth-child(odd)>.sorting_3,table.dataTable.order-column.stripe>tbody>tr:nth-child(odd)>.sorting_3{box-shadow:inset 0 0 0 9999px rgba(0, 0, 0, 0.039);box-shadow:inset 0 0 0 9999px rgba(var(--dt-column-ordering), 0.039)}table.dataTable.display>tbody>tr:nth-child(odd).selected>.sorting_1,table.dataTable.order-column.stripe>tbody>tr:nth-child(odd).selected>.sorting_1{box-shadow:inset 0 0 0 9999px rgba(13, 110, 253, 0.954);box-shadow:inset 0 0 0 9999px rgba(var(--dt-row-selected), 0.954)}table.dataTable.display>tbody>tr:nth-child(odd).selected>.sorting_2,table.dataTable.order-column.stripe>tbody>tr:nth-child(odd).selected>.sorting_2{box-shadow:inset 0 0 0 9999px rgba(13, 110, 253, 0.947);box-shadow:inset 0 0 0 9999px rgba(var(--dt-row-selected), 0.947)}table.dataTable.display>tbody>tr:nth-child(odd).selected>.sorting_3,table.dataTable.order-column.stripe>tbody>tr:nth-child(odd).selected>.sorting_3{box-shadow:inset 0 0 0 9999px rgba(13, 110, 253, 0.939);box-shadow:inset 0 0 0 9999px rgba(var(--dt-row-selected), 0.939)}table.dataTable.display>tbody>tr.even>.sorting_1,table.dataTable.order-column.stripe>tbody>tr.even>.sorting_1{box-shadow:inset 0 0 0 9999px rgba(0, 0, 0, 0.019);box-shadow:inset 0 0 0 9999px rgba(var(--dt-column-ordering), 0.019)}table.dataTable.display>tbody>tr.even>.sorting_2,table.dataTable.order-column.stripe>tbody>tr.even>.sorting_2{box-shadow:inset 0 0 0 9999px rgba(0, 0, 0, 0.011);box-shadow:inset 0 0 0 9999px rgba(var(--dt-column-ordering), 0.011)}table.dataTable.display>tbody>tr.even>.sorting_3,table.dataTable.order-column.stripe>tbody>tr.even>.sorting_3{box-shadow:inset 0 0 0 9999px rgba(0, 0, 0, 0.003);box-shadow:inset 0 0 0 9999px rgba(var(--dt-column-ordering), 0.003)}table.dataTable.display>tbody>tr.even.selected>.sorting_1,table.dataTable.order-column.stripe>tbody>tr.even.selected>.sorting_1{box-shadow:inset 0 0 0 9999px rgba(13, 110, 253, 0.919);box-shadow:inset 0 0 0 9999px rgba(var(--dt-row-selected), 0.919)}table.dataTable.display>tbody>tr.even.selected>.sorting_2,table.dataTable.order-column.stripe>tbody>tr.even.selected>.sorting_2{box-shadow:inset 0 0 0 9999px rgba(13, 110, 253, 0.911);box-shadow:inset 0 0 0 9999px rgba(var(--dt-row-selected), 0.911)}table.dataTable.display>tbody>tr.even.selected>.sorting_3,table.dataTable.order-column.stripe>tbody>tr.even.selected>.sorting_3{box-shadow:inset 0 0 0 9999px rgba(13, 110, 253, 0.903);box-shadow:inset 0 0 0 9999px rgba(var(--dt-row-selected), 0.903)}table.dataTable.display tbody tr:hover>.sorting_1,table.dataTable.order-column.hover tbody tr:hover>.sorting_1{box-shadow:inset 0 0 0 9999px rgba(0, 0, 0, 0.082);box-shadow:inset 0 0 0 9999px rgba(var(--dt-row-hover), 0.082)}table.dataTable.display tbody tr:hover>.sorting_2,table.dataTable.order-column.hover tbody tr:hover>.sorting_2{box-shadow:inset 0 0 0 9999px rgba(0, 0, 0, 0.074);box-shadow:inset 0 0 0 9999px rgba(var(--dt-row-hover), 0.074)}table.dataTable.display tbody tr:hover>.sorting_3,table.dataTable.order-column.hover tbody tr:hover>.sorting_3{box-shadow:inset 0 0 0 9999px rgba(0, 0, 0, 0.062);box-shadow:inset 0 0 0 9999px rgba(var(--dt-row-hover), 0.062)}table.dataTable.display tbody tr:hover.selected>.sorting_1,table.dataTable.order-column.hover tbody tr:hover.selected>.sorting_1{box-shadow:inset 0 0 0 9999px rgba(13, 110, 253, 0.982);box-shadow:inset 0 0 0 9999px rgba(var(--dt-row-selected), 0.982)}table.dataTable.display tbody tr:hover.selected>.sorting_2,table.dataTable.order-column.hover tbody tr:hover.selected>.sorting_2{box-shadow:inset 0 0 0 9999px rgba(13, 110, 253, 0.974);box-shadow:inset 0 0 0 9999px rgba(var(--dt-row-selected), 0.974)}table.dataTable.display tbody tr:hover.selected>.sorting_3,table.dataTable.order-column.hover tbody tr:hover.selected>.sorting_3{box-shadow:inset 0 0 0 9999px rgba(13, 110, 253, 0.962);box-shadow:inset 0 0 0 9999px rgba(var(--dt-row-selected), 0.962)}table.dataTable.compact thead th,table.dataTable.compact thead td,table.dataTable.compact tfoot th,table.dataTable.compact tfoot td,table.dataTable.compact tbody th,table.dataTable.compact tbody td{padding:4px}div.dt-container{position:relative;clear:both}div.dt-container div.dt-layout-row{display:table;clear:both;width:100%}div.dt-container div.dt-layout-row.dt-layout-table{display:block}div.dt-container div.dt-layout-row.dt-layout-table div.dt-layout-cell{display:block}div.dt-container div.dt-layout-cell{display:table-cell;vertical-align:middle;padding:5px 0}div.dt-container div.dt-layout-cell.dt-full{text-align:center}div.dt-container div.dt-layout-cell.dt-start{text-align:left}div.dt-container div.dt-layout-cell.dt-end{text-align:right}div.dt-container div.dt-layout-cell:empty{display:none}div.dt-container .dt-search input{border:1px solid #aaa;border-radius:3px;padding:5px;background-color:transparent;color:inherit;margin-left:3px}div.dt-container .dt-input{border:1px solid #aaa;border-radius:3px;padding:5px;background-color:transparent;color:inherit}div.dt-container select.dt-input{padding:4px}div.dt-container .dt-paging .dt-paging-button{box-sizing:border-box;display:inline-block;min-width:1.5em;padding:.5em 1em;margin-left:2px;text-align:center;text-decoration:none !important;cursor:pointer;color:inherit !important;border:1px solid transparent;border-radius:2px;background:transparent}div.dt-container .dt-paging .dt-paging-button.current,div.dt-container .dt-paging .dt-paging-button.current:hover{color:inherit !important;border:1px solid rgba(0, 0, 0, 0.3);background-color:rgba(0, 0, 0, 0.05);background:-webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(230, 230, 230, 0.05)), color-stop(100%, rgba(0, 0, 0, 0.05)));background:-webkit-linear-gradient(top, rgba(230, 230, 230, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%);background:-moz-linear-gradient(top, rgba(230, 230, 230, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%);background:-ms-linear-gradient(top, rgba(230, 230, 230, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%);background:-o-linear-gradient(top, rgba(230, 230, 230, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%);background:linear-gradient(to bottom, rgba(230, 230, 230, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%)}div.dt-container .dt-paging .dt-paging-button.disabled,div.dt-container .dt-paging .dt-paging-button.disabled:hover,div.dt-container .dt-paging .dt-paging-button.disabled:active{cursor:default;color:rgba(0, 0, 0, 0.5) !important;border:1px solid transparent;background:transparent;box-shadow:none}div.dt-container .dt-paging .dt-paging-button:hover{color:white !important;border:1px solid #111;background-color:#111;background:-webkit-gradient(linear, left top, left bottom, color-stop(0%, #585858), color-stop(100%, #111));background:-webkit-linear-gradient(top, #585858 0%, #111 100%);background:-moz-linear-gradient(top, #585858 0%, #111 100%);background:-ms-linear-gradient(top, #585858 0%, #111 100%);background:-o-linear-gradient(top, #585858 0%, #111 100%);background:linear-gradient(to bottom, #585858 0%, #111 100%)}div.dt-container .dt-paging .dt-paging-button:active{outline:none;background-color:#0c0c0c;background:-webkit-gradient(linear, left top, left bottom, color-stop(0%, #2b2b2b), color-stop(100%, #0c0c0c));background:-webkit-linear-gradient(top, #2b2b2b 0%, #0c0c0c 100%);background:-moz-linear-gradient(top, #2b2b2b 0%, #0c0c0c 100%);background:-ms-linear-gradient(top, #2b2b2b 0%, #0c0c0c 100%);background:-o-linear-gradient(top, #2b2b2b 0%, #0c0c0c 100%);background:linear-gradient(to bottom, #2b2b2b 0%, #0c0c0c 100%);box-shadow:inset 0 0 3px #111}div.dt-container .dt-paging .ellipsis{padding:0 1em}div.dt-container .dt-length,div.dt-container .dt-search,div.dt-container .dt-info,div.dt-container .dt-processing,div.dt-container .dt-paging{color:inherit}div.dt-container .dataTables_scroll{clear:both}div.dt-container .dataTables_scroll div.dt-scroll-body{-webkit-overflow-scrolling:touch}div.dt-container .dataTables_scroll div.dt-scroll-body>table>thead>tr>th,div.dt-container .dataTables_scroll div.dt-scroll-body>table>thead>tr>td,div.dt-container .dataTables_scroll div.dt-scroll-body>table>tbody>tr>th,div.dt-container .dataTables_scroll div.dt-scroll-body>table>tbody>tr>td{vertical-align:middle}div.dt-container .dataTables_scroll div.dt-scroll-body>table>thead>tr>th>div.dataTables_sizing,div.dt-container .dataTables_scroll div.dt-scroll-body>table>thead>tr>td>div.dataTables_sizing,div.dt-container .dataTables_scroll div.dt-scroll-body>table>tbody>tr>th>div.dataTables_sizing,div.dt-container .dataTables_scroll div.dt-scroll-body>table>tbody>tr>td>div.dataTables_sizing{height:0;overflow:hidden;margin:0 !important;padding:0 !important}div.dt-container.dt-empty-footer tbody>tr:last-child>*{border-bottom:1px solid rgba(0, 0, 0, 0.3)}div.dt-container.dt-empty-footer .dt-scroll-body{border-bottom:1px solid rgba(0, 0, 0, 0.3)}div.dt-container.dt-empty-footer .dt-scroll-body tbody>tr:last-child>*{border-bottom:none}@media screen and (max-width: 767px){div.dt-container div.dt-layout-row{display:block}div.dt-container div.dt-layout-cell{display:block}div.dt-container div.dt-layout-cell.dt-full,div.dt-container div.dt-layout-cell.dt-start,div.dt-container div.dt-layout-cell.dt-end{text-align:center}}@media screen and (max-width: 640px){.dt-container .dt-length,.dt-container .dt-search{float:none;text-align:center}.dt-container .dt-search{margin-top:.5em}}html.dark{--dt-row-hover: 255, 255, 255;--dt-row-stripe: 255, 255, 255;--dt-column-ordering: 255, 255, 255}html.dark table.dataTable>thead>tr>th,html.dark table.dataTable>thead>tr>td{border-bottom:1px solid rgb(89, 91, 94)}html.dark table.dataTable>thead>tr>th:active,html.dark table.dataTable>thead>tr>td:active{outline:none}html.dark table.dataTable>tfoot>tr>th,html.dark table.dataTable>tfoot>tr>td{border-top:1px solid rgb(89, 91, 94)}html.dark table.dataTable.row-border>tbody>tr>*,html.dark table.dataTable.display>tbody>tr>*{border-top:1px solid rgb(64, 67, 70)}html.dark table.dataTable.row-border>tbody>tr:first-child>*,html.dark table.dataTable.display>tbody>tr:first-child>*{border-top:none}html.dark table.dataTable.row-border>tbody>tr.selected+tr.selected>td,html.dark table.dataTable.display>tbody>tr.selected+tr.selected>td{border-top-color:rgba(13, 110, 253, 0.65);border-top-color:rgba(var(--dt-row-selected), 0.65)}html.dark table.dataTable.cell-border>tbody>tr>th,html.dark table.dataTable.cell-border>tbody>tr>td{border-top:1px solid rgb(64, 67, 70);border-right:1px solid rgb(64, 67, 70)}html.dark table.dataTable.cell-border>tbody>tr>th:first-child,html.dark table.dataTable.cell-border>tbody>tr>td:first-child{border-left:1px solid rgb(64, 67, 70)}html.dark .dt-container.dt-empty-footer table.dataTable{border-bottom:1px solid rgb(89, 91, 94)}html.dark .dt-container .dt-search input,html.dark .dt-container .dt-length select{border:1px solid rgba(255, 255, 255, 0.2);background-color:var(--dt-html-background)}html.dark .dt-container .dt-paging .dt-paging-button.current,html.dark .dt-container .dt-paging .dt-paging-button.current:hover{border:1px solid rgb(89, 91, 94);background:rgba(255, 255, 255, 0.15)}html.dark .dt-container .dt-paging .dt-paging-button.disabled,html.dark .dt-container .dt-paging .dt-paging-button.disabled:hover,html.dark .dt-container .dt-paging .dt-paging-button.disabled:active{color:#666 !important}html.dark .dt-container .dt-paging .dt-paging-button:hover{border:1px solid rgb(53, 53, 53);background:rgb(53, 53, 53)}html.dark .dt-container .dt-paging .dt-paging-button:active{background:#3a3a3a}*[dir=rtl] table.dataTable thead th,*[dir=rtl] table.dataTable thead td,*[dir=rtl] table.dataTable tfoot th,*[dir=rtl] table.dataTable tfoot td{text-align:right}*[dir=rtl] table.dataTable th.dt-type-numeric,*[dir=rtl] table.dataTable th.dt-type-date,*[dir=rtl] table.dataTable td.dt-type-numeric,*[dir=rtl] table.dataTable td.dt-type-date{text-align:left}*[dir=rtl] div.dt-container div.dt-layout-cell.dt-start{text-align:right}*[dir=rtl] div.dt-container div.dt-layout-cell.dt-end{text-align:left}*[dir=rtl] div.dt-container div.dt-search input{margin:0 3px 0 0}\n\n\n", "",{"version":3,"sources":["webpack://./src/datatables/datatables.min.css"],"names":[],"mappings":"AAAA;;;;;;;;;;EAUE;;AAEF,MAAM,+BAA+B,CAAC,qCAAqC,CAAC,iCAAiC,CAAC,wBAAwB,CAAC,uBAAuB,CAAC,6BAA6B,CAAC,2BAA2B,CAAC,WAAW,qCAAqC,CAAC,8BAA8B,iBAAiB,CAAC,cAAc,CAAC,qCAAqC,oBAAoB,CAAC,qBAAqB,CAAC,UAAU,CAAC,gCAAgC,CAAC,yCAAyC,CAAC,mCAAmC,CAAC,kCAAkC,CAAC,oDAAoD,wCAAwC,CAAC,iCAAiC,CAAC,mCAAmC,CAAC,kCAAkC,CAAC,8GAA8G,0CAA0C,CAAC,4IAA4I,yCAAyC,CAAC,6BAA6B,CAAC,wDAAwD,QAAQ,CAAC,4HAA4H,mBAAmB,CAAC,0BAA0B,CAAC,6BAA6B,CAAC,+BAA+B,CAAC,kCAAkC,CAAC,gNAAgN,mBAAmB,CAAC,0BAA0B,CAAC,sEAAsE,YAAY,CAAC,kSAAkS,iBAAiB,CAAC,aAAa,CAAC,UAAU,CAAC,WAAW,CAAC,cAAc,CAAC,kSAAkS,iBAAiB,CAAC,aAAa,CAAC,OAAO,CAAC,WAAW,CAAC,cAAc,CAAC,wWAAwW,iBAAiB,CAAC,kBAAkB,CAAC,ghBAAghB,iBAAiB,CAAC,UAAU,CAAC,KAAK,CAAC,QAAQ,CAAC,UAAU,CAAC,woCAAwoC,MAAM,CAAC,YAAY,CAAC,eAAe,CAAC,cAAc,CAAC,sLAAsL,cAAc,CAAC,8MAA8M,qCAAqC,CAAC,mBAAmB,CAAC,gSAAgS,UAAU,CAAC,oTAAoT,YAAY,CAAC,sEAAsE,YAAY,CAAC,8FAA8F,eAAe,CAAC,gjBAAgjB,2CAA2C,CAAC,kBAAkB,iBAAiB,CAAC,OAAO,CAAC,QAAQ,CAAC,WAAW,CAAC,kBAAkB,CAAC,gBAAgB,CAAC,iBAAiB,CAAC,WAAW,CAAC,UAAU,CAAC,iCAAiC,iBAAiB,CAAC,UAAU,CAAC,WAAW,CAAC,eAAe,CAAC,qCAAqC,iBAAiB,CAAC,KAAK,CAAC,UAAU,CAAC,WAAW,CAAC,iBAAiB,CAAC,4BAA4B,CAAC,sCAAsC,CAAC,kDAAkD,CAAC,kDAAkD,QAAQ,CAAC,0CAA0C,CAAC,kDAAkD,QAAQ,CAAC,0CAA0C,CAAC,kDAAkD,SAAS,CAAC,0CAA0C,CAAC,kDAAkD,SAAS,CAAC,0CAA0C,CAAC,+BAA+B,GAAG,kBAAkB,CAAC,KAAK,kBAAkB,CAAC,CAAC,+BAA+B,GAAG,kBAAkB,CAAC,KAAK,kBAAkB,CAAC,CAAC,+BAA+B,GAAG,yBAAyB,CAAC,KAAK,4BAA4B,CAAC,CAAC,oDAAoD,kBAAkB,CAAC,sCAAsC,qBAAqB,CAAC,sDAAsD,eAAe,CAAC,0DAA0D,iBAAiB,CAAC,wDAAwD,gBAAgB,CAAC,4DAA4D,kBAAkB,CAAC,0DAA0D,kBAAkB,CAAC,wDAAwD,iBAAiB,CAAC,kBAAkB,CAAC,sIAAsI,gBAAgB,CAAC,oGAAoG,eAAe,CAAC,wJAAwJ,eAAe,CAAC,gKAAgK,iBAAiB,CAAC,4JAA4J,gBAAgB,CAAC,oKAAoK,kBAAkB,CAAC,gKAAgK,kBAAkB,CAAC,4EAA4E,eAAe,CAAC,gFAAgF,iBAAiB,CAAC,8EAA8E,gBAAgB,CAAC,kFAAkF,kBAAkB,CAAC,gFAAgF,kBAAkB,CAAC,gBAAgB,UAAU,CAAC,aAAa,CAAC,gBAAgB,CAAC,kDAAkD,gBAAgB,CAAC,wDAAwD,YAAY,CAAC,0CAA0C,CAAC,sEAAsE,YAAY,CAAC,wDAAwD,uCAAuC,CAAC,0BAA0B,CAAC,yBAAyB,4BAA4B,CAAC,uCAAuC,eAAe,CAAC,sCAAsC,kBAAkB,CAAC,oCAAoC,qDAAqD,CAAC,+DAA+D,CAAC,wBAAwB,CAAC,sCAAsC,CAAC,oCAAoC,oBAAoB,CAAC,sCAAsC,CAAC,wDAAwD,gBAAgB,CAAC,yEAAyE,wCAAwC,CAAC,iGAAiG,eAAe,CAAC,qHAAqH,yCAAyC,CAAC,mDAAmD,CAAC,uCAAuC,wCAAwC,CAAC,0CAA0C,CAAC,mDAAmD,yCAAyC,CAAC,mDAAmD,uCAAuC,CAAC,mGAAmG,kDAAkD,CAAC,+DAA+D,CAAC,qHAAqH,uDAAuD,CAAC,iEAAiE,CAAC,gFAAgF,kDAAkD,CAAC,8DAA8D,CAAC,kGAAkG,gDAAgD,CAAC,wEAAwE,CAAC,uRAAuR,kDAAkD,CAAC,oEAAoE,CAAC,6UAA6U,uDAAuD,CAAC,iEAAiE,CAAC,kIAAkI,kDAAkD,CAAC,oEAAoE,CAAC,kIAAkI,kDAAkD,CAAC,oEAAoE,CAAC,kIAAkI,kDAAkD,CAAC,oEAAoE,CAAC,oJAAoJ,uDAAuD,CAAC,iEAAiE,CAAC,oJAAoJ,uDAAuD,CAAC,iEAAiE,CAAC,oJAAoJ,uDAAuD,CAAC,iEAAiE,CAAC,8GAA8G,kDAAkD,CAAC,oEAAoE,CAAC,8GAA8G,kDAAkD,CAAC,oEAAoE,CAAC,8GAA8G,kDAAkD,CAAC,oEAAoE,CAAC,gIAAgI,uDAAuD,CAAC,iEAAiE,CAAC,gIAAgI,uDAAuD,CAAC,iEAAiE,CAAC,gIAAgI,uDAAuD,CAAC,iEAAiE,CAAC,+GAA+G,kDAAkD,CAAC,8DAA8D,CAAC,+GAA+G,kDAAkD,CAAC,8DAA8D,CAAC,+GAA+G,kDAAkD,CAAC,8DAA8D,CAAC,iIAAiI,uDAAuD,CAAC,iEAAiE,CAAC,iIAAiI,uDAAuD,CAAC,iEAAiE,CAAC,iIAAiI,uDAAuD,CAAC,iEAAiE,CAAC,sMAAsM,WAAW,CAAC,iBAAiB,iBAAiB,CAAC,UAAU,CAAC,mCAAmC,aAAa,CAAC,UAAU,CAAC,UAAU,CAAC,mDAAmD,aAAa,CAAC,sEAAsE,aAAa,CAAC,oCAAoC,kBAAkB,CAAC,qBAAqB,CAAC,aAAa,CAAC,4CAA4C,iBAAiB,CAAC,6CAA6C,eAAe,CAAC,2CAA2C,gBAAgB,CAAC,0CAA0C,YAAY,CAAC,kCAAkC,qBAAqB,CAAC,iBAAiB,CAAC,WAAW,CAAC,4BAA4B,CAAC,aAAa,CAAC,eAAe,CAAC,2BAA2B,qBAAqB,CAAC,iBAAiB,CAAC,WAAW,CAAC,4BAA4B,CAAC,aAAa,CAAC,iCAAiC,WAAW,CAAC,8CAA8C,qBAAqB,CAAC,oBAAoB,CAAC,eAAe,CAAC,gBAAgB,CAAC,eAAe,CAAC,iBAAiB,CAAC,+BAA+B,CAAC,cAAc,CAAC,wBAAwB,CAAC,4BAA4B,CAAC,iBAAiB,CAAC,sBAAsB,CAAC,kHAAkH,wBAAwB,CAAC,mCAAmC,CAAC,oCAAoC,CAAC,4IAA4I,CAAC,+FAA+F,CAAC,4FAA4F,CAAC,2FAA2F,CAAC,0FAA0F,CAAC,6FAA6F,CAAC,kLAAkL,cAAc,CAAC,mCAAmC,CAAC,4BAA4B,CAAC,sBAAsB,CAAC,eAAe,CAAC,oDAAoD,sBAAsB,CAAC,qBAAqB,CAAC,qBAAqB,CAAC,2GAA2G,CAAC,8DAA8D,CAAC,2DAA2D,CAAC,0DAA0D,CAAC,yDAAyD,CAAC,4DAA4D,CAAC,qDAAqD,YAAY,CAAC,wBAAwB,CAAC,8GAA8G,CAAC,iEAAiE,CAAC,8DAA8D,CAAC,6DAA6D,CAAC,4DAA4D,CAAC,+DAA+D,CAAC,6BAA6B,CAAC,sCAAsC,aAAa,CAAC,8IAA8I,aAAa,CAAC,oCAAoC,UAAU,CAAC,uDAAuD,gCAAgC,CAAC,oSAAoS,qBAAqB,CAAC,4XAA4X,QAAQ,CAAC,eAAe,CAAC,mBAAmB,CAAC,oBAAoB,CAAC,uDAAuD,0CAA0C,CAAC,iDAAiD,0CAA0C,CAAC,uEAAuE,kBAAkB,CAAC,qCAAqC,mCAAmC,aAAa,CAAC,oCAAoC,aAAa,CAAC,oIAAoI,iBAAiB,CAAC,CAAC,qCAAqC,kDAAkD,UAAU,CAAC,iBAAiB,CAAC,yBAAyB,eAAe,CAAC,CAAC,UAAU,6BAA6B,CAAC,8BAA8B,CAAC,mCAAmC,CAAC,4EAA4E,uCAAuC,CAAC,0FAA0F,YAAY,CAAC,4EAA4E,oCAAoC,CAAC,6FAA6F,oCAAoC,CAAC,qHAAqH,eAAe,CAAC,yIAAyI,yCAAyC,CAAC,mDAAmD,CAAC,oGAAoG,oCAAoC,CAAC,sCAAsC,CAAC,4HAA4H,qCAAqC,CAAC,wDAAwD,uCAAuC,CAAC,mFAAmF,yCAAyC,CAAC,0CAA0C,CAAC,gIAAgI,gCAAgC,CAAC,oCAAoC,CAAC,uMAAuM,qBAAqB,CAAC,2DAA2D,gCAAgC,CAAC,0BAA0B,CAAC,4DAA4D,kBAAkB,CAAC,gJAAgJ,gBAAgB,CAAC,kLAAkL,eAAe,CAAC,wDAAwD,gBAAgB,CAAC,sDAAsD,eAAe,CAAC,gDAAgD,gBAAgB","sourcesContent":["/*\n * This combined file was created by the DataTables downloader builder:\n *   https://datatables.net/download\n *\n * To rebuild or modify this file with the latest versions of the included\n * software please visit:\n *   https://datatables.net/download/#dt/dt-2.0.8\n *\n * Included libraries:\n *   DataTables 2.0.8\n */\n\n:root{--dt-row-selected: 13, 110, 253;--dt-row-selected-text: 255, 255, 255;--dt-row-selected-link: 9, 10, 11;--dt-row-stripe: 0, 0, 0;--dt-row-hover: 0, 0, 0;--dt-column-ordering: 0, 0, 0;--dt-html-background: white}:root.dark{--dt-html-background: rgb(33, 37, 41)}table.dataTable td.dt-control{text-align:center;cursor:pointer}table.dataTable td.dt-control:before{display:inline-block;box-sizing:border-box;content:\"\";border-top:5px solid transparent;border-left:10px solid rgba(0, 0, 0, 0.5);border-bottom:5px solid transparent;border-right:0px solid transparent}table.dataTable tr.dt-hasChild td.dt-control:before{border-top:10px solid rgba(0, 0, 0, 0.5);border-left:5px solid transparent;border-bottom:0px solid transparent;border-right:5px solid transparent}html.dark table.dataTable td.dt-control:before,:root[data-bs-theme=dark] table.dataTable td.dt-control:before{border-left-color:rgba(255, 255, 255, 0.5)}html.dark table.dataTable tr.dt-hasChild td.dt-control:before,:root[data-bs-theme=dark] table.dataTable tr.dt-hasChild td.dt-control:before{border-top-color:rgba(255, 255, 255, 0.5);border-left-color:transparent}div.dt-scroll-body thead tr,div.dt-scroll-body tfoot tr{height:0}div.dt-scroll-body thead tr th,div.dt-scroll-body thead tr td,div.dt-scroll-body tfoot tr th,div.dt-scroll-body tfoot tr td{height:0 !important;padding-top:0px !important;padding-bottom:0px !important;border-top-width:0px !important;border-bottom-width:0px !important}div.dt-scroll-body thead tr th div.dt-scroll-sizing,div.dt-scroll-body thead tr td div.dt-scroll-sizing,div.dt-scroll-body tfoot tr th div.dt-scroll-sizing,div.dt-scroll-body tfoot tr td div.dt-scroll-sizing{height:0 !important;overflow:hidden !important}table.dataTable thead>tr>th:active,table.dataTable thead>tr>td:active{outline:none}table.dataTable thead>tr>th.dt-orderable-asc span.dt-column-order:before,table.dataTable thead>tr>th.dt-ordering-asc span.dt-column-order:before,table.dataTable thead>tr>td.dt-orderable-asc span.dt-column-order:before,table.dataTable thead>tr>td.dt-ordering-asc span.dt-column-order:before{position:absolute;display:block;bottom:50%;content:\"▲\";content:\"▲\"/\"\"}table.dataTable thead>tr>th.dt-orderable-desc span.dt-column-order:after,table.dataTable thead>tr>th.dt-ordering-desc span.dt-column-order:after,table.dataTable thead>tr>td.dt-orderable-desc span.dt-column-order:after,table.dataTable thead>tr>td.dt-ordering-desc span.dt-column-order:after{position:absolute;display:block;top:50%;content:\"▼\";content:\"▼\"/\"\"}table.dataTable thead>tr>th.dt-orderable-asc,table.dataTable thead>tr>th.dt-orderable-desc,table.dataTable thead>tr>th.dt-ordering-asc,table.dataTable thead>tr>th.dt-ordering-desc,table.dataTable thead>tr>td.dt-orderable-asc,table.dataTable thead>tr>td.dt-orderable-desc,table.dataTable thead>tr>td.dt-ordering-asc,table.dataTable thead>tr>td.dt-ordering-desc{position:relative;padding-right:30px}table.dataTable thead>tr>th.dt-orderable-asc span.dt-column-order,table.dataTable thead>tr>th.dt-orderable-desc span.dt-column-order,table.dataTable thead>tr>th.dt-ordering-asc span.dt-column-order,table.dataTable thead>tr>th.dt-ordering-desc span.dt-column-order,table.dataTable thead>tr>td.dt-orderable-asc span.dt-column-order,table.dataTable thead>tr>td.dt-orderable-desc span.dt-column-order,table.dataTable thead>tr>td.dt-ordering-asc span.dt-column-order,table.dataTable thead>tr>td.dt-ordering-desc span.dt-column-order{position:absolute;right:12px;top:0;bottom:0;width:12px}table.dataTable thead>tr>th.dt-orderable-asc span.dt-column-order:before,table.dataTable thead>tr>th.dt-orderable-asc span.dt-column-order:after,table.dataTable thead>tr>th.dt-orderable-desc span.dt-column-order:before,table.dataTable thead>tr>th.dt-orderable-desc span.dt-column-order:after,table.dataTable thead>tr>th.dt-ordering-asc span.dt-column-order:before,table.dataTable thead>tr>th.dt-ordering-asc span.dt-column-order:after,table.dataTable thead>tr>th.dt-ordering-desc span.dt-column-order:before,table.dataTable thead>tr>th.dt-ordering-desc span.dt-column-order:after,table.dataTable thead>tr>td.dt-orderable-asc span.dt-column-order:before,table.dataTable thead>tr>td.dt-orderable-asc span.dt-column-order:after,table.dataTable thead>tr>td.dt-orderable-desc span.dt-column-order:before,table.dataTable thead>tr>td.dt-orderable-desc span.dt-column-order:after,table.dataTable thead>tr>td.dt-ordering-asc span.dt-column-order:before,table.dataTable thead>tr>td.dt-ordering-asc span.dt-column-order:after,table.dataTable thead>tr>td.dt-ordering-desc span.dt-column-order:before,table.dataTable thead>tr>td.dt-ordering-desc span.dt-column-order:after{left:0;opacity:.125;line-height:9px;font-size:.8em}table.dataTable thead>tr>th.dt-orderable-asc,table.dataTable thead>tr>th.dt-orderable-desc,table.dataTable thead>tr>td.dt-orderable-asc,table.dataTable thead>tr>td.dt-orderable-desc{cursor:pointer}table.dataTable thead>tr>th.dt-orderable-asc:hover,table.dataTable thead>tr>th.dt-orderable-desc:hover,table.dataTable thead>tr>td.dt-orderable-asc:hover,table.dataTable thead>tr>td.dt-orderable-desc:hover{outline:2px solid rgba(0, 0, 0, 0.05);outline-offset:-2px}table.dataTable thead>tr>th.dt-ordering-asc span.dt-column-order:before,table.dataTable thead>tr>th.dt-ordering-desc span.dt-column-order:after,table.dataTable thead>tr>td.dt-ordering-asc span.dt-column-order:before,table.dataTable thead>tr>td.dt-ordering-desc span.dt-column-order:after{opacity:.6}table.dataTable thead>tr>th.sorting_desc_disabled span.dt-column-order:after,table.dataTable thead>tr>th.sorting_asc_disabled span.dt-column-order:before,table.dataTable thead>tr>td.sorting_desc_disabled span.dt-column-order:after,table.dataTable thead>tr>td.sorting_asc_disabled span.dt-column-order:before{display:none}table.dataTable thead>tr>th:active,table.dataTable thead>tr>td:active{outline:none}div.dt-scroll-body>table.dataTable>thead>tr>th,div.dt-scroll-body>table.dataTable>thead>tr>td{overflow:hidden}:root.dark table.dataTable thead>tr>th.dt-orderable-asc:hover,:root.dark table.dataTable thead>tr>th.dt-orderable-desc:hover,:root.dark table.dataTable thead>tr>td.dt-orderable-asc:hover,:root.dark table.dataTable thead>tr>td.dt-orderable-desc:hover,:root[data-bs-theme=dark] table.dataTable thead>tr>th.dt-orderable-asc:hover,:root[data-bs-theme=dark] table.dataTable thead>tr>th.dt-orderable-desc:hover,:root[data-bs-theme=dark] table.dataTable thead>tr>td.dt-orderable-asc:hover,:root[data-bs-theme=dark] table.dataTable thead>tr>td.dt-orderable-desc:hover{outline:2px solid rgba(255, 255, 255, 0.05)}div.dt-processing{position:absolute;top:50%;left:50%;width:200px;margin-left:-100px;margin-top:-22px;text-align:center;padding:2px;z-index:10}div.dt-processing>div:last-child{position:relative;width:80px;height:15px;margin:1em auto}div.dt-processing>div:last-child>div{position:absolute;top:0;width:13px;height:13px;border-radius:50%;background:rgb(13, 110, 253);background:rgb(var(--dt-row-selected));animation-timing-function:cubic-bezier(0, 1, 1, 0)}div.dt-processing>div:last-child>div:nth-child(1){left:8px;animation:datatables-loader-1 .6s infinite}div.dt-processing>div:last-child>div:nth-child(2){left:8px;animation:datatables-loader-2 .6s infinite}div.dt-processing>div:last-child>div:nth-child(3){left:32px;animation:datatables-loader-2 .6s infinite}div.dt-processing>div:last-child>div:nth-child(4){left:56px;animation:datatables-loader-3 .6s infinite}@keyframes datatables-loader-1{0%{transform:scale(0)}100%{transform:scale(1)}}@keyframes datatables-loader-3{0%{transform:scale(1)}100%{transform:scale(0)}}@keyframes datatables-loader-2{0%{transform:translate(0, 0)}100%{transform:translate(24px, 0)}}table.dataTable.nowrap th,table.dataTable.nowrap td{white-space:nowrap}table.dataTable th,table.dataTable td{box-sizing:border-box}table.dataTable th.dt-left,table.dataTable td.dt-left{text-align:left}table.dataTable th.dt-center,table.dataTable td.dt-center{text-align:center}table.dataTable th.dt-right,table.dataTable td.dt-right{text-align:right}table.dataTable th.dt-justify,table.dataTable td.dt-justify{text-align:justify}table.dataTable th.dt-nowrap,table.dataTable td.dt-nowrap{white-space:nowrap}table.dataTable th.dt-empty,table.dataTable td.dt-empty{text-align:center;vertical-align:top}table.dataTable th.dt-type-numeric,table.dataTable th.dt-type-date,table.dataTable td.dt-type-numeric,table.dataTable td.dt-type-date{text-align:right}table.dataTable thead th,table.dataTable thead td,table.dataTable tfoot th,table.dataTable tfoot td{text-align:left}table.dataTable thead th.dt-head-left,table.dataTable thead td.dt-head-left,table.dataTable tfoot th.dt-head-left,table.dataTable tfoot td.dt-head-left{text-align:left}table.dataTable thead th.dt-head-center,table.dataTable thead td.dt-head-center,table.dataTable tfoot th.dt-head-center,table.dataTable tfoot td.dt-head-center{text-align:center}table.dataTable thead th.dt-head-right,table.dataTable thead td.dt-head-right,table.dataTable tfoot th.dt-head-right,table.dataTable tfoot td.dt-head-right{text-align:right}table.dataTable thead th.dt-head-justify,table.dataTable thead td.dt-head-justify,table.dataTable tfoot th.dt-head-justify,table.dataTable tfoot td.dt-head-justify{text-align:justify}table.dataTable thead th.dt-head-nowrap,table.dataTable thead td.dt-head-nowrap,table.dataTable tfoot th.dt-head-nowrap,table.dataTable tfoot td.dt-head-nowrap{white-space:nowrap}table.dataTable tbody th.dt-body-left,table.dataTable tbody td.dt-body-left{text-align:left}table.dataTable tbody th.dt-body-center,table.dataTable tbody td.dt-body-center{text-align:center}table.dataTable tbody th.dt-body-right,table.dataTable tbody td.dt-body-right{text-align:right}table.dataTable tbody th.dt-body-justify,table.dataTable tbody td.dt-body-justify{text-align:justify}table.dataTable tbody th.dt-body-nowrap,table.dataTable tbody td.dt-body-nowrap{white-space:nowrap}table.dataTable{width:100%;margin:0 auto;border-spacing:0}table.dataTable thead th,table.dataTable tfoot th{font-weight:bold}table.dataTable>thead>tr>th,table.dataTable>thead>tr>td{padding:10px;border-bottom:1px solid rgba(0, 0, 0, 0.3)}table.dataTable>thead>tr>th:active,table.dataTable>thead>tr>td:active{outline:none}table.dataTable>tfoot>tr>th,table.dataTable>tfoot>tr>td{border-top:1px solid rgba(0, 0, 0, 0.3);padding:10px 10px 6px 10px}table.dataTable>tbody>tr{background-color:transparent}table.dataTable>tbody>tr:first-child>*{border-top:none}table.dataTable>tbody>tr:last-child>*{border-bottom:none}table.dataTable>tbody>tr.selected>*{box-shadow:inset 0 0 0 9999px rgba(13, 110, 253, 0.9);box-shadow:inset 0 0 0 9999px rgba(var(--dt-row-selected), 0.9);color:rgb(255, 255, 255);color:rgb(var(--dt-row-selected-text))}table.dataTable>tbody>tr.selected a{color:rgb(9, 10, 11);color:rgb(var(--dt-row-selected-link))}table.dataTable>tbody>tr>th,table.dataTable>tbody>tr>td{padding:8px 10px}table.dataTable.row-border>tbody>tr>*,table.dataTable.display>tbody>tr>*{border-top:1px solid rgba(0, 0, 0, 0.15)}table.dataTable.row-border>tbody>tr:first-child>*,table.dataTable.display>tbody>tr:first-child>*{border-top:none}table.dataTable.row-border>tbody>tr.selected+tr.selected>td,table.dataTable.display>tbody>tr.selected+tr.selected>td{border-top-color:rgba(13, 110, 253, 0.65);border-top-color:rgba(var(--dt-row-selected), 0.65)}table.dataTable.cell-border>tbody>tr>*{border-top:1px solid rgba(0, 0, 0, 0.15);border-right:1px solid rgba(0, 0, 0, 0.15)}table.dataTable.cell-border>tbody>tr>*:first-child{border-left:1px solid rgba(0, 0, 0, 0.15)}table.dataTable.cell-border>tbody>tr:first-child>*{border-top:1px solid rgba(0, 0, 0, 0.3)}table.dataTable.stripe>tbody>tr:nth-child(odd)>*,table.dataTable.display>tbody>tr:nth-child(odd)>*{box-shadow:inset 0 0 0 9999px rgba(0, 0, 0, 0.023);box-shadow:inset 0 0 0 9999px rgba(var(--dt-row-stripe), 0.023)}table.dataTable.stripe>tbody>tr:nth-child(odd).selected>*,table.dataTable.display>tbody>tr:nth-child(odd).selected>*{box-shadow:inset 0 0 0 9999px rgba(13, 110, 253, 0.923);box-shadow:inset 0 0 0 9999px rgba(var(--dt-row-selected), 0.923)}table.dataTable.hover>tbody>tr:hover>*,table.dataTable.display>tbody>tr:hover>*{box-shadow:inset 0 0 0 9999px rgba(0, 0, 0, 0.035);box-shadow:inset 0 0 0 9999px rgba(var(--dt-row-hover), 0.035)}table.dataTable.hover>tbody>tr.selected:hover>*,table.dataTable.display>tbody>tr.selected:hover>*{box-shadow:inset 0 0 0 9999px #0d6efd !important;box-shadow:inset 0 0 0 9999px rgba(var(--dt-row-selected), 1) !important}table.dataTable.order-column>tbody tr>.sorting_1,table.dataTable.order-column>tbody tr>.sorting_2,table.dataTable.order-column>tbody tr>.sorting_3,table.dataTable.display>tbody tr>.sorting_1,table.dataTable.display>tbody tr>.sorting_2,table.dataTable.display>tbody tr>.sorting_3{box-shadow:inset 0 0 0 9999px rgba(0, 0, 0, 0.019);box-shadow:inset 0 0 0 9999px rgba(var(--dt-column-ordering), 0.019)}table.dataTable.order-column>tbody tr.selected>.sorting_1,table.dataTable.order-column>tbody tr.selected>.sorting_2,table.dataTable.order-column>tbody tr.selected>.sorting_3,table.dataTable.display>tbody tr.selected>.sorting_1,table.dataTable.display>tbody tr.selected>.sorting_2,table.dataTable.display>tbody tr.selected>.sorting_3{box-shadow:inset 0 0 0 9999px rgba(13, 110, 253, 0.919);box-shadow:inset 0 0 0 9999px rgba(var(--dt-row-selected), 0.919)}table.dataTable.display>tbody>tr:nth-child(odd)>.sorting_1,table.dataTable.order-column.stripe>tbody>tr:nth-child(odd)>.sorting_1{box-shadow:inset 0 0 0 9999px rgba(0, 0, 0, 0.054);box-shadow:inset 0 0 0 9999px rgba(var(--dt-column-ordering), 0.054)}table.dataTable.display>tbody>tr:nth-child(odd)>.sorting_2,table.dataTable.order-column.stripe>tbody>tr:nth-child(odd)>.sorting_2{box-shadow:inset 0 0 0 9999px rgba(0, 0, 0, 0.047);box-shadow:inset 0 0 0 9999px rgba(var(--dt-column-ordering), 0.047)}table.dataTable.display>tbody>tr:nth-child(odd)>.sorting_3,table.dataTable.order-column.stripe>tbody>tr:nth-child(odd)>.sorting_3{box-shadow:inset 0 0 0 9999px rgba(0, 0, 0, 0.039);box-shadow:inset 0 0 0 9999px rgba(var(--dt-column-ordering), 0.039)}table.dataTable.display>tbody>tr:nth-child(odd).selected>.sorting_1,table.dataTable.order-column.stripe>tbody>tr:nth-child(odd).selected>.sorting_1{box-shadow:inset 0 0 0 9999px rgba(13, 110, 253, 0.954);box-shadow:inset 0 0 0 9999px rgba(var(--dt-row-selected), 0.954)}table.dataTable.display>tbody>tr:nth-child(odd).selected>.sorting_2,table.dataTable.order-column.stripe>tbody>tr:nth-child(odd).selected>.sorting_2{box-shadow:inset 0 0 0 9999px rgba(13, 110, 253, 0.947);box-shadow:inset 0 0 0 9999px rgba(var(--dt-row-selected), 0.947)}table.dataTable.display>tbody>tr:nth-child(odd).selected>.sorting_3,table.dataTable.order-column.stripe>tbody>tr:nth-child(odd).selected>.sorting_3{box-shadow:inset 0 0 0 9999px rgba(13, 110, 253, 0.939);box-shadow:inset 0 0 0 9999px rgba(var(--dt-row-selected), 0.939)}table.dataTable.display>tbody>tr.even>.sorting_1,table.dataTable.order-column.stripe>tbody>tr.even>.sorting_1{box-shadow:inset 0 0 0 9999px rgba(0, 0, 0, 0.019);box-shadow:inset 0 0 0 9999px rgba(var(--dt-column-ordering), 0.019)}table.dataTable.display>tbody>tr.even>.sorting_2,table.dataTable.order-column.stripe>tbody>tr.even>.sorting_2{box-shadow:inset 0 0 0 9999px rgba(0, 0, 0, 0.011);box-shadow:inset 0 0 0 9999px rgba(var(--dt-column-ordering), 0.011)}table.dataTable.display>tbody>tr.even>.sorting_3,table.dataTable.order-column.stripe>tbody>tr.even>.sorting_3{box-shadow:inset 0 0 0 9999px rgba(0, 0, 0, 0.003);box-shadow:inset 0 0 0 9999px rgba(var(--dt-column-ordering), 0.003)}table.dataTable.display>tbody>tr.even.selected>.sorting_1,table.dataTable.order-column.stripe>tbody>tr.even.selected>.sorting_1{box-shadow:inset 0 0 0 9999px rgba(13, 110, 253, 0.919);box-shadow:inset 0 0 0 9999px rgba(var(--dt-row-selected), 0.919)}table.dataTable.display>tbody>tr.even.selected>.sorting_2,table.dataTable.order-column.stripe>tbody>tr.even.selected>.sorting_2{box-shadow:inset 0 0 0 9999px rgba(13, 110, 253, 0.911);box-shadow:inset 0 0 0 9999px rgba(var(--dt-row-selected), 0.911)}table.dataTable.display>tbody>tr.even.selected>.sorting_3,table.dataTable.order-column.stripe>tbody>tr.even.selected>.sorting_3{box-shadow:inset 0 0 0 9999px rgba(13, 110, 253, 0.903);box-shadow:inset 0 0 0 9999px rgba(var(--dt-row-selected), 0.903)}table.dataTable.display tbody tr:hover>.sorting_1,table.dataTable.order-column.hover tbody tr:hover>.sorting_1{box-shadow:inset 0 0 0 9999px rgba(0, 0, 0, 0.082);box-shadow:inset 0 0 0 9999px rgba(var(--dt-row-hover), 0.082)}table.dataTable.display tbody tr:hover>.sorting_2,table.dataTable.order-column.hover tbody tr:hover>.sorting_2{box-shadow:inset 0 0 0 9999px rgba(0, 0, 0, 0.074);box-shadow:inset 0 0 0 9999px rgba(var(--dt-row-hover), 0.074)}table.dataTable.display tbody tr:hover>.sorting_3,table.dataTable.order-column.hover tbody tr:hover>.sorting_3{box-shadow:inset 0 0 0 9999px rgba(0, 0, 0, 0.062);box-shadow:inset 0 0 0 9999px rgba(var(--dt-row-hover), 0.062)}table.dataTable.display tbody tr:hover.selected>.sorting_1,table.dataTable.order-column.hover tbody tr:hover.selected>.sorting_1{box-shadow:inset 0 0 0 9999px rgba(13, 110, 253, 0.982);box-shadow:inset 0 0 0 9999px rgba(var(--dt-row-selected), 0.982)}table.dataTable.display tbody tr:hover.selected>.sorting_2,table.dataTable.order-column.hover tbody tr:hover.selected>.sorting_2{box-shadow:inset 0 0 0 9999px rgba(13, 110, 253, 0.974);box-shadow:inset 0 0 0 9999px rgba(var(--dt-row-selected), 0.974)}table.dataTable.display tbody tr:hover.selected>.sorting_3,table.dataTable.order-column.hover tbody tr:hover.selected>.sorting_3{box-shadow:inset 0 0 0 9999px rgba(13, 110, 253, 0.962);box-shadow:inset 0 0 0 9999px rgba(var(--dt-row-selected), 0.962)}table.dataTable.compact thead th,table.dataTable.compact thead td,table.dataTable.compact tfoot th,table.dataTable.compact tfoot td,table.dataTable.compact tbody th,table.dataTable.compact tbody td{padding:4px}div.dt-container{position:relative;clear:both}div.dt-container div.dt-layout-row{display:table;clear:both;width:100%}div.dt-container div.dt-layout-row.dt-layout-table{display:block}div.dt-container div.dt-layout-row.dt-layout-table div.dt-layout-cell{display:block}div.dt-container div.dt-layout-cell{display:table-cell;vertical-align:middle;padding:5px 0}div.dt-container div.dt-layout-cell.dt-full{text-align:center}div.dt-container div.dt-layout-cell.dt-start{text-align:left}div.dt-container div.dt-layout-cell.dt-end{text-align:right}div.dt-container div.dt-layout-cell:empty{display:none}div.dt-container .dt-search input{border:1px solid #aaa;border-radius:3px;padding:5px;background-color:transparent;color:inherit;margin-left:3px}div.dt-container .dt-input{border:1px solid #aaa;border-radius:3px;padding:5px;background-color:transparent;color:inherit}div.dt-container select.dt-input{padding:4px}div.dt-container .dt-paging .dt-paging-button{box-sizing:border-box;display:inline-block;min-width:1.5em;padding:.5em 1em;margin-left:2px;text-align:center;text-decoration:none !important;cursor:pointer;color:inherit !important;border:1px solid transparent;border-radius:2px;background:transparent}div.dt-container .dt-paging .dt-paging-button.current,div.dt-container .dt-paging .dt-paging-button.current:hover{color:inherit !important;border:1px solid rgba(0, 0, 0, 0.3);background-color:rgba(0, 0, 0, 0.05);background:-webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(230, 230, 230, 0.05)), color-stop(100%, rgba(0, 0, 0, 0.05)));background:-webkit-linear-gradient(top, rgba(230, 230, 230, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%);background:-moz-linear-gradient(top, rgba(230, 230, 230, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%);background:-ms-linear-gradient(top, rgba(230, 230, 230, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%);background:-o-linear-gradient(top, rgba(230, 230, 230, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%);background:linear-gradient(to bottom, rgba(230, 230, 230, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%)}div.dt-container .dt-paging .dt-paging-button.disabled,div.dt-container .dt-paging .dt-paging-button.disabled:hover,div.dt-container .dt-paging .dt-paging-button.disabled:active{cursor:default;color:rgba(0, 0, 0, 0.5) !important;border:1px solid transparent;background:transparent;box-shadow:none}div.dt-container .dt-paging .dt-paging-button:hover{color:white !important;border:1px solid #111;background-color:#111;background:-webkit-gradient(linear, left top, left bottom, color-stop(0%, #585858), color-stop(100%, #111));background:-webkit-linear-gradient(top, #585858 0%, #111 100%);background:-moz-linear-gradient(top, #585858 0%, #111 100%);background:-ms-linear-gradient(top, #585858 0%, #111 100%);background:-o-linear-gradient(top, #585858 0%, #111 100%);background:linear-gradient(to bottom, #585858 0%, #111 100%)}div.dt-container .dt-paging .dt-paging-button:active{outline:none;background-color:#0c0c0c;background:-webkit-gradient(linear, left top, left bottom, color-stop(0%, #2b2b2b), color-stop(100%, #0c0c0c));background:-webkit-linear-gradient(top, #2b2b2b 0%, #0c0c0c 100%);background:-moz-linear-gradient(top, #2b2b2b 0%, #0c0c0c 100%);background:-ms-linear-gradient(top, #2b2b2b 0%, #0c0c0c 100%);background:-o-linear-gradient(top, #2b2b2b 0%, #0c0c0c 100%);background:linear-gradient(to bottom, #2b2b2b 0%, #0c0c0c 100%);box-shadow:inset 0 0 3px #111}div.dt-container .dt-paging .ellipsis{padding:0 1em}div.dt-container .dt-length,div.dt-container .dt-search,div.dt-container .dt-info,div.dt-container .dt-processing,div.dt-container .dt-paging{color:inherit}div.dt-container .dataTables_scroll{clear:both}div.dt-container .dataTables_scroll div.dt-scroll-body{-webkit-overflow-scrolling:touch}div.dt-container .dataTables_scroll div.dt-scroll-body>table>thead>tr>th,div.dt-container .dataTables_scroll div.dt-scroll-body>table>thead>tr>td,div.dt-container .dataTables_scroll div.dt-scroll-body>table>tbody>tr>th,div.dt-container .dataTables_scroll div.dt-scroll-body>table>tbody>tr>td{vertical-align:middle}div.dt-container .dataTables_scroll div.dt-scroll-body>table>thead>tr>th>div.dataTables_sizing,div.dt-container .dataTables_scroll div.dt-scroll-body>table>thead>tr>td>div.dataTables_sizing,div.dt-container .dataTables_scroll div.dt-scroll-body>table>tbody>tr>th>div.dataTables_sizing,div.dt-container .dataTables_scroll div.dt-scroll-body>table>tbody>tr>td>div.dataTables_sizing{height:0;overflow:hidden;margin:0 !important;padding:0 !important}div.dt-container.dt-empty-footer tbody>tr:last-child>*{border-bottom:1px solid rgba(0, 0, 0, 0.3)}div.dt-container.dt-empty-footer .dt-scroll-body{border-bottom:1px solid rgba(0, 0, 0, 0.3)}div.dt-container.dt-empty-footer .dt-scroll-body tbody>tr:last-child>*{border-bottom:none}@media screen and (max-width: 767px){div.dt-container div.dt-layout-row{display:block}div.dt-container div.dt-layout-cell{display:block}div.dt-container div.dt-layout-cell.dt-full,div.dt-container div.dt-layout-cell.dt-start,div.dt-container div.dt-layout-cell.dt-end{text-align:center}}@media screen and (max-width: 640px){.dt-container .dt-length,.dt-container .dt-search{float:none;text-align:center}.dt-container .dt-search{margin-top:.5em}}html.dark{--dt-row-hover: 255, 255, 255;--dt-row-stripe: 255, 255, 255;--dt-column-ordering: 255, 255, 255}html.dark table.dataTable>thead>tr>th,html.dark table.dataTable>thead>tr>td{border-bottom:1px solid rgb(89, 91, 94)}html.dark table.dataTable>thead>tr>th:active,html.dark table.dataTable>thead>tr>td:active{outline:none}html.dark table.dataTable>tfoot>tr>th,html.dark table.dataTable>tfoot>tr>td{border-top:1px solid rgb(89, 91, 94)}html.dark table.dataTable.row-border>tbody>tr>*,html.dark table.dataTable.display>tbody>tr>*{border-top:1px solid rgb(64, 67, 70)}html.dark table.dataTable.row-border>tbody>tr:first-child>*,html.dark table.dataTable.display>tbody>tr:first-child>*{border-top:none}html.dark table.dataTable.row-border>tbody>tr.selected+tr.selected>td,html.dark table.dataTable.display>tbody>tr.selected+tr.selected>td{border-top-color:rgba(13, 110, 253, 0.65);border-top-color:rgba(var(--dt-row-selected), 0.65)}html.dark table.dataTable.cell-border>tbody>tr>th,html.dark table.dataTable.cell-border>tbody>tr>td{border-top:1px solid rgb(64, 67, 70);border-right:1px solid rgb(64, 67, 70)}html.dark table.dataTable.cell-border>tbody>tr>th:first-child,html.dark table.dataTable.cell-border>tbody>tr>td:first-child{border-left:1px solid rgb(64, 67, 70)}html.dark .dt-container.dt-empty-footer table.dataTable{border-bottom:1px solid rgb(89, 91, 94)}html.dark .dt-container .dt-search input,html.dark .dt-container .dt-length select{border:1px solid rgba(255, 255, 255, 0.2);background-color:var(--dt-html-background)}html.dark .dt-container .dt-paging .dt-paging-button.current,html.dark .dt-container .dt-paging .dt-paging-button.current:hover{border:1px solid rgb(89, 91, 94);background:rgba(255, 255, 255, 0.15)}html.dark .dt-container .dt-paging .dt-paging-button.disabled,html.dark .dt-container .dt-paging .dt-paging-button.disabled:hover,html.dark .dt-container .dt-paging .dt-paging-button.disabled:active{color:#666 !important}html.dark .dt-container .dt-paging .dt-paging-button:hover{border:1px solid rgb(53, 53, 53);background:rgb(53, 53, 53)}html.dark .dt-container .dt-paging .dt-paging-button:active{background:#3a3a3a}*[dir=rtl] table.dataTable thead th,*[dir=rtl] table.dataTable thead td,*[dir=rtl] table.dataTable tfoot th,*[dir=rtl] table.dataTable tfoot td{text-align:right}*[dir=rtl] table.dataTable th.dt-type-numeric,*[dir=rtl] table.dataTable th.dt-type-date,*[dir=rtl] table.dataTable td.dt-type-numeric,*[dir=rtl] table.dataTable td.dt-type-date{text-align:left}*[dir=rtl] div.dt-container div.dt-layout-cell.dt-start{text-align:right}*[dir=rtl] div.dt-container div.dt-layout-cell.dt-end{text-align:left}*[dir=rtl] div.dt-container div.dt-search input{margin:0 3px 0 0}\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/pages/css/custom.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/css/custom.css ***!
  \************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".flex {\r\n    display: flex;\r\n    justify-content: space-between; /* Distributes items evenly across the main axis */\r\n}\r\n.grow {\r\n    flex-grow: 1;\r\n}\r\n.no-grow {\r\n    flex-grow: 0;\r\n}\r\n\r\n.gap-1{\r\n    gap: 1px;\r\n}\r\n\r\n.gap-5{\r\n    gap: 5px;\r\n}\r\n\r\n.gap-10{\r\n    gap: 10px;\r\n}\r\n\r\n.dialog-list-item {\r\n    border-radius: 5px;\r\n    color: #fff;\r\n}\r\n\r\n.dialog-list-item:hover {\r\n    background-color: rgba(255,255,255,0.1);\r\n}\r\n\r\n.dialog-list-item-selected {\r\n    color: #fff;\r\n    border-radius: 5px;\r\n    background-color: rgba(255,255,255,0.1);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/pages/css/custom.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,8BAA8B,EAAE,kDAAkD;AACtF;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;;AAEA;IACI,QAAQ;AACZ;;AAEA;IACI,QAAQ;AACZ;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,uCAAuC;AAC3C","sourcesContent":[".flex {\r\n    display: flex;\r\n    justify-content: space-between; /* Distributes items evenly across the main axis */\r\n}\r\n.grow {\r\n    flex-grow: 1;\r\n}\r\n.no-grow {\r\n    flex-grow: 0;\r\n}\r\n\r\n.gap-1{\r\n    gap: 1px;\r\n}\r\n\r\n.gap-5{\r\n    gap: 5px;\r\n}\r\n\r\n.gap-10{\r\n    gap: 10px;\r\n}\r\n\r\n.dialog-list-item {\r\n    border-radius: 5px;\r\n    color: #fff;\r\n}\r\n\r\n.dialog-list-item:hover {\r\n    background-color: rgba(255,255,255,0.1);\r\n}\r\n\r\n.dialog-list-item-selected {\r\n    color: #fff;\r\n    border-radius: 5px;\r\n    background-color: rgba(255,255,255,0.1);\r\n}\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "\r\n::-webkit-scrollbar {\r\n    width: 10px;\r\n}\r\n::-webkit-scrollbar-corner {\r\n    background: rgba(0,0,0,0);\r\n}\r\n::-webkit-scrollbar-thumb {\r\n    background-color: #5f5858;\r\n    border-radius: 3px;\r\n    border: 2px solid rgba(0,0,0,0);\r\n    background-clip: content-box;\r\n    min-width: 7px;\r\n    min-height: 7px;\r\n}\r\n::-webkit-scrollbar-track {\r\n    background-color: rgba(0,0,0,0);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/pages/css/scrollbar.css"],"names":[],"mappings":";AACA;IACI,WAAW;AACf;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,yBAAyB;IACzB,kBAAkB;IAClB,+BAA+B;IAC/B,4BAA4B;IAC5B,cAAc;IACd,eAAe;AACnB;AACA;IACI,+BAA+B;AACnC","sourcesContent":["\r\n::-webkit-scrollbar {\r\n    width: 10px;\r\n}\r\n::-webkit-scrollbar-corner {\r\n    background: rgba(0,0,0,0);\r\n}\r\n::-webkit-scrollbar-thumb {\r\n    background-color: #5f5858;\r\n    border-radius: 3px;\r\n    border: 2px solid rgba(0,0,0,0);\r\n    background-clip: content-box;\r\n    min-width: 7px;\r\n    min-height: 7px;\r\n}\r\n::-webkit-scrollbar-track {\r\n    background-color: rgba(0,0,0,0);\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/datatables/datatables.min.css":
/*!*******************************************!*\
  !*** ./src/datatables/datatables.min.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_datatables_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./datatables.min.css */ "./node_modules/css-loader/dist/cjs.js!./src/datatables/datatables.min.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_datatables_min_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_datatables_min_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./src/pages/css/custom.css":
/*!**********************************!*\
  !*** ./src/pages/css/custom.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_custom_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./custom.css */ "./node_modules/css-loader/dist/cjs.js!./src/pages/css/custom.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_custom_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_custom_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "datatables.net":
/*!*********************************!*\
  !*** external "datatables.net" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("datatables.net");

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

/***/ "lightweight-charts":
/*!*************************************!*\
  !*** external "lightweight-charts" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("lightweight-charts");

/***/ }),

/***/ "luxon":
/*!************************!*\
  !*** external "luxon" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("luxon");

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
/*!***************************!*\
  !*** ./src/pages/news.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/core */ "./src/pages/common/core.js");
/* harmony import */ var _css_bootstrap_discord_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/bootstrap-discord.min.css */ "./src/pages/css/bootstrap-discord.min.css");
/* harmony import */ var _datatables_newsTableClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../datatables/newsTableClass */ "./src/datatables/newsTableClass.js");



(0,_common_core__WEBPACK_IMPORTED_MODULE_0__.$)(() => {
  window.title = "Tradex2 | News";
  (0,_common_core__WEBPACK_IMPORTED_MODULE_0__.$)("#spinner").show();
  (0,_common_core__WEBPACK_IMPORTED_MODULE_0__.$)("#contentContainer").hide();

  // $("#nav").hide();
  setTimeout(() => {
    (0,_common_core__WEBPACK_IMPORTED_MODULE_0__.$)("#spinner").fadeOut();
    (0,_common_core__WEBPACK_IMPORTED_MODULE_0__.$)("#contentContainer").fadeIn();
    new _datatables_newsTableClass__WEBPACK_IMPORTED_MODULE_2__.NewsTable("news");
  }, 2000);
});
})();

/******/ })()
;
//# sourceMappingURL=news.js.map