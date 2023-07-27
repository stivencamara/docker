import{h as Z,q as x,J as ee,i as m,v as i,s as B,j as d,M as ae,K as le,b as te,r,o as v,c as _,w as u,a as o,m as e,S as oe,y as S,U as ne,z as T,L as ie,l as k}from"./index-d8a56bcc.js";import{p as z}from"./point-of-care-cd3cf399.js";import{u as se}from"./point-of-care-da1e0f34.js";import{p as de}from"./helpers-a03e04a5.js";import{b as re}from"./helpers-d89764d1.js";import"./index.esm-d77c3574.js";const ye={__name:"index",setup(ue){const O=Z(),E=x(),b=se(),H=ee();let s=m(!1),f=m([]),g=m([]),y=m(i.tableSelectedState.none),n=B(A()),C=m([]),F=m([]),P=m(d.createEmptyDataSource());B({});const L=m(ae.havePermission(i.permissions.service.createEdit));function A(){return{pageNumber:1,sortBy:"Code",code:null,channelTypeIds:null,abreviation:null,name:null,organization:null,organizationHost:null,recordStateIds:null,active:!0}}le(async()=>{s.value=!0,C.value=d.convertEnumToArray(E.enums.recordStateType);const a=await z.getLists(H.getLanguage);d.validateResponse(a,null,()=>{b.setLists(a.data),C.value=d.convertEnumToArray(E.enums.recordStateType),F.value=d.concatItemsBadge(C.value,re.recordStateTypeBadgeOptions)}),s.value=!1}),te(async()=>{await I()});function h(a){O.push({name:k.router.BACKOFFICE_EDIT_POINT_OF_CARE_PAGE.name,params:{pointOfCareId:d.encodeId(a.pointOfCareId),pointOfCareVersion:d.encodeId(a.pointOfCareVersion)}})}function N(a){O.push({name:k.router.BACKOFFICE_DETAIL_POINT_OF_CARE_PAGE.name,params:{pointOfCareId:d.encodeId(a.pointOfCareId),pointOfCareVersion:d.encodeId(a.pointOfCareVersion)}})}async function R(){Object.assign(n,A()),await w()}async function w(){n.pageNumber=1,await I()}async function M(){s.value=!0;const a=await z.create(de.newForm());d.validateResponse(a,null,()=>{const t=d.encodeId(a.data.pointOfCareId),V=d.encodeId(a.data.pointOfCareVersion);O.push({name:k.router.BACKOFFICE_EDIT_POINT_OF_CARE_PAGE.name,params:{pointOfCareId:t,pointOfCareVersion:V}})}),s.value=!1}async function D(a){n.sortBy=a,await I()}async function K(a){n.pageNumber=a,await I()}async function I(){s.value=!0;let a=await z.search(n);d.validateResponse(a,null,()=>{P.value=a.data}),s.value=!1}return(a,t)=>{const V=r("breadcrumb-item"),G=r("breadcrumb"),j=r("cbutton"),c=r("form-field"),U=r("row"),q=r("cfilter"),p=r("ccolumn"),J=r("table-action-edit"),W=r("table-action-detail"),$=r("ctable"),Q=r("card"),X=r("page");return v(),_(X,{title:a._lang.backoffice.pointOfCare.pageTitle},{breadcrumb:u(()=>[o(G,{"has-home":!0},{default:u(()=>[o(V,{label:a._lang.backoffice.pointOfCare.breadcrumbTitle},null,8,["label"])]),_:1})]),actions:u(()=>[L.value?(v(),_(j,{key:0,class:"col-12 col-sm-auto",type:e(i).buttonType.secondary,size:e(i).buttonSize.medium,title:a._lang.common.toAdd,icon:oe,onClick:M},null,8,["type","size","title"])):S("",!0)]),default:u(()=>[o(Q,{shadow:!0},{body:u(()=>[o(q,{title:a._lang.common.filter,disabled:e(s),"clear-click":R,"apply-click":w,loading:e(s),collapsed:!0},{default:u(()=>[o(U,null,{default:u(()=>[o(c,{id:"code",modelValue:e(n).code,"onUpdate:modelValue":t[0]||(t[0]=l=>e(n).code=l),class:"mb-3 col-12 col-md-6 col-lg-4",label:a._lang.label.code,type:e(i).inputs.text,maxlength:45,disabled:e(s)},null,8,["modelValue","label","type","disabled"]),o(c,{id:"channelTypeIds",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(n).channelTypeIds,"onUpdate:modelValue":t[1]||(t[1]=l=>e(n).channelTypeIds=l),label:a._lang.label.channelTypeId,type:e(i).inputs.multiselect,options:e(b).channelTypeList,disabled:e(s),mode:e(i).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"]),o(c,{id:"abreviation",class:"mb-3 col-12 col-lg-4",modelValue:e(n).abreviation,"onUpdate:modelValue":t[2]||(t[2]=l=>e(n).abreviation=l),label:a._lang.label.abreviation,type:e(i).inputs.text,maxlength:16,disabled:e(s)},null,8,["modelValue","label","type","disabled"])]),_:1}),o(U,null,{default:u(()=>[o(c,{id:"name",class:"mb-3 col-12 col-md-6",modelValue:e(n).name,"onUpdate:modelValue":t[3]||(t[3]=l=>e(n).name=l),label:a._lang.label.name,type:e(i).inputs.text,maxlength:45,disabled:e(s)},null,8,["modelValue","label","type","disabled"]),o(c,{id:"organization",class:"mb-3 col-12 col-md-6",modelValue:e(n).organization,"onUpdate:modelValue":t[4]||(t[4]=l=>e(n).organization=l),label:a._lang.label.organizationHost,type:e(i).inputs.multiselect,options:e(b).organizationList,disabled:e(s),valueProp:e(i).multiselectValueProp.value3},null,8,["modelValue","label","type","options","disabled","valueProp"]),o(c,{id:"organizationHost",class:"mb-3 col-12 col-md-6",modelValue:e(n).organizationHost,"onUpdate:modelValue":t[5]||(t[5]=l=>e(n).organizationHost=l),label:a._lang.label.hostOrganization,type:e(i).inputs.multiselect,options:e(b).organizationList,disabled:e(s),valueProp:e(i).multiselectValueProp.value3},null,8,["modelValue","label","type","options","disabled","valueProp"]),o(c,{id:"recordStateIds",class:"mb-3 col-12 col-md-6",modelValue:e(n).recordStateIds,"onUpdate:modelValue":t[6]||(t[6]=l=>e(n).recordStateIds=l),label:a._lang.label.state,type:e(i).inputs.multiselect,options:e(C),disabled:e(s),mode:e(i).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"]),o(c,{id:"active",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(n).active,"onUpdate:modelValue":t[7]||(t[7]=l=>e(n).active=l),label:a._lang.label.active,type:e(i).inputs.checkbox,disabled:e(s)},null,8,["modelValue","label","type","disabled"])]),_:1})]),_:1},8,["title","disabled","loading"]),o(ne,null,{default:u(()=>[o($,{onSort:D,onChangePage:K,selectedItems:e(f),"onUpdate:selectedItems":t[8]||(t[8]=l=>T(f)?f.value=l:f=l),unselectedItems:e(g),"onUpdate:unselectedItems":t[9]||(t[9]=l=>T(g)?g.value=l:g=l),selectedState:e(y),"onUpdate:selectedState":t[10]||(t[10]=l=>T(y)?y.value=l:y=l),data:e(P),checkbox:!1,loading:e(s),defaultSort:"pointOfCareId",checkboxField:"code"},{columns:u(()=>[o(p,{name:a._lang.label.code,field:"code",sortable:!0},null,8,["name"]),o(p,{name:a._lang.label.channelTypeId,field:"channelType",sortField:"channelTypeId",sortable:!0},null,8,["name"]),o(p,{name:a._lang.label.abreviation,field:"abreviation",sortable:!0},null,8,["name"]),o(p,{name:a._lang.label.name,field:"name",sortable:!0},null,8,["name"]),o(p,{name:a._lang.label.organizationHost,field:"organization",sortField:"organizationId",sortable:!0},null,8,["name"]),o(p,{name:a._lang.label.hostOrganization,field:"organizationHost",sortField:"organizationHostId",sortable:!0},null,8,["name"]),o(p,{name:a._lang.label.state,field:"recordStateTypeId",sortField:"recordStateTypeId",align:e(i).columnAlign.center,custom:ie,options:e(F),sortable:!0},null,8,["name","align","options"])]),actions:u(l=>[l.item.recordStateTypeId===e(i).recordStateType.draft?(v(),_(J,{key:0,onClick:Y=>h(l.item)},null,8,["onClick"])):S("",!0),l.item.recordStateTypeId>e(i).recordStateType.draft?(v(),_(W,{key:1,onClick:Y=>N(l.item)},null,8,["onClick"])):S("",!0)]),_:1},8,["selectedItems","unselectedItems","selectedState","data","loading"])]),_:1})]),_:1})]),_:1},8,["title"])}}};export{ye as default};
