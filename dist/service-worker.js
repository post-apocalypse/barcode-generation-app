if(!self.define){let e,n={};const s=(s,i)=>(s=new URL(s+".js",i).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(n[o])return;let l={};const t=e=>s(e,o),c={module:{uri:o},exports:l,require:t};n[o]=Promise.all(i.map((e=>c[e]||t(e)))).then((e=>(r(...e),l)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"barcode-generation-app"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/app.2a225adc.css",revision:null},{url:"img/check.ff04ee2d.png",revision:null},{url:"img/ntf.0d7349c2.png",revision:null},{url:"index.html",revision:"8e6ffba86ec682fdcc6d0cf078a7b3fd"},{url:"js/app.295a6823.js",revision:null},{url:"js/chunk-vendors.6e434be8.js",revision:null},{url:"manifest.json",revision:"6bfa26583785d2844f05e7a6ee2b1b32"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map