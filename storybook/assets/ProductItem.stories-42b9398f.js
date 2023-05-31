import{i as r,j as t}from"./styled-components.browser.esm-aaaef0f3.js";import{C as h}from"./index-8efc5c88.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-cfc35cc2.js";import"./index-8ce4a492.js";import"./fetchCart-d222eaeb.js";const f=r.div`
  /*  height: 350px; */
  padding: 8px;
`,x=r.div`
  display: flex;
  justify-content: center;
  position: relative;
  transition: ${e=>e.theme.transitions.default};

  &:hover {
    transform: ${({theme:e})=>e.effects.hoverScale};
  }
`,y=r.img`
  width: 90%;
  aspect-ratio: 1/1;
  border-radius: 8px;
  box-shadow: ${e=>e.theme.shadows.large};

  object-fit: cover;
`,v=r.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  height: 10rem;

  align-items: center;
`,j=r.div`
  font-size: 1.6rem;
  margin: 0.5rem 0;
  width: 100%;

  /* TODO: 변수표현해볼것 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,w=r.div`
  font-size: 2rem;
  margin: 0.5rem 0;
`,P=r.div`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;function s({product:e}){const{name:l,price:u,imageUrl:g}=e;return t.jsxs(f,{children:[t.jsx(x,{children:t.jsx(y,{src:g})}),t.jsxs(v,{children:[t.jsxs(P,{children:[t.jsx(j,{children:l}),t.jsxs(w,{children:[u.toLocaleString("ko-KR"),"원"]})]}),t.jsx(h,{product:e})]})]})}try{s.displayName="ProductItem",s.__docgenInfo={description:"",displayName:"ProductItem",props:{product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"ProductItemType"}}}}}catch{}const Z={component:s,title:"ProductItem"},o={args:{product:{id:1,name:"귀여운 고양이",price:1e8,imageUrl:"https://placekitten.com/300/300"}}},i={args:{product:{id:2,name:"매서운 강아지",price:1324e6,imageUrl:"https://placedog.net/300/300"}}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    product: {
      id: 1,
      name: '귀여운 고양이',
      price: 100000000,
      imageUrl: 'https://placekitten.com/300/300'
    }
  }
} satisfies Story`,...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var d,p,m;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    product: {
      id: 2,
      name: '매서운 강아지',
      price: 1324000000,
      imageUrl: 'https://placedog.net/300/300'
    }
  }
} satisfies Story`,...(m=(p=i.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const k=["QuantityZero","QuantityOverZero"];export{i as QuantityOverZero,o as QuantityZero,k as __namedExportsOrder,Z as default};
//# sourceMappingURL=ProductItem.stories-42b9398f.js.map
