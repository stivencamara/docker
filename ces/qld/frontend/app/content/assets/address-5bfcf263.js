import{B as S,q as U,b as _,E as p,i as A,v as n,N,r as f,o as B,e as O,a as r,m as e,z as T,w as F,F as k,c as E}from"./index-a3ba1ed7.js";import{b as v}from"./helpers-4d6c1969.js";import{_ as j}from"./refusal-478c260d.js";import{_ as $}from"./address-238902c8.js";const w=S("LocationStore",{state:()=>({organizationList:[],stateTypeList:[],divisionList:[],refusalTypeList:[],progress:0,formToCompare:null}),getters:{getAll:d=>({organizationList:d.organizationList,stateTypeList:d.stateTypeList,divisionList:d.divisionList,refusalTypeList:d.refusalTypeList})},actions:{setLists(d){this.organizationList=d.organizationList,this.stateTypeList=d.stateTypeList,this.divisionList=d.divisionList,this.refusalTypeList=d.refusalTypeList},setProgress(d){this.progress=d},setFormToCompare(d){this.formToCompare=d}}}),H={__name:"base-information",props:{modelValue:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},validateForm:{type:Boolean,default:!1},rules:{type:Object,default:{}},selectedLang:{type:[String,Number],required:!0},vuelidate:{type:Object,required:!0}},emits:["update:modelValue"],setup(d,{emit:V}){const l=d,b=U(),m=w();_(()=>{});const a=p({get(){return l.modelValue},set(o){V("update:modelValue",o)}}),s=p(()=>l.selectedLang),g=p({get(){return v.getFieldByLangAndName(a.value,s.value,"abreviation")},set(o){v.setFieldByLangAndName(a.value,s.value,"abreviation",o)}});p({get(){return v.getFieldByLangAndName(a.value,s.value,"tutelage")},set(o){v.setFieldByLangAndName(a.value,s.value,"tutelage",o)}});let L=A([{label:b.enums.locationType[n.locationType.acquired],value:n.locationType.acquired},{label:b.enums.locationType[n.locationType.leased],value:n.locationType.leased}]);const c=p(()=>s.value===n.language.en);return N(()=>a.value.startDate,(o,t)=>{new Date(o)>new Date(a.value.endDate)&&(a.value.endDate=null)}),(o,t)=>{const u=f("form-field"),z=f("row"),I=f("accordion");return B(),O(k,null,[r(j,{modelValue:e(a),"onUpdate:modelValue":t[0]||(t[0]=y=>T(a)?a.value=y:null),store:e(m)},null,8,["modelValue","store"]),r(I,{id:o._uuid,title:o._lang.common.baseInformation,collapsed:!0,class:"mb-4"},{default:F(()=>[r(z,null,{default:F(()=>{var y,q,D;return[r(u,{id:"code",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(a).code,"onUpdate:modelValue":t[1]||(t[1]=i=>e(a).code=i),label:o._lang.label.code,loading:l.loading,type:e(n).inputs.text,required:!0,disabled:!0,maxlength:45},null,8,["modelValue","label","loading","type"]),r(u,{id:"recordStateTypeId",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:o._lang.enums.recordStateType[e(a).recordStateTypeId],"onUpdate:modelValue":t[2]||(t[2]=i=>o._lang.enums.recordStateType[e(a).recordStateTypeId]=i),label:o._lang.label.state,disabled:!0,loading:l.loading,type:e(n).inputs.text},null,8,["modelValue","label","loading","type"]),r(u,{id:"abreviation",class:"mb-3 col-12 col-lg-4",modelValue:e(g),"onUpdate:modelValue":t[3]||(t[3]=i=>T(g)?g.value=i:null),label:o._lang.label.abreviation,disabled:l.disabled,loading:l.loading,type:e(n).inputs.text,maxlength:45,language:e(s)},null,8,["modelValue","label","disabled","loading","type","language"]),r(u,{id:"organizationId",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(a).organization,"onUpdate:modelValue":t[4]||(t[4]=i=>e(a).organization=i),label:o._lang.label.parentOrganization,type:e(n).inputs.multiselect,disabled:l.disabled||e(c),placeholder:o._lang.common.add,loading:l.loading,options:e(m).organizationList,required:l.validateForm,showError:l.validateForm&&l.vuelidate.organization.$error,"error-message":o._errorMessageField((y=l.vuelidate)==null?void 0:y.organization),valueProp:e(n).multiselectValueProp.value3},null,8,["modelValue","label","type","disabled","placeholder","loading","options","required","showError","error-message","valueProp"]),r(u,{id:"startDate",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(a).startDate,"onUpdate:modelValue":t[5]||(t[5]=i=>e(a).startDate=i),label:o._lang.label.startDate,disabled:l.disabled||e(c),loading:l.loading,type:e(n).inputs.datepicker,placeholder:o._lang.common.add,required:l.validateForm,showError:l.validateForm&&l.vuelidate.startDate.$error,"error-message":o._errorMessageField((q=l.vuelidate)==null?void 0:q.startDate)},null,8,["modelValue","label","disabled","loading","type","placeholder","required","showError","error-message"]),r(u,{id:"endDate",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(a).endDate,"onUpdate:modelValue":t[6]||(t[6]=i=>e(a).endDate=i),label:o._lang.label.endDate,disabled:l.disabled||e(c),loading:l.loading,type:e(n).inputs.datepicker,placeholder:o._lang.common.add},null,8,["modelValue","label","disabled","loading","type","placeholder"]),r(u,{id:"locationTypeId",class:"mb-3 col-12 col-lg-4",modelValue:e(a).locationTypeId,"onUpdate:modelValue":t[7]||(t[7]=i=>e(a).locationTypeId=i),label:o._lang.label.locationTypeId,type:e(n).inputs.radio,disabled:l.disabled||e(c),loading:l.loading,options:e(L),required:l.validateForm,"show-error":l.validateForm&&l.vuelidate.locationTypeId.$error,"error-message":o._errorMessageField((D=l.vuelidate)==null?void 0:D.locationTypeId)},null,8,["modelValue","label","type","disabled","loading","options","required","show-error","error-message"]),r(u,{id:"locationActive",class:"mb-3 col-12 col-lg-4",modelValue:e(a).locationActive,"onUpdate:modelValue":t[8]||(t[8]=i=>e(a).locationActive=i),label:o._lang.label.public,disabled:l.disabled||e(c),loading:l.loading,type:e(n).inputs.checkbox},null,8,["modelValue","label","disabled","loading","type"])]}),_:1})]),_:1},8,["id","title"])],64)}}},R={__name:"address",props:{modelValue:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},validateForm:{type:Boolean,default:!1},rules:{type:Object,default:{}},vuelidate:{type:Object,required:!0}},emits:["update:modelValue"],setup(d,{emit:V}){const l=d,b=w(),m=p({get(){return l.modelValue},set(a){V("update:modelValue",a)}});return(a,s)=>{const g=f("accordion");return B(),E(g,{id:"address",title:a._lang.common.address,collapsed:!1,class:"mb-4"},{default:F(()=>[r($,{modelValue:e(m),"onUpdate:modelValue":s[0]||(s[0]=L=>T(m)?m.value=L:null),disabled:l.disabled,loading:d.loading,rules:l.rules,validateForm:l.validateForm,store:e(b),vuelidate:l.vuelidate},null,8,["modelValue","disabled","loading","rules","validateForm","store","vuelidate"])]),_:1},8,["title"])}}};export{H as _,R as a,w as u};
