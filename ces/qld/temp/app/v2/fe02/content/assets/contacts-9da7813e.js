import{x as O,u as A,y as h,r as w,I as q,a as u,b as F,c as B,w as i,d as l,f as t,A as p,n as v,R as L,k as j,S as M,T as N,U,i as E,X as R,F as z}from"./index-920dbb37.js";import{u as D}from"./index.esm-d064d6e3.js";import{b as $}from"./helpers-4c156364.js";const G={__name:"create",props:{modelValue:{type:Array,required:!0},store:{type:Object,required:!0}},emits:["update:modelValue"],setup(g,{emit:S}){const a=g,b=O();A();const y="create-contact";let e=h(f()),m=w(!1),T=$.contactsFormRules();const n=D(T,e,{$scope:!1}),_=q({get(){return a.modelValue},set(o){S("update:modelValue",o)}});function f(){return{contactValue:null,contactScopeId:null,contactTypeId:null}}function C(){e=Object.assign(e,f()),n.value.$reset()}async function c(){if(m.value=!0,await n.value.$validate(),!n.value.$error){const o={contactValue:e.contactValue,contactScopeId:e.contactScopeId,contactScopeName:$.getLabel(a.store.contactScopeList,e.contactScopeId),contactTypeId:e.contactTypeId,contactTypeName:$.getLabel(a.store.contactTypeList,e.contactTypeId)};_.value.filter(s=>s.contactValue===e.contactValue&&s.contactScopeId===e.contactScopeId&&s.contactTypeId===e.contactTypeId).length?L.warning(b.common.contactExists):(_.value.push(o),e=Object.assign(e,f()),n.value.$reset(),v.closeModalById(y),L.success(b.common.contactAdded))}m.value=!1}return(o,d)=>{const s=u("form-field"),I=u("row"),V=u("cbutton"),k=u("modal");return F(),B(k,{id:y,title:o._lang.common.addContact,size:t(p).modalSize.extraLarge},{body:i(()=>[l(I,null,{default:i(()=>[l(s,{id:"contactScopeId",class:"mb-3 col-12 col-md-6",modelValue:t(e).contactScopeId,"onUpdate:modelValue":d[0]||(d[0]=r=>t(e).contactScopeId=r),label:o._lang.label.contactScopeId,disabled:a.disabled,loading:a.loading,type:t(p).inputs.multiselect,required:!0,"show-error":t(n).contactScopeId.$error,"error-message":o._errorMessageField(t(n).contactScopeId),options:a.store.contactScopeList},null,8,["modelValue","label","disabled","loading","type","show-error","error-message","options"]),l(s,{id:"contactTypeId",class:"mb-3 col-12 col-md-6",modelValue:t(e).contactTypeId,"onUpdate:modelValue":d[1]||(d[1]=r=>t(e).contactTypeId=r),label:o._lang.label.contactTypeId,disabled:a.disabled,loading:a.loading,type:t(p).inputs.multiselect,required:!0,"show-error":t(n).contactTypeId.$error,"error-message":o._errorMessageField(t(n).contactTypeId),options:a.store.contactTypeList},null,8,["modelValue","label","disabled","loading","type","show-error","error-message","options"])]),_:1}),l(I,null,{default:i(()=>[l(s,{id:"contactValue",class:"mb-3 col-12",modelValue:t(e).contactValue,"onUpdate:modelValue":d[2]||(d[2]=r=>t(e).contactValue=r),label:o._lang.label.contactValue,disabled:a.disabled,loading:a.loading,type:t(p).inputs.textarea,maxlength:255,required:!0,"show-error":t(n).contactValue.$error,"error-message":o._errorMessageField(t(n).contactValue)},null,8,["modelValue","label","disabled","loading","type","show-error","error-message"])]),_:1})]),footer:i(()=>[l(V,{title:o._lang.common.cancel,type:t(p).buttonType.secondary,"data-bs-dismiss":"modal","aria-label":"Close",disabled:t(m),onClick:C},null,8,["title","type","disabled"]),l(V,{title:o._lang.common.save,onClick:c,disabled:t(m)},null,8,["title","disabled"])]),_:1},8,["title","size"])}}},J={__name:"contacts",props:{modelValue:{type:Array,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},rules:{type:Object,default:{}},validateForm:{type:Boolean,default:!1},modal:{type:Object,required:!0},store:{type:Object,required:!0}},emits:["update:modelValue"],setup(g,{emit:S}){const a=g,b="delete-contact";A();const y=O(),e=q({get(){return a.modelValue},set(c){S("update:modelValue",c)}}),m=q(()=>v.createEmptyDataSource(e.value));let T=w(!1),n=w(null);function _(c){n.value=c}function f(){n.value&&(v.removeItemOfArray(e.value,n),L.success(y.common.contactRemoved),n.value=null)}function C(c){v.sortArrayOffline(c,m.value.items)}return(c,o)=>{const d=u("table-actions"),s=u("ccolumn"),I=u("table-action-delete"),V=u("ctable"),k=u("confirm-delete-modal");return F(),j(z,null,[l(U,{id:"contacts",title:c._lang.common.contacts,collapsed:!1,class:"mb-4"},{default:i(()=>[l(d,null,{default:i(()=>[l(M,{target:"create-contact",class:"d-inline",type:t(p).buttonType.secondary,title:c._lang.common.toAdd,disabled:a.disabled,icon:N},null,8,["type","title","disabled"])]),_:1}),l(V,{data:t(m),loading:t(T),checkbox:!1,onSort:C,showPagination:!1},{columns:i(()=>[l(s,{name:c._lang.label.contactScopeId,field:"contactScopeName",fieldSort:"contactScopeId",sortable:!0},null,8,["name"]),l(s,{name:c._lang.label.contactTypeId,field:"contactTypeName",fieldSort:"contactTypeId",sortable:!0},null,8,["name"]),l(s,{name:c._lang.label.contactValue,field:"contactValue",sortable:!0},null,8,["name"])]),actions:i(r=>[l(I,{id:b,onClick:H=>_(r.item),disabled:a.disabled},null,8,["onClick","disabled"])]),_:1},8,["data","loading"])]),_:1},8,["title"]),(F(),B(R(a.modal),{modelValue:t(e),"onUpdate:modelValue":o[0]||(o[0]=r=>E(e)?e.value=r:null),store:g.store},null,8,["modelValue","store"])),l(k,{id:b,title:c._lang.common.deleteContact,message:c._lang.common.deleteContactQuestion,action:f},null,8,["title","message"])],64)}}};export{G as _,J as a};