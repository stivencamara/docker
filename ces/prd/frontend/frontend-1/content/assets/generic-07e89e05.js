import{j as c,k as g,c as f,l as h,m as s,p as r,q as e,t as d}from"./index-46c4d077.js";import"./helpers-27fc0e50.js";const V={__name:"generic",props:{modelValue:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},selectedLang:{type:[String,Number],required:!0}},emits:["update:modelValue"],setup(p,{emit:u}){const a=p,l=c({get(){return a.modelValue},set(o){u("update:modelValue",o)}});return c(()=>a.selectedLang),(o,n)=>{const i=g("form-field"),m=g("row"),b=g("accordion");return f(),h(b,{id:"generic",title:o._lang.common.generic,collapsed:!1,class:"mb-4"},{default:s(()=>[r(m,null,{default:s(()=>[r(i,{id:"generic1",class:"mb-3 col-4",modelValue:e(l).generic1,"onUpdate:modelValue":n[0]||(n[0]=t=>e(l).generic1=t),label:o._lang.label.generic1,disabled:a.disabled,loading:a.loading,type:e(d).inputs.text,maxlength:255,changeLogField:"generic1",changeLog:e(l).changeLog,showDiference:e(l).recordStateTypeId==e(d).recordStateType.approval},null,8,["modelValue","label","disabled","loading","type","changeLog","showDiference"]),r(i,{id:"generic2",class:"mb-3 col-4",modelValue:e(l).generic2,"onUpdate:modelValue":n[1]||(n[1]=t=>e(l).generic2=t),label:o._lang.label.generic2,disabled:a.disabled,loading:a.loading,type:e(d).inputs.text,maxlength:255,changeLogField:"generic2",changeLog:e(l).changeLog,showDiference:e(l).recordStateTypeId==e(d).recordStateType.approval},null,8,["modelValue","label","disabled","loading","type","changeLog","showDiference"]),r(i,{id:"generic3",class:"mb-3 col-4",modelValue:e(l).generic3,"onUpdate:modelValue":n[2]||(n[2]=t=>e(l).generic3=t),label:o._lang.label.generic3,disabled:a.disabled,loading:a.loading,type:e(d).inputs.text,maxlength:255,changeLogField:"generic3",changeLog:e(l).changeLog,showDiference:e(l).recordStateTypeId==e(d).recordStateType.approval},null,8,["modelValue","label","disabled","loading","type","changeLog","showDiference"])]),_:1})]),_:1},8,["title"])}}};export{V as _};
