import{_ as j}from"./form-b78f4ed7.js";import{g as U,f as q,i as x,h as z,r,E as k,s as u,j as h,M as J,N as Y,K as Q,u as d,z as o,k as E,c as p,l as v,w as b,n as I,p as e,H as R,y as W}from"./index-4fe030fb.js";import{s as C}from"./service-6ce3c872.js";import{s as S}from"./helpers-7189282a.js";import{u as X}from"./service-ede9828c.js";import"./helpers-79f72589.js";/* empty css                                                                     */import{_ as Z}from"./detail-actions-a4d1a3d7.js";import"./index.esm-bce4ceba.js";import"./address.vue_vue_type_style_index_0_scoped_2266ba05_lang-26d7c6d3.js";import"./index.esm-cfa4c1f7.js";import"./point-of-care-bbec9da4.js";import"./form-5907880e.js";import"./settings-364df236.js";import"./refusal-7a8f2f5e.js";import"./generic-31c2de5a.js";import"./point-of-care-9174b5ec.js";import"./organization-ee9170b1.js";import"./helpers-58870a2d.js";import"./helpers-8b4bcdba.js";import"./helpers-31f34bd7.js";import"./helpers-f7854627.js";import"./helpers-45818705.js";const Fe={__name:"detail",setup($){const w=U(),f=q();x();const O=z(),T=X();let s=r(!0),l=k(S.newForm()),n=r(u.language.pt);r([]);let L=r([]),B=k(S.formRules()),m=r(0),c=r(0),P=r(0),K=r(-1),g=r(null);const F=h(()=>f.path.toLowerCase().indexOf("tarefas")>-1),y=h(()=>f.path.toLowerCase().indexOf("pesquisa")>-1),M=r(J.havePermission(u.permissions.service.createEdit));async function G(){s.value=!0;const a=await C.getById(m.value,c.value);d.validateResponse(a,null,()=>{let t=a.data;t.eventTypeId=t.lifeEventId?u.eventType.life:u.eventType.business,t.processingTime.type=t.processingTime.weeks?u.processingTimeType.simplified:u.processingTimeType.advanced,Object.assign(l,t),O.emit(o.emitter.OBJECT_LOADED,a.data),T.setFormToCompare(d.cloneObject(t))}),s.value=!1}async function A(){s.value=!0;const a=await C.getLists(n.value);d.validateResponse(a,null,()=>{T.setLists(a.data)}),s.value=!1}Y(()=>n.value,()=>{A()}),Q(async()=>{m.value=d.decodeId(f.params.serviceId),c.value=d.decodeId(f.params.serviceVersion),!m.value||!c.value?w.push({name:o.router.BACKOFFICE_SERVICE_PAGE.name}):(await A(),await G(),V.value&&(await g.value.getHistory(),g.value.setActiveVersion(c.value),g.value.setStep()))});const V=h(()=>!F.value&&M.value&&l.recordStateTypeId!=u.recordStateType.draft);return(a,t)=>{const _=E("breadcrumb-item"),D=E("breadcrumb"),H=E("ctimeline"),N=E("page");return p(),v(N,{title:a._lang.backoffice.service.detailPageTitle},{breadcrumb:b(()=>[I(D,{"has-home":!e(y)},{default:b(()=>[e(F)?(p(),v(_,{key:0,label:a._lang.backoffice.tasks.breadcrumbTitle,"router-path":e(o).router.BACKOFFICE_TASKS_PAGE.path},null,8,["label","router-path"])):e(y)?(p(),v(_,{key:1,label:a._lang.search.pageTitle,"router-path":e(o).router.BACKOFFICE_SEARCH_HISTORY_PAGE.path},null,8,["label","router-path"])):(p(),v(_,{key:2,label:a._lang.backoffice.service.breadcrumbTitle,"router-path":e(o).router.BACKOFFICE_SERVICE_PAGE.path},null,8,["label","router-path"])),I(_,{label:a._lang.backoffice.service.detailPageTitle},null,8,["label"])]),_:1},8,["has-home"])]),actions:b(()=>[I(Z,{loading:e(s),"onUpdate:loading":t[0]||(t[0]=i=>R(s)?s.value=i:s=i),selectedLang:e(n),"onUpdate:selectedLang":t[1]||(t[1]=i=>R(n)?n.value=i:n=i),service:e(C),backRoute:e(o).router.BACKOFFICE_SERVICE_PAGE.name,editRoute:e(o).router.BACKOFFICE_EDIT_SERVICE_PAGE.name,itemIdField:"serviceId",itemVersionField:"serviceVersion",itemId:e(m),itemVersion:e(c),formModel:e(l),"show-record-state-actions":e(F),store:e(T)},null,8,["loading","selectedLang","service","backRoute","editRoute","itemId","itemVersion","formModel","show-record-state-actions","store"])]),default:b(()=>[e(V)?(p(),v(H,{versions:e(L),key:e(P),activeVersion:e(K),itemId:e(m),detailRoute:e(o).router.BACKOFFICE_DETAIL_SERVICE_PAGE.name,service:e(C),versionFieldName:"serviceVersion",dateFieldName:"serviceApprovedDate",detailRouteIdField:"serviceId",detailRouteVersionField:"serviceVersion",ref_key:"timeline",ref:g},null,8,["versions","activeVersion","itemId","detailRoute","service"])):W("",!0),I(j,{formModel:e(l),"onUpdate:formModel":t[2]||(t[2]=i=>R(l)?l.value=i:l=i),disabled:!0,loading:e(s),selectedLang:e(n),validateForm:!0,rules:e(B),isExternalEdit:!1,showProgress:!1},null,8,["formModel","loading","selectedLang","rules"])]),_:1},8,["title"])}}};export{Fe as default};
