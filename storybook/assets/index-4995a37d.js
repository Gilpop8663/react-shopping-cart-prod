import{i as o,j as e}from"./styled-components.browser.esm-aaaef0f3.js";import{t as r}from"./theme-cf2b1b34.js";const d=o.h3`
  border: 1px solid ${r.colors.secondaryColor};
  padding: 3rem;

  font-weight: 700;
  font-size: 2.8rem;
  line-height: 2.8rem;

  letter-spacing: 0.5px;

  color: ${r.colors.primaryColor};
  background: ${r.colors.grayColor};
`,c=o.div`
  display: flex;
  flex-direction: column;

  padding: 4rem 3rem;
  border: 1px solid ${r.colors.secondaryColor};

  gap: 3rem;
`,n=o.div`
  display: flex;
  justify-content: space-between;

  font-weight: 700;
  font-size: 2.4rem;
  line-height: 2.4rem;

  letter-spacing: 0.5px;

  color: ${r.colors.primaryColor};
  background: ${r.colors.lightColor};
`,p=o(n)`
  border-top: 2px solid ${r.colors.secondaryColor};
  padding-top: 4rem;
`;function l({totalItemsPrice:s,deliveryFee:t,discountPrice:i}){const a=s+t-i;return e.jsxs("div",{children:[e.jsx(d,{children:"결제금액 정보"}),e.jsxs(c,{children:[e.jsxs(n,{children:[e.jsx("span",{children:"상품가격"}),e.jsxs("span",{children:[s,"원"]})]}),e.jsxs(n,{children:[e.jsx("span",{children:"배송비"}),e.jsxs("span",{children:[t,"원"]})]}),e.jsxs(n,{children:[e.jsx("span",{children:"할인 금액"}),e.jsxs("span",{children:["-",i,"원"]})]}),e.jsxs(p,{children:[e.jsx("span",{children:"총 결제금액"}),e.jsxs("span",{children:[a,"원"]})]})]})]})}try{l.displayName="OrderPaymentAmount",l.__docgenInfo={description:"",displayName:"OrderPaymentAmount",props:{totalItemsPrice:{defaultValue:null,description:"",name:"totalItemsPrice",required:!0,type:{name:"number"}},deliveryFee:{defaultValue:null,description:"",name:"deliveryFee",required:!0,type:{name:"number"}},discountPrice:{defaultValue:null,description:"",name:"discountPrice",required:!0,type:{name:"number"}}}}}catch{}export{l as O};
//# sourceMappingURL=index-4995a37d.js.map
