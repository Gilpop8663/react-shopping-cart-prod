import{i as r,j as t}from"./styled-components.browser.esm-aaaef0f3.js";import{C as h}from"./CartQuantityField-0bb7b70e.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-1034d202.js";import"./index-8ce4a492.js";import"./cartState-d3d4196c.js";try{CartQuantityField.displayName="CartQuantityField",CartQuantityField.__docgenInfo={description:"",displayName:"CartQuantityField",props:{product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"ProductItemType"}}}}}catch{}const f=r.div`
  /*  height: 350px; */
  padding: 8px;
`,y=r.div`
  display: flex;
  justify-content: center;
  position: relative;
  transition: ${e=>e.theme.transitions.default};

  &:hover {
    transform: ${({theme:e})=>e.effects.hoverScale};
  }
`,x=r.img`
  width: 90%;
  aspect-ratio: 1/1;
  border-radius: 8px;
  box-shadow: ${e=>e.theme.shadows.large};

  object-fit: cover;
`,_=r.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  height: 10rem;

  align-items: center;
`,v=r.div`
  font-size: 1.6rem;
  margin: 0.5rem 0;
  width: 100%;

  /* TODO: 변수표현해볼것 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,I=r.div`
  font-size: 2rem;
  margin: 0.5rem 0;
`,P=r.div`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;function a({product:e}){const{name:l,price:u,imageUrl:g}=e;return t.jsxs(f,{children:[t.jsx(y,{children:t.jsx(x,{src:g})}),t.jsxs(_,{children:[t.jsxs(P,{children:[t.jsx(v,{children:l}),t.jsxs(I,{children:[u.toLocaleString("ko-KR"),"원"]})]}),t.jsx(h,{product:e})]})]})}try{a.displayName="ProductItem",a.__docgenInfo={description:"",displayName:"ProductItem",props:{product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"ProductItemType"}}}}}catch{}const O={component:a,title:"ProductItem"},o={args:{product:{id:1,name:"귀여운 고양이",price:1e8,imageUrl:"https://placekitten.com/300/300"}}},i={args:{product:{id:2,name:"매서운 강아지",price:1324e6,imageUrl:"https://placedog.net/300/300"}}};var n,s,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    product: {
      id: 1,
      name: '귀여운 고양이',
      price: 100000000,
      imageUrl: 'https://placekitten.com/300/300'
    }
  }
} satisfies Story`,...(c=(s=o.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var d,p,m;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    product: {
      id: 2,
      name: '매서운 강아지',
      price: 1324000000,
      imageUrl: 'https://placedog.net/300/300'
    }
  }
} satisfies Story`,...(m=(p=i.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const U=["QuantityZero","QuantityOverZero"];export{i as QuantityOverZero,o as QuantityZero,U as __namedExportsOrder,O as default};
//# sourceMappingURL=ProductItem.stories-c039e169.js.map
