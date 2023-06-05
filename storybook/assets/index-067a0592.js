import{i as o,j as e}from"./styled-components.browser.esm-aaaef0f3.js";import{r as l}from"./index-8db94870.js";import{u as v,L as W,a as ce,b as de,c as le}from"./index-6b0f0fe4.js";import{a as F,b as m,c as _,d as H,e as me,f as pe}from"./index-8104fa34.js";import{c as f,r as ue}from"./cartState-87a99554.js";import{w as K,a as he,g as ge,C as xe}from"./index-cda37d62.js";import{s as b,u as C,f as fe,U as Q}from"./fetchUtils-c9fed188.js";import{e as B,f as ye,h as Ce,t as je,g as be,p as ke,S as G}from"./serverUrlConstants-ecb6b37d.js";import{u as Ie,a as we,S as ve}from"./index-3dad9953.js";import{s as _e,O as Se,g as Pe}from"./index-1a5e2f75.js";import{C as Re}from"./index-fc5ca4cd.js";import{C as Y}from"./index-fa80f56e.js";import{t as p}from"./theme-cf2b1b34.js";import{E as Ee,P as Oe,a as Le}from"./index-57ceba2c.js";import{B as R}from"./index-a09c039b.js";import{P as $e,a as Ae,b as Ne,c as De,d as Be}from"./index-1d953bf5.js";import{O as T}from"./index-c18acebd.js";import{g as Te}from"./common-a48b2eb5.js";import{O as Me}from"./OrderItem-d4baa48e.js";import{O as Ve}from"./index-4995a37d.js";import{S as M}from"./index-3388ab67.js";const qe=F({key:"cartCountChecked",get:({get:t})=>{const r=t(f);return B(r).length}}),J=()=>{const t=m(b),r=m(C),[n,a]=_(f),{cartFetchData:i}=Ie(),s=m(qe),c=m(K);return{checkedCount:s,totalCartPrice:c,isAllChecked:()=>n.length===s,toggleAllCartItem:x=>{const u=ye({cart:n,isCheck:x});a(u)},deleteCheckedItems:async()=>{const x=Ce(n);a(x);const u=B(n);for(const j of u)try{await ue({cartId:j,serverName:t,userInfo:r})}catch(S){console.error(S),i()}}}},ze=H({key:"cartItemCheckedState",get:t=>({get:r})=>{const a=r(f).find(i=>i.id===t);if(!a)throw new Error("장바구니 아이템을 찾을 수 없습니다. - withItemCheckBy");return a.isSelect},set:t=>({get:r,set:n})=>{const a=r(f),i=je({cart:a,cartId:t});n(f,i)}}),Ue=t=>{const[r,n]=_(ze(t));return{isChecked:r,toggleCheck:()=>{n(!r)}}},We=""+new URL("delete-be464820.svg",import.meta.url).href,Fe=o.section`
  display: flex;
  flex-direction: column;

  width: 100%;
`,X=o.section`
  display: flex;

  justify-content: space-between;

  width: 100%;
`,He=o.section`
  flex: 1.2;
  display: flex;
  flex-direction: column;
`,Z=o(X)`
  column-gap: 1rem;
  width: 100%;
  margin: 1rem;
  border-bottom: ${({theme:t})=>t.colors.secondaryColor} 1px solid;
  padding: 1rem;
  width: 95%;

  justify-content: start;
`,Ke=o.div`
  width: 144px;
  height: 144px;
`,Qe=o.img`
  height: 100%;
  aspect-ratio: 1/1;

  object-fit: cover;
`,Ge=o.p`
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.4rem;

  letter-spacing: 0.5px;

  color: ${p.colors.primaryColor};
`,Ye=o.div`
  flex: 1 1 12rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;

  padding-bottom: 2.4rem;
`,Je=o.img`
  width: 18px;
  height: 18px;

  margin-bottom: 2.4rem;

  cursor: pointer;
`,Xe=o.p`
  margin-top: 2rem;

  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.4rem;

  text-align: right;
  letter-spacing: 0.5px;

  color: ${p.colors.primaryColor};
`;function E({cartId:t,productId:r,imageUrl:n,name:a,price:i}){const{isChecked:s,toggleCheck:c}=Ue(t),{onQuantityInputChange:d,decreaseQuantity:h,increaseQuantity:k,countInputRef:x,quantity:u,onQuantityBlur:j,removeCartItemAndDelete:S}=we({id:r,imageUrl:n,name:a,price:i});return e.jsxs(Z,{children:[e.jsx(Y,{type:"checkbox",checked:s,onChange:c}),e.jsx(Ke,{children:e.jsx(Qe,{src:n})}),e.jsx(Ge,{children:a}),e.jsxs(Ye,{children:[e.jsx(Je,{src:We,onClick:S}),e.jsx(ve,{stepperstyle:"large",onChange:d,onDecrease:h,onIncrease:k,countInputRef:x,quantity:u,onQuantityBlur:se=>j(se,!0),ariaIncreaseLabel:`${a}의 장바구니에 담긴 개수에서 하나 더하기`,ariaDecreaseLabel:`${a}의 장바구니에 담긴 개수에서 하나 빼기`,isCartPage:!0}),e.jsx(Xe,{children:`${(i*u).toLocaleString("ko-KR")} 원`})]})]})}try{E.displayName="CartItemBox",E.__docgenInfo={description:"",displayName:"CartItemBox",props:{cartId:{defaultValue:null,description:"",name:"cartId",required:!0,type:{name:"number"}},productId:{defaultValue:null,description:"",name:"productId",required:!0,type:{name:"number"}},imageUrl:{defaultValue:null,description:"",name:"imageUrl",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},price:{defaultValue:null,description:"",name:"price",required:!0,type:{name:"number"}}}}}catch{}const O=o(He)`
  flex: 2;
`,Ze=o(X)`
  column-gap: 1rem;
  width: 100%;
  margin: 1rem;
  border: ${({theme:t})=>t.colors.lightColor} 1px solid;
  padding: 1rem;
  border-radius: 8px;
  justify-content: start;
  align-items: center;
`,et=o.button`
  padding: 0.5rem 1.8rem;

  font-family: 'Noto Sans KR';
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.1rem;

  color: ${({theme:t})=>t.colors.primaryColor};
  border: 1px solid ${({theme:t})=>t.colors.secondaryColor};
`,tt=o.span`
  font-size: 1.6rem;
  width: 12rem;
`;function L({cart:t}){const{isAllChecked:r,toggleAllCartItem:n,deleteCheckedItems:a,checkedCount:i}=J(),s=t.length;return s===0?e.jsx(O,{children:e.jsx("span",{style:{textAlign:"center",fontSize:"30px",margin:"auto"},children:"텅"})}):e.jsxs(O,{children:[t.map(({id:c,product:d})=>e.jsx("li",{children:e.jsx(E,{cartId:c,productId:d.id,imageUrl:d.imageUrl,name:d.name,price:d.price})},c)),e.jsxs(Ze,{children:[e.jsx(Y,{type:"checkbox",checked:r(),onChange:()=>n(!r())}),e.jsx(tt,{children:`전체 선택 (${i} / ${s})`}),e.jsx(et,{onClick:a,children:"선택삭제"})]})]})}try{L.displayName="CartItemList",L.__docgenInfo={description:"",displayName:"CartItemList",props:{cart:{defaultValue:null,description:"",name:"cart",required:!0,type:{name:"CartItemType[]"}}}}}catch{}const rt=o.main`
  display: flex;

  padding: 3.4rem 0;

  @media screen and (max-width: ${({theme:t})=>t.breakpoints.md}) {
    flex-direction: column;
  }
`,nt=o.div`
  padding-bottom: 1.6rem;
  border-bottom: 4px solid ${p.colors.secondaryColor};

  font-weight: 400;
  font-size: 2rem;
  line-height: 3.3rem;

  letter-spacing: 0.5px;
`,ot=o.div`
  width: 45rem;
  @media screen and (max-width: ${({theme:t})=>t.breakpoints.md}) {
    max-width: none;
  }
`,at=o.div`
  margin-bottom: 4rem;

  @media screen and (max-width: ${({theme:t})=>t.breakpoints.md}) {
    margin-top: 4rem;
  }
`,V=3e3;function $({onModalOpen:t,selectedCoupon:r,resetSelectedCoupon:n}){const a=m(C),i=m(b),s=v(),c=m(f),d=m(K),h=m(he),{checkedCount:k}=J(),x=async()=>{const j=B(c);await _e({cartItemIds:j,serverName:i,couponId:r==null?void 0:r.id,userInfo:a}),s(ie.COMPLETE,{state:{deliveryFee:V,discountPrice:u,totalItemsPrice:d,orderItemsCount:k}})},u=r?ge({coupon:r,totalItemsPrice:d}):0;return l.useEffect(()=>{u===0&&n()},[u,n]),e.jsxs("div",{children:[e.jsxs(nt,{children:["든든배송 상품 (",c.length,"개)"]}),e.jsxs(rt,{children:[e.jsx(L,{cart:c}),e.jsxs(ot,{children:[e.jsx(at,{children:e.jsx(Re,{selectedCoupon:r,onCouponModalOpen:t,availableCouponLength:h.length??0})}),e.jsx(Ee,{totalItemsPrice:d,deliveryFee:d?V:0,discountPrice:u,onOrderClick:x})]})]})]})}try{$.displayName="CartListArea",$.__docgenInfo={description:"",displayName:"CartListArea",props:{onModalOpen:{defaultValue:null,description:"",name:"onModalOpen",required:!0,type:{name:"() => void"}},selectedCoupon:{defaultValue:null,description:"",name:"selectedCoupon",required:!0,type:{name:"CouponType | null"}},resetSelectedCoupon:{defaultValue:null,description:"",name:"resetSelectedCoupon",required:!0,type:{name:"() => void"}}}}}catch{}const it=O,st=Le,ct=o(Z)`
  background: linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);
  background-size: 400%;
  animation: skeleton-animation 5s infinite ease-out;
  border: none;

  margin-bottom: 1rem;

  padding-left: 50%;
  padding-top: 30%;

  @keyframes skeleton-animation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`,dt=o(Oe)`
  background: linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);
  background-size: 400%;
  animation: skeleton-animation 5s infinite ease-out;
  border: none;

  margin-bottom: 1rem;

  padding-left: 50%;
  padding-top: 50%;

  @keyframes skeleton-animation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;function w(){return e.jsxs(e.Fragment,{children:[e.jsx(it,{children:Array.from({length:3}).map((t,r)=>e.jsx(ct,{},r))}),e.jsx(st,{children:e.jsx(dt,{})})]})}function A({title:t,onModalClose:r,children:n}){const a=l.useRef(null);return e.jsx(lt,{ref:a,children:e.jsxs(mt,{children:[e.jsx(pt,{children:t}),e.jsx(ut,{children:n}),e.jsx(ht,{children:e.jsx(R,{text:"닫기",onClick:r})})]})})}const lt=o.dialog`
  position: fixed;
  top: 0;
  bottom: 0;

  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.2);

  &::backdrop {
    width: 100vw;
  }
