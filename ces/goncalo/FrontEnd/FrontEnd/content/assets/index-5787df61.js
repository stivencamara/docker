import{g as te,i as le,J as oe,r as d,s,E as L,u as r,M as U,K as ne,o as ie,k as u,c as z,e as se,n as o,w as c,l as V,p as e,T as re,y as S,V as de,H as k,L as ue,F as ce,z as C}from"./index-cce4225b.js";import{o as O}from"./organization-92571876.js";import{i as me}from"./import-f25768fd.js";import{u as pe}from"./organization-d639dc73.js";import{b as ge}from"./helpers-2be1e0ad.js";import{o as be}from"./helpers-175176a0.js";import{_ as fe}from"./import-e802f007.js";import"./index.esm-840476f1.js";const Ce={__name:"index",setup(ye){const _=te(),N=le(),M=pe(),R=oe();d("import");let i=d(!1),f=d([]),y=d([]),v=d(s.tableSelectedState.none),n=L(B()),g=d([]),E=d([]),T=d([]),w=d(r.createEmptyDataSource()),A=d([]);L({});const D=d(U.havePermission(s.permissions.organization.createEdit));d(U.havePermission(s.permissions.parameter.createEdit));function B(){return{pageNumber:1,sortBy:"Code",organizationTypeIds:null,abreviation:null,parentOrganization:null,recordStateTypeIds:null,name:null,code:null,active:!0}}ne(async()=>{i.value=!0;const a=await O.getLists(R.getLanguage);r.validateResponse(a,null,()=>{M.setLists(a.data),g.value=[].concat(a.data.organizationRegionalPublicAdministrationTypeList).concat(a.data.organizationLocalAuthoritiesTypeList),g.value=r.removeDuplicateItemsOfArray(g.value),E.value=a.data.organizationList,r.sortArrayOffline("label asc",g.value),T.value=r.convertEnumToArray(N.enums.recordStateType),A.value=r.concatItemsBadge(T.value,ge.recordStateTypeBadgeOptions)}),i.value=!1}),ie(async()=>{await I()});function K(a){_.push({name:C.router.BACKOFFICE_EDIT_ENTITY_PAGE.name,params:{organizationId:r.encodeId(a.organizationId),organizationVersion:r.encodeId(a.organizationVersion)}})}function G(a){_.push({name:C.router.BACKOFFICE_DETAIL_ENTITY_PAGE.name,params:{organizationId:r.encodeId(a.organizationId),organizationVersion:r.encodeId(a.organizationVersion)}})}async function H(){Object.assign(n,B()),await F()}async function F(){n.pageNumber=1,await I()}async function Y(){i.value=!0;const a=await O.create(be.newForm());r.validateResponse(a,null,()=>{const l=r.encodeId(a.data.organizationId),b=r.encodeId(a.data.organizationVersion);_.push({name:C.router.BACKOFFICE_EDIT_ENTITY_PAGE.name,params:{organizationId:l,organizationVersion:b}})}),i.value=!1}async function h(a){n.sortBy=a,await I()}async function j(a){n.pageNumber=a,await I()}async function I(){i.value=!0;let a=await O.search(n);r.validateResponse(a,null,()=>{w.value=a.data}),i.value=!1}async function J(a){i.value=!0;let l={data:a.value.data,name:a.value.name},b=await me.organization(l);r.validateResponse(b,null,()=>{}),i.value=!1}return(a,l)=>{const b=u("breadcrumb-item"),W=u("breadcrumb"),$=u("cbutton"),m=u("form-field"),P=u("row"),q=u("cfilter"),p=u("ccolumn"),Q=u("table-action-edit"),X=u("table-action-detail"),Z=u("ctable"),x=u("card"),ee=u("page");return z(),se(ce,null,[o(ee,{title:a._lang.backoffice.entities.pageTitle},{breadcrumb:c(()=>[o(W,{"has-home":!0},{default:c(()=>[o(b,{label:a._lang.backoffice.entities.breadcrumbTitle},null,8,["label"])]),_:1})]),actions:c(()=>[D.value?(z(),V($,{key:0,class:"col-12 col-sm-auto",type:e(s).buttonType.secondary,size:e(s).buttonSize.medium,title:a._lang.common.toAdd,icon:re,onClick:Y},null,8,["type","size","title"])):S("",!0)]),default:c(()=>[o(x,{shadow:!0},{body:c(()=>[o(q,{title:a._lang.common.filter,disabled:e(i),"clear-click":H,"apply-click":F,loading:e(i),collapsed:!0},{default:c(()=>[o(P,null,{default:c(()=>[o(m,{id:"code",modelValue:e(n).code,"onUpdate:modelValue":l[0]||(l[0]=t=>e(n).code=t),class:"mb-3 col-12 col-md-6 col-lg-4",label:a._lang.label.code,type:e(s).inputs.text,maxlength:45,disabled:e(i)},null,8,["modelValue","label","type","disabled"]),o(m,{class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(n).organizationTypeIds,"onUpdate:modelValue":l[1]||(l[1]=t=>e(n).organizationTypeIds=t),label:a._lang.label.organizationTypeId,type:e(s).inputs.multiselect,options:e(g),disabled:e(i),mode:e(s).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"]),o(m,{class:"mb-3 col-12 col-lg-4",modelValue:e(n).abreviation,"onUpdate:modelValue":l[2]||(l[2]=t=>e(n).abreviation=t),label:a._lang.label.abreviation,type:e(s).inputs.text,maxlength:16,disabled:e(i)},null,8,["modelValue","label","type","disabled"])]),_:1}),o(P,null,{default:c(()=>[o(m,{class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(n).name,"onUpdate:modelValue":l[3]||(l[3]=t=>e(n).name=t),label:a._lang.label.name,type:e(s).inputs.text,maxlength:45,disabled:e(i)},null,8,["modelValue","label","type","disabled"]),o(m,{class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(n).parentOrganization,"onUpdate:modelValue":l[4]||(l[4]=t=>e(n).parentOrganization=t),label:a._lang.label.parentOrganization,type:e(s).inputs.multiselect,options:e(E),disabled:e(i),valueProp:e(s).multiselectValueProp.value3},null,8,["modelValue","label","type","options","disabled","valueProp"]),o(m,{class:"mb-3 col-12 col-lg-4",modelValue:e(n).recordStateTypeIds,"onUpdate:modelValue":l[5]||(l[5]=t=>e(n).recordStateTypeIds=t),label:a._lang.label.state,type:e(s).inputs.multiselect,options:e(T),disabled:e(i),mode:e(s).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"]),o(m,{id:"active",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(n).active,"onUpdate:modelValue":l[6]||(l[6]=t=>e(n).active=t),label:a._lang.label.active,type:e(s).inputs.checkbox,disabled:e(i)},null,8,["modelValue","label","type","disabled"])]),_:1})]),_:1},8,["title","disabled","loading"]),o(de,null,{default:c(()=>[o(Z,{onSort:h,onChangePage:j,selectedItems:e(f),"onUpdate:selectedItems":l[7]||(l[7]=t=>k(f)?f.value=t:f=t),unselectedItems:e(y),"onUpdate:unselectedItems":l[8]||(l[8]=t=>k(y)?y.value=t:y=t),selectedState:e(v),"onUpdate:selectedState":l[9]||(l[9]=t=>k(v)?v.value=t:v=t),data:e(w),checkbox:!1,loading:e(i),defaultSort:"OrganizationId",checkboxField:"organizationId"},{columns:c(()=>[o(p,{name:a._lang.label.code,field:"code",sortable:!0},null,8,["name"]),o(p,{name:a._lang.label.organizationTypeId,field:"organizationType",sortField:"organizationTypeId",sortable:!0},null,8,["name"]),o(p,{name:a._lang.label.abreviation,field:"abreviation",sortable:!0},null,8,["name"]),o(p,{name:a._lang.common.name,field:"name",sortable:!0},null,8,["name"]),o(p,{name:a._lang.label.parentOrganization,field:"organizationParent",sortField:"organizationParentId",sortable:!0},null,8,["name"]),o(p,{name:a._lang.common.state,field:"recordStateTypeId",align:e(s).columnAlign.center,custom:ue,options:e(A),sortable:!0},null,8,["name","align","options"])]),actions:c(t=>[t.item.recordStateTypeId==e(s).recordStateType.draft?(z(),V(Q,{key:0,onClick:ae=>K(t.item)},null,8,["onClick"])):S("",!0),t.item.recordStateTypeId>e(s).recordStateType.draft?(z(),V(X,{key:1,onClick:ae=>G(t.item)},null,8,["onClick"])):S("",!0)]),_:1},8,["selectedItems","unselectedItems","selectedState","data","loading"])]),_:1})]),_:1})]),_:1},8,["title"]),o(fe,{action:J})],64)}}};export{Ce as default};
