const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "../nodes/0.BagBPZu5.js",
      "../chunks/BwuXgrL6.js",
      "../chunks/PUWf84Ah.js",
      "../chunks/CXQ1_rKg.js",
      "../chunks/DYJXOdPT.js",
      "../nodes/1.BJGSPC7b.js",
      "../chunks/DH-PflIw.js",
      "../chunks/CcYKbvd6.js",
      "../chunks/B0IYIc1v.js",
      "../chunks/CU95D5Fw.js",
      "../nodes/2.CfCpUlD2.js",
      "../nodes/3.CadV30VF.js",
      "../nodes/4.DCuWAfWL.js",
    ]),
) => i.map((i) => d[i]);
import {
  h as T,
  J as U,
  q as V,
  E as q,
  ar as F,
  ad as G,
  y as z,
  x as L,
  e as H,
  aj as ne,
  k as se,
  as as ie,
  _ as oe,
  o as J,
  D as W,
  at as ce,
  au as K,
  av as ue,
  aw as fe,
  ax as le,
  Q as g,
  ay as de,
  az as O,
  aA as _e,
  aB as ve,
  aC as me,
  l as he,
  aD as ge,
  aE as Ee,
  U as ye,
  aF as be,
  aG as Pe,
  aH as Q,
  aI as Re,
  ah as Se,
  aJ as we,
  i as Oe,
  M as Ae,
  u as Ie,
  aK as Te,
  A,
  Y as Le,
  j as xe,
  aL as x,
  W as De,
  X as je,
  t as Ne,
  aM as D,
} from "../chunks/PUWf84Ah.js";
import { h as Ce, m as Me, u as ke, s as pe } from "../chunks/DH-PflIw.js";
import { a as S, f as X, c as j, t as Be } from "../chunks/BwuXgrL6.js";
import { o as Ye } from "../chunks/B0IYIc1v.js";
import { B as Z } from "../chunks/CXQ1_rKg.js";
let I = !1;
function Ue(r) {
  var e = I;
  try {
    return ((I = !1), [r(), I]);
  } finally {
    I = e;
  }
}
function N(r, e, s = !1) {
  var c;
  T && ((c = H), U());
  var i = new Z(r),
    a = s ? q : 0;
  function n(t, u) {
    if (T) {
      var d = F(c);
      if (t !== parseInt(d.substring(1))) {
        var o = G();
        (z(o), (i.anchor = o), L(!1), i.ensure(t, u), L(!0));
        return;
      }
    }
    i.ensure(t, u);
  }
  V(() => {
    var t = !1;
    (e((u, d = 0) => {
      ((t = !0), n(d, u));
    }),
      t || n(-1, null));
  }, a);
}
function C(r, e, s) {
  var c;
  T && ((c = H), U());
  var i = new Z(r);
  V(() => {
    var a = e() ?? null;
    if (T) {
      var n = F(c),
        t = n === ne,
        u = a !== null;
      if (t !== u) {
        var d = G();
        (z(d),
          (i.anchor = d),
          L(!1),
          i.ensure(a, a && ((o) => s(o, a))),
          L(!0));
        return;
      }
    }
    i.ensure(a, a && ((o) => s(o, a)));
  }, q);
}
function B(r, e) {
  return r === e || r?.[K] === e;
}
function M(r = {}, e, s, c) {
  var i = se.r,
    a = W;
  return (
    ie(() => {
      var n, t;
      return (
        oe(() => {
          ((n = t),
            (t = []),
            J(() => {
              r !== s(...t) &&
                (e(r, ...t), n && B(s(...n), r) && e(null, ...n));
            }));
        }),
        () => {
          let u = a;
          for (; u !== i && u.parent !== null && u.parent.f & ce; )
            u = u.parent;
          const d = () => {
              t && B(s(...t), r) && e(null, ...t);
            },
            o = u.teardown;
          u.teardown = () => {
            (d(), o?.());
          };
        }
      );
    }),
    r
  );
}
function k(r, e, s, c) {
  var i = !he || (s & ge) !== 0,
    a = (s & me) !== 0,
    n = (s & Pe) !== 0,
    t = c,
    u = !0,
    d = () => (u && ((u = !1), (t = n ? J(c) : c)), t);
  let o;
  if (a) {
    var E = K in r || Q in r;
    o = ue(r, e)?.set ?? (E && e in r ? (f) => (r[e] = f) : void 0);
  }
  var v,
    m = !1;
  (a ? ([v, m] = Ue(() => r[e])) : (v = r[e]),
    v === void 0 && c !== void 0 && ((v = d()), o && (i && fe(), o(v))));
  var _;
  if (
    (i
      ? (_ = () => {
          var f = r[e];
          return f === void 0 ? d() : ((u = !0), f);
        })
      : (_ = () => {
          var f = r[e];
          return (f !== void 0 && (t = void 0), f === void 0 ? t : f);
        }),
    i && (s & le) === 0)
  )
    return _;
  if (o) {
    var l = r.$$legacy;
    return function (f, b) {
      return arguments.length > 0
        ? ((!i || !b || l || m) && o(b ? _() : f), f)
        : _();
    };
  }
  var y = !1,
    h = ((s & Ee) !== 0 ? ye : be)(() => ((y = !1), _()));
  a && g(h);
  var R = W;
  return function (f, b) {
    if (arguments.length > 0) {
      const P = b ? g(h) : i && a ? de(f) : f;
      return (O(h, P), (y = !0), t !== void 0 && (t = P), f);
    }
    return (_e && y) || (R.f & ve) !== 0 ? h.v : g(h);
  };
}
function Ve(r) {
  return class extends qe {
    constructor(e) {
      super({ component: r, ...e });
    }
  };
}
class qe {
  #t;
  #e;
  constructor(e) {
    var s = new Map(),
      c = (a, n) => {
        var t = we(n, !1, !1);
        return (s.set(a, t), t);
      };
    const i = new Proxy(
      { ...(e.props || {}), $$events: {} },
      {
        get(a, n) {
          return g(s.get(n) ?? c(n, Reflect.get(a, n)));
        },
        has(a, n) {
          return n === Q
            ? !0
            : (g(s.get(n) ?? c(n, Reflect.get(a, n))), Reflect.has(a, n));
        },
        set(a, n, t) {
          return (O(s.get(n) ?? c(n, t), t), Reflect.set(a, n, t));
        },
      },
    );
    ((this.#e = (e.hydrate ? Ce : Me)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: i,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover,
      transformError: e.transformError,
    })),
      (!e?.props?.$$host || e.sync === !1) && Re(),
      (this.#t = i.$$events));
    for (const a of Object.keys(this.#e))
      a === "$set" ||
        a === "$destroy" ||
        a === "$on" ||
        Se(this, a, {
          get() {
            return this.#e[a];
          },
          set(n) {
            this.#e[a] = n;
          },
          enumerable: !0,
        });
    ((this.#e.$set = (a) => {
      Object.assign(i, a);
    }),
      (this.#e.$destroy = () => {
        ke(this.#e);
      }));
  }
  $set(e) {
    this.#e.$set(e);
  }
  $on(e, s) {
    this.#t[e] = this.#t[e] || [];
    const c = (...i) => s.call(this, ...i);
    return (
      this.#t[e].push(c),
      () => {
        this.#t[e] = this.#t[e].filter((i) => i !== c);
      }
    );
  }
  $destroy() {
    this.#e.$destroy();
  }
}
const Fe = "modulepreload",
  Ge = function (r, e) {
    return new URL(r, e).href;
  },
  Y = {},
  w = function (e, s, c) {
    let i = Promise.resolve();
    if (s && s.length > 0) {
      let d = function (o) {
        return Promise.all(
          o.map((E) =>
            Promise.resolve(E).then(
              (v) => ({ status: "fulfilled", value: v }),
              (v) => ({ status: "rejected", reason: v }),
            ),
          ),
        );
      };
      const n = document.getElementsByTagName("link"),
        t = document.querySelector("meta[property=csp-nonce]"),
        u = t?.nonce || t?.getAttribute("nonce");
      i = d(
        s.map((o) => {
          if (((o = Ge(o, c)), o in Y)) return;
          Y[o] = !0;
          const E = o.endsWith(".css"),
            v = E ? '[rel="stylesheet"]' : "";
          if (c)
            for (let _ = n.length - 1; _ >= 0; _--) {
              const l = n[_];
              if (l.href === o && (!E || l.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${o}"]${v}`)) return;
          const m = document.createElement("link");
          if (
            ((m.rel = E ? "stylesheet" : Fe),
            E || (m.as = "script"),
            (m.crossOrigin = ""),
            (m.href = o),
            u && m.setAttribute("nonce", u),
            document.head.appendChild(m),
            E)
          )
            return new Promise((_, l) => {
              (m.addEventListener("load", _),
                m.addEventListener("error", () =>
                  l(new Error(`Unable to preload CSS for ${o}`)),
                ));
            });
        }),
      );
    }
    function a(n) {
      const t = new Event("vite:preloadError", { cancelable: !0 });
      if (((t.payload = n), window.dispatchEvent(t), !t.defaultPrevented))
        throw n;
    }
    return i.then((n) => {
      for (const t of n || []) t.status === "rejected" && a(t.reason);
      return e().catch(a);
    });
  },
  tt = {};
var ze = X(
    '<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>',
  ),
  He = X("<!> <!>", 1);
function Je(r, e) {
  Oe(e, !0);
  let s = k(e, "components", 23, () => []),
    c = k(e, "data_0", 3, null),
    i = k(e, "data_1", 3, null);
  (Ae(() => e.stores.page.set(e.page)),
    Ie(() => {
      (e.stores,
        e.page,
        e.constructors,
        s(),
        e.form,
        c(),
        i(),
        e.stores.page.notify());
    }));
  let a = x(!1),
    n = x(!1),
    t = x(null);
  Ye(() => {
    const l = e.stores.page.subscribe(() => {
      g(a) &&
        (O(n, !0),
        Te().then(() => {
          O(t, document.title || "untitled page", !0);
        }));
    });
    return (O(a, !0), l);
  });
  const u = D(() => e.constructors[1]);
  var d = He(),
    o = A(d);
  {
    var E = (l) => {
        const y = D(() => e.constructors[0]);
        var h = j(),
          R = A(h);
        (C(
          R,
          () => g(y),
          (f, b) => {
            M(
              b(f, {
                get data() {
                  return c();
                },
                get form() {
                  return e.form;
                },
                get params() {
                  return e.page.params;
                },
                children: (P, Ke) => {
                  var p = j(),
                    ee = A(p);
                  (C(
                    ee,
                    () => g(u),
                    (te, re) => {
                      M(
                        re(te, {
                          get data() {
                            return i();
                          },
                          get form() {
                            return e.form;
                          },
                          get params() {
                            return e.page.params;
                          },
                        }),
                        (ae) => (s()[1] = ae),
                        () => s()?.[1],
                      );
                    },
                  ),
                    S(P, p));
                },
                $$slots: { default: !0 },
              }),
              (P) => (s()[0] = P),
              () => s()?.[0],
            );
          },
        ),
          S(l, h));
      },
      v = (l) => {
        const y = D(() => e.constructors[0]);
        var h = j(),
          R = A(h);
        (C(
          R,
          () => g(y),
          (f, b) => {
            M(
              b(f, {
                get data() {
                  return c();
                },
                get form() {
                  return e.form;
                },
                get params() {
                  return e.page.params;
                },
              }),
              (P) => (s()[0] = P),
              () => s()?.[0],
            );
          },
        ),
          S(l, h));
      };
    N(o, (l) => {
      e.constructors[1] ? l(E) : l(v, -1);
    });
  }
  var m = Le(o, 2);
  {
    var _ = (l) => {
      var y = ze(),
        h = De(y);
      {
        var R = (f) => {
          var b = Be();
          (Ne(() => pe(b, g(t))), S(f, b));
        };
        N(h, (f) => {
          g(n) && f(R);
        });
      }
      (je(y), S(l, y));
    };
    N(m, (l) => {
      g(a) && l(_);
    });
  }
  (S(r, d), xe());
}
const rt = Ve(Je),
  at = [
    () =>
      w(
        () => import("../nodes/0.BagBPZu5.js"),
        __vite__mapDeps([0, 1, 2, 3, 4]),
        import.meta.url,
      ),
    () =>
      w(
        () => import("../nodes/1.BJGSPC7b.js"),
        __vite__mapDeps([5, 1, 2, 6, 7, 8, 9]),
        import.meta.url,
      ),
    () =>
      w(
        () => import("../nodes/2.CfCpUlD2.js"),
        __vite__mapDeps([10, 1, 2]),
        import.meta.url,
      ),
    () =>
      w(
        () => import("../nodes/3.CadV30VF.js"),
        __vite__mapDeps([11, 1, 2, 4, 7, 8]),
        import.meta.url,
      ),
    () =>
      w(
        () => import("../nodes/4.DCuWAfWL.js"),
        __vite__mapDeps([12, 1, 2]),
        import.meta.url,
      ),
  ],
  nt = [],
  st = { "/": [2], "/demo": [3], "/demo/playwright": [4] },
  $ = {
    handleError: ({ error: r }) => {
      console.error(r);
    },
    reroute: () => {},
    transport: {},
  },
  We = Object.fromEntries(
    Object.entries($.transport).map(([r, e]) => [r, e.decode]),
  ),
  it = Object.fromEntries(
    Object.entries($.transport).map(([r, e]) => [r, e.encode]),
  ),
  ot = !1,
  ct = (r, e) => We[r](e);
export {
  ct as decode,
  We as decoders,
  st as dictionary,
  it as encoders,
  ot as hash,
  $ as hooks,
  tt as matchers,
  at as nodes,
  rt as root,
  nt as server_loads,
};
