import"./index-8db94870.js";import{e as i,f as d,g as h}from"./index-58f35e65.js";const a=["마코","허브","우가"],c={[a[0]]:"https://m4co.shop",[a[1]]:"https://h3rb.shop",[a[2]]:"https://wuga.shop"},n=t=>`${c[t]}/products`,s=t=>`${c[t]}/cart-items`,p=t=>`${c[t]}/coupons`;try{n.displayName="getProductPath",n.__docgenInfo={description:"",displayName:"getProductPath",props:{}}}catch{}try{s.displayName="getCartPath",s.__docgenInfo={description:"",displayName:"getCartPath",props:{}}}catch{}try{p.displayName="getCouponPath",p.__docgenInfo={description:"",displayName:"getCouponPath",props:{}}}catch{}const _=i({key:"serverState",default:a[0]}),u=async(t,o={})=>{try{const r={method:"GET",headers:{"Content-Type":"application/json",...o.headers},...o},e=await fetch(t,r);if(!e.ok)throw e.status===404?new Error("리소스를 찾을 수 없습니다"):new Error(`HTTP 오류! Status: ${e.status}`);return await e.json()}catch(r){const e=r.message;throw new Error(`Error: ${e}`)}};d({key:"cartListWithInfoState/default",get:async({get:t})=>{const o=t(_),r=await u(s(o));if(!r)throw new Error("리코일에서 장바구니 목록을 불러올 수 없습니다.");return r.map(e=>(e.isSelect=!0,e))}});const g=i({key:"cartListWithInfoState",default:[]}),f=()=>h(g);export{a as S,g as c,_ as s,f as u};
//# sourceMappingURL=cartState-4da5d400.js.map
