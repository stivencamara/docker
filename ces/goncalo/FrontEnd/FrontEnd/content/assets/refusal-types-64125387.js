import{i as b,k as d,l as m,c as h,m as y,n as v,q as w,s as i,L as x,v as F,d as L}from"./index-6321ead1.js";import{b as l}from"./helpers-35400f08.js";const T={__name:"form",props:{modelValue:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},validateForm:{type:Boolean,default:!1},selectedLang:{type:[String,Number],required:!0},vuelidate:{type:Object,default:null}},emits:["update:modelValue"],setup(e,{emit:g}){const t=e;b();const r=d({get(){return t.modelValue},set(a){g("update:modelValue",a)}}),s=d({get(){return l.getFieldByLangAndName(r.value,t.selectedLang,"name")},set(a){l.setFieldByLangAndName(r.value,t.selectedLang,"name",a)}});return(a,o)=>{const p=m("form-field"),f=m("row");return h(),y(f,null,{default:v(()=>{var n,u;return[w(p,{id:"name",modelValue:i(s),"onUpdate:modelValue":o[0]||(o[0]=c=>x(s)?s.value=c:null),class:"mb-3 col-12",label:a._lang.label.name,type:i(F).inputs.text,rows:3,maxlength:64,disabled:e.loading,required:!0,requiredEng:!1,showError:a._showErrorFieldWhenTexts((n=t.vuelidate)==null?void 0:n.texts,"name"),"error-message":a._errorMessageFieldWhenTexts((u=t.vuelidate)==null?void 0:u.texts,"name"),language:e.selectedLang},null,8,["modelValue","label","type","disabled","showError","error-message","language"])]}),_:1})}}},_={newForm(){return{texts:[{language:"pt",name:""},{language:"en",name:""}]}},formRules(){return{texts:{$each:l.forEachField(["name"])}}}},q=L("useRefusalTypeStore",{state:()=>({progress:0,formToCompare:null}),getters:{},actions:{setProgress(e){this.progress=e},setFormToCompare(e){this.formToCompare=e}}});export{T as _,_ as h,q as u};
