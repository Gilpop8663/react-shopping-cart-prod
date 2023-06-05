import{i as n,j as e}from"./styled-components.browser.esm-aaaef0f3.js";import{B as c}from"./index-a09c039b.js";import{t as o}from"./theme-cf2b1b34.js";const g=n.div`
  column-gap: 1rem;
  width: 90%;
  margin: 1rem;
  background-color: ${({theme:r})=>r.colors.primaryColor};
  border: ${({theme:r})=>r.colors.primaryColor} 1px solid;
  color: ${({theme:r})=>r.colors.lightColor};

  padding: 2rem 1.5rem;
  border-radius: 8px;
  justify-content: start;
`,p=n.div`
  display: flex;
  flex: 50px;
  flex-direction: column;
  justify-content: start;
`,m=n.h3`
  border: 1px solid ${o.colors.secondaryColor};
  padding: 3rem;

  font-weight: 700;
  font-size: 2.8rem;
  line-height: 2.8rem;

  letter-spacing: 0.5px;

  color: ${o.colors.primaryColor};
  background: ${o.colors.grayColor};
`,u=n.div`
  display: flex;
  flex-direction: column;

  padding: 4rem 3rem;
  border: 1px solid ${o.colors.secondaryColor};

  gap: 3rem;
`,t=n.div`
  display: flex;
  justify-content: space-between;

  font-weight: 700;
  font-size: 2.4rem;
  line-height: 2.4rem;

  letter-spacing: 0.5px;

  color: ${o.colors.primaryColor};
  background: ${o.colors.lightColor};
`,x=n(t)`
  border-top: 2px solid ${o.colors.secondaryColor};
  padding-top: 4rem;
`;function l({totalItemsPrice:r,deliveryFee:i,discountPrice:s,onOrderClick:a}){const d=r+i-s;return e.jsxs(p,{children:[e.jsx(m,{children:"결제예상금액"}),e.jsxs(u,{children:[e.jsxs(t,{children:[e.jsx("span",{children:"상품가격"}),e.jsxs("span",{children:[r,"원"]})]}),e.jsxs(t,{children:[e.jsx("span",{children:"배송비"}),e.jsxs("span",{children:[i,"원"]})]}),e.jsxs(t,{children:[e.jsx("span",{children:"할인 금액"}),e.jsxs("span",{children:["-",s,"원"]})]}),e.jsxs(x,{children:[e.jsx("span",{children:"총 주문금액"}),e.jsxs("span",{children:[d,"원"]})]}),e.jsx(c,{text:"주문하기",disabled:r===0,onClick:a})]})]})}try{l.displayName="ExpectedPayment",l.__docgenInfo={description:"",displayName:"ExpectedPayment",props:{totalItemsPrice:{defaultValue:null,description:"",name:"totalItemsPrice",required:!0,type:{name:"number"}},deliveryFee:{defaultValue:null,description:"",name:"deliveryFee",required:!0,type:{name:"number"}},discountPrice:{defaultValue:null,description:"",name:"discountPrice",required:!0,type:{name:"number"}},onOrderClick:{defaultValue:null,description:"",name:"onOrderClick",required:!0,type:{name:"() => void"}}}}}catch{}export{l as E,g as P,p as a};
//# sourceMappingURL=index-57ceba2c.js.map
