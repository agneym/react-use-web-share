import { useState as t, useEffect as n } from "react";
function r(t, n) {
  return function(r) {
    var e = (function(t) {
        if (t) return t;
        var n = document.querySelector("link[rel=canonical]");
        return n ? n.href : window.location.href;
      })(r.url),
      o = r.title || document.title;
    navigator
      .share({ text: r.text, title: o, url: e })
      .then(t)
      .catch(n);
  };
}
export default function(e, o) {
  void 0 === e && (e = function() {}), void 0 === o && (o = function() {});
  var i = t(!0),
    u = i[0],
    a = i[1],
    c = t(!1),
    f = c[0],
    l = c[1];
  return (
    n(
      function() {
        navigator.share ? l(!0) : l(!1), a(!1);
      },
      [e, o]
    ),
    { loading: u, isSupported: f, share: r(e, o) }
  );
}
//# sourceMappingURL=index.mjs.map
