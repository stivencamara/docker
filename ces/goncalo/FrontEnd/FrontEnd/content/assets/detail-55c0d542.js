import{_ as j}from"./form-0d2c2902.js";import{g as U,f as q,i as x,h as z,r,E as k,s as u,j as h,M as J,N as Y,K as Q,u as d,z as o,k as E,c as p,l as v,w as b,n as I,p as e,H as R,y as W}from"./index-f9e60098.js";import{s as C}from"./service-83e15c92.js";import{s as S}from"./helpers-b2b11f1a.js";import{u as X}from"./service-20d09ff7.js";import"./helpers-c3825dec.js";/* empty css                                                                     */import{_ as Z}from"./detail-actions-2525a887.js";import"./index.esm-7b4c8e23.js";import"./address.vue_vue_type_style_index_0_scoped_2266ba05_lang-a12e0ec9.js";import"./index.esm-cf21939f.js";import"./point-of-care-07bdb05e.js";import"./form-cf112997.js";import"./settings-d00b4206.js";import"./refusal-59842998.js";import"./generic-3abf2d5e.js";import"./point-of-care-71dd5696.js";import"./organization-c676f695.js";import"./helpers-4005990d.js";import"./helpers-4fff0916.js";import"./helpers-56436fd7.js";import"./helpers-47f8b2d1.js";import"./helpers-fd793e05.js";const Fe={__name:"detail",setup($){const w=U(),f=q();x();const O=z(),T=X();let s=r(!0),l=k(S.newForm()),n=r(u.language.pt);r([]);let L=r([]),B=k(S.formRules()),m=r(0),c=r(0),P=r(0),K=r(-1),g=r(null);const F=h(()=>f.path.toLowerCase().indexOf("tarefas")>-1),y=h(()=>f.path.toLowerCase().indexOf("pesquisa")>-1),M=r(J.havePermission(u.permissions.service.createEdit));async function G(){s.value=!0;const a=await C.getById(m.value,c.value);d.validateResponse(a,null,()=>{let t=a.data;t.eventTypeId=t.lifeEventId?u.eventType.life:u.eventType.business,t.processingTime.type=t.processingTime.weeks?u.processingTimeType.simplified:u.processingTimeType.advanced,Object.assign(l,t),O.emit(o.emitter.OBJECT_LOADED,a.data),T.setFormToCompare(d.cloneObject(t))}),s.value=!1}async function A(){s.value=!0;const a=await C.getLists(n.value);d.validateResponse(a,null,()=>{T.setLists(a.data)}),s.value=!1}Y(()=>n.value,()=>{A()}),Q(async()=>{m.value=d.decodeId(f.params.serviceId),c.value=d.decodeId(f.params.serviceVersion),!m.value||!c.value?w.push({name:o.router.BACKOFFICE_SERVICE_PAGE.name}):(await A(),await G(),V.value&&(await g.value.getHistory(),g.value.setActiveVersion(c.value),g.value.setStep()))});const V=h(()=>!F.value&&M.value&&l.recordStateTypeId!=u.recordStateType.draft);return(a,t)=>{const _=E("breadcrumb-item"),D=E("breadcrumb"),H=E("ctimeline"),N=E("page");return p(),v(N,{title:a._lang.backoffice.service.detailPageTitle},{breadcrumb:b(()=>[I(D,{"has-home":!e(y)},{default:b(()=>[e(F)?(p(),v(_,{key:0,label:a._lang.backoffice.tasks.breadcrumbTitle,"router-path":e(o).router.BACKOFFICE_TASKS_PAGE.path},null,8,["label","router-path"])):e(y)?(p(),v(_,{key:1,label:a._lang.search.pageTitle,"router-path":e(o).router.BACKOFFICE_SEARCH_HISTORY_PAGE.path},null,8,["label","router-path"])):(p(),v(_,{key:2,label:a._lang.backoffice.service.breadcrumbTitle,"router-path":e(o).router.BACKOFFICE_SERVICE_PAGE.path},null,8,["label","router-path"])),I(_,{label:a._lang.backoffice.service.detailPageTitle},null,8,["label"])]),_:1},8,["has-home"])]),actions:b(()=>[I(Z,{loading:e(s),"onUpdate:loading":t[0]||(t[0]=i=>R(s)?s.value=i:s=i),selectedLang:e(n),"onUpdate:selectedLang":t[1]||(t[1]=i=>R(n)?n.value=i:n=i),service:e(C),backRoute:e(o).router.BACKOFFICE_SERVICE_PAGE.name,editRoute:e(o).router.BACKOFFICE_EDIT_SERVICE_PAGE.name,itemIdField:"serviceId",itemVersionField:"serviceVersion",itemId:e(m),itemVersion:e(c),formModel:e(l),"show-record-state-actions":e(F),store:e(T)},null,8,["loading","selectedLang","service","backRoute","editRoute","itemId","itemVersion","formModel","show-record-state-actions","store"])]),default:b(()=>[e(V)?(p(),v(H,{versions:e(L),key:e(P),activeVersion:e(K),itemId:e(m),detailRoute:e(o).router.BACKOFFICE_DETAIL_SERVICE_PAGE.name,service:e(C),versionFieldName:"serviceVersion",dateFieldName:"serviceApprovedDate",detailRouteIdField:"serviceId",detailRouteVersionField:"serviceVersion",ref_key:"timeline",ref:g},null,8,["versions","activeVersion","itemId","detailRoute","service"])):W("",!0),I(j,{formModel:e(l),"onUpdate:formModel":t[2]||(t[2]=i=>R(l)?l.value=i:l=i),disabled:!0,loading:e(s),selectedLang:e(n),validateForm:!0,rules:e(B),isExternalEdit:!1,showProgress:!1},null,8,["formModel","loading","selectedLang","rules"])]),_:1},8,["title"])}}};export{Fe as default};