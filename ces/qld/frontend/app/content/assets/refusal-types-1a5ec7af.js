import{q as c,E as n,r as u,o as f,c as b,w as h,a as y,m,z as v,v as w,B as x}from"./index-d8a56bcc.js";import{b as l}from"./helpers-d89764d1.js";const V={__name:"form",props:{modelValue:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},validateForm:{type:Boolean,default:!1},selectedLang:{type:[String,Number],required:!0},vuelidate:{type:Object,required:!0}},emits:["update:modelValue"],setup(e,{emit:d}){const t=e;c();const s=n({get(){return t.modelValue},set(a){d("update:modelValue",a)}}),r=n({get(){return l.getFieldByLangAndName(s.value,t.selectedLang,"name")},set(a){l.setFieldByLangAndName(s.value,t.selectedLang,"name",a)}});return(a,o)=>{const i=u("form-field"),g=u("row");return f(),b(g,null,{default:h(()=>[y(i,{id:"name",modelValue:m(r),"onUpdate:modelValue":o[0]||(o[0]=p=>v(r)?r.value=p:null),class:"mb-3 col-12",label:a._lang.label.name,type:m(w).inputs.text,rows:3,maxlength:64,disabled:e.loading,required:!0,requiredEng:!0,showError:a._showErrorFieldWhenTexts(t.vuelidate.texts,"name"),"error-message":a._errorMessageFieldWhenTexts(t.vuelidate.texts,"name"),language:e.selectedLang},null,8,["modelValue","label","type","disabled","showError","error-message","language"])]),_:1})}}},E={newForm(){return{texts:[{language:"pt",name:null},{language:"en",name:null}]}},formRules(){return{texts:{$each:l.forEachFieldEng(["name"])}}}},L=x("useRefusalTypeStore",{state:()=>({progress:0,formToCompare:null}),getters:{},actions:{setProgress(e){this.progress=e},setFormToCompare(e){this.formToCompare=e}}});export{V as _,E as h,L as u};
