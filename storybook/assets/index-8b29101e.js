import{r as u}from"./index-8db94870.js";/**
 * @remix-run/router v1.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(this,arguments)}var y;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(y||(y={}));const W="popstate";function oe(e){e===void 0&&(e={});function t(r,a){let{pathname:f,search:o,hash:i}=r.location;return E("",{pathname:f,search:o,hash:i},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:T(a)}return q(t,n,null,e)}function g(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function $(){return Math.random().toString(36).substr(2,8)}function J(e,t){return{usr:e.state,key:e.key,idx:t}}function E(e,t,n,r){return n===void 0&&(n=null),P({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?U(t):t,{state:n,key:t&&t.key||r||$()})}function T(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function U(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function q(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:f=!1}=r,o=a.history,i=y.Pop,l=null,c=v();c==null&&(c=0,o.replaceState(P({},o.state,{idx:c}),""));function v(){return(o.state||{idx:null}).idx}function m(){i=y.Pop;let s=v(),h=s==null?null:s-c;c=s,l&&l({action:i,location:d.location,delta:h})}function x(s,h){i=y.Push;let p=E(d.location,s,h);n&&n(p,s),c=v()+1;let N=J(p,c),w=d.createHref(p);try{o.pushState(N,"",w)}catch{a.location.assign(w)}f&&l&&l({action:i,location:d.location,delta:1})}function b(s,h){i=y.Replace;let p=E(d.location,s,h);n&&n(p,s),c=v();let N=J(p,c),w=d.createHref(p);o.replaceState(N,"",w),f&&l&&l({action:i,location:d.location,delta:0})}function C(s){let h=a.location.origin!=="null"?a.location.origin:a.location.href,p=typeof s=="string"?s:T(s);return g(h,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,h)}let d={get action(){return i},get location(){return e(a,o)},listen(s){if(l)throw new Error("A history only accepts one active listener");return a.addEventListener(W,m),l=s,()=>{a.removeEventListener(W,m),l=null}},createHref(s){return t(a,s)},createURL:C,encodeLocation(s){let h=C(s);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:x,replace:b,go(s){return o.go(s)}};return d}var k;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(k||(k={}));function D(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function K(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?U(e):e;return{pathname:n?n.startsWith("/")?n:V(n,t):t,search:X(r),hash:Y(a)}}function V(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function S(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function F(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function G(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=U(e):(a=P({},e),g(!a.pathname||!a.pathname.includes("?"),S("?","pathname","search",a)),g(!a.pathname||!a.pathname.includes("#"),S("#","pathname","hash",a)),g(!a.search||!a.search.includes("#"),S("#","search","hash",a)));let f=e===""||a.pathname==="",o=f?"/":a.pathname,i;if(r||o==null)i=n;else{let m=t.length-1;if(o.startsWith("..")){let x=o.split("/");for(;x[0]==="..";)x.shift(),m-=1;a.pathname=x.join("/")}i=m>=0?t[m]:"/"}let l=K(a,i),c=o&&o!=="/"&&o.endsWith("/"),v=(f||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||v)&&(l.pathname+="/"),l}const Q=e=>e.join("/").replace(/\/\/+/g,"/"),X=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Y=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,A=["post","put","patch","delete"];new Set(A);const Z=["get",...A];new Set(Z);/**
 * React Router v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},L.apply(this,arguments)}const H=u.createContext(null),I=u.createContext(null),j=u.createContext(null),B=u.createContext({outlet:null,matches:[],isDataRoute:!1});function M(){return u.useContext(j)!=null}function ee(){return M()||g(!1),u.useContext(j).location}function _(e){u.useContext(I).static||u.useLayoutEffect(e)}function ue(){let{isDataRoute:e}=u.useContext(B);return e?ie():te()}function te(){M()||g(!1);let{basename:e,navigator:t}=u.useContext(I),{matches:n}=u.useContext(B),{pathname:r}=ee(),a=JSON.stringify(F(n).map(i=>i.pathnameBase)),f=u.useRef(!1);return _(()=>{f.current=!0}),u.useCallback(function(i,l){if(l===void 0&&(l={}),!f.current)return;if(typeof i=="number"){t.go(i);return}let c=G(i,JSON.parse(a),r,l.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:Q([e,c.pathname])),(l.replace?t.replace:t.push)(c,l.state,l)},[e,t,a,r])}var R;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(R||(R={}));var O;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(O||(O={}));function ne(e){let t=u.useContext(H);return t||g(!1),t}function ae(e){let t=u.useContext(B);return t||g(!1),t}function re(e){let t=ae(),n=t.matches[t.matches.length-1];return n.route.id||g(!1),n.route.id}function ie(){let{router:e}=ne(R.UseNavigateStable),t=re(O.UseNavigateStable),n=u.useRef(!1);return _(()=>{n.current=!0}),u.useCallback(function(a,f){f===void 0&&(f={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,L({fromRouteId:t},f)))},[e,t])}function ce(e){let{basename:t="/",children:n=null,location:r,navigationType:a=y.Pop,navigator:f,static:o=!1}=e;M()&&g(!1);let i=t.replace(/^\/*/,"/"),l=u.useMemo(()=>({basename:i,navigator:f,static:o}),[i,f,o]);typeof r=="string"&&(r=U(r));let{pathname:c="/",search:v="",hash:m="",state:x=null,key:b="default"}=r,C=u.useMemo(()=>{let d=D(c,i);return d==null?null:{location:{pathname:d,search:v,hash:m,state:x,key:b},navigationType:a}},[i,c,v,m,x,b,a]);return C==null?null:u.createElement(I.Provider,{value:l},u.createElement(j.Provider,{children:n,value:C}))}var z;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(z||(z={}));new Promise(()=>{});export{ce as R,oe as c,ue as u};
//# sourceMappingURL=index-8b29101e.js.map
