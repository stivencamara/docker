import{g as le,i as oe,K as ne,r as d,v as i,j as U,u as r,N,L as ie,o as se,k as re,l as u,c as g,e as de,q as o,n as c,m as y,s as e,U as ue,A as v,W as ce,J as O,M as me,F as pe,B as E}from"./index-80ba5b4e.js";import{o as A}from"./organization-3bd78b8a.js";import{i as ge}from"./import-2e2c57b3.js";import{u as be}from"./organization-3f9f41dc.js";import{b as fe}from"./helpers-4a70dd55.js";import{o as ye}from"./helpers-80252163.js";import{_ as ve}from"./import-b75a565e.js";import"./index.esm-ae8bce41.js";const Ee={__name:"index",setup(Ie){const V=le(),k=oe(),M=be(),R=ne();d("import");let s=d(!1),I=d([]),z=d([]),T=d(i.tableSelectedState.none),n=U(P()),b=d([]),w=d([]),S=d([]),B=d(r.createEmptyDataSource()),F=d([]);U({});const C=d(N.havePermission(i.permissions.organization.createEdit));d(N.havePermission(i.permissions.parameter.createEdit));function P(){return{pageNumber:1,sortBy:"Code",organizationTypeIds:null,abreviation:null,parentOrganization:null,recordStateTypeIds:[i.recordStateType.published],name:null,code:null,active:!0}}ie(async()=>{s.value=!0;const a=await A.getLists(R.getLanguage);r.validateResponse(a,null,()=>{M.setLists(a.data),b.value=[].concat(a.data.organizationRegionalPublicAdministrationTypeList).concat(a.data.organizationLocalAuthoritiesTypeList),b.value=r.removeDuplicateItemsOfArray(b.value),w.value=a.data.organizationList,r.sortArrayOffline("label asc",b.value),S.value=r.convertEnumToArray(k.enums.recordStateType),F.value=r.concatItemsBadge(S.value,fe.recordStateTypeBadgeOptions)}),s.value=!1}),se(async()=>{await _()});function D(a){V.push({name:E.router.BACKOFFICE_EDIT_ENTITY_PAGE.name,params:{organizationId:r.encodeId(a.organizationId),organizationVersion:r.encodeId(a.organizationVersion)}})}function G(a){V.push({name:E.router.BACKOFFICE_DETAIL_ENTITY_PAGE.name,params:{organizationId:r.encodeId(a.organizationId),organizationVersion:r.encodeId(a.organizationVersion)}})}async function K(){Object.assign(n,P()),await L()}async function L(){n.pageNumber=1,await _()}async function Y(){s.value=!0;const a=await A.create(ye.newForm());r.validateResponse(a,null,()=>{const l=r.encodeId(a.data.organizationId),f=r.encodeId(a.data.organizationVersion);V.push({name:E.router.BACKOFFICE_EDIT_ENTITY_PAGE.name,params:{organizationId:l,organizationVersion:f}})}),s.value=!1}async function h(a){n.sortBy=a,await _()}async function j(a){n.pageNumber=a,await _()}async function _(){s.value=!0;let a=await A.search(n);r.validateResponse(a,null,()=>{B.value=a.data}),s.value=!1}async function H(a){s.value=!0;let l={data:a.value.data,name:a.value.name},f=await ge.organization(l);r.validateResponse(f,null,()=>{}),s.value=!1}const W=re(()=>C.value?k.backoffice.entities.pageTitle:k.backoffice.entities.breadcrumbTitle);return(a,l)=>{const f=u("breadcrumb-item"),q=u("breadcrumb"),J=u("cbutton"),m=u("form-field"),$=u("row"),Q=u("cfilter"),p=u("ccolumn"),X=u("table-action-edit"),Z=u("table-action-detail"),x=u("ctable"),ee=u("card"),ae=u("page");return g(),de(pe,null,[o(ae,{title:e(W)},{breadcrumb:c(()=>[o(q,{"has-home":!0},{default:c(()=>[o(f,{label:a._lang.backoffice.entities.breadcrumbTitle},null,8,["label"])]),_:1})]),actions:c(()=>[C.value?(g(),y(J,{key:0,class:"col-12 col-sm-auto",type:e(i).buttonType.secondary,size:e(i).buttonSize.medium,title:a._lang.common.toAdd,icon:ue,onClick:Y},null,8,["type","size","title"])):v("",!0)]),default:c(()=>[o(ee,{shadow:!0},{body:c(()=>[o(Q,{title:a._lang.common.filter,disabled:e(s),"clear-click":K,"apply-click":L,loading:e(s),collapsed:!0},{default:c(()=>[o($,null,{default:c(()=>[o(m,{id:"code",modelValue:e(n).code,"onUpdate:modelValue":l[0]||(l[0]=t=>e(n).code=t),class:"mb-3 col-12 col-md-6 col-lg-4",label:a._lang.label.code,type:e(i).inputs.text,maxlength:45,disabled:e(s)},null,8,["modelValue","label","type","disabled"]),o(m,{class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(n).organizationTypeIds,"onUpdate:modelValue":l[1]||(l[1]=t=>e(n).organizationTypeIds=t),label:a._lang.label.organizationTypeId,type:e(i).inputs.multiselect,options:e(b),disabled:e(s),mode:e(i).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"]),o(m,{class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(n).parentOrganization,"onUpdate:modelValue":l[2]||(l[2]=t=>e(n).parentOrganization=t),label:a._lang.label.parentOrganization,type:e(i).inputs.multiselect,options:e(w),disabled:e(s),valueProp:e(i).multiselectValueProp.value3},null,8,["modelValue","label","type","options","disabled","valueProp"]),o(m,{class:"mb-3 col-12 col-lg-4",modelValue:e(n).abreviation,"onUpdate:modelValue":l[3]||(l[3]=t=>e(n).abreviation=t),label:a._lang.label.abreviation,type:e(i).inputs.text,maxlength:16,disabled:e(s)},null,8,["modelValue","label","type","disabled"]),o(m,{class:"mb-3 col-12 col-md-8",modelValue:e(n).name,"onUpdate:modelValue":l[4]||(l[4]=t=>e(n).name=t),label:a._lang.label.name,type:e(i).inputs.text,maxlength:45,disabled:e(s)},null,8,["modelValue","label","type","disabled"]),C.value?(g(),y(m,{key:0,class:"mb-3 col-12 col-lg-4",modelValue:e(n).recordStateTypeIds,"onUpdate:modelValue":l[5]||(l[5]=t=>e(n).recordStateTypeIds=t),label:a._lang.label.state,type:e(i).inputs.multiselect,options:e(S),disabled:e(s),mode:e(i).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"])):v("",!0),a._isGuestLogged?v("",!0):(g(),y(m,{key:1,id:"active",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(n).active,"onUpdate:modelValue":l[6]||(l[6]=t=>e(n).active=t),label:a._lang.label.public,type:e(i).inputs.checkbox,disabled:e(s)},null,8,["modelValue","label","type","disabled"]))]),_:1})]),_:1},8,["title","disabled","loading"]),o(ce,null,{default:c(()=>[o(x,{onSort:h,onChangePage:j,selectedItems:e(I),"onUpdate:selectedItems":l[7]||(l[7]=t=>O(I)?I.value=t:I=t),unselectedItems:e(z),"onUpdate:unselectedItems":l[8]||(l[8]=t=>O(z)?z.value=t:z=t),selectedState:e(T),"onUpdate:selectedState":l[9]||(l[9]=t=>O(T)?T.value=t:T=t),data:e(B),checkbox:!1,loading:e(s),defaultSort:"OrganizationId",checkboxField:"organizationId"},{columns:c(()=>[o(p,{name:a._lang.label.code,field:"code",sortable:!0},null,8,["name"]),o(p,{name:a._lang.label.organizationTypeId,field:"organizationType",sortField:"organizationTypeId",sortable:!0},null,8,["name"]),o(p,{name:a._lang.label.abreviation,field:"abreviation",sortable:!0},null,8,["name"]),o(p,{name:a._lang.common.name,field:"name",sortable:!0},null,8,["name"]),o(p,{name:a._lang.label.parentOrganization,field:"organizationParent",sortField:"organizationParentId",sortable:!0},null,8,["name"]),o(p,{name:a._lang.common.state,field:"recordStateTypeId",align:e(i).columnAlign.center,custom:me,options:e(F),sortable:!0},null,8,["name","align","options"])]),actions:c(t=>[t.item.recordStateTypeId==e(i).recordStateType.draft?(g(),y(X,{key:0,onClick:te=>D(t.item)},null,8,["onClick"])):v("",!0),t.item.recordStateTypeId>e(i).recordStateType.draft?(g(),y(Z,{key:1,onClick:te=>G(t.item)},null,8,["onClick"])):v("",!0)]),_:1},8,["selectedItems","unselectedItems","selectedState","data","loading"])]),_:1})]),_:1})]),_:1},8,["title"]),o(ve,{action:H})],64)}}};export{Ee as default};
