"use strict";var precacheConfig=[["/cloud/index.html","486db570b95c267a8ec43b42eed29237"],["/cloud/static/css/main.a046c04e.css","e7b65736598c5ebb72622afd7ea6d96d"],["/cloud/static/js/main.269d1b4e.js","cd712049737110e673e067f7f34e354b"],["/cloud/static/media/KFOlCnqEu92Fr1MmEU9fABc4EsA.df648143.woff2","df648143c248d3fe9ef881866e5dea56"],["/cloud/static/media/KFOlCnqEu92Fr1MmEU9fBBc4.28546717.woff2","285467176f7fe6bb6a9c6873b3dad2cc"],["/cloud/static/media/KFOlCnqEu92Fr1MmEU9fBxc4EsA.207d2af0.woff2","207d2af0a0d9716e1f61cadf347accc5"],["/cloud/static/media/KFOlCnqEu92Fr1MmEU9fCBc4EsA.52e881a8.woff2","52e881a8e8286f6b6a0f98d5f675bb93"],["/cloud/static/media/KFOlCnqEu92Fr1MmEU9fCRc4EsA.79c7e3f9.woff2","79c7e3f902d990d3b5e74e43feb5f623"],["/cloud/static/media/KFOlCnqEu92Fr1MmEU9fChc4EsA.16aedbf0.woff2","16aedbf057fbb3da342211de2d071f11"],["/cloud/static/media/KFOlCnqEu92Fr1MmEU9fCxc4EsA.6bef5140.woff2","6bef514048228359f2f8f5e0235f8599"],["/cloud/static/media/KFOmCnqEu92Fr1Mu4WxKOzY.7aa7eb76.woff2","7aa7eb76a9f66f0223c8197752bb6bc5"],["/cloud/static/media/KFOmCnqEu92Fr1Mu4mxK.5d4aeb4e.woff2","5d4aeb4e5f5ef754e307d7ffaef688bd"],["/cloud/static/media/KFOmCnqEu92Fr1Mu5mxKOzY.efe93799.woff2","efe937997e08e15b056a3643e2734636"],["/cloud/static/media/KFOmCnqEu92Fr1Mu72xKOzY.e3836d11.woff2","e3836d1191745d29137bfe16e4e4a2c2"],["/cloud/static/media/KFOmCnqEu92Fr1Mu7GxKOzY.15d8ede0.woff2","15d8ede0a816bc7a9838207747c6620c"],["/cloud/static/media/KFOmCnqEu92Fr1Mu7WxKOzY.a8350846.woff2","a835084624425dacc5e188c6973c1594"],["/cloud/static/media/KFOmCnqEu92Fr1Mu7mxKOzY.57993e70.woff2","57993e705ff6f15e722f5f90de8836f8"],["/cloud/static/media/L0x5DF4xlVMF-BfR8bXMIjhEq3-OXg.eb33fd49.woff2","eb33fd49e27380b52934e006da9bdbc8"],["/cloud/static/media/L0x5DF4xlVMF-BfR8bXMIjhFq3-OXg.591c90f4.woff2","591c90f448b0573812f5b98407c853a8"],["/cloud/static/media/L0x5DF4xlVMF-BfR8bXMIjhGq3-OXg.e13eb4c8.woff2","e13eb4c8be539e41a0ebfa8d9f25d374"],["/cloud/static/media/L0x5DF4xlVMF-BfR8bXMIjhHq3-OXg.d3ee3376.woff2","d3ee33760d0ab62864a5690817ae11d8"],["/cloud/static/media/L0x5DF4xlVMF-BfR8bXMIjhIq3-OXg.504a7f9c.woff2","504a7f9c4a7aa17e2c0a01a9ec6d1deb"],["/cloud/static/media/L0x5DF4xlVMF-BfR8bXMIjhLq38.e92cc0fb.woff2","e92cc0fb9e1a7debc138224fd02a462a"],["/cloud/static/media/L0x5DF4xlVMF-BfR8bXMIjhPq3-OXg.e0bd7cf9.woff2","e0bd7cf96a09ec63ffe6a7b291917b74"],["/cloud/static/media/QldKNThLqRwH-OJ1UHjlKGlW5qhWxg.7e2139e5.woff2","7e2139e54046aa4299544a1cb2cbb83d"],["/cloud/static/media/QldKNThLqRwH-OJ1UHjlKGlX5qhWxg.25fdb5a9.woff2","25fdb5a91fd45c8828569c7ac0eb564e"],["/cloud/static/media/QldKNThLqRwH-OJ1UHjlKGlZ5qg.e41ccb14.woff2","e41ccb14c58f5986b994131632b843c7"],["/cloud/static/media/QldXNThLqRwH-OJ1UHjlKGHiw71m5_zIDQ.90b47bf9.woff2","90b47bf91e7b1ebd957a98317978f0e0"],["/cloud/static/media/QldXNThLqRwH-OJ1UHjlKGHiw71n5_zIDQ.8595f587.woff2","8595f587c820e621f1a3ca4ad7f33367"],["/cloud/static/media/QldXNThLqRwH-OJ1UHjlKGHiw71p5_w.927962c3.woff2","927962c39f8fac064282871c9af168a1"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/cloud/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});