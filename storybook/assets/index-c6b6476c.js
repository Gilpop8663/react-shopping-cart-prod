import{i as f,j as l}from"./styled-components.browser.esm-aaaef0f3.js";import{a as b,b as B}from"./index-cfc35cc2.js";import{M as x,a as w,Q as _,f as F,s as L,g as M,c as D,u as V,r as k,b as $,d as S,e as U,h as H,F as O,i as Y,j as G}from"./fetchCart-d222eaeb.js";import{r as C}from"./index-8db94870.js";import{s as E}from"./common-a0d21cb2.js";const P=1,K=(t,{removeCartItemAndDelete:i,updateCartItemAndSync:o})=>{const n=C.useRef(null),[e,r]=C.useState(t),d=()=>{if(e>=x){E(p(e+1),n.current,_);return}o(e+1),r(a=>a+1)},c=async()=>{if(E(p(e-1),n.current,_),e<=w+1){i();return}o(e-1),r(a=>a-1)},p=(a=e)=>a>x,m=a=>{if(a>x){E(p(a),n.current,_),r(x);return}r(a)},I=async a=>{var g;const{relatedTarget:s,target:y}=a;if(((g=s==null?void 0:s.parentElement)==null?void 0:g.parentElement)!==y.parentElement){if(e===0){r(P),i();return}o(e)}};return C.useEffect(()=>{r(t)},[t]),{quantity:e,increaseQuantity:d,decreaseQuantity:c,onQuantityChange:m,countInputRef:n,onQuantityBlur:I}},W=(t,i)=>{const[o,n]=C.useState(!0),[e,r]=C.useState(null);return{isLoading:o,error:e,fetchData:async()=>{try{return await F(t,i)}catch(c){return r(c),n(!0),null}finally{n(!1)}}}},X=()=>{const t=b(L),{isLoading:i,error:o,fetchData:n}=W(M(t)),[e,r]=B(D);return{cart:e,isLoading:i,error:o,updateCartListItemQuantity:({cartId:a,quantity:s})=>{r(V({cart:e,cartId:a,quantity:s}))},getCartItemQuantity:a=>{const s=S({cart:e,productId:a}),y=e.find(h=>h.id===s);return y?y.quantity:1},deleteCartItem:a=>{r(k({cart:e,cartId:a}))},addCartItem:({cartId:a,product:s})=>{r($({cart:e,cartId:a,product:s}))},cartFetchData:async()=>{const a=await n();if(!a)return;const s=U(a);r(s)}}},z=t=>{var T;const i=b(L),o=b(D),n=S({cart:o,productId:t.id}),e=((T=o.find(u=>u.id===n))==null?void 0:T.product.id)===t.id,{addCartItem:r,updateCartListItemQuantity:d,getCartItemQuantity:c,deleteCartItem:p,cartFetchData:m}=X(),I=async u=>{try{d({cartId:n,quantity:u}),await G({cartId:n,quantity:u,serverName:i})}catch(Q){m(),console.error(Q)}},a=async()=>{try{p(n),await H({cartId:n,serverName:i})}catch(u){m(),console.error(u)}},{quantity:s,onQuantityChange:y,countInputRef:h,increaseQuantity:g,decreaseQuantity:N,onQuantityBlur:j}=K(c(t.id),{removeCartItemAndDelete:a,updateCartItemAndSync:I});return{onAddItemToCartAndSyncClick:async()=>{try{r({cartId:O,product:t}),await Y({productId:t.id,serverName:i})}catch(u){m(),console.error(u)}finally{m()}},onQuantityInputChange:u=>{const{value:Q}=u.currentTarget,v=Number(Q);isNaN(v)||y(v)},increaseQuantity:g,decreaseQuantity:N,countInputRef:h,quantity:s,onQuantityBlur:j,findCart:e,removeCartItemAndDelete:a}},J=f.div`
  display: flex;
  height: 28px;
`,Z=f.input`
  height: 28px;
  width: 42px;
  padding: 0px 5px;
  border: 1px solid ${({theme:t})=>t.colors.secondaryColor};

  &:focus {
    outline: 2px solid ${({theme:t})=>t.colors.infoColor};
  }
`,R=f.button`
  height: 14px;
  width: 24px;
  padding: 0px;
  border: 1px solid ${({theme:t})=>t.colors.secondaryColor};
  line-height: 0px;
`,tt=f.div`
  display: flex;
  flex-direction: column;
`;function A({quantity:t,onIncrease:i,onDecrease:o,onChange:n,ariaIncreaseLabel:e,ariaDecreaseLabel:r,countInputRef:d,onQuantityBlur:c}){return l.jsxs(J,{children:[l.jsx(Z,{ref:d,"data-testid":"quantity-input",value:t===0?"":t,onChange:n,onBlur:c}),l.jsxs(tt,{children:[l.jsx(R,{onClick:i,"aria-label":e,role:"increase",children:"⏶"}),l.jsx(R,{onClick:o,"aria-label":r,role:"decrease",children:"⏷"})]})]})}try{A.displayName="Stepper",A.__docgenInfo={description:"",displayName:"Stepper",props:{quantity:{defaultValue:null,description:"",name:"quantity",required:!0,type:{name:"number"}},onIncrease:{defaultValue:null,description:"",name:"onIncrease",required:!0,type:{name:"() => void"}},onDecrease:{defaultValue:null,description:"",name:"onDecrease",required:!0,type:{name:"() => void"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}},ariaIncreaseLabel:{defaultValue:null,description:"",name:"ariaIncreaseLabel",required:!1,type:{name:"string"}},ariaDecreaseLabel:{defaultValue:null,description:"",name:"ariaDecreaseLabel",required:!1,type:{name:"string"}},countInputRef:{defaultValue:null,description:"",name:"countInputRef",required:!0,type:{name:"RefObject<HTMLInputElement>"}},onQuantityBlur:{defaultValue:null,description:"",name:"onQuantityBlur",required:!0,type:{name:"(event: FocusEvent<HTMLInputElement, Element>) => void"}}}}}catch{}const et=""+new URL("cart-c412e74f.svg",import.meta.url).href,at=f.div`
  display: flex;
  align-items: start;
`,nt=f.button`
  width: 25px;
  height: 20px;
`;function q({product:t}){const{findCart:i,onQuantityInputChange:o,decreaseQuantity:n,increaseQuantity:e,countInputRef:r,quantity:d,onQuantityBlur:c,onAddItemToCartAndSyncClick:p}=z(t);return l.jsx(at,{children:i?l.jsx(A,{onChange:o,onDecrease:n,onIncrease:e,countInputRef:r,quantity:d,onQuantityBlur:c,ariaIncreaseLabel:`${t.name}의 장바구니에 담긴 개수에서 하나 더하기`,ariaDecreaseLabel:`${t.name}의 장바구니에 담긴 개수에서 하나 빼기`}):l.jsx(nt,{onClick:p,type:"button","aria-label":`${t.name}를 장바구니에 담기`,role:"cart-icon",children:l.jsx("img",{src:et,alt:"장바구니 모양"})})})}try{q.displayName="CartQuantityField",q.__docgenInfo={description:"",displayName:"CartQuantityField",props:{product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"ProductItemType"}}}}}catch{}export{q as C};
//# sourceMappingURL=index-c6b6476c.js.map
