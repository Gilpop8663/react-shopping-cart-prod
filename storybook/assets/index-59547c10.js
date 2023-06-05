import{i as C,j as p}from"./styled-components.browser.esm-aaaef0f3.js";import{c as h,b as F}from"./index-0c9fedb2.js";import{c as L,r as V,a as M,u as k}from"./cartState-7478dda1.js";import{f as U,u as S,s as D}from"./fetchUtils-f1ccc203.js";import{M as Q,j as H,Q as b,a as O,u as Y,r as z,k as G,l as j,m as P,F as K}from"./serverUrlConstants-fe72d8a7.js";import{r as g}from"./index-8db94870.js";import{s as v}from"./common-a48b2eb5.js";import{t as N}from"./theme-cf2b1b34.js";const W=1,X=(t,{removeCartItemAndDelete:o,updateCartItemAndSync:s})=>{const n=g.useRef(null),[e,a]=g.useState(t),c=()=>{if(e>=Q){v(d(e+1),n.current,b);return}s(e+1),a(i=>i+1)},u=async()=>{if(v(d(e-1),n.current,b),e<=H+1){o();return}s(e-1),a(i=>i-1)},d=(i=e)=>i>Q,x=i=>{if(i>Q){v(d(i),n.current,b),a(Q);return}a(i)},y=async i=>{var f;const{relatedTarget:r,target:l}=i;if(((f=r==null?void 0:r.parentElement)==null?void 0:f.parentElement)!==l.parentElement){if(e===0){a(W),o();return}s(e)}};return g.useEffect(()=>{a(t)},[t]),{quantity:e,increaseQuantity:c,decreaseQuantity:u,onQuantityChange:x,countInputRef:n,onQuantityBlur:y}},J=(t,o)=>{const[s,n]=g.useState(!0),[e,a]=g.useState(null);return{isLoading:s,error:e,fetchData:async()=>{try{return await U(t,o)}catch(u){return a(u),n(!0),null}finally{n(!1)}}}},Z=()=>{const t=h(S),o=h(D),{isLoading:s,error:n,fetchData:e}=J(O(o),t),[a,c]=F(L);return{cart:a,isLoading:s,error:n,updateCartListItemQuantity:({cartId:r,quantity:l})=>{c(Y({cart:a,cartId:r,quantity:l}))},getCartItemQuantity:r=>{const l=j({cart:a,productId:r}),I=a.find(f=>f.id===l);return I?I.quantity:1},deleteCartItem:r=>{c(z({cart:a,cartId:r}))},addCartItem:({cartId:r,product:l})=>{c(G({cart:a,cartId:r,product:l}))},cartFetchData:async()=>{const r=await e();if(!r)return;const l=P(r);c(l)}}},tt=t=>{var A;const o=h(S),s=h(D),n=h(L),e=j({cart:n,productId:t.id}),a=((A=n.find(m=>m.id===e))==null?void 0:A.product.id)===t.id,{addCartItem:c,updateCartListItemQuantity:u,getCartItemQuantity:d,deleteCartItem:x,cartFetchData:y}=Z(),i=async m=>{try{u({cartId:e,quantity:m}),await k({cartId:e,quantity:m,serverName:s,userInfo:o})}catch(_){y(),console.error(_)}},r=async()=>{try{x(e),await V({cartId:e,serverName:s,userInfo:o})}catch(m){y(),console.error(m)}},{quantity:l,onQuantityChange:I,countInputRef:f,increaseQuantity:$,decreaseQuantity:w,onQuantityBlur:B}=X(d(t.id),{removeCartItemAndDelete:r,updateCartItemAndSync:i});return{onAddItemToCartAndSyncClick:async()=>{try{c({cartId:K,product:t}),await M({productId:t.id,serverName:s,userInfo:o})}catch(m){y(),console.error(m)}finally{y()}},onQuantityInputChange:m=>{const{value:_}=m.currentTarget,T=Number(_);isNaN(T)||I(T)},increaseQuantity:$,decreaseQuantity:w,countInputRef:f,quantity:l,onQuantityBlur:B,findCart:a,removeCartItemAndDelete:r}},et=C.div`
  display: flex;
`,at=C.input`
  width: ${({stepperstyle:t})=>t==="small"?"42px":"73px"};
  height: ${({stepperstyle:t})=>t==="small"?"28px":"60px"};

  border: 1px solid ${({theme:t})=>t.colors.secondaryColor};

  font-weight: 400;
  font-size: ${({stepperstyle:t})=>t==="small"?"1.2rem":"2.4rem"};
  letter-spacing: 0.5px;

  text-align: center;

  color: ${N.colors.primaryColor};
`,q=C.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({stepperstyle:t})=>t==="small"?"24px":"42px"};
  height: ${({stepperstyle:t})=>t==="small"?"14px":"30px"};

  border: 1px solid ${({theme:t})=>t.colors.secondaryColor};
  border-left: none;

  font-size: ${({stepperstyle:t})=>t==="small"?"1.2rem":"2.4rem"};
  line-height: ${({stepperstyle:t})=>t==="small"?"1.2rem":"2.4rem"};

  color: ${N.colors.primaryColor};

  &:first-child {
    border-bottom: none;
  }
