import{n as A,q,D as de,i as u,r,o as S,c as k,w as c,a as t,m as e,z as O,v as s,h as ce,J as ue,s as K,j as d,M as me,K as pe,b as be,e as ge,S as fe,y as F,U as ye,V as _e,L as ve,F as ze,l as B}from"./index-d8a56bcc.js";import{o as P}from"./organization-7b90e5ff.js";import{u as Ie}from"./organization-cca91f92.js";import{b as Te}from"./helpers-d89764d1.js";import{o as Ve}from"./helpers-1cb82c85.js";import"./index.esm-d77c3574.js";const Se={get:m=>A.get(`/import/${m}`),organization:m=>A.put("/import/organization",m),location:m=>A.put("/report/location",m)},Ce={__name:"import",props:{id:{String,default:"import"},action:{Function,required:!0}},setup(m){const p=m;q(),de();let T=u(!1),b=u(null);function E(){p.action(b)}return(y,i)=>{const _=r("form-field"),g=r("cbutton"),v=r("modal");return S(),k(v,{id:p.id,title:y._lang.common.submit,size:e(s).modalSize.large},{body:c(()=>[t(_,{id:"document",class:"mb-3 col-12",modelValue:e(b),"onUpdate:modelValue":i[0]||(i[0]=n=>O(b)?b.value=n:b=n),label:y._lang.label.document,disabled:p.disabled,loading:p.loading,type:e(s).inputs.file,required:!0},null,8,["modelValue","label","disabled","loading","type"])]),footer:c(()=>[t(g,{title:y._lang.common.cancel,type:e(s).buttonType.secondary,"data-bs-dismiss":"modal","aria-label":"Close",disabled:e(T)},null,8,["title","type","disabled"]),t(g,{title:y._lang.common.import,onClick:E,disabled:e(T)||e(b)==null,"data-bs-dismiss":"modal","aria-label":"Close"},null,8,["title","disabled"])]),_:1},8,["id","title","size"])}}},Be={__name:"index",setup(m){const p=ce(),T=q(),b=Ie(),E=ue();let y=u("import"),i=u(!1),_=u([]),g=u([]),v=u(s.tableSelectedState.none),n=K(N()),V=u([]),U=u([]),w=u([]),L=u(d.createEmptyDataSource()),M=u([]);K({});const G=u(me.havePermission(s.permissions.organization.createEdit));function N(){return{pageNumber:1,sortBy:"Code",organizationTypeIds:null,abreviation:null,parentOrganization:null,recordStateTypeIds:null,name:null,code:null,active:!0}}pe(async()=>{i.value=!0;const a=await P.getLists(E.getLanguage);d.validateResponse(a,null,()=>{b.setLists(a.data),V.value=[].concat(a.data.organizationRegionalPublicAdministrationTypeList).concat(a.data.organizationLocalAuthoritiesTypeList),V.value=d.removeDuplicateItemsOfArray(V.value),U.value=a.data.organizationList,d.sortArrayOffline("label asc",V.value),w.value=d.convertEnumToArray(T.enums.recordStateType),M.value=d.concatItemsBadge(w.value,Te.recordStateTypeBadgeOptions)}),i.value=!1}),be(async()=>{await C()});function Y(a){p.push({name:B.router.BACKOFFICE_EDIT_ENTITY_PAGE.name,params:{organizationId:d.encodeId(a.organizationId),organizationVersion:d.encodeId(a.organizationVersion)}})}function $(a){p.push({name:B.router.BACKOFFICE_DETAIL_ENTITY_PAGE.name,params:{organizationId:d.encodeId(a.organizationId),organizationVersion:d.encodeId(a.organizationVersion)}})}async function j(){Object.assign(n,N()),await D()}async function D(){n.pageNumber=1,await C()}async function H(){i.value=!0;const a=await P.create(Ve.newForm());d.validateResponse(a,null,()=>{const l=d.encodeId(a.data.organizationId),z=d.encodeId(a.data.organizationVersion);p.push({name:B.router.BACKOFFICE_EDIT_ENTITY_PAGE.name,params:{organizationId:l,organizationVersion:z}})}),i.value=!1}async function h(a){n.sortBy=a,await C()}async function J(a){n.pageNumber=a,await C()}async function C(){i.value=!0;let a=await P.search(n);d.validateResponse(a,null,()=>{L.value=a.data}),i.value=!1}function W(){d.showModalById(y.value)}async function Q(a){console.log(a.value),i.value=!0;let l={data:a.value.data,name:a.value.name},z=await Se.organization(l);d.validateResponse(z,null,()=>{console.log(z)}),i.value=!1}return(a,l)=>{const z=r("breadcrumb-item"),X=r("breadcrumb"),Z=r("cbutton"),f=r("form-field"),R=r("row"),x=r("cfilter"),ee=r("icon-import"),ae=r("cbutton-options"),te=r("table-actions"),I=r("ccolumn"),oe=r("table-action-edit"),le=r("table-action-detail"),ne=r("ctable"),ie=r("card"),se=r("page");return S(),ge(ze,null,[t(se,{title:a._lang.backoffice.entities.pageTitle},{breadcrumb:c(()=>[t(X,{"has-home":!0},{default:c(()=>[t(z,{label:a._lang.backoffice.entities.breadcrumbTitle},null,8,["label"])]),_:1})]),actions:c(()=>[G.value?(S(),k(Z,{key:0,class:"col-12 col-sm-auto",type:e(s).buttonType.secondary,size:e(s).buttonSize.medium,title:a._lang.common.toAdd,icon:fe,onClick:H},null,8,["type","size","title"])):F("",!0)]),default:c(()=>[t(ie,{shadow:!0},{body:c(()=>[t(x,{title:a._lang.common.filter,disabled:e(i),"clear-click":j,"apply-click":D,loading:e(i),collapsed:!0},{default:c(()=>[t(R,null,{default:c(()=>[t(f,{id:"code",modelValue:e(n).code,"onUpdate:modelValue":l[0]||(l[0]=o=>e(n).code=o),class:"mb-3 col-12 col-md-6 col-lg-4",label:a._lang.label.code,type:e(s).inputs.text,maxlength:45,disabled:e(i)},null,8,["modelValue","label","type","disabled"]),t(f,{class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(n).organizationTypeIds,"onUpdate:modelValue":l[1]||(l[1]=o=>e(n).organizationTypeIds=o),label:a._lang.label.organizationTypeId,type:e(s).inputs.multiselect,options:e(V),disabled:e(i),mode:e(s).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"]),t(f,{class:"mb-3 col-12 col-lg-4",modelValue:e(n).abreviation,"onUpdate:modelValue":l[2]||(l[2]=o=>e(n).abreviation=o),label:a._lang.label.abreviation,type:e(s).inputs.text,maxlength:16,disabled:e(i)},null,8,["modelValue","label","type","disabled"])]),_:1}),t(R,null,{default:c(()=>[t(f,{class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(n).name,"onUpdate:modelValue":l[3]||(l[3]=o=>e(n).name=o),label:a._lang.label.name,type:e(s).inputs.text,maxlength:45,disabled:e(i)},null,8,["modelValue","label","type","disabled"]),t(f,{class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(n).parentOrganization,"onUpdate:modelValue":l[4]||(l[4]=o=>e(n).parentOrganization=o),label:a._lang.label.parentOrganization,type:e(s).inputs.multiselect,options:e(U),disabled:e(i),valueProp:e(s).multiselectValueProp.value3},null,8,["modelValue","label","type","options","disabled","valueProp"]),t(f,{class:"mb-3 col-12 col-lg-4",modelValue:e(n).recordStateTypeIds,"onUpdate:modelValue":l[5]||(l[5]=o=>e(n).recordStateTypeIds=o),label:a._lang.label.state,type:e(s).inputs.multiselect,options:e(w),disabled:e(i),mode:e(s).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"]),t(f,{id:"active",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(n).active,"onUpdate:modelValue":l[6]||(l[6]=o=>e(n).active=o),label:a._lang.label.active,type:e(s).inputs.checkbox,disabled:e(i)},null,8,["modelValue","label","type","disabled"])]),_:1})]),_:1},8,["title","disabled","loading"]),t(ye,null,{default:c(()=>[t(te,{title:a._lang.common.tableActionTitle},{default:c(()=>[t(ae,{type:e(s).buttonType.secondary},{default:c(()=>[t(_e,{title:e(T).common.import,onClick:W},{default:c(()=>[t(ee,{color:"#002D74"})]),_:1},8,["title"])]),_:1},8,["type"])]),_:1},8,["title"]),t(ne,{onSort:h,onChangePage:J,selectedItems:e(_),"onUpdate:selectedItems":l[7]||(l[7]=o=>O(_)?_.value=o:_=o),unselectedItems:e(g),"onUpdate:unselectedItems":l[8]||(l[8]=o=>O(g)?g.value=o:g=o),selectedState:e(v),"onUpdate:selectedState":l[9]||(l[9]=o=>O(v)?v.value=o:v=o),data:e(L),checkbox:!1,loading:e(i),defaultSort:"OrganizationId",checkboxField:"organizationId"},{columns:c(()=>[t(I,{name:a._lang.label.code,field:"code",sortable:!0},null,8,["name"]),t(I,{name:a._lang.label.organizationTypeId,field:"organizationType",sortField:"organizationTypeId",sortable:!0},null,8,["name"]),t(I,{name:a._lang.label.abreviation,field:"abreviation",sortable:!0},null,8,["name"]),t(I,{name:a._lang.common.name,field:"name",sortable:!0},null,8,["name"]),t(I,{name:a._lang.label.parentOrganization,field:"organizationParent",sortField:"organizationParentId",sortable:!0},null,8,["name"]),t(I,{name:a._lang.common.state,field:"recordStateTypeId",align:e(s).columnAlign.center,custom:ve,options:e(M),sortable:!0},null,8,["name","align","options"])]),actions:c(o=>[o.item.recordStateTypeId==e(s).recordStateType.draft?(S(),k(oe,{key:0,onClick:re=>Y(o.item)},null,8,["onClick"])):F("",!0),o.item.recordStateTypeId>e(s).recordStateType.draft?(S(),k(le,{key:1,onClick:re=>$(o.item)},null,8,["onClick"])):F("",!0)]),_:1},8,["selectedItems","unselectedItems","selectedState","data","loading"])]),_:1})]),_:1})]),_:1},8,["title"]),t(Ce,{action:Q})],64)}}};export{Be as default};