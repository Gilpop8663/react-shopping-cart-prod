import{i as t,j as r}from"./styled-components.browser.esm-aaaef0f3.js";import{r as x}from"./index-8db94870.js";import{c as g,d as u}from"./index-58f35e65.js";import{s as f,c as w,u as m,S as v}from"./cartState-4da5d400.js";import{u as l}from"./index-8b29101e.js";import{S as b}from"./index-3388ab67.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ce4a492.js";const j=()=>{const[e,n]=g(f);return{server:e,handleServer:o=>{n(o)}}},C=t.button`
  display: flex;
  color: ${({theme:e})=>e.lightColor};
`,S=t.div`
  font-size: 24px;
`,k=t.div`
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
`,$=t.div`
  font-size: 1.6rem;
  color: #fff;
`,y=t.div`
  @media screen and (max-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`;function R(){const e=u(w),n=l(),a=m();return r.jsxs(C,{type:"button","aria-label":"장바구니 페이지로 가기",role:"button",onClick:()=>{a(),n("/cart")},children:[r.jsx(S,{children:r.jsx(y,{children:"장바구니"})}),r.jsx(k,{children:r.jsx($,{"aria-live":"polite",children:e.length})})]})}const _=""+new URL("logo-48e72768.svg",import.meta.url).href,E=""+new URL("shop-ddc53723.svg",import.meta.url).href,L=t.button`
  display: flex;
  align-items: center;
  color: ${({theme:e})=>e.lightColor};
`;t.img`
  width: 4rem;
  height: 4rem;
`;const W=t.div`
  margin-right: 1rem;

  @media screen and (max-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`;function H(){const e=l(),n=m();return r.jsxs(L,{type:"button","aria-label":"SHOP 홈페이지로 가기",role:"button",onClick:()=>{n(),e("/")},children:[r.jsx(W,{children:r.jsx("img",{src:_,alt:"로고 이미지"})}),r.jsx("img",{src:E,alt:"로고 이미지"})]})}const I=t.div`
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
`;t.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;
  column-gap: 1rem;
`;t.div`
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
`;const N=t.div`
  background-color: ${({theme:e})=>e.primaryColor};
  color: ${({theme:e})=>e.lightColor};
  margin-bottom: 3rem;
`,T=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;function z(){const{handleServer:e}=j(),n=a=>{const{value:o}=a.currentTarget,p=v.filter(h=>h===o)[0];e(p)};return r.jsx(N,{children:r.jsx(I,{children:r.jsxs(T,{children:[r.jsx(H,{}),r.jsx(b,{options:[{value:"마코",name:"마코"},{value:"우가",name:"우가"},{value:"허브",name:"허브"}],onChange:n}),r.jsx(x.Suspense,{children:r.jsx(R,{})})]})})})}const q={component:z,title:"Header"},i={args:{}};var s,d,c;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {}
} satisfies Story`,...(c=(d=i.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const F=["Default"];export{i as Default,F as __namedExportsOrder,q as default};
//# sourceMappingURL=Header.stories-ae118a15.js.map
