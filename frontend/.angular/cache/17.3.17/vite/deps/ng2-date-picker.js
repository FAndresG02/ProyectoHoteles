import {
  DefaultValueAccessor,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgControlStatus,
  NgModel
} from "./chunk-U6K6WQAI.js";
import {
  CommonModule,
  DOCUMENT,
  Location,
  NgClass,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  isPlatformBrowser
} from "./chunk-FB6K5SR4.js";
import {
  ANIMATION_MODULE_TYPE,
  ApplicationRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver$1,
  ConnectableObservable,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  InputFlags,
  IterableDiffers,
  NgModule,
  NgZone,
  Observable,
  Optional,
  Output,
  PLATFORM_ID,
  Renderer2,
  SkipSelf,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  __commonJS,
  __spreadProps,
  __spreadValues,
  __toESM,
  animationFrameScheduler,
  asapScheduler,
  auditTime,
  booleanAttribute,
  distinctUntilChanged,
  filter,
  forwardRef,
  fromEvent,
  inject,
  isObservable,
  merge,
  of,
  pairwise,
  setClassMetadata,
  shareReplay,
  startWith,
  switchMap,
  take,
  takeUntil,
  takeWhile,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-FKCBPB56.js";

// node_modules/dayjs/dayjs.min.js
var require_dayjs_min = __commonJS({
  "node_modules/dayjs/dayjs.min.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e();
    }(exports, function() {
      "use strict";
      var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
        var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
        return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
      } }, m = function(t2, e2, n2) {
        var r2 = String(t2);
        return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
      }, v = { s: m, z: function(t2) {
        var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
        return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
      }, m: function t2(e2, n2) {
        if (e2.date() < n2.date()) return -t2(n2, e2);
        var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, c), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), c);
        return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
      }, a: function(t2) {
        return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
      }, p: function(t2) {
        return { M: c, y: h, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: f }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t2) {
        return void 0 === t2;
      } }, g = "en", D = {};
      D[g] = M;
      var p = "$isDayjsObject", S = function(t2) {
        return t2 instanceof _ || !(!t2 || !t2[p]);
      }, w = function t2(e2, n2, r2) {
        var i2;
        if (!e2) return g;
        if ("string" == typeof e2) {
          var s2 = e2.toLowerCase();
          D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
          var u2 = e2.split("-");
          if (!i2 && u2.length > 1) return t2(u2[0]);
        } else {
          var a2 = e2.name;
          D[a2] = e2, i2 = a2;
        }
        return !r2 && i2 && (g = i2), i2 || !r2 && g;
      }, O = function(t2, e2) {
        if (S(t2)) return t2.clone();
        var n2 = "object" == typeof e2 ? e2 : {};
        return n2.date = t2, n2.args = arguments, new _(n2);
      }, b = v;
      b.l = w, b.i = S, b.w = function(t2, e2) {
        return O(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
      };
      var _ = function() {
        function M2(t2) {
          this.$L = w(t2.locale, null, true), this.parse(t2), this.$x = this.$x || t2.x || {}, this[p] = true;
        }
        var m2 = M2.prototype;
        return m2.parse = function(t2) {
          this.$d = function(t3) {
            var e2 = t3.date, n2 = t3.utc;
            if (null === e2) return /* @__PURE__ */ new Date(NaN);
            if (b.u(e2)) return /* @__PURE__ */ new Date();
            if (e2 instanceof Date) return new Date(e2);
            if ("string" == typeof e2 && !/Z$/i.test(e2)) {
              var r2 = e2.match($);
              if (r2) {
                var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
              }
            }
            return new Date(e2);
          }(t2), this.init();
        }, m2.init = function() {
          var t2 = this.$d;
          this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
        }, m2.$utils = function() {
          return b;
        }, m2.isValid = function() {
          return !(this.$d.toString() === l);
        }, m2.isSame = function(t2, e2) {
          var n2 = O(t2);
          return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
        }, m2.isAfter = function(t2, e2) {
          return O(t2) < this.startOf(e2);
        }, m2.isBefore = function(t2, e2) {
          return this.endOf(e2) < O(t2);
        }, m2.$g = function(t2, e2, n2) {
          return b.u(t2) ? this[e2] : this.set(n2, t2);
        }, m2.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m2.valueOf = function() {
          return this.$d.getTime();
        }, m2.startOf = function(t2, e2) {
          var n2 = this, r2 = !!b.u(e2) || e2, f2 = b.p(t2), l2 = function(t3, e3) {
            var i2 = b.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
            return r2 ? i2 : i2.endOf(a);
          }, $2 = function(t3, e3) {
            return b.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
          }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
          switch (f2) {
            case h:
              return r2 ? l2(1, 0) : l2(31, 11);
            case c:
              return r2 ? l2(1, M3) : l2(0, M3 + 1);
            case o:
              var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
              return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
            case a:
            case d:
              return $2(v2 + "Hours", 0);
            case u:
              return $2(v2 + "Minutes", 1);
            case s:
              return $2(v2 + "Seconds", 2);
            case i:
              return $2(v2 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m2.endOf = function(t2) {
          return this.startOf(t2, false);
        }, m2.$set = function(t2, e2) {
          var n2, o2 = b.p(t2), f2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = f2 + "Date", n2[d] = f2 + "Date", n2[c] = f2 + "Month", n2[h] = f2 + "FullYear", n2[u] = f2 + "Hours", n2[s] = f2 + "Minutes", n2[i] = f2 + "Seconds", n2[r] = f2 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
          if (o2 === c || o2 === h) {
            var y2 = this.clone().set(d, 1);
            y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
          } else l2 && this.$d[l2]($2);
          return this.init(), this;
        }, m2.set = function(t2, e2) {
          return this.clone().$set(t2, e2);
        }, m2.get = function(t2) {
          return this[b.p(t2)]();
        }, m2.add = function(r2, f2) {
          var d2, l2 = this;
          r2 = Number(r2);
          var $2 = b.p(f2), y2 = function(t2) {
            var e2 = O(l2);
            return b.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
          };
          if ($2 === c) return this.set(c, this.$M + r2);
          if ($2 === h) return this.set(h, this.$y + r2);
          if ($2 === a) return y2(1);
          if ($2 === o) return y2(7);
          var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r2 * M3;
          return b.w(m3, this);
        }, m2.subtract = function(t2, e2) {
          return this.add(-1 * t2, e2);
        }, m2.format = function(t2) {
          var e2 = this, n2 = this.$locale();
          if (!this.isValid()) return n2.invalidDate || l;
          var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, c2 = n2.months, f2 = n2.meridiem, h2 = function(t3, n3, i3, s3) {
            return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
          }, d2 = function(t3) {
            return b.s(s2 % 12 || 12, t3, "0");
          }, $2 = f2 || function(t3, e3, n3) {
            var r3 = t3 < 12 ? "AM" : "PM";
            return n3 ? r3.toLowerCase() : r3;
          };
          return r2.replace(y, function(t3, r3) {
            return r3 || function(t4) {
              switch (t4) {
                case "YY":
                  return String(e2.$y).slice(-2);
                case "YYYY":
                  return b.s(e2.$y, 4, "0");
                case "M":
                  return a2 + 1;
                case "MM":
                  return b.s(a2 + 1, 2, "0");
                case "MMM":
                  return h2(n2.monthsShort, a2, c2, 3);
                case "MMMM":
                  return h2(c2, a2);
                case "D":
                  return e2.$D;
                case "DD":
                  return b.s(e2.$D, 2, "0");
                case "d":
                  return String(e2.$W);
                case "dd":
                  return h2(n2.weekdaysMin, e2.$W, o2, 2);
                case "ddd":
                  return h2(n2.weekdaysShort, e2.$W, o2, 3);
                case "dddd":
                  return o2[e2.$W];
                case "H":
                  return String(s2);
                case "HH":
                  return b.s(s2, 2, "0");
                case "h":
                  return d2(1);
                case "hh":
                  return d2(2);
                case "a":
                  return $2(s2, u2, true);
                case "A":
                  return $2(s2, u2, false);
                case "m":
                  return String(u2);
                case "mm":
                  return b.s(u2, 2, "0");
                case "s":
                  return String(e2.$s);
                case "ss":
                  return b.s(e2.$s, 2, "0");
                case "SSS":
                  return b.s(e2.$ms, 3, "0");
                case "Z":
                  return i2;
              }
              return null;
            }(t3) || i2.replace(":", "");
          });
        }, m2.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m2.diff = function(r2, d2, l2) {
          var $2, y2 = this, M3 = b.p(d2), m3 = O(r2), v2 = (m3.utcOffset() - this.utcOffset()) * e, g2 = this - m3, D2 = function() {
            return b.m(y2, m3);
          };
          switch (M3) {
            case h:
              $2 = D2() / 12;
              break;
            case c:
              $2 = D2();
              break;
            case f:
              $2 = D2() / 3;
              break;
            case o:
              $2 = (g2 - v2) / 6048e5;
              break;
            case a:
              $2 = (g2 - v2) / 864e5;
              break;
            case u:
              $2 = g2 / n;
              break;
            case s:
              $2 = g2 / e;
              break;
            case i:
              $2 = g2 / t;
              break;
            default:
              $2 = g2;
          }
          return l2 ? $2 : b.a($2);
        }, m2.daysInMonth = function() {
          return this.endOf(c).$D;
        }, m2.$locale = function() {
          return D[this.$L];
        }, m2.locale = function(t2, e2) {
          if (!t2) return this.$L;
          var n2 = this.clone(), r2 = w(t2, e2, true);
          return r2 && (n2.$L = r2), n2;
        }, m2.clone = function() {
          return b.w(this.$d, this);
        }, m2.toDate = function() {
          return new Date(this.valueOf());
        }, m2.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, m2.toISOString = function() {
          return this.$d.toISOString();
        }, m2.toString = function() {
          return this.$d.toUTCString();
        }, M2;
      }(), k = _.prototype;
      return O.prototype = k, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach(function(t2) {
        k[t2[1]] = function(e2) {
          return this.$g(e2, t2[0], t2[1]);
        };
      }), O.extend = function(t2, e2) {
        return t2.$i || (t2(e2, _, O), t2.$i = true), O;
      }, O.locale = w, O.isDayjs = S, O.unix = function(t2) {
        return O(1e3 * t2);
      }, O.en = D[g], O.Ls = D, O.p = {}, O;
    });
  }
});

// node_modules/dayjs/plugin/isSameOrAfter.js
var require_isSameOrAfter = __commonJS({
  "node_modules/dayjs/plugin/isSameOrAfter.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_isSameOrAfter = t();
    }(exports, function() {
      "use strict";
      return function(e, t) {
        t.prototype.isSameOrAfter = function(e2, t2) {
          return this.isSame(e2, t2) || this.isAfter(e2, t2);
        };
      };
    });
  }
});

// node_modules/dayjs/plugin/isSameOrBefore.js
var require_isSameOrBefore = __commonJS({
  "node_modules/dayjs/plugin/isSameOrBefore.js"(exports, module) {
    !function(e, i) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_isSameOrBefore = i();
    }(exports, function() {
      "use strict";
      return function(e, i) {
        i.prototype.isSameOrBefore = function(e2, i2) {
          return this.isSame(e2, i2) || this.isBefore(e2, i2);
        };
      };
    });
  }
});

// node_modules/dayjs/plugin/isBetween.js
var require_isBetween = __commonJS({
  "node_modules/dayjs/plugin/isBetween.js"(exports, module) {
    !function(e, i) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_isBetween = i();
    }(exports, function() {
      "use strict";
      return function(e, i, t) {
        i.prototype.isBetween = function(e2, i2, s, f) {
          var n = t(e2), o = t(i2), r = "(" === (f = f || "()")[0], u = ")" === f[1];
          return (r ? this.isAfter(n, s) : !this.isBefore(n, s)) && (u ? this.isBefore(o, s) : !this.isAfter(o, s)) || (r ? this.isBefore(n, s) : !this.isAfter(n, s)) && (u ? this.isAfter(o, s) : !this.isBefore(o, s));
        };
      };
    });
  }
});

// node_modules/dayjs/plugin/isoWeek.js
var require_isoWeek = __commonJS({
  "node_modules/dayjs/plugin/isoWeek.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_isoWeek = t();
    }(exports, function() {
      "use strict";
      var e = "day";
      return function(t, i, s) {
        var a = function(t2) {
          return t2.add(4 - t2.isoWeekday(), e);
        }, d = i.prototype;
        d.isoWeekYear = function() {
          return a(this).year();
        }, d.isoWeek = function(t2) {
          if (!this.$utils().u(t2)) return this.add(7 * (t2 - this.isoWeek()), e);
          var i2, d2, n2, o, r = a(this), u = (i2 = this.isoWeekYear(), d2 = this.$u, n2 = (d2 ? s.utc : s)().year(i2).startOf("year"), o = 4 - n2.isoWeekday(), n2.isoWeekday() > 4 && (o += 7), n2.add(o, e));
          return r.diff(u, "week") + 1;
        }, d.isoWeekday = function(e2) {
          return this.$utils().u(e2) ? this.day() || 7 : this.day(this.day() % 7 ? e2 : e2 - 7);
        };
        var n = d.startOf;
        d.startOf = function(e2, t2) {
          var i2 = this.$utils(), s2 = !!i2.u(t2) || t2;
          return "isoweek" === i2.p(e2) ? s2 ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : n.bind(this)(e2, t2);
        };
      };
    });
  }
});

// node_modules/dayjs/plugin/customParseFormat.js
var require_customParseFormat = __commonJS({
  "node_modules/dayjs/plugin/customParseFormat.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_customParseFormat = t();
    }(exports, function() {
      "use strict";
      var e = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, n = /\d/, r = /\d\d/, i = /\d\d?/, o = /\d*[^-_:/,()\s\d]+/, s = {}, a = function(e2) {
        return (e2 = +e2) + (e2 > 68 ? 1900 : 2e3);
      };
      var f = function(e2) {
        return function(t2) {
          this[e2] = +t2;
        };
      }, h = [/[+-]\d\d:?(\d\d)?|Z/, function(e2) {
        (this.zone || (this.zone = {})).offset = function(e3) {
          if (!e3) return 0;
          if ("Z" === e3) return 0;
          var t2 = e3.match(/([+-]|\d\d)/g), n2 = 60 * t2[1] + (+t2[2] || 0);
          return 0 === n2 ? 0 : "+" === t2[0] ? -n2 : n2;
        }(e2);
      }], u = function(e2) {
        var t2 = s[e2];
        return t2 && (t2.indexOf ? t2 : t2.s.concat(t2.f));
      }, d = function(e2, t2) {
        var n2, r2 = s.meridiem;
        if (r2) {
          for (var i2 = 1; i2 <= 24; i2 += 1) if (e2.indexOf(r2(i2, 0, t2)) > -1) {
            n2 = i2 > 12;
            break;
          }
        } else n2 = e2 === (t2 ? "pm" : "PM");
        return n2;
      }, c = { A: [o, function(e2) {
        this.afternoon = d(e2, false);
      }], a: [o, function(e2) {
        this.afternoon = d(e2, true);
      }], Q: [n, function(e2) {
        this.month = 3 * (e2 - 1) + 1;
      }], S: [n, function(e2) {
        this.milliseconds = 100 * +e2;
      }], SS: [r, function(e2) {
        this.milliseconds = 10 * +e2;
      }], SSS: [/\d{3}/, function(e2) {
        this.milliseconds = +e2;
      }], s: [i, f("seconds")], ss: [i, f("seconds")], m: [i, f("minutes")], mm: [i, f("minutes")], H: [i, f("hours")], h: [i, f("hours")], HH: [i, f("hours")], hh: [i, f("hours")], D: [i, f("day")], DD: [r, f("day")], Do: [o, function(e2) {
        var t2 = s.ordinal, n2 = e2.match(/\d+/);
        if (this.day = n2[0], t2) for (var r2 = 1; r2 <= 31; r2 += 1) t2(r2).replace(/\[|\]/g, "") === e2 && (this.day = r2);
      }], w: [i, f("week")], ww: [r, f("week")], M: [i, f("month")], MM: [r, f("month")], MMM: [o, function(e2) {
        var t2 = u("months"), n2 = (u("monthsShort") || t2.map(function(e3) {
          return e3.slice(0, 3);
        })).indexOf(e2) + 1;
        if (n2 < 1) throw new Error();
        this.month = n2 % 12 || n2;
      }], MMMM: [o, function(e2) {
        var t2 = u("months").indexOf(e2) + 1;
        if (t2 < 1) throw new Error();
        this.month = t2 % 12 || t2;
      }], Y: [/[+-]?\d+/, f("year")], YY: [r, function(e2) {
        this.year = a(e2);
      }], YYYY: [/\d{4}/, f("year")], Z: h, ZZ: h };
      function l(n2) {
        var r2, i2;
        r2 = n2, i2 = s && s.formats;
        for (var o2 = (n2 = r2.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(t2, n3, r3) {
          var o3 = r3 && r3.toUpperCase();
          return n3 || i2[r3] || e[r3] || i2[o3].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(e2, t3, n4) {
            return t3 || n4.slice(1);
          });
        })).match(t), a2 = o2.length, f2 = 0; f2 < a2; f2 += 1) {
          var h2 = o2[f2], u2 = c[h2], d2 = u2 && u2[0], l2 = u2 && u2[1];
          o2[f2] = l2 ? { regex: d2, parser: l2 } : h2.replace(/^\[|\]$/g, "");
        }
        return function(e2) {
          for (var t2 = {}, n3 = 0, r3 = 0; n3 < a2; n3 += 1) {
            var i3 = o2[n3];
            if ("string" == typeof i3) r3 += i3.length;
            else {
              var s2 = i3.regex, f3 = i3.parser, h3 = e2.slice(r3), u3 = s2.exec(h3)[0];
              f3.call(t2, u3), e2 = e2.replace(u3, "");
            }
          }
          return function(e3) {
            var t3 = e3.afternoon;
            if (void 0 !== t3) {
              var n4 = e3.hours;
              t3 ? n4 < 12 && (e3.hours += 12) : 12 === n4 && (e3.hours = 0), delete e3.afternoon;
            }
          }(t2), t2;
        };
      }
      return function(e2, t2, n2) {
        n2.p.customParseFormat = true, e2 && e2.parseTwoDigitYear && (a = e2.parseTwoDigitYear);
        var r2 = t2.prototype, i2 = r2.parse;
        r2.parse = function(e3) {
          var t3 = e3.date, r3 = e3.utc, o2 = e3.args;
          this.$u = r3;
          var a2 = o2[1];
          if ("string" == typeof a2) {
            var f2 = true === o2[2], h2 = true === o2[3], u2 = f2 || h2, d2 = o2[2];
            h2 && (d2 = o2[2]), s = this.$locale(), !f2 && d2 && (s = n2.Ls[d2]), this.$d = function(e4, t4, n3, r4) {
              try {
                if (["x", "X"].indexOf(t4) > -1) return new Date(("X" === t4 ? 1e3 : 1) * e4);
                var i3 = l(t4)(e4), o3 = i3.year, s2 = i3.month, a3 = i3.day, f3 = i3.hours, h3 = i3.minutes, u3 = i3.seconds, d3 = i3.milliseconds, c3 = i3.zone, m2 = i3.week, M2 = /* @__PURE__ */ new Date(), Y = a3 || (o3 || s2 ? 1 : M2.getDate()), p = o3 || M2.getFullYear(), v = 0;
                o3 && !s2 || (v = s2 > 0 ? s2 - 1 : M2.getMonth());
                var D, w = f3 || 0, g = h3 || 0, y = u3 || 0, L = d3 || 0;
                return c3 ? new Date(Date.UTC(p, v, Y, w, g, y, L + 60 * c3.offset * 1e3)) : n3 ? new Date(Date.UTC(p, v, Y, w, g, y, L)) : (D = new Date(p, v, Y, w, g, y, L), m2 && (D = r4(D).week(m2).toDate()), D);
              } catch (e5) {
                return /* @__PURE__ */ new Date("");
              }
            }(t3, a2, r3, n2), this.init(), d2 && true !== d2 && (this.$L = this.locale(d2).$L), u2 && t3 != this.format(a2) && (this.$d = /* @__PURE__ */ new Date("")), s = {};
          } else if (a2 instanceof Array) for (var c2 = a2.length, m = 1; m <= c2; m += 1) {
            o2[1] = a2[m - 1];
            var M = n2.apply(this, o2);
            if (M.isValid()) {
              this.$d = M.$d, this.$L = M.$L, this.init();
              break;
            }
            m === c2 && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else i2.call(this, e3);
        };
      };
    });
  }
});

// node_modules/@angular/cdk/fesm2022/coercion.mjs
function coerceNumberProperty(value, fallbackValue = 0) {
  return _isNumberValue(value) ? Number(value) : fallbackValue;
}
function _isNumberValue(value) {
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}
function coerceCssPixelValue(value) {
  if (value == null) {
    return "";
  }
  return typeof value === "string" ? value : `${value}px`;
}
function coerceElement(elementOrRef) {
  return elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
}

// node_modules/@angular/cdk/fesm2022/platform.mjs
var hasV8BreakIterator;
try {
  hasV8BreakIterator = typeof Intl !== "undefined" && Intl.v8BreakIterator;
} catch {
  hasV8BreakIterator = false;
}
var Platform = class _Platform {
  constructor(_platformId) {
    this._platformId = _platformId;
    this.isBrowser = this._platformId ? isPlatformBrowser(this._platformId) : typeof document === "object" && !!document;
    this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
    this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
    this.BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== "undefined" && !this.EDGE && !this.TRIDENT;
    this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
    this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window);
    this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
    this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
    this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
  }
  static {
    this.ɵfac = function Platform_Factory(t) {
      return new (t || _Platform)(ɵɵinject(PLATFORM_ID));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _Platform,
      factory: _Platform.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Platform, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
var PlatformModule = class _PlatformModule {
  static {
    this.ɵfac = function PlatformModule_Factory(t) {
      return new (t || _PlatformModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _PlatformModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlatformModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
var RtlScrollAxisType;
(function(RtlScrollAxisType2) {
  RtlScrollAxisType2[RtlScrollAxisType2["NORMAL"] = 0] = "NORMAL";
  RtlScrollAxisType2[RtlScrollAxisType2["NEGATED"] = 1] = "NEGATED";
  RtlScrollAxisType2[RtlScrollAxisType2["INVERTED"] = 2] = "INVERTED";
})(RtlScrollAxisType || (RtlScrollAxisType = {}));
var rtlScrollAxisType;
var scrollBehaviorSupported;
function supportsScrollBehavior() {
  if (scrollBehaviorSupported == null) {
    if (typeof document !== "object" || !document || typeof Element !== "function" || !Element) {
      scrollBehaviorSupported = false;
      return scrollBehaviorSupported;
    }
    if ("scrollBehavior" in document.documentElement.style) {
      scrollBehaviorSupported = true;
    } else {
      const scrollToFunction = Element.prototype.scrollTo;
      if (scrollToFunction) {
        scrollBehaviorSupported = !/\{\s*\[native code\]\s*\}/.test(scrollToFunction.toString());
      } else {
        scrollBehaviorSupported = false;
      }
    }
  }
  return scrollBehaviorSupported;
}
function getRtlScrollAxisType() {
  if (typeof document !== "object" || !document) {
    return RtlScrollAxisType.NORMAL;
  }
  if (rtlScrollAxisType == null) {
    const scrollContainer = document.createElement("div");
    const containerStyle = scrollContainer.style;
    scrollContainer.dir = "rtl";
    containerStyle.width = "1px";
    containerStyle.overflow = "auto";
    containerStyle.visibility = "hidden";
    containerStyle.pointerEvents = "none";
    containerStyle.position = "absolute";
    const content = document.createElement("div");
    const contentStyle = content.style;
    contentStyle.width = "2px";
    contentStyle.height = "1px";
    scrollContainer.appendChild(content);
    document.body.appendChild(scrollContainer);
    rtlScrollAxisType = RtlScrollAxisType.NORMAL;
    if (scrollContainer.scrollLeft === 0) {
      scrollContainer.scrollLeft = 1;
      rtlScrollAxisType = scrollContainer.scrollLeft === 0 ? RtlScrollAxisType.NEGATED : RtlScrollAxisType.INVERTED;
    }
    scrollContainer.remove();
  }
  return rtlScrollAxisType;
}
function _getEventTarget(event) {
  return event.composedPath ? event.composedPath()[0] : event.target;
}
function _isTestEnvironment() {
  return (
    // @ts-ignore
    typeof __karma__ !== "undefined" && !!__karma__ || // @ts-ignore
    typeof jasmine !== "undefined" && !!jasmine || // @ts-ignore
    typeof jest !== "undefined" && !!jest || // @ts-ignore
    typeof Mocha !== "undefined" && !!Mocha
  );
}

// node_modules/@angular/cdk/fesm2022/bidi.mjs
var DIR_DOCUMENT = new InjectionToken("cdk-dir-doc", {
  providedIn: "root",
  factory: DIR_DOCUMENT_FACTORY
});
function DIR_DOCUMENT_FACTORY() {
  return inject(DOCUMENT);
}
var RTL_LOCALE_PATTERN = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function _resolveDirectionality(rawValue) {
  const value = rawValue?.toLowerCase() || "";
  if (value === "auto" && typeof navigator !== "undefined" && navigator?.language) {
    return RTL_LOCALE_PATTERN.test(navigator.language) ? "rtl" : "ltr";
  }
  return value === "rtl" ? "rtl" : "ltr";
}
var Directionality = class _Directionality {
  constructor(_document) {
    this.value = "ltr";
    this.change = new EventEmitter();
    if (_document) {
      const bodyDir = _document.body ? _document.body.dir : null;
      const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
      this.value = _resolveDirectionality(bodyDir || htmlDir || "ltr");
    }
  }
  ngOnDestroy() {
    this.change.complete();
  }
  static {
    this.ɵfac = function Directionality_Factory(t) {
      return new (t || _Directionality)(ɵɵinject(DIR_DOCUMENT, 8));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _Directionality,
      factory: _Directionality.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Directionality, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DIR_DOCUMENT]
    }]
  }], null);
})();
var Dir = class _Dir {
  constructor() {
    this._dir = "ltr";
    this._isInitialized = false;
    this.change = new EventEmitter();
  }
  /** @docs-private */
  get dir() {
    return this._dir;
  }
  set dir(value) {
    const previousValue = this._dir;
    this._dir = _resolveDirectionality(value);
    this._rawDir = value;
    if (previousValue !== this._dir && this._isInitialized) {
      this.change.emit(this._dir);
    }
  }
  /** Current layout direction of the element. */
  get value() {
    return this.dir;
  }
  /** Initialize once default value has been set. */
  ngAfterContentInit() {
    this._isInitialized = true;
  }
  ngOnDestroy() {
    this.change.complete();
  }
  static {
    this.ɵfac = function Dir_Factory(t) {
      return new (t || _Dir)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _Dir,
      selectors: [["", "dir", ""]],
      hostVars: 1,
      hostBindings: function Dir_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("dir", ctx._rawDir);
        }
      },
      inputs: {
        dir: "dir"
      },
      outputs: {
        change: "dirChange"
      },
      exportAs: ["dir"],
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: Directionality,
        useExisting: _Dir
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dir, [{
    type: Directive,
    args: [{
      selector: "[dir]",
      providers: [{
        provide: Directionality,
        useExisting: Dir
      }],
      host: {
        "[attr.dir]": "_rawDir"
      },
      exportAs: "dir",
      standalone: true
    }]
  }], null, {
    change: [{
      type: Output,
      args: ["dirChange"]
    }],
    dir: [{
      type: Input
    }]
  });
})();
var BidiModule = class _BidiModule {
  static {
    this.ɵfac = function BidiModule_Factory(t) {
      return new (t || _BidiModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _BidiModule,
      imports: [Dir],
      exports: [Dir]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BidiModule, [{
    type: NgModule,
    args: [{
      imports: [Dir],
      exports: [Dir]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/collections.mjs
var DataSource = class {
};
function isDataSource(value) {
  return value && typeof value.connect === "function" && !(value instanceof ConnectableObservable);
}
var ArrayDataSource = class extends DataSource {
  constructor(_data) {
    super();
    this._data = _data;
  }
  connect() {
    return isObservable(this._data) ? this._data : of(this._data);
  }
  disconnect() {
  }
};
var _ViewRepeaterOperation;
(function(_ViewRepeaterOperation2) {
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["REPLACED"] = 0] = "REPLACED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["INSERTED"] = 1] = "INSERTED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["MOVED"] = 2] = "MOVED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["REMOVED"] = 3] = "REMOVED";
})(_ViewRepeaterOperation || (_ViewRepeaterOperation = {}));
var _VIEW_REPEATER_STRATEGY = new InjectionToken("_ViewRepeater");
var _RecycleViewRepeaterStrategy = class {
  constructor() {
    this.viewCacheSize = 20;
    this._viewCache = [];
  }
  /** Apply changes to the DOM. */
  applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
    changes.forEachOperation((record, adjustedPreviousIndex, currentIndex) => {
      let view;
      let operation;
      if (record.previousIndex == null) {
        const viewArgsFactory = () => itemContextFactory(record, adjustedPreviousIndex, currentIndex);
        view = this._insertView(viewArgsFactory, currentIndex, viewContainerRef, itemValueResolver(record));
        operation = view ? _ViewRepeaterOperation.INSERTED : _ViewRepeaterOperation.REPLACED;
      } else if (currentIndex == null) {
        this._detachAndCacheView(adjustedPreviousIndex, viewContainerRef);
        operation = _ViewRepeaterOperation.REMOVED;
      } else {
        view = this._moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, itemValueResolver(record));
        operation = _ViewRepeaterOperation.MOVED;
      }
      if (itemViewChanged) {
        itemViewChanged({
          context: view?.context,
          operation,
          record
        });
      }
    });
  }
  detach() {
    for (const view of this._viewCache) {
      view.destroy();
    }
    this._viewCache = [];
  }
  /**
   * Inserts a view for a new item, either from the cache or by creating a new
   * one. Returns `undefined` if the item was inserted into a cached view.
   */
  _insertView(viewArgsFactory, currentIndex, viewContainerRef, value) {
    const cachedView = this._insertViewFromCache(currentIndex, viewContainerRef);
    if (cachedView) {
      cachedView.context.$implicit = value;
      return void 0;
    }
    const viewArgs = viewArgsFactory();
    return viewContainerRef.createEmbeddedView(viewArgs.templateRef, viewArgs.context, viewArgs.index);
  }
  /** Detaches the view at the given index and inserts into the view cache. */
  _detachAndCacheView(index, viewContainerRef) {
    const detachedView = viewContainerRef.detach(index);
    this._maybeCacheView(detachedView, viewContainerRef);
  }
  /** Moves view at the previous index to the current index. */
  _moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, value) {
    const view = viewContainerRef.get(adjustedPreviousIndex);
    viewContainerRef.move(view, currentIndex);
    view.context.$implicit = value;
    return view;
  }
  /**
   * Cache the given detached view. If the cache is full, the view will be
   * destroyed.
   */
  _maybeCacheView(view, viewContainerRef) {
    if (this._viewCache.length < this.viewCacheSize) {
      this._viewCache.push(view);
    } else {
      const index = viewContainerRef.indexOf(view);
      if (index === -1) {
        view.destroy();
      } else {
        viewContainerRef.remove(index);
      }
    }
  }
  /** Inserts a recycled view from the cache at the given index. */
  _insertViewFromCache(index, viewContainerRef) {
    const cachedView = this._viewCache.pop();
    if (cachedView) {
      viewContainerRef.insert(cachedView, index);
    }
    return cachedView || null;
  }
};
var UniqueSelectionDispatcher = class _UniqueSelectionDispatcher {
  constructor() {
    this._listeners = [];
  }
  /**
   * Notify other items that selection for the given name has been set.
   * @param id ID of the item.
   * @param name Name of the item.
   */
  notify(id, name) {
    for (let listener of this._listeners) {
      listener(id, name);
    }
  }
  /**
   * Listen for future changes to item selection.
   * @return Function used to deregister listener
   */
  listen(listener) {
    this._listeners.push(listener);
    return () => {
      this._listeners = this._listeners.filter((registered) => {
        return listener !== registered;
      });
    };
  }
  ngOnDestroy() {
    this._listeners = [];
  }
  static {
    this.ɵfac = function UniqueSelectionDispatcher_Factory(t) {
      return new (t || _UniqueSelectionDispatcher)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UniqueSelectionDispatcher,
      factory: _UniqueSelectionDispatcher.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UniqueSelectionDispatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/scrolling.mjs
var _c0 = ["contentWrapper"];
var _c1 = ["*"];
var VIRTUAL_SCROLL_STRATEGY = new InjectionToken("VIRTUAL_SCROLL_STRATEGY");
var FixedSizeVirtualScrollStrategy = class {
  /**
   * @param itemSize The size of the items in the virtually scrolling list.
   * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
   * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
   */
  constructor(itemSize, minBufferPx, maxBufferPx) {
    this._scrolledIndexChange = new Subject();
    this.scrolledIndexChange = this._scrolledIndexChange.pipe(distinctUntilChanged());
    this._viewport = null;
    this._itemSize = itemSize;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
  }
  /**
   * Attaches this scroll strategy to a viewport.
   * @param viewport The viewport to attach this strategy to.
   */
  attach(viewport) {
    this._viewport = viewport;
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  /** Detaches this scroll strategy from the currently attached viewport. */
  detach() {
    this._scrolledIndexChange.complete();
    this._viewport = null;
  }
  /**
   * Update the item size and buffer size.
   * @param itemSize The size of the items in the virtually scrolling list.
   * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
   * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
   */
  updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
    if (maxBufferPx < minBufferPx && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx");
    }
    this._itemSize = itemSize;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onContentScrolled() {
    this._updateRenderedRange();
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onDataLengthChanged() {
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onContentRendered() {
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onRenderedOffsetChanged() {
  }
  /**
   * Scroll to the offset for the given index.
   * @param index The index of the element to scroll to.
   * @param behavior The ScrollBehavior to use when scrolling.
   */
  scrollToIndex(index, behavior) {
    if (this._viewport) {
      this._viewport.scrollToOffset(index * this._itemSize, behavior);
    }
  }
  /** Update the viewport's total content size. */
  _updateTotalContentSize() {
    if (!this._viewport) {
      return;
    }
    this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
  }
  /** Update the viewport's rendered range. */
  _updateRenderedRange() {
    if (!this._viewport) {
      return;
    }
    const renderedRange = this._viewport.getRenderedRange();
    const newRange = {
      start: renderedRange.start,
      end: renderedRange.end
    };
    const viewportSize = this._viewport.getViewportSize();
    const dataLength = this._viewport.getDataLength();
    let scrollOffset = this._viewport.measureScrollOffset();
    let firstVisibleIndex = this._itemSize > 0 ? scrollOffset / this._itemSize : 0;
    if (newRange.end > dataLength) {
      const maxVisibleItems = Math.ceil(viewportSize / this._itemSize);
      const newVisibleIndex = Math.max(0, Math.min(firstVisibleIndex, dataLength - maxVisibleItems));
      if (firstVisibleIndex != newVisibleIndex) {
        firstVisibleIndex = newVisibleIndex;
        scrollOffset = newVisibleIndex * this._itemSize;
        newRange.start = Math.floor(firstVisibleIndex);
      }
      newRange.end = Math.max(0, Math.min(dataLength, newRange.start + maxVisibleItems));
    }
    const startBuffer = scrollOffset - newRange.start * this._itemSize;
    if (startBuffer < this._minBufferPx && newRange.start != 0) {
      const expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
      newRange.start = Math.max(0, newRange.start - expandStart);
      newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
    } else {
      const endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);
      if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
        const expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);
        if (expandEnd > 0) {
          newRange.end = Math.min(dataLength, newRange.end + expandEnd);
          newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
        }
      }
    }
    this._viewport.setRenderedRange(newRange);
    this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);
    this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
  }
};
function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
  return fixedSizeDir._scrollStrategy;
}
var CdkFixedSizeVirtualScroll = class _CdkFixedSizeVirtualScroll {
  constructor() {
    this._itemSize = 20;
    this._minBufferPx = 100;
    this._maxBufferPx = 200;
    this._scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
  }
  /** The size of the items in the list (in pixels). */
  get itemSize() {
    return this._itemSize;
  }
  set itemSize(value) {
    this._itemSize = coerceNumberProperty(value);
  }
  /**
   * The minimum amount of buffer rendered beyond the viewport (in pixels).
   * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
   */
  get minBufferPx() {
    return this._minBufferPx;
  }
  set minBufferPx(value) {
    this._minBufferPx = coerceNumberProperty(value);
  }
  /**
   * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
   */
  get maxBufferPx() {
    return this._maxBufferPx;
  }
  set maxBufferPx(value) {
    this._maxBufferPx = coerceNumberProperty(value);
  }
  ngOnChanges() {
    this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
  }
  static {
    this.ɵfac = function CdkFixedSizeVirtualScroll_Factory(t) {
      return new (t || _CdkFixedSizeVirtualScroll)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _CdkFixedSizeVirtualScroll,
      selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]],
      inputs: {
        itemSize: "itemSize",
        minBufferPx: "minBufferPx",
        maxBufferPx: "maxBufferPx"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: VIRTUAL_SCROLL_STRATEGY,
        useFactory: _fixedSizeVirtualScrollStrategyFactory,
        deps: [forwardRef(() => _CdkFixedSizeVirtualScroll)]
      }]), ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFixedSizeVirtualScroll, [{
    type: Directive,
    args: [{
      selector: "cdk-virtual-scroll-viewport[itemSize]",
      standalone: true,
      providers: [{
        provide: VIRTUAL_SCROLL_STRATEGY,
        useFactory: _fixedSizeVirtualScrollStrategyFactory,
        deps: [forwardRef(() => CdkFixedSizeVirtualScroll)]
      }]
    }]
  }], null, {
    itemSize: [{
      type: Input
    }],
    minBufferPx: [{
      type: Input
    }],
    maxBufferPx: [{
      type: Input
    }]
  });
})();
var DEFAULT_SCROLL_TIME = 20;
var ScrollDispatcher = class _ScrollDispatcher {
  constructor(_ngZone, _platform, document2) {
    this._ngZone = _ngZone;
    this._platform = _platform;
    this._scrolled = new Subject();
    this._globalSubscription = null;
    this._scrolledCount = 0;
    this.scrollContainers = /* @__PURE__ */ new Map();
    this._document = document2;
  }
  /**
   * Registers a scrollable instance with the service and listens for its scrolled events. When the
   * scrollable is scrolled, the service emits the event to its scrolled observable.
   * @param scrollable Scrollable instance to be registered.
   */
  register(scrollable) {
    if (!this.scrollContainers.has(scrollable)) {
      this.scrollContainers.set(scrollable, scrollable.elementScrolled().subscribe(() => this._scrolled.next(scrollable)));
    }
  }
  /**
   * De-registers a Scrollable reference and unsubscribes from its scroll event observable.
   * @param scrollable Scrollable instance to be deregistered.
   */
  deregister(scrollable) {
    const scrollableReference = this.scrollContainers.get(scrollable);
    if (scrollableReference) {
      scrollableReference.unsubscribe();
      this.scrollContainers.delete(scrollable);
    }
  }
  /**
   * Returns an observable that emits an event whenever any of the registered Scrollable
   * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
   * to override the default "throttle" time.
   *
   * **Note:** in order to avoid hitting change detection for every scroll event,
   * all of the events emitted from this stream will be run outside the Angular zone.
   * If you need to update any data bindings as a result of a scroll event, you have
   * to run the callback using `NgZone.run`.
   */
  scrolled(auditTimeInMs = DEFAULT_SCROLL_TIME) {
    if (!this._platform.isBrowser) {
      return of();
    }
    return new Observable((observer) => {
      if (!this._globalSubscription) {
        this._addGlobalListener();
      }
      const subscription = auditTimeInMs > 0 ? this._scrolled.pipe(auditTime(auditTimeInMs)).subscribe(observer) : this._scrolled.subscribe(observer);
      this._scrolledCount++;
      return () => {
        subscription.unsubscribe();
        this._scrolledCount--;
        if (!this._scrolledCount) {
          this._removeGlobalListener();
        }
      };
    });
  }
  ngOnDestroy() {
    this._removeGlobalListener();
    this.scrollContainers.forEach((_, container) => this.deregister(container));
    this._scrolled.complete();
  }
  /**
   * Returns an observable that emits whenever any of the
   * scrollable ancestors of an element are scrolled.
   * @param elementOrElementRef Element whose ancestors to listen for.
   * @param auditTimeInMs Time to throttle the scroll events.
   */
  ancestorScrolled(elementOrElementRef, auditTimeInMs) {
    const ancestors = this.getAncestorScrollContainers(elementOrElementRef);
    return this.scrolled(auditTimeInMs).pipe(filter((target) => {
      return !target || ancestors.indexOf(target) > -1;
    }));
  }
  /** Returns all registered Scrollables that contain the provided element. */
  getAncestorScrollContainers(elementOrElementRef) {
    const scrollingContainers = [];
    this.scrollContainers.forEach((_subscription, scrollable) => {
      if (this._scrollableContainsElement(scrollable, elementOrElementRef)) {
        scrollingContainers.push(scrollable);
      }
    });
    return scrollingContainers;
  }
  /** Use defaultView of injected document if available or fallback to global window reference */
  _getWindow() {
    return this._document.defaultView || window;
  }
  /** Returns true if the element is contained within the provided Scrollable. */
  _scrollableContainsElement(scrollable, elementOrElementRef) {
    let element = coerceElement(elementOrElementRef);
    let scrollableElement = scrollable.getElementRef().nativeElement;
    do {
      if (element == scrollableElement) {
        return true;
      }
    } while (element = element.parentElement);
    return false;
  }
  /** Sets up the global scroll listeners. */
  _addGlobalListener() {
    this._globalSubscription = this._ngZone.runOutsideAngular(() => {
      const window2 = this._getWindow();
      return fromEvent(window2.document, "scroll").subscribe(() => this._scrolled.next());
    });
  }
  /** Cleans up the global scroll listener. */
  _removeGlobalListener() {
    if (this._globalSubscription) {
      this._globalSubscription.unsubscribe();
      this._globalSubscription = null;
    }
  }
  static {
    this.ɵfac = function ScrollDispatcher_Factory(t) {
      return new (t || _ScrollDispatcher)(ɵɵinject(NgZone), ɵɵinject(Platform), ɵɵinject(DOCUMENT, 8));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ScrollDispatcher,
      factory: _ScrollDispatcher.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollDispatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: NgZone
  }, {
    type: Platform
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var CdkScrollable = class _CdkScrollable {
  constructor(elementRef, scrollDispatcher, ngZone, dir) {
    this.elementRef = elementRef;
    this.scrollDispatcher = scrollDispatcher;
    this.ngZone = ngZone;
    this.dir = dir;
    this._destroyed = new Subject();
    this._elementScrolled = new Observable((observer) => this.ngZone.runOutsideAngular(() => fromEvent(this.elementRef.nativeElement, "scroll").pipe(takeUntil(this._destroyed)).subscribe(observer)));
  }
  ngOnInit() {
    this.scrollDispatcher.register(this);
  }
  ngOnDestroy() {
    this.scrollDispatcher.deregister(this);
    this._destroyed.next();
    this._destroyed.complete();
  }
  /** Returns observable that emits when a scroll event is fired on the host element. */
  elementScrolled() {
    return this._elementScrolled;
  }
  /** Gets the ElementRef for the viewport. */
  getElementRef() {
    return this.elementRef;
  }
  /**
   * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
   * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
   * left and right always refer to the left and right side of the scrolling container irrespective
   * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
   * in an RTL context.
   * @param options specified the offsets to scroll to.
   */
  scrollTo(options) {
    const el = this.elementRef.nativeElement;
    const isRtl = this.dir && this.dir.value == "rtl";
    if (options.left == null) {
      options.left = isRtl ? options.end : options.start;
    }
    if (options.right == null) {
      options.right = isRtl ? options.start : options.end;
    }
    if (options.bottom != null) {
      options.top = el.scrollHeight - el.clientHeight - options.bottom;
    }
    if (isRtl && getRtlScrollAxisType() != RtlScrollAxisType.NORMAL) {
      if (options.left != null) {
        options.right = el.scrollWidth - el.clientWidth - options.left;
      }
      if (getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) {
        options.left = options.right;
      } else if (getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) {
        options.left = options.right ? -options.right : options.right;
      }
    } else {
      if (options.right != null) {
        options.left = el.scrollWidth - el.clientWidth - options.right;
      }
    }
    this._applyScrollToOptions(options);
  }
  _applyScrollToOptions(options) {
    const el = this.elementRef.nativeElement;
    if (supportsScrollBehavior()) {
      el.scrollTo(options);
    } else {
      if (options.top != null) {
        el.scrollTop = options.top;
      }
      if (options.left != null) {
        el.scrollLeft = options.left;
      }
    }
  }
  /**
   * Measures the scroll offset relative to the specified edge of the viewport. This method can be
   * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
   * about what scrollLeft means in RTL. The values returned by this method are normalized such that
   * left and right always refer to the left and right side of the scrolling container irrespective
   * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
   * in an RTL context.
   * @param from The edge to measure from.
   */
  measureScrollOffset(from) {
    const LEFT = "left";
    const RIGHT = "right";
    const el = this.elementRef.nativeElement;
    if (from == "top") {
      return el.scrollTop;
    }
    if (from == "bottom") {
      return el.scrollHeight - el.clientHeight - el.scrollTop;
    }
    const isRtl = this.dir && this.dir.value == "rtl";
    if (from == "start") {
      from = isRtl ? RIGHT : LEFT;
    } else if (from == "end") {
      from = isRtl ? LEFT : RIGHT;
    }
    if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) {
      if (from == LEFT) {
        return el.scrollWidth - el.clientWidth - el.scrollLeft;
      } else {
        return el.scrollLeft;
      }
    } else if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) {
      if (from == LEFT) {
        return el.scrollLeft + el.scrollWidth - el.clientWidth;
      } else {
        return -el.scrollLeft;
      }
    } else {
      if (from == LEFT) {
        return el.scrollLeft;
      } else {
        return el.scrollWidth - el.clientWidth - el.scrollLeft;
      }
    }
  }
  static {
    this.ɵfac = function CdkScrollable_Factory(t) {
      return new (t || _CdkScrollable)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ScrollDispatcher), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Directionality, 8));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _CdkScrollable,
      selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkScrollable, [{
    type: Directive,
    args: [{
      selector: "[cdk-scrollable], [cdkScrollable]",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ScrollDispatcher
  }, {
    type: NgZone
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var DEFAULT_RESIZE_TIME = 20;
var ViewportRuler = class _ViewportRuler {
  constructor(_platform, ngZone, document2) {
    this._platform = _platform;
    this._change = new Subject();
    this._changeListener = (event) => {
      this._change.next(event);
    };
    this._document = document2;
    ngZone.runOutsideAngular(() => {
      if (_platform.isBrowser) {
        const window2 = this._getWindow();
        window2.addEventListener("resize", this._changeListener);
        window2.addEventListener("orientationchange", this._changeListener);
      }
      this.change().subscribe(() => this._viewportSize = null);
    });
  }
  ngOnDestroy() {
    if (this._platform.isBrowser) {
      const window2 = this._getWindow();
      window2.removeEventListener("resize", this._changeListener);
      window2.removeEventListener("orientationchange", this._changeListener);
    }
    this._change.complete();
  }
  /** Returns the viewport's width and height. */
  getViewportSize() {
    if (!this._viewportSize) {
      this._updateViewportSize();
    }
    const output = {
      width: this._viewportSize.width,
      height: this._viewportSize.height
    };
    if (!this._platform.isBrowser) {
      this._viewportSize = null;
    }
    return output;
  }
  /** Gets a DOMRect for the viewport's bounds. */
  getViewportRect() {
    const scrollPosition = this.getViewportScrollPosition();
    const {
      width,
      height
    } = this.getViewportSize();
    return {
      top: scrollPosition.top,
      left: scrollPosition.left,
      bottom: scrollPosition.top + height,
      right: scrollPosition.left + width,
      height,
      width
    };
  }
  /** Gets the (top, left) scroll position of the viewport. */
  getViewportScrollPosition() {
    if (!this._platform.isBrowser) {
      return {
        top: 0,
        left: 0
      };
    }
    const document2 = this._document;
    const window2 = this._getWindow();
    const documentElement = document2.documentElement;
    const documentRect = documentElement.getBoundingClientRect();
    const top = -documentRect.top || document2.body.scrollTop || window2.scrollY || documentElement.scrollTop || 0;
    const left = -documentRect.left || document2.body.scrollLeft || window2.scrollX || documentElement.scrollLeft || 0;
    return {
      top,
      left
    };
  }
  /**
   * Returns a stream that emits whenever the size of the viewport changes.
   * This stream emits outside of the Angular zone.
   * @param throttleTime Time in milliseconds to throttle the stream.
   */
  change(throttleTime = DEFAULT_RESIZE_TIME) {
    return throttleTime > 0 ? this._change.pipe(auditTime(throttleTime)) : this._change;
  }
  /** Use defaultView of injected document if available or fallback to global window reference */
  _getWindow() {
    return this._document.defaultView || window;
  }
  /** Updates the cached viewport size. */
  _updateViewportSize() {
    const window2 = this._getWindow();
    this._viewportSize = this._platform.isBrowser ? {
      width: window2.innerWidth,
      height: window2.innerHeight
    } : {
      width: 0,
      height: 0
    };
  }
  static {
    this.ɵfac = function ViewportRuler_Factory(t) {
      return new (t || _ViewportRuler)(ɵɵinject(Platform), ɵɵinject(NgZone), ɵɵinject(DOCUMENT, 8));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ViewportRuler,
      factory: _ViewportRuler.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewportRuler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Platform
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var VIRTUAL_SCROLLABLE = new InjectionToken("VIRTUAL_SCROLLABLE");
var CdkVirtualScrollable = class _CdkVirtualScrollable extends CdkScrollable {
  constructor(elementRef, scrollDispatcher, ngZone, dir) {
    super(elementRef, scrollDispatcher, ngZone, dir);
  }
  /**
   * Measure the viewport size for the provided orientation.
   *
   * @param orientation The orientation to measure the size from.
   */
  measureViewportSize(orientation) {
    const viewportEl = this.elementRef.nativeElement;
    return orientation === "horizontal" ? viewportEl.clientWidth : viewportEl.clientHeight;
  }
  static {
    this.ɵfac = function CdkVirtualScrollable_Factory(t) {
      return new (t || _CdkVirtualScrollable)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ScrollDispatcher), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Directionality, 8));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _CdkVirtualScrollable,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollable, [{
    type: Directive
  }], () => [{
    type: ElementRef
  }, {
    type: ScrollDispatcher
  }, {
    type: NgZone
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
function rangesEqual(r1, r2) {
  return r1.start == r2.start && r1.end == r2.end;
}
var SCROLL_SCHEDULER = typeof requestAnimationFrame !== "undefined" ? animationFrameScheduler : asapScheduler;
var CdkVirtualScrollViewport = class _CdkVirtualScrollViewport extends CdkVirtualScrollable {
  /** The direction the viewport scrolls. */
  get orientation() {
    return this._orientation;
  }
  set orientation(orientation) {
    if (this._orientation !== orientation) {
      this._orientation = orientation;
      this._calculateSpacerSize();
    }
  }
  constructor(elementRef, _changeDetectorRef, ngZone, _scrollStrategy, dir, scrollDispatcher, viewportRuler, scrollable) {
    super(elementRef, scrollDispatcher, ngZone, dir);
    this.elementRef = elementRef;
    this._changeDetectorRef = _changeDetectorRef;
    this._scrollStrategy = _scrollStrategy;
    this.scrollable = scrollable;
    this._platform = inject(Platform);
    this._detachedSubject = new Subject();
    this._renderedRangeSubject = new Subject();
    this._orientation = "vertical";
    this.appendOnly = false;
    this.scrolledIndexChange = new Observable((observer) => this._scrollStrategy.scrolledIndexChange.subscribe((index) => Promise.resolve().then(() => this.ngZone.run(() => observer.next(index)))));
    this.renderedRangeStream = this._renderedRangeSubject;
    this._totalContentSize = 0;
    this._totalContentWidth = "";
    this._totalContentHeight = "";
    this._renderedRange = {
      start: 0,
      end: 0
    };
    this._dataLength = 0;
    this._viewportSize = 0;
    this._renderedContentOffset = 0;
    this._renderedContentOffsetNeedsRewrite = false;
    this._isChangeDetectionPending = false;
    this._runAfterChangeDetection = [];
    this._viewportChanges = Subscription.EMPTY;
    if (!_scrollStrategy && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
    }
    this._viewportChanges = viewportRuler.change().subscribe(() => {
      this.checkViewportSize();
    });
    if (!this.scrollable) {
      this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable");
      this.scrollable = this;
    }
  }
  ngOnInit() {
    if (!this._platform.isBrowser) {
      return;
    }
    if (this.scrollable === this) {
      super.ngOnInit();
    }
    this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
      this._measureViewportSize();
      this._scrollStrategy.attach(this);
      this.scrollable.elementScrolled().pipe(
        // Start off with a fake scroll event so we properly detect our initial position.
        startWith(null),
        // Collect multiple events into one until the next animation frame. This way if
        // there are multiple scroll events in the same frame we only need to recheck
        // our layout once.
        auditTime(0, SCROLL_SCHEDULER),
        // Usually `elementScrolled` is completed when the scrollable is destroyed, but
        // that may not be the case if a `CdkVirtualScrollableElement` is used so we have
        // to unsubscribe here just in case.
        takeUntil(this._destroyed)
      ).subscribe(() => this._scrollStrategy.onContentScrolled());
      this._markChangeDetectionNeeded();
    }));
  }
  ngOnDestroy() {
    this.detach();
    this._scrollStrategy.detach();
    this._renderedRangeSubject.complete();
    this._detachedSubject.complete();
    this._viewportChanges.unsubscribe();
    super.ngOnDestroy();
  }
  /** Attaches a `CdkVirtualScrollRepeater` to this viewport. */
  attach(forOf) {
    if (this._forOf && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("CdkVirtualScrollViewport is already attached.");
    }
    this.ngZone.runOutsideAngular(() => {
      this._forOf = forOf;
      this._forOf.dataStream.pipe(takeUntil(this._detachedSubject)).subscribe((data) => {
        const newLength = data.length;
        if (newLength !== this._dataLength) {
          this._dataLength = newLength;
          this._scrollStrategy.onDataLengthChanged();
        }
        this._doChangeDetection();
      });
    });
  }
  /** Detaches the current `CdkVirtualForOf`. */
  detach() {
    this._forOf = null;
    this._detachedSubject.next();
  }
  /** Gets the length of the data bound to this viewport (in number of items). */
  getDataLength() {
    return this._dataLength;
  }
  /** Gets the size of the viewport (in pixels). */
  getViewportSize() {
    return this._viewportSize;
  }
  // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
  // cycle happens. I'm being careful to only call it after the render cycle is complete and before
  // setting it to something else, but its error prone and should probably be split into
  // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.
  /** Get the current rendered range of items. */
  getRenderedRange() {
    return this._renderedRange;
  }
  measureBoundingClientRectWithScrollOffset(from) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from];
  }
  /**
   * Sets the total size of all content (in pixels), including content that is not currently
   * rendered.
   */
  setTotalContentSize(size) {
    if (this._totalContentSize !== size) {
      this._totalContentSize = size;
      this._calculateSpacerSize();
      this._markChangeDetectionNeeded();
    }
  }
  /** Sets the currently rendered range of indices. */
  setRenderedRange(range) {
    if (!rangesEqual(this._renderedRange, range)) {
      if (this.appendOnly) {
        range = {
          start: 0,
          end: Math.max(this._renderedRange.end, range.end)
        };
      }
      this._renderedRangeSubject.next(this._renderedRange = range);
      this._markChangeDetectionNeeded(() => this._scrollStrategy.onContentRendered());
    }
  }
  /**
   * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
   */
  getOffsetToRenderedContentStart() {
    return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
  }
  /**
   * Sets the offset from the start of the viewport to either the start or end of the rendered data
   * (in pixels).
   */
  setRenderedContentOffset(offset, to = "to-start") {
    offset = this.appendOnly && to === "to-start" ? 0 : offset;
    const isRtl = this.dir && this.dir.value == "rtl";
    const isHorizontal = this.orientation == "horizontal";
    const axis = isHorizontal ? "X" : "Y";
    const axisDirection = isHorizontal && isRtl ? -1 : 1;
    let transform = `translate${axis}(${Number(axisDirection * offset)}px)`;
    this._renderedContentOffset = offset;
    if (to === "to-end") {
      transform += ` translate${axis}(-100%)`;
      this._renderedContentOffsetNeedsRewrite = true;
    }
    if (this._renderedContentTransform != transform) {
      this._renderedContentTransform = transform;
      this._markChangeDetectionNeeded(() => {
        if (this._renderedContentOffsetNeedsRewrite) {
          this._renderedContentOffset -= this.measureRenderedContentSize();
          this._renderedContentOffsetNeedsRewrite = false;
          this.setRenderedContentOffset(this._renderedContentOffset);
        } else {
          this._scrollStrategy.onRenderedOffsetChanged();
        }
      });
    }
  }
  /**
   * Scrolls to the given offset from the start of the viewport. Please note that this is not always
   * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
   * direction, this would be the equivalent of setting a fictional `scrollRight` property.
   * @param offset The offset to scroll to.
   * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
   */
  scrollToOffset(offset, behavior = "auto") {
    const options = {
      behavior
    };
    if (this.orientation === "horizontal") {
      options.start = offset;
    } else {
      options.top = offset;
    }
    this.scrollable.scrollTo(options);
  }
  /**
   * Scrolls to the offset for the given index.
   * @param index The index of the element to scroll to.
   * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
   */
  scrollToIndex(index, behavior = "auto") {
    this._scrollStrategy.scrollToIndex(index, behavior);
  }
  /**
   * Gets the current scroll offset from the start of the scrollable (in pixels).
   * @param from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
   *     in horizontal mode.
   */
  measureScrollOffset(from) {
    let measureScrollOffset;
    if (this.scrollable == this) {
      measureScrollOffset = (_from) => super.measureScrollOffset(_from);
    } else {
      measureScrollOffset = (_from) => this.scrollable.measureScrollOffset(_from);
    }
    return Math.max(0, measureScrollOffset(from ?? (this.orientation === "horizontal" ? "start" : "top")) - this.measureViewportOffset());
  }
  /**
   * Measures the offset of the viewport from the scrolling container
   * @param from The edge to measure from.
   */
  measureViewportOffset(from) {
    let fromRect;
    const LEFT = "left";
    const RIGHT = "right";
    const isRtl = this.dir?.value == "rtl";
    if (from == "start") {
      fromRect = isRtl ? RIGHT : LEFT;
    } else if (from == "end") {
      fromRect = isRtl ? LEFT : RIGHT;
    } else if (from) {
      fromRect = from;
    } else {
      fromRect = this.orientation === "horizontal" ? "left" : "top";
    }
    const scrollerClientRect = this.scrollable.measureBoundingClientRectWithScrollOffset(fromRect);
    const viewportClientRect = this.elementRef.nativeElement.getBoundingClientRect()[fromRect];
    return viewportClientRect - scrollerClientRect;
  }
  /** Measure the combined size of all of the rendered items. */
  measureRenderedContentSize() {
    const contentEl = this._contentWrapper.nativeElement;
    return this.orientation === "horizontal" ? contentEl.offsetWidth : contentEl.offsetHeight;
  }
  /**
   * Measure the total combined size of the given range. Throws if the range includes items that are
   * not rendered.
   */
  measureRangeSize(range) {
    if (!this._forOf) {
      return 0;
    }
    return this._forOf.measureRangeSize(range, this.orientation);
  }
  /** Update the viewport dimensions and re-render. */
  checkViewportSize() {
    this._measureViewportSize();
    this._scrollStrategy.onDataLengthChanged();
  }
  /** Measure the viewport size. */
  _measureViewportSize() {
    this._viewportSize = this.scrollable.measureViewportSize(this.orientation);
  }
  /** Queue up change detection to run. */
  _markChangeDetectionNeeded(runAfter) {
    if (runAfter) {
      this._runAfterChangeDetection.push(runAfter);
    }
    if (!this._isChangeDetectionPending) {
      this._isChangeDetectionPending = true;
      this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
        this._doChangeDetection();
      }));
    }
  }
  /** Run change detection. */
  _doChangeDetection() {
    this._isChangeDetectionPending = false;
    this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform;
    this.ngZone.run(() => this._changeDetectorRef.markForCheck());
    const runAfterChangeDetection = this._runAfterChangeDetection;
    this._runAfterChangeDetection = [];
    for (const fn of runAfterChangeDetection) {
      fn();
    }
  }
  /** Calculates the `style.width` and `style.height` for the spacer element. */
  _calculateSpacerSize() {
    this._totalContentHeight = this.orientation === "horizontal" ? "" : `${this._totalContentSize}px`;
    this._totalContentWidth = this.orientation === "horizontal" ? `${this._totalContentSize}px` : "";
  }
  static {
    this.ɵfac = function CdkVirtualScrollViewport_Factory(t) {
      return new (t || _CdkVirtualScrollViewport)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(VIRTUAL_SCROLL_STRATEGY, 8), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(ScrollDispatcher), ɵɵdirectiveInject(ViewportRuler), ɵɵdirectiveInject(VIRTUAL_SCROLLABLE, 8));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CdkVirtualScrollViewport,
      selectors: [["cdk-virtual-scroll-viewport"]],
      viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._contentWrapper = _t.first);
        }
      },
      hostAttrs: [1, "cdk-virtual-scroll-viewport"],
      hostVars: 4,
      hostBindings: function CdkVirtualScrollViewport_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("cdk-virtual-scroll-orientation-horizontal", ctx.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", ctx.orientation !== "horizontal");
        }
      },
      inputs: {
        orientation: "orientation",
        appendOnly: [InputFlags.HasDecoratorInputTransform, "appendOnly", "appendOnly", booleanAttribute]
      },
      outputs: {
        scrolledIndexChange: "scrolledIndexChange"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: CdkScrollable,
        useFactory: (virtualScrollable, viewport) => virtualScrollable || viewport,
        deps: [[new Optional(), new Inject(VIRTUAL_SCROLLABLE)], _CdkVirtualScrollViewport]
      }]), ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 4,
      vars: 4,
      consts: [["contentWrapper", ""], [1, "cdk-virtual-scroll-content-wrapper"], [1, "cdk-virtual-scroll-spacer"]],
      template: function CdkVirtualScrollViewport_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "div", 1, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
          ɵɵelement(3, "div", 2);
        }
        if (rf & 2) {
          ɵɵadvance(3);
          ɵɵstyleProp("width", ctx._totalContentWidth)("height", ctx._totalContentHeight);
        }
      },
      styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollViewport, [{
    type: Component,
    args: [{
      selector: "cdk-virtual-scroll-viewport",
      host: {
        "class": "cdk-virtual-scroll-viewport",
        "[class.cdk-virtual-scroll-orientation-horizontal]": 'orientation === "horizontal"',
        "[class.cdk-virtual-scroll-orientation-vertical]": 'orientation !== "horizontal"'
      },
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      providers: [{
        provide: CdkScrollable,
        useFactory: (virtualScrollable, viewport) => virtualScrollable || viewport,
        deps: [[new Optional(), new Inject(VIRTUAL_SCROLLABLE)], CdkVirtualScrollViewport]
      }],
      template: '<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class="cdk-virtual-scroll-content-wrapper">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class="cdk-virtual-scroll-spacer"\n     [style.width]="_totalContentWidth" [style.height]="_totalContentHeight"></div>\n',
      styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [VIRTUAL_SCROLL_STRATEGY]
    }]
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: ScrollDispatcher
  }, {
    type: ViewportRuler
  }, {
    type: CdkVirtualScrollable,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [VIRTUAL_SCROLLABLE]
    }]
  }], {
    orientation: [{
      type: Input
    }],
    appendOnly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    scrolledIndexChange: [{
      type: Output
    }],
    _contentWrapper: [{
      type: ViewChild,
      args: ["contentWrapper", {
        static: true
      }]
    }]
  });
})();
function getOffset(orientation, direction, node) {
  const el = node;
  if (!el.getBoundingClientRect) {
    return 0;
  }
  const rect = el.getBoundingClientRect();
  if (orientation === "horizontal") {
    return direction === "start" ? rect.left : rect.right;
  }
  return direction === "start" ? rect.top : rect.bottom;
}
var CdkVirtualForOf = class _CdkVirtualForOf {
  /** The DataSource to display. */
  get cdkVirtualForOf() {
    return this._cdkVirtualForOf;
  }
  set cdkVirtualForOf(value) {
    this._cdkVirtualForOf = value;
    if (isDataSource(value)) {
      this._dataSourceChanges.next(value);
    } else {
      this._dataSourceChanges.next(new ArrayDataSource(isObservable(value) ? value : Array.from(value || [])));
    }
  }
  /**
   * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
   * the item and produces a value to be used as the item's identity when tracking changes.
   */
  get cdkVirtualForTrackBy() {
    return this._cdkVirtualForTrackBy;
  }
  set cdkVirtualForTrackBy(fn) {
    this._needsUpdate = true;
    this._cdkVirtualForTrackBy = fn ? (index, item) => fn(index + (this._renderedRange ? this._renderedRange.start : 0), item) : void 0;
  }
  /** The template used to stamp out new elements. */
  set cdkVirtualForTemplate(value) {
    if (value) {
      this._needsUpdate = true;
      this._template = value;
    }
  }
  /**
   * The size of the cache used to store templates that are not being used for re-use later.
   * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
   */
  get cdkVirtualForTemplateCacheSize() {
    return this._viewRepeater.viewCacheSize;
  }
  set cdkVirtualForTemplateCacheSize(size) {
    this._viewRepeater.viewCacheSize = coerceNumberProperty(size);
  }
  constructor(_viewContainerRef, _template, _differs, _viewRepeater, _viewport, ngZone) {
    this._viewContainerRef = _viewContainerRef;
    this._template = _template;
    this._differs = _differs;
    this._viewRepeater = _viewRepeater;
    this._viewport = _viewport;
    this.viewChange = new Subject();
    this._dataSourceChanges = new Subject();
    this.dataStream = this._dataSourceChanges.pipe(
      // Start off with null `DataSource`.
      startWith(null),
      // Bundle up the previous and current data sources so we can work with both.
      pairwise(),
      // Use `_changeDataSource` to disconnect from the previous data source and connect to the
      // new one, passing back a stream of data changes which we run through `switchMap` to give
      // us a data stream that emits the latest data from whatever the current `DataSource` is.
      switchMap(([prev, cur]) => this._changeDataSource(prev, cur)),
      // Replay the last emitted data when someone subscribes.
      shareReplay(1)
    );
    this._differ = null;
    this._needsUpdate = false;
    this._destroyed = new Subject();
    this.dataStream.subscribe((data) => {
      this._data = data;
      this._onRenderedDataChange();
    });
    this._viewport.renderedRangeStream.pipe(takeUntil(this._destroyed)).subscribe((range) => {
      this._renderedRange = range;
      if (this.viewChange.observers.length) {
        ngZone.run(() => this.viewChange.next(this._renderedRange));
      }
      this._onRenderedDataChange();
    });
    this._viewport.attach(this);
  }
  /**
   * Measures the combined size (width for horizontal orientation, height for vertical) of all items
   * in the specified range. Throws an error if the range includes items that are not currently
   * rendered.
   */
  measureRangeSize(range, orientation) {
    if (range.start >= range.end) {
      return 0;
    }
    if ((range.start < this._renderedRange.start || range.end > this._renderedRange.end) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`Error: attempted to measure an item that isn't rendered.`);
    }
    const renderedStartIndex = range.start - this._renderedRange.start;
    const rangeLen = range.end - range.start;
    let firstNode;
    let lastNode;
    for (let i = 0; i < rangeLen; i++) {
      const view = this._viewContainerRef.get(i + renderedStartIndex);
      if (view && view.rootNodes.length) {
        firstNode = lastNode = view.rootNodes[0];
        break;
      }
    }
    for (let i = rangeLen - 1; i > -1; i--) {
      const view = this._viewContainerRef.get(i + renderedStartIndex);
      if (view && view.rootNodes.length) {
        lastNode = view.rootNodes[view.rootNodes.length - 1];
        break;
      }
    }
    return firstNode && lastNode ? getOffset(orientation, "end", lastNode) - getOffset(orientation, "start", firstNode) : 0;
  }
  ngDoCheck() {
    if (this._differ && this._needsUpdate) {
      const changes = this._differ.diff(this._renderedItems);
      if (!changes) {
        this._updateContext();
      } else {
        this._applyChanges(changes);
      }
      this._needsUpdate = false;
    }
  }
  ngOnDestroy() {
    this._viewport.detach();
    this._dataSourceChanges.next(void 0);
    this._dataSourceChanges.complete();
    this.viewChange.complete();
    this._destroyed.next();
    this._destroyed.complete();
    this._viewRepeater.detach();
  }
  /** React to scroll state changes in the viewport. */
  _onRenderedDataChange() {
    if (!this._renderedRange) {
      return;
    }
    this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);
    if (!this._differ) {
      this._differ = this._differs.find(this._renderedItems).create((index, item) => {
        return this.cdkVirtualForTrackBy ? this.cdkVirtualForTrackBy(index, item) : item;
      });
    }
    this._needsUpdate = true;
  }
  /** Swap out one `DataSource` for another. */
  _changeDataSource(oldDs, newDs) {
    if (oldDs) {
      oldDs.disconnect(this);
    }
    this._needsUpdate = true;
    return newDs ? newDs.connect(this) : of();
  }
  /** Update the `CdkVirtualForOfContext` for all views. */
  _updateContext() {
    const count = this._data.length;
    let i = this._viewContainerRef.length;
    while (i--) {
      const view = this._viewContainerRef.get(i);
      view.context.index = this._renderedRange.start + i;
      view.context.count = count;
      this._updateComputedContextProperties(view.context);
      view.detectChanges();
    }
  }
  /** Apply changes to the DOM. */
  _applyChanges(changes) {
    this._viewRepeater.applyChanges(changes, this._viewContainerRef, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record, currentIndex), (record) => record.item);
    changes.forEachIdentityChange((record) => {
      const view = this._viewContainerRef.get(record.currentIndex);
      view.context.$implicit = record.item;
    });
    const count = this._data.length;
    let i = this._viewContainerRef.length;
    while (i--) {
      const view = this._viewContainerRef.get(i);
      view.context.index = this._renderedRange.start + i;
      view.context.count = count;
      this._updateComputedContextProperties(view.context);
    }
  }
  /** Update the computed properties on the `CdkVirtualForOfContext`. */
  _updateComputedContextProperties(context) {
    context.first = context.index === 0;
    context.last = context.index === context.count - 1;
    context.even = context.index % 2 === 0;
    context.odd = !context.even;
  }
  _getEmbeddedViewArgs(record, index) {
    return {
      templateRef: this._template,
      context: {
        $implicit: record.item,
        // It's guaranteed that the iterable is not "undefined" or "null" because we only
        // generate views for elements if the "cdkVirtualForOf" iterable has elements.
        cdkVirtualForOf: this._cdkVirtualForOf,
        index: -1,
        count: -1,
        first: false,
        last: false,
        odd: false,
        even: false
      },
      index
    };
  }
  static {
    this.ɵfac = function CdkVirtualForOf_Factory(t) {
      return new (t || _CdkVirtualForOf)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(IterableDiffers), ɵɵdirectiveInject(_VIEW_REPEATER_STRATEGY), ɵɵdirectiveInject(CdkVirtualScrollViewport, 4), ɵɵdirectiveInject(NgZone));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _CdkVirtualForOf,
      selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]],
      inputs: {
        cdkVirtualForOf: "cdkVirtualForOf",
        cdkVirtualForTrackBy: "cdkVirtualForTrackBy",
        cdkVirtualForTemplate: "cdkVirtualForTemplate",
        cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: _VIEW_REPEATER_STRATEGY,
        useClass: _RecycleViewRepeaterStrategy
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualForOf, [{
    type: Directive,
    args: [{
      selector: "[cdkVirtualFor][cdkVirtualForOf]",
      providers: [{
        provide: _VIEW_REPEATER_STRATEGY,
        useClass: _RecycleViewRepeaterStrategy
      }],
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: TemplateRef
  }, {
    type: IterableDiffers
  }, {
    type: _RecycleViewRepeaterStrategy,
    decorators: [{
      type: Inject,
      args: [_VIEW_REPEATER_STRATEGY]
    }]
  }, {
    type: CdkVirtualScrollViewport,
    decorators: [{
      type: SkipSelf
    }]
  }, {
    type: NgZone
  }], {
    cdkVirtualForOf: [{
      type: Input
    }],
    cdkVirtualForTrackBy: [{
      type: Input
    }],
    cdkVirtualForTemplate: [{
      type: Input
    }],
    cdkVirtualForTemplateCacheSize: [{
      type: Input
    }]
  });
})();
var CdkVirtualScrollableElement = class _CdkVirtualScrollableElement extends CdkVirtualScrollable {
  constructor(elementRef, scrollDispatcher, ngZone, dir) {
    super(elementRef, scrollDispatcher, ngZone, dir);
  }
  measureBoundingClientRectWithScrollOffset(from) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from] - this.measureScrollOffset(from);
  }
  static {
    this.ɵfac = function CdkVirtualScrollableElement_Factory(t) {
      return new (t || _CdkVirtualScrollableElement)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ScrollDispatcher), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Directionality, 8));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _CdkVirtualScrollableElement,
      selectors: [["", "cdkVirtualScrollingElement", ""]],
      hostAttrs: [1, "cdk-virtual-scrollable"],
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: _CdkVirtualScrollableElement
      }]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollableElement, [{
    type: Directive,
    args: [{
      selector: "[cdkVirtualScrollingElement]",
      providers: [{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: CdkVirtualScrollableElement
      }],
      standalone: true,
      host: {
        "class": "cdk-virtual-scrollable"
      }
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ScrollDispatcher
  }, {
    type: NgZone
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var CdkVirtualScrollableWindow = class _CdkVirtualScrollableWindow extends CdkVirtualScrollable {
  constructor(scrollDispatcher, ngZone, dir) {
    super(new ElementRef(document.documentElement), scrollDispatcher, ngZone, dir);
    this._elementScrolled = new Observable((observer) => this.ngZone.runOutsideAngular(() => fromEvent(document, "scroll").pipe(takeUntil(this._destroyed)).subscribe(observer)));
  }
  measureBoundingClientRectWithScrollOffset(from) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from];
  }
  static {
    this.ɵfac = function CdkVirtualScrollableWindow_Factory(t) {
      return new (t || _CdkVirtualScrollableWindow)(ɵɵdirectiveInject(ScrollDispatcher), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Directionality, 8));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _CdkVirtualScrollableWindow,
      selectors: [["cdk-virtual-scroll-viewport", "scrollWindow", ""]],
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: _CdkVirtualScrollableWindow
      }]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollableWindow, [{
    type: Directive,
    args: [{
      selector: "cdk-virtual-scroll-viewport[scrollWindow]",
      providers: [{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: CdkVirtualScrollableWindow
      }],
      standalone: true
    }]
  }], () => [{
    type: ScrollDispatcher
  }, {
    type: NgZone
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var CdkScrollableModule = class _CdkScrollableModule {
  static {
    this.ɵfac = function CdkScrollableModule_Factory(t) {
      return new (t || _CdkScrollableModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CdkScrollableModule,
      imports: [CdkScrollable],
      exports: [CdkScrollable]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkScrollableModule, [{
    type: NgModule,
    args: [{
      exports: [CdkScrollable],
      imports: [CdkScrollable]
    }]
  }], null, null);
})();
var ScrollingModule = class _ScrollingModule {
  static {
    this.ɵfac = function ScrollingModule_Factory(t) {
      return new (t || _ScrollingModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ScrollingModule,
      imports: [BidiModule, CdkScrollableModule, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollableWindow, CdkVirtualScrollableElement],
      exports: [BidiModule, CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, CdkVirtualScrollableWindow, CdkVirtualScrollableElement]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [BidiModule, CdkScrollableModule, BidiModule, CdkScrollableModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollingModule, [{
    type: NgModule,
    args: [{
      imports: [BidiModule, CdkScrollableModule, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollableWindow, CdkVirtualScrollableElement],
      exports: [BidiModule, CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, CdkVirtualScrollableWindow, CdkVirtualScrollableElement]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/portal.mjs
function throwNullPortalError() {
  throw Error("Must provide a portal to attach");
}
function throwPortalAlreadyAttachedError() {
  throw Error("Host already has a portal attached");
}
function throwPortalOutletAlreadyDisposedError() {
  throw Error("This PortalOutlet has already been disposed");
}
function throwUnknownPortalTypeError() {
  throw Error("Attempting to attach an unknown Portal type. BasePortalOutlet accepts either a ComponentPortal or a TemplatePortal.");
}
function throwNullPortalOutletError() {
  throw Error("Attempting to attach a portal to a null PortalOutlet");
}
function throwNoPortalAttachedError() {
  throw Error("Attempting to detach a portal that is not attached to a host");
}
var Portal = class {
  /** Attach this portal to a host. */
  attach(host) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (host == null) {
        throwNullPortalOutletError();
      }
      if (host.hasAttached()) {
        throwPortalAlreadyAttachedError();
      }
    }
    this._attachedHost = host;
    return host.attach(this);
  }
  /** Detach this portal from its host */
  detach() {
    let host = this._attachedHost;
    if (host != null) {
      this._attachedHost = null;
      host.detach();
    } else if (typeof ngDevMode === "undefined" || ngDevMode) {
      throwNoPortalAttachedError();
    }
  }
  /** Whether this portal is attached to a host. */
  get isAttached() {
    return this._attachedHost != null;
  }
  /**
   * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
   * the PortalOutlet when it is performing an `attach()` or `detach()`.
   */
  setAttachedHost(host) {
    this._attachedHost = host;
  }
};
var ComponentPortal = class extends Portal {
  constructor(component, viewContainerRef, injector, componentFactoryResolver, projectableNodes) {
    super();
    this.component = component;
    this.viewContainerRef = viewContainerRef;
    this.injector = injector;
    this.componentFactoryResolver = componentFactoryResolver;
    this.projectableNodes = projectableNodes;
  }
};
var TemplatePortal = class extends Portal {
  constructor(templateRef, viewContainerRef, context, injector) {
    super();
    this.templateRef = templateRef;
    this.viewContainerRef = viewContainerRef;
    this.context = context;
    this.injector = injector;
  }
  get origin() {
    return this.templateRef.elementRef;
  }
  /**
   * Attach the portal to the provided `PortalOutlet`.
   * When a context is provided it will override the `context` property of the `TemplatePortal`
   * instance.
   */
  attach(host, context = this.context) {
    this.context = context;
    return super.attach(host);
  }
  detach() {
    this.context = void 0;
    return super.detach();
  }
};
var DomPortal = class extends Portal {
  constructor(element) {
    super();
    this.element = element instanceof ElementRef ? element.nativeElement : element;
  }
};
var BasePortalOutlet = class {
  constructor() {
    this._isDisposed = false;
    this.attachDomPortal = null;
  }
  /** Whether this host has an attached portal. */
  hasAttached() {
    return !!this._attachedPortal;
  }
  /** Attaches a portal. */
  attach(portal) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!portal) {
        throwNullPortalError();
      }
      if (this.hasAttached()) {
        throwPortalAlreadyAttachedError();
      }
      if (this._isDisposed) {
        throwPortalOutletAlreadyDisposedError();
      }
    }
    if (portal instanceof ComponentPortal) {
      this._attachedPortal = portal;
      return this.attachComponentPortal(portal);
    } else if (portal instanceof TemplatePortal) {
      this._attachedPortal = portal;
      return this.attachTemplatePortal(portal);
    } else if (this.attachDomPortal && portal instanceof DomPortal) {
      this._attachedPortal = portal;
      return this.attachDomPortal(portal);
    }
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      throwUnknownPortalTypeError();
    }
  }
  /** Detaches a previously attached portal. */
  detach() {
    if (this._attachedPortal) {
      this._attachedPortal.setAttachedHost(null);
      this._attachedPortal = null;
    }
    this._invokeDisposeFn();
  }
  /** Permanently dispose of this portal host. */
  dispose() {
    if (this.hasAttached()) {
      this.detach();
    }
    this._invokeDisposeFn();
    this._isDisposed = true;
  }
  /** @docs-private */
  setDisposeFn(fn) {
    this._disposeFn = fn;
  }
  _invokeDisposeFn() {
    if (this._disposeFn) {
      this._disposeFn();
      this._disposeFn = null;
    }
  }
};
var DomPortalOutlet = class extends BasePortalOutlet {
  /**
   * @param outletElement Element into which the content is projected.
   * @param _componentFactoryResolver Used to resolve the component factory.
   *   Only required when attaching component portals.
   * @param _appRef Reference to the application. Only used in component portals when there
   *   is no `ViewContainerRef` available.
   * @param _defaultInjector Injector to use as a fallback when the portal being attached doesn't
   *   have one. Only used for component portals.
   * @param _document Reference to the document. Used when attaching a DOM portal. Will eventually
   *   become a required parameter.
   */
  constructor(outletElement, _componentFactoryResolver, _appRef, _defaultInjector, _document) {
    super();
    this.outletElement = outletElement;
    this._componentFactoryResolver = _componentFactoryResolver;
    this._appRef = _appRef;
    this._defaultInjector = _defaultInjector;
    this.attachDomPortal = (portal) => {
      if (!this._document && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw Error("Cannot attach DOM portal without _document constructor parameter");
      }
      const element = portal.element;
      if (!element.parentNode && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw Error("DOM portal content must be attached to a parent node.");
      }
      const anchorNode = this._document.createComment("dom-portal");
      element.parentNode.insertBefore(anchorNode, element);
      this.outletElement.appendChild(element);
      this._attachedPortal = portal;
      super.setDisposeFn(() => {
        if (anchorNode.parentNode) {
          anchorNode.parentNode.replaceChild(element, anchorNode);
        }
      });
    };
    this._document = _document;
  }
  /**
   * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
   * @param portal Portal to be attached
   * @returns Reference to the created component.
   */
  attachComponentPortal(portal) {
    const resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
    if ((typeof ngDevMode === "undefined" || ngDevMode) && !resolver) {
      throw Error("Cannot attach component portal to outlet without a ComponentFactoryResolver.");
    }
    const componentFactory = resolver.resolveComponentFactory(portal.component);
    let componentRef;
    if (portal.viewContainerRef) {
      componentRef = portal.viewContainerRef.createComponent(componentFactory, portal.viewContainerRef.length, portal.injector || portal.viewContainerRef.injector, portal.projectableNodes || void 0);
      this.setDisposeFn(() => componentRef.destroy());
    } else {
      if ((typeof ngDevMode === "undefined" || ngDevMode) && !this._appRef) {
        throw Error("Cannot attach component portal to outlet without an ApplicationRef.");
      }
      componentRef = componentFactory.create(portal.injector || this._defaultInjector || Injector.NULL);
      this._appRef.attachView(componentRef.hostView);
      this.setDisposeFn(() => {
        if (this._appRef.viewCount > 0) {
          this._appRef.detachView(componentRef.hostView);
        }
        componentRef.destroy();
      });
    }
    this.outletElement.appendChild(this._getComponentRootNode(componentRef));
    this._attachedPortal = portal;
    return componentRef;
  }
  /**
   * Attaches a template portal to the DOM as an embedded view.
   * @param portal Portal to be attached.
   * @returns Reference to the created embedded view.
   */
  attachTemplatePortal(portal) {
    let viewContainer = portal.viewContainerRef;
    let viewRef = viewContainer.createEmbeddedView(portal.templateRef, portal.context, {
      injector: portal.injector
    });
    viewRef.rootNodes.forEach((rootNode) => this.outletElement.appendChild(rootNode));
    viewRef.detectChanges();
    this.setDisposeFn(() => {
      let index = viewContainer.indexOf(viewRef);
      if (index !== -1) {
        viewContainer.remove(index);
      }
    });
    this._attachedPortal = portal;
    return viewRef;
  }
  /**
   * Clears out a portal from the DOM.
   */
  dispose() {
    super.dispose();
    this.outletElement.remove();
  }
  /** Gets the root HTMLElement for an instantiated component. */
  _getComponentRootNode(componentRef) {
    return componentRef.hostView.rootNodes[0];
  }
};
var CdkPortal = class _CdkPortal extends TemplatePortal {
  constructor(templateRef, viewContainerRef) {
    super(templateRef, viewContainerRef);
  }
  static {
    this.ɵfac = function CdkPortal_Factory(t) {
      return new (t || _CdkPortal)(ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(ViewContainerRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _CdkPortal,
      selectors: [["", "cdkPortal", ""]],
      exportAs: ["cdkPortal"],
      standalone: true,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkPortal, [{
    type: Directive,
    args: [{
      selector: "[cdkPortal]",
      exportAs: "cdkPortal",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }, {
    type: ViewContainerRef
  }], null);
})();
var TemplatePortalDirective = class _TemplatePortalDirective extends CdkPortal {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTemplatePortalDirective_BaseFactory;
      return function TemplatePortalDirective_Factory(t) {
        return (ɵTemplatePortalDirective_BaseFactory || (ɵTemplatePortalDirective_BaseFactory = ɵɵgetInheritedFactory(_TemplatePortalDirective)))(t || _TemplatePortalDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TemplatePortalDirective,
      selectors: [["", "cdk-portal", ""], ["", "portal", ""]],
      exportAs: ["cdkPortal"],
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: CdkPortal,
        useExisting: _TemplatePortalDirective
      }]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TemplatePortalDirective, [{
    type: Directive,
    args: [{
      selector: "[cdk-portal], [portal]",
      exportAs: "cdkPortal",
      providers: [{
        provide: CdkPortal,
        useExisting: TemplatePortalDirective
      }],
      standalone: true
    }]
  }], null, null);
})();
var CdkPortalOutlet = class _CdkPortalOutlet extends BasePortalOutlet {
  constructor(_componentFactoryResolver, _viewContainerRef, _document) {
    super();
    this._componentFactoryResolver = _componentFactoryResolver;
    this._viewContainerRef = _viewContainerRef;
    this._isInitialized = false;
    this.attached = new EventEmitter();
    this.attachDomPortal = (portal) => {
      if (!this._document && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw Error("Cannot attach DOM portal without _document constructor parameter");
      }
      const element = portal.element;
      if (!element.parentNode && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw Error("DOM portal content must be attached to a parent node.");
      }
      const anchorNode = this._document.createComment("dom-portal");
      portal.setAttachedHost(this);
      element.parentNode.insertBefore(anchorNode, element);
      this._getRootNode().appendChild(element);
      this._attachedPortal = portal;
      super.setDisposeFn(() => {
        if (anchorNode.parentNode) {
          anchorNode.parentNode.replaceChild(element, anchorNode);
        }
      });
    };
    this._document = _document;
  }
  /** Portal associated with the Portal outlet. */
  get portal() {
    return this._attachedPortal;
  }
  set portal(portal) {
    if (this.hasAttached() && !portal && !this._isInitialized) {
      return;
    }
    if (this.hasAttached()) {
      super.detach();
    }
    if (portal) {
      super.attach(portal);
    }
    this._attachedPortal = portal || null;
  }
  /** Component or view reference that is attached to the portal. */
  get attachedRef() {
    return this._attachedRef;
  }
  ngOnInit() {
    this._isInitialized = true;
  }
  ngOnDestroy() {
    super.dispose();
    this._attachedRef = this._attachedPortal = null;
  }
  /**
   * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
   *
   * @param portal Portal to be attached to the portal outlet.
   * @returns Reference to the created component.
   */
  attachComponentPortal(portal) {
    portal.setAttachedHost(this);
    const viewContainerRef = portal.viewContainerRef != null ? portal.viewContainerRef : this._viewContainerRef;
    const resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
    const componentFactory = resolver.resolveComponentFactory(portal.component);
    const ref = viewContainerRef.createComponent(componentFactory, viewContainerRef.length, portal.injector || viewContainerRef.injector, portal.projectableNodes || void 0);
    if (viewContainerRef !== this._viewContainerRef) {
      this._getRootNode().appendChild(ref.hostView.rootNodes[0]);
    }
    super.setDisposeFn(() => ref.destroy());
    this._attachedPortal = portal;
    this._attachedRef = ref;
    this.attached.emit(ref);
    return ref;
  }
  /**
   * Attach the given TemplatePortal to this PortalHost as an embedded View.
   * @param portal Portal to be attached.
   * @returns Reference to the created embedded view.
   */
  attachTemplatePortal(portal) {
    portal.setAttachedHost(this);
    const viewRef = this._viewContainerRef.createEmbeddedView(portal.templateRef, portal.context, {
      injector: portal.injector
    });
    super.setDisposeFn(() => this._viewContainerRef.clear());
    this._attachedPortal = portal;
    this._attachedRef = viewRef;
    this.attached.emit(viewRef);
    return viewRef;
  }
  /** Gets the root node of the portal outlet. */
  _getRootNode() {
    const nativeElement = this._viewContainerRef.element.nativeElement;
    return nativeElement.nodeType === nativeElement.ELEMENT_NODE ? nativeElement : nativeElement.parentNode;
  }
  static {
    this.ɵfac = function CdkPortalOutlet_Factory(t) {
      return new (t || _CdkPortalOutlet)(ɵɵdirectiveInject(ComponentFactoryResolver$1), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(DOCUMENT));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _CdkPortalOutlet,
      selectors: [["", "cdkPortalOutlet", ""]],
      inputs: {
        portal: [InputFlags.None, "cdkPortalOutlet", "portal"]
      },
      outputs: {
        attached: "attached"
      },
      exportAs: ["cdkPortalOutlet"],
      standalone: true,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkPortalOutlet, [{
    type: Directive,
    args: [{
      selector: "[cdkPortalOutlet]",
      exportAs: "cdkPortalOutlet",
      standalone: true
    }]
  }], () => [{
    type: ComponentFactoryResolver$1
  }, {
    type: ViewContainerRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], {
    portal: [{
      type: Input,
      args: ["cdkPortalOutlet"]
    }],
    attached: [{
      type: Output
    }]
  });
})();
var PortalHostDirective = class _PortalHostDirective extends CdkPortalOutlet {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵPortalHostDirective_BaseFactory;
      return function PortalHostDirective_Factory(t) {
        return (ɵPortalHostDirective_BaseFactory || (ɵPortalHostDirective_BaseFactory = ɵɵgetInheritedFactory(_PortalHostDirective)))(t || _PortalHostDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _PortalHostDirective,
      selectors: [["", "cdkPortalHost", ""], ["", "portalHost", ""]],
      inputs: {
        portal: [InputFlags.None, "cdkPortalHost", "portal"]
      },
      exportAs: ["cdkPortalHost"],
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: CdkPortalOutlet,
        useExisting: _PortalHostDirective
      }]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PortalHostDirective, [{
    type: Directive,
    args: [{
      selector: "[cdkPortalHost], [portalHost]",
      exportAs: "cdkPortalHost",
      inputs: [{
        name: "portal",
        alias: "cdkPortalHost"
      }],
      providers: [{
        provide: CdkPortalOutlet,
        useExisting: PortalHostDirective
      }],
      standalone: true
    }]
  }], null, null);
})();
var PortalModule = class _PortalModule {
  static {
    this.ɵfac = function PortalModule_Factory(t) {
      return new (t || _PortalModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _PortalModule,
      imports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective],
      exports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PortalModule, [{
    type: NgModule,
    args: [{
      imports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective],
      exports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/keycodes.mjs
var ESCAPE = 27;
function hasModifierKey(event, ...modifiers) {
  if (modifiers.length) {
    return modifiers.some((modifier) => event[modifier]);
  }
  return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
}

// node_modules/@angular/cdk/fesm2022/overlay.mjs
var scrollBehaviorSupported2 = supportsScrollBehavior();
var BlockScrollStrategy = class {
  constructor(_viewportRuler, document2) {
    this._viewportRuler = _viewportRuler;
    this._previousHTMLStyles = {
      top: "",
      left: ""
    };
    this._isEnabled = false;
    this._document = document2;
  }
  /** Attaches this scroll strategy to an overlay. */
  attach() {
  }
  /** Blocks page-level scroll while the attached overlay is open. */
  enable() {
    if (this._canBeEnabled()) {
      const root = this._document.documentElement;
      this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition();
      this._previousHTMLStyles.left = root.style.left || "";
      this._previousHTMLStyles.top = root.style.top || "";
      root.style.left = coerceCssPixelValue(-this._previousScrollPosition.left);
      root.style.top = coerceCssPixelValue(-this._previousScrollPosition.top);
      root.classList.add("cdk-global-scrollblock");
      this._isEnabled = true;
    }
  }
  /** Unblocks page-level scroll while the attached overlay is open. */
  disable() {
    if (this._isEnabled) {
      const html = this._document.documentElement;
      const body = this._document.body;
      const htmlStyle = html.style;
      const bodyStyle = body.style;
      const previousHtmlScrollBehavior = htmlStyle.scrollBehavior || "";
      const previousBodyScrollBehavior = bodyStyle.scrollBehavior || "";
      this._isEnabled = false;
      htmlStyle.left = this._previousHTMLStyles.left;
      htmlStyle.top = this._previousHTMLStyles.top;
      html.classList.remove("cdk-global-scrollblock");
      if (scrollBehaviorSupported2) {
        htmlStyle.scrollBehavior = bodyStyle.scrollBehavior = "auto";
      }
      window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top);
      if (scrollBehaviorSupported2) {
        htmlStyle.scrollBehavior = previousHtmlScrollBehavior;
        bodyStyle.scrollBehavior = previousBodyScrollBehavior;
      }
    }
  }
  _canBeEnabled() {
    const html = this._document.documentElement;
    if (html.classList.contains("cdk-global-scrollblock") || this._isEnabled) {
      return false;
    }
    const body = this._document.body;
    const viewport = this._viewportRuler.getViewportSize();
    return body.scrollHeight > viewport.height || body.scrollWidth > viewport.width;
  }
};
function getMatScrollStrategyAlreadyAttachedError() {
  return Error(`Scroll strategy has already been attached.`);
}
var CloseScrollStrategy = class {
  constructor(_scrollDispatcher, _ngZone, _viewportRuler, _config) {
    this._scrollDispatcher = _scrollDispatcher;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    this._config = _config;
    this._scrollSubscription = null;
    this._detach = () => {
      this.disable();
      if (this._overlayRef.hasAttached()) {
        this._ngZone.run(() => this._overlayRef.detach());
      }
    };
  }
  /** Attaches this scroll strategy to an overlay. */
  attach(overlayRef) {
    if (this._overlayRef && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getMatScrollStrategyAlreadyAttachedError();
    }
    this._overlayRef = overlayRef;
  }
  /** Enables the closing of the attached overlay on scroll. */
  enable() {
    if (this._scrollSubscription) {
      return;
    }
    const stream = this._scrollDispatcher.scrolled(0).pipe(filter((scrollable) => {
      return !scrollable || !this._overlayRef.overlayElement.contains(scrollable.getElementRef().nativeElement);
    }));
    if (this._config && this._config.threshold && this._config.threshold > 1) {
      this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top;
      this._scrollSubscription = stream.subscribe(() => {
        const scrollPosition = this._viewportRuler.getViewportScrollPosition().top;
        if (Math.abs(scrollPosition - this._initialScrollPosition) > this._config.threshold) {
          this._detach();
        } else {
          this._overlayRef.updatePosition();
        }
      });
    } else {
      this._scrollSubscription = stream.subscribe(this._detach);
    }
  }
  /** Disables the closing the attached overlay on scroll. */
  disable() {
    if (this._scrollSubscription) {
      this._scrollSubscription.unsubscribe();
      this._scrollSubscription = null;
    }
  }
  detach() {
    this.disable();
    this._overlayRef = null;
  }
};
var NoopScrollStrategy = class {
  /** Does nothing, as this scroll strategy is a no-op. */
  enable() {
  }
  /** Does nothing, as this scroll strategy is a no-op. */
  disable() {
  }
  /** Does nothing, as this scroll strategy is a no-op. */
  attach() {
  }
};
function isElementScrolledOutsideView(element, scrollContainers) {
  return scrollContainers.some((containerBounds) => {
    const outsideAbove = element.bottom < containerBounds.top;
    const outsideBelow = element.top > containerBounds.bottom;
    const outsideLeft = element.right < containerBounds.left;
    const outsideRight = element.left > containerBounds.right;
    return outsideAbove || outsideBelow || outsideLeft || outsideRight;
  });
}
function isElementClippedByScrolling(element, scrollContainers) {
  return scrollContainers.some((scrollContainerRect) => {
    const clippedAbove = element.top < scrollContainerRect.top;
    const clippedBelow = element.bottom > scrollContainerRect.bottom;
    const clippedLeft = element.left < scrollContainerRect.left;
    const clippedRight = element.right > scrollContainerRect.right;
    return clippedAbove || clippedBelow || clippedLeft || clippedRight;
  });
}
var RepositionScrollStrategy = class {
  constructor(_scrollDispatcher, _viewportRuler, _ngZone, _config) {
    this._scrollDispatcher = _scrollDispatcher;
    this._viewportRuler = _viewportRuler;
    this._ngZone = _ngZone;
    this._config = _config;
    this._scrollSubscription = null;
  }
  /** Attaches this scroll strategy to an overlay. */
  attach(overlayRef) {
    if (this._overlayRef && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getMatScrollStrategyAlreadyAttachedError();
    }
    this._overlayRef = overlayRef;
  }
  /** Enables repositioning of the attached overlay on scroll. */
  enable() {
    if (!this._scrollSubscription) {
      const throttle = this._config ? this._config.scrollThrottle : 0;
      this._scrollSubscription = this._scrollDispatcher.scrolled(throttle).subscribe(() => {
        this._overlayRef.updatePosition();
        if (this._config && this._config.autoClose) {
          const overlayRect = this._overlayRef.overlayElement.getBoundingClientRect();
          const {
            width,
            height
          } = this._viewportRuler.getViewportSize();
          const parentRects = [{
            width,
            height,
            bottom: height,
            right: width,
            top: 0,
            left: 0
          }];
          if (isElementScrolledOutsideView(overlayRect, parentRects)) {
            this.disable();
            this._ngZone.run(() => this._overlayRef.detach());
          }
        }
      });
    }
  }
  /** Disables repositioning of the attached overlay on scroll. */
  disable() {
    if (this._scrollSubscription) {
      this._scrollSubscription.unsubscribe();
      this._scrollSubscription = null;
    }
  }
  detach() {
    this.disable();
    this._overlayRef = null;
  }
};
var ScrollStrategyOptions = class _ScrollStrategyOptions {
  constructor(_scrollDispatcher, _viewportRuler, _ngZone, document2) {
    this._scrollDispatcher = _scrollDispatcher;
    this._viewportRuler = _viewportRuler;
    this._ngZone = _ngZone;
    this.noop = () => new NoopScrollStrategy();
    this.close = (config) => new CloseScrollStrategy(this._scrollDispatcher, this._ngZone, this._viewportRuler, config);
    this.block = () => new BlockScrollStrategy(this._viewportRuler, this._document);
    this.reposition = (config) => new RepositionScrollStrategy(this._scrollDispatcher, this._viewportRuler, this._ngZone, config);
    this._document = document2;
  }
  static {
    this.ɵfac = function ScrollStrategyOptions_Factory(t) {
      return new (t || _ScrollStrategyOptions)(ɵɵinject(ScrollDispatcher), ɵɵinject(ViewportRuler), ɵɵinject(NgZone), ɵɵinject(DOCUMENT));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ScrollStrategyOptions,
      factory: _ScrollStrategyOptions.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollStrategyOptions, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ScrollDispatcher
  }, {
    type: ViewportRuler
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var OverlayConfig = class {
  constructor(config) {
    this.scrollStrategy = new NoopScrollStrategy();
    this.panelClass = "";
    this.hasBackdrop = false;
    this.backdropClass = "cdk-overlay-dark-backdrop";
    this.disposeOnNavigation = false;
    if (config) {
      const configKeys = Object.keys(config);
      for (const key of configKeys) {
        if (config[key] !== void 0) {
          this[key] = config[key];
        }
      }
    }
  }
};
var ConnectedOverlayPositionChange = class {
  constructor(connectionPair, scrollableViewProperties) {
    this.connectionPair = connectionPair;
    this.scrollableViewProperties = scrollableViewProperties;
  }
};
function validateVerticalPosition(property, value) {
  if (value !== "top" && value !== "bottom" && value !== "center") {
    throw Error(`ConnectedPosition: Invalid ${property} "${value}". Expected "top", "bottom" or "center".`);
  }
}
function validateHorizontalPosition(property, value) {
  if (value !== "start" && value !== "end" && value !== "center") {
    throw Error(`ConnectedPosition: Invalid ${property} "${value}". Expected "start", "end" or "center".`);
  }
}
var BaseOverlayDispatcher = class _BaseOverlayDispatcher {
  constructor(document2) {
    this._attachedOverlays = [];
    this._document = document2;
  }
  ngOnDestroy() {
    this.detach();
  }
  /** Add a new overlay to the list of attached overlay refs. */
  add(overlayRef) {
    this.remove(overlayRef);
    this._attachedOverlays.push(overlayRef);
  }
  /** Remove an overlay from the list of attached overlay refs. */
  remove(overlayRef) {
    const index = this._attachedOverlays.indexOf(overlayRef);
    if (index > -1) {
      this._attachedOverlays.splice(index, 1);
    }
    if (this._attachedOverlays.length === 0) {
      this.detach();
    }
  }
  static {
    this.ɵfac = function BaseOverlayDispatcher_Factory(t) {
      return new (t || _BaseOverlayDispatcher)(ɵɵinject(DOCUMENT));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _BaseOverlayDispatcher,
      factory: _BaseOverlayDispatcher.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseOverlayDispatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var OverlayKeyboardDispatcher = class _OverlayKeyboardDispatcher extends BaseOverlayDispatcher {
  constructor(document2, _ngZone) {
    super(document2);
    this._ngZone = _ngZone;
    this._keydownListener = (event) => {
      const overlays = this._attachedOverlays;
      for (let i = overlays.length - 1; i > -1; i--) {
        if (overlays[i]._keydownEvents.observers.length > 0) {
          const keydownEvents = overlays[i]._keydownEvents;
          if (this._ngZone) {
            this._ngZone.run(() => keydownEvents.next(event));
          } else {
            keydownEvents.next(event);
          }
          break;
        }
      }
    };
  }
  /** Add a new overlay to the list of attached overlay refs. */
  add(overlayRef) {
    super.add(overlayRef);
    if (!this._isAttached) {
      if (this._ngZone) {
        this._ngZone.runOutsideAngular(() => this._document.body.addEventListener("keydown", this._keydownListener));
      } else {
        this._document.body.addEventListener("keydown", this._keydownListener);
      }
      this._isAttached = true;
    }
  }
  /** Detaches the global keyboard event listener. */
  detach() {
    if (this._isAttached) {
      this._document.body.removeEventListener("keydown", this._keydownListener);
      this._isAttached = false;
    }
  }
  static {
    this.ɵfac = function OverlayKeyboardDispatcher_Factory(t) {
      return new (t || _OverlayKeyboardDispatcher)(ɵɵinject(DOCUMENT), ɵɵinject(NgZone, 8));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OverlayKeyboardDispatcher,
      factory: _OverlayKeyboardDispatcher.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayKeyboardDispatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: NgZone,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var OverlayOutsideClickDispatcher = class _OverlayOutsideClickDispatcher extends BaseOverlayDispatcher {
  constructor(document2, _platform, _ngZone) {
    super(document2);
    this._platform = _platform;
    this._ngZone = _ngZone;
    this._cursorStyleIsSet = false;
    this._pointerDownListener = (event) => {
      this._pointerDownEventTarget = _getEventTarget(event);
    };
    this._clickListener = (event) => {
      const target = _getEventTarget(event);
      const origin = event.type === "click" && this._pointerDownEventTarget ? this._pointerDownEventTarget : target;
      this._pointerDownEventTarget = null;
      const overlays = this._attachedOverlays.slice();
      for (let i = overlays.length - 1; i > -1; i--) {
        const overlayRef = overlays[i];
        if (overlayRef._outsidePointerEvents.observers.length < 1 || !overlayRef.hasAttached()) {
          continue;
        }
        if (overlayRef.overlayElement.contains(target) || overlayRef.overlayElement.contains(origin)) {
          break;
        }
        const outsidePointerEvents = overlayRef._outsidePointerEvents;
        if (this._ngZone) {
          this._ngZone.run(() => outsidePointerEvents.next(event));
        } else {
          outsidePointerEvents.next(event);
        }
      }
    };
  }
  /** Add a new overlay to the list of attached overlay refs. */
  add(overlayRef) {
    super.add(overlayRef);
    if (!this._isAttached) {
      const body = this._document.body;
      if (this._ngZone) {
        this._ngZone.runOutsideAngular(() => this._addEventListeners(body));
      } else {
        this._addEventListeners(body);
      }
      if (this._platform.IOS && !this._cursorStyleIsSet) {
        this._cursorOriginalValue = body.style.cursor;
        body.style.cursor = "pointer";
        this._cursorStyleIsSet = true;
      }
      this._isAttached = true;
    }
  }
  /** Detaches the global keyboard event listener. */
  detach() {
    if (this._isAttached) {
      const body = this._document.body;
      body.removeEventListener("pointerdown", this._pointerDownListener, true);
      body.removeEventListener("click", this._clickListener, true);
      body.removeEventListener("auxclick", this._clickListener, true);
      body.removeEventListener("contextmenu", this._clickListener, true);
      if (this._platform.IOS && this._cursorStyleIsSet) {
        body.style.cursor = this._cursorOriginalValue;
        this._cursorStyleIsSet = false;
      }
      this._isAttached = false;
    }
  }
  _addEventListeners(body) {
    body.addEventListener("pointerdown", this._pointerDownListener, true);
    body.addEventListener("click", this._clickListener, true);
    body.addEventListener("auxclick", this._clickListener, true);
    body.addEventListener("contextmenu", this._clickListener, true);
  }
  static {
    this.ɵfac = function OverlayOutsideClickDispatcher_Factory(t) {
      return new (t || _OverlayOutsideClickDispatcher)(ɵɵinject(DOCUMENT), ɵɵinject(Platform), ɵɵinject(NgZone, 8));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OverlayOutsideClickDispatcher,
      factory: _OverlayOutsideClickDispatcher.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayOutsideClickDispatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Platform
  }, {
    type: NgZone,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var OverlayContainer = class _OverlayContainer {
  constructor(document2, _platform) {
    this._platform = _platform;
    this._document = document2;
  }
  ngOnDestroy() {
    this._containerElement?.remove();
  }
  /**
   * This method returns the overlay container element. It will lazily
   * create the element the first time it is called to facilitate using
   * the container in non-browser environments.
   * @returns the container element
   */
  getContainerElement() {
    if (!this._containerElement) {
      this._createContainer();
    }
    return this._containerElement;
  }
  /**
   * Create the overlay container element, which is simply a div
   * with the 'cdk-overlay-container' class on the document body.
   */
  _createContainer() {
    const containerClass = "cdk-overlay-container";
    if (this._platform.isBrowser || _isTestEnvironment()) {
      const oppositePlatformContainers = this._document.querySelectorAll(`.${containerClass}[platform="server"], .${containerClass}[platform="test"]`);
      for (let i = 0; i < oppositePlatformContainers.length; i++) {
        oppositePlatformContainers[i].remove();
      }
    }
    const container = this._document.createElement("div");
    container.classList.add(containerClass);
    if (_isTestEnvironment()) {
      container.setAttribute("platform", "test");
    } else if (!this._platform.isBrowser) {
      container.setAttribute("platform", "server");
    }
    this._document.body.appendChild(container);
    this._containerElement = container;
  }
  static {
    this.ɵfac = function OverlayContainer_Factory(t) {
      return new (t || _OverlayContainer)(ɵɵinject(DOCUMENT), ɵɵinject(Platform));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OverlayContainer,
      factory: _OverlayContainer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayContainer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Platform
  }], null);
})();
var OverlayRef = class {
  constructor(_portalOutlet, _host, _pane, _config, _ngZone, _keyboardDispatcher, _document, _location, _outsideClickDispatcher, _animationsDisabled = false) {
    this._portalOutlet = _portalOutlet;
    this._host = _host;
    this._pane = _pane;
    this._config = _config;
    this._ngZone = _ngZone;
    this._keyboardDispatcher = _keyboardDispatcher;
    this._document = _document;
    this._location = _location;
    this._outsideClickDispatcher = _outsideClickDispatcher;
    this._animationsDisabled = _animationsDisabled;
    this._backdropElement = null;
    this._backdropClick = new Subject();
    this._attachments = new Subject();
    this._detachments = new Subject();
    this._locationChanges = Subscription.EMPTY;
    this._backdropClickHandler = (event) => this._backdropClick.next(event);
    this._backdropTransitionendHandler = (event) => {
      this._disposeBackdrop(event.target);
    };
    this._keydownEvents = new Subject();
    this._outsidePointerEvents = new Subject();
    if (_config.scrollStrategy) {
      this._scrollStrategy = _config.scrollStrategy;
      this._scrollStrategy.attach(this);
    }
    this._positionStrategy = _config.positionStrategy;
  }
  /** The overlay's HTML element */
  get overlayElement() {
    return this._pane;
  }
  /** The overlay's backdrop HTML element. */
  get backdropElement() {
    return this._backdropElement;
  }
  /**
   * Wrapper around the panel element. Can be used for advanced
   * positioning where a wrapper with specific styling is
   * required around the overlay pane.
   */
  get hostElement() {
    return this._host;
  }
  /**
   * Attaches content, given via a Portal, to the overlay.
   * If the overlay is configured to have a backdrop, it will be created.
   *
   * @param portal Portal instance to which to attach the overlay.
   * @returns The portal attachment result.
   */
  attach(portal) {
    if (!this._host.parentElement && this._previousHostParent) {
      this._previousHostParent.appendChild(this._host);
    }
    const attachResult = this._portalOutlet.attach(portal);
    if (this._positionStrategy) {
      this._positionStrategy.attach(this);
    }
    this._updateStackingOrder();
    this._updateElementSize();
    this._updateElementDirection();
    if (this._scrollStrategy) {
      this._scrollStrategy.enable();
    }
    this._ngZone.onStable.pipe(take(1)).subscribe(() => {
      if (this.hasAttached()) {
        this.updatePosition();
      }
    });
    this._togglePointerEvents(true);
    if (this._config.hasBackdrop) {
      this._attachBackdrop();
    }
    if (this._config.panelClass) {
      this._toggleClasses(this._pane, this._config.panelClass, true);
    }
    this._attachments.next();
    this._keyboardDispatcher.add(this);
    if (this._config.disposeOnNavigation) {
      this._locationChanges = this._location.subscribe(() => this.dispose());
    }
    this._outsideClickDispatcher.add(this);
    if (typeof attachResult?.onDestroy === "function") {
      attachResult.onDestroy(() => {
        if (this.hasAttached()) {
          this._ngZone.runOutsideAngular(() => Promise.resolve().then(() => this.detach()));
        }
      });
    }
    return attachResult;
  }
  /**
   * Detaches an overlay from a portal.
   * @returns The portal detachment result.
   */
  detach() {
    if (!this.hasAttached()) {
      return;
    }
    this.detachBackdrop();
    this._togglePointerEvents(false);
    if (this._positionStrategy && this._positionStrategy.detach) {
      this._positionStrategy.detach();
    }
    if (this._scrollStrategy) {
      this._scrollStrategy.disable();
    }
    const detachmentResult = this._portalOutlet.detach();
    this._detachments.next();
    this._keyboardDispatcher.remove(this);
    this._detachContentWhenStable();
    this._locationChanges.unsubscribe();
    this._outsideClickDispatcher.remove(this);
    return detachmentResult;
  }
  /** Cleans up the overlay from the DOM. */
  dispose() {
    const isAttached = this.hasAttached();
    if (this._positionStrategy) {
      this._positionStrategy.dispose();
    }
    this._disposeScrollStrategy();
    this._disposeBackdrop(this._backdropElement);
    this._locationChanges.unsubscribe();
    this._keyboardDispatcher.remove(this);
    this._portalOutlet.dispose();
    this._attachments.complete();
    this._backdropClick.complete();
    this._keydownEvents.complete();
    this._outsidePointerEvents.complete();
    this._outsideClickDispatcher.remove(this);
    this._host?.remove();
    this._previousHostParent = this._pane = this._host = null;
    if (isAttached) {
      this._detachments.next();
    }
    this._detachments.complete();
  }
  /** Whether the overlay has attached content. */
  hasAttached() {
    return this._portalOutlet.hasAttached();
  }
  /** Gets an observable that emits when the backdrop has been clicked. */
  backdropClick() {
    return this._backdropClick;
  }
  /** Gets an observable that emits when the overlay has been attached. */
  attachments() {
    return this._attachments;
  }
  /** Gets an observable that emits when the overlay has been detached. */
  detachments() {
    return this._detachments;
  }
  /** Gets an observable of keydown events targeted to this overlay. */
  keydownEvents() {
    return this._keydownEvents;
  }
  /** Gets an observable of pointer events targeted outside this overlay. */
  outsidePointerEvents() {
    return this._outsidePointerEvents;
  }
  /** Gets the current overlay configuration, which is immutable. */
  getConfig() {
    return this._config;
  }
  /** Updates the position of the overlay based on the position strategy. */
  updatePosition() {
    if (this._positionStrategy) {
      this._positionStrategy.apply();
    }
  }
  /** Switches to a new position strategy and updates the overlay position. */
  updatePositionStrategy(strategy) {
    if (strategy === this._positionStrategy) {
      return;
    }
    if (this._positionStrategy) {
      this._positionStrategy.dispose();
    }
    this._positionStrategy = strategy;
    if (this.hasAttached()) {
      strategy.attach(this);
      this.updatePosition();
    }
  }
  /** Update the size properties of the overlay. */
  updateSize(sizeConfig) {
    this._config = __spreadValues(__spreadValues({}, this._config), sizeConfig);
    this._updateElementSize();
  }
  /** Sets the LTR/RTL direction for the overlay. */
  setDirection(dir) {
    this._config = __spreadProps(__spreadValues({}, this._config), {
      direction: dir
    });
    this._updateElementDirection();
  }
  /** Add a CSS class or an array of classes to the overlay pane. */
  addPanelClass(classes) {
    if (this._pane) {
      this._toggleClasses(this._pane, classes, true);
    }
  }
  /** Remove a CSS class or an array of classes from the overlay pane. */
  removePanelClass(classes) {
    if (this._pane) {
      this._toggleClasses(this._pane, classes, false);
    }
  }
  /**
   * Returns the layout direction of the overlay panel.
   */
  getDirection() {
    const direction = this._config.direction;
    if (!direction) {
      return "ltr";
    }
    return typeof direction === "string" ? direction : direction.value;
  }
  /** Switches to a new scroll strategy. */
  updateScrollStrategy(strategy) {
    if (strategy === this._scrollStrategy) {
      return;
    }
    this._disposeScrollStrategy();
    this._scrollStrategy = strategy;
    if (this.hasAttached()) {
      strategy.attach(this);
      strategy.enable();
    }
  }
  /** Updates the text direction of the overlay panel. */
  _updateElementDirection() {
    this._host.setAttribute("dir", this.getDirection());
  }
  /** Updates the size of the overlay element based on the overlay config. */
  _updateElementSize() {
    if (!this._pane) {
      return;
    }
    const style = this._pane.style;
    style.width = coerceCssPixelValue(this._config.width);
    style.height = coerceCssPixelValue(this._config.height);
    style.minWidth = coerceCssPixelValue(this._config.minWidth);
    style.minHeight = coerceCssPixelValue(this._config.minHeight);
    style.maxWidth = coerceCssPixelValue(this._config.maxWidth);
    style.maxHeight = coerceCssPixelValue(this._config.maxHeight);
  }
  /** Toggles the pointer events for the overlay pane element. */
  _togglePointerEvents(enablePointer) {
    this._pane.style.pointerEvents = enablePointer ? "" : "none";
  }
  /** Attaches a backdrop for this overlay. */
  _attachBackdrop() {
    const showingClass = "cdk-overlay-backdrop-showing";
    this._backdropElement = this._document.createElement("div");
    this._backdropElement.classList.add("cdk-overlay-backdrop");
    if (this._animationsDisabled) {
      this._backdropElement.classList.add("cdk-overlay-backdrop-noop-animation");
    }
    if (this._config.backdropClass) {
      this._toggleClasses(this._backdropElement, this._config.backdropClass, true);
    }
    this._host.parentElement.insertBefore(this._backdropElement, this._host);
    this._backdropElement.addEventListener("click", this._backdropClickHandler);
    if (!this._animationsDisabled && typeof requestAnimationFrame !== "undefined") {
      this._ngZone.runOutsideAngular(() => {
        requestAnimationFrame(() => {
          if (this._backdropElement) {
            this._backdropElement.classList.add(showingClass);
          }
        });
      });
    } else {
      this._backdropElement.classList.add(showingClass);
    }
  }
  /**
   * Updates the stacking order of the element, moving it to the top if necessary.
   * This is required in cases where one overlay was detached, while another one,
   * that should be behind it, was destroyed. The next time both of them are opened,
   * the stacking will be wrong, because the detached element's pane will still be
   * in its original DOM position.
   */
  _updateStackingOrder() {
    if (this._host.nextSibling) {
      this._host.parentNode.appendChild(this._host);
    }
  }
  /** Detaches the backdrop (if any) associated with the overlay. */
  detachBackdrop() {
    const backdropToDetach = this._backdropElement;
    if (!backdropToDetach) {
      return;
    }
    if (this._animationsDisabled) {
      this._disposeBackdrop(backdropToDetach);
      return;
    }
    backdropToDetach.classList.remove("cdk-overlay-backdrop-showing");
    this._ngZone.runOutsideAngular(() => {
      backdropToDetach.addEventListener("transitionend", this._backdropTransitionendHandler);
    });
    backdropToDetach.style.pointerEvents = "none";
    this._backdropTimeout = this._ngZone.runOutsideAngular(() => setTimeout(() => {
      this._disposeBackdrop(backdropToDetach);
    }, 500));
  }
  /** Toggles a single CSS class or an array of classes on an element. */
  _toggleClasses(element, cssClasses, isAdd) {
    const classes = coerceArray(cssClasses || []).filter((c) => !!c);
    if (classes.length) {
      isAdd ? element.classList.add(...classes) : element.classList.remove(...classes);
    }
  }
  /** Detaches the overlay content next time the zone stabilizes. */
  _detachContentWhenStable() {
    this._ngZone.runOutsideAngular(() => {
      const subscription = this._ngZone.onStable.pipe(takeUntil(merge(this._attachments, this._detachments))).subscribe(() => {
        if (!this._pane || !this._host || this._pane.children.length === 0) {
          if (this._pane && this._config.panelClass) {
            this._toggleClasses(this._pane, this._config.panelClass, false);
          }
          if (this._host && this._host.parentElement) {
            this._previousHostParent = this._host.parentElement;
            this._host.remove();
          }
          subscription.unsubscribe();
        }
      });
    });
  }
  /** Disposes of a scroll strategy. */
  _disposeScrollStrategy() {
    const scrollStrategy = this._scrollStrategy;
    if (scrollStrategy) {
      scrollStrategy.disable();
      if (scrollStrategy.detach) {
        scrollStrategy.detach();
      }
    }
  }
  /** Removes a backdrop element from the DOM. */
  _disposeBackdrop(backdrop) {
    if (backdrop) {
      backdrop.removeEventListener("click", this._backdropClickHandler);
      backdrop.removeEventListener("transitionend", this._backdropTransitionendHandler);
      backdrop.remove();
      if (this._backdropElement === backdrop) {
        this._backdropElement = null;
      }
    }
    if (this._backdropTimeout) {
      clearTimeout(this._backdropTimeout);
      this._backdropTimeout = void 0;
    }
  }
};
var boundingBoxClass = "cdk-overlay-connected-position-bounding-box";
var cssUnitPattern = /([A-Za-z%]+)$/;
var FlexibleConnectedPositionStrategy = class {
  /** Ordered list of preferred positions, from most to least desirable. */
  get positions() {
    return this._preferredPositions;
  }
  constructor(connectedTo, _viewportRuler, _document, _platform, _overlayContainer) {
    this._viewportRuler = _viewportRuler;
    this._document = _document;
    this._platform = _platform;
    this._overlayContainer = _overlayContainer;
    this._lastBoundingBoxSize = {
      width: 0,
      height: 0
    };
    this._isPushed = false;
    this._canPush = true;
    this._growAfterOpen = false;
    this._hasFlexibleDimensions = true;
    this._positionLocked = false;
    this._viewportMargin = 0;
    this._scrollables = [];
    this._preferredPositions = [];
    this._positionChanges = new Subject();
    this._resizeSubscription = Subscription.EMPTY;
    this._offsetX = 0;
    this._offsetY = 0;
    this._appliedPanelClasses = [];
    this.positionChanges = this._positionChanges;
    this.setOrigin(connectedTo);
  }
  /** Attaches this position strategy to an overlay. */
  attach(overlayRef) {
    if (this._overlayRef && overlayRef !== this._overlayRef && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("This position strategy is already attached to an overlay");
    }
    this._validatePositions();
    overlayRef.hostElement.classList.add(boundingBoxClass);
    this._overlayRef = overlayRef;
    this._boundingBox = overlayRef.hostElement;
    this._pane = overlayRef.overlayElement;
    this._isDisposed = false;
    this._isInitialRender = true;
    this._lastPosition = null;
    this._resizeSubscription.unsubscribe();
    this._resizeSubscription = this._viewportRuler.change().subscribe(() => {
      this._isInitialRender = true;
      this.apply();
    });
  }
  /**
   * Updates the position of the overlay element, using whichever preferred position relative
   * to the origin best fits on-screen.
   *
   * The selection of a position goes as follows:
   *  - If any positions fit completely within the viewport as-is,
   *      choose the first position that does so.
   *  - If flexible dimensions are enabled and at least one satisfies the given minimum width/height,
   *      choose the position with the greatest available size modified by the positions' weight.
   *  - If pushing is enabled, take the position that went off-screen the least and push it
   *      on-screen.
   *  - If none of the previous criteria were met, use the position that goes off-screen the least.
   * @docs-private
   */
  apply() {
    if (this._isDisposed || !this._platform.isBrowser) {
      return;
    }
    if (!this._isInitialRender && this._positionLocked && this._lastPosition) {
      this.reapplyLastPosition();
      return;
    }
    this._clearPanelClasses();
    this._resetOverlayElementStyles();
    this._resetBoundingBoxStyles();
    this._viewportRect = this._getNarrowedViewportRect();
    this._originRect = this._getOriginRect();
    this._overlayRect = this._pane.getBoundingClientRect();
    this._containerRect = this._overlayContainer.getContainerElement().getBoundingClientRect();
    const originRect = this._originRect;
    const overlayRect = this._overlayRect;
    const viewportRect = this._viewportRect;
    const containerRect = this._containerRect;
    const flexibleFits = [];
    let fallback;
    for (let pos of this._preferredPositions) {
      let originPoint = this._getOriginPoint(originRect, containerRect, pos);
      let overlayPoint = this._getOverlayPoint(originPoint, overlayRect, pos);
      let overlayFit = this._getOverlayFit(overlayPoint, overlayRect, viewportRect, pos);
      if (overlayFit.isCompletelyWithinViewport) {
        this._isPushed = false;
        this._applyPosition(pos, originPoint);
        return;
      }
      if (this._canFitWithFlexibleDimensions(overlayFit, overlayPoint, viewportRect)) {
        flexibleFits.push({
          position: pos,
          origin: originPoint,
          overlayRect,
          boundingBoxRect: this._calculateBoundingBoxRect(originPoint, pos)
        });
        continue;
      }
      if (!fallback || fallback.overlayFit.visibleArea < overlayFit.visibleArea) {
        fallback = {
          overlayFit,
          overlayPoint,
          originPoint,
          position: pos,
          overlayRect
        };
      }
    }
    if (flexibleFits.length) {
      let bestFit = null;
      let bestScore = -1;
      for (const fit of flexibleFits) {
        const score = fit.boundingBoxRect.width * fit.boundingBoxRect.height * (fit.position.weight || 1);
        if (score > bestScore) {
          bestScore = score;
          bestFit = fit;
        }
      }
      this._isPushed = false;
      this._applyPosition(bestFit.position, bestFit.origin);
      return;
    }
    if (this._canPush) {
      this._isPushed = true;
      this._applyPosition(fallback.position, fallback.originPoint);
      return;
    }
    this._applyPosition(fallback.position, fallback.originPoint);
  }
  detach() {
    this._clearPanelClasses();
    this._lastPosition = null;
    this._previousPushAmount = null;
    this._resizeSubscription.unsubscribe();
  }
  /** Cleanup after the element gets destroyed. */
  dispose() {
    if (this._isDisposed) {
      return;
    }
    if (this._boundingBox) {
      extendStyles(this._boundingBox.style, {
        top: "",
        left: "",
        right: "",
        bottom: "",
        height: "",
        width: "",
        alignItems: "",
        justifyContent: ""
      });
    }
    if (this._pane) {
      this._resetOverlayElementStyles();
    }
    if (this._overlayRef) {
      this._overlayRef.hostElement.classList.remove(boundingBoxClass);
    }
    this.detach();
    this._positionChanges.complete();
    this._overlayRef = this._boundingBox = null;
    this._isDisposed = true;
  }
  /**
   * This re-aligns the overlay element with the trigger in its last calculated position,
   * even if a position higher in the "preferred positions" list would now fit. This
   * allows one to re-align the panel without changing the orientation of the panel.
   */
  reapplyLastPosition() {
    if (this._isDisposed || !this._platform.isBrowser) {
      return;
    }
    const lastPosition = this._lastPosition;
    if (lastPosition) {
      this._originRect = this._getOriginRect();
      this._overlayRect = this._pane.getBoundingClientRect();
      this._viewportRect = this._getNarrowedViewportRect();
      this._containerRect = this._overlayContainer.getContainerElement().getBoundingClientRect();
      const originPoint = this._getOriginPoint(this._originRect, this._containerRect, lastPosition);
      this._applyPosition(lastPosition, originPoint);
    } else {
      this.apply();
    }
  }
  /**
   * Sets the list of Scrollable containers that host the origin element so that
   * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
   * Scrollable must be an ancestor element of the strategy's origin element.
   */
  withScrollableContainers(scrollables) {
    this._scrollables = scrollables;
    return this;
  }
  /**
   * Adds new preferred positions.
   * @param positions List of positions options for this overlay.
   */
  withPositions(positions) {
    this._preferredPositions = positions;
    if (positions.indexOf(this._lastPosition) === -1) {
      this._lastPosition = null;
    }
    this._validatePositions();
    return this;
  }
  /**
   * Sets a minimum distance the overlay may be positioned to the edge of the viewport.
   * @param margin Required margin between the overlay and the viewport edge in pixels.
   */
  withViewportMargin(margin) {
    this._viewportMargin = margin;
    return this;
  }
  /** Sets whether the overlay's width and height can be constrained to fit within the viewport. */
  withFlexibleDimensions(flexibleDimensions = true) {
    this._hasFlexibleDimensions = flexibleDimensions;
    return this;
  }
  /** Sets whether the overlay can grow after the initial open via flexible width/height. */
  withGrowAfterOpen(growAfterOpen = true) {
    this._growAfterOpen = growAfterOpen;
    return this;
  }
  /** Sets whether the overlay can be pushed on-screen if none of the provided positions fit. */
  withPush(canPush = true) {
    this._canPush = canPush;
    return this;
  }
  /**
   * Sets whether the overlay's position should be locked in after it is positioned
   * initially. When an overlay is locked in, it won't attempt to reposition itself
   * when the position is re-applied (e.g. when the user scrolls away).
   * @param isLocked Whether the overlay should locked in.
   */
  withLockedPosition(isLocked = true) {
    this._positionLocked = isLocked;
    return this;
  }
  /**
   * Sets the origin, relative to which to position the overlay.
   * Using an element origin is useful for building components that need to be positioned
   * relatively to a trigger (e.g. dropdown menus or tooltips), whereas using a point can be
   * used for cases like contextual menus which open relative to the user's pointer.
   * @param origin Reference to the new origin.
   */
  setOrigin(origin) {
    this._origin = origin;
    return this;
  }
  /**
   * Sets the default offset for the overlay's connection point on the x-axis.
   * @param offset New offset in the X axis.
   */
  withDefaultOffsetX(offset) {
    this._offsetX = offset;
    return this;
  }
  /**
   * Sets the default offset for the overlay's connection point on the y-axis.
   * @param offset New offset in the Y axis.
   */
  withDefaultOffsetY(offset) {
    this._offsetY = offset;
    return this;
  }
  /**
   * Configures that the position strategy should set a `transform-origin` on some elements
   * inside the overlay, depending on the current position that is being applied. This is
   * useful for the cases where the origin of an animation can change depending on the
   * alignment of the overlay.
   * @param selector CSS selector that will be used to find the target
   *    elements onto which to set the transform origin.
   */
  withTransformOriginOn(selector) {
    this._transformOriginSelector = selector;
    return this;
  }
  /**
   * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
   */
  _getOriginPoint(originRect, containerRect, pos) {
    let x;
    if (pos.originX == "center") {
      x = originRect.left + originRect.width / 2;
    } else {
      const startX = this._isRtl() ? originRect.right : originRect.left;
      const endX = this._isRtl() ? originRect.left : originRect.right;
      x = pos.originX == "start" ? startX : endX;
    }
    if (containerRect.left < 0) {
      x -= containerRect.left;
    }
    let y;
    if (pos.originY == "center") {
      y = originRect.top + originRect.height / 2;
    } else {
      y = pos.originY == "top" ? originRect.top : originRect.bottom;
    }
    if (containerRect.top < 0) {
      y -= containerRect.top;
    }
    return {
      x,
      y
    };
  }
  /**
   * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
   * origin point to which the overlay should be connected.
   */
  _getOverlayPoint(originPoint, overlayRect, pos) {
    let overlayStartX;
    if (pos.overlayX == "center") {
      overlayStartX = -overlayRect.width / 2;
    } else if (pos.overlayX === "start") {
      overlayStartX = this._isRtl() ? -overlayRect.width : 0;
    } else {
      overlayStartX = this._isRtl() ? 0 : -overlayRect.width;
    }
    let overlayStartY;
    if (pos.overlayY == "center") {
      overlayStartY = -overlayRect.height / 2;
    } else {
      overlayStartY = pos.overlayY == "top" ? 0 : -overlayRect.height;
    }
    return {
      x: originPoint.x + overlayStartX,
      y: originPoint.y + overlayStartY
    };
  }
  /** Gets how well an overlay at the given point will fit within the viewport. */
  _getOverlayFit(point, rawOverlayRect, viewport, position) {
    const overlay = getRoundedBoundingClientRect(rawOverlayRect);
    let {
      x,
      y
    } = point;
    let offsetX = this._getOffset(position, "x");
    let offsetY = this._getOffset(position, "y");
    if (offsetX) {
      x += offsetX;
    }
    if (offsetY) {
      y += offsetY;
    }
    let leftOverflow = 0 - x;
    let rightOverflow = x + overlay.width - viewport.width;
    let topOverflow = 0 - y;
    let bottomOverflow = y + overlay.height - viewport.height;
    let visibleWidth = this._subtractOverflows(overlay.width, leftOverflow, rightOverflow);
    let visibleHeight = this._subtractOverflows(overlay.height, topOverflow, bottomOverflow);
    let visibleArea = visibleWidth * visibleHeight;
    return {
      visibleArea,
      isCompletelyWithinViewport: overlay.width * overlay.height === visibleArea,
      fitsInViewportVertically: visibleHeight === overlay.height,
      fitsInViewportHorizontally: visibleWidth == overlay.width
    };
  }
  /**
   * Whether the overlay can fit within the viewport when it may resize either its width or height.
   * @param fit How well the overlay fits in the viewport at some position.
   * @param point The (x, y) coordinates of the overlay at some position.
   * @param viewport The geometry of the viewport.
   */
  _canFitWithFlexibleDimensions(fit, point, viewport) {
    if (this._hasFlexibleDimensions) {
      const availableHeight = viewport.bottom - point.y;
      const availableWidth = viewport.right - point.x;
      const minHeight = getPixelValue(this._overlayRef.getConfig().minHeight);
      const minWidth = getPixelValue(this._overlayRef.getConfig().minWidth);
      const verticalFit = fit.fitsInViewportVertically || minHeight != null && minHeight <= availableHeight;
      const horizontalFit = fit.fitsInViewportHorizontally || minWidth != null && minWidth <= availableWidth;
      return verticalFit && horizontalFit;
    }
    return false;
  }
  /**
   * Gets the point at which the overlay can be "pushed" on-screen. If the overlay is larger than
   * the viewport, the top-left corner will be pushed on-screen (with overflow occurring on the
   * right and bottom).
   *
   * @param start Starting point from which the overlay is pushed.
   * @param rawOverlayRect Dimensions of the overlay.
   * @param scrollPosition Current viewport scroll position.
   * @returns The point at which to position the overlay after pushing. This is effectively a new
   *     originPoint.
   */
  _pushOverlayOnScreen(start, rawOverlayRect, scrollPosition) {
    if (this._previousPushAmount && this._positionLocked) {
      return {
        x: start.x + this._previousPushAmount.x,
        y: start.y + this._previousPushAmount.y
      };
    }
    const overlay = getRoundedBoundingClientRect(rawOverlayRect);
    const viewport = this._viewportRect;
    const overflowRight = Math.max(start.x + overlay.width - viewport.width, 0);
    const overflowBottom = Math.max(start.y + overlay.height - viewport.height, 0);
    const overflowTop = Math.max(viewport.top - scrollPosition.top - start.y, 0);
    const overflowLeft = Math.max(viewport.left - scrollPosition.left - start.x, 0);
    let pushX = 0;
    let pushY = 0;
    if (overlay.width <= viewport.width) {
      pushX = overflowLeft || -overflowRight;
    } else {
      pushX = start.x < this._viewportMargin ? viewport.left - scrollPosition.left - start.x : 0;
    }
    if (overlay.height <= viewport.height) {
      pushY = overflowTop || -overflowBottom;
    } else {
      pushY = start.y < this._viewportMargin ? viewport.top - scrollPosition.top - start.y : 0;
    }
    this._previousPushAmount = {
      x: pushX,
      y: pushY
    };
    return {
      x: start.x + pushX,
      y: start.y + pushY
    };
  }
  /**
   * Applies a computed position to the overlay and emits a position change.
   * @param position The position preference
   * @param originPoint The point on the origin element where the overlay is connected.
   */
  _applyPosition(position, originPoint) {
    this._setTransformOrigin(position);
    this._setOverlayElementStyles(originPoint, position);
    this._setBoundingBoxStyles(originPoint, position);
    if (position.panelClass) {
      this._addPanelClasses(position.panelClass);
    }
    if (this._positionChanges.observers.length) {
      const scrollVisibility = this._getScrollVisibility();
      if (position !== this._lastPosition || !this._lastScrollVisibility || !compareScrollVisibility(this._lastScrollVisibility, scrollVisibility)) {
        const changeEvent = new ConnectedOverlayPositionChange(position, scrollVisibility);
        this._positionChanges.next(changeEvent);
      }
      this._lastScrollVisibility = scrollVisibility;
    }
    this._lastPosition = position;
    this._isInitialRender = false;
  }
  /** Sets the transform origin based on the configured selector and the passed-in position.  */
  _setTransformOrigin(position) {
    if (!this._transformOriginSelector) {
      return;
    }
    const elements = this._boundingBox.querySelectorAll(this._transformOriginSelector);
    let xOrigin;
    let yOrigin = position.overlayY;
    if (position.overlayX === "center") {
      xOrigin = "center";
    } else if (this._isRtl()) {
      xOrigin = position.overlayX === "start" ? "right" : "left";
    } else {
      xOrigin = position.overlayX === "start" ? "left" : "right";
    }
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.transformOrigin = `${xOrigin} ${yOrigin}`;
    }
  }
  /**
   * Gets the position and size of the overlay's sizing container.
   *
   * This method does no measuring and applies no styles so that we can cheaply compute the
   * bounds for all positions and choose the best fit based on these results.
   */
  _calculateBoundingBoxRect(origin, position) {
    const viewport = this._viewportRect;
    const isRtl = this._isRtl();
    let height, top, bottom;
    if (position.overlayY === "top") {
      top = origin.y;
      height = viewport.height - top + this._viewportMargin;
    } else if (position.overlayY === "bottom") {
      bottom = viewport.height - origin.y + this._viewportMargin * 2;
      height = viewport.height - bottom + this._viewportMargin;
    } else {
      const smallestDistanceToViewportEdge = Math.min(viewport.bottom - origin.y + viewport.top, origin.y);
      const previousHeight = this._lastBoundingBoxSize.height;
      height = smallestDistanceToViewportEdge * 2;
      top = origin.y - smallestDistanceToViewportEdge;
      if (height > previousHeight && !this._isInitialRender && !this._growAfterOpen) {
        top = origin.y - previousHeight / 2;
      }
    }
    const isBoundedByRightViewportEdge = position.overlayX === "start" && !isRtl || position.overlayX === "end" && isRtl;
    const isBoundedByLeftViewportEdge = position.overlayX === "end" && !isRtl || position.overlayX === "start" && isRtl;
    let width, left, right;
    if (isBoundedByLeftViewportEdge) {
      right = viewport.width - origin.x + this._viewportMargin * 2;
      width = origin.x - this._viewportMargin;
    } else if (isBoundedByRightViewportEdge) {
      left = origin.x;
      width = viewport.right - origin.x;
    } else {
      const smallestDistanceToViewportEdge = Math.min(viewport.right - origin.x + viewport.left, origin.x);
      const previousWidth = this._lastBoundingBoxSize.width;
      width = smallestDistanceToViewportEdge * 2;
      left = origin.x - smallestDistanceToViewportEdge;
      if (width > previousWidth && !this._isInitialRender && !this._growAfterOpen) {
        left = origin.x - previousWidth / 2;
      }
    }
    return {
      top,
      left,
      bottom,
      right,
      width,
      height
    };
  }
  /**
   * Sets the position and size of the overlay's sizing wrapper. The wrapper is positioned on the
   * origin's connection point and stretches to the bounds of the viewport.
   *
   * @param origin The point on the origin element where the overlay is connected.
   * @param position The position preference
   */
  _setBoundingBoxStyles(origin, position) {
    const boundingBoxRect = this._calculateBoundingBoxRect(origin, position);
    if (!this._isInitialRender && !this._growAfterOpen) {
      boundingBoxRect.height = Math.min(boundingBoxRect.height, this._lastBoundingBoxSize.height);
      boundingBoxRect.width = Math.min(boundingBoxRect.width, this._lastBoundingBoxSize.width);
    }
    const styles = {};
    if (this._hasExactPosition()) {
      styles.top = styles.left = "0";
      styles.bottom = styles.right = styles.maxHeight = styles.maxWidth = "";
      styles.width = styles.height = "100%";
    } else {
      const maxHeight = this._overlayRef.getConfig().maxHeight;
      const maxWidth = this._overlayRef.getConfig().maxWidth;
      styles.height = coerceCssPixelValue(boundingBoxRect.height);
      styles.top = coerceCssPixelValue(boundingBoxRect.top);
      styles.bottom = coerceCssPixelValue(boundingBoxRect.bottom);
      styles.width = coerceCssPixelValue(boundingBoxRect.width);
      styles.left = coerceCssPixelValue(boundingBoxRect.left);
      styles.right = coerceCssPixelValue(boundingBoxRect.right);
      if (position.overlayX === "center") {
        styles.alignItems = "center";
      } else {
        styles.alignItems = position.overlayX === "end" ? "flex-end" : "flex-start";
      }
      if (position.overlayY === "center") {
        styles.justifyContent = "center";
      } else {
        styles.justifyContent = position.overlayY === "bottom" ? "flex-end" : "flex-start";
      }
      if (maxHeight) {
        styles.maxHeight = coerceCssPixelValue(maxHeight);
      }
      if (maxWidth) {
        styles.maxWidth = coerceCssPixelValue(maxWidth);
      }
    }
    this._lastBoundingBoxSize = boundingBoxRect;
    extendStyles(this._boundingBox.style, styles);
  }
  /** Resets the styles for the bounding box so that a new positioning can be computed. */
  _resetBoundingBoxStyles() {
    extendStyles(this._boundingBox.style, {
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      height: "",
      width: "",
      alignItems: "",
      justifyContent: ""
    });
  }
  /** Resets the styles for the overlay pane so that a new positioning can be computed. */
  _resetOverlayElementStyles() {
    extendStyles(this._pane.style, {
      top: "",
      left: "",
      bottom: "",
      right: "",
      position: "",
      transform: ""
    });
  }
  /** Sets positioning styles to the overlay element. */
  _setOverlayElementStyles(originPoint, position) {
    const styles = {};
    const hasExactPosition = this._hasExactPosition();
    const hasFlexibleDimensions = this._hasFlexibleDimensions;
    const config = this._overlayRef.getConfig();
    if (hasExactPosition) {
      const scrollPosition = this._viewportRuler.getViewportScrollPosition();
      extendStyles(styles, this._getExactOverlayY(position, originPoint, scrollPosition));
      extendStyles(styles, this._getExactOverlayX(position, originPoint, scrollPosition));
    } else {
      styles.position = "static";
    }
    let transformString = "";
    let offsetX = this._getOffset(position, "x");
    let offsetY = this._getOffset(position, "y");
    if (offsetX) {
      transformString += `translateX(${offsetX}px) `;
    }
    if (offsetY) {
      transformString += `translateY(${offsetY}px)`;
    }
    styles.transform = transformString.trim();
    if (config.maxHeight) {
      if (hasExactPosition) {
        styles.maxHeight = coerceCssPixelValue(config.maxHeight);
      } else if (hasFlexibleDimensions) {
        styles.maxHeight = "";
      }
    }
    if (config.maxWidth) {
      if (hasExactPosition) {
        styles.maxWidth = coerceCssPixelValue(config.maxWidth);
      } else if (hasFlexibleDimensions) {
        styles.maxWidth = "";
      }
    }
    extendStyles(this._pane.style, styles);
  }
  /** Gets the exact top/bottom for the overlay when not using flexible sizing or when pushing. */
  _getExactOverlayY(position, originPoint, scrollPosition) {
    let styles = {
      top: "",
      bottom: ""
    };
    let overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);
    if (this._isPushed) {
      overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
    }
    if (position.overlayY === "bottom") {
      const documentHeight = this._document.documentElement.clientHeight;
      styles.bottom = `${documentHeight - (overlayPoint.y + this._overlayRect.height)}px`;
    } else {
      styles.top = coerceCssPixelValue(overlayPoint.y);
    }
    return styles;
  }
  /** Gets the exact left/right for the overlay when not using flexible sizing or when pushing. */
  _getExactOverlayX(position, originPoint, scrollPosition) {
    let styles = {
      left: "",
      right: ""
    };
    let overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);
    if (this._isPushed) {
      overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
    }
    let horizontalStyleProperty;
    if (this._isRtl()) {
      horizontalStyleProperty = position.overlayX === "end" ? "left" : "right";
    } else {
      horizontalStyleProperty = position.overlayX === "end" ? "right" : "left";
    }
    if (horizontalStyleProperty === "right") {
      const documentWidth = this._document.documentElement.clientWidth;
      styles.right = `${documentWidth - (overlayPoint.x + this._overlayRect.width)}px`;
    } else {
      styles.left = coerceCssPixelValue(overlayPoint.x);
    }
    return styles;
  }
  /**
   * Gets the view properties of the trigger and overlay, including whether they are clipped
   * or completely outside the view of any of the strategy's scrollables.
   */
  _getScrollVisibility() {
    const originBounds = this._getOriginRect();
    const overlayBounds = this._pane.getBoundingClientRect();
    const scrollContainerBounds = this._scrollables.map((scrollable) => {
      return scrollable.getElementRef().nativeElement.getBoundingClientRect();
    });
    return {
      isOriginClipped: isElementClippedByScrolling(originBounds, scrollContainerBounds),
      isOriginOutsideView: isElementScrolledOutsideView(originBounds, scrollContainerBounds),
      isOverlayClipped: isElementClippedByScrolling(overlayBounds, scrollContainerBounds),
      isOverlayOutsideView: isElementScrolledOutsideView(overlayBounds, scrollContainerBounds)
    };
  }
  /** Subtracts the amount that an element is overflowing on an axis from its length. */
  _subtractOverflows(length, ...overflows) {
    return overflows.reduce((currentValue, currentOverflow) => {
      return currentValue - Math.max(currentOverflow, 0);
    }, length);
  }
  /** Narrows the given viewport rect by the current _viewportMargin. */
  _getNarrowedViewportRect() {
    const width = this._document.documentElement.clientWidth;
    const height = this._document.documentElement.clientHeight;
    const scrollPosition = this._viewportRuler.getViewportScrollPosition();
    return {
      top: scrollPosition.top + this._viewportMargin,
      left: scrollPosition.left + this._viewportMargin,
      right: scrollPosition.left + width - this._viewportMargin,
      bottom: scrollPosition.top + height - this._viewportMargin,
      width: width - 2 * this._viewportMargin,
      height: height - 2 * this._viewportMargin
    };
  }
  /** Whether the we're dealing with an RTL context */
  _isRtl() {
    return this._overlayRef.getDirection() === "rtl";
  }
  /** Determines whether the overlay uses exact or flexible positioning. */
  _hasExactPosition() {
    return !this._hasFlexibleDimensions || this._isPushed;
  }
  /** Retrieves the offset of a position along the x or y axis. */
  _getOffset(position, axis) {
    if (axis === "x") {
      return position.offsetX == null ? this._offsetX : position.offsetX;
    }
    return position.offsetY == null ? this._offsetY : position.offsetY;
  }
  /** Validates that the current position match the expected values. */
  _validatePositions() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!this._preferredPositions.length) {
        throw Error("FlexibleConnectedPositionStrategy: At least one position is required.");
      }
      this._preferredPositions.forEach((pair) => {
        validateHorizontalPosition("originX", pair.originX);
        validateVerticalPosition("originY", pair.originY);
        validateHorizontalPosition("overlayX", pair.overlayX);
        validateVerticalPosition("overlayY", pair.overlayY);
      });
    }
  }
  /** Adds a single CSS class or an array of classes on the overlay panel. */
  _addPanelClasses(cssClasses) {
    if (this._pane) {
      coerceArray(cssClasses).forEach((cssClass) => {
        if (cssClass !== "" && this._appliedPanelClasses.indexOf(cssClass) === -1) {
          this._appliedPanelClasses.push(cssClass);
          this._pane.classList.add(cssClass);
        }
      });
    }
  }
  /** Clears the classes that the position strategy has applied from the overlay panel. */
  _clearPanelClasses() {
    if (this._pane) {
      this._appliedPanelClasses.forEach((cssClass) => {
        this._pane.classList.remove(cssClass);
      });
      this._appliedPanelClasses = [];
    }
  }
  /** Returns the DOMRect of the current origin. */
  _getOriginRect() {
    const origin = this._origin;
    if (origin instanceof ElementRef) {
      return origin.nativeElement.getBoundingClientRect();
    }
    if (origin instanceof Element) {
      return origin.getBoundingClientRect();
    }
    const width = origin.width || 0;
    const height = origin.height || 0;
    return {
      top: origin.y,
      bottom: origin.y + height,
      left: origin.x,
      right: origin.x + width,
      height,
      width
    };
  }
};
function extendStyles(destination, source) {
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      destination[key] = source[key];
    }
  }
  return destination;
}
function getPixelValue(input) {
  if (typeof input !== "number" && input != null) {
    const [value, units] = input.split(cssUnitPattern);
    return !units || units === "px" ? parseFloat(value) : null;
  }
  return input || null;
}
function getRoundedBoundingClientRect(clientRect) {
  return {
    top: Math.floor(clientRect.top),
    right: Math.floor(clientRect.right),
    bottom: Math.floor(clientRect.bottom),
    left: Math.floor(clientRect.left),
    width: Math.floor(clientRect.width),
    height: Math.floor(clientRect.height)
  };
}
function compareScrollVisibility(a, b) {
  if (a === b) {
    return true;
  }
  return a.isOriginClipped === b.isOriginClipped && a.isOriginOutsideView === b.isOriginOutsideView && a.isOverlayClipped === b.isOverlayClipped && a.isOverlayOutsideView === b.isOverlayOutsideView;
}
var wrapperClass = "cdk-global-overlay-wrapper";
var GlobalPositionStrategy = class {
  constructor() {
    this._cssPosition = "static";
    this._topOffset = "";
    this._bottomOffset = "";
    this._alignItems = "";
    this._xPosition = "";
    this._xOffset = "";
    this._width = "";
    this._height = "";
    this._isDisposed = false;
  }
  attach(overlayRef) {
    const config = overlayRef.getConfig();
    this._overlayRef = overlayRef;
    if (this._width && !config.width) {
      overlayRef.updateSize({
        width: this._width
      });
    }
    if (this._height && !config.height) {
      overlayRef.updateSize({
        height: this._height
      });
    }
    overlayRef.hostElement.classList.add(wrapperClass);
    this._isDisposed = false;
  }
  /**
   * Sets the top position of the overlay. Clears any previously set vertical position.
   * @param value New top offset.
   */
  top(value = "") {
    this._bottomOffset = "";
    this._topOffset = value;
    this._alignItems = "flex-start";
    return this;
  }
  /**
   * Sets the left position of the overlay. Clears any previously set horizontal position.
   * @param value New left offset.
   */
  left(value = "") {
    this._xOffset = value;
    this._xPosition = "left";
    return this;
  }
  /**
   * Sets the bottom position of the overlay. Clears any previously set vertical position.
   * @param value New bottom offset.
   */
  bottom(value = "") {
    this._topOffset = "";
    this._bottomOffset = value;
    this._alignItems = "flex-end";
    return this;
  }
  /**
   * Sets the right position of the overlay. Clears any previously set horizontal position.
   * @param value New right offset.
   */
  right(value = "") {
    this._xOffset = value;
    this._xPosition = "right";
    return this;
  }
  /**
   * Sets the overlay to the start of the viewport, depending on the overlay direction.
   * This will be to the left in LTR layouts and to the right in RTL.
   * @param offset Offset from the edge of the screen.
   */
  start(value = "") {
    this._xOffset = value;
    this._xPosition = "start";
    return this;
  }
  /**
   * Sets the overlay to the end of the viewport, depending on the overlay direction.
   * This will be to the right in LTR layouts and to the left in RTL.
   * @param offset Offset from the edge of the screen.
   */
  end(value = "") {
    this._xOffset = value;
    this._xPosition = "end";
    return this;
  }
  /**
   * Sets the overlay width and clears any previously set width.
   * @param value New width for the overlay
   * @deprecated Pass the `width` through the `OverlayConfig`.
   * @breaking-change 8.0.0
   */
  width(value = "") {
    if (this._overlayRef) {
      this._overlayRef.updateSize({
        width: value
      });
    } else {
      this._width = value;
    }
    return this;
  }
  /**
   * Sets the overlay height and clears any previously set height.
   * @param value New height for the overlay
   * @deprecated Pass the `height` through the `OverlayConfig`.
   * @breaking-change 8.0.0
   */
  height(value = "") {
    if (this._overlayRef) {
      this._overlayRef.updateSize({
        height: value
      });
    } else {
      this._height = value;
    }
    return this;
  }
  /**
   * Centers the overlay horizontally with an optional offset.
   * Clears any previously set horizontal position.
   *
   * @param offset Overlay offset from the horizontal center.
   */
  centerHorizontally(offset = "") {
    this.left(offset);
    this._xPosition = "center";
    return this;
  }
  /**
   * Centers the overlay vertically with an optional offset.
   * Clears any previously set vertical position.
   *
   * @param offset Overlay offset from the vertical center.
   */
  centerVertically(offset = "") {
    this.top(offset);
    this._alignItems = "center";
    return this;
  }
  /**
   * Apply the position to the element.
   * @docs-private
   */
  apply() {
    if (!this._overlayRef || !this._overlayRef.hasAttached()) {
      return;
    }
    const styles = this._overlayRef.overlayElement.style;
    const parentStyles = this._overlayRef.hostElement.style;
    const config = this._overlayRef.getConfig();
    const {
      width,
      height,
      maxWidth,
      maxHeight
    } = config;
    const shouldBeFlushHorizontally = (width === "100%" || width === "100vw") && (!maxWidth || maxWidth === "100%" || maxWidth === "100vw");
    const shouldBeFlushVertically = (height === "100%" || height === "100vh") && (!maxHeight || maxHeight === "100%" || maxHeight === "100vh");
    const xPosition = this._xPosition;
    const xOffset = this._xOffset;
    const isRtl = this._overlayRef.getConfig().direction === "rtl";
    let marginLeft = "";
    let marginRight = "";
    let justifyContent = "";
    if (shouldBeFlushHorizontally) {
      justifyContent = "flex-start";
    } else if (xPosition === "center") {
      justifyContent = "center";
      if (isRtl) {
        marginRight = xOffset;
      } else {
        marginLeft = xOffset;
      }
    } else if (isRtl) {
      if (xPosition === "left" || xPosition === "end") {
        justifyContent = "flex-end";
        marginLeft = xOffset;
      } else if (xPosition === "right" || xPosition === "start") {
        justifyContent = "flex-start";
        marginRight = xOffset;
      }
    } else if (xPosition === "left" || xPosition === "start") {
      justifyContent = "flex-start";
      marginLeft = xOffset;
    } else if (xPosition === "right" || xPosition === "end") {
      justifyContent = "flex-end";
      marginRight = xOffset;
    }
    styles.position = this._cssPosition;
    styles.marginLeft = shouldBeFlushHorizontally ? "0" : marginLeft;
    styles.marginTop = shouldBeFlushVertically ? "0" : this._topOffset;
    styles.marginBottom = this._bottomOffset;
    styles.marginRight = shouldBeFlushHorizontally ? "0" : marginRight;
    parentStyles.justifyContent = justifyContent;
    parentStyles.alignItems = shouldBeFlushVertically ? "flex-start" : this._alignItems;
  }
  /**
   * Cleans up the DOM changes from the position strategy.
   * @docs-private
   */
  dispose() {
    if (this._isDisposed || !this._overlayRef) {
      return;
    }
    const styles = this._overlayRef.overlayElement.style;
    const parent = this._overlayRef.hostElement;
    const parentStyles = parent.style;
    parent.classList.remove(wrapperClass);
    parentStyles.justifyContent = parentStyles.alignItems = styles.marginTop = styles.marginBottom = styles.marginLeft = styles.marginRight = styles.position = "";
    this._overlayRef = null;
    this._isDisposed = true;
  }
};
var OverlayPositionBuilder = class _OverlayPositionBuilder {
  constructor(_viewportRuler, _document, _platform, _overlayContainer) {
    this._viewportRuler = _viewportRuler;
    this._document = _document;
    this._platform = _platform;
    this._overlayContainer = _overlayContainer;
  }
  /**
   * Creates a global position strategy.
   */
  global() {
    return new GlobalPositionStrategy();
  }
  /**
   * Creates a flexible position strategy.
   * @param origin Origin relative to which to position the overlay.
   */
  flexibleConnectedTo(origin) {
    return new FlexibleConnectedPositionStrategy(origin, this._viewportRuler, this._document, this._platform, this._overlayContainer);
  }
  static {
    this.ɵfac = function OverlayPositionBuilder_Factory(t) {
      return new (t || _OverlayPositionBuilder)(ɵɵinject(ViewportRuler), ɵɵinject(DOCUMENT), ɵɵinject(Platform), ɵɵinject(OverlayContainer));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OverlayPositionBuilder,
      factory: _OverlayPositionBuilder.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayPositionBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ViewportRuler
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Platform
  }, {
    type: OverlayContainer
  }], null);
})();
var nextUniqueId = 0;
var Overlay = class _Overlay {
  constructor(scrollStrategies, _overlayContainer, _componentFactoryResolver, _positionBuilder, _keyboardDispatcher, _injector, _ngZone, _document, _directionality, _location, _outsideClickDispatcher, _animationsModuleType) {
    this.scrollStrategies = scrollStrategies;
    this._overlayContainer = _overlayContainer;
    this._componentFactoryResolver = _componentFactoryResolver;
    this._positionBuilder = _positionBuilder;
    this._keyboardDispatcher = _keyboardDispatcher;
    this._injector = _injector;
    this._ngZone = _ngZone;
    this._document = _document;
    this._directionality = _directionality;
    this._location = _location;
    this._outsideClickDispatcher = _outsideClickDispatcher;
    this._animationsModuleType = _animationsModuleType;
  }
  /**
   * Creates an overlay.
   * @param config Configuration applied to the overlay.
   * @returns Reference to the created overlay.
   */
  create(config) {
    const host = this._createHostElement();
    const pane = this._createPaneElement(host);
    const portalOutlet = this._createPortalOutlet(pane);
    const overlayConfig = new OverlayConfig(config);
    overlayConfig.direction = overlayConfig.direction || this._directionality.value;
    return new OverlayRef(portalOutlet, host, pane, overlayConfig, this._ngZone, this._keyboardDispatcher, this._document, this._location, this._outsideClickDispatcher, this._animationsModuleType === "NoopAnimations");
  }
  /**
   * Gets a position builder that can be used, via fluent API,
   * to construct and configure a position strategy.
   * @returns An overlay position builder.
   */
  position() {
    return this._positionBuilder;
  }
  /**
   * Creates the DOM element for an overlay and appends it to the overlay container.
   * @returns Newly-created pane element
   */
  _createPaneElement(host) {
    const pane = this._document.createElement("div");
    pane.id = `cdk-overlay-${nextUniqueId++}`;
    pane.classList.add("cdk-overlay-pane");
    host.appendChild(pane);
    return pane;
  }
  /**
   * Creates the host element that wraps around an overlay
   * and can be used for advanced positioning.
   * @returns Newly-create host element.
   */
  _createHostElement() {
    const host = this._document.createElement("div");
    this._overlayContainer.getContainerElement().appendChild(host);
    return host;
  }
  /**
   * Create a DomPortalOutlet into which the overlay content can be loaded.
   * @param pane The DOM element to turn into a portal outlet.
   * @returns A portal outlet for the given DOM element.
   */
  _createPortalOutlet(pane) {
    if (!this._appRef) {
      this._appRef = this._injector.get(ApplicationRef);
    }
    return new DomPortalOutlet(pane, this._componentFactoryResolver, this._appRef, this._injector, this._document);
  }
  static {
    this.ɵfac = function Overlay_Factory(t) {
      return new (t || _Overlay)(ɵɵinject(ScrollStrategyOptions), ɵɵinject(OverlayContainer), ɵɵinject(ComponentFactoryResolver$1), ɵɵinject(OverlayPositionBuilder), ɵɵinject(OverlayKeyboardDispatcher), ɵɵinject(Injector), ɵɵinject(NgZone), ɵɵinject(DOCUMENT), ɵɵinject(Directionality), ɵɵinject(Location), ɵɵinject(OverlayOutsideClickDispatcher), ɵɵinject(ANIMATION_MODULE_TYPE, 8));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _Overlay,
      factory: _Overlay.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Overlay, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ScrollStrategyOptions
  }, {
    type: OverlayContainer
  }, {
    type: ComponentFactoryResolver$1
  }, {
    type: OverlayPositionBuilder
  }, {
    type: OverlayKeyboardDispatcher
  }, {
    type: Injector
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Directionality
  }, {
    type: Location
  }, {
    type: OverlayOutsideClickDispatcher
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }, {
      type: Optional
    }]
  }], null);
})();
var defaultPositionList = [{
  originX: "start",
  originY: "bottom",
  overlayX: "start",
  overlayY: "top"
}, {
  originX: "start",
  originY: "top",
  overlayX: "start",
  overlayY: "bottom"
}, {
  originX: "end",
  originY: "top",
  overlayX: "end",
  overlayY: "bottom"
}, {
  originX: "end",
  originY: "bottom",
  overlayX: "end",
  overlayY: "top"
}];
var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY = new InjectionToken("cdk-connected-overlay-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const overlay = inject(Overlay);
    return () => overlay.scrollStrategies.reposition();
  }
});
var CdkOverlayOrigin = class _CdkOverlayOrigin {
  constructor(elementRef) {
    this.elementRef = elementRef;
  }
  static {
    this.ɵfac = function CdkOverlayOrigin_Factory(t) {
      return new (t || _CdkOverlayOrigin)(ɵɵdirectiveInject(ElementRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _CdkOverlayOrigin,
      selectors: [["", "cdk-overlay-origin", ""], ["", "overlay-origin", ""], ["", "cdkOverlayOrigin", ""]],
      exportAs: ["cdkOverlayOrigin"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkOverlayOrigin, [{
    type: Directive,
    args: [{
      selector: "[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]",
      exportAs: "cdkOverlayOrigin",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }], null);
})();
var CdkConnectedOverlay = class _CdkConnectedOverlay {
  /** The offset in pixels for the overlay connection point on the x-axis */
  get offsetX() {
    return this._offsetX;
  }
  set offsetX(offsetX) {
    this._offsetX = offsetX;
    if (this._position) {
      this._updatePositionStrategy(this._position);
    }
  }
  /** The offset in pixels for the overlay connection point on the y-axis */
  get offsetY() {
    return this._offsetY;
  }
  set offsetY(offsetY) {
    this._offsetY = offsetY;
    if (this._position) {
      this._updatePositionStrategy(this._position);
    }
  }
  /** Whether the overlay should be disposed of when the user goes backwards/forwards in history. */
  get disposeOnNavigation() {
    return this._disposeOnNavigation;
  }
  set disposeOnNavigation(value) {
    this._disposeOnNavigation = value;
  }
  // TODO(jelbourn): inputs for size, scroll behavior, animation, etc.
  constructor(_overlay, templateRef, viewContainerRef, scrollStrategyFactory, _dir) {
    this._overlay = _overlay;
    this._dir = _dir;
    this._backdropSubscription = Subscription.EMPTY;
    this._attachSubscription = Subscription.EMPTY;
    this._detachSubscription = Subscription.EMPTY;
    this._positionSubscription = Subscription.EMPTY;
    this._disposeOnNavigation = false;
    this._ngZone = inject(NgZone);
    this.viewportMargin = 0;
    this.open = false;
    this.disableClose = false;
    this.hasBackdrop = false;
    this.lockPosition = false;
    this.flexibleDimensions = false;
    this.growAfterOpen = false;
    this.push = false;
    this.backdropClick = new EventEmitter();
    this.positionChange = new EventEmitter();
    this.attach = new EventEmitter();
    this.detach = new EventEmitter();
    this.overlayKeydown = new EventEmitter();
    this.overlayOutsideClick = new EventEmitter();
    this._templatePortal = new TemplatePortal(templateRef, viewContainerRef);
    this._scrollStrategyFactory = scrollStrategyFactory;
    this.scrollStrategy = this._scrollStrategyFactory();
  }
  /** The associated overlay reference. */
  get overlayRef() {
    return this._overlayRef;
  }
  /** The element's layout direction. */
  get dir() {
    return this._dir ? this._dir.value : "ltr";
  }
  ngOnDestroy() {
    this._attachSubscription.unsubscribe();
    this._detachSubscription.unsubscribe();
    this._backdropSubscription.unsubscribe();
    this._positionSubscription.unsubscribe();
    if (this._overlayRef) {
      this._overlayRef.dispose();
    }
  }
  ngOnChanges(changes) {
    if (this._position) {
      this._updatePositionStrategy(this._position);
      this._overlayRef.updateSize({
        width: this.width,
        minWidth: this.minWidth,
        height: this.height,
        minHeight: this.minHeight
      });
      if (changes["origin"] && this.open) {
        this._position.apply();
      }
    }
    if (changes["open"]) {
      this.open ? this._attachOverlay() : this._detachOverlay();
    }
  }
  /** Creates an overlay */
  _createOverlay() {
    if (!this.positions || !this.positions.length) {
      this.positions = defaultPositionList;
    }
    const overlayRef = this._overlayRef = this._overlay.create(this._buildConfig());
    this._attachSubscription = overlayRef.attachments().subscribe(() => this.attach.emit());
    this._detachSubscription = overlayRef.detachments().subscribe(() => this.detach.emit());
    overlayRef.keydownEvents().subscribe((event) => {
      this.overlayKeydown.next(event);
      if (event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event)) {
        event.preventDefault();
        this._detachOverlay();
      }
    });
    this._overlayRef.outsidePointerEvents().subscribe((event) => {
      const origin = this._getOriginElement();
      const target = _getEventTarget(event);
      if (!origin || origin !== target && !origin.contains(target)) {
        this.overlayOutsideClick.next(event);
      }
    });
  }
  /** Builds the overlay config based on the directive's inputs */
  _buildConfig() {
    const positionStrategy = this._position = this.positionStrategy || this._createPositionStrategy();
    const overlayConfig = new OverlayConfig({
      direction: this._dir,
      positionStrategy,
      scrollStrategy: this.scrollStrategy,
      hasBackdrop: this.hasBackdrop,
      disposeOnNavigation: this.disposeOnNavigation
    });
    if (this.width || this.width === 0) {
      overlayConfig.width = this.width;
    }
    if (this.height || this.height === 0) {
      overlayConfig.height = this.height;
    }
    if (this.minWidth || this.minWidth === 0) {
      overlayConfig.minWidth = this.minWidth;
    }
    if (this.minHeight || this.minHeight === 0) {
      overlayConfig.minHeight = this.minHeight;
    }
    if (this.backdropClass) {
      overlayConfig.backdropClass = this.backdropClass;
    }
    if (this.panelClass) {
      overlayConfig.panelClass = this.panelClass;
    }
    return overlayConfig;
  }
  /** Updates the state of a position strategy, based on the values of the directive inputs. */
  _updatePositionStrategy(positionStrategy) {
    const positions = this.positions.map((currentPosition) => ({
      originX: currentPosition.originX,
      originY: currentPosition.originY,
      overlayX: currentPosition.overlayX,
      overlayY: currentPosition.overlayY,
      offsetX: currentPosition.offsetX || this.offsetX,
      offsetY: currentPosition.offsetY || this.offsetY,
      panelClass: currentPosition.panelClass || void 0
    }));
    return positionStrategy.setOrigin(this._getOrigin()).withPositions(positions).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector);
  }
  /** Returns the position strategy of the overlay to be set on the overlay config */
  _createPositionStrategy() {
    const strategy = this._overlay.position().flexibleConnectedTo(this._getOrigin());
    this._updatePositionStrategy(strategy);
    return strategy;
  }
  _getOrigin() {
    if (this.origin instanceof CdkOverlayOrigin) {
      return this.origin.elementRef;
    } else {
      return this.origin;
    }
  }
  _getOriginElement() {
    if (this.origin instanceof CdkOverlayOrigin) {
      return this.origin.elementRef.nativeElement;
    }
    if (this.origin instanceof ElementRef) {
      return this.origin.nativeElement;
    }
    if (typeof Element !== "undefined" && this.origin instanceof Element) {
      return this.origin;
    }
    return null;
  }
  /** Attaches the overlay and subscribes to backdrop clicks if backdrop exists */
  _attachOverlay() {
    if (!this._overlayRef) {
      this._createOverlay();
    } else {
      this._overlayRef.getConfig().hasBackdrop = this.hasBackdrop;
    }
    if (!this._overlayRef.hasAttached()) {
      this._overlayRef.attach(this._templatePortal);
    }
    if (this.hasBackdrop) {
      this._backdropSubscription = this._overlayRef.backdropClick().subscribe((event) => {
        this.backdropClick.emit(event);
      });
    } else {
      this._backdropSubscription.unsubscribe();
    }
    this._positionSubscription.unsubscribe();
    if (this.positionChange.observers.length > 0) {
      this._positionSubscription = this._position.positionChanges.pipe(takeWhile(() => this.positionChange.observers.length > 0)).subscribe((position) => {
        this._ngZone.run(() => this.positionChange.emit(position));
        if (this.positionChange.observers.length === 0) {
          this._positionSubscription.unsubscribe();
        }
      });
    }
  }
  /** Detaches the overlay and unsubscribes to backdrop clicks if backdrop exists */
  _detachOverlay() {
    if (this._overlayRef) {
      this._overlayRef.detach();
    }
    this._backdropSubscription.unsubscribe();
    this._positionSubscription.unsubscribe();
  }
  static {
    this.ɵfac = function CdkConnectedOverlay_Factory(t) {
      return new (t || _CdkConnectedOverlay)(ɵɵdirectiveInject(Overlay), ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY), ɵɵdirectiveInject(Directionality, 8));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _CdkConnectedOverlay,
      selectors: [["", "cdk-connected-overlay", ""], ["", "connected-overlay", ""], ["", "cdkConnectedOverlay", ""]],
      inputs: {
        origin: [InputFlags.None, "cdkConnectedOverlayOrigin", "origin"],
        positions: [InputFlags.None, "cdkConnectedOverlayPositions", "positions"],
        positionStrategy: [InputFlags.None, "cdkConnectedOverlayPositionStrategy", "positionStrategy"],
        offsetX: [InputFlags.None, "cdkConnectedOverlayOffsetX", "offsetX"],
        offsetY: [InputFlags.None, "cdkConnectedOverlayOffsetY", "offsetY"],
        width: [InputFlags.None, "cdkConnectedOverlayWidth", "width"],
        height: [InputFlags.None, "cdkConnectedOverlayHeight", "height"],
        minWidth: [InputFlags.None, "cdkConnectedOverlayMinWidth", "minWidth"],
        minHeight: [InputFlags.None, "cdkConnectedOverlayMinHeight", "minHeight"],
        backdropClass: [InputFlags.None, "cdkConnectedOverlayBackdropClass", "backdropClass"],
        panelClass: [InputFlags.None, "cdkConnectedOverlayPanelClass", "panelClass"],
        viewportMargin: [InputFlags.None, "cdkConnectedOverlayViewportMargin", "viewportMargin"],
        scrollStrategy: [InputFlags.None, "cdkConnectedOverlayScrollStrategy", "scrollStrategy"],
        open: [InputFlags.None, "cdkConnectedOverlayOpen", "open"],
        disableClose: [InputFlags.None, "cdkConnectedOverlayDisableClose", "disableClose"],
        transformOriginSelector: [InputFlags.None, "cdkConnectedOverlayTransformOriginOn", "transformOriginSelector"],
        hasBackdrop: [InputFlags.HasDecoratorInputTransform, "cdkConnectedOverlayHasBackdrop", "hasBackdrop", booleanAttribute],
        lockPosition: [InputFlags.HasDecoratorInputTransform, "cdkConnectedOverlayLockPosition", "lockPosition", booleanAttribute],
        flexibleDimensions: [InputFlags.HasDecoratorInputTransform, "cdkConnectedOverlayFlexibleDimensions", "flexibleDimensions", booleanAttribute],
        growAfterOpen: [InputFlags.HasDecoratorInputTransform, "cdkConnectedOverlayGrowAfterOpen", "growAfterOpen", booleanAttribute],
        push: [InputFlags.HasDecoratorInputTransform, "cdkConnectedOverlayPush", "push", booleanAttribute],
        disposeOnNavigation: [InputFlags.HasDecoratorInputTransform, "cdkConnectedOverlayDisposeOnNavigation", "disposeOnNavigation", booleanAttribute]
      },
      outputs: {
        backdropClick: "backdropClick",
        positionChange: "positionChange",
        attach: "attach",
        detach: "detach",
        overlayKeydown: "overlayKeydown",
        overlayOutsideClick: "overlayOutsideClick"
      },
      exportAs: ["cdkConnectedOverlay"],
      standalone: true,
      features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkConnectedOverlay, [{
    type: Directive,
    args: [{
      selector: "[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]",
      exportAs: "cdkConnectedOverlay",
      standalone: true
    }]
  }], () => [{
    type: Overlay
  }, {
    type: TemplateRef
  }, {
    type: ViewContainerRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY]
    }]
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    origin: [{
      type: Input,
      args: ["cdkConnectedOverlayOrigin"]
    }],
    positions: [{
      type: Input,
      args: ["cdkConnectedOverlayPositions"]
    }],
    positionStrategy: [{
      type: Input,
      args: ["cdkConnectedOverlayPositionStrategy"]
    }],
    offsetX: [{
      type: Input,
      args: ["cdkConnectedOverlayOffsetX"]
    }],
    offsetY: [{
      type: Input,
      args: ["cdkConnectedOverlayOffsetY"]
    }],
    width: [{
      type: Input,
      args: ["cdkConnectedOverlayWidth"]
    }],
    height: [{
      type: Input,
      args: ["cdkConnectedOverlayHeight"]
    }],
    minWidth: [{
      type: Input,
      args: ["cdkConnectedOverlayMinWidth"]
    }],
    minHeight: [{
      type: Input,
      args: ["cdkConnectedOverlayMinHeight"]
    }],
    backdropClass: [{
      type: Input,
      args: ["cdkConnectedOverlayBackdropClass"]
    }],
    panelClass: [{
      type: Input,
      args: ["cdkConnectedOverlayPanelClass"]
    }],
    viewportMargin: [{
      type: Input,
      args: ["cdkConnectedOverlayViewportMargin"]
    }],
    scrollStrategy: [{
      type: Input,
      args: ["cdkConnectedOverlayScrollStrategy"]
    }],
    open: [{
      type: Input,
      args: ["cdkConnectedOverlayOpen"]
    }],
    disableClose: [{
      type: Input,
      args: ["cdkConnectedOverlayDisableClose"]
    }],
    transformOriginSelector: [{
      type: Input,
      args: ["cdkConnectedOverlayTransformOriginOn"]
    }],
    hasBackdrop: [{
      type: Input,
      args: [{
        alias: "cdkConnectedOverlayHasBackdrop",
        transform: booleanAttribute
      }]
    }],
    lockPosition: [{
      type: Input,
      args: [{
        alias: "cdkConnectedOverlayLockPosition",
        transform: booleanAttribute
      }]
    }],
    flexibleDimensions: [{
      type: Input,
      args: [{
        alias: "cdkConnectedOverlayFlexibleDimensions",
        transform: booleanAttribute
      }]
    }],
    growAfterOpen: [{
      type: Input,
      args: [{
        alias: "cdkConnectedOverlayGrowAfterOpen",
        transform: booleanAttribute
      }]
    }],
    push: [{
      type: Input,
      args: [{
        alias: "cdkConnectedOverlayPush",
        transform: booleanAttribute
      }]
    }],
    disposeOnNavigation: [{
      type: Input,
      args: [{
        alias: "cdkConnectedOverlayDisposeOnNavigation",
        transform: booleanAttribute
      }]
    }],
    backdropClick: [{
      type: Output
    }],
    positionChange: [{
      type: Output
    }],
    attach: [{
      type: Output
    }],
    detach: [{
      type: Output
    }],
    overlayKeydown: [{
      type: Output
    }],
    overlayOutsideClick: [{
      type: Output
    }]
  });
})();
function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
  return () => overlay.scrollStrategies.reposition();
}
var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER = {
  provide: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,
  deps: [Overlay],
  useFactory: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY
};
var OverlayModule = class _OverlayModule {
  static {
    this.ɵfac = function OverlayModule_Factory(t) {
      return new (t || _OverlayModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _OverlayModule,
      imports: [BidiModule, PortalModule, ScrollingModule, CdkConnectedOverlay, CdkOverlayOrigin],
      exports: [CdkConnectedOverlay, CdkOverlayOrigin, ScrollingModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [Overlay, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER],
      imports: [BidiModule, PortalModule, ScrollingModule, ScrollingModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayModule, [{
    type: NgModule,
    args: [{
      imports: [BidiModule, PortalModule, ScrollingModule, CdkConnectedOverlay, CdkOverlayOrigin],
      exports: [CdkConnectedOverlay, CdkOverlayOrigin, ScrollingModule],
      providers: [Overlay, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER]
    }]
  }], null, null);
})();
var FullscreenOverlayContainer = class _FullscreenOverlayContainer extends OverlayContainer {
  constructor(_document, platform) {
    super(_document, platform);
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    if (this._fullScreenEventName && this._fullScreenListener) {
      this._document.removeEventListener(this._fullScreenEventName, this._fullScreenListener);
    }
  }
  _createContainer() {
    super._createContainer();
    this._adjustParentForFullscreenChange();
    this._addFullscreenChangeListener(() => this._adjustParentForFullscreenChange());
  }
  _adjustParentForFullscreenChange() {
    if (!this._containerElement) {
      return;
    }
    const fullscreenElement = this.getFullscreenElement();
    const parent = fullscreenElement || this._document.body;
    parent.appendChild(this._containerElement);
  }
  _addFullscreenChangeListener(fn) {
    const eventName = this._getEventName();
    if (eventName) {
      if (this._fullScreenListener) {
        this._document.removeEventListener(eventName, this._fullScreenListener);
      }
      this._document.addEventListener(eventName, fn);
      this._fullScreenListener = fn;
    }
  }
  _getEventName() {
    if (!this._fullScreenEventName) {
      const _document = this._document;
      if (_document.fullscreenEnabled) {
        this._fullScreenEventName = "fullscreenchange";
      } else if (_document.webkitFullscreenEnabled) {
        this._fullScreenEventName = "webkitfullscreenchange";
      } else if (_document.mozFullScreenEnabled) {
        this._fullScreenEventName = "mozfullscreenchange";
      } else if (_document.msFullscreenEnabled) {
        this._fullScreenEventName = "MSFullscreenChange";
      }
    }
    return this._fullScreenEventName;
  }
  /**
   * When the page is put into fullscreen mode, a specific element is specified.
   * Only that element and its children are visible when in fullscreen mode.
   */
  getFullscreenElement() {
    const _document = this._document;
    return _document.fullscreenElement || _document.webkitFullscreenElement || _document.mozFullScreenElement || _document.msFullscreenElement || null;
  }
  static {
    this.ɵfac = function FullscreenOverlayContainer_Factory(t) {
      return new (t || _FullscreenOverlayContainer)(ɵɵinject(DOCUMENT), ɵɵinject(Platform));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _FullscreenOverlayContainer,
      factory: _FullscreenOverlayContainer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FullscreenOverlayContainer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Platform
  }], null);
})();

// node_modules/ng2-date-picker/fesm2022/ng2-date-picker.mjs
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_isSameOrAfter = __toESM(require_isSameOrAfter(), 1);
var import_isSameOrBefore = __toESM(require_isSameOrBefore(), 1);
var import_isBetween = __toESM(require_isBetween(), 1);
var import_isoWeek = __toESM(require_isoWeek(), 1);
var import_customParseFormat = __toESM(require_customParseFormat(), 1);
function CalendarNavComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 12);
    ɵɵlistener("click", function CalendarNavComponent_button_6_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.leftSecondaryNavClicked());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("disabled", ctx_r1.leftSecondaryNavDisabled);
  }
}
function CalendarNavComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 13);
    ɵɵlistener("click", function CalendarNavComponent_button_8_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onGoToCurrent.emit());
    });
    ɵɵelementEnd();
  }
}
function CalendarNavComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 14);
    ɵɵlistener("click", function CalendarNavComponent_button_11_Template_button_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.rightSecondaryNavClicked());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("disabled", ctx_r1.rightSecondaryNavDisabled);
  }
}
function MonthCalendarComponent_div_3_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 6);
    ɵɵlistener("click", function MonthCalendarComponent_div_3_button_1_Template_button_click_0_listener() {
      const month_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.monthClicked(month_r2));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const month_r2 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("disabled", month_r2.disabled)("innerText", month_r2.text)("ngClass", ctx_r2.getMonthBtnCssClass(month_r2));
    ɵɵattribute("data-date", month_r2.date.format(ctx_r2.componentConfig.format));
  }
}
function MonthCalendarComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵtemplate(1, MonthCalendarComponent_div_3_button_1_Template, 1, 4, "button", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const monthRow_r4 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("ngForOf", monthRow_r4);
  }
}
var _c02 = (a0) => ({
  "dp-hide-near-month": a0
});
function DayCalendarComponent_div_0_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 8);
  }
  if (rf & 2) {
    const weekday_r3 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("innerText", ctx_r1.getWeekdayName(weekday_r3));
  }
}
function DayCalendarComponent_div_0_div_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 12);
  }
  if (rf & 2) {
    const week_r4 = ɵɵnextContext().$implicit;
    ɵɵproperty("innerText", week_r4[0].date.isoWeek());
  }
}
function DayCalendarComponent_div_0_div_5_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 13);
    ɵɵlistener("click", function DayCalendarComponent_div_0_div_5_button_2_Template_button_click_0_listener() {
      const day_r6 = ɵɵrestoreView(_r5).$implicit;
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.dayClicked(day_r6));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const day_r6 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("disabled", day_r6.disabled)("innerText", ctx_r1.getDayBtnText(day_r6))("ngClass", ctx_r1.getDayBtnCssClass(day_r6));
    ɵɵattribute("data-date", day_r6.date.format(ctx_r1.componentConfig.format));
  }
}
function DayCalendarComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtemplate(1, DayCalendarComponent_div_0_div_5_span_1_Template, 1, 1, "span", 10)(2, DayCalendarComponent_div_0_div_5_button_2_Template, 1, 4, "button", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const week_r4 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.componentConfig.showWeekNumbers);
    ɵɵadvance();
    ɵɵproperty("ngForOf", week_r4);
  }
}
function DayCalendarComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 2)(1, "dp-calendar-nav", 3);
    ɵɵlistener("onGoToCurrent", function DayCalendarComponent_div_0_Template_dp_calendar_nav_onGoToCurrent_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.goToCurrent());
    })("onLabelClick", function DayCalendarComponent_div_0_Template_dp_calendar_nav_onLabelClick_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.toggleCalendarMode(ctx_r1.CalendarMode.Month));
    })("onLeftNav", function DayCalendarComponent_div_0_Template_dp_calendar_nav_onLeftNav_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onLeftNavClick());
    })("onRightNav", function DayCalendarComponent_div_0_Template_dp_calendar_nav_onRightNav_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onRightNavClick());
    });
    ɵɵelementEnd();
    ɵɵelementStart(2, "div", 4)(3, "div", 5);
    ɵɵtemplate(4, DayCalendarComponent_div_0_span_4_Template, 1, 1, "span", 6);
    ɵɵelementEnd();
    ɵɵtemplate(5, DayCalendarComponent_div_0_div_5_Template, 3, 2, "div", 7);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("isLabelClickable", ctx_r1.componentConfig.enableMonthSelector)("label", ctx_r1.navLabel)("showGoToCurrent", ctx_r1._shouldShowCurrent)("showLeftNav", ctx_r1.showLeftNav)("showRightNav", ctx_r1.showRightNav)("theme", ctx_r1.theme);
    ɵɵadvance();
    ɵɵproperty("ngClass", ɵɵpureFunction1(9, _c02, !ctx_r1.componentConfig.showNearMonthDays));
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r1.weekdays);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.weeks);
  }
}
function DayCalendarComponent_dp_month_calendar_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "dp-month-calendar", 14);
    ɵɵlistener("onLeftNav", function DayCalendarComponent_dp_month_calendar_1_Template_dp_month_calendar_onLeftNav_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onMonthCalendarLeftClick($event));
    })("onLeftSecondaryNav", function DayCalendarComponent_dp_month_calendar_1_Template_dp_month_calendar_onLeftSecondaryNav_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onMonthCalendarSecondaryLeftClick($event));
    })("onNavHeaderBtnClick", function DayCalendarComponent_dp_month_calendar_1_Template_dp_month_calendar_onNavHeaderBtnClick_0_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.toggleCalendarMode(ctx_r1.CalendarMode.Day));
    })("onRightNav", function DayCalendarComponent_dp_month_calendar_1_Template_dp_month_calendar_onRightNav_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onMonthCalendarRightClick($event));
    })("onRightSecondaryNav", function DayCalendarComponent_dp_month_calendar_1_Template_dp_month_calendar_onRightSecondaryNav_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onMonthCalendarSecondaryRightClick($event));
    })("onSelect", function DayCalendarComponent_dp_month_calendar_1_Template_dp_month_calendar_onSelect_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.monthSelected($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("config", ctx_r1.monthCalendarConfig)("displayDate", ctx_r1._currentDateView)("ngModel", ctx_r1._selected)("theme", ctx_r1.theme);
  }
}
function TimeSelectComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "li", 5);
    ɵɵelementStart(2, "li", 10)(3, "button", 2);
    ɵɵlistener("click", function TimeSelectComponent_ng_container_10_Template_button_click_3_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.increase("second"));
    });
    ɵɵelementEnd();
    ɵɵelement(4, "span", 11);
    ɵɵelementStart(5, "button", 4);
    ɵɵlistener("click", function TimeSelectComponent_ng_container_10_Template_button_click_5_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.decrease("second"));
    });
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("innerText", ctx_r1.componentConfig.timeSeparator);
    ɵɵadvance(2);
    ɵɵproperty("disabled", !ctx_r1.showIncSecond);
    ɵɵadvance();
    ɵɵproperty("innerText", ctx_r1.seconds);
    ɵɵadvance();
    ɵɵproperty("disabled", !ctx_r1.showDecSecond);
  }
}
function TimeSelectComponent_li_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 12)(1, "button", 2);
    ɵɵlistener("click", function TimeSelectComponent_li_11_Template_button_click_1_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.toggleMeridiem());
    });
    ɵɵelementEnd();
    ɵɵelement(2, "span", 13);
    ɵɵelementStart(3, "button", 4);
    ɵɵlistener("click", function TimeSelectComponent_li_11_Template_button_click_3_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.toggleMeridiem());
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("disabled", !ctx_r1.showToggleMeridiem);
    ɵɵadvance();
    ɵɵproperty("innerText", ctx_r1.meridiem);
    ɵɵadvance();
    ɵɵproperty("disabled", !ctx_r1.showToggleMeridiem);
  }
}
var _c12 = ["dayCalendar"];
var _c2 = ["container"];
var _c3 = ["monthCalendar"];
var _c4 = ["daytimeCalendar"];
var _c5 = ["timeSelect"];
var _c6 = ["inputElement"];
var _c7 = (a0) => ({
  "dp-open": a0
});
function DatePickerComponent_ng_template_5_dp_day_calendar_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "dp-day-calendar", 15, 3);
    ɵɵlistener("onGoToCurrent", function DatePickerComponent_ng_template_5_dp_day_calendar_3_Template_dp_day_calendar_onGoToCurrent_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.goToCurrent());
    })("onLeftNav", function DatePickerComponent_ng_template_5_dp_day_calendar_3_Template_dp_day_calendar_onLeftNav_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onLeftNavClick($event));
    })("onRightNav", function DatePickerComponent_ng_template_5_dp_day_calendar_3_Template_dp_day_calendar_onRightNav_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onRightNavClick($event));
    })("onSelect", function DatePickerComponent_ng_template_5_dp_day_calendar_3_Template_dp_day_calendar_onSelect_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.dateSelected($event, "day", ctx_r2.selectEvent.SELECTION, false));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("config", ctx_r2.dayCalendarConfig)("displayDate", ctx_r2.displayDate)("ngModel", ctx_r2._selected)("theme", ctx_r2.theme);
  }
}
function DatePickerComponent_ng_template_5_dp_month_calendar_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "dp-month-calendar", 15, 4);
    ɵɵlistener("onGoToCurrent", function DatePickerComponent_ng_template_5_dp_month_calendar_4_Template_dp_month_calendar_onGoToCurrent_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.goToCurrent());
    })("onLeftNav", function DatePickerComponent_ng_template_5_dp_month_calendar_4_Template_dp_month_calendar_onLeftNav_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onLeftNavClick($event));
    })("onRightNav", function DatePickerComponent_ng_template_5_dp_month_calendar_4_Template_dp_month_calendar_onRightNav_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onRightNavClick($event));
    })("onSelect", function DatePickerComponent_ng_template_5_dp_month_calendar_4_Template_dp_month_calendar_onSelect_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.dateSelected($event, "month", ctx_r2.selectEvent.SELECTION, false));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("config", ctx_r2.dayCalendarConfig)("displayDate", ctx_r2.displayDate)("ngModel", ctx_r2._selected)("theme", ctx_r2.theme);
  }
}
function DatePickerComponent_ng_template_5_dp_time_select_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "dp-time-select", 16, 5);
    ɵɵlistener("onChange", function DatePickerComponent_ng_template_5_dp_time_select_5_Template_dp_time_select_onChange_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.dateSelected($event, "second", ctx_r2.selectEvent.SELECTION, true));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("config", ctx_r2.timeSelectConfig)("ngModel", ctx_r2._selected && ctx_r2._selected[0])("theme", ctx_r2.theme);
  }
}
function DatePickerComponent_ng_template_5_dp_day_time_calendar_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "dp-day-time-calendar", 17, 6);
    ɵɵlistener("onChange", function DatePickerComponent_ng_template_5_dp_day_time_calendar_6_Template_dp_day_time_calendar_onChange_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.dateSelected($event, "second", ctx_r2.selectEvent.SELECTION, true));
    })("onGoToCurrent", function DatePickerComponent_ng_template_5_dp_day_time_calendar_6_Template_dp_day_time_calendar_onGoToCurrent_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.goToCurrent());
    })("onLeftNav", function DatePickerComponent_ng_template_5_dp_day_time_calendar_6_Template_dp_day_time_calendar_onLeftNav_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onLeftNavClick($event));
    })("onRightNav", function DatePickerComponent_ng_template_5_dp_day_time_calendar_6_Template_dp_day_time_calendar_onRightNav_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onRightNavClick($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("config", ctx_r2.dayTimeCalendarConfig)("displayDate", ctx_r2.displayDate)("ngModel", ctx_r2._selected && ctx_r2._selected[0])("theme", ctx_r2.theme);
  }
}
function DatePickerComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", null, 2)(2, "div", 11);
    ɵɵtemplate(3, DatePickerComponent_ng_template_5_dp_day_calendar_3_Template, 2, 4, "dp-day-calendar", 12)(4, DatePickerComponent_ng_template_5_dp_month_calendar_4_Template, 2, 4, "dp-month-calendar", 12)(5, DatePickerComponent_ng_template_5_dp_time_select_5_Template, 2, 3, "dp-time-select", 13)(6, DatePickerComponent_ng_template_5_dp_day_time_calendar_6_Template, 2, 4, "dp-day-time-calendar", 14);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵclassMapInterpolate1("dp-popup ", ctx_r2.theme, "");
    ɵɵproperty("ngSwitch", ctx_r2.mode);
    ɵɵattribute("data-hidden", !ctx_r2.areCalendarsShown);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "day");
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "month");
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "time");
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "daytime");
  }
}
var ECalendarMode;
(function(ECalendarMode2) {
  ECalendarMode2[ECalendarMode2["Day"] = 0] = "Day";
  ECalendarMode2[ECalendarMode2["DayTime"] = 1] = "DayTime";
  ECalendarMode2[ECalendarMode2["Month"] = 2] = "Month";
  ECalendarMode2[ECalendarMode2["Time"] = 3] = "Time";
})(ECalendarMode || (ECalendarMode = {}));
var ECalendarValue;
(function(ECalendarValue2) {
  ECalendarValue2[ECalendarValue2["Dayjs"] = 1] = "Dayjs";
  ECalendarValue2[ECalendarValue2["DayjsArr"] = 2] = "DayjsArr";
  ECalendarValue2[ECalendarValue2["String"] = 3] = "String";
  ECalendarValue2[ECalendarValue2["StringArr"] = 4] = "StringArr";
})(ECalendarValue || (ECalendarValue = {}));
var SelectEvent;
(function(SelectEvent2) {
  SelectEvent2["INPUT"] = "input";
  SelectEvent2["SELECTION"] = "selection";
})(SelectEvent || (SelectEvent = {}));
import_dayjs.default.extend(import_isSameOrAfter.default);
import_dayjs.default.extend(import_isSameOrBefore.default);
import_dayjs.default.extend(import_isBetween.default);
import_dayjs.default.extend(import_isoWeek.default);
import_dayjs.default.extend(import_customParseFormat.default);
var dayjsRef = import_dayjs.default;
var UtilsService = class _UtilsService {
  static debounce(func, wait) {
    let timeout;
    return function() {
      const context = this, args = arguments;
      timeout = clearTimeout(timeout);
      setTimeout(() => {
        func.apply(context, args);
      }, wait);
    };
  }
  createArray(size) {
    return new Array(size).fill(1);
  }
  convertToDayjs(date, format) {
    if (!date) {
      return null;
    } else if (typeof date === "string") {
      return dayjsRef(date, format);
    } else {
      return dayjsRef(date.toDate());
    }
  }
  isDateValid(date, format) {
    if (date === "") {
      return true;
    }
    return dayjsRef(date, format, true).isValid();
  }
  // todo:: add unit test
  getDefaultDisplayDate(current, selected, allowMultiSelect, minDate) {
    if (current) {
      return dayjsRef(current.toDate());
    } else if (minDate && minDate.isAfter(dayjsRef())) {
      return dayjsRef(minDate.toDate());
    } else if (allowMultiSelect) {
      if (selected && selected[selected.length]) {
        return dayjsRef(selected[selected.length].toDate());
      }
    } else if (selected && selected[0]) {
      return dayjsRef(selected[0].toDate());
    }
    return dayjsRef();
  }
  // todo:: add unit test
  getInputType(value, allowMultiSelect) {
    if (Array.isArray(value)) {
      if (!value.length) {
        return ECalendarValue.DayjsArr;
      } else if (typeof value[0] === "string") {
        return ECalendarValue.StringArr;
      } else if (dayjsRef.isDayjs(value[0])) {
        return ECalendarValue.DayjsArr;
      }
    } else {
      if (typeof value === "string") {
        return ECalendarValue.String;
      } else if (dayjsRef.isDayjs(value)) {
        return ECalendarValue.Dayjs;
      }
    }
    return allowMultiSelect ? ECalendarValue.DayjsArr : ECalendarValue.Dayjs;
  }
  // todo:: add unit test
  convertToDayjsArray(value, config) {
    let retVal;
    switch (this.getInputType(value, config.allowMultiSelect)) {
      case ECalendarValue.String:
        retVal = value ? [dayjsRef(value, config.format, true)] : [];
        break;
      case ECalendarValue.StringArr:
        retVal = value.map((v) => v ? dayjsRef(v, config.format, true) : null).filter(Boolean);
        break;
      case ECalendarValue.Dayjs:
        retVal = value ? [dayjsRef(value.toDate())] : [];
        break;
      case ECalendarValue.DayjsArr:
        retVal = (value || []).map((v) => dayjsRef(v.toDate()));
        break;
      default:
        retVal = [];
    }
    return retVal;
  }
  // todo:: add unit test
  convertFromDayjsArray(format, value, convertTo) {
    switch (convertTo) {
      case ECalendarValue.String:
        return value[0] && value[0].format(format);
      case ECalendarValue.StringArr:
        return value.filter(Boolean).map((v) => v.format(format));
      case ECalendarValue.Dayjs:
        return value[0] ? dayjsRef(value[0].toDate()) : value[0];
      case ECalendarValue.DayjsArr:
        return value ? value.map((v) => dayjsRef(v.toDate())) : value;
      default:
        return value;
    }
  }
  convertToString(value, format) {
    let tmpVal;
    if (typeof value === "string") {
      tmpVal = [value];
    } else if (Array.isArray(value)) {
      if (value.length) {
        tmpVal = value.map((v) => {
          return this.convertToDayjs(v, format).format(format);
        });
      } else {
        tmpVal = value;
      }
    } else if (dayjsRef.isDayjs(value)) {
      tmpVal = [value.format(format)];
    } else {
      return "";
    }
    return tmpVal.filter(Boolean).join(" | ");
  }
  // todo:: add unit test
  clearUndefined(obj) {
    if (!obj) {
      return obj;
    }
    Object.keys(obj).forEach((key) => obj[key] === void 0 && delete obj[key]);
    return obj;
  }
  updateSelected(isMultiple, currentlySelected, date, granularity = "day") {
    if (isMultiple) {
      return !date.selected ? currentlySelected.concat([date.date]) : currentlySelected.filter((d) => !d.isSame(date.date, granularity));
    } else {
      return !date.selected ? [date.date] : [];
    }
  }
  closestParent(element, selector) {
    if (!element) {
      return void 0;
    }
    const match = element.querySelector(selector);
    return match || this.closestParent(element.parentElement, selector);
  }
  onlyTime(m) {
    return m && dayjsRef.isDayjs(m) && dayjsRef(m.format("HH:mm:ss"), "HH:mm:ss");
  }
  granularityFromType(calendarType) {
    switch (calendarType) {
      case "time":
        return "second";
      case "daytime":
        return "second";
      default:
        return calendarType;
    }
  }
  createValidator({
    minDate,
    maxDate,
    minTime,
    maxTime
  }, format, calendarType) {
    let isValid;
    let value;
    const validators = [];
    const granularity = this.granularityFromType(calendarType);
    if (minDate) {
      const md = this.convertToDayjs(minDate, format);
      validators.push({
        key: "minDate",
        isValid: () => {
          const _isValid = value.every((val) => val.isSameOrAfter(md, granularity));
          isValid = isValid ? _isValid : false;
          return _isValid;
        }
      });
    }
    if (maxDate) {
      const md = this.convertToDayjs(maxDate, format);
      validators.push({
        key: "maxDate",
        isValid: () => {
          const _isValid = value.every((val) => val.isSameOrBefore(md, granularity));
          isValid = isValid ? _isValid : false;
          return _isValid;
        }
      });
    }
    if (minTime) {
      const md = this.onlyTime(this.convertToDayjs(minTime, format));
      validators.push({
        key: "minTime",
        isValid: () => {
          const _isValid = value.every((val) => this.onlyTime(val).isSameOrAfter(md));
          isValid = isValid ? _isValid : false;
          return _isValid;
        }
      });
    }
    if (maxTime) {
      const md = this.onlyTime(this.convertToDayjs(maxTime, format));
      validators.push({
        key: "maxTime",
        isValid: () => {
          const _isValid = value.every((val) => this.onlyTime(val).isSameOrBefore(md));
          isValid = isValid ? _isValid : false;
          return _isValid;
        }
      });
    }
    return (inputVal) => {
      isValid = true;
      value = this.convertToDayjsArray(inputVal, {
        format,
        allowMultiSelect: true
      }).filter(Boolean);
      if (!value.every((val) => val.isValid())) {
        return {
          format: {
            given: inputVal
          }
        };
      }
      const errors = validators.reduce((map, err) => {
        if (!err.isValid()) {
          map[err.key] = {
            given: value
          };
        }
        return map;
      }, {});
      return !isValid ? errors : null;
    };
  }
  datesStringToStringArray(value) {
    return (value || "").split("|").map((m) => m.trim()).filter(Boolean);
  }
  getValidDayjsArray(value, format) {
    return this.datesStringToStringArray(value).filter((d) => this.isDateValid(d, format)).map((d) => dayjsRef(d, format));
  }
  shouldShowCurrent(showGoToCurrent, mode, min, max) {
    return showGoToCurrent && mode !== "time" && this.isDateInRange(dayjsRef(), min, max);
  }
  isDateInRange(date, from, to) {
    if (!date) {
      return false;
    }
    if (!from && !to) {
      return true;
    }
    if (!from && to) {
      return date.isSameOrBefore(to);
    }
    if (from && !to) {
      return date.isSameOrAfter(from);
    }
    return date.isBetween(from, to, "day", "[]");
  }
  convertPropsToDayjs(obj, format, props) {
    props.forEach((prop) => {
      if (obj.hasOwnProperty(prop)) {
        obj[prop] = this.convertToDayjs(obj[prop], format);
      }
    });
  }
  shouldResetCurrentView(prevConf, currentConf) {
    if (prevConf && currentConf) {
      if (!prevConf.min && currentConf.min) {
        return true;
      } else if (prevConf.min && currentConf.min && !prevConf.min.isSame(currentConf.min, "d")) {
        return true;
      } else if (!prevConf.max && currentConf.max) {
        return true;
      } else if (prevConf.max && currentConf.max && !prevConf.max.isSame(currentConf.max, "d")) {
        return true;
      }
      return false;
    }
    return false;
  }
  getNativeElement(elem) {
    if (!elem) {
      return null;
    } else if (typeof elem === "string") {
      return document.querySelector(elem);
    } else if (elem instanceof ElementRef) {
      return elem.nativeElement;
    } else {
      return elem;
    }
  }
  static {
    this.ɵfac = function UtilsService_Factory(t) {
      return new (t || _UtilsService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UtilsService,
      factory: _UtilsService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UtilsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var DayCalendarService = class _DayCalendarService {
  constructor(utilsService) {
    this.utilsService = utilsService;
    this.DEFAULT_CONFIG = {
      showNearMonthDays: true,
      showWeekNumbers: false,
      firstDayOfWeek: "su",
      weekDayFormat: "ddd",
      format: "DD-MM-YYYY",
      allowMultiSelect: false,
      monthFormat: "MMM, YYYY",
      enableMonthSelector: true,
      dayBtnFormat: "DD",
      unSelectOnClick: true
    };
    this.DAYS = ["su", "mo", "tu", "we", "th", "fr", "sa"];
  }
  getConfig(config) {
    const _config = __spreadValues(__spreadValues({}, this.DEFAULT_CONFIG), this.utilsService.clearUndefined(config));
    this.utilsService.convertPropsToDayjs(_config, _config.format, ["min", "max"]);
    return _config;
  }
  generateDaysMap(firstDayOfWeek) {
    const firstDayIndex = this.DAYS.indexOf(firstDayOfWeek);
    const daysArr = this.DAYS.slice(firstDayIndex, 7).concat(this.DAYS.slice(0, firstDayIndex));
    return daysArr.reduce((map, day, index) => {
      map[day] = index;
      return map;
    }, {});
  }
  generateMonthArray(config, month, selected) {
    const parsedMonth = month.isValid() ? dayjsRef(month.toDate()) : dayjsRef();
    let monthArray = [];
    const firstDayOfWeekIndex = this.DAYS.indexOf(config.firstDayOfWeek);
    let firstDayOfBoard = parsedMonth.startOf("month");
    while (firstDayOfBoard.day() !== firstDayOfWeekIndex) {
      firstDayOfBoard = firstDayOfBoard.subtract(1, "day");
    }
    let current = dayjsRef(firstDayOfBoard.toDate());
    const prevMonth = parsedMonth.subtract(1, "month");
    const nextMonth = parsedMonth.add(1, "month");
    const today = dayjsRef();
    const daysOfCalendar = this.utilsService.createArray(42).reduce((array) => {
      array.push({
        date: dayjsRef(current.toDate()),
        selected: !!selected.find((selectedDay) => current.isSame(selectedDay, "day")),
        currentMonth: current.isSame(parsedMonth, "month"),
        prevMonth: current.isSame(prevMonth, "month"),
        nextMonth: current.isSame(nextMonth, "month"),
        currentDay: current.isSame(today, "day"),
        disabled: this.isDateDisabled(current, config)
      });
      current = current.add(1, "day");
      return array;
    }, []);
    daysOfCalendar.forEach((day, index) => {
      const weekIndex = Math.floor(index / 7);
      if (!monthArray[weekIndex]) {
        monthArray.push([]);
      }
      monthArray[weekIndex].push(day);
    });
    if (!config.showNearMonthDays) {
      monthArray = this.removeNearMonthWeeks(parsedMonth, monthArray);
    }
    return monthArray;
  }
  generateWeekdays(firstDayOfWeek) {
    const weekdayNames = {
      su: dayjsRef().day(0),
      mo: dayjsRef().day(1),
      tu: dayjsRef().day(2),
      we: dayjsRef().day(3),
      th: dayjsRef().day(4),
      fr: dayjsRef().day(5),
      sa: dayjsRef().day(6)
    };
    const weekdays = [];
    const daysMap = this.generateDaysMap(firstDayOfWeek);
    for (const dayKey in daysMap) {
      if (daysMap.hasOwnProperty(dayKey)) {
        weekdays[daysMap[dayKey]] = weekdayNames[dayKey];
      }
    }
    return weekdays;
  }
  isDateDisabled(date, config) {
    if (config.isDayDisabledCallback) {
      return config.isDayDisabledCallback(date);
    }
    if (config.min && date.isBefore(config.min, "day")) {
      return true;
    }
    return !!(config.max && date.isAfter(config.max, "day"));
  }
  // todo:: add unit tests
  getHeaderLabel(config, month) {
    if (config.monthFormatter) {
      return config.monthFormatter(month);
    }
    return month.format(config.monthFormat);
  }
  // todo:: add unit tests
  shouldShowLeft(min, currentMonthView) {
    return min ? min.isBefore(currentMonthView, "month") : true;
  }
  // todo:: add unit tests
  shouldShowRight(max, currentMonthView) {
    return max ? max.isAfter(currentMonthView, "month") : true;
  }
  generateDaysIndexMap(firstDayOfWeek) {
    const firstDayIndex = this.DAYS.indexOf(firstDayOfWeek);
    const daysArr = this.DAYS.slice(firstDayIndex, 7).concat(this.DAYS.slice(0, firstDayIndex));
    return daysArr.reduce((map, day, index) => {
      map[index] = day;
      return map;
    }, {});
  }
  getMonthCalendarConfig(componentConfig) {
    return this.utilsService.clearUndefined({
      min: componentConfig.min,
      max: componentConfig.max,
      format: componentConfig.format,
      isNavHeaderBtnClickable: true,
      allowMultiSelect: false,
      yearFormat: componentConfig.yearFormat,
      yearFormatter: componentConfig.yearFormatter,
      monthBtnFormat: componentConfig.monthBtnFormat,
      monthBtnFormatter: componentConfig.monthBtnFormatter,
      monthBtnCssClassCallback: componentConfig.monthBtnCssClassCallback,
      isMonthDisabledCallback: componentConfig.isMonthDisabledCallback,
      multipleYearsNavigateBy: componentConfig.multipleYearsNavigateBy,
      showMultipleYearsNavigation: componentConfig.showMultipleYearsNavigation,
      showGoToCurrent: componentConfig.showGoToCurrent,
      numOfMonthRows: componentConfig.numOfMonthRows
    });
  }
  getDayBtnText(config, day) {
    if (config.dayBtnFormatter) {
      return config.dayBtnFormatter(day);
    }
    return day.format(config.dayBtnFormat);
  }
  getDayBtnCssClass(config, day) {
    if (config.dayBtnCssClassCallback) {
      return config.dayBtnCssClassCallback(day);
    }
    return "";
  }
  removeNearMonthWeeks(currentMonth, monthArray) {
    if (monthArray[monthArray.length - 1].find((day) => day.date.isSame(currentMonth, "month"))) {
      return monthArray;
    } else {
      return monthArray.slice(0, -1);
    }
  }
  static {
    this.ɵfac = function DayCalendarService_Factory(t) {
      return new (t || _DayCalendarService)(ɵɵinject(UtilsService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _DayCalendarService,
      factory: _DayCalendarService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DayCalendarService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: UtilsService
  }], null);
})();
var FIRST_PM_HOUR = 12;
var TimeSelectService = class _TimeSelectService {
  constructor(utilsService) {
    this.utilsService = utilsService;
    this.DEFAULT_CONFIG = {
      hours12Format: "hh",
      hours24Format: "HH",
      meridiemFormat: "A",
      minutesFormat: "mm",
      minutesInterval: 1,
      secondsFormat: "ss",
      secondsInterval: 1,
      showSeconds: false,
      showTwentyFourHours: false,
      timeSeparator: ":"
    };
  }
  getConfig(config) {
    const timeConfigs = {
      maxTime: this.utilsService.onlyTime(config && config.maxTime),
      minTime: this.utilsService.onlyTime(config && config.minTime)
    };
    return __spreadValues(__spreadValues(__spreadValues({}, this.DEFAULT_CONFIG), this.utilsService.clearUndefined(config)), timeConfigs);
  }
  getTimeFormat(config) {
    return (config.showTwentyFourHours ? config.hours24Format : config.hours12Format) + config.timeSeparator + config.minutesFormat + (config.showSeconds ? config.timeSeparator + config.secondsFormat : "") + (config.showTwentyFourHours ? "" : " " + config.meridiemFormat);
  }
  getHours(config, t) {
    const time = t || dayjsRef();
    return time && time.format(config.showTwentyFourHours ? config.hours24Format : config.hours12Format);
  }
  getMinutes(config, t) {
    const time = t || dayjsRef();
    return time && time.format(config.minutesFormat);
  }
  getSeconds(config, t) {
    const time = t || dayjsRef();
    return time && time.format(config.secondsFormat);
  }
  getMeridiem(config, time) {
    return time && time.format(config.meridiemFormat);
  }
  decrease(config, time, unit) {
    let amount = 1;
    switch (unit) {
      case "minute":
        amount = config.minutesInterval;
        break;
      case "second":
        amount = config.secondsInterval;
        break;
    }
    return time.subtract(amount, unit);
  }
  increase(config, time, unit) {
    let amount = 1;
    switch (unit) {
      case "minute":
        amount = config.minutesInterval;
        break;
      case "second":
        amount = config.secondsInterval;
        break;
    }
    return time.add(amount, unit);
  }
  toggleMeridiem(time) {
    if (time.hour() < FIRST_PM_HOUR) {
      return time.add(12, "hour");
    } else {
      return time.subtract(12, "hour");
    }
  }
  shouldShowDecrease(config, time, unit) {
    if (!config.min && !config.minTime) {
      return true;
    }
    const newTime = this.decrease(config, time, unit);
    return (!config.min || config.min.isSameOrBefore(newTime)) && (!config.minTime || config.minTime.isSameOrBefore(this.utilsService.onlyTime(newTime)));
  }
  shouldShowIncrease(config, time, unit) {
    if (!config.max && !config.maxTime) {
      return true;
    }
    const newTime = this.increase(config, time, unit);
    return (!config.max || config.max.isSameOrAfter(newTime)) && (!config.maxTime || config.maxTime.isSameOrAfter(this.utilsService.onlyTime(newTime)));
  }
  shouldShowToggleMeridiem(config, time) {
    if (!config.min && !config.max && !config.minTime && !config.maxTime) {
      return true;
    }
    const newTime = this.toggleMeridiem(time);
    return (!config.max || config.max.isSameOrAfter(newTime)) && (!config.min || config.min.isSameOrBefore(newTime)) && (!config.maxTime || config.maxTime.isSameOrAfter(this.utilsService.onlyTime(newTime))) && (!config.minTime || config.minTime.isSameOrBefore(this.utilsService.onlyTime(newTime)));
  }
  static {
    this.ɵfac = function TimeSelectService_Factory(t) {
      return new (t || _TimeSelectService)(ɵɵinject(UtilsService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TimeSelectService,
      factory: _TimeSelectService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimeSelectService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: UtilsService
  }], null);
})();
var DAY_FORMAT = "YYYYMMDD";
var TIME_FORMAT = "HH:mm:ss";
var COMBINED_FORMAT = DAY_FORMAT + TIME_FORMAT;
var DayTimeCalendarService = class _DayTimeCalendarService {
  constructor(utilsService, dayCalendarService, timeSelectService) {
    this.utilsService = utilsService;
    this.dayCalendarService = dayCalendarService;
    this.timeSelectService = timeSelectService;
    this.DEFAULT_CONFIG = {};
  }
  getConfig(config) {
    const _config = __spreadValues(__spreadValues(__spreadValues({}, this.DEFAULT_CONFIG), this.timeSelectService.getConfig(config)), this.dayCalendarService.getConfig(config));
    this.utilsService.convertPropsToDayjs(_config, _config.format, ["min", "max"]);
    return _config;
  }
  updateDay(current, day, config) {
    const time = current ? current : dayjsRef();
    let updated = dayjsRef(day.format(DAY_FORMAT) + time.format(TIME_FORMAT), COMBINED_FORMAT);
    if (config.min) {
      const min = config.min;
      updated = min.isAfter(updated) ? min : updated;
    }
    if (config.max) {
      const max = config.max;
      updated = max.isBefore(updated) ? max : updated;
    }
    return updated;
  }
  updateTime(current, time) {
    const day = current ? current : dayjsRef();
    return dayjsRef(day.format(DAY_FORMAT) + time.format(TIME_FORMAT), COMBINED_FORMAT);
  }
  static {
    this.ɵfac = function DayTimeCalendarService_Factory(t) {
      return new (t || _DayTimeCalendarService)(ɵɵinject(UtilsService), ɵɵinject(DayCalendarService), ɵɵinject(TimeSelectService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _DayTimeCalendarService,
      factory: _DayTimeCalendarService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DayTimeCalendarService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: UtilsService
  }, {
    type: DayCalendarService
  }, {
    type: TimeSelectService
  }], null);
})();
var DatePickerService = class _DatePickerService {
  constructor(utilsService, timeSelectService, daytimeCalendarService) {
    this.utilsService = utilsService;
    this.timeSelectService = timeSelectService;
    this.daytimeCalendarService = daytimeCalendarService;
    this.onPickerClosed = new EventEmitter();
    this.defaultConfig = {
      closeOnSelect: true,
      closeOnSelectDelay: 100,
      closeOnEnter: true,
      format: "DD-MM-YYYY",
      openOnFocus: true,
      openOnClick: true,
      onOpenDelay: 0,
      disableKeypress: false,
      showNearMonthDays: true,
      showWeekNumbers: false,
      enableMonthSelector: true,
      showGoToCurrent: true,
      hideOnOutsideClick: true
    };
  }
  // todo:: add unit tests
  getConfig(config, mode = "daytime") {
    const _config = __spreadValues(__spreadProps(__spreadValues({}, this.defaultConfig), {
      format: _DatePickerService.getDefaultFormatByMode(mode)
    }), this.utilsService.clearUndefined(config));
    this.utilsService.convertPropsToDayjs(_config, _config.format, ["min", "max"]);
    if (config && config.allowMultiSelect && config.closeOnSelect === void 0) {
      _config.closeOnSelect = false;
    }
    return _config;
  }
  getDayConfigService(pickerConfig) {
    return {
      min: pickerConfig.min,
      max: pickerConfig.max,
      isDayDisabledCallback: pickerConfig.isDayDisabledCallback,
      weekDayFormat: pickerConfig.weekDayFormat,
      weekDayFormatter: pickerConfig.weekDayFormatter,
      showNearMonthDays: pickerConfig.showNearMonthDays,
      showWeekNumbers: pickerConfig.showWeekNumbers,
      firstDayOfWeek: pickerConfig.firstDayOfWeek,
      format: pickerConfig.format,
      allowMultiSelect: pickerConfig.allowMultiSelect,
      monthFormat: pickerConfig.monthFormat,
      monthFormatter: pickerConfig.monthFormatter,
      enableMonthSelector: pickerConfig.enableMonthSelector,
      yearFormat: pickerConfig.yearFormat,
      yearFormatter: pickerConfig.yearFormatter,
      dayBtnFormat: pickerConfig.dayBtnFormat,
      dayBtnFormatter: pickerConfig.dayBtnFormatter,
      dayBtnCssClassCallback: pickerConfig.dayBtnCssClassCallback,
      monthBtnFormat: pickerConfig.monthBtnFormat,
      monthBtnFormatter: pickerConfig.monthBtnFormatter,
      monthBtnCssClassCallback: pickerConfig.monthBtnCssClassCallback,
      isMonthDisabledCallback: pickerConfig.isMonthDisabledCallback,
      multipleYearsNavigateBy: pickerConfig.multipleYearsNavigateBy,
      showMultipleYearsNavigation: pickerConfig.showMultipleYearsNavigation,
      returnedValueType: pickerConfig.returnedValueType,
      showGoToCurrent: pickerConfig.showGoToCurrent,
      unSelectOnClick: pickerConfig.unSelectOnClick,
      numOfMonthRows: pickerConfig.numOfMonthRows
    };
  }
  getDayTimeConfig(pickerConfig) {
    return this.daytimeCalendarService.getConfig(pickerConfig);
  }
  getTimeConfig(pickerConfig) {
    return this.timeSelectService.getConfig(pickerConfig);
  }
  pickerClosed() {
    this.onPickerClosed.emit();
  }
  // todo:: add unit tests
  isValidInputDateValue(value, config) {
    value = value ? value : "";
    const datesStrArr = this.utilsService.datesStringToStringArray(value);
    return datesStrArr.every((date) => this.utilsService.isDateValid(date, config.format));
  }
  // todo:: add unit tests
  convertInputValueToDayjsArray(value, config) {
    value = value ? value : "";
    const datesStrArr = this.utilsService.datesStringToStringArray(value);
    return this.utilsService.convertToDayjsArray(datesStrArr, config);
  }
  getOverlayPosition({
    drops,
    opens
  }) {
    if (!drops && !opens) {
      return void 0;
    }
    return [{
      originX: opens ? opens === "left" ? "start" : "end" : "start",
      originY: drops ? drops === "up" ? "top" : "bottom" : "bottom",
      overlayX: opens ? opens === "left" ? "start" : "end" : "start",
      overlayY: drops ? drops === "up" ? "bottom" : "top" : "top"
    }];
  }
  static getDefaultFormatByMode(mode) {
    switch (mode) {
      case "day":
        return "DD-MM-YYYY";
      case "daytime":
        return "DD-MM-YYYY HH:mm:ss";
      case "time":
        return "HH:mm:ss";
      case "month":
        return "MMM, YYYY";
    }
  }
  static {
    this.ɵfac = function DatePickerService_Factory(t) {
      return new (t || _DatePickerService)(ɵɵinject(UtilsService), ɵɵinject(TimeSelectService), ɵɵinject(DayTimeCalendarService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _DatePickerService,
      factory: _DatePickerService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatePickerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: UtilsService
  }, {
    type: TimeSelectService
  }, {
    type: DayTimeCalendarService
  }], null);
})();
var MonthCalendarService = class _MonthCalendarService {
  constructor(utilsService) {
    this.utilsService = utilsService;
    this.DEFAULT_CONFIG = {
      allowMultiSelect: false,
      yearFormat: "YYYY",
      format: "MM-YYYY",
      isNavHeaderBtnClickable: false,
      monthBtnFormat: "MMM",
      multipleYearsNavigateBy: 10,
      showMultipleYearsNavigation: false,
      unSelectOnClick: true,
      numOfMonthRows: 3
    };
  }
  getConfig(config) {
    const _config = __spreadValues(__spreadValues({}, this.DEFAULT_CONFIG), this.utilsService.clearUndefined(config));
    _MonthCalendarService.validateConfig(_config);
    this.utilsService.convertPropsToDayjs(_config, _config.format, ["min", "max"]);
    return _config;
  }
  generateYear(config, year, selected = null) {
    let index = year.startOf("year");
    return this.utilsService.createArray(config.numOfMonthRows).map(() => {
      return this.utilsService.createArray(12 / config.numOfMonthRows).map(() => {
        const date = dayjsRef(index);
        const month = {
          date,
          selected: !!selected.find((s) => index.isSame(s, "month")),
          currentMonth: index.isSame(dayjsRef(), "month"),
          disabled: this.isMonthDisabled(date, config),
          text: this.getMonthBtnText(config, date)
        };
        index = index.add(1, "month");
        return month;
      });
    });
  }
  isMonthDisabled(date, config) {
    if (config.isMonthDisabledCallback) {
      return config.isMonthDisabledCallback(date);
    }
    if (config.min && date.isBefore(config.min, "month")) {
      return true;
    }
    return !!(config.max && date.isAfter(config.max, "month"));
  }
  shouldShowLeft(min, currentMonthView) {
    return min ? min.isBefore(currentMonthView, "year") : true;
  }
  shouldShowRight(max, currentMonthView) {
    return max ? max.isAfter(currentMonthView, "year") : true;
  }
  getHeaderLabel(config, year) {
    if (config.yearFormatter) {
      return config.yearFormatter(year);
    }
    return year.format(config.yearFormat);
  }
  getMonthBtnText(config, month) {
    if (config.monthBtnFormatter) {
      return config.monthBtnFormatter(month);
    }
    return month.format(config.monthBtnFormat);
  }
  getMonthBtnCssClass(config, month) {
    if (config.monthBtnCssClassCallback) {
      return config.monthBtnCssClassCallback(month);
    }
    return "";
  }
  static validateConfig(config) {
    if (config.numOfMonthRows < 1 || config.numOfMonthRows > 12 || !Number.isInteger(12 / config.numOfMonthRows)) {
      throw new Error("numOfMonthRows has to be between 1 - 12 and divide 12 to integer");
    }
  }
  static {
    this.ɵfac = function MonthCalendarService_Factory(t) {
      return new (t || _MonthCalendarService)(ɵɵinject(UtilsService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _MonthCalendarService,
      factory: _MonthCalendarService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MonthCalendarService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: UtilsService
  }], null);
})();
var CalendarNavComponent = class _CalendarNavComponent {
  constructor() {
    this.isLabelClickable = false;
    this.showLeftNav = true;
    this.showLeftSecondaryNav = false;
    this.showRightNav = true;
    this.showRightSecondaryNav = false;
    this.leftNavDisabled = false;
    this.leftSecondaryNavDisabled = false;
    this.rightNavDisabled = false;
    this.rightSecondaryNavDisabled = false;
    this.showGoToCurrent = true;
    this.onLeftNav = new EventEmitter();
    this.onLeftSecondaryNav = new EventEmitter();
    this.onRightNav = new EventEmitter();
    this.onRightSecondaryNav = new EventEmitter();
    this.onLabelClick = new EventEmitter();
    this.onGoToCurrent = new EventEmitter();
  }
  leftNavClicked() {
    this.onLeftNav.emit();
  }
  leftSecondaryNavClicked() {
    this.onLeftSecondaryNav.emit();
  }
  rightNavClicked() {
    this.onRightNav.emit();
  }
  rightSecondaryNavClicked() {
    this.onRightSecondaryNav.emit();
  }
  labelClicked() {
    this.onLabelClick.emit();
  }
  static {
    this.ɵfac = function CalendarNavComponent_Factory(t) {
      return new (t || _CalendarNavComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CalendarNavComponent,
      selectors: [["dp-calendar-nav"]],
      hostVars: 2,
      hostBindings: function CalendarNavComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassMap(ctx.theme);
        }
      },
      inputs: {
        label: "label",
        isLabelClickable: "isLabelClickable",
        showLeftNav: "showLeftNav",
        showLeftSecondaryNav: "showLeftSecondaryNav",
        showRightNav: "showRightNav",
        showRightSecondaryNav: "showRightSecondaryNav",
        leftNavDisabled: "leftNavDisabled",
        leftSecondaryNavDisabled: "leftSecondaryNavDisabled",
        rightNavDisabled: "rightNavDisabled",
        rightSecondaryNavDisabled: "rightSecondaryNavDisabled",
        showGoToCurrent: "showGoToCurrent",
        theme: "theme"
      },
      outputs: {
        onLeftNav: "onLeftNav",
        onLeftSecondaryNav: "onLeftSecondaryNav",
        onRightNav: "onRightNav",
        onRightSecondaryNav: "onRightSecondaryNav",
        onLabelClick: "onLabelClick",
        onGoToCurrent: "onGoToCurrent"
      },
      decls: 12,
      vars: 15,
      consts: [["dir", "ltr", 1, "dp-calendar-nav-container"], [1, "dp-nav-header"], [3, "hidden", "innerText"], ["type", "button", 1, "dp-nav-header-btn", 3, "click", "hidden", "innerText"], [1, "dp-nav-btns-container"], [1, "dp-calendar-nav-container-left"], ["class", "dp-calendar-secondary-nav-left", "type", "button", 3, "disabled", "click", 4, "ngIf"], ["type", "button", 1, "dp-calendar-nav-left", 3, "click", "disabled", "hidden"], ["class", "dp-current-location-btn", "type", "button", 3, "click", 4, "ngIf"], [1, "dp-calendar-nav-container-right"], ["type", "button", 1, "dp-calendar-nav-right", 3, "click", "disabled", "hidden"], ["class", "dp-calendar-secondary-nav-right", "type", "button", 3, "disabled", "click", 4, "ngIf"], ["type", "button", 1, "dp-calendar-secondary-nav-left", 3, "click", "disabled"], ["type", "button", 1, "dp-current-location-btn", 3, "click"], ["type", "button", 1, "dp-calendar-secondary-nav-right", 3, "click", "disabled"]],
      template: function CalendarNavComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0)(1, "div", 1);
          ɵɵelement(2, "span", 2);
          ɵɵelementStart(3, "button", 3);
          ɵɵlistener("click", function CalendarNavComponent_Template_button_click_3_listener() {
            return ctx.labelClicked();
          });
          ɵɵelementEnd()();
          ɵɵelementStart(4, "div", 4)(5, "div", 5);
          ɵɵtemplate(6, CalendarNavComponent_button_6_Template, 1, 1, "button", 6);
          ɵɵelementStart(7, "button", 7);
          ɵɵlistener("click", function CalendarNavComponent_Template_button_click_7_listener() {
            return ctx.leftNavClicked();
          });
          ɵɵelementEnd()();
          ɵɵtemplate(8, CalendarNavComponent_button_8_Template, 1, 0, "button", 8);
          ɵɵelementStart(9, "div", 9)(10, "button", 10);
          ɵɵlistener("click", function CalendarNavComponent_Template_button_click_10_listener() {
            return ctx.rightNavClicked();
          });
          ɵɵelementEnd();
          ɵɵtemplate(11, CalendarNavComponent_button_11_Template, 1, 1, "button", 11);
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵproperty("hidden", ctx.isLabelClickable)("innerText", ctx.label);
          ɵɵattribute("data-hidden", ctx.isLabelClickable);
          ɵɵadvance();
          ɵɵproperty("hidden", !ctx.isLabelClickable)("innerText", ctx.label);
          ɵɵattribute("data-hidden", !ctx.isLabelClickable);
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ctx.showLeftSecondaryNav);
          ɵɵadvance();
          ɵɵproperty("disabled", ctx.leftNavDisabled)("hidden", !ctx.showLeftNav);
          ɵɵattribute("data-hidden", !ctx.showLeftNav);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.showGoToCurrent);
          ɵɵadvance(2);
          ɵɵproperty("disabled", ctx.rightNavDisabled)("hidden", !ctx.showRightNav);
          ɵɵattribute("data-hidden", !ctx.showRightNav);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.showRightSecondaryNav);
        }
      },
      dependencies: [NgIf, Dir],
      styles: ['dp-calendar-nav .dp-calendar-nav-container{position:relative;box-sizing:border-box;height:25px;border:1px solid #000000;border-bottom:none}dp-calendar-nav .dp-nav-date-btn{box-sizing:border-box;height:25px;border:1px solid #000000;border-bottom:none}dp-calendar-nav .dp-nav-btns-container{position:absolute;top:50%;transform:translateY(-50%);right:5px;display:inline-block}dp-calendar-nav .dp-calendar-nav-container-left,dp-calendar-nav .dp-calendar-nav-container-right{display:inline-block}dp-calendar-nav .dp-calendar-nav-left,dp-calendar-nav .dp-calendar-nav-right,dp-calendar-nav .dp-calendar-secondary-nav-left,dp-calendar-nav .dp-calendar-secondary-nav-right{position:relative;width:16px;cursor:pointer}dp-calendar-nav .dp-calendar-nav-left,dp-calendar-nav .dp-calendar-nav-right{line-height:0}dp-calendar-nav .dp-calendar-nav-left:before,dp-calendar-nav .dp-calendar-nav-right:before{position:relative;content:"";display:inline-block;height:8px;width:8px;vertical-align:baseline;border-style:solid;border-width:2px 2px 0 0;transform:rotate(45deg)}dp-calendar-nav .dp-calendar-secondary-nav-left,dp-calendar-nav .dp-calendar-secondary-nav-right{padding:0}dp-calendar-nav .dp-calendar-secondary-nav-left:before,dp-calendar-nav .dp-calendar-secondary-nav-right:before,dp-calendar-nav .dp-calendar-secondary-nav-left:after,dp-calendar-nav .dp-calendar-secondary-nav-right:after{position:relative;content:"";display:inline-block;height:8px;width:8px;vertical-align:baseline;border-style:solid;border-width:2px 2px 0 0;transform:rotate(45deg)}dp-calendar-nav .dp-calendar-secondary-nav-left:before,dp-calendar-nav .dp-calendar-secondary-nav-right:before{right:-10px}dp-calendar-nav .dp-calendar-secondary-nav-right{left:initial;right:5px}dp-calendar-nav .dp-calendar-nav-left:before{position:relative;content:"";display:inline-block;height:8px;width:8px;vertical-align:baseline;border-style:solid;border-width:2px 2px 0 0;transform:rotate(-135deg)}dp-calendar-nav .dp-calendar-secondary-nav-left:before,dp-calendar-nav .dp-calendar-secondary-nav-left:after{position:relative;content:"";display:inline-block;height:8px;width:8px;vertical-align:baseline;border-style:solid;border-width:2px 2px 0 0;transform:rotate(-135deg)}dp-calendar-nav .dp-calendar-secondary-nav-left:before{right:-10px}dp-calendar-nav .dp-nav-header{position:absolute;top:50%;transform:translateY(-50%);left:5px;display:inline-block;font-size:13px}dp-calendar-nav .dp-nav-header-btn{cursor:pointer}dp-calendar-nav .dp-current-location-btn{position:relative;top:-1px;height:16px;width:16px;vertical-align:middle;background:rgba(0,0,0,.6);border:1px solid rgba(0,0,0,.6);outline:none;border-radius:50%;box-shadow:inset 0 0 0 3px #fff;cursor:pointer}dp-calendar-nav .dp-current-location-btn:hover{background:#000000}dp-calendar-nav.dp-material .dp-calendar-nav-container{height:30px;border:1px solid #E0E0E0}dp-calendar-nav.dp-material .dp-calendar-nav-left,dp-calendar-nav.dp-material .dp-calendar-nav-right,dp-calendar-nav.dp-material .dp-calendar-secondary-nav-left,dp-calendar-nav.dp-material .dp-calendar-secondary-nav-right{border:none;background:#FFFFFF;outline:none;font-size:16px;padding:0}dp-calendar-nav.dp-material .dp-calendar-secondary-nav-left,dp-calendar-nav.dp-material .dp-calendar-secondary-nav-right{width:20px}dp-calendar-nav.dp-material .dp-nav-header-btn{height:20px;width:80px;border:none;background:#FFFFFF;outline:none}dp-calendar-nav.dp-material .dp-nav-header-btn:hover{background:rgba(0,0,0,.05)}dp-calendar-nav.dp-material .dp-nav-header-btn:active{background:rgba(0,0,0,.1)}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarNavComponent, [{
    type: Component,
    args: [{
      selector: "dp-calendar-nav",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<div class="dp-calendar-nav-container" dir="ltr">\n  <div class="dp-nav-header">\n    <span [attr.data-hidden]="isLabelClickable"\n          [hidden]="isLabelClickable"\n          [innerText]="label">\n    </span>\n    <button (click)="labelClicked()"\n            [attr.data-hidden]="!isLabelClickable"\n            [hidden]="!isLabelClickable"\n            [innerText]="label"\n            class="dp-nav-header-btn"\n            type="button">\n    </button>\n  </div>\n\n  <div class="dp-nav-btns-container">\n    <div class="dp-calendar-nav-container-left">\n      <button (click)="leftSecondaryNavClicked()"\n              *ngIf="showLeftSecondaryNav"\n              [disabled]="leftSecondaryNavDisabled"\n              class="dp-calendar-secondary-nav-left"\n              type="button">\n      </button>\n      <button (click)="leftNavClicked()"\n              [attr.data-hidden]="!showLeftNav"\n              [disabled]="leftNavDisabled"\n              [hidden]="!showLeftNav"\n              class="dp-calendar-nav-left"\n              type="button">\n      </button>\n    </div>\n    <button (click)="onGoToCurrent.emit()"\n            *ngIf="showGoToCurrent"\n            class="dp-current-location-btn"\n            type="button">\n    </button>\n    <div class="dp-calendar-nav-container-right">\n      <button (click)="rightNavClicked()"\n              [attr.data-hidden]="!showRightNav"\n              [disabled]="rightNavDisabled"\n              [hidden]="!showRightNav"\n              class="dp-calendar-nav-right"\n              type="button">\n      </button>\n      <button (click)="rightSecondaryNavClicked()"\n              *ngIf="showRightSecondaryNav"\n              [disabled]="rightSecondaryNavDisabled"\n              class="dp-calendar-secondary-nav-right"\n              type="button">\n      </button>\n    </div>\n  </div>\n</div>\n',
      styles: ['dp-calendar-nav .dp-calendar-nav-container{position:relative;box-sizing:border-box;height:25px;border:1px solid #000000;border-bottom:none}dp-calendar-nav .dp-nav-date-btn{box-sizing:border-box;height:25px;border:1px solid #000000;border-bottom:none}dp-calendar-nav .dp-nav-btns-container{position:absolute;top:50%;transform:translateY(-50%);right:5px;display:inline-block}dp-calendar-nav .dp-calendar-nav-container-left,dp-calendar-nav .dp-calendar-nav-container-right{display:inline-block}dp-calendar-nav .dp-calendar-nav-left,dp-calendar-nav .dp-calendar-nav-right,dp-calendar-nav .dp-calendar-secondary-nav-left,dp-calendar-nav .dp-calendar-secondary-nav-right{position:relative;width:16px;cursor:pointer}dp-calendar-nav .dp-calendar-nav-left,dp-calendar-nav .dp-calendar-nav-right{line-height:0}dp-calendar-nav .dp-calendar-nav-left:before,dp-calendar-nav .dp-calendar-nav-right:before{position:relative;content:"";display:inline-block;height:8px;width:8px;vertical-align:baseline;border-style:solid;border-width:2px 2px 0 0;transform:rotate(45deg)}dp-calendar-nav .dp-calendar-secondary-nav-left,dp-calendar-nav .dp-calendar-secondary-nav-right{padding:0}dp-calendar-nav .dp-calendar-secondary-nav-left:before,dp-calendar-nav .dp-calendar-secondary-nav-right:before,dp-calendar-nav .dp-calendar-secondary-nav-left:after,dp-calendar-nav .dp-calendar-secondary-nav-right:after{position:relative;content:"";display:inline-block;height:8px;width:8px;vertical-align:baseline;border-style:solid;border-width:2px 2px 0 0;transform:rotate(45deg)}dp-calendar-nav .dp-calendar-secondary-nav-left:before,dp-calendar-nav .dp-calendar-secondary-nav-right:before{right:-10px}dp-calendar-nav .dp-calendar-secondary-nav-right{left:initial;right:5px}dp-calendar-nav .dp-calendar-nav-left:before{position:relative;content:"";display:inline-block;height:8px;width:8px;vertical-align:baseline;border-style:solid;border-width:2px 2px 0 0;transform:rotate(-135deg)}dp-calendar-nav .dp-calendar-secondary-nav-left:before,dp-calendar-nav .dp-calendar-secondary-nav-left:after{position:relative;content:"";display:inline-block;height:8px;width:8px;vertical-align:baseline;border-style:solid;border-width:2px 2px 0 0;transform:rotate(-135deg)}dp-calendar-nav .dp-calendar-secondary-nav-left:before{right:-10px}dp-calendar-nav .dp-nav-header{position:absolute;top:50%;transform:translateY(-50%);left:5px;display:inline-block;font-size:13px}dp-calendar-nav .dp-nav-header-btn{cursor:pointer}dp-calendar-nav .dp-current-location-btn{position:relative;top:-1px;height:16px;width:16px;vertical-align:middle;background:rgba(0,0,0,.6);border:1px solid rgba(0,0,0,.6);outline:none;border-radius:50%;box-shadow:inset 0 0 0 3px #fff;cursor:pointer}dp-calendar-nav .dp-current-location-btn:hover{background:#000000}dp-calendar-nav.dp-material .dp-calendar-nav-container{height:30px;border:1px solid #E0E0E0}dp-calendar-nav.dp-material .dp-calendar-nav-left,dp-calendar-nav.dp-material .dp-calendar-nav-right,dp-calendar-nav.dp-material .dp-calendar-secondary-nav-left,dp-calendar-nav.dp-material .dp-calendar-secondary-nav-right{border:none;background:#FFFFFF;outline:none;font-size:16px;padding:0}dp-calendar-nav.dp-material .dp-calendar-secondary-nav-left,dp-calendar-nav.dp-material .dp-calendar-secondary-nav-right{width:20px}dp-calendar-nav.dp-material .dp-nav-header-btn{height:20px;width:80px;border:none;background:#FFFFFF;outline:none}dp-calendar-nav.dp-material .dp-nav-header-btn:hover{background:rgba(0,0,0,.05)}dp-calendar-nav.dp-material .dp-nav-header-btn:active{background:rgba(0,0,0,.1)}\n']
    }]
  }], null, {
    label: [{
      type: Input
    }],
    isLabelClickable: [{
      type: Input
    }],
    showLeftNav: [{
      type: Input
    }],
    showLeftSecondaryNav: [{
      type: Input
    }],
    showRightNav: [{
      type: Input
    }],
    showRightSecondaryNav: [{
      type: Input
    }],
    leftNavDisabled: [{
      type: Input
    }],
    leftSecondaryNavDisabled: [{
      type: Input
    }],
    rightNavDisabled: [{
      type: Input
    }],
    rightSecondaryNavDisabled: [{
      type: Input
    }],
    showGoToCurrent: [{
      type: Input
    }],
    theme: [{
      type: HostBinding,
      args: ["class"]
    }, {
      type: Input
    }],
    onLeftNav: [{
      type: Output
    }],
    onLeftSecondaryNav: [{
      type: Output
    }],
    onRightNav: [{
      type: Output
    }],
    onRightSecondaryNav: [{
      type: Output
    }],
    onLabelClick: [{
      type: Output
    }],
    onGoToCurrent: [{
      type: Output
    }]
  });
})();
var MonthCalendarComponent = class _MonthCalendarComponent {
  constructor(monthCalendarService, utilsService, cd) {
    this.monthCalendarService = monthCalendarService;
    this.utilsService = utilsService;
    this.cd = cd;
    this.onSelect = new EventEmitter();
    this.onNavHeaderBtnClick = new EventEmitter();
    this.onGoToCurrent = new EventEmitter();
    this.onLeftNav = new EventEmitter();
    this.onRightNav = new EventEmitter();
    this.onLeftSecondaryNav = new EventEmitter();
    this.onRightSecondaryNav = new EventEmitter();
    this.isInited = false;
    this._shouldShowCurrent = true;
    this.api = {
      toggleCalendar: this.toggleCalendarMode.bind(this),
      moveCalendarTo: this.moveCalendarTo.bind(this)
    };
  }
  get selected() {
    return this._selected;
  }
  set selected(selected) {
    this._selected = selected;
    this.onChangeCallback(this.processOnChangeCallback(selected));
  }
  get currentDateView() {
    return this._currentDateView;
  }
  set currentDateView(current) {
    this._currentDateView = dayjsRef(current.toDate());
    this.yearMonths = this.monthCalendarService.generateYear(this.componentConfig, this._currentDateView, this.selected);
    this.navLabel = this.monthCalendarService.getHeaderLabel(this.componentConfig, this.currentDateView);
    this.showLeftNav = this.monthCalendarService.shouldShowLeft(this.componentConfig.min, this._currentDateView);
    this.showRightNav = this.monthCalendarService.shouldShowRight(this.componentConfig.max, this.currentDateView);
    this.showSecondaryLeftNav = this.componentConfig.showMultipleYearsNavigation && this.showLeftNav;
    this.showSecondaryRightNav = this.componentConfig.showMultipleYearsNavigation && this.showRightNav;
  }
  ngOnInit() {
    this.isInited = true;
    this.init();
    this.initValidators();
  }
  ngOnChanges(changes) {
    if (this.isInited) {
      const {
        minDate,
        maxDate,
        config
      } = changes;
      this.handleConfigChange(config);
      this.init();
      if (minDate || maxDate) {
        this.initValidators();
      }
      this.cd.markForCheck();
    }
  }
  init() {
    this.componentConfig = this.monthCalendarService.getConfig(this.config);
    this.selected = this.selected || [];
    this.currentDateView = this.displayDate ?? this.utilsService.getDefaultDisplayDate(this.currentDateView, this.selected, this.componentConfig.allowMultiSelect, this.componentConfig.min);
    this.inputValueType = this.utilsService.getInputType(this.inputValue, this.componentConfig.allowMultiSelect);
    this._shouldShowCurrent = this.shouldShowCurrent();
  }
  writeValue(value) {
    this.inputValue = value;
    if (value) {
      this.selected = this.utilsService.convertToDayjsArray(value, this.componentConfig);
      this.yearMonths = this.monthCalendarService.generateYear(this.componentConfig, this.currentDateView, this.selected);
      this.inputValueType = this.utilsService.getInputType(this.inputValue, this.componentConfig.allowMultiSelect);
    } else {
      this.selected = [];
      this.yearMonths = this.monthCalendarService.generateYear(this.componentConfig, this.currentDateView, this.selected);
    }
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onChangeCallback = fn;
  }
  onChangeCallback(_) {
  }
  registerOnTouched(fn) {
  }
  validate(formControl) {
    if (this.minDate || this.maxDate) {
      return this.validateFn(formControl.value);
    } else {
      return () => null;
    }
  }
  processOnChangeCallback(value) {
    return this.utilsService.convertFromDayjsArray(this.componentConfig.format, value, this.componentConfig.returnedValueType || this.inputValueType);
  }
  initValidators() {
    this.validateFn = this.validateFn = this.utilsService.createValidator({
      minDate: this.minDate,
      maxDate: this.maxDate
    }, this.componentConfig.format, "month");
    this.onChangeCallback(this.processOnChangeCallback(this.selected));
  }
  monthClicked(month) {
    if (month.selected && !this.componentConfig.unSelectOnClick) {
      return;
    }
    this.selected = this.utilsService.updateSelected(this.componentConfig.allowMultiSelect, this.selected, month, "month");
    this.yearMonths = this.monthCalendarService.generateYear(this.componentConfig, this.currentDateView, this.selected);
    this.onSelect.emit(month);
  }
  onLeftNavClick() {
    const from = dayjsRef(this.currentDateView.toDate());
    this.currentDateView = this.currentDateView.subtract(1, "year");
    const to = dayjsRef(this.currentDateView.toDate());
    this.yearMonths = this.monthCalendarService.generateYear(this.componentConfig, this.currentDateView, this.selected);
    this.onLeftNav.emit({
      from,
      to
    });
  }
  onLeftSecondaryNavClick() {
    let navigateBy = this.componentConfig.multipleYearsNavigateBy;
    const isOutsideRange = this.componentConfig.min && this.currentDateView.year() - this.componentConfig.min.year() < navigateBy;
    if (isOutsideRange) {
      navigateBy = this.currentDateView.year() - this.componentConfig.min.year();
    }
    const from = dayjsRef(this.currentDateView.toDate());
    this.currentDateView = this.currentDateView.subtract(navigateBy, "year");
    const to = dayjsRef(this.currentDateView.toDate());
    this.onLeftSecondaryNav.emit({
      from,
      to
    });
  }
  onRightNavClick() {
    const from = dayjsRef(this.currentDateView.toDate());
    this.currentDateView = this.currentDateView.add(1, "year");
    const to = dayjsRef(this.currentDateView.toDate());
    this.onRightNav.emit({
      from,
      to
    });
  }
  onRightSecondaryNavClick() {
    let navigateBy = this.componentConfig.multipleYearsNavigateBy;
    const isOutsideRange = this.componentConfig.max && this.componentConfig.max.year() - this.currentDateView.year() < navigateBy;
    if (isOutsideRange) {
      navigateBy = this.componentConfig.max.year() - this.currentDateView.year();
    }
    const from = dayjsRef(this.currentDateView.toDate());
    this.currentDateView = this.currentDateView.add(navigateBy, "year");
    const to = dayjsRef(this.currentDateView.toDate());
    this.onRightSecondaryNav.emit({
      from,
      to
    });
  }
  toggleCalendarMode() {
    this.onNavHeaderBtnClick.emit();
  }
  getMonthBtnCssClass(month) {
    const cssClass = {
      "dp-selected": month.selected,
      "dp-current-month": month.currentMonth
    };
    const customCssClass = this.monthCalendarService.getMonthBtnCssClass(this.componentConfig, month.date);
    if (customCssClass) {
      cssClass[customCssClass] = true;
    }
    return cssClass;
  }
  shouldShowCurrent() {
    return this.utilsService.shouldShowCurrent(this.componentConfig.showGoToCurrent, "month", this.componentConfig.min, this.componentConfig.max);
  }
  goToCurrent() {
    this.currentDateView = dayjsRef();
    this.onGoToCurrent.emit();
  }
  moveCalendarTo(to) {
    if (to) {
      this.currentDateView = this.utilsService.convertToDayjs(to, this.componentConfig.format);
      this.cd.markForCheck();
    }
  }
  handleConfigChange(config) {
    if (config) {
      const prevConf = this.monthCalendarService.getConfig(config.previousValue);
      const currentConf = this.monthCalendarService.getConfig(config.currentValue);
      if (this.utilsService.shouldResetCurrentView(prevConf, currentConf)) {
        this._currentDateView = null;
      }
    }
  }
  static {
    this.ɵfac = function MonthCalendarComponent_Factory(t) {
      return new (t || _MonthCalendarComponent)(ɵɵdirectiveInject(MonthCalendarService), ɵɵdirectiveInject(UtilsService), ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _MonthCalendarComponent,
      selectors: [["dp-month-calendar"]],
      hostVars: 2,
      hostBindings: function MonthCalendarComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassMap(ctx.theme);
        }
      },
      inputs: {
        config: "config",
        displayDate: "displayDate",
        minDate: "minDate",
        maxDate: "maxDate",
        theme: "theme"
      },
      outputs: {
        onSelect: "onSelect",
        onNavHeaderBtnClick: "onNavHeaderBtnClick",
        onGoToCurrent: "onGoToCurrent",
        onLeftNav: "onLeftNav",
        onRightNav: "onRightNav",
        onLeftSecondaryNav: "onLeftSecondaryNav",
        onRightSecondaryNav: "onRightSecondaryNav"
      },
      features: [ɵɵProvidersFeature([MonthCalendarService, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _MonthCalendarComponent),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => _MonthCalendarComponent),
        multi: true
      }]), ɵɵNgOnChangesFeature],
      decls: 4,
      vars: 9,
      consts: [["dir", "ltr", 1, "dp-month-calendar-container"], [3, "onGoToCurrent", "onLabelClick", "onLeftNav", "onLeftSecondaryNav", "onRightNav", "onRightSecondaryNav", "isLabelClickable", "label", "showGoToCurrent", "showLeftNav", "showLeftSecondaryNav", "showRightNav", "showRightSecondaryNav", "theme"], [1, "dp-calendar-wrapper"], ["class", "dp-months-row", 4, "ngFor", "ngForOf"], [1, "dp-months-row"], ["class", "dp-calendar-month", "type", "button", 3, "disabled", "innerText", "ngClass", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "dp-calendar-month", 3, "click", "disabled", "innerText", "ngClass"]],
      template: function MonthCalendarComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0)(1, "dp-calendar-nav", 1);
          ɵɵlistener("onGoToCurrent", function MonthCalendarComponent_Template_dp_calendar_nav_onGoToCurrent_1_listener() {
            return ctx.goToCurrent();
          })("onLabelClick", function MonthCalendarComponent_Template_dp_calendar_nav_onLabelClick_1_listener() {
            return ctx.toggleCalendarMode();
          })("onLeftNav", function MonthCalendarComponent_Template_dp_calendar_nav_onLeftNav_1_listener() {
            return ctx.onLeftNavClick();
          })("onLeftSecondaryNav", function MonthCalendarComponent_Template_dp_calendar_nav_onLeftSecondaryNav_1_listener() {
            return ctx.onLeftSecondaryNavClick();
          })("onRightNav", function MonthCalendarComponent_Template_dp_calendar_nav_onRightNav_1_listener() {
            return ctx.onRightNavClick();
          })("onRightSecondaryNav", function MonthCalendarComponent_Template_dp_calendar_nav_onRightSecondaryNav_1_listener() {
            return ctx.onRightSecondaryNavClick();
          });
          ɵɵelementEnd();
          ɵɵelementStart(2, "div", 2);
          ɵɵtemplate(3, MonthCalendarComponent_div_3_Template, 2, 1, "div", 3);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("isLabelClickable", ctx.componentConfig.isNavHeaderBtnClickable)("label", ctx.navLabel)("showGoToCurrent", ctx.shouldShowCurrent())("showLeftNav", ctx.showLeftNav)("showLeftSecondaryNav", ctx.showSecondaryLeftNav)("showRightNav", ctx.showRightNav)("showRightSecondaryNav", ctx.showSecondaryRightNav)("theme", ctx.theme);
          ɵɵadvance(2);
          ɵɵproperty("ngForOf", ctx.yearMonths);
        }
      },
      dependencies: [NgClass, NgForOf, Dir, CalendarNavComponent],
      styles: ["dp-month-calendar{display:inline-block}dp-month-calendar .dp-month-calendar-container{background:#FFFFFF}dp-month-calendar .dp-calendar-wrapper{border:1px solid #000000}dp-month-calendar .dp-calendar-month{box-sizing:border-box;width:52.5px;height:52.5px;cursor:pointer}dp-month-calendar .dp-calendar-month.dp-selected{background:#106CC8;color:#fff}dp-month-calendar.dp-material .dp-calendar-weekday{height:25px;width:30px;line-height:25px;background:#E0E0E0;border:1px solid #E0E0E0}dp-month-calendar.dp-material .dp-calendar-wrapper{border:1px solid #E0E0E0}dp-month-calendar.dp-material .dp-calendar-month{box-sizing:border-box;background:#FFFFFF;border-radius:50%;border:none;outline:none}dp-month-calendar.dp-material .dp-calendar-month:hover{background:#E0E0E0}dp-month-calendar.dp-material .dp-selected{background:#106CC8;color:#fff}dp-month-calendar.dp-material .dp-selected:hover{background:#106CC8}dp-month-calendar.dp-material .dp-current-month{border:1px solid #106CC8}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MonthCalendarComponent, [{
    type: Component,
    args: [{
      selector: "dp-month-calendar",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [MonthCalendarService, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => MonthCalendarComponent),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => MonthCalendarComponent),
        multi: true
      }],
      template: '<div class="dp-month-calendar-container" dir="ltr">\n  <dp-calendar-nav\n      (onGoToCurrent)="goToCurrent()"\n      (onLabelClick)="toggleCalendarMode()"\n      (onLeftNav)="onLeftNavClick()"\n      (onLeftSecondaryNav)="onLeftSecondaryNavClick()"\n      (onRightNav)="onRightNavClick()"\n      (onRightSecondaryNav)="onRightSecondaryNavClick()"\n      [isLabelClickable]="componentConfig.isNavHeaderBtnClickable"\n      [label]="navLabel"\n      [showGoToCurrent]="shouldShowCurrent()"\n      [showLeftNav]="showLeftNav"\n      [showLeftSecondaryNav]="showSecondaryLeftNav"\n      [showRightNav]="showRightNav"\n      [showRightSecondaryNav]="showSecondaryRightNav"\n      [theme]="theme">\n  </dp-calendar-nav>\n\n  <div class="dp-calendar-wrapper">\n    <div *ngFor="let monthRow of yearMonths" class="dp-months-row">\n      <button (click)="monthClicked(month)"\n              *ngFor="let month of monthRow"\n              [attr.data-date]="month.date.format(componentConfig.format)"\n              [disabled]="month.disabled"\n              [innerText]="month.text"\n              [ngClass]="getMonthBtnCssClass(month)"\n              class="dp-calendar-month"\n              type="button">\n      </button>\n    </div>\n  </div>\n</div>\n',
      styles: ["dp-month-calendar{display:inline-block}dp-month-calendar .dp-month-calendar-container{background:#FFFFFF}dp-month-calendar .dp-calendar-wrapper{border:1px solid #000000}dp-month-calendar .dp-calendar-month{box-sizing:border-box;width:52.5px;height:52.5px;cursor:pointer}dp-month-calendar .dp-calendar-month.dp-selected{background:#106CC8;color:#fff}dp-month-calendar.dp-material .dp-calendar-weekday{height:25px;width:30px;line-height:25px;background:#E0E0E0;border:1px solid #E0E0E0}dp-month-calendar.dp-material .dp-calendar-wrapper{border:1px solid #E0E0E0}dp-month-calendar.dp-material .dp-calendar-month{box-sizing:border-box;background:#FFFFFF;border-radius:50%;border:none;outline:none}dp-month-calendar.dp-material .dp-calendar-month:hover{background:#E0E0E0}dp-month-calendar.dp-material .dp-selected{background:#106CC8;color:#fff}dp-month-calendar.dp-material .dp-selected:hover{background:#106CC8}dp-month-calendar.dp-material .dp-current-month{border:1px solid #106CC8}\n"]
    }]
  }], () => [{
    type: MonthCalendarService
  }, {
    type: UtilsService
  }, {
    type: ChangeDetectorRef
  }], {
    config: [{
      type: Input
    }],
    displayDate: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    theme: [{
      type: HostBinding,
      args: ["class"]
    }, {
      type: Input
    }],
    onSelect: [{
      type: Output
    }],
    onNavHeaderBtnClick: [{
      type: Output
    }],
    onGoToCurrent: [{
      type: Output
    }],
    onLeftNav: [{
      type: Output
    }],
    onRightNav: [{
      type: Output
    }],
    onLeftSecondaryNav: [{
      type: Output
    }],
    onRightSecondaryNav: [{
      type: Output
    }]
  });
})();
var DayCalendarComponent = class _DayCalendarComponent {
  constructor(dayCalendarService, utilsService, cd) {
    this.dayCalendarService = dayCalendarService;
    this.utilsService = utilsService;
    this.cd = cd;
    this.onSelect = new EventEmitter();
    this.onMonthSelect = new EventEmitter();
    this.onNavHeaderBtnClick = new EventEmitter();
    this.onGoToCurrent = new EventEmitter();
    this.onLeftNav = new EventEmitter();
    this.onRightNav = new EventEmitter();
    this.CalendarMode = ECalendarMode;
    this.isInited = false;
    this.currentCalendarMode = ECalendarMode.Day;
    this._shouldShowCurrent = true;
    this.api = {
      moveCalendarsBy: this.moveCalendarsBy.bind(this),
      moveCalendarTo: this.moveCalendarTo.bind(this),
      toggleCalendarMode: this.toggleCalendarMode.bind(this)
    };
  }
  get selected() {
    return this._selected;
  }
  set selected(selected) {
    this._selected = selected;
    this.onChangeCallback(this.processOnChangeCallback(selected));
  }
  get currentDateView() {
    return this._currentDateView;
  }
  set currentDateView(current) {
    this._currentDateView = dayjsRef(current.toDate());
    this.weeks = this.dayCalendarService.generateMonthArray(this.componentConfig, this._currentDateView, this.selected);
    this.navLabel = this.dayCalendarService.getHeaderLabel(this.componentConfig, this._currentDateView);
    this.showLeftNav = this.dayCalendarService.shouldShowLeft(this.componentConfig.min, this.currentDateView);
    this.showRightNav = this.dayCalendarService.shouldShowRight(this.componentConfig.max, this.currentDateView);
  }
  ngOnInit() {
    this.isInited = true;
    this.init();
    this.initValidators();
  }
  init() {
    this.componentConfig = this.dayCalendarService.getConfig(this.config);
    this.selected = this.selected || [];
    this.currentDateView = this.displayDate ? this.utilsService.convertToDayjs(this.displayDate, this.componentConfig.format) : this.utilsService.getDefaultDisplayDate(this.currentDateView, this.selected, this.componentConfig.allowMultiSelect, this.componentConfig.min);
    this.weekdays = this.dayCalendarService.generateWeekdays(this.componentConfig.firstDayOfWeek);
    this.inputValueType = this.utilsService.getInputType(this.inputValue, this.componentConfig.allowMultiSelect);
    this.monthCalendarConfig = this.dayCalendarService.getMonthCalendarConfig(this.componentConfig);
    this._shouldShowCurrent = this.shouldShowCurrent();
  }
  ngOnChanges(changes) {
    if (this.isInited) {
      const {
        minDate,
        maxDate,
        config
      } = changes;
      this.handleConfigChange(config);
      this.init();
      if (minDate || maxDate) {
        this.initValidators();
      }
    }
  }
  writeValue(value) {
    this.inputValue = value;
    if (value) {
      this.selected = this.utilsService.convertToDayjsArray(value, this.componentConfig);
      this.inputValueType = this.utilsService.getInputType(this.inputValue, this.componentConfig.allowMultiSelect);
    } else {
      this.selected = [];
    }
    this.weeks = this.dayCalendarService.generateMonthArray(this.componentConfig, this.currentDateView, this.selected);
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onChangeCallback = fn;
  }
  onChangeCallback(_) {
  }
  registerOnTouched(fn) {
  }
  validate(formControl) {
    if (this.minDate || this.maxDate) {
      return this.validateFn(formControl.value);
    } else {
      return () => null;
    }
  }
  processOnChangeCallback(value) {
    return this.utilsService.convertFromDayjsArray(this.componentConfig.format, value, this.componentConfig.returnedValueType || this.inputValueType);
  }
  initValidators() {
    this.validateFn = this.utilsService.createValidator({
      minDate: this.minDate,
      maxDate: this.maxDate
    }, this.componentConfig.format, "day");
    this.onChangeCallback(this.processOnChangeCallback(this.selected));
  }
  dayClicked(day) {
    if (day.selected && !this.componentConfig.unSelectOnClick) {
      return;
    }
    this.selected = this.utilsService.updateSelected(this.componentConfig.allowMultiSelect, this.selected, day);
    this.weeks = this.dayCalendarService.generateMonthArray(this.componentConfig, this.currentDateView, this.selected);
    this.onSelect.emit(day);
  }
  getDayBtnText(day) {
    return this.dayCalendarService.getDayBtnText(this.componentConfig, day.date);
  }
  getDayBtnCssClass(day) {
    const cssClasses = {
      "dp-selected": day.selected,
      "dp-current-month": day.currentMonth,
      "dp-prev-month": day.prevMonth,
      "dp-next-month": day.nextMonth,
      "dp-current-day": day.currentDay
    };
    const customCssClass = this.dayCalendarService.getDayBtnCssClass(this.componentConfig, day.date);
    if (customCssClass) {
      cssClasses[customCssClass] = true;
    }
    return cssClasses;
  }
  onLeftNavClick() {
    const from = dayjsRef(this.currentDateView.toDate());
    this.moveCalendarsBy(this.currentDateView, -1, "month");
    const to = dayjsRef(this.currentDateView.toDate());
    this.onLeftNav.emit({
      from,
      to
    });
  }
  onRightNavClick() {
    const from = dayjsRef(this.currentDateView.toDate());
    this.moveCalendarsBy(this.currentDateView, 1, "month");
    const to = dayjsRef(this.currentDateView.toDate());
    this.onRightNav.emit({
      from,
      to
    });
  }
  onMonthCalendarLeftClick(change) {
    this.onLeftNav.emit(change);
  }
  onMonthCalendarRightClick(change) {
    this.onRightNav.emit(change);
  }
  onMonthCalendarSecondaryLeftClick(change) {
    this.onRightNav.emit(change);
  }
  onMonthCalendarSecondaryRightClick(change) {
    this.onLeftNav.emit(change);
  }
  getWeekdayName(weekday) {
    if (this.componentConfig.weekDayFormatter) {
      return this.componentConfig.weekDayFormatter(weekday.day());
    }
    return weekday.format(this.componentConfig.weekDayFormat);
  }
  toggleCalendarMode(mode) {
    if (this.currentCalendarMode !== mode) {
      this.currentCalendarMode = mode;
      this.onNavHeaderBtnClick.emit(mode);
    }
    this.cd.markForCheck();
  }
  monthSelected(month) {
    this.currentDateView = dayjsRef(month.date.toDate());
    this.currentCalendarMode = ECalendarMode.Day;
    this.onMonthSelect.emit(month);
  }
  moveCalendarsBy(current, amount, granularity = "month") {
    this.currentDateView = dayjsRef(current.toDate()).add(amount, granularity);
    this.cd.markForCheck();
  }
  moveCalendarTo(to) {
    if (to) {
      this.currentDateView = this.utilsService.convertToDayjs(to, this.componentConfig.format);
    }
    this.cd.markForCheck();
  }
  shouldShowCurrent() {
    return this.utilsService.shouldShowCurrent(this.componentConfig.showGoToCurrent, "day", this.componentConfig.min, this.componentConfig.max);
  }
  goToCurrent() {
    this.currentDateView = dayjsRef();
    this.onGoToCurrent.emit();
  }
  handleConfigChange(config) {
    if (config) {
      const prevConf = this.dayCalendarService.getConfig(config.previousValue);
      const currentConf = this.dayCalendarService.getConfig(config.currentValue);
      if (this.utilsService.shouldResetCurrentView(prevConf, currentConf)) {
        this._currentDateView = null;
      }
    }
  }
  static {
    this.ɵfac = function DayCalendarComponent_Factory(t) {
      return new (t || _DayCalendarComponent)(ɵɵdirectiveInject(DayCalendarService), ɵɵdirectiveInject(UtilsService), ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DayCalendarComponent,
      selectors: [["dp-day-calendar"]],
      hostVars: 2,
      hostBindings: function DayCalendarComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassMap(ctx.theme);
        }
      },
      inputs: {
        config: "config",
        displayDate: "displayDate",
        minDate: "minDate",
        maxDate: "maxDate",
        theme: "theme"
      },
      outputs: {
        onSelect: "onSelect",
        onMonthSelect: "onMonthSelect",
        onNavHeaderBtnClick: "onNavHeaderBtnClick",
        onGoToCurrent: "onGoToCurrent",
        onLeftNav: "onLeftNav",
        onRightNav: "onRightNav"
      },
      features: [ɵɵProvidersFeature([DayCalendarService, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _DayCalendarComponent),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => _DayCalendarComponent),
        multi: true
      }]), ɵɵNgOnChangesFeature],
      decls: 2,
      vars: 2,
      consts: [["class", "dp-day-calendar-container", "dir", "ltr", 4, "ngIf"], [3, "config", "displayDate", "ngModel", "theme", "onLeftNav", "onLeftSecondaryNav", "onNavHeaderBtnClick", "onRightNav", "onRightSecondaryNav", "onSelect", 4, "ngIf"], ["dir", "ltr", 1, "dp-day-calendar-container"], [3, "onGoToCurrent", "onLabelClick", "onLeftNav", "onRightNav", "isLabelClickable", "label", "showGoToCurrent", "showLeftNav", "showRightNav", "theme"], [1, "dp-calendar-wrapper", 3, "ngClass"], [1, "dp-weekdays"], ["class", "dp-calendar-weekday", 3, "innerText", 4, "ngFor", "ngForOf"], ["class", "dp-calendar-week", 4, "ngFor", "ngForOf"], [1, "dp-calendar-weekday", 3, "innerText"], [1, "dp-calendar-week"], ["class", "dp-week-number", 3, "innerText", 4, "ngIf"], ["class", "dp-calendar-day", "type", "button", 3, "disabled", "innerText", "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "dp-week-number", 3, "innerText"], ["type", "button", 1, "dp-calendar-day", 3, "click", "disabled", "innerText", "ngClass"], [3, "onLeftNav", "onLeftSecondaryNav", "onNavHeaderBtnClick", "onRightNav", "onRightSecondaryNav", "onSelect", "config", "displayDate", "ngModel", "theme"]],
      template: function DayCalendarComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, DayCalendarComponent_div_0_Template, 6, 11, "div", 0)(1, DayCalendarComponent_dp_month_calendar_1_Template, 1, 4, "dp-month-calendar", 1);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.currentCalendarMode === ctx.CalendarMode.Day);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.currentCalendarMode === ctx.CalendarMode.Month);
        }
      },
      dependencies: [NgClass, NgForOf, NgIf, NgControlStatus, NgModel, Dir, MonthCalendarComponent, CalendarNavComponent],
      styles: ["dp-day-calendar{display:inline-block}dp-day-calendar .dp-day-calendar-container{background:#FFFFFF}dp-day-calendar .dp-calendar-wrapper{box-sizing:border-box;border:1px solid #000000}dp-day-calendar .dp-calendar-wrapper .dp-calendar-weekday:first-child{border-left:none}dp-day-calendar .dp-weekdays{font-size:15px;margin-bottom:5px}dp-day-calendar .dp-calendar-weekday{box-sizing:border-box;display:inline-block;width:30px;text-align:center;border-left:1px solid #000000;border-bottom:1px solid #000000}dp-day-calendar .dp-calendar-day{box-sizing:border-box;width:30px;height:30px;cursor:pointer}dp-day-calendar .dp-selected{background:#106CC8;color:#fff}dp-day-calendar .dp-prev-month,dp-day-calendar .dp-next-month{opacity:.5}dp-day-calendar .dp-hide-near-month .dp-prev-month,dp-day-calendar .dp-hide-near-month .dp-next-month{visibility:hidden}dp-day-calendar .dp-week-number{position:absolute;font-size:9px}dp-day-calendar.dp-material .dp-calendar-weekday{height:25px;width:30px;line-height:25px;color:#7a7a7a;border:none}dp-day-calendar.dp-material .dp-calendar-wrapper{border:1px solid #E0E0E0}dp-day-calendar.dp-material .dp-calendar-month,dp-day-calendar.dp-material .dp-calendar-day{box-sizing:border-box;background:#FFFFFF;border-radius:50%;border:none;outline:none}dp-day-calendar.dp-material .dp-calendar-month:hover,dp-day-calendar.dp-material .dp-calendar-day:hover{background:#E0E0E0}dp-day-calendar.dp-material .dp-selected{background:#106CC8;color:#fff}dp-day-calendar.dp-material .dp-selected:hover{background:#106CC8}dp-day-calendar.dp-material .dp-current-day{border:1px solid #106CC8}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DayCalendarComponent, [{
    type: Component,
    args: [{
      selector: "dp-day-calendar",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [DayCalendarService, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DayCalendarComponent),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => DayCalendarComponent),
        multi: true
      }],
      template: `<div *ngIf="currentCalendarMode ===  CalendarMode.Day" class="dp-day-calendar-container" dir="ltr">
  <dp-calendar-nav
      (onGoToCurrent)="goToCurrent()"
      (onLabelClick)="toggleCalendarMode(CalendarMode.Month)"
      (onLeftNav)="onLeftNavClick()"
      (onRightNav)="onRightNavClick()"
      [isLabelClickable]="componentConfig.enableMonthSelector"
      [label]="navLabel"
      [showGoToCurrent]="_shouldShowCurrent"
      [showLeftNav]="showLeftNav"
      [showRightNav]="showRightNav"
      [theme]="theme">
  </dp-calendar-nav>

  <div [ngClass]="{'dp-hide-near-month': !componentConfig.showNearMonthDays}"
       class="dp-calendar-wrapper">
    <div class="dp-weekdays">
      <span *ngFor="let weekday of weekdays"
            [innerText]="getWeekdayName(weekday)"
            class="dp-calendar-weekday">
      </span>
    </div>
    <div *ngFor="let week of weeks" class="dp-calendar-week">
      <span *ngIf="componentConfig.showWeekNumbers"
            [innerText]="week[0].date.isoWeek()"
            class="dp-week-number">
      </span>
      <button (click)="dayClicked(day)"
              *ngFor="let day of week"
              [attr.data-date]="day.date.format(componentConfig.format)"
              [disabled]="day.disabled"
              [innerText]="getDayBtnText(day)"
              [ngClass]="getDayBtnCssClass(day)"
              class="dp-calendar-day"
              type="button">
      </button>
    </div>
  </div>
</div>

<dp-month-calendar
    (onLeftNav)="onMonthCalendarLeftClick($event)"
    (onLeftSecondaryNav)="onMonthCalendarSecondaryLeftClick($event)"
    (onNavHeaderBtnClick)="toggleCalendarMode(CalendarMode.Day)"
    (onRightNav)="onMonthCalendarRightClick($event)"
    (onRightSecondaryNav)="onMonthCalendarSecondaryRightClick($event)"
    (onSelect)="monthSelected($event)"
    *ngIf="currentCalendarMode ===  CalendarMode.Month"
    [config]="monthCalendarConfig"
    [displayDate]="_currentDateView"
    [ngModel]="_selected"
    [theme]="theme">
</dp-month-calendar>
`,
      styles: ["dp-day-calendar{display:inline-block}dp-day-calendar .dp-day-calendar-container{background:#FFFFFF}dp-day-calendar .dp-calendar-wrapper{box-sizing:border-box;border:1px solid #000000}dp-day-calendar .dp-calendar-wrapper .dp-calendar-weekday:first-child{border-left:none}dp-day-calendar .dp-weekdays{font-size:15px;margin-bottom:5px}dp-day-calendar .dp-calendar-weekday{box-sizing:border-box;display:inline-block;width:30px;text-align:center;border-left:1px solid #000000;border-bottom:1px solid #000000}dp-day-calendar .dp-calendar-day{box-sizing:border-box;width:30px;height:30px;cursor:pointer}dp-day-calendar .dp-selected{background:#106CC8;color:#fff}dp-day-calendar .dp-prev-month,dp-day-calendar .dp-next-month{opacity:.5}dp-day-calendar .dp-hide-near-month .dp-prev-month,dp-day-calendar .dp-hide-near-month .dp-next-month{visibility:hidden}dp-day-calendar .dp-week-number{position:absolute;font-size:9px}dp-day-calendar.dp-material .dp-calendar-weekday{height:25px;width:30px;line-height:25px;color:#7a7a7a;border:none}dp-day-calendar.dp-material .dp-calendar-wrapper{border:1px solid #E0E0E0}dp-day-calendar.dp-material .dp-calendar-month,dp-day-calendar.dp-material .dp-calendar-day{box-sizing:border-box;background:#FFFFFF;border-radius:50%;border:none;outline:none}dp-day-calendar.dp-material .dp-calendar-month:hover,dp-day-calendar.dp-material .dp-calendar-day:hover{background:#E0E0E0}dp-day-calendar.dp-material .dp-selected{background:#106CC8;color:#fff}dp-day-calendar.dp-material .dp-selected:hover{background:#106CC8}dp-day-calendar.dp-material .dp-current-day{border:1px solid #106CC8}\n"]
    }]
  }], () => [{
    type: DayCalendarService
  }, {
    type: UtilsService
  }, {
    type: ChangeDetectorRef
  }], {
    config: [{
      type: Input
    }],
    displayDate: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    theme: [{
      type: HostBinding,
      args: ["class"]
    }, {
      type: Input
    }],
    onSelect: [{
      type: Output
    }],
    onMonthSelect: [{
      type: Output
    }],
    onNavHeaderBtnClick: [{
      type: Output
    }],
    onGoToCurrent: [{
      type: Output
    }],
    onLeftNav: [{
      type: Output
    }],
    onRightNav: [{
      type: Output
    }]
  });
})();
var TimeSelectComponent = class _TimeSelectComponent {
  constructor(timeSelectService, utilsService, cd) {
    this.timeSelectService = timeSelectService;
    this.utilsService = utilsService;
    this.cd = cd;
    this.onChange = new EventEmitter();
    this.isInited = false;
    this.api = {
      triggerChange: this.emitChange.bind(this)
    };
  }
  get selected() {
    return this._selected;
  }
  set selected(selected) {
    this._selected = selected;
    this.calculateTimeParts(this.selected);
    this.showDecHour = this.timeSelectService.shouldShowDecrease(this.componentConfig, this._selected, "hour");
    this.showDecMinute = this.timeSelectService.shouldShowDecrease(this.componentConfig, this._selected, "minute");
    this.showDecSecond = this.timeSelectService.shouldShowDecrease(this.componentConfig, this._selected, "second");
    this.showIncHour = this.timeSelectService.shouldShowIncrease(this.componentConfig, this._selected, "hour");
    this.showIncMinute = this.timeSelectService.shouldShowIncrease(this.componentConfig, this._selected, "minute");
    this.showIncSecond = this.timeSelectService.shouldShowIncrease(this.componentConfig, this._selected, "second");
    this.showToggleMeridiem = this.timeSelectService.shouldShowToggleMeridiem(this.componentConfig, this._selected);
    this.onChangeCallback(this.processOnChangeCallback(selected));
  }
  ngOnInit() {
    this.isInited = true;
    this.init();
    this.initValidators();
  }
  init() {
    this.componentConfig = this.timeSelectService.getConfig(this.config);
    this.selected = this.selected || dayjsRef();
    this.inputValueType = this.utilsService.getInputType(this.inputValue, false);
  }
  ngOnChanges(changes) {
    if (this.isInited) {
      const {
        minDate,
        maxDate,
        minTime,
        maxTime
      } = changes;
      if (minDate || maxDate || minTime || maxTime) {
        this.initValidators();
      }
      this.init();
    }
  }
  writeValue(value) {
    this.inputValue = value;
    if (value) {
      const dayjsValue = this.utilsService.convertToDayjsArray(value, {
        allowMultiSelect: false,
        format: this.timeSelectService.getTimeFormat(this.componentConfig)
      })[0];
      if (dayjsValue.isValid()) {
        this.selected = dayjsValue;
        this.inputValueType = this.utilsService.getInputType(this.inputValue, false);
      }
    }
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onChangeCallback = fn;
  }
  onChangeCallback(_) {
  }
  registerOnTouched(fn) {
  }
  validate(formControl) {
    if (this.minDate || this.maxDate || this.minTime || this.maxTime) {
      return this.validateFn(formControl.value);
    } else {
      return () => null;
    }
  }
  processOnChangeCallback(value) {
    return this.utilsService.convertFromDayjsArray(this.timeSelectService.getTimeFormat(this.componentConfig), [value], this.componentConfig.returnedValueType || this.inputValueType);
  }
  initValidators() {
    this.validateFn = this.utilsService.createValidator({
      minDate: this.minDate,
      maxDate: this.maxDate,
      minTime: this.minTime,
      maxTime: this.maxTime
    }, void 0, "day");
    this.onChangeCallback(this.processOnChangeCallback(this.selected));
  }
  decrease(unit) {
    this.selected = this.timeSelectService.decrease(this.componentConfig, this.selected, unit);
    this.emitChange();
  }
  increase(unit) {
    this.selected = this.timeSelectService.increase(this.componentConfig, this.selected, unit);
    this.emitChange();
  }
  toggleMeridiem() {
    this.selected = this.timeSelectService.toggleMeridiem(this.selected);
    this.emitChange();
  }
  emitChange() {
    this.onChange.emit({
      date: this.selected,
      selected: false
    });
    this.cd.markForCheck();
  }
  calculateTimeParts(time) {
    this.hours = this.timeSelectService.getHours(this.componentConfig, time);
    this.minutes = this.timeSelectService.getMinutes(this.componentConfig, time);
    this.seconds = this.timeSelectService.getSeconds(this.componentConfig, time);
    this.meridiem = this.timeSelectService.getMeridiem(this.componentConfig, time);
  }
  handleConfigChange(config) {
    if (config) {
      const prevConf = this.timeSelectService.getConfig(config.previousValue);
      const currentConf = this.timeSelectService.getConfig(config.currentValue);
    }
  }
  static {
    this.ɵfac = function TimeSelectComponent_Factory(t) {
      return new (t || _TimeSelectComponent)(ɵɵdirectiveInject(TimeSelectService), ɵɵdirectiveInject(UtilsService), ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TimeSelectComponent,
      selectors: [["dp-time-select"]],
      hostVars: 2,
      hostBindings: function TimeSelectComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassMap(ctx.theme);
        }
      },
      inputs: {
        config: "config",
        displayDate: "displayDate",
        minDate: "minDate",
        maxDate: "maxDate",
        minTime: "minTime",
        maxTime: "maxTime",
        theme: "theme"
      },
      outputs: {
        onChange: "onChange"
      },
      features: [ɵɵProvidersFeature([TimeSelectService, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _TimeSelectComponent),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => _TimeSelectComponent),
        multi: true
      }]), ɵɵNgOnChangesFeature],
      decls: 12,
      vars: 9,
      consts: [["dir", "ltr", 1, "dp-time-select-controls"], [1, "dp-time-select-control", "dp-time-select-control-hours"], ["type", "button", 1, "dp-time-select-control-up", 3, "click", "disabled"], [1, "dp-time-select-display-hours", 3, "innerText"], ["type", "button", 1, "dp-time-select-control-down", 3, "click", "disabled"], [1, "dp-time-select-control", "dp-time-select-separator", 3, "innerText"], [1, "dp-time-select-control", "dp-time-select-control-minutes"], [1, "dp-time-select-display-minutes", 3, "innerText"], [4, "ngIf"], ["class", "dp-time-select-control dp-time-select-control-meridiem", 4, "ngIf"], [1, "dp-time-select-control", "dp-time-select-control-seconds"], [1, "dp-time-select-display-seconds", 3, "innerText"], [1, "dp-time-select-control", "dp-time-select-control-meridiem"], [1, "dp-time-select-display-meridiem", 3, "innerText"]],
      template: function TimeSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "ul", 0)(1, "li", 1)(2, "button", 2);
          ɵɵlistener("click", function TimeSelectComponent_Template_button_click_2_listener() {
            return ctx.increase("hour");
          });
          ɵɵelementEnd();
          ɵɵelement(3, "span", 3);
          ɵɵelementStart(4, "button", 4);
          ɵɵlistener("click", function TimeSelectComponent_Template_button_click_4_listener() {
            return ctx.decrease("hour");
          });
          ɵɵelementEnd()();
          ɵɵelement(5, "li", 5);
          ɵɵelementStart(6, "li", 6)(7, "button", 2);
          ɵɵlistener("click", function TimeSelectComponent_Template_button_click_7_listener() {
            return ctx.increase("minute");
          });
          ɵɵelementEnd();
          ɵɵelement(8, "span", 7);
          ɵɵelementStart(9, "button", 4);
          ɵɵlistener("click", function TimeSelectComponent_Template_button_click_9_listener() {
            return ctx.decrease("minute");
          });
          ɵɵelementEnd()();
          ɵɵtemplate(10, TimeSelectComponent_ng_container_10_Template, 6, 4, "ng-container", 8)(11, TimeSelectComponent_li_11_Template, 4, 3, "li", 9);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵproperty("disabled", !ctx.showIncHour);
          ɵɵadvance();
          ɵɵproperty("innerText", ctx.hours);
          ɵɵadvance();
          ɵɵproperty("disabled", !ctx.showDecHour);
          ɵɵadvance();
          ɵɵproperty("innerText", ctx.componentConfig.timeSeparator);
          ɵɵadvance(2);
          ɵɵproperty("disabled", !ctx.showIncMinute);
          ɵɵadvance();
          ɵɵproperty("innerText", ctx.minutes);
          ɵɵadvance();
          ɵɵproperty("disabled", !ctx.showDecMinute);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.componentConfig.showSeconds);
          ɵɵadvance();
          ɵɵproperty("ngIf", !ctx.componentConfig.showTwentyFourHours);
        }
      },
      dependencies: [NgIf, Dir],
      styles: ['dp-time-select{display:inline-block}dp-time-select .dp-time-select-controls{margin:0;padding:0;text-align:center;line-height:normal;background:#FFFFFF}dp-time-select .dp-time-select-control{display:inline-block;width:35px;margin:0 auto;vertical-align:middle;font-size:inherit;letter-spacing:1px}dp-time-select .dp-time-select-control-up,dp-time-select .dp-time-select-control-down{position:relative;display:block;width:24px;height:24px;margin:3px auto;cursor:pointer}dp-time-select .dp-time-select-control-up:before,dp-time-select .dp-time-select-control-down:before{position:relative;content:"";display:inline-block;height:8px;width:8px;vertical-align:baseline;border-style:solid;border-width:2px 2px 0 0;transform:rotate(0)}dp-time-select .dp-time-select-control-up:before{transform:rotate(-45deg);top:4px}dp-time-select .dp-time-select-control-down:before{transform:rotate(135deg)}dp-time-select .dp-time-select-separator{width:5px}dp-time-select.dp-material .dp-time-select-control-up,dp-time-select.dp-material .dp-time-select-control-down{box-sizing:border-box;background:transparent;border:none;outline:none;border-radius:50%}dp-time-select.dp-material .dp-time-select-control-up:before,dp-time-select.dp-material .dp-time-select-control-down:before{left:0}dp-time-select.dp-material .dp-time-select-control-up:hover,dp-time-select.dp-material .dp-time-select-control-down:hover{background:#E0E0E0}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimeSelectComponent, [{
    type: Component,
    args: [{
      selector: "dp-time-select",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [TimeSelectService, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => TimeSelectComponent),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => TimeSelectComponent),
        multi: true
      }],
      template: `<ul class="dp-time-select-controls" dir="ltr">
  <li class="dp-time-select-control dp-time-select-control-hours">
    <button (click)="increase('hour')"
            [disabled]="!showIncHour"
            class="dp-time-select-control-up"
            type="button">
    </button>
    <span [innerText]="hours"
          class="dp-time-select-display-hours">
    </span>
    <button (click)="decrease('hour')"
            [disabled]="!showDecHour"
            class="dp-time-select-control-down"
            type="button">
    </button>
  </li>
  <li [innerText]="componentConfig.timeSeparator"
      class="dp-time-select-control dp-time-select-separator">
  </li>
  <li class="dp-time-select-control dp-time-select-control-minutes">
    <button (click)="increase('minute')"
            [disabled]="!showIncMinute"
            class="dp-time-select-control-up"
            type="button"></button>
    <span [innerText]="minutes"
          class="dp-time-select-display-minutes">
    </span>
    <button (click)="decrease('minute')"
            [disabled]="!showDecMinute" class="dp-time-select-control-down"
            type="button">
    </button>
  </li>
  <ng-container *ngIf="componentConfig.showSeconds">
    <li [innerText]="componentConfig.timeSeparator"
        class="dp-time-select-control dp-time-select-separator">
    </li>
    <li class="dp-time-select-control dp-time-select-control-seconds">
      <button (click)="increase('second')"
              [disabled]="!showIncSecond"
              class="dp-time-select-control-up"
              type="button"></button>
      <span [innerText]="seconds"
            class="dp-time-select-display-seconds">
      </span>
      <button (click)="decrease('second')"
              [disabled]="!showDecSecond"
              class="dp-time-select-control-down"
              type="button">
      </button>
    </li>
  </ng-container>
  <li *ngIf="!componentConfig.showTwentyFourHours" class="dp-time-select-control dp-time-select-control-meridiem">
    <button (click)="toggleMeridiem()"
            [disabled]="!showToggleMeridiem"
            class="dp-time-select-control-up"
            type="button">
    </button>
    <span [innerText]="meridiem"
          class="dp-time-select-display-meridiem">
    </span>
    <button (click)="toggleMeridiem()"
            [disabled]="!showToggleMeridiem"
            class="dp-time-select-control-down"
            type="button">
    </button>
  </li>
</ul>
`,
      styles: ['dp-time-select{display:inline-block}dp-time-select .dp-time-select-controls{margin:0;padding:0;text-align:center;line-height:normal;background:#FFFFFF}dp-time-select .dp-time-select-control{display:inline-block;width:35px;margin:0 auto;vertical-align:middle;font-size:inherit;letter-spacing:1px}dp-time-select .dp-time-select-control-up,dp-time-select .dp-time-select-control-down{position:relative;display:block;width:24px;height:24px;margin:3px auto;cursor:pointer}dp-time-select .dp-time-select-control-up:before,dp-time-select .dp-time-select-control-down:before{position:relative;content:"";display:inline-block;height:8px;width:8px;vertical-align:baseline;border-style:solid;border-width:2px 2px 0 0;transform:rotate(0)}dp-time-select .dp-time-select-control-up:before{transform:rotate(-45deg);top:4px}dp-time-select .dp-time-select-control-down:before{transform:rotate(135deg)}dp-time-select .dp-time-select-separator{width:5px}dp-time-select.dp-material .dp-time-select-control-up,dp-time-select.dp-material .dp-time-select-control-down{box-sizing:border-box;background:transparent;border:none;outline:none;border-radius:50%}dp-time-select.dp-material .dp-time-select-control-up:before,dp-time-select.dp-material .dp-time-select-control-down:before{left:0}dp-time-select.dp-material .dp-time-select-control-up:hover,dp-time-select.dp-material .dp-time-select-control-down:hover{background:#E0E0E0}\n']
    }]
  }], () => [{
    type: TimeSelectService
  }, {
    type: UtilsService
  }, {
    type: ChangeDetectorRef
  }], {
    config: [{
      type: Input
    }],
    displayDate: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    minTime: [{
      type: Input
    }],
    maxTime: [{
      type: Input
    }],
    theme: [{
      type: HostBinding,
      args: ["class"]
    }, {
      type: Input
    }],
    onChange: [{
      type: Output
    }]
  });
})();
var DayTimeCalendarComponent = class _DayTimeCalendarComponent {
  constructor(dayTimeCalendarService, utilsService, cd) {
    this.dayTimeCalendarService = dayTimeCalendarService;
    this.utilsService = utilsService;
    this.cd = cd;
    this.onChange = new EventEmitter();
    this.onGoToCurrent = new EventEmitter();
    this.onLeftNav = new EventEmitter();
    this.onRightNav = new EventEmitter();
    this.isInited = false;
    this.api = {
      moveCalendarTo: this.moveCalendarTo.bind(this)
    };
  }
  get selected() {
    return this._selected;
  }
  set selected(selected) {
    this._selected = selected;
    this.onChangeCallback(this.processOnChangeCallback(selected));
  }
  ngOnInit() {
    this.isInited = true;
    this.init();
    this.initValidators();
  }
  init() {
    this.componentConfig = this.dayTimeCalendarService.getConfig(this.config);
    this.inputValueType = this.utilsService.getInputType(this.inputValue, false);
  }
  ngOnChanges(changes) {
    if (this.isInited) {
      const {
        minDate,
        maxDate
      } = changes;
      this.init();
      if (minDate || maxDate) {
        this.initValidators();
      }
    }
  }
  writeValue(value) {
    this.inputValue = value;
    if (value) {
      this.selected = this.utilsService.convertToDayjsArray(value, {
        format: this.componentConfig.format,
        allowMultiSelect: false
      })[0];
      this.inputValueType = this.utilsService.getInputType(this.inputValue, false);
    } else {
      this.selected = null;
    }
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onChangeCallback = fn;
  }
  onChangeCallback(_) {
  }
  registerOnTouched(fn) {
  }
  validate(formControl) {
    if (this.minDate || this.maxDate) {
      return this.validateFn(formControl.value);
    } else {
      return () => null;
    }
  }
  processOnChangeCallback(value) {
    return this.utilsService.convertFromDayjsArray(this.componentConfig.format, [value], this.componentConfig.returnedValueType || this.inputValueType);
  }
  initValidators() {
    this.validateFn = this.utilsService.createValidator({
      minDate: this.minDate,
      maxDate: this.maxDate
    }, void 0, "daytime");
    this.onChangeCallback(this.processOnChangeCallback(this.selected));
  }
  dateSelected(day) {
    this.selected = this.dayTimeCalendarService.updateDay(this.selected, day.date, this.componentConfig);
    this.emitChange();
  }
  timeChange(time) {
    this.selected = this.dayTimeCalendarService.updateTime(this.selected, time.date);
    this.emitChange();
  }
  emitChange() {
    this.onChange.emit({
      date: this.selected,
      selected: false
    });
  }
  moveCalendarTo(to) {
    if (to) {
      this.dayCalendarRef.moveCalendarTo(to);
    }
  }
  onLeftNavClick(change) {
    this.onLeftNav.emit(change);
  }
  onRightNavClick(change) {
    this.onRightNav.emit(change);
  }
  static {
    this.ɵfac = function DayTimeCalendarComponent_Factory(t) {
      return new (t || _DayTimeCalendarComponent)(ɵɵdirectiveInject(DayTimeCalendarService), ɵɵdirectiveInject(UtilsService), ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DayTimeCalendarComponent,
      selectors: [["dp-day-time-calendar"]],
      viewQuery: function DayTimeCalendarComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c12, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dayCalendarRef = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function DayTimeCalendarComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassMap(ctx.theme);
        }
      },
      inputs: {
        config: "config",
        displayDate: "displayDate",
        minDate: "minDate",
        maxDate: "maxDate",
        theme: "theme"
      },
      outputs: {
        onChange: "onChange",
        onGoToCurrent: "onGoToCurrent",
        onLeftNav: "onLeftNav",
        onRightNav: "onRightNav"
      },
      features: [ɵɵProvidersFeature([DayTimeCalendarService, DayCalendarService, TimeSelectService, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _DayTimeCalendarComponent),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => _DayTimeCalendarComponent),
        multi: true
      }]), ɵɵNgOnChangesFeature],
      decls: 4,
      vars: 7,
      consts: [["dayCalendar", ""], ["timeSelect", ""], [3, "onGoToCurrent", "onLeftNav", "onRightNav", "onSelect", "config", "displayDate", "ngModel", "theme"], [3, "onChange", "config", "ngModel", "theme"]],
      template: function DayTimeCalendarComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "dp-day-calendar", 2, 0);
          ɵɵlistener("onGoToCurrent", function DayTimeCalendarComponent_Template_dp_day_calendar_onGoToCurrent_0_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onGoToCurrent.emit());
          })("onLeftNav", function DayTimeCalendarComponent_Template_dp_day_calendar_onLeftNav_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onLeftNavClick($event));
          })("onRightNav", function DayTimeCalendarComponent_Template_dp_day_calendar_onRightNav_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onRightNavClick($event));
          })("onSelect", function DayTimeCalendarComponent_Template_dp_day_calendar_onSelect_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.dateSelected($event));
          });
          ɵɵelementEnd();
          ɵɵelementStart(2, "dp-time-select", 3, 1);
          ɵɵlistener("onChange", function DayTimeCalendarComponent_Template_dp_time_select_onChange_2_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.timeChange($event));
          });
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("config", ctx.componentConfig)("displayDate", ctx.displayDate)("ngModel", ctx._selected)("theme", ctx.theme);
          ɵɵadvance(2);
          ɵɵproperty("config", ctx.componentConfig)("ngModel", ctx._selected)("theme", ctx.theme);
        }
      },
      dependencies: [NgControlStatus, NgModel, DayCalendarComponent, TimeSelectComponent],
      styles: ["dp-day-time-calendar{display:inline-block}dp-day-time-calendar dp-time-select{display:block;border:1px solid #000000;border-top:0}dp-day-time-calendar.dp-material dp-time-select{border:1px solid #E0E0E0;border-top:0}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DayTimeCalendarComponent, [{
    type: Component,
    args: [{
      selector: "dp-day-time-calendar",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      providers: [DayTimeCalendarService, DayCalendarService, TimeSelectService, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DayTimeCalendarComponent),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => DayTimeCalendarComponent),
        multi: true
      }],
      template: '<dp-day-calendar #dayCalendar\n                 (onGoToCurrent)="onGoToCurrent.emit()"\n                 (onLeftNav)="onLeftNavClick($event)"\n                 (onRightNav)="onRightNavClick($event)"\n                 (onSelect)="dateSelected($event)"\n                 [config]="componentConfig"\n                 [displayDate]="displayDate"\n                 [ngModel]="_selected"\n                 [theme]="theme">\n</dp-day-calendar>\n<dp-time-select #timeSelect\n                (onChange)="timeChange($event)"\n                [config]="componentConfig"\n                [ngModel]="_selected"\n                [theme]="theme">\n</dp-time-select>\n',
      styles: ["dp-day-time-calendar{display:inline-block}dp-day-time-calendar dp-time-select{display:block;border:1px solid #000000;border-top:0}dp-day-time-calendar.dp-material dp-time-select{border:1px solid #E0E0E0;border-top:0}\n"]
    }]
  }], () => [{
    type: DayTimeCalendarService
  }, {
    type: UtilsService
  }, {
    type: ChangeDetectorRef
  }], {
    config: [{
      type: Input
    }],
    displayDate: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    theme: [{
      type: HostBinding,
      args: ["class"]
    }, {
      type: Input
    }],
    onChange: [{
      type: Output
    }],
    onGoToCurrent: [{
      type: Output
    }],
    onLeftNav: [{
      type: Output
    }],
    onRightNav: [{
      type: Output
    }],
    dayCalendarRef: [{
      type: ViewChild,
      args: ["dayCalendar"]
    }]
  });
})();
var DatePickerComponent = class _DatePickerComponent {
  constructor(dayPickerService, elemRef, renderer, utilsService, cd) {
    this.dayPickerService = dayPickerService;
    this.elemRef = elemRef;
    this.renderer = renderer;
    this.utilsService = utilsService;
    this.cd = cd;
    this.isInitialized = false;
    this.mode = "day";
    this.placeholder = "";
    this.disabled = false;
    this.open = new EventEmitter();
    this.close = new EventEmitter();
    this.onChange = new EventEmitter();
    this.onGoToCurrent = new EventEmitter();
    this.onLeftNav = new EventEmitter();
    this.onRightNav = new EventEmitter();
    this.onSelect = new EventEmitter();
    this.isFocusedTrigger = false;
    this.handleInnerElementClickUnlisteners = [];
    this.globalListenersUnlisteners = [];
    this.api = {
      open: this.showCalendars.bind(this),
      close: this.hideCalendar.bind(this),
      moveCalendarTo: this.moveCalendarTo.bind(this)
    };
    this.selectEvent = SelectEvent;
    this.areCalendarsShown = false;
    this._selected = [];
  }
  get openOnFocus() {
    return this.componentConfig.openOnFocus;
  }
  get openOnClick() {
    return this.componentConfig.openOnClick;
  }
  get selected() {
    return this._selected;
  }
  set selected(selected) {
    this._selected = selected;
    this.inputElementValue = this.utilsService.convertFromDayjsArray(this.componentConfig.format, selected, ECalendarValue.StringArr).join(" | ");
    const val = this.processOnChangeCallback(selected);
    this.onChangeCallback(val, false);
    this.onChange.emit(val);
  }
  get currentDateView() {
    return this._currentDateView;
  }
  set currentDateView(date) {
    this._currentDateView = date;
    if (this.dayCalendarRef) {
      this.dayCalendarRef.moveCalendarTo(date);
    }
    if (this.monthCalendarRef) {
      this.monthCalendarRef.moveCalendarTo(date);
    }
    if (this.dayTimeCalendarRef) {
      this.dayTimeCalendarRef.moveCalendarTo(date);
    }
    this.displayDate = date;
  }
  onClick() {
    if (!this.openOnClick) {
      return;
    }
    if (!this.isFocusedTrigger && !this.disabled) {
      if (!this.areCalendarsShown) {
        this.showCalendars();
      }
    }
  }
  onBodyClick(event) {
    if (this.inputElement.nativeElement === event.target) {
      return;
    }
    if (this.componentConfig.hideOnOutsideClick) {
      this.hideCalendar();
    }
  }
  writeValue(value) {
    this.inputValue = value;
    if (value || value === "") {
      this.selected = this.utilsService.convertToDayjsArray(value, this.componentConfig);
      this.init();
    } else {
      this.selected = [];
    }
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onChangeCallback = fn;
  }
  onChangeCallback(_, __) {
  }
  registerOnTouched(fn) {
    this.onTouchedCallback = fn;
  }
  onTouchedCallback() {
  }
  validate(formControl) {
    return this.validateFn(formControl.value);
  }
  processOnChangeCallback(selected) {
    if (typeof selected === "string") {
      return selected;
    } else {
      return this.utilsService.convertFromDayjsArray(this.componentConfig.format, selected, this.componentConfig.returnedValueType || this.utilsService.getInputType(this.inputValue, this.componentConfig.allowMultiSelect));
    }
  }
  initValidators() {
    this.validateFn = this.utilsService.createValidator({
      minDate: this.minDate,
      maxDate: this.maxDate,
      minTime: this.minTime,
      maxTime: this.maxTime
    }, this.componentConfig.format, this.mode);
    this.onChangeCallback(this.processOnChangeCallback(this.selected), false);
  }
  ngOnInit() {
    this.isInitialized = true;
    this.init();
  }
  ngOnChanges(changes) {
    if (this.isInitialized) {
      this.init();
    }
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this.cd.markForCheck();
  }
  init() {
    this.componentConfig = this.dayPickerService.getConfig(this.config, this.mode);
    this.currentDateView = this.displayDate ? this.utilsService.convertToDayjs(this.displayDate, this.componentConfig.format) : this.utilsService.getDefaultDisplayDate(this.currentDateView, this.selected, this.componentConfig.allowMultiSelect, this.componentConfig.min);
    this.dayCalendarConfig = this.dayPickerService.getDayConfigService(this.componentConfig);
    this.dayTimeCalendarConfig = this.dayPickerService.getDayTimeConfig(this.componentConfig);
    this.timeSelectConfig = this.dayPickerService.getTimeConfig(this.componentConfig);
    this.initValidators();
    this.overlayPosition = this.dayPickerService.getOverlayPosition(this.componentConfig);
    this.origin = this.utilsService.getNativeElement(this.componentConfig.inputElementContainer);
  }
  inputFocused() {
    if (!this.openOnFocus) {
      return;
    }
    clearTimeout(this.onOpenDelayTimeoutHandler);
    this.isFocusedTrigger = true;
    this.onOpenDelayTimeoutHandler = setTimeout(() => {
      if (!this.areCalendarsShown) {
        this.showCalendars();
      }
      this.isFocusedTrigger = false;
      this.cd.markForCheck();
    }, this.componentConfig.onOpenDelay);
  }
  inputBlurred() {
    clearTimeout(this.onOpenDelayTimeoutHandler);
    this.onTouchedCallback();
  }
  showCalendars() {
    this.areCalendarsShown = true;
    this.startGlobalListeners();
    if (this.timeSelectRef) {
      this.timeSelectRef.api.triggerChange();
    }
    this.open.emit();
    this.cd.markForCheck();
  }
  hideCalendar() {
    this.areCalendarsShown = false;
    if (this.dayCalendarRef) {
      this.dayCalendarRef.api.toggleCalendarMode(ECalendarMode.Day);
    }
    this.stopGlobalListeners();
    this.close.emit();
    this.cd.markForCheck();
  }
  onViewDateChange(value) {
    const strVal = value ? this.utilsService.convertToString(value, this.componentConfig.format) : "";
    if (this.dayPickerService.isValidInputDateValue(strVal, this.componentConfig)) {
      this.selected = this.dayPickerService.convertInputValueToDayjsArray(strVal, this.componentConfig);
      this.currentDateView = this.selected.length ? this.utilsService.getDefaultDisplayDate(null, this.selected, this.componentConfig.allowMultiSelect, this.componentConfig.min) : this.currentDateView;
      this.onSelect.emit({
        date: strVal,
        type: SelectEvent.INPUT,
        granularity: null
      });
    } else {
      this._selected = this.utilsService.getValidDayjsArray(strVal, this.componentConfig.format);
      this.onChangeCallback(this.processOnChangeCallback(strVal), true);
    }
  }
  dateSelected(date, granularity, type, ignoreClose) {
    this.selected = this.utilsService.updateSelected(this.componentConfig.allowMultiSelect, this.selected, date, granularity);
    if (!ignoreClose) {
      this.onDateClick();
    }
    this.onSelect.emit({
      date: date.date,
      granularity,
      type
    });
  }
  onDateClick() {
    if (this.componentConfig.closeOnSelect) {
      setTimeout(this.hideCalendar.bind(this), this.componentConfig.closeOnSelectDelay);
    }
  }
  onKeyPress(event) {
    switch (event.key) {
      case "Escape":
      case "Esc":
      case "Tab":
        this.hideCalendar();
        break;
    }
  }
  moveCalendarTo(date) {
    this.currentDateView = this.utilsService.convertToDayjs(date, this.componentConfig.format);
  }
  onLeftNavClick(change) {
    this.displayDate = change.to;
    this.onLeftNav.emit(change);
  }
  onRightNavClick(change) {
    this.displayDate = change.to;
    this.onRightNav.emit(change);
  }
  startGlobalListeners() {
    this.globalListenersUnlisteners.push(this.renderer.listen(document, "keydown", (e) => {
      this.onKeyPress(e);
    }));
  }
  stopGlobalListeners() {
    this.globalListenersUnlisteners.forEach((ul) => ul());
    this.globalListenersUnlisteners = [];
  }
  ngOnDestroy() {
    this.handleInnerElementClickUnlisteners.forEach((ul) => ul());
    if (this.appendToElement) {
      this.appendToElement.removeChild(this.calendarWrapper);
    }
  }
  goToCurrent() {
    this.currentDateView = dayjsRef();
    this.onGoToCurrent.emit();
  }
  static {
    this.ɵfac = function DatePickerComponent_Factory(t) {
      return new (t || _DatePickerComponent)(ɵɵdirectiveInject(DatePickerService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(UtilsService), ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DatePickerComponent,
      selectors: [["dp-date-picker"]],
      viewQuery: function DatePickerComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c2, 5);
          ɵɵviewQuery(_c12, 5);
          ɵɵviewQuery(_c3, 5);
          ɵɵviewQuery(_c4, 5);
          ɵɵviewQuery(_c5, 5);
          ɵɵviewQuery(_c6, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.calendarContainer = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dayCalendarRef = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.monthCalendarRef = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dayTimeCalendarRef = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.timeSelectRef = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputElement = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function DatePickerComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function DatePickerComponent_click_HostBindingHandler() {
            return ctx.onClick();
          });
        }
        if (rf & 2) {
          ɵɵclassMap(ctx.theme);
        }
      },
      inputs: {
        config: "config",
        mode: "mode",
        placeholder: "placeholder",
        disabled: "disabled",
        displayDate: "displayDate",
        theme: "theme",
        minDate: "minDate",
        maxDate: "maxDate",
        minTime: "minTime",
        maxTime: "maxTime"
      },
      outputs: {
        open: "open",
        close: "close",
        onChange: "onChange",
        onGoToCurrent: "onGoToCurrent",
        onLeftNav: "onLeftNav",
        onRightNav: "onRightNav",
        onSelect: "onSelect"
      },
      features: [ɵɵProvidersFeature([DatePickerService, DayTimeCalendarService, DayCalendarService, TimeSelectService, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _DatePickerComponent),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => _DatePickerComponent),
        multi: true
      }]), ɵɵNgOnChangesFeature],
      decls: 6,
      vars: 13,
      consts: [["trigger", ""], ["inputElement", ""], ["container", ""], ["dayCalendar", ""], ["monthCalendar", ""], ["timeSelect", ""], ["daytimeCalendar", ""], ["dir", "ltr", 3, "ngClass"], [1, "dp-input-container", 3, "hidden"], ["type", "text", 1, "dp-picker-input", 3, "blur", "focus", "keydown.enter", "ngModelChange", "disabled", "ngModel", "placeholder", "readonly"], ["cdkConnectedOverlay", "", 3, "overlayOutsideClick", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayHasBackdrop"], [3, "ngSwitch"], [3, "config", "displayDate", "ngModel", "theme", "onGoToCurrent", "onLeftNav", "onRightNav", "onSelect", 4, "ngSwitchCase"], [3, "config", "ngModel", "theme", "onChange", 4, "ngSwitchCase"], [3, "config", "displayDate", "ngModel", "theme", "onChange", "onGoToCurrent", "onLeftNav", "onRightNav", 4, "ngSwitchCase"], [3, "onGoToCurrent", "onLeftNav", "onRightNav", "onSelect", "config", "displayDate", "ngModel", "theme"], [3, "onChange", "config", "ngModel", "theme"], [3, "onChange", "onGoToCurrent", "onLeftNav", "onRightNav", "config", "displayDate", "ngModel", "theme"]],
      template: function DatePickerComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "div", 7, 0)(2, "div", 8)(3, "input", 9, 1);
          ɵɵlistener("blur", function DatePickerComponent_Template_input_blur_3_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.inputBlurred());
          })("focus", function DatePickerComponent_Template_input_focus_3_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.inputFocused());
          })("keydown.enter", function DatePickerComponent_Template_input_keydown_enter_3_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.componentConfig.closeOnEnter && ctx.hideCalendar());
          })("ngModelChange", function DatePickerComponent_Template_input_ngModelChange_3_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onViewDateChange($event));
          });
          ɵɵelementEnd()();
          ɵɵtemplate(5, DatePickerComponent_ng_template_5_Template, 7, 9, "ng-template", 10);
          ɵɵlistener("overlayOutsideClick", function DatePickerComponent_Template_ng_template_overlayOutsideClick_5_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onBodyClick($event));
          });
          ɵɵelementEnd();
        }
        if (rf & 2) {
          const trigger_r7 = ɵɵreference(1);
          ɵɵproperty("ngClass", ɵɵpureFunction1(11, _c7, ctx.areCalendarsShown));
          ɵɵadvance(2);
          ɵɵproperty("hidden", ctx.componentConfig.hideInputContainer);
          ɵɵattribute("data-hidden", ctx.componentConfig.hideInputContainer);
          ɵɵadvance();
          ɵɵproperty("disabled", ctx.disabled)("ngModel", ctx.inputElementValue)("placeholder", ctx.placeholder)("readonly", ctx.componentConfig.disableKeypress);
          ɵɵadvance(2);
          ɵɵproperty("cdkConnectedOverlayPositions", ctx.overlayPosition)("cdkConnectedOverlayOrigin", ctx.origin || trigger_r7)("cdkConnectedOverlayOpen", ctx.areCalendarsShown)("cdkConnectedOverlayHasBackdrop", false);
        }
      },
      dependencies: [NgClass, NgSwitch, NgSwitchCase, DefaultValueAccessor, NgControlStatus, NgModel, CdkConnectedOverlay, Dir, DayCalendarComponent, MonthCalendarComponent, TimeSelectComponent, DayTimeCalendarComponent],
      styles: ["dp-date-picker{display:inline-block}dp-date-picker.dp-material .dp-picker-input{box-sizing:border-box;height:30px;width:213px;font-size:13px;outline:none}dp-date-picker .dp-input-container{position:relative}dp-date-picker .dp-selected{background:#106CC8;color:#fff}.dp-popup{position:relative;display:inline-block;background:#FFFFFF;box-shadow:1px 1px 5px #0000001a;border-left:1px solid rgba(0,0,0,.1);border-right:1px solid rgba(0,0,0,.1);border-bottom:1px solid rgba(0,0,0,.1);white-space:nowrap}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatePickerComponent, [{
    type: Component,
    args: [{
      selector: "dp-date-picker",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [DatePickerService, DayTimeCalendarService, DayCalendarService, TimeSelectService, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DatePickerComponent),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => DatePickerComponent),
        multi: true
      }],
      template: `<div [ngClass]="{'dp-open': areCalendarsShown}" dir="ltr" #trigger>
  <div [attr.data-hidden]="componentConfig.hideInputContainer"
       [hidden]="componentConfig.hideInputContainer"
       class="dp-input-container">
    <input #inputElement
           (blur)="inputBlurred()"
           (focus)="inputFocused()"
           (keydown.enter)="componentConfig.closeOnEnter && hideCalendar()"
           (ngModelChange)="onViewDateChange($event)"
           [disabled]="disabled"
           [ngModel]="inputElementValue"
           [placeholder]="placeholder"
           [readonly]="componentConfig.disableKeypress"
           class="dp-picker-input"
           type="text"/>
  </div>
  <ng-template cdkConnectedOverlay
               [cdkConnectedOverlayPositions]="overlayPosition"
               [cdkConnectedOverlayOrigin]="origin || trigger"
               [cdkConnectedOverlayOpen]="areCalendarsShown"
               [cdkConnectedOverlayHasBackdrop]="false"
               (overlayOutsideClick)="onBodyClick($event)">
    <div #container>
      <div [attr.data-hidden]="!areCalendarsShown"
           [ngSwitch]="mode"
           class="dp-popup {{theme}}">
        <dp-day-calendar #dayCalendar
                         (onGoToCurrent)="goToCurrent()"
                         (onLeftNav)="onLeftNavClick($event)"
                         (onRightNav)="onRightNavClick($event)"
                         (onSelect)="dateSelected($event, 'day', selectEvent.SELECTION, false)"
                         *ngSwitchCase="'day'"
                         [config]="dayCalendarConfig"
                         [displayDate]="displayDate"
                         [ngModel]="_selected"
                         [theme]="theme">
        </dp-day-calendar>

        <dp-month-calendar #monthCalendar
                           (onGoToCurrent)="goToCurrent()"
                           (onLeftNav)="onLeftNavClick($event)"
                           (onRightNav)="onRightNavClick($event)"
                           (onSelect)="dateSelected($event, 'month', selectEvent.SELECTION, false)"
                           *ngSwitchCase="'month'"
                           [config]="dayCalendarConfig"
                           [displayDate]="displayDate"
                           [ngModel]="_selected"
                           [theme]="theme">
        </dp-month-calendar>

        <dp-time-select #timeSelect
                        (onChange)="dateSelected($event, 'second', selectEvent.SELECTION, true)"
                        *ngSwitchCase="'time'"
                        [config]="timeSelectConfig"
                        [ngModel]="_selected && _selected[0]"
                        [theme]="theme">
        </dp-time-select>

        <dp-day-time-calendar #daytimeCalendar
                              (onChange)="dateSelected($event, 'second', selectEvent.SELECTION, true)"
                              (onGoToCurrent)="goToCurrent()"
                              (onLeftNav)="onLeftNavClick($event)"
                              (onRightNav)="onRightNavClick($event)"
                              *ngSwitchCase="'daytime'"
                              [config]="dayTimeCalendarConfig"
                              [displayDate]="displayDate"
                              [ngModel]="_selected && _selected[0]"
                              [theme]="theme">
        </dp-day-time-calendar>
      </div>
    </div>
  </ng-template>
</div>
`,
      styles: ["dp-date-picker{display:inline-block}dp-date-picker.dp-material .dp-picker-input{box-sizing:border-box;height:30px;width:213px;font-size:13px;outline:none}dp-date-picker .dp-input-container{position:relative}dp-date-picker .dp-selected{background:#106CC8;color:#fff}.dp-popup{position:relative;display:inline-block;background:#FFFFFF;box-shadow:1px 1px 5px #0000001a;border-left:1px solid rgba(0,0,0,.1);border-right:1px solid rgba(0,0,0,.1);border-bottom:1px solid rgba(0,0,0,.1);white-space:nowrap}\n"]
    }]
  }], () => [{
    type: DatePickerService
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: UtilsService
  }, {
    type: ChangeDetectorRef
  }], {
    config: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    displayDate: [{
      type: Input
    }],
    theme: [{
      type: HostBinding,
      args: ["class"]
    }, {
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    minTime: [{
      type: Input
    }],
    maxTime: [{
      type: Input
    }],
    open: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    onChange: [{
      type: Output
    }],
    onGoToCurrent: [{
      type: Output
    }],
    onLeftNav: [{
      type: Output
    }],
    onRightNav: [{
      type: Output
    }],
    onSelect: [{
      type: Output
    }],
    calendarContainer: [{
      type: ViewChild,
      args: ["container"]
    }],
    dayCalendarRef: [{
      type: ViewChild,
      args: ["dayCalendar"]
    }],
    monthCalendarRef: [{
      type: ViewChild,
      args: ["monthCalendar"]
    }],
    dayTimeCalendarRef: [{
      type: ViewChild,
      args: ["daytimeCalendar"]
    }],
    timeSelectRef: [{
      type: ViewChild,
      args: ["timeSelect"]
    }],
    inputElement: [{
      type: ViewChild,
      args: ["inputElement"]
    }],
    onClick: [{
      type: HostListener,
      args: ["click"]
    }]
  });
})();
var DatePickerDirective = class _DatePickerDirective {
  constructor(viewContainerRef, elemRef, componentFactoryResolver, formControl, utilsService) {
    this.viewContainerRef = viewContainerRef;
    this.elemRef = elemRef;
    this.componentFactoryResolver = componentFactoryResolver;
    this.formControl = formControl;
    this.utilsService = utilsService;
    this.open = new EventEmitter();
    this.close = new EventEmitter();
    this.onChange = new EventEmitter();
    this.onGoToCurrent = new EventEmitter();
    this.onLeftNav = new EventEmitter();
    this.onRightNav = new EventEmitter();
    this.onSelect = new EventEmitter();
    this._mode = "day";
  }
  get config() {
    return this._config;
  }
  set config(config) {
    this._config = __spreadProps(__spreadValues({}, config), {
      hideInputContainer: true,
      inputElementContainer: config.inputElementContainer ?? this.elemRef
    });
    this.updateDatepickerConfig();
    this.markForCheck();
  }
  get theme() {
    return this._theme;
  }
  set theme(theme) {
    this._theme = theme;
    if (this.datePicker) {
      this.datePicker.theme = theme;
    }
    this.markForCheck();
  }
  get mode() {
    return this._mode;
  }
  set mode(mode) {
    this._mode = mode;
    if (this.datePicker) {
      this.datePicker.mode = mode;
    }
    this.markForCheck();
  }
  get minDate() {
    return this._minDate;
  }
  set minDate(minDate) {
    this._minDate = minDate;
    if (this.datePicker) {
      this.datePicker.minDate = minDate;
      this.datePicker.ngOnInit();
    }
    this.markForCheck();
  }
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(maxDate) {
    this._maxDate = maxDate;
    if (this.datePicker) {
      this.datePicker.maxDate = maxDate;
      this.datePicker.ngOnInit();
    }
    this.markForCheck();
  }
  get minTime() {
    return this._minTime;
  }
  set minTime(minTime) {
    this._minTime = minTime;
    if (this.datePicker) {
      this.datePicker.minTime = minTime;
      this.datePicker.ngOnInit();
    }
    this.markForCheck();
  }
  get maxTime() {
    return this._maxTime;
  }
  set maxTime(maxTime) {
    this._maxTime = maxTime;
    if (this.datePicker) {
      this.datePicker.maxTime = maxTime;
      this.datePicker.ngOnInit();
    }
    this.markForCheck();
  }
  get displayDate() {
    return this._displayDate;
  }
  set displayDate(displayDate) {
    this._displayDate = displayDate;
    this.updateDatepickerConfig();
    this.markForCheck();
  }
  ngOnInit() {
    this.datePicker = this.createDatePicker();
    this.api = this.datePicker.api;
    this.updateDatepickerConfig();
    this.attachModelToDatePicker();
    this.datePicker.theme = this.theme;
  }
  createDatePicker() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(DatePickerComponent);
    return this.viewContainerRef.createComponent(factory).instance;
  }
  attachModelToDatePicker() {
    if (!this.formControl) {
      return;
    }
    this.datePicker.onViewDateChange(this.formControl.value);
    this.formControl.valueChanges.subscribe((value) => {
      if (value !== this.datePicker.inputElementValue) {
        const strVal = this.utilsService.convertToString(value, this.datePicker.componentConfig.format);
        this.datePicker.onViewDateChange(strVal);
      }
    });
    let setup = true;
    this.datePicker.registerOnChange((value, changedByInput) => {
      if (value) {
        const isMultiselectEmpty = setup && Array.isArray(value) && !value.length;
        if (!isMultiselectEmpty && !changedByInput) {
          this.formControl.control.setValue(this.datePicker.inputElementValue);
        }
      }
      const errors = this.datePicker.validateFn(value);
      if (!setup) {
        this.formControl.control.markAsDirty({
          onlySelf: true
        });
      } else {
        setup = false;
      }
      if (errors) {
        if (errors.hasOwnProperty("format")) {
          const {
            given
          } = errors["format"];
          this.datePicker.inputElementValue = given;
          if (!changedByInput) {
            this.formControl.control.setValue(given);
          }
        }
        this.formControl.control.setErrors(errors);
      }
    });
  }
  onClick() {
    this.datePicker.onClick();
  }
  onFocus() {
    this.datePicker.inputFocused();
  }
  onEnter() {
    if (this.datePicker.componentConfig.closeOnEnter) {
      this.datePicker.hideCalendar();
    }
  }
  markForCheck() {
    if (this.datePicker) {
      this.datePicker.cd.markForCheck();
    }
  }
  updateDatepickerConfig() {
    if (this.datePicker) {
      this.datePicker.minDate = this.minDate;
      this.datePicker.maxDate = this.maxDate;
      this.datePicker.minTime = this.minTime;
      this.datePicker.maxTime = this.maxTime;
      this.datePicker.mode = this.mode || "day";
      this.datePicker.displayDate = this.displayDate;
      this.datePicker.config = this.config;
      this.datePicker.open = this.open;
      this.datePicker.close = this.close;
      this.datePicker.onChange = this.onChange;
      this.datePicker.onGoToCurrent = this.onGoToCurrent;
      this.datePicker.onLeftNav = this.onLeftNav;
      this.datePicker.onRightNav = this.onRightNav;
      this.datePicker.onSelect = this.onSelect;
      this.datePicker.init();
      if (this.datePicker.componentConfig.disableKeypress) {
        this.elemRef.nativeElement.setAttribute("readonly", true);
      } else {
        this.elemRef.nativeElement.removeAttribute("readonly");
      }
    }
  }
  static {
    this.ɵfac = function DatePickerDirective_Factory(t) {
      return new (t || _DatePickerDirective)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ComponentFactoryResolver$1), ɵɵdirectiveInject(NgControl, 8), ɵɵdirectiveInject(UtilsService));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _DatePickerDirective,
      selectors: [["", "dpDayPicker", ""]],
      hostBindings: function DatePickerDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function DatePickerDirective_click_HostBindingHandler() {
            return ctx.onClick();
          })("focus", function DatePickerDirective_focus_HostBindingHandler() {
            return ctx.onFocus();
          })("keydown.enter", function DatePickerDirective_keydown_enter_HostBindingHandler() {
            return ctx.onEnter();
          });
        }
      },
      inputs: {
        config: [InputFlags.None, "dpDayPicker", "config"],
        theme: "theme",
        mode: "mode",
        minDate: "minDate",
        maxDate: "maxDate",
        minTime: "minTime",
        maxTime: "maxTime",
        displayDate: "displayDate"
      },
      outputs: {
        open: "open",
        close: "close",
        onChange: "onChange",
        onGoToCurrent: "onGoToCurrent",
        onLeftNav: "onLeftNav",
        onRightNav: "onRightNav",
        onSelect: "onSelect"
      },
      exportAs: ["dpDayPicker"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatePickerDirective, [{
    type: Directive,
    args: [{
      exportAs: "dpDayPicker",
      selector: "[dpDayPicker]"
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: ElementRef
  }, {
    type: ComponentFactoryResolver$1
  }, {
    type: NgControl,
    decorators: [{
      type: Optional
    }]
  }, {
    type: UtilsService
  }], {
    open: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    onChange: [{
      type: Output
    }],
    onGoToCurrent: [{
      type: Output
    }],
    onLeftNav: [{
      type: Output
    }],
    onRightNav: [{
      type: Output
    }],
    onSelect: [{
      type: Output
    }],
    config: [{
      type: Input,
      args: ["dpDayPicker"]
    }],
    theme: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    minTime: [{
      type: Input
    }],
    maxTime: [{
      type: Input
    }],
    displayDate: [{
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click"]
    }],
    onFocus: [{
      type: HostListener,
      args: ["focus"]
    }],
    onEnter: [{
      type: HostListener,
      args: ["keydown.enter"]
    }]
  });
})();
var DpDatePickerModule = class _DpDatePickerModule {
  static {
    this.ɵfac = function DpDatePickerModule_Factory(t) {
      return new (t || _DpDatePickerModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _DpDatePickerModule,
      declarations: [DatePickerComponent, DatePickerDirective, DayCalendarComponent, MonthCalendarComponent, CalendarNavComponent, TimeSelectComponent, DayTimeCalendarComponent],
      imports: [CommonModule, FormsModule, OverlayModule],
      exports: [DatePickerComponent, DatePickerDirective, MonthCalendarComponent, DayCalendarComponent, TimeSelectComponent, DayTimeCalendarComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, FormsModule, OverlayModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DpDatePickerModule, [{
    type: NgModule,
    args: [{
      declarations: [DatePickerComponent, DatePickerDirective, DayCalendarComponent, MonthCalendarComponent, CalendarNavComponent, TimeSelectComponent, DayTimeCalendarComponent],
      imports: [CommonModule, FormsModule, OverlayModule],
      exports: [DatePickerComponent, DatePickerDirective, MonthCalendarComponent, DayCalendarComponent, TimeSelectComponent, DayTimeCalendarComponent]
    }]
  }], null, null);
})();
export {
  DatePickerComponent,
  DatePickerDirective,
  DayCalendarComponent,
  DayTimeCalendarComponent,
  DpDatePickerModule,
  ECalendarMode,
  ECalendarValue,
  MonthCalendarComponent,
  SelectEvent,
  TimeSelectComponent
};
//# sourceMappingURL=ng2-date-picker.js.map
