parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"AaGI":[function(require,module,exports) {
var e=["/","index.html","index.js"],t="v1.2";self.addEventListener("install",function(n){console.log("Attempting to install service worker and cache static assets"),n.waitUntil(caches.open(t).then(function(t){return t.addAll(e)}))}),self.addEventListener("fetch",function(e){e.respondWith(caches.match(e.request).then(function(t){return t?(console.log("Found ",e.request.url," in cache"),t):(console.log("Network request for ",e.request.url),fetch(e.request))}).then(function(n){return caches.open(t).then(function(t){return t.put(e.request.url,n.clone()),n})}).catch(function(e){}))}),self.addEventListener("activate",function(e){console.log("Activating new service worker...");var n=[t];e.waitUntil(caches.keys().then(function(e){return Promise.all(e.map(function(e){if(-1===n.indexOf(e))return caches.delete(e)}))}))});
},{}]},{},["AaGI"], null)
//# sourceMappingURL=/service-worker.js.map