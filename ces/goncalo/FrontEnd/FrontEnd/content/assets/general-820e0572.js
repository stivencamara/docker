import{i as I,r as T,j as v,k as F,c as L,l as E,w as B,n as s,p as e,s as p,H as y,e as $,F as z}from"./index-255cb3f5.js";import{b as f}from"./helpers-3a01797c.js";import{u as q}from"./index.esm-a0301e1b.js";import{u as w}from"./document-395b4920.js";import{_ as N,a as k}from"./refusal-75797cf7.js";import{r as A}from"./index.esm-d39b5f1a.js";import{_ as S}from"./generic-4994cdd8.js";const O={__name:"base-information",props:{modelValue:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},validateForm:{type:Boolean,default:!1},selectedLang:{type:[String,Number],required:!0},rules:{type:Object,default:{}},isExternalEdit:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(b,{emit:u}){const l=b,t=w();I();const r=q(l.rules,l.modelValue);let n=T(!0);const a=v({get(){return l.modelValue},set(d){u("update:modelValue",d)}}),c=v(()=>l.selectedLang),g=v({get(){return f.getFieldByLangAndName(a.value,c.value,"name")},set(d){f.setFieldByLangAndName(a.value,c.value,"name",d)}}),V=v({get(){return f.getFieldByLangAndName(a.value,c.value,"abreviation")},set(d){f.setFieldByLangAndName(a.value,c.value,"abreviation",d)}});return(d,o)=>{const m=F("form-field"),U=F("row"),D=F("accordion");return L(),E(D,{id:"base-information",title:d._lang.common.baseInformation,collapsed:e(n),class:"mb-4"},{default:B(()=>[s(U,null,{default:B(()=>[s(m,{id:"code",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(a).code,"onUpdate:modelValue":o[0]||(o[0]=i=>e(a).code=i),label:d._lang.label.code,disabled:!0,loading:l.loading,type:e(p).inputs.text,maxlength:45},null,8,["modelValue","label","loading","type"]),s(m,{id:"recordStateTypeId",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:d._lang.enums.recordStateType[e(a).recordStateTypeId],"onUpdate:modelValue":o[1]||(o[1]=i=>d._lang.enums.recordStateType[e(a).recordStateTypeId]=i),label:d._lang.label.state,disabled:!0,loading:l.loading,type:e(p).inputs.text},null,8,["modelValue","label","loading","type"]),s(m,{id:"documentTypeId",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(a).documentTypeId,"onUpdate:modelValue":o[2]||(o[2]=i=>e(a).documentTypeId=i),label:d._lang.label.documentTypeId,disabled:l.disabled,loading:l.loading,type:e(p).inputs.multiselect,required:l.validateForm,placeholder:d._lang.common.selectOption,showError:l.validateForm&&e(r).documentTypeId.$error,"error-message":d._errorMessageField(e(r).documentTypeId),options:e(t).documentTypeList},null,8,["modelValue","label","disabled","loading","type","required","placeholder","showError","error-message","options"]),s(m,{id:"abreviation",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(V),"onUpdate:modelValue":o[3]||(o[3]=i=>y(V)?V.value=i:null),label:d._lang.label.abreviation,disabled:l.disabled,loading:l.loading,type:e(p).inputs.text,maxlength:45,language:e(c)},null,8,["modelValue","label","disabled","loading","type","language"]),s(m,{id:"name",class:"mb-3 col-12 col-xl-8",modelValue:e(g),"onUpdate:modelValue":o[4]||(o[4]=i=>y(g)?g.value=i:null),label:d._lang.label.name,disabled:l.disabled,loading:l.loading,type:e(p).inputs.text,maxlength:45,required:l.validateForm,showError:l.validateForm&&e(r).texts.$error,"error-message":d._errorMessageField(e(r).texts),language:e(c)},null,8,["modelValue","label","disabled","loading","type","required","showError","error-message","language"])]),_:1}),s(U,null,{default:B(()=>[l.isExternalEdit?(L(),E(m,{key:1,id:"organizationId",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(a).organizationId,"onUpdate:modelValue":o[6]||(o[6]=i=>e(a).organizationId=i),label:d._lang.label.organizationHost,disabled:!0,loading:l.loading,type:e(p).inputs.text,required:l.validateForm,placeholder:d._lang.common.selectOption},null,8,["modelValue","label","loading","type","required","placeholder"])):(L(),E(m,{key:0,id:"organization",class:"mb-3 col-12 col-lg-4",modelValue:e(a).organization,"onUpdate:modelValue":o[5]||(o[5]=i=>e(a).organization=i),label:d._lang.label.organizationHost,disabled:l.disabled,loading:l.loading,type:e(p).inputs.multiselect,required:l.validateForm,placeholder:d._lang.common.selectOption,showError:l.validateForm&&e(r).organization.$error,"error-message":d._errorMessageField(e(r).organization),options:e(t).organizationList,valueProp:e(p).multiselectValueProp.value3},null,8,["modelValue","label","disabled","loading","type","required","placeholder","showError","error-message","options","valueProp"])),s(m,{id:"startDate",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(a).startDate,"onUpdate:modelValue":o[7]||(o[7]=i=>e(a).startDate=i),label:d._lang.label.startDate,disabled:l.disabled,loading:l.loading,type:e(p).inputs.datepicker,required:l.validateForm,placeholder:"dd/mm/aaaa",showError:l.validateForm&&e(r).startDate.$error,"error-message":d._errorMessageField(e(r).startDate)},null,8,["modelValue","label","disabled","loading","type","required","showError","error-message"]),s(m,{id:"endDate",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(a).endDate,"onUpdate:modelValue":o[8]||(o[8]=i=>e(a).endDate=i),label:d._lang.label.endDate,disabled:l.disabled,loading:l.loading,type:e(p).inputs.datepicker,placeholder:"dd/mm/aaaa",minDate:e(a).startDate},null,8,["modelValue","label","disabled","loading","type","minDate"]),s(m,{id:"public",class:"mb-3 col-12 col-lg-4",modelValue:e(a).documentActive,"onUpdate:modelValue":o[9]||(o[9]=i=>e(a).documentActive=i),label:d._lang.label.public,disabled:l.disabled,loading:l.loading,type:e(p).inputs.checkbox},null,8,["modelValue","label","disabled","loading","type"])]),_:1})]),_:1},8,["title","collapsed"])}}},j={__name:"description",props:{modelValue:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},selectedLang:{type:[String,Number],required:!0},validateForm:{type:Boolean,default:!1},rules:{type:Object,default:{}}},emits:["update:modelValue"],setup(b,{emit:u}){const l=b,t=q(l.rules,l.modelValue),r=v({get(){return l.modelValue},set(g){u("update:modelValue",g)}}),n=v(()=>l.selectedLang),a=v({get(){return f.getFieldByLangAndName(r.value,n.value,"description")},set(g){f.setFieldByLangAndName(r.value,n.value,"description",g)}}),c=v({get(){return f.getFieldByLangAndName(r.value,n.value,"legislation")},set(g){f.setFieldByLangAndName(r.value,n.value,"legislation",g)}});return(g,V)=>{const d=F("form-field"),o=F("accordion");return L(),E(o,{id:"description",title:g._lang.common.description,collapsed:!1,class:"mb-4"},{default:B(()=>[s(d,{id:"description",class:"mb-3 col-12",modelValue:e(a),"onUpdate:modelValue":V[0]||(V[0]=m=>y(a)?a.value=m:null),label:g._lang.label.description,disabled:l.disabled,loading:l.loading,type:e(p).inputs.text,maxlength:255,language:e(n)},null,8,["modelValue","label","disabled","loading","type","language"]),s(d,{id:"legislation",class:"mb-3 col-12",modelValue:e(c),"onUpdate:modelValue":V[1]||(V[1]=m=>y(c)?c.value=m:null),label:g._lang.label.legislation,disabled:l.disabled,loading:l.loading,type:e(p).inputs.text,maxlength:255,language:e(n)},null,8,["modelValue","label","disabled","loading","type","language"]),s(d,{id:"document",class:"mb-3 col-12",modelValue:e(r).document,"onUpdate:modelValue":V[2]||(V[2]=m=>e(r).document=m),label:g._lang.label.document,disabled:l.disabled,loading:l.loading,type:e(p).inputs.file,required:!0,showError:l.validateForm&&e(t).document.$error,"error-message":g._errorMessageField(e(t).document)},null,8,["modelValue","label","disabled","loading","type","showError","error-message"])]),_:1},8,["title"])}}},J={__name:"general",props:{modelValue:{type:Object,required:!0},selectedLang:A,disabled:{Boolean,default:!0},rules:{Boolean,default:!0},validateForm:{Boolean,default:!1},loading:{Object,default:{}},isExternalEdit:{type:Boolean,default:!1}},setup(b){const u=b,l=w(),t=v({get(){return u.modelValue},set(r){emit("update:modelValue",r)}});return(r,n)=>(L(),$(z,null,[s(N,{modelValue:e(t),"onUpdate:modelValue":n[0]||(n[0]=a=>y(t)?t.value=a:null),store:e(l)},null,8,["modelValue","store"]),s(e(O),{modelValue:e(t),"onUpdate:modelValue":n[1]||(n[1]=a=>y(t)?t.value=a:null),disabled:u.disabled,loading:b.loading,selectedLang:u.selectedLang,validateForm:u.validateForm,rules:u.rules,isExternalEdit:u.isExternalEdit},null,8,["modelValue","disabled","loading","selectedLang","validateForm","rules","isExternalEdit"]),s(e(j),{modelValue:e(t),"onUpdate:modelValue":n[2]||(n[2]=a=>y(t)?t.value=a:null),disabled:u.disabled,loading:b.loading,selectedLang:u.selectedLang,validateForm:u.validateForm,rules:u.rules},null,8,["modelValue","disabled","loading","selectedLang","validateForm","rules"]),s(e(k),{modelValue:e(t),"onUpdate:modelValue":n[3]||(n[3]=a=>y(t)?t.value=a:null),disabled:u.disabled,loading:b.loading,selectedLang:u.selectedLang},null,8,["modelValue","disabled","loading","selectedLang"]),s(S,{modelValue:e(t),"onUpdate:modelValue":n[4]||(n[4]=a=>y(t)?t.value=a:null),disabled:u.disabled,loading:b.loading,selectedLang:b.selectedLang},null,8,["modelValue","disabled","loading","selectedLang"])],64))}};export{J as _};
