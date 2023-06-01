import{i as a,j as r}from"./styled-components.browser.esm-aaaef0f3.js";import{B as g}from"./index-a09c039b.js";import{t as e}from"./theme-cf2b1b34.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const f=a.h3`
  border: 1px solid ${e.colors.secondaryColor};
  padding: 3rem;

  font-weight: 700;
  font-size: 2.8rem;
  line-height: 2.8rem;

  letter-spacing: 0.5px;

  color: ${e.colors.primaryColor};
  background: ${e.colors.grayColor};
`,x=a.div`
  display: flex;
  flex-direction: column;

  padding: 4rem 3rem;
  border: 1px solid ${e.colors.secondaryColor};
`,c=a.div`
  margin-bottom: 2rem;

  font-weight: 400;
  font-size: 2.4rem;
  line-height: 3.5rem;

  color: ${e.colors.primaryColor};
`;function n({coupons:o}){return r.jsxs("div",{children:[r.jsxs(f,{children:["쿠폰 (사용 가능한 쿠폰 ",o,"개)"]}),r.jsxs(x,{children:[o===0&&r.jsx(c,{children:"현재 사용 가능한 쿠폰이 없습니다."}),o>0&&r.jsx(c,{children:"사용 가능한 쿠폰이 있습니다. 쿠폰을 적용하시겠어요?"}),r.jsx(g,{text:"쿠폰 선택",disabled:o===0})]})]})}try{n.displayName="CartCouponSelect",n.__docgenInfo={description:"",displayName:"CartCouponSelect",props:{coupons:{defaultValue:null,description:"",name:"coupons",required:!0,type:{name:"number"}}}}}catch{}const b={component:n,title:"CartCouponSelect"},t={args:{coupons:3}},s={args:{coupons:0}};var i,p,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    coupons: 3
  }
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var m,d,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    coupons: 0
  }
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const S=["Default","Empty"];export{t as Default,s as Empty,S as __namedExportsOrder,b as default};
//# sourceMappingURL=CartCouponSelect.stories-3955cdf8.js.map
