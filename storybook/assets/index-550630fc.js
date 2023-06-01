import{i as r,j as t}from"./styled-components.browser.esm-aaaef0f3.js";import{r as d}from"./index-8db94870.js";import{b as h,a as x,c as g}from"./index-cfc35cc2.js";import{s as u,c,S as w,k as f}from"./fetchCart-d222eaeb.js";import{a as l}from"./index-5907bbe8.js";import{S as v}from"./index-3388ab67.js";const b=()=>{const[e,a]=h(u);return{server:e,handleServer:i=>{a(i)}}},C=r.button`
  display: flex;
  color: ${({theme:e})=>e.colors.lightColor};
`,j=r.div`
  font-size: 24px;
`,k=r.div`
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
`,$=r.div`
  font-size: 1.6rem;
  color: #fff;
`,S=r.div`
  @media screen and (max-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`;function y(){const e=x(c),a=l();return t.jsxs(C,{type:"button","aria-label":"장바구니 페이지로 가기",role:"button",onClick:()=>{a("/cart")},children:[t.jsx(j,{children:t.jsx(S,{children:"장바구니"})}),t.jsx(k,{children:t.jsx($,{"aria-live":"polite",children:e.length})})]})}const R=""+new URL("logo-48e72768.svg",import.meta.url).href,_=""+new URL("shop-ddc53723.svg",import.meta.url).href,E=r.button`
  display: flex;
  align-items: center;
  color: ${({theme:e})=>e.colors.lightColor};
`;r.img`
  width: 4rem;
  height: 4rem;
`;const L=r.div`
  margin-right: 1rem;

  @media screen and (max-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`;function W(){const e=l();return t.jsxs(E,{type:"button","aria-label":"SHOP 홈페이지로 가기",role:"button",onClick:()=>{e("/")},children:[t.jsx(L,{children:t.jsx("img",{src:R,alt:"로고 이미지"})}),t.jsx("img",{src:_,alt:"로고 이미지"})]})}const H=r.div`
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
`;const D=r.div`
  background-color: ${({theme:e})=>e.colors.primaryColor};
  color: ${({theme:e})=>e.colors.lightColor};
  margin-bottom: 3rem;
`,I=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;function M(){const{server:e,handleServer:a}=b(),n=g(c),i=s=>{const{value:o}=s.currentTarget,m=w.filter(p=>p===o)[0];a(m)};return d.useEffect(()=>{(async()=>{const o=await f(e);n(o)})()},[e,n]),t.jsx(D,{children:t.jsx(H,{children:t.jsxs(I,{children:[t.jsx(W,{}),t.jsx(v,{options:[{value:"마코",name:"마코"},{value:"우가",name:"우가"},{value:"허브",name:"허브"}],onChange:i}),t.jsx(d.Suspense,{children:t.jsx(y,{})})]})})})}export{H as C,M as H};
//# sourceMappingURL=index-550630fc.js.map
