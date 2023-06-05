import{i as o,j as e}from"./styled-components.browser.esm-aaaef0f3.js";import{r as l}from"./index-8db94870.js";import{u as b,L as z,a as ae,b as se,c as ce}from"./index-6b0f0fe4.js";import{a as U,b as k,c as p,d as W,e as de,f as le}from"./index-0c9fedb2.js";import{c as x}from"./cartState-7478dda1.js";import{w as me,a as pe,g as ue,C as he}from"./index-79938c21.js";import{u as y,s as I,f as ge,U as F}from"./fetchUtils-f1ccc203.js";import{e as H,f as xe,h as fe,t as ye,g as Ce,p as je,S as K}from"./serverUrlConstants-fe72d8a7.js";import{s as be,O as ke,g as Ie}from"./index-77074ae7.js";import{C as we}from"./index-fc5ca4cd.js";import{u as _e,S as ve}from"./index-59547c10.js";import{C as Q}from"./index-fa80f56e.js";import{t as m}from"./theme-cf2b1b34.js";import{E as Se,P as Pe,a as Re}from"./index-57ceba2c.js";import{B as P}from"./index-a09c039b.js";import{P as Ee,a as Oe,b as Le,c as $e,d as Ae}from"./index-a48b44a1.js";import{O as D}from"./index-c18acebd.js";import{g as Ne}from"./common-a48b2eb5.js";import{O as De}from"./OrderItem-d4baa48e.js";import{O as Be}from"./index-4995a37d.js";import{S as B}from"./index-3388ab67.js";const Te=U({key:"cartCountChecked",get:({get:t})=>{const r=t(x);return H(r).length}}),G=()=>{const[t,r]=k(x),n=p(Te);return{checkedCount:n,isAllChecked:()=>t.length===n,toggleAllCartItem:c=>{const d=xe({cart:t,isCheck:c});r(d)},deleteCheckedItems:()=>{const c=fe(t);r(c)}}},Me=W({key:"cartItemCheckedState",get:t=>({get:r})=>{const i=r(x).find(a=>a.id===t);if(!i)throw new Error("장바구니 아이템을 찾을 수 없습니다. - withItemCheckBy");return i.isSelect},set:t=>({get:r,set:n})=>{const i=r(x),a=ye({cart:i,cartId:t});n(x,a)}}),Ve=t=>{const[r,n]=k(Me(t));return{isChecked:r,toggleCheck:()=>{n(!r)}}},qe=""+new URL("delete-be464820.svg",import.meta.url).href,ze=o.section`
  display: flex;
  flex-direction: column;

  width: 100%;
`,Y=o.section`
  display: flex;

  justify-content: space-between;

  width: 100%;
`,Ue=o.section`
  flex: 1.2;
  display: flex;
  flex-direction: column;
`,J=o(Y)`
  column-gap: 1rem;
  width: 100%;
  margin: 1rem;
  border-bottom: ${({theme:t})=>t.colors.secondaryColor} 1px solid;
  padding: 1rem;
  width: 95%;

  justify-content: start;
`,We=o.div`
  width: 144px;
  height: 144px;
`,Fe=o.img`
  height: 100%;
  aspect-ratio: 1/1;

  object-fit: cover;
`,He=o.p`
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.4rem;

  letter-spacing: 0.5px;

  color: ${m.colors.primaryColor};
`,Ke=o.div`
  flex: 1 1 12rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;

  padding-bottom: 2.4rem;
`,Qe=o.img`
  width: 18px;
  height: 18px;

  margin-bottom: 2.4rem;

  cursor: pointer;
`,Ge=o.p`
  margin-top: 2rem;

  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.4rem;

  text-align: right;
  letter-spacing: 0.5px;

  color: ${m.colors.primaryColor};
`;function R({cartId:t,productId:r,imageUrl:n,name:i,price:a}){const{isChecked:s,toggleCheck:c}=Ve(t),{onQuantityInputChange:d,decreaseQuantity:h,increaseQuantity:w,countInputRef:_,quantity:g,onQuantityBlur:v,removeCartItemAndDelete:ie}=_e({id:r,imageUrl:n,name:i,price:a});return e.jsxs(J,{children:[e.jsx(Q,{type:"checkbox",checked:s,onChange:c}),e.jsx(We,{children:e.jsx(Fe,{src:n})}),e.jsx(He,{children:i}),e.jsxs(Ke,{children:[e.jsx(Qe,{src:qe,onClick:ie}),e.jsx(ve,{stepperstyle:"large",onChange:d,onDecrease:h,onIncrease:w,countInputRef:_,quantity:g,onQuantityBlur:v,ariaIncreaseLabel:`${i}의 장바구니에 담긴 개수에서 하나 더하기`,ariaDecreaseLabel:`${i}의 장바구니에 담긴 개수에서 하나 빼기`}),e.jsx(Ge,{children:`${(a*g).toLocaleString("ko-KR")} 원`})]})]})}try{R.displayName="CartItemBox",R.__docgenInfo={description:"",displayName:"CartItemBox",props:{cartId:{defaultValue:null,description:"",name:"cartId",required:!0,type:{name:"number"}},productId:{defaultValue:null,description:"",name:"productId",required:!0,type:{name:"number"}},imageUrl:{defaultValue:null,description:"",name:"imageUrl",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},price:{defaultValue:null,description:"",name:"price",required:!0,type:{name:"number"}}}}}catch{}const E=o(Ue)`
  flex: 2;
`,Ye=o(Y)`
  column-gap: 1rem;
  width: 100%;
  margin: 1rem;
  border: ${({theme:t})=>t.colors.lightColor} 1px solid;
  padding: 1rem;
  border-radius: 8px;
  justify-content: start;
  align-items: center;
`,Je=o.button`
  padding: 0.5rem 1.8rem;

  font-family: 'Noto Sans KR';
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.1rem;

  color: ${({theme:t})=>t.colors.primaryColor};
  border: 1px solid ${({theme:t})=>t.colors.secondaryColor};
`,Xe=o.span`
  font-size: 1.6rem;
  width: 12rem;
`;function O({cart:t}){const{isAllChecked:r,toggleAllCartItem:n,deleteCheckedItems:i,checkedCount:a}=G(),s=t.length;return s===0?e.jsx(E,{children:e.jsx("span",{style:{textAlign:"center",fontSize:"30px",margin:"auto"},children:"텅"})}):e.jsxs(E,{children:[t.map(({id:c,product:d})=>e.jsx("li",{children:e.jsx(R,{cartId:c,productId:d.id,imageUrl:d.imageUrl,name:d.name,price:d.price})},c)),e.jsxs(Ye,{children:[e.jsx(Q,{type:"checkbox",checked:r(),onChange:()=>n(!r())}),e.jsx(Xe,{children:`전체 선택 (${a} / ${s})`}),e.jsx(Je,{onClick:i,children:"선택삭제"})]})]})}try{O.displayName="CartItemList",O.__docgenInfo={description:"",displayName:"CartItemList",props:{cart:{defaultValue:null,description:"",name:"cart",required:!0,type:{name:"CartItemType[]"}}}}}catch{}const Ze=o.main`
  display: flex;

  padding: 3.4rem 0;

  @media screen and (max-width: ${({theme:t})=>t.breakpoints.md}) {
    flex-direction: column;
  }
`,et=o.div`
  padding-bottom: 1.6rem;
  border-bottom: 4px solid ${m.colors.secondaryColor};

  font-weight: 400;
  font-size: 2rem;
  line-height: 3.3rem;

  letter-spacing: 0.5px;
`,tt=o.div`
  width: 45rem;
  @media screen and (max-width: ${({theme:t})=>t.breakpoints.md}) {
    max-width: none;
  }
`,rt=o.div`
  margin-bottom: 4rem;

  @media screen and (max-width: ${({theme:t})=>t.breakpoints.md}) {
    margin-top: 4rem;
  }
`,T=3e3;function L({onModalOpen:t,selectedCoupon:r,resetSelectedCoupon:n}){const i=p(y),a=p(I),s=b(),c=p(x),d=p(me),h=p(pe),{checkedCount:w}=G(),_=async()=>{const v=H(c);await be({cartItemIds:v,serverName:a,couponId:r==null?void 0:r.id,userInfo:i}),s(oe.COMPLETE,{state:{deliveryFee:T,discountPrice:g,totalItemsPrice:d,orderItemsCount:w}})},g=r?ue({coupon:r,totalItemsPrice:d}):0;return l.useEffect(()=>{g===0&&n()},[g,n]),e.jsxs("div",{children:[e.jsxs(et,{children:["든든배송 상품 (",c.length,"개)"]}),e.jsxs(Ze,{children:[e.jsx(O,{cart:c}),e.jsxs(tt,{children:[e.jsx(rt,{children:e.jsx(we,{selectedCoupon:r,onCouponModalOpen:t,availableCouponLength:h.length??0})}),e.jsx(Se,{totalItemsPrice:d,deliveryFee:d?T:0,discountPrice:g,onOrderClick:_})]})]})]})}try{L.displayName="CartListArea",L.__docgenInfo={description:"",displayName:"CartListArea",props:{onModalOpen:{defaultValue:null,description:"",name:"onModalOpen",required:!0,type:{name:"() => void"}},selectedCoupon:{defaultValue:null,description:"",name:"selectedCoupon",required:!0,type:{name:"CouponType | null"}},resetSelectedCoupon:{defaultValue:null,description:"",name:"resetSelectedCoupon",required:!0,type:{name:"() => void"}}}}}catch{}const nt=E,ot=Re,it=o(J)`
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
`,at=o(Pe)`
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
`;function j(){return e.jsxs(e.Fragment,{children:[e.jsx(nt,{children:Array.from({length:3}).map((t,r)=>e.jsx(it,{},r))}),e.jsx(ot,{children:e.jsx(at,{})})]})}function $({title:t,onModalClose:r,children:n}){const i=l.useRef(null);return e.jsx(st,{ref:i,children:e.jsxs(ct,{children:[e.jsx(dt,{children:t}),e.jsx(lt,{children:n}),e.jsx(mt,{children:e.jsx(P,{text:"닫기",onClick:r})})]})})}const st=o.dialog`
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
`,ct=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 120rem;

  padding: 3rem 0 6rem 0;
  border: 1px solid ${m.colors.primaryColor};

  background: ${m.colors.lightColor};
