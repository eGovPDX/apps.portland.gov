import { jsxs as w, jsx as c, Fragment as Ct } from "react/jsx-runtime";
import * as I from "react";
import Ce, { useState as Oe, useRef as tt, useEffect as nt, useCallback as mt, useLayoutEffect as Ba } from "react";
import * as Wa from "react-dom";
function yo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ya(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var a = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, a.get ? a : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var pt = { exports: {} }, ht = { exports: {} }, ee = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pr;
function xo() {
  if (Pr) return ee;
  Pr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function E(R) {
    if (typeof R == "object" && R !== null) {
      var X = R.$$typeof;
      switch (X) {
        case t:
          switch (R = R.type, R) {
            case u:
            case f:
            case r:
            case i:
            case a:
            case m:
              return R;
            default:
              switch (R = R && R.$$typeof, R) {
                case l:
                case d:
                case b:
                case p:
                case o:
                  return R;
                default:
                  return X;
              }
          }
        case n:
          return X;
      }
    }
  }
  function _(R) {
    return E(R) === f;
  }
  return ee.AsyncMode = u, ee.ConcurrentMode = f, ee.ContextConsumer = l, ee.ContextProvider = o, ee.Element = t, ee.ForwardRef = d, ee.Fragment = r, ee.Lazy = b, ee.Memo = p, ee.Portal = n, ee.Profiler = i, ee.StrictMode = a, ee.Suspense = m, ee.isAsyncMode = function(R) {
    return _(R) || E(R) === u;
  }, ee.isConcurrentMode = _, ee.isContextConsumer = function(R) {
    return E(R) === l;
  }, ee.isContextProvider = function(R) {
    return E(R) === o;
  }, ee.isElement = function(R) {
    return typeof R == "object" && R !== null && R.$$typeof === t;
  }, ee.isForwardRef = function(R) {
    return E(R) === d;
  }, ee.isFragment = function(R) {
    return E(R) === r;
  }, ee.isLazy = function(R) {
    return E(R) === b;
  }, ee.isMemo = function(R) {
    return E(R) === p;
  }, ee.isPortal = function(R) {
    return E(R) === n;
  }, ee.isProfiler = function(R) {
    return E(R) === i;
  }, ee.isStrictMode = function(R) {
    return E(R) === a;
  }, ee.isSuspense = function(R) {
    return E(R) === m;
  }, ee.isValidElementType = function(R) {
    return typeof R == "string" || typeof R == "function" || R === r || R === f || R === i || R === a || R === m || R === h || typeof R == "object" && R !== null && (R.$$typeof === b || R.$$typeof === p || R.$$typeof === o || R.$$typeof === l || R.$$typeof === d || R.$$typeof === x || R.$$typeof === C || R.$$typeof === O || R.$$typeof === g);
  }, ee.typeOf = E, ee;
}
var te = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ar;
function wo() {
  return Ar || (Ar = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function E(q) {
      return typeof q == "string" || typeof q == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      q === r || q === f || q === i || q === a || q === m || q === h || typeof q == "object" && q !== null && (q.$$typeof === b || q.$$typeof === p || q.$$typeof === o || q.$$typeof === l || q.$$typeof === d || q.$$typeof === x || q.$$typeof === C || q.$$typeof === O || q.$$typeof === g);
    }
    function _(q) {
      if (typeof q == "object" && q !== null) {
        var de = q.$$typeof;
        switch (de) {
          case t:
            var dt = q.type;
            switch (dt) {
              case u:
              case f:
              case r:
              case i:
              case a:
              case m:
                return dt;
              default:
                var Sr = dt && dt.$$typeof;
                switch (Sr) {
                  case l:
                  case d:
                  case b:
                  case p:
                  case o:
                    return Sr;
                  default:
                    return de;
                }
            }
          case n:
            return de;
        }
      }
    }
    var R = u, X = f, M = l, L = o, Y = t, T = d, W = r, $ = b, y = p, v = n, k = i, j = a, P = m, F = !1;
    function D(q) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), N(q) || _(q) === u;
    }
    function N(q) {
      return _(q) === f;
    }
    function A(q) {
      return _(q) === l;
    }
    function z(q) {
      return _(q) === o;
    }
    function B(q) {
      return typeof q == "object" && q !== null && q.$$typeof === t;
    }
    function H(q) {
      return _(q) === d;
    }
    function G(q) {
      return _(q) === r;
    }
    function Z(q) {
      return _(q) === b;
    }
    function J(q) {
      return _(q) === p;
    }
    function V(q) {
      return _(q) === n;
    }
    function K(q) {
      return _(q) === i;
    }
    function Q(q) {
      return _(q) === a;
    }
    function re(q) {
      return _(q) === m;
    }
    te.AsyncMode = R, te.ConcurrentMode = X, te.ContextConsumer = M, te.ContextProvider = L, te.Element = Y, te.ForwardRef = T, te.Fragment = W, te.Lazy = $, te.Memo = y, te.Portal = v, te.Profiler = k, te.StrictMode = j, te.Suspense = P, te.isAsyncMode = D, te.isConcurrentMode = N, te.isContextConsumer = A, te.isContextProvider = z, te.isElement = B, te.isForwardRef = H, te.isFragment = G, te.isLazy = Z, te.isMemo = J, te.isPortal = V, te.isProfiler = K, te.isStrictMode = Q, te.isSuspense = re, te.isValidElementType = E, te.typeOf = _;
  }()), te;
}
var Ir;
function Ua() {
  return Ir || (Ir = 1, process.env.NODE_ENV === "production" ? ht.exports = xo() : ht.exports = wo()), ht.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Kt, Fr;
function No() {
  if (Fr) return Kt;
  Fr = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var o = {}, l = 0; l < 10; l++)
        o["_" + String.fromCharCode(l)] = l;
      var u = Object.getOwnPropertyNames(o).map(function(d) {
        return o[d];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        f[d] = d;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Kt = a() ? Object.assign : function(i, o) {
    for (var l, u = r(i), f, d = 1; d < arguments.length; d++) {
      l = Object(arguments[d]);
      for (var m in l)
        t.call(l, m) && (u[m] = l[m]);
      if (e) {
        f = e(l);
        for (var h = 0; h < f.length; h++)
          n.call(l, f[h]) && (u[f[h]] = l[f[h]]);
      }
    }
    return u;
  }, Kt;
}
var Jt, Mr;
function Yn() {
  if (Mr) return Jt;
  Mr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Jt = e, Jt;
}
var Zt, Lr;
function Ha() {
  return Lr || (Lr = 1, Zt = Function.call.bind(Object.prototype.hasOwnProperty)), Zt;
}
var Qt, Dr;
function Ro() {
  if (Dr) return Qt;
  Dr = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Yn(), n = {}, r = /* @__PURE__ */ Ha();
    e = function(i) {
      var o = "Warning: " + i;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function a(i, o, l, u, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in i)
        if (r(i, d)) {
          var m;
          try {
            if (typeof i[d] != "function") {
              var h = Error(
                (u || "React class") + ": " + l + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            m = i[d](o, d, u, l, null, t);
          } catch (b) {
            m = b;
          }
          if (m && !(m instanceof Error) && e(
            (u || "React class") + ": type specification of " + l + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in n)) {
            n[m.message] = !0;
            var p = f ? f() : "";
            e(
              "Failed " + l + " type: " + m.message + (p ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Qt = a, Qt;
}
var en, jr;
function To() {
  if (jr) return en;
  jr = 1;
  var e = Ua(), t = No(), n = /* @__PURE__ */ Yn(), r = /* @__PURE__ */ Ha(), a = /* @__PURE__ */ Ro(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(l) {
    var u = "Warning: " + l;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return en = function(l, u) {
    var f = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function m(N) {
      var A = N && (f && N[f] || N[d]);
      if (typeof A == "function")
        return A;
    }
    var h = "<<anonymous>>", p = {
      array: C("array"),
      bigint: C("bigint"),
      bool: C("boolean"),
      func: C("function"),
      number: C("number"),
      object: C("object"),
      string: C("string"),
      symbol: C("symbol"),
      any: O(),
      arrayOf: E,
      element: _(),
      elementType: R(),
      instanceOf: X,
      node: T(),
      objectOf: L,
      oneOf: M,
      oneOfType: Y,
      shape: $,
      exact: y
    };
    function b(N, A) {
      return N === A ? N !== 0 || 1 / N === 1 / A : N !== N && A !== A;
    }
    function g(N, A) {
      this.message = N, this.data = A && typeof A == "object" ? A : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function x(N) {
      if (process.env.NODE_ENV !== "production")
        var A = {}, z = 0;
      function B(G, Z, J, V, K, Q, re) {
        if (V = V || h, Q = Q || J, re !== n) {
          if (u) {
            var q = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw q.name = "Invariant Violation", q;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var de = V + ":" + J;
            !A[de] && // Avoid spamming the console because they are often not actionable except for lib authors
            z < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + Q + "` prop on `" + V + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), A[de] = !0, z++);
          }
        }
        return Z[J] == null ? G ? Z[J] === null ? new g("The " + K + " `" + Q + "` is marked as required " + ("in `" + V + "`, but its value is `null`.")) : new g("The " + K + " `" + Q + "` is marked as required in " + ("`" + V + "`, but its value is `undefined`.")) : null : N(Z, J, V, K, Q);
      }
      var H = B.bind(null, !1);
      return H.isRequired = B.bind(null, !0), H;
    }
    function C(N) {
      function A(z, B, H, G, Z, J) {
        var V = z[B], K = j(V);
        if (K !== N) {
          var Q = P(V);
          return new g(
            "Invalid " + G + " `" + Z + "` of type " + ("`" + Q + "` supplied to `" + H + "`, expected ") + ("`" + N + "`."),
            { expectedType: N }
          );
        }
        return null;
      }
      return x(A);
    }
    function O() {
      return x(o);
    }
    function E(N) {
      function A(z, B, H, G, Z) {
        if (typeof N != "function")
          return new g("Property `" + Z + "` of component `" + H + "` has invalid PropType notation inside arrayOf.");
        var J = z[B];
        if (!Array.isArray(J)) {
          var V = j(J);
          return new g("Invalid " + G + " `" + Z + "` of type " + ("`" + V + "` supplied to `" + H + "`, expected an array."));
        }
        for (var K = 0; K < J.length; K++) {
          var Q = N(J, K, H, G, Z + "[" + K + "]", n);
          if (Q instanceof Error)
            return Q;
        }
        return null;
      }
      return x(A);
    }
    function _() {
      function N(A, z, B, H, G) {
        var Z = A[z];
        if (!l(Z)) {
          var J = j(Z);
          return new g("Invalid " + H + " `" + G + "` of type " + ("`" + J + "` supplied to `" + B + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(N);
    }
    function R() {
      function N(A, z, B, H, G) {
        var Z = A[z];
        if (!e.isValidElementType(Z)) {
          var J = j(Z);
          return new g("Invalid " + H + " `" + G + "` of type " + ("`" + J + "` supplied to `" + B + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(N);
    }
    function X(N) {
      function A(z, B, H, G, Z) {
        if (!(z[B] instanceof N)) {
          var J = N.name || h, V = D(z[B]);
          return new g("Invalid " + G + " `" + Z + "` of type " + ("`" + V + "` supplied to `" + H + "`, expected ") + ("instance of `" + J + "`."));
        }
        return null;
      }
      return x(A);
    }
    function M(N) {
      if (!Array.isArray(N))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), o;
      function A(z, B, H, G, Z) {
        for (var J = z[B], V = 0; V < N.length; V++)
          if (b(J, N[V]))
            return null;
        var K = JSON.stringify(N, function(re, q) {
          var de = P(q);
          return de === "symbol" ? String(q) : q;
        });
        return new g("Invalid " + G + " `" + Z + "` of value `" + String(J) + "` " + ("supplied to `" + H + "`, expected one of " + K + "."));
      }
      return x(A);
    }
    function L(N) {
      function A(z, B, H, G, Z) {
        if (typeof N != "function")
          return new g("Property `" + Z + "` of component `" + H + "` has invalid PropType notation inside objectOf.");
        var J = z[B], V = j(J);
        if (V !== "object")
          return new g("Invalid " + G + " `" + Z + "` of type " + ("`" + V + "` supplied to `" + H + "`, expected an object."));
        for (var K in J)
          if (r(J, K)) {
            var Q = N(J, K, H, G, Z + "." + K, n);
            if (Q instanceof Error)
              return Q;
          }
        return null;
      }
      return x(A);
    }
    function Y(N) {
      if (!Array.isArray(N))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var A = 0; A < N.length; A++) {
        var z = N[A];
        if (typeof z != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + F(z) + " at index " + A + "."
          ), o;
      }
      function B(H, G, Z, J, V) {
        for (var K = [], Q = 0; Q < N.length; Q++) {
          var re = N[Q], q = re(H, G, Z, J, V, n);
          if (q == null)
            return null;
          q.data && r(q.data, "expectedType") && K.push(q.data.expectedType);
        }
        var de = K.length > 0 ? ", expected one of type [" + K.join(", ") + "]" : "";
        return new g("Invalid " + J + " `" + V + "` supplied to " + ("`" + Z + "`" + de + "."));
      }
      return x(B);
    }
    function T() {
      function N(A, z, B, H, G) {
        return v(A[z]) ? null : new g("Invalid " + H + " `" + G + "` supplied to " + ("`" + B + "`, expected a ReactNode."));
      }
      return x(N);
    }
    function W(N, A, z, B, H) {
      return new g(
        (N || "React class") + ": " + A + " type `" + z + "." + B + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + H + "`."
      );
    }
    function $(N) {
      function A(z, B, H, G, Z) {
        var J = z[B], V = j(J);
        if (V !== "object")
          return new g("Invalid " + G + " `" + Z + "` of type `" + V + "` " + ("supplied to `" + H + "`, expected `object`."));
        for (var K in N) {
          var Q = N[K];
          if (typeof Q != "function")
            return W(H, G, Z, K, P(Q));
          var re = Q(J, K, H, G, Z + "." + K, n);
          if (re)
            return re;
        }
        return null;
      }
      return x(A);
    }
    function y(N) {
      function A(z, B, H, G, Z) {
        var J = z[B], V = j(J);
        if (V !== "object")
          return new g("Invalid " + G + " `" + Z + "` of type `" + V + "` " + ("supplied to `" + H + "`, expected `object`."));
        var K = t({}, z[B], N);
        for (var Q in K) {
          var re = N[Q];
          if (r(N, Q) && typeof re != "function")
            return W(H, G, Z, Q, P(re));
          if (!re)
            return new g(
              "Invalid " + G + " `" + Z + "` key `" + Q + "` supplied to `" + H + "`.\nBad object: " + JSON.stringify(z[B], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(N), null, "  ")
            );
          var q = re(J, Q, H, G, Z + "." + Q, n);
          if (q)
            return q;
        }
        return null;
      }
      return x(A);
    }
    function v(N) {
      switch (typeof N) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !N;
        case "object":
          if (Array.isArray(N))
            return N.every(v);
          if (N === null || l(N))
            return !0;
          var A = m(N);
          if (A) {
            var z = A.call(N), B;
            if (A !== N.entries) {
              for (; !(B = z.next()).done; )
                if (!v(B.value))
                  return !1;
            } else
              for (; !(B = z.next()).done; ) {
                var H = B.value;
                if (H && !v(H[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function k(N, A) {
      return N === "symbol" ? !0 : A ? A["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && A instanceof Symbol : !1;
    }
    function j(N) {
      var A = typeof N;
      return Array.isArray(N) ? "array" : N instanceof RegExp ? "object" : k(A, N) ? "symbol" : A;
    }
    function P(N) {
      if (typeof N > "u" || N === null)
        return "" + N;
      var A = j(N);
      if (A === "object") {
        if (N instanceof Date)
          return "date";
        if (N instanceof RegExp)
          return "regexp";
      }
      return A;
    }
    function F(N) {
      var A = P(N);
      switch (A) {
        case "array":
        case "object":
          return "an " + A;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + A;
        default:
          return A;
      }
    }
    function D(N) {
      return !N.constructor || !N.constructor.name ? h : N.constructor.name;
    }
    return p.checkPropTypes = a, p.resetWarningCache = a.resetWarningCache, p.PropTypes = p, p;
  }, en;
}
var tn, zr;
function Eo() {
  if (zr) return tn;
  zr = 1;
  var e = /* @__PURE__ */ Yn();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, tn = function() {
    function r(o, l, u, f, d, m) {
      if (m !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
      }
    }
    r.isRequired = r;
    function a() {
      return r;
    }
    var i = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: a,
      element: r,
      elementType: r,
      instanceOf: a,
      node: r,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, tn;
}
var qr;
function Co() {
  if (qr) return pt.exports;
  if (qr = 1, process.env.NODE_ENV !== "production") {
    var e = Ua(), t = !0;
    pt.exports = /* @__PURE__ */ To()(e.isElement, t);
  } else
    pt.exports = /* @__PURE__ */ Eo()();
  return pt.exports;
}
var Oo = /* @__PURE__ */ Co();
const s = /* @__PURE__ */ yo(Oo);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function _o(e, t, n) {
  return (t = So(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function $r(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $r(Object(n), !0).forEach(function(r) {
      _o(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $r(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function ko(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function So(e) {
  var t = ko(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const Br = () => {
};
let Un = {}, Va = {}, Xa = null, Ga = {
  mark: Br,
  measure: Br
};
try {
  typeof window < "u" && (Un = window), typeof document < "u" && (Va = document), typeof MutationObserver < "u" && (Xa = MutationObserver), typeof performance < "u" && (Ga = performance);
} catch {
}
const {
  userAgent: Wr = ""
} = Un.navigator || {}, _e = Un, ne = Va, Yr = Xa, gt = Ga;
_e.document;
const we = !!ne.documentElement && !!ne.head && typeof ne.addEventListener == "function" && typeof ne.createElement == "function", Ka = ~Wr.indexOf("MSIE") || ~Wr.indexOf("Trident/");
var Po = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, Ao = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, Ja = {
  classic: {
    fa: "solid",
    fas: "solid",
    "fa-solid": "solid",
    far: "regular",
    "fa-regular": "regular",
    fal: "light",
    "fa-light": "light",
    fat: "thin",
    "fa-thin": "thin",
    fab: "brands",
    "fa-brands": "brands"
  },
  duotone: {
    fa: "solid",
    fad: "solid",
    "fa-solid": "solid",
    "fa-duotone": "solid",
    fadr: "regular",
    "fa-regular": "regular",
    fadl: "light",
    "fa-light": "light",
    fadt: "thin",
    "fa-thin": "thin"
  },
  sharp: {
    fa: "solid",
    fass: "solid",
    "fa-solid": "solid",
    fasr: "regular",
    "fa-regular": "regular",
    fasl: "light",
    "fa-light": "light",
    fast: "thin",
    "fa-thin": "thin"
  },
  "sharp-duotone": {
    fa: "solid",
    fasds: "solid",
    "fa-solid": "solid",
    fasdr: "regular",
    "fa-regular": "regular",
    fasdl: "light",
    "fa-light": "light",
    fasdt: "thin",
    "fa-thin": "thin"
  }
}, Io = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Za = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], oe = "classic", qt = "duotone", Fo = "sharp", Mo = "sharp-duotone", Qa = [oe, qt, Fo, Mo], Lo = {
  classic: {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  duotone: {
    900: "fad",
    400: "fadr",
    300: "fadl",
    100: "fadt"
  },
  sharp: {
    900: "fass",
    400: "fasr",
    300: "fasl",
    100: "fast"
  },
  "sharp-duotone": {
    900: "fasds",
    400: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
}, Do = {
  "Font Awesome 6 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 6 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  "Font Awesome 6 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 6 Duotone": {
    900: "fad",
    400: "fadr",
    normal: "fadr",
    300: "fadl",
    100: "fadt"
  },
  "Font Awesome 6 Sharp": {
    900: "fass",
    400: "fasr",
    normal: "fasr",
    300: "fasl",
    100: "fast"
  },
  "Font Awesome 6 Sharp Duotone": {
    900: "fasds",
    400: "fasdr",
    normal: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
}, jo = /* @__PURE__ */ new Map([["classic", {
  defaultShortPrefixId: "fas",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin", "brands"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp", {
  defaultShortPrefixId: "fass",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["duotone", {
  defaultShortPrefixId: "fad",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp-duotone", {
  defaultShortPrefixId: "fasds",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}]]), zo = {
  classic: {
    solid: "fas",
    regular: "far",
    light: "fal",
    thin: "fat",
    brands: "fab"
  },
  duotone: {
    solid: "fad",
    regular: "fadr",
    light: "fadl",
    thin: "fadt"
  },
  sharp: {
    solid: "fass",
    regular: "fasr",
    light: "fasl",
    thin: "fast"
  },
  "sharp-duotone": {
    solid: "fasds",
    regular: "fasdr",
    light: "fasdl",
    thin: "fasdt"
  }
}, qo = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Ur = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, $o = ["kit"], Bo = {
  kit: {
    "fa-kit": "fak"
  }
}, Wo = ["fak", "fakd"], Yo = {
  kit: {
    fak: "fa-kit"
  }
}, Hr = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, vt = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Uo = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Ho = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Vo = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, Xo = {
  classic: {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
  },
  duotone: {
    "fa-regular": "fadr",
    "fa-light": "fadl",
    "fa-thin": "fadt"
  },
  sharp: {
    "fa-solid": "fass",
    "fa-regular": "fasr",
    "fa-light": "fasl",
    "fa-thin": "fast"
  },
  "sharp-duotone": {
    "fa-solid": "fasds",
    "fa-regular": "fasdr",
    "fa-light": "fasdl",
    "fa-thin": "fasdt"
  }
}, Go = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, bn = {
  classic: {
    fab: "fa-brands",
    fad: "fa-duotone",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
  },
  duotone: {
    fadr: "fa-regular",
    fadl: "fa-light",
    fadt: "fa-thin"
  },
  sharp: {
    fass: "fa-solid",
    fasr: "fa-regular",
    fasl: "fa-light",
    fast: "fa-thin"
  },
  "sharp-duotone": {
    fasds: "fa-solid",
    fasdr: "fa-regular",
    fasdl: "fa-light",
    fasdt: "fa-thin"
  }
}, Ko = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], yn = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...Uo, ...Ko], Jo = ["solid", "regular", "light", "thin", "duotone", "brands"], ei = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Zo = ei.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Qo = [...Object.keys(Go), ...Jo, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", vt.GROUP, vt.SWAP_OPACITY, vt.PRIMARY, vt.SECONDARY].concat(ei.map((e) => "".concat(e, "x"))).concat(Zo.map((e) => "w-".concat(e))), es = {
  "Font Awesome 5 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 5 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal"
  },
  "Font Awesome 5 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 5 Duotone": {
    900: "fad"
  }
};
const ye = "___FONT_AWESOME___", xn = 16, ti = "fa", ni = "svg-inline--fa", Me = "data-fa-i2svg", wn = "data-fa-pseudo-element", ts = "data-fa-pseudo-element-pending", Hn = "data-prefix", Vn = "data-icon", Vr = "fontawesome-i2svg", ns = "async", rs = ["HTML", "HEAD", "STYLE", "SCRIPT"], ri = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function st(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[oe];
    }
  });
}
const ai = S({}, Ja);
ai[oe] = S(S(S(S({}, {
  "fa-duotone": "duotone"
}), Ja[oe]), Ur.kit), Ur["kit-duotone"]);
const as = st(ai), Nn = S({}, zo);
Nn[oe] = S(S(S(S({}, {
  duotone: "fad"
}), Nn[oe]), Hr.kit), Hr["kit-duotone"]);
const Xr = st(Nn), Rn = S({}, bn);
Rn[oe] = S(S({}, Rn[oe]), Yo.kit);
const Xn = st(Rn), Tn = S({}, Xo);
Tn[oe] = S(S({}, Tn[oe]), Bo.kit);
st(Tn);
const is = Po, ii = "fa-layers-text", os = Ao, ss = S({}, Lo);
st(ss);
const ls = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], nn = Io, cs = [...$o, ...Qo], Ze = _e.FontAwesomeConfig || {};
function us(e) {
  var t = ne.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function fs(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
ne && typeof ne.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const a = fs(us(n));
  a != null && (Ze[r] = a);
});
const oi = {
  styleDefault: "solid",
  familyDefault: oe,
  cssPrefix: ti,
  replacementClass: ni,
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
Ze.familyPrefix && (Ze.cssPrefix = Ze.familyPrefix);
const Ye = S(S({}, oi), Ze);
Ye.autoReplaceSvg || (Ye.observeMutations = !1);
const U = {};
Object.keys(oi).forEach((e) => {
  Object.defineProperty(U, e, {
    enumerable: !0,
    set: function(t) {
      Ye[e] = t, Qe.forEach((n) => n(U));
    },
    get: function() {
      return Ye[e];
    }
  });
});
Object.defineProperty(U, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Ye.cssPrefix = e, Qe.forEach((t) => t(U));
  },
  get: function() {
    return Ye.cssPrefix;
  }
});
_e.FontAwesomeConfig = U;
const Qe = [];
function ds(e) {
  return Qe.push(e), () => {
    Qe.splice(Qe.indexOf(e), 1);
  };
}
const Ne = xn, pe = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function ms(e) {
  if (!e || !we)
    return;
  const t = ne.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = ne.head.childNodes;
  let r = null;
  for (let a = n.length - 1; a > -1; a--) {
    const i = n[a], o = (i.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(o) > -1 && (r = i);
  }
  return ne.head.insertBefore(t, r), e;
}
const ps = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function rt() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += ps[Math.random() * 62 | 0];
  return t;
}
function Ve(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function Gn(e) {
  return e.classList ? Ve(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function si(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function hs(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(si(e[n]), '" '), "").trim();
}
function $t(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function Kn(e) {
  return e.size !== pe.size || e.x !== pe.x || e.y !== pe.y || e.rotate !== pe.rotate || e.flipX || e.flipY;
}
function gs(e) {
  let {
    transform: t,
    containerWidth: n,
    iconWidth: r
  } = e;
  const a = {
    transform: "translate(".concat(n / 2, " 256)")
  }, i = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), o = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), l = "rotate(".concat(t.rotate, " 0 0)"), u = {
    transform: "".concat(i, " ").concat(o, " ").concat(l)
  }, f = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: a,
    inner: u,
    path: f
  };
}
function vs(e) {
  let {
    transform: t,
    width: n = xn,
    height: r = xn,
    startCentered: a = !1
  } = e, i = "";
  return a && Ka ? i += "translate(".concat(t.x / Ne - n / 2, "em, ").concat(t.y / Ne - r / 2, "em) ") : a ? i += "translate(calc(-50% + ".concat(t.x / Ne, "em), calc(-50% + ").concat(t.y / Ne, "em)) ") : i += "translate(".concat(t.x / Ne, "em, ").concat(t.y / Ne, "em) "), i += "scale(".concat(t.size / Ne * (t.flipX ? -1 : 1), ", ").concat(t.size / Ne * (t.flipY ? -1 : 1), ") "), i += "rotate(".concat(t.rotate, "deg) "), i;
}
var bs = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;
function li() {
  const e = ti, t = ni, n = U.cssPrefix, r = U.replacementClass;
  let a = bs;
  if (n !== e || r !== t) {
    const i = new RegExp("\\.".concat(e, "\\-"), "g"), o = new RegExp("\\--".concat(e, "\\-"), "g"), l = new RegExp("\\.".concat(t), "g");
    a = a.replace(i, ".".concat(n, "-")).replace(o, "--".concat(n, "-")).replace(l, ".".concat(r));
  }
  return a;
}
let Gr = !1;
function rn() {
  U.autoAddCss && !Gr && (ms(li()), Gr = !0);
}
var ys = {
  mixout() {
    return {
      dom: {
        css: li,
        insertCss: rn
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        rn();
      },
      beforeI2svg() {
        rn();
      }
    };
  }
};
const xe = _e || {};
xe[ye] || (xe[ye] = {});
xe[ye].styles || (xe[ye].styles = {});
xe[ye].hooks || (xe[ye].hooks = {});
xe[ye].shims || (xe[ye].shims = []);
var he = xe[ye];
const ci = [], ui = function() {
  ne.removeEventListener("DOMContentLoaded", ui), Ot = 1, ci.map((e) => e());
};
let Ot = !1;
we && (Ot = (ne.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(ne.readyState), Ot || ne.addEventListener("DOMContentLoaded", ui));
function xs(e) {
  we && (Ot ? setTimeout(e, 0) : ci.push(e));
}
function lt(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? si(e) : "<".concat(t, " ").concat(hs(n), ">").concat(r.map(lt).join(""), "</").concat(t, ">");
}
function Kr(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var an = function(t, n, r, a) {
  var i = Object.keys(t), o = i.length, l = n, u, f, d;
  for (r === void 0 ? (u = 1, d = t[i[0]]) : (u = 0, d = r); u < o; u++)
    f = i[u], d = l(d, t[f], f, t);
  return d;
};
function ws(e) {
  const t = [];
  let n = 0;
  const r = e.length;
  for (; n < r; ) {
    const a = e.charCodeAt(n++);
    if (a >= 55296 && a <= 56319 && n < r) {
      const i = e.charCodeAt(n++);
      (i & 64512) == 56320 ? t.push(((a & 1023) << 10) + (i & 1023) + 65536) : (t.push(a), n--);
    } else
      t.push(a);
  }
  return t;
}
function En(e) {
  const t = ws(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Ns(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t), a;
  return r >= 55296 && r <= 56319 && n > t + 1 && (a = e.charCodeAt(t + 1), a >= 56320 && a <= 57343) ? (r - 55296) * 1024 + a - 56320 + 65536 : r;
}
function Jr(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function Cn(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, a = Jr(t);
  typeof he.hooks.addPack == "function" && !r ? he.hooks.addPack(e, Jr(t)) : he.styles[e] = S(S({}, he.styles[e] || {}), a), e === "fas" && Cn("fa", t);
}
const {
  styles: at,
  shims: Rs
} = he, fi = Object.keys(Xn), Ts = fi.reduce((e, t) => (e[t] = Object.keys(Xn[t]), e), {});
let Jn = null, di = {}, mi = {}, pi = {}, hi = {}, gi = {};
function Es(e) {
  return ~cs.indexOf(e);
}
function Cs(e, t) {
  const n = t.split("-"), r = n[0], a = n.slice(1).join("-");
  return r === e && a !== "" && !Es(a) ? a : null;
}
const vi = () => {
  const e = (r) => an(at, (a, i, o) => (a[o] = an(i, r, {}), a), {});
  di = e((r, a, i) => (a[3] && (r[a[3]] = i), a[2] && a[2].filter((l) => typeof l == "number").forEach((l) => {
    r[l.toString(16)] = i;
  }), r)), mi = e((r, a, i) => (r[i] = i, a[2] && a[2].filter((l) => typeof l == "string").forEach((l) => {
    r[l] = i;
  }), r)), gi = e((r, a, i) => {
    const o = a[2];
    return r[i] = i, o.forEach((l) => {
      r[l] = i;
    }), r;
  });
  const t = "far" in at || U.autoFetchSvg, n = an(Rs, (r, a) => {
    const i = a[0];
    let o = a[1];
    const l = a[2];
    return o === "far" && !t && (o = "fas"), typeof i == "string" && (r.names[i] = {
      prefix: o,
      iconName: l
    }), typeof i == "number" && (r.unicodes[i.toString(16)] = {
      prefix: o,
      iconName: l
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  pi = n.names, hi = n.unicodes, Jn = Bt(U.styleDefault, {
    family: U.familyDefault
  });
};
ds((e) => {
  Jn = Bt(e.styleDefault, {
    family: U.familyDefault
  });
});
vi();
function Zn(e, t) {
  return (di[e] || {})[t];
}
function Os(e, t) {
  return (mi[e] || {})[t];
}
function Ie(e, t) {
  return (gi[e] || {})[t];
}
function bi(e) {
  return pi[e] || {
    prefix: null,
    iconName: null
  };
}
function _s(e) {
  const t = hi[e], n = Zn("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function ke() {
  return Jn;
}
const yi = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function ks(e) {
  let t = oe;
  const n = fi.reduce((r, a) => (r[a] = "".concat(U.cssPrefix, "-").concat(a), r), {});
  return Qa.forEach((r) => {
    (e.includes(n[r]) || e.some((a) => Ts[r].includes(a))) && (t = r);
  }), t;
}
function Bt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = oe
  } = t, r = as[n][e];
  if (n === qt && !e)
    return "fad";
  const a = Xr[n][e] || Xr[n][r], i = e in he.styles ? e : null;
  return a || i || null;
}
function Ss(e) {
  let t = [], n = null;
  return e.forEach((r) => {
    const a = Cs(U.cssPrefix, r);
    a ? n = a : r && t.push(r);
  }), {
    iconName: n,
    rest: t
  };
}
function Zr(e) {
  return e.sort().filter((t, n, r) => r.indexOf(t) === n);
}
function Wt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t;
  let r = null;
  const a = yn.concat(Ho), i = Zr(e.filter((m) => a.includes(m))), o = Zr(e.filter((m) => !yn.includes(m))), l = i.filter((m) => (r = m, !Za.includes(m))), [u = null] = l, f = ks(i), d = S(S({}, Ss(o)), {}, {
    prefix: Bt(u, {
      family: f
    })
  });
  return S(S(S({}, d), Fs({
    values: e,
    family: f,
    styles: at,
    config: U,
    canonical: d,
    givenPrefix: r
  })), Ps(n, r, d));
}
function Ps(e, t, n) {
  let {
    prefix: r,
    iconName: a
  } = n;
  if (e || !r || !a)
    return {
      prefix: r,
      iconName: a
    };
  const i = t === "fa" ? bi(a) : {}, o = Ie(r, a);
  return a = i.iconName || o || a, r = i.prefix || r, r === "far" && !at.far && at.fas && !U.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: a
  };
}
const As = Qa.filter((e) => e !== oe || e !== qt), Is = Object.keys(bn).filter((e) => e !== oe).map((e) => Object.keys(bn[e])).flat();
function Fs(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: a = "",
    styles: i = {},
    config: o = {}
  } = e, l = n === qt, u = t.includes("fa-duotone") || t.includes("fad"), f = o.familyDefault === "duotone", d = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!l && (u || f || d) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && As.includes(n) && (Object.keys(i).find((h) => Is.includes(h)) || o.autoFetchSvg)) {
    const h = jo.get(n).defaultShortPrefixId;
    r.prefix = h, r.iconName = Ie(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || a === "fa") && (r.prefix = ke() || "fas"), r;
}
class Ms {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const a = n.reduce(this._pullDefinitions, {});
    Object.keys(a).forEach((i) => {
      this.definitions[i] = S(S({}, this.definitions[i] || {}), a[i]), Cn(i, a[i]);
      const o = Xn[oe][i];
      o && Cn(o, a[i]), vi();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(t, n) {
    const r = n.prefix && n.iconName && n.icon ? {
      0: n
    } : n;
    return Object.keys(r).map((a) => {
      const {
        prefix: i,
        iconName: o,
        icon: l
      } = r[a], u = l[2];
      t[i] || (t[i] = {}), u.length > 0 && u.forEach((f) => {
        typeof f == "string" && (t[i][f] = l);
      }), t[i][o] = l;
    }), t;
  }
}
let Qr = [], qe = {};
const Be = {}, Ls = Object.keys(Be);
function Ds(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return Qr = e, qe = {}, Object.keys(Be).forEach((r) => {
    Ls.indexOf(r) === -1 && delete Be[r];
  }), Qr.forEach((r) => {
    const a = r.mixout ? r.mixout() : {};
    if (Object.keys(a).forEach((i) => {
      typeof a[i] == "function" && (n[i] = a[i]), typeof a[i] == "object" && Object.keys(a[i]).forEach((o) => {
        n[i] || (n[i] = {}), n[i][o] = a[i][o];
      });
    }), r.hooks) {
      const i = r.hooks();
      Object.keys(i).forEach((o) => {
        qe[o] || (qe[o] = []), qe[o].push(i[o]);
      });
    }
    r.provides && r.provides(Be);
  }), n;
}
function On(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    r[a - 2] = arguments[a];
  return (qe[e] || []).forEach((o) => {
    t = o.apply(null, [t, ...r]);
  }), t;
}
function Le(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (qe[e] || []).forEach((i) => {
    i.apply(null, n);
  });
}
function Se() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return Be[e] ? Be[e].apply(null, t) : void 0;
}
function _n(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || ke();
  if (t)
    return t = Ie(n, t) || t, Kr(xi.definitions, n, t) || Kr(he.styles, n, t);
}
const xi = new Ms(), js = () => {
  U.autoReplaceSvg = !1, U.observeMutations = !1, Le("noAuto");
}, zs = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return we ? (Le("beforeI2svg", e), Se("pseudoElements2svg", e), Se("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    U.autoReplaceSvg === !1 && (U.autoReplaceSvg = !0), U.observeMutations = !0, xs(() => {
      $s({
        autoReplaceSvgRoot: t
      }), Le("watch", e);
    });
  }
}, qs = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: Ie(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = Bt(e[0]);
      return {
        prefix: n,
        iconName: Ie(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(U.cssPrefix, "-")) > -1 || e.match(is))) {
      const t = Wt(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || ke(),
        iconName: Ie(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = ke();
      return {
        prefix: t,
        iconName: Ie(t, e) || e
      };
    }
  }
}, ue = {
  noAuto: js,
  config: U,
  dom: zs,
  parse: qs,
  library: xi,
  findIconDefinition: _n,
  toHtml: lt
}, $s = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = ne
  } = e;
  (Object.keys(he.styles).length > 0 || U.autoFetchSvg) && we && U.autoReplaceSvg && ue.dom.i2svg({
    node: t
  });
};
function Yt(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => lt(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!we) return;
      const n = ne.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function Bs(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: a,
    styles: i,
    transform: o
  } = e;
  if (Kn(o) && n.found && !r.found) {
    const {
      width: l,
      height: u
    } = n, f = {
      x: l / u / 2,
      y: 0.5
    };
    a.style = $t(S(S({}, i), {}, {
      "transform-origin": "".concat(f.x + o.x / 16, "em ").concat(f.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: a,
    children: t
  }];
}
function Ws(e) {
  let {
    prefix: t,
    iconName: n,
    children: r,
    attributes: a,
    symbol: i
  } = e;
  const o = i === !0 ? "".concat(t, "-").concat(U.cssPrefix, "-").concat(n) : i;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: S(S({}, a), {}, {
        id: o
      }),
      children: r
    }]
  }];
}
function Qn(e) {
  const {
    icons: {
      main: t,
      mask: n
    },
    prefix: r,
    iconName: a,
    transform: i,
    symbol: o,
    title: l,
    maskId: u,
    titleId: f,
    extra: d,
    watchable: m = !1
  } = e, {
    width: h,
    height: p
  } = n.found ? n : t, b = Wo.includes(r), g = [U.replacementClass, a ? "".concat(U.cssPrefix, "-").concat(a) : ""].filter((R) => d.classes.indexOf(R) === -1).filter((R) => R !== "" || !!R).concat(d.classes).join(" ");
  let x = {
    children: [],
    attributes: S(S({}, d.attributes), {}, {
      "data-prefix": r,
      "data-icon": a,
      class: g,
      role: d.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(h, " ").concat(p)
    })
  };
  const C = b && !~d.classes.indexOf("fa-fw") ? {
    width: "".concat(h / p * 16 * 0.0625, "em")
  } : {};
  m && (x.attributes[Me] = ""), l && (x.children.push({
    tag: "title",
    attributes: {
      id: x.attributes["aria-labelledby"] || "title-".concat(f || rt())
    },
    children: [l]
  }), delete x.attributes.title);
  const O = S(S({}, x), {}, {
    prefix: r,
    iconName: a,
    main: t,
    mask: n,
    maskId: u,
    transform: i,
    symbol: o,
    styles: S(S({}, C), d.styles)
  }), {
    children: E,
    attributes: _
  } = n.found && t.found ? Se("generateAbstractMask", O) || {
    children: [],
    attributes: {}
  } : Se("generateAbstractIcon", O) || {
    children: [],
    attributes: {}
  };
  return O.children = E, O.attributes = _, o ? Ws(O) : Bs(O);
}
function ea(e) {
  const {
    content: t,
    width: n,
    height: r,
    transform: a,
    title: i,
    extra: o,
    watchable: l = !1
  } = e, u = S(S(S({}, o.attributes), i ? {
    title: i
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  l && (u[Me] = "");
  const f = S({}, o.styles);
  Kn(a) && (f.transform = vs({
    transform: a,
    startCentered: !0,
    width: n,
    height: r
  }), f["-webkit-transform"] = f.transform);
  const d = $t(f);
  d.length > 0 && (u.style = d);
  const m = [];
  return m.push({
    tag: "span",
    attributes: u,
    children: [t]
  }), i && m.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [i]
  }), m;
}
function Ys(e) {
  const {
    content: t,
    title: n,
    extra: r
  } = e, a = S(S(S({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), i = $t(r.styles);
  i.length > 0 && (a.style = i);
  const o = [];
  return o.push({
    tag: "span",
    attributes: a,
    children: [t]
  }), n && o.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), o;
}
const {
  styles: on
} = he;
function kn(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let a = null;
  return Array.isArray(r) ? a = {
    tag: "g",
    attributes: {
      class: "".concat(U.cssPrefix, "-").concat(nn.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(U.cssPrefix, "-").concat(nn.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(U.cssPrefix, "-").concat(nn.PRIMARY),
        fill: "currentColor",
        d: r[1]
      }
    }]
  } : a = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: r
    }
  }, {
    found: !0,
    width: t,
    height: n,
    icon: a
  };
}
const Us = {
  found: !1,
  width: 512,
  height: 512
};
function Hs(e, t) {
  !ri && !U.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function Sn(e, t) {
  let n = t;
  return t === "fa" && U.styleDefault !== null && (t = ke()), new Promise((r, a) => {
    if (n === "fa") {
      const i = bi(e) || {};
      e = i.iconName || e, t = i.prefix || t;
    }
    if (e && t && on[t] && on[t][e]) {
      const i = on[t][e];
      return r(kn(i));
    }
    Hs(e, t), r(S(S({}, Us), {}, {
      icon: U.showMissingIcons && e ? Se("missingIconAbstract") || {} : {}
    }));
  });
}
const ta = () => {
}, Pn = U.measurePerformance && gt && gt.mark && gt.measure ? gt : {
  mark: ta,
  measure: ta
}, Ke = 'FA "6.7.2"', Vs = (e) => (Pn.mark("".concat(Ke, " ").concat(e, " begins")), () => wi(e)), wi = (e) => {
  Pn.mark("".concat(Ke, " ").concat(e, " ends")), Pn.measure("".concat(Ke, " ").concat(e), "".concat(Ke, " ").concat(e, " begins"), "".concat(Ke, " ").concat(e, " ends"));
};
var er = {
  begin: Vs,
  end: wi
};
const Nt = () => {
};
function na(e) {
  return typeof (e.getAttribute ? e.getAttribute(Me) : null) == "string";
}
function Xs(e) {
  const t = e.getAttribute ? e.getAttribute(Hn) : null, n = e.getAttribute ? e.getAttribute(Vn) : null;
  return t && n;
}
function Gs(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(U.replacementClass);
}
function Ks() {
  return U.autoReplaceSvg === !0 ? Rt.replace : Rt[U.autoReplaceSvg] || Rt.replace;
}
function Js(e) {
  return ne.createElementNS("http://www.w3.org/2000/svg", e);
}
function Zs(e) {
  return ne.createElement(e);
}
function Ni(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? Js : Zs
  } = t;
  if (typeof e == "string")
    return ne.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(i) {
    r.setAttribute(i, e.attributes[i]);
  }), (e.children || []).forEach(function(i) {
    r.appendChild(Ni(i, {
      ceFn: n
    }));
  }), r;
}
function Qs(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const Rt = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(Ni(n), t);
      }), t.getAttribute(Me) === null && U.keepOriginalSource) {
        let n = ne.createComment(Qs(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~Gn(t).indexOf(U.replacementClass))
      return Rt.replace(e);
    const r = new RegExp("".concat(U.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const i = n[0].attributes.class.split(" ").reduce((o, l) => (l === U.replacementClass || l.match(r) ? o.toSvg.push(l) : o.toNode.push(l), o), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", i.toNode.join(" "));
    }
    const a = n.map((i) => lt(i)).join(`
`);
    t.setAttribute(Me, ""), t.innerHTML = a;
  }
};
function ra(e) {
  e();
}
function Ri(e, t) {
  const n = typeof t == "function" ? t : Nt;
  if (e.length === 0)
    n();
  else {
    let r = ra;
    U.mutateApproach === ns && (r = _e.requestAnimationFrame || ra), r(() => {
      const a = Ks(), i = er.begin("mutate");
      e.map(a), i(), n();
    });
  }
}
let tr = !1;
function Ti() {
  tr = !0;
}
function An() {
  tr = !1;
}
let _t = null;
function aa(e) {
  if (!Yr || !U.observeMutations)
    return;
  const {
    treeCallback: t = Nt,
    nodeCallback: n = Nt,
    pseudoElementsCallback: r = Nt,
    observeMutationsRoot: a = ne
  } = e;
  _t = new Yr((i) => {
    if (tr) return;
    const o = ke();
    Ve(i).forEach((l) => {
      if (l.type === "childList" && l.addedNodes.length > 0 && !na(l.addedNodes[0]) && (U.searchPseudoElements && r(l.target), t(l.target)), l.type === "attributes" && l.target.parentNode && U.searchPseudoElements && r(l.target.parentNode), l.type === "attributes" && na(l.target) && ~ls.indexOf(l.attributeName))
        if (l.attributeName === "class" && Xs(l.target)) {
          const {
            prefix: u,
            iconName: f
          } = Wt(Gn(l.target));
          l.target.setAttribute(Hn, u || o), f && l.target.setAttribute(Vn, f);
        } else Gs(l.target) && n(l.target);
    });
  }), we && _t.observe(a, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function el() {
  _t && _t.disconnect();
}
function tl(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, a) => {
    const i = a.split(":"), o = i[0], l = i.slice(1);
    return o && l.length > 0 && (r[o] = l.join(":").trim()), r;
  }, {})), n;
}
function nl(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let a = Wt(Gn(e));
  return a.prefix || (a.prefix = ke()), t && n && (a.prefix = t, a.iconName = n), a.iconName && a.prefix || (a.prefix && r.length > 0 && (a.iconName = Os(a.prefix, e.innerText) || Zn(a.prefix, En(e.innerText))), !a.iconName && U.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a;
}
function rl(e) {
  const t = Ve(e.attributes).reduce((a, i) => (a.name !== "class" && a.name !== "style" && (a[i.name] = i.value), a), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return U.autoA11y && (n ? t["aria-labelledby"] = "".concat(U.replacementClass, "-title-").concat(r || rt()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function al() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: pe,
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
  };
}
function ia(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: r,
    rest: a
  } = nl(e), i = rl(e), o = On("parseNodeAttributes", {}, e);
  let l = t.styleParser ? tl(e) : [];
  return S({
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: pe,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: a,
      styles: l,
      attributes: i
    }
  }, o);
}
const {
  styles: il
} = he;
function Ei(e) {
  const t = U.autoReplaceSvg === "nest" ? ia(e, {
    styleParser: !1
  }) : ia(e);
  return ~t.extra.classes.indexOf(ii) ? Se("generateLayersText", e, t) : Se("generateSvgReplacementMutation", e, t);
}
function ol() {
  return [...qo, ...yn];
}
function oa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!we) return Promise.resolve();
  const n = ne.documentElement.classList, r = (d) => n.add("".concat(Vr, "-").concat(d)), a = (d) => n.remove("".concat(Vr, "-").concat(d)), i = U.autoFetchSvg ? ol() : Za.concat(Object.keys(il));
  i.includes("fa") || i.push("fa");
  const o = [".".concat(ii, ":not([").concat(Me, "])")].concat(i.map((d) => ".".concat(d, ":not([").concat(Me, "])"))).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  let l = [];
  try {
    l = Ve(e.querySelectorAll(o));
  } catch {
  }
  if (l.length > 0)
    r("pending"), a("complete");
  else
    return Promise.resolve();
  const u = er.begin("onTree"), f = l.reduce((d, m) => {
    try {
      const h = Ei(m);
      h && d.push(h);
    } catch (h) {
      ri || h.name === "MissingIcon" && console.error(h);
    }
    return d;
  }, []);
  return new Promise((d, m) => {
    Promise.all(f).then((h) => {
      Ri(h, () => {
        r("active"), r("complete"), a("pending"), typeof t == "function" && t(), u(), d();
      });
    }).catch((h) => {
      u(), m(h);
    });
  });
}
function sl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Ei(e).then((n) => {
    n && Ri([n], t);
  });
}
function ll(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : _n(t || {});
    let {
      mask: a
    } = n;
    return a && (a = (a || {}).icon ? a : _n(a || {})), e(r, S(S({}, n), {}, {
      mask: a
    }));
  };
}
const cl = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = pe,
    symbol: r = !1,
    mask: a = null,
    maskId: i = null,
    title: o = null,
    titleId: l = null,
    classes: u = [],
    attributes: f = {},
    styles: d = {}
  } = t;
  if (!e) return;
  const {
    prefix: m,
    iconName: h,
    icon: p
  } = e;
  return Yt(S({
    type: "icon"
  }, e), () => (Le("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), U.autoA11y && (o ? f["aria-labelledby"] = "".concat(U.replacementClass, "-title-").concat(l || rt()) : (f["aria-hidden"] = "true", f.focusable = "false")), Qn({
    icons: {
      main: kn(p),
      mask: a ? kn(a.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: m,
    iconName: h,
    transform: S(S({}, pe), n),
    symbol: r,
    title: o,
    maskId: i,
    titleId: l,
    extra: {
      attributes: f,
      styles: d,
      classes: u
    }
  })));
};
var ul = {
  mixout() {
    return {
      icon: ll(cl)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = oa, e.nodeCallback = sl, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = ne,
        callback: r = () => {
        }
      } = t;
      return oa(n, r);
    }, e.generateSvgReplacementMutation = function(t, n) {
      const {
        iconName: r,
        title: a,
        titleId: i,
        prefix: o,
        transform: l,
        symbol: u,
        mask: f,
        maskId: d,
        extra: m
      } = n;
      return new Promise((h, p) => {
        Promise.all([Sn(r, o), f.iconName ? Sn(f.iconName, f.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((b) => {
          let [g, x] = b;
          h([t, Qn({
            icons: {
              main: g,
              mask: x
            },
            prefix: o,
            iconName: r,
            transform: l,
            symbol: u,
            maskId: d,
            title: a,
            titleId: i,
            extra: m,
            watchable: !0
          })]);
        }).catch(p);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: n,
        attributes: r,
        main: a,
        transform: i,
        styles: o
      } = t;
      const l = $t(o);
      l.length > 0 && (r.style = l);
      let u;
      return Kn(i) && (u = Se("generateAbstractTransformGrouping", {
        main: a,
        transform: i,
        containerWidth: a.width,
        iconWidth: a.width
      })), n.push(u || a.icon), {
        children: n,
        attributes: r
      };
    };
  }
}, fl = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return Yt({
          type: "layer"
        }, () => {
          Le("beforeDOMElementCreation", {
            assembler: e,
            params: t
          });
          let r = [];
          return e((a) => {
            Array.isArray(a) ? a.map((i) => {
              r = r.concat(i.abstract);
            }) : r = r.concat(a.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(U.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: r
          }];
        });
      }
    };
  }
}, dl = {
  mixout() {
    return {
      counter(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title: n = null,
          classes: r = [],
          attributes: a = {},
          styles: i = {}
        } = t;
        return Yt({
          type: "counter",
          content: e
        }, () => (Le("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Ys({
          content: e.toString(),
          title: n,
          extra: {
            attributes: a,
            styles: i,
            classes: ["".concat(U.cssPrefix, "-layers-counter"), ...r]
          }
        })));
      }
    };
  }
}, ml = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = pe,
          title: r = null,
          classes: a = [],
          attributes: i = {},
          styles: o = {}
        } = t;
        return Yt({
          type: "text",
          content: e
        }, () => (Le("beforeDOMElementCreation", {
          content: e,
          params: t
        }), ea({
          content: e,
          transform: S(S({}, pe), n),
          title: r,
          extra: {
            attributes: i,
            styles: o,
            classes: ["".concat(U.cssPrefix, "-layers-text"), ...a]
          }
        })));
      }
    };
  },
  provides(e) {
    e.generateLayersText = function(t, n) {
      const {
        title: r,
        transform: a,
        extra: i
      } = n;
      let o = null, l = null;
      if (Ka) {
        const u = parseInt(getComputedStyle(t).fontSize, 10), f = t.getBoundingClientRect();
        o = f.width / u, l = f.height / u;
      }
      return U.autoA11y && !r && (i.attributes["aria-hidden"] = "true"), Promise.resolve([t, ea({
        content: t.innerHTML,
        width: o,
        height: l,
        transform: a,
        title: r,
        extra: i,
        watchable: !0
      })]);
    };
  }
};
const pl = new RegExp('"', "ug"), sa = [1105920, 1112319], la = S(S(S(S({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), Do), es), Vo), In = Object.keys(la).reduce((e, t) => (e[t.toLowerCase()] = la[t], e), {}), hl = Object.keys(In).reduce((e, t) => {
  const n = In[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function gl(e) {
  const t = e.replace(pl, ""), n = Ns(t, 0), r = n >= sa[0] && n <= sa[1], a = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: En(a ? t[0] : t),
    isSecondary: r || a
  };
}
function vl(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), a = isNaN(r) ? "normal" : r;
  return (In[n] || {})[a] || hl[n];
}
function ca(e, t) {
  const n = "".concat(ts).concat(t.replace(":", "-"));
  return new Promise((r, a) => {
    if (e.getAttribute(n) !== null)
      return r();
    const o = Ve(e.children).filter((h) => h.getAttribute(wn) === t)[0], l = _e.getComputedStyle(e, t), u = l.getPropertyValue("font-family"), f = u.match(os), d = l.getPropertyValue("font-weight"), m = l.getPropertyValue("content");
    if (o && !f)
      return e.removeChild(o), r();
    if (f && m !== "none" && m !== "") {
      const h = l.getPropertyValue("content");
      let p = vl(u, d);
      const {
        value: b,
        isSecondary: g
      } = gl(h), x = f[0].startsWith("FontAwesome");
      let C = Zn(p, b), O = C;
      if (x) {
        const E = _s(b);
        E.iconName && E.prefix && (C = E.iconName, p = E.prefix);
      }
      if (C && !g && (!o || o.getAttribute(Hn) !== p || o.getAttribute(Vn) !== O)) {
        e.setAttribute(n, O), o && e.removeChild(o);
        const E = al(), {
          extra: _
        } = E;
        _.attributes[wn] = t, Sn(C, p).then((R) => {
          const X = Qn(S(S({}, E), {}, {
            icons: {
              main: R,
              mask: yi()
            },
            prefix: p,
            iconName: O,
            extra: _,
            watchable: !0
          })), M = ne.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(M, e.firstChild) : e.appendChild(M), M.outerHTML = X.map((L) => lt(L)).join(`
`), e.removeAttribute(n), r();
        }).catch(a);
      } else
        r();
    } else
      r();
  });
}
function bl(e) {
  return Promise.all([ca(e, "::before"), ca(e, "::after")]);
}
function yl(e) {
  return e.parentNode !== document.head && !~rs.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(wn) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function ua(e) {
  if (we)
    return new Promise((t, n) => {
      const r = Ve(e.querySelectorAll("*")).filter(yl).map(bl), a = er.begin("searchPseudoElements");
      Ti(), Promise.all(r).then(() => {
        a(), An(), t();
      }).catch(() => {
        a(), An(), n();
      });
    });
}
var xl = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = ua, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = ne
      } = t;
      U.searchPseudoElements && ua(n);
    };
  }
};
let fa = !1;
var wl = {
  mixout() {
    return {
      dom: {
        unwatch() {
          Ti(), fa = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        aa(On("mutationObserverCallbacks", {}));
      },
      noAuto() {
        el();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        fa ? An() : aa(On("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const da = (e) => {
  let t = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return e.toLowerCase().split(" ").reduce((n, r) => {
    const a = r.toLowerCase().split("-"), i = a[0];
    let o = a.slice(1).join("-");
    if (i && o === "h")
      return n.flipX = !0, n;
    if (i && o === "v")
      return n.flipY = !0, n;
    if (o = parseFloat(o), isNaN(o))
      return n;
    switch (i) {
      case "grow":
        n.size = n.size + o;
        break;
      case "shrink":
        n.size = n.size - o;
        break;
      case "left":
        n.x = n.x - o;
        break;
      case "right":
        n.x = n.x + o;
        break;
      case "up":
        n.y = n.y - o;
        break;
      case "down":
        n.y = n.y + o;
        break;
      case "rotate":
        n.rotate = n.rotate + o;
        break;
    }
    return n;
  }, t);
};
var Nl = {
  mixout() {
    return {
      parse: {
        transform: (e) => da(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = da(n)), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractTransformGrouping = function(t) {
      let {
        main: n,
        transform: r,
        containerWidth: a,
        iconWidth: i
      } = t;
      const o = {
        transform: "translate(".concat(a / 2, " 256)")
      }, l = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), u = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), f = "rotate(".concat(r.rotate, " 0 0)"), d = {
        transform: "".concat(l, " ").concat(u, " ").concat(f)
      }, m = {
        transform: "translate(".concat(i / 2 * -1, " -256)")
      }, h = {
        outer: o,
        inner: d,
        path: m
      };
      return {
        tag: "g",
        attributes: S({}, h.outer),
        children: [{
          tag: "g",
          attributes: S({}, h.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: S(S({}, n.icon.attributes), h.path)
          }]
        }]
      };
    };
  }
};
const sn = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function ma(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function Rl(e) {
  return e.tag === "g" ? e.children : [e];
}
var Tl = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? Wt(n.split(" ").map((a) => a.trim())) : yi();
        return r.prefix || (r.prefix = ke()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractMask = function(t) {
      let {
        children: n,
        attributes: r,
        main: a,
        mask: i,
        maskId: o,
        transform: l
      } = t;
      const {
        width: u,
        icon: f
      } = a, {
        width: d,
        icon: m
      } = i, h = gs({
        transform: l,
        containerWidth: d,
        iconWidth: u
      }), p = {
        tag: "rect",
        attributes: S(S({}, sn), {}, {
          fill: "white"
        })
      }, b = f.children ? {
        children: f.children.map(ma)
      } : {}, g = {
        tag: "g",
        attributes: S({}, h.inner),
        children: [ma(S({
          tag: f.tag,
          attributes: S(S({}, f.attributes), h.path)
        }, b))]
      }, x = {
        tag: "g",
        attributes: S({}, h.outer),
        children: [g]
      }, C = "mask-".concat(o || rt()), O = "clip-".concat(o || rt()), E = {
        tag: "mask",
        attributes: S(S({}, sn), {}, {
          id: C,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [p, x]
      }, _ = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: O
          },
          children: Rl(m)
        }, E]
      };
      return n.push(_, {
        tag: "rect",
        attributes: S({
          fill: "currentColor",
          "clip-path": "url(#".concat(O, ")"),
          mask: "url(#".concat(C, ")")
        }, sn)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, El = {
  provides(e) {
    let t = !1;
    _e.matchMedia && (t = _e.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const n = [], r = {
        fill: "currentColor"
      }, a = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: S(S({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const i = S(S({}, a), {}, {
        attributeName: "opacity"
      }), o = {
        tag: "circle",
        attributes: S(S({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || o.children.push({
        tag: "animate",
        attributes: S(S({}, a), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: S(S({}, i), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(o), n.push({
        tag: "path",
        attributes: S(S({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: S(S({}, i), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || n.push({
        tag: "path",
        attributes: S(S({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: S(S({}, i), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: n
      };
    };
  }
}, Cl = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, Ol = [ys, ul, fl, dl, ml, xl, wl, Nl, Tl, El, Cl];
Ds(Ol, {
  mixoutsTo: ue
});
ue.noAuto;
ue.config;
ue.library;
ue.dom;
const Fn = ue.parse;
ue.findIconDefinition;
ue.toHtml;
const _l = ue.icon;
ue.layer;
ue.text;
ue.counter;
function pa(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function me(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pa(Object(n), !0).forEach(function(r) {
      $e(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pa(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function kt(e) {
  "@babel/helpers - typeof";
  return kt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, kt(e);
}
function $e(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function kl(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Sl(e, t) {
  if (e == null) return {};
  var n = kl(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      r = i[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Mn(e) {
  return Pl(e) || Al(e) || Il(e) || Fl();
}
function Pl(e) {
  if (Array.isArray(e)) return Ln(e);
}
function Al(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Il(e, t) {
  if (e) {
    if (typeof e == "string") return Ln(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ln(e, t);
  }
}
function Ln(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Fl() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ml(e) {
  var t, n = e.beat, r = e.fade, a = e.beatFade, i = e.bounce, o = e.shake, l = e.flash, u = e.spin, f = e.spinPulse, d = e.spinReverse, m = e.pulse, h = e.fixedWidth, p = e.inverse, b = e.border, g = e.listItem, x = e.flip, C = e.size, O = e.rotation, E = e.pull, _ = (t = {
    "fa-beat": n,
    "fa-fade": r,
    "fa-beat-fade": a,
    "fa-bounce": i,
    "fa-shake": o,
    "fa-flash": l,
    "fa-spin": u,
    "fa-spin-reverse": d,
    "fa-spin-pulse": f,
    "fa-pulse": m,
    "fa-fw": h,
    "fa-inverse": p,
    "fa-border": b,
    "fa-li": g,
    "fa-flip": x === !0,
    "fa-flip-horizontal": x === "horizontal" || x === "both",
    "fa-flip-vertical": x === "vertical" || x === "both"
  }, $e(t, "fa-".concat(C), typeof C < "u" && C !== null), $e(t, "fa-rotate-".concat(O), typeof O < "u" && O !== null && O !== 0), $e(t, "fa-pull-".concat(E), typeof E < "u" && E !== null), $e(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(_).map(function(R) {
    return _[R] ? R : null;
  }).filter(function(R) {
    return R;
  });
}
function Ll(e) {
  return e = e - 0, e === e;
}
function Ci(e) {
  return Ll(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var Dl = ["style"];
function jl(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function zl(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), a = Ci(n.slice(0, r)), i = n.slice(r + 1).trim();
    return a.startsWith("webkit") ? t[jl(a)] = i : t[a] = i, t;
  }, {});
}
function Oi(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(u) {
    return Oi(e, u);
  }), a = Object.keys(t.attributes || {}).reduce(function(u, f) {
    var d = t.attributes[f];
    switch (f) {
      case "class":
        u.attrs.className = d, delete t.attributes.class;
        break;
      case "style":
        u.attrs.style = zl(d);
        break;
      default:
        f.indexOf("aria-") === 0 || f.indexOf("data-") === 0 ? u.attrs[f.toLowerCase()] = d : u.attrs[Ci(f)] = d;
    }
    return u;
  }, {
    attrs: {}
  }), i = n.style, o = i === void 0 ? {} : i, l = Sl(n, Dl);
  return a.attrs.style = me(me({}, a.attrs.style), o), e.apply(void 0, [t.tag, me(me({}, a.attrs), l)].concat(Mn(r)));
}
var _i = !1;
try {
  _i = process.env.NODE_ENV === "production";
} catch {
}
function ql() {
  if (!_i && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function ha(e) {
  if (e && kt(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Fn.icon)
    return Fn.icon(e);
  if (e === null)
    return null;
  if (e && kt(e) === "object" && e.prefix && e.iconName)
    return e;
  if (Array.isArray(e) && e.length === 2)
    return {
      prefix: e[0],
      iconName: e[1]
    };
  if (typeof e == "string")
    return {
      prefix: "fas",
      iconName: e
    };
}
function ln(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? $e({}, e, t) : {};
}
var ga = {
  border: !1,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: !1
}, ae = /* @__PURE__ */ Ce.forwardRef(function(e, t) {
  var n = me(me({}, ga), e), r = n.icon, a = n.mask, i = n.symbol, o = n.className, l = n.title, u = n.titleId, f = n.maskId, d = ha(r), m = ln("classes", [].concat(Mn(Ml(n)), Mn((o || "").split(" ")))), h = ln("transform", typeof n.transform == "string" ? Fn.transform(n.transform) : n.transform), p = ln("mask", ha(a)), b = _l(d, me(me(me(me({}, m), h), p), {}, {
    symbol: i,
    title: l,
    titleId: u,
    maskId: f
  }));
  if (!b)
    return ql("Could not find icon", d), null;
  var g = b.abstract, x = {
    ref: t
  };
  return Object.keys(n).forEach(function(C) {
    ga.hasOwnProperty(C) || (x[C] = n[C]);
  }), $l(g[0], x);
});
ae.displayName = "FontAwesomeIcon";
ae.propTypes = {
  beat: s.bool,
  border: s.bool,
  beatFade: s.bool,
  bounce: s.bool,
  className: s.string,
  fade: s.bool,
  flash: s.bool,
  mask: s.oneOfType([s.object, s.array, s.string]),
  maskId: s.string,
  fixedWidth: s.bool,
  inverse: s.bool,
  flip: s.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: s.oneOfType([s.object, s.array, s.string]),
  listItem: s.bool,
  pull: s.oneOf(["right", "left"]),
  pulse: s.bool,
  rotation: s.oneOf([0, 90, 180, 270]),
  shake: s.bool,
  size: s.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: s.bool,
  spinPulse: s.bool,
  spinReverse: s.bool,
  symbol: s.oneOfType([s.bool, s.string]),
  title: s.string,
  titleId: s.string,
  transform: s.oneOfType([s.string, s.object]),
  swapOpacity: s.bool
};
var $l = Oi.bind(null, Ce.createElement);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const Bl = {
  prefix: "fas",
  iconName: "cloud",
  icon: [640, 512, [9729], "f0c2", "M0 336c0 79.5 64.5 144 144 144l368 0c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"]
}, Wl = {
  prefix: "fas",
  iconName: "compass",
  icon: [512, 512, [129517], "f14e", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
}, Yl = {
  prefix: "fas",
  iconName: "circle-exclamation",
  icon: [512, 512, ["exclamation-circle"], "f06a", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]
}, va = Yl, Ul = {
  prefix: "fas",
  iconName: "lock",
  icon: [448, 512, [128274], "f023", "M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"]
}, Hl = {
  prefix: "fas",
  iconName: "pizza-slice",
  icon: [512, 512, [], "f818", "M169.7 .9c-22.8-1.6-41.9 14-47.5 34.7L110.4 80c.5 0 1.1 0 1.6 0c176.7 0 320 143.3 320 320c0 .5 0 1.1 0 1.6l44.4-11.8c20.8-5.5 36.3-24.7 34.7-47.5C498.5 159.5 352.5 13.5 169.7 .9zM399.8 410.2c.1-3.4 .2-6.8 .2-10.2c0-159.1-128.9-288-288-288c-3.4 0-6.8 .1-10.2 .2L.5 491.9c-1.5 5.5 .1 11.4 4.1 15.4s9.9 5.6 15.4 4.1L399.8 410.2zM176 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM96 384a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]
}, Vl = {
  prefix: "fas",
  iconName: "circle-check",
  icon: [512, 512, [61533, "check-circle"], "f058", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
}, Xl = Vl, Gl = {
  prefix: "fas",
  iconName: "arrow-left",
  icon: [448, 512, [8592], "f060", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]
}, cn = {
  prefix: "fas",
  iconName: "phone-volume",
  icon: [512, 512, ["volume-control-phone"], "f2a0", "M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"]
}, Kl = {
  prefix: "fas",
  iconName: "envelope",
  icon: [512, 512, [128386, 9993, 61443], "f0e0", "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]
}, Jl = {
  prefix: "fas",
  iconName: "circle-info",
  icon: [512, 512, ["info-circle"], "f05a", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, ba = Jl, Zl = {
  prefix: "fas",
  iconName: "landmark",
  icon: [512, 512, [127963], "f66f", "M240.1 4.2c9.8-5.6 21.9-5.6 31.8 0l171.8 98.1L448 104l0 .9 47.9 27.4c12.6 7.2 18.8 22 15.1 36s-16.4 23.8-30.9 23.8L32 192c-14.5 0-27.2-9.8-30.9-23.8s2.5-28.8 15.1-36L64 104.9l0-.9 4.4-1.6L240.1 4.2zM64 224l64 0 0 192 40 0 0-192 64 0 0 192 48 0 0-192 64 0 0 192 40 0 0-192 64 0 0 196.3c.6 .3 1.2 .7 1.8 1.1l48 32c11.7 7.8 17 22.4 12.9 35.9S494.1 512 480 512L32 512c-14.1 0-26.5-9.2-30.6-22.7s1.1-28.1 12.9-35.9l48-32c.6-.4 1.2-.7 1.8-1.1L64 224z"]
}, Ql = {
  prefix: "fas",
  iconName: "clock",
  icon: [512, 512, [128339, "clock-four"], "f017", "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]
}, ec = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, tc = ec, nc = {
  prefix: "fas",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]
}, rc = nc, ac = {
  prefix: "fas",
  iconName: "chevron-right",
  icon: [320, 512, [9002], "f054", "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]
}, ic = {
  prefix: "fas",
  iconName: "triangle-exclamation",
  icon: [512, 512, [9888, "exclamation-triangle", "warning"], "f071", "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
}, oc = ic, nr = ({
  domain: e = "An official website of the City of Portland",
  icon: t = void 0,
  heading: n = "Official websites use .gov",
  description: r = "A .gov website belongs to an official government organization in the United States.",
  showHttpsGuidance: a = !0,
  initiallyExpanded: i = !1,
  className: o = ""
}) => {
  const [l, u] = Oe(i), f = ["banner", o].filter(Boolean).join(" ");
  return /* @__PURE__ */ w("section", { className: f, children: [
    /* @__PURE__ */ w("div", { className: "banner-content", children: [
      /* @__PURE__ */ w("div", { className: "banner-header", children: [
        /* @__PURE__ */ c("div", { className: "banner-header-icon", children: t || /* @__PURE__ */ w("svg", { width: "24", height: "16", viewBox: "0 0 24 16", xmlns: "http://www.w3.org/2000/svg", children: [
          /* @__PURE__ */ c("rect", { width: "24", height: "16", fill: "#B22234" }),
          /* @__PURE__ */ c("rect", { y: "1.23", width: "24", height: "1.23", fill: "white" }),
          /* @__PURE__ */ c("rect", { y: "3.69", width: "24", height: "1.23", fill: "white" }),
          /* @__PURE__ */ c("rect", { y: "6.15", width: "24", height: "1.23", fill: "white" }),
          /* @__PURE__ */ c("rect", { y: "8.62", width: "24", height: "1.23", fill: "white" }),
          /* @__PURE__ */ c("rect", { y: "11.08", width: "24", height: "1.23", fill: "white" }),
          /* @__PURE__ */ c("rect", { y: "13.54", width: "24", height: "1.23", fill: "white" }),
          /* @__PURE__ */ c("rect", { width: "9.6", height: "8.62", fill: "#3C3B6E" }),
          /* @__PURE__ */ c("circle", { cx: "1.2", cy: "1.1", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "2.4", cy: "1.1", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "3.6", cy: "1.1", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "4.8", cy: "1.1", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "6", cy: "1.1", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "7.2", cy: "1.1", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "8.4", cy: "1.1", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "1.8", cy: "2.2", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "3", cy: "2.2", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "4.2", cy: "2.2", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "5.4", cy: "2.2", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "6.6", cy: "2.2", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "7.8", cy: "2.2", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "1.2", cy: "3.3", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "2.4", cy: "3.3", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "3.6", cy: "3.3", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "4.8", cy: "3.3", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "6", cy: "3.3", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "7.2", cy: "3.3", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "8.4", cy: "3.3", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "1.8", cy: "4.4", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "3", cy: "4.4", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "4.2", cy: "4.4", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "5.4", cy: "4.4", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "6.6", cy: "4.4", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "7.8", cy: "4.4", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "1.2", cy: "5.5", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "2.4", cy: "5.5", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "3.6", cy: "5.5", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "4.8", cy: "5.5", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "6", cy: "5.5", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "7.2", cy: "5.5", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "8.4", cy: "5.5", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "1.8", cy: "6.6", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "3", cy: "6.6", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "4.2", cy: "6.6", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "5.4", cy: "6.6", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "6.6", cy: "6.6", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "7.8", cy: "6.6", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "1.2", cy: "7.7", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "2.4", cy: "7.7", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "3.6", cy: "7.7", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "4.8", cy: "7.7", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "6", cy: "7.7", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "7.2", cy: "7.7", r: "0.3", fill: "white" }),
          /* @__PURE__ */ c("circle", { cx: "8.4", cy: "7.7", r: "0.3", fill: "white" })
        ] }) }),
        /* @__PURE__ */ c("p", { className: "banner-header-text", children: e })
      ] }),
      /* @__PURE__ */ w(
        "button",
        {
          className: "banner-button",
          onClick: () => {
            u(!l);
          },
          "aria-expanded": l,
          "aria-controls": "banner-content",
          children: [
            /* @__PURE__ */ c("span", { className: "banner-button-text", children: "Here's how you know" }),
            /* @__PURE__ */ c("span", { className: `banner-button-icon ${l ? "is-open" : ""}`, children: /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ c("polyline", { points: "6 9 12 15 18 9" }) }) })
          ]
        }
      )
    ] }),
    l && /* @__PURE__ */ w(
      "div",
      {
        id: "banner-expanded-content",
        className: "banner-expanded-content",
        children: [
          /* @__PURE__ */ w("div", { className: "banner-guidance", children: [
            /* @__PURE__ */ c("div", { className: "banner-guidance-icon", children: /* @__PURE__ */ c(ae, { icon: Zl, style: { fontSize: "40px", color: "#2378C3" } }) || null }),
            /* @__PURE__ */ c("div", { className: "banner-guidance-text", children: /* @__PURE__ */ w("p", { children: [
              /* @__PURE__ */ c("strong", { children: n }),
              /* @__PURE__ */ c("br", {}),
              r
            ] }) })
          ] }),
          a && /* @__PURE__ */ w("div", { className: "banner-guidance", children: [
            /* @__PURE__ */ c("div", { className: "banner-guidance-icon", children: /* @__PURE__ */ c(ae, { icon: Ul, style: { fontSize: "40px", color: "#719F2A" } }) }),
            /* @__PURE__ */ c("div", { className: "banner-guidance-text", children: /* @__PURE__ */ w("p", { children: [
              /* @__PURE__ */ c("strong", { children: "Secure websites use HTTPS" }),
              /* @__PURE__ */ c("br", {}),
              "A ",
              /* @__PURE__ */ c("strong", { children: "lock" }),
              " or ",
              /* @__PURE__ */ c("strong", { children: "https://" }),
              " means you've safely connected to the .gov website. Share sensitive information only on official, secure websites."
            ] }) })
          ] })
        ]
      }
    )
  ] });
};
nr.propTypes = {
  /** Text describing the domain/owner of the site */
  domain: s.string,
  /** Custom icon element to display in the banner */
  icon: s.node,
  /** Heading text for the banner content */
  heading: s.string,
  /** Description text for the banner content */
  description: s.node,
  /** Whether to show the HTTPS guidance section */
  showHttpsGuidance: s.bool,
  /** Whether the banner content is initially expanded */
  initiallyExpanded: s.bool,
  /** Additional CSS class for the banner */
  className: s.string
};
nr.defaultProps = {
  domain: "An official website of the City of Portland",
  icon: void 0,
  heading: "Official websites use .gov",
  description: "A .gov website belongs to an official government organization in the United States.",
  showHttpsGuidance: !0,
  initiallyExpanded: !1,
  className: ""
};
const rr = ({
  title: e,
  logoUrl: t,
  logoAlt: n,
  tagline: r
}) => /* @__PURE__ */ w("a", { href: "/", className: "header-logo-container", children: [
  t && /* @__PURE__ */ c(
    "img",
    {
      src: t,
      alt: n,
      className: "header-logo-img"
    }
  ),
  /* @__PURE__ */ w("div", { className: "header-logo-text-container", children: [
    /* @__PURE__ */ c("span", { className: "header-logo-text", children: e }),
    r && /* @__PURE__ */ c("span", { className: "header-logo-tagline", children: r })
  ] })
] });
rr.propTypes = {
  /** Title text for the header */
  title: s.string.isRequired,
  /** URL for the logo image */
  logoUrl: s.string,
  /** Alt text for the logo image */
  logoAlt: s.string,
  /** Optional tagline displayed below the title */
  tagline: s.string
};
rr.defaultProps = {
  logoUrl: void 0,
  logoAlt: "Logo",
  tagline: void 0
};
const ki = ({ item: e }) => /* @__PURE__ */ c("li", { className: "header-menu-item", role: "menuitem", children: /* @__PURE__ */ w(
  "a",
  {
    href: e.href,
    className: "header-menu-link",
    "aria-current": e.current ? "page" : void 0,
    children: [
      /* @__PURE__ */ c("span", { className: "header-menu-link-title", children: e.label }),
      e.description && /* @__PURE__ */ c("span", { className: "header-menu-link-description", children: e.description })
    ]
  }
) });
ki.propTypes = {
  /** Menu item object containing label, href, description, and current state */
  item: s.shape({
    label: s.string.isRequired,
    href: s.string.isRequired,
    description: s.string,
    current: s.bool
  }).isRequired
};
const ar = ({
  items: e,
  mainHeading: t,
  id: n,
  className: r
}) => {
  const a = `${n}-heading`;
  return /* @__PURE__ */ w("nav", { className: `header-menu-group ${r || ""}`, role: "navigation", "aria-labelledby": a, children: [
    /* @__PURE__ */ c("h3", { id: a, className: "header-menu-heading", children: t }),
    /* @__PURE__ */ c("ul", { className: "header-menu-group-items", role: "menu", children: e.map((i, o) => /* @__PURE__ */ c(ki, { item: i }, o)) })
  ] });
};
ar.propTypes = {
  /** Array of menu items to display */
  items: s.arrayOf(
    s.shape({
      label: s.string.isRequired,
      href: s.string.isRequired,
      description: s.string,
      current: s.bool
    })
  ).isRequired,
  /** Main heading text for the menu group */
  mainHeading: s.string,
  /** ID for the component */
  id: s.string,
  /** Custom class name */
  className: s.string
};
ar.defaultProps = {
  mainHeading: "General Information",
  id: "pgov-header-menu-group"
};
const ir = ({
  title: e,
  logoUrl: t,
  logoAlt: n,
  tagline: r,
  navItems: a,
  mainHeading: i,
  menuText: o,
  openMenuAriaLabel: l,
  closeMenuAriaLabel: u,
  className: f
}) => {
  const [d, m] = Oe(!1), h = () => {
    m(!d);
  };
  return /* @__PURE__ */ w("header", { className: `header ${f || ""}`, children: [
    /* @__PURE__ */ c("div", { className: "header-main", children: /* @__PURE__ */ w("div", { className: "header-container", children: [
      /* @__PURE__ */ c("div", { className: "header-logo", children: /* @__PURE__ */ c(
        rr,
        {
          title: e,
          logoUrl: t,
          logoAlt: n,
          tagline: r
        }
      ) }),
      /* @__PURE__ */ c("div", { className: `header-mobile-menu ${d ? "is-open" : ""}`, children: /* @__PURE__ */ w(
        "button",
        {
          className: "header-mobile-menu-button",
          "aria-label": d ? u : l,
          "aria-expanded": d,
          "aria-controls": "header-mobile-dropdown",
          onClick: h,
          children: [
            /* @__PURE__ */ w("span", { className: "header-mobile-menu-icon", children: [
              /* @__PURE__ */ c("span", {}),
              /* @__PURE__ */ c("span", {}),
              /* @__PURE__ */ c("span", {})
            ] }),
            /* @__PURE__ */ c("span", { className: "header-mobile-menu-text", "aria-hidden": "true", children: o })
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ c(
      "div",
      {
        id: "header-mobile-dropdown",
        className: `header-mobile-dropdown ${d ? "is-open" : ""}`,
        children: /* @__PURE__ */ c("div", { className: "header-mobile-menu-content", children: /* @__PURE__ */ c("nav", { className: "header-mobile-nav", "aria-label": "Primary navigation", children: /* @__PURE__ */ c(
          ar,
          {
            items: a,
            mainHeading: i,
            id: "header-menu-group"
          }
        ) }) })
      }
    )
  ] });
};
ir.propTypes = {
  /** Title text for the header */
  title: s.string.isRequired,
  /** URL for the logo image */
  logoUrl: s.string,
  /** Alt text for the logo image */
  logoAlt: s.string,
  /** Optional tagline displayed below the title */
  tagline: s.string,
  /** Array of navigation items */
  navItems: s.arrayOf(
    s.shape({
      label: s.string.isRequired,
      href: s.string.isRequired,
      description: s.string,
      current: s.bool
    })
  ).isRequired,
  /** Main heading text for the navigation menu */
  mainHeading: s.string,
  /** Text for the menu button */
  menuText: s.string,
  /** Aria label for opening the menu */
  openMenuAriaLabel: s.string,
  /** Aria label for closing the menu */
  closeMenuAriaLabel: s.string,
  /** Additional CSS class names */
  className: s.string
};
ir.defaultProps = {
  logoUrl: void 0,
  logoAlt: "Logo",
  tagline: void 0,
  mainHeading: "General Information",
  menuText: "Menu",
  openMenuAriaLabel: "Menu",
  closeMenuAriaLabel: "Close menu",
  className: void 0
};
s.bool.isRequired, s.func.isRequired, s.string, s.string, s.string, s.string;
const or = ({
  text: e = "Skip to main content",
  mainContentId: t = "main-content",
  className: n = ""
}) => {
  const r = ["skipnav", n].filter(Boolean).join(" ");
  return /* @__PURE__ */ c(
    "a",
    {
      href: `#${t}`,
      className: r,
      "data-testid": "skip-nav",
      children: e
    }
  );
};
or.propTypes = {
  /** The text to display in the skip nav link */
  text: s.string,
  /** The ID of the main content element to skip to */
  mainContentId: s.string,
  /** Custom class name */
  className: s.string
};
or.defaultProps = {
  text: "Skip to main content",
  mainContentId: "main-content",
  className: ""
};
const sr = ({
  feedbackUrl: e,
  accessibilityText: t,
  serviceRequestText: n,
  onlineServiceUrl: r,
  phoneNumber: a,
  relayServiceText: i,
  relayServiceNumber: o,
  translationText: l,
  generalInfoLinks: u,
  termsLinks: f,
  portlandGovLinks: d,
  socialMediaLinks: m,
  cityName: h,
  cityLogoUrl: p,
  cityLogoAlt: b,
  copyrightText: g,
  exploreServicesText: x,
  exploreServicesUrl: C,
  className: O
}) => /* @__PURE__ */ w("footer", { className: `footer ${O}`, role: "contentinfo", children: [
  /* @__PURE__ */ c("div", { className: "footer-feedback-section", children: /* @__PURE__ */ w("p", { className: "footer-feedback-text", children: [
    "See something we could improve on this page? ",
    /* @__PURE__ */ c("a", { href: e, className: "footer-feedback-link", children: "Give website feedback" }),
    "."
  ] }) }),
  /* @__PURE__ */ c("div", { className: "footer-accessibility-section", children: /* @__PURE__ */ w("div", { className: "footer-accessibility-container", children: [
    /* @__PURE__ */ w("div", { className: "footer-text-container", children: [
      /* @__PURE__ */ w("p", { className: "footer-accessibility-text", children: [
        t,
        " ",
        /* @__PURE__ */ w("span", { className: "footer-request-services", children: [
          "Request these services ",
          /* @__PURE__ */ c("a", { href: r, className: "footer-online-link", children: "online" }),
          " or ",
          /* @__PURE__ */ c("a", { href: `tel:${a.replace(/\D/g, "")}`, className: "footer-phone-link", children: a }),
          ". Relay Service: ",
          /* @__PURE__ */ c("a", { href: `tel:${o.replace(/\D/g, "")}`, className: "footer-relay-link", children: o }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ w("p", { className: "footer-translation-text", children: [
        /* @__PURE__ */ c("a", { href: `tel:${a.replace(/\D/g, "")}`, className: "footer-translation-phone-link", children: a }),
        " ",
        l
      ] })
    ] }),
    /* @__PURE__ */ c("div", { className: "footer-explore-services", children: /* @__PURE__ */ w("a", { href: C, className: "footer-explore-button", children: [
      x,
      " ",
      /* @__PURE__ */ c("span", { className: "footer-explore-arrow", children: "→" })
    ] }) })
  ] }) }),
  /* @__PURE__ */ c("div", { className: "footer-main", children: /* @__PURE__ */ w("div", { className: "footer-nav", children: [
    /* @__PURE__ */ w("div", { className: "footer-city-info", children: [
      /* @__PURE__ */ c("p", { className: "footer-city-name", children: h }),
      /* @__PURE__ */ c("img", { src: p, alt: b, className: "footer-city-logo" }),
      /* @__PURE__ */ c("p", { className: "footer-copyright", children: g })
    ] }),
    /* @__PURE__ */ w("div", { className: "footer-nav-section", children: [
      /* @__PURE__ */ c("h4", { className: "footer-heading", children: "General Information" }),
      /* @__PURE__ */ c("ul", { className: "footer-links", children: u.map((E, _) => /* @__PURE__ */ c("li", { className: "footer-link-item", children: /* @__PURE__ */ c("a", { href: E.href, className: "footer-link", children: E.label }) }, `general-link-${_}`)) })
    ] }),
    /* @__PURE__ */ w("div", { className: "footer-nav-section", children: [
      /* @__PURE__ */ c("h4", { className: "footer-heading", children: "Terms And Policies" }),
      /* @__PURE__ */ c("ul", { className: "footer-links", children: f.map((E, _) => /* @__PURE__ */ c("li", { className: "footer-link-item", children: /* @__PURE__ */ c("a", { href: E.href, className: "footer-link", children: E.label }) }, `terms-link-${_}`)) })
    ] }),
    /* @__PURE__ */ w("div", { className: "footer-nav-section", children: [
      /* @__PURE__ */ c("h4", { className: "footer-heading", children: "Portland.Gov" }),
      /* @__PURE__ */ c("ul", { className: "footer-links", children: d.map((E, _) => /* @__PURE__ */ c("li", { className: "footer-link-item", children: /* @__PURE__ */ c("a", { href: E.href, className: "footer-link", children: E.label }) }, `pgov-link-${_}`)) })
    ] }),
    /* @__PURE__ */ w("div", { className: "footer-nav-section", children: [
      /* @__PURE__ */ c("h4", { className: "footer-heading", children: "Social Media" }),
      /* @__PURE__ */ c("ul", { className: "footer-links", children: m.map((E, _) => /* @__PURE__ */ c("li", { className: "footer-link-item", children: /* @__PURE__ */ c("a", { href: E.href, className: "footer-link", children: E.label }) }, `social-link-${_}`)) })
    ] })
  ] }) })
] });
sr.propTypes = {
  /** URL for the feedback link */
  feedbackUrl: s.string,
  /** Text for the accessibility section */
  accessibilityText: s.string,
  /** Text for service request */
  serviceRequestText: s.string,
  /** URL for online service */
  onlineServiceUrl: s.string,
  /** Phone number for services */
  phoneNumber: s.string,
  /** Text for relay service */
  relayServiceText: s.string,
  /** Relay service number */
  relayServiceNumber: s.string,
  /** Text for translation section */
  translationText: s.string,
  /** Links for general information section */
  generalInfoLinks: s.arrayOf(
    s.shape({
      label: s.string.isRequired,
      href: s.string.isRequired
    })
  ),
  /** Links for terms and policies section */
  termsLinks: s.arrayOf(
    s.shape({
      label: s.string.isRequired,
      href: s.string.isRequired
    })
  ),
  /** Links for Portland.gov section */
  portlandGovLinks: s.arrayOf(
    s.shape({
      label: s.string.isRequired,
      href: s.string.isRequired
    })
  ),
  /** Social media links */
  socialMediaLinks: s.arrayOf(
    s.shape({
      label: s.string.isRequired,
      href: s.string.isRequired
    })
  ),
  /** City name */
  cityName: s.string,
  /** URL for the city logo */
  cityLogoUrl: s.string,
  /** Alt text for the city logo */
  cityLogoAlt: s.string,
  /** Copyright text */
  copyrightText: s.string,
  /** Text for explore services button */
  exploreServicesText: s.string,
  /** URL for explore services button */
  exploreServicesUrl: s.string,
  /** Additional CSS class for the footer */
  className: s.string
};
sr.defaultProps = {
  feedbackUrl: "/contact",
  accessibilityText: "The City of Portland ensures meaningful access to City programs, services, and activities to comply with Civil Rights Title VI and ADA Title II laws and reasonably provides: translation, interpretation, modifications, accommodations, alternative formats, auxiliary aids and services.",
  serviceRequestText: "Request these services",
  onlineServiceUrl: "/contact",
  phoneNumber: "503-823-4000",
  relayServiceText: "Relay Service",
  relayServiceNumber: "711",
  translationText: "Traducción e Interpretación | Biên Dịch và Thông Dịch | 口笔译服务 | Устный и письменный перевод | Turjumaad iyo Fasiraad | Письмовий і усний переклад | Traducere și interpretariat | Chiaku me Awewen Kapas | अनुवादन तथा व्याख्या",
  generalInfoLinks: [
    { label: "311@portlandoregon.gov", href: "mailto:311@portlandoregon.gov" },
    { label: "311 information an customer service", href: "/customer-service" },
    { label: "503-823-4000", href: "tel:5038234000" },
    { label: "711 Oregon Relay Service", href: "tel:711" }
  ],
  termsLinks: [
    { label: "ADA accommodation", href: "/ada-accommodation" },
    { label: "Captioning and transcription", href: "/captioning" },
    { label: "Privacy Policy", href: "/privacy" }
  ],
  portlandGovLinks: [
    { label: "About this website", href: "/about" },
    { label: "Employee portal", href: "/employees" },
    { label: "Editor log in", href: "/login" }
  ],
  socialMediaLinks: [
    { label: "Bluesky", href: "https://bsky.app" },
    { label: "Facebook", href: "https://facebook.com/CityofPortland" },
    { label: "Instagram", href: "https://instagram.com/portlandoregon" },
    { label: "X (Twitter)", href: "https://twitter.com/portlandgov" }
  ],
  cityName: "City of Portland, Oregon",
  cityLogoUrl: "/city-seal.png",
  cityLogoAlt: "City of Portland Seal",
  copyrightText: "© Copyright 2018-2023",
  exploreServicesText: "Explore all services",
  exploreServicesUrl: "/services",
  className: ""
};
const lr = ({
  items: e,
  truncateMiddle: t = !1,
  className: n = "",
  customSeparator: r
}) => {
  const [a, i] = Oe(window.innerWidth < 768), [o, l] = Oe(!1), u = tt(null), f = tt(null), d = (b) => {
    if (!u.current || !f.current || !t || e.length <= 3 || a) {
      l(!1);
      return;
    }
    if (typeof b == "boolean") {
      l(b);
      return;
    }
    l(!1), requestAnimationFrame(() => {
      const g = u.current.offsetWidth, x = f.current;
      Array.from(x.children).reduce((O, E) => O + E.offsetWidth, 0) > g && l(!0);
    });
  };
  nt(() => {
    const b = () => {
      const x = window.innerWidth < 768;
      i(x), x ? l(!1) : d();
    };
    window.addEventListener("resize", b), d();
    const g = new ResizeObserver(() => {
      d();
    });
    return u.current && g.observe(u.current), () => {
      window.removeEventListener("resize", b), g.disconnect();
    };
  }, [a, t, e]), nt(() => {
    process.env.NODE_ENV === "test" && t && e.length > 3 && d(!0);
  }, [t, e]);
  const m = () => r || /* @__PURE__ */ c(
    ae,
    {
      icon: a ? Gl : ac,
      className: "breadcrumb__separator",
      "aria-hidden": "true"
    }
  ), h = () => {
    if (!o || a)
      return e.map((C, O) => /* @__PURE__ */ w("li", { className: "breadcrumb__item", children: [
        a && O > 0 && m(),
        O === e.length - 1 ? /* @__PURE__ */ c("span", { className: "breadcrumb__current", "aria-current": "page", children: C.text }) : /* @__PURE__ */ w(Ct, { children: [
          /* @__PURE__ */ c("a", { href: C.href, className: "breadcrumb__link", children: C.text }),
          !a && m()
        ] })
      ] }, O));
    const b = e[0], g = e[e.length - 1], x = e.length - 2;
    return /* @__PURE__ */ w(Ct, { children: [
      /* @__PURE__ */ w("li", { className: "breadcrumb__item", children: [
        /* @__PURE__ */ c("a", { href: b.href, className: "breadcrumb__link", children: b.text }),
        m()
      ] }, "first"),
      /* @__PURE__ */ w("li", { className: "breadcrumb__item ellipsis", children: [
        /* @__PURE__ */ c("span", { "aria-label": `${x} more levels`, children: "..." }),
        m()
      ] }, "ellipsis"),
      /* @__PURE__ */ c("li", { className: "breadcrumb__item", children: /* @__PURE__ */ c("span", { className: "breadcrumb__current", "aria-current": "page", children: g.text }) }, "last")
    ] });
  }, p = [
    "breadcrumb",
    o && !a && "breadcrumb--truncated",
    n
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ c(
    "nav",
    {
      className: p,
      "aria-label": "Breadcrumbs",
      ref: u,
      children: /* @__PURE__ */ c(
        "ol",
        {
          className: `breadcrumb__list ${o ? "breadcrumb__list--truncate" : ""}`,
          ref: f,
          children: h()
        }
      )
    }
  );
};
lr.propTypes = {
  /**
   * Array of breadcrumb items with text and href
   */
  items: s.arrayOf(
    s.shape({
      text: s.string.isRequired,
      href: s.string
    })
  ).isRequired,
  /**
   * Whether to truncate middle items when breadcrumbs get too long
   */
  truncateMiddle: s.bool,
  /**
   * Additional CSS class names
   */
  className: s.string,
  /**
   * Custom separator element
   */
  customSeparator: s.node
};
lr.defaultProps = {
  truncateMiddle: !1,
  className: "",
  customSeparator: void 0
};
const Si = ({
  bannerProps: e,
  headerProps: t,
  skipNavProps: n,
  footerProps: r,
  breadcrumbsProps: a,
  children: i,
  includeBanner: o = !0,
  includeSkipNav: l = !0,
  includeFooter: u = !0,
  includeBreadcrumbs: f = !0,
  className: d = ""
}) => /* @__PURE__ */ w("div", { className: `pgov-page-template ${d}`, children: [
  l && /* @__PURE__ */ c(or, { ...n }),
  o && /* @__PURE__ */ c(nr, { ...e }),
  /* @__PURE__ */ c(ir, { ...t }),
  /* @__PURE__ */ w(
    "main",
    {
      id: "main-content",
      className: "pgov-page-template-main",
      tabIndex: "-1",
      role: "main",
      "aria-label": "Main content",
      children: [
        f && /* @__PURE__ */ c(lr, { ...a }),
        i
      ]
    }
  ),
  u && /* @__PURE__ */ c(sr, { ...r })
] });
Si.propTypes = {
  /** Props for the Banner component */
  bannerProps: s.object,
  /** Props for the Header component */
  headerProps: s.object.isRequired,
  /** Props for the SkipNav component */
  skipNavProps: s.object,
  /** Props for the Footer component */
  footerProps: s.object,
  /** Props for the Breadcrumbs component */
  breadcrumbsProps: s.object,
  /** Content to be rendered in the main section */
  children: s.node,
  /** Whether to include the Banner component */
  includeBanner: s.bool,
  /** Whether to include the SkipNav component */
  includeSkipNav: s.bool,
  /** Whether to include the Footer component */
  includeFooter: s.bool,
  /** Whether to include the Breadcrumbs component */
  includeBreadcrumbs: s.bool,
  /** Additional CSS class name */
  className: s.string
};
Si.defaultProps = {
  bannerProps: {},
  skipNavProps: {},
  breadcrumbsProps: {},
  children: null,
  includeBanner: !0,
  includeSkipNav: !0,
  includeFooter: !0,
  includeBreadcrumbs: !0,
  className: ""
};
const Pi = ({ item: e, isActive: t, isExpanded: n, isParent: r, position: a, onClick: i }) => {
  const o = [
    "side-nav-item",
    t ? "active" : "",
    r ? "parent" : "child",
    a,
    n ? "expanded" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ w(
    "a",
    {
      href: e.link,
      className: o,
      "aria-current": t ? "page" : void 0,
      "aria-expanded": r ? n : void 0,
      onClick: (l) => {
        r && (l.preventDefault(), i());
      },
      children: [
        /* @__PURE__ */ c("div", { className: `nav-indicator ${t ? "active-indicator" : ""}` }),
        /* @__PURE__ */ c("div", { className: "nav-content", children: /* @__PURE__ */ c("div", { className: "side-nav-text", children: e.title }) })
      ]
    }
  );
};
Pi.propTypes = {
  item: s.shape({
    title: s.string.isRequired,
    link: s.string.isRequired,
    children: s.arrayOf(s.shape({
      title: s.string.isRequired,
      link: s.string.isRequired
    }))
  }).isRequired,
  isActive: s.bool.isRequired,
  isExpanded: s.bool.isRequired,
  isParent: s.bool.isRequired,
  position: s.oneOf(["top", "middle", "bottom"]).isRequired,
  onClick: s.func.isRequired
};
const Ai = ({ items: e, activeItemId: t, activeIndex: n }) => {
  const [r, a] = Oe(null), i = (l, u, f = !1) => l === 0 && !f ? "top" : l === u - 1 ? "bottom" : "middle", o = (l, u = !1) => l.map((f, d) => {
    var g;
    const m = !!((g = f.children) != null && g.length), h = t ? f.link === t : d === n, p = r === f.link, b = i(d, l.length, u);
    return /* @__PURE__ */ w("li", { className: "nav-item-container", children: [
      /* @__PURE__ */ c(
        Pi,
        {
          item: f,
          isActive: h,
          isExpanded: p,
          isParent: m,
          position: b,
          onClick: () => {
            a(p ? null : f.link);
          }
        }
      ),
      m && p && /* @__PURE__ */ c("ul", { className: "nav-children", children: o(f.children, !0) })
    ] }, f.link);
  });
  return /* @__PURE__ */ c(
    "nav",
    {
      className: "side-nav",
      "aria-label": "Section Navigation",
      role: "navigation",
      children: /* @__PURE__ */ c("ul", { children: o(e) })
    }
  );
};
Ai.propTypes = {
  items: s.arrayOf(
    s.shape({
      title: s.string.isRequired,
      link: s.string.isRequired,
      children: s.arrayOf(s.shape({
        title: s.string.isRequired,
        link: s.string.isRequired
      }))
    })
  ).isRequired,
  activeItemId: s.string,
  activeIndex: s.number
};
Ai.defaultProps = {
  activeItemId: null,
  activeIndex: null
};
const sc = ({ heading: e, description: t, children: n }) => {
  const r = `summary-box-${e.toLowerCase().replace(/\s+/g, "-")}`;
  return /* @__PURE__ */ c(
    "div",
    {
      className: "usa-summary-box",
      role: "region",
      "aria-labelledby": r,
      children: /* @__PURE__ */ w("div", { className: "usa-summary-box__body", children: [
        /* @__PURE__ */ c("h4", { className: "usa-summary-box__heading", id: r, children: e }),
        t && /* @__PURE__ */ c("div", { className: "summary-box-description", children: t }),
        /* @__PURE__ */ c("div", { className: "usa-summary-box__text", children: n })
      ] })
    }
  );
};
sc.propTypes = {
  heading: s.string.isRequired,
  description: s.string,
  children: s.node.isRequired
};
const Ii = ({ number: e }) => /* @__PURE__ */ w("div", { className: "stepNumberWrapper", children: [
  /* @__PURE__ */ c(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 48 48",
      className: "stepNumberSvg",
      children: /* @__PURE__ */ c(
        "circle",
        {
          cx: "24",
          cy: "24",
          r: "22"
        }
      )
    }
  ),
  /* @__PURE__ */ c("span", { className: "stepNumberText", children: e })
] });
Ii.propTypes = {
  number: s.number.isRequired
};
const Fi = ({ step: e, stepNumber: t, isLast: n }) => /* @__PURE__ */ w("div", { className: "stepItem", children: [
  /* @__PURE__ */ w("div", { className: "stepNumberContainer", children: [
    /* @__PURE__ */ c(Ii, { number: t }),
    !n && /* @__PURE__ */ c("div", { className: "verticalBar" })
  ] }),
  /* @__PURE__ */ w("div", { className: "stepContent", children: [
    /* @__PURE__ */ c("h3", { className: "stepHeading", children: e.heading }),
    /* @__PURE__ */ c("p", { className: "stepDescription", children: e.description })
  ] })
] });
Fi.propTypes = {
  step: s.shape({
    heading: s.string.isRequired,
    description: s.string.isRequired
  }).isRequired,
  stepNumber: s.number.isRequired,
  isLast: s.bool.isRequired
};
const lc = ({ title: e, mainDescription: t, steps: n }) => /* @__PURE__ */ w("div", { className: "processSteps", children: [
  /* @__PURE__ */ w("div", { className: "header", children: [
    /* @__PURE__ */ c("h2", { className: "title", children: e }),
    /* @__PURE__ */ c("p", { className: "mainDescription", children: t })
  ] }),
  /* @__PURE__ */ c("div", { className: "stepsContainer", children: n.map((r, a) => /* @__PURE__ */ c(
    Fi,
    {
      step: r,
      stepNumber: a + 1,
      isLast: a === n.length - 1
    },
    a
  )) })
] });
lc.propTypes = {
  title: s.string.isRequired,
  mainDescription: s.string.isRequired,
  steps: s.arrayOf(
    s.shape({
      heading: s.string.isRequired,
      description: s.string.isRequired
    })
  ).isRequired
};
const cc = ({ variant: e = "default", children: t, className: n, ...r }) => {
  const o = ["usa-tag", e === "big" ? "usa-tag--big" : "", n].filter(Boolean).join(" ");
  return /* @__PURE__ */ c("span", { className: o, ...r, children: t });
};
cc.propTypes = {
  /** The content of the tag */
  children: s.node.isRequired,
  /** The variant of the tag */
  variant: s.oneOf(["default", "big"]),
  /** Additional className to be applied to the tag */
  className: s.string
};
const uc = ({
  variant: e = "default",
  buttonText: t = "Search",
  className: n,
  id: r,
  name: a = "search",
  placeholder: i,
  onSubmit: o,
  ...l
}) => {
  const d = ["usa-search", e === "big" ? "usa-search--big" : e === "small" ? "usa-search--small" : "", n].filter(Boolean).join(" "), m = (h) => {
    h.preventDefault(), o && o(h);
  };
  return /* @__PURE__ */ c("section", { "aria-label": `${e} search component`, children: /* @__PURE__ */ w("form", { className: d, role: "search", onSubmit: m, children: [
    /* @__PURE__ */ c("label", { className: "usa-sr-only", htmlFor: r, children: t }),
    /* @__PURE__ */ c(
      "input",
      {
        className: "usa-input",
        id: r,
        type: "search",
        name: a,
        placeholder: i,
        ...l
      }
    ),
    /* @__PURE__ */ c("button", { className: "usa-button", type: "submit", children: e === "small" ? /* @__PURE__ */ c(
      ae,
      {
        icon: tc,
        className: "usa-search__submit-icon",
        "aria-hidden": "true"
      }
    ) : /* @__PURE__ */ c("span", { className: "usa-search__submit-text", children: t }) })
  ] }) });
};
uc.propTypes = {
  /** The variant of the search component */
  variant: s.oneOf(["default", "big", "small"]),
  /** The text to display on the search button */
  buttonText: s.string,
  /** Additional className to be applied to the search component */
  className: s.string,
  /** The id of the search input */
  id: s.string.isRequired,
  /** The name of the search input */
  name: s.string,
  /** The placeholder text for the search input */
  placeholder: s.string,
  /** Function to call when the form is submitted */
  onSubmit: s.func
};
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const fc = {
  prefix: "fab",
  iconName: "instagram",
  icon: [448, 512, [], "f16d", "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]
}, dc = {
  prefix: "fab",
  iconName: "facebook",
  icon: [512, 512, [62e3], "f09a", "M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]
}, mc = {
  prefix: "fab",
  iconName: "twitter",
  icon: [512, 512, [], "f099", "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]
}, pc = ({
  title: e,
  emailAddress: t,
  officePhone: n,
  informationPhone: r,
  relayServicePhone: a,
  socialMedia: i,
  officeDetails: o,
  className: l
}) => {
  const {
    facebook: u,
    twitter: f,
    bluesky: d,
    instagram: m
  } = i || {}, {
    address: h,
    room: p,
    city: b,
    state: g,
    zip: x,
    days: C,
    hours: O
  } = o || {};
  return /* @__PURE__ */ w("div", { className: `contacts ${l || ""}`, children: [
    /* @__PURE__ */ c("div", { className: "contacts__border" }),
    /* @__PURE__ */ w("div", { className: "contacts__container", children: [
      /* @__PURE__ */ w("div", { className: "contacts__section", children: [
        /* @__PURE__ */ w("div", { className: "contacts__section-header", children: [
          /* @__PURE__ */ c("h3", { className: "contacts__heading", children: "Contact" }),
          /* @__PURE__ */ c("div", { className: "contacts__button-container", children: /* @__PURE__ */ w(
            "a",
            {
              href: `mailto:${t}`,
              className: "contacts__button",
              "aria-label": `Contact ${e} via email`,
              children: [
                /* @__PURE__ */ c(ae, { icon: Kl, className: "contacts__button-icon" }),
                /* @__PURE__ */ w("span", { children: [
                  "Contact this ",
                  e
                ] })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ w("div", { className: "contacts__phone-list", children: [
          n && /* @__PURE__ */ w("div", { className: "contacts__item", children: [
            /* @__PURE__ */ w("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ c(ae, { icon: cn, className: "contacts__icon" }),
              /* @__PURE__ */ c("span", { className: "contacts__label", children: "Phone: Office" })
            ] }),
            /* @__PURE__ */ c("a", { href: `tel:${n}`, className: "contacts__link", children: n })
          ] }),
          r && /* @__PURE__ */ w("div", { className: "contacts__item", children: [
            /* @__PURE__ */ w("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ c(ae, { icon: cn, className: "contacts__icon" }),
              /* @__PURE__ */ c("span", { className: "contacts__label", children: "Phone: Information" })
            ] }),
            /* @__PURE__ */ c("a", { href: `tel:${r}`, className: "contacts__link", children: r })
          ] }),
          a && /* @__PURE__ */ w("div", { className: "contacts__item", children: [
            /* @__PURE__ */ w("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ c(ae, { icon: cn, className: "contacts__icon" }),
              /* @__PURE__ */ c("span", { className: "contacts__label", children: "Phone: Oregon Relay Service" })
            ] }),
            /* @__PURE__ */ c("a", { href: `tel:${a}`, className: "contacts__link", children: a })
          ] })
        ] })
      ] }),
      i && /* @__PURE__ */ w("div", { className: "contacts__section", children: [
        /* @__PURE__ */ c("h3", { className: "contacts__heading", children: "Social Media" }),
        /* @__PURE__ */ w("div", { className: "contacts__social-list", children: [
          u && /* @__PURE__ */ w("div", { className: "contacts__item", children: [
            /* @__PURE__ */ w("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ c(ae, { icon: dc, className: "contacts__icon" }),
              /* @__PURE__ */ c("span", { className: "contacts__label", children: "Facebook" })
            ] }),
            /* @__PURE__ */ c("a", { href: `https://facebook.com/${u}`, className: "contacts__link", target: "_blank", rel: "noopener noreferrer", children: u })
          ] }),
          f && /* @__PURE__ */ w("div", { className: "contacts__item", children: [
            /* @__PURE__ */ w("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ c(ae, { icon: mc, className: "contacts__icon" }),
              /* @__PURE__ */ c("span", { className: "contacts__label", children: "X (Twitter)" })
            ] }),
            /* @__PURE__ */ c("a", { href: `https://twitter.com/${f}`, className: "contacts__link", target: "_blank", rel: "noopener noreferrer", children: f })
          ] }),
          d && /* @__PURE__ */ w("div", { className: "contacts__item", children: [
            /* @__PURE__ */ w("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ c(ae, { icon: Bl, className: "contacts__icon" }),
              /* @__PURE__ */ c("span", { className: "contacts__label", children: "Bluesky" })
            ] }),
            /* @__PURE__ */ c("a", { href: `https://bsky.app/profile/${d}`, className: "contacts__link", target: "_blank", rel: "noopener noreferrer", children: d })
          ] }),
          m && /* @__PURE__ */ w("div", { className: "contacts__item", children: [
            /* @__PURE__ */ w("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ c(ae, { icon: fc, className: "contacts__icon" }),
              /* @__PURE__ */ c("span", { className: "contacts__label", children: "Instagram" })
            ] }),
            /* @__PURE__ */ c("a", { href: `https://instagram.com/${m}`, className: "contacts__link", target: "_blank", rel: "noopener noreferrer", children: m })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ w("div", { className: "contacts__section", children: [
        /* @__PURE__ */ c("h3", { className: "contacts__heading", children: "Office" }),
        /* @__PURE__ */ w("div", { className: "contacts__office-info", children: [
          /* @__PURE__ */ w("div", { className: "contacts__item", children: [
            /* @__PURE__ */ w("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ c(ae, { icon: Wl, className: "contacts__icon" }),
              /* @__PURE__ */ c("span", { className: "contacts__label", children: "Address" })
            ] }),
            /* @__PURE__ */ w("a", { href: `https://maps.google.com/?q=${h} ${b}, ${g} ${x}`, className: "contacts__link", target: "_blank", rel: "noopener noreferrer", children: [
              h,
              /* @__PURE__ */ c("br", {}),
              p && /* @__PURE__ */ w(Ct, { children: [
                p,
                /* @__PURE__ */ c("br", {})
              ] }),
              b,
              ", ",
              g,
              " ",
              x
            ] })
          ] }),
          O && /* @__PURE__ */ w("div", { className: "contacts__item", children: [
            /* @__PURE__ */ w("div", { className: "contacts__item-header", children: [
              /* @__PURE__ */ c(ae, { icon: Ql, className: "contacts__icon" }),
              /* @__PURE__ */ c("span", { className: "contacts__label", children: "Hours" })
            ] }),
            /* @__PURE__ */ w("div", { className: "contacts__hours-value", children: [
              /* @__PURE__ */ c("div", { children: C }),
              /* @__PURE__ */ c("div", { children: O })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
};
pc.propTypes = {
  title: s.string.isRequired,
  emailAddress: s.string.isRequired,
  officePhone: s.string,
  informationPhone: s.string,
  relayServicePhone: s.string,
  socialMedia: s.shape({
    facebook: s.string,
    twitter: s.string,
    bluesky: s.string,
    instagram: s.string
  }),
  officeDetails: s.shape({
    address: s.string.isRequired,
    room: s.string,
    city: s.string.isRequired,
    state: s.string.isRequired,
    zip: s.string.isRequired,
    hours: s.string
  }).isRequired,
  className: s.string
};
const hc = ({
  title: e,
  subtitle: t,
  searchComponent: n,
  links: r = [],
  className: a,
  ...i
}) => {
  const o = "pgov-hero-homepage", l = [
    o,
    a
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ w("div", { className: l, ...i, children: [
    /* @__PURE__ */ c("div", { className: `${o}__title-container`, children: /* @__PURE__ */ c("h1", { className: `${o}__title`, children: e }) }),
    /* @__PURE__ */ c("div", { className: `${o}__search-container`, children: n }),
    t && /* @__PURE__ */ c("div", { className: `${o}__subtitle-container`, children: /* @__PURE__ */ c("h2", { className: `${o}__subtitle`, children: t }) }),
    r.length > 0 && /* @__PURE__ */ c("div", { className: `${o}__links-container`, children: r.map((u, f) => /* @__PURE__ */ c(
      "a",
      {
        href: u.href,
        className: `${o}__link`,
        ...u.props,
        children: u.text
      },
      f
    )) })
  ] });
};
hc.propTypes = {
  title: s.string.isRequired,
  subtitle: s.string,
  searchComponent: s.node.isRequired,
  links: s.arrayOf(
    s.shape({
      text: s.string.isRequired,
      href: s.string.isRequired,
      props: s.object
    })
  ),
  className: s.string
};
const gc = ({
  title: e,
  description: t,
  tags: n = [],
  image: r,
  actionButton: a,
  className: i,
  ...o
}) => {
  const l = "hero-global", u = Ce.useId(), f = [
    l,
    i
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ c(
    "section",
    {
      className: f,
      role: "banner",
      "aria-labelledby": u,
      ...o,
      children: /* @__PURE__ */ w("div", { className: `${l}__container`, children: [
        /* @__PURE__ */ c("div", { className: `${l}__content-wrapper`, children: /* @__PURE__ */ w("div", { className: `${l}__content`, children: [
          /* @__PURE__ */ c(
            "h1",
            {
              id: u,
              className: `${l}__title`,
              children: e
            }
          ),
          n.length > 0 && /* @__PURE__ */ c(
            "div",
            {
              className: `${l}__tags`,
              "aria-label": "Content categories",
              children: n.map((d, m) => /* @__PURE__ */ c(
                "span",
                {
                  className: `${l}__tag`,
                  children: d
                },
                m
              ))
            }
          ),
          t && /* @__PURE__ */ c("p", { className: `${l}__description`, children: t }),
          a && /* @__PURE__ */ c("div", { className: `${l}__action`, children: a })
        ] }) }),
        r && /* @__PURE__ */ c("div", { className: `${l}__image-wrapper`, children: /* @__PURE__ */ w("div", { className: `${l}__image-container`, children: [
          /* @__PURE__ */ c(
            "img",
            {
              src: typeof r.src == "string" ? r.src : r.src.default || r.src,
              alt: r.alt || "",
              className: `${l}__image`,
              loading: "lazy",
              onError: (d) => {
                console.error("Image failed to load:", r.src), console.error("Error event:", d), console.error("Image element:", d.target), console.error("Image natural dimensions:", d.target.naturalWidth, d.target.naturalHeight), d.target.classList.add(`${l}__image--error`);
              },
              onLoad: (d) => {
                console.log("Image loaded successfully:", r.src), console.log("Image element:", d.target), console.log("Image natural dimensions:", d.target.naturalWidth, d.target.naturalHeight);
              }
            }
          ),
          /* @__PURE__ */ c("div", { className: `${l}__image-placeholder`, "aria-hidden": "true" })
        ] }) })
      ] })
    }
  );
};
gc.propTypes = {
  /** The main title of the hero section */
  title: s.string.isRequired,
  /** Optional description text */
  description: s.string,
  /** Array of tag strings to display */
  tags: s.arrayOf(s.string),
  /** Optional image configuration */
  image: s.shape({
    src: s.oneOfType([
      s.string,
      s.object
      // For Vite/webpack imported assets
    ]).isRequired,
    alt: s.string
  }),
  /** Optional action button component */
  actionButton: s.node,
  /** Additional CSS class name */
  className: s.string
};
var bt = { exports: {} };
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var Mi = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], St = /* @__PURE__ */ Mi.join(","), Li = typeof Element > "u", De = Li ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Pt = !Li && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e == null ? void 0 : e.ownerDocument;
}, At = function e(t, n) {
  var r;
  n === void 0 && (n = !0);
  var a = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "inert"), i = a === "" || a === "true", o = i || n && t && e(t.parentNode);
  return o;
}, vc = function(t) {
  var n, r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return r === "" || r === "true";
}, Di = function(t, n, r) {
  if (At(t))
    return [];
  var a = Array.prototype.slice.apply(t.querySelectorAll(St));
  return n && De.call(t, St) && a.unshift(t), a = a.filter(r), a;
}, ji = function e(t, n, r) {
  for (var a = [], i = Array.from(t); i.length; ) {
    var o = i.shift();
    if (!At(o, !1))
      if (o.tagName === "SLOT") {
        var l = o.assignedElements(), u = l.length ? l : o.children, f = e(u, !0, r);
        r.flatten ? a.push.apply(a, f) : a.push({
          scopeParent: o,
          candidates: f
        });
      } else {
        var d = De.call(o, St);
        d && r.filter(o) && (n || !t.includes(o)) && a.push(o);
        var m = o.shadowRoot || // check for an undisclosed shadow
        typeof r.getShadowRoot == "function" && r.getShadowRoot(o), h = !At(m, !1) && (!r.shadowRootFilter || r.shadowRootFilter(o));
        if (m && h) {
          var p = e(m === !0 ? o.children : m.children, !0, r);
          r.flatten ? a.push.apply(a, p) : a.push({
            scopeParent: o,
            candidates: p
          });
        } else
          i.unshift.apply(i, o.children);
      }
  }
  return a;
}, zi = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, Re = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || vc(t)) && !zi(t) ? 0 : t.tabIndex;
}, bc = function(t, n) {
  var r = Re(t);
  return r < 0 && n && !zi(t) ? 0 : r;
}, yc = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, qi = function(t) {
  return t.tagName === "INPUT";
}, xc = function(t) {
  return qi(t) && t.type === "hidden";
}, wc = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return n;
}, Nc = function(t, n) {
  for (var r = 0; r < t.length; r++)
    if (t[r].checked && t[r].form === n)
      return t[r];
}, Rc = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || Pt(t), r = function(l) {
    return n.querySelectorAll('input[type="radio"][name="' + l + '"]');
  }, a;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    a = r(window.CSS.escape(t.name));
  else
    try {
      a = r(t.name);
    } catch (o) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", o.message), !1;
    }
  var i = Nc(a, t.form);
  return !i || i === t;
}, Tc = function(t) {
  return qi(t) && t.type === "radio";
}, Ec = function(t) {
  return Tc(t) && !Rc(t);
}, Cc = function(t) {
  var n, r = t && Pt(t), a = (n = r) === null || n === void 0 ? void 0 : n.host, i = !1;
  if (r && r !== t) {
    var o, l, u;
    for (i = !!((o = a) !== null && o !== void 0 && (l = o.ownerDocument) !== null && l !== void 0 && l.contains(a) || t != null && (u = t.ownerDocument) !== null && u !== void 0 && u.contains(t)); !i && a; ) {
      var f, d, m;
      r = Pt(a), a = (f = r) === null || f === void 0 ? void 0 : f.host, i = !!((d = a) !== null && d !== void 0 && (m = d.ownerDocument) !== null && m !== void 0 && m.contains(a));
    }
  }
  return i;
}, ya = function(t) {
  var n = t.getBoundingClientRect(), r = n.width, a = n.height;
  return r === 0 && a === 0;
}, Oc = function(t, n) {
  var r = n.displayCheck, a = n.getShadowRoot;
  if (getComputedStyle(t).visibility === "hidden")
    return !0;
  var i = De.call(t, "details>summary:first-of-type"), o = i ? t.parentElement : t;
  if (De.call(o, "details:not([open]) *"))
    return !0;
  if (!r || r === "full" || r === "legacy-full") {
    if (typeof a == "function") {
      for (var l = t; t; ) {
        var u = t.parentElement, f = Pt(t);
        if (u && !u.shadowRoot && a(u) === !0)
          return ya(t);
        t.assignedSlot ? t = t.assignedSlot : !u && f !== t.ownerDocument ? t = f.host : t = u;
      }
      t = l;
    }
    if (Cc(t))
      return !t.getClientRects().length;
    if (r !== "legacy-full")
      return !0;
  } else if (r === "non-zero-area")
    return ya(t);
  return !1;
}, _c = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var r = 0; r < n.children.length; r++) {
          var a = n.children.item(r);
          if (a.tagName === "LEGEND")
            return De.call(n, "fieldset[disabled] *") ? !0 : !a.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, It = function(t, n) {
  return !(n.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  At(n) || xc(n) || Oc(n, t) || // For a details element with a summary, the summary element gets the focus
  wc(n) || _c(n));
}, Dn = function(t, n) {
  return !(Ec(n) || Re(n) < 0 || !It(t, n));
}, kc = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, Sc = function e(t) {
  var n = [], r = [];
  return t.forEach(function(a, i) {
    var o = !!a.scopeParent, l = o ? a.scopeParent : a, u = bc(l, o), f = o ? e(a.candidates) : l;
    u === 0 ? o ? n.push.apply(n, f) : n.push(l) : r.push({
      documentOrder: i,
      tabIndex: u,
      item: a,
      isScope: o,
      content: f
    });
  }), r.sort(yc).reduce(function(a, i) {
    return i.isScope ? a.push.apply(a, i.content) : a.push(i.content), a;
  }, []).concat(n);
}, Ut = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = ji([t], n.includeContainer, {
    filter: Dn.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: kc
  }) : r = Di(t, n.includeContainer, Dn.bind(null, n)), Sc(r);
}, $i = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = ji([t], n.includeContainer, {
    filter: It.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : r = Di(t, n.includeContainer, It.bind(null, n)), r;
}, Ae = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return De.call(t, St) === !1 ? !1 : Dn(n, t);
}, Pc = /* @__PURE__ */ Mi.concat("iframe").join(","), Tt = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return De.call(t, Pc) === !1 ? !1 : It(n, t);
};
const Ac = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  focusable: $i,
  getTabIndex: Re,
  isFocusable: Tt,
  isTabbable: Ae,
  tabbable: Ut
}, Symbol.toStringTag, { value: "Module" }));
/*!
* focus-trap 7.6.5
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function jn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Ic(e) {
  if (Array.isArray(e)) return jn(e);
}
function Fc(e, t, n) {
  return (t = zc(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Mc(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Lc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xa(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function wa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xa(Object(n), !0).forEach(function(r) {
      Fc(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xa(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Dc(e) {
  return Ic(e) || Mc(e) || qc(e) || Lc();
}
function jc(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function zc(e) {
  var t = jc(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function qc(e, t) {
  if (e) {
    if (typeof e == "string") return jn(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? jn(e, t) : void 0;
  }
}
var Na = {
  activateTrap: function(t, n) {
    if (t.length > 0) {
      var r = t[t.length - 1];
      r !== n && r._setPausedState(!0);
    }
    var a = t.indexOf(n);
    a === -1 || t.splice(a, 1), t.push(n);
  },
  deactivateTrap: function(t, n) {
    var r = t.indexOf(n);
    r !== -1 && t.splice(r, 1), t.length > 0 && !t[t.length - 1]._isManuallyPaused() && t[t.length - 1]._setPausedState(!1);
  }
}, $c = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, Bc = function(t) {
  return (t == null ? void 0 : t.key) === "Escape" || (t == null ? void 0 : t.key) === "Esc" || (t == null ? void 0 : t.keyCode) === 27;
}, et = function(t) {
  return (t == null ? void 0 : t.key) === "Tab" || (t == null ? void 0 : t.keyCode) === 9;
}, Wc = function(t) {
  return et(t) && !t.shiftKey;
}, Yc = function(t) {
  return et(t) && t.shiftKey;
}, Ra = function(t) {
  return setTimeout(t, 0);
}, Ge = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  return typeof t == "function" ? t.apply(void 0, r) : t;
}, yt = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, Uc = [], Hc = function(t, n) {
  var r = (n == null ? void 0 : n.document) || document, a = (n == null ? void 0 : n.trapStack) || Uc, i = wa({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isKeyForward: Wc,
    isKeyBackward: Yc
  }, n), o = {
    // containers given to createFocusTrap()
    // @type {Array<HTMLElement>}
    containers: [],
    // list of objects identifying tabbable nodes in `containers` in the trap
    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
    //  is active, but the trap should never get to a state where there isn't at least one group
    //  with at least one tabbable node in it (that would lead to an error condition that would
    //  result in an error being thrown)
    // @type {Array<{
    //   container: HTMLElement,
    //   tabbableNodes: Array<HTMLElement>, // empty if none
    //   focusableNodes: Array<HTMLElement>, // empty if none
    //   posTabIndexesFound: boolean,
    //   firstTabbableNode: HTMLElement|undefined,
    //   lastTabbableNode: HTMLElement|undefined,
    //   firstDomTabbableNode: HTMLElement|undefined,
    //   lastDomTabbableNode: HTMLElement|undefined,
    //   nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
    // }>}
    containerGroups: [],
    // same order/length as `containers` list
    // references to objects in `containerGroups`, but only those that actually have
    //  tabbable nodes in them
    // NOTE: same order as `containers` and `containerGroups`, but __not necessarily__
    //  the same length
    tabbableGroups: [],
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: !1,
    paused: !1,
    manuallyPaused: !1,
    // timer ID for when delayInitialFocus is true and initial focus in this trap
    //  has been delayed during activation
    delayInitialFocusTimer: void 0,
    // the most recent KeyboardEvent for the configured nav key (typically [SHIFT+]TAB), if any
    recentNavEvent: void 0
  }, l, u = function(y, v, k) {
    return y && y[v] !== void 0 ? y[v] : i[k || v];
  }, f = function(y, v) {
    var k = typeof (v == null ? void 0 : v.composedPath) == "function" ? v.composedPath() : void 0;
    return o.containerGroups.findIndex(function(j) {
      var P = j.container, F = j.tabbableNodes;
      return P.contains(y) || // fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      (k == null ? void 0 : k.includes(P)) || F.find(function(D) {
        return D === y;
      });
    });
  }, d = function(y) {
    var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, k = v.hasFallback, j = k === void 0 ? !1 : k, P = v.params, F = P === void 0 ? [] : P, D = i[y];
    if (typeof D == "function" && (D = D.apply(void 0, Dc(F))), D === !0 && (D = void 0), !D) {
      if (D === void 0 || D === !1)
        return D;
      throw new Error("`".concat(y, "` was specified but was not a node, or did not return a node"));
    }
    var N = D;
    if (typeof D == "string") {
      try {
        N = r.querySelector(D);
      } catch (A) {
        throw new Error("`".concat(y, '` appears to be an invalid selector; error="').concat(A.message, '"'));
      }
      if (!N && !j)
        throw new Error("`".concat(y, "` as selector refers to no known node"));
    }
    return N;
  }, m = function() {
    var y = d("initialFocus", {
      hasFallback: !0
    });
    if (y === !1)
      return !1;
    if (y === void 0 || y && !Tt(y, i.tabbableOptions))
      if (f(r.activeElement) >= 0)
        y = r.activeElement;
      else {
        var v = o.tabbableGroups[0], k = v && v.firstTabbableNode;
        y = k || d("fallbackFocus");
      }
    else y === null && (y = d("fallbackFocus"));
    if (!y)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return y;
  }, h = function() {
    if (o.containerGroups = o.containers.map(function(y) {
      var v = Ut(y, i.tabbableOptions), k = $i(y, i.tabbableOptions), j = v.length > 0 ? v[0] : void 0, P = v.length > 0 ? v[v.length - 1] : void 0, F = k.find(function(A) {
        return Ae(A);
      }), D = k.slice().reverse().find(function(A) {
        return Ae(A);
      }), N = !!v.find(function(A) {
        return Re(A) > 0;
      });
      return {
        container: y,
        tabbableNodes: v,
        focusableNodes: k,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: N,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: j,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: P,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: F,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: D,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(z) {
          var B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, H = v.indexOf(z);
          return H < 0 ? B ? k.slice(k.indexOf(z) + 1).find(function(G) {
            return Ae(G);
          }) : k.slice(0, k.indexOf(z)).reverse().find(function(G) {
            return Ae(G);
          }) : v[H + (B ? 1 : -1)];
        }
      };
    }), o.tabbableGroups = o.containerGroups.filter(function(y) {
      return y.tabbableNodes.length > 0;
    }), o.tabbableGroups.length <= 0 && !d("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (o.containerGroups.find(function(y) {
      return y.posTabIndexesFound;
    }) && o.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, p = function(y) {
    var v = y.activeElement;
    if (v)
      return v.shadowRoot && v.shadowRoot.activeElement !== null ? p(v.shadowRoot) : v;
  }, b = function(y) {
    if (y !== !1 && y !== p(document)) {
      if (!y || !y.focus) {
        b(m());
        return;
      }
      y.focus({
        preventScroll: !!i.preventScroll
      }), o.mostRecentlyFocusedNode = y, $c(y) && y.select();
    }
  }, g = function(y) {
    var v = d("setReturnFocus", {
      params: [y]
    });
    return v || (v === !1 ? !1 : y);
  }, x = function(y) {
    var v = y.target, k = y.event, j = y.isBackward, P = j === void 0 ? !1 : j;
    v = v || yt(k), h();
    var F = null;
    if (o.tabbableGroups.length > 0) {
      var D = f(v, k), N = D >= 0 ? o.containerGroups[D] : void 0;
      if (D < 0)
        P ? F = o.tabbableGroups[o.tabbableGroups.length - 1].lastTabbableNode : F = o.tabbableGroups[0].firstTabbableNode;
      else if (P) {
        var A = o.tabbableGroups.findIndex(function(J) {
          var V = J.firstTabbableNode;
          return v === V;
        });
        if (A < 0 && (N.container === v || Tt(v, i.tabbableOptions) && !Ae(v, i.tabbableOptions) && !N.nextTabbableNode(v, !1)) && (A = D), A >= 0) {
          var z = A === 0 ? o.tabbableGroups.length - 1 : A - 1, B = o.tabbableGroups[z];
          F = Re(v) >= 0 ? B.lastTabbableNode : B.lastDomTabbableNode;
        } else et(k) || (F = N.nextTabbableNode(v, !1));
      } else {
        var H = o.tabbableGroups.findIndex(function(J) {
          var V = J.lastTabbableNode;
          return v === V;
        });
        if (H < 0 && (N.container === v || Tt(v, i.tabbableOptions) && !Ae(v, i.tabbableOptions) && !N.nextTabbableNode(v)) && (H = D), H >= 0) {
          var G = H === o.tabbableGroups.length - 1 ? 0 : H + 1, Z = o.tabbableGroups[G];
          F = Re(v) >= 0 ? Z.firstTabbableNode : Z.firstDomTabbableNode;
        } else et(k) || (F = N.nextTabbableNode(v));
      }
    } else
      F = d("fallbackFocus");
    return F;
  }, C = function(y) {
    var v = yt(y);
    if (!(f(v, y) >= 0)) {
      if (Ge(i.clickOutsideDeactivates, y)) {
        l.deactivate({
          // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
          //  which will result in the outside click setting focus to the node
          //  that was clicked (and if not focusable, to "nothing"); by setting
          //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
          //  on activation (or the configured `setReturnFocus` node), whether the
          //  outside click was on a focusable node or not
          returnFocus: i.returnFocusOnDeactivate
        });
        return;
      }
      Ge(i.allowOutsideClick, y) || y.preventDefault();
    }
  }, O = function(y) {
    var v = yt(y), k = f(v, y) >= 0;
    if (k || v instanceof Document)
      k && (o.mostRecentlyFocusedNode = v);
    else {
      y.stopImmediatePropagation();
      var j, P = !0;
      if (o.mostRecentlyFocusedNode)
        if (Re(o.mostRecentlyFocusedNode) > 0) {
          var F = f(o.mostRecentlyFocusedNode), D = o.containerGroups[F].tabbableNodes;
          if (D.length > 0) {
            var N = D.findIndex(function(A) {
              return A === o.mostRecentlyFocusedNode;
            });
            N >= 0 && (i.isKeyForward(o.recentNavEvent) ? N + 1 < D.length && (j = D[N + 1], P = !1) : N - 1 >= 0 && (j = D[N - 1], P = !1));
          }
        } else
          o.containerGroups.some(function(A) {
            return A.tabbableNodes.some(function(z) {
              return Re(z) > 0;
            });
          }) || (P = !1);
      else
        P = !1;
      P && (j = x({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: o.mostRecentlyFocusedNode,
        isBackward: i.isKeyBackward(o.recentNavEvent)
      })), b(j || o.mostRecentlyFocusedNode || m());
    }
    o.recentNavEvent = void 0;
  }, E = function(y) {
    var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    o.recentNavEvent = y;
    var k = x({
      event: y,
      isBackward: v
    });
    k && (et(y) && y.preventDefault(), b(k));
  }, _ = function(y) {
    (i.isKeyForward(y) || i.isKeyBackward(y)) && E(y, i.isKeyBackward(y));
  }, R = function(y) {
    Bc(y) && Ge(i.escapeDeactivates, y) !== !1 && (y.preventDefault(), l.deactivate());
  }, X = function(y) {
    var v = yt(y);
    f(v, y) >= 0 || Ge(i.clickOutsideDeactivates, y) || Ge(i.allowOutsideClick, y) || (y.preventDefault(), y.stopImmediatePropagation());
  }, M = function() {
    if (o.active)
      return Na.activateTrap(a, l), o.delayInitialFocusTimer = i.delayInitialFocus ? Ra(function() {
        b(m());
      }) : b(m()), r.addEventListener("focusin", O, !0), r.addEventListener("mousedown", C, {
        capture: !0,
        passive: !1
      }), r.addEventListener("touchstart", C, {
        capture: !0,
        passive: !1
      }), r.addEventListener("click", X, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", _, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", R), l;
  }, L = function() {
    if (o.active)
      return r.removeEventListener("focusin", O, !0), r.removeEventListener("mousedown", C, !0), r.removeEventListener("touchstart", C, !0), r.removeEventListener("click", X, !0), r.removeEventListener("keydown", _, !0), r.removeEventListener("keydown", R), l;
  }, Y = function(y) {
    var v = y.some(function(k) {
      var j = Array.from(k.removedNodes);
      return j.some(function(P) {
        return P === o.mostRecentlyFocusedNode;
      });
    });
    v && b(m());
  }, T = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(Y) : void 0, W = function() {
    T && (T.disconnect(), o.active && !o.paused && o.containers.map(function(y) {
      T.observe(y, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return l = {
    get active() {
      return o.active;
    },
    get paused() {
      return o.paused;
    },
    activate: function(y) {
      if (o.active)
        return this;
      var v = u(y, "onActivate"), k = u(y, "onPostActivate"), j = u(y, "checkCanFocusTrap");
      j || h(), o.active = !0, o.paused = !1, o.nodeFocusedBeforeActivation = p(r), v == null || v();
      var P = function() {
        j && h(), M(), W(), k == null || k();
      };
      return j ? (j(o.containers.concat()).then(P, P), this) : (P(), this);
    },
    deactivate: function(y) {
      if (!o.active)
        return this;
      var v = wa({
        onDeactivate: i.onDeactivate,
        onPostDeactivate: i.onPostDeactivate,
        checkCanReturnFocus: i.checkCanReturnFocus
      }, y);
      clearTimeout(o.delayInitialFocusTimer), o.delayInitialFocusTimer = void 0, L(), o.active = !1, o.paused = !1, W(), Na.deactivateTrap(a, l);
      var k = u(v, "onDeactivate"), j = u(v, "onPostDeactivate"), P = u(v, "checkCanReturnFocus"), F = u(v, "returnFocus", "returnFocusOnDeactivate");
      k == null || k();
      var D = function() {
        Ra(function() {
          F && b(g(o.nodeFocusedBeforeActivation)), j == null || j();
        });
      };
      return F && P ? (P(g(o.nodeFocusedBeforeActivation)).then(D, D), this) : (D(), this);
    },
    pause: function(y) {
      return o.active ? (o.manuallyPaused = !0, this._setPausedState(!0, y)) : this;
    },
    unpause: function(y) {
      return o.active ? (o.manuallyPaused = !1, a[a.length - 1] !== this ? this : this._setPausedState(!1, y)) : this;
    },
    updateContainerElements: function(y) {
      var v = [].concat(y).filter(Boolean);
      return o.containers = v.map(function(k) {
        return typeof k == "string" ? r.querySelector(k) : k;
      }), o.active && h(), W(), this;
    }
  }, Object.defineProperties(l, {
    _isManuallyPaused: {
      value: function() {
        return o.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(y, v) {
        if (o.paused === y)
          return this;
        if (o.paused = y, y) {
          var k = u(v, "onPause"), j = u(v, "onPostPause");
          k == null || k(), L(), W(), j == null || j();
        } else {
          var P = u(v, "onUnpause"), F = u(v, "onPostUnpause");
          P == null || P(), h(), M(), W(), F == null || F();
        }
        return this;
      }
    }
  }), l.updateContainerElements(t), l;
};
const Vc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createFocusTrap: Hc
}, Symbol.toStringTag, { value: "Module" })), Xc = /* @__PURE__ */ Ya(Vc), Gc = /* @__PURE__ */ Ya(Ac);
var Ta;
function Kc() {
  if (Ta) return bt.exports;
  Ta = 1;
  function e(M) {
    "@babel/helpers - typeof";
    return e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(L) {
      return typeof L;
    } : function(L) {
      return L && typeof Symbol == "function" && L.constructor === Symbol && L !== Symbol.prototype ? "symbol" : typeof L;
    }, e(M);
  }
  var t, n;
  function r(M, L) {
    if (!(M instanceof L)) throw new TypeError("Cannot call a class as a function");
  }
  function a(M, L) {
    for (var Y = 0; Y < L.length; Y++) {
      var T = L[Y];
      T.enumerable = T.enumerable || !1, T.configurable = !0, "value" in T && (T.writable = !0), Object.defineProperty(M, b(T.key), T);
    }
  }
  function i(M, L, Y) {
    return L && a(M.prototype, L), Object.defineProperty(M, "prototype", { writable: !1 }), M;
  }
  function o(M, L, Y) {
    return L = d(L), l(M, f() ? Reflect.construct(L, Y || [], d(M).constructor) : L.apply(M, Y));
  }
  function l(M, L) {
    if (L && (e(L) == "object" || typeof L == "function")) return L;
    if (L !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return u(M);
  }
  function u(M) {
    if (M === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return M;
  }
  function f() {
    try {
      var M = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (f = function() {
      return !!M;
    })();
  }
  function d(M) {
    return d = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(L) {
      return L.__proto__ || Object.getPrototypeOf(L);
    }, d(M);
  }
  function m(M, L) {
    if (typeof L != "function" && L !== null) throw new TypeError("Super expression must either be null or a function");
    M.prototype = Object.create(L && L.prototype, { constructor: { value: M, writable: !0, configurable: !0 } }), Object.defineProperty(M, "prototype", { writable: !1 }), L && h(M, L);
  }
  function h(M, L) {
    return h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(Y, T) {
      return Y.__proto__ = T, Y;
    }, h(M, L);
  }
  function p(M, L, Y) {
    return (L = b(L)) in M ? Object.defineProperty(M, L, { value: Y, enumerable: !0, configurable: !0, writable: !0 }) : M[L] = Y, M;
  }
  function b(M) {
    var L = g(M, "string");
    return e(L) == "symbol" ? L : L + "";
  }
  function g(M, L) {
    if (e(M) != "object" || !M) return M;
    var Y = M[Symbol.toPrimitive];
    if (Y !== void 0) {
      var T = Y.call(M, L);
      if (e(T) != "object") return T;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (L === "string" ? String : Number)(M);
  }
  var x = Ce, C = Xc, O = C.createFocusTrap, E = Gc, _ = E.isFocusable, R = parseInt((t = (n = /^(\d+)\./.exec(x.version)) === null || n === void 0 ? void 0 : n[1]) !== null && t !== void 0 ? t : 0, 10), X = /* @__PURE__ */ function(M) {
    function L(Y) {
      var T;
      r(this, L), T = o(this, L, [Y]), p(T, "getNodeForOption", function(y) {
        var v, k = (v = this.internalOptions[y]) !== null && v !== void 0 ? v : this.originalOptions[y];
        if (typeof k == "function") {
          for (var j = arguments.length, P = new Array(j > 1 ? j - 1 : 0), F = 1; F < j; F++)
            P[F - 1] = arguments[F];
          k = k.apply(void 0, P);
        }
        if (k === !0 && (k = void 0), !k) {
          if (k === void 0 || k === !1)
            return k;
          throw new Error("`".concat(y, "` was specified but was not a node, or did not return a node"));
        }
        var D = k;
        if (typeof k == "string") {
          var N;
          if (D = (N = this.getDocument()) === null || N === void 0 ? void 0 : N.querySelector(k), !D)
            throw new Error("`".concat(y, "` as selector refers to no known node"));
        }
        return D;
      }), T.handleDeactivate = T.handleDeactivate.bind(T), T.handlePostDeactivate = T.handlePostDeactivate.bind(T), T.handleClickOutsideDeactivates = T.handleClickOutsideDeactivates.bind(T), T.internalOptions = {
        // We need to hijack the returnFocusOnDeactivate option,
        // because React can move focus into the element before we arrived at
        // this lifecycle hook (e.g. with autoFocus inputs). So the component
        // captures the previouslyFocusedElement in componentWillMount,
        // then (optionally) returns focus to it in componentWillUnmount.
        returnFocusOnDeactivate: !1,
        // the rest of these are also related to deactivation of the trap, and we
        //  need to use them and control them as well
        checkCanReturnFocus: null,
        onDeactivate: T.handleDeactivate,
        onPostDeactivate: T.handlePostDeactivate,
        // we need to special-case this setting as well so that we can know if we should
        //  NOT return focus if the trap gets auto-deactivated as the result of an
        //  outside click (otherwise, we'll always think we should return focus because
        //  of how we manage that flag internally here)
        clickOutsideDeactivates: T.handleClickOutsideDeactivates
      }, T.originalOptions = {
        // because of the above `internalOptions`, we maintain our own flag for
        //  this option, and default it to `true` because that's focus-trap's default
        returnFocusOnDeactivate: !0,
        // because of the above `internalOptions`, we keep these separate since
        //  they're part of the deactivation process which we configure (internally) to
        //  be shared between focus-trap and focus-trap-react
        onDeactivate: null,
        onPostDeactivate: null,
        checkCanReturnFocus: null,
        // the user's setting, defaulted to false since focus-trap defaults this to false
        clickOutsideDeactivates: !1
      };
      var W = Y.focusTrapOptions;
      for (var $ in W)
        if (Object.prototype.hasOwnProperty.call(W, $)) {
          if ($ === "returnFocusOnDeactivate" || $ === "onDeactivate" || $ === "onPostDeactivate" || $ === "checkCanReturnFocus" || $ === "clickOutsideDeactivates") {
            T.originalOptions[$] = W[$];
            continue;
          }
          T.internalOptions[$] = W[$];
        }
      return T.outsideClick = null, T.focusTrapElements = Y.containerElements || [], T.updatePreviousElement(), T;
    }
    return m(L, M), i(L, [{
      key: "getDocument",
      value: function() {
        return this.props.focusTrapOptions.document || (typeof document < "u" ? document : void 0);
      }
    }, {
      key: "getReturnFocusNode",
      value: function() {
        var T = this.getNodeForOption("setReturnFocus", this.previouslyFocusedElement);
        return T || (T === !1 ? !1 : this.previouslyFocusedElement);
      }
      /** Update the previously focused element with the currently focused element. */
    }, {
      key: "updatePreviousElement",
      value: function() {
        var T = this.getDocument();
        T && (this.previouslyFocusedElement = T.activeElement);
      }
    }, {
      key: "deactivateTrap",
      value: function() {
        !this.focusTrap || !this.focusTrap.active || this.focusTrap.deactivate({
          // NOTE: we never let the trap return the focus since we do that ourselves
          returnFocus: !1,
          // we'll call this in our own post deactivate handler so make sure the trap doesn't
          //  do it prematurely
          checkCanReturnFocus: null,
          // let it call the user's original deactivate handler, if any, instead of
          //  our own which calls back into this function
          onDeactivate: this.originalOptions.onDeactivate
          // NOTE: for post deactivate, don't specify anything so that it calls the
          //  onPostDeactivate handler specified on `this.internalOptions`
          //  which will always be our own `handlePostDeactivate()` handler, which
          //  will finish things off by calling the user's provided onPostDeactivate
          //  handler, if any, at the right time
          // onPostDeactivate: NOTHING
        });
      }
    }, {
      key: "handleClickOutsideDeactivates",
      value: function(T) {
        var W = typeof this.originalOptions.clickOutsideDeactivates == "function" ? this.originalOptions.clickOutsideDeactivates.call(null, T) : this.originalOptions.clickOutsideDeactivates;
        return W && (this.outsideClick = {
          target: T.target,
          allowDeactivation: W
        }), W;
      }
    }, {
      key: "handleDeactivate",
      value: function() {
        this.originalOptions.onDeactivate && this.originalOptions.onDeactivate.call(null), this.deactivateTrap();
      }
    }, {
      key: "handlePostDeactivate",
      value: function() {
        var T = this, W = function() {
          var y = T.getReturnFocusNode(), v = !!// did the consumer allow it?
          (T.originalOptions.returnFocusOnDeactivate && // can we actually focus the node?
          y !== null && y !== void 0 && y.focus && // was there an outside click that allowed deactivation?
          (!T.outsideClick || // did the consumer allow deactivation when the outside node was clicked?
          T.outsideClick.allowDeactivation && // is the outside node NOT focusable (implying that it did NOT receive focus
          //  as a result of the click-through) -- in which case do NOT restore focus
          //  to `returnFocusNode` because focus should remain on the outside node
          !_(T.outsideClick.target, T.internalOptions.tabbableOptions))), k = T.internalOptions.preventScroll, j = k === void 0 ? !1 : k;
          v && y.focus({
            preventScroll: j
          }), T.originalOptions.onPostDeactivate && T.originalOptions.onPostDeactivate.call(null), T.outsideClick = null;
        };
        this.originalOptions.checkCanReturnFocus ? this.originalOptions.checkCanReturnFocus.call(null, this.getReturnFocusNode()).then(W, W) : W();
      }
    }, {
      key: "setupFocusTrap",
      value: function() {
        if (this.focusTrap)
          this.props.active && !this.focusTrap.active && (this.focusTrap.activate(), this.props.paused && this.focusTrap.pause());
        else {
          var T = this.focusTrapElements.some(Boolean);
          T && (this.focusTrap = this.props._createFocusTrap(this.focusTrapElements, this.internalOptions), this.props.active && this.focusTrap.activate(), this.props.paused && this.focusTrap.pause());
        }
      }
    }, {
      key: "componentDidMount",
      value: function() {
        this.props.active && this.setupFocusTrap();
      }
    }, {
      key: "componentDidUpdate",
      value: function(T) {
        if (this.focusTrap) {
          T.containerElements !== this.props.containerElements && this.focusTrap.updateContainerElements(this.props.containerElements);
          var W = !T.active && this.props.active, $ = T.active && !this.props.active, y = !T.paused && this.props.paused, v = T.paused && !this.props.paused;
          if (W && (this.updatePreviousElement(), this.focusTrap.activate()), $) {
            this.deactivateTrap();
            return;
          }
          y && this.focusTrap.pause(), v && this.focusTrap.unpause();
        } else
          T.containerElements !== this.props.containerElements && (this.focusTrapElements = this.props.containerElements), this.props.active && (this.updatePreviousElement(), this.setupFocusTrap());
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.deactivateTrap();
      }
    }, {
      key: "render",
      value: function() {
        var T = this, W = this.props.children ? x.Children.only(this.props.children) : void 0;
        if (W) {
          if (W.type && W.type === x.Fragment)
            throw new Error("A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.");
          var $ = function(k) {
            var j = T.props.containerElements;
            W && (R >= 19 ? typeof W.props.ref == "function" ? W.props.ref(k) : W.props.ref && (W.props.ref.current = k) : typeof W.ref == "function" ? W.ref(k) : W.ref && (W.ref.current = k)), T.focusTrapElements = j || [k];
          }, y = x.cloneElement(W, {
            ref: $
          });
          return y;
        }
        return null;
      }
    }]);
  }(x.Component);
  return X.defaultProps = {
    active: !0,
    paused: !1,
    focusTrapOptions: {},
    _createFocusTrap: O
  }, bt.exports = X, bt.exports.FocusTrap = X, bt.exports;
}
var Jc = Kc();
const Bi = ({
  heading: e,
  text: t,
  actionButton: n,
  onClick: r,
  className: a,
  children: i,
  media: o,
  mediaPosition: l = "left",
  mediaExdent: u = !1,
  mediaFirst: f = !1,
  mediaInset: d = !1,
  ...m
}) => {
  const p = [
    "usa-card",
    o && "usa-card--media",
    u && "usa-card--exdent",
    f && "usa-card--header-first",
    d && "usa-card--inset",
    a
  ].filter(Boolean).join(" "), b = n && r ? Ce.cloneElement(n, { onClick: r }) : n;
  return /* @__PURE__ */ c("div", { className: p, ...m, children: /* @__PURE__ */ w("div", { className: "usa-card__container", children: [
    o && (o ? /* @__PURE__ */ c("div", { className: `usa-card__media ${u ? "usa-card__media--exdent" : ""}`, children: /* @__PURE__ */ c("div", { className: "usa-card__img", children: typeof o == "string" ? /* @__PURE__ */ c("img", { src: o, alt: "" }) : o }) }) : null),
    e && /* @__PURE__ */ c("div", { className: "usa-card__header", children: /* @__PURE__ */ c("h4", { className: "usa-card__heading", children: e }) }),
    /* @__PURE__ */ w("div", { className: "usa-card__body", children: [
      t && /* @__PURE__ */ c("p", { children: t }),
      i
    ] }),
    n && /* @__PURE__ */ c("div", { className: "usa-card__footer", children: b })
  ] }) });
};
Bi.propTypes = {
  heading: s.string,
  text: s.string,
  actionButton: s.node,
  onClick: s.func,
  className: s.string,
  children: s.node,
  media: s.oneOfType([s.string, s.node]),
  mediaPosition: s.oneOf(["left", "right"]),
  mediaExdent: s.bool,
  mediaFirst: s.bool,
  mediaInset: s.bool
};
const Zc = ({
  isOpen: e = !1,
  onClose: t,
  onConfirm: n,
  heading: r,
  children: a,
  confirmButton: i,
  cancelButton: o,
  size: l = "default",
  forcedAction: u = !1,
  className: f,
  ariaLabelledBy: d,
  ariaDescribedBy: m,
  ...h
}) => {
  const p = tt(null), b = tt(null);
  nt(() => {
    const T = p.current;
    if (T)
      if (e)
        T.showModal(), T.classList.add("usa-modal--visible"), document.body.classList.add("usa-js-modal--active");
      else {
        T.classList.remove("usa-modal--visible");
        const W = setTimeout(() => {
          T.open && T.close(), document.body.classList.remove("usa-js-modal--active");
        }, 150);
        return () => clearTimeout(W);
      }
  }, [e]);
  const g = mt((T) => {
    T.key === "Escape" && !u && t && (T.preventDefault(), t());
  }, [u, t]), x = mt((T) => {
    T.target === p.current && !u && t && t();
  }, [u, t]), C = mt(() => {
    t && t();
  }, [t]), O = mt(() => {
    n && n();
  }, [n]), E = i && Ce.cloneElement(i, {
    onClick: (T) => {
      i.props.onClick && i.props.onClick(T), O();
    },
    tabIndex: 0
    // Ensure button is focusable
  }), _ = o && Ce.cloneElement(o, {
    onClick: (T) => {
      o.props.onClick && o.props.onClick(T), C();
    },
    tabIndex: 0
    // Ensure button is focusable
  }), R = (E || _) && /* @__PURE__ */ w("div", { className: "usa-button-group", children: [
    E && /* @__PURE__ */ c("div", { className: "usa-button-group__item", children: E }),
    _ && /* @__PURE__ */ c("div", { className: "usa-button-group__item", children: _ })
  ] }), X = [
    "usa-modal",
    l === "large" && "usa-modal--lg",
    u && "usa-modal--forced-action",
    f
  ].filter(Boolean).join(" "), Y = !!(E || _) || !u;
  return /* @__PURE__ */ c(
    "dialog",
    {
      ref: p,
      className: X,
      onKeyDown: g,
      onClick: x,
      "aria-labelledby": d,
      "aria-describedby": m,
      "aria-modal": "true",
      ...h,
      children: /* @__PURE__ */ c(
        Jc.FocusTrap,
        {
          active: e,
          focusTrapOptions: {
            allowOutsideClick: !u,
            escapeDeactivates: !u,
            returnFocusOnDeactivate: !0,
            clickOutsideDeactivates: !u,
            initialFocus: () => {
              const T = b.current;
              if (!T) return !1;
              const W = T.querySelector('button:not([disabled]):not([aria-hidden="true"])');
              if (W)
                return W;
              const $ = T.querySelector('[tabindex="0"], input, select, textarea, button, a[href]');
              return $ || T;
            },
            setReturnFocus: (T) => T,
            fallbackFocus: () => b.current ? (b.current.setAttribute("tabindex", "0"), b.current) : !1
          },
          children: /* @__PURE__ */ w(
            "div",
            {
              ref: b,
              className: "usa-modal__container",
              tabIndex: Y ? void 0 : 0,
              children: [
                /* @__PURE__ */ w(
                  Bi,
                  {
                    heading: r,
                    actionButton: R,
                    className: "usa-modal__card",
                    children: [
                      !u && /* @__PURE__ */ c(
                        "button",
                        {
                          type: "button",
                          className: "usa-modal__close",
                          "aria-label": "Close this modal",
                          onClick: C,
                          tabIndex: "0",
                          children: /* @__PURE__ */ c(ae, { icon: rc, className: "usa-icon" })
                        }
                      ),
                      a
                    ]
                  }
                ),
                !Y && /* @__PURE__ */ c(
                  "button",
                  {
                    type: "button",
                    className: "usa-modal__fallback-focus",
                    tabIndex: "0",
                    style: {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "1px",
                      height: "1px",
                      padding: 0,
                      margin: "-1px",
                      overflow: "hidden",
                      clip: "rect(0, 0, 0, 0)",
                      whiteSpace: "nowrap",
                      border: 0
                    },
                    "aria-label": "Focus target",
                    onFocus: (T) => {
                      b.current && b.current.focus();
                    },
                    children: " "
                  }
                )
              ]
            }
          )
        }
      )
    }
  );
};
Zc.propTypes = {
  /** Whether the modal is open */
  isOpen: s.bool,
  /** Function called when modal should close */
  onClose: s.func,
  /** Function called when primary action is confirmed */
  onConfirm: s.func,
  /** Modal heading text */
  heading: s.string,
  /** Modal content */
  children: s.node,
  /** Primary action button element */
  confirmButton: s.element,
  /** Secondary/cancel button element */
  cancelButton: s.element,
  /** Size of the modal */
  size: s.oneOf(["default", "large"]),
  /** Whether user must take action (cannot close with escape or backdrop click) */
  forcedAction: s.bool,
  /** Additional CSS classes */
  className: s.string,
  /** ID of element that labels the modal */
  ariaLabelledBy: s.string,
  /** ID of element that describes the modal */
  ariaDescribedBy: s.string
};
const cr = ({ name: e, variable: t, value: n, className: r }) => {
  const a = ["pgov-font-family-display", r].filter(Boolean).join(" ");
  return /* @__PURE__ */ w("div", { className: a, children: [
    /* @__PURE__ */ c("div", { className: "pgov-font-family-display-example", style: { fontFamily: n }, children: "The quick brown fox jumps over the lazy dog" }),
    /* @__PURE__ */ w("div", { className: "pgov-font-family-display-metadata", children: [
      /* @__PURE__ */ c("div", { className: "pgov-font-family-display-name", children: e }),
      /* @__PURE__ */ c("code", { className: "pgov-font-family-display-variable", children: t }),
      /* @__PURE__ */ c("div", { className: "pgov-font-family-display-value", children: n })
    ] })
  ] });
};
cr.propTypes = {
  /** Name of the font family */
  name: s.string.isRequired,
  /** CSS variable name */
  variable: s.string.isRequired,
  /** Actual font-family value */
  value: s.string.isRequired,
  /** Additional CSS class */
  className: s.string
};
cr.defaultProps = {
  className: ""
};
const ur = ({ name: e, variable: t, value: n, sizeInPx: r, className: a }) => {
  const i = ["pgov-font-size-display", a].filter(Boolean).join(" ");
  return /* @__PURE__ */ w("div", { className: i, children: [
    /* @__PURE__ */ c("div", { className: "pgov-font-size-display-example", style: { fontSize: n }, children: "Aa" }),
    /* @__PURE__ */ w("div", { className: "pgov-font-size-display-metadata", children: [
      /* @__PURE__ */ c("div", { className: "pgov-font-size-display-name", children: e }),
      /* @__PURE__ */ c("code", { className: "pgov-font-size-display-variable", children: t }),
      /* @__PURE__ */ w("div", { className: "pgov-font-size-display-value", children: [
        n,
        " (",
        r,
        ")"
      ] })
    ] })
  ] });
};
ur.propTypes = {
  /** Name of the font size */
  name: s.string.isRequired,
  /** CSS variable name */
  variable: s.string.isRequired,
  /** Actual font-size value (with unit) */
  value: s.string.isRequired,
  /** Size in pixels for reference */
  sizeInPx: s.string.isRequired,
  /** Additional CSS class */
  className: s.string
};
ur.defaultProps = {
  className: ""
};
const fr = ({ name: e, variable: t, value: n, className: r }) => {
  const a = ["pgov-font-weight-display", r].filter(Boolean).join(" ");
  return /* @__PURE__ */ w("div", { className: a, children: [
    /* @__PURE__ */ c("div", { className: "pgov-font-weight-display-example", style: { fontWeight: n }, children: "Aa" }),
    /* @__PURE__ */ w("div", { className: "pgov-font-weight-display-metadata", children: [
      /* @__PURE__ */ c("div", { className: "pgov-font-weight-display-name", children: e }),
      /* @__PURE__ */ c("code", { className: "pgov-font-weight-display-variable", children: t }),
      /* @__PURE__ */ c("div", { className: "pgov-font-weight-display-value", children: n })
    ] })
  ] });
};
fr.propTypes = {
  /** Name of the font weight */
  name: s.string.isRequired,
  /** CSS variable name */
  variable: s.string.isRequired,
  /** Actual font-weight value */
  value: s.string.isRequired,
  /** Additional CSS class */
  className: s.string
};
fr.defaultProps = {
  className: ""
};
const dr = ({ name: e, variable: t, value: n, className: r }) => {
  const a = ["pgov-line-height-display", r].filter(Boolean).join(" ");
  return /* @__PURE__ */ w("div", { className: a, children: [
    /* @__PURE__ */ w(
      "div",
      {
        className: "pgov-line-height-display-example",
        style: { lineHeight: n },
        children: [
          "This is an example of text with ",
          e,
          " line height.",
          /* @__PURE__ */ c("br", {}),
          "The quick brown fox jumps over the lazy dog.",
          /* @__PURE__ */ c("br", {}),
          "This shows how lines of text are spaced."
        ]
      }
    ),
    /* @__PURE__ */ w("div", { className: "pgov-line-height-display-metadata", children: [
      /* @__PURE__ */ c("div", { className: "pgov-line-height-display-name", children: e }),
      /* @__PURE__ */ c("code", { className: "pgov-line-height-display-variable", children: t }),
      /* @__PURE__ */ c("div", { className: "pgov-line-height-display-value", children: n })
    ] })
  ] });
};
dr.propTypes = {
  /** Name of the line height */
  name: s.string.isRequired,
  /** CSS variable name */
  variable: s.string.isRequired,
  /** Actual line-height value */
  value: s.string.isRequired,
  /** Additional CSS class */
  className: s.string
};
dr.defaultProps = {
  className: ""
};
const mr = ({ name: e, variable: t, value: n, className: r }) => {
  const a = ["pgov-letter-spacing-display", r].filter(Boolean).join(" ");
  return /* @__PURE__ */ w("div", { className: a, children: [
    /* @__PURE__ */ c(
      "div",
      {
        className: "pgov-letter-spacing-display-example",
        style: { letterSpacing: n },
        children: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG"
      }
    ),
    /* @__PURE__ */ w("div", { className: "pgov-letter-spacing-display-metadata", children: [
      /* @__PURE__ */ c("div", { className: "pgov-letter-spacing-display-name", children: e }),
      /* @__PURE__ */ c("code", { className: "pgov-letter-spacing-display-variable", children: t }),
      /* @__PURE__ */ c("div", { className: "pgov-letter-spacing-display-value", children: n })
    ] })
  ] });
};
mr.propTypes = {
  /** Name of the letter spacing */
  name: s.string.isRequired,
  /** CSS variable name */
  variable: s.string.isRequired,
  /** Actual letter-spacing value */
  value: s.string.isRequired,
  /** Additional CSS class */
  className: s.string
};
mr.defaultProps = {
  className: ""
};
const pr = ({ families: e, className: t }) => {
  const n = ["pgov-font-families", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ c("div", { className: n, children: (e || Wi).map((a, i) => /* @__PURE__ */ c(
    cr,
    {
      name: a.name,
      variable: a.variable,
      value: a.value
    },
    i
  )) });
}, Wi = [
  {
    name: "Sans Serif",
    variable: "var(--font-family-reading-public-sans)",
    value: "Public Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
  },
  {
    name: "Serif",
    variable: "var(--font-family-display-merriweather)",
    value: "Merriweather, Georgia, Cambria, 'Times New Roman', Times, serif"
  },
  {
    name: "Monospace",
    variable: "var(--font-family-mono-roboto-mono)",
    value: "'Roboto Mono', Consolas, Monaco, 'Andale Mono', monospace"
  }
];
pr.propTypes = {
  /** Array of font family objects */
  families: s.arrayOf(
    s.shape({
      name: s.string.isRequired,
      variable: s.string.isRequired,
      value: s.string.isRequired
    })
  ),
  /** Additional CSS class */
  className: s.string
};
pr.defaultProps = {
  families: Wi,
  className: ""
};
const hr = ({ sizes: e, className: t }) => {
  const n = ["pgov-font-sizes", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ c("div", { className: n, children: (e || Yi).map((a, i) => /* @__PURE__ */ c(
    ur,
    {
      name: a.name,
      variable: a.variable,
      value: a.value,
      sizeInPx: a.sizeInPx
    },
    i
  )) });
}, Yi = [
  { name: "XS", variable: "var(--font-size-1)", value: "0.75rem", sizeInPx: "12px" },
  { name: "SM", variable: "var(--font-size-3)", value: "0.875rem", sizeInPx: "14px" },
  { name: "MD", variable: "var(--font-size-5)", value: "1rem", sizeInPx: "16px" },
  { name: "LG", variable: "var(--font-size-7)", value: "1.125rem", sizeInPx: "18px" },
  { name: "XL", variable: "var(--font-size-8)", value: "1.25rem", sizeInPx: "20px" },
  { name: "2XL", variable: "var(--font-size-10)", value: "1.5rem", sizeInPx: "24px" },
  { name: "3XL", variable: "var(--font-size-11)", value: "1.75rem", sizeInPx: "28px" },
  { name: "4XL", variable: "var(--font-size-12)", value: "2rem", sizeInPx: "32px" },
  { name: "5XL", variable: "var(--font-size-14)", value: "2.5rem", sizeInPx: "40px" },
  { name: "6XL", variable: "var(--font-size-15)", value: "3rem", sizeInPx: "48px" },
  { name: "7XL", variable: "var(--font-size-16)", value: "3.5rem", sizeInPx: "56px" },
  { name: "8XL", variable: "var(--font-size-17)", value: "4rem", sizeInPx: "64px" },
  { name: "10XL", variable: "var(--font-size-18)", value: "5rem", sizeInPx: "80px" }
];
hr.propTypes = {
  /** Array of font size objects */
  sizes: s.arrayOf(
    s.shape({
      name: s.string.isRequired,
      variable: s.string.isRequired,
      value: s.string.isRequired,
      sizeInPx: s.string.isRequired
    })
  ),
  /** Additional CSS class */
  className: s.string
};
hr.defaultProps = {
  sizes: Yi,
  className: ""
};
const gr = ({ weights: e, className: t }) => {
  const n = ["pgov-font-weights", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ c("div", { className: n, children: (e || Ui).map((a, i) => /* @__PURE__ */ c(
    fr,
    {
      name: a.name,
      variable: a.variable,
      value: a.value
    },
    i
  )) });
}, Ui = [
  { name: "Thin", variable: "--theme-font-weight-thin", value: "100" },
  { name: "Light", variable: "--theme-font-weight-light", value: "300" },
  { name: "Regular", variable: "--theme-font-weight-normal", value: "400" },
  { name: "Semi Bold", variable: "--theme-font-weight-semibold", value: "600" },
  { name: "Bold", variable: "--theme-font-weight-bold", value: "700" },
  { name: "Extra Bold", variable: "--theme-font-weight-heavy", value: "800" }
];
gr.propTypes = {
  /** Array of font weight objects */
  weights: s.arrayOf(
    s.shape({
      name: s.string.isRequired,
      variable: s.string.isRequired,
      value: s.string.isRequired
    })
  ),
  /** Additional CSS class */
  className: s.string
};
gr.defaultProps = {
  weights: Ui,
  className: ""
};
const vr = ({ lineHeights: e, className: t }) => {
  const n = ["pgov-line-heights", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ c("div", { className: n, children: (e || Hi).map((a, i) => /* @__PURE__ */ c(
    dr,
    {
      name: a.name,
      variable: a.variable,
      value: a.value
    },
    i
  )) });
}, Hi = [
  { name: "Tight", variable: "1.1", value: "1" },
  { name: "Snug", variable: "1.25", value: "1.25" },
  { name: "Normal", variable: "1.5", value: "1.5" },
  { name: "Relaxed", variable: "1.75", value: "1.75" },
  { name: "Loose", variable: "1.7", value: "2" }
];
vr.propTypes = {
  /** Array of line height objects */
  lineHeights: s.arrayOf(
    s.shape({
      name: s.string.isRequired,
      variable: s.string.isRequired,
      value: s.string.isRequired
    })
  ),
  /** Additional CSS class */
  className: s.string
};
vr.defaultProps = {
  lineHeights: Hi,
  className: ""
};
const br = ({ letterSpacings: e, className: t }) => {
  const n = ["pgov-letter-spacings", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ c("div", { className: n, children: (e || Vi).map((a, i) => /* @__PURE__ */ c(
    mr,
    {
      name: a.name,
      variable: a.variable,
      value: a.value
    },
    i
  )) });
}, Vi = [
  { name: "Tighter", variable: "-0.05em", value: "-0.05em" },
  { name: "Tight", variable: "-0.01em", value: "-0.025em" },
  { name: "Normal", variable: "0", value: "0em" },
  { name: "Wide", variable: "0.025em", value: "0.025em" },
  { name: "Wider", variable: "0.05em", value: "0.05em" },
  { name: "Widest", variable: "0.1em", value: "0.1em" }
];
br.propTypes = {
  /** Array of letter spacing objects */
  letterSpacings: s.arrayOf(
    s.shape({
      name: s.string.isRequired,
      variable: s.string.isRequired,
      value: s.string.isRequired
    })
  ),
  /** Additional CSS class */
  className: s.string
};
br.defaultProps = {
  letterSpacings: Vi,
  className: ""
};
s.string.isRequired, s.string.isRequired, s.string.isRequired;
s.string.isRequired, s.string.isRequired, s.string.isRequired, s.string.isRequired;
s.string.isRequired, s.string.isRequired, s.string.isRequired;
s.string.isRequired, s.string.isRequired, s.string.isRequired;
s.string.isRequired, s.string.isRequired, s.string.isRequired;
const Xi = ({
  showFontFamilies: e,
  showFontSizes: t,
  showFontWeights: n,
  showLineHeights: r,
  showLetterSpacings: a,
  className: i
}) => {
  const o = ["pgov-typography", i].filter(Boolean).join(" ");
  return /* @__PURE__ */ w("div", { className: o, "data-testid": "typography-container", children: [
    /* @__PURE__ */ c("h2", { className: "pgov-typography-title", children: "Typography Tokens" }),
    /* @__PURE__ */ c("p", { className: "pgov-typography-description", children: "The PGOV design system includes a comprehensive set of typography tokens for use in the UI." }),
    e && /* @__PURE__ */ w("section", { className: "pgov-typography-section", children: [
      /* @__PURE__ */ c("h3", { className: "pgov-typography-section-title", children: "Font Families" }),
      /* @__PURE__ */ c("div", { className: "pgov-typography-section-content", children: /* @__PURE__ */ c(pr, {}) })
    ] }),
    t && /* @__PURE__ */ w("section", { className: "pgov-typography-section", children: [
      /* @__PURE__ */ c("h3", { className: "pgov-typography-section-title", children: "Font Sizes" }),
      /* @__PURE__ */ c("div", { className: "pgov-typography-section-content", children: /* @__PURE__ */ c(hr, {}) })
    ] }),
    n && /* @__PURE__ */ w("section", { className: "pgov-typography-section", children: [
      /* @__PURE__ */ c("h3", { className: "pgov-typography-section-title", children: "Font Weights" }),
      /* @__PURE__ */ c("div", { className: "pgov-typography-section-content", children: /* @__PURE__ */ c(gr, {}) })
    ] }),
    r && /* @__PURE__ */ w("section", { className: "pgov-typography-section", children: [
      /* @__PURE__ */ c("h3", { className: "pgov-typography-section-title", children: "Line Heights" }),
      /* @__PURE__ */ c("div", { className: "pgov-typography-section-content", children: /* @__PURE__ */ c(vr, {}) })
    ] }),
    a && /* @__PURE__ */ w("section", { className: "pgov-typography-section", children: [
      /* @__PURE__ */ c("h3", { className: "pgov-typography-section-title", children: "Letter Spacing" }),
      /* @__PURE__ */ c("div", { className: "pgov-typography-section-content", children: /* @__PURE__ */ c(br, {}) })
    ] })
  ] });
};
Xi.propTypes = {
  /** Whether to show font families section */
  showFontFamilies: s.bool,
  /** Whether to show font sizes section */
  showFontSizes: s.bool,
  /** Whether to show font weights section */
  showFontWeights: s.bool,
  /** Whether to show line heights section */
  showLineHeights: s.bool,
  /** Whether to show letter spacings section */
  showLetterSpacings: s.bool,
  /** Additional CSS class */
  className: s.string
};
Xi.defaultProps = {
  showFontFamilies: !0,
  showFontSizes: !0,
  showFontWeights: !0,
  showLineHeights: !0,
  showLetterSpacings: !0,
  className: ""
};
const yr = ({
  colorValue: e,
  name: t,
  size: n = "medium",
  className: r
}) => {
  const a = {
    small: { width: 40, height: 40 },
    // Was 32x32
    medium: { width: 80, height: 80 },
    // Was 64x64
    large: { width: 125, height: 125 }
    // Was 100x100
  }, i = a[n] || a.medium, { width: o, height: l } = i, u = {
    width: `${o}px`,
    height: `${l}px`,
    backgroundColor: e,
    borderRadius: "4px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
  }, f = `pgov-color-swatch-preview ${r || ""}`;
  return /* @__PURE__ */ c(
    "div",
    {
      style: u,
      className: f,
      "aria-label": `Color swatch for ${t}`
    }
  );
};
yr.propTypes = {
  /**
   * Color value (CSS var or hex)
   */
  colorValue: s.string.isRequired,
  /**
   * Name of the color (for accessibility)
   */
  name: s.string.isRequired,
  /**
   * Size of the preview
   */
  size: s.oneOf(["small", "medium", "large"]),
  /**
   * Additional CSS class names
   */
  className: s.string
};
yr.defaultProps = {
  size: "medium",
  className: ""
};
const xr = ({
  name: e,
  colorVar: t,
  description: n,
  hexValue: r,
  alignment: a,
  className: i
}) => {
  const [o, l] = Oe("");
  nt(() => {
    if (typeof window < "u" && t)
      try {
        const f = getComputedStyle(document.documentElement).getPropertyValue(t).trim();
        l(f);
      } catch (f) {
        console.error(`Error getting computed style for ${t}:`, f), l("Error");
      }
  }, [t]);
  const u = `pgov-color-swatch-details ${i || ""}`;
  return /* @__PURE__ */ w(
    "div",
    {
      className: u,
      role: "group",
      "aria-label": `Details for ${e} color`,
      children: [
        /* @__PURE__ */ c("div", { className: "pgov-color-swatch-name", children: e }),
        /* @__PURE__ */ c("div", { className: "pgov-color-swatch-var", "aria-label": `CSS variable: ${t}`, children: t }),
        n && /* @__PURE__ */ c("div", { className: "pgov-color-swatch-description", "aria-label": `Description: ${n}`, children: n }),
        o && !n && /* @__PURE__ */ c("div", { className: "pgov-color-swatch-hex", "aria-label": `Computed value: ${o}`, children: o }),
        !o && r && !n && /* @__PURE__ */ w("div", { className: "pgov-color-swatch-hex", "aria-label": `Initial Hex value: ${r}`, children: [
          r,
          " (Initial)"
        ] })
      ]
    }
  );
};
xr.propTypes = {
  /**
   * Name of the color
   */
  name: s.string.isRequired,
  /**
   * CSS variable name for the color
   */
  colorVar: s.string.isRequired,
  /**
   * Description of the color
   */
  description: s.string,
  /**
   * Hex value of the color (passed from parent, can be kept for prop validation)
   */
  hexValue: s.string,
  /**
   * Text alignment
   */
  alignment: s.oneOf(["left", "center", "right"]),
  /**
   * Additional CSS class names
   */
  className: s.string
};
xr.defaultProps = {
  description: void 0,
  hexValue: void 0,
  alignment: "left",
  className: ""
};
const wr = ({
  colorVar: e,
  name: t,
  description: n,
  size: r,
  orientation: a,
  className: i
}) => {
  const o = `pgov-color-swatch-item ${i || ""}`;
  return /* @__PURE__ */ w("div", { className: o, children: [
    /* @__PURE__ */ c(
      yr,
      {
        colorValue: e,
        name: t,
        size: r
      }
    ),
    /* @__PURE__ */ c(
      xr,
      {
        name: t,
        colorVar: e,
        description: n,
        alignment: "center"
      }
    )
  ] });
};
wr.propTypes = {
  /**
   * CSS variable name for the color
   */
  colorVar: s.string.isRequired,
  /**
   * Name of the color
   */
  name: s.string.isRequired,
  /**
   * Description of the color
   */
  description: s.string,
  /**
   * Size of the color swatch preview
   */
  size: s.oneOf(["small", "medium", "large"]),
  /**
   * Layout orientation of the swatch
   */
  orientation: s.oneOf(["horizontal", "vertical"]),
  /**
   * Additional CSS class names
   */
  className: s.string
};
wr.defaultProps = {
  description: void 0,
  size: "medium",
  orientation: "vertical",
  className: ""
};
s.arrayOf(
  s.shape({
    name: s.string.isRequired,
    colorVar: s.string.isRequired,
    description: s.string,
    hexValue: s.string
  })
).isRequired, s.string, s.string, s.oneOf(["grid", "flex"]), s.oneOf(["horizontal", "vertical"]), s.oneOf(["small", "medium", "large"]), s.string;
const Gi = ({
  colorVar: e,
  name: t,
  description: n,
  hexValue: r,
  size: a,
  orientation: i,
  className: o
}) => /* @__PURE__ */ c(
  wr,
  {
    colorVar: e,
    name: t,
    description: n,
    hexValue: r,
    size: a,
    orientation: i,
    className: o
  }
);
Gi.propTypes = {
  /**
   * CSS variable name for the color
   */
  colorVar: s.string.isRequired,
  /**
   * Name of the color
   */
  name: s.string.isRequired,
  /**
   * Description of the color
   */
  description: s.string,
  /**
   * Hex value of the color
   */
  hexValue: s.string,
  /**
   * Size of the color swatch
   */
  size: s.oneOf(["small", "medium", "large"]),
  /**
   * Orientation of the swatch (horizontal or vertical)
   */
  orientation: s.oneOf(["horizontal", "vertical"]),
  /**
   * Additional CSS class names
   */
  className: s.string
};
Gi.defaultProps = {
  description: void 0,
  hexValue: void 0,
  size: "medium",
  orientation: "horizontal",
  className: ""
};
const Ki = ({ name: e, variable: t, value: n, pixels: r }) => /* @__PURE__ */ w("div", { style: {
  margin: "10px",
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "4px",
  width: "100%",
  maxWidth: "600px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
}, children: [
  /* @__PURE__ */ c("div", { style: {
    width: n,
    height: "24px",
    backgroundColor: "#0050d8",
    borderRadius: "4px"
  } }),
  /* @__PURE__ */ w("div", { style: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    textAlign: "right",
    minWidth: "200px"
  }, children: [
    /* @__PURE__ */ c("div", { style: { fontWeight: "bold" }, children: e }),
    /* @__PURE__ */ c("code", { style: {
      backgroundColor: "#f5f5f5",
      padding: "4px 8px",
      borderRadius: "4px",
      fontSize: "14px"
    }, children: t }),
    /* @__PURE__ */ w("div", { style: {
      fontSize: "14px",
      color: "#666"
    }, children: [
      n,
      " (",
      r,
      ")"
    ] })
  ] })
] });
Ki.propTypes = {
  name: s.string.isRequired,
  variable: s.string.isRequired,
  value: s.string.isRequired,
  pixels: s.string.isRequired
};
const jf = () => /* @__PURE__ */ c("div", { style: { display: "flex", flexDirection: "column", gap: "20px" }, children: [
  { name: "3XS", variable: "var(--spacing-global-05)", value: "0.25rem", pixels: "4px" },
  { name: "2XS", variable: "var(--spacing-global-1)", value: "0.5rem", pixels: "8px" },
  { name: "XS", variable: "var(--spacing-global-105)", value: "0.75rem", pixels: "12px" },
  { name: "SM", variable: "var(--spacing-global-2)", value: "1rem", pixels: "16px" },
  { name: "MD", variable: "var(--spacing-global-3)", value: "1.5rem", pixels: "24px" },
  { name: "LG", variable: "var(--spacing-global-4)", value: "2rem", pixels: "32px" },
  { name: "XL", variable: "var(--spacing-global-5)", value: "2.5rem", pixels: "40px" },
  { name: "2XL", variable: "var(--spacing-global-6)", value: "3rem", pixels: "48px" },
  { name: "3XL", variable: "var(--spacing-global-8)", value: "4rem", pixels: "64px" }
].map((t, n) => /* @__PURE__ */ c(
  Ki,
  {
    name: t.name,
    variable: t.variable,
    value: t.value,
    pixels: t.pixels
  },
  n
)) }), zf = () => /* @__PURE__ */ w("div", { style: {
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  maxWidth: "800px"
}, children: [
  /* @__PURE__ */ w("div", { children: [
    /* @__PURE__ */ c("h3", { style: { marginBottom: "16px" }, children: "Margin Examples" }),
    /* @__PURE__ */ w("div", { style: {
      border: "1px dashed #ddd",
      padding: "20px",
      borderRadius: "4px"
    }, children: [
      /* @__PURE__ */ c("div", { style: {
        backgroundColor: "#f0f0f0",
        padding: "16px",
        marginBottom: "var(--spacing-global-3)",
        borderRadius: "4px"
      }, children: "Element with margin-bottom: var(--spacing-global-3)" }),
      /* @__PURE__ */ c("div", { style: {
        backgroundColor: "#f0f0f0",
        padding: "16px",
        borderRadius: "4px"
      }, children: "Next element" })
    ] })
  ] }),
  /* @__PURE__ */ w("div", { children: [
    /* @__PURE__ */ c("h3", { style: { marginBottom: "16px" }, children: "Padding Examples" }),
    /* @__PURE__ */ w("div", { style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px"
    }, children: [
      /* @__PURE__ */ c("div", { style: {
        backgroundColor: "#f0f0f0",
        padding: "var(--spacing-global-3)",
        borderRadius: "4px",
        width: "200px"
      }, children: "Padding: var(--spacing-global-3)" }),
      /* @__PURE__ */ c("div", { style: {
        backgroundColor: "#f0f0f0",
        padding: "var(--spacing-global-105)",
        borderRadius: "4px",
        width: "200px"
      }, children: "Padding: var(--spacing-global-105)" }),
      /* @__PURE__ */ c("div", { style: {
        backgroundColor: "#f0f0f0",
        padding: "var(--spacing-global-5)",
        borderRadius: "4px",
        width: "200px"
      }, children: "Padding: var(--spacing-global-5)" })
    ] })
  ] }),
  /* @__PURE__ */ w("div", { children: [
    /* @__PURE__ */ c("h3", { style: { marginBottom: "16px" }, children: "Gap Examples" }),
    /* @__PURE__ */ w("div", { style: {
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }, children: [
      /* @__PURE__ */ w("div", { style: {
        display: "flex",
        gap: "var(--spacing-global-3)",
        backgroundColor: "#f0f0f0",
        padding: "16px",
        borderRadius: "4px"
      }, children: [
        /* @__PURE__ */ c("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" }),
        /* @__PURE__ */ c("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" }),
        /* @__PURE__ */ c("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" })
      ] }),
      /* @__PURE__ */ w("div", { style: {
        display: "flex",
        gap: "var(--spacing-global-105)",
        backgroundColor: "#f0f0f0",
        padding: "16px",
        borderRadius: "4px"
      }, children: [
        /* @__PURE__ */ c("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" }),
        /* @__PURE__ */ c("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" }),
        /* @__PURE__ */ c("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" })
      ] }),
      /* @__PURE__ */ w("div", { style: {
        display: "flex",
        gap: "var(--spacing-global-5)",
        backgroundColor: "#f0f0f0",
        padding: "16px",
        borderRadius: "4px"
      }, children: [
        /* @__PURE__ */ c("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" }),
        /* @__PURE__ */ c("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" }),
        /* @__PURE__ */ c("div", { style: { backgroundColor: "#0050d8", color: "white", padding: "8px", borderRadius: "4px" }, children: "Item" })
      ] })
    ] })
  ] })
] });
function Ht() {
  return typeof window < "u";
}
function Xe(e) {
  return Ji(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function le(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function be(e) {
  var t;
  return (t = (Ji(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ji(e) {
  return Ht() ? e instanceof Node || e instanceof le(e).Node : !1;
}
function ie(e) {
  return Ht() ? e instanceof Element || e instanceof le(e).Element : !1;
}
function ce(e) {
  return Ht() ? e instanceof HTMLElement || e instanceof le(e).HTMLElement : !1;
}
function Ft(e) {
  return !Ht() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof le(e).ShadowRoot;
}
function ct(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: a
  } = fe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(a);
}
function Qc(e) {
  return ["table", "td", "th"].includes(Xe(e));
}
function Vt(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Nr(e) {
  const t = Rr(), n = ie(e) ? fe(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function eu(e) {
  let t = Pe(e);
  for (; ce(t) && !Ue(t); ) {
    if (Nr(t))
      return t;
    if (Vt(t))
      return null;
    t = Pe(t);
  }
  return null;
}
function Rr() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ue(e) {
  return ["html", "body", "#document"].includes(Xe(e));
}
function fe(e) {
  return le(e).getComputedStyle(e);
}
function Xt(e) {
  return ie(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Pe(e) {
  if (Xe(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ft(e) && e.host || // Fallback.
    be(e)
  );
  return Ft(t) ? t.host : t;
}
function Zi(e) {
  const t = Pe(e);
  return Ue(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ce(t) && ct(t) ? t : Zi(t);
}
function it(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const a = Zi(e), i = a === ((r = e.ownerDocument) == null ? void 0 : r.body), o = le(a);
  if (i) {
    const l = zn(o);
    return t.concat(o, o.visualViewport || [], ct(a) ? a : [], l && n ? it(l) : []);
  }
  return t.concat(a, it(a, [], n));
}
function zn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
const He = Math.min, Fe = Math.max, Mt = Math.round, xt = Math.floor, ge = (e) => ({
  x: e,
  y: e
}), tu = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, nu = {
  start: "end",
  end: "start"
};
function qn(e, t, n) {
  return Fe(e, He(t, n));
}
function ut(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function je(e) {
  return e.split("-")[0];
}
function ft(e) {
  return e.split("-")[1];
}
function Qi(e) {
  return e === "x" ? "y" : "x";
}
function Tr(e) {
  return e === "y" ? "height" : "width";
}
function Te(e) {
  return ["top", "bottom"].includes(je(e)) ? "y" : "x";
}
function Er(e) {
  return Qi(Te(e));
}
function ru(e, t, n) {
  n === void 0 && (n = !1);
  const r = ft(e), a = Er(e), i = Tr(a);
  let o = a === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (o = Lt(o)), [o, Lt(o)];
}
function au(e) {
  const t = Lt(e);
  return [$n(e), t, $n(t)];
}
function $n(e) {
  return e.replace(/start|end/g, (t) => nu[t]);
}
function iu(e, t, n) {
  const r = ["left", "right"], a = ["right", "left"], i = ["top", "bottom"], o = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? a : r : t ? r : a;
    case "left":
    case "right":
      return t ? i : o;
    default:
      return [];
  }
}
function ou(e, t, n, r) {
  const a = ft(e);
  let i = iu(je(e), n === "start", r);
  return a && (i = i.map((o) => o + "-" + a), t && (i = i.concat(i.map($n)))), i;
}
function Lt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => tu[t]);
}
function su(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function eo(e) {
  return typeof e != "number" ? su(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Dt(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: a
  } = e;
  return {
    width: r,
    height: a,
    top: n,
    left: t,
    right: t + r,
    bottom: n + a,
    x: t,
    y: n
  };
}
function lu() {
  const e = navigator.userAgentData;
  return e != null && e.platform ? e.platform : navigator.platform;
}
function cu() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: r
    } = t;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
function to() {
  return /apple/i.test(navigator.vendor);
}
function uu() {
  return lu().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
}
function fu() {
  return cu().includes("jsdom/");
}
const Ea = "data-floating-ui-focusable", du = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function Bn(e) {
  let t = e.activeElement;
  for (; ((n = t) == null || (n = n.shadowRoot) == null ? void 0 : n.activeElement) != null; ) {
    var n;
    t = t.shadowRoot.activeElement;
  }
  return t;
}
function jt(e, t) {
  if (!e || !t)
    return !1;
  const n = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Ft(n)) {
    let r = t;
    for (; r; ) {
      if (e === r)
        return !0;
      r = r.parentNode || r.host;
    }
  }
  return !1;
}
function mu(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
function Ee(e) {
  return (e == null ? void 0 : e.ownerDocument) || document;
}
function no(e) {
  return ce(e) && e.matches(du);
}
function pu(e) {
  if (!e || fu()) return !0;
  try {
    return e.matches(":focus-visible");
  } catch {
    return !0;
  }
}
function hu(e) {
  return e ? e.hasAttribute(Ea) ? e : e.querySelector("[" + Ea + "]") || e : null;
}
function ot(e, t) {
  const n = ["mouse", "pen"];
  return t || n.push("", void 0), n.includes(e);
}
var gu = typeof document < "u", vu = function() {
}, ve = gu ? Ba : vu;
const bu = {
  ...I
};
function wt(e) {
  const t = I.useRef(e);
  return ve(() => {
    t.current = e;
  }), t;
}
const yu = bu.useInsertionEffect, xu = yu || ((e) => e());
function Je(e) {
  const t = I.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return xu(() => {
    t.current = e;
  }), I.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
      r[a] = arguments[a];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
const ro = () => ({
  getShadowRoot: !0,
  displayCheck: (
    // JSDOM does not support the `tabbable` library. To solve this we can
    // check if `ResizeObserver` is a real function (not polyfilled), which
    // determines if the current environment is JSDOM-like.
    typeof ResizeObserver == "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
  )
});
function ao(e, t) {
  const n = Ut(e, ro()), r = n.length;
  if (r === 0) return;
  const a = Bn(Ee(e)), i = n.indexOf(a), o = i === -1 ? t === 1 ? 0 : r - 1 : i + t;
  return n[o];
}
function wu(e) {
  return ao(Ee(e).body, 1) || e;
}
function Nu(e) {
  return ao(Ee(e).body, -1) || e;
}
function un(e, t) {
  const n = t || e.currentTarget, r = e.relatedTarget;
  return !r || !jt(n, r);
}
function Ru(e) {
  Ut(e, ro()).forEach((n) => {
    n.dataset.tabindex = n.getAttribute("tabindex") || "", n.setAttribute("tabindex", "-1");
  });
}
function Ca(e) {
  e.querySelectorAll("[data-tabindex]").forEach((n) => {
    const r = n.dataset.tabindex;
    delete n.dataset.tabindex, r ? n.setAttribute("tabindex", r) : n.removeAttribute("tabindex");
  });
}
function Oa(e, t, n) {
  let {
    reference: r,
    floating: a
  } = e;
  const i = Te(t), o = Er(t), l = Tr(o), u = je(t), f = i === "y", d = r.x + r.width / 2 - a.width / 2, m = r.y + r.height / 2 - a.height / 2, h = r[l] / 2 - a[l] / 2;
  let p;
  switch (u) {
    case "top":
      p = {
        x: d,
        y: r.y - a.height
      };
      break;
    case "bottom":
      p = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      p = {
        x: r.x + r.width,
        y: m
      };
      break;
    case "left":
      p = {
        x: r.x - a.width,
        y: m
      };
      break;
    default:
      p = {
        x: r.x,
        y: r.y
      };
  }
  switch (ft(t)) {
    case "start":
      p[o] -= h * (n && f ? -1 : 1);
      break;
    case "end":
      p[o] += h * (n && f ? -1 : 1);
      break;
  }
  return p;
}
const Tu = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: a = "absolute",
    middleware: i = [],
    platform: o
  } = n, l = i.filter(Boolean), u = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let f = await o.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: d,
    y: m
  } = Oa(f, r, u), h = r, p = {}, b = 0;
  for (let g = 0; g < l.length; g++) {
    const {
      name: x,
      fn: C
    } = l[g], {
      x: O,
      y: E,
      data: _,
      reset: R
    } = await C({
      x: d,
      y: m,
      initialPlacement: r,
      placement: h,
      strategy: a,
      middlewareData: p,
      rects: f,
      platform: o,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = O ?? d, m = E ?? m, p = {
      ...p,
      [x]: {
        ...p[x],
        ..._
      }
    }, R && b <= 50 && (b++, typeof R == "object" && (R.placement && (h = R.placement), R.rects && (f = R.rects === !0 ? await o.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : R.rects), {
      x: d,
      y: m
    } = Oa(f, h, u)), g = -1);
  }
  return {
    x: d,
    y: m,
    placement: h,
    strategy: a,
    middlewareData: p
  };
};
async function io(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: a,
    platform: i,
    rects: o,
    elements: l,
    strategy: u
  } = e, {
    boundary: f = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: m = "floating",
    altBoundary: h = !1,
    padding: p = 0
  } = ut(t, e), b = eo(p), x = l[h ? m === "floating" ? "reference" : "floating" : m], C = Dt(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(x))) == null || n ? x : x.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating)),
    boundary: f,
    rootBoundary: d,
    strategy: u
  })), O = m === "floating" ? {
    x: r,
    y: a,
    width: o.floating.width,
    height: o.floating.height
  } : o.reference, E = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l.floating)), _ = await (i.isElement == null ? void 0 : i.isElement(E)) ? await (i.getScale == null ? void 0 : i.getScale(E)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, R = Dt(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: O,
    offsetParent: E,
    strategy: u
  }) : O);
  return {
    top: (C.top - R.top + b.top) / _.y,
    bottom: (R.bottom - C.bottom + b.bottom) / _.y,
    left: (C.left - R.left + b.left) / _.x,
    right: (R.right - C.right + b.right) / _.x
  };
}
const Eu = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: a,
      rects: i,
      platform: o,
      elements: l,
      middlewareData: u
    } = t, {
      element: f,
      padding: d = 0
    } = ut(e, t) || {};
    if (f == null)
      return {};
    const m = eo(d), h = {
      x: n,
      y: r
    }, p = Er(a), b = Tr(p), g = await o.getDimensions(f), x = p === "y", C = x ? "top" : "left", O = x ? "bottom" : "right", E = x ? "clientHeight" : "clientWidth", _ = i.reference[b] + i.reference[p] - h[p] - i.floating[b], R = h[p] - i.reference[p], X = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(f));
    let M = X ? X[E] : 0;
    (!M || !await (o.isElement == null ? void 0 : o.isElement(X))) && (M = l.floating[E] || i.floating[b]);
    const L = _ / 2 - R / 2, Y = M / 2 - g[b] / 2 - 1, T = He(m[C], Y), W = He(m[O], Y), $ = T, y = M - g[b] - W, v = M / 2 - g[b] / 2 + L, k = qn($, v, y), j = !u.arrow && ft(a) != null && v !== k && i.reference[b] / 2 - (v < $ ? T : W) - g[b] / 2 < 0, P = j ? v < $ ? v - $ : v - y : 0;
    return {
      [p]: h[p] + P,
      data: {
        [p]: k,
        centerOffset: v - k - P,
        ...j && {
          alignmentOffset: P
        }
      },
      reset: j
    };
  }
}), Cu = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: a,
        middlewareData: i,
        rects: o,
        initialPlacement: l,
        platform: u,
        elements: f
      } = t, {
        mainAxis: d = !0,
        crossAxis: m = !0,
        fallbackPlacements: h,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: b = "none",
        flipAlignment: g = !0,
        ...x
      } = ut(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const C = je(a), O = Te(l), E = je(l) === l, _ = await (u.isRTL == null ? void 0 : u.isRTL(f.floating)), R = h || (E || !g ? [Lt(l)] : au(l)), X = b !== "none";
      !h && X && R.push(...ou(l, g, b, _));
      const M = [l, ...R], L = await io(t, x), Y = [];
      let T = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && Y.push(L[C]), m) {
        const v = ru(a, o, _);
        Y.push(L[v[0]], L[v[1]]);
      }
      if (T = [...T, {
        placement: a,
        overflows: Y
      }], !Y.every((v) => v <= 0)) {
        var W, $;
        const v = (((W = i.flip) == null ? void 0 : W.index) || 0) + 1, k = M[v];
        if (k && (!(m === "alignment" ? O !== Te(k) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        T.every((F) => F.overflows[0] > 0 && Te(F.placement) === O)))
          return {
            data: {
              index: v,
              overflows: T
            },
            reset: {
              placement: k
            }
          };
        let j = ($ = T.filter((P) => P.overflows[0] <= 0).sort((P, F) => P.overflows[1] - F.overflows[1])[0]) == null ? void 0 : $.placement;
        if (!j)
          switch (p) {
            case "bestFit": {
              var y;
              const P = (y = T.filter((F) => {
                if (X) {
                  const D = Te(F.placement);
                  return D === O || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  D === "y";
                }
                return !0;
              }).map((F) => [F.placement, F.overflows.filter((D) => D > 0).reduce((D, N) => D + N, 0)]).sort((F, D) => F[1] - D[1])[0]) == null ? void 0 : y[0];
              P && (j = P);
              break;
            }
            case "initialPlacement":
              j = l;
              break;
          }
        if (a !== j)
          return {
            reset: {
              placement: j
            }
          };
      }
      return {};
    }
  };
};
async function Ou(e, t) {
  const {
    placement: n,
    platform: r,
    elements: a
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(a.floating)), o = je(n), l = ft(n), u = Te(n) === "y", f = ["left", "top"].includes(o) ? -1 : 1, d = i && u ? -1 : 1, m = ut(t, e);
  let {
    mainAxis: h,
    crossAxis: p,
    alignmentAxis: b
  } = typeof m == "number" ? {
    mainAxis: m,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: m.mainAxis || 0,
    crossAxis: m.crossAxis || 0,
    alignmentAxis: m.alignmentAxis
  };
  return l && typeof b == "number" && (p = l === "end" ? b * -1 : b), u ? {
    x: p * d,
    y: h * f
  } : {
    x: h * f,
    y: p * d
  };
}
const _u = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: a,
        y: i,
        placement: o,
        middlewareData: l
      } = t, u = await Ou(t, e);
      return o === ((n = l.offset) == null ? void 0 : n.placement) && (r = l.arrow) != null && r.alignmentOffset ? {} : {
        x: a + u.x,
        y: i + u.y,
        data: {
          ...u,
          placement: o
        }
      };
    }
  };
}, ku = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: a
      } = t, {
        mainAxis: i = !0,
        crossAxis: o = !1,
        limiter: l = {
          fn: (x) => {
            let {
              x: C,
              y: O
            } = x;
            return {
              x: C,
              y: O
            };
          }
        },
        ...u
      } = ut(e, t), f = {
        x: n,
        y: r
      }, d = await io(t, u), m = Te(je(a)), h = Qi(m);
      let p = f[h], b = f[m];
      if (i) {
        const x = h === "y" ? "top" : "left", C = h === "y" ? "bottom" : "right", O = p + d[x], E = p - d[C];
        p = qn(O, p, E);
      }
      if (o) {
        const x = m === "y" ? "top" : "left", C = m === "y" ? "bottom" : "right", O = b + d[x], E = b - d[C];
        b = qn(O, b, E);
      }
      const g = l.fn({
        ...t,
        [h]: p,
        [m]: b
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - r,
          enabled: {
            [h]: i,
            [m]: o
          }
        }
      };
    }
  };
};
function oo(e) {
  const t = fe(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const a = ce(e), i = a ? e.offsetWidth : n, o = a ? e.offsetHeight : r, l = Mt(n) !== i || Mt(r) !== o;
  return l && (n = i, r = o), {
    width: n,
    height: r,
    $: l
  };
}
function Cr(e) {
  return ie(e) ? e : e.contextElement;
}
function We(e) {
  const t = Cr(e);
  if (!ce(t))
    return ge(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: a,
    $: i
  } = oo(t);
  let o = (i ? Mt(n.width) : n.width) / r, l = (i ? Mt(n.height) : n.height) / a;
  return (!o || !Number.isFinite(o)) && (o = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: o,
    y: l
  };
}
const Su = /* @__PURE__ */ ge(0);
function so(e) {
  const t = le(e);
  return !Rr() || !t.visualViewport ? Su : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Pu(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== le(e) ? !1 : t;
}
function ze(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const a = e.getBoundingClientRect(), i = Cr(e);
  let o = ge(1);
  t && (r ? ie(r) && (o = We(r)) : o = We(e));
  const l = Pu(i, n, r) ? so(i) : ge(0);
  let u = (a.left + l.x) / o.x, f = (a.top + l.y) / o.y, d = a.width / o.x, m = a.height / o.y;
  if (i) {
    const h = le(i), p = r && ie(r) ? le(r) : r;
    let b = h, g = zn(b);
    for (; g && r && p !== b; ) {
      const x = We(g), C = g.getBoundingClientRect(), O = fe(g), E = C.left + (g.clientLeft + parseFloat(O.paddingLeft)) * x.x, _ = C.top + (g.clientTop + parseFloat(O.paddingTop)) * x.y;
      u *= x.x, f *= x.y, d *= x.x, m *= x.y, u += E, f += _, b = le(g), g = zn(b);
    }
  }
  return Dt({
    width: d,
    height: m,
    x: u,
    y: f
  });
}
function Or(e, t) {
  const n = Xt(e).scrollLeft;
  return t ? t.left + n : ze(be(e)).left + n;
}
function lo(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), a = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Or(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: a,
    y: i
  };
}
function Au(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: a
  } = e;
  const i = a === "fixed", o = be(r), l = t ? Vt(t.floating) : !1;
  if (r === o || l && i)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = ge(1);
  const d = ge(0), m = ce(r);
  if ((m || !m && !i) && ((Xe(r) !== "body" || ct(o)) && (u = Xt(r)), ce(r))) {
    const p = ze(r);
    f = We(r), d.x = p.x + r.clientLeft, d.y = p.y + r.clientTop;
  }
  const h = o && !m && !i ? lo(o, u, !0) : ge(0);
  return {
    width: n.width * f.x,
    height: n.height * f.y,
    x: n.x * f.x - u.scrollLeft * f.x + d.x + h.x,
    y: n.y * f.y - u.scrollTop * f.y + d.y + h.y
  };
}
function Iu(e) {
  return Array.from(e.getClientRects());
}
function Fu(e) {
  const t = be(e), n = Xt(e), r = e.ownerDocument.body, a = Fe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Fe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let o = -n.scrollLeft + Or(e);
  const l = -n.scrollTop;
  return fe(r).direction === "rtl" && (o += Fe(t.clientWidth, r.clientWidth) - a), {
    width: a,
    height: i,
    x: o,
    y: l
  };
}
function Mu(e, t) {
  const n = le(e), r = be(e), a = n.visualViewport;
  let i = r.clientWidth, o = r.clientHeight, l = 0, u = 0;
  if (a) {
    i = a.width, o = a.height;
    const f = Rr();
    (!f || f && t === "fixed") && (l = a.offsetLeft, u = a.offsetTop);
  }
  return {
    width: i,
    height: o,
    x: l,
    y: u
  };
}
function Lu(e, t) {
  const n = ze(e, !0, t === "fixed"), r = n.top + e.clientTop, a = n.left + e.clientLeft, i = ce(e) ? We(e) : ge(1), o = e.clientWidth * i.x, l = e.clientHeight * i.y, u = a * i.x, f = r * i.y;
  return {
    width: o,
    height: l,
    x: u,
    y: f
  };
}
function _a(e, t, n) {
  let r;
  if (t === "viewport")
    r = Mu(e, n);
  else if (t === "document")
    r = Fu(be(e));
  else if (ie(t))
    r = Lu(t, n);
  else {
    const a = so(e);
    r = {
      x: t.x - a.x,
      y: t.y - a.y,
      width: t.width,
      height: t.height
    };
  }
  return Dt(r);
}
function co(e, t) {
  const n = Pe(e);
  return n === t || !ie(n) || Ue(n) ? !1 : fe(n).position === "fixed" || co(n, t);
}
function Du(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = it(e, [], !1).filter((l) => ie(l) && Xe(l) !== "body"), a = null;
  const i = fe(e).position === "fixed";
  let o = i ? Pe(e) : e;
  for (; ie(o) && !Ue(o); ) {
    const l = fe(o), u = Nr(o);
    !u && l.position === "fixed" && (a = null), (i ? !u && !a : !u && l.position === "static" && !!a && ["absolute", "fixed"].includes(a.position) || ct(o) && !u && co(e, o)) ? r = r.filter((d) => d !== o) : a = l, o = Pe(o);
  }
  return t.set(e, r), r;
}
function ju(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: a
  } = e;
  const o = [...n === "clippingAncestors" ? Vt(t) ? [] : Du(t, this._c) : [].concat(n), r], l = o[0], u = o.reduce((f, d) => {
    const m = _a(t, d, a);
    return f.top = Fe(m.top, f.top), f.right = He(m.right, f.right), f.bottom = He(m.bottom, f.bottom), f.left = Fe(m.left, f.left), f;
  }, _a(t, l, a));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function zu(e) {
  const {
    width: t,
    height: n
  } = oo(e);
  return {
    width: t,
    height: n
  };
}
function qu(e, t, n) {
  const r = ce(t), a = be(t), i = n === "fixed", o = ze(e, !0, i, t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = ge(0);
  function f() {
    u.x = Or(a);
  }
  if (r || !r && !i)
    if ((Xe(t) !== "body" || ct(a)) && (l = Xt(t)), r) {
      const p = ze(t, !0, i, t);
      u.x = p.x + t.clientLeft, u.y = p.y + t.clientTop;
    } else a && f();
  i && !r && a && f();
  const d = a && !r && !i ? lo(a, l) : ge(0), m = o.left + l.scrollLeft - u.x - d.x, h = o.top + l.scrollTop - u.y - d.y;
  return {
    x: m,
    y: h,
    width: o.width,
    height: o.height
  };
}
function fn(e) {
  return fe(e).position === "static";
}
function ka(e, t) {
  if (!ce(e) || fe(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return be(e) === n && (n = n.ownerDocument.body), n;
}
function uo(e, t) {
  const n = le(e);
  if (Vt(e))
    return n;
  if (!ce(e)) {
    let a = Pe(e);
    for (; a && !Ue(a); ) {
      if (ie(a) && !fn(a))
        return a;
      a = Pe(a);
    }
    return n;
  }
  let r = ka(e, t);
  for (; r && Qc(r) && fn(r); )
    r = ka(r, t);
  return r && Ue(r) && fn(r) && !Nr(r) ? n : r || eu(e) || n;
}
const $u = async function(e) {
  const t = this.getOffsetParent || uo, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: qu(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Bu(e) {
  return fe(e).direction === "rtl";
}
const Wu = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Au,
  getDocumentElement: be,
  getClippingRect: ju,
  getOffsetParent: uo,
  getElementRects: $u,
  getClientRects: Iu,
  getDimensions: zu,
  getScale: We,
  isElement: ie,
  isRTL: Bu
};
function fo(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Yu(e, t) {
  let n = null, r;
  const a = be(e);
  function i() {
    var l;
    clearTimeout(r), (l = n) == null || l.disconnect(), n = null;
  }
  function o(l, u) {
    l === void 0 && (l = !1), u === void 0 && (u = 1), i();
    const f = e.getBoundingClientRect(), {
      left: d,
      top: m,
      width: h,
      height: p
    } = f;
    if (l || t(), !h || !p)
      return;
    const b = xt(m), g = xt(a.clientWidth - (d + h)), x = xt(a.clientHeight - (m + p)), C = xt(d), E = {
      rootMargin: -b + "px " + -g + "px " + -x + "px " + -C + "px",
      threshold: Fe(0, He(1, u)) || 1
    };
    let _ = !0;
    function R(X) {
      const M = X[0].intersectionRatio;
      if (M !== u) {
        if (!_)
          return o();
        M ? o(!1, M) : r = setTimeout(() => {
          o(!1, 1e-7);
        }, 1e3);
      }
      M === 1 && !fo(f, e.getBoundingClientRect()) && o(), _ = !1;
    }
    try {
      n = new IntersectionObserver(R, {
        ...E,
        // Handle <iframe>s
        root: a.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(R, E);
    }
    n.observe(e);
  }
  return o(!0), i;
}
function Uu(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: i = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = r, f = Cr(e), d = a || i ? [...f ? it(f) : [], ...it(t)] : [];
  d.forEach((C) => {
    a && C.addEventListener("scroll", n, {
      passive: !0
    }), i && C.addEventListener("resize", n);
  });
  const m = f && l ? Yu(f, n) : null;
  let h = -1, p = null;
  o && (p = new ResizeObserver((C) => {
    let [O] = C;
    O && O.target === f && p && (p.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var E;
      (E = p) == null || E.observe(t);
    })), n();
  }), f && !u && p.observe(f), p.observe(t));
  let b, g = u ? ze(e) : null;
  u && x();
  function x() {
    const C = ze(e);
    g && !fo(g, C) && n(), g = C, b = requestAnimationFrame(x);
  }
  return n(), () => {
    var C;
    d.forEach((O) => {
      a && O.removeEventListener("scroll", n), i && O.removeEventListener("resize", n);
    }), m == null || m(), (C = p) == null || C.disconnect(), p = null, u && cancelAnimationFrame(b);
  };
}
const Hu = _u, Vu = ku, Xu = Cu, Sa = Eu, Gu = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), a = {
    platform: Wu,
    ...n
  }, i = {
    ...a.platform,
    _c: r
  };
  return Tu(e, t, {
    ...a,
    platform: i
  });
};
var Ku = typeof document < "u", Ju = function() {
}, Et = Ku ? Ba : Ju;
function zt(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, a;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!zt(e[r], t[r]))
          return !1;
      return !0;
    }
    if (a = Object.keys(e), n = a.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, a[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const i = a[r];
      if (!(i === "_owner" && e.$$typeof) && !zt(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function mo(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Pa(e, t) {
  const n = mo(e);
  return Math.round(t * n) / n;
}
function dn(e) {
  const t = I.useRef(e);
  return Et(() => {
    t.current = e;
  }), t;
}
function Zu(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: a,
    elements: {
      reference: i,
      floating: o
    } = {},
    transform: l = !0,
    whileElementsMounted: u,
    open: f
  } = e, [d, m] = I.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, p] = I.useState(r);
  zt(h, r) || p(r);
  const [b, g] = I.useState(null), [x, C] = I.useState(null), O = I.useCallback((F) => {
    F !== X.current && (X.current = F, g(F));
  }, []), E = I.useCallback((F) => {
    F !== M.current && (M.current = F, C(F));
  }, []), _ = i || b, R = o || x, X = I.useRef(null), M = I.useRef(null), L = I.useRef(d), Y = u != null, T = dn(u), W = dn(a), $ = dn(f), y = I.useCallback(() => {
    if (!X.current || !M.current)
      return;
    const F = {
      placement: t,
      strategy: n,
      middleware: h
    };
    W.current && (F.platform = W.current), Gu(X.current, M.current, F).then((D) => {
      const N = {
        ...D,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: $.current !== !1
      };
      v.current && !zt(L.current, N) && (L.current = N, Wa.flushSync(() => {
        m(N);
      }));
    });
  }, [h, t, n, W, $]);
  Et(() => {
    f === !1 && L.current.isPositioned && (L.current.isPositioned = !1, m((F) => ({
      ...F,
      isPositioned: !1
    })));
  }, [f]);
  const v = I.useRef(!1);
  Et(() => (v.current = !0, () => {
    v.current = !1;
  }), []), Et(() => {
    if (_ && (X.current = _), R && (M.current = R), _ && R) {
      if (T.current)
        return T.current(_, R, y);
      y();
    }
  }, [_, R, y, T, Y]);
  const k = I.useMemo(() => ({
    reference: X,
    floating: M,
    setReference: O,
    setFloating: E
  }), [O, E]), j = I.useMemo(() => ({
    reference: _,
    floating: R
  }), [_, R]), P = I.useMemo(() => {
    const F = {
      position: n,
      left: 0,
      top: 0
    };
    if (!j.floating)
      return F;
    const D = Pa(j.floating, d.x), N = Pa(j.floating, d.y);
    return l ? {
      ...F,
      transform: "translate(" + D + "px, " + N + "px)",
      ...mo(j.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: D,
      top: N
    };
  }, [n, l, j.floating, d.x, d.y]);
  return I.useMemo(() => ({
    ...d,
    update: y,
    refs: k,
    elements: j,
    floatingStyles: P
  }), [d, y, k, j, P]);
}
const Qu = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: a
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? Sa({
        element: r.current,
        padding: a
      }).fn(n) : {} : r ? Sa({
        element: r,
        padding: a
      }).fn(n) : {};
    }
  };
}, ef = (e, t) => ({
  ...Hu(e),
  options: [e, t]
}), tf = (e, t) => ({
  ...Vu(e),
  options: [e, t]
}), nf = (e, t) => ({
  ...Xu(e),
  options: [e, t]
}), rf = (e, t) => ({
  ...Qu(e),
  options: [e, t]
}), af = "data-floating-ui-focusable", Aa = "active", Ia = "selected", of = {
  ...I
};
let Fa = !1, sf = 0;
const Ma = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + sf++
);
function lf() {
  const [e, t] = I.useState(() => Fa ? Ma() : void 0);
  return ve(() => {
    e == null && t(Ma());
  }, []), I.useEffect(() => {
    Fa = !0;
  }, []), e;
}
const cf = of.useId, _r = cf || lf;
let Wn;
process.env.NODE_ENV !== "production" && (Wn = /* @__PURE__ */ new Set());
function uf() {
  for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  const a = "Floating UI: " + n.join(" ");
  if (!((e = Wn) != null && e.has(a))) {
    var i;
    (i = Wn) == null || i.add(a), console.error(a);
  }
}
function ff() {
  const e = /* @__PURE__ */ new Map();
  return {
    emit(t, n) {
      var r;
      (r = e.get(t)) == null || r.forEach((a) => a(n));
    },
    on(t, n) {
      e.has(t) || e.set(t, /* @__PURE__ */ new Set()), e.get(t).add(n);
    },
    off(t, n) {
      var r;
      (r = e.get(t)) == null || r.delete(n);
    }
  };
}
const df = /* @__PURE__ */ I.createContext(null), mf = /* @__PURE__ */ I.createContext(null), kr = () => {
  var e;
  return ((e = I.useContext(df)) == null ? void 0 : e.id) || null;
}, po = () => I.useContext(mf);
function Gt(e) {
  return "data-floating-ui-" + e;
}
function se(e) {
  e.current !== -1 && (clearTimeout(e.current), e.current = -1);
}
const La = /* @__PURE__ */ Gt("safe-polygon");
function mn(e, t, n) {
  if (n && !ot(n))
    return 0;
  if (typeof e == "number")
    return e;
  if (typeof e == "function") {
    const r = e();
    return typeof r == "number" ? r : r == null ? void 0 : r[t];
  }
  return e == null ? void 0 : e[t];
}
function pn(e) {
  return typeof e == "function" ? e() : e;
}
function pf(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    dataRef: a,
    events: i,
    elements: o
  } = e, {
    enabled: l = !0,
    delay: u = 0,
    handleClose: f = null,
    mouseOnly: d = !1,
    restMs: m = 0,
    move: h = !0
  } = t, p = po(), b = kr(), g = wt(f), x = wt(u), C = wt(n), O = wt(m), E = I.useRef(), _ = I.useRef(-1), R = I.useRef(), X = I.useRef(-1), M = I.useRef(!0), L = I.useRef(!1), Y = I.useRef(() => {
  }), T = I.useRef(!1), W = Je(() => {
    var P;
    const F = (P = a.current.openEvent) == null ? void 0 : P.type;
    return (F == null ? void 0 : F.includes("mouse")) && F !== "mousedown";
  });
  I.useEffect(() => {
    if (!l) return;
    function P(F) {
      let {
        open: D
      } = F;
      D || (se(_), se(X), M.current = !0, T.current = !1);
    }
    return i.on("openchange", P), () => {
      i.off("openchange", P);
    };
  }, [l, i]), I.useEffect(() => {
    if (!l || !g.current || !n) return;
    function P(D) {
      W() && r(!1, D, "hover");
    }
    const F = Ee(o.floating).documentElement;
    return F.addEventListener("mouseleave", P), () => {
      F.removeEventListener("mouseleave", P);
    };
  }, [o.floating, n, r, l, g, W]);
  const $ = I.useCallback(function(P, F, D) {
    F === void 0 && (F = !0), D === void 0 && (D = "hover");
    const N = mn(x.current, "close", E.current);
    N && !R.current ? (se(_), _.current = window.setTimeout(() => r(!1, P, D), N)) : F && (se(_), r(!1, P, D));
  }, [x, r]), y = Je(() => {
    Y.current(), R.current = void 0;
  }), v = Je(() => {
    if (L.current) {
      const P = Ee(o.floating).body;
      P.style.pointerEvents = "", P.removeAttribute(La), L.current = !1;
    }
  }), k = Je(() => a.current.openEvent ? ["click", "mousedown"].includes(a.current.openEvent.type) : !1);
  I.useEffect(() => {
    if (!l) return;
    function P(z) {
      if (se(_), M.current = !1, d && !ot(E.current) || pn(O.current) > 0 && !mn(x.current, "open"))
        return;
      const B = mn(x.current, "open", E.current);
      B ? _.current = window.setTimeout(() => {
        C.current || r(!0, z, "hover");
      }, B) : n || r(!0, z, "hover");
    }
    function F(z) {
      if (k()) {
        v();
        return;
      }
      Y.current();
      const B = Ee(o.floating);
      if (se(X), T.current = !1, g.current && a.current.floatingContext) {
        n || se(_), R.current = g.current({
          ...a.current.floatingContext,
          tree: p,
          x: z.clientX,
          y: z.clientY,
          onClose() {
            v(), y(), k() || $(z, !0, "safe-polygon");
          }
        });
        const G = R.current;
        B.addEventListener("mousemove", G), Y.current = () => {
          B.removeEventListener("mousemove", G);
        };
        return;
      }
      (E.current === "touch" ? !jt(o.floating, z.relatedTarget) : !0) && $(z);
    }
    function D(z) {
      k() || a.current.floatingContext && (g.current == null || g.current({
        ...a.current.floatingContext,
        tree: p,
        x: z.clientX,
        y: z.clientY,
        onClose() {
          v(), y(), k() || $(z);
        }
      })(z));
    }
    function N() {
      se(_);
    }
    function A(z) {
      k() || $(z, !1);
    }
    if (ie(o.domReference)) {
      const z = o.domReference, B = o.floating;
      return n && z.addEventListener("mouseleave", D), h && z.addEventListener("mousemove", P, {
        once: !0
      }), z.addEventListener("mouseenter", P), z.addEventListener("mouseleave", F), B && (B.addEventListener("mouseleave", D), B.addEventListener("mouseenter", N), B.addEventListener("mouseleave", A)), () => {
        n && z.removeEventListener("mouseleave", D), h && z.removeEventListener("mousemove", P), z.removeEventListener("mouseenter", P), z.removeEventListener("mouseleave", F), B && (B.removeEventListener("mouseleave", D), B.removeEventListener("mouseenter", N), B.removeEventListener("mouseleave", A));
      };
    }
  }, [o, l, e, d, h, $, y, v, r, n, C, p, x, g, a, k, O]), ve(() => {
    var P;
    if (l && n && (P = g.current) != null && (P = P.__options) != null && P.blockPointerEvents && W()) {
      L.current = !0;
      const D = o.floating;
      if (ie(o.domReference) && D) {
        var F;
        const N = Ee(o.floating).body;
        N.setAttribute(La, "");
        const A = o.domReference, z = p == null || (F = p.nodesRef.current.find((B) => B.id === b)) == null || (F = F.context) == null ? void 0 : F.elements.floating;
        return z && (z.style.pointerEvents = ""), N.style.pointerEvents = "none", A.style.pointerEvents = "auto", D.style.pointerEvents = "auto", () => {
          N.style.pointerEvents = "", A.style.pointerEvents = "", D.style.pointerEvents = "";
        };
      }
    }
  }, [l, n, b, o, p, g, W]), ve(() => {
    n || (E.current = void 0, T.current = !1, y(), v());
  }, [n, y, v]), I.useEffect(() => () => {
    y(), se(_), se(X), v();
  }, [l, o.domReference, y, v]);
  const j = I.useMemo(() => {
    function P(F) {
      E.current = F.pointerType;
    }
    return {
      onPointerDown: P,
      onPointerEnter: P,
      onMouseMove(F) {
        const {
          nativeEvent: D
        } = F;
        function N() {
          !M.current && !C.current && r(!0, D, "hover");
        }
        d && !ot(E.current) || n || pn(O.current) === 0 || T.current && F.movementX ** 2 + F.movementY ** 2 < 2 || (se(X), E.current === "touch" ? N() : (T.current = !0, X.current = window.setTimeout(N, pn(O.current))));
      }
    };
  }, [d, r, n, C, O]);
  return I.useMemo(() => l ? {
    reference: j
  } : {}, [l, j]);
}
function hn(e, t) {
  if (!e || !t)
    return !1;
  const n = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Ft(n)) {
    let r = t;
    for (; r; ) {
      if (e === r)
        return !0;
      r = r.parentNode || r.host;
    }
  }
  return !1;
}
function hf(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
const ho = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "fixed",
  whiteSpace: "nowrap",
  width: "1px",
  top: 0,
  left: 0
}, Da = /* @__PURE__ */ I.forwardRef(function(t, n) {
  const [r, a] = I.useState();
  ve(() => {
    to() && a("button");
  }, []);
  const i = {
    ref: n,
    tabIndex: 0,
    // Role is only for VoiceOver
    role: r,
    "aria-hidden": r ? void 0 : !0,
    [Gt("focus-guard")]: "",
    style: ho
  };
  return /* @__PURE__ */ c("span", {
    ...t,
    ...i
  });
}), go = /* @__PURE__ */ I.createContext(null), ja = /* @__PURE__ */ Gt("portal");
function gf(e) {
  e === void 0 && (e = {});
  const {
    id: t,
    root: n
  } = e, r = _r(), a = bf(), [i, o] = I.useState(null), l = I.useRef(null);
  return ve(() => () => {
    i == null || i.remove(), queueMicrotask(() => {
      l.current = null;
    });
  }, [i]), ve(() => {
    if (!r || l.current) return;
    const u = t ? document.getElementById(t) : null;
    if (!u) return;
    const f = document.createElement("div");
    f.id = r, f.setAttribute(ja, ""), u.appendChild(f), l.current = f, o(f);
  }, [t, r]), ve(() => {
    if (n === null || !r || l.current) return;
    let u = n || (a == null ? void 0 : a.portalNode);
    u && !ie(u) && (u = u.current), u = u || document.body;
    let f = null;
    t && (f = document.createElement("div"), f.id = t, u.appendChild(f));
    const d = document.createElement("div");
    d.id = r, d.setAttribute(ja, ""), u = f || u, u.appendChild(d), l.current = d, o(d);
  }, [t, n, r, a]), i;
}
function vf(e) {
  const {
    children: t,
    id: n,
    root: r,
    preserveTabOrder: a = !0
  } = e, i = gf({
    id: n,
    root: r
  }), [o, l] = I.useState(null), u = I.useRef(null), f = I.useRef(null), d = I.useRef(null), m = I.useRef(null), h = o == null ? void 0 : o.modal, p = o == null ? void 0 : o.open, b = (
    // The FocusManager and therefore floating element are currently open/
    // rendered.
    !!o && // Guards are only for non-modal focus management.
    !o.modal && // Don't render if unmount is transitioning.
    o.open && a && !!(r || i)
  );
  return I.useEffect(() => {
    if (!i || !a || h)
      return;
    function g(x) {
      i && un(x) && (x.type === "focusin" ? Ca : Ru)(i);
    }
    return i.addEventListener("focusin", g, !0), i.addEventListener("focusout", g, !0), () => {
      i.removeEventListener("focusin", g, !0), i.removeEventListener("focusout", g, !0);
    };
  }, [i, a, h]), I.useEffect(() => {
    i && (p || Ca(i));
  }, [p, i]), /* @__PURE__ */ w(go.Provider, {
    value: I.useMemo(() => ({
      preserveTabOrder: a,
      beforeOutsideRef: u,
      afterOutsideRef: f,
      beforeInsideRef: d,
      afterInsideRef: m,
      portalNode: i,
      setFocusManagerState: l
    }), [a, i]),
    children: [b && i && /* @__PURE__ */ c(Da, {
      "data-type": "outside",
      ref: u,
      onFocus: (g) => {
        if (un(g, i)) {
          var x;
          (x = d.current) == null || x.focus();
        } else {
          const C = o ? o.domReference : null, O = Nu(C);
          O == null || O.focus();
        }
      }
    }), b && i && /* @__PURE__ */ c("span", {
      "aria-owns": i.id,
      style: ho
    }), i && /* @__PURE__ */ Wa.createPortal(t, i), b && i && /* @__PURE__ */ c(Da, {
      "data-type": "outside",
      ref: f,
      onFocus: (g) => {
        if (un(g, i)) {
          var x;
          (x = m.current) == null || x.focus();
        } else {
          const C = o ? o.domReference : null, O = wu(C);
          O == null || O.focus(), o != null && o.closeOnFocusOut && (o == null || o.onOpenChange(!1, g.nativeEvent, "focus-out"));
        }
      }
    })]
  });
}
const bf = () => I.useContext(go);
function za(e) {
  return ce(e.target) && e.target.tagName === "BUTTON";
}
function yf(e) {
  return ce(e.target) && e.target.tagName === "A";
}
function qa(e) {
  return no(e);
}
function xf(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    dataRef: a,
    elements: {
      domReference: i
    }
  } = e, {
    enabled: o = !0,
    event: l = "click",
    toggle: u = !0,
    ignoreMouse: f = !1,
    keyboardHandlers: d = !0,
    stickIfOpen: m = !0
  } = t, h = I.useRef(), p = I.useRef(!1), b = I.useMemo(() => ({
    onPointerDown(g) {
      h.current = g.pointerType;
    },
    onMouseDown(g) {
      const x = h.current;
      g.button === 0 && l !== "click" && (ot(x, !0) && f || (n && u && (!(a.current.openEvent && m) || a.current.openEvent.type === "mousedown") ? r(!1, g.nativeEvent, "click") : (g.preventDefault(), r(!0, g.nativeEvent, "click"))));
    },
    onClick(g) {
      const x = h.current;
      if (l === "mousedown" && h.current) {
        h.current = void 0;
        return;
      }
      ot(x, !0) && f || (n && u && (!(a.current.openEvent && m) || a.current.openEvent.type === "click") ? r(!1, g.nativeEvent, "click") : r(!0, g.nativeEvent, "click"));
    },
    onKeyDown(g) {
      h.current = void 0, !(g.defaultPrevented || !d || za(g)) && (g.key === " " && !qa(i) && (g.preventDefault(), p.current = !0), !yf(g) && g.key === "Enter" && r(!(n && u), g.nativeEvent, "click"));
    },
    onKeyUp(g) {
      g.defaultPrevented || !d || za(g) || qa(i) || g.key === " " && p.current && (p.current = !1, r(!(n && u), g.nativeEvent, "click"));
    }
  }), [a, i, l, f, d, r, n, m, u]);
  return I.useMemo(() => o ? {
    reference: b
  } : {}, [o, b]);
}
function wf(e) {
  const {
    open: t = !1,
    onOpenChange: n,
    elements: r
  } = e, a = _r(), i = I.useRef({}), [o] = I.useState(() => ff()), l = kr() != null;
  if (process.env.NODE_ENV !== "production") {
    const p = r.reference;
    p && !ie(p) && uf("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [u, f] = I.useState(r.reference), d = Je((p, b, g) => {
    i.current.openEvent = p ? b : void 0, o.emit("openchange", {
      open: p,
      event: b,
      reason: g,
      nested: l
    }), n == null || n(p, b, g);
  }), m = I.useMemo(() => ({
    setPositionReference: f
  }), []), h = I.useMemo(() => ({
    reference: u || r.reference || null,
    floating: r.floating || null,
    domReference: r.reference
  }), [u, r.reference, r.floating]);
  return I.useMemo(() => ({
    dataRef: i,
    open: t,
    onOpenChange: d,
    elements: h,
    events: o,
    floatingId: a,
    refs: m
  }), [t, d, h, o, a, m]);
}
function Nf(e) {
  e === void 0 && (e = {});
  const {
    nodeId: t
  } = e, n = wf({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), r = e.rootContext || n, a = r.elements, [i, o] = I.useState(null), [l, u] = I.useState(null), d = (a == null ? void 0 : a.domReference) || i, m = I.useRef(null), h = po();
  ve(() => {
    d && (m.current = d);
  }, [d]);
  const p = Zu({
    ...e,
    elements: {
      ...a,
      ...l && {
        reference: l
      }
    }
  }), b = I.useCallback((E) => {
    const _ = ie(E) ? {
      getBoundingClientRect: () => E.getBoundingClientRect(),
      getClientRects: () => E.getClientRects(),
      contextElement: E
    } : E;
    u(_), p.refs.setReference(_);
  }, [p.refs]), g = I.useCallback((E) => {
    (ie(E) || E === null) && (m.current = E, o(E)), (ie(p.refs.reference.current) || p.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    E !== null && !ie(E)) && p.refs.setReference(E);
  }, [p.refs]), x = I.useMemo(() => ({
    ...p.refs,
    setReference: g,
    setPositionReference: b,
    domReference: m
  }), [p.refs, g, b]), C = I.useMemo(() => ({
    ...p.elements,
    domReference: d
  }), [p.elements, d]), O = I.useMemo(() => ({
    ...p,
    ...r,
    refs: x,
    elements: C,
    nodeId: t
  }), [p, x, C, t, r]);
  return ve(() => {
    r.dataRef.current.floatingContext = O;
    const E = h == null ? void 0 : h.nodesRef.current.find((_) => _.id === t);
    E && (E.context = O);
  }), I.useMemo(() => ({
    ...p,
    context: O,
    refs: x,
    elements: C
  }), [p, x, C, O]);
}
function gn() {
  return uu() && to();
}
function Rf(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    events: a,
    dataRef: i,
    elements: o
  } = e, {
    enabled: l = !0,
    visibleOnly: u = !0
  } = t, f = I.useRef(!1), d = I.useRef(-1), m = I.useRef(!0);
  I.useEffect(() => {
    if (!l) return;
    const p = le(o.domReference);
    function b() {
      !n && ce(o.domReference) && o.domReference === Bn(Ee(o.domReference)) && (f.current = !0);
    }
    function g() {
      m.current = !0;
    }
    function x() {
      m.current = !1;
    }
    return p.addEventListener("blur", b), gn() && (p.addEventListener("keydown", g, !0), p.addEventListener("pointerdown", x, !0)), () => {
      p.removeEventListener("blur", b), gn() && (p.removeEventListener("keydown", g, !0), p.removeEventListener("pointerdown", x, !0));
    };
  }, [o.domReference, n, l]), I.useEffect(() => {
    if (!l) return;
    function p(b) {
      let {
        reason: g
      } = b;
      (g === "reference-press" || g === "escape-key") && (f.current = !0);
    }
    return a.on("openchange", p), () => {
      a.off("openchange", p);
    };
  }, [a, l]), I.useEffect(() => () => {
    se(d);
  }, []);
  const h = I.useMemo(() => ({
    onMouseLeave() {
      f.current = !1;
    },
    onFocus(p) {
      if (f.current) return;
      const b = mu(p.nativeEvent);
      if (u && ie(b)) {
        if (gn() && !p.relatedTarget) {
          if (!m.current && !no(b))
            return;
        } else if (!pu(b))
          return;
      }
      r(!0, p.nativeEvent, "focus");
    },
    onBlur(p) {
      f.current = !1;
      const b = p.relatedTarget, g = p.nativeEvent, x = ie(b) && b.hasAttribute(Gt("focus-guard")) && b.getAttribute("data-type") === "outside";
      d.current = window.setTimeout(() => {
        var C;
        const O = Bn(o.domReference ? o.domReference.ownerDocument : document);
        !b && O === o.domReference || jt((C = i.current.floatingContext) == null ? void 0 : C.refs.floating.current, O) || jt(o.domReference, O) || x || r(!1, g, "focus");
      });
    }
  }), [i, o.domReference, r, u]);
  return I.useMemo(() => l ? {
    reference: h
  } : {}, [l, h]);
}
function vn(e, t, n) {
  const r = /* @__PURE__ */ new Map(), a = n === "item";
  let i = e;
  if (a && e) {
    const {
      [Aa]: o,
      [Ia]: l,
      ...u
    } = e;
    i = u;
  }
  return {
    ...n === "floating" && {
      tabIndex: -1,
      [af]: ""
    },
    ...i,
    ...t.map((o) => {
      const l = o ? o[n] : null;
      return typeof l == "function" ? e ? l(e) : null : l;
    }).concat(e).reduce((o, l) => (l && Object.entries(l).forEach((u) => {
      let [f, d] = u;
      if (!(a && [Aa, Ia].includes(f)))
        if (f.indexOf("on") === 0) {
          if (r.has(f) || r.set(f, []), typeof d == "function") {
            var m;
            (m = r.get(f)) == null || m.push(d), o[f] = function() {
              for (var h, p = arguments.length, b = new Array(p), g = 0; g < p; g++)
                b[g] = arguments[g];
              return (h = r.get(f)) == null ? void 0 : h.map((x) => x(...b)).find((x) => x !== void 0);
            };
          }
        } else
          o[f] = d;
    }), o), {})
  };
}
function Tf(e) {
  e === void 0 && (e = []);
  const t = e.map((l) => l == null ? void 0 : l.reference), n = e.map((l) => l == null ? void 0 : l.floating), r = e.map((l) => l == null ? void 0 : l.item), a = I.useCallback(
    (l) => vn(l, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), i = I.useCallback(
    (l) => vn(l, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n
  ), o = I.useCallback(
    (l) => vn(l, e, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r
  );
  return I.useMemo(() => ({
    getReferenceProps: a,
    getFloatingProps: i,
    getItemProps: o
  }), [a, i, o]);
}
const Ef = /* @__PURE__ */ new Map([["select", "listbox"], ["combobox", "listbox"], ["label", !1]]);
function Cf(e, t) {
  var n, r;
  t === void 0 && (t = {});
  const {
    open: a,
    elements: i,
    floatingId: o
  } = e, {
    enabled: l = !0,
    role: u = "dialog"
  } = t, f = _r(), d = ((n = i.domReference) == null ? void 0 : n.id) || f, m = I.useMemo(() => {
    var O;
    return ((O = hu(i.floating)) == null ? void 0 : O.id) || o;
  }, [i.floating, o]), h = (r = Ef.get(u)) != null ? r : u, b = kr() != null, g = I.useMemo(() => h === "tooltip" || u === "label" ? {
    ["aria-" + (u === "label" ? "labelledby" : "describedby")]: a ? m : void 0
  } : {
    "aria-expanded": a ? "true" : "false",
    "aria-haspopup": h === "alertdialog" ? "dialog" : h,
    "aria-controls": a ? m : void 0,
    ...h === "listbox" && {
      role: "combobox"
    },
    ...h === "menu" && {
      id: d
    },
    ...h === "menu" && b && {
      role: "menuitem"
    },
    ...u === "select" && {
      "aria-autocomplete": "none"
    },
    ...u === "combobox" && {
      "aria-autocomplete": "list"
    }
  }, [h, m, b, a, d, u]), x = I.useMemo(() => {
    const O = {
      id: m,
      ...h && {
        role: h
      }
    };
    return h === "tooltip" || u === "label" ? O : {
      ...O,
      ...h === "menu" && {
        "aria-labelledby": d
      }
    };
  }, [h, m, d, u]), C = I.useCallback((O) => {
    let {
      active: E,
      selected: _
    } = O;
    const R = {
      role: "option",
      ...E && {
        id: m + "-fui-option"
      }
    };
    switch (u) {
      case "select":
        return {
          ...R,
          "aria-selected": E && _
        };
      case "combobox":
        return {
          ...R,
          "aria-selected": _
        };
    }
    return {};
  }, [m, u]);
  return I.useMemo(() => l ? {
    reference: g,
    floating: x,
    item: C
  } : {}, [l, g, x, C]);
}
function Of(e, t) {
  let n = e.filter((a) => {
    var i;
    return a.parentId === t && ((i = a.context) == null ? void 0 : i.open);
  }), r = n;
  for (; r.length; )
    r = e.filter((a) => {
      var i;
      return (i = r) == null ? void 0 : i.some((o) => {
        var l;
        return a.parentId === o.id && ((l = a.context) == null ? void 0 : l.open);
      });
    }), n = n.concat(r);
  return n;
}
function $a(e, t) {
  const [n, r] = e;
  let a = !1;
  const i = t.length;
  for (let o = 0, l = i - 1; o < i; l = o++) {
    const [u, f] = t[o] || [0, 0], [d, m] = t[l] || [0, 0];
    f >= r != m >= r && n <= (d - u) * (r - f) / (m - f) + u && (a = !a);
  }
  return a;
}
function _f(e, t) {
  return e[0] >= t.x && e[0] <= t.x + t.width && e[1] >= t.y && e[1] <= t.y + t.height;
}
function kf(e) {
  e === void 0 && (e = {});
  const {
    buffer: t = 0.5,
    blockPointerEvents: n = !1,
    requireIntent: r = !0
  } = e, a = {
    current: -1
  };
  let i = !1, o = null, l = null, u = performance.now();
  function f(m, h) {
    const p = performance.now(), b = p - u;
    if (o === null || l === null || b === 0)
      return o = m, l = h, u = p, null;
    const g = m - o, x = h - l, O = Math.sqrt(g * g + x * x) / b;
    return o = m, l = h, u = p, O;
  }
  const d = (m) => {
    let {
      x: h,
      y: p,
      placement: b,
      elements: g,
      onClose: x,
      nodeId: C,
      tree: O
    } = m;
    return function(_) {
      function R() {
        se(a), x();
      }
      if (se(a), !g.domReference || !g.floating || b == null || h == null || p == null)
        return;
      const {
        clientX: X,
        clientY: M
      } = _, L = [X, M], Y = hf(_), T = _.type === "mouseleave", W = hn(g.floating, Y), $ = hn(g.domReference, Y), y = g.domReference.getBoundingClientRect(), v = g.floating.getBoundingClientRect(), k = b.split("-")[0], j = h > v.right - v.width / 2, P = p > v.bottom - v.height / 2, F = _f(L, y), D = v.width > y.width, N = v.height > y.height, A = (D ? y : v).left, z = (D ? y : v).right, B = (N ? y : v).top, H = (N ? y : v).bottom;
      if (W && (i = !0, !T))
        return;
      if ($ && (i = !1), $ && !T) {
        i = !0;
        return;
      }
      if (T && ie(_.relatedTarget) && hn(g.floating, _.relatedTarget) || O && Of(O.nodesRef.current, C).length)
        return;
      if (k === "top" && p >= y.bottom - 1 || k === "bottom" && p <= y.top + 1 || k === "left" && h >= y.right - 1 || k === "right" && h <= y.left + 1)
        return R();
      let G = [];
      switch (k) {
        case "top":
          G = [[A, y.top + 1], [A, v.bottom - 1], [z, v.bottom - 1], [z, y.top + 1]];
          break;
        case "bottom":
          G = [[A, v.top + 1], [A, y.bottom - 1], [z, y.bottom - 1], [z, v.top + 1]];
          break;
        case "left":
          G = [[v.right - 1, H], [v.right - 1, B], [y.left + 1, B], [y.left + 1, H]];
          break;
        case "right":
          G = [[y.right - 1, H], [y.right - 1, B], [v.left + 1, B], [v.left + 1, H]];
          break;
      }
      function Z(J) {
        let [V, K] = J;
        switch (k) {
          case "top": {
            const Q = [D ? V + t / 2 : j ? V + t * 4 : V - t * 4, K + t + 1], re = [D ? V - t / 2 : j ? V + t * 4 : V - t * 4, K + t + 1], q = [[v.left, j || D ? v.bottom - t : v.top], [v.right, j ? D ? v.bottom - t : v.top : v.bottom - t]];
            return [Q, re, ...q];
          }
          case "bottom": {
            const Q = [D ? V + t / 2 : j ? V + t * 4 : V - t * 4, K - t], re = [D ? V - t / 2 : j ? V + t * 4 : V - t * 4, K - t], q = [[v.left, j || D ? v.top + t : v.bottom], [v.right, j ? D ? v.top + t : v.bottom : v.top + t]];
            return [Q, re, ...q];
          }
          case "left": {
            const Q = [V + t + 1, N ? K + t / 2 : P ? K + t * 4 : K - t * 4], re = [V + t + 1, N ? K - t / 2 : P ? K + t * 4 : K - t * 4];
            return [...[[P || N ? v.right - t : v.left, v.top], [P ? N ? v.right - t : v.left : v.right - t, v.bottom]], Q, re];
          }
          case "right": {
            const Q = [V - t, N ? K + t / 2 : P ? K + t * 4 : K - t * 4], re = [V - t, N ? K - t / 2 : P ? K + t * 4 : K - t * 4], q = [[P || N ? v.left + t : v.right, v.top], [P ? N ? v.left + t : v.right : v.left + t, v.bottom]];
            return [Q, re, ...q];
          }
        }
      }
      if (!$a([X, M], G)) {
        if (i && !F)
          return R();
        if (!T && r) {
          const J = f(_.clientX, _.clientY);
          if (J !== null && J < 0.1)
            return R();
        }
        $a([X, M], Z([h, p])) ? !i && r && (a.current = window.setTimeout(R, 40)) : R();
      }
    };
  };
  return d.__options = {
    blockPointerEvents: n
  }, d;
}
const Sf = ({
  children: e,
  content: t,
  position: n = "top",
  theme: r = "dark",
  showArrow: a = !0,
  className: i = "",
  isPopup: o = !1,
  triggerOnClick: l = !1
}) => {
  var v, k;
  const [u, f] = Oe(!1), d = tt(null), { x: m, y: h, strategy: p, refs: b, context: g, middlewareData: x, placement: C } = Nf({
    open: u,
    onOpenChange: f,
    placement: n,
    middleware: [
      ef(8),
      nf(),
      tf({ padding: 8 }),
      ...a ? [rf({ element: d })] : []
    ],
    whileElementsMounted: Uu
  }), O = pf(g, {
    move: !1,
    handleClose: kf(),
    enabled: !l
  }), E = xf(g, {
    enabled: l
  }), _ = Rf(g), R = Cf(g, { role: "tooltip" }), { getReferenceProps: X, getFloatingProps: M } = Tf([
    O,
    _,
    R,
    ...l ? [E] : []
  ]), L = (v = x.arrow) == null ? void 0 : v.x, Y = (k = x.arrow) == null ? void 0 : k.y, T = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[C.split("-")[0]], W = () => {
    switch (C.split("-")[0]) {
      case "top":
        return "225deg";
      // Arrow points down (away from trigger at top)
      case "bottom":
        return "45deg";
      // Arrow points up (away from trigger at bottom)
      case "left":
        return "315deg";
      // Arrow points right (away from trigger at left)
      case "right":
        return "135deg";
      // Arrow points left (away from trigger at right)
      default:
        return "45deg";
    }
  }, [$, y] = Oe(!1);
  return nt(() => (y(!0), () => y(!1)), []), /* @__PURE__ */ w(Ct, { children: [
    Ce.cloneElement(
      e,
      {
        ref: b.setReference,
        ...X()
      }
    ),
    $ && u && /* @__PURE__ */ c(vf, { children: /* @__PURE__ */ w(
      "div",
      {
        ref: b.setFloating,
        className: `tooltip__body tooltip__body--${r} ${o ? "tooltip__body--popup" : ""} ${i}`,
        style: {
          position: p,
          top: h ?? 0,
          left: m ?? 0,
          zIndex: 1e3,
          pointerEvents: o ? "auto" : "none"
        },
        ...M(),
        children: [
          t,
          a && /* @__PURE__ */ c(
            "div",
            {
              ref: d,
              className: "tooltip__arrow",
              style: {
                position: "absolute",
                left: L != null ? `${L}px` : "",
                top: Y != null ? `${Y}px` : "",
                [T]: "-5px",
                width: "10px",
                height: "10px",
                backgroundColor: r === "light" ? "#f0f0f0" : "#181818",
                transform: `rotate(${W()})`
              }
            }
          )
        ]
      }
    ) })
  ] });
};
Sf.propTypes = {
  children: s.node.isRequired,
  content: s.node.isRequired,
  position: s.oneOf(["top", "right", "bottom", "left"]),
  theme: s.oneOf(["dark", "light"]),
  showArrow: s.bool,
  className: s.string,
  isPopup: s.bool,
  triggerOnClick: s.bool
};
const Pf = ({
  children: e,
  variant: t = "default",
  size: n = "default",
  disabled: r = !1,
  ariaDisabled: a = !1,
  unstyled: i = !1,
  onClick: o,
  type: l = "button",
  startIcon: u,
  endIcon: f,
  className: d,
  ...m
}) => {
  const h = "usa-button", p = t !== "default" ? `${h}--${t}` : "", b = n === "big" ? `${h}--big` : "", g = i ? `${h}--unstyled` : "", x = [
    h,
    p,
    b,
    g,
    d
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ w(
    "button",
    {
      type: l,
      className: x,
      onClick: o,
      disabled: r,
      "aria-disabled": a || r,
      ...m,
      children: [
        u && /* @__PURE__ */ c("span", { className: "usa-button__icon usa-button__icon--left", children: /* @__PURE__ */ c(ae, { icon: u }) }),
        e,
        f && /* @__PURE__ */ c("span", { className: "usa-button__icon usa-button__icon--right", children: /* @__PURE__ */ c(ae, { icon: f }) })
      ]
    }
  );
};
Pf.propTypes = {
  children: s.node.isRequired,
  variant: s.oneOf([
    "default",
    "secondary",
    "accent-cool",
    "accent-warm",
    "base",
    "outline",
    "outline-inverse"
  ]),
  size: s.oneOf(["default", "big"]),
  disabled: s.bool,
  ariaDisabled: s.bool,
  unstyled: s.bool,
  onClick: s.func,
  type: s.oneOf(["button", "submit", "reset"]),
  startIcon: s.oneOfType([s.object, s.array, s.string]),
  endIcon: s.oneOfType([s.object, s.array, s.string]),
  className: s.string
};
const vo = ({
  type: e = "info",
  heading: t,
  children: n,
  slim: r = !1,
  noIcon: a = !1,
  className: i = ""
}) => {
  const o = [
    "alert",
    `alert--${e}`,
    r && "alert--slim",
    a && "alert--no-icon",
    i
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ c(
    "div",
    {
      className: o,
      role: e === "error" || e === "emergency" ? "alert" : void 0,
      children: /* @__PURE__ */ w("div", { className: "alert__body", children: [
        !a && /* @__PURE__ */ c("div", { className: "alert__icon", children: /* @__PURE__ */ c(ae, { icon: (() => {
          switch (e) {
            case "info":
              return ba;
            case "warning":
              return oc;
            case "success":
              return Xl;
            case "error":
              return va;
            case "emergency":
              return va;
            default:
              return ba;
          }
        })() }) }),
        /* @__PURE__ */ w("div", { className: "alert__content", children: [
          t && /* @__PURE__ */ c("h4", { className: "alert__heading", children: t }),
          /* @__PURE__ */ c("div", { className: "alert__text", children: n })
        ] })
      ] })
    }
  );
};
vo.propTypes = {
  /**
   * Type of alert to display
   */
  type: s.oneOf(["info", "warning", "success", "error", "emergency"]),
  /**
   * Optional heading text for the alert
   */
  heading: s.string,
  /**
   * Content to display in the alert
   */
  children: s.node.isRequired,
  /**
   * Whether to display a slim version of the alert
   */
  slim: s.bool,
  /**
   * Whether to display the alert without an icon
   */
  noIcon: s.bool,
  /**
   * Additional CSS class names
   */
  className: s.string
};
vo.defaultProps = {
  type: "info",
  heading: void 0,
  slim: !1,
  noIcon: !1,
  className: ""
};
const Af = ({
  name: e,
  title: t,
  description: n,
  options: r,
  selectedValues: a = [],
  onChange: i,
  tiled: o = !1,
  required: l = !1,
  errorMessage: u,
  className: f
}) => {
  const d = l && u, m = [
    "usa-fieldset",
    "checkbox-group",
    o ? "checkbox-group--tiled" : "",
    d ? "checkbox-group--error" : "",
    f
  ].filter(Boolean).join(" "), h = (p, b) => {
    let g;
    b ? g = [...a, p] : g = a.filter((x) => x !== p), i(g);
  };
  return /* @__PURE__ */ w("fieldset", { className: m, children: [
    /* @__PURE__ */ w("legend", { className: "usa-legend", children: [
      t,
      l && /* @__PURE__ */ c("span", { className: "checkbox-required-asterisk", children: " *" })
    ] }),
    n && /* @__PURE__ */ c("p", { className: "checkbox-description", children: n }),
    d && /* @__PURE__ */ c("p", { className: "checkbox-error-message", children: u }),
    /* @__PURE__ */ c("div", { className: "checkbox-options-wrapper", children: r.map((p) => {
      const { value: b, labelText: g, labelDescription: x, disabled: C } = p, O = a.includes(b), E = `${e}-${b}`, _ = [
        "usa-checkbox",
        C ? "usa-checkbox--disabled" : ""
      ].filter(Boolean).join(" "), R = [
        "usa-checkbox__input",
        o ? "usa-checkbox__input--tile" : ""
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ w("div", { className: _, children: [
        /* @__PURE__ */ c(
          "input",
          {
            className: R,
            type: "checkbox",
            id: E,
            name: e,
            value: b,
            checked: O,
            onChange: (X) => h(b, X.target.checked),
            disabled: C
          }
        ),
        /* @__PURE__ */ w("label", { className: "usa-checkbox__label", htmlFor: E, children: [
          g,
          x && /* @__PURE__ */ c("span", { className: "usa-checkbox__label-description", children: x })
        ] })
      ] }, b);
    }) })
  ] });
};
Af.propTypes = {
  /**
   * The name for the checkbox group.
   */
  name: s.string.isRequired,
  /**
   * The title for the checkbox group.
   */
  title: s.string.isRequired,
  /**
   * Optional description for the checkbox group.
   */
  description: s.string,
  /**
   * Array of checkbox options.
   */
  options: s.arrayOf(
    s.shape({
      value: s.string.isRequired,
      labelText: s.string.isRequired,
      labelDescription: s.string,
      disabled: s.bool
    })
  ).isRequired,
  /**
   * Array of currently selected values.
   */
  selectedValues: s.arrayOf(s.string),
  /**
   * Callback function when checkbox selection changes.
   */
  onChange: s.func.isRequired,
  /**
   * If `true`, the tiled variant is used.
   */
  tiled: s.bool,
  /**
   * If `true`, the checkbox group is required.
   */
  required: s.bool,
  /**
   * The error message to display when required and no option is selected.
   */
  errorMessage: s.string,
  /**
   * Additional classes for the component.
   */
  className: s.string
};
const qf = () => /* @__PURE__ */ w(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: { display: "inline-block", marginLeft: "4px", verticalAlign: "middle" },
    children: [
      /* @__PURE__ */ c("path", { d: "M11 1H1v10h10V1z" }),
      /* @__PURE__ */ c("path", { d: "M4 8l4-4M4 4h4v4" })
    ]
  }
), If = ({
  id: e,
  label: t,
  description: n,
  state: r = "default",
  size: a = "default",
  disabled: i = !1,
  value: o,
  onChange: l,
  prefixIcon: u,
  suffixContent: f,
  pattern: d,
  errorMessage: m,
  className: h,
  ...p
}) => {
  const b = [
    "usa-input",
    a !== "default" ? `usa-input--${a}` : "",
    r === "error" ? "usa-input--error" : "",
    r === "success" ? "usa-input--success" : "",
    r === "disabled" ? "usa-input--disabled" : "",
    h
  ].filter(Boolean).join(" "), g = [
    "usa-input-wrapper",
    a !== "default" ? `usa-input-wrapper--${a}` : "",
    u ? "usa-input-wrapper--prefix" : "",
    f ? "usa-input-wrapper--suffix" : "",
    r === "error" ? "usa-input-wrapper--error" : "",
    r === "success" ? "usa-input-wrapper--success" : "",
    i ? "usa-input-wrapper--disabled" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ w("div", { className: "usa-text-input", children: [
    t && /* @__PURE__ */ c("label", { className: "usa-label", htmlFor: e, children: t }),
    n && /* @__PURE__ */ c("span", { className: "usa-text-input__description", children: n }),
    r === "error" && m && /* @__PURE__ */ c("span", { className: "usa-text-input__error-message", children: m }),
    /* @__PURE__ */ w("div", { className: g, children: [
      u && /* @__PURE__ */ c("div", { className: "usa-input-prefix", children: /* @__PURE__ */ c(ae, { icon: u }) }),
      /* @__PURE__ */ c(
        "input",
        {
          id: e,
          className: b,
          disabled: i,
          value: o,
          onChange: l,
          pattern: d,
          "aria-invalid": r === "error",
          ...p
        }
      ),
      f && /* @__PURE__ */ c("div", { className: "usa-input-suffix", children: f })
    ] })
  ] });
};
If.propTypes = {
  id: s.string.isRequired,
  label: s.string,
  description: s.string,
  state: s.oneOf(["default", "disabled", "error", "success"]),
  size: s.oneOf(["default", "2xs", "xs", "sm", "md", "lg", "xl", "2xl"]),
  disabled: s.bool,
  value: s.string,
  onChange: s.func,
  prefixIcon: s.oneOfType([s.object, s.array, s.string]),
  suffixContent: s.node,
  pattern: s.string,
  errorMessage: s.string,
  className: s.string
};
const bo = ({
  label: e,
  status: t,
  showLabel: n = !0,
  showCounter: r = !1,
  smallCounter: a = !1,
  centered: i = !1,
  number: o
}) => {
  const l = "usa-step-indicator__segment", u = `${l} ${l}--${t}`;
  return /* @__PURE__ */ w("li", { className: u, "aria-current": t === "current" ? "true" : void 0, children: [
    r && /* @__PURE__ */ c("span", { className: "usa-step-indicator__counter", children: /* @__PURE__ */ c("span", { className: "usa-step-indicator__counter-inner", children: o }) }),
    n && /* @__PURE__ */ w("span", { className: "usa-step-indicator__segment-label", children: [
      e,
      t === "complete" && /* @__PURE__ */ c("span", { className: "usa-sr-only", children: "completed" }),
      t === "not-complete" && /* @__PURE__ */ c("span", { className: "usa-sr-only", children: "not completed" })
    ] })
  ] });
};
bo.propTypes = {
  label: s.string.isRequired,
  status: s.oneOf(["complete", "current", "not-complete"]).isRequired,
  showLabel: s.bool,
  showCounter: s.bool,
  smallCounter: s.bool,
  centered: s.bool,
  number: s.number.isRequired
};
const Ff = ({
  steps: e,
  currentStep: t,
  title: n,
  variant: r = "default",
  showLabels: a = !0,
  showCounters: i = !1,
  centered: o = !1,
  smallCounters: l = !1,
  className: u = "",
  ...f
}) => {
  const d = "usa-step-indicator", m = a ? "" : `${d}--no-labels`, h = i ? `${d}--counters` : "", p = l ? `${d}--counters-sm` : "", b = o ? `${d}--center` : "", g = r !== "default" ? `${d}--${r}` : "", x = [
    d,
    m,
    h,
    p,
    b,
    g,
    u
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ w("div", { className: x, variant: r, ...f, children: [
    /* @__PURE__ */ c("ol", { className: "usa-step-indicator__segments", children: e.map((C, O) => /* @__PURE__ */ c(
      bo,
      {
        label: C.label,
        status: Mf(O, t - 1),
        showLabel: a,
        showCounter: i,
        smallCounter: l,
        centered: o,
        number: O + 1
      },
      O
    )) }),
    /* @__PURE__ */ c("div", { className: "usa-step-indicator__header", children: /* @__PURE__ */ w("h4", { className: "usa-step-indicator__heading", children: [
      /* @__PURE__ */ w("div", { className: "usa-step-indicator__counter-container", children: [
        /* @__PURE__ */ c("span", { className: "usa-sr-only", children: "Step" }),
        /* @__PURE__ */ c("span", { className: "usa-step-indicator__current-step", children: t }),
        /* @__PURE__ */ w("span", { className: "usa-step-indicator__total-steps", children: [
          "of ",
          e.length
        ] })
      ] }),
      n && /* @__PURE__ */ w("div", { className: "usa-step-indicator__title-container", children: [
        /* @__PURE__ */ c(ae, { icon: Hl, className: "usa-step-indicator__heading-icon" }),
        /* @__PURE__ */ c("span", { className: "usa-step-indicator__heading-text", children: n })
      ] })
    ] }) })
  ] });
};
function Mf(e, t) {
  return e < t ? "complete" : e === t ? "current" : "not-complete";
}
Ff.propTypes = {
  steps: s.arrayOf(
    s.shape({
      label: s.string.isRequired
    })
  ).isRequired,
  currentStep: s.number.isRequired,
  title: s.string,
  variant: s.oneOf(["default", "mobile"]),
  showLabels: s.bool,
  showCounters: s.bool,
  centered: s.bool,
  smallCounters: s.bool,
  className: s.string
};
export {
  vo as Alert,
  nr as Banner,
  lr as Breadcrumbs,
  Pf as Button,
  Af as Checkbox,
  Gi as ColorSwatch,
  pc as Contacts,
  qf as ExternalLinkIcon,
  sr as Footer,
  ir as Header,
  gc as HeroGlobal,
  hc as HeroHomepage,
  Zc as Modal,
  Si as PageTemplate,
  lc as ProcessSteps,
  uc as Search,
  Ai as SideNav,
  or as SkipNav,
  Ki as SpacingDisplay,
  zf as SpacingExamples,
  jf as SpacingTokens,
  Ff as StepIndicator,
  sc as SummaryBox,
  cc as Tag,
  If as TextInput,
  Sf as Tooltip,
  Xi as Typography
};