`,mt=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 120rem;

  padding: 3rem 0 6rem 0;
  border: 1px solid ${p.colors.primaryColor};

  background: ${p.colors.lightColor};
`,pt=o.h1`
  font-weight: 700;
  font-size: 4rem;

  margin-bottom: 5rem;

  color: ${p.colors.primaryColor};
`,ut=o.main`
  height: 40rem;
  margin-bottom: 5rem;

  overflow-y: scroll;
`,ht=o.div`
  width: 42rem;
`;try{A.displayName="Modal",A.__docgenInfo={description:"",displayName:"Modal",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},onModalClose:{defaultValue:null,description:"",name:"onModalClose",required:!0,type:{name:"() => void"}}}}}catch{}function gt(){const[t,r]=l.useState(!1),[n,a]=l.useState(null),i=()=>{r(!0)},s=()=>{r(!1)},c=h=>{a(h)},d=()=>{a(null)};return e.jsxs(y,{children:[e.jsx(Fe,{children:e.jsx(l.Suspense,{fallback:e.jsx(w,{}),children:e.jsx($,{onModalOpen:i,selectedCoupon:n,resetSelectedCoupon:d})})}),t&&e.jsx(A,{onModalClose:s,title:"쿠폰함",children:e.jsx(l.Suspense,{fallback:e.jsx(w,{}),children:e.jsx(xe,{selectedCoupon:n,onCouponSelect:c})})})]})}const xt=l.createContext(null),P={didCatch:!1,error:null};class ft extends l.Component{constructor(r){super(r),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=P}static getDerivedStateFromError(r){return{didCatch:!0,error:r}}resetErrorBoundary(...r){var a,i;const{error:n}=this.state;n!==null&&((i=(a=this.props).onReset)==null||i.call(a,{args:r,reason:"imperative-api"}),this.setState(P))}componentDidCatch(r,n){var a,i;(i=(a=this.props).onError)==null||i.call(a,r,n)}componentDidUpdate(r,n){var s,c;const{didCatch:a}=this.state,{resetKeys:i}=this.props;a&&n.error!==null&&yt(r.resetKeys,i)&&((c=(s=this.props).onReset)==null||c.call(s,{next:i,prev:r.resetKeys,reason:"keys"}),this.setState(P))}render(){const{children:r,fallbackRender:n,FallbackComponent:a,fallback:i}=this.props,{didCatch:s,error:c}=this.state;let d=r;if(s){const h={error:c,resetErrorBoundary:this.resetErrorBoundary};if(l.isValidElement(i))d=i;else if(typeof n=="function")d=n(h);else if(a)d=l.createElement(a,h);else throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")}return l.createElement(xt.Provider,{value:{didCatch:s,error:c,resetErrorBoundary:this.resetErrorBoundary}},d)}}function yt(t=[],r=[]){return t.length!==r.length||t.some((n,a)=>!Object.is(n,r[a]))}const Ct=async({serverName:t,userInfo:r})=>{const n=await fe(be(t),{email:r.email,password:r.password});return ke(n)},jt=F({key:"getProductList",get:async({get:t})=>{const r=t(C),n=t(b);return await Ct({serverName:n,userInfo:r})},cachePolicy_UNSTABLE:{eviction:"most-recent"}}),bt=me({key:"productListState",default:jt}),ee=o.div`
  padding: 0 20px;
  margin: 0 auto;
  max-width: 100%;

  @media screen and (min-width: ${({theme:t})=>t.breakpoints.sm}) {
    max-width: 540px;
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoints.md}) {
    max-width: 720px;
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoints.lg}) {
    max-width: 960px;
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoints.xl}) {
    max-width: 1140px;
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoints.xxl}) {
    max-width: 1320px;
  }
