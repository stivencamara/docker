import{i as $,r as P,k as m,w as M,v as d,o as j,l as f,c as z,m as U,n as O,q as u,s as e,J as B}from"./index-82cc5ade.js";import{u as H}from"./service-fca38af5.js";import{b}from"./helpers-99584788.js";import{u as x}from"./point-of-care-4e1548e1.js";const Q={__name:"base-information",props:{vuelidate:{type:Object,default:null},modelValue:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},validateForm:{type:Boolean,default:!1},selectedLang:{type:[String,Number],required:!0},rules:{type:Object,default:{}},isExternalEdit:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(F,{emit:A}){const a=F,v=H(),E=$();let r=P(!0);const l=m({get(){return a.modelValue},set(o){A("update:modelValue",o)}}),c=m(()=>a.selectedLang),y=m({get(){return b.getFieldByLangAndName(l.value,c.value,"name")},set(o){b.setFieldByLangAndName(l.value,c.value,"name",o)}}),h=m({get(){return b.getFieldByLangAndName(l.value,c.value,"abreviation")},set(o){b.setFieldByLangAndName(l.value,c.value,"abreviation",o)}});E.label.lifeEventId,E.label.businessEventId,M(()=>l.value.eventTypeId,()=>{l.value.eventTypeId===d.eventType.life?l.value.businessEventId=null:l.value.lifeEventId=null});const t=m(()=>c.value===d.language.en);M(()=>l.value.startDate,(o,n)=>{new Date(o)>new Date(l.value.endDate)&&(l.value.endDate=null)}),j(()=>{});const s=m(()=>{if(l.value.serviceCategoryId==null)return l.value.serviceSubCategoryId=null,[];var o=v.serviceSubCategoryList.filter(n=>l.value.serviceCategoryId==n.state);return l.value.serviceSubCategoryId!=null&&o.length>0&&!o.some(n=>n.value==l.value.serviceSubCategoryId)&&(l.value.serviceSubCategoryId=null),o});return(o,n)=>{const p=f("form-field"),C=f("row"),q=f("accordion");return z(),U(q,{id:"base-information",title:o._lang.common.baseInformation,collapsed:e(r),class:"mb-4"},{default:O(()=>[u(C,null,{default:O(()=>{var L,V,D,I,T,S,w,g,k,N;return[u(p,{id:"code",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(l).code,"onUpdate:modelValue":n[0]||(n[0]=i=>e(l).code=i),label:o._lang.label.code,disabled:!0,loading:a.loading,type:e(d).inputs.text,maxlength:45},null,8,["modelValue","label","loading","type"]),u(p,{id:"recordStateTypeId",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:o._lang.enums.recordStateType[e(l).recordStateTypeId],"onUpdate:modelValue":n[1]||(n[1]=i=>o._lang.enums.recordStateType[e(l).recordStateTypeId]=i),label:o._lang.label.state,disabled:!0,loading:a.loading,type:e(d).inputs.text},null,8,["modelValue","label","loading","type"]),u(p,{id:"organization",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(l).organization,"onUpdate:modelValue":n[2]||(n[2]=i=>e(l).organization=i),label:o._lang.label.parentOrganization,disabled:a.disabled||e(t)||F.isExternalEdit,loading:a.loading,type:e(d).inputs.parentOrganization,required:a.validateForm,placeholder:o._lang.common.selectOption,showError:a.validateForm&&((L=a.vuelidate)==null?void 0:L.organization.$error),"error-message":o._errorMessageField((V=a.vuelidate)==null?void 0:V.organization),options:e(v).organizationList,valueProp:e(d).multiselectValueProp.value3,changeLogField:"organization",changeLog:e(l).changeLog,showDiference:e(l).recordStateTypeId==e(d).recordStateType.approval},null,8,["modelValue","label","disabled","loading","type","required","placeholder","showError","error-message","options","valueProp","changeLog","showDiference"]),u(p,{id:"abreviation",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(h),"onUpdate:modelValue":n[3]||(n[3]=i=>B(h)?h.value=i:null),label:o._lang.label.abreviation,disabled:a.disabled,loading:a.loading,type:e(d).inputs.text,maxlength:45,language:e(c),changeLogField:"texts[0].abreviation",changeLog:e(l).changeLog,showDiference:e(l).recordStateTypeId==e(d).recordStateType.approval},null,8,["modelValue","label","disabled","loading","type","language","changeLog","showDiference"]),u(p,{id:"name",class:"mb-3 col-12 col-xl-8",modelValue:e(y),"onUpdate:modelValue":n[4]||(n[4]=i=>B(y)?y.value=i:null),label:o._lang.label.name,disabled:a.disabled,loading:a.loading,type:e(d).inputs.text,maxlength:45,required:a.validateForm,showError:a.validateForm&&((D=a.vuelidate)==null?void 0:D.texts.$error),"error-message":o._errorMessageField((I=a.vuelidate)==null?void 0:I.texts),language:e(c),changeLogField:"texts[0].name",changeLog:e(l).changeLog,showDiference:e(l).recordStateTypeId==e(d).recordStateType.approval},null,8,["modelValue","label","disabled","loading","type","required","showError","error-message","language","changeLog","showDiference"]),u(p,{id:"serviceTypeId",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(l).serviceTypeId,"onUpdate:modelValue":n[5]||(n[5]=i=>e(l).serviceTypeId=i),label:o._lang.label.serviceTypeId,disabled:a.disabled||e(t),loading:a.loading,type:e(d).inputs.multiselect,required:a.validateForm,placeholder:o._lang.common.selectOption,showError:a.validateForm&&((T=a.vuelidate)==null?void 0:T.serviceTypeId.$error),"error-message":o._errorMessageField((S=a.vuelidate)==null?void 0:S.serviceTypeId),options:e(v).serviceTypeList,changeLogField:"serviceTypeId",changeLog:e(l).changeLog,showDiference:e(l).recordStateTypeId==e(d).recordStateType.approval},null,8,["modelValue","label","disabled","loading","type","required","placeholder","showError","error-message","options","changeLog","showDiference"]),u(p,{id:"serviceCategoryId",class:"mb-3 col-12 col-lg-4",modelValue:e(l).serviceCategoryId,"onUpdate:modelValue":n[6]||(n[6]=i=>e(l).serviceCategoryId=i),label:o._lang.label.serviceCategoryId,disabled:a.disabled||e(t),loading:a.loading,type:e(d).inputs.multiselect,required:a.validateForm,placeholder:o._lang.common.selectOption,showError:a.validateForm&&((w=a.vuelidate)==null?void 0:w.serviceCategoryId.$error),"error-message":o._errorMessageField((g=a.vuelidate)==null?void 0:g.serviceCategoryId),options:e(v).serviceCategoryList,changeLogField:"serviceCategoryId",changeLog:e(l).changeLog,showDiference:e(l).recordStateTypeId==e(d).recordStateType.approval},null,8,["modelValue","label","disabled","loading","type","required","placeholder","showError","error-message","options","changeLog","showDiference"]),u(p,{id:"serviceSubCategoryId",class:"mb-3 col-12 col-lg-4",modelValue:e(l).serviceSubCategoryId,"onUpdate:modelValue":n[7]||(n[7]=i=>e(l).serviceSubCategoryId=i),label:o._lang.label.serviceSubCategoryId,disabled:a.disabled||e(t)||e(l).serviceCategoryId==null,loading:a.loading,type:e(d).inputs.multiselect,required:!1,placeholder:o._lang.common.selectOption,options:e(s),changeLogField:"serviceSubCategoryId",changeLog:e(l).changeLog,showDiference:e(l).recordStateTypeId==e(d).recordStateType.approval},null,8,["modelValue","label","disabled","loading","type","placeholder","options","changeLog","showDiference"]),u(p,{id:"startDate",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(l).startDate,"onUpdate:modelValue":n[8]||(n[8]=i=>e(l).startDate=i),label:o._lang.label.startDate,disabled:a.disabled||e(t),loading:a.loading,type:e(d).inputs.datepicker,required:a.validateForm,placeholder:"dd/mm/aaaa",showError:a.validateForm&&((k=a.vuelidate)==null?void 0:k.startDate.$error),"error-message":o._errorMessageField((N=a.vuelidate)==null?void 0:N.startDate),changeLogField:"startDate",changeLog:e(l).changeLog,showDiference:e(l).recordStateTypeId==e(d).recordStateType.approval},null,8,["modelValue","label","disabled","loading","type","required","showError","error-message","changeLog","showDiference"]),u(p,{id:"endDate",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(l).endDate,"onUpdate:modelValue":n[9]||(n[9]=i=>e(l).endDate=i),label:o._lang.label.endDate,disabled:a.disabled||e(t),loading:a.loading,type:e(d).inputs.datepicker,placeholder:"dd/mm/aaaa",minDate:e(l).startDate,changeLogField:"endDate",changeLog:e(l).changeLog,showDiference:e(l).recordStateTypeId==e(d).recordStateType.approval},null,8,["modelValue","label","disabled","loading","type","minDate","changeLog","showDiference"]),u(p,{id:"serviceActive",class:"mb-3 col-12 col-md-6 col-lg-2",modelValue:e(l).serviceActive,"onUpdate:modelValue":n[10]||(n[10]=i=>e(l).serviceActive=i),label:o._lang.label.public,disabled:a.disabled||e(t),loading:a.loading,type:e(d).inputs.checkbox,changeLogField:"serviceActive",changeLog:e(l).changeLog,showDiference:e(l).recordStateTypeId==e(d).recordStateType.approval},null,8,["modelValue","label","disabled","loading","type","changeLog","showDiference"]),u(p,{id:"internal",class:"mb-3 col-12 col-md-6 col-lg-3",modelValue:e(l).internal,"onUpdate:modelValue":n[11]||(n[11]=i=>e(l).internal=i),label:o._lang.label.internal,disabled:a.disabled||e(t),loading:a.loading,type:e(d).inputs.checkbox,changeLogField:"internal",changeLog:e(l).changeLog,showDiference:e(l).recordStateTypeId==e(d).recordStateType.approval},null,8,["modelValue","label","disabled","loading","type","changeLog","showDiference"])]}),_:1})]),_:1},8,["title","collapsed"])}}},W={__name:"base-information",props:{modelValue:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},validateForm:{type:Boolean,default:!1},isExternalEdit:{type:Boolean,default:!1},selectedLang:{type:[String,Number],required:!0},rules:{type:Object,default:{}},vuelidate:{type:Object,default:null}},emits:["update:modelValue"],setup(F,{emit:A}){const a=F,v=x();$();let E=P(!0);const r=m({get(){return a.modelValue},set(t){A("update:modelValue",t)}}),l=m(()=>a.selectedLang),c=m(()=>a.selectedLang===d.language.en),y=m({get(){return b.getFieldByLangAndName(r.value,l.value,"name")},set(t){b.setFieldByLangAndName(r.value,l.value,"name",t)}}),h=m({get(){return b.getFieldByLangAndName(r.value,l.value,"abreviation")},set(t){b.setFieldByLangAndName(r.value,l.value,"abreviation",t)}});return(t,s)=>{const o=f("form-field"),n=f("row"),p=f("accordion");return z(),U(p,{id:"base-information-accordion",title:t._lang.common.baseInformation,collapsed:e(E),class:"mb-4"},{default:O(()=>[u(n,null,{default:O(()=>{var C,q,L,V,D,I,T,S,w;return[u(o,{id:"code",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(r).code,"onUpdate:modelValue":s[0]||(s[0]=g=>e(r).code=g),label:t._lang.label.code,disabled:!0,loading:a.loading,type:e(d).inputs.text,maxlength:45},null,8,["modelValue","label","loading","type"]),u(o,{id:"recordStateTypeId",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:t._lang.enums.recordStateType[e(r).recordStateTypeId],"onUpdate:modelValue":s[1]||(s[1]=g=>t._lang.enums.recordStateType[e(r).recordStateTypeId]=g),label:t._lang.label.state,disabled:!0,loading:a.loading,type:e(d).inputs.text},null,8,["modelValue","label","loading","type"]),a.isExternalEdit?(z(),U(o,{key:1,id:"organization",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(r).organization,"onUpdate:modelValue":s[3]||(s[3]=g=>e(r).organization=g),label:t._lang.label.organizationHost,disabled:!0,loading:a.loading,type:e(d).inputs.text,required:a.validateForm,placeholder:t._lang.common.selectOption,changeLogField:"organization",changeLog:e(r).changeLog,showDiference:e(r).recordStateTypeId==e(d).recordStateType.approval},null,8,["modelValue","label","loading","type","required","placeholder","changeLog","showDiference"])):(z(),U(o,{key:0,id:"organization",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(r).organization,"onUpdate:modelValue":s[2]||(s[2]=g=>e(r).organization=g),label:t._lang.label.organizationHost,disabled:a.disabled||e(c),loading:a.loading,type:e(d).inputs.parentOrganization,required:a.validateForm,placeholder:t._lang.common.selectOption,showError:a.validateForm&&((C=a.vuelidate)==null?void 0:C.organization.$error),"error-message":t._errorMessageField((q=a.vuelidate)==null?void 0:q.organization),options:e(v).organizationList,valueProp:e(d).multiselectValueProp.value3},null,8,["modelValue","label","disabled","loading","type","required","placeholder","showError","error-message","options","valueProp"])),u(o,{id:"abreviation",class:"mb-3 col-12 col-lg-4",modelValue:e(h),"onUpdate:modelValue":s[4]||(s[4]=g=>B(h)?h.value=g:null),label:t._lang.label.abreviation,disabled:a.disabled,loading:a.loading,type:e(d).inputs.text,maxlength:45,language:e(l),changeLogField:"texts[0].abreviation",changeLog:e(r).changeLog,showDiference:e(r).recordStateTypeId==e(d).recordStateType.approval},null,8,["modelValue","label","disabled","loading","type","language","changeLog","showDiference"]),u(o,{id:"name",class:"mb-3 col-12 col-md-8",modelValue:e(y),"onUpdate:modelValue":s[5]||(s[5]=g=>B(y)?y.value=g:null),label:t._lang.label.name,disabled:a.disabled,loading:a.loading,type:e(d).inputs.text,required:a.validateForm,maxlength:255,showError:a.validateForm&&((L=a.vuelidate)==null?void 0:L.texts.$error),"error-message":t._errorMessageField((V=a.vuelidate)==null?void 0:V.texts),language:e(l),changeLogField:"texts[0].name",changeLog:e(r).changeLog,showDiference:e(r).recordStateTypeId==e(d).recordStateType.approval},null,8,["modelValue","label","disabled","loading","type","required","showError","error-message","language","changeLog","showDiference"]),u(o,{id:"channelTypeId",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(r).channel.channelTypeId,"onUpdate:modelValue":s[6]||(s[6]=g=>e(r).channel.channelTypeId=g),label:t._lang.label.channelTypeId,disabled:a.disabled||e(c),loading:a.loading,type:e(d).inputs.multiselect,required:a.validateForm,placeholder:t._lang.common.selectOption,showError:a.validateForm&&((D=a.vuelidate)==null?void 0:D.channel.channelTypeId.$error),"error-message":t._errorMessageField((T=(I=a.vuelidate)==null?void 0:I.channel)==null?void 0:T.channelTypeId),options:e(v).channelTypeList,changeLogField:"channelTypeId",changeLog:e(r).changeLog,showDiference:e(r).recordStateTypeId==e(d).recordStateType.approval},null,8,["modelValue","label","disabled","loading","type","required","placeholder","showError","error-message","options","changeLog","showDiference"]),u(o,{id:"startDate",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(r).startDate,"onUpdate:modelValue":s[7]||(s[7]=g=>e(r).startDate=g),label:t._lang.label.startDate,disabled:a.disabled||e(c),loading:a.loading,type:e(d).inputs.datepicker,required:a.validateForm,placeholder:"dd/mm/aaaa",showError:a.validateForm&&((S=a.vuelidate)==null?void 0:S.startDate.$error),"error-message":t._errorMessageField((w=a.vuelidate)==null?void 0:w.startDate),changeLogField:"startDate",changeLog:e(r).changeLog,showDiference:e(r).recordStateTypeId==e(d).recordStateType.approval},null,8,["modelValue","label","disabled","loading","type","required","showError","error-message","changeLog","showDiference"]),u(o,{id:"endDate",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(r).endDate,"onUpdate:modelValue":s[8]||(s[8]=g=>e(r).endDate=g),label:t._lang.label.endDate,disabled:a.disabled||e(c),loading:a.loading,type:e(d).inputs.datepicker,placeholder:"dd/mm/aaaa",minDate:e(r).startDate,changeLogField:"endDate",changeLog:e(r).changeLog,showDiference:e(r).recordStateTypeId==e(d).recordStateType.approval},null,8,["modelValue","label","disabled","loading","type","minDate","changeLog","showDiference"]),u(o,{id:"public",class:"mb-3 col-12 col-lg-4",modelValue:e(r).pointOfCareActive,"onUpdate:modelValue":s[9]||(s[9]=g=>e(r).pointOfCareActive=g),label:t._lang.label.public,disabled:a.disabled||e(c),loading:a.loading,type:e(d).inputs.checkbox,changeLogField:"public",changeLog:e(r).changeLog,showDiference:e(r).recordStateTypeId==e(d).recordStateType.approval},null,8,["modelValue","label","disabled","loading","type","changeLog","showDiference"])]}),_:1})]),_:1},8,["title","collapsed"])}}};export{W as _,Q as a};
