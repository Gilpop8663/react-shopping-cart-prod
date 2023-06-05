import{i as n,j as e}from"./styled-components.browser.esm-aaaef0f3.js";import{B as s}from"./index-a09c039b.js";import{t as o}from"./theme-cf2b1b34.js";const d=n.h3`
  border: 1px solid ${o.colors.secondaryColor};
  padding: 3rem;

  font-weight: 700;
  font-size: 2.8rem;
  line-height: 2.8rem;

  letter-spacing: 0.5px;

  color: ${o.colors.primaryColor};
  background: ${o.colors.grayColor};
`,p=n.div`
  display: flex;
  flex-direction: column;

  padding: 4rem 3rem;
  border: 1px solid ${o.colors.secondaryColor};
`,c=n.div`
  margin-bottom: 2rem;

  font-weight: 400;
  font-size: 2.4rem;
  line-height: 3.5rem;

  color: ${o.colors.primaryColor};
`;function i({availableCouponLength:r,onCouponModalOpen:l,selectedCoupon:t}){const a=()=>t?`${t.name}이 적용되었습니다.`:r>0?"사용 가능한 쿠폰이 있습니다. 쿠폰을 적용하시겠어요?":"현재 사용 가능한 쿠폰이 없습니다.";return e.jsxs("div",{children:[e.jsxs(d,{children:["쿠폰 (사용 가능한 쿠폰 ",r,"개)"]}),e.jsxs(p,{children:[e.jsx(c,{children:a()}),e.jsx(s,{onClick:l,text:"쿠폰 선택",disabled:r===0})]})]})}try{i.displayName="CartCouponSelect",i.__docgenInfo={description:"",displayName:"CartCouponSelect",props:{availableCouponLength:{defaultValue:null,description:"",name:"availableCouponLength",required:!0,type:{name:"number"}},onCouponModalOpen:{defaultValue:null,description:"",name:"onCouponModalOpen",required:!0,type:{name:"() => void"}},selectedCoupon:{defaultValue:null,description:"",name:"selectedCoupon",required:!0,type:{name:"CouponType | null"}}}}}catch{}export{i as C};
//# sourceMappingURL=index-fc5ca4cd.js.map
