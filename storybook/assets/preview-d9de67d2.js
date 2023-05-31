import{c as S,j as m,K as k}from"./styled-components.browser.esm-aaaef0f3.js";import{R as j}from"./index-cfc35cc2.js";import{r as h}from"./index-8db94870.js";import{c as z,R}from"./index-8b29101e.js";import{l as W,r as O,h as B,t as U}from"./theme-03678771.js";import{c as d}from"./_commonjsHelpers-042e6b4d.js";import{c as E}from"./_commonjs-dynamic-modules-302442b1.js";import"./index-8ce4a492.js";/**
 * React Router DOM v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function D(n){let{basename:a,children:r,window:o}=n,i=h.useRef();i.current==null&&(i.current=z({window:o,v5Compat:!0}));let e=i.current,[s,f]=h.useState({action:e.action,location:e.location});return h.useLayoutEffect(()=>e.listen(f),[e]),h.createElement(R,{basename:a,children:r,location:s.location,navigationType:s.action,navigator:e})}var w;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmitImpl="useSubmitImpl",n.UseFetcher="useFetcher"})(w||(w={}));var g;(function(n){n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(g||(g={}));const F=`
/*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */
html,
body,
p,
ol,
ul,
li,
dl,
dt,
dd,
blockquote,
figure,
fieldset,
legend,
textarea,
pre,
iframe,
hr,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}
ul {
  list-style: none;
}
button,
input,
select {
  margin: 0;
}
html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
img,
video {
  height: auto;
  max-width: 100%;
}
iframe {
  border: 0;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
td,
th {
  padding: 0;
}

button{
  background: none;
}
`,L=S`
  ${F}
  
  body {
    margin: 0;
    font-family: 'Noto Sans KR',system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -moz-osx-font-smoothing: grayscale;
  }

  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border:none;
  }
  
  ul,
  li {
    list-style: none;
  }
  
  button {
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    transition: ${n=>n.theme.transitions.default};

    &:hover {
      transform: ${({theme:n})=>n.effects.hoverScaleUp};
    }
  }

  html,
  body {
    margin: 0 auto;
    font-size: 62.5%;

    min-width: 400px;
  }

  img {
    max-width: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input {
    border: none;
    outline: none;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`;var y={},c={},M=d&&d.__awaiter||function(n,a,r,o){function i(e){return e instanceof r?e:new r(function(s){s(e)})}return new(r||(r=Promise))(function(e,s){function f(u){try{t(o.next(u))}catch(v){s(v)}}function b(u){try{t(o.throw(u))}catch(v){s(v)}}function t(u){u.done?e(u.value):i(u.value).then(f,b)}t((o=o.apply(n,a||[])).next())})},$=d&&d.__generator||function(n,a){var r={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},o,i,e,s;return s={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function f(t){return function(u){return b([t,u])}}function b(t){if(o)throw new TypeError("Generator is already executing.");for(;r;)try{if(o=1,i&&(e=t[0]&2?i.return:t[0]?i.throw||((e=i.return)&&e.call(i),0):i.next)&&!(e=e.call(i,t[1])).done)return e;switch(i=0,e&&(t=[t[0]&2,e.value]),t[0]){case 0:case 1:e=t;break;case 4:return r.label++,{value:t[1],done:!1};case 5:r.label++,i=t[1],t=[0];continue;case 7:t=r.ops.pop(),r.trys.pop();continue;default:if(e=r.trys,!(e=e.length>0&&e[e.length-1])&&(t[0]===6||t[0]===2)){r=0;continue}if(t[0]===3&&(!e||t[1]>e[0]&&t[1]<e[3])){r.label=t[1];break}if(t[0]===6&&r.label<e[1]){r.label=e[1],e=t;break}if(e&&r.label<e[2]){r.label=e[2],r.ops.push(t);break}e[2]&&r.ops.pop(),r.trys.pop();continue}t=a.call(n,r)}catch(u){t=[6,u],i=0}finally{o=e=0}if(t[0]&5)throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}};Object.defineProperty(c,"__esModule",{value:!0});c.mswLoader=c.mswDecorator=c.getWorker=c.initializeWorker=c.initialize=void 0;var q=W,A=!(0,q.isNodeProcess)(),l,p;function _(n){var a;if(A){var r=O().setupWorker,o=r();p=o.start(n),l=o}else{var i=typeof process<"u"&&((a=process.versions)===null||a===void 0?void 0:a.node),e=i?typeof __webpack_require__=="function"?__non_webpack_require__:E:void 0,s=e("msw/node").setupServer,f=s();p=f.listen(n),l=f}return l}c.initialize=_;function I(n){return console.warn('[MSW] "initializeWorker" is now deprecated, please use "initialize" instead. This method will be removed in future releases.'),_(n)}c.initializeWorker=I;function T(){if(l===void 0)throw new Error('[MSW] Failed to retrieve the worker: no active worker found. Did you forget to call "initialize"?');return l}c.getWorker=T;var P=function(n,a){var r=a.parameters.msw;if(l&&(l.resetHandlers(),r)){if(Array.isArray(r)&&r.length>0)l.use.apply(l,r);else if("handlers"in r&&r.handlers){var o=Object.values(r.handlers).filter(Boolean).reduce(function(i,e){return i.concat(e)},[]);o.length>0&&l.use.apply(l,o)}}return n()};c.mswDecorator=P;var G=function(n){return M(void 0,void 0,void 0,function(){var a,r;return $(this,function(o){switch(o.label){case 0:return a=n.parameters.msw,l&&(l.resetHandlers(),a&&(Array.isArray(a)&&a.length>0?l.use.apply(l,a):"handlers"in a&&a.handlers&&(r=Object.values(a.handlers).filter(Boolean).reduce(function(i,e){return i.concat(e)},[]),r.length>0&&l.use.apply(l,r)))),p?[4,p]:[3,2];case 1:o.sent(),o.label=2;case 2:return[2,{}]}})})};c.mswLoader=G;(function(n){var a=d&&d.__createBinding||(Object.create?function(o,i,e,s){s===void 0&&(s=e),Object.defineProperty(o,s,{enumerable:!0,get:function(){return i[e]}})}:function(o,i,e,s){s===void 0&&(s=e),o[s]=i[e]}),r=d&&d.__exportStar||function(o,i){for(var e in o)e!=="default"&&!Object.prototype.hasOwnProperty.call(i,e)&&a(i,o,e)};Object.defineProperty(n,"__esModule",{value:!0}),r(c,n)})(y);let x={};location.hostname==="gilpop8663.github.io"&&(x={serviceWorker:{url:"/react-shopping-cart-prod/mockServiceWorker.js"}});y.initialize(x);const X={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},msw:B},decorators:[n=>m.jsx(j,{children:m.jsx(D,{children:m.jsxs(k,{theme:U,children:[m.jsx(L,{}),m.jsx(n,{})]})})})]},Y=[y.mswDecorator];export{Y as decorators,X as default};
//# sourceMappingURL=preview-d9de67d2.js.map
