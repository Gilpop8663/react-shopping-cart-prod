import{i as s,j as e}from"./styled-components.browser.esm-aaaef0f3.js";import{t as n}from"./theme-cf2b1b34.js";const l=s.h3`
  border: 1px solid ${n.colors.secondaryColor};
  padding: 3rem;

  font-weight: 700;
  font-size: 2rem;

  letter-spacing: 0.5px;

  color: ${n.colors.primaryColor};
  background: ${n.colors.grayColor};

  @media screen and (min-width: ${({theme:r})=>r.breakpoints.md}) {
    font-size: 2.4rem;
  }

  @media screen and (min-width: ${({theme:r})=>r.breakpoints.lg}) {
    font-size: 2.8rem;
  }
`,m=s.div`
  display: flex;
  flex-direction: column;

  padding: 4rem 3rem;
  border: 1px solid ${n.colors.secondaryColor};

  gap: 3rem;
`,o=s.div`
  display: flex;
  justify-content: space-between;

  font-weight: 700;
  font-size: 2.4rem;

  letter-spacing: 0.5px;

  color: ${n.colors.primaryColor};
  background: ${n.colors.lightColor};

  @media screen and (min-width: ${({theme:r})=>r.breakpoints.sm}) {
    font-size: 2rem;
  }

  @media screen and (min-width: ${({theme:r})=>r.breakpoints.md}) {
    font-size: 2.4rem;
  }

  @media screen and (min-width: ${({theme:r})=>r.breakpoints.lg}) {
    font-size: 2.8rem;
  }
`,c=s(o)`
  border-top: 2px solid ${n.colors.secondaryColor};
  padding-top: 4rem;
`;function d({totalItemsPrice:r,deliveryFee:t,discountPrice:i}){const a=r+t-i;return e.jsxs("div",{children:[e.jsx(l,{children:"결제금액 정보"}),e.jsxs(m,{children:[e.jsxs(o,{children:[e.jsx("span",{children:"상품가격"}),e.jsxs("span",{children:[r,"원"]})]}),e.jsxs(o,{children:[e.jsx("span",{children:"배송비"}),e.jsxs("span",{children:[t,"원"]})]}),e.jsxs(o,{children:[e.jsx("span",{children:"할인 금액"}),e.jsxs("span",{children:["-",i,"원"]})]}),e.jsxs(c,{children:[e.jsx("span",{children:"총 결제금액"}),e.jsxs("span",{children:[a,"원"]})]})]})]})}try{d.displayName="OrderPaymentAmount",d.__docgenInfo={description:"",displayName:"OrderPaymentAmount",props:{totalItemsPrice:{defaultValue:null,description:"",name:"totalItemsPrice",required:!0,type:{name:"number"}},deliveryFee:{defaultValue:null,description:"",name:"deliveryFee",required:!0,type:{name:"number"}},discountPrice:{defaultValue:null,description:"",name:"discountPrice",required:!0,type:{name:"number"}}}}}catch{}export{d as O};
//# sourceMappingURL=index-bedfe2dc.js.map
