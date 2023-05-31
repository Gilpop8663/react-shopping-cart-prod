import{i as s,j as t}from"./styled-components.browser.esm-aaaef0f3.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const o=e=>{switch(e){case"small":return"16px";case"medium":return"22px";case"large":return"28px";default:return"22px"}},c=e=>{switch(e){case"small":return["0.35rem","0.rem"];case"medium":return["0.55rem","-0.1rem"];case"large":return["0.8rem","0.3rem"];default:return["0.55rem","-0.1rem"]}},l=s.input.attrs({type:"checkbox"})`
  position: absolute;
  opacity: 0;
  height: ${({boxsize:e})=>o(e||"medium")};
  width: ${({boxsize:e})=>o(e||"medium")};

  cursor: pointer;
`,m=s.span`
  position: absolute;
  top: 0;
  left: 0;
  height: ${({boxsize:e})=>o(e||"medium")};
  width: ${({boxsize:e})=>o(e||"medium")};

  background-color: ${({theme:e})=>e.colors.lightColor};
  border-radius: 3px;
  border: 1px solid ${({theme:e})=>e.colors.infoColor};

  ${l}:checked + & {
    background-color: ${({theme:e})=>e.colors.primaryColor};
    border: 1px solid ${({theme:e})=>e.colors.successColor};
  }

  &::after {
    content: '';
    position: absolute;
    display: none;
    left: ${({boxsize:e})=>c(e||"medium")[0]};
    top: ${({boxsize:e})=>c(e||"medium")[1]};
    width: ${({boxsize:e})=>e==="small"?"4px":"7px"};
    height: ${({boxsize:e})=>e==="small"?"8px":"14px"};
    border: solid white;
    border-width: 0 3px 3px 0;

    transform: rotate(45deg);
  }
`,h=s.label`
  position: relative;
  display: inline-block;
  height: 2.8rem;
  width: 2.8rem;

  ${l}:checked + ${m}::after {
    display: block;
  }

  cursor: pointer;
`,a=({type:e,boxsize:i,...p})=>t.jsxs(h,{children:[t.jsx(l,{"data-testid":"checkbox",boxsize:i,type:e,...p}),t.jsx(m,{boxsize:i})]});try{a.displayName="CheckBox",a.__docgenInfo={description:"",displayName:"CheckBox",props:{type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"checkbox"'}]}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(() => void)"}},boxsize:{defaultValue:null,description:"",name:"boxsize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}}}catch{}const g={component:a,title:"CheckBox"},r={args:{}};var n,d,u;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {}
} satisfies Story`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const y=["Default"];export{r as Default,y as __namedExportsOrder,g as default};
//# sourceMappingURL=CheckBox.stories-5fab3af0.js.map
