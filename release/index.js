var t = require("react");
function e(t, e) {
  return function(n) {
    var r = (function(t) {
        if (t) return t;
        var e = document.querySelector("link[rel=canonical]");
        return e ? e.href : window.location.href;
      })(n.url),
      i = n.title || document.title;
    navigator
      .share({ text: n.text, title: i, url: r })
      .then(t)
      .catch(e);
  };
}
module.exports = function(n, r) {
  void 0 === n && (n = function() {}), void 0 === r && (r = function() {});
  var i = t.useState(!0),
    o = i[0],
    u = i[1],
    a = t.useState(!1),
    c = a[0],
    f = a[1];
  return (
    t.useEffect(
      function() {
        navigator.share ? f(!0) : f(!1), u(!1);
      },
      [n, r]
    ),
    { loading: o, isSupported: c, share: e(n, r) }
  );
};
//# sourceMappingURL=index.js.map
