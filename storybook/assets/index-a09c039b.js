import{i,j as a}from"./styled-components.browser.esm-aaaef0f3.js";import{t}from"./theme-cf2b1b34.js";function r({text:e,height:o="7.4rem",...n}){return a.jsx(l,{height:o,...n,children:e})}const l=i.button`
  width: 100%;
  height: ${({height:e})=>e};

  text-align: center;
  font-weight: 400;
  font-size: 2.4rem;
  line-height: 3.5rem;

  color: ${t.colors.lightColor};
  background-color: ${t.colors.primaryColor};

  cursor: pointer;

  &:disabled {
    background-color: ${t.colors.secondaryColor};
    cursor: not-allowed;
  }
`;try{r.displayName="Button",r.__docgenInfo={description:"",displayName:"Button",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},height:{defaultValue:{value:"7.4rem"},description:"",name:"height",required:!1,type:{name:"string"}}}}}catch{}export{r as B};
//# sourceMappingURL=index-a09c039b.js.map
