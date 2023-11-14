import{d as _,i as k,o as A,k as p,r as N,v as n,w as j,l as f,c as S,e as E,q as s,s as e,L as T,n as F,F as $,m as h}from"./index-98e98595.js";import{b as v}from"./helpers-8c1ef5f8.js";import{_ as C}from"./refusal-d12b278e.js";import{_ as M}from"./address-7ba61f37.js";const I=_("LocationStore",{state:()=>({organizationList:[],stateTypeList:[],divisionList:[],refusalTypeList:[],progress:0,formToCompare:null}),getters:{getAll:d=>({organizationList:d.organizationList,stateTypeList:d.stateTypeList,divisionList:d.divisionList,refusalTypeList:d.refusalTypeList})},actions:{setLists(d){this.organizationList=d.organizationList,this.stateTypeList=d.stateTypeList,this.divisionList=d.divisionList,this.refusalTypeList=d.refusalTypeList},setProgress(d){this.progress=d},setFormToCompare(d){this.formToCompare=d}}}),J={__name:"base-information",props:{modelValue:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},validateForm:{type:Boolean,default:!1},rules:{type:Object,default:{}},selectedLang:{type:[String,Number],required:!0},vuelidate:{type:Object,default:null}},emits:["update:modelValue"],setup(d,{emit:V}){const l=d,b=k(),m=I();A(()=>{});const a=p({get(){return l.modelValue},set(o){V("update:modelValue",o)}}),r=p(()=>l.selectedLang),g=p({get(){return v.getFieldByLangAndName(a.value,r.value,"abreviation")},set(o){v.setFieldByLangAndName(a.value,r.value,"abreviation",o)}});p({get(){return v.getFieldByLangAndName(a.value,r.value,"tutelage")},set(o){v.setFieldByLangAndName(a.value,r.value,"tutelage",o)}});let L=N([{label:b.enums.locationType[n.locationType.acquired],value:n.locationType.acquired},{label:b.enums.locationType[n.locationType.leased],value:n.locationType.leased}]);const c=p(()=>r.value===n.language.en);return j(()=>a.value.startDate,(o,t)=>{new Date(o)>new Date(a.value.endDate)&&(a.value.endDate=null)}),(o,t)=>{const u=f("form-field"),U=f("row"),O=f("accordion");return S(),E($,null,[s(C,{modelValue:e(a),"onUpdate:modelValue":t[0]||(t[0]=y=>T(a)?a.value=y:null),store:e(m)},null,8,["modelValue","store"]),s(O,{id:o._uuid,title:o._lang.common.baseInformation,collapsed:!0,class:"mb-4"},{default:F(()=>[s(U,null,{default:F(()=>{var y,D,q,w,z,B;return[s(u,{id:"code",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(a).code,"onUpdate:modelValue":t[1]||(t[1]=i=>e(a).code=i),label:o._lang.label.code,loading:l.loading,type:e(n).inputs.text,required:!0,disabled:!0,maxlength:45},null,8,["modelValue","label","loading","type"]),s(u,{id:"recordStateTypeId",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:o._lang.enums.recordStateType[e(a).recordStateTypeId],"onUpdate:modelValue":t[2]||(t[2]=i=>o._lang.enums.recordStateType[e(a).recordStateTypeId]=i),label:o._lang.label.state,disabled:!0,loading:l.loading,type:e(n).inputs.text},null,8,["modelValue","label","loading","type"]),s(u,{id:"organization",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(a).organization,"onUpdate:modelValue":t[3]||(t[3]=i=>e(a).organization=i),label:o._lang.label.parentOrganization,type:e(n).inputs.parentOrganization,disabled:l.disabled||e(c),placeholder:o._lang.common.add,loading:l.loading,options:e(m).organizationList,required:l.validateForm,showError:l.validateForm&&((y=l.vuelidate)==null?void 0:y.organization.$error),"error-message":o._errorMessageField((D=l.vuelidate)==null?void 0:D.organization),valueProp:e(n).multiselectValueProp.value3},null,8,["modelValue","label","type","disabled","placeholder","loading","options","required","showError","error-message","valueProp"]),s(u,{id:"abreviation",class:"mb-3 col-12 col-lg-4",modelValue:e(g),"onUpdate:modelValue":t[4]||(t[4]=i=>T(g)?g.value=i:null),label:o._lang.label.abreviation,disabled:l.disabled,loading:l.loading,type:e(n).inputs.text,maxlength:45,language:e(r)},null,8,["modelValue","label","disabled","loading","type","language"]),s(u,{id:"startDate",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(a).startDate,"onUpdate:modelValue":t[5]||(t[5]=i=>e(a).startDate=i),label:o._lang.label.startDate,disabled:l.disabled||e(c),loading:l.loading,type:e(n).inputs.datepicker,placeholder:o._lang.common.add,required:l.validateForm,showError:l.validateForm&&((q=l.vuelidate)==null?void 0:q.startDate.$error),"error-message":o._errorMessageField((w=l.vuelidate)==null?void 0:w.startDate)},null,8,["modelValue","label","disabled","loading","type","placeholder","required","showError","error-message"]),s(u,{id:"endDate",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(a).endDate,"onUpdate:modelValue":t[6]||(t[6]=i=>e(a).endDate=i),label:o._lang.label.endDate,disabled:l.disabled||e(c),loading:l.loading,type:e(n).inputs.datepicker,placeholder:o._lang.common.add},null,8,["modelValue","label","disabled","loading","type","placeholder"]),s(u,{id:"locationTypeId",class:"mb-3 col-12 col-lg-4",modelValue:e(a).locationTypeId,"onUpdate:modelValue":t[7]||(t[7]=i=>e(a).locationTypeId=i),label:o._lang.label.locationTypeId,type:e(n).inputs.radio,disabled:l.disabled||e(c),loading:l.loading,options:e(L),required:l.validateForm,"show-error":l.validateForm&&((z=l.vuelidate)==null?void 0:z.locationTypeId.$error),"error-message":o._errorMessageField((B=l.vuelidate)==null?void 0:B.locationTypeId)},null,8,["modelValue","label","type","disabled","loading","options","required","show-error","error-message"]),s(u,{id:"locationActive",class:"mb-3 col-12 col-lg-4",modelValue:e(a).locationActive,"onUpdate:modelValue":t[8]||(t[8]=i=>e(a).locationActive=i),label:o._lang.label.public,disabled:l.disabled||e(c),loading:l.loading,type:e(n).inputs.checkbox},null,8,["modelValue","label","disabled","loading","type"])]}),_:1})]),_:1},8,["id","title"])],64)}}},K={__name:"address",props:{modelValue:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},validateForm:{type:Boolean,default:!1},rules:{type:Object,default:{}},vuelidate:{type:Object,default:null}},emits:["update:modelValue"],setup(d,{emit:V}){const l=d,b=I(),m=p({get(){return l.modelValue},set(a){V("update:modelValue",a)}});return(a,r)=>{const g=f("accordion");return S(),h(g,{id:"address",title:a._lang.common.address,collapsed:!1,class:"mb-4"},{default:F(()=>[s(M,{modelValue:e(m),"onUpdate:modelValue":r[0]||(r[0]=L=>T(m)?m.value=L:null),disabled:l.disabled,loading:d.loading,rules:l.rules,validateForm:l.validateForm,store:e(b),vuelidate:l.vuelidate},null,8,["modelValue","disabled","loading","rules","validateForm","store","vuelidate"])]),_:1},8,["title"])}}};export{J as _,K as a,I as u};
