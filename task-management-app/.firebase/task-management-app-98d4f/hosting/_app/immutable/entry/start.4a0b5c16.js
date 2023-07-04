import{o as Fe,t as we}from"../chunks/scheduler.cc9b4bb6.js";import{S as Je,a as Ke,I as q,g as Me,f as Ve,b as ye,c as le,s as V,d as Q,i as _e,e as B,P as He,h as et}from"../chunks/singletons.91b16309.js";function tt(t,o){return t==="/"||o==="ignore"?t:o==="never"?t.endsWith("/")?t.slice(0,-1):t:o==="always"&&!t.endsWith("/")?t+"/":t}function nt(t){return t.split("%25").map(decodeURI).join("%25")}function at(t){for(const o in t)t[o]=decodeURIComponent(t[o]);return t}const rt=["href","pathname","search","searchParams","toString","toJSON"];function ot(t,o){const i=new URL(t);for(const s of rt)Object.defineProperty(i,s,{get(){return o(),t[s]},enumerable:!0,configurable:!0});return it(i),i}function it(t){Object.defineProperty(t,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const st="/__data.json";function ct(t){return t.replace(/\/$/,"")+st}function Ye(t){try{return JSON.parse(sessionStorage[t])}catch{}}function ze(t,o){const i=JSON.stringify(o);try{sessionStorage[t]=i}catch{}}function lt(...t){let o=5381;for(const i of t)if(typeof i=="string"){let s=i.length;for(;s;)o=o*33^i.charCodeAt(--s)}else if(ArrayBuffer.isView(i)){const s=new Uint8Array(i.buffer,i.byteOffset,i.byteLength);let d=s.length;for(;d;)o=o*33^s[--d]}else throw new TypeError("value must be a string or TypedArray");return(o>>>0).toString(36)}let Se=0;const fe=window.fetch;function ft(){Se+=1}function ut(){Se-=1}{let t=!1;(async()=>{t=new Error().stack.includes("check_stack_trace")})(),window.fetch=(i,s)=>{const d=i instanceof Request?i.url:i.toString(),u=new Error().stack.split(`
`),E=u.findIndex(p=>p.includes("load@")||p.includes("at load")),f=u.slice(0,E+2).join(`
`);return(t?f.includes("src/runtime/client/client.js"):Se)&&console.warn(`Loading ${d} using \`window.fetch\`. For best results, use the \`fetch\` that is passed to your \`load\` function: https://kit.svelte.dev/docs/load#making-fetch-requests`),(i instanceof Request?i.method:(s==null?void 0:s.method)||"GET")!=="GET"&&te.delete(Re(i)),fe(i,s)}}const te=new Map;function dt(t,o){const i=Re(t,o),s=document.querySelector(i);if(s!=null&&s.textContent){const{body:d,...u}=JSON.parse(s.textContent),E=s.getAttribute("data-ttl");return E&&te.set(i,{body:d,init:u,ttl:1e3*Number(E)}),Promise.resolve(new Response(d,u))}return fe(t,o)}function pt(t,o,i){if(te.size>0){const s=Re(t,i),d=te.get(s);if(d){if(performance.now()<d.ttl&&["default","force-cache","only-if-cached",void 0].includes(i==null?void 0:i.cache))return new Response(d.body,d.init);te.delete(s)}}return fe(o,i)}function Re(t,o){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(o!=null&&o.headers||o!=null&&o.body){const d=[];o.headers&&d.push([...new Headers(o.headers)].join(",")),o.body&&(typeof o.body=="string"||ArrayBuffer.isView(o.body))&&d.push(o.body),s+=`[data-hash="${lt(...d)}"]`}return s}const ht=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function gt(t){const o=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${wt(t).map(s=>{const d=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(d)return o.push({name:d[1],matcher:d[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const u=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(u)return o.push({name:u[1],matcher:u[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const E=s.split(/\[(.+?)\](?!\])/);return"/"+E.map((w,y)=>{if(y%2){if(w.startsWith("x+"))return ve(String.fromCharCode(parseInt(w.slice(2),16)));if(w.startsWith("u+"))return ve(String.fromCharCode(...w.slice(2).split("-").map(P=>parseInt(P,16))));const p=ht.exec(w);if(!p)throw new Error(`Invalid param: ${w}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,C,x,S,j]=p;return o.push({name:S,matcher:j,optional:!!C,rest:!!x,chained:x?y===1&&E[0]==="":!1}),x?"(.*?)":C?"([^/]*)?":"([^/]+?)"}return ve(w)}).join("")}).join("")}/?$`),params:o}}function mt(t){return!/^\([^)]+\)$/.test(t)}function wt(t){return t.slice(1).split("/").filter(mt)}function yt(t,o,i){const s={},d=t.slice(1);let u=0;for(let E=0;E<o.length;E+=1){const f=o[E];let w=d[E-u];if(f.chained&&f.rest&&u&&(w=d.slice(E-u,E+1).filter(y=>y).join("/"),u=0),w===void 0){f.rest&&(s[f.name]="");continue}if(!f.matcher||i[f.matcher](w)){s[f.name]=w;const y=o[E+1],p=d[E+1];y&&!y.rest&&y.optional&&p&&f.chained&&(u=0);continue}if(f.optional&&f.chained){u++;continue}return}if(!u)return s}function ve(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function _t({nodes:t,server_loads:o,dictionary:i,matchers:s}){const d=new Set(o);return Object.entries(i).map(([f,[w,y,p]])=>{const{pattern:C,params:x}=gt(f),S={id:f,exec:j=>{const P=C.exec(j);if(P)return yt(P,x,s)},errors:[1,...p||[]].map(j=>t[j]),layouts:[0,...y||[]].map(E),leaf:u(w)};return S.errors.length=S.layouts.length=Math.max(S.errors.length,S.layouts.length),S});function u(f){const w=f<0;return w&&(f=~f),[w,t[f]]}function E(f){return f===void 0?f:[d.has(f),t[f]]}}class ee{constructor(o,i){this.status=o,typeof i=="string"?this.body={message:i}:i?this.body=i:this.body={message:`Error: ${o}`}}toString(){return JSON.stringify(this.body)}}class Be{constructor(o,i){this.status=o,this.location=i}}async function vt(t){var o;for(const i in t)if(typeof((o=t[i])==null?void 0:o.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(t).map(async([s,d])=>[s,await d])));return t}const bt=-1,Et=-2,kt=-3,St=-4,Rt=-5,$t=-6;function At(t,o){if(typeof t=="number")return d(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const i=t,s=Array(i.length);function d(u,E=!1){if(u===bt)return;if(u===kt)return NaN;if(u===St)return 1/0;if(u===Rt)return-1/0;if(u===$t)return-0;if(E)throw new Error("Invalid input");if(u in s)return s[u];const f=i[u];if(!f||typeof f!="object")s[u]=f;else if(Array.isArray(f))if(typeof f[0]=="string"){const w=f[0],y=o==null?void 0:o[w];if(y)return s[u]=y(d(f[1]));switch(w){case"Date":s[u]=new Date(f[1]);break;case"Set":const p=new Set;s[u]=p;for(let S=1;S<f.length;S+=1)p.add(d(f[S]));break;case"Map":const C=new Map;s[u]=C;for(let S=1;S<f.length;S+=2)C.set(d(f[S]),d(f[S+1]));break;case"RegExp":s[u]=new RegExp(f[1],f[2]);break;case"Object":s[u]=Object(f[1]);break;case"BigInt":s[u]=BigInt(f[1]);break;case"null":const x=Object.create(null);s[u]=x;for(let S=1;S<f.length;S+=2)x[f[S]]=d(f[S+1]);break;default:throw new Error(`Unknown type ${w}`)}}else{const w=new Array(f.length);s[u]=w;for(let y=0;y<f.length;y+=1){const p=f[y];p!==Et&&(w[y]=d(p))}}else{const w={};s[u]=w;for(const y in f){const p=f[y];w[y]=d(p)}}return s[u]}return d(0)}function It(t){function o(i,s){if(i)for(const d in i){if(d[0]==="_"||t.has(d))continue;const u=[...t.values()],E=Lt(d,s==null?void 0:s.slice(s.lastIndexOf(".")))??`valid exports are ${u.join(", ")}, or anything with a '_' prefix`;throw new Error(`Invalid export '${d}'${s?` in ${s}`:""} (${E})`)}}return o}function Lt(t,o=".js"){const i=[];if($e.has(t)&&i.push(`+layout${o}`),We.has(t)&&i.push(`+page${o}`),Xe.has(t)&&i.push(`+layout.server${o}`),Ot.has(t)&&i.push(`+page.server${o}`),Pt.has(t)&&i.push(`+server${o}`),i.length>0)return`'${t}' is a valid export in ${i.slice(0,-1).join(", ")}${i.length>1?" or ":""}${i.at(-1)}`}const $e=new Set(["load","prerender","csr","ssr","trailingSlash","config"]),We=new Set([...$e,"entries"]),Xe=new Set([...$e]),Ot=new Set([...Xe,"actions","entries"]),Pt=new Set(["GET","POST","PATCH","PUT","DELETE","OPTIONS","prerender","trailingSlash","config","entries"]),xt=It(We);function jt(t){return t.filter(o=>o!=null)}function Tt(t,o){const i=/^(moz-icon|view-source|jar):/.exec(o);i&&console.warn(`${t}: Calling \`depends('${o}')\` will throw an error in Firefox because \`${i[1]}\` is a special URI scheme`)}const be="x-sveltekit-invalidated",G=Ye(Je)??{},Z=Ye(Ke)??{};function Ee(t){G[t]=Q()}function Ut(t,o){var Ce;const i=_t(t),s=t.nodes[0],d=t.nodes[1];s(),d();const u=document.documentElement,E=[],f=[];let w=null;const y={before_navigate:[],after_navigate:[]};let p={branch:[],error:null,url:null},C=!1,x=!1,S=!0,j=!1,P=!1,J=!1,H=!1,F,U=(Ce=history.state)==null?void 0:Ce[q];U||(U=Date.now(),history.replaceState({...history.state,[q]:U},"",location.href));const ue=G[U];ue&&(history.scrollRestoration="manual",scrollTo(ue.x,ue.y));let M,ne,ae;async function Ae(){ae=ae||Promise.resolve(),await ae,ae=null;const e=new URL(location.href),n=W(e,!0);w=null;const r=ne={},a=n&&await he(n);if(r===ne&&a){if(a.type==="redirect")return re(new URL(a.location,e).href,{},[e.pathname],r);a.props.page!==void 0&&(M=a.props.page),F.$set(a.props)}}function Ie(e){f.some(n=>n==null?void 0:n.snapshot)&&(Z[e]=f.map(n=>{var r;return(r=n==null?void 0:n.snapshot)==null?void 0:r.capture()}))}function Le(e){var n;(n=Z[e])==null||n.forEach((r,a)=>{var c,l;(l=(c=f[a])==null?void 0:c.snapshot)==null||l.restore(r)})}function Oe(){Ee(U),ze(Je,G),Ie(U),ze(Ke,Z)}async function re(e,{noScroll:n=!1,replaceState:r=!1,keepFocus:a=!1,state:c={},invalidateAll:l=!1},h,_){return typeof e=="string"&&(e=new URL(e,Me(document))),ce({url:e,scroll:n?Q():null,keepfocus:a,redirect_chain:h,details:{state:c,replaceState:r},nav_token:_,accepted:()=>{l&&(H=!0)},blocked:()=>{},type:"goto"})}async function Pe(e){return w={id:e.id,promise:he(e).then(n=>(n.type==="loaded"&&n.state.error&&(w=null),n))},w.promise}async function oe(...e){const r=i.filter(a=>e.some(c=>a.exec(c))).map(a=>Promise.all([...a.layouts,a.leaf].map(c=>c==null?void 0:c[1]())));await Promise.all(r)}function xe(e){var a;if(e.state.error&&document.querySelector("vite-error-overlay"))return;p=e.state;const n=document.querySelector("style[data-sveltekit]");n&&n.remove(),M=e.props.page,F=new t.root({target:o,props:{...e.props,stores:V,components:f},hydrate:!0}),Le(U);const r={from:null,to:{params:p.params,route:{id:((a=p.route)==null?void 0:a.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};y.after_navigate.forEach(c=>c(r)),x=!0}async function Y({url:e,params:n,branch:r,status:a,error:c,route:l,form:h}){let _="never";for(const g of r)(g==null?void 0:g.slash)!==void 0&&(_=g.slash);e.pathname=tt(e.pathname,_),e.search=e.search;const b={type:"loaded",state:{url:e,params:n,branch:r,error:c,route:l},props:{constructors:jt(r).map(g=>g.node.component)}};h!==void 0&&(b.props.form=h);let v={},R=!M,$=0;for(let g=0;g<Math.max(r.length,p.branch.length);g+=1){const m=r[g],O=p.branch[g];(m==null?void 0:m.data)!==(O==null?void 0:O.data)&&(R=!0),m&&(v={...v,...m.data},R&&(b.props[`data_${$}`]=v),$+=1)}return(!p.url||e.href!==p.url.href||p.error!==c||h!==void 0&&h!==M.form||R)&&(b.props.page={error:c,params:n,route:{id:(l==null?void 0:l.id)??null},status:a,url:new URL(e),form:h??null,data:R?v:M.data}),b}async function de({loader:e,parent:n,url:r,params:a,route:c,server_data_node:l}){var v,R,$;let h=null;const _={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await e();if(xt(b.universal),(v=b.universal)!=null&&v.load){let I=function(...m){for(const O of m){Tt(c.id,O);const{href:T}=new URL(O,r);_.dependencies.add(T)}};const g={route:{get id(){return _.route=!0,c.id}},params:new Proxy(a,{get:(m,O)=>(_.params.add(O),m[O])}),data:(l==null?void 0:l.data)??null,url:ot(r,()=>{_.url=!0}),async fetch(m,O){let T;m instanceof Request?(T=m.url,O={body:m.method==="GET"||m.method==="HEAD"?void 0:await m.blob(),cache:m.cache,credentials:m.credentials,headers:m.headers,integrity:m.integrity,keepalive:m.keepalive,method:m.method,mode:m.mode,redirect:m.redirect,referrer:m.referrer,referrerPolicy:m.referrerPolicy,signal:m.signal,...O}):T=m;const D=new URL(T,r);return I(D.href),D.origin===r.origin&&(T=D.href.slice(r.origin.length)),x?pt(T,D.href,O):dt(T,O)},setHeaders:()=>{},depends:I,parent(){return _.parent=!0,n()}};try{if(ft(),h=await b.universal.load.call(null,g)??null,h!=null&&Object.getPrototypeOf(h)!==Object.prototype)throw new Error(`a load function related to route '${c.id}' returned ${typeof h!="object"?`a ${typeof h}`:h instanceof Response?"a Response object":Array.isArray(h)?"an array":"a non-plain object"}, but must return a plain object at the top level (i.e. \`return {...}\`)`)}finally{ut()}h=h?await vt(h):null}return{node:b,loader:e,server:l,universal:(R=b.universal)!=null&&R.load?{type:"data",data:h,uses:_}:null,data:h??(l==null?void 0:l.data)??null,slash:(($=b.universal)==null?void 0:$.trailingSlash)??(l==null?void 0:l.slash)}}function je(e,n,r,a,c){if(H)return!0;if(!a)return!1;if(a.parent&&e||a.route&&n||a.url&&r)return!0;for(const l of a.params)if(c[l]!==p.params[l])return!0;for(const l of a.dependencies)if(E.some(h=>h(new URL(l))))return!0;return!1}function pe(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}async function he({id:e,invalidating:n,url:r,params:a,route:c}){if((w==null?void 0:w.id)===e)return w.promise;const{errors:l,layouts:h,leaf:_}=c,b=[...h,_];l.forEach(k=>k==null?void 0:k().catch(()=>{})),b.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let v=null;const R=p.url?e!==p.url.pathname+p.url.search:!1,$=p.route?c.id!==p.route.id:!1;let I=!1;const g=b.map((k,L)=>{var z;const A=p.branch[L],N=!!(k!=null&&k[0])&&((A==null?void 0:A.loader)!==k[1]||je(I,$,R,(z=A.server)==null?void 0:z.uses,a));return N&&(I=!0),N});if(g.some(Boolean)){try{v=await Ge(r,g)}catch(k){return ie({status:k instanceof ee?k.status:500,error:await X(k,{url:r,params:a,route:{id:c.id}}),url:r,route:c})}if(v.type==="redirect")return v}const m=v==null?void 0:v.nodes;let O=!1;const T=b.map(async(k,L)=>{var ge;if(!k)return;const A=p.branch[L],N=m==null?void 0:m[L];if((!N||N.type==="skip")&&k[1]===(A==null?void 0:A.loader)&&!je(O,$,R,(ge=A.universal)==null?void 0:ge.uses,a))return A;if(O=!0,(N==null?void 0:N.type)==="error")throw N;return de({loader:k[1],url:r,params:a,route:c,parent:async()=>{var qe;const De={};for(let me=0;me<L;me+=1)Object.assign(De,(qe=await T[me])==null?void 0:qe.data);return De},server_data_node:pe(N===void 0&&k[0]?{type:"skip"}:N??null,k[0]?A==null?void 0:A.server:void 0)})});for(const k of T)k.catch(()=>{});const D=[];for(let k=0;k<b.length;k+=1)if(b[k])try{D.push(await T[k])}catch(L){if(L instanceof Be)return{type:"redirect",location:L.location};let A=500,N;if(m!=null&&m.includes(L))A=L.status??A,N=L.error;else if(L instanceof ee)A=L.status,N=L.body;else{if(await V.updated.check())return await K(r);N=await X(L,{params:a,url:r,route:{id:c.id}})}const z=await Te(k,D,l);return z?await Y({url:r,params:a,branch:D.slice(0,z.idx).concat(z.node),status:A,error:N,route:c}):await Ne(r,{id:c.id},N,A)}else D.push(void 0);return await Y({url:r,params:a,branch:D,status:200,error:null,route:c,form:n?void 0:null})}async function Te(e,n,r){for(;e--;)if(r[e]){let a=e;for(;!n[a];)a-=1;try{return{idx:a+1,node:{node:await r[e](),loader:r[e],data:{},server:null,universal:null}}}catch{continue}}}async function ie({status:e,error:n,url:r,route:a}){const c={};let l=null;if(t.server_loads[0]===0)try{const v=await Ge(r,[!0]);if(v.type!=="data"||v.nodes[0]&&v.nodes[0].type!=="data")throw 0;l=v.nodes[0]??null}catch{(r.origin!==location.origin||r.pathname!==location.pathname||C)&&await K(r)}const _=await de({loader:s,url:r,params:c,route:a,parent:()=>Promise.resolve({}),server_data_node:pe(l)}),b={node:await d(),loader:d,universal:null,server:null,data:null};return await Y({url:r,params:c,branch:[_,b],status:e,error:n,route:null})}function W(e,n){if(_e(e,B))return;const r=se(e);for(const a of i){const c=a.exec(r);if(c)return{id:e.pathname+e.search,invalidating:n,route:a,params:at(c),url:e}}}function se(e){return nt(e.pathname.slice(B.length)||"/")}function Ue({url:e,type:n,intent:r,delta:a}){var _,b;let c=!1;const l={from:{params:p.params,route:{id:((_=p.route)==null?void 0:_.id)??null},url:p.url},to:{params:(r==null?void 0:r.params)??null,route:{id:((b=r==null?void 0:r.route)==null?void 0:b.id)??null},url:e},willUnload:!r,type:n};a!==void 0&&(l.delta=a);const h={...l,cancel:()=>{c=!0}};return P||y.before_navigate.forEach(v=>v(h)),c?null:l}async function ce({url:e,scroll:n,keepfocus:r,redirect_chain:a,details:c,type:l,delta:h,nav_token:_={},accepted:b,blocked:v}){var T,D,k;const R=W(e,!1),$=Ue({url:e,type:l,delta:h,intent:R});if(!$){v();return}const I=U;b(),P=!0,x&&V.navigating.set($),ne=_;let g=R&&await he(R);if(!g){if(_e(e,B))return await K(e);g=await Ne(e,{id:null},await X(new Error(`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(R==null?void 0:R.url)||e,ne!==_)return!1;if(g.type==="redirect")if(a.length>10||a.includes(e.pathname))g=await ie({status:500,error:await X(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return re(new URL(g.location,e).href,{},[...a,e.pathname],_),!1;else((T=g.props.page)==null?void 0:T.status)>=400&&await V.updated.check()&&await K(e);if(E.length=0,H=!1,j=!0,Ee(I),Ie(I),(D=g.props.page)!=null&&D.url&&g.props.page.url.pathname!==e.pathname&&(e.pathname=(k=g.props.page)==null?void 0:k.url.pathname),c){const L=c.replaceState?0:1;if(c.state[q]=U+=L,history[c.replaceState?"replaceState":"pushState"](c.state,"",e),!c.replaceState){let A=U+1;for(;Z[A]||G[A];)delete Z[A],delete G[A],A+=1}}w=null,x?(p=g.state,g.props.page&&(g.props.page.url=e),F.$set(g.props)):xe(g);const{activeElement:m}=document;if(await we(),S){const L=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));n?scrollTo(n.x,n.y):L?L.scrollIntoView():scrollTo(0,0)}const O=document.activeElement!==m&&document.activeElement!==document.body;!r&&!O&&ke(),S=!0,g.props.page&&(M=g.props.page),P=!1,l==="popstate"&&Le(U),y.after_navigate.forEach(L=>L($)),V.navigating.set(null),j=!1}async function Ne(e,n,r,a){if(e.origin===location.origin&&e.pathname===location.pathname&&!C)return await ie({status:a,error:r,url:e,route:n});if(a!==404){console.error("An error occurred while loading the page. This will cause a full page reload. (This message will only appear during development.)");debugger}return await K(e)}function K(e){return location.href=e.href,new Promise(()=>{})}function Qe(){let e;u.addEventListener("mousemove",l=>{const h=l.target;clearTimeout(e),e=setTimeout(()=>{a(h,2)},20)});function n(l){a(l.composedPath()[0],1)}u.addEventListener("mousedown",n),u.addEventListener("touchstart",n,{passive:!0});const r=new IntersectionObserver(l=>{for(const h of l)h.isIntersecting&&(oe(se(new URL(h.target.href))),r.unobserve(h.target))},{threshold:0});function a(l,h){const _=Ve(l,u);if(!_)return;const{url:b,external:v,download:R}=ye(_,B);if(v||R)return;const $=le(_);if(!$.reload)if(h<=$.preload_data){const I=W(b,!1);I&&Pe(I).then(g=>{g.type==="loaded"&&g.state.error&&console.warn(`Preloading data for ${I.url.pathname} failed with the following error: ${g.state.error.message}
If this error is transient, you can ignore it. Otherwise, consider disabling preloading for this route. This route was preloaded due to a data-sveltekit-preload-data attribute. See https://kit.svelte.dev/docs/link-options for more info`)})}else h<=$.preload_code&&oe(se(b))}function c(){r.disconnect();for(const l of u.querySelectorAll("a")){const{url:h,external:_,download:b}=ye(l,B);if(_||b)continue;const v=le(l);v.reload||(v.preload_code===He.viewport&&r.observe(l),v.preload_code===He.eager&&oe(se(h)))}}y.after_navigate.push(c),c()}function X(e,n){return e instanceof ee?e.body:(console.warn("The next HMR update will cause the page to reload"),t.hooks.handleError({error:e,event:n})??{message:n.route.id!=null?"Internal Error":"Not Found"})}return{after_navigate:e=>{Fe(()=>(y.after_navigate.push(e),()=>{const n=y.after_navigate.indexOf(e);y.after_navigate.splice(n,1)}))},before_navigate:e=>{Fe(()=>(y.before_navigate.push(e),()=>{const n=y.before_navigate.indexOf(e);y.before_navigate.splice(n,1)}))},disable_scroll_handling:()=>{if(x&&!j)throw new Error("Can only disable scroll handling during navigation");(j||!x)&&(S=!1)},goto:(e,n={})=>re(e,n,[]),invalidate:e=>{if(typeof e=="function")E.push(e);else{const{href:n}=new URL(e,location.href);E.push(r=>r.href===n)}return Ae()},invalidate_all:()=>(H=!0,Ae()),preload_data:async e=>{const n=new URL(e,Me(document)),r=W(n,!1);if(!r)throw new Error(`Attempted to preload a URL that does not belong to this app: ${n}`);await Pe(r)},preload_code:oe,apply_action:async e=>{if(e.type==="error"){const n=new URL(location.href),{branch:r,route:a}=p;if(!a)return;const c=await Te(p.branch.length,r,a.errors);if(c){const l=await Y({url:n,params:p.params,branch:r.slice(0,c.idx).concat(c.node),status:e.status??500,error:e.error,route:a});p=l.state,F.$set(l.props),we().then(ke)}}else e.type==="redirect"?re(e.location,{invalidateAll:!0},[]):(F.$set({form:null,page:{...M,form:e.data,status:e.status}}),await we(),F.$set({form:e.data}),e.type==="success"&&ke())},_start_router:()=>{var e;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{var a;let r=!1;if(Oe(),!P){const c={from:{params:p.params,route:{id:((a=p.route)==null?void 0:a.id)??null},url:p.url},to:null,willUnload:!0,type:"leave",cancel:()=>r=!0};y.before_navigate.forEach(l=>l(c))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Oe()}),(e=navigator.connection)!=null&&e.saveData||Qe(),u.addEventListener("click",n=>{var $;if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=Ve(n.composedPath()[0],u);if(!r)return;const{url:a,external:c,target:l,download:h}=ye(r,B);if(!a)return;if(l==="_parent"||l==="_top"){if(window.parent!==window)return}else if(l&&l!=="_self")return;const _=le(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||h)return;if(c||_.reload){Ue({url:a,type:"link"})?P=!0:n.preventDefault();return}const[v,R]=a.href.split("#");if(R!==void 0&&v===location.href.split("#")[0]){if(p.url.hash===a.hash){n.preventDefault(),($=r.ownerDocument.getElementById(R))==null||$.scrollIntoView();return}if(J=!0,Ee(U),p.url=a,V.page.set({...M,url:a}),V.page.notify(),!_.replace_state)return;J=!1,n.preventDefault()}ce({url:a,scroll:_.noscroll?Q():null,keepfocus:_.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:_.replace_state??a.href===location.href},accepted:()=>n.preventDefault(),blocked:()=>n.preventDefault(),type:"link"})}),u.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const l=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(_e(l,B))return;const h=n.target,{keep_focus:_,noscroll:b,reload:v,replace_state:R}=le(h);if(v)return;n.preventDefault(),n.stopPropagation();const $=new FormData(h),I=a==null?void 0:a.getAttribute("name");I&&$.append(I,(a==null?void 0:a.getAttribute("value"))??""),l.search=new URLSearchParams($).toString(),ce({url:l,scroll:b?Q():null,keepfocus:_??!1,redirect_chain:[],details:{state:{},replaceState:R??l.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[q]){if(n.state[q]===U)return;const a=G[n.state[q]];if(p.url.href.split("#")[0]===location.href.split("#")[0]){G[U]=Q(),U=n.state[q],scrollTo(a.x,a.y);return}const c=n.state[q]-U;await ce({url:new URL(location.href),scroll:a,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{U=n.state[q]},blocked:()=>{history.go(-c)},type:"popstate",delta:c})}}),addEventListener("hashchange",()=>{J&&(J=!1,history.replaceState({...history.state,[q]:++U},"",location.href))});for(const n of document.querySelectorAll("link"))n.rel==="icon"&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&V.navigating.set(null)})},_hydrate:async({status:e=200,error:n,node_ids:r,params:a,route:c,data:l,form:h})=>{C=!0;const _=new URL(location.href);({params:a={},route:c={id:null}}=W(_,!1)||{});let b;try{const v=r.map(async(I,g)=>{const m=l[g];return m!=null&&m.uses&&(m.uses=Ze(m.uses)),de({loader:t.nodes[I],url:_,params:a,route:c,parent:async()=>{const O={};for(let T=0;T<g;T+=1)Object.assign(O,(await v[T]).data);return O},server_data_node:pe(m)})}),R=await Promise.all(v),$=i.find(({id:I})=>I===c.id);if($){const I=$.layouts;for(let g=0;g<I.length;g++)I[g]||R.splice(g,0,void 0)}b=await Y({url:_,params:a,branch:R,status:e,error:n,form:h,route:$??null})}catch(v){if(v instanceof Be){await K(new URL(v.location,location.href));return}b=await ie({status:v instanceof ee?v.status:500,error:await X(v,{url:_,params:a,route:c}),url:_,route:c})}xe(b)}}}async function Ge(t,o){const i=new URL(t);if(i.pathname=ct(t.pathname),t.searchParams.has(be))throw new Error(`Cannot used reserved query parameter "${be}"`);i.searchParams.append(be,o.map(d=>d?"1":"0").join(""));const s=await fe(i.href);if(!s.ok)throw new ee(s.status,await s.json());return new Promise(async d=>{var p;const u=new Map,E=s.body.getReader(),f=new TextDecoder;function w(C){return At(C,{Promise:x=>new Promise((S,j)=>{u.set(x,{fulfil:S,reject:j})})})}let y="";for(;;){const{done:C,value:x}=await E.read();if(C&&!y)break;for(y+=!x&&y?`
`:f.decode(x);;){const S=y.indexOf(`
`);if(S===-1)break;const j=JSON.parse(y.slice(0,S));if(y=y.slice(S+1),j.type==="redirect")return d(j);if(j.type==="data")(p=j.nodes)==null||p.forEach(P=>{(P==null?void 0:P.type)==="data"&&(P.uses=Ze(P.uses),P.data=w(P.data))}),d(j);else if(j.type==="chunk"){const{id:P,data:J,error:H}=j,F=u.get(P);u.delete(P),H?F.reject(w(H)):F.fulfil(w(J))}}}})}function Ze(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url)}}function ke(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const o=document.body,i=o.getAttribute("tabindex");o.tabIndex=-1,o.focus({preventScroll:!0,focusVisible:!1}),i!==null?o.setAttribute("tabindex",i):o.removeAttribute("tabindex");const s=getSelection();if(s&&s.type!=="None"){const d=[];for(let u=0;u<s.rangeCount;u+=1)d.push(s.getRangeAt(u));setTimeout(()=>{if(s.rangeCount===d.length){for(let u=0;u<s.rangeCount;u+=1){const E=d[u],f=s.getRangeAt(u);if(E.commonAncestorContainer!==f.commonAncestorContainer||E.startContainer!==f.startContainer||E.endContainer!==f.endContainer||E.startOffset!==f.startOffset||E.endOffset!==f.endOffset)return}s.removeAllRanges()}})}}}{const t=console.warn;console.warn=function(...i){i.length===1&&/<(Layout|Page|Error)(_[\w$]+)?> was created (with unknown|without expected) prop '(data|form)'/.test(i[0])||t(...i)}}async function Dt(t,o,i){o===document.body&&console.warn(`Placing %sveltekit.body% directly inside <body> is not recommended, as your app may break for users who have certain browser extensions installed.

Consider wrapping it in an element:

<div style="display: contents">
  %sveltekit.body%
</div>`);const s=Ut(t,o);et({client:s}),i?await s._hydrate(i):s.goto(location.href,{replaceState:!0}),s._start_router()}export{Dt as start};
