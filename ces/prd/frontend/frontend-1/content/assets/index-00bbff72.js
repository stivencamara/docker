import{g as Z,i as $,M as x,X as ee,r as m,v as r,u as s,j as ae,P as te,N as oe,o as le,k as ne,l as d,c as b,m as f,n as c,q as n,s as e,V as re,A as C,Y as ie,L as k,O as se,C as h}from"./index-864107e7.js";import{p as A}from"./point-of-care-37f973a8.js";import{u as de}from"./point-of-care-ecde6227.js";import{p as ce}from"./helpers-33459f07.js";import{b as me}from"./helpers-e3e3ab9f.js";import"./index.esm-bc117818.js";const Oe={__name:"index",setup(ue){const v=Z(),g=$(),F=de(),z=x(),l=ee();let i=m(!1),y=m([]),O=m([]),S=m(r.tableSelectedState.none),I=m([]),E=m([]),P=m(s.createEmptyDataSource());ae({});const T=m(te.havePermission(r.permissions.service.createEdit));oe(async()=>{i.value=!0,I.value=s.convertEnumToArray(g.enums.recordStateType);const a=await A.getLists(z.getLanguage);s.validateResponse(a,null,()=>{F.setLists(a.data),I.value=s.convertEnumToArray(g.enums.recordStateType),E.value=s.concatItemsBadge(I.value,me.recordStateTypeBadgeOptions)}),i.value=!1}),le(async()=>{await _()});function B(a){v.push({name:h.router.BACKOFFICE_EDIT_POINT_OF_CARE_PAGE.name,params:{pointOfCareId:s.encodeId(a.pointOfCareId),pointOfCareVersion:s.encodeId(a.pointOfCareVersion)}})}function L(a){v.push({name:h.router.BACKOFFICE_DETAIL_POINT_OF_CARE_PAGE.name,params:{pointOfCareId:s.encodeId(a.pointOfCareId),pointOfCareVersion:s.encodeId(a.pointOfCareVersion)}})}async function U(){l.resetPointOfCareSearchForm(),await w()}async function w(){l.pointOfCareSearchForm.pageNumber=1,await _()}async function N(){i.value=!0;const a=await A.create(ce.newForm());s.validateResponse(a,null,()=>{const o=s.encodeId(a.data.pointOfCareId),V=s.encodeId(a.data.pointOfCareVersion);v.push({name:h.router.BACKOFFICE_EDIT_POINT_OF_CARE_PAGE.name,params:{pointOfCareId:o,pointOfCareVersion:V}})}),i.value=!1}async function R(a){l.pointOfCareSearchForm.sortBy=a,await _()}async function M(a){l.pointOfCareSearchForm.pageNumber=a,await _()}async function _(){i.value=!0;let a=await A.search(l.pointOfCareSearchForm);s.validateResponse(a,null,()=>{P.value=a.data}),i.value=!1}const D=ne(()=>T.value?g.backoffice.pointOfCare.pageTitle:g.backoffice.pointOfCare.breadcrumbTitle);return(a,o)=>{const V=d("breadcrumb-item"),G=d("breadcrumb"),H=d("cbutton"),u=d("form-field"),K=d("row"),j=d("cfilter"),p=d("ccolumn"),q=d("table-action-edit"),W=d("table-action-detail"),X=d("ctable"),Y=d("card"),J=d("page");return b(),f(J,{title:e(D)},{breadcrumb:c(()=>[n(G,{"has-home":!0},{default:c(()=>[n(V,{label:a._lang.backoffice.pointOfCare.breadcrumbTitle},null,8,["label"])]),_:1})]),actions:c(()=>[T.value?(b(),f(H,{key:0,class:"col-12 col-sm-auto",type:e(r).buttonType.secondary,size:e(r).buttonSize.medium,title:a._lang.common.toAdd,icon:re,onClick:N},null,8,["type","size","title"])):C("",!0)]),default:c(()=>[n(Y,{shadow:!0},{body:c(()=>[n(j,{title:a._lang.common.filter,disabled:e(i),"clear-click":U,"apply-click":w,loading:e(i),collapsed:!0},{default:c(()=>[n(K,null,{default:c(()=>[n(u,{id:"code",modelValue:e(l).pointOfCareSearchForm.code,"onUpdate:modelValue":o[0]||(o[0]=t=>e(l).pointOfCareSearchForm.code=t),class:"mb-3 col-12 col-md-6 col-lg-4",label:a._lang.label.code,type:e(r).inputs.text,maxlength:45,disabled:e(i)},null,8,["modelValue","label","type","disabled"]),n(u,{id:"channelTypeIds",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(l).pointOfCareSearchForm.channelTypeIds,"onUpdate:modelValue":o[1]||(o[1]=t=>e(l).pointOfCareSearchForm.channelTypeIds=t),label:a._lang.label.channelTypeId,type:e(r).inputs.multiselect,options:e(F).channelTypeList,disabled:e(i),mode:e(r).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"]),n(u,{id:"organization",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(l).pointOfCareSearchForm.organization,"onUpdate:modelValue":o[2]||(o[2]=t=>e(l).pointOfCareSearchForm.organization=t),label:a._lang.label.organizationHost,type:e(r).inputs.multiselect,options:e(F).organizationList,disabled:e(i),valueProp:e(r).multiselectValueProp.value3},null,8,["modelValue","label","type","options","disabled","valueProp"]),n(u,{id:"abreviation",class:"mb-3 col-12 col-lg-4",modelValue:e(l).pointOfCareSearchForm.abreviation,"onUpdate:modelValue":o[3]||(o[3]=t=>e(l).pointOfCareSearchForm.abreviation=t),label:a._lang.label.abreviation,type:e(r).inputs.text,maxlength:16,disabled:e(i)},null,8,["modelValue","label","type","disabled"]),n(u,{id:"name",class:"mb-3 col-12 col-md-8",modelValue:e(l).pointOfCareSearchForm.name,"onUpdate:modelValue":o[4]||(o[4]=t=>e(l).pointOfCareSearchForm.name=t),label:a._lang.label.name,type:e(r).inputs.text,maxlength:45,disabled:e(i)},null,8,["modelValue","label","type","disabled"]),T.value?(b(),f(u,{key:0,id:"recordStateIds",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(l).pointOfCareSearchForm.recordStateIds,"onUpdate:modelValue":o[5]||(o[5]=t=>e(l).pointOfCareSearchForm.recordStateIds=t),label:a._lang.label.state,type:e(r).inputs.multiselect,options:e(I),disabled:e(i),mode:e(r).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"])):C("",!0),a._isGuestLogged?C("",!0):(b(),f(u,{key:1,id:"active",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(l).pointOfCareSearchForm.active,"onUpdate:modelValue":o[6]||(o[6]=t=>e(l).pointOfCareSearchForm.active=t),label:a._lang.label.public,type:e(r).inputs.checkbox,disabled:e(i)},null,8,["modelValue","label","type","disabled"]))]),_:1})]),_:1},8,["title","disabled","loading"]),n(ie,null,{default:c(()=>[n(X,{onSort:R,onChangePage:M,selectedItems:e(y),"onUpdate:selectedItems":o[7]||(o[7]=t=>k(y)?y.value=t:y=t),unselectedItems:e(O),"onUpdate:unselectedItems":o[8]||(o[8]=t=>k(O)?O.value=t:O=t),selectedState:e(S),"onUpdate:selectedState":o[9]||(o[9]=t=>k(S)?S.value=t:S=t),data:e(P),checkbox:!1,loading:e(i),defaultSort:"pointOfCareId",checkboxField:"code"},{columns:c(()=>[n(p,{name:a._lang.label.code,field:"code",sortable:!0},null,8,["name"]),n(p,{name:a._lang.label.channelTypeId,field:"channelType",sortField:"channelTypeId",sortable:!0},null,8,["name"]),n(p,{name:a._lang.label.abreviation,field:"abreviation",sortable:!0},null,8,["name"]),n(p,{name:a._lang.label.name,field:"name",sortable:!0},null,8,["name"]),n(p,{name:a._lang.label.organizationHost,field:"organization",sortField:"organizationId",sortable:!0},null,8,["name"]),n(p,{name:a._lang.label.state,field:"recordStateTypeId",sortField:"recordStateTypeId",align:e(r).columnAlign.center,custom:se,options:e(E),sortable:!0},null,8,["name","align","options"])]),actions:c(t=>[t.item.recordStateTypeId===e(r).recordStateType.draft?(b(),f(q,{key:0,onClick:Q=>B(t.item)},null,8,["onClick"])):C("",!0),t.item.recordStateTypeId>e(r).recordStateType.draft?(b(),f(W,{key:1,onClick:Q=>L(t.item)},null,8,["onClick"])):C("",!0)]),_:1},8,["selectedItems","unselectedItems","selectedState","data","loading"])]),_:1})]),_:1})]),_:1},8,["title"])}}};export{Oe as default};
