import{i as r,j as t}from"./styled-components.browser.esm-aaaef0f3.js";import{r as f}from"./index-8db94870.js";import{c as w,u as p,a as y,S as _}from"./cartState-d3d4196c.js";import{d as b,e as C}from"./index-1034d202.js";import{u as h}from"./index-8b29101e.js";import{S as v}from"./SelectBox-8c0e70bd.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ce4a492.js";const j=b({key:"withCartLength",get:({get:e})=>e(w).length}),k=()=>C(j),L=r.button`
  display: flex;
  color: ${({theme:e})=>e.lightColor};
`,$=r.div`
  font-size: 24px;
`,S=r.div`
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
`,W=r.div`
  font-size: 1.6rem;
  color: #fff;
`,I=r.div`
  @media screen and (max-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`;function N(){const e=h(),a=k(),i=p();return t.jsxs(L,{type:"button","aria-label":"장바구니 페이지로 가기",role:"button",onClick:()=>{i(),e("/cart")},children:[t.jsx($,{children:t.jsx(I,{children:"장바구니"})}),t.jsx(S,{children:t.jsx(W,{"aria-live":"polite",children:a})})]})}const T=""+new URL("logo-48e72768.svg",import.meta.url).href,R=""+new URL("shop-ddc53723.svg",import.meta.url).href,o=r.button`
  display: flex;
  align-items: center;
  color: ${({theme:e})=>e.lightColor};
`,d=r.img`
  width: 4rem;
  height: 4rem;
`,s=r.div`
  margin-right: 1rem;

  @media screen and (max-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`;try{o.displayName="LogoWrapper",o.__docgenInfo={description:"",displayName:"LogoWrapper",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}}}catch{}try{d.displayName="CartIcon",d.__docgenInfo={description:"",displayName:"CartIcon",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}}}catch{}try{s.displayName="LogoContainer",s.__docgenInfo={description:"",displayName:"LogoContainer",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}}}catch{}function V(){const e=h(),a=p();return t.jsxs(o,{type:"button","aria-label":"SHOP 홈페이지로 가기",role:"button",onClick:()=>{a(),e("/")},children:[t.jsx(s,{children:t.jsx("img",{src:T,alt:"로고 이미지"})}),t.jsx("img",{src:R,alt:"로고 이미지"})]})}const q=r.div`
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
`;const E=r.div`
  background-color: ${({theme:e})=>e.primaryColor};
  color: ${({theme:e})=>e.lightColor};
  margin-bottom: 3rem;
`,D=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;function H(){const{handleServer:e}=y(),a=i=>{const{value:u}=i.currentTarget,g=_.filter(x=>x===u)[0];e(g)};return t.jsx(E,{children:t.jsx(q,{children:t.jsxs(D,{children:[t.jsx(V,{}),t.jsx(v,{options:[{value:"마코",name:"마코"},{value:"우가",name:"우가"},{value:"허브",name:"허브"}],onChange:a}),t.jsx(f.Suspense,{children:t.jsx(N,{})})]})})})}const G={component:H,title:"Header"},n={args:{}};var l,c,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {}
} satisfies Story`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const J=["Default"];export{n as Default,J as __namedExportsOrder,G as default};
//# sourceMappingURL=Header.stories-c41b1d73.js.map