`,dt=o.h1`
  font-weight: 700;
  font-size: 4rem;

  margin-bottom: 5rem;

  color: ${m.colors.primaryColor};
`,lt=o.main`
  height: 40rem;
  margin-bottom: 5rem;

  overflow-y: scroll;
`,mt=o.div`
  width: 42rem;
`;try{$.displayName="Modal",$.__docgenInfo={description:"",displayName:"Modal",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},onModalClose:{defaultValue:null,description:"",name:"onModalClose",required:!0,type:{name:"() => void"}}}}}catch{}function pt(){const[t,r]=l.useState(!1),[n,i]=l.useState(null),a=()=>{r(!0)},s=()=>{r(!1)},c=h=>{i(h)},d=()=>{i(null)};return e.jsxs(f,{children:[e.jsx(ze,{children:e.jsx(l.Suspense,{fallback:e.jsx(j,{}),children:e.jsx(L,{onModalOpen:a,selectedCoupon:n,resetSelectedCoupon:d})})}),t&&e.jsx($,{onModalClose:s,title:"쿠폰함",children:e.jsx(l.Suspense,{fallback:e.jsx(j,{}),children:e.jsx(he,{selectedCoupon:n,onCouponSelect:c})})})]})}const ut=l.createContext(null),S={didCatch:!1,error:null};class ht extends l.Component{constructor(r){super(r),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=S}static getDerivedStateFromError(r){return{didCatch:!0,error:r}}resetErrorBoundary(...r){var i,a;const{error:n}=this.state;n!==null&&((a=(i=this.props).onReset)==null||a.call(i,{args:r,reason:"imperative-api"}),this.setState(S))}componentDidCatch(r,n){var i,a;(a=(i=this.props).onError)==null||a.call(i,r,n)}componentDidUpdate(r,n){var s,c;const{didCatch:i}=this.state,{resetKeys:a}=this.props;i&&n.error!==null&&gt(r.resetKeys,a)&&((c=(s=this.props).onReset)==null||c.call(s,{next:a,prev:r.resetKeys,reason:"keys"}),this.setState(S))}render(){const{children:r,fallbackRender:n,FallbackComponent:i,fallback:a}=this.props,{didCatch:s,error:c}=this.state;let d=r;if(s){const h={error:c,resetErrorBoundary:this.resetErrorBoundary};if(l.isValidElement(a))d=a;else if(typeof n=="function")d=n(h);else if(i)d=l.createElement(i,h);else throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")}return l.createElement(ut.Provider,{value:{didCatch:s,error:c,resetErrorBoundary:this.resetErrorBoundary}},d)}}function gt(t=[],r=[]){return t.length!==r.length||t.some((n,i)=>!Object.is(n,r[i]))}const xt=async({serverName:t,userInfo:r})=>{const n=await ge(Ce(t),{email:r.email,password:r.password});return je(n)},ft=U({key:"getProductList",get:async({get:t})=>{const r=t(y),n=t(I);return await xt({serverName:n,userInfo:r})},cachePolicy_UNSTABLE:{eviction:"most-recent"}}),yt=de({key:"productListState",default:ft}),X=o.div`
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
`,Z=o.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;
  column-gap: 1rem;
`,ee=o.div`
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
`;function Ct(){const t=p(yt);return e.jsx(Z,{children:t.map(r=>e.jsx(ee,{children:e.jsx(Ee,{product:r})},r.id))})}const jt=Z,bt=ee,kt=Ae,It=o(Oe)`
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
`,wt=o(Le)`
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
`,_t=o($e)`
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
`;function vt(){return e.jsx(jt,{children:Array.from({length:12}).map((t,r)=>e.jsx(bt,{children:e.jsxs(kt,{children:[e.jsx(_t,{}),e.jsxs("div",{children:[e.jsx(It,{}),e.jsx(wt,{})]})]})},r))})}function St(){return e.jsx(f,{children:e.jsx(ht,{fallback:e.jsx("p",{children:"에러입니다"}),children:e.jsx(l.Suspense,{fallback:e.jsx(vt,{}),children:e.jsx(Ct,{})})})})}function Pt(){return e.jsxs(f,{children:[e.jsx(D,{text:"주문 목록"}),e.jsx(l.Suspense,{fallback:e.jsx(j,{}),children:e.jsx(ke,{})})]})}const te=o.div`
  display: flex;
  justify-content: center;

  padding: 8rem 0;

  font-size: 3rem;
  line-height: 3.7rem;
  letter-spacing: 0.5px;

  color: ${m.colors.primaryColor};
`,Rt=o.span`
  font-weight: 700;
`,Et=o.span`
  font-weight: 400;
`,Ot=o.div`
  display: flex;
  justify-content: center;

  margin-bottom: 12rem;
  gap: 10rem;
`,M=o(z)`
  width: 100%;
`,re=o.h3`
  padding-bottom: 3.6rem;
  border-bottom: 1px solid ${m.colors.primaryColor};

  font-weight: 700;
  font-size: 4rem;

  letter-spacing: 0.5px;

  color: ${m.colors.primaryColor};
`,Lt=o(te)`
  justify-content: start;
  border-bottom: 1px solid ${m.colors.primaryColor};
`,$t=o.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`,V=o.div`
  padding: 4rem 0;
