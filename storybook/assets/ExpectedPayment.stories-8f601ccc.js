import{i as t,j as e}from"./styled-components.browser.esm-aaaef0f3.js";import{B as b}from"./index-a09c039b.js";import{t as o}from"./theme-cf2b1b34.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";t.div`
  column-gap: 1rem;
  width: 90%;
  margin: 1rem;
  background-color: ${({theme:r})=>r.colors.primaryColor};
  border: ${({theme:r})=>r.colors.primaryColor} 1px solid;
  color: ${({theme:r})=>r.colors.lightColor};

  padding: 2rem 1.5rem;
  border-radius: 8px;
  justify-content: start;
`;const v=t.div`
  display: flex;
  flex: 50px;
  flex-direction: column;
  justify-content: start;
`,C=t.h3`
  border: 1px solid ${o.colors.secondaryColor};
  padding: 3rem;

  font-weight: 700;
  font-size: 2.8rem;
  line-height: 2.8rem;

  letter-spacing: 0.5px;

  color: ${o.colors.primaryColor};
  background: ${o.colors.grayColor};
`,_=t.div`
  display: flex;
  flex-direction: column;

  padding: 4rem 3rem;
  border: 1px solid ${o.colors.secondaryColor};

  gap: 3rem;
`,a=t.div`
  display: flex;
  justify-content: space-between;

  font-weight: 700;
  font-size: 2.4rem;
  line-height: 2.4rem;

  letter-spacing: 0.5px;

  color: ${o.colors.primaryColor};
  background: ${o.colors.lightColor};
`,$=t(a)`
  border-top: 2px solid ${o.colors.secondaryColor};
  padding-top: 4rem;
`;function c({totalItemsPrice:r,deliveryFee:l,discountPrice:d}){const P=r+l-d;return e.jsxs(v,{children:[e.jsx(C,{children:"결제예상금액"}),e.jsxs(_,{children:[e.jsxs(a,{children:[e.jsx("span",{children:"상품가격"}),e.jsxs("span",{children:[r,"원"]})]}),e.jsxs(a,{children:[e.jsx("span",{children:"배송비"}),e.jsxs("span",{children:[l,"원"]})]}),e.jsxs(a,{children:[e.jsx("span",{children:"할인 금액"}),e.jsxs("span",{children:["-",d,"원"]})]}),e.jsxs($,{children:[e.jsx("span",{children:"총 주문금액"}),e.jsxs("span",{children:[P,"원"]})]}),e.jsx(b,{text:"주문하기",disabled:r===0})]})]})}try{c.displayName="ExpectedPayment",c.__docgenInfo={description:"",displayName:"ExpectedPayment",props:{totalItemsPrice:{defaultValue:null,description:"",name:"totalItemsPrice",required:!0,type:{name:"number"}},deliveryFee:{defaultValue:null,description:"",name:"deliveryFee",required:!0,type:{name:"number"}},discountPrice:{defaultValue:null,description:"",name:"discountPrice",required:!0,type:{name:"number"}}}}}catch{}const k={component:c,title:"ExpectedPayment"},s={args:{totalItemsPrice:3e4,deliveryFee:3e3,discountPrice:0}},n={args:{totalItemsPrice:3e4,deliveryFee:3e3,discountPrice:3e3}},i={args:{totalItemsPrice:0,deliveryFee:0,discountPrice:0}};var p,m,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    totalItemsPrice: 30000,
    deliveryFee: 3000,
    discountPrice: 0
  }
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    totalItemsPrice: 30000,
    deliveryFee: 3000,
    discountPrice: 3000
  }
}`,...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var h,f,j;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    totalItemsPrice: 0,
    deliveryFee: 0,
    discountPrice: 0
  }
}`,...(j=(f=i.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const q=["Default","Discount","Empty"];export{s as Default,n as Discount,i as Empty,q as __namedExportsOrder,k as default};
//# sourceMappingURL=ExpectedPayment.stories-8f601ccc.js.map