`,te=o.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;
  column-gap: 1rem;
`,re=o.div`
  margin: auto;
  width: 90%;

  @media screen and (min-width: ${({theme:t})=>t.breakpoints.md}) {
    width: 48%;
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoints.lg}) {
    width: 32%;
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoints.xl}) {
    width: 24%;
  }
`;function kt(){const t=m(bt);return e.jsx(te,{children:t.map(r=>e.jsx(re,{children:e.jsx($e,{product:r})},r.id))})}const It=te,wt=re,vt=Be,_t=o(Ae)`
  background: linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);
  background-size: 400%;
  animation: skeleton-animation 5s infinite ease-out;
  border: none;

  @keyframes skeleton-animation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  width: 90%;
  height: 1rem;

  padding-left: 10%;
  padding-top: 2rem;
  border-radius: 3px;
`,St=o(Ne)`
  background: linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);
  background-size: 400%;
  animation: skeleton-animation 5s infinite ease-out;
  border: none;
  width: 40%;
  height: 1rem;

  @keyframes skeleton-animation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  padding-left: 10%;
  border-radius: 3px;
  padding-top: 2rem;
`,Pt=o(De)`
  background: linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);
  background-size: 400%;
  animation: skeleton-animation 5s infinite ease-out;
  border: none;

  margin-bottom: 1rem;

  padding-left: 50%;
  padding-top: 50%;

  @keyframes skeleton-animation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;function Rt(){return e.jsx(It,{children:Array.from({length:12}).map((t,r)=>e.jsx(wt,{children:e.jsxs(vt,{children:[e.jsx(Pt,{}),e.jsxs("div",{children:[e.jsx(_t,{}),e.jsx(St,{})]})]})},r))})}function Et(){return e.jsx(y,{children:e.jsx(ft,{fallback:e.jsx("p",{children:"에러입니다"}),children:e.jsx(l.Suspense,{fallback:e.jsx(Rt,{}),children:e.jsx(kt,{})})})})}function Ot(){return e.jsxs(y,{children:[e.jsx(T,{text:"주문 목록"}),e.jsx(l.Suspense,{fallback:e.jsx(w,{}),children:e.jsx(Se,{})})]})}const ne=o.div`
  display: flex;
  justify-content: center;

  padding: 8rem 0;

  font-size: 3rem;
  line-height: 3.7rem;
  letter-spacing: 0.5px;

  color: ${p.colors.primaryColor};
