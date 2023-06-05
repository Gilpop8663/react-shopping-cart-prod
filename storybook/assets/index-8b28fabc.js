import{i as o,j as t}from"./styled-components.browser.esm-aaaef0f3.js";import{r as l}from"./index-8db94870.js";import{u as _,L as W,a as ce,b as le,c as me}from"./index-6b0f0fe4.js";import{a as H,b as u,c as S,d as K,e as pe,f as ue}from"./index-8104fa34.js";import{w as Q,a as he,g as ge,C as fe}from"./index-346f8022.js";import{s as j,u as C,f as xe,U as G}from"./fetchUtils-c9fed188.js";import{c as b,r as ye}from"./cartState-87a99554.js";import{e as B,f as be,h as Ce,t as ke,g as je,p as we,S as Y}from"./serverUrlConstants-ecb6b37d.js";import{u as J,a as Ie,S as ve}from"./index-3dad9953.js";import{s as _e,O as Se,g as $e}from"./index-4deda72e.js";import{C as Pe}from"./index-fc5ca4cd.js";import{C as X}from"./index-fa80f56e.js";import{t as m}from"./theme-cf2b1b34.js";import{E as Re,P as Ee,a as Oe}from"./index-57ceba2c.js";import{B as R}from"./index-a09c039b.js";import{P as Le,a as Ne,b as Ae,c as De,d as ze}from"./index-1d953bf5.js";import{O as T}from"./index-c18acebd.js";import{g as Be}from"./common-a48b2eb5.js";import{O as Te}from"./OrderItem-d4baa48e.js";import{O as Me}from"./index-bedfe2dc.js";import{S as M}from"./index-3388ab67.js";const Ve=H({key:"cartCountChecked",get:({get:e})=>{const r=e(b);return B(r).length}}),Z=()=>{const e=u(j),r=u(C),[n,i]=S(b),{cartFetchData:a}=J(),s=u(Ve),d=u(Q);return{checkedCount:s,totalCartPrice:d,isAllChecked:()=>n.length===s,toggleAllCartItem:x=>{const g=be({cart:n,isCheck:x});i(g)},deleteCheckedItems:async()=>{const x=Ce(n);i(x);const g=B(n);for(const f of g)try{await ye({cartId:f,serverName:e,userInfo:r})}catch(k){console.error(k),a()}}}},qe=K({key:"cartItemCheckedState",get:e=>({get:r})=>{const i=r(b).find(a=>a.id===e);if(!i)throw new Error("장바구니 아이템을 찾을 수 없습니다. - withItemCheckBy");return i.isSelect},set:e=>({get:r,set:n})=>{const i=r(b),a=ke({cart:i,cartId:e});n(b,a)}}),Ue=e=>{const[r,n]=S(qe(e));return{isChecked:r,toggleCheck:()=>{n(!r)}}},Fe=""+new URL("delete-be464820.svg",import.meta.url).href,We=o.section`
  display: flex;
  flex-direction: column;

  width: 100%;
`,ee=o.section`
  display: flex;

  justify-content: space-between;

  width: 100%;
`,He=o.section`
  flex: 1.2;
  display: flex;
  flex-direction: column;
`,te=o(ee)`
  column-gap: 1rem;
  width: 100%;
  margin: 1rem;
  border-bottom: ${({theme:e})=>e.colors.secondaryColor} 1px solid;
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

  color: ${m.colors.primaryColor};
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

  color: ${m.colors.primaryColor};
`;function E({cartId:e,productId:r,imageUrl:n,name:i,price:a}){const{isChecked:s,toggleCheck:d}=Ue(e),{onQuantityInputChange:c,decreaseQuantity:p,increaseQuantity:w,countInputRef:x,quantity:g,onQuantityBlur:f,removeCartItemAndDelete:k}=Ie({id:r,imageUrl:n,name:i,price:a});return t.jsxs(te,{children:[t.jsx(X,{type:"checkbox",checked:s,onChange:d}),t.jsx(Ke,{children:t.jsx(Qe,{src:n})}),t.jsx(Ge,{children:i}),t.jsxs(Ye,{children:[t.jsx(Je,{src:Fe,onClick:k}),t.jsx(ve,{stepperstyle:"large",onChange:c,onDecrease:p,onIncrease:w,countInputRef:x,quantity:g,onQuantityBlur:$=>f($,!0),ariaIncreaseLabel:`${i}의 장바구니에 담긴 개수에서 하나 더하기`,ariaDecreaseLabel:`${i}의 장바구니에 담긴 개수에서 하나 빼기`,isCartPage:!0}),t.jsx(Xe,{children:`${(a*g).toLocaleString("ko-KR")} 원`})]})]})}try{E.displayName="CartItemBox",E.__docgenInfo={description:"",displayName:"CartItemBox",props:{cartId:{defaultValue:null,description:"",name:"cartId",required:!0,type:{name:"number"}},productId:{defaultValue:null,description:"",name:"productId",required:!0,type:{name:"number"}},imageUrl:{defaultValue:null,description:"",name:"imageUrl",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},price:{defaultValue:null,description:"",name:"price",required:!0,type:{name:"number"}}}}}catch{}const O=o(He)`
  flex: 2;
`,Ze=o(ee)`
  column-gap: 1rem;
  width: 100%;
  margin: 1rem;
  border: ${({theme:e})=>e.colors.lightColor} 1px solid;
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

  color: ${({theme:e})=>e.colors.primaryColor};
  border: 1px solid ${({theme:e})=>e.colors.secondaryColor};
`,tt=o.span`
  font-size: 1.6rem;
  width: 12rem;
`;function L({cart:e}){const{isAllChecked:r,toggleAllCartItem:n,deleteCheckedItems:i,checkedCount:a}=Z(),s=e.length;return s===0?t.jsx(O,{children:t.jsx("span",{style:{textAlign:"center",fontSize:"30px",margin:"auto"},children:"텅"})}):t.jsxs(O,{children:[e.map(({id:d,product:c})=>t.jsx("li",{children:t.jsx(E,{cartId:d,productId:c.id,imageUrl:c.imageUrl,name:c.name,price:c.price})},d)),t.jsxs(Ze,{children:[t.jsx(X,{type:"checkbox",checked:r(),onChange:()=>n(!r())}),t.jsx(tt,{children:`전체 선택 (${a} / ${s})`}),t.jsx(et,{onClick:i,children:"선택삭제"})]})]})}try{L.displayName="CartItemList",L.__docgenInfo={description:"",displayName:"CartItemList",props:{cart:{defaultValue:null,description:"",name:"cart",required:!0,type:{name:"CartItemType[]"}}}}}catch{}const rt=o.main`
  display: flex;

  padding: 3.4rem 0;

  @media screen and (max-width: ${({theme:e})=>e.breakpoints.md}) {
    flex-direction: column;
  }
`,nt=o.div`
  padding-bottom: 1.6rem;
  border-bottom: 4px solid ${m.colors.secondaryColor};

  font-weight: 400;
  font-size: 2rem;
  line-height: 3.3rem;

  letter-spacing: 0.5px;
`,ot=o.div`
  width: 45rem;
  @media screen and (max-width: ${({theme:e})=>e.breakpoints.md}) {
    max-width: none;
  }
`,it=o.div`
  margin-bottom: 4rem;

  @media screen and (max-width: ${({theme:e})=>e.breakpoints.md}) {
    margin-top: 4rem;
  }
`,V=3e3;function N({onModalOpen:e,selectedCoupon:r,resetSelectedCoupon:n}){const i=u(C),a=u(j),s=_(),{cart:d,cartFetchData:c}=J(),p=u(Q),w=u(he),{checkedCount:x}=Z(),g=async()=>{const k=B(d),$=await _e({cartItemIds:k,serverName:a,couponId:r==null?void 0:r.id,userInfo:i});c(),s(de.COMPLETE,{state:{deliveryFee:V,discountPrice:f,totalItemsPrice:p,orderItemsCount:x,orderId:$}})},f=r?ge({coupon:r,totalItemsPrice:p}):0;return l.useEffect(()=>{f===0&&n()},[f,n]),t.jsxs("div",{children:[t.jsxs(nt,{children:["든든배송 상품 (",d.length,"개)"]}),t.jsxs(rt,{children:[t.jsx(L,{cart:d}),t.jsxs(ot,{children:[t.jsx(it,{children:t.jsx(Pe,{selectedCoupon:r,onCouponModalOpen:e,availableCouponLength:w.length??0})}),t.jsx(Re,{totalItemsPrice:p,deliveryFee:p?V:0,discountPrice:f,onOrderClick:g})]})]})]})}try{N.displayName="CartListArea",N.__docgenInfo={description:"",displayName:"CartListArea",props:{onModalOpen:{defaultValue:null,description:"",name:"onModalOpen",required:!0,type:{name:"() => void"}},selectedCoupon:{defaultValue:null,description:"",name:"selectedCoupon",required:!0,type:{name:"CouponType | null"}},resetSelectedCoupon:{defaultValue:null,description:"",name:"resetSelectedCoupon",required:!0,type:{name:"() => void"}}}}}catch{}const at=O,st=Oe,dt=o(te)`
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
`,ct=o(Ee)`
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
`;function v(){return t.jsxs(t.Fragment,{children:[t.jsx(at,{children:Array.from({length:3}).map((e,r)=>t.jsx(dt,{},r))}),t.jsx(st,{children:t.jsx(ct,{})})]})}function A({title:e,onModalClose:r,children:n}){const i=l.useRef(null);return l.useEffect(()=>(document.body.dataset.hideScroll="true",()=>{document.body.dataset.hideScroll="false"}),[]),t.jsx(lt,{ref:i,children:t.jsxs(mt,{children:[t.jsx(pt,{children:e}),t.jsx(ut,{children:n}),t.jsx(ht,{children:t.jsx(R,{text:"닫기",onClick:r})})]})})}const lt=o.dialog`
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
`,pt=o.h1`
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
`,ut=o.main`
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
`,ht=o.div`
  width: 20rem;

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.md}) {
    width: 24rem;
  }
`;try{A.displayName="Modal",A.__docgenInfo={description:"",displayName:"Modal",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},onModalClose:{defaultValue:null,description:"",name:"onModalClose",required:!0,type:{name:"() => void"}}}}}catch{}function gt(){const[e,r]=l.useState(!1),[n,i]=l.useState(null),a=()=>{r(!0)},s=()=>{r(!1)},d=p=>{i(p)},c=()=>{i(null)};return t.jsxs(y,{children:[t.jsx(We,{children:t.jsx(l.Suspense,{fallback:t.jsx(v,{}),children:t.jsx(N,{onModalOpen:a,selectedCoupon:n,resetSelectedCoupon:c})})}),e&&t.jsx(A,{onModalClose:s,title:"쿠폰함",children:t.jsx(l.Suspense,{fallback:t.jsx(v,{}),children:t.jsx(fe,{selectedCoupon:n,onCouponSelect:d})})})]})}const ft=l.createContext(null),P={didCatch:!1,error:null};class xt extends l.Component{constructor(r){super(r),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=P}static getDerivedStateFromError(r){return{didCatch:!0,error:r}}resetErrorBoundary(...r){var i,a;const{error:n}=this.state;n!==null&&((a=(i=this.props).onReset)==null||a.call(i,{args:r,reason:"imperative-api"}),this.setState(P))}componentDidCatch(r,n){var i,a;(a=(i=this.props).onError)==null||a.call(i,r,n)}componentDidUpdate(r,n){var s,d;const{didCatch:i}=this.state,{resetKeys:a}=this.props;i&&n.error!==null&&yt(r.resetKeys,a)&&((d=(s=this.props).onReset)==null||d.call(s,{next:a,prev:r.resetKeys,reason:"keys"}),this.setState(P))}render(){const{children:r,fallbackRender:n,FallbackComponent:i,fallback:a}=this.props,{didCatch:s,error:d}=this.state;let c=r;if(s){const p={error:d,resetErrorBoundary:this.resetErrorBoundary};if(l.isValidElement(a))c=a;else if(typeof n=="function")c=n(p);else if(i)c=l.createElement(i,p);else throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")}return l.createElement(ft.Provider,{value:{didCatch:s,error:d,resetErrorBoundary:this.resetErrorBoundary}},c)}}function yt(e=[],r=[]){return e.length!==r.length||e.some((n,i)=>!Object.is(n,r[i]))}const bt=async({serverName:e,userInfo:r})=>{const n=await xe(je(e),{email:r.email,password:r.password});return we(n)},Ct=H({key:"getProductList",get:async({get:e})=>{const r=e(C),n=e(j);return await bt({serverName:n,userInfo:r})},cachePolicy_UNSTABLE:{eviction:"most-recent"}}),kt=pe({key:"productListState",default:Ct}),re=o.div`
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
`,ne=o.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;
  column-gap: 1rem;
`,oe=o.div`
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
`;function jt(){const e=u(kt);return t.jsx(ne,{children:e.map(r=>t.jsx(oe,{children:t.jsx(Le,{product:r})},r.id))})}const wt=ne,It=oe,vt=ze,_t=o(Ne)`
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
`,St=o(Ae)`
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
`,$t=o(De)`
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
`;function Pt(){return t.jsx(wt,{children:Array.from({length:12}).map((e,r)=>t.jsx(It,{children:t.jsxs(vt,{children:[t.jsx($t,{}),t.jsxs("div",{children:[t.jsx(_t,{}),t.jsx(St,{})]})]})},r))})}function Rt(){return t.jsx(y,{children:t.jsx(xt,{fallback:t.jsx("p",{children:"에러입니다"}),children:t.jsx(l.Suspense,{fallback:t.jsx(Pt,{}),children:t.jsx(jt,{})})})})}function Et(){return t.jsxs(y,{children:[t.jsx(T,{text:"주문 목록"}),t.jsx(l.Suspense,{fallback:t.jsx(v,{}),children:t.jsx(Se,{})})]})}const ie=o.div`
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
`,Ot=o.span`
  font-weight: 700;
`,Lt=o.span`
  font-weight: 400;
`,Nt=o.div`
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
`,q=o(W)`
  width: 100%;

  max-width: 30rem;
`,ae=o.h3`
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
`,At=o(ie)`
  justify-content: start;
  border-bottom: 1px solid ${m.colors.primaryColor};
`,Dt=o.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,U=o.div`
  padding: 4rem 0;
`,F=o(ae)`
  padding: none;
  border-bottom: none;
`,zt=o.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;

  @media screen and (min-width: ${({theme:e})=>e.breakpoints.md}) {
    padding-left: 4rem;
    border-left: 1px solid ${m.colors.primaryColor};
  }
`,se=o.div`
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
`,Bt=o(se)`
  gap: 5rem;
`,I=o(se)`
  justify-content: space-between;

  gap: 5rem;
  &:nth-child(3) {
    padding-bottom: 5rem;
    border-bottom: 1px solid ${m.colors.primaryColor};
  }
`,Tt=o(I)`
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
`;function D({userName:e,orderItemsCount:r,totalItemsPrice:n,deliveryFee:i,discountPrice:a,orderId:s}){const d=n+i-a;return t.jsxs("div",{children:[t.jsx(T,{text:"주문완료"}),t.jsxs(ie,{children:[t.jsx(Ot,{children:"주문이 완료"}),t.jsx(Lt,{children:"되었습니다. 감사합니다!"})]}),t.jsxs(Nt,{children:[t.jsx(q,{to:h.HOME,children:t.jsx(R,{text:"홈으로"})}),t.jsx(q,{to:`${h.ORDERS}/${s}`,children:t.jsx(R,{text:"주문 상세 보기"})})]}),t.jsx(ae,{children:"상품배송 정보"}),t.jsxs(At,{children:[Be(new Date().getTime())," 도착 예정 (상품 ",r,"개)"]}),t.jsxs(Dt,{children:[t.jsxs(U,{children:[t.jsx(F,{children:"받는 사람 정보"}),t.jsx("div",{children:t.jsxs(Bt,{children:[t.jsx("span",{children:"받는사람"}),t.jsx("span",{children:e})]})})]}),t.jsxs(U,{children:[t.jsx(F,{children:"결제 정보"}),t.jsxs(zt,{children:[t.jsxs(I,{children:[t.jsx("span",{children:"상품가격"}),t.jsxs("span",{children:[n,"원"]})]}),t.jsxs(I,{children:[t.jsx("span",{children:"배송비"}),t.jsxs("span",{children:[i,"원"]})]}),t.jsxs(I,{children:[t.jsx("span",{children:"할인 금액"}),t.jsxs("span",{children:["-",a,"원"]})]}),t.jsxs(Tt,{children:[t.jsx("span",{children:"총 결제금액"}),t.jsxs("span",{children:[d,"원"]})]})]})]})]})]})}try{D.displayName="OrderCompleteInfo",D.__docgenInfo={description:"",displayName:"OrderCompleteInfo",props:{userName:{defaultValue:null,description:"",name:"userName",required:!0,type:{name:"string"}},orderItemsCount:{defaultValue:null,description:"",name:"orderItemsCount",required:!0,type:{name:"number"}},totalItemsPrice:{defaultValue:null,description:"",name:"totalItemsPrice",required:!0,type:{name:"number"}},deliveryFee:{defaultValue:null,description:"",name:"deliveryFee",required:!0,type:{name:"number"}},discountPrice:{defaultValue:null,description:"",name:"discountPrice",required:!0,type:{name:"number"}},orderId:{defaultValue:null,description:"",name:"orderId",required:!0,type:{name:"number"}}}}}catch{}function Mt(){const e=u(C),r=ce(),{deliveryFee:n,discountPrice:i,totalItemsPrice:a,orderItemsCount:s,orderId:d}=r.state;return t.jsx(y,{children:t.jsx(D,{deliveryFee:n,discountPrice:i,totalItemsPrice:a,orderItemsCount:s,userName:e.nickname,orderId:Number(d)})})}const Vt=K({key:"getOrderDetailSelector",get:e=>async({get:r})=>{const n=r(C),i=r(j);return await $e({serverName:i,userInfo:n,orderId:e})},cachePolicy_UNSTABLE:{eviction:"most-recent"}}),qt=ue({key:"orderDetailState",default:e=>Vt(e)}),Ut=o.div`
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
`;function z({orderId:e}){const r=_(),n=u(qt(e));return n||r(h.HOME),t.jsxs("div",{children:[t.jsx(Te,{order:n,isVisibleDetail:!1}),t.jsxs(Ut,{children:[t.jsx("div",{}),t.jsx(Me,{deliveryFee:n.deliveryFee,discountPrice:n.discountPrice,totalItemsPrice:n.totalItemsPrice})]})]})}try{z.displayName="OrderDetailArea",z.__docgenInfo={description:"",displayName:"OrderDetailArea",props:{orderId:{defaultValue:null,description:"",name:"orderId",required:!0,type:{name:"number"}}}}}catch{}function Ft(){const{orderId:e}=le();return t.jsxs(y,{children:[t.jsx(T,{text:"주문 내역 상세"}),t.jsx(l.Suspense,{fallback:t.jsx(v,{}),children:t.jsx(z,{orderId:Number(e)})})]})}const h={HOME:"/",CART:"/cart",ORDERS:"/orders"},de={COMPLETE:`${h.ORDERS}/complete`};me([{path:h.HOME,element:t.jsx(Rt,{})},{path:h.CART,element:t.jsx(gt,{})},{path:h.ORDERS,element:t.jsx(Et,{})},{path:`${h.ORDERS}/:orderId`,element:t.jsx(Ft,{})},{path:de.COMPLETE,element:t.jsx(Mt,{})}],{basename:"/react-shopping-cart-prod"});try{Router.displayName="Router",Router.__docgenInfo={description:"A Router instance manages all navigation and data loading/mutations",displayName:"Router",props:{}}}catch{}const Wt=()=>{const[e,r]=S(j),n=a=>{r(a)};return{server:e,handleServer:n,onServerChange:a=>{const{value:s}=a.currentTarget,d=Y.filter(c=>c===s)[0];n(d)}}},Ht=()=>{const[e,r]=S(C),n=a=>{const s=G.find(d=>d.nickname===a);if(!s)throw new Error("바꾸고자 하는 유저가 존재하지 않습니다.");r(s)};return{userInfo:e,handleUser:n,onUserChange:a=>{const{value:s}=a.currentTarget;n(s)}}},Kt=o.button`
  display: flex;
  color: ${({theme:e})=>e.colors.lightColor};
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

  @media screen and (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    width: 3.2rem;
    height: 3.2rem;
  }
`,Yt=o.div`
  font-size: 1.6rem;
  color: #fff;
`,Jt=o.div`
  @media screen and (max-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`;function Xt(){const e=u(b),r=_();return t.jsxs(Kt,{type:"button","aria-label":"장바구니 페이지로 가기",role:"button",onClick:()=>{r("/cart")},children:[t.jsx(Qt,{children:t.jsx(Jt,{children:"장바구니"})}),t.jsx(Gt,{children:t.jsx(Yt,{"aria-live":"polite",children:e.length})})]})}const Zt=""+new URL("logo-48e72768.svg",import.meta.url).href,er=""+new URL("shop-ddc53723.svg",import.meta.url).href,tr=o.button`
  display: flex;
  align-items: center;
  color: ${({theme:e})=>e.colors.lightColor};
`;o.img`
  width: 4rem;
  height: 4rem;
`;const rr=o.div`
  margin-right: 1rem;

  @media screen and (max-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`;function nr(){const e=_();return t.jsxs(tr,{type:"button","aria-label":"SHOP 홈페이지로 가기",role:"button",onClick:()=>{e("/")},children:[t.jsx(rr,{children:t.jsx("img",{src:Zt,alt:"로고 이미지"})}),t.jsx("img",{src:er,alt:"로고 이미지"})]})}const or=o.div`
  background-color: ${({theme:e})=>e.colors.primaryColor};
  color: ${({theme:e})=>e.colors.lightColor};
  margin-bottom: 3rem;
`,ir=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`,ar=o(W)`
  font-size: 2.4rem;
`;function sr(){const{userInfo:e,onUserChange:r}=Ht(),{server:n,onServerChange:i}=Wt();return t.jsx(or,{children:t.jsx(re,{children:t.jsxs(ir,{children:[t.jsx(nr,{}),t.jsx(M,{options:Y.map(a=>({value:a,name:a})),onChange:i,value:n}),t.jsxs(l.Suspense,{children:[t.jsx(M,{options:G.map(a=>({value:a.nickname,name:a.nickname})),onChange:r,value:e.nickname}),t.jsx(ar,{to:h.ORDERS,children:"주문 내역"}),t.jsx(Xt,{})]})]})})})}function y({children:e}){return t.jsxs(t.Fragment,{children:[t.jsx(sr,{}),t.jsx(re,{children:e})]})}try{y.displayName="Layout",y.__docgenInfo={description:"",displayName:"Layout",props:{}}}catch{}export{sr as H,y as L,A as M,D as O,z as a,Et as b};
//# sourceMappingURL=index-8b28fabc.js.map
