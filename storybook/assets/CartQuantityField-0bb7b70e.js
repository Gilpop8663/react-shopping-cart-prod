import{i as s,j as i}from"./styled-components.browser.esm-aaaef0f3.js";import{a as f,b as x,c as _}from"./index-1034d202.js";import{c as d,p as h}from"./cartState-d3d4196c.js";const I=0,g=99,q=f({key:"cartItemQuantityState",get:e=>({get:o})=>{const a=o(d);if(a.length===0)return{quantity:0,cartId:0};const t=a.filter(r=>r.product.id===e)[0];return t?{cartId:t.id,quantity:t.quantity}:{cartId:0,quantity:0}},set:e=>({get:o,set:a},t)=>{if(t instanceof x)return;const r=o(d),{cartId:l,quantity:u}=t;if(u<g&&u>=I){if(!r.some(c=>c.id===l)){if(u===0)return;const c=o(h).filter(n=>n.id===e)[0];a(d,n=>[...n,{id:l,quantity:u,checked:!0,product:c}]);return}if(u===0){a(d,c=>c.filter(n=>n.id!==l));return}a(d,c=>c.map(n=>n.id===l?{...n,quantity:u}:n));return}}}),C=e=>_(q(e)),b=s.div`
  display: flex;
  height: 28px;
`,v=s.input`
  height: 28px;
  width: 42px;
  padding: 0px 5px;
  border: 1px solid ${({theme:e})=>e.secondaryColor};

  &:focus {
    outline: 2px solid ${({theme:e})=>e.infoColor};
  }
`,y=s.button`
  height: 14px;
  width: 24px;
  padding: 0px;
  border: 1px solid ${({theme:e})=>e.secondaryColor};
  line-height: 0px;
`,L=s.div`
  display: flex;
  flex-direction: column;
`;function p({quantity:e,onIncrease:o,onDecrease:a,onChange:t,ariaIncreaseLabel:r,ariaDecreaseLabel:l}){return i.jsxs(b,{children:[i.jsx(v,{"data-testid":"quantity-input",value:e,onChange:t}),i.jsxs(L,{children:[i.jsx(y,{onClick:o,"aria-label":r,role:"increase",children:"⏶"}),i.jsx(y,{onClick:a,"aria-label":l,role:"decrease",children:"⏷"})]})]})}try{p.displayName="Stepper",p.__docgenInfo={description:"",displayName:"Stepper",props:{quantity:{defaultValue:null,description:"",name:"quantity",required:!0,type:{name:"number"}},onIncrease:{defaultValue:null,description:"",name:"onIncrease",required:!0,type:{name:"() => void"}},onDecrease:{defaultValue:null,description:"",name:"onDecrease",required:!0,type:{name:"() => void"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}},ariaIncreaseLabel:{defaultValue:null,description:"",name:"ariaIncreaseLabel",required:!1,type:{name:"string"}},ariaDecreaseLabel:{defaultValue:null,description:"",name:"ariaDecreaseLabel",required:!1,type:{name:"string"}}}}}catch{}try{Stepper.displayName="Stepper",Stepper.__docgenInfo={description:"",displayName:"Stepper",props:{quantity:{defaultValue:null,description:"",name:"quantity",required:!0,type:{name:"number"}},onIncrease:{defaultValue:null,description:"",name:"onIncrease",required:!0,type:{name:"() => void"}},onDecrease:{defaultValue:null,description:"",name:"onDecrease",required:!0,type:{name:"() => void"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}},ariaIncreaseLabel:{defaultValue:null,description:"",name:"ariaIncreaseLabel",required:!1,type:{name:"string"}},ariaDecreaseLabel:{defaultValue:null,description:"",name:"ariaDecreaseLabel",required:!1,type:{name:"string"}}}}}catch{}const Q=""+new URL("cart-c412e74f.svg",import.meta.url).href,V=s.div`
  display: flex;
  align-items: start;
`,j=s.button`
  width: 25px;
  height: 20px;
`;function m({product:e}){const[o,a]=C(e.id),{quantity:t,cartId:r}=o,l=t>0;return i.jsx(V,{children:l?i.jsx(p,{quantity:t,onChange:u=>{a({cartId:r,quantity:Number(u.target.value)})},onIncrease:()=>{a({cartId:r,quantity:t+1})},onDecrease:()=>{a({cartId:r,quantity:t-1})},ariaIncreaseLabel:`${e.name}의 장바구니에 담긴 개수에서 하나 더하기`,ariaDecreaseLabel:`${e.name}의 장바구니에 담긴 개수에서 하나 빼기`}):i.jsx(j,{type:"button","aria-label":`${e.name}를 장바구니에 담기`,role:"cart-icon",children:i.jsx("img",{src:Q,alt:"장바구니 모양"})})})}try{m.displayName="CartQuantityField",m.__docgenInfo={description:"",displayName:"CartQuantityField",props:{product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"ProductItemType"}}}}}catch{}export{m as C};
//# sourceMappingURL=CartQuantityField-0bb7b70e.js.map
