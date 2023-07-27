import{q as I,i as z,E as v,r as F,o as L,c as E,w as B,a as s,m as e,v as p,z as y,e as T,F as $}from"./index-60da5de7.js";import{b as f}from"./helpers-870863ae.js";import{u as U}from"./index.esm-61763a8c.js";import{u as w}from"./document-60dffbf9.js";import{_ as N,a as A}from"./refusal-f8d08513.js";import{r as S}from"./index.esm-eed786a6.js";import{_ as k}from"./generic-f0c11361.js";const O={__name:"base-information",props:{modelValue:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},validateForm:{type:Boolean,default:!1},selectedLang:{type:[String,Number],required:!0},rules:{type:Object,default:{}},isExternalEdit:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(b,{emit:u}){const l=b,t=w();I();const r=U(l.rules,l.modelValue);let n=z(!0);const a=v({get(){return l.modelValue},set(o){u("update:modelValue",o)}}),c=v(()=>l.selectedLang),g=v({get(){return f.getFieldByLangAndName(a.value,c.value,"name")},set(o){f.setFieldByLangAndName(a.value,c.value,"name",o)}}),V=v({get(){return f.getFieldByLangAndName(a.value,c.value,"abreviation")},set(o){f.setFieldByLangAndName(a.value,c.value,"abreviation",o)}});return(o,d)=>{const m=F("form-field"),q=F("row"),D=F("accordion");return L(),E(D,{id:"base-information",title:o._lang.common.baseInformation,collapsed:e(n),class:"mb-4"},{default:B(()=>[s(q,null,{default:B(()=>[s(m,{id:"code",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(a).code,"onUpdate:modelValue":d[0]||(d[0]=i=>e(a).code=i),label:o._lang.label.code,disabled:!0,loading:l.loading,type:e(p).inputs.text,maxlength:45},null,8,["modelValue","label","loading","type"]),s(m,{id:"recordStateTypeId",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:o._lang.enums.recordStateType[e(a).recordStateTypeId],"onUpdate:modelValue":d[1]||(d[1]=i=>o._lang.enums.recordStateType[e(a).recordStateTypeId]=i),label:o._lang.label.state,disabled:!0,loading:l.loading,type:e(p).inputs.text},null,8,["modelValue","label","loading","type"]),s(m,{id:"documentTypeId",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(a).documentTypeId,"onUpdate:modelValue":d[2]||(d[2]=i=>e(a).documentTypeId=i),label:o._lang.label.documentTypeId,disabled:l.disabled,loading:l.loading,type:e(p).inputs.multiselect,required:l.validateForm,placeholder:o._lang.common.selectOption,showError:l.validateForm&&e(r).documentTypeId.$error,"error-message":o._errorMessageField(e(r).documentTypeId),options:e(t).documentTypeList},null,8,["modelValue","label","disabled","loading","type","required","placeholder","showError","error-message","options"]),s(m,{id:"abreviation",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(V),"onUpdate:modelValue":d[3]||(d[3]=i=>y(V)?V.value=i:null),label:o._lang.label.abreviation,disabled:l.disabled,loading:l.loading,type:e(p).inputs.text,maxlength:45,language:e(c)},null,8,["modelValue","label","disabled","loading","type","language"]),s(m,{id:"name",class:"mb-3 col-12 col-xl-8",modelValue:e(g),"onUpdate:modelValue":d[4]||(d[4]=i=>y(g)?g.value=i:null),label:o._lang.label.name,disabled:l.disabled,loading:l.loading,type:e(p).inputs.text,maxlength:45,required:l.validateForm,showError:l.validateForm&&e(r).texts.$error,"error-message":o._errorMessageField(e(r).texts),language:e(c)},null,8,["modelValue","label","disabled","loading","type","required","showError","error-message","language"])]),_:1}),s(q,null,{default:B(()=>[l.isExternalEdit?(L(),E(m,{key:1,id:"organizationId",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(a).organizationId,"onUpdate:modelValue":d[6]||(d[6]=i=>e(a).organizationId=i),label:o._lang.label.organizationHost,disabled:!0,loading:l.loading,type:e(p).inputs.text,required:l.validateForm,placeholder:o._lang.common.selectOption},null,8,["modelValue","label","loading","type","required","placeholder"])):(L(),E(m,{key:0,id:"organization",class:"mb-3 col-12 col-lg-4",modelValue:e(a).organization,"onUpdate:modelValue":d[5]||(d[5]=i=>e(a).organization=i),label:o._lang.label.organizationHost,disabled:l.disabled,loading:l.loading,type:e(p).inputs.multiselect,required:l.validateForm,placeholder:o._lang.common.selectOption,showError:l.validateForm&&e(r).organization.$error,"error-message":o._errorMessageField(e(r).organization),options:e(t).organizationList,valueProp:e(p).multiselectValueProp.value3},null,8,["modelValue","label","disabled","loading","type","required","placeholder","showError","error-message","options","valueProp"])),s(m,{id:"startDate",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(a).startDate,"onUpdate:modelValue":d[7]||(d[7]=i=>e(a).startDate=i),label:o._lang.label.startDate,disabled:l.disabled,loading:l.loading,type:e(p).inputs.datepicker,required:l.validateForm,placeholder:"dd/mm/aaaa",showError:l.validateForm&&e(r).startDate.$error,"error-message":o._errorMessageField(e(r).startDate)},null,8,["modelValue","label","disabled","loading","type","required","showError","error-message"]),s(m,{id:"endDate",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(a).endDate,"onUpdate:modelValue":d[8]||(d[8]=i=>e(a).endDate=i),label:o._lang.label.endDate,disabled:l.disabled,loading:l.loading,type:e(p).inputs.datepicker,placeholder:"dd/mm/aaaa",minDate:e(a).startDate},null,8,["modelValue","label","disabled","loading","type","minDate"]),s(m,{id:"public",class:"mb-3 col-12 col-lg-4",modelValue:e(a).documentActive,"onUpdate:modelValue":d[9]||(d[9]=i=>e(a).documentActive=i),label:o._lang.label.public,disabled:l.disabled,loading:l.loading,type:e(p).inputs.checkbox},null,8,["modelValue","label","disabled","loading","type"])]),_:1})]),_:1},8,["title","collapsed"])}}},x={__name:"description",props:{modelValue:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},selectedLang:{type:[String,Number],required:!0},validateForm:{type:Boolean,default:!1},rules:{type:Object,default:{}}},emits:["update:modelValue"],setup(b,{emit:u}){const l=b,t=U(l.rules,l.modelValue),r=v({get(){return l.modelValue},set(g){u("update:modelValue",g)}}),n=v(()=>l.selectedLang),a=v({get(){return f.getFieldByLangAndName(r.value,n.value,"description")},set(g){f.setFieldByLangAndName(r.value,n.value,"description",g)}}),c=v({get(){return f.getFieldByLangAndName(r.value,n.value,"legislation")},set(g){f.setFieldByLangAndName(r.value,n.value,"legislation",g)}});return(g,V)=>{const o=F("form-field"),d=F("accordion");return L(),E(d,{id:"description",title:g._lang.common.description,collapsed:!1,class:"mb-4"},{default:B(()=>[s(o,{id:"description",class:"mb-3 col-12",modelValue:e(a),"onUpdate:modelValue":V[0]||(V[0]=m=>y(a)?a.value=m:null),label:g._lang.label.description,disabled:l.disabled,loading:l.loading,type:e(p).inputs.text,maxlength:255,language:e(n)},null,8,["modelValue","label","disabled","loading","type","language"]),s(o,{id:"legislation",class:"mb-3 col-12",modelValue:e(c),"onUpdate:modelValue":V[1]||(V[1]=m=>y(c)?c.value=m:null),label:g._lang.label.legislation,disabled:l.disabled,loading:l.loading,type:e(p).inputs.text,maxlength:255,language:e(n)},null,8,["modelValue","label","disabled","loading","type","language"]),s(o,{id:"document",class:"mb-3 col-12",modelValue:e(r).document,"onUpdate:modelValue":V[2]||(V[2]=m=>e(r).document=m),label:g._lang.label.document,disabled:l.disabled,loading:l.loading,type:e(p).inputs.file,required:!0,showError:l.validateForm&&e(t).document.$error,"error-message":g._errorMessageField(e(t).document)},null,8,["modelValue","label","disabled","loading","type","showError","error-message"])]),_:1},8,["title"])}}},J={__name:"general",props:{modelValue:{type:Object,required:!0},selectedLang:S,disabled:{Boolean,default:!0},rules:{Boolean,default:!0},validateForm:{Boolean,default:!1},loading:{Object,default:{}},isExternalEdit:{type:Boolean,default:!1}},setup(b){const u=b,l=w(),t=v({get(){return u.modelValue},set(r){emit("update:modelValue",r)}});return(r,n)=>(L(),T($,null,[s(N,{modelValue:e(t),"onUpdate:modelValue":n[0]||(n[0]=a=>y(t)?t.value=a:null),store:e(l)},null,8,["modelValue","store"]),s(e(O),{modelValue:e(t),"onUpdate:modelValue":n[1]||(n[1]=a=>y(t)?t.value=a:null),disabled:u.disabled,loading:b.loading,selectedLang:u.selectedLang,validateForm:u.validateForm,rules:u.rules,isExternalEdit:u.isExternalEdit},null,8,["modelValue","disabled","loading","selectedLang","validateForm","rules","isExternalEdit"]),s(e(x),{modelValue:e(t),"onUpdate:modelValue":n[2]||(n[2]=a=>y(t)?t.value=a:null),disabled:u.disabled,loading:b.loading,selectedLang:u.selectedLang,validateForm:u.validateForm,rules:u.rules},null,8,["modelValue","disabled","loading","selectedLang","validateForm","rules"]),s(e(A),{modelValue:e(t),"onUpdate:modelValue":n[3]||(n[3]=a=>y(t)?t.value=a:null),disabled:u.disabled,loading:b.loading,selectedLang:u.selectedLang},null,8,["modelValue","disabled","loading","selectedLang"]),s(k,{modelValue:e(t),"onUpdate:modelValue":n[4]||(n[4]=a=>y(t)?t.value=a:null),disabled:u.disabled,loading:b.loading,selectedLang:b.selectedLang},null,8,["modelValue","disabled","loading","selectedLang"])],64))}};export{J as _};
