(function(e){function t(t){for(var r,o,u=t[0],c=t[1],l=t[2],f=0,s=[];f<u.length;f++)o=u[f],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&s.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(s.length)s.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==i[u]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},i={app:0},a=[];function u(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0a3553":"ff44f779","chunk-2d0d61c1":"67eecab6","chunk-2d0e2d00":"6f25effb","chunk-2d2102f5":"2e3bb709","chunk-2d22b99c":"60ff4fa5","chunk-3c388f47":"043eaa10","chunk-4042c114":"dbfbd0eb","chunk-4455bf7e":"79944025","chunk-774cd054":"eec553ce"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-3c388f47":1,"chunk-4042c114":1,"chunk-4455bf7e":1,"chunk-774cd054":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0a3553":"31d6cfe0","chunk-2d0d61c1":"31d6cfe0","chunk-2d0e2d00":"31d6cfe0","chunk-2d2102f5":"31d6cfe0","chunk-2d22b99c":"31d6cfe0","chunk-3c388f47":"04d139be","chunk-4042c114":"b0a6e027","chunk-4455bf7e":"215471a7","chunk-774cd054":"7c2d8474"}[e]+".css",i=c.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var l=a[u],f=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(f===r||f===i))return t()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){l=s[u],f=l.getAttribute("data-href");if(f===r||f===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],d.parentNode.removeChild(d),n(a)},d.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=a);var l,f=document.createElement("script");f.charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.src=u(e);var s=new Error;l=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}i[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:f})}),12e4);f.onerror=f.onload=l,document.head.appendChild(f)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/h5/livephoto/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],f=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var d=f;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2a8c":function(e,t,n){},"2e6d":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("4fb2");var r=n("0f1a"),o=(n("88bb"),n("5e1e")),i=(n("568b"),n("0a30")),a=(n("9f61"),n("98e6")),u=(n("d97c"),n("120b")),c=(n("96dd"),n("a60a"),n("e783"),n("8b1f"),n("6e6d")),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"fade"}},[n("keep-alive",[e.$route.meta.keepAlive?n("router-view"):e._e()],1)],1),e.$route.meta.keepAlive?e._e():n("router-view")],1)},f=[],s=(n("e6d1"),{name:"home",data:function(){return{transitionName:"slide-left",active:0}},components:{},watch:{$route:function(e,t){var n=e.path.split("/").length,r=t.path.split("/").length;this.transitionName=n<r?"slide-right":"slide-left"}}}),d=s,p=(n("5c0b"),n("6691")),h=Object(p["a"])(d,l,f,!1,null,null,null),m=h.exports,b=n("c478");c["a"].use(b["a"]);var v=new b["a"]({routes:[{path:"/",name:"home",component:function(){return n.e("chunk-4455bf7e").then(n.bind(null,"7abe"))},meta:{keepAlive:!0,title:"图片直播"}},{path:"/my",name:"my",component:function(){return n.e("chunk-3c388f47").then(n.bind(null,"9639"))},meta:{keepAlive:!0,title:"我的"}},{path:"/my/collection",name:"collection",component:function(){return n.e("chunk-774cd054").then(n.bind(null,"ea4e"))},meta:{keepAlive:!0,title:"相册收藏"}},{path:"/my/face",name:"faceRecognition",component:function(){return n.e("chunk-2d0e2d00").then(n.bind(null,"7ffa"))},meta:{keepAlive:!0,title:"人脸识别"}},{path:"/my/about",name:"about",component:function(){return n.e("chunk-2d0a3553").then(n.bind(null,"0272"))},meta:{keepAlive:!0,title:"关于我们"}},{path:"/my/appointment",name:"appointment",component:function(){return n.e("chunk-2d0d61c1").then(n.bind(null,"70c5"))},meta:{keepAlive:!0,title:"预约云摄影服务"}},{path:"/my/data",name:"dataAnalysis",component:function(){return n.e("chunk-2d2102f5").then(n.bind(null,"b78b"))},meta:{keepAlive:!0,title:"数据分析"}},{path:"/my/album",name:"albumCollection",component:function(){return n.e("chunk-2d22b99c").then(n.bind(null,"f051"))},meta:{keepAlive:!0,title:"我收藏的照片"}},{path:"/login",name:"login",component:function(){return n.e("chunk-4042c114").then(n.bind(null,"9ed6"))},meta:{keepAlive:!0,title:"登录"}}]});v.beforeEach((function(e,t,n){e.meta.title&&(document.title=e.meta.title),n()}));var g=v,k=n("591a");n("cc1d"),n("f753");n("4634"),n("ed8b"),n("de90"),n("897d");n("efce"),n("97a3"),n("7cfd"),n("d479"),n("c041"),n("ebec");function y(){this.init.apply(this,arguments)}y.prototype={isApp:window.BrBridge&&window.BrBridge.env.isApp,init:function(e){return this.url=e||window.location.href,this.host=this.strip(),this},query:function(e){var t=e||this.url;if(-1!=t.indexOf("?")){var n={},r=t.split("?")[1];if(r){r=r.replace(/#\//g,"");for(var o=r.split("&"),i=0;i<o.length;i++){var a=o[i].indexOf("=");n[o[i].substring(0,a)]=o[i].substr(a+1)}}return n}return null},strip:function(){return-1!=this.url.indexOf("?")?this.url.split("?")[0]:this.url},get:function(e){var t=this.query(this.url);return t&&t[e]||null},go:function(e,t,n){var r=arguments,o={};"string"!=typeof r[0]?(o=r[0],t=o.type,n=1==o.isRefresh&&o.isRefresh,e=BrSPM?this.formatUrlBySPM(o.url):o.url):(e=BrSPM?this.formatUrlBySPM(r[0]):r[0],t=r[1]||"openWindow",n=!(!r[2]||1!=r[2])&&r[2]),this.isApp?window.BrBridge.call("Common",t,{url:e,refresh:n},(function(){}),(function(){})):window.location.href=e},closeWindow:function(){this.isApp?window.BrBridge.call("Common","closeWindow",{},(function(e){console.log("closeWindow")}),(function(e){console.log(e)})):window.history.back()},formatUrlBySPM:function(e){var t=window.BrSPM||t;if(t||-1==e.indexOf("spm=")){var n=-1!=e.indexOf("?")?"&":"?";return e+n+"spm="+t.SPM_ID+".0.0"}return e}};var w=y;new w;"".concat(window.location.protocol);var S={puzzleState:!1},A={},P={changePuzzleState:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){var t=e.commit;t("changePuzzleState",changePuzzleState)}))},O={changePuzzleState:function(e,t){e.puzzleState=t}},B={namespaced:!0,state:S,getters:A,actions:P,mutations:O};c["a"].use(k["a"]);var _=new k["a"].Store({modules:{livephoto:B}}),j=n("816c"),x=n.n(j),z=(n("697a"),n("40ca")),E=n.n(z),M=n("e12b"),C=n.n(M),T=n("8536"),N=n.n(T);n("2a8c"),n("dfbe");c["a"].use(r["a"]).use(o["a"]).use(i["a"]).use(a["a"]).use(u["a"]),c["a"].config.productionTip=!1,c["a"].prototype.Hammerjs=N.a,c["a"].use(C.a),x.a.attach(document.body),c["a"].use(E.a),new c["a"]({store:_,router:g,render:function(e){return e(m)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("2e6d"),o=n.n(r);o.a}});
//# sourceMappingURL=app.90c2978c.js.map