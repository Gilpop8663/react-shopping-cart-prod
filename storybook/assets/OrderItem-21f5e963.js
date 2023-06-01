import{i as n,j as e}from"./styled-components.browser.esm-aaaef0f3.js";import{L as a}from"./index-df70641f.js";import{t}from"./theme-cf2b1b34.js";import{O as d}from"./OrderItemInfo-1abee2ae.js";const l=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 9.2rem;

  padding: 3.6rem 2.5rem 3.6rem 4rem;
  border: 1px solid ${t.colors.secondaryColor};

  font-weight: 400;
  font-size: 2rem;
  line-height: 2.4rem;

  letter-spacing: 0.5px;

  color: ${t.colors.primaryColor};
  background: ${t.colors.grayColor};
`;function o({order:r,isDetail:i}){return e.jsxs("div",{children:[e.jsxs(l,{children:[e.jsxs("span",{children:["주문번호: ",r.id]}),i&&e.jsxs(a,{to:`${r.id}`,children:["상세보기 ",">"]})]}),r.orderItems.map(s=>e.jsx(d,{...s}))]})}try{o.displayName="OrderItem",o.__docgenInfo={description:"",displayName:"OrderItem",props:{order:{defaultValue:null,description:"",name:"order",required:!0,type:{name:"OrderType"}},isDetail:{defaultValue:null,description:"",name:"isDetail",required:!0,type:{name:"boolean"}}}}}catch{}export{o as O};
//# sourceMappingURL=OrderItem-21f5e963.js.map
