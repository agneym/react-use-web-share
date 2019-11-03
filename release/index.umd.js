!(function(e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t(require("react")))
    : "function" == typeof define && define.amd
    ? define(["react"], t)
    : (e.reactUseWebShare = t(e.react));
})(this, function(e) {
  function t(e, t) {
    return function(n) {
      var r = (function(e) {
          if (e) return e;
          var t = document.querySelector("link[rel=canonical]");
          return t ? t.href : window.location.href;
        })(n.url),
        o = n.title || document.title;
      navigator
        .share({ text: n.text, title: o, url: r })
        .then(e)
        .catch(t);
    };
  }
  return function(n, r) {
    void 0 === n && (n = function() {}), void 0 === r && (r = function() {});
    var o = e.useState(!0),
      i = o[0],
      u = o[1],
      c = e.useState(!1),
      a = c[0],
      f = c[1];
    return (
      e.useEffect(
        function() {
          navigator.share ? f(!0) : f(!1), u(!1);
        },
        [n, r]
      ),
      { loading: i, isSupported: a, share: t(n, r) }
    );
  };
});
//# sourceMappingURL=index.umd.js.map
