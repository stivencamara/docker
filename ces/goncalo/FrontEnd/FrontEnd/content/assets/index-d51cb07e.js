import{g as ae,i as te,J as oe,r as m,s as i,G as M,u as d,M as ne,K as se,o as ie,k as r,c as _,l as C,w as c,n,p as e,T as de,y as A,V as re,I as B,L as ce,z as U}from"./index-a14ad215.js";import{s as S}from"./service-a0c37778.js";import{u as ue}from"./service-9ca2bd37.js";import{s as me}from"./helpers-11fd24aa.js";import{b as pe}from"./helpers-71142cd6.js";import"./helpers-a264fdb9.js";import"./index.esm-88a1129f.js";const Ce={__name:"index",setup(be){const k=ae(),T=te(),b=ue(),O=oe(),P="confirm-delete";let s=m(!1),v=m([]),g=m([]),f=m(i.tableSelectedState.none),o=M(F()),y=m([]),z=m([]),E=m(d.createEmptyDataSource()),I=M({});const R=m(ne.havePermission(i.permissions.service.createEdit));function F(){return{pageNumber:1,sortBy:"Code",code:null,serviceTypeIds:null,serviceCategoryIds:null,businessEventIds:null,lifeEventIds:null,abreviation:null,name:null,organization:null,recordStateIds:null,active:!0}}async function D(){if(I){s.value=!0;const l=await S.delete(I.serviceId);d.validateResponse(l,T.backoffice.service.deleted,()=>{d.removeItemOfArray(E.value.items,I)}),I=null,s.value=!1}}se(async()=>{s.value=!0,y.value=d.convertEnumToArray(T.enums.recordStateType);const l=await S.getLists(O.getLanguage);d.validateResponse(l,null,()=>{b.setLists(l.data),y.value=d.convertEnumToArray(T.enums.recordStateType),z.value=d.concatItemsBadge(y.value,pe.recordStateTypeBadgeOptions)}),s.value=!1}),ie(async()=>{await V()});function N(l){k.push({name:U.router.BACKOFFICE_EDIT_SERVICE_PAGE.name,params:{serviceId:d.encodeId(l.serviceId),serviceVersion:d.encodeId(l.serviceVersion)}})}function G(l){k.push({name:U.router.BACKOFFICE_DETAIL_SERVICE_PAGE.name,params:{serviceId:d.encodeId(l.serviceId),serviceVersion:d.encodeId(l.serviceVersion)}})}async function K(){Object.assign(o,F()),await L()}async function L(){o.pageNumber=1,await V()}async function H(){s.value=!0;const l=await S.create(me.newForm());d.validateResponse(l,null,()=>{const t=d.encodeId(l.data.serviceId),w=d.encodeId(l.data.serviceVersion);k.push({name:U.router.BACKOFFICE_EDIT_SERVICE_PAGE.name,params:{serviceId:t,serviceVersion:w}})}),s.value=!1}async function x(l){o.sortBy=l,await V()}async function j(l){o.pageNumber=l,await V()}async function V(){s.value=!0;let l=await S.search(o);d.validateResponse(l,null,()=>{E.value=l.data}),s.value=!1}return(l,t)=>{const w=r("breadcrumb-item"),J=r("breadcrumb"),Q=r("cbutton"),u=r("form-field"),W=r("row"),q=r("cfilter"),p=r("ccolumn"),X=r("table-action-edit"),Y=r("table-action-detail"),Z=r("ctable"),$=r("card"),h=r("confirm-delete-modal"),ee=r("page");return _(),C(ee,{title:l._lang.backoffice.service.pageTitle},{breadcrumb:c(()=>[n(J,{"has-home":!0},{default:c(()=>[n(w,{label:l._lang.backoffice.service.breadcrumbTitle},null,8,["label"])]),_:1})]),actions:c(()=>[R.value?(_(),C(Q,{key:0,class:"col-12 col-sm-auto",type:e(i).buttonType.secondary,size:e(i).buttonSize.medium,title:l._lang.common.toAdd,icon:de,onClick:H},null,8,["type","size","title"])):A("",!0)]),default:c(()=>[n($,{shadow:!0},{body:c(()=>[n(q,{title:l._lang.common.filter,disabled:e(s),"clear-click":K,"apply-click":L,loading:e(s),collapsed:!0},{default:c(()=>[n(W,null,{default:c(()=>[n(u,{id:"code",modelValue:e(o).code,"onUpdate:modelValue":t[0]||(t[0]=a=>e(o).code=a),class:"mb-3 col-12 col-md-6 col-xl-4",label:l._lang.label.code,type:e(i).inputs.text,maxlength:45,disabled:e(s)},null,8,["modelValue","label","type","disabled"]),n(u,{id:"serviceTypeId",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(o).serviceTypeIds,"onUpdate:modelValue":t[1]||(t[1]=a=>e(o).serviceTypeIds=a),label:l._lang.label.serviceTypeId,type:e(i).inputs.multiselect,options:e(b).serviceTypeList,disabled:e(s),mode:e(i).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"]),n(u,{id:"serviceCategoryId",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(o).serviceCategoryIds,"onUpdate:modelValue":t[2]||(t[2]=a=>e(o).serviceCategoryIds=a),label:l._lang.label.serviceCategoryId,type:e(i).inputs.multiselect,options:e(b).serviceCategoryList,disabled:e(s),mode:e(i).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"]),n(u,{id:"abreviation",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(o).abreviation,"onUpdate:modelValue":t[3]||(t[3]=a=>e(o).abreviation=a),label:l._lang.label.abreviation,type:e(i).inputs.text,maxlength:16,disabled:e(s)},null,8,["modelValue","label","type","disabled"]),n(u,{id:"name",class:"mb-3 col-12 col-xl-4",modelValue:e(o).name,"onUpdate:modelValue":t[4]||(t[4]=a=>e(o).name=a),label:l._lang.label.name,type:e(i).inputs.text,maxlength:45,disabled:e(s)},null,8,["modelValue","label","type","disabled"]),n(u,{id:"organizationId",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(o).organization,"onUpdate:modelValue":t[5]||(t[5]=a=>e(o).organization=a),label:l._lang.label.organizationHost,type:e(i).inputs.multiselect,options:e(b).organizationList,disabled:e(s),valueProp:e(i).multiselectValueProp.value3},null,8,["modelValue","label","type","options","disabled","valueProp"]),n(u,{id:"recordStateId",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(o).recordStateIds,"onUpdate:modelValue":t[6]||(t[6]=a=>e(o).recordStateIds=a),label:l._lang.label.state,type:e(i).inputs.multiselect,options:e(y),disabled:e(s),mode:e(i).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"]),n(u,{id:"active",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(o).active,"onUpdate:modelValue":t[7]||(t[7]=a=>e(o).active=a),label:l._lang.label.public,type:e(i).inputs.checkbox,disabled:e(s)},null,8,["modelValue","label","type","disabled"])]),_:1})]),_:1},8,["title","disabled","loading"]),n(re,null,{default:c(()=>[n(Z,{onSort:x,onChangePage:j,selectedItems:e(v),"onUpdate:selectedItems":t[8]||(t[8]=a=>B(v)?v.value=a:v=a),unselectedItems:e(g),"onUpdate:unselectedItems":t[9]||(t[9]=a=>B(g)?g.value=a:g=a),selectedState:e(f),"onUpdate:selectedState":t[10]||(t[10]=a=>B(f)?f.value=a:f=a),data:e(E),checkbox:!1,loading:e(s),defaultSort:"pointOfCareId",checkboxField:"code"},{columns:c(()=>[n(p,{name:l._lang.label.code,field:"code",sortable:!0},null,8,["name"]),n(p,{name:l._lang.label.serviceTypeId,field:"serviceType",sortField:"serviceTypeId",sortable:!0},null,8,["name"]),n(p,{name:l._lang.label.abreviation,field:"abreviation",sortable:!0},null,8,["name"]),n(p,{name:l._lang.label.name,field:"name",sortable:!0},null,8,["name"]),n(p,{name:l._lang.label.state,field:"recordStateTypeId",align:e(i).columnAlign.center,custom:ce,options:e(z),sortable:!0},null,8,["name","align","options"])]),actions:c(a=>[a.item.recordStateTypeId==e(i).recordStateType.draft?(_(),C(X,{key:0,onClick:le=>N(a.item)},null,8,["onClick"])):A("",!0),a.item.recordStateTypeId>e(i).recordStateType.draft?(_(),C(Y,{key:1,onClick:le=>G(a.item)},null,8,["onClick"])):A("",!0)]),_:1},8,["selectedItems","unselectedItems","selectedState","data","loading"])]),_:1})]),_:1}),n(h,{id:P,title:l._lang.backoffice.service.delete,message:l._lang.backoffice.service.deleteQuestion,action:D},null,8,["title","message"])]),_:1},8,["title"])}}};export{Ce as default};
