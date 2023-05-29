import{i as s,j as r}from"./styled-components.browser.esm-aaaef0f3.js";import{a as f,b as x,c as h}from"./index-58f35e65.js";import{c as d}from"./cartState-4da5d400.js";const I=0,_=99,g=f({key:"cartItemQuantityState",get:e=>({get:i})=>{const a=i(d);if(a.length===0)return{quantity:0,cartId:0};const t=a.filter(n=>n.product.id===e)[0];return t?{cartId:t.id,quantity:t.quantity}:{cartId:0,quantity:0}},set:e=>({get:i,set:a},t)=>{if(t instanceof x)return;const n=i(d),{cartId:o,quantity:c}=t;if(c<_&&c>=I){if(!n.some(u=>u.id===o))return void 0;if(c===0){a(d,u=>u.filter(l=>l.id!==o));return}a(d,u=>u.map(l=>l.id===o?{...l,quantity:c}:l));return}}}),C=e=>h(g(e)),q=s.div`
  display: flex;
  height: 28px;
`,b=s.input`
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
`,Q=s.div`
  display: flex;
  flex-direction: column;
`;function p({quantity:e,onIncrease:i,onDecrease:a,onChange:t,ariaIncreaseLabel:n,ariaDecreaseLabel:o}){return r.jsxs(q,{children:[r.jsx(b,{"data-testid":"quantity-input",value:e,onChange:t}),r.jsxs(Q,{children:[r.jsx(y,{onClick:i,"aria-label":n,role:"increase",children:"⏶"}),r.jsx(y,{onClick:a,"aria-label":o,role:"decrease",children:"⏷"})]})]})}try{p.displayName="Stepper",p.__docgenInfo={description:"",displayName:"Stepper",props:{quantity:{defaultValue:null,description:"",name:"quantity",required:!0,type:{name:"number"}},onIncrease:{defaultValue:null,description:"",name:"onIncrease",required:!0,type:{name:"() => void"}},onDecrease:{defaultValue:null,description:"",name:"onDecrease",required:!0,type:{name:"() => void"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}},ariaIncreaseLabel:{defaultValue:null,description:"",name:"ariaIncreaseLabel",required:!1,type:{name:"string"}},ariaDecreaseLabel:{defaultValue:null,description:"",name:"ariaDecreaseLabel",required:!1,type:{name:"string"}}}}}catch{}const j=""+new URL("cart-c412e74f.svg",import.meta.url).href,v=s.div`
  display: flex;
  align-items: start;
`,L=s.button`
  width: 25px;
  height: 20px;
`;function m({product:e}){const[i,a]=C(e.id),{quantity:t,cartId:n}=i,o=t>0;return r.jsx(v,{children:o?r.jsx(p,{quantity:t,onChange:c=>{a({cartId:n,quantity:Number(c.target.value)})},onIncrease:()=>{a({cartId:n,quantity:t+1})},onDecrease:()=>{a({cartId:n,quantity:t-1})},ariaIncreaseLabel:`${e.name}의 장바구니에 담긴 개수에서 하나 더하기`,ariaDecreaseLabel:`${e.name}의 장바구니에 담긴 개수에서 하나 빼기`}):r.jsx(L,{type:"button","aria-label":`${e.name}를 장바구니에 담기`,role:"cart-icon",children:r.jsx("img",{src:j,alt:"장바구니 모양"})})})}try{m.displayName="CartQuantityField",m.__docgenInfo={description:"",displayName:"CartQuantityField",props:{product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"ProductItemType"}}}}}catch{}export{m as C};
//# sourceMappingURL=index-d5e8338a.js.map
