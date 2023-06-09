import{i as n,j as t}from"./styled-components.browser.esm-aaaef0f3.js";import{r as l}from"./index-8db94870.js";import{u as v,L as H,a as le,b as me,c as pe}from"./index-6b0f0fe4.js";import{a as K,b as u,c as S,d as Q,e as M,f as ue,g as he}from"./index-5d0f5e1c.js";import{c as C,r as ge,g as fe}from"./cartState-ed36082c.js";import{w as G,a as xe,g as ye,b as be,C as Ce}from"./index-4f8520cd.js";import{s as w,u as k,f as ke,U as Y}from"./fetchUtils-bc3095e2.js";import{e as B,f as je,h as we,t as Ie,g as _e,p as ve,S as J}from"./serverUrlConstants-ecb6b37d.js";import{u as X,a as Se,S as $e}from"./index-79fc49d7.js";import{s as Pe,O as Re,g as Ee}from"./index-08651e61.js";import{C as Le}from"./index-fc5ca4cd.js";import{C as Z}from"./index-fa80f56e.js";import{t as m}from"./theme-cf2b1b34.js";import{E as Oe,P as Ne,a as Ae}from"./index-57ceba2c.js";import{B as R}from"./index-a09c039b.js";import{P as De,a as ze,b as Be,c as Te,d as Me}from"./index-531ecb76.js";import{O as T}from"./index-c18acebd.js";import{g as Ve}from"./common-a48b2eb5.js";import{O as qe}from"./OrderItem-d4baa48e.js";import{O as Ue}from"./index-bedfe2dc.js";import{S as V}from"./index-3388ab67.js";const Fe=K({key:"cartCountChecked",get:({get:e})=>{const r=e(C);return B(r).length}}),ee=()=>{const e=u(w),r=u(k),[o,i]=S(C),{cartFetchData:a}=X(),s=u(Fe),d=u(G);return{checkedCount:s,totalCartPrice:d,isAllChecked:()=>o.length===s,toggleAllCartItem:h=>{const f=je({cart:o,isCheck:h});i(f)},deleteCheckedItems:async()=>{const h=we(o);i(h);const f=B(o);for(const x of f)try{await ge({cartId:x,serverName:e,userInfo:r})}catch(j){console.error(j),a()}}}},We=Q({key:"cartItemCheckedState",get:e=>({get:r})=>{const i=r(C).find(a=>a.id===e);if(!i)throw new Error("장바구니 아이템을 찾을 수 없습니다. - withItemCheckBy");return i.isSelect},set:e=>({get:r,set:o})=>{const i=r(C),a=Ie({cart:i,cartId:e});o(C,a)}}),He=e=>{const[r,o]=S(We(e));return{isChecked:r,toggleCheck:()=>{o(!r)}}},Ke=""+new URL("delete-be464820.svg",import.meta.url).href,Qe=n.section`
  display: flex;
  flex-direction: column;

  width: 100%;
`,te=n.section`
  display: flex;

  justify-content: space-between;

  width: 100%;
`,Ge=n.section`
  flex: 1.2;
  display: flex;
  flex-direction: column;
`,re=n(te)`
  column-gap: 1rem;
  width: 100%;
  margin: 1rem;
  border-bottom: ${({theme:e})=>e.colors.secondaryColor} 1px solid;
  padding: 1rem;
  width: 95%;

  justify-content: start;
`,Ye=n.div`
  width: 144px;
  height: 144px;
`,Je=n.img`
  height: 100%;
  aspect-ratio: 1/1;

  object-fit: cover;
`,Xe=n.p`
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.4rem;

  letter-spacing: 0.5px;

  color: ${m.colors.primaryColor};
`,Ze=n.div`
  flex: 1 1 12rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;

  padding-bottom: 2.4rem;
`,et=n.img`
  width: 18px;
  height: 18px;

  margin-bottom: 2.4rem;

  cursor: pointer;
`,tt=n.p`
  margin-top: 2rem;

  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.4rem;

  text-align: right;
  letter-spacing: 0.5px;

  color: ${m.colors.primaryColor};
`;function E({cartId:e,productId:r,imageUrl:o,name:i,price:a}){const{isChecked:s,toggleCheck:d}=He(e),{onQuantityInputChange:c,decreaseQuantity:p,increaseQuantity:b,countInputRef:h,quantity:f,onQuantityBlur:x,removeCartItemAndDelete:j}=Se({id:r,imageUrl:o,name:i,price:a});return t.jsxs(re,{children:[t.jsx(Z,{type:"checkbox",checked:s,onChange:d}),t.jsx(Ye,{children:t.jsx(Je,{src:o})}),t.jsx(Xe,{children:i}),t.jsxs(Ze,{children:[t.jsx(et,{src:Ke,onClick:j}),t.jsx($e,{stepperstyle:"large",onChange:c,onDecrease:p,onIncrease:b,countInputRef:h,quantity:f,onQuantityBlur:$=>x($,!0),ariaIncreaseLabel:`${i}의 장바구니에 담긴 개수에서 하나 더하기`,ariaDecreaseLabel:`${i}의 장바구니에 담긴 개수에서 하나 빼기`,isCartPage:!0}),t.jsx(tt,{children:`${(a*f).toLocaleString("ko-KR")} 원`})]})]})}try{E.displayName="CartItemBox",E.__docgenInfo={description:"",displayName:"CartItemBox",props:{cartId:{defaultValue:null,description:"",name:"cartId",required:!0,type:{name:"number"}},productId:{defaultValue:null,description:"",name:"productId",required:!0,type:{name:"number"}},imageUrl:{defaultValue:null,description:"",name:"imageUrl",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},price:{defaultValue:null,description:"",name:"price",required:!0,type:{name:"number"}}}}}catch{}const L=n(Ge)`
  flex: 2;
`,rt=n(te)`
  column-gap: 1rem;
  width: 100%;
  margin: 1rem;
  border: ${({theme:e})=>e.colors.lightColor} 1px solid;
  padding: 1rem;
  border-radius: 8px;
  justify-content: start;
  align-items: center;
`,nt=n.button`
  padding: 0.5rem 1.8rem;

  font-family: 'Noto Sans KR';
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.1rem;

  color: ${({theme:e})=>e.colors.primaryColor};
  border: 1px solid ${({theme:e})=>e.colors.secondaryColor};
`,ot=n.span`
  font-size: 1.6rem;
  width: 12rem;
`;function O({cart:e}){const{isAllChecked:r,toggleAllCartItem:o,deleteCheckedItems:i,checkedCount:a}=ee(),s=e.length;return s===0?t.jsx(L,{children:t.jsx("span",{style:{textAlign:"center",fontSize:"30px",margin:"auto"},children:"텅"})}):t.jsxs(L,{children:[e.map(({id:d,product:c})=>t.jsx("li",{children:t.jsx(E,{cartId:d,productId:c.id,imageUrl:c.imageUrl,name:c.name,price:c.price})},d)),t.jsxs(rt,{children:[t.jsx(Z,{type:"checkbox",checked:r(),onChange:()=>o(!r())}),t.jsx(ot,{children:`전체 선택 (${a} / ${s})`}),t.jsx(nt,{onClick:i,children:"선택삭제"})]})]})}try{O.displayName="CartItemList",O.__docgenInfo={description:"",displayName:"CartItemList",props:{cart:{defaultValue:null,description:"",name:"cart",required:!0,type:{name:"CartItemType[]"}}}}}catch{}const it=n.main`
  display: flex;

  padding: 3.4rem 0;

  @media screen and (max-width: ${({theme:e})=>e.breakpoints.md}) {
    flex-direction: column;
  }
`,at=n.div`
  padding-bottom: 1.6rem;
  border-bottom: 4px solid ${m.colors.secondaryColor};

  font-weight: 400;
  font-size: 2rem;
  line-height: 3.3rem;

  letter-spacing: 0.5px;
`,st=n.div`
  width: 45rem;
  @media screen and (max-width: ${({theme:e})=>e.breakpoints.md}) {
    max-width: none;
  }
`,dt=n.div`
  margin-bottom: 4rem;

  @media screen and (max-width: ${({theme:e})=>e.breakpoints.md}) {
    margin-top: 4rem;
  }
`,q=3e3;function N({onModalOpen:e,selectedCoupon:r,resetSelectedCoupon:o}){const i=u(k),a=u(w),s=v(),{cart:d,cartFetchData:c}=X(),p=u(G),b=u(xe),{checkedCount:h}=ee(),f=async()=>{const j=B(d),$=await Pe({cartItemIds:j,serverName:a,couponId:r==null?void 0:r.id,userInfo:i});c(),s(ce.COMPLETE,{state:{deliveryFee:q,discountPrice:x,totalItemsPrice:p,orderItemsCount:h,orderId:$}})},x=r?ye({coupon:r,totalItemsPrice:p}):0;return l.useEffect(()=>{x===0&&o()},[x,o]),t.jsxs("div",{children:[t.jsxs(at,{children:["든든배송 상품 (",d.length,"개)"]}),t.jsxs(it,{children:[t.jsx(O,{cart:d}),t.jsxs(st,{children:[t.jsx(dt,{children:t.jsx(Le,{selectedCoupon:r,onCouponModalOpen:e,availableCouponLength:b.length??0})}),t.jsx(Oe,{totalItemsPrice:p,deliveryFee:p?q:0,discountPrice:x,onOrderClick:f})]})]})]})}try{N.displayName="CartListArea",N.__docgenInfo={description:"",displayName:"CartListArea",props:{onModalOpen:{defaultValue:null,description:"",name:"onModalOpen",required:!0,type:{name:"() => void"}},selectedCoupon:{defaultValue:null,description:"",name:"selectedCoupon",required:!0,type:{name:"CouponType | null"}},resetSelectedCoupon:{defaultValue:null,description:"",name:"resetSelectedCoupon",required:!0,type:{name:"() => void"}}}}}catch{}const ct=L,lt=Ae,mt=n(re)`
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
`,pt=n(Ne)`
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
`;function _(){return t.jsxs(t.Fragment,{children:[t.jsx(ct,{children:Array.from({length:3}).map((e,r)=>t.jsx(mt,{},r))}),t.jsx(lt,{children:t.jsx(pt,{})})]})}function A({title:e,onModalClose:r,children:o}){const i=l.useRef(null);return l.useEffect(()=>(document.body.dataset.hideScroll="true",()=>{document.body.dataset.hideScroll="false"}),[]),t.jsx(ut,{ref:i,children:t.jsxs(ht,{children:[t.jsx(gt,{children:e}),t.jsx(ft,{children:o}),t.jsx(xt,{children:t.jsx(R,{text:"닫기",onClick:r})})]})})}const ut=n.dialog`
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
`,ht=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 40rem;

  padding: 3rem 0 6rem 0;
  border: 1px solid ${m.colors.primaryColor};

  background: ${m.colors.lightColor};

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.md}) {
    width: 70rem;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    width: 80rem;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.xl}) {
    width: 120rem;
  }
