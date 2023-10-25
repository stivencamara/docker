import{g as x,i as ee,K as ae,r as u,v as n,j as U,u as d,N as le,L as te,o as oe,k as ne,l as r,c as b,m as f,n as c,q as s,s as e,U as se,A as g,W as ie,J as A,M as de,B as E}from"./index-957232d9.js";import{p as F}from"./point-of-care-56093d40.js";import{u as re}from"./point-of-care-2b92d500.js";import{p as ce}from"./helpers-5a34c427.js";import{b as ue}from"./helpers-e58dedc6.js";import"./index.esm-b6709f5c.js";const Ie={__name:"index",setup(me){const T=x(),y=ee(),S=re(),L=ae();let i=u(!1),C=u([]),I=u([]),_=u(n.tableSelectedState.none),o=U(B()),v=u([]),w=u([]),z=u(d.createEmptyDataSource());U({});const V=u(le.havePermission(n.permissions.service.createEdit));function B(){return{pageNumber:1,sortBy:"Code",code:null,channelTypeIds:null,abreviation:null,name:null,organization:null,organizationHost:null,recordStateIds:[n.recordStateType.published],active:!0}}te(async()=>{i.value=!0,v.value=d.convertEnumToArray(y.enums.recordStateType);const a=await F.getLists(L.getLanguage);d.validateResponse(a,null,()=>{S.setLists(a.data),v.value=d.convertEnumToArray(y.enums.recordStateType),w.value=d.concatItemsBadge(v.value,ue.recordStateTypeBadgeOptions)}),i.value=!1}),oe(async()=>{await O()});function h(a){T.push({name:E.router.BACKOFFICE_EDIT_POINT_OF_CARE_PAGE.name,params:{pointOfCareId:d.encodeId(a.pointOfCareId),pointOfCareVersion:d.encodeId(a.pointOfCareVersion)}})}function N(a){T.push({name:E.router.BACKOFFICE_DETAIL_POINT_OF_CARE_PAGE.name,params:{pointOfCareId:d.encodeId(a.pointOfCareId),pointOfCareVersion:d.encodeId(a.pointOfCareVersion)}})}async function R(){Object.assign(o,B()),await P()}async function P(){o.pageNumber=1,await O()}async function M(){i.value=!0;const a=await F.create(ce.newForm());d.validateResponse(a,null,()=>{const t=d.encodeId(a.data.pointOfCareId),k=d.encodeId(a.data.pointOfCareVersion);T.push({name:E.router.BACKOFFICE_EDIT_POINT_OF_CARE_PAGE.name,params:{pointOfCareId:t,pointOfCareVersion:k}})}),i.value=!1}async function H(a){o.sortBy=a,await O()}async function D(a){o.pageNumber=a,await O()}async function O(){i.value=!0;let a=await F.search(o);d.validateResponse(a,null,()=>{z.value=a.data}),i.value=!1}const G=ne(()=>V.value?y.backoffice.pointOfCare.pageTitle:y.backoffice.pointOfCare.breadcrumbTitle);return(a,t)=>{const k=r("breadcrumb-item"),K=r("breadcrumb"),j=r("cbutton"),m=r("form-field"),W=r("row"),q=r("cfilter"),p=r("ccolumn"),J=r("table-action-edit"),Q=r("table-action-detail"),X=r("ctable"),Y=r("card"),Z=r("page");return b(),f(Z,{title:e(G)},{breadcrumb:c(()=>[s(K,{"has-home":!0},{default:c(()=>[s(k,{label:a._lang.backoffice.pointOfCare.breadcrumbTitle},null,8,["label"])]),_:1})]),actions:c(()=>[V.value?(b(),f(j,{key:0,class:"col-12 col-sm-auto",type:e(n).buttonType.secondary,size:e(n).buttonSize.medium,title:a._lang.common.toAdd,icon:se,onClick:M},null,8,["type","size","title"])):g("",!0)]),default:c(()=>[s(Y,{shadow:!0},{body:c(()=>[s(q,{title:a._lang.common.filter,disabled:e(i),"clear-click":R,"apply-click":P,loading:e(i),collapsed:!0},{default:c(()=>[s(W,null,{default:c(()=>[s(m,{id:"code",modelValue:e(o).code,"onUpdate:modelValue":t[0]||(t[0]=l=>e(o).code=l),class:"mb-3 col-12 col-md-6 col-lg-4",label:a._lang.label.code,type:e(n).inputs.text,maxlength:45,disabled:e(i)},null,8,["modelValue","label","type","disabled"]),s(m,{id:"channelTypeIds",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(o).channelTypeIds,"onUpdate:modelValue":t[1]||(t[1]=l=>e(o).channelTypeIds=l),label:a._lang.label.channelTypeId,type:e(n).inputs.multiselect,options:e(S).channelTypeList,disabled:e(i),mode:e(n).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"]),s(m,{id:"organization",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(o).organization,"onUpdate:modelValue":t[2]||(t[2]=l=>e(o).organization=l),label:a._lang.label.organizationHost,type:e(n).inputs.multiselect,options:e(S).organizationList,disabled:e(i),valueProp:e(n).multiselectValueProp.value3},null,8,["modelValue","label","type","options","disabled","valueProp"]),s(m,{id:"abreviation",class:"mb-3 col-12 col-lg-4",modelValue:e(o).abreviation,"onUpdate:modelValue":t[3]||(t[3]=l=>e(o).abreviation=l),label:a._lang.label.abreviation,type:e(n).inputs.text,maxlength:16,disabled:e(i)},null,8,["modelValue","label","type","disabled"]),s(m,{id:"name",class:"mb-3 col-12 col-md-8",modelValue:e(o).name,"onUpdate:modelValue":t[4]||(t[4]=l=>e(o).name=l),label:a._lang.label.name,type:e(n).inputs.text,maxlength:45,disabled:e(i)},null,8,["modelValue","label","type","disabled"]),V.value?(b(),f(m,{key:0,id:"recordStateIds",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(o).recordStateIds,"onUpdate:modelValue":t[5]||(t[5]=l=>e(o).recordStateIds=l),label:a._lang.label.state,type:e(n).inputs.multiselect,options:e(v),disabled:e(i),mode:e(n).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"])):g("",!0),a._isGuestLogged?g("",!0):(b(),f(m,{key:1,id:"active",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(o).active,"onUpdate:modelValue":t[6]||(t[6]=l=>e(o).active=l),label:a._lang.label.public,type:e(n).inputs.checkbox,disabled:e(i)},null,8,["modelValue","label","type","disabled"]))]),_:1})]),_:1},8,["title","disabled","loading"]),s(ie,null,{default:c(()=>[s(X,{onSort:H,onChangePage:D,selectedItems:e(C),"onUpdate:selectedItems":t[7]||(t[7]=l=>A(C)?C.value=l:C=l),unselectedItems:e(I),"onUpdate:unselectedItems":t[8]||(t[8]=l=>A(I)?I.value=l:I=l),selectedState:e(_),"onUpdate:selectedState":t[9]||(t[9]=l=>A(_)?_.value=l:_=l),data:e(z),checkbox:!1,loading:e(i),defaultSort:"pointOfCareId",checkboxField:"code"},{columns:c(()=>[s(p,{name:a._lang.label.code,field:"code",sortable:!0},null,8,["name"]),s(p,{name:a._lang.label.channelTypeId,field:"channelType",sortField:"channelTypeId",sortable:!0},null,8,["name"]),s(p,{name:a._lang.label.abreviation,field:"abreviation",sortable:!0},null,8,["name"]),s(p,{name:a._lang.label.name,field:"name",sortable:!0},null,8,["name"]),s(p,{name:a._lang.label.organizationHost,field:"organization",sortField:"organizationId",sortable:!0},null,8,["name"]),s(p,{name:a._lang.label.state,field:"recordStateTypeId",sortField:"recordStateTypeId",align:e(n).columnAlign.center,custom:de,options:e(w),sortable:!0},null,8,["name","align","options"])]),actions:c(l=>[l.item.recordStateTypeId===e(n).recordStateType.draft?(b(),f(J,{key:0,onClick:$=>h(l.item)},null,8,["onClick"])):g("",!0),l.item.recordStateTypeId>e(n).recordStateType.draft?(b(),f(Q,{key:1,onClick:$=>N(l.item)},null,8,["onClick"])):g("",!0)]),_:1},8,["selectedItems","unselectedItems","selectedState","data","loading"])]),_:1})]),_:1})]),_:1},8,["title"])}}};export{Ie as default};