import{c as g,j as m,K as _}from"./styled-components.browser.esm-aaaef0f3.js";import{R as x}from"./index-5d0f5e1c.js";import{B as k}from"./index-6b0f0fe4.js";import{t as j}from"./theme-cf2b1b34.js";import{l as z,r as S,h as W}from"./handlers-45c7e46c.js";import{c as f}from"./_commonjsHelpers-042e6b4d.js";import{c as O}from"./_commonjs-dynamic-modules-302442b1.js";import"./index-8db94870.js";import"./index-8ce4a492.js";import"./serverUrlConstants-ecb6b37d.js";const R=`
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
`,B=g`
  ${R}
  
  body {
    margin: 0;
    font-family: 'Noto Sans KR',system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body[data-hide-scroll='true']{
    overflow: hidden;
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
`;var v={},c={},D=f&&f.__awaiter||function(s,o,r,n){function i(e){return e instanceof r?e:new r(function(a){a(e)})}return new(r||(r=Promise))(function(e,a){function d(u){try{t(n.next(u))}catch(p){a(p)}}function b(u){try{t(n.throw(u))}catch(p){a(p)}}function t(u){u.done?e(u.value):i(u.value).then(d,b)}t((n=n.apply(s,o||[])).next())})},M=f&&f.__generator||function(s,o){var r={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},n,i,e,a;return a={next:d(0),throw:d(1),return:d(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function d(t){return function(u){return b([t,u])}}function b(t){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,i&&(e=t[0]&2?i.return:t[0]?i.throw||((e=i.return)&&e.call(i),0):i.next)&&!(e=e.call(i,t[1])).done)return e;switch(i=0,e&&(t=[t[0]&2,e.value]),t[0]){case 0:case 1:e=t;break;case 4:return r.label++,{value:t[1],done:!1};case 5:r.label++,i=t[1],t=[0];continue;case 7:t=r.ops.pop(),r.trys.pop();continue;default:if(e=r.trys,!(e=e.length>0&&e[e.length-1])&&(t[0]===6||t[0]===2)){r=0;continue}if(t[0]===3&&(!e||t[1]>e[0]&&t[1]<e[3])){r.label=t[1];break}if(t[0]===6&&r.label<e[1]){r.label=e[1],e=t;break}if(e&&r.label<e[2]){r.label=e[2],r.ops.push(t);break}e[2]&&r.ops.pop(),r.trys.pop();continue}t=o.call(s,r)}catch(u){t=[6,u],i=0}finally{n=e=0}if(t[0]&5)throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}};Object.defineProperty(c,"__esModule",{value:!0});c.mswLoader=c.mswDecorator=c.getWorker=c.initializeWorker=c.initialize=void 0;var q=z,A=!(0,q.isNodeProcess)(),l,h;function w(s){var o;if(A){var r=S().setupWorker,n=r();h=n.start(s),l=n}else{var i=typeof process<"u"&&((o=process.versions)===null||o===void 0?void 0:o.node),e=i?typeof __webpack_require__=="function"?__non_webpack_require__:O:void 0,a=e("msw/node").setupServer,d=a();h=d.listen(s),l=d}return l}c.initialize=w;function L(s){return console.warn('[MSW] "initializeWorker" is now deprecated, please use "initialize" instead. This method will be removed in future releases.'),w(s)}c.initializeWorker=L;function E(){if(l===void 0)throw new Error('[MSW] Failed to retrieve the worker: no active worker found. Did you forget to call "initialize"?');return l}c.getWorker=E;var P=function(s,o){var r=o.parameters.msw;if(l&&(l.resetHandlers(),r)){if(Array.isArray(r)&&r.length>0)l.use.apply(l,r);else if("handlers"in r&&r.handlers){var n=Object.values(r.handlers).filter(Boolean).reduce(function(i,e){return i.concat(e)},[]);n.length>0&&l.use.apply(l,n)}}return s()};c.mswDecorator=P;var T=function(s){return D(void 0,void 0,void 0,function(){var o,r;return M(this,function(n){switch(n.label){case 0:return o=s.parameters.msw,l&&(l.resetHandlers(),o&&(Array.isArray(o)&&o.length>0?l.use.apply(l,o):"handlers"in o&&o.handlers&&(r=Object.values(o.handlers).filter(Boolean).reduce(function(i,e){return i.concat(e)},[]),r.length>0&&l.use.apply(l,r)))),h?[4,h]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2,{}]}})})};c.mswLoader=T;(function(s){var o=f&&f.__createBinding||(Object.create?function(n,i,e,a){a===void 0&&(a=e),Object.defineProperty(n,a,{enumerable:!0,get:function(){return i[e]}})}:function(n,i,e,a){a===void 0&&(a=e),n[a]=i[e]}),r=f&&f.__exportStar||function(n,i){for(var e in n)e!=="default"&&!Object.prototype.hasOwnProperty.call(i,e)&&o(i,n,e)};Object.defineProperty(s,"__esModule",{value:!0}),r(c,s)})(v);let y={};location.hostname==="gilpop8663.github.io"&&(y={serviceWorker:{url:"/react-shopping-cart-prod/mockServiceWorker.js"}});v.initialize(y);const J={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},msw:W},decorators:[s=>m.jsx(x,{children:m.jsx(k,{children:m.jsxs(_,{theme:j,children:[m.jsx(B,{}),m.jsx(s,{})]})})})]},Q=[v.mswDecorator];export{Q as decorators,J as default};
//# sourceMappingURL=preview-531a2228.js.map
