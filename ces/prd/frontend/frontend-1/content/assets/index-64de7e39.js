import{g as $,i as x,J as ee,r as u,s,G as U,u as d,M as ae,K as le,o as te,k as r,c as I,l as _,w as c,n as o,p as e,T as oe,y as V,V as ne,I as S,L as se,z as k}from"./index-a14ad215.js";import{p as E}from"./point-of-care-4055b36e.js";import{u as ie}from"./point-of-care-86564745.js";import{p as de}from"./helpers-bdeacb10.js";import{b as re}from"./helpers-71142cd6.js";import"./index.esm-88a1129f.js";const ye={__name:"index",setup(ce){const v=$(),A=x(),O=ie(),L=ee();let i=u(!1),b=u([]),f=u([]),g=u(s.tableSelectedState.none),n=U(z()),y=u([]),F=u([]),w=u(d.createEmptyDataSource());U({});const h=u(ae.havePermission(s.permissions.service.createEdit));function z(){return{pageNumber:1,sortBy:"Code",code:null,channelTypeIds:null,abreviation:null,name:null,organization:null,organizationHost:null,recordStateIds:null,active:!0}}le(async()=>{i.value=!0,y.value=d.convertEnumToArray(A.enums.recordStateType);const a=await E.getLists(L.getLanguage);d.validateResponse(a,null,()=>{O.setLists(a.data),y.value=d.convertEnumToArray(A.enums.recordStateType),F.value=d.concatItemsBadge(y.value,re.recordStateTypeBadgeOptions)}),i.value=!1}),te(async()=>{await C()});function N(a){v.push({name:k.router.BACKOFFICE_EDIT_POINT_OF_CARE_PAGE.name,params:{pointOfCareId:d.encodeId(a.pointOfCareId),pointOfCareVersion:d.encodeId(a.pointOfCareVersion)}})}function R(a){v.push({name:k.router.BACKOFFICE_DETAIL_POINT_OF_CARE_PAGE.name,params:{pointOfCareId:d.encodeId(a.pointOfCareId),pointOfCareVersion:d.encodeId(a.pointOfCareVersion)}})}async function M(){Object.assign(n,z()),await P()}async function P(){n.pageNumber=1,await C()}async function H(){i.value=!0;const a=await E.create(de.newForm());d.validateResponse(a,null,()=>{const t=d.encodeId(a.data.pointOfCareId),T=d.encodeId(a.data.pointOfCareVersion);v.push({name:k.router.BACKOFFICE_EDIT_POINT_OF_CARE_PAGE.name,params:{pointOfCareId:t,pointOfCareVersion:T}})}),i.value=!1}async function D(a){n.sortBy=a,await C()}async function G(a){n.pageNumber=a,await C()}async function C(){i.value=!0;let a=await E.search(n);d.validateResponse(a,null,()=>{w.value=a.data}),i.value=!1}return(a,t)=>{const T=r("breadcrumb-item"),K=r("breadcrumb"),j=r("cbutton"),m=r("form-field"),B=r("row"),J=r("cfilter"),p=r("ccolumn"),W=r("table-action-edit"),q=r("table-action-detail"),Q=r("ctable"),X=r("card"),Y=r("page");return I(),_(Y,{title:a._lang.backoffice.pointOfCare.pageTitle},{breadcrumb:c(()=>[o(K,{"has-home":!0},{default:c(()=>[o(T,{label:a._lang.backoffice.pointOfCare.breadcrumbTitle},null,8,["label"])]),_:1})]),actions:c(()=>[h.value?(I(),_(j,{key:0,class:"col-12 col-sm-auto",type:e(s).buttonType.secondary,size:e(s).buttonSize.medium,title:a._lang.common.toAdd,icon:oe,onClick:H},null,8,["type","size","title"])):V("",!0)]),default:c(()=>[o(X,{shadow:!0},{body:c(()=>[o(J,{title:a._lang.common.filter,disabled:e(i),"clear-click":M,"apply-click":P,loading:e(i),collapsed:!0},{default:c(()=>[o(B,null,{default:c(()=>[o(m,{id:"code",modelValue:e(n).code,"onUpdate:modelValue":t[0]||(t[0]=l=>e(n).code=l),class:"mb-3 col-12 col-md-6 col-lg-4",label:a._lang.label.code,type:e(s).inputs.text,maxlength:45,disabled:e(i)},null,8,["modelValue","label","type","disabled"]),o(m,{id:"channelTypeIds",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(n).channelTypeIds,"onUpdate:modelValue":t[1]||(t[1]=l=>e(n).channelTypeIds=l),label:a._lang.label.channelTypeId,type:e(s).inputs.multiselect,options:e(O).channelTypeList,disabled:e(i),mode:e(s).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"]),o(m,{id:"abreviation",class:"mb-3 col-12 col-lg-4",modelValue:e(n).abreviation,"onUpdate:modelValue":t[2]||(t[2]=l=>e(n).abreviation=l),label:a._lang.label.abreviation,type:e(s).inputs.text,maxlength:16,disabled:e(i)},null,8,["modelValue","label","type","disabled"])]),_:1}),o(B,null,{default:c(()=>[o(m,{id:"name",class:"mb-3 col-12 col-md-6",modelValue:e(n).name,"onUpdate:modelValue":t[3]||(t[3]=l=>e(n).name=l),label:a._lang.label.name,type:e(s).inputs.text,maxlength:45,disabled:e(i)},null,8,["modelValue","label","type","disabled"]),o(m,{id:"organization",class:"mb-3 col-12 col-md-6",modelValue:e(n).organization,"onUpdate:modelValue":t[4]||(t[4]=l=>e(n).organization=l),label:a._lang.label.organizationHost,type:e(s).inputs.multiselect,options:e(O).organizationList,disabled:e(i),valueProp:e(s).multiselectValueProp.value3},null,8,["modelValue","label","type","options","disabled","valueProp"]),o(m,{id:"recordStateIds",class:"mb-3 col-12 col-md-6",modelValue:e(n).recordStateIds,"onUpdate:modelValue":t[5]||(t[5]=l=>e(n).recordStateIds=l),label:a._lang.label.state,type:e(s).inputs.multiselect,options:e(y),disabled:e(i),mode:e(s).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"]),o(m,{id:"active",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(n).active,"onUpdate:modelValue":t[6]||(t[6]=l=>e(n).active=l),label:a._lang.label.public,type:e(s).inputs.checkbox,disabled:e(i)},null,8,["modelValue","label","type","disabled"])]),_:1})]),_:1},8,["title","disabled","loading"]),o(ne,null,{default:c(()=>[o(Q,{onSort:D,onChangePage:G,selectedItems:e(b),"onUpdate:selectedItems":t[7]||(t[7]=l=>S(b)?b.value=l:b=l),unselectedItems:e(f),"onUpdate:unselectedItems":t[8]||(t[8]=l=>S(f)?f.value=l:f=l),selectedState:e(g),"onUpdate:selectedState":t[9]||(t[9]=l=>S(g)?g.value=l:g=l),data:e(w),checkbox:!1,loading:e(i),defaultSort:"pointOfCareId",checkboxField:"code"},{columns:c(()=>[o(p,{name:a._lang.label.code,field:"code",sortable:!0},null,8,["name"]),o(p,{name:a._lang.label.channelTypeId,field:"channelType",sortField:"channelTypeId",sortable:!0},null,8,["name"]),o(p,{name:a._lang.label.abreviation,field:"abreviation",sortable:!0},null,8,["name"]),o(p,{name:a._lang.label.name,field:"name",sortable:!0},null,8,["name"]),o(p,{name:a._lang.label.organizationHost,field:"organization",sortField:"organizationId",sortable:!0},null,8,["name"]),o(p,{name:a._lang.label.state,field:"recordStateTypeId",sortField:"recordStateTypeId",align:e(s).columnAlign.center,custom:se,options:e(F),sortable:!0},null,8,["name","align","options"])]),actions:c(l=>[l.item.recordStateTypeId===e(s).recordStateType.draft?(I(),_(W,{key:0,onClick:Z=>N(l.item)},null,8,["onClick"])):V("",!0),l.item.recordStateTypeId>e(s).recordStateType.draft?(I(),_(q,{key:1,onClick:Z=>R(l.item)},null,8,["onClick"])):V("",!0)]),_:1},8,["selectedItems","unselectedItems","selectedState","data","loading"])]),_:1})]),_:1})]),_:1},8,["title"])}}};export{ye as default};