`,gt=n.h1`
  font-weight: 700;
  font-size: 2.4rem;

  margin-bottom: 3rem;

  color: ${m.colors.primaryColor};

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: 3.2rem;
    margin-bottom: 5rem;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.xl}) {
    font-size: 4rem;
  }
`,ft=n.main`
  height: 12rem;
  margin-bottom: 3rem;

  overflow-y: scroll;

  @media screen and (min-height: 400px) {
    height: 20rem;
    margin-bottom: 5rem;
  }

  @media screen and (min-height: 600px) {
    height: 24rem;
  }

  @media screen and (min-height: 800px) {
    height: 36rem;
  }
`,xt=n.div`
  width: 20rem;

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.md}) {
    width: 24rem;
  }
`;try{A.displayName="Modal",A.__docgenInfo={description:"",displayName:"Modal",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},onModalClose:{defaultValue:null,description:"",name:"onModalClose",required:!0,type:{name:"() => void"}}}}}catch{}function yt(){const[e,r]=l.useState(!1),[o,i]=l.useState(null),a=M(be),s=M(fe),d=()=>{r(!0)},c=()=>{r(!1)},p=h=>{i(h)},b=()=>{i(null)};return l.useEffect(()=>{a(),s()},[a,s]),t.jsxs(y,{children:[t.jsx(Qe,{children:t.jsx(l.Suspense,{fallback:t.jsx(_,{}),children:t.jsx(N,{onModalOpen:d,selectedCoupon:o,resetSelectedCoupon:b})})}),e&&t.jsx(A,{onModalClose:c,title:"쿠폰함",children:t.jsx(l.Suspense,{fallback:t.jsx(_,{}),children:t.jsx(Ce,{selectedCoupon:o,onCouponSelect:p})})})]})}const bt=l.createContext(null),P={didCatch:!1,error:null};class Ct extends l.Component{constructor(r){super(r),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=P}static getDerivedStateFromError(r){return{didCatch:!0,error:r}}resetErrorBoundary(...r){var i,a;const{error:o}=this.state;o!==null&&((a=(i=this.props).onReset)==null||a.call(i,{args:r,reason:"imperative-api"}),this.setState(P))}componentDidCatch(r,o){var i,a;(a=(i=this.props).onError)==null||a.call(i,r,o)}componentDidUpdate(r,o){var s,d;const{didCatch:i}=this.state,{resetKeys:a}=this.props;i&&o.error!==null&&kt(r.resetKeys,a)&&((d=(s=this.props).onReset)==null||d.call(s,{next:a,prev:r.resetKeys,reason:"keys"}),this.setState(P))}render(){const{children:r,fallbackRender:o,FallbackComponent:i,fallback:a}=this.props,{didCatch:s,error:d}=this.state;let c=r;if(s){const p={error:d,resetErrorBoundary:this.resetErrorBoundary};if(l.isValidElement(a))c=a;else if(typeof o=="function")c=o(p);else if(i)c=l.createElement(i,p);else throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")}return l.createElement(bt.Provider,{value:{didCatch:s,error:d,resetErrorBoundary:this.resetErrorBoundary}},c)}}function kt(e=[],r=[]){return e.length!==r.length||e.some((o,i)=>!Object.is(o,r[i]))}const jt=async({serverName:e,userInfo:r})=>{const o=await ke(_e(e),{email:r.email,password:r.password});return ve(o)},wt=K({key:"getProductList",get:async({get:e})=>{const r=e(k),o=e(w);return await jt({serverName:o,userInfo:r})},cachePolicy_UNSTABLE:{eviction:"most-recent"}}),It=ue({key:"productListState",default:wt}),ne=n.div`
  padding: 0 20px;
  margin: 0 auto;

  max-width: 100%;

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    max-width: 540px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.md}) {
    max-width: 720px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    max-width: 960px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.xl}) {
    max-width: 1140px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.xxl}) {
    max-width: 1320px;
  }
