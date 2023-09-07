import{g as re,i as ue,r as u,E as P,u as i,s as d,K as ce,o as me,N,j as M,M as pe,k as r,c as V,e as be,n as o,w as c,p as l,T as Ie,l as h,H as w,L as ye,y as z,F as ge,z as F}from"./index-f9e60098.js";import{l as O}from"./location-a89f8fd9.js";import{i as fe}from"./import-9c147039.js";import{h as ve}from"./helpers-fd793e05.js";import{b as _e}from"./helpers-c3825dec.js";import{_ as Ce}from"./import-03d766bf.js";import"./index.esm-7b4c8e23.js";const Oe={__name:"index",setup(Ve){const k=re(),A=ue();let s=u(!0),a=P(L()),E=P(i.createEmptyDataSource()),R=u([]),S=u([]),B=u([]),y=u([]),T=u([]),g=u([]),f=u([]),v=u([]),_=u(d.tableSelectedState.none);u("import");async function D(e){a.sortBy=e,await C()}async function K(e){a.pageIndex=e,await C()}function L(){return{pageIndex:1,sortBy:"Code desc",organization:null,locationTypeId:null,abreviation:null,location:null,recordStateIds:null,address:null,islandId:null,countyId:null,parishId:null,zipCode:null,active:!0}}async function G(){Object.assign(a,L()),await U()}async function U(){a.pageNumber=1,await C()}async function C(){s.value=!0;let e=await O.search(a);i.validateResponse(e,null,()=>{E=e.data}),s.value=!1}async function H(){s.value=!0;const e=await O.create(ve.newForm());i.validateResponse(e,null,()=>{const n=i.encodeId(e.data.locationId),m=i.encodeId(e.data.locationVersion);k.push({name:F.router.BACKOFFICE_EDIT_LOCATION_PAGE.name,params:{locationId:n,locationVersion:m}})}),s.value=!1}function j(e){k.push({name:F.router.BACKOFFICE_EDIT_LOCATION_PAGE.name,params:{locationId:i.encodeId(e.locationId),locationVersion:i.encodeId(e.locationVersion)}})}function $(e){k.push({name:F.router.BACKOFFICE_DETAIL_LOCATION_PAGE.name,params:{locationId:i.encodeId(e.locationId),locationVersion:i.encodeId(e.locationVersion)}})}ce(async()=>{await C(),await q()}),me(async()=>{R.value=i.convertEnumToArray(A.enums.locationType),S.value=i.convertEnumToArray(A.enums.recordStateType),B.value=i.concatItemsBadge(S.value,_e.recordStateTypeBadgeOptions)});async function q(){s.value=!0;const e=await O.getLists("pt");i.validateResponse(e,null,()=>{y.value=e.data.divisionList}),s.value=!1}function J(e){return y.value.find(m=>m.value===e).children}function Q(e){return y.value.find(I=>I.value===a.islandId).children.find(I=>I.value===e).children}N(()=>a.islandId,()=>{const e=a.islandId;a.countyId=null,a.parishId=null,a.islandId||(a.countyId=null,a.parishId=null),e?T.value=J(e):(T.value=[],g.value=[])}),N(()=>a.countyId,()=>{const e=a.countyId;a.parishId=null,a.countyId||(a.parishId=null),e?g.value=Q(e):g.value=[]});const W=M(()=>!a.islandId),X=M(()=>!a.countyId);async function Y(e){s.value=!0;let n={data:e.value.data,name:e.value.name},m=await fe.location(n);i.validateResponse(m,null,()=>{}),s.value=!1}const Z=u(pe.havePermission(d.permissions.parameter.createEdit));return(e,n)=>{const m=r("breadcrumb-item"),I=r("breadcrumb"),x=r("cbutton"),p=r("form-field"),ee=r("row"),le=r("cfilter"),b=r("ccolumn"),ae=r("table-action-edit"),te=r("table-action-detail"),ne=r("ctable"),oe=r("container-wrapper"),de=r("card"),se=r("page");return V(),be(ge,null,[o(se,{title:e._lang.backoffice.location.pageTitle},{breadcrumb:c(()=>[o(I,{"has-home":!0},{default:c(()=>[o(m,{label:e._lang.backoffice.location.breadcrumbTitle},null,8,["label"])]),_:1})]),actions:c(()=>[o(x,{type:l(d).buttonType.secondary,size:l(d).buttonSize.medium,title:e._lang.common.toAdd,icon:Ie,onClick:H},null,8,["type","size","title"])]),default:c(()=>[o(de,{shadow:!0},{body:c(()=>[o(le,{title:e._lang.common.filter,"clear-click":G,"apply-click":U,loading:l(s),collapsed:!0},{default:c(()=>[o(ee,null,{default:c(()=>[o(p,{id:"code",class:"mb-3 col-12 col-md-6",label:e._lang.label.code,type:l(d).inputs.text,maxlength:45,modelValue:l(a).organization,"onUpdate:modelValue":n[0]||(n[0]=t=>l(a).organization=t)},null,8,["label","type","modelValue"]),o(p,{id:"islandId",class:"mb-3 col-12 col-md-6",modelValue:l(a).islandId,"onUpdate:modelValue":n[1]||(n[1]=t=>l(a).islandId=t),label:e._lang.label.islandId,loading:l(s),type:l(d).inputs.multiselect,options:l(y)},null,8,["modelValue","label","loading","type","options"]),o(p,{id:"countyId",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:l(a).countyId,"onUpdate:modelValue":n[2]||(n[2]=t=>l(a).countyId=t),label:e._lang.label.countyId,loading:l(s),type:l(d).inputs.multiselect,options:l(T),disabled:l(W)},null,8,["modelValue","label","loading","type","options","disabled"]),o(p,{id:"parishId",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:l(a).parishId,"onUpdate:modelValue":n[3]||(n[3]=t=>l(a).parishId=t),label:e._lang.label.parishId,loading:l(s),type:l(d).inputs.multiselect,options:l(g),disabled:l(X)},null,8,["modelValue","label","loading","type","options","disabled"]),o(p,{id:"zipCode",class:"mb-3 col-md-12 col-lg-4",label:e._lang.label.zipCode,type:l(d).inputs.zipCode,maxlength:45,modelValue:l(a).zipCode,"onUpdate:modelValue":n[4]||(n[4]=t=>l(a).zipCode=t)},null,8,["label","type","modelValue"]),o(p,{id:"address",class:"mb-3 col-12 col-md-8",label:e._lang.label.address,type:l(d).inputs.address,maxlength:45,modelValue:l(a).address,"onUpdate:modelValue":n[5]||(n[5]=t=>l(a).address=t)},null,8,["label","type","modelValue"]),o(p,{id:"recordStateIds",class:"mb-3 col-12 col-md-4",label:e._lang.label.state,type:l(d).inputs.multiselect,modelValue:l(a).recordStateIds,"onUpdate:modelValue":n[6]||(n[6]=t=>l(a).recordStateIds=t),options:l(S),mode:l(d).multiselectMode.tags},null,8,["label","type","modelValue","options","mode"]),o(p,{id:"active",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:l(a).active,"onUpdate:modelValue":n[7]||(n[7]=t=>l(a).active=t),label:e._lang.label.active,type:l(d).inputs.checkbox,disabled:l(s)},null,8,["modelValue","label","type","disabled"])]),_:1})]),_:1},8,["title","loading"]),Z.value?(V(),h(oe,{key:0,class:"mt-4"},{default:c(()=>[o(ne,{onSort:D,onChangePage:K,data:l(E),loading:l(s),checkbox:!1,selectedItems:l(f),"onUpdate:selectedItems":n[8]||(n[8]=t=>w(f)?f.value=t:f=t),unselectedItems:l(v),"onUpdate:unselectedItems":n[9]||(n[9]=t=>w(v)?v.value=t:v=t),selectedState:l(_),"onUpdate:selectedState":n[10]||(n[10]=t=>w(_)?_.value=t:_=t),checkboxField:"code"},{columns:c(()=>[o(b,{name:e._lang.label.oidCode,field:"code",sortable:!0,maxLength:10},null,8,["name"]),o(b,{name:e._lang.label.islandId,field:"island",sortField:"islandId",sortable:!0},null,8,["name"]),o(b,{name:e._lang.label.countyId,field:"county",sortField:"countyId",sortable:!0},null,8,["name"]),o(b,{name:e._lang.label.parishId,field:"parish",sortField:"parishId",sortable:!0},null,8,["name"]),o(b,{name:e._lang.label.zipCode,field:"zipCode",sortField:"zipCode",sortable:!0},null,8,["name"]),o(b,{name:e._lang.label.address,field:"address",sortField:"address",sortable:!0,maxLength:10},null,8,["name"]),o(b,{name:e._lang.common.state,field:"recordStateTypeId",align:l(d).columnAlign.center,custom:ye,options:l(B),sortable:!0},null,8,["name","align","options"])]),actions:c(t=>[t.item.recordStateTypeId==l(d).recordStateType.draft?(V(),h(ae,{key:0,onClick:ie=>j(t.item)},null,8,["onClick"])):z("",!0),t.item.recordStateTypeId>l(d).recordStateType.draft?(V(),h(te,{key:1,onClick:ie=>$(t.item)},null,8,["onClick"])):z("",!0)]),_:1},8,["data","loading","selectedItems","unselectedItems","selectedState"])]),_:1})):z("",!0)]),_:1})]),_:1},8,["title"]),o(Ce,{action:Y})],64)}}};export{Oe as default};
