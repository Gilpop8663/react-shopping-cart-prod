import{t as a,M as d}from"./theme-03678771.js";import{i as r,j as e}from"./styled-components.browser.esm-aaaef0f3.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8db94870.js";const u=r.div`
  display: flex;

  height: 22rem;

  padding: 4rem 2.6rem;
  border: 1px solid ${a.colors.secondaryColor};
`,g=r.img`
  height: 100%;

  margin-right: 3.3rem;

  object-fit: cover;
`,f=r.div`
  display: flex;
  flex-direction: column;
`,h=r.h3`
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.4rem;
  letter-spacing: 0.5px;

  color: ${a.colors.primaryColor};
`,y=r.span`
  margin-top: 1.2rem;

  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2rem;
  letter-spacing: 0.5px;

  color: ${a.colors.grayInfoColor};
`;function i({name:n,imageUrl:l,price:c,quantity:p}){return e.jsxs(u,{children:[e.jsx(g,{src:l,alt:`주문한 ${n} 이미지`}),e.jsxs(f,{children:[e.jsx(h,{children:n}),e.jsxs(y,{children:[c,"원 / 수량 : ",p,"개"]})]})]})}try{i.displayName="OrderItemInfo",i.__docgenInfo={description:"",displayName:"OrderItemInfo",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},imageUrl:{defaultValue:null,description:"",name:"imageUrl",required:!0,type:{name:"string"}},price:{defaultValue:null,description:"",name:"price",required:!0,type:{name:"number"}},quantity:{defaultValue:null,description:"",name:"quantity",required:!0,type:{name:"number"}}}}}catch{}const C={component:i,title:"OrderItemInfo"},t={args:{name:"친환경 실링용기-ECO 19153",imageUrl:d[0].imageUrl,price:180600,quantity:3}};var o,s,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    name: '친환경 실링용기-ECO 19153',
    imageUrl: MOCK_PRODUCT_LIST[0].imageUrl,
    price: 180600,
    quantity: 3
  }
}`,...(m=(s=t.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const j=["Default"];export{t as Default,j as __namedExportsOrder,C as default};
//# sourceMappingURL=OrderItemInfo.stories-27b674cb.js.map