`,_t=n(ne)`
  padding: 11rem 0 3rem 0;
`,oe=n.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;
  column-gap: 1rem;
`,ie=n.div`
  width: calc(90%-1rem);
  @media screen and (min-width: ${({theme:e})=>e.breakpoints.md}) {
    width: 48%;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    width: 32%;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.xl}) {
    width: 24%;
  }
`;function vt(){const e=u(It);return t.jsx(oe,{children:e.map(r=>t.jsx(ie,{children:t.jsx(De,{product:r})},r.id))})}const St=oe,$t=ie,Pt=Me,Rt=n(ze)`
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
`,Et=n(Be)`
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
`,Lt=n(Te)`
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
`;function Ot(){return t.jsx(St,{children:Array.from({length:12}).map((e,r)=>t.jsx($t,{children:t.jsxs(Pt,{children:[t.jsx(Lt,{}),t.jsxs("div",{children:[t.jsx(Rt,{}),t.jsx(Et,{})]})]})},r))})}function Nt(){return t.jsx(y,{children:t.jsx(Ct,{fallback:t.jsx("p",{children:"에러입니다"}),children:t.jsx(l.Suspense,{fallback:t.jsx(Ot,{}),children:t.jsx(vt,{})})})})}function At(){return t.jsxs(y,{children:[t.jsx(T,{text:"주문 목록"}),t.jsx(l.Suspense,{fallback:t.jsx(_,{}),children:t.jsx(Re,{})})]})}const ae=n.div`
  display: flex;
  justify-content: center;

  padding: 4rem 0;

  font-size: 2rem;
  line-height: 3.7rem;
  letter-spacing: 0.5px;

  color: ${m.colors.primaryColor};

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    font-size: 2.4rem;
    padding: 6rem 0;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: 2.8rem;
    padding: 7rem 0;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: 3.2rem;
    padding: 8rem 0;
  }
`,Dt=n.span`
  font-weight: 700;
`,zt=n.span`
  font-weight: 400;
`,Bt=n.div`
  display: flex;
  justify-content: center;

  padding: 0 5rem;

  margin-bottom: 6rem;
  gap: 5rem;

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    margin-bottom: 8rem;
    gap: 6rem;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.md}) {
    margin-bottom: 10rem;
    gap: 8rem;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    margin-bottom: 12rem;
    gap: 10rem;
  }
`,U=n(H)`
  width: 100%;

  max-width: 30rem;
`,se=n.h3`
  padding-bottom: 1.8rem;
  border-bottom: 1px solid ${m.colors.primaryColor};

  font-weight: 700;
  font-size: 2.4rem;

  letter-spacing: 0.5px;

  color: ${m.colors.primaryColor};

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    padding-bottom: 2.4rem;
    font-size: 2.8rem;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.md}) {
    padding-bottom: 2.8rem;
    font-size: 3.2rem;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding-bottom: 3.2rem;
    font-size: 3.6rem;
  }
`,Tt=n(ae)`
  justify-content: start;
  border-bottom: 1px solid ${m.colors.primaryColor};
`,Mt=n.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,F=n.div`
  padding: 4rem 0;
`,W=n(se)`
  padding: none;
  border-bottom: none;
`,Vt=n.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.md}) {
    padding-left: 4rem;
    border-left: 1px solid ${m.colors.primaryColor};
  }
