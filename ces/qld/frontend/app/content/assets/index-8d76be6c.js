import{s as oe,z as le,I as ne,r as u,i,a as L,u as d,U as ie,J as se,n as re,b as r,o as I,l as z,w as c,e as o,g as e,S as de,B as S,C as ce,V as ue,D as C,K as me,x as k}from"./index-5b4ebf84.js";import{o as O}from"./organization-acc3daab.js";import{u as pe}from"./organization-cd538fe2.js";import{b as be}from"./helpers-4796f1a9.js";import{o as ge}from"./helpers-991a1d67.js";import"./index.esm-85573352.js";const Ve={__name:"index",setup(ye){const v=oe(),A=le(),N=pe(),D=ne();let s=u(!1),g=u([]),y=u([]),f=u(i.tableSelectedState.none),n=L(P()),b=u([]),E=u([]),T=u([]),w=u(d.createEmptyDataSource()),B=u([]);L({});const M=u(ie.havePermission(i.permissions.organization.createEdit));function P(){return{pageNumber:1,sortBy:"Code",organizationTypeIds:null,abreviation:null,parentOrganization:null,recordStateTypeIds:null,name:null,code:null,active:!0}}se(async()=>{s.value=!0;const a=await O.getLists(D.getLanguage);d.validateResponse(a,null,()=>{N.setLists(a.data),b.value=[].concat(a.data.organizationRegionalPublicAdministrationTypeList).concat(a.data.organizationLocalAuthoritiesTypeList),b.value=d.removeDuplicateItemsOfArray(b.value),E.value=a.data.organizationList,d.sortArrayOffline("label asc",b.value),T.value=d.convertEnumToArray(A.enums.recordStateType),B.value=d.concatItemsBadge(T.value,be.recordStateTypeBadgeOptions)}),s.value=!1}),re(async()=>{await _()});function R(a){v.push({name:k.router.BACKOFFICE_EDIT_ENTITY_PAGE.name,params:{organizationId:d.encodeId(a.organizationId),organizationVersion:d.encodeId(a.organizationVersion)}})}function K(a){v.push({name:k.router.BACKOFFICE_DETAIL_ENTITY_PAGE.name,params:{organizationId:d.encodeId(a.organizationId),organizationVersion:d.encodeId(a.organizationVersion)}})}async function G(){Object.assign(n,P()),await F()}async function F(){n.pageNumber=1,await _()}async function Y(){s.value=!0;const a=await O.create(ge.newForm());d.validateResponse(a,null,()=>{const l=d.encodeId(a.data.organizationId),V=d.encodeId(a.data.organizationVersion);v.push({name:k.router.BACKOFFICE_EDIT_ENTITY_PAGE.name,params:{organizationId:l,organizationVersion:V}})}),s.value=!1}async function H(a){n.sortBy=a,await _()}async function $(a){n.pageNumber=a,await _()}async function _(){s.value=!0;let a=await O.search(n);d.validateResponse(a,null,()=>{w.value=a.data}),s.value=!1}return(a,l)=>{const V=r("breadcrumb-item"),j=r("breadcrumb"),J=r("cbutton"),m=r("form-field"),U=r("row"),W=r("cfilter"),h=r("icon-import"),q=r("cbutton-options"),Q=r("table-actions"),p=r("ccolumn"),X=r("table-action-edit"),Z=r("table-action-detail"),x=r("ctable"),ee=r("card"),ae=r("page");return I(),z(ae,{title:a._lang.backoffice.entities.pageTitle},{breadcrumb:c(()=>[o(j,{"has-home":!0},{default:c(()=>[o(V,{label:a._lang.backoffice.entities.breadcrumbTitle},null,8,["label"])]),_:1})]),actions:c(()=>[M.value?(I(),z(J,{key:0,class:"col-12 col-sm-auto",type:e(i).buttonType.secondary,size:e(i).buttonSize.medium,title:a._lang.common.toAdd,icon:de,onClick:Y},null,8,["type","size","title"])):S("",!0)]),default:c(()=>[o(ee,{shadow:!0},{body:c(()=>[o(W,{title:a._lang.common.filter,disabled:e(s),"clear-click":G,"apply-click":F,loading:e(s),collapsed:!0},{default:c(()=>[o(U,null,{default:c(()=>[o(m,{id:"code",modelValue:e(n).code,"onUpdate:modelValue":l[0]||(l[0]=t=>e(n).code=t),class:"mb-3 col-12 col-md-6 col-lg-4",label:a._lang.label.code,type:e(i).inputs.text,maxlength:45,disabled:e(s)},null,8,["modelValue","label","type","disabled"]),o(m,{class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(n).organizationTypeIds,"onUpdate:modelValue":l[1]||(l[1]=t=>e(n).organizationTypeIds=t),label:a._lang.label.organizationTypeId,type:e(i).inputs.multiselect,options:e(b),disabled:e(s),mode:e(i).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"]),o(m,{class:"mb-3 col-12 col-lg-4",modelValue:e(n).abreviation,"onUpdate:modelValue":l[2]||(l[2]=t=>e(n).abreviation=t),label:a._lang.label.abreviation,type:e(i).inputs.text,maxlength:16,disabled:e(s)},null,8,["modelValue","label","type","disabled"])]),_:1}),o(U,null,{default:c(()=>[o(m,{class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(n).name,"onUpdate:modelValue":l[3]||(l[3]=t=>e(n).name=t),label:a._lang.label.name,type:e(i).inputs.text,maxlength:45,disabled:e(s)},null,8,["modelValue","label","type","disabled"]),o(m,{class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(n).parentOrganization,"onUpdate:modelValue":l[4]||(l[4]=t=>e(n).parentOrganization=t),label:a._lang.label.parentOrganization,type:e(i).inputs.multiselect,options:e(E),disabled:e(s),valueProp:e(i).multiselectValueProp.value3},null,8,["modelValue","label","type","options","disabled","valueProp"]),o(m,{class:"mb-3 col-12 col-lg-4",modelValue:e(n).recordStateTypeIds,"onUpdate:modelValue":l[5]||(l[5]=t=>e(n).recordStateTypeIds=t),label:a._lang.label.state,type:e(i).inputs.multiselect,options:e(T),disabled:e(s),mode:e(i).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"]),o(m,{id:"active",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(n).active,"onUpdate:modelValue":l[6]||(l[6]=t=>e(n).active=t),label:a._lang.label.active,type:e(i).inputs.checkbox,disabled:e(s)},null,8,["modelValue","label","type","disabled"])]),_:1})]),_:1},8,["title","disabled","loading"]),o(ce,null,{default:c(()=>[o(Q,{title:a._lang.common.tableActionTitle},{default:c(()=>[o(q,{type:e(i).buttonType.secondary},{default:c(()=>[o(ue,{title:e(A).common.import},{default:c(()=>[o(h,{color:"#002D74"})]),_:1},8,["title"])]),_:1},8,["type"])]),_:1},8,["title"]),o(x,{onSort:H,onChangePage:$,selectedItems:e(g),"onUpdate:selectedItems":l[7]||(l[7]=t=>C(g)?g.value=t:g=t),unselectedItems:e(y),"onUpdate:unselectedItems":l[8]||(l[8]=t=>C(y)?y.value=t:y=t),selectedState:e(f),"onUpdate:selectedState":l[9]||(l[9]=t=>C(f)?f.value=t:f=t),data:e(w),checkbox:!0,loading:e(s),defaultSort:"OrganizationId",checkboxField:"organizationId"},{columns:c(()=>[o(p,{name:a._lang.label.code,field:"code",sortable:!0},null,8,["name"]),o(p,{name:a._lang.label.organizationTypeId,field:"organizationType",sortField:"organizationTypeId",sortable:!0},null,8,["name"]),o(p,{name:a._lang.label.abreviation,field:"abreviation",sortable:!0},null,8,["name"]),o(p,{name:a._lang.common.name,field:"name",sortable:!0},null,8,["name"]),o(p,{name:a._lang.label.parentOrganization,field:"organizationParent",sortField:"organizationParentId",sortable:!0},null,8,["name"]),o(p,{name:a._lang.common.state,field:"recordStateTypeId",align:e(i).columnAlign.center,custom:me,options:e(B),sortable:!0},null,8,["name","align","options"])]),actions:c(t=>[t.item.recordStateTypeId==e(i).recordStateType.draft?(I(),z(X,{key:0,onClick:te=>R(t.item)},null,8,["onClick"])):S("",!0),t.item.recordStateTypeId>e(i).recordStateType.draft?(I(),z(Z,{key:1,onClick:te=>K(t.item)},null,8,["onClick"])):S("",!0)]),_:1},8,["selectedItems","unselectedItems","selectedState","data","loading"])]),_:1})]),_:1})]),_:1},8,["title"])}}};export{Ve as default};
