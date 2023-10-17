import{g as le,i as oe,K as ne,r as d,t as i,H as N,u as r,N as M,L as ie,o as se,j as re,k as u,c as f,e as de,p as o,m as c,l as _,q as e,U as ue,z as T,W as ce,J as O,M as me,F as pe,A as E}from"./index-46c4d077.js";import{o as A}from"./organization-0ee02cff.js";import{i as ge}from"./import-7463339e.js";import{u as be}from"./organization-24fa2b68.js";import{b as fe}from"./helpers-27fc0e50.js";import{o as ye}from"./helpers-9ae9e9ac.js";import{_ as ve}from"./import-1b9b5ed3.js";import"./index.esm-b6ca17d6.js";const Ee={__name:"index",setup(Ie){const V=le(),S=oe(),R=be(),D=ne();d("import");let s=d(!1),y=d([]),v=d([]),I=d(i.tableSelectedState.none),n=N(P()),g=d([]),w=d([]),k=d([]),B=d(r.createEmptyDataSource()),F=d([]);N({});const C=d(M.havePermission(i.permissions.organization.createEdit));d(M.havePermission(i.permissions.parameter.createEdit));function P(){return{pageNumber:1,sortBy:"Code",organizationTypeIds:null,abreviation:null,parentOrganization:null,recordStateTypeIds:[i.recordStateType.published],name:null,code:null,active:!0}}ie(async()=>{s.value=!0;const a=await A.getLists(D.getLanguage);r.validateResponse(a,null,()=>{R.setLists(a.data),g.value=[].concat(a.data.organizationRegionalPublicAdministrationTypeList).concat(a.data.organizationLocalAuthoritiesTypeList),g.value=r.removeDuplicateItemsOfArray(g.value),w.value=a.data.organizationList,r.sortArrayOffline("label asc",g.value),k.value=r.convertEnumToArray(S.enums.recordStateType),F.value=r.concatItemsBadge(k.value,fe.recordStateTypeBadgeOptions)}),s.value=!1}),se(async()=>{await z()});function K(a){V.push({name:E.router.BACKOFFICE_EDIT_ENTITY_PAGE.name,params:{organizationId:r.encodeId(a.organizationId),organizationVersion:r.encodeId(a.organizationVersion)}})}function G(a){V.push({name:E.router.BACKOFFICE_DETAIL_ENTITY_PAGE.name,params:{organizationId:r.encodeId(a.organizationId),organizationVersion:r.encodeId(a.organizationVersion)}})}async function H(){Object.assign(n,P()),await L()}async function L(){n.pageNumber=1,await z()}async function Y(){s.value=!0;const a=await A.create(ye.newForm());r.validateResponse(a,null,()=>{const l=r.encodeId(a.data.organizationId),b=r.encodeId(a.data.organizationVersion);V.push({name:E.router.BACKOFFICE_EDIT_ENTITY_PAGE.name,params:{organizationId:l,organizationVersion:b}})}),s.value=!1}async function h(a){n.sortBy=a,await z()}async function j(a){n.pageNumber=a,await z()}async function z(){s.value=!0;let a=await A.search(n);r.validateResponse(a,null,()=>{B.value=a.data}),s.value=!1}async function W(a){s.value=!0;let l={data:a.value.data,name:a.value.name},b=await ge.organization(l);r.validateResponse(b,null,()=>{}),s.value=!1}const q=re(()=>C.value?S.backoffice.entities.pageTitle:S.backoffice.entities.breadcrumbTitle);return(a,l)=>{const b=u("breadcrumb-item"),J=u("breadcrumb"),$=u("cbutton"),m=u("form-field"),U=u("row"),Q=u("cfilter"),p=u("ccolumn"),X=u("table-action-edit"),Z=u("table-action-detail"),x=u("ctable"),ee=u("card"),ae=u("page");return f(),de(pe,null,[o(ae,{title:e(q)},{breadcrumb:c(()=>[o(J,{"has-home":!0},{default:c(()=>[o(b,{label:a._lang.backoffice.entities.breadcrumbTitle},null,8,["label"])]),_:1})]),actions:c(()=>[C.value?(f(),_($,{key:0,class:"col-12 col-sm-auto",type:e(i).buttonType.secondary,size:e(i).buttonSize.medium,title:a._lang.common.toAdd,icon:ue,onClick:Y},null,8,["type","size","title"])):T("",!0)]),default:c(()=>[o(ee,{shadow:!0},{body:c(()=>[o(Q,{title:a._lang.common.filter,disabled:e(s),"clear-click":H,"apply-click":L,loading:e(s),collapsed:!0},{default:c(()=>[o(U,null,{default:c(()=>[o(m,{id:"code",modelValue:e(n).code,"onUpdate:modelValue":l[0]||(l[0]=t=>e(n).code=t),class:"mb-3 col-12 col-md-6 col-lg-4",label:a._lang.label.code,type:e(i).inputs.text,maxlength:45,disabled:e(s)},null,8,["modelValue","label","type","disabled"]),o(m,{class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(n).organizationTypeIds,"onUpdate:modelValue":l[1]||(l[1]=t=>e(n).organizationTypeIds=t),label:a._lang.label.organizationTypeId,type:e(i).inputs.multiselect,options:e(g),disabled:e(s),mode:e(i).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"]),o(m,{class:"mb-3 col-12 col-lg-4",modelValue:e(n).abreviation,"onUpdate:modelValue":l[2]||(l[2]=t=>e(n).abreviation=t),label:a._lang.label.abreviation,type:e(i).inputs.text,maxlength:16,disabled:e(s)},null,8,["modelValue","label","type","disabled"])]),_:1}),o(U,null,{default:c(()=>[o(m,{class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(n).name,"onUpdate:modelValue":l[3]||(l[3]=t=>e(n).name=t),label:a._lang.label.name,type:e(i).inputs.text,maxlength:45,disabled:e(s)},null,8,["modelValue","label","type","disabled"]),o(m,{class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(n).parentOrganization,"onUpdate:modelValue":l[4]||(l[4]=t=>e(n).parentOrganization=t),label:a._lang.label.parentOrganization,type:e(i).inputs.multiselect,options:e(w),disabled:e(s),valueProp:e(i).multiselectValueProp.value3},null,8,["modelValue","label","type","options","disabled","valueProp"]),C.value?(f(),_(m,{key:0,class:"mb-3 col-12 col-lg-4",modelValue:e(n).recordStateTypeIds,"onUpdate:modelValue":l[5]||(l[5]=t=>e(n).recordStateTypeIds=t),label:a._lang.label.state,type:e(i).inputs.multiselect,options:e(k),disabled:e(s),mode:e(i).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"])):T("",!0),o(m,{id:"active",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(n).active,"onUpdate:modelValue":l[6]||(l[6]=t=>e(n).active=t),label:a._lang.label.public,type:e(i).inputs.checkbox,disabled:e(s)},null,8,["modelValue","label","type","disabled"])]),_:1})]),_:1},8,["title","disabled","loading"]),o(ce,null,{default:c(()=>[o(x,{onSort:h,onChangePage:j,selectedItems:e(y),"onUpdate:selectedItems":l[7]||(l[7]=t=>O(y)?y.value=t:y=t),unselectedItems:e(v),"onUpdate:unselectedItems":l[8]||(l[8]=t=>O(v)?v.value=t:v=t),selectedState:e(I),"onUpdate:selectedState":l[9]||(l[9]=t=>O(I)?I.value=t:I=t),data:e(B),checkbox:!1,loading:e(s),defaultSort:"OrganizationId",checkboxField:"organizationId"},{columns:c(()=>[o(p,{name:a._lang.label.code,field:"code",sortable:!0},null,8,["name"]),o(p,{name:a._lang.label.organizationTypeId,field:"organizationType",sortField:"organizationTypeId",sortable:!0},null,8,["name"]),o(p,{name:a._lang.label.abreviation,field:"abreviation",sortable:!0},null,8,["name"]),o(p,{name:a._lang.common.name,field:"name",sortable:!0},null,8,["name"]),o(p,{name:a._lang.label.parentOrganization,field:"organizationParent",sortField:"organizationParentId",sortable:!0},null,8,["name"]),o(p,{name:a._lang.common.state,field:"recordStateTypeId",align:e(i).columnAlign.center,custom:me,options:e(F),sortable:!0},null,8,["name","align","options"])]),actions:c(t=>[t.item.recordStateTypeId==e(i).recordStateType.draft?(f(),_(X,{key:0,onClick:te=>K(t.item)},null,8,["onClick"])):T("",!0),t.item.recordStateTypeId>e(i).recordStateType.draft?(f(),_(Z,{key:1,onClick:te=>G(t.item)},null,8,["onClick"])):T("",!0)]),_:1},8,["selectedItems","unselectedItems","selectedState","data","loading"])]),_:1})]),_:1})]),_:1},8,["title"]),o(ve,{action:W})],64)}}};export{Ee as default};