`,de=n.div`
  display: flex;

  font-weight: 400;
  font-size: 1.8rem;
  line-height: 3.7rem;
  letter-spacing: 0.5px;

  color: ${m.colors.primaryColor};

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    font-size: 2rem;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: 2.2rem;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: 2.4rem;
  }
`,qt=n(de)`
  gap: 5rem;
`,I=n(de)`
  justify-content: space-between;

  gap: 5rem;
  &:nth-child(3) {
    padding-bottom: 5rem;
    border-bottom: 1px solid ${m.colors.primaryColor};
  }
`,Ut=n(I)`
  font-weight: 700;
  font-size: 2rem;

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    font-size: 2.4rem;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: 2.4rem;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: 2.8rem;
  }
`;function D({userName:e,orderItemsCount:r,totalItemsPrice:o,deliveryFee:i,discountPrice:a,orderId:s}){const d=o+i-a;return t.jsxs("div",{children:[t.jsx(T,{text:"주문완료"}),t.jsxs(ae,{children:[t.jsx(Dt,{children:"주문이 완료"}),t.jsx(zt,{children:"되었습니다. 감사합니다!"})]}),t.jsxs(Bt,{children:[t.jsx(U,{to:g.HOME,children:t.jsx(R,{text:"홈으로"})}),t.jsx(U,{to:`${g.ORDERS}/${s}`,children:t.jsx(R,{text:"주문 상세 보기"})})]}),t.jsx(se,{children:"상품배송 정보"}),t.jsxs(Tt,{children:[Ve(new Date().getTime())," 도착 예정 (상품 ",r,"개)"]}),t.jsxs(Mt,{children:[t.jsxs(F,{children:[t.jsx(W,{children:"받는 사람 정보"}),t.jsx("div",{children:t.jsxs(qt,{children:[t.jsx("span",{children:"받는사람"}),t.jsx("span",{children:e})]})})]}),t.jsxs(F,{children:[t.jsx(W,{children:"결제 정보"}),t.jsxs(Vt,{children:[t.jsxs(I,{children:[t.jsx("span",{children:"상품가격"}),t.jsxs("span",{children:[o,"원"]})]}),t.jsxs(I,{children:[t.jsx("span",{children:"배송비"}),t.jsxs("span",{children:[i,"원"]})]}),t.jsxs(I,{children:[t.jsx("span",{children:"할인 금액"}),t.jsxs("span",{children:["-",a,"원"]})]}),t.jsxs(Ut,{children:[t.jsx("span",{children:"총 결제금액"}),t.jsxs("span",{children:[d,"원"]})]})]})]})]})]})}try{D.displayName="OrderCompleteInfo",D.__docgenInfo={description:"",displayName:"OrderCompleteInfo",props:{userName:{defaultValue:null,description:"",name:"userName",required:!0,type:{name:"string"}},orderItemsCount:{defaultValue:null,description:"",name:"orderItemsCount",required:!0,type:{name:"number"}},totalItemsPrice:{defaultValue:null,description:"",name:"totalItemsPrice",required:!0,type:{name:"number"}},deliveryFee:{defaultValue:null,description:"",name:"deliveryFee",required:!0,type:{name:"number"}},discountPrice:{defaultValue:null,description:"",name:"discountPrice",required:!0,type:{name:"number"}},orderId:{defaultValue:null,description:"",name:"orderId",required:!0,type:{name:"number"}}}}}catch{}function Ft(){const e=u(k),r=le(),{deliveryFee:o,discountPrice:i,totalItemsPrice:a,orderItemsCount:s,orderId:d}=r.state;return t.jsx(y,{children:t.jsx(D,{deliveryFee:o,discountPrice:i,totalItemsPrice:a,orderItemsCount:s,userName:e.nickname,orderId:Number(d)})})}const Wt=Q({key:"getOrderDetailSelector",get:e=>async({get:r})=>{const o=r(k),i=r(w);return await Ee({serverName:i,userInfo:o,orderId:e})},cachePolicy_UNSTABLE:{eviction:"most-recent"}}),Ht=he({key:"orderDetailState",default:e=>Wt(e)}),Kt=n.div`
  display: grid;
  grid-template-columns: 1fr;

  margin-top: 3rem;
  padding-bottom: 5rem;

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.xl}) {
    grid-template-columns: 3fr 2fr;
  }
