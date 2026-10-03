import {
  require_rive
} from "./chunk-DKYR4IXH.js";
import {
  require_react
} from "./chunk-4BPZ7PBZ.js";
import {
  __commonJS
} from "./chunk-G3PMV62Z.js";

// node_modules/@rive-app/react-canvas/dist/index.js
var require_dist = __commonJS({
  "node_modules/@rive-app/react-canvas/dist/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var observer;
    var React = require_react();
    var canvas = require_rive();
    function _interopDefaultLegacy(e) {
      return e && "object" == typeof e && "default" in e ? e : { default: e };
    }
    var React__default = _interopDefaultLegacy(React);
    function useDevicePixelRatio(e) {
      var t = e || getDevicePixelRatio(), n = React.useState(t), a = n[0], r = n[1];
      return React.useEffect(function() {
        if ("u" > typeof window && "matchMedia" in window) {
          var t2 = function() {
            r(e || getDevicePixelRatio());
          }, n2 = window.matchMedia("screen and (resolution: " + a + "dppx)");
          return n2.hasOwnProperty("addEventListener") ? n2.addEventListener("change", t2) : n2.addListener(t2), function() {
            n2.hasOwnProperty("removeEventListener") ? n2.removeEventListener("change", t2) : n2.removeListener(t2);
          };
        }
      }, [a, e]), a;
    }
    function getDevicePixelRatio() {
      return Math.min(Math.max(1, "u" > typeof window && "number" == typeof window.devicePixelRatio ? window.devicePixelRatio : 1), 3);
    }
    var FakeResizeObserver = (function() {
      function e() {
      }
      var t = e.prototype;
      return t.observe = function() {
      }, t.unobserve = function() {
      }, t.disconnect = function() {
      }, e;
    })();
    function throttle(e, t) {
      var n = 0;
      return function() {
        for (var a = this, r = arguments.length, u = Array(r), i = 0; i < r; i++) u[i] = arguments[i];
        clearTimeout(n), n = window.setTimeout(function() {
          return e.apply(a, u);
        }, t);
      };
    }
    var MyResizeObserver = globalThis.ResizeObserver || FakeResizeObserver;
    var hasResizeObserver = void 0 !== globalThis.ResizeObserver;
    var useResizeObserver = hasResizeObserver;
    var useWindowListener = !useResizeObserver;
    function useSize(e, t) {
      void 0 === t && (t = true);
      var n = React.useState({ width: 0, height: 0 }), a = n[0], r = n[1];
      React.useEffect(function() {
        if ("u" > typeof window && t) {
          var e2 = function() {
            r({ width: window.innerWidth, height: window.innerHeight });
          };
          return useWindowListener && (e2(), window.addEventListener("resize", e2)), function() {
            return window.removeEventListener("resize", e2);
          };
        }
      }, []);
      var u = React.useRef(new MyResizeObserver(throttle(function(e2) {
        useResizeObserver && r({ width: e2[e2.length - 1].contentRect.width, height: e2[e2.length - 1].contentRect.height });
      }, 0)));
      return React.useEffect(function() {
        var n2 = u.current;
        if (!t) return void n2.disconnect();
        var a2 = e.current;
        return e.current && useResizeObserver && n2.observe(e.current), function() {
          n2.disconnect(), a2 && useResizeObserver && n2.unobserve(a2);
        };
      }, [e, u]), a;
    }
    var defaultOptions = { useDevicePixelRatio: true, fitCanvasToArtboardHeight: false, useOffscreenRenderer: true, shouldResizeCanvasToContainer: true };
    function getOptions(e) {
      return Object.assign({}, defaultOptions, e);
    }
    function safeCleanup(e, t) {
      try {
        t();
      } catch (t2) {
        console.warn("[Rive] " + e + " threw while cleaning up Rive; contained. ", t2);
      }
    }
    function useResizeCanvas(e) {
      var t = e.riveLoaded, n = void 0 !== t && t, a = e.canvasElem, r = e.containerRef, u = e.options, i = e.onCanvasHasResized, o = e.artboardBounds, s = getOptions(void 0 === u ? {} : u), c = React.useState({ height: 0, width: 0 }), l = c[0], f = l.height, d = l.width, v = c[1], p = React.useState({ height: 0, width: 0 }), b = p[0], h = b.height, R = b.width, g = p[1], w = React.useState(true), y = w[0], m = w[1], V = s.fitCanvasToArtboardHeight, I = s.shouldResizeCanvasToContainer, C = s.useDevicePixelRatio, M = s.customDevicePixelRatio, O = useSize(r, I), x = useDevicePixelRatio(M), P = null != o ? o : {}, E = P.maxX, k = P.maxY, _ = React.useCallback(function() {
        var e2, t2, n2, a2, u2 = null != (e2 = null == (n2 = r.current) ? void 0 : n2.clientWidth) ? e2 : 0, i2 = null != (t2 = null == (a2 = r.current) ? void 0 : a2.clientHeight) ? t2 : 0;
        return V && o ? { width: u2, height: o.maxY / o.maxX * u2 } : { width: u2, height: i2 };
      }, [r, V, E, k]);
      React.useEffect(function() {
        if (I && r.current && n) {
          var e2 = _(), t2 = e2.width, u2 = e2.height, o2 = false;
          if (a) {
            var c2 = t2 !== d || u2 !== f;
            if (s.fitCanvasToArtboardHeight && c2 && (r.current.style.height = u2 + "px", o2 = true), s.useDevicePixelRatio) {
              var l2 = t2 * x !== R || u2 * x !== h;
              if (c2 || l2) {
                var p2 = x * t2, b2 = x * u2;
                a.width = p2, a.height = b2, a.style.width = t2 + "px", a.style.height = u2 + "px", g({ width: p2, height: b2 }), o2 = true;
              }
            } else c2 && (a.width = t2, a.height = u2, g({ width: t2, height: u2 }), o2 = true);
            v({ width: t2, height: u2 });
          }
          i && (y || o2) && i && i(), y && m(false);
        }
      }, [a, r, O, x, _, y, m, h, R, f, d, i, I, V, C, n]), React.useEffect(function() {
        g({ width: 0, height: 0 });
      }, [a]);
    }
    var FakeIntersectionObserver = (function() {
      function e() {
      }
      var t = e.prototype;
      return t.observe = function() {
      }, t.unobserve = function() {
      }, t.disconnect = function() {
      }, e;
    })();
    var MyIntersectionObserver = globalThis.IntersectionObserver || FakeIntersectionObserver;
    var ElementObserver = (function() {
      function e() {
        var e2 = this;
        this.elementsMap = /* @__PURE__ */ new Map(), this.onObserved = function(t2) {
          t2.forEach(function(t3) {
            var n = e2.elementsMap.get(t3.target);
            n && n(t3);
          });
        }, this.observer = new MyIntersectionObserver(this.onObserved);
      }
      var t = e.prototype;
      return t.registerCallback = function(e2, t2) {
        this.observer.observe(e2), this.elementsMap.set(e2, t2);
      }, t.removeCallback = function(e2) {
        this.observer.unobserve(e2), this.elementsMap.delete(e2);
      }, e;
    })();
    var getObserver = function() {
      return observer || (observer = new ElementObserver()), observer;
    };
    function useIntersectionObserver() {
      return { observe: React.useCallback(function(e, t) {
        getObserver().registerCallback(e, t);
      }, []), unobserve: React.useCallback(function(e) {
        getObserver().removeCallback(e);
      }, []) };
    }
    function _extends$2() {
      return (_extends$2 = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
        }
        return e;
      }).apply(this, arguments);
    }
    function _object_without_properties_loose$1(e, t) {
      if (null == e) return {};
      var n, a, r = {}, u = Object.getOwnPropertyNames(e);
      for (a = 0; a < u.length; a++) n = u[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
      return r;
    }
    function RiveComponent(e) {
      var t = e.setContainerRef, n = e.setCanvasRef, a = e.className, r = void 0 === a ? "" : a, u = e.style, i = e.children, o = _object_without_properties_loose$1(e, ["setContainerRef", "setCanvasRef", "className", "style", "children"]), s = _extends$2({ width: "100%", height: "100%" }, u);
      return React__default.default.createElement("div", _extends$2({ ref: t, className: r }, !r && { style: s }), React__default.default.createElement("canvas", _extends$2({ ref: n, style: { verticalAlign: "top", width: 0, height: 0 } }, o), i));
    }
    function useRive(e, t) {
      void 0 === t && (t = {});
      var n, a, r = React.useState(null), u = r[0], i = r[1], o = React.useRef(null), s = React.useRef(null), c = React.useRef(null), l = React.useState(null), f = l[0], d = l[1], v = !!e, p = getOptions(t), b = null != (n = null == e ? void 0 : e.useOffscreenRenderer) ? n : t.useOffscreenRenderer, h = !!(null == e ? void 0 : e.enableGPUCanvas) || !!(null == e || null == (a = e.riveFile) ? void 0 : a.deferredRequested), R = null != b ? b : !h && defaultOptions.useOffscreenRenderer;
      React.useEffect(function() {
        h && R && console.warn("[Rive] GPU Canvas and `useOffscreenRenderer` cannot both be on. A GPU Canvas session records for a single <canvas>, while the offscreen renderer shares one context across every <canvas> on the page. This instance falls back to immediate rendering and GPU Canvas content will not draw — drop the explicit `useOffscreenRenderer: true` to use it.");
      }, [h, R]);
      var g = useDevicePixelRatio(), w = React.useCallback(function() {
        if (f) {
          if (f.layout && f.layout.fit === canvas.Fit.Layout && u) {
            var e2 = g * f.layout.layoutScaleFactor;
            f.devicePixelRatioUsed = g, f.artboardWidth = (null == u ? void 0 : u.width) / e2, f.artboardHeight = (null == u ? void 0 : u.height) / e2;
          }
          f.startRendering(), f.resizeToCanvas();
        }
      }, [f, g]);
      useResizeCanvas({ riveLoaded: !!f, canvasElem: u, containerRef: o, options: p, onCanvasHasResized: w, artboardBounds: null == f ? void 0 : f.bounds });
      var y = React.useCallback(function(e2) {
        var t2 = s.current;
        s.current = e2, null === e2 && t2 && queueMicrotask(function() {
          s.current !== t2 && (t2.height = 0, t2.width = 0);
        }), i(e2);
      }, []);
      React.useEffect(function() {
        if (u && e) {
          var t2, n2 = null != f;
          if (null == f) {
            var a2 = e.onRiveReady, r2 = _object_without_properties_loose$1(e, ["onRiveReady"]);
            t2 = new canvas.Rive(_extends$2({}, r2, { useOffscreenRenderer: R, canvas: u })), null != c.current && safeCleanup("replacing a previous instance", function() {
              return c.current.cleanup();
            }), c.current = t2, t2.on(canvas.EventType.Load, function() {
              n2 = true, a2 && a2(t2), u ? d(t2) : safeCleanup("unmounted before load", function() {
                return t2.cleanup();
              });
            });
          }
          return function() {
            n2 || safeCleanup("teardown before load", function() {
              return null == t2 ? void 0 : t2.cleanup();
            });
          };
        }
      }, [u, v, f]);
      var m = React.useCallback(function(e2) {
        o.current = e2;
      }, []), V = useIntersectionObserver(), I = V.observe, C = V.unobserve;
      React.useEffect(function() {
        var e2, t2 = false, n2 = function() {
          if (u && t2) {
            var e3 = u.getBoundingClientRect();
            e3.width > 0 && e3.height > 0 && e3.top < (window.innerHeight || document.documentElement.clientHeight) && e3.bottom > 0 && e3.left < (window.innerWidth || document.documentElement.clientWidth) && e3.right > 0 && (null == f || f.startRendering(), t2 = false);
          }
        };
        return u && false !== p.shouldUseIntersectionObserver && I(u, function(a2) {
          a2.isIntersecting ? f && f.startRendering() : f && f.stopRendering(), t2 = !a2.isIntersecting, clearTimeout(e2), a2.isIntersecting || 0 !== a2.boundingClientRect.width || (e2 = setTimeout(n2, 10));
        }), function() {
          clearTimeout(e2), u && C(u);
        };
      }, [I, C, f, u, p.shouldUseIntersectionObserver]), React.useEffect(function() {
        return function() {
          f && (safeCleanup("unmount", function() {
            return f.cleanup();
          }), d(null));
        };
      }, [f, u]), React.useEffect(function() {
        return function() {
          null != c.current && safeCleanup("final unmount", function() {
            return c.current.cleanup();
          });
        };
      }, []);
      var M = null == e ? void 0 : e.animations;
      React.useEffect(function() {
        f && M && (f.isPlaying ? (f.stop(f.animationNames), f.play(M)) : f.isPaused && (f.stop(f.animationNames), f.pause(M)));
      }, [M, f]);
      var O = React.useCallback(function(e2) {
        return React__default.default.createElement(RiveComponent, _extends$2({ setContainerRef: m, setCanvasRef: y }, e2));
      }, [y, m]);
      return { canvas: u, container: o.current, setCanvasRef: y, setContainerRef: m, rive: f, RiveComponent: O };
    }
    function _extends$1() {
      return (_extends$1 = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
        }
        return e;
      }).apply(this, arguments);
    }
    function _object_without_properties_loose(e, t) {
      if (null == e) return {};
      var n, a, r = {}, u = Object.getOwnPropertyNames(e);
      for (a = 0; a < u.length; a++) n = u[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
      return r;
    }
    var Rive = function(e) {
      var t = e.src, n = e.artboard, a = e.stateMachine, r = e.animations, u = e.stateMachines, i = e.layout, o = e.useOffscreenRenderer, s = e.enableGPUCanvas, c = e.shouldDisableRiveListeners, l = e.shouldResizeCanvasToContainer, f = e.automaticallyHandleEvents, d = e.children, v = _object_without_properties_loose(e, ["src", "artboard", "stateMachine", "animations", "stateMachines", "layout", "useOffscreenRenderer", "enableGPUCanvas", "shouldDisableRiveListeners", "shouldResizeCanvasToContainer", "automaticallyHandleEvents", "children"]), p = useRive({ src: t, artboard: n, stateMachine: a, animations: r, layout: i, stateMachines: u, autoplay: true, shouldDisableRiveListeners: void 0 !== c && c, automaticallyHandleEvents: void 0 !== f && f, enableGPUCanvas: s }, _extends$1({ shouldResizeCanvasToContainer: void 0 === l || l }, void 0 !== o && { useOffscreenRenderer: o })).RiveComponent;
      return React__default.default.createElement(p, v, d);
    };
    function useStateMachineInput(e, t, n, a) {
      var r = React.useState(null), u = r[0], i = r[1];
      return React.useEffect(function() {
        var r2 = function() {
          if (e && t && n || i(null), e && t && n) {
            var r3 = e.stateMachineInputs(t);
            if (r3) {
              var u2 = r3.find(function(e2) {
                return e2.name === n;
              });
              void 0 !== a && u2 && (u2.value = a), i(u2 || null);
            }
          } else i(null);
        };
        r2(), e && e.on(canvas.EventType.Load, function() {
          r2();
        });
      }, [e]), u;
    }
    function useViewModel(e, t) {
      var n = null != t ? t : {}, a = n.name, r = n.useDefault, u = React.useState(null), i = u[0], o = u[1];
      return React.useEffect(function() {
        var t2 = function() {
          if (!e) return void o(null);
          var t3 = null;
          o(t3 = null != a ? (null == e.viewModelByName ? void 0 : e.viewModelByName.call(e, a)) || null : e.defaultViewModel() || null);
        };
        return t2(), e && e.on(canvas.EventType.Load, t2), function() {
          e && e.off(canvas.EventType.Load, t2);
        };
      }, [e, a, void 0 !== r && r]), i;
    }
    var pendingBinds = /* @__PURE__ */ new WeakSet();
    function scheduleBind(e) {
      pendingBinds.has(e) || (pendingBinds.add(e), queueMicrotask(function() {
        pendingBinds.delete(e), e.bind();
      }));
    }
    function resolveViewModelInstance(e, t) {
      var n = t.name, a = t.useNew, r = t.instance;
      return void 0 !== r ? r : e ? null != n ? e.instanceByName(n) || null : a ? (null == e.instance ? void 0 : e.instance.call(e)) || null : (null == e.defaultInstance ? void 0 : e.defaultInstance.call(e)) || null : null;
    }
    function useViewModelInstance(e, t) {
      var n = null != t ? t : {}, a = n.name, r = n.useDefault, u = n.useNew, i = void 0 !== u && u, o = n.rive, s = React.useState(null), c = s[0], l = s[1];
      return React.useEffect(function() {
        if (!e) return void l(null);
        var t2 = resolveViewModelInstance(e, { name: a, useNew: i });
        l(t2), o && t2 && o.viewModelInstance !== t2 && (o.setViewModelInstance(t2), scheduleBind(o));
      }, [e, a, void 0 !== r && r, i, o]), c;
    }
    function useGlobalViewModelInstance(e, t, n) {
      var a = null != n ? n : {}, r = a.instanceName, u = a.useNew, i = void 0 !== u && u, o = a.instance, s = a.rive, c = React.useState(null), l = c[0], f = c[1];
      return React.useEffect(function() {
        var n2 = resolveViewModelInstance(e, { name: r, useNew: i, instance: o });
        f(n2), s && t && n2 && s.setGlobalViewModelInstance(t, n2) && scheduleBind(s);
      }, [e, t, r, i, o, s]), l;
    }
    function _extends() {
      return (_extends = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
        }
        return e;
      }).apply(this, arguments);
    }
    function useViewModelInstanceProperty(e, t, n) {
      var a = React.useState(null), r = a[0], u = a[1], i = React.useState(n.defaultValue), o = i[0], s = i[1], c = React.useState(null), l = c[0], f = c[1], d = React.useRef(null), v = React.useRef(e), p = React.useRef(n);
      React.useEffect(function() {
        p.current = n;
      }, [n]);
      var b = React.useCallback(function() {
        var e2 = d.current, t2 = v.current, n2 = p.current;
        if (!e2 || !t2) return u(null), s(n2.defaultValue), f(null), function() {
        };
        var a2 = n2.getProperty(e2, t2);
        if (a2) {
          u(a2), s(n2.getValue(a2)), n2.getExtendedData && f(n2.getExtendedData(a2));
          var r2 = function() {
            s(n2.getValue(a2)), n2.getExtendedData && f(n2.getExtendedData(a2)), n2.onPropertyEvent && n2.onPropertyEvent();
          };
          return a2.on(r2), function() {
            a2.off(r2);
          };
        }
        return function() {
        };
      }, []);
      React.useEffect(function() {
        return d.current = t, v.current = e, b();
      }, [t, e, b]);
      var h = React.useCallback(function(e2) {
        if (r && d.current === t) try {
          e2(r), p.current.getExtendedData && f(p.current.getExtendedData(r));
          return;
        } catch (e3) {
        }
        if (d.current) try {
          var n2 = p.current.getProperty(d.current, v.current);
          n2 && (u(n2), e2(n2), p.current.getExtendedData && f(p.current.getExtendedData(n2)));
        } catch (e3) {
        }
      }, [r, t]), R = React.useMemo(function() {
        return p.current.buildPropertyOperations(h);
      }, [h]), g = _extends({ value: o }, R);
      return n.getExtendedData && (g.extendedData = l), g;
    }
    function useViewModelInstanceNumber(e, t) {
      var n = useViewModelInstanceProperty(e, t, { getProperty: React.useCallback(function(e2, t2) {
        return e2.number(t2);
      }, []), getValue: React.useCallback(function(e2) {
        return e2.value;
      }, []), defaultValue: null, buildPropertyOperations: React.useCallback(function(e2) {
        return { setValue: function(t2) {
          e2(function(e3) {
            e3.value = t2;
          });
        } };
      }, []) });
      return { value: n.value, setValue: n.setValue };
    }
    function useViewModelInstanceString(e, t) {
      var n = useViewModelInstanceProperty(e, t, { getProperty: React.useCallback(function(e2, t2) {
        return e2.string(t2);
      }, []), getValue: React.useCallback(function(e2) {
        return e2.value;
      }, []), defaultValue: null, buildPropertyOperations: React.useCallback(function(e2) {
        return { setValue: function(t2) {
          e2(function(e3) {
            e3.value = t2;
          });
        } };
      }, []) });
      return { value: n.value, setValue: n.setValue };
    }
    function useViewModelInstanceBoolean(e, t) {
      var n = useViewModelInstanceProperty(e, t, { getProperty: React.useCallback(function(e2, t2) {
        return e2.boolean(t2);
      }, []), getValue: React.useCallback(function(e2) {
        return e2.value;
      }, []), defaultValue: null, buildPropertyOperations: React.useCallback(function(e2) {
        return { setValue: function(t2) {
          e2(function(e3) {
            e3.value = t2;
          });
        } };
      }, []) });
      return { value: n.value, setValue: n.setValue };
    }
    function useViewModelInstanceColor(e, t) {
      var n = useViewModelInstanceProperty(e, t, { getProperty: React.useCallback(function(e2, t2) {
        return e2.color(t2);
      }, []), getValue: React.useCallback(function(e2) {
        return e2.value;
      }, []), defaultValue: null, buildPropertyOperations: React.useCallback(function(e2) {
        return { setValue: function(t2) {
          e2(function(e3) {
            e3.value = t2;
          });
        }, setRgb: function(t2, n2, a) {
          e2(function(e3) {
            e3.rgb(t2, n2, a);
          });
        }, setRgba: function(t2, n2, a, r) {
          e2(function(e3) {
            e3.rgba(t2, n2, a, r);
          });
        }, setAlpha: function(t2) {
          e2(function(e3) {
            e3.alpha(t2);
          });
        }, setOpacity: function(t2) {
          e2(function(e3) {
            e3.opacity(t2);
          });
        } };
      }, []) });
      return { value: n.value, setValue: n.setValue, setRgb: n.setRgb, setRgba: n.setRgba, setAlpha: n.setAlpha, setOpacity: n.setOpacity };
    }
    function useViewModelInstanceEnum(e, t) {
      var n = useViewModelInstanceProperty(e, t, { getProperty: React.useCallback(function(e2, t2) {
        return e2.enum(t2);
      }, []), getValue: React.useCallback(function(e2) {
        return e2.value;
      }, []), defaultValue: null, getExtendedData: React.useCallback(function(e2) {
        return e2.values;
      }, []), buildPropertyOperations: React.useCallback(function(e2) {
        return { setValue: function(t2) {
          e2(function(e3) {
            e3.value = t2;
          });
        } };
      }, []) });
      return { value: n.value, values: n.extendedData || [], setValue: n.setValue };
    }
    function useViewModelInstanceTrigger(e, t, n) {
      var a = (null != n ? n : {}).onTrigger;
      return { trigger: useViewModelInstanceProperty(e, t, { getProperty: React.useCallback(function(e2, t2) {
        return e2.trigger(t2);
      }, []), getValue: React.useCallback(function() {
      }, []), defaultValue: null, onPropertyEvent: a, buildPropertyOperations: React.useCallback(function(e2) {
        return { trigger: function() {
          e2(function(e3) {
            e3.trigger();
          });
        } };
      }, []) }).trigger };
    }
    function useViewModelInstanceImage(e, t) {
      return { setValue: useViewModelInstanceProperty(e, t, { getProperty: React.useCallback(function(e2, t2) {
        return e2.image(t2);
      }, []), getValue: React.useCallback(function() {
      }, []), defaultValue: null, buildPropertyOperations: React.useCallback(function(e2) {
        return { setValue: function(t2) {
          e2(function(e3) {
            e3.value = t2;
          });
        } };
      }, []) }).setValue };
    }
    function useViewModelInstanceFont(e, t) {
      return { setValue: useViewModelInstanceProperty(e, t, { getProperty: React.useCallback(function(e2, t2) {
        return e2.font(t2);
      }, []), getValue: React.useCallback(function() {
      }, []), defaultValue: null, buildPropertyOperations: React.useCallback(function(e2) {
        return { setValue: function(t2) {
          e2(function(e3) {
            e3.value = t2;
          });
        } };
      }, []) }).setValue };
    }
    function useViewModelInstanceList(e, t) {
      var n, a = React.useState(0)[1], r = useViewModelInstanceProperty(e, t, { getProperty: React.useCallback(function(e2, t2) {
        return e2.list(t2);
      }, []), getValue: React.useCallback(function(e2) {
        return e2.length;
      }, []), defaultValue: null, onPropertyEvent: function() {
        a(function(e2) {
          return e2 + 1;
        });
      }, buildPropertyOperations: React.useCallback(function(e2) {
        return { addInstance: function(t2) {
          e2(function(e3) {
            return e3.addInstance(t2);
          });
        }, addInstanceAt: function(t2, n2) {
          var a2 = false;
          return e2(function(e3) {
            a2 = e3.addInstanceAt(t2, n2);
          }), a2;
        }, removeInstance: function(t2) {
          e2(function(e3) {
            return e3.removeInstance(t2);
          });
        }, removeInstanceAt: function(t2) {
          e2(function(e3) {
            return e3.removeInstanceAt(t2);
          });
        }, getInstanceAt: function(t2) {
          var n2 = null;
          return e2(function(e3) {
            n2 = e3.instanceAt(t2);
          }), n2;
        }, swap: function(t2, n2) {
          e2(function(e3) {
            return e3.swap(t2, n2);
          });
        } };
      }, []) });
      return { length: null != (n = r.value) ? n : 0, addInstance: r.addInstance, addInstanceAt: r.addInstanceAt, removeInstance: r.removeInstance, removeInstanceAt: r.removeInstanceAt, getInstanceAt: r.getInstanceAt, swap: r.swap };
    }
    function asyncGeneratorStep(e, t, n, a, r, u, i) {
      try {
        var o = e[u](i), s = o.value;
      } catch (e2) {
        n(e2);
        return;
      }
      o.done ? t(s) : Promise.resolve(s).then(a, r);
    }
    function _async_to_generator(e) {
      return function() {
        var t = this, n = arguments;
        return new Promise(function(a, r) {
          var u = e.apply(t, n);
          function i(e2) {
            asyncGeneratorStep(u, a, r, i, o, "next", e2);
          }
          function o(e2) {
            asyncGeneratorStep(u, a, r, i, o, "throw", e2);
          }
          i(void 0);
        });
      };
    }
    function _ts_generator(e, t) {
      var n, a, r, u = { label: 0, sent: function() {
        if (1 & r[0]) throw r[1];
        return r[1];
      }, trys: [], ops: [] }, i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype), o = Object.defineProperty;
      return o(i, "next", { value: s(0) }), o(i, "throw", { value: s(1) }), o(i, "return", { value: s(2) }), "function" == typeof Symbol && o(i, Symbol.iterator, { value: function() {
        return this;
      } }), i;
      function s(o2) {
        return function(s2) {
          var c = [o2, s2];
          if (n) throw TypeError("Generator is already executing.");
          for (; i && (i = 0, c[0] && (u = 0)), u; ) try {
            if (n = 1, a && (r = 2 & c[0] ? a.return : c[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, c[1])).done) return r;
            switch (a = 0, r && (c = [2 & c[0], r.value]), c[0]) {
              case 0:
              case 1:
                r = c;
                break;
              case 4:
                return u.label++, { value: c[1], done: false };
              case 5:
                u.label++, a = c[1], c = [0];
                continue;
              case 7:
                c = u.ops.pop(), u.trys.pop();
                continue;
              default:
                if (!(r = (r = u.trys).length > 0 && r[r.length - 1]) && (6 === c[0] || 2 === c[0])) {
                  u = 0;
                  continue;
                }
                if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                  u.label = c[1];
                  break;
                }
                if (6 === c[0] && u.label < r[1]) {
                  u.label = r[1], r = c;
                  break;
                }
                if (r && u.label < r[2]) {
                  u.label = r[2], u.ops.push(c);
                  break;
                }
                r[2] && u.ops.pop(), u.trys.pop();
                continue;
            }
            c = t.call(e, u);
          } catch (e2) {
            c = [6, e2], a = 0;
          } finally {
            n = r = 0;
          }
          if (5 & c[0]) throw c[1];
          return { value: c[0] ? c[1] : void 0, done: true };
        };
      }
    }
    function useRiveFile(e) {
      var t = React.useState(null), n = t[0], a = t[1], r = React.useState("idle"), u = r[0], i = r[1];
      return React.useEffect(function() {
        var t2 = null;
        return _async_to_generator(function() {
          return _ts_generator(this, function(n2) {
            try {
              i("loading"), (t2 = new canvas.RiveFile(e)).init(), t2.on(canvas.EventType.Load, function() {
                null == t2 || t2.getInstance(), a(t2), i("success");
              }), t2.on(canvas.EventType.LoadError, function() {
                i("failed");
              }), a(t2);
            } catch (e2) {
              console.error(e2), i("failed");
            }
            return [2];
          });
        })(), function() {
          safeCleanup("RiveFile unmount", function() {
            return null == t2 ? void 0 : t2.cleanup();
          });
        };
      }, [e.src, e.buffer, e.enableGPUCanvas]), { riveFile: n, status: u };
    }
    function useViewModelInstanceArtboard(e, t) {
      return { setValue: useViewModelInstanceProperty(e, t, { getProperty: React.useCallback(function(e2, t2) {
        return e2.artboard(t2);
      }, []), getValue: React.useCallback(function() {
      }, []), defaultValue: null, buildPropertyOperations: React.useCallback(function(e2) {
        return { setValue: function(t2) {
          e2(function(e3) {
            e3.value = t2;
          });
        } };
      }, []) }).setValue };
    }
    exports.default = Rive, exports.useGlobalViewModelInstance = useGlobalViewModelInstance, exports.useResizeCanvas = useResizeCanvas, exports.useRive = useRive, exports.useRiveFile = useRiveFile, exports.useStateMachineInput = useStateMachineInput, exports.useViewModel = useViewModel, exports.useViewModelInstance = useViewModelInstance, exports.useViewModelInstanceArtboard = useViewModelInstanceArtboard, exports.useViewModelInstanceBoolean = useViewModelInstanceBoolean, exports.useViewModelInstanceColor = useViewModelInstanceColor, exports.useViewModelInstanceEnum = useViewModelInstanceEnum, exports.useViewModelInstanceFont = useViewModelInstanceFont, exports.useViewModelInstanceImage = useViewModelInstanceImage, exports.useViewModelInstanceList = useViewModelInstanceList, exports.useViewModelInstanceNumber = useViewModelInstanceNumber, exports.useViewModelInstanceString = useViewModelInstanceString, exports.useViewModelInstanceTrigger = useViewModelInstanceTrigger, Object.keys(canvas).forEach(function(e) {
      "default" === e || exports.hasOwnProperty(e) || Object.defineProperty(exports, e, { enumerable: true, get: function() {
        return canvas[e];
      } });
    });
  }
});
export default require_dist();
//# sourceMappingURL=@rive-app_react-canvas.js.map
