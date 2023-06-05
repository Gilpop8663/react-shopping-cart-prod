import{i as r,j as n}from"./styled-components.browser.esm-aaaef0f3.js";import{b as u,c as h}from"./common-a48b2eb5.js";import{t}from"./theme-cf2b1b34.js";const f=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 24rem;
  height: 16rem;

  border: ${({selected:e})=>e?`3px solid ${t.colors.dangerColor} `:`1px solid ${t.colors.primaryColor}`};
  padding: 2.5rem 3rem;
  gap: 1rem;

  background: ${t.colors.lightColor};
  box-shadow: ${t.shadows.default};

  cursor: pointer;
  @media screen and (min-width: ${({theme:e})=>e.breakpoints.md}) {
    width: 28rem;
    height: 18rem;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    width: 34rem;
    height: 20rem;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.xl}) {
    width: 44rem;
    height: 24rem;
  }
`,g=r.h3`
  font-weight: 700;
  font-size: 1.6rem;

  letter-spacing: -0.5px;

  color: ${t.colors.primaryColor};

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: 1.8rem;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: 2rem;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.xl}) {
    font-size: 2.4rem;
  }
`,x=r.span`
  font-weight: 700;
  font-size: 3rem;

  letter-spacing: -0.5px;

  color: ${t.colors.primaryColor};

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: 3.4rem;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: 3.8rem;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.xl}) {
    font-size: 5rem;
  }
`,w=r.span`
  font-weight: 700;
  font-size: 1.6rem;

  letter-spacing: -0.5px;

  color: ${t.colors.primaryColor};

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: 1.8rem;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: 2rem;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.xl}) {
    font-size: 2.4rem;
  }
`,b=r.span`
  font-weight: 400;
  font-size: 1.4rem;
  letter-spacing: -0.5px;

  color: ${t.colors.primaryColor};

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: 1.6rem;
  }
`;function a({name:e,discountValue:m,condition:o,selected:d,type:i,onCouponSelect:s}){const l=()=>o>0?`${u(o)}원 이상 결제 시`:"모든 금액 사용 가능",c=()=>i==="delivery"?"배달비 무료!":h(m),p=()=>{if(i!=="delivery")return i==="percent"?"%":"원"};return n.jsxs(f,{onClick:s,selected:d,children:[n.jsx(g,{children:e}),n.jsxs("div",{children:[n.jsx(x,{children:c()}),n.jsx(w,{children:p()})]}),n.jsx(b,{children:l()})]})}try{a.displayName="CouponItem",a.__docgenInfo={description:"",displayName:"CouponItem",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},discountValue:{defaultValue:null,description:"",name:"discountValue",required:!0,type:{name:"number"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"percent"'},{value:'"price"'},{value:'"delivery"'}]}},condition:{defaultValue:null,description:"",name:"condition",required:!0,type:{name:"number"}},selected:{defaultValue:null,description:"",name:"selected",required:!0,type:{name:"boolean"}},onCouponSelect:{defaultValue:null,description:"",name:"onCouponSelect",required:!0,type:{name:"() => void"}}}}}catch{}export{a as C};
//# sourceMappingURL=CouponItem-c942f715.js.map
