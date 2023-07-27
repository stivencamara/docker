import{q as z,i as B,E as b,N as U,v as r,b as S,r as f,o as I,c as D,w,a as s,m as e,z as T}from"./index-a3ba1ed7.js";import{u as h}from"./index.esm-9dd2f6da.js";import{u as N}from"./service-e931ab78.js";import{b as c}from"./helpers-4d6c1969.js";import{u as O}from"./point-of-care-355d6f64.js";const P={__name:"base-information",props:{modelValue:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},validateForm:{type:Boolean,default:!1},selectedLang:{type:[String,Number],required:!0},rules:{type:Object,default:{}},isExternalEdit:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(F,{emit:q}){const l=F,V=N(),p=z(),g=h(l.rules,l.modelValue);let i=B(!0);const d=b({get(){return l.modelValue},set(a){q("update:modelValue",a)}}),u=b(()=>l.selectedLang),v=b({get(){return c.getFieldByLangAndName(d.value,u.value,"name")},set(a){c.setFieldByLangAndName(d.value,u.value,"name",a)}}),y=b({get(){return c.getFieldByLangAndName(d.value,u.value,"abreviation")},set(a){c.setFieldByLangAndName(d.value,u.value,"abreviation",a)}});p.label.lifeEventId,p.label.businessEventId,U(()=>d.value.eventTypeId,()=>{d.value.eventTypeId===r.eventType.life?d.value.businessEventId=null:d.value.lifeEventId=null});const t=b(()=>u.value===r.language.en);return U(()=>d.value.startDate,(a,n)=>{new Date(a)>new Date(d.value.endDate)&&(d.value.endDate=null)}),S(()=>{}),(a,n)=>{const m=f("form-field"),L=f("row"),E=f("accordion");return I(),D(E,{id:"base-information",title:a._lang.common.baseInformation,collapsed:e(i),class:"mb-4"},{default:w(()=>[s(L,null,{default:w(()=>[s(m,{id:"code",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(d).code,"onUpdate:modelValue":n[0]||(n[0]=o=>e(d).code=o),label:a._lang.label.code,disabled:!0,loading:l.loading,type:e(r).inputs.text,maxlength:45},null,8,["modelValue","label","loading","type"]),s(m,{id:"recordStateTypeId",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:a._lang.enums.recordStateType[e(d).recordStateTypeId],"onUpdate:modelValue":n[1]||(n[1]=o=>a._lang.enums.recordStateType[e(d).recordStateTypeId]=o),label:a._lang.label.state,disabled:!0,loading:l.loading,type:e(r).inputs.text},null,8,["modelValue","label","loading","type"]),s(m,{id:"serviceTypeId",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(d).serviceTypeId,"onUpdate:modelValue":n[2]||(n[2]=o=>e(d).serviceTypeId=o),label:a._lang.label.serviceTypeId,disabled:l.disabled||e(t),loading:l.loading,type:e(r).inputs.multiselect,required:l.validateForm,placeholder:a._lang.common.selectOption,showError:l.validateForm&&e(g).serviceTypeId.$error,"error-message":a._errorMessageField(e(g).serviceTypeId),options:e(V).serviceTypeList},null,8,["modelValue","label","disabled","loading","type","required","placeholder","showError","error-message","options"]),s(m,{id:"abreviation",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(y),"onUpdate:modelValue":n[3]||(n[3]=o=>T(y)?y.value=o:null),label:a._lang.label.abreviation,disabled:l.disabled,loading:l.loading,type:e(r).inputs.text,maxlength:45,language:e(u)},null,8,["modelValue","label","disabled","loading","type","language"]),s(m,{id:"name",class:"mb-3 col-12 col-xl-8",modelValue:e(v),"onUpdate:modelValue":n[4]||(n[4]=o=>T(v)?v.value=o:null),label:a._lang.label.name,disabled:l.disabled,loading:l.loading,type:e(r).inputs.text,maxlength:45,required:l.validateForm,showError:l.validateForm&&e(g).texts.$error,"error-message":a._errorMessageField(e(g).texts),language:e(u)},null,8,["modelValue","label","disabled","loading","type","required","showError","error-message","language"]),s(m,{id:"serviceCategoryId",class:"mb-3 col-12 col-lg-4",modelValue:e(d).serviceCategoryId,"onUpdate:modelValue":n[5]||(n[5]=o=>e(d).serviceCategoryId=o),label:a._lang.label.serviceCategoryId,disabled:l.disabled||e(t),loading:l.loading,type:e(r).inputs.multiselect,required:l.validateForm,placeholder:a._lang.common.selectOption,showError:l.validateForm&&e(g).serviceCategoryId.$error,"error-message":a._errorMessageField(e(g).serviceCategoryId),options:e(V).serviceCategoryList},null,8,["modelValue","label","disabled","loading","type","required","placeholder","showError","error-message","options"]),s(m,{id:"startDate",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(d).startDate,"onUpdate:modelValue":n[6]||(n[6]=o=>e(d).startDate=o),label:a._lang.label.startDate,disabled:l.disabled||e(t),loading:l.loading,type:e(r).inputs.datepicker,required:l.validateForm,placeholder:"dd/mm/aaaa",showError:l.validateForm&&e(g).startDate.$error,"error-message":a._errorMessageField(e(g).startDate)},null,8,["modelValue","label","disabled","loading","type","required","showError","error-message"]),s(m,{id:"endDate",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(d).endDate,"onUpdate:modelValue":n[7]||(n[7]=o=>e(d).endDate=o),label:a._lang.label.endDate,disabled:l.disabled||e(t),loading:l.loading,type:e(r).inputs.datepicker,placeholder:"dd/mm/aaaa",minDate:e(d).startDate},null,8,["modelValue","label","disabled","loading","type","minDate"]),s(m,{id:"organization",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(d).organization,"onUpdate:modelValue":n[8]||(n[8]=o=>e(d).organization=o),label:a._lang.label.parentOrganization,disabled:l.disabled||e(t)||F.isExternalEdit,loading:l.loading,type:e(r).inputs.multiselect,required:l.validateForm,placeholder:a._lang.common.selectOption,showError:l.validateForm&&e(g).organization.$error,"error-message":a._errorMessageField(e(g).organization),options:e(V).organizationList,valueProp:e(r).multiselectValueProp.value3},null,8,["modelValue","label","disabled","loading","type","required","placeholder","showError","error-message","options","valueProp"]),s(m,{id:"serviceActive",class:"mb-3 col-12 col-md-6 col-lg-2",modelValue:e(d).serviceActive,"onUpdate:modelValue":n[9]||(n[9]=o=>e(d).serviceActive=o),label:a._lang.label.public,disabled:l.disabled||e(t),loading:l.loading,type:e(r).inputs.checkbox},null,8,["modelValue","label","disabled","loading","type"]),s(m,{id:"internal",class:"mb-3 col-12 col-md-6 col-lg-3",modelValue:e(d).internal,"onUpdate:modelValue":n[10]||(n[10]=o=>e(d).internal=o),label:a._lang.label.internal,disabled:l.disabled||e(t),loading:l.loading,type:e(r).inputs.checkbox},null,8,["modelValue","label","disabled","loading","type"])]),_:1})]),_:1},8,["title","collapsed"])}}},j={__name:"base-information",props:{modelValue:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},validateForm:{type:Boolean,default:!1},isExternalEdit:{type:Boolean,default:!1},selectedLang:{type:[String,Number],required:!0},rules:{type:Object,default:{}}},emits:["update:modelValue"],setup(F,{emit:q}){const l=F,V=O();z();const p=h(l.rules,l.modelValue);let g=B(!0);const i=b({get(){return l.modelValue},set(t){q("update:modelValue",t)}}),d=b(()=>l.selectedLang),u=b(()=>l.selectedLang===r.language.en),v=b({get(){return c.getFieldByLangAndName(i.value,d.value,"name")},set(t){c.setFieldByLangAndName(i.value,d.value,"name",t)}}),y=b({get(){return c.getFieldByLangAndName(i.value,d.value,"abreviation")},set(t){c.setFieldByLangAndName(i.value,d.value,"abreviation",t)}});return(t,a)=>{const n=f("form-field"),m=f("row"),L=f("accordion");return I(),D(L,{id:"base-information-accordion",title:t._lang.common.baseInformation,collapsed:e(g),class:"mb-4"},{default:w(()=>[s(m,null,{default:w(()=>{var E;return[s(n,{id:"code",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(i).code,"onUpdate:modelValue":a[0]||(a[0]=o=>e(i).code=o),label:t._lang.label.code,disabled:!0,loading:l.loading,type:e(r).inputs.text,maxlength:45},null,8,["modelValue","label","loading","type"]),s(n,{id:"recordStateTypeId",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:t._lang.enums.recordStateType[e(i).recordStateTypeId],"onUpdate:modelValue":a[1]||(a[1]=o=>t._lang.enums.recordStateType[e(i).recordStateTypeId]=o),label:t._lang.label.state,disabled:!0,loading:l.loading,type:e(r).inputs.text},null,8,["modelValue","label","loading","type"]),l.isExternalEdit?(I(),D(n,{key:1,id:"organization",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(i).organization,"onUpdate:modelValue":a[3]||(a[3]=o=>e(i).organization=o),label:t._lang.label.organizationHost,disabled:!0,loading:l.loading,type:e(r).inputs.text,required:l.validateForm,placeholder:t._lang.common.selectOption},null,8,["modelValue","label","loading","type","required","placeholder"])):(I(),D(n,{key:0,id:"organization",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(i).organization,"onUpdate:modelValue":a[2]||(a[2]=o=>e(i).organization=o),label:t._lang.label.organizationHost,disabled:l.disabled||e(u),loading:l.loading,type:e(r).inputs.multiselect,required:l.validateForm,placeholder:t._lang.common.selectOption,showError:l.validateForm&&e(p).organization.$error,"error-message":t._errorMessageField(e(p).organization),options:e(V).organizationList,valueProp:e(r).multiselectValueProp.value3},null,8,["modelValue","label","disabled","loading","type","required","placeholder","showError","error-message","options","valueProp"])),s(n,{id:"channelTypeId",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(i).channel.channelTypeId,"onUpdate:modelValue":a[4]||(a[4]=o=>e(i).channel.channelTypeId=o),label:t._lang.label.channelTypeId,disabled:l.disabled||e(u),loading:l.loading,type:e(r).inputs.multiselect,required:l.validateForm,placeholder:t._lang.common.selectOption,showError:l.validateForm&&e(p).channel.channelTypeId.$error,"error-message":t._errorMessageField((E=e(p).channel)==null?void 0:E.channelTypeId),options:e(V).channelTypeList},null,8,["modelValue","label","disabled","loading","type","required","placeholder","showError","error-message","options"]),s(n,{id:"name",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(v),"onUpdate:modelValue":a[5]||(a[5]=o=>T(v)?v.value=o:null),label:t._lang.label.channelName,disabled:l.disabled,loading:l.loading,type:e(r).inputs.text,required:l.validateForm,maxlength:255,showError:l.validateForm&&e(p).texts.$error,"error-message":t._errorMessageField(e(p).texts),language:e(d)},null,8,["modelValue","label","disabled","loading","type","required","showError","error-message","language"]),s(n,{id:"abreviation",class:"mb-3 col-12 col-lg-4",modelValue:e(y),"onUpdate:modelValue":a[6]||(a[6]=o=>T(y)?y.value=o:null),label:t._lang.label.abreviation,disabled:l.disabled,loading:l.loading,type:e(r).inputs.text,maxlength:45,language:e(d)},null,8,["modelValue","label","disabled","loading","type","language"]),s(n,{id:"startDate",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(i).startDate,"onUpdate:modelValue":a[7]||(a[7]=o=>e(i).startDate=o),label:t._lang.label.startDate,disabled:l.disabled||e(u),loading:l.loading,type:e(r).inputs.datepicker,required:l.validateForm,placeholder:"dd/mm/aaaa",showError:l.validateForm&&e(p).startDate.$error,"error-message":t._errorMessageField(e(p).startDate)},null,8,["modelValue","label","disabled","loading","type","required","showError","error-message"]),s(n,{id:"endDate",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(i).endDate,"onUpdate:modelValue":a[8]||(a[8]=o=>e(i).endDate=o),label:t._lang.label.endDate,disabled:l.disabled||e(u),loading:l.loading,type:e(r).inputs.datepicker,placeholder:"dd/mm/aaaa",minDate:e(i).startDate},null,8,["modelValue","label","disabled","loading","type","minDate"]),s(n,{id:"public",class:"mb-3 col-12 col-lg-4",modelValue:e(i).pointOfCareActive,"onUpdate:modelValue":a[9]||(a[9]=o=>e(i).pointOfCareActive=o),label:t._lang.label.public,disabled:l.disabled||e(u),loading:l.loading,type:e(r).inputs.checkbox},null,8,["modelValue","label","disabled","loading","type"])]}),_:1})]),_:1},8,["title","collapsed"])}}};export{j as _,P as a};
