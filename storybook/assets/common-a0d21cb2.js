const n=(a,t,s)=>{if(t){if(!a){t.setCustomValidity("");return}t.setCustomValidity(s),t.reportValidity()}},y=a=>{const t=["일","월","화","수","목","금","토","일"],s=new Date(a+864e5),e=s.getDay(),o=s.getMonth()+1,r=s.getDate();return`${t[e]}요일 ${o}/${r}`};export{y as g,n as s};
//# sourceMappingURL=common-a0d21cb2.js.map
