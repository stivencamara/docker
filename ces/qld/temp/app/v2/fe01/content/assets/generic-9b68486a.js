import{I as u,a as s,b as f,c as V,w as m,d as i,f as e,A as r}from"./index-920dbb37.js";import"./helpers-4c156364.js";const _={__name:"generic",props:{modelValue:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},selectedLang:{type:[String,Number],required:!0}},emits:["update:modelValue"],setup(g,{emit:c}){const l=g,a=u({get(){return l.modelValue},set(d){c("update:modelValue",d)}});return u(()=>l.selectedLang),(d,n)=>{const t=s("form-field"),p=s("row"),b=s("accordion");return f(),V(b,{id:"generic",title:d._lang.common.generic,collapsed:!1,class:"mb-4"},{default:m(()=>[i(p,null,{default:m(()=>[i(t,{id:"genericField1",class:"mb-3 col-4",modelValue:e(a).genericField1,"onUpdate:modelValue":n[0]||(n[0]=o=>e(a).genericField1=o),label:d._lang.label.genericField1,disabled:l.disabled,loading:l.loading,type:e(r).inputs.text,maxlength:255},null,8,["modelValue","label","disabled","loading","type"]),i(t,{id:"genericField2",class:"mb-3 col-4",modelValue:e(a).genericField2,"onUpdate:modelValue":n[1]||(n[1]=o=>e(a).genericField2=o),label:d._lang.label.genericField2,disabled:l.disabled,loading:l.loading,type:e(r).inputs.text,maxlength:255},null,8,["modelValue","label","disabled","loading","type"]),i(t,{id:"genericField3",class:"mb-3 col-4",modelValue:e(a).genericField3,"onUpdate:modelValue":n[2]||(n[2]=o=>e(a).genericField3=o),label:d._lang.label.genericField3,disabled:l.disabled,loading:l.loading,type:e(r).inputs.text,maxlength:255},null,8,["modelValue","label","disabled","loading","type"])]),_:1})]),_:1},8,["title"])}}};export{_};