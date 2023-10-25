import{i as I,h as w,k as f,r as k,L as E,u as T,l as u,c as S,m as v,n as b,q as n,s as t,v as c,M as P,B,J as h,A as U}from"./index-80ba5b4e.js";import{b as V}from"./helpers-4a70dd55.js";const x={__name:"duplicated-names",props:{dataSource:{Object,required:!0},name:{String,required:!0}},emits:["update:dataSource"],setup(r,{emit:d}){const m=r,l=I(),e=w(),o=f({get(){return m.dataSource},set(a){d("update:dataSource",a)}});let s=k([]),i=k([]);const p=f(()=>l.backoffice.tasks.messages.possibleDuplicateNames.replace("{0}",`<strong class="cb">${m.name}</strong>`));E(()=>{s.value=T.convertEnumToArray(l.enums.recordStateType),i.value=T.concatItemsBadge(s.value,V.recordStateTypeBadgeOptions)});const y=a=>{T.sortArrayOffline(a,o.value.items)},_=a=>{},A=async()=>{e.emit(B.emitter.DUPLICATE_NAMES,!0)},L=async()=>{e.emit(B.emitter.DUPLICATE_NAMES,!1)};return(a,j)=>{const N=u("alert"),g=u("ccolumn"),O=u("ctable"),C=u("cbutton"),q=u("modal");return S(),v(q,{id:"duplicated-names",title:a._lang.backoffice.tasks.possibleDuplicateNames,size:t(c).modalSize.large},{alert:b(()=>[n(N,{type:t(c).alertType.warning,text:t(p)},null,8,["type","text"])]),body:b(()=>[n(O,{data:t(o),checkbox:!1,defaultSort:"name",onSort:y,onChangePage:_,"show-pagination":!1},{columns:b(()=>[n(g,{name:a._lang.label.code,field:"code",sortable:!0},null,8,["name"]),n(g,{name:a._lang.label.name,field:"name",sortable:!0},null,8,["name"]),n(g,{name:a._lang.label.duplicateProbability,field:"duplicateProbability",sortable:!0,sufix:"%"},null,8,["name"]),n(g,{name:a._lang.common.state,field:"recordStateTypeId",align:t(c).columnAlign.center,custom:P,options:t(i),sortable:!0},null,8,["name","align","options"])]),_:1},8,["data"])]),footer:b(()=>[n(C,{title:a._lang.common.close,type:t(c).buttonType.secondary,"data-bs-dismiss":"modal","aria-label":a._lang.common.close,onClick:L},null,8,["title","type","aria-label"]),n(C,{title:a._lang.common.continue,type:t(c).buttonType.primary,"data-bs-dismiss":"modal","aria-label":a._lang.common.continue,onClick:A},null,8,["title","type","aria-label"])]),_:1},8,["title","size"])}}},z={__name:"comments",props:{modelValue:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},selectedLang:{type:[String,Number],required:!0}},emits:["update:modelValue"],setup(r,{emit:d}){const m=r,l=f({get(){return m.modelValue},set(s){d("update:modelValue",s)}}),e=f(()=>m.selectedLang),o=f({get(){return V.getFieldByLangAndName(l.value,e.value,"versionComments")},set(s){V.setFieldByLangAndName(l.value,e.value,"versionComments",s)}});return(s,i)=>{const p=u("form-field"),y=u("accordion");return S(),v(y,{id:"comments",title:s._lang.common.comments,collapsed:!1,class:"mb-4"},{default:b(()=>[n(p,{id:"versionComments",class:"mb-3 col-12",modelValue:t(o),"onUpdate:modelValue":i[0]||(i[0]=_=>h(o)?o.value=_:null),label:s._lang.label.versionComments,disabled:m.disabled,loading:m.loading,type:t(c).inputs.textarea,maxlength:255,language:t(e)},null,8,["modelValue","label","disabled","loading","type","language"])]),_:1},8,["title"])}}},$={__name:"refusal",props:{modelValue:{type:Object,required:!0},store:{type:Object,required:!0}},setup(r){const d=r,m=f(()=>{var l,e,o;return((l=d.modelValue)==null?void 0:l.recordStateTypeId)==c.recordStateType.returned||((e=d.modelValue)==null?void 0:e.refusalType)!=null&&((o=d.modelValue)==null?void 0:o.refusalText)!=null});return(l,e)=>{const o=u("form-field"),s=u("row"),i=u("accordion");return t(m)?(S(),v(i,{key:0,id:"refusal",title:l._lang.common.refusal,collapsed:!0,class:"mb-4"},{default:b(()=>[n(s,null,{default:b(()=>[n(o,{id:"refusalType",class:"mb-3 col-12 col-md-6",modelValue:r.modelValue.refusalType,"onUpdate:modelValue":e[0]||(e[0]=p=>r.modelValue.refusalType=p),label:l._lang.label.refusalTypeId,disabled:!0,type:t(c).inputs.multiselect,options:r.store.refusalTypeList},null,8,["modelValue","label","type","options"]),n(o,{id:"refusalText",class:"mb-3 col-12 col-md-6",modelValue:r.modelValue.refusalText,"onUpdate:modelValue":e[1]||(e[1]=p=>r.modelValue.refusalText=p),label:l._lang.label.refusal,disabled:!0,type:t(c).inputs.text},null,8,["modelValue","label","type"])]),_:1})]),_:1},8,["title"])):U("",!0)}}};export{$ as _,z as a,x as b};
