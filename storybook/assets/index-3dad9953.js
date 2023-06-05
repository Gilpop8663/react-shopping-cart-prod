import{i as I,j as p}from"./styled-components.browser.esm-aaaef0f3.js";import{b as Q,c as V}from"./index-8104fa34.js";import{c as $,r as F,a as k,u as U}from"./cartState-87a99554.js";import{f as P,u as j,s as M}from"./fetchUtils-c9fed188.js";import{M as E,j as O,Q as R,k as L,a as Y,u as G,r as H,l as z,m as w,n as K,F as W}from"./serverUrlConstants-ecb6b37d.js";import{r as _}from"./index-8db94870.js";import{s as x}from"./common-a48b2eb5.js";import{t as T}from"./theme-cf2b1b34.js";const X=1,Z=(t,{removeCartItemAndDelete:n,updateCartItemAndSync:o})=>{const r=_.useRef(null),[e,a]=_.useState(t),c=()=>{if(e>=E){x(d(e+1),r.current,R);return}o(e+1),a(i=>i+1)},l=async()=>{if(x(d(e-1),r.current,R),e<=O+1){n();return}o(e-1),a(i=>i-1)},d=(i=e)=>i>E,y=i=>{if(i>E){x(d(i),r.current,R),a(E);return}a(i)},f=async(i,s)=>{var b;const{relatedTarget:u,target:C}=i,h=((b=u==null?void 0:u.parentElement)==null?void 0:b.parentElement)===C.parentElement,g=s&&e===0;if(!h){if(x(g,r.current,L),g){x(g,r.current,L);return}if(e===0){a(X),n();return}o(e)}};return _.useEffect(()=>{a(t)},[t]),{quantity:e,increaseQuantity:c,decreaseQuantity:l,onQuantityChange:y,countInputRef:r,onQuantityBlur:f}},J=(t,n)=>{const[o,r]=_.useState(!0),[e,a]=_.useState(null);return{isLoading:o,error:e,fetchData:async()=>{try{return await P(t,n)}catch(l){return a(l),r(!0),null}finally{r(!1)}}}},tt=()=>{const t=Q(j),n=Q(M),{isLoading:o,error:r,fetchData:e}=J(Y(n),t),[a,c]=V($);return{cart:a,isLoading:o,error:r,updateCartListItemQuantity:({cartId:s,quantity:u})=>{c(G({cart:a,cartId:s,quantity:u}))},getCartItemQuantity:s=>{const u=w({cart:a,productId:s}),C=a.find(h=>h.id===u);return C?C.quantity:1},deleteCartItem:s=>{c(H({cart:a,cartId:s}))},addCartItem:({cartId:s,product:u})=>{c(z({cart:a,cartId:s,product:u}))},cartFetchData:async()=>{const s=await e();if(!s)return;const u=K(s);c(u)}}},et=t=>{var q;const n=Q(j),o=Q(M),r=Q($),e=w({cart:r,productId:t.id}),a=((q=r.find(m=>m.id===e))==null?void 0:q.product.id)===t.id,{addCartItem:c,updateCartListItemQuantity:l,getCartItemQuantity:d,deleteCartItem:y,cartFetchData:f}=tt(),i=async m=>{try{l({cartId:e,quantity:m}),await U({cartId:e,quantity:m,serverName:o,userInfo:n})}catch(A){f(),console.error(A)}},s=async()=>{try{y(e),await F({cartId:e,serverName:o,userInfo:n})}catch(m){f(),console.error(m)}},{quantity:u,onQuantityChange:C,countInputRef:h,increaseQuantity:g,decreaseQuantity:b,onQuantityBlur:B}=Z(d(t.id),{removeCartItemAndDelete:s,updateCartItemAndSync:i});return{onAddItemToCartAndSyncClick:async()=>{try{c({cartId:W,product:t}),await k({productId:t.id,serverName:o,userInfo:n})}catch(m){f(),console.error(m)}finally{f()}},onQuantityInputChange:m=>{const{value:A}=m.currentTarget,S=Number(A);isNaN(S)||C(S)},increaseQuantity:g,decreaseQuantity:b,countInputRef:h,quantity:u,onQuantityBlur:B,findCart:a,removeCartItemAndDelete:s}},at=I.div`
  display: flex;
`,rt=I.input`
  width: ${({stepperstyle:t})=>t==="small"?"42px":"73px"};
  height: ${({stepperstyle:t})=>t==="small"?"28px":"60px"};

  border: 1px solid ${({theme:t})=>t.colors.secondaryColor};

  font-weight: 400;
  font-size: ${({stepperstyle:t})=>t==="small"?"1.2rem":"2.4rem"};
  letter-spacing: 0.5px;

  text-align: center;

  color: ${T.colors.primaryColor};
`,N=I.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({stepperstyle:t})=>t==="small"?"24px":"42px"};
  height: ${({stepperstyle:t})=>t==="small"?"14px":"30px"};

  border: 1px solid ${({theme:t})=>t.colors.secondaryColor};
  border-left: none;

  font-size: ${({stepperstyle:t})=>t==="small"?"1.2rem":"2.4rem"};
  line-height: ${({stepperstyle:t})=>t==="small"?"1.2rem":"2.4rem"};

  color: ${T.colors.primaryColor};

  &:first-child {
    border-bottom: none;
  }

  &:disabled {
    color: ${T.colors.secondaryColor};
    cursor: not-allowed;
  }