`,q=o(re)`
  padding: none;
  border-bottom: none;
`,At=o.div`
  display: flex;
  flex-direction: column;

  padding-left: 4rem;
  border-left: 1px solid ${m.colors.primaryColor};

  gap: 2rem;
`,ne=o.div`
  display: flex;

  font-weight: 400;
  font-size: 2.4rem;
  line-height: 3.7rem;
  letter-spacing: 0.5px;

  color: ${m.colors.primaryColor};
`,Nt=o(ne)`
  gap: 5rem;
`,C=o(ne)`
  justify-content: space-between;

  gap: 5rem;
  &:nth-child(3) {
    padding-bottom: 5rem;
    border-bottom: 1px solid ${m.colors.primaryColor};
  }
`,Dt=o(C)`
  font-weight: 700;
  font-size: 3rem;
  line-height: 3.7rem;
`;function A({userName:t,orderItemsCount:r,totalItemsPrice:n,deliveryFee:i,discountPrice:a}){const s=n+i-a;return e.jsxs("div",{children:[e.jsx(D,{text:"주문완료"}),e.jsxs(te,{children:[e.jsx(Rt,{children:"주문이 완료"}),e.jsx(Et,{children:"되었습니다. 감사합니다!"})]}),e.jsxs(Ot,{children:[e.jsx(M,{to:u.HOME,children:e.jsx(P,{text:"홈으로"})}),e.jsx(M,{to:u.ORDERS,children:e.jsx(P,{text:"주문내역"})})]}),e.jsx(re,{children:"상품배송 정보"}),e.jsxs(Lt,{children:[Ne(new Date().getTime())," 도착 예정 (상품 ",r,"개)"]}),e.jsxs($t,{children:[e.jsxs(V,{children:[e.jsx(q,{children:"받는 사람 정보"}),e.jsx("div",{children:e.jsxs(Nt,{children:[e.jsx("span",{children:"받는사람"}),e.jsx("span",{children:t})]})})]}),e.jsxs(V,{children:[e.jsx(q,{children:"결제 정보"}),e.jsxs(At,{children:[e.jsxs(C,{children:[e.jsx("span",{children:"상품가격"}),e.jsxs("span",{children:[n,"원"]})]}),e.jsxs(C,{children:[e.jsx("span",{children:"배송비"}),e.jsxs("span",{children:[i,"원"]})]}),e.jsxs(C,{children:[e.jsx("span",{children:"할인 금액"}),e.jsxs("span",{children:["-",a,"원"]})]}),e.jsxs(Dt,{children:[e.jsx("span",{children:"총 결제금액"}),e.jsxs("span",{children:[s,"원"]})]})]})]})]})]})}try{A.displayName="OrderCompleteInfo",A.__docgenInfo={description:"",displayName:"OrderCompleteInfo",props:{userName:{defaultValue:null,description:"",name:"userName",required:!0,type:{name:"string"}},orderItemsCount:{defaultValue:null,description:"",name:"orderItemsCount",required:!0,type:{name:"number"}},totalItemsPrice:{defaultValue:null,description:"",name:"totalItemsPrice",required:!0,type:{name:"number"}},deliveryFee:{defaultValue:null,description:"",name:"deliveryFee",required:!0,type:{name:"number"}},discountPrice:{defaultValue:null,description:"",name:"discountPrice",required:!0,type:{name:"number"}}}}}catch{}function Bt(){const t=p(y),r=ae(),{deliveryFee:n,discountPrice:i,totalItemsPrice:a,orderItemsCount:s}=r.state;return e.jsx(f,{children:e.jsx(A,{deliveryFee:n,discountPrice:i,totalItemsPrice:a,orderItemsCount:s,userName:t.nickname})})}const Tt=W({key:"getOrderDetailSelector",get:t=>async({get:r})=>{const n=r(y),i=r(I);return await Ie({serverName:i,userInfo:n,orderId:t})},cachePolicy_UNSTABLE:{eviction:"most-recent"}}),Mt=le({key:"orderDetailState",default:t=>Tt(t)}),Vt=o.div`
  display: grid;
  grid-template-columns: 3fr 2fr;

  margin-top: 3rem;
