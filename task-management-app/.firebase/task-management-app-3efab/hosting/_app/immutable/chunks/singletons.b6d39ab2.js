import{n as d,s as E}from"./scheduler.cc9b4bb6.js";const u=[];function p(e,t=d){let n;const s=new Set;function l(o){if(E(e,o)&&(e=o,n)){const i=!u.length;for(const r of s)r[1](),u.push(r,e);if(i){for(let r=0;r<u.length;r+=2)u[r][0](u[r+1]);u.length=0}}}function f(o){l(o(e))}function a(o,i=d){const r=[o,i];return s.add(r),s.size===1&&(n=t(l,f)||d),o(e),()=>{s.delete(r),s.size===0&&n&&(n(),n=null)}}return{set:l,update:f,subscribe:a}}var v;const A=((v=globalThis.__sveltekit_dldzlr)==null?void 0:v.base)??"";var S;(S=globalThis.__sveltekit_dldzlr)==null||S.assets;const O="sveltekit:snapshot",T="sveltekit:scroll",U="sveltekit:index",_={tap:1,hover:2,viewport:3,eager:4,off:-1};function N(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function L(){return{x:pageXOffset,y:pageYOffset}}const b=new WeakSet,g={"preload-code":["","off","tap","hover","viewport","eager"],"preload-data":["","off","tap","hover"],keepfocus:["","true","off","false"],noscroll:["","true","off","false"],reload:["","true","off","false"],replacestate:["","true","off","false"]};function c(e,t){const n=e.getAttribute(`data-sveltekit-${t}`);return R(e,t,n),n}function R(e,t,n){n!==null&&!b.has(e)&&!g[t].includes(n)&&(console.error(`Unexpected value for ${t} — should be one of ${g[t].map(s=>JSON.stringify(s)).join(", ")}`,e),b.add(e))}const h={..._,"":_.hover};function w(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function z(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=w(e)}}function P(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const s=e instanceof SVGAElement?e.target.baseVal:e.target,l=!n||!!s||I(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),f=(n==null?void 0:n.origin)===location.origin&&e.hasAttribute("download");return{url:n,external:l,target:s,download:f}}function V(e){let t=null,n=null,s=null,l=null,f=null,a=null,o=e;for(;o&&o!==document.documentElement;)s===null&&(s=c(o,"preload-code")),l===null&&(l=c(o,"preload-data")),t===null&&(t=c(o,"keepfocus")),n===null&&(n=c(o,"noscroll")),f===null&&(f=c(o,"reload")),a===null&&(a=c(o,"replacestate")),o=w(o);function i(r){switch(r){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:h[s??"off"],preload_data:h[l??"off"],keep_focus:i(t),noscroll:i(n),reload:i(f),replace_state:i(a)}}function k(e){const t=p(e);let n=!0;function s(){n=!0,t.update(a=>a)}function l(a){n=!1,t.set(a)}function f(a){let o;return t.subscribe(i=>{(o===void 0||n&&i!==o)&&a(o=i)})}return{notify:s,set:l,subscribe:f}}function y(){const{set:e,subscribe:t}=p(!1);return{subscribe:t,check:async()=>!1}}function I(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function Y(e){e.client}const q={url:k({}),page:k({}),navigating:p(null),updated:y()};export{U as I,_ as P,T as S,O as a,P as b,V as c,L as d,A as e,z as f,N as g,Y as h,I as i,q as s};
