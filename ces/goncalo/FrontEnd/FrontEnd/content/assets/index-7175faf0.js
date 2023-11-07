import{g as te,i as oe,L as se,X as re,r as u,v as s,u as n,j as ie,O as ne,M as ce,o as de,k as R,l as c,c as b,m as g,n as d,q as i,s as e,V as me,A as C,Y as ue,K as L,N as pe,B as U}from"./index-34a71b79.js";import{s as E}from"./service-75c7b1a4.js";import{u as ve}from"./service-e54f0f12.js";import{s as be}from"./helpers-0b4e847d.js";import{b as ge}from"./helpers-9519476b.js";import"./helpers-03c0cf27.js";import"./index.esm-e19cc10d.js";const ke={__name:"index",setup(ye){const A=te(),y=oe(),S=ve(),z=se(),M="confirm-delete",t=re();let r=u(!1),V=u([]),F=u([]),_=u(s.tableSelectedState.none),k=u([]),O=u([]),w=u(n.createEmptyDataSource()),T=ie({});const B=u(ne.havePermission(s.permissions.service.createEdit));async function D(){if(T){r.value=!0;const a=await E.delete(T.serviceId);n.validateResponse(a,y.backoffice.service.deleted,()=>{n.removeItemOfArray(w.value.items,T)}),T=null,r.value=!1}}ce(async()=>{r.value=!0,k.value=n.convertEnumToArray(y.enums.recordStateType);const a=await E.getLists(z.getLanguage);n.validateResponse(a,null,()=>{S.setLists(a.data),k.value=n.convertEnumToArray(y.enums.recordStateType),O.value=n.concatItemsBadge(k.value,ge.recordStateTypeBadgeOptions)}),r.value=!1}),de(async()=>{await h()});function N(a){A.push({name:U.router.BACKOFFICE_EDIT_SERVICE_PAGE.name,params:{serviceId:n.encodeId(a.serviceId),serviceVersion:n.encodeId(a.serviceVersion)}})}function G(a){A.push({name:U.router.BACKOFFICE_DETAIL_SERVICE_PAGE.name,params:{serviceId:n.encodeId(a.serviceId),serviceVersion:n.encodeId(a.serviceVersion)}})}async function K(){t.resetServiceSearchForm(),await P()}async function P(){t.serviceSearchForm.pageNumber=1,await h()}async function H(){r.value=!0;const a=await E.create(be.newForm());n.validateResponse(a,null,()=>{const o=n.encodeId(a.data.serviceId),p=n.encodeId(a.data.serviceVersion);A.push({name:U.router.BACKOFFICE_EDIT_SERVICE_PAGE.name,params:{serviceId:o,serviceVersion:p}})}),r.value=!1}async function j(a){t.serviceSearchForm.sortBy=a,await h()}async function q(a){t.serviceSearchForm.pageNumber=a,await h()}async function h(){r.value=!0;let a=await E.search(t.serviceSearchForm);n.validateResponse(a,null,()=>{w.value=a.data}),r.value=!1}const x=R(()=>B.value?y.backoffice.service.pageTitle:y.backoffice.service.breadcrumbTitle),Q=R(()=>{var o,p;if(t.serviceSearchForm.serviceCategoryIds==null||((o=t.serviceSearchForm.serviceCategoryIds)==null?void 0:o.length)==0)return t.serviceSearchForm.serviceSubCategoryIds=[],[];var a=S.serviceSubCategoryList.filter(v=>t.serviceSearchForm.serviceCategoryIds.some(f=>f==v.state));return(p=t.serviceSearchForm.serviceSubCategoryIds)==null||p.forEach(v=>{a.some(f=>f.value==v)||n.removeItemOfArray(t.serviceSearchForm.serviceSubCategoryIds,v)}),a});return(a,o)=>{const p=c("breadcrumb-item"),v=c("breadcrumb"),f=c("cbutton"),m=c("form-field"),W=c("row"),X=c("cfilter"),I=c("ccolumn"),Y=c("table-action-edit"),J=c("table-action-detail"),Z=c("ctable"),$=c("card"),ee=c("confirm-delete-modal"),ae=c("page");return b(),g(ae,{title:e(x)},{breadcrumb:d(()=>[i(v,{"has-home":!0},{default:d(()=>[i(p,{label:a._lang.backoffice.service.breadcrumbTitle},null,8,["label"])]),_:1})]),actions:d(()=>[B.value?(b(),g(f,{key:0,class:"col-12 col-sm-auto",type:e(s).buttonType.secondary,size:e(s).buttonSize.medium,title:a._lang.common.toAdd,icon:me,onClick:H},null,8,["type","size","title"])):C("",!0)]),default:d(()=>[i($,{shadow:!0},{body:d(()=>[i(X,{title:a._lang.common.filter,disabled:e(r),"clear-click":K,"apply-click":P,loading:e(r),collapsed:!0},{default:d(()=>[i(W,null,{default:d(()=>[i(m,{id:"code",modelValue:e(t).serviceSearchForm.code,"onUpdate:modelValue":o[0]||(o[0]=l=>e(t).serviceSearchForm.code=l),class:"mb-3 col-12 col-md-6 col-xl-4",label:a._lang.label.code,type:e(s).inputs.text,maxlength:45,disabled:e(r)},null,8,["modelValue","label","type","disabled"]),i(m,{id:"serviceTypeId",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(t).serviceSearchForm.serviceTypeIds,"onUpdate:modelValue":o[1]||(o[1]=l=>e(t).serviceSearchForm.serviceTypeIds=l),label:a._lang.label.serviceTypeId,type:e(s).inputs.multiselect,options:e(S).serviceTypeList,disabled:e(r),mode:e(s).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"]),i(m,{id:"organizationId",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(t).serviceSearchForm.organization,"onUpdate:modelValue":o[2]||(o[2]=l=>e(t).serviceSearchForm.organization=l),label:a._lang.label.organizationHost,type:e(s).inputs.multiselect,options:e(S).organizationList,disabled:e(r),valueProp:e(s).multiselectValueProp.value3},null,8,["modelValue","label","type","options","disabled","valueProp"]),i(m,{id:"abreviation",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(t).serviceSearchForm.abreviation,"onUpdate:modelValue":o[3]||(o[3]=l=>e(t).serviceSearchForm.abreviation=l),label:a._lang.label.abreviation,type:e(s).inputs.text,maxlength:16,disabled:e(r)},null,8,["modelValue","label","type","disabled"]),i(m,{id:"name",class:"mb-3 col-12 col-md-8",modelValue:e(t).serviceSearchForm.name,"onUpdate:modelValue":o[4]||(o[4]=l=>e(t).serviceSearchForm.name=l),label:a._lang.label.name,type:e(s).inputs.text,maxlength:45,disabled:e(r)},null,8,["modelValue","label","type","disabled"]),i(m,{id:"serviceCategoryId",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(t).serviceSearchForm.serviceCategoryIds,"onUpdate:modelValue":o[5]||(o[5]=l=>e(t).serviceSearchForm.serviceCategoryIds=l),label:a._lang.label.serviceCategoryId,type:e(s).inputs.multiselect,options:e(S).serviceCategoryList,disabled:e(r),mode:e(s).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"]),i(m,{id:"serviceSubCategoryId",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(t).serviceSearchForm.serviceSubCategoryIds,"onUpdate:modelValue":o[6]||(o[6]=l=>e(t).serviceSearchForm.serviceSubCategoryIds=l),label:a._lang.label.serviceSubCategoryId,type:e(s).inputs.multiselect,options:e(Q),disabled:e(r),mode:e(s).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"]),B.value?(b(),g(m,{key:0,id:"recordStateId",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(t).serviceSearchForm.recordStateIds,"onUpdate:modelValue":o[7]||(o[7]=l=>e(t).serviceSearchForm.recordStateIds=l),label:a._lang.label.state,type:e(s).inputs.multiselect,options:e(k),disabled:e(r),mode:e(s).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"])):C("",!0),a._isGuestLogged?C("",!0):(b(),g(m,{key:1,id:"active",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(t).serviceSearchForm.active,"onUpdate:modelValue":o[8]||(o[8]=l=>e(t).serviceSearchForm.active=l),label:a._lang.label.public,type:e(s).inputs.checkbox,disabled:e(r)},null,8,["modelValue","label","type","disabled"]))]),_:1})]),_:1},8,["title","disabled","loading"]),i(ue,null,{default:d(()=>[i(Z,{onSort:j,onChangePage:q,selectedItems:e(V),"onUpdate:selectedItems":o[9]||(o[9]=l=>L(V)?V.value=l:V=l),unselectedItems:e(F),"onUpdate:unselectedItems":o[10]||(o[10]=l=>L(F)?F.value=l:F=l),selectedState:e(_),"onUpdate:selectedState":o[11]||(o[11]=l=>L(_)?_.value=l:_=l),data:e(w),checkbox:!1,loading:e(r),defaultSort:"code",checkboxField:"code"},{columns:d(()=>[i(I,{name:a._lang.label.code,field:"code",sortable:!0},null,8,["name"]),i(I,{name:a._lang.label.serviceTypeId,field:"serviceType",sortField:"serviceTypeId",sortable:!0},null,8,["name"]),i(I,{name:a._lang.label.abreviation,field:"abreviation",sortable:!0},null,8,["name"]),i(I,{name:a._lang.label.name,field:"name",sortable:!0},null,8,["name"]),i(I,{name:a._lang.label.state,field:"recordStateTypeId",align:e(s).columnAlign.center,custom:pe,options:e(O),sortable:!0},null,8,["name","align","options"])]),actions:d(l=>[l.item.recordStateTypeId==e(s).recordStateType.draft?(b(),g(Y,{key:0,onClick:le=>N(l.item)},null,8,["onClick"])):C("",!0),l.item.recordStateTypeId>e(s).recordStateType.draft?(b(),g(J,{key:1,onClick:le=>G(l.item)},null,8,["onClick"])):C("",!0)]),_:1},8,["selectedItems","unselectedItems","selectedState","data","loading"])]),_:1})]),_:1}),i(ee,{id:M,title:a._lang.backoffice.service.delete,message:a._lang.backoffice.service.deleteQuestion,action:D},null,8,["title","message"])]),_:1},8,["title"])}}};export{ke as default};