`;function N({orderId:t}){const r=b(),n=p(Mt(t));return n||r(u.HOME),e.jsxs("div",{children:[e.jsx(De,{order:n,isVisibleDetail:!1}),e.jsxs(Vt,{children:[e.jsx("div",{}),e.jsx(Be,{deliveryFee:n.deliveryFee,discountPrice:n.discountPrice,totalItemsPrice:n.totalItemsPrice})]})]})}try{N.displayName="OrderDetailArea",N.__docgenInfo={description:"",displayName:"OrderDetailArea",props:{orderId:{defaultValue:null,description:"",name:"orderId",required:!0,type:{name:"number"}}}}}catch{}function qt(){const{orderId:t}=se();return e.jsxs(f,{children:[e.jsx(D,{text:"주문 내역 상세"}),e.jsx(l.Suspense,{fallback:e.jsx(j,{}),children:e.jsx(N,{orderId:Number(t)})})]})}const u={HOME:"/",CART:"/cart",ORDERS:"/orders"},oe={COMPLETE:`${u.ORDERS}/complete`};ce([{path:u.HOME,element:e.jsx(St,{})},{path:u.CART,element:e.jsx(pt,{})},{path:u.ORDERS,element:e.jsx(Pt,{})},{path:`${u.ORDERS}/:orderId`,element:e.jsx(qt,{})},{path:oe.COMPLETE,element:e.jsx(Bt,{})}],{basename:"/react-shopping-cart-prod"});try{Router.displayName="Router",Router.__docgenInfo={description:"A Router instance manages all navigation and data loading/mutations",displayName:"Router",props:{}}}catch{}const zt=()=>{const[t,r]=k(I),n=a=>{r(a)};return{server:t,handleServer:n,onServerChange:a=>{const{value:s}=a.currentTarget,c=K.filter(d=>d===s)[0];n(c)}}},Ut=()=>{const[t,r]=k(y),n=a=>{const s=F.find(c=>c.nickname===a);if(!s)throw new Error("바꾸고자 하는 유저가 존재하지 않습니다.");r(s)};return{userInfo:t,handleUser:n,onUserChange:a=>{const{value:s}=a.currentTarget;n(s)}}},Wt=o.button`
  display: flex;
  color: ${({theme:t})=>t.colors.lightColor};