`,nt=I.div`
  display: flex;
  flex-direction: column;
`;function v({stepperstyle:t,quantity:n,onIncrease:o,onDecrease:r,onChange:e,ariaIncreaseLabel:a,ariaDecreaseLabel:c,countInputRef:l,onQuantityBlur:d,isCartPage:y}){return p.jsxs(at,{children:[p.jsx(rt,{stepperstyle:t,ref:l,"data-testid":"quantity-input",value:n===0?"":n,onChange:e,onBlur:d}),p.jsxs(nt,{children:[p.jsx(N,{stepperstyle:t,onClick:o,"aria-label":a,role:"increase",children:"⏶"}),p.jsx(N,{stepperstyle:t,onClick:r,"aria-label":c,role:"decrease",disabled:y&&n===1,children:"⏷"})]})]})}try{v.displayName="Stepper",v.__docgenInfo={description:"",displayName:"Stepper",props:{stepperstyle:{defaultValue:null,description:"",name:"stepperstyle",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},quantity:{defaultValue:null,description:"",name:"quantity",required:!0,type:{name:"number"}},onIncrease:{defaultValue:null,description:"",name:"onIncrease",required:!0,type:{name:"() => void"}},onDecrease:{defaultValue:null,description:"",name:"onDecrease",required:!0,type:{name:"() => void"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}},ariaIncreaseLabel:{defaultValue:null,description:"",name:"ariaIncreaseLabel",required:!1,type:{name:"string"}},ariaDecreaseLabel:{defaultValue:null,description:"",name:"ariaDecreaseLabel",required:!1,type:{name:"string"}},countInputRef:{defaultValue:null,description:"",name:"countInputRef",required:!0,type:{name:"RefObject<HTMLInputElement>"}},onQuantityBlur:{defaultValue:null,description:"",name:"onQuantityBlur",required:!0,type:{name:"(event: FocusEvent<HTMLInputElement, Element>) => void"}},isCartPage:{defaultValue:null,description:"",name:"isCartPage",required:!0,type:{name:"boolean"}}}}}catch{}const ot=""+new URL("cart-c412e74f.svg",import.meta.url).href,st=I.div`
  display: flex;
  align-items: start;
`,it=I.button`
  width: 25px;
  height: 20px;
`;function D({product:t}){const{findCart:n,onQuantityInputChange:o,decreaseQuantity:r,increaseQuantity:e,countInputRef:a,quantity:c,onQuantityBlur:l,onAddItemToCartAndSyncClick:d}=et(t);return p.jsx(st,{children:n?p.jsx(v,{stepperstyle:"small",onChange:o,onDecrease:r,onIncrease:e,countInputRef:a,quantity:c,onQuantityBlur:y=>l(y,!1),ariaIncreaseLabel:`${t.name}의 장바구니에 담긴 개수에서 하나 더하기`,ariaDecreaseLabel:`${t.name}의 장바구니에 담긴 개수에서 하나 빼기`,isCartPage:!1}):p.jsx(it,{onClick:d,type:"button","aria-label":`${t.name}를 장바구니에 담기`,role:"cart-icon",children:p.jsx("img",{src:ot,alt:"장바구니 모양"})})})}try{D.displayName="CartQuantityField",D.__docgenInfo={description:"",displayName:"CartQuantityField",props:{product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"ProductItemType"}}}}}catch{}export{D as C,v as S,et as a,tt as u};
//# sourceMappingURL=index-3dad9953.js.map
