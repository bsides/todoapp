"use strict";var precacheConfig=[["/todoapp/index.html","6492ace558176755b7cc78696e0c6f99"],["/todoapp/static/css/main.3c8c8886.css","8f64cb5168f5c681eafe46e4d9ce629f"],["/todoapp/static/js/main.f4d40c4e.js","ef09c685406e9a9c85907ea5e5d02a11"],["/todoapp/static/media/aleo-300.954f4988.woff2","954f4988210027530130156dd09e0991"],["/todoapp/static/media/aleo-300.976f09b1.eot","976f09b10bf7cf919474bbc0b81fcb61"],["/todoapp/static/media/aleo-300.a16a8080.woff","a16a80808c0b20975cc084142680acf2"],["/todoapp/static/media/aleo-300.d8bdd013.svg","d8bdd01350547c37aededc6f3f80a74b"],["/todoapp/static/media/aleo-300italic.40c06a0d.woff2","40c06a0d19174792bdf41b9541c5866a"],["/todoapp/static/media/aleo-300italic.496b9c9b.svg","496b9c9b371ccf90bed73e912ab541ad"],["/todoapp/static/media/aleo-300italic.6520b7a4.eot","6520b7a468ee35ec155cfe51ea6ad0c6"],["/todoapp/static/media/aleo-300italic.87b84d6d.woff","87b84d6d5e243671934ca8e9b8f120ea"],["/todoapp/static/media/aleo-400.24861539.svg","24861539e3f8f41e8ec4a33aef2d2b4e"],["/todoapp/static/media/aleo-400.3c873009.woff2","3c873009adcfbbf1afc820ba97878b1b"],["/todoapp/static/media/aleo-400.426710ad.woff","426710ad44b1c0088d4fe48b1f88db0c"],["/todoapp/static/media/aleo-400.80b70d41.eot","80b70d41919f8756f4e0ee448a65c47d"],["/todoapp/static/media/aleo-400italic.5e47ffda.woff2","5e47ffda7a3318401560b5213f46a364"],["/todoapp/static/media/aleo-400italic.c23a7a26.woff","c23a7a2677527e3450103f09c91953af"],["/todoapp/static/media/aleo-400italic.cb6e086c.svg","cb6e086cceb031c4d7c28b21a11b7e55"],["/todoapp/static/media/aleo-400italic.fcf3ee3d.eot","fcf3ee3d0bcb7baa95af4ae9dc3ea208"],["/todoapp/static/media/aleo-700.29b14190.svg","29b14190624fcd600d42de555df75d7d"],["/todoapp/static/media/aleo-700.54f63789.woff","54f63789b87ec4721fd195a7074eaa59"],["/todoapp/static/media/aleo-700.87453432.eot","8745343249b05c18626e57e6b9160258"],["/todoapp/static/media/aleo-700.f46e4238.woff2","f46e4238696e4032dc76446a465255df"],["/todoapp/static/media/aleo-700italic.36a34e33.woff","36a34e33ed3ca367dacd60de45aca41e"],["/todoapp/static/media/aleo-700italic.42e68820.svg","42e68820684905fb6772572b27668cb9"],["/todoapp/static/media/aleo-700italic.47f44e8a.woff2","47f44e8ab2951230334c77fe1d0e5202"],["/todoapp/static/media/aleo-700italic.fe19314e.eot","fe19314e0081c22d7a6e484f4feca441"],["/todoapp/static/media/ibm-plex-sans-latin-100.4bb212e3.woff2","4bb212e3470ea477ee3ec4c2fbf49b1f"],["/todoapp/static/media/ibm-plex-sans-latin-100.9c840f02.woff","9c840f02f82c2c38bab2b9f32966cbc6"],["/todoapp/static/media/ibm-plex-sans-latin-100italic.40c489bf.woff","40c489bf6b6f5ba6867e4320cc79399e"],["/todoapp/static/media/ibm-plex-sans-latin-100italic.ee7d5a0a.woff2","ee7d5a0a822a6f41b43efccd878a3b3c"],["/todoapp/static/media/ibm-plex-sans-latin-200.2067707b.woff","2067707b6813433b1d4afd197a00335f"],["/todoapp/static/media/ibm-plex-sans-latin-200.6990ef00.woff2","6990ef0001e034a63a54512d0377f036"],["/todoapp/static/media/ibm-plex-sans-latin-200italic.c32ea18c.woff2","c32ea18c20e7f3aee22c82a7bed65648"],["/todoapp/static/media/ibm-plex-sans-latin-200italic.e326dad7.woff","e326dad7ee55759f2d2ab6181ec941cc"],["/todoapp/static/media/ibm-plex-sans-latin-300.9ff9d79b.woff2","9ff9d79b5df817f62ec0482a49ce65d6"],["/todoapp/static/media/ibm-plex-sans-latin-300.e3712a7d.woff","e3712a7d56e3eea6b4ff7fdf8bdb4bef"],["/todoapp/static/media/ibm-plex-sans-latin-300italic.ca4296d1.woff","ca4296d1caf4933cf583b8d3157c106b"],["/todoapp/static/media/ibm-plex-sans-latin-300italic.fb3115b5.woff2","fb3115b53a61930ea1ab40720b15d460"],["/todoapp/static/media/ibm-plex-sans-latin-400.3ddf4726.woff2","3ddf4726538fe9e71c6550672a9e5b31"],["/todoapp/static/media/ibm-plex-sans-latin-400.66358c1a.woff","66358c1ad4c713cc1f4744e2aff06298"],["/todoapp/static/media/ibm-plex-sans-latin-400italic.3ee24a31.woff2","3ee24a317be2a5fdcd0963bccd08953f"],["/todoapp/static/media/ibm-plex-sans-latin-400italic.7a3e132a.woff","7a3e132ab4074cc5163b6b9fe2ccd2ea"],["/todoapp/static/media/ibm-plex-sans-latin-500.93df140c.woff","93df140cc0f6f24d28d4fb70a010651c"],["/todoapp/static/media/ibm-plex-sans-latin-500.9eb8181f.woff2","9eb8181fab1ba4b2f126b3a53df77c26"],["/todoapp/static/media/ibm-plex-sans-latin-500italic.28581785.woff2","2858178508eb01b1658b0c2a6e7e4d31"],["/todoapp/static/media/ibm-plex-sans-latin-500italic.b3b874d7.woff","b3b874d7f840318c83616554b29eb6fa"],["/todoapp/static/media/ibm-plex-sans-latin-600.3e73c02c.woff","3e73c02c16b8153e803092fa95445cbe"],["/todoapp/static/media/ibm-plex-sans-latin-600.432a7042.woff2","432a7042b6b0d97f89d72ca9755e5900"],["/todoapp/static/media/ibm-plex-sans-latin-600italic.9911147a.woff","9911147aa0990b9886b2752d1907e08b"],["/todoapp/static/media/ibm-plex-sans-latin-600italic.fce9f7c9.woff2","fce9f7c9c86a7c0ef6f2f61566d0c357"],["/todoapp/static/media/ibm-plex-sans-latin-700.0aca3d9c.woff2","0aca3d9cf26fee193ec58956cc8f3490"],["/todoapp/static/media/ibm-plex-sans-latin-700.2e968b4e.woff","2e968b4e6291b79a63c5fd742f590f38"],["/todoapp/static/media/ibm-plex-sans-latin-700italic.f99abbd2.woff","f99abbd204945afef3ad622599eaad3b"],["/todoapp/static/media/ibm-plex-sans-latin-700italic.fcc38e49.woff2","fcc38e49a80ad5db01f6664823e20e08"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(a,e){var t=new URL(a);return"/"===t.pathname.slice(-1)&&(t.pathname+=e),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(a,e,t,c){var i=new URL(a);return c&&i.pathname.match(c)||(i.search+=(i.search?"&":"")+encodeURIComponent(e)+"="+encodeURIComponent(t)),i.toString()},isPathWhitelisted=function(a,e){if(0===a.length)return!0;var t=new URL(e).pathname;return a.some(function(a){return t.match(a)})},stripIgnoredUrlParameters=function(a,t){var e=new URL(a);return e.hash="",e.search=e.search.slice(1).split("&").map(function(a){return a.split("=")}).filter(function(e){return t.every(function(a){return!a.test(e[0])})}).map(function(a){return a.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(a){var e=a[0],t=a[1],c=new URL(e,self.location),i=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),i]}));function setOfCachedUrls(a){return a.keys().then(function(a){return a.map(function(a){return a.url})}).then(function(a){return new Set(a)})}self.addEventListener("install",function(a){a.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(e){if(!t.has(e)){var a=new Request(e,{credentials:"same-origin"});return fetch(a).then(function(a){if(!a.ok)throw new Error("Request for "+e+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return c.put(e,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(a){var t=new Set(urlsToCacheKeys.values());a.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var i="/todoapp/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(i,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(a){return a.match(urlsToCacheKeys.get(t)).then(function(a){if(a)return a;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});