`,Ft=o.div`
  font-size: 24px;
`,Ht=o.div`
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
`,Kt=o.div`
  font-size: 1.6rem;
  color: #fff;
`,Qt=o.div`
  @media screen and (max-width: ${({theme:t})=>t.breakpoints.md}) {
    display: none;
  }
`;function Gt(){const t=p(x),r=b();return e.jsxs(Wt,{type:"button","aria-label":"장바구니 페이지로 가기",role:"button",onClick:()=>{r("/cart")},children:[e.jsx(Ft,{children:e.jsx(Qt,{children:"장바구니"})}),e.jsx(Ht,{children:e.jsx(Kt,{"aria-live":"polite",children:t.length})})]})}const Yt=""+new URL("logo-48e72768.svg",import.meta.url).href,Jt=""+new URL("shop-ddc53723.svg",import.meta.url).href,Xt=o.button`
  display: flex;
  align-items: center;
  color: ${({theme:t})=>t.colors.lightColor};
`;o.img`
  width: 4rem;
  height: 4rem;
`;const Zt=o.div`
  margin-right: 1rem;

  @media screen and (max-width: ${({theme:t})=>t.breakpoints.md}) {
    display: none;
  }
`;function er(){const t=b();return e.jsxs(Xt,{type:"button","aria-label":"SHOP 홈페이지로 가기",role:"button",onClick:()=>{t("/")},children:[e.jsx(Zt,{children:e.jsx("img",{src:Yt,alt:"로고 이미지"})}),e.jsx("img",{src:Jt,alt:"로고 이미지"})]})}const tr=o.div`
  background-color: ${({theme:t})=>t.colors.primaryColor};
  color: ${({theme:t})=>t.colors.lightColor};
  margin-bottom: 3rem;
`,rr=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`,nr=o(z)`
  font-size: 2.4rem;
`;function or(){const{onUserChange:t}=Ut(),{onServerChange:r}=zt();return e.jsx(tr,{children:e.jsx(X,{children:e.jsxs(rr,{children:[e.jsx(er,{}),e.jsx(B,{options:K.map(n=>({value:n,name:n})),onChange:r}),e.jsxs(l.Suspense,{children:[e.jsx(B,{options:F.map(n=>({value:n.nickname,name:n.nickname})),onChange:t}),e.jsx(nr,{to:u.ORDERS,children:"주문 내역"}),e.jsx(Gt,{})]})]})})})}function f({children:t}){return e.jsxs(e.Fragment,{children:[e.jsx(or,{}),e.jsx(X,{children:t})]})}try{f.displayName="Layout",f.__docgenInfo={description:"",displayName:"Layout",props:{}}}catch{}export{or as H,f as L,$ as M,A as O,qt as a,Pt as b};
//# sourceMappingURL=index-aaf0b0c6.js.map