`;function z({orderId:e}){const r=v(),o=u(Ht(e));return o||r(g.HOME),t.jsxs("div",{children:[t.jsx(qe,{order:o,isVisibleDetail:!1}),t.jsxs(Kt,{children:[t.jsx("div",{}),t.jsx(Ue,{deliveryFee:o.deliveryFee,discountPrice:o.discountPrice,totalItemsPrice:o.totalItemsPrice})]})]})}try{z.displayName="OrderDetailArea",z.__docgenInfo={description:"",displayName:"OrderDetailArea",props:{orderId:{defaultValue:null,description:"",name:"orderId",required:!0,type:{name:"number"}}}}}catch{}function Qt(){const{orderId:e}=me();return t.jsxs(y,{children:[t.jsx(T,{text:"주문 내역 상세"}),t.jsx(l.Suspense,{fallback:t.jsx(_,{}),children:t.jsx(z,{orderId:Number(e)})})]})}const g={HOME:"/",CART:"/cart",ORDERS:"/orders"},ce={COMPLETE:`${g.ORDERS}/complete`};pe([{path:g.HOME,element:t.jsx(Nt,{})},{path:g.CART,element:t.jsx(yt,{})},{path:g.ORDERS,element:t.jsx(At,{})},{path:`${g.ORDERS}/:orderId`,element:t.jsx(Qt,{})},{path:ce.COMPLETE,element:t.jsx(Ft,{})}],{basename:"/react-shopping-cart-prod"});try{Router.displayName="Router",Router.__docgenInfo={description:"A Router instance manages all navigation and data loading/mutations",displayName:"Router",props:{}}}catch{}const Gt=()=>{const[e,r]=S(w),o=a=>{r(a)};return{server:e,handleServer:o,onServerChange:a=>{const{value:s}=a.currentTarget,d=J.filter(c=>c===s)[0];o(d)}}},Yt=()=>{const[e,r]=S(k),o=a=>{const s=Y.find(d=>d.nickname===a);if(!s)throw new Error("바꾸고자 하는 유저가 존재하지 않습니다.");r(s)};return{userInfo:e,handleUser:o,onUserChange:a=>{const{value:s}=a.currentTarget;o(s)}}},Jt=n.button`
  display: flex;
  color: ${({theme:e})=>e.colors.lightColor};
