var t=require("react");function e(t,e,r){return function(){navigator.share(t).then(e).catch(r)}}module.exports=function(r,n,u){void 0===r&&(r={}),void 0===n&&(n=function(){}),void 0===u&&(u=function(){});var i=t.useState(!0),o=i[0],c=i[1],a=t.useState(!1),f=a[0],l=a[1],d=t.useRef({url:"",title:"",text:""});return t.useEffect(function(){var t=function(t){if(t)return t;var e=document.querySelector("link[rel=canonical]");return e?e.href:window.location.href}(r.url),e=r.title||document.title;d.current={title:e,text:r.text||void 0,url:t},navigator.share?l(!0):l(!1),c(!1)},[r,n,u]),{loading:o,isSupported:f,config:d.current,share:e(d.current,n,u)}};
//# sourceMappingURL=index.js.map