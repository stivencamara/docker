import{j as u,k as s,c as f,l as V,w as m,n as t,p as e,s as r}from"./index-074485c3.js";import"./helpers-9f106e00.js";const x={__name:"generic",props:{modelValue:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},selectedLang:{type:[String,Number],required:!0}},emits:["update:modelValue"],setup(g,{emit:c}){const l=g,a=u({get(){return l.modelValue},set(n){c("update:modelValue",n)}});return u(()=>l.selectedLang),(n,o)=>{const i=s("form-field"),p=s("row"),b=s("accordion");return f(),V(b,{id:"generic",title:n._lang.common.generic,collapsed:!1,class:"mb-4"},{default:m(()=>[t(p,null,{default:m(()=>[t(i,{id:"generic1",class:"mb-3 col-4",modelValue:e(a).generic1,"onUpdate:modelValue":o[0]||(o[0]=d=>e(a).generic1=d),label:n._lang.label.generic1,disabled:l.disabled,loading:l.loading,type:e(r).inputs.text,maxlength:255},null,8,["modelValue","label","disabled","loading","type"]),t(i,{id:"generic2",class:"mb-3 col-4",modelValue:e(a).generic2,"onUpdate:modelValue":o[1]||(o[1]=d=>e(a).generic2=d),label:n._lang.label.generic2,disabled:l.disabled,loading:l.loading,type:e(r).inputs.text,maxlength:255},null,8,["modelValue","label","disabled","loading","type"]),t(i,{id:"generic3",class:"mb-3 col-4",modelValue:e(a).generic3,"onUpdate:modelValue":o[2]||(o[2]=d=>e(a).generic3=d),label:n._lang.label.generic3,disabled:l.disabled,loading:l.loading,type:e(r).inputs.text,maxlength:255},null,8,["modelValue","label","disabled","loading","type"])]),_:1})]),_:1},8,["title"])}}};export{x as _};
