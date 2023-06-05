import{i as t,j as r}from"./styled-components.browser.esm-aaaef0f3.js";import{b as m,c as f}from"./common-a48b2eb5.js";import{t as e}from"./theme-cf2b1b34.js";const g=t.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 44rem;
  height: 24rem;

  border: ${({selected:o})=>o?`3px solid ${e.colors.dangerColor} `:`1px solid ${e.colors.primaryColor}`};
  padding: 2.5rem 3rem;
  gap: 1rem;

  background: ${e.colors.lightColor};
  box-shadow: ${e.shadows.default};

  cursor: pointer;
`,h=t.h3`
  font-weight: 700;
  font-size: 2.8rem;
  line-height: 4rem;

  letter-spacing: -0.5px;

  color: ${e.colors.primaryColor};
`,x=t.span`
  font-weight: 700;
  font-size: 6rem;

  letter-spacing: -0.5px;

  color: ${e.colors.primaryColor};
`,y=t.span`
  font-weight: 700;
  font-size: 3rem;
  line-height: 8.5rem;

  letter-spacing: -0.5px;

  color: ${e.colors.primaryColor};
`,C=t.span`
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2.6rem;
  letter-spacing: -0.5px;

  color: ${e.colors.primaryColor};
`;function l({name:o,discountValue:a,condition:i,selected:s,type:n,onCouponSelect:u}){const c=()=>i>0?`${m(i)}원 이상 결제 시`:"모든 금액 사용 가능",d=()=>n==="delivery"?"배달비 무료!":f(a),p=()=>{if(n!=="delivery")return n==="percent"?"%":"원"};return r.jsxs(g,{onClick:u,selected:s,children:[r.jsx(h,{children:o}),r.jsxs("div",{children:[r.jsx(x,{children:d()}),r.jsx(y,{children:p()})]}),r.jsx(C,{children:c()})]})}try{l.displayName="CouponItem",l.__docgenInfo={description:"",displayName:"CouponItem",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},discountValue:{defaultValue:null,description:"",name:"discountValue",required:!0,type:{name:"number"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"percent"'},{value:'"price"'},{value:'"delivery"'}]}},condition:{defaultValue:null,description:"",name:"condition",required:!0,type:{name:"number"}},selected:{defaultValue:null,description:"",name:"selected",required:!0,type:{name:"boolean"}},onCouponSelect:{defaultValue:null,description:"",name:"onCouponSelect",required:!0,type:{name:"() => void"}}}}}catch{}export{l as C};
//# sourceMappingURL=CouponItem-3b870ea5.js.map