`,Xt=n.div`
  font-size: 24px;
`,Zt=n.div`
  border-radius: 50%;
  background-color: #04c09e;
  width: 2.6rem;
  height: 2.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;

  @media screen and (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    width: 3.2rem;
    height: 3.2rem;
  }
`,er=n.div`
  font-size: 1.6rem;
  color: #fff;
`,tr=n.div`
  @media screen and (max-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`;function rr(){const e=u(C),r=v();return t.jsxs(Jt,{type:"button","aria-label":"장바구니 페이지로 가기",role:"button",onClick:()=>{r("/cart")},children:[t.jsx(Xt,{children:t.jsx(tr,{children:"장바구니"})}),t.jsx(Zt,{children:t.jsx(er,{"aria-live":"polite",children:e.length})})]})}const nr=""+new URL("logo-48e72768.svg",import.meta.url).href,or=""+new URL("shop-ddc53723.svg",import.meta.url).href,ir=n.button`
  display: flex;
  align-items: center;
  color: ${({theme:e})=>e.colors.lightColor};
`;n.img`
  width: 4rem;
  height: 4rem;
`;const ar=n.div`
  margin-right: 1rem;

  @media screen and (max-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`;function sr(){const e=v();return t.jsxs(ir,{type:"button","aria-label":"SHOP 홈페이지로 가기",role:"button",onClick:()=>{e("/")},children:[t.jsx(ar,{children:t.jsx("img",{src:nr,alt:"로고 이미지"})}),t.jsx("img",{src:or,alt:"로고 이미지"})]})}const dr=n.div`
  position: fixed;
  width: 100vw;

  color: ${({theme:e})=>e.colors.lightColor};
  background-color: ${({theme:e})=>e.colors.primaryColor};
`,cr=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 8rem;
`,lr=n(H)`
  font-size: 2.4rem;
`;function mr(){const{userInfo:e,onUserChange:r}=Yt(),{server:o,onServerChange:i}=Gt();return t.jsx(dr,{children:t.jsx(ne,{children:t.jsxs(cr,{children:[t.jsx(sr,{}),t.jsx(V,{options:J.map(a=>({value:a,name:a})),onChange:i,value:o}),t.jsxs(l.Suspense,{children:[t.jsx(V,{options:Y.map(a=>({value:a.nickname,name:a.nickname})),onChange:r,value:e.nickname}),t.jsx(lr,{to:g.ORDERS,children:"주문 내역"}),t.jsx(rr,{})]})]})})})}function y({children:e}){return l.useEffect(()=>{window.scrollTo(0,0)},[]),t.jsxs(t.Fragment,{children:[t.jsx(mr,{}),t.jsx(_t,{children:e})]})}try{y.displayName="Layout",y.__docgenInfo={description:"",displayName:"Layout",props:{}}}catch{}export{mr as H,y as L,A as M,D as O,z as a,At as b};
//# sourceMappingURL=index-f8e07902.js.map
