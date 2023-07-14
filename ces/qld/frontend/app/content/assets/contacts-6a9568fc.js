import{z as Q,M as G,a as U,r as V,G as B,b as i,o as M,l as j,w as r,e as t,g as e,i as u,u as h,Q as R,J as oe,N as E,C as ne,D as H,c as de,R as se,S as ie,T as ce,X as re,F as ue}from"./index-5b4ebf84.js";import{u as me}from"./index.esm-65642301.js";import{b as q}from"./helpers-4796f1a9.js";import{_ as pe}from"./address-167772ff.js";import{u as be}from"./organization-cd538fe2.js";import{l as A}from"./location-7945ac70.js";const Ce={__name:"create",props:{modelValue:{type:Array,required:!0},store:{type:Object,required:!0}},emits:["update:modelValue"],setup($,{emit:O}){const n=$,w=Q();G();const m="create-contact";let o=U(v()),I=V(!1),f=q.contactsFormRules();const l=me(f,o,{$scope:!1}),_=B({get(){return n.modelValue},set(s){O("update:modelValue",s)}});function v(){return{contactValue:null,contactScopeId:null,contactTypeId:null}}function C(){o=Object.assign(o,v()),l.value.$reset()}async function d(){if(I.value=!0,await l.value.$validate(),!l.value.$error){const s={contactValue:o.contactValue,contactScopeId:o.contactScopeId,contactScopeName:q.getLabel(n.store.contactScopeList,o.contactScopeId),contactTypeId:o.contactTypeId,contactTypeName:q.getLabel(n.store.contactTypeList,o.contactTypeId)};_.value.filter(p=>p.contactValue===o.contactValue&&p.contactScopeId===o.contactScopeId&&p.contactTypeId===o.contactTypeId).length?R.warning(w.common.contactExists):(_.value.push(s),o=Object.assign(o,v()),l.value.$reset(),h.closeModalById(m),R.success(w.common.contactAdded))}I.value=!1}return(s,g)=>{const p=i("form-field"),T=i("row"),z=i("cbutton"),S=i("modal");return M(),j(S,{id:m,title:s._lang.common.addContact,size:e(u).modalSize.extraLarge},{body:r(()=>[t(T,null,{default:r(()=>[t(p,{id:"contactScopeId",class:"mb-3 col-12 col-md-6",modelValue:e(o).contactScopeId,"onUpdate:modelValue":g[0]||(g[0]=y=>e(o).contactScopeId=y),label:s._lang.label.contactScopeId,disabled:n.disabled,loading:n.loading,type:e(u).inputs.multiselect,required:!0,"show-error":e(l).contactScopeId.$error,"error-message":s._errorMessageField(e(l).contactScopeId),options:n.store.contactScopeList},null,8,["modelValue","label","disabled","loading","type","show-error","error-message","options"]),t(p,{id:"contactTypeId",class:"mb-3 col-12 col-md-6",modelValue:e(o).contactTypeId,"onUpdate:modelValue":g[1]||(g[1]=y=>e(o).contactTypeId=y),label:s._lang.label.contactTypeId,disabled:n.disabled,loading:n.loading,type:e(u).inputs.multiselect,required:!0,"show-error":e(l).contactTypeId.$error,"error-message":s._errorMessageField(e(l).contactTypeId),options:n.store.contactTypeList},null,8,["modelValue","label","disabled","loading","type","show-error","error-message","options"])]),_:1}),t(T,null,{default:r(()=>[t(p,{id:"contactValue",class:"mb-3 col-12",modelValue:e(o).contactValue,"onUpdate:modelValue":g[2]||(g[2]=y=>e(o).contactValue=y),label:s._lang.label.contactValue,disabled:n.disabled,loading:n.loading,type:e(u).inputs.textarea,maxlength:255,required:!0,"show-error":e(l).contactValue.$error,"error-message":s._errorMessageField(e(l).contactValue)},null,8,["modelValue","label","disabled","loading","type","show-error","error-message"])]),_:1})]),footer:r(()=>[t(z,{title:s._lang.common.cancel,type:e(u).buttonType.secondary,"data-bs-dismiss":"modal","aria-label":"Close",disabled:e(I),onClick:C},null,8,["title","type","disabled"]),t(z,{title:s._lang.common.save,onClick:d,disabled:e(I)},null,8,["title","disabled"])]),_:1},8,["title","size"])}}},Se={__name:"search-location",emits:["apply"],setup($,{emit:O}){const n=be(),w="search-location";let m=V(!1),o=V(0),I=U(h.createEmptyDataSource()),f=U(J()),l=U(p()),_=V([]),v=V([]),C=V([]),d=V(!1);oe(async()=>{await S(),await K()});async function s(a){l.sortBy=a,await S()}async function g(a){l.pageIndex=a,await S()}function p(){return{pageIndex:1,sortBy:"Code desc",organizationId:null,locationTypeId:null,abreviation:null,location:null,recordStateIds:[u.recordStateType.submitted,u.recordStateType.approval,u.recordStateType.published],parentOrganizationId:null,islandId:null,countyId:null,parishId:null,zipCode:null}}async function T(){Object.assign(l,p()),await P()}async function z(){await S()}async function S(){m.value=!0;let a=await A.search(l);h.validateResponse(a,null,()=>{I=a.data}),m.value=!1}async function y(a){const c=await A.getById(a.locationId,a.locationVersion);h.validateResponse(c,null,()=>{Object.assign(f,c.data),d.value=!0}),o.value++}function N(){}function P(){O("apply",f)}function J(){return{address:null,locationId:null,zipCode:null,islandId:null,countyId:null,parishId:null,location:null,latitude:null,longitude:null}}async function K(){m.value=!0;const a=await A.getLists("pt");h.validateResponse(a,null,()=>{_.value=a.data.divisionList}),m.value=!1}function W(a){return _.value.find(k=>k.value===a).children}function X(a){return _.value.find(F=>F.value===l.islandId).children.find(F=>F.value===a).children}E(()=>l.islandId,()=>{const a=l.islandId;l.countyId=null,l.parishId=null,l.islandId||(l.countyId=null,l.parishId=null),a?v.value=W(a):(v.value=[],C.value=[])}),E(()=>l.countyId,()=>{const a=l.countyId;l.parishId=null,l.countyId||(l.parishId=null),a?C.value=X(a):C.value=[]});const Y=B(()=>!l.islandId),Z=B(()=>!l.countyId);return(a,c)=>{const k=i("form-field"),F=i("row"),x=i("cfilter"),L=i("ccolumn"),ee=i("table-action-detail"),le=i("ctable"),ae=i("accordion"),D=i("cbutton"),te=i("modal");return M(),j(te,{id:w,title:a._lang.backoffice.location.searchTitle,size:e(u).modalSize.extraLarge,"remove-padding":!0},{body:r(()=>[t(x,{title:a._lang.common.filter,"clear-click":T,"apply-click":z,loading:e(m),collapsed:!1},{default:r(()=>[t(F,null,{default:r(()=>[t(k,{id:"code-filter",class:"mb-3 col-12 col-md-6",label:a._lang.label.code,type:e(u).inputs.text,maxlength:45,modelValue:e(l).organizationId,"onUpdate:modelValue":c[0]||(c[0]=b=>e(l).organizationId=b)},null,8,["label","type","modelValue"]),t(k,{id:"islandId-filter",class:"mb-3 col-12 col-md-6",modelValue:e(l).islandId,"onUpdate:modelValue":c[1]||(c[1]=b=>e(l).islandId=b),label:a._lang.label.islandId,loading:e(m),type:e(u).inputs.multiselect,options:e(_)},null,8,["modelValue","label","loading","type","options"]),t(k,{id:"countyId-filter",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(l).countyId,"onUpdate:modelValue":c[2]||(c[2]=b=>e(l).countyId=b),label:a._lang.label.countyId,loading:e(m),type:e(u).inputs.multiselect,options:e(v),disabled:e(Y)},null,8,["modelValue","label","loading","type","options","disabled"]),t(k,{id:"parishId-filter",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(l).parishId,"onUpdate:modelValue":c[3]||(c[3]=b=>e(l).parishId=b),label:a._lang.label.parishId,loading:e(m),type:e(u).inputs.multiselect,options:e(C),disabled:e(Z)},null,8,["modelValue","label","loading","type","options","disabled"]),t(k,{id:"zipCode-filter",class:"mb-3 col-md-12 col-lg-4",label:a._lang.label.zipCode,type:e(u).inputs.zipCode,maxlength:45,modelValue:e(l).zipCode,"onUpdate:modelValue":c[4]||(c[4]=b=>e(l).zipCode=b)},null,8,["label","type","modelValue"])]),_:1})]),_:1},8,["title","loading"]),t(ne,null,{default:r(()=>[t(le,{onSort:s,onChangePage:g,data:e(I),loading:e(m),checkbox:!1},{columns:r(()=>[t(L,{name:"Código OID",field:"code",sortable:!0}),t(L,{name:a._lang.label.islandId,field:"island",sortField:"islandId",sortable:!0},null,8,["name"]),t(L,{name:a._lang.label.countyId,field:"county",sortField:"countyId",sortable:!0},null,8,["name"]),t(L,{name:a._lang.label.parishId,field:"parish",sortField:"parishId",sortable:!0},null,8,["name"]),t(L,{name:a._lang.label.zipCode,field:"zipCode",sortField:"zipCode",sortable:!0},null,8,["name"])]),actions:r(b=>[t(ee,{onClick:fe=>y(b.item)},null,8,["onClick"])]),_:1},8,["data","loading"])]),_:1}),(M(),j(ae,{id:"address",title:a._lang.backoffice.entities.address,collapsed:e(d),class:"mt-4",key:e(o)},{default:r(()=>[t(pe,{modelValue:e(f),"onUpdate:modelValue":c[5]||(c[5]=b=>H(f)?f.value=b:f=b),disabled:!0,validateForm:!1,showMap:!1,store:e(n),vuelidate:null},null,8,["modelValue","store"])]),_:1},8,["title","collapsed"]))]),footer:r(()=>[t(D,{type:"primary",size:"large",title:a._lang.common.apply,"data-bs-dismiss":"modal",onClick:P,disabled:!e(f).code},null,8,["title","disabled"]),t(D,{type:"secondary",size:"large",title:a._lang.common.cancel,"data-bs-dismiss":"modal",onClick:N},null,8,["title"])]),_:1},8,["title","size"])}}},ke={__name:"contacts",props:{modelValue:{type:Array,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},rules:{type:Object,default:{}},validateForm:{type:Boolean,default:!1},modal:{type:Object,required:!0},store:{type:Object,required:!0}},emits:["update:modelValue"],setup($,{emit:O}){const n=$,w="delete-contact";G();const m=Q(),o=B({get(){return n.modelValue},set(d){O("update:modelValue",d)}}),I=B(()=>h.createEmptyDataSource(o.value));let f=V(!1),l=V(null);function _(d){l.value=d}function v(){l.value&&(h.removeItemOfArray(o.value,l),R.success(m.common.contactRemoved),l.value=null)}function C(d){h.sortArrayOffline(d,I.value.items)}return(d,s)=>{const g=i("table-actions"),p=i("ccolumn"),T=i("table-action-delete"),z=i("ctable"),S=i("confirm-delete-modal");return M(),de(ue,null,[t(ce,{id:"contacts",title:d._lang.common.contacts,collapsed:!1,class:"mb-4"},{default:r(()=>[t(g,null,{default:r(()=>[t(se,{target:"create-contact",class:"d-inline",type:e(u).buttonType.secondary,title:d._lang.common.toAdd,disabled:n.disabled,icon:ie},null,8,["type","title","disabled"])]),_:1}),t(z,{data:e(I),loading:e(f),checkbox:!1,onSort:C,showPagination:!1},{columns:r(()=>[t(p,{name:d._lang.label.contactScopeId,field:"contactScopeName",fieldSort:"contactScopeId",sortable:!0},null,8,["name"]),t(p,{name:d._lang.label.contactTypeId,field:"contactTypeName",fieldSort:"contactTypeId",sortable:!0},null,8,["name"]),t(p,{name:d._lang.label.contactValue,field:"contactValue",sortable:!0},null,8,["name"])]),actions:r(y=>[t(T,{id:w,onClick:N=>_(y.item),disabled:n.disabled},null,8,["onClick","disabled"])]),_:1},8,["data","loading"])]),_:1},8,["title"]),(M(),j(re(n.modal),{modelValue:e(o),"onUpdate:modelValue":s[0]||(s[0]=y=>H(o)?o.value=y:null),store:$.store},null,8,["modelValue","store"])),t(S,{id:w,title:d._lang.common.deleteContact,message:d._lang.common.deleteContactQuestion,action:v},null,8,["title","message"])],64)}}};export{Se as _,Ce as a,ke as b};
