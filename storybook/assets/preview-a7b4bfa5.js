import{c as u,j as t,K as f}from"./styled-components.browser.esm-aaaef0f3.js";import{R as d}from"./index-1034d202.js";import{r}from"./index-8db94870.js";import{c as x,R as b}from"./index-8b29101e.js";import"./index-8ce4a492.js";import"./_commonjsHelpers-042e6b4d.js";/**
 * React Router DOM v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function h(e){let{basename:l,children:c,window:p}=e,n=r.useRef();n.current==null&&(n.current=x({window:p,v5Compat:!0}));let o=n.current,[a,m]=r.useState({action:o.action,location:o.location});return r.useLayoutEffect(()=>o.listen(m),[o]),r.createElement(b,{basename:l,children:c,location:a.location,navigationType:a.action,navigator:o})}var s;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(s||(s={}));var i;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(i||(i={}));const g={primaryColor:"#333333",secondaryColor:"#AAAAAA",successColor:"#2e7ff2",dangerColor:"#dc3545",warningColor:"#ffc107",infoColor:"#04C09E",lightColor:"#FFFFFF",darkColor:"#000000",breakpoints:{xs:"0",sm:"576px",md:"768px",lg:"992px",xl:"1200px",xxl:"1400px"},shadows:{normal:"0 2px 4px rgba(0, 0, 0, 0.2)",large:"0 4px 10px rgba(0, 0, 0, 0.3)"},effects:{hoverScale:"translateX(0.3rem) translateY(-0.3rem) ",hoverScaleUp:"scale(1.03)"},transitions:{default:"0.3s ease-in-out"}},y=u`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
      'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
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
    transition: ${e=>e.theme.transitions.default};

    &:hover {
      transform: ${({theme:e})=>e.effects.hoverScaleUp};
    }
  }

  html,
  body {
    font-family: sans-serif;
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
`,U={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},decorators:[e=>t.jsx(d,{children:t.jsx(h,{children:t.jsxs(f,{theme:g,children:[t.jsx(y,{}),t.jsx(e,{})]})})})]};export{U as default};
//# sourceMappingURL=preview-a7b4bfa5.js.map
