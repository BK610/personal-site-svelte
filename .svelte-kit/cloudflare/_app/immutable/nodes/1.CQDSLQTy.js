import { a as b, f as k } from "../chunks/BwuXgrL6.js";
import {
  k as x,
  M as y,
  u as i,
  o as $,
  O as l,
  P as j,
  Q as v,
  S as A,
  U as E,
  V as M,
  i as O,
  A as P,
  t as Q,
  j as S,
  W as u,
  X as m,
  Y as U,
} from "../chunks/PUWf84Ah.js";
import { s as _ } from "../chunks/DH-PflIw.js";
import { p as g } from "../chunks/DQ9W_XTn.js";
import { s as V } from "../chunks/2g37R7Mr.js";
function W(a = !1) {
  const t = x,
    e = t.l.u;
  if (!e) return;
  let r = () => A(t.s);
  if (a) {
    let o = 0,
      s = {};
    const f = E(() => {
      let p = !1;
      const c = t.s;
      for (const n in c) c[n] !== s[n] && ((s[n] = c[n]), (p = !0));
      return (p && o++, o);
    });
    r = () => v(f);
  }
  (e.b.length &&
    y(() => {
      (d(t, r), l(e.b));
    }),
    i(() => {
      const o = $(() => e.m.map(j));
      return () => {
        for (const s of o) typeof s == "function" && s();
      };
    }),
    e.a.length &&
      i(() => {
        (d(t, r), l(e.a));
      }));
}
function d(a, t) {
  if (a.l.s) for (const e of a.l.s) v(e);
  t();
}
M();
const X = {
  get error() {
    return g.error;
  },
  get status() {
    return g.status;
  },
};
V.updated.check;
const h = X;
var Y = k("<h1> </h1> <p> </p>", 1);
function D(a, t) {
  (O(t, !1), W());
  var e = Y(),
    r = P(e),
    o = u(r, !0);
  m(r);
  var s = U(r, 2),
    f = u(s, !0);
  (m(s),
    Q(() => {
      (_(o, h.status), _(f, h.error?.message));
    }),
    b(a, e),
    S());
}
export { D as component };
