import{i as r,j as e}from"./styled-components.browser.esm-aaaef0f3.js";import{t as i}from"./theme-cf2b1b34.js";const s=r.div`
  display: flex;

  height: 22rem;

  padding: 4rem 2.6rem;
  border: 1px solid ${i.colors.secondaryColor};
`,m=r.img`
  height: 100%;

  margin-right: 3.3rem;

  aspect-ratio: 1/1;
  object-fit: cover;
`,c=r.div`
  display: flex;
  flex-direction: column;
`,d=r.h3`
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.4rem;
  letter-spacing: 0.5px;

  color: ${i.colors.primaryColor};
`,p=r.span`
  margin-top: 1.2rem;

  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2rem;
  letter-spacing: 0.5px;

  color: ${i.colors.grayInfoColor};
`;function n({name:t,imageUrl:o,price:a,quantity:l}){return e.jsxs(s,{children:[e.jsx(m,{src:o,alt:`주문한 ${t} 이미지`}),e.jsxs(c,{children:[e.jsx(d,{children:t}),e.jsxs(p,{children:[a,"원 / 수량 : ",l,"개"]})]})]})}try{n.displayName="OrderItemInfo",n.__docgenInfo={description:"",displayName:"OrderItemInfo",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},imageUrl:{defaultValue:null,description:"",name:"imageUrl",required:!0,type:{name:"string"}},price:{defaultValue:null,description:"",name:"price",required:!0,type:{name:"number"}},quantity:{defaultValue:null,description:"",name:"quantity",required:!0,type:{name:"number"}}}}}catch{}export{n as O};
//# sourceMappingURL=OrderItemInfo-1abee2ae.js.map
