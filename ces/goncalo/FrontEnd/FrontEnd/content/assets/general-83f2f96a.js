import{i as T,r as $,k as y,l as F,c as B,m as E,n as L,q as s,s as e,v as p,K as v,e as N,F as A}from"./index-34a71b79.js";import{b as f}from"./helpers-9519476b.js";import{u as U}from"./index.esm-fc651f6b.js";import{u as q}from"./document-67af6b39.js";import{_ as I,a as S}from"./refusal-0c23d9f3.js";import{r as O}from"./index.esm-e19cc10d.js";import{_ as k}from"./generic-bbc990b3.js";const z={__name:"base-information",props:{modelValue:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},validateForm:{type:Boolean,default:!1},selectedLang:{type:[String,Number],required:!0},rules:{type:Object,default:{}},isExternalEdit:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(b,{emit:i}){const l=b,o=q();T();const r=U(l.rules,l.modelValue);let n=$(!0);const a=y({get(){return l.modelValue},set(d){i("update:modelValue",d)}}),c=y(()=>l.selectedLang),m=y({get(){return f.getFieldByLangAndName(a.value,c.value,"name")},set(d){f.setFieldByLangAndName(a.value,c.value,"name",d)}}),V=y({get(){return f.getFieldByLangAndName(a.value,c.value,"abreviation")},set(d){f.setFieldByLangAndName(a.value,c.value,"abreviation",d)}});return(d,t)=>{const g=F("form-field"),D=F("row"),w=F("accordion");return B(),E(w,{id:"base-information",title:d._lang.common.baseInformation,collapsed:e(n),class:"mb-4"},{default:L(()=>[s(D,null,{default:L(()=>[s(g,{id:"code",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(a).code,"onUpdate:modelValue":t[0]||(t[0]=u=>e(a).code=u),label:d._lang.label.code,disabled:!0,loading:l.loading,type:e(p).inputs.text,maxlength:45},null,8,["modelValue","label","loading","type"]),s(g,{id:"recordStateTypeId",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:d._lang.enums.recordStateType[e(a).recordStateTypeId],"onUpdate:modelValue":t[1]||(t[1]=u=>d._lang.enums.recordStateType[e(a).recordStateTypeId]=u),label:d._lang.label.state,disabled:!0,loading:l.loading,type:e(p).inputs.text},null,8,["modelValue","label","loading","type"]),s(g,{id:"organization",class:"mb-3 col-12 col-lg-4",modelValue:e(a).organization,"onUpdate:modelValue":t[2]||(t[2]=u=>e(a).organization=u),label:d._lang.label.organizationHost,disabled:l.disabled,loading:l.loading,type:e(p).inputs.parentOrganization,required:l.validateForm,placeholder:d._lang.common.selectOption,showError:l.validateForm&&e(r).organization.$error,"error-message":d._errorMessageField(e(r).organization),options:e(o).organizationList,valueProp:e(p).multiselectValueProp.value3},null,8,["modelValue","label","disabled","loading","type","required","placeholder","showError","error-message","options","valueProp"]),s(g,{id:"abreviation",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(V),"onUpdate:modelValue":t[3]||(t[3]=u=>v(V)?V.value=u:null),label:d._lang.label.abreviation,disabled:l.disabled,loading:l.loading,type:e(p).inputs.text,maxlength:45,language:e(c)},null,8,["modelValue","label","disabled","loading","type","language"]),s(g,{id:"name",class:"mb-3 col-12 col-xl-8",modelValue:e(m),"onUpdate:modelValue":t[4]||(t[4]=u=>v(m)?m.value=u:null),label:d._lang.label.name,disabled:l.disabled,loading:l.loading,type:e(p).inputs.text,maxlength:45,required:l.validateForm,showError:l.validateForm&&e(r).texts.$error,"error-message":d._errorMessageField(e(r).texts),language:e(c)},null,8,["modelValue","label","disabled","loading","type","required","showError","error-message","language"]),s(g,{id:"documentTypeId",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(a).documentTypeId,"onUpdate:modelValue":t[5]||(t[5]=u=>e(a).documentTypeId=u),label:d._lang.label.documentTypeId,disabled:l.disabled,loading:l.loading,type:e(p).inputs.multiselect,required:l.validateForm,placeholder:d._lang.common.selectOption,showError:l.validateForm&&e(r).documentTypeId.$error,"error-message":d._errorMessageField(e(r).documentTypeId),options:e(o).documentTypeList},null,8,["modelValue","label","disabled","loading","type","required","placeholder","showError","error-message","options"]),s(g,{id:"startDate",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(a).startDate,"onUpdate:modelValue":t[6]||(t[6]=u=>e(a).startDate=u),label:d._lang.label.startDate,disabled:l.disabled,loading:l.loading,type:e(p).inputs.datepicker,required:l.validateForm,placeholder:"dd/mm/aaaa",showError:l.validateForm&&e(r).startDate.$error,"error-message":d._errorMessageField(e(r).startDate)},null,8,["modelValue","label","disabled","loading","type","required","showError","error-message"]),s(g,{id:"endDate",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(a).endDate,"onUpdate:modelValue":t[7]||(t[7]=u=>e(a).endDate=u),label:d._lang.label.endDate,disabled:l.disabled,loading:l.loading,type:e(p).inputs.datepicker,placeholder:"dd/mm/aaaa",minDate:e(a).startDate},null,8,["modelValue","label","disabled","loading","type","minDate"]),s(g,{id:"public",class:"mb-3 col-12 col-lg-4",modelValue:e(a).documentActive,"onUpdate:modelValue":t[8]||(t[8]=u=>e(a).documentActive=u),label:d._lang.label.public,disabled:l.disabled,loading:l.loading,type:e(p).inputs.checkbox},null,8,["modelValue","label","disabled","loading","type"])]),_:1})]),_:1},8,["title","collapsed"])}}},j={__name:"description",props:{modelValue:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},selectedLang:{type:[String,Number],required:!0},validateForm:{type:Boolean,default:!1},rules:{type:Object,default:{}}},emits:["update:modelValue"],setup(b,{emit:i}){const l=b,o=U(l.rules,l.modelValue),r=y({get(){return l.modelValue},set(m){i("update:modelValue",m)}}),n=y(()=>l.selectedLang),a=y({get(){return f.getFieldByLangAndName(r.value,n.value,"description")},set(m){f.setFieldByLangAndName(r.value,n.value,"description",m)}}),c=y({get(){return f.getFieldByLangAndName(r.value,n.value,"legislation")},set(m){f.setFieldByLangAndName(r.value,n.value,"legislation",m)}});return(m,V)=>{const d=F("form-field"),t=F("accordion");return B(),E(t,{id:"description",title:m._lang.common.description,collapsed:!1,class:"mb-4"},{default:L(()=>[s(d,{id:"description",class:"mb-3 col-12",modelValue:e(a),"onUpdate:modelValue":V[0]||(V[0]=g=>v(a)?a.value=g:null),label:m._lang.label.description,disabled:l.disabled,loading:l.loading,type:e(p).inputs.text,maxlength:255,language:e(n)},null,8,["modelValue","label","disabled","loading","type","language"]),s(d,{id:"legislation",class:"mb-3 col-12",modelValue:e(c),"onUpdate:modelValue":V[1]||(V[1]=g=>v(c)?c.value=g:null),label:m._lang.label.legislation,disabled:l.disabled,loading:l.loading,type:e(p).inputs.text,maxlength:255,language:e(n)},null,8,["modelValue","label","disabled","loading","type","language"]),s(d,{id:"document",class:"mb-3 col-12",modelValue:e(r).document,"onUpdate:modelValue":V[2]||(V[2]=g=>e(r).document=g),label:m._lang.label.document,disabled:l.disabled,loading:l.loading,type:e(p).inputs.file,required:!0,showError:l.validateForm&&e(o).document.$error,"error-message":m._errorMessageField(e(o).document)},null,8,["modelValue","label","disabled","loading","type","showError","error-message"])]),_:1},8,["title"])}}},G={__name:"general",props:{modelValue:{type:Object,required:!0},selectedLang:O,disabled:{Boolean,default:!0},rules:{Boolean,default:!0},validateForm:{Boolean,default:!1},loading:{Object,default:{}},isExternalEdit:{type:Boolean,default:!1}},setup(b){const i=b,l=q(),o=y({get(){return i.modelValue},set(r){emit("update:modelValue",r)}});return(r,n)=>(B(),N(A,null,[s(I,{modelValue:e(o),"onUpdate:modelValue":n[0]||(n[0]=a=>v(o)?o.value=a:null),store:e(l)},null,8,["modelValue","store"]),s(e(z),{modelValue:e(o),"onUpdate:modelValue":n[1]||(n[1]=a=>v(o)?o.value=a:null),disabled:i.disabled,loading:b.loading,selectedLang:i.selectedLang,validateForm:i.validateForm,rules:i.rules,isExternalEdit:i.isExternalEdit},null,8,["modelValue","disabled","loading","selectedLang","validateForm","rules","isExternalEdit"]),s(e(j),{modelValue:e(o),"onUpdate:modelValue":n[2]||(n[2]=a=>v(o)?o.value=a:null),disabled:i.disabled,loading:b.loading,selectedLang:i.selectedLang,validateForm:i.validateForm,rules:i.rules},null,8,["modelValue","disabled","loading","selectedLang","validateForm","rules"]),s(e(S),{modelValue:e(o),"onUpdate:modelValue":n[3]||(n[3]=a=>v(o)?o.value=a:null),disabled:i.disabled,loading:b.loading,selectedLang:i.selectedLang},null,8,["modelValue","disabled","loading","selectedLang"]),s(k,{modelValue:e(o),"onUpdate:modelValue":n[4]||(n[4]=a=>v(o)?o.value=a:null),disabled:i.disabled,loading:b.loading,selectedLang:b.selectedLang},null,8,["modelValue","disabled","loading","selectedLang"])],64))}};export{G as _};