`,rt=C.div`
  display: flex;
  flex-direction: column;
`;function E({stepperstyle:t,quantity:o,onIncrease:s,onDecrease:n,onChange:e,ariaIncreaseLabel:a,ariaDecreaseLabel:c,countInputRef:u,onQuantityBlur:d}){return p.jsxs(et,{children:[p.jsx(at,{stepperstyle:t,ref:u,"data-testid":"quantity-input",value:o===0?"":o,onChange:e,onBlur:d}),p.jsxs(rt,{children:[p.jsx(q,{stepperstyle:t,onClick:s,"aria-label":a,role:"increase",children:"⏶"}),p.jsx(q,{stepperstyle:t,onClick:n,"aria-label":c,role:"decrease",children:"⏷"})]})]})}try{E.displayName="Stepper",E.__docgenInfo={description:"",displayName:"Stepper",props:{stepperstyle:{defaultValue:null,description:"",name:"stepperstyle",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},quantity:{defaultValue:null,description:"",name:"quantity",required:!0,type:{name:"number"}},onIncrease:{defaultValue:null,description:"",name:"onIncrease",required:!0,type:{name:"() => void"}},onDecrease:{defaultValue:null,description:"",name:"onDecrease",required:!0,type:{name:"() => void"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}},ariaIncreaseLabel:{defaultValue:null,description:"",name:"ariaIncreaseLabel",required:!1,type:{name:"string"}},ariaDecreaseLabel:{defaultValue:null,description:"",name:"ariaDecreaseLabel",required:!1,type:{name:"string"}},countInputRef:{defaultValue:null,description:"",name:"countInputRef",required:!0,type:{name:"RefObject<HTMLInputElement>"}},onQuantityBlur:{defaultValue:null,description:"",name:"onQuantityBlur",required:!0,type:{name:"(event: FocusEvent<HTMLInputElement, Element>) => void"}}}}}catch{}const nt=""+new URL("cart-c412e74f.svg",import.meta.url).href,ot=C.div`
  display: flex;
  align-items: start;
`,st=C.button`
  width: 25px;
  height: 20px;
`;function R({product:t}){const{findCart:o,onQuantityInputChange:s,decreaseQuantity:n,increaseQuantity:e,countInputRef:a,quantity:c,onQuantityBlur:u,onAddItemToCartAndSyncClick:d}=tt(t);return p.jsx(ot,{children:o?p.jsx(E,{stepperstyle:"small",onChange:s,onDecrease:n,onIncrease:e,countInputRef:a,quantity:c,onQuantityBlur:u,ariaIncreaseLabel:`${t.name}의 장바구니에 담긴 개수에서 하나 더하기`,ariaDecreaseLabel:`${t.name}의 장바구니에 담긴 개수에서 하나 빼기`}):p.jsx(st,{onClick:d,type:"button","aria-label":`${t.name}를 장바구니에 담기`,role:"cart-icon",children:p.jsx("img",{src:nt,alt:"장바구니 모양"})})})}try{R.displayName="CartQuantityField",R.__docgenInfo={description:"",displayName:"CartQuantityField",props:{product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"ProductItemType"}}}}}catch{}export{R as C,E as S,tt as u};
//# sourceMappingURL=index-59547c10.js.map
