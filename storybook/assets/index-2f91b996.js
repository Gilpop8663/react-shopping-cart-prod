import{i as C,j as l}from"./styled-components.browser.esm-aaaef0f3.js";import{a as A,b as j}from"./index-cfc35cc2.js";import{M as x,a as V,Q as _,f as B,s as E,g as w,c as L,u as F,r as M,b as k,d as D,e as $,h as U,F as H,i as O,j as Y}from"./fetchCart-d222eaeb.js";import{r as f}from"./index-8db94870.js";const b=(t,n,o)=>{if(n){if(!t){n.setCustomValidity("");return}n.setCustomValidity(o),n.reportValidity()}},G=1,P=(t,{removeCartItemAndDelete:n,updateCartItemAndSync:o})=>{const r=f.useRef(null),[e,i]=f.useState(t),d=()=>{if(e>=x){b(p(e+1),r.current,_);return}o(e+1),i(a=>a+1)},c=async()=>{if(b(p(e-1),r.current,_),e<=V+1){n();return}o(e-1),i(a=>a-1)},p=(a=e)=>a>x,y=a=>{if(a>x){b(p(a),r.current,_),i(x);return}i(a)},I=async a=>{var g;const{relatedTarget:s,target:m}=a;if(((g=s==null?void 0:s.parentElement)==null?void 0:g.parentElement)!==m.parentElement){if(e===0){i(G),n();return}o(e)}};return f.useEffect(()=>{i(t)},[t]),{quantity:e,increaseQuantity:d,decreaseQuantity:c,onQuantityChange:y,countInputRef:r,onQuantityBlur:I}},K=(t,n)=>{const[o,r]=f.useState(!0),[e,i]=f.useState(null);return{isLoading:o,error:e,fetchData:async()=>{try{return await B(t,n)}catch(c){return i(c),r(!0),null}finally{r(!1)}}}},W=()=>{const t=A(E),{isLoading:n,error:o,fetchData:r}=K(w(t)),[e,i]=j(L);return{cart:e,isLoading:n,error:o,updateCartListItemQuantity:({cartId:a,quantity:s})=>{i(F({cart:e,cartId:a,quantity:s}))},getCartItemQuantity:a=>{const s=D({cart:e,productId:a}),m=e.find(h=>h.id===s);return m?m.quantity:1},deleteCartItem:a=>{i(M({cart:e,cartId:a}))},addCartItem:({cartId:a,product:s})=>{i(k({cart:e,cartId:a,product:s}))},cartFetchData:async()=>{const a=await r();if(!a)return;const s=$(a);i(s)}}},X=t=>{const n=A(E),o=A(L),r=D({cart:o,productId:t.id}),e=o.find(u=>u.id===r),{addCartItem:i,updateCartListItemQuantity:d,getCartItemQuantity:c,deleteCartItem:p,cartFetchData:y}=W(),I=async u=>{try{d({cartId:r,quantity:u}),await Y({cartId:r,quantity:u,serverName:n})}catch(Q){y(),console.error(Q)}},a=async()=>{try{p(r),await U({cartId:r,serverName:n})}catch(u){y(),console.error(u)}},{quantity:s,onQuantityChange:m,countInputRef:h,increaseQuantity:g,decreaseQuantity:S,onQuantityBlur:N}=P(c(t.id),{removeCartItemAndDelete:a,updateCartItemAndSync:I});return{onAddItemToCartAndSyncClick:async()=>{try{i({cartId:H,product:t}),await O({productId:t.id,serverName:n})}catch(u){y(),console.error(u)}finally{y()}},onQuantityInputChange:u=>{const{value:Q}=u.currentTarget,v=Number(Q);isNaN(v)||m(v)},increaseQuantity:g,decreaseQuantity:S,countInputRef:h,quantity:s,onQuantityBlur:N,findCart:e,removeCartItemAndDelete:a}},z=C.div`
  display: flex;
  height: 28px;
`,J=C.input`
  height: 28px;
  width: 42px;
  padding: 0px 5px;
  border: 1px solid ${({theme:t})=>t.secondaryColor};

  &:focus {
    outline: 2px solid ${({theme:t})=>t.infoColor};
  }
`,R=C.button`
  height: 14px;
  width: 24px;
  padding: 0px;
  border: 1px solid ${({theme:t})=>t.secondaryColor};
  line-height: 0px;
`,Z=C.div`
  display: flex;
  flex-direction: column;
`;function T({quantity:t,onIncrease:n,onDecrease:o,onChange:r,ariaIncreaseLabel:e,ariaDecreaseLabel:i,countInputRef:d,onQuantityBlur:c}){return l.jsxs(z,{children:[l.jsx(J,{ref:d,"data-testid":"quantity-input",value:t===0?"":t,onChange:r,onBlur:c}),l.jsxs(Z,{children:[l.jsx(R,{onClick:n,"aria-label":e,role:"increase",children:"⏶"}),l.jsx(R,{onClick:o,"aria-label":i,role:"decrease",children:"⏷"})]})]})}try{T.displayName="Stepper",T.__docgenInfo={description:"",displayName:"Stepper",props:{quantity:{defaultValue:null,description:"",name:"quantity",required:!0,type:{name:"number"}},onIncrease:{defaultValue:null,description:"",name:"onIncrease",required:!0,type:{name:"() => void"}},onDecrease:{defaultValue:null,description:"",name:"onDecrease",required:!0,type:{name:"() => void"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}},ariaIncreaseLabel:{defaultValue:null,description:"",name:"ariaIncreaseLabel",required:!1,type:{name:"string"}},ariaDecreaseLabel:{defaultValue:null,description:"",name:"ariaDecreaseLabel",required:!1,type:{name:"string"}},countInputRef:{defaultValue:null,description:"",name:"countInputRef",required:!0,type:{name:"RefObject<HTMLInputElement>"}},onQuantityBlur:{defaultValue:null,description:"",name:"onQuantityBlur",required:!0,type:{name:"(event: FocusEvent<HTMLInputElement, Element>) => void"}}}}}catch{}const tt=""+new URL("cart-c412e74f.svg",import.meta.url).href,et=C.div`
  display: flex;
  align-items: start;
`,at=C.button`
  width: 25px;
  height: 20px;
`;function q({product:t}){const{findCart:n,onQuantityInputChange:o,decreaseQuantity:r,increaseQuantity:e,countInputRef:i,quantity:d,onQuantityBlur:c,onAddItemToCartAndSyncClick:p}=X(t);return l.jsx(et,{children:n?l.jsx(T,{onChange:o,onDecrease:r,onIncrease:e,countInputRef:i,quantity:d,onQuantityBlur:c,ariaIncreaseLabel:`${t.name}의 장바구니에 담긴 개수에서 하나 더하기`,ariaDecreaseLabel:`${t.name}의 장바구니에 담긴 개수에서 하나 빼기`}):l.jsx(at,{onClick:p,type:"button","aria-label":`${t.name}를 장바구니에 담기`,role:"cart-icon",children:l.jsx("img",{src:tt,alt:"장바구니 모양"})})})}try{q.displayName="CartQuantityField",q.__docgenInfo={description:"",displayName:"CartQuantityField",props:{product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"ProductItemType"}}}}}catch{}export{q as C};
//# sourceMappingURL=index-2f91b996.js.map
