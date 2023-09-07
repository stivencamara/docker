import{_ as G}from"./form-040085c8.js";import{g as D,f as H,i as U,h as j,r as l,E as k,s as I,j as F,M as q,K as x,u as C,z as r,N as z,k as O,c as p,l as d,w as g,n as v,p as e,H as A,y as J}from"./index-4fe030fb.js";import{p as b}from"./point-of-care-9174b5ec.js";import{p as w}from"./helpers-58870a2d.js";import{u as Y}from"./point-of-care-bbec9da4.js";import"./helpers-79f72589.js";import{_ as Q}from"./detail-actions-a4d1a3d7.js";import"./contacts-e1f3718d.js";import"./index.esm-cfa4c1f7.js";import"./location-218f3a85.js";import"./address-5eeef571.js";import"./organization-ee9170b1.js";import"./address.vue_vue_type_style_index_0_scoped_2266ba05_lang-26d7c6d3.js";import"./service-ede9828c.js";import"./refusal-7a8f2f5e.js";import"./index.esm-bce4ceba.js";import"./generic-31c2de5a.js";import"./service-6ce3c872.js";import"./helpers-7189282a.js";import"./helpers-8b4bcdba.js";import"./helpers-31f34bd7.js";import"./helpers-f7854627.js";import"./helpers-45818705.js";import"./settings-364df236.js";const Ee={__name:"detail",setup(W){const L=D(),c=H();U();const y=j(),h=Y();let a=l(!0),i=k(w.newForm()),s=l(I.language.pt);l([]);let B=k(w.formRules()),u=l(0),m=l(0),f=l(null);const E=F(()=>c.path.toLowerCase().indexOf("tarefas")>-1),R=F(()=>c.path.toLowerCase().indexOf("pesquisa")>-1),V=l(q.havePermission(I.permissions.pointOfCare.createEdit));async function S(){a.value=!0;const t=await b.getById(u.value,m.value);C.validateResponse(t,null,()=>{Object.assign(i,t.data),y.emit(r.emitter.OBJECT_LOADED,t.data)}),a.value=!1}async function T(){a.value=!0;const t=await b.getLists(s.value);C.validateResponse(t,null,()=>{h.setLists(t.data)}),a.value=!1}x(async()=>{u.value=C.decodeId(c.params.pointOfCareId),m.value=C.decodeId(c.params.pointOfCareVersion),!u.value||!m.value?L.push({name:r.router.BACKOFFICE_POINT_OF_CARE_PAGE.name}):(await T(),await S(),P.value&&(await f.value.getHistory(),f.value.setActiveVersion(m.value),f.value.setStep()))}),z(()=>s.value,()=>{T()});const P=F(()=>!E.value&&V.value&&i.recordStateTypeId!=I.recordStateType.draft);return(t,n)=>{const _=O("breadcrumb-item"),N=O("breadcrumb"),K=O("ctimeline"),M=O("page");return p(),d(M,{title:t._lang.backoffice.pointOfCare.detailPageTitle},{breadcrumb:g(()=>[v(N,{"has-home":!e(R)},{default:g(()=>[e(E)?(p(),d(_,{key:0,label:t._lang.backoffice.tasks.breadcrumbTitle,"router-path":e(r).router.BACKOFFICE_TASKS_PAGE.path},null,8,["label","router-path"])):e(R)?(p(),d(_,{key:1,label:t._lang.search.pageTitle,"router-path":e(r).router.BACKOFFICE_SEARCH_HISTORY_PAGE.path},null,8,["label","router-path"])):(p(),d(_,{key:2,label:t._lang.backoffice.pointOfCare.breadcrumbTitle,"router-path":e(r).router.BACKOFFICE_POINT_OF_CARE_PAGE.path},null,8,["label","router-path"])),v(_,{label:t._lang.backoffice.pointOfCare.detailPageTitle},null,8,["label"])]),_:1},8,["has-home"])]),actions:g(()=>[v(Q,{loading:e(a),"onUpdate:loading":n[0]||(n[0]=o=>A(a)?a.value=o:a=o),selectedLang:e(s),"onUpdate:selectedLang":n[1]||(n[1]=o=>A(s)?s.value=o:s=o),service:e(b),backRoute:e(r).router.BACKOFFICE_POINT_OF_CARE_PAGE.name,editRoute:e(r).router.BACKOFFICE_EDIT_POINT_OF_CARE_PAGE.name,itemIdField:"pointOfCareId",itemVersionField:"pointOfCareVersion",itemId:e(u),itemVersion:e(m),formModel:e(i),"show-record-state-actions":e(E),store:e(h)},null,8,["loading","selectedLang","service","backRoute","editRoute","itemId","itemVersion","formModel","show-record-state-actions","store"])]),default:g(()=>[e(P)?(p(),d(K,{key:0,itemId:e(u),detailRoute:e(r).router.BACKOFFICE_DETAIL_POINT_OF_CARE_PAGE.name,service:e(b),versionFieldName:"pointOfCareVersion",dateFieldName:"pointOfCareApprovedDate",detailRouteIdField:"pointOfCareId",detailRouteVersionField:"pointOfCareVersion",ref_key:"timeline",ref:f},null,8,["itemId","detailRoute","service"])):J("",!0),v(G,{formModel:e(i),"onUpdate:formModel":n[2]||(n[2]=o=>A(i)?i.value=o:i=o),disabled:!0,validateForm:!1,loading:e(a),selectedLang:e(s),rules:e(B),isExternalEdit:!1,showProgress:!1},null,8,["formModel","loading","selectedLang","rules"])]),_:1},8,["title"])}}};export{Ee as default};