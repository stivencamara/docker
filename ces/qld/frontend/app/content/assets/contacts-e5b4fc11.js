import{q as Q,D as W,s as q,i as g,E as M,r as d,o as $,c as j,w as r,a as t,m as e,v as c,j as h,Q as N,K as ne,N as D,U as se,z as H,M as K,e as de,R as ie,S as ce,y as re,T as ue,W as me,F as pe}from"./index-d8a56bcc.js";import{u as fe}from"./index.esm-90cb40dd.js";import{b as P}from"./helpers-d89764d1.js";import{_ as be}from"./address-e1a94fd0.js";import{u as ye}from"./organization-cca91f92.js";import{l as A}from"./location-ff83fe07.js";const ke={__name:"create",props:{modelValue:{type:Array,required:!0},store:{type:Object,required:!0}},emits:["update:modelValue"],setup(O,{emit:F}){const s=O,w=Q();W();const u="create-contact";let n=q(_()),y=g(!1),b=P.contactsFormRules();const l=fe(b,n,{$scope:!1}),I=M({get(){return s.modelValue},set(o){F("update:modelValue",o)}});function _(){return{contactValue:null,contactScopeId:null,contactTypeId:null}}function V(){n=Object.assign(n,_()),l.value.$reset()}async function z(){if(y.value=!0,await l.value.$validate(),!l.value.$error){const o={contactValue:n.contactValue,contactScopeId:n.contactScopeId,contactScopeName:P.getLabel(s.store.contactScopeList,n.contactScopeId),contactTypeId:n.contactTypeId,contactTypeName:P.getLabel(s.store.contactTypeList,n.contactTypeId)};I.value.filter(f=>f.contactValue===n.contactValue&&f.contactScopeId===n.contactScopeId&&f.contactTypeId===n.contactTypeId).length?N.warning(w.common.contactExists):(I.value.push(o),n=Object.assign(n,_()),l.value.$reset(),h.closeModalById(u),N.success(w.common.contactAdded))}y.value=!1}return(o,p)=>{const f=d("form-field"),C=d("row"),T=d("cbutton"),S=d("modal");return $(),j(S,{id:u,title:o._lang.common.addContact,size:e(c).modalSize.extraLarge},{body:r(()=>[t(C,null,{default:r(()=>[t(f,{id:"contactScopeId",class:"mb-3 col-12 col-md-6",modelValue:e(n).contactScopeId,"onUpdate:modelValue":p[0]||(p[0]=v=>e(n).contactScopeId=v),label:o._lang.label.contactScopeId,disabled:s.disabled,loading:s.loading,type:e(c).inputs.multiselect,required:!0,"show-error":e(l).contactScopeId.$error,"error-message":o._errorMessageField(e(l).contactScopeId),options:s.store.contactScopeList},null,8,["modelValue","label","disabled","loading","type","show-error","error-message","options"]),t(f,{id:"contactTypeId",class:"mb-3 col-12 col-md-6",modelValue:e(n).contactTypeId,"onUpdate:modelValue":p[1]||(p[1]=v=>e(n).contactTypeId=v),label:o._lang.label.contactTypeId,disabled:s.disabled,loading:s.loading,type:e(c).inputs.multiselect,required:!0,"show-error":e(l).contactTypeId.$error,"error-message":o._errorMessageField(e(l).contactTypeId),options:s.store.contactTypeList},null,8,["modelValue","label","disabled","loading","type","show-error","error-message","options"])]),_:1}),t(C,null,{default:r(()=>[t(f,{id:"contactValue",class:"mb-3 col-12",modelValue:e(n).contactValue,"onUpdate:modelValue":p[2]||(p[2]=v=>e(n).contactValue=v),label:o._lang.label.contactValue,disabled:s.disabled,loading:s.loading,type:e(c).inputs.textarea,maxlength:255,required:!0,"show-error":e(l).contactValue.$error,"error-message":o._errorMessageField(e(l).contactValue)},null,8,["modelValue","label","disabled","loading","type","show-error","error-message"])]),_:1})]),footer:r(()=>[t(T,{title:o._lang.common.cancel,type:e(c).buttonType.secondary,"data-bs-dismiss":"modal","aria-label":"Close",disabled:e(y),onClick:V},null,8,["title","type","disabled"]),t(T,{title:o._lang.common.save,onClick:z,disabled:e(y)},null,8,["title","disabled"])]),_:1},8,["title","size"])}}},he={__name:"search-location",emits:["apply"],setup(O,{emit:F}){const s=ye(),w="search-location";let u=g(!1),n=g(0),y=q(h.createEmptyDataSource()),b=q(G()),l=q(f()),I=g([]),_=g([]),V=g([]),z=g(!1);ne(async()=>{await S(),await J()});async function o(a){l.sortBy=a,await S()}async function p(a){l.pageIndex=a,await S()}function f(){return{pageIndex:1,sortBy:"Code desc",organizationId:null,locationTypeId:null,abreviation:null,location:null,recordStateIds:[c.recordStateType.submitted,c.recordStateType.approval,c.recordStateType.published],parentOrganizationId:null,islandId:null,countyId:null,parishId:null,zipCode:null}}async function C(){Object.assign(l,f()),await E()}async function T(){await S()}async function S(){u.value=!0;let a=await A.search(l);h.validateResponse(a,null,()=>{y=a.data}),u.value=!1}async function v(a){const i=await A.getById(a.locationId,a.locationVersion);h.validateResponse(i,null,()=>{Object.assign(b,i.data),z.value=!0}),n.value++}function L(){}function E(){F("apply",b)}function G(){return{address:null,locationId:null,zipCode:null,islandId:null,countyId:null,parishId:null,location:null,latitude:null,longitude:null}}async function J(){u.value=!0;const a=await A.getLists("pt");h.validateResponse(a,null,()=>{I.value=a.data.divisionList}),u.value=!1}function X(a){return I.value.find(k=>k.value===a).children}function Y(a){return I.value.find(B=>B.value===l.islandId).children.find(B=>B.value===a).children}D(()=>l.islandId,()=>{const a=l.islandId;l.countyId=null,l.parishId=null,l.islandId||(l.countyId=null,l.parishId=null),a?_.value=X(a):(_.value=[],V.value=[])}),D(()=>l.countyId,()=>{const a=l.countyId;l.parishId=null,l.countyId||(l.parishId=null),a?V.value=Y(a):V.value=[]});const Z=M(()=>!l.islandId),x=M(()=>!l.countyId);return(a,i)=>{const k=d("form-field"),B=d("row"),ee=d("cfilter"),U=d("ccolumn"),le=d("table-action-detail"),ae=d("ctable"),te=d("accordion"),R=d("cbutton"),oe=d("modal");return $(),j(oe,{id:w,title:a._lang.backoffice.location.searchTitle,size:e(c).modalSize.extraLarge,"remove-padding":!0},{body:r(()=>[t(ee,{title:a._lang.common.filter,"clear-click":C,"apply-click":T,loading:e(u),collapsed:!1},{default:r(()=>[t(B,null,{default:r(()=>[t(k,{id:"code-filter",class:"mb-3 col-12 col-md-6",label:a._lang.label.code,type:e(c).inputs.text,maxlength:45,modelValue:e(l).organizationId,"onUpdate:modelValue":i[0]||(i[0]=m=>e(l).organizationId=m)},null,8,["label","type","modelValue"]),t(k,{id:"islandId-filter",class:"mb-3 col-12 col-md-6",modelValue:e(l).islandId,"onUpdate:modelValue":i[1]||(i[1]=m=>e(l).islandId=m),label:a._lang.label.islandId,loading:e(u),type:e(c).inputs.multiselect,options:e(I)},null,8,["modelValue","label","loading","type","options"]),t(k,{id:"countyId-filter",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(l).countyId,"onUpdate:modelValue":i[2]||(i[2]=m=>e(l).countyId=m),label:a._lang.label.countyId,loading:e(u),type:e(c).inputs.multiselect,options:e(_),disabled:e(Z)},null,8,["modelValue","label","loading","type","options","disabled"]),t(k,{id:"parishId-filter",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(l).parishId,"onUpdate:modelValue":i[3]||(i[3]=m=>e(l).parishId=m),label:a._lang.label.parishId,loading:e(u),type:e(c).inputs.multiselect,options:e(V),disabled:e(x)},null,8,["modelValue","label","loading","type","options","disabled"]),t(k,{id:"zipCode-filter",class:"mb-3 col-md-12 col-lg-4",label:a._lang.label.zipCode,type:e(c).inputs.zipCode,maxlength:45,modelValue:e(l).zipCode,"onUpdate:modelValue":i[4]||(i[4]=m=>e(l).zipCode=m)},null,8,["label","type","modelValue"])]),_:1})]),_:1},8,["title","loading"]),t(se,null,{default:r(()=>[t(ae,{onSort:o,onChangePage:p,data:e(y),loading:e(u),checkbox:!1},{columns:r(()=>[t(U,{name:"Código OID",field:"code",sortable:!0}),t(U,{name:a._lang.label.islandId,field:"island",sortField:"islandId",sortable:!0},null,8,["name"]),t(U,{name:a._lang.label.countyId,field:"county",sortField:"countyId",sortable:!0},null,8,["name"]),t(U,{name:a._lang.label.parishId,field:"parish",sortField:"parishId",sortable:!0},null,8,["name"]),t(U,{name:a._lang.label.zipCode,field:"zipCode",sortField:"zipCode",sortable:!0},null,8,["name"])]),actions:r(m=>[t(le,{onClick:ge=>v(m.item)},null,8,["onClick"])]),_:1},8,["data","loading"])]),_:1}),($(),j(te,{id:"address",title:a._lang.backoffice.entities.address,collapsed:e(z),class:"mt-4",key:e(n)},{default:r(()=>[t(be,{modelValue:e(b),"onUpdate:modelValue":i[5]||(i[5]=m=>H(b)?b.value=m:b=m),disabled:!0,validateForm:!1,showMap:!1,store:e(s),vuelidate:null},null,8,["modelValue","store"])]),_:1},8,["title","collapsed"]))]),footer:r(()=>[t(R,{type:"primary",size:"large",title:a._lang.common.apply,"data-bs-dismiss":"modal",onClick:E,disabled:!e(b).code},null,8,["title","disabled"]),t(R,{type:"secondary",size:"large",title:a._lang.common.cancel,"data-bs-dismiss":"modal",onClick:L},null,8,["title"])]),_:1},8,["title","size"])}}},we={__name:"contacts",props:{modelValue:{type:Array,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},rules:{type:Object,default:{}},validateForm:{type:Boolean,default:!1},modal:{type:Object,required:!0},store:{type:Object,required:!0}},emits:["update:modelValue"],setup(O,{emit:F}){const s=O,w="delete-contact";W();const u=Q(),n=M({get(){return s.modelValue},set(o){F("update:modelValue",o)}}),y=M(()=>h.createEmptyDataSource(n.value));let b=g(!1),l=g(null);const I=g(K.havePermission(c.permissions.service.createEdit||K.havePermission(c.permissions.organization.createEdit)));function _(o){l.value=o}function V(){l.value&&(h.removeItemOfArray(n.value,l),N.success(u.common.contactRemoved),l.value=null)}function z(o){h.sortArrayOffline(o,y.value.items)}return(o,p)=>{const f=d("table-actions"),C=d("ccolumn"),T=d("table-action-delete"),S=d("ctable"),v=d("confirm-delete-modal");return $(),de(pe,null,[t(ue,{id:"contacts",title:o._lang.common.contacts,collapsed:!1,class:"mb-4"},{default:r(()=>[I.value?($(),j(f,{key:0},{default:r(()=>[t(ie,{target:"create-contact",class:"d-inline",type:e(c).buttonType.secondary,title:o._lang.common.toAdd,disabled:s.disabled,icon:ce},null,8,["type","title","disabled"])]),_:1})):re("",!0),t(S,{data:e(y),loading:e(b),checkbox:!1,onSort:z,showPagination:!1},{columns:r(()=>[t(C,{name:o._lang.label.contactScopeId,field:"contactScopeName",fieldSort:"contactScopeId",sortable:!0},null,8,["name"]),t(C,{name:o._lang.label.contactTypeId,field:"contactTypeName",fieldSort:"contactTypeId",sortable:!0},null,8,["name"]),t(C,{name:o._lang.label.contactValue,field:"contactValue",sortable:!0},null,8,["name"])]),actions:r(L=>[t(T,{id:w,onClick:E=>_(L.item),disabled:s.disabled},null,8,["onClick","disabled"])]),_:1},8,["data","loading"])]),_:1},8,["title"]),($(),j(me(s.modal),{modelValue:e(n),"onUpdate:modelValue":p[0]||(p[0]=L=>H(n)?n.value=L:null),store:O.store},null,8,["modelValue","store"])),t(v,{id:w,title:o._lang.common.deleteContact,message:o._lang.common.deleteContactQuestion,action:V},null,8,["title","message"])],64)}}};export{he as _,ke as a,we as b};
