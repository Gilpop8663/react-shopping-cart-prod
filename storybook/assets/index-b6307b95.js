import{i as C,j as l}from"./styled-components.browser.esm-aaaef0f3.js";import{a as A,b as V}from"./index-cfc35cc2.js";import{M as x,a as B,Q as _,f as w,s as L,g as F,c as D,u as M,r as k,b as $,d as S,e as U,h as H,F as O,i as Y,j as G}from"./fetchCart-d222eaeb.js";import{r as f}from"./index-8db94870.js";const b=(t,n,o)=>{if(n){if(!t){n.setCustomValidity("");return}n.setCustomValidity(o),n.reportValidity()}},P=1,K=(t,{removeCartItemAndDelete:n,updateCartItemAndSync:o})=>{const r=f.useRef(null),[e,i]=f.useState(t),d=()=>{if(e>=x){b(p(e+1),r.current,_);return}o(e+1),i(a=>a+1)},c=async()=>{if(b(p(e-1),r.current,_),e<=B+1){n();return}o(e-1),i(a=>a-1)},p=(a=e)=>a>x,y=a=>{if(a>x){b(p(a),r.current,_),i(x);return}i(a)},I=async a=>{var g;const{relatedTarget:s,target:m}=a;if(((g=s==null?void 0:s.parentElement)==null?void 0:g.parentElement)!==m.parentElement){if(e===0){i(P),n();return}o(e)}};return f.useEffect(()=>{i(t)},[t]),{quantity:e,increaseQuantity:d,decreaseQuantity:c,onQuantityChange:y,countInputRef:r,onQuantityBlur:I}},W=(t,n)=>{const[o,r]=f.useState(!0),[e,i]=f.useState(null);return{isLoading:o,error:e,fetchData:async()=>{try{return await w(t,n)}catch(c){return i(c),r(!0),null}finally{r(!1)}}}},X=()=>{const t=A(L),{isLoading:n,error:o,fetchData:r}=W(F(t)),[e,i]=V(D);return{cart:e,isLoading:n,error:o,updateCartListItemQuantity:({cartId:a,quantity:s})=>{i(M({cart:e,cartId:a,quantity:s}))},getCartItemQuantity:a=>{const s=S({cart:e,productId:a}),m=e.find(h=>h.id===s);return m?m.quantity:1},deleteCartItem:a=>{i(k({cart:e,cartId:a}))},addCartItem:({cartId:a,product:s})=>{i($({cart:e,cartId:a,product:s}))},cartFetchData:async()=>{const a=await r();if(!a)return;const s=U(a);i(s)}}},z=t=>{var v;const n=A(L),o=A(D),r=S({cart:o,productId:t.id}),e=((v=o.find(u=>u.id===r))==null?void 0:v.product.id)===t.id,{addCartItem:i,updateCartListItemQuantity:d,getCartItemQuantity:c,deleteCartItem:p,cartFetchData:y}=X(),I=async u=>{try{d({cartId:r,quantity:u}),await G({cartId:r,quantity:u,serverName:n})}catch(Q){y(),console.error(Q)}},a=async()=>{try{p(r),await H({cartId:r,serverName:n})}catch(u){y(),console.error(u)}},{quantity:s,onQuantityChange:m,countInputRef:h,increaseQuantity:g,decreaseQuantity:N,onQuantityBlur:j}=K(c(t.id),{removeCartItemAndDelete:a,updateCartItemAndSync:I});return{onAddItemToCartAndSyncClick:async()=>{try{i({cartId:O,product:t}),await Y({productId:t.id,serverName:n})}catch(u){y(),console.error(u)}finally{y()}},onQuantityInputChange:u=>{const{value:Q}=u.currentTarget,R=Number(Q);isNaN(R)||m(R)},increaseQuantity:g,decreaseQuantity:N,countInputRef:h,quantity:s,onQuantityBlur:j,findCart:e,removeCartItemAndDelete:a}},J=C.div`
  display: flex;
  height: 28px;
`,Z=C.input`
  height: 28px;
  width: 42px;
  padding: 0px 5px;
  border: 1px solid ${({theme:t})=>t.colors.secondaryColor};

  &:focus {
    outline: 2px solid ${({theme:t})=>t.colors.infoColor};
  }
`,q=C.button`
  height: 14px;
  width: 24px;
  padding: 0px;
  border: 1px solid ${({theme:t})=>t.colors.secondaryColor};
  line-height: 0px;
`,tt=C.div`
  display: flex;
  flex-direction: column;
`;function T({quantity:t,onIncrease:n,onDecrease:o,onChange:r,ariaIncreaseLabel:e,ariaDecreaseLabel:i,countInputRef:d,onQuantityBlur:c}){return l.jsxs(J,{children:[l.jsx(Z,{ref:d,"data-testid":"quantity-input",value:t===0?"":t,onChange:r,onBlur:c}),l.jsxs(tt,{children:[l.jsx(q,{onClick:n,"aria-label":e,role:"increase",children:"⏶"}),l.jsx(q,{onClick:o,"aria-label":i,role:"decrease",children:"⏷"})]})]})}try{T.displayName="Stepper",T.__docgenInfo={description:"",displayName:"Stepper",props:{quantity:{defaultValue:null,description:"",name:"quantity",required:!0,type:{name:"number"}},onIncrease:{defaultValue:null,description:"",name:"onIncrease",required:!0,type:{name:"() => void"}},onDecrease:{defaultValue:null,description:"",name:"onDecrease",required:!0,type:{name:"() => void"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}},ariaIncreaseLabel:{defaultValue:null,description:"",name:"ariaIncreaseLabel",required:!1,type:{name:"string"}},ariaDecreaseLabel:{defaultValue:null,description:"",name:"ariaDecreaseLabel",required:!1,type:{name:"string"}},countInputRef:{defaultValue:null,description:"",name:"countInputRef",required:!0,type:{name:"RefObject<HTMLInputElement>"}},onQuantityBlur:{defaultValue:null,description:"",name:"onQuantityBlur",required:!0,type:{name:"(event: FocusEvent<HTMLInputElement, Element>) => void"}}}}}catch{}const et=""+new URL("cart-c412e74f.svg",import.meta.url).href,at=C.div`
  display: flex;
  align-items: start;
`,nt=C.button`
  width: 25px;
  height: 20px;
`;function E({product:t}){const{findCart:n,onQuantityInputChange:o,decreaseQuantity:r,increaseQuantity:e,countInputRef:i,quantity:d,onQuantityBlur:c,onAddItemToCartAndSyncClick:p}=z(t);return l.jsx(at,{children:n?l.jsx(T,{onChange:o,onDecrease:r,onIncrease:e,countInputRef:i,quantity:d,onQuantityBlur:c,ariaIncreaseLabel:`${t.name}의 장바구니에 담긴 개수에서 하나 더하기`,ariaDecreaseLabel:`${t.name}의 장바구니에 담긴 개수에서 하나 빼기`}):l.jsx(nt,{onClick:p,type:"button","aria-label":`${t.name}를 장바구니에 담기`,role:"cart-icon",children:l.jsx("img",{src:et,alt:"장바구니 모양"})})})}try{E.displayName="CartQuantityField",E.__docgenInfo={description:"",displayName:"CartQuantityField",props:{product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"ProductItemType"}}}}}catch{}export{E as C};
//# sourceMappingURL=index-b6307b95.js.map
