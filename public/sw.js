if(!self.define){let e,s={};const i=(i,c)=>(i=new URL(i+".js",c).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let a={};const r=e=>i(e,t),o={module:{uri:t},exports:a,require:r};s[t]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(n(...e),a)))}}define(["./workbox-97568894"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"b9614b9a58ac5ef7c86682de1b522268"},{url:"/_next/static/AVzG_7kVZJF2D93vhNciR/_buildManifest.js",revision:"a2fca4e7c42d36e6bd2b18d2c2583e62"},{url:"/_next/static/AVzG_7kVZJF2D93vhNciR/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0a847d09-460d449c2d44e705.js",revision:"AVzG_7kVZJF2D93vhNciR"},{url:"/_next/static/chunks/248-d1063371d46dc873.js",revision:"AVzG_7kVZJF2D93vhNciR"},{url:"/_next/static/chunks/26.098c5341ffd17325.js",revision:"098c5341ffd17325"},{url:"/_next/static/chunks/277-a4992cbab950b255.js",revision:"AVzG_7kVZJF2D93vhNciR"},{url:"/_next/static/chunks/381-946d40eb6ff30bf7.js",revision:"AVzG_7kVZJF2D93vhNciR"},{url:"/_next/static/chunks/884.b6502b56cc551dfd.js",revision:"b6502b56cc551dfd"},{url:"/_next/static/chunks/app/_offline/page-a82ee669efa79e03.js",revision:"AVzG_7kVZJF2D93vhNciR"},{url:"/_next/static/chunks/app/layout-b3e56cbf5a9ea2d2.js",revision:"AVzG_7kVZJF2D93vhNciR"},{url:"/_next/static/chunks/app/page-5223280673f8215d.js",revision:"AVzG_7kVZJF2D93vhNciR"},{url:"/_next/static/chunks/f89eac0f-15e1afbdf76bf115.js",revision:"AVzG_7kVZJF2D93vhNciR"},{url:"/_next/static/chunks/main-9e77f957066a7411.js",revision:"AVzG_7kVZJF2D93vhNciR"},{url:"/_next/static/chunks/main-app-4d2b23ee98823f48.js",revision:"AVzG_7kVZJF2D93vhNciR"},{url:"/_next/static/chunks/pages/_app-907dedfd0e4177db.js",revision:"AVzG_7kVZJF2D93vhNciR"},{url:"/_next/static/chunks/pages/_error-b5ee443ea3f1b36c.js",revision:"AVzG_7kVZJF2D93vhNciR"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-cbdce5fad39669d8.js",revision:"AVzG_7kVZJF2D93vhNciR"},{url:"/_next/static/css/fdb3125449d5b6ef.css",revision:"fdb3125449d5b6ef"},{url:"/_next/static/media/tokenizers_wasm_bg.10037f21.wasm",revision:"10037f21"},{url:"/icons/android-chrome-192x192.png",revision:"870f8643f611a9ce2290da0e2874d8eb"},{url:"/icons/android-chrome-512x512.png",revision:"3478071573e46ec15c8a6c8f1984564a"},{url:"/icons/apple-touch-icon.png",revision:"8f42253164a890e01bbc3027ef7530cf"},{url:"/icons/favicon-16x16.png",revision:"8a0c95e9a12b3c7342bf0b34b13a70bc"},{url:"/icons/favicon-32x32.png",revision:"4249264b175a47440e9f5a722a592f2a"},{url:"/icons/mstile-150x150.png",revision:"52a87d2b8a6d69943c82686f12d95122"},{url:"/icons/safari-pinned-tab.svg",revision:"d8e77b5499841d508822463ee22ea512"},{url:"/manifest.json",revision:"6c7a08f019c00d8c12c4dbd43d7923a9"},{url:"/og.jpg",revision:"d315c03c1f356438a2392dce3b055956"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute((({url:e})=>"https://web-ai-models.org"===e.origin),new e.CacheFirst({cacheName:"web-ai-models",plugins:[]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:ico|json)$/i,new e.StaleWhileRevalidate({cacheName:"static-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET")}));