`,Lt=o.span`
  font-weight: 700;
`,$t=o.span`
  font-weight: 400;
`,At=o.div`
  display: flex;
  justify-content: center;

  margin-bottom: 12rem;
  gap: 10rem;
`,q=o(W)`
  width: 100%;
`,oe=o.h3`
  padding-bottom: 3.6rem;
  border-bottom: 1px solid ${p.colors.primaryColor};

  font-weight: 700;
  font-size: 4rem;

  letter-spacing: 0.5px;

  color: ${p.colors.primaryColor};
`,Nt=o(ne)`
  justify-content: start;
  border-bottom: 1px solid ${p.colors.primaryColor};
`,Dt=o.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`,z=o.div`
  padding: 4rem 0;
`,U=o(oe)`
  padding: none;
  border-bottom: none;
`,Bt=o.div`
  display: flex;
  flex-direction: column;

  padding-left: 4rem;
  border-left: 1px solid ${p.colors.primaryColor};

  gap: 2rem;
`,ae=o.div`
  display: flex;

  font-weight: 400;
  font-size: 2.4rem;
  line-height: 3.7rem;
  letter-spacing: 0.5px;

  color: ${p.colors.primaryColor};
`,Tt=o(ae)`
  gap: 5rem;
`,I=o(ae)`
  justify-content: space-between;

  gap: 5rem;
  &:nth-child(3) {
    padding-bottom: 5rem;
    border-bottom: 1px solid ${p.colors.primaryColor};
  }
`,Mt=o(I)`
  font-weight: 700;
  font-size: 3rem;
  line-height: 3.7rem;
`;function N({userName:t,orderItemsCount:r,totalItemsPrice:n,deliveryFee:a,discountPrice:i}){const s=n+a-i;return e.jsxs("div",{children:[e.jsx(T,{text:"주문완료"}),e.jsxs(ne,{children:[e.jsx(Lt,{children:"주문이 완료"}),e.jsx($t,{children:"되었습니다. 감사합니다!"})]}),e.jsxs(At,{children:[e.jsx(q,{to:g.HOME,children:e.jsx(R,{text:"홈으로"})}),e.jsx(q,{to:g.ORDERS,children:e.jsx(R,{text:"주문내역"})})]}),e.jsx(oe,{children:"상품배송 정보"}),e.jsxs(Nt,{children:[Te(new Date().getTime())," 도착 예정 (상품 ",r,"개)"]}),e.jsxs(Dt,{children:[e.jsxs(z,{children:[e.jsx(U,{children:"받는 사람 정보"}),e.jsx("div",{children:e.jsxs(Tt,{children:[e.jsx("span",{children:"받는사람"}),e.jsx("span",{children:t})]})})]}),e.jsxs(z,{children:[e.jsx(U,{children:"결제 정보"}),e.jsxs(Bt,{children:[e.jsxs(I,{children:[e.jsx("span",{children:"상품가격"}),e.jsxs("span",{children:[n,"원"]})]}),e.jsxs(I,{children:[e.jsx("span",{children:"배송비"}),e.jsxs("span",{children:[a,"원"]})]}),e.jsxs(I,{children:[e.jsx("span",{children:"할인 금액"}),e.jsxs("span",{children:["-",i,"원"]})]}),e.jsxs(Mt,{children:[e.jsx("span",{children:"총 결제금액"}),e.jsxs("span",{children:[s,"원"]})]})]})]})]})]})}try{N.displayName="OrderCompleteInfo",N.__docgenInfo={description:"",displayName:"OrderCompleteInfo",props:{userName:{defaultValue:null,description:"",name:"userName",required:!0,type:{name:"string"}},orderItemsCount:{defaultValue:null,description:"",name:"orderItemsCount",required:!0,type:{name:"number"}},totalItemsPrice:{defaultValue:null,description:"",name:"totalItemsPrice",required:!0,type:{name:"number"}},deliveryFee:{defaultValue:null,description:"",name:"deliveryFee",required:!0,type:{name:"number"}},discountPrice:{defaultValue:null,description:"",name:"discountPrice",required:!0,type:{name:"number"}}}}}catch{}function Vt(){const t=m(C),r=ce(),{deliveryFee:n,discountPrice:a,totalItemsPrice:i,orderItemsCount:s}=r.state;return e.jsx(y,{children:e.jsx(N,{deliveryFee:n,discountPrice:a,totalItemsPrice:i,orderItemsCount:s,userName:t.nickname})})}const qt=H({key:"getOrderDetailSelector",get:t=>async({get:r})=>{const n=r(C),a=r(b);return await Pe({serverName:a,userInfo:n,orderId:t})},cachePolicy_UNSTABLE:{eviction:"most-recent"}}),zt=pe({key:"orderDetailState",default:t=>qt(t)}),Ut=o.div`
  display: grid;
  grid-template-columns: 3fr 2fr;

  margin-top: 3rem;
`;function D({orderId:t}){const r=v(),n=m(zt(t));return n||r(g.HOME),e.jsxs("div",{children:[e.jsx(Me,{order:n,isVisibleDetail:!1}),e.jsxs(Ut,{children:[e.jsx("div",{}),e.jsx(Ve,{deliveryFee:n.deliveryFee,discountPrice:n.discountPrice,totalItemsPrice:n.totalItemsPrice})]})]})}try{D.displayName="OrderDetailArea",D.__docgenInfo={description:"",displayName:"OrderDetailArea",props:{orderId:{defaultValue:null,description:"",name:"orderId",required:!0,type:{name:"number"}}}}}catch{}function Wt(){const{orderId:t}=de();return e.jsxs(y,{children:[e.jsx(T,{text:"주문 내역 상세"}),e.jsx(l.Suspense,{fallback:e.jsx(w,{}),children:e.jsx(D,{orderId:Number(t)})})]})}const g={HOME:"/",CART:"/cart",ORDERS:"/orders"},ie={COMPLETE:`${g.ORDERS}/complete`};le([{path:g.HOME,element:e.jsx(Et,{})},{path:g.CART,element:e.jsx(gt,{})},{path:g.ORDERS,element:e.jsx(Ot,{})},{path:`${g.ORDERS}/:orderId`,element:e.jsx(Wt,{})},{path:ie.COMPLETE,element:e.jsx(Vt,{})}],{basename:"/react-shopping-cart-prod"});try{Router.displayName="Router",Router.__docgenInfo={description:"A Router instance manages all navigation and data loading/mutations",displayName:"Router",props:{}}}catch{}const Ft=()=>{const[t,r]=_(b),n=i=>{r(i)};return{server:t,handleServer:n,onServerChange:i=>{const{value:s}=i.currentTarget,c=G.filter(d=>d===s)[0];n(c)}}},Ht=()=>{const[t,r]=_(C),n=i=>{const s=Q.find(c=>c.nickname===i);if(!s)throw new Error("바꾸고자 하는 유저가 존재하지 않습니다.");r(s)};return{userInfo:t,handleUser:n,onUserChange:i=>{const{value:s}=i.currentTarget;n(s)}}},Kt=o.button`
  display: flex;
  color: ${({theme:t})=>t.colors.lightColor};
`,Qt=o.div`
  font-size: 24px;
`,Gt=o.div`
  border-radius: 50%;
  background-color: #04c09e;
  width: 2.6rem;
  height: 2.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;

  @media screen and (max-width: ${({theme:t})=>t.breakpoints.sm}) {
    width: 3.2rem;
    height: 3.2rem;
  }
`,Yt=o.div`
  font-size: 1.6rem;
  color: #fff;
`,Jt=o.div`
  @media screen and (max-width: ${({theme:t})=>t.breakpoints.md}) {
    display: none;
  }
`;function Xt(){const t=m(f),r=v();return e.jsxs(Kt,{type:"button","aria-label":"장바구니 페이지로 가기",role:"button",onClick:()=>{r("/cart")},children:[e.jsx(Qt,{children:e.jsx(Jt,{children:"장바구니"})}),e.jsx(Gt,{children:e.jsx(Yt,{"aria-live":"polite",children:t.length})})]})}const Zt=""+new URL("logo-48e72768.svg",import.meta.url).href,er=""+new URL("shop-ddc53723.svg",import.meta.url).href,tr=o.button`
  display: flex;
  align-items: center;
  color: ${({theme:t})=>t.colors.lightColor};
`;o.img`
  width: 4rem;
  height: 4rem;
`;const rr=o.div`
  margin-right: 1rem;

  @media screen and (max-width: ${({theme:t})=>t.breakpoints.md}) {
    display: none;
  }
`;function nr(){const t=v();return e.jsxs(tr,{type:"button","aria-label":"SHOP 홈페이지로 가기",role:"button",onClick:()=>{t("/")},children:[e.jsx(rr,{children:e.jsx("img",{src:Zt,alt:"로고 이미지"})}),e.jsx("img",{src:er,alt:"로고 이미지"})]})}const or=o.div`
  background-color: ${({theme:t})=>t.colors.primaryColor};
  color: ${({theme:t})=>t.colors.lightColor};
  margin-bottom: 3rem;
`,ar=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`,ir=o(W)`
  font-size: 2.4rem;
`;function sr(){const{userInfo:t,onUserChange:r}=Ht(),{server:n,onServerChange:a}=Ft();return e.jsx(or,{children:e.jsx(ee,{children:e.jsxs(ar,{children:[e.jsx(nr,{}),e.jsx(M,{options:G.map(i=>({value:i,name:i})),onChange:a,value:n}),e.jsxs(l.Suspense,{children:[e.jsx(M,{options:Q.map(i=>({value:i.nickname,name:i.nickname})),onChange:r,value:t.nickname}),e.jsx(ir,{to:g.ORDERS,children:"주문 내역"}),e.jsx(Xt,{})]})]})})})}function y({children:t}){return e.jsxs(e.Fragment,{children:[e.jsx(sr,{}),e.jsx(ee,{children:t})]})}try{y.displayName="Layout",y.__docgenInfo={description:"",displayName:"Layout",props:{}}}catch{}export{sr as H,y as L,A as M,N as O,Wt as a,Ot as b};
//# sourceMappingURL=index-067a0592.js.map
