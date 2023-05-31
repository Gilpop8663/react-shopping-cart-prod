import{i as r,j as t}from"./styled-components.browser.esm-aaaef0f3.js";import{r as c}from"./index-8db94870.js";import{b as f,a as w,c as v}from"./index-cfc35cc2.js";import{s as b,c as h,S as j,k as C}from"./fetchCart-d222eaeb.js";import{u as x}from"./index-8b29101e.js";import{S as k}from"./index-3388ab67.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ce4a492.js";const S=()=>{const[e,a]=f(b);return{server:e,handleServer:o=>{a(o)}}},$=r.button`
  display: flex;
  color: ${({theme:e})=>e.lightColor};
`,y=r.div`
  font-size: 24px;
`,_=r.div`
  border-radius: 50%;
  background-color: #04c09e;
  width: 2.6rem;
  height: 2.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;

  @media screen and (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    width: 3.2rem;
    height: 3.2rem;
  }
`,R=r.div`
  font-size: 1.6rem;
  color: #fff;
`,E=r.div`
  @media screen and (max-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`;function D(){const e=w(h),a=x();return t.jsxs($,{type:"button","aria-label":"장바구니 페이지로 가기",role:"button",onClick:()=>{a("/cart")},children:[t.jsx(y,{children:t.jsx(E,{children:"장바구니"})}),t.jsx(_,{children:t.jsx(R,{"aria-live":"polite",children:e.length})})]})}const L=""+new URL("logo-48e72768.svg",import.meta.url).href,W=""+new URL("shop-ddc53723.svg",import.meta.url).href,H=r.button`
  display: flex;
  align-items: center;
  color: ${({theme:e})=>e.lightColor};
`;r.img`
  width: 4rem;
  height: 4rem;
`;const I=r.div`
  margin-right: 1rem;

  @media screen and (max-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`;function N(){const e=x();return t.jsxs(H,{type:"button","aria-label":"SHOP 홈페이지로 가기",role:"button",onClick:()=>{e("/")},children:[t.jsx(I,{children:t.jsx("img",{src:L,alt:"로고 이미지"})}),t.jsx("img",{src:W,alt:"로고 이미지"})]})}const T=r.div`
  padding: 0 20px;
  margin: 0 auto;
  max-width: 100%;

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    max-width: 540px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.md}) {
    max-width: 720px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    max-width: 960px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.xl}) {
    max-width: 1140px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.xxl}) {
    max-width: 1320px;
  }
`;r.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;
  column-gap: 1rem;
`;r.div`
  margin: auto;
  width: 90%;

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.md}) {
    width: 48%;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    width: 32%;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.xl}) {
    width: 24%;
  }
`;const z=r.div`
  background-color: ${({theme:e})=>e.primaryColor};
  color: ${({theme:e})=>e.lightColor};
  margin-bottom: 3rem;
`,O=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;function U(){const{server:e,handleServer:a}=S(),i=v(h),o=d=>{const{value:s}=d.currentTarget,g=j.filter(u=>u===s)[0];a(g)};return c.useEffect(()=>{(async()=>{const s=await C(e);i(s)})()},[e,i]),t.jsx(z,{children:t.jsx(T,{children:t.jsxs(O,{children:[t.jsx(N,{}),t.jsx(k,{options:[{value:"마코",name:"마코"},{value:"우가",name:"우가"},{value:"허브",name:"허브"}],onChange:o}),t.jsx(c.Suspense,{children:t.jsx(D,{})})]})})})}const J={component:U,title:"Header"},n={args:{}};var m,l,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {}
} satisfies Story`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const K=["Default"];export{n as Default,K as __namedExportsOrder,J as default};
//# sourceMappingURL=Header.stories-04475571.js.map
