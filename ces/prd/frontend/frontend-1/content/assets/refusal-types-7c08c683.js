import{i as b,j as d,k as m,c as h,l as y,m as v,p as w,q as i,J as x,t as F,d as V}from"./index-af43a57b.js";import{b as r}from"./helpers-0b287b89.js";const T={__name:"form",props:{modelValue:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},validateForm:{type:Boolean,default:!1},selectedLang:{type:[String,Number],required:!0},vuelidate:{type:Object,default:null}},emits:["update:modelValue"],setup(e,{emit:g}){const t=e;b();const s=d({get(){return t.modelValue},set(a){g("update:modelValue",a)}}),l=d({get(){return r.getFieldByLangAndName(s.value,t.selectedLang,"name")},set(a){r.setFieldByLangAndName(s.value,t.selectedLang,"name",a)}});return(a,o)=>{const p=m("form-field"),f=m("row");return h(),y(f,null,{default:v(()=>{var n,u;return[w(p,{id:"name",modelValue:i(l),"onUpdate:modelValue":o[0]||(o[0]=c=>x(l)?l.value=c:null),class:"mb-3 col-12",label:a._lang.label.name,type:i(F).inputs.text,rows:3,maxlength:64,disabled:e.loading,required:!0,requiredEng:!0,showError:a._showErrorFieldWhenTexts((n=t.vuelidate)==null?void 0:n.texts,"name"),"error-message":a._errorMessageFieldWhenTexts((u=t.vuelidate)==null?void 0:u.texts,"name"),language:e.selectedLang},null,8,["modelValue","label","type","disabled","showError","error-message","language"])]}),_:1})}}},_={newForm(){return{texts:[{language:"pt",name:null},{language:"en",name:null}]}},formRules(){return{texts:{$each:r.forEachFieldEng(["name"])}}}},E=V("useRefusalTypeStore",{state:()=>({progress:0,formToCompare:null}),getters:{},actions:{setProgress(e){this.progress=e},setFormToCompare(e){this.formToCompare=e}}});export{T as _,_ as h,E as u};
