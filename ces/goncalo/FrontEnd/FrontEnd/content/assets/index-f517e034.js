import{g as re,i as ce,W as ue,r as d,j as me,u as r,v as i,L as pe,o as be,w as P,k as N,N as R,l as c,c as y,e as Ie,q as n,n as u,m as _,s as a,U as ye,A as C,J as T,M as ge,F as fe,B as w}from"./index-82cc5ade.js";import{l as A}from"./location-2c209114.js";import{i as Se}from"./import-fd6edb56.js";import{h as he}from"./helpers-dde6f517.js";import{b as Fe}from"./helpers-99584788.js";import{_ as ve}from"./import-a69805ad.js";import"./index.esm-e88984bb.js";const Ee={__name:"index",setup(_e){const V=re(),L=ce(),o=ue();let s=d(!0),E=me(r.createEmptyDataSource()),D=d([]),O=d([]),B=d([]),g=d([]),k=d([]),f=d([]),U=d([]),S=d([]),h=d([]),F=d(i.tableSelectedState.none);d("import");async function G(e){o.locationSearchForm.sortBy=e,await v()}async function M(e){o.locationSearchForm.pageIndex=e,await v()}async function K(){o.resetLocationSearchForm(),await z()}async function z(){o.locationSearchForm.pageNumber=1,await v()}async function v(){s.value=!0;let e=await A.search(o.locationSearchForm);r.validateResponse(e,null,()=>{E=e.data}),s.value=!1}async function H(){s.value=!0;const e=await A.create(he.newForm());r.validateResponse(e,null,()=>{const t=r.encodeId(e.data.locationId),m=r.encodeId(e.data.locationVersion);V.push({name:w.router.BACKOFFICE_EDIT_LOCATION_PAGE.name,params:{locationId:t,locationVersion:m}})}),s.value=!1}function j(e){V.push({name:w.router.BACKOFFICE_EDIT_LOCATION_PAGE.name,params:{locationId:r.encodeId(e.locationId),locationVersion:r.encodeId(e.locationVersion)}})}function q(e){V.push({name:w.router.BACKOFFICE_DETAIL_LOCATION_PAGE.name,params:{locationId:r.encodeId(e.locationId),locationVersion:r.encodeId(e.locationVersion)}})}pe(async()=>{await v(),await J()}),be(async()=>{D.value=r.convertEnumToArray(L.enums.locationType),O.value=r.convertEnumToArray(L.enums.recordStateType),B.value=r.concatItemsBadge(O.value,Fe.recordStateTypeBadgeOptions)});async function J(){s.value=!0;const e=await A.getLists("pt");r.validateResponse(e,null,()=>{g.value=e.data.divisionList,U.value=e.data.stateTypeList}),s.value=!1}function W(e){return g.value.find(m=>m.value===e).children}function $(e){return g.value.find(I=>I.value===o.locationSearchForm.islandId).children.find(I=>I.value===e).children}P(()=>o.locationSearchForm.islandId,()=>{const e=o.locationSearchForm.islandId;o.locationSearchForm.countyId=null,o.locationSearchForm.parishId=null,o.locationSearchForm.islandId||(o.locationSearchForm.countyId=null,o.locationSearchForm.parishId=null),e?k.value=W(e):(k.value=[],f.value=[])}),P(()=>o.locationSearchForm.countyId,()=>{const e=o.locationSearchForm.countyId;o.locationSearchForm.parishId=null,o.locationSearchForm.countyId||(o.locationSearchForm.parishId=null),e?f.value=$(e):f.value=[]});const Q=N(()=>!o.locationSearchForm.islandId),X=N(()=>!o.locationSearchForm.countyId);async function Y(e){s.value=!0;let t={data:e.value.data,name:e.value.name},m=await Se.location(t);r.validateResponse(m,null,()=>{}),s.value=!1}d(R.havePermission(i.permissions.parameter.createEdit));const Z=d(R.havePermission(i.permissions.location.createEdit));return(e,t)=>{const m=c("breadcrumb-item"),I=c("breadcrumb"),x=c("cbutton"),p=c("form-field"),ee=c("row"),ae=c("cfilter"),b=c("ccolumn"),oe=c("table-action-edit"),le=c("table-action-detail"),te=c("ctable"),ne=c("container-wrapper"),ie=c("card"),se=c("page");return y(),Ie(fe,null,[n(se,{title:e._lang.backoffice.location.pageTitle},{breadcrumb:u(()=>[n(I,{"has-home":!0},{default:u(()=>[n(m,{label:e._lang.backoffice.location.breadcrumbTitle},null,8,["label"])]),_:1})]),actions:u(()=>[Z.value?(y(),_(x,{key:0,type:a(i).buttonType.secondary,size:a(i).buttonSize.medium,title:e._lang.common.toAdd,icon:ye,onClick:H},null,8,["type","size","title"])):C("",!0)]),default:u(()=>[n(ie,{shadow:!0},{body:u(()=>[n(ae,{title:e._lang.common.filter,"clear-click":K,"apply-click":z,loading:a(s),collapsed:!0},{default:u(()=>[n(ee,null,{default:u(()=>[n(p,{id:"code",class:"mb-3 col-12 col-md-6",label:e._lang.label.code,type:a(i).inputs.text,maxlength:45,modelValue:a(o).locationSearchForm.code,"onUpdate:modelValue":t[0]||(t[0]=l=>a(o).locationSearchForm.code=l)},null,8,["label","type","modelValue"]),n(p,{id:"islandId",class:"mb-3 col-12 col-md-6",modelValue:a(o).locationSearchForm.islandId,"onUpdate:modelValue":t[1]||(t[1]=l=>a(o).locationSearchForm.islandId=l),label:e._lang.label.islandId,loading:a(s),type:a(i).inputs.multiselect,options:a(g)},null,8,["modelValue","label","loading","type","options"]),n(p,{id:"countyId",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:a(o).locationSearchForm.countyId,"onUpdate:modelValue":t[2]||(t[2]=l=>a(o).locationSearchForm.countyId=l),label:e._lang.label.countyId,loading:a(s),type:a(i).inputs.multiselect,options:a(k),disabled:a(Q)},null,8,["modelValue","label","loading","type","options","disabled"]),n(p,{id:"parishId",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:a(o).locationSearchForm.parishId,"onUpdate:modelValue":t[3]||(t[3]=l=>a(o).locationSearchForm.parishId=l),label:e._lang.label.parishId,loading:a(s),type:a(i).inputs.multiselect,options:a(f),disabled:a(X)},null,8,["modelValue","label","loading","type","options","disabled"]),n(p,{id:"zipCode",class:"mb-3 col-md-12 col-lg-4",label:e._lang.label.zipCode,type:a(i).inputs.zipCode,maxlength:45,modelValue:a(o).locationSearchForm.zipCode,"onUpdate:modelValue":t[4]||(t[4]=l=>a(o).locationSearchForm.zipCode=l)},null,8,["label","type","modelValue"]),n(p,{id:"address",class:"mb-3 col-12 col-md-8",label:e._lang.label.address,type:a(i).inputs.address,maxlength:45,modelValue:a(o).locationSearchForm.address,"onUpdate:modelValue":t[5]||(t[5]=l=>a(o).locationSearchForm.address=l)},null,8,["label","type","modelValue"]),n(p,{id:"recordStateIds",class:"mb-3 col-12 col-md-4",label:e._lang.label.state,type:a(i).inputs.multiselect,modelValue:a(o).locationSearchForm.recordStateIds,"onUpdate:modelValue":t[6]||(t[6]=l=>a(o).locationSearchForm.recordStateIds=l),options:a(U),mode:a(i).multiselectMode.tags},null,8,["label","type","modelValue","options","mode"]),e._isGuestLogged?C("",!0):(y(),_(p,{key:0,id:"active",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:a(o).locationSearchForm.active,"onUpdate:modelValue":t[7]||(t[7]=l=>a(o).locationSearchForm.active=l),label:e._lang.label.public,type:a(i).inputs.checkbox,disabled:a(s)},null,8,["modelValue","label","type","disabled"]))]),_:1})]),_:1},8,["title","loading"]),n(ne,{class:"mt-4"},{default:u(()=>[n(te,{onSort:G,onChangePage:M,data:a(E),loading:a(s),checkbox:!1,selectedItems:a(S),"onUpdate:selectedItems":t[8]||(t[8]=l=>T(S)?S.value=l:S=l),unselectedItems:a(h),"onUpdate:unselectedItems":t[9]||(t[9]=l=>T(h)?h.value=l:h=l),selectedState:a(F),"onUpdate:selectedState":t[10]||(t[10]=l=>T(F)?F.value=l:F=l),checkboxField:"code"},{columns:u(()=>[n(b,{name:e._lang.label.oidCode,field:"code",sortable:!0,maxLength:45},null,8,["name"]),n(b,{name:e._lang.label.islandId,field:"island",sortField:"islandId",sortable:!0},null,8,["name"]),n(b,{name:e._lang.label.countyId,field:"county",sortField:"countyId",sortable:!0},null,8,["name"]),n(b,{name:e._lang.label.parishId,field:"parish",sortField:"parishId",sortable:!0},null,8,["name"]),n(b,{name:e._lang.label.zipCode,field:"zipCode",sortField:"zipCode",sortable:!0},null,8,["name"]),n(b,{name:e._lang.label.address,field:"address",sortField:"address",sortable:!0,maxLength:10},null,8,["name"]),n(b,{name:e._lang.common.state,field:"recordStateTypeId",align:a(i).columnAlign.center,custom:ge,options:a(B),sortable:!0},null,8,["name","align","options"])]),actions:u(l=>[l.item.recordStateTypeId==a(i).recordStateType.draft?(y(),_(oe,{key:0,onClick:de=>j(l.item)},null,8,["onClick"])):C("",!0),l.item.recordStateTypeId>a(i).recordStateType.draft?(y(),_(le,{key:1,onClick:de=>q(l.item)},null,8,["onClick"])):C("",!0)]),_:1},8,["data","loading","selectedItems","unselectedItems","selectedState"])]),_:1})]),_:1})]),_:1},8,["title"]),n(ve,{action:Y})],64)}}};export{Ee as default};
