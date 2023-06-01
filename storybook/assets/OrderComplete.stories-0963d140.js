import{i as r,j as e}from"./styled-components.browser.esm-aaaef0f3.js";import{B as m}from"./index-a09c039b.js";import{L as C}from"./index-b4608bf0.js";import{O as I}from"./index-c18acebd.js";import{g as z}from"./common-a0d21cb2.js";import{t}from"./theme-cf2b1b34.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-550630fc.js";import"./index-cfc35cc2.js";import"./index-8ce4a492.js";import"./fetchCart-d222eaeb.js";import"./index-5907bbe8.js";import"./index-3388ab67.js";const f=r.div`
  display: flex;
  justify-content: center;

  padding: 8rem 0;

  font-size: 3rem;
  line-height: 3.7rem;
  letter-spacing: 0.5px;

  color: ${t.colors.primaryColor};
`,P=r.span`
  font-weight: 700;
`,v=r.span`
  font-weight: 400;
`,_=r.div`
  display: flex;
  justify-content: center;

  margin-bottom: 12rem;
  gap: 10rem;
`,g=r.h3`
  padding-bottom: 3.6rem;
  border-bottom: 1px solid ${t.colors.primaryColor};

  font-weight: 700;
  font-size: 4rem;

  letter-spacing: 0.5px;

  color: ${t.colors.primaryColor};
`,O=r(f)`
  justify-content: start;
  border-bottom: 1px solid ${t.colors.primaryColor};
`,N=r.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`,c=r.div`
  padding: 4rem 0;
`,p=r(g)`
  padding: none;
  border-bottom: none;
`,w=r.div`
  display: flex;
  flex-direction: column;

  padding-left: 4rem;
  border-left: 1px solid ${t.colors.primaryColor};

  gap: 2rem;
`,j=r.div`
  display: flex;

  font-weight: 400;
  font-size: 2.4rem;
  line-height: 3.7rem;
  letter-spacing: 0.5px;

  color: ${t.colors.primaryColor};
`,$=r(j)`
  gap: 5rem;
`,n=r(j)`
  justify-content: space-between;

  gap: 5rem;
  &:nth-child(3) {
    padding-bottom: 5rem;
    border-bottom: 1px solid ${t.colors.primaryColor};
  }
`,q=r(n)`
  font-weight: 700;
  font-size: 3rem;
  line-height: 3.7rem;
`;function s({userName:i,orderItemsCount:y,totalItemsPrice:a,deliveryFee:l,discountPrice:d}){const b=a+l-d;return e.jsxs(C,{children:[e.jsx(I,{text:"주문완료"}),e.jsxs(f,{children:[e.jsx(P,{children:"주문이 완료"}),e.jsx(v,{children:"되었습니다. 감사합니다!"})]}),e.jsxs(_,{children:[e.jsx(m,{text:"홈으로"}),e.jsx(m,{text:"주문내역"})]}),e.jsx(g,{children:"상품배송 정보"}),e.jsxs(O,{children:[z(new Date().getTime())," 도착 예정 (상품 ",y,"개)"," "]}),e.jsxs(N,{children:[e.jsxs(c,{children:[e.jsx(p,{children:"받는 사람 정보"}),e.jsx("div",{children:e.jsxs($,{children:[e.jsx("span",{children:"받는사람"}),e.jsx("span",{children:i})]})})]}),e.jsxs(c,{children:[e.jsx(p,{children:"결제 정보"}),e.jsxs(w,{children:[e.jsxs(n,{children:[e.jsx("span",{children:"상품가격"}),e.jsxs("span",{children:[a,"원"]})]}),e.jsxs(n,{children:[e.jsx("span",{children:"배송비"}),e.jsxs("span",{children:[l,"원"]})]}),e.jsxs(n,{children:[e.jsx("span",{children:"할인 금액"}),e.jsxs("span",{children:["-",d,"원"]})]}),e.jsxs(q,{children:[e.jsx("span",{children:"총 결제금액"}),e.jsxs("span",{children:[b,"원"]})]})]})]})]})]})}try{s.displayName="OrderComplete",s.__docgenInfo={description:"",displayName:"OrderComplete",props:{userName:{defaultValue:null,description:"",name:"userName",required:!0,type:{name:"string"}},orderItemsCount:{defaultValue:null,description:"",name:"orderItemsCount",required:!0,type:{name:"number"}},totalItemsPrice:{defaultValue:null,description:"",name:"totalItemsPrice",required:!0,type:{name:"number"}},deliveryFee:{defaultValue:null,description:"",name:"deliveryFee",required:!0,type:{name:"number"}},discountPrice:{defaultValue:null,description:"",name:"discountPrice",required:!0,type:{name:"number"}}}}}catch{}const G={component:s,title:"Pages"},o={args:{userName:"pizza1@pizza.com",orderItemsCount:3,totalItemsPrice:304e3,deliveryFee:3e3,discountPrice:2e3}};var u,x,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    userName: 'pizza1@pizza.com',
    orderItemsCount: 3,
    totalItemsPrice: 304000,
    deliveryFee: 3000,
    discountPrice: 2000
  }
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const J=["OrderCompletePage"];export{o as OrderCompletePage,J as __namedExportsOrder,G as default};
//# sourceMappingURL=OrderComplete.stories-0963d140.js.map
