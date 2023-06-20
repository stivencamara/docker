import{m as oe,x as ne,K as se,r as m,A as s,y as F,n as c,L as ie,o as de,a as d,b as k,c as w,w as r,d as o,f as e,T as ce,H as re,W as ue,i as A,M as me,B as z,s as U}from"./index-920dbb37.js";import{s as C}from"./service-6e6aa2ba.js";import{u as pe}from"./service-e327b247.js";import{s as be}from"./helpers-65b02008.js";import{b as ve}from"./helpers-4c156364.js";import"./helpers-6935922b.js";import"./index.esm-d0811cb6.js";const Te={__name:"index",setup(fe){const S=oe(),v=ne(),p=pe(),O=se(),R="confirm-delete";let i=m(!1),f=m([]),g=m([]),y=m(s.tableSelectedState.none),n=F(L()),I=m([]),B=m([]),T=m(c.createEmptyDataSource()),_=F({});function L(){return{pageNumber:1,sortBy:"Code",code:null,serviceTypeIds:null,serviceCategoryIds:null,businessEventIds:null,lifeEventIds:null,abreviation:null,name:null,organization:null,recordStateIds:null,active:!0}}async function P(){if(_){i.value=!0;const l=await C.delete(_.serviceId);c.validateResponse(l,v.backoffice.service.deleted,()=>{c.removeItemOfArray(T.value.items,_)}),_=null,i.value=!1}}ie(async()=>{i.value=!0,I.value=c.convertEnumToArray(v.enums.recordStateType);const l=await C.getLists(O.getLanguage);c.validateResponse(l,null,()=>{p.setLists(l.data),I.value=c.convertEnumToArray(v.enums.recordStateType),B.value=c.concatItemsBadge(I.value,ve.recordStateTypeBadgeOptions)}),i.value=!1}),de(async()=>{await V()});function D(l){S.push({name:U.router.BACKOFFICE_EDIT_SERVICE_PAGE.name,params:{serviceId:c.encodeId(l.serviceId),serviceVersion:c.encodeId(l.serviceVersion)}})}function N(l){S.push({name:U.router.BACKOFFICE_DETAIL_SERVICE_PAGE.name,params:{serviceId:c.encodeId(l.serviceId),serviceVersion:c.encodeId(l.serviceVersion)}})}async function H(){Object.assign(n,L()),await M()}async function M(){n.pageNumber=1,await V()}async function K(){i.value=!0;const l=await C.create(be.newForm());c.validateResponse(l,null,()=>{const a=c.encodeId(l.data.serviceId),E=c.encodeId(l.data.serviceVersion);S.push({name:U.router.BACKOFFICE_EDIT_SERVICE_PAGE.name,params:{serviceId:a,serviceVersion:E}})}),i.value=!1}async function G(l){n.sortBy=l,await V()}async function x(l){n.pageNumber=l,await V()}async function V(){i.value=!0;let l=await C.search(n);c.validateResponse(l,null,()=>{T.value=l.data}),i.value=!1}return(l,a)=>{const E=d("breadcrumb-item"),W=d("breadcrumb"),$=d("cbutton"),u=d("form-field"),j=d("row"),Q=d("cfilter"),q=d("icon-import"),J=d("cbutton-options"),X=d("table-actions"),b=d("ccolumn"),Y=d("table-action-edit"),Z=d("table-action-detail"),h=d("ctable"),ee=d("card"),le=d("confirm-delete-modal"),te=d("page");return k(),w(te,{title:l._lang.backoffice.service.pageTitle},{breadcrumb:r(()=>[o(W,{"has-home":!0},{default:r(()=>[o(E,{label:l._lang.backoffice.service.breadcrumbTitle},null,8,["label"])]),_:1})]),actions:r(()=>[o($,{class:"col-12 col-sm-auto",type:e(s).buttonType.secondary,size:e(s).buttonSize.medium,title:l._lang.common.toAdd,icon:ce,onClick:K},null,8,["type","size","title"])]),default:r(()=>[o(ee,{shadow:!0},{body:r(()=>[o(Q,{title:l._lang.common.filter,disabled:e(i),"clear-click":H,"apply-click":M,loading:e(i),collapsed:!0},{default:r(()=>[o(j,null,{default:r(()=>[o(u,{id:"code",modelValue:e(n).code,"onUpdate:modelValue":a[0]||(a[0]=t=>e(n).code=t),class:"mb-3 col-12 col-md-6 col-xl-4",label:l._lang.label.code,type:e(s).inputs.text,maxlength:45,disabled:e(i)},null,8,["modelValue","label","type","disabled"]),o(u,{id:"serviceTypeId",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(n).serviceTypeIds,"onUpdate:modelValue":a[1]||(a[1]=t=>e(n).serviceTypeIds=t),label:l._lang.label.serviceTypeId,type:e(s).inputs.multiselect,options:e(p).serviceTypeList,disabled:e(i),mode:e(s).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"]),o(u,{id:"serviceCategoryId",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(n).serviceCategoryIds,"onUpdate:modelValue":a[2]||(a[2]=t=>e(n).serviceCategoryIds=t),label:l._lang.label.serviceCategoryId,type:e(s).inputs.multiselect,options:e(p).serviceCategoryList,disabled:e(i),mode:e(s).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"]),o(u,{id:"lifeEventId",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(n).lifeEventIds,"onUpdate:modelValue":a[3]||(a[3]=t=>e(n).lifeEventIds=t),label:l._lang.label.lifeEventId,type:e(s).inputs.multiselect,options:e(p).lifeEventList,disabled:e(i),mode:e(s).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"]),o(u,{id:"businessEventId",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(n).businessEventIds,"onUpdate:modelValue":a[4]||(a[4]=t=>e(n).businessEventIds=t),label:l._lang.label.businessEventId,type:e(s).inputs.multiselect,options:e(p).businessEventList,disabled:e(i),mode:e(s).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"]),o(u,{id:"abreviation",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(n).abreviation,"onUpdate:modelValue":a[5]||(a[5]=t=>e(n).abreviation=t),label:l._lang.label.abreviation,type:e(s).inputs.text,maxlength:16,disabled:e(i)},null,8,["modelValue","label","type","disabled"]),o(u,{id:"name",class:"mb-3 col-12 col-xl-4",modelValue:e(n).name,"onUpdate:modelValue":a[6]||(a[6]=t=>e(n).name=t),label:l._lang.label.name,type:e(s).inputs.text,maxlength:45,disabled:e(i)},null,8,["modelValue","label","type","disabled"]),o(u,{id:"organizationId",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(n).organization,"onUpdate:modelValue":a[7]||(a[7]=t=>e(n).organization=t),label:l._lang.label.organizationHost,type:e(s).inputs.multiselect,options:e(p).organizationList,disabled:e(i),valueProp:e(s).multiselectValueProp.value3},null,8,["modelValue","label","type","options","disabled","valueProp"]),o(u,{id:"recordStateId",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(n).recordStateIds,"onUpdate:modelValue":a[8]||(a[8]=t=>e(n).recordStateIds=t),label:l._lang.label.state,type:e(s).inputs.multiselect,options:e(I),disabled:e(i),mode:e(s).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"]),o(u,{id:"active",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(n).active,"onUpdate:modelValue":a[9]||(a[9]=t=>e(n).active=t),label:l._lang.label.active,type:e(s).inputs.checkbox,disabled:e(i)},null,8,["modelValue","label","type","disabled"])]),_:1})]),_:1},8,["title","disabled","loading"]),o(re,null,{default:r(()=>[o(X,{title:l._lang.common.tableActionTitle},{default:r(()=>[o(J,{type:e(s).buttonType.secondary},{default:r(()=>[o(ue,{title:e(v).common.import},{default:r(()=>[o(q,{color:"#002D74"})]),_:1},8,["title"])]),_:1},8,["type"])]),_:1},8,["title"]),o(h,{onSort:G,onChangePage:x,selectedItems:e(f),"onUpdate:selectedItems":a[10]||(a[10]=t=>A(f)?f.value=t:f=t),unselectedItems:e(g),"onUpdate:unselectedItems":a[11]||(a[11]=t=>A(g)?g.value=t:g=t),selectedState:e(y),"onUpdate:selectedState":a[12]||(a[12]=t=>A(y)?y.value=t:y=t),data:e(T),checkbox:!0,loading:e(i),defaultSort:"pointOfCareId",checkboxField:"code"},{columns:r(()=>[o(b,{name:l._lang.label.code,field:"code",sortable:!0},null,8,["name"]),o(b,{name:l._lang.label.serviceTypeId,field:"serviceType",sortField:"serviceTypeId",sortable:!0},null,8,["name"]),o(b,{name:l._lang.label.abreviation,field:"abreviation",sortable:!0},null,8,["name"]),o(b,{name:l._lang.label.name,field:"name",sortable:!0},null,8,["name"]),o(b,{name:l._lang.label.state,field:"recordStateTypeId",align:e(s).columnAlign.center,custom:me,options:e(B),sortable:!0},null,8,["name","align","options"])]),actions:r(t=>[t.item.recordStateTypeId==e(s).recordStateType.draft?(k(),w(Y,{key:0,onClick:ae=>D(t.item)},null,8,["onClick"])):z("",!0),t.item.recordStateTypeId>e(s).recordStateType.draft?(k(),w(Z,{key:1,onClick:ae=>N(t.item)},null,8,["onClick"])):z("",!0)]),_:1},8,["selectedItems","unselectedItems","selectedState","data","loading"])]),_:1})]),_:1}),o(le,{id:R,title:l._lang.backoffice.service.delete,message:l._lang.backoffice.service.deleteQuestion,action:P},null,8,["title","message"])]),_:1},8,["title"])}}};export{Te as default};
