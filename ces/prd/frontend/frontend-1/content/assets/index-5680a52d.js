import{g as se,i as ne,K as ie,r as m,v as s,j as R,u as d,N as de,L as re,o as ce,k as N,l as r,c as v,m as g,n as c,q as i,s as e,U as ue,A as S,W as me,J as F,M as pe,B as M}from"./index-80ba5b4e.js";import{s as w}from"./service-dba6f9b8.js";import{u as be}from"./service-57b75013.js";import{s as ve}from"./helpers-680aec35.js";import{b as ge}from"./helpers-4a70dd55.js";import"./helpers-330ffe65.js";import"./index.esm-ae8bce41.js";const Te={__name:"index",setup(ye){const B=se(),y=ne(),f=be(),D=ie(),G="confirm-delete";let n=m(!1),V=m([]),_=m([]),k=m(s.tableSelectedState.none),t=R(z()),T=m([]),O=m([]),U=m(d.createEmptyDataSource()),E=R({});const L=m(de.havePermission(s.permissions.service.createEdit));function z(){return{pageNumber:1,sortBy:"Code",code:null,serviceTypeIds:null,serviceCategoryIds:[],serviceSubCategoryIds:[],businessEventIds:null,lifeEventIds:null,abreviation:null,name:null,organization:null,recordStateIds:[s.recordStateType.published],active:!0}}async function K(){if(E){n.value=!0;const l=await w.delete(E.serviceId);d.validateResponse(l,y.backoffice.service.deleted,()=>{d.removeItemOfArray(U.value.items,E)}),E=null,n.value=!1}}re(async()=>{n.value=!0,T.value=d.convertEnumToArray(y.enums.recordStateType);const l=await w.getLists(D.getLanguage);d.validateResponse(l,null,()=>{f.setLists(l.data),T.value=d.convertEnumToArray(y.enums.recordStateType),O.value=d.concatItemsBadge(T.value,ge.recordStateTypeBadgeOptions)}),n.value=!1}),ce(async()=>{await A()});function H(l){B.push({name:M.router.BACKOFFICE_EDIT_SERVICE_PAGE.name,params:{serviceId:d.encodeId(l.serviceId),serviceVersion:d.encodeId(l.serviceVersion)}})}function j(l){B.push({name:M.router.BACKOFFICE_DETAIL_SERVICE_PAGE.name,params:{serviceId:d.encodeId(l.serviceId),serviceVersion:d.encodeId(l.serviceVersion)}})}async function W(){Object.assign(t,z()),await P()}async function P(){t.pageNumber=1,await A()}async function q(){n.value=!0;const l=await w.create(ve.newForm());d.validateResponse(l,null,()=>{const o=d.encodeId(l.data.serviceId),p=d.encodeId(l.data.serviceVersion);B.push({name:M.router.BACKOFFICE_EDIT_SERVICE_PAGE.name,params:{serviceId:o,serviceVersion:p}})}),n.value=!1}async function x(l){t.sortBy=l,await A()}async function J(l){t.pageNumber=l,await A()}async function A(){n.value=!0;let l=await w.search(t);d.validateResponse(l,null,()=>{U.value=l.data}),n.value=!1}const Q=N(()=>L.value?y.backoffice.service.pageTitle:y.backoffice.service.breadcrumbTitle),X=N(()=>{var o,p;if(t.serviceCategoryIds==null||((o=t.serviceCategoryIds)==null?void 0:o.length)==0)return t.serviceSubCategoryIds=[],[];var l=f.serviceSubCategoryList.filter(b=>t.serviceCategoryIds.some(I=>I==b.state));return(p=t.serviceSubCategoryIds)==null||p.forEach(b=>{l.some(I=>I.value==b)||d.removeItemOfArray(t.serviceSubCategoryIds,b)}),l});return(l,o)=>{const p=r("breadcrumb-item"),b=r("breadcrumb"),I=r("cbutton"),u=r("form-field"),Y=r("row"),Z=r("cfilter"),C=r("ccolumn"),$=r("table-action-edit"),h=r("table-action-detail"),ee=r("ctable"),le=r("card"),ae=r("confirm-delete-modal"),te=r("page");return v(),g(te,{title:e(Q)},{breadcrumb:c(()=>[i(b,{"has-home":!0},{default:c(()=>[i(p,{label:l._lang.backoffice.service.breadcrumbTitle},null,8,["label"])]),_:1})]),actions:c(()=>[L.value?(v(),g(I,{key:0,class:"col-12 col-sm-auto",type:e(s).buttonType.secondary,size:e(s).buttonSize.medium,title:l._lang.common.toAdd,icon:ue,onClick:q},null,8,["type","size","title"])):S("",!0)]),default:c(()=>[i(le,{shadow:!0},{body:c(()=>[i(Z,{title:l._lang.common.filter,disabled:e(n),"clear-click":W,"apply-click":P,loading:e(n),collapsed:!0},{default:c(()=>[i(Y,null,{default:c(()=>[i(u,{id:"code",modelValue:e(t).code,"onUpdate:modelValue":o[0]||(o[0]=a=>e(t).code=a),class:"mb-3 col-12 col-md-6 col-xl-4",label:l._lang.label.code,type:e(s).inputs.text,maxlength:45,disabled:e(n)},null,8,["modelValue","label","type","disabled"]),i(u,{id:"serviceTypeId",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(t).serviceTypeIds,"onUpdate:modelValue":o[1]||(o[1]=a=>e(t).serviceTypeIds=a),label:l._lang.label.serviceTypeId,type:e(s).inputs.multiselect,options:e(f).serviceTypeList,disabled:e(n),mode:e(s).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"]),i(u,{id:"organizationId",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(t).organization,"onUpdate:modelValue":o[2]||(o[2]=a=>e(t).organization=a),label:l._lang.label.organizationHost,type:e(s).inputs.multiselect,options:e(f).organizationList,disabled:e(n),valueProp:e(s).multiselectValueProp.value3},null,8,["modelValue","label","type","options","disabled","valueProp"]),i(u,{id:"abreviation",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(t).abreviation,"onUpdate:modelValue":o[3]||(o[3]=a=>e(t).abreviation=a),label:l._lang.label.abreviation,type:e(s).inputs.text,maxlength:16,disabled:e(n)},null,8,["modelValue","label","type","disabled"]),i(u,{id:"name",class:"mb-3 col-12 col-md-8",modelValue:e(t).name,"onUpdate:modelValue":o[4]||(o[4]=a=>e(t).name=a),label:l._lang.label.name,type:e(s).inputs.text,maxlength:45,disabled:e(n)},null,8,["modelValue","label","type","disabled"]),i(u,{id:"serviceCategoryId",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(t).serviceCategoryIds,"onUpdate:modelValue":o[5]||(o[5]=a=>e(t).serviceCategoryIds=a),label:l._lang.label.serviceCategoryId,type:e(s).inputs.multiselect,options:e(f).serviceCategoryList,disabled:e(n),mode:e(s).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"]),i(u,{id:"serviceSubCategoryId",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(t).serviceSubCategoryIds,"onUpdate:modelValue":o[6]||(o[6]=a=>e(t).serviceSubCategoryIds=a),label:l._lang.label.serviceSubCategoryId,type:e(s).inputs.multiselect,options:e(X),disabled:e(n),mode:e(s).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"]),L.value?(v(),g(u,{key:0,id:"recordStateId",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(t).recordStateIds,"onUpdate:modelValue":o[7]||(o[7]=a=>e(t).recordStateIds=a),label:l._lang.label.state,type:e(s).inputs.multiselect,options:e(T),disabled:e(n),mode:e(s).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"])):S("",!0),l._isGuestLogged?S("",!0):(v(),g(u,{key:1,id:"active",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(t).active,"onUpdate:modelValue":o[8]||(o[8]=a=>e(t).active=a),label:l._lang.label.public,type:e(s).inputs.checkbox,disabled:e(n)},null,8,["modelValue","label","type","disabled"]))]),_:1})]),_:1},8,["title","disabled","loading"]),i(me,null,{default:c(()=>[i(ee,{onSort:x,onChangePage:J,selectedItems:e(V),"onUpdate:selectedItems":o[9]||(o[9]=a=>F(V)?V.value=a:V=a),unselectedItems:e(_),"onUpdate:unselectedItems":o[10]||(o[10]=a=>F(_)?_.value=a:_=a),selectedState:e(k),"onUpdate:selectedState":o[11]||(o[11]=a=>F(k)?k.value=a:k=a),data:e(U),checkbox:!1,loading:e(n),defaultSort:"code",checkboxField:"code"},{columns:c(()=>[i(C,{name:l._lang.label.code,field:"code",sortable:!0},null,8,["name"]),i(C,{name:l._lang.label.serviceTypeId,field:"serviceType",sortField:"serviceTypeId",sortable:!0},null,8,["name"]),i(C,{name:l._lang.label.abreviation,field:"abreviation",sortable:!0},null,8,["name"]),i(C,{name:l._lang.label.name,field:"name",sortable:!0},null,8,["name"]),i(C,{name:l._lang.label.state,field:"recordStateTypeId",align:e(s).columnAlign.center,custom:pe,options:e(O),sortable:!0},null,8,["name","align","options"])]),actions:c(a=>[a.item.recordStateTypeId==e(s).recordStateType.draft?(v(),g($,{key:0,onClick:oe=>H(a.item)},null,8,["onClick"])):S("",!0),a.item.recordStateTypeId>e(s).recordStateType.draft?(v(),g(h,{key:1,onClick:oe=>j(a.item)},null,8,["onClick"])):S("",!0)]),_:1},8,["selectedItems","unselectedItems","selectedState","data","loading"])]),_:1})]),_:1}),i(ae,{id:G,title:l._lang.backoffice.service.delete,message:l._lang.backoffice.service.deleteQuestion,action:K},null,8,["title","message"])]),_:1},8,["title"])}}};export{Te as default};