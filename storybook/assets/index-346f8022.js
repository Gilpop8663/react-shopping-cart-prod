import{i as s,j as a}from"./styled-components.browser.esm-aaaef0f3.js";import{a as n,e as c,b as u}from"./index-8104fa34.js";import{i as p,c as m}from"./serverUrlConstants-ecb6b37d.js";import{c as l}from"./cartState-87a99554.js";import{a as d}from"./common-a48b2eb5.js";import{f,u as C,s as y}from"./fetchUtils-c9fed188.js";import{C as g}from"./CouponItem-c942f715.js";const v=n({key:"withCartTotalPrice",get:({get:t})=>{const e=t(l);return p(e)}}),_=({coupons:t,totalItemsPrice:e})=>e===0?[]:t.filter(r=>r.minimumPrice<=e),V=({totalItemsPrice:t,coupon:e})=>t===0||t<e.minimumPrice?0:e.type==="percent"?d({total:t,percent:e.value})??0:e.type==="price"?Math.min(e.value,t):e.value,h=t=>t.map(e=>({id:e.id,name:e.name,type:e.type,value:e.value,minimumPrice:e.minimumPrice})),S=async({serverName:t,userInfo:e})=>{const r=await f(m(t),{email:e.email,password:e.password});return h(r)},w=n({key:"getCouponListSelector",get:async({get:t})=>{const e=t(C),r=t(y);return await S({serverName:r,userInfo:e})},cachePolicy_UNSTABLE:{eviction:"most-recent"}}),P=c({key:"couponState",default:w}),x=n({key:"availableCoupon",get:({get:t})=>{const e=t(P),r=t(v);return _({coupons:e,totalItemsPrice:r})}});function o({onCouponSelect:t,selectedCoupon:e}){const r=u(x);return a.jsx(b,{children:r.map(i=>a.jsx(g,{onCouponSelect:()=>t(i),condition:i.minimumPrice,discountValue:i.value,selected:(e==null?void 0:e.id)===i.id,...i},i.id))})}const b=s.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content: center;

  gap: 5rem;

  @media screen and (min-width: ${({theme:t})=>t.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoints.xl}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;try{o.displayName="CouponList",o.__docgenInfo={description:"",displayName:"CouponList",props:{onCouponSelect:{defaultValue:null,description:"",name:"onCouponSelect",required:!0,type:{name:"(coupon: CouponType) => void"}},selectedCoupon:{defaultValue:null,description:"",name:"selectedCoupon",required:!0,type:{name:"CouponType | null"}}}}}catch{}export{o as C,x as a,V as g,v as w};
//# sourceMappingURL=index-346f8022.js.map
