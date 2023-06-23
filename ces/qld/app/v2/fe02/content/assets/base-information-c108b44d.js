import{x as L,r as S,I as b,O as B,A as n,o as h,a as f,b as E,c as U,w,d as i,f as e,i as T}from"./index-920dbb37.js";import{u as z}from"./index.esm-d064d6e3.js";import{u as O}from"./service-e327b247.js";import{b as c}from"./helpers-4c156364.js";import{u as k}from"./point-of-care-98c47a98.js";const P={__name:"base-information",props:{modelValue:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},validateForm:{type:Boolean,default:!1},selectedLang:{type:[String,Number],required:!0},rules:{type:Object,default:{}},isExternalEdit:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(F,{emit:q}){const l=F,V=O(),p=L(),m=z(l.rules,l.modelValue);let s=S(!0);const d=b({get(){return l.modelValue},set(a){q("update:modelValue",a)}}),g=b(()=>l.selectedLang),v=b({get(){return c.getFieldByLangAndName(d.value,g.value,"name")},set(a){c.setFieldByLangAndName(d.value,g.value,"name",a)}}),y=b({get(){return c.getFieldByLangAndName(d.value,g.value,"abreviation")},set(a){c.setFieldByLangAndName(d.value,g.value,"abreviation",a)}});p.label.lifeEventId,p.label.businessEventId,B(()=>d.value.eventTypeId,()=>{d.value.eventTypeId===n.eventType.life?d.value.businessEventId=null:d.value.lifeEventId=null});const t=b(()=>g.value===n.language.en);return h(()=>{}),(a,r)=>{const u=f("form-field"),D=f("row"),I=f("accordion");return E(),U(I,{id:"base-information",title:a._lang.common.baseInformation,collapsed:e(s),class:"mb-4"},{default:w(()=>[i(D,null,{default:w(()=>[i(u,{id:"code",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(d).code,"onUpdate:modelValue":r[0]||(r[0]=o=>e(d).code=o),label:a._lang.label.code,disabled:!0,loading:l.loading,type:e(n).inputs.text,maxlength:45},null,8,["modelValue","label","loading","type"]),i(u,{id:"recordStateTypeId",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:a._lang.enums.recordStateType[e(d).recordStateTypeId],"onUpdate:modelValue":r[1]||(r[1]=o=>a._lang.enums.recordStateType[e(d).recordStateTypeId]=o),label:a._lang.label.state,disabled:!0,loading:l.loading,type:e(n).inputs.text},null,8,["modelValue","label","loading","type"]),i(u,{id:"serviceTypeId",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(d).serviceTypeId,"onUpdate:modelValue":r[2]||(r[2]=o=>e(d).serviceTypeId=o),label:a._lang.label.serviceTypeId,disabled:l.disabled||e(t),loading:l.loading,type:e(n).inputs.multiselect,required:l.validateForm,placeholder:a._lang.common.selectOption,showError:l.validateForm&&e(m).serviceTypeId.$error,"error-message":a._errorMessageField(e(m).serviceTypeId),options:e(V).serviceTypeList},null,8,["modelValue","label","disabled","loading","type","required","placeholder","showError","error-message","options"]),i(u,{id:"abreviation",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(y),"onUpdate:modelValue":r[3]||(r[3]=o=>T(y)?y.value=o:null),label:a._lang.label.abreviation,disabled:l.disabled,loading:l.loading,type:e(n).inputs.text,maxlength:45,language:e(g)},null,8,["modelValue","label","disabled","loading","type","language"]),i(u,{id:"name",class:"mb-3 col-12 col-xl-8",modelValue:e(v),"onUpdate:modelValue":r[4]||(r[4]=o=>T(v)?v.value=o:null),label:a._lang.label.name,disabled:l.disabled,loading:l.loading,type:e(n).inputs.text,maxlength:45,required:l.validateForm,showError:l.validateForm&&e(m).texts.$error,"error-message":a._errorMessageField(e(m).texts),language:e(g)},null,8,["modelValue","label","disabled","loading","type","required","showError","error-message","language"]),i(u,{id:"serviceCategoryId",class:"mb-3 col-12 col-lg-4",modelValue:e(d).serviceCategoryId,"onUpdate:modelValue":r[5]||(r[5]=o=>e(d).serviceCategoryId=o),label:a._lang.label.serviceCategoryId,disabled:l.disabled||e(t),loading:l.loading,type:e(n).inputs.multiselect,required:l.validateForm,placeholder:a._lang.common.selectOption,showError:l.validateForm&&e(m).serviceCategoryId.$error,"error-message":a._errorMessageField(e(m).serviceCategoryId),options:e(V).serviceCategoryList},null,8,["modelValue","label","disabled","loading","type","required","placeholder","showError","error-message","options"]),i(u,{id:"startDate",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(d).startDate,"onUpdate:modelValue":r[6]||(r[6]=o=>e(d).startDate=o),label:a._lang.label.startDate,disabled:l.disabled||e(t),loading:l.loading,type:e(n).inputs.datepicker,required:l.validateForm,placeholder:"dd/mm/aaaa",showError:l.validateForm&&e(m).startDate.$error,"error-message":a._errorMessageField(e(m).startDate)},null,8,["modelValue","label","disabled","loading","type","required","showError","error-message"]),i(u,{id:"endDate",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(d).endDate,"onUpdate:modelValue":r[7]||(r[7]=o=>e(d).endDate=o),label:a._lang.label.endDate,disabled:l.disabled||e(t),loading:l.loading,type:e(n).inputs.datepicker,placeholder:"dd/mm/aaaa",minDate:e(d).startDate},null,8,["modelValue","label","disabled","loading","type","minDate"]),i(u,{id:"organization",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(d).organization,"onUpdate:modelValue":r[8]||(r[8]=o=>e(d).organization=o),label:a._lang.label.parentOrganization,disabled:l.disabled||e(t)||F.isExternalEdit,loading:l.loading,type:e(n).inputs.multiselect,required:l.validateForm,placeholder:a._lang.common.selectOption,showError:l.validateForm&&e(m).organization.$error,"error-message":a._errorMessageField(e(m).organization),options:e(V).organizationList,valueProp:e(n).multiselectValueProp.value3},null,8,["modelValue","label","disabled","loading","type","required","placeholder","showError","error-message","options","valueProp"]),i(u,{id:"serviceActive",class:"mb-3 col-12 col-md-6 col-lg-2",modelValue:e(d).serviceActive,"onUpdate:modelValue":r[9]||(r[9]=o=>e(d).serviceActive=o),label:a._lang.label.public,disabled:l.disabled||e(t),loading:l.loading,type:e(n).inputs.checkbox},null,8,["modelValue","label","disabled","loading","type"]),i(u,{id:"stateSupport",class:"mb-3 col-12 col-md-6 col-lg-3",modelValue:e(d).stateSupport,"onUpdate:modelValue":r[10]||(r[10]=o=>e(d).stateSupport=o),label:a._lang.label.stateSupport,disabled:l.disabled||e(t),loading:l.loading,type:e(n).inputs.checkbox},null,8,["modelValue","label","disabled","loading","type"]),i(u,{id:"internal",class:"mb-3 col-12 col-md-6 col-lg-3",modelValue:e(d).internal,"onUpdate:modelValue":r[11]||(r[11]=o=>e(d).internal=o),label:a._lang.label.internal,disabled:l.disabled||e(t),loading:l.loading,type:e(n).inputs.checkbox},null,8,["modelValue","label","disabled","loading","type"]),i(u,{id:"virtual",class:"mb-3 col-12 col-md-4",modelValue:e(d).virtual,"onUpdate:modelValue":r[12]||(r[12]=o=>e(d).virtual=o),label:a._lang.label.virtual,disabled:l.disabled||e(t),loading:l.loading,type:e(n).inputs.checkbox},null,8,["modelValue","label","disabled","loading","type"]),i(u,{id:"serviceUrl",class:"mb-3 col-12 col-xl-8",modelValue:e(d).serviceUrl,"onUpdate:modelValue":r[13]||(r[13]=o=>e(d).serviceUrl=o),required:e(d).virtual,label:a._lang.label.serviceUrl,disabled:l.disabled||e(t)||!e(d).virtual,loading:l.loading,type:e(n).inputs.text,maxlength:1024,"show-error":e(d).virtual&&e(m).serviceUrl.$error,"error-message":a._errorMessageField(e(m).serviceUrl)},null,8,["modelValue","required","label","disabled","loading","type","show-error","error-message"])]),_:1})]),_:1},8,["title","collapsed"])}}},j={__name:"base-information",props:{modelValue:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},validateForm:{type:Boolean,default:!1},isExternalEdit:{type:Boolean,default:!1},selectedLang:{type:[String,Number],required:!0},rules:{type:Object,default:{}}},emits:["update:modelValue"],setup(F,{emit:q}){const l=F,V=k();L();const p=z(l.rules,l.modelValue);let m=S(!0);const s=b({get(){return l.modelValue},set(t){q("update:modelValue",t)}}),d=b(()=>l.selectedLang),g=b(()=>l.selectedLang===n.language.en),v=b({get(){return c.getFieldByLangAndName(s.value,d.value,"name")},set(t){c.setFieldByLangAndName(s.value,d.value,"name",t)}}),y=b({get(){return c.getFieldByLangAndName(s.value,d.value,"abreviation")},set(t){c.setFieldByLangAndName(s.value,d.value,"abreviation",t)}});return(t,a)=>{const r=f("form-field"),u=f("row"),D=f("accordion");return E(),U(D,{id:"base-information-accordion",title:t._lang.common.baseInformation,collapsed:e(m),class:"mb-4"},{default:w(()=>[i(u,null,{default:w(()=>{var I;return[i(r,{id:"code",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(s).code,"onUpdate:modelValue":a[0]||(a[0]=o=>e(s).code=o),label:t._lang.label.code,disabled:!0,loading:l.loading,type:e(n).inputs.text,maxlength:45},null,8,["modelValue","label","loading","type"]),i(r,{id:"recordStateTypeId",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:t._lang.enums.recordStateType[e(s).recordStateTypeId],"onUpdate:modelValue":a[1]||(a[1]=o=>t._lang.enums.recordStateType[e(s).recordStateTypeId]=o),label:t._lang.label.state,disabled:!0,loading:l.loading,type:e(n).inputs.text},null,8,["modelValue","label","loading","type"]),l.isExternalEdit?(E(),U(r,{key:1,id:"organization",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(s).organization,"onUpdate:modelValue":a[3]||(a[3]=o=>e(s).organization=o),label:t._lang.label.organizationHost,disabled:!0,loading:l.loading,type:e(n).inputs.text,required:l.validateForm,placeholder:t._lang.common.selectOption},null,8,["modelValue","label","loading","type","required","placeholder"])):(E(),U(r,{key:0,id:"organization",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(s).organization,"onUpdate:modelValue":a[2]||(a[2]=o=>e(s).organization=o),label:t._lang.label.organizationHost,disabled:l.disabled||e(g),loading:l.loading,type:e(n).inputs.multiselect,required:l.validateForm,placeholder:t._lang.common.selectOption,showError:l.validateForm&&e(p).organization.$error,"error-message":t._errorMessageField(e(p).organization),options:e(V).organizationList,valueProp:e(n).multiselectValueProp.value3},null,8,["modelValue","label","disabled","loading","type","required","placeholder","showError","error-message","options","valueProp"])),i(r,{id:"channelTypeId",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(s).channel.channelTypeId,"onUpdate:modelValue":a[4]||(a[4]=o=>e(s).channel.channelTypeId=o),label:t._lang.label.channelTypeId,disabled:l.disabled||e(g),loading:l.loading,type:e(n).inputs.multiselect,required:l.validateForm,placeholder:t._lang.common.selectOption,showError:l.validateForm&&e(p).channel.channelTypeId.$error,"error-message":t._errorMessageField((I=e(p).channel)==null?void 0:I.channelTypeId),options:e(V).channelTypeList},null,8,["modelValue","label","disabled","loading","type","required","placeholder","showError","error-message","options"]),i(r,{id:"name",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(v),"onUpdate:modelValue":a[5]||(a[5]=o=>T(v)?v.value=o:null),label:t._lang.label.channelName,disabled:l.disabled,loading:l.loading,type:e(n).inputs.text,required:l.validateForm,maxlength:255,showError:l.validateForm&&e(p).texts.$error,"error-message":t._errorMessageField(e(p).texts),language:e(d)},null,8,["modelValue","label","disabled","loading","type","required","showError","error-message","language"]),i(r,{id:"abreviation",class:"mb-3 col-12 col-lg-4",modelValue:e(y),"onUpdate:modelValue":a[6]||(a[6]=o=>T(y)?y.value=o:null),label:t._lang.label.abreviation,disabled:l.disabled,loading:l.loading,type:e(n).inputs.text,maxlength:45,language:e(d)},null,8,["modelValue","label","disabled","loading","type","language"]),i(r,{id:"startDate",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(s).startDate,"onUpdate:modelValue":a[7]||(a[7]=o=>e(s).startDate=o),label:t._lang.label.startDate,disabled:l.disabled||e(g),loading:l.loading,type:e(n).inputs.datepicker,required:l.validateForm,placeholder:"dd/mm/aaaa",showError:l.validateForm&&e(p).startDate.$error,"error-message":t._errorMessageField(e(p).startDate)},null,8,["modelValue","label","disabled","loading","type","required","showError","error-message"]),i(r,{id:"endDate",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(s).endDate,"onUpdate:modelValue":a[8]||(a[8]=o=>e(s).endDate=o),label:t._lang.label.endDate,disabled:l.disabled||e(g),loading:l.loading,type:e(n).inputs.datepicker,placeholder:"dd/mm/aaaa",minDate:e(s).startDate},null,8,["modelValue","label","disabled","loading","type","minDate"]),i(r,{id:"public",class:"mb-3 col-12 col-lg-4",modelValue:e(s).pointOfCareActive,"onUpdate:modelValue":a[9]||(a[9]=o=>e(s).pointOfCareActive=o),label:t._lang.label.public,disabled:l.disabled||e(g),loading:l.loading,type:e(n).inputs.checkbox},null,8,["modelValue","label","disabled","loading","type"])]}),_:1})]),_:1},8,["title","collapsed"])}}};export{j as _,P as a};
