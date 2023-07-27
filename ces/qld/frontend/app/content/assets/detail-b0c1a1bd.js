import{_ as G}from"./form-81b1cc2a.js";import{h as D,C as H,q as U,D as j,i as l,s as k,v as I,E as F,M as q,K as x,j as C,l as r,N as z,r as O,o as p,c as d,w as g,a as v,m as e,z as A,y as J}from"./index-a3ba1ed7.js";import{p as b}from"./point-of-care-748eca52.js";import{p as w}from"./helpers-ae560b5a.js";import{u as Y}from"./point-of-care-355d6f64.js";import"./helpers-4d6c1969.js";import{_ as Q}from"./detail-actions-971aed3f.js";import"./contacts-b2bccd25.js";import"./index.esm-9dd2f6da.js";import"./location-bed63be3.js";import"./address-238902c8.js";import"./organization-ce7c2862.js";import"./address.vue_vue_type_style_index_0_scoped_2266ba05_lang-0a4ce42e.js";import"./service-e931ab78.js";import"./refusal-478c260d.js";import"./index.esm-d7202dd3.js";import"./generic-4e94cd3a.js";import"./service-dc586f40.js";import"./helpers-10c1d19c.js";import"./helpers-0cd9b2b2.js";import"./helpers-41fd1e3d.js";import"./helpers-2771532d.js";import"./helpers-9164e810.js";import"./settings-4e9392c0.js";const Ee={__name:"detail",setup(W){const L=D(),c=H();U();const y=j(),h=Y();let a=l(!0),i=k(w.newForm()),s=l(I.language.pt);l([]);let B=k(w.formRules()),u=l(0),m=l(0),f=l(null);const E=F(()=>c.path.toLowerCase().indexOf("tarefas")>-1),R=F(()=>c.path.toLowerCase().indexOf("pesquisa")>-1),V=l(q.havePermission(I.permissions.pointOfCare.createEdit));async function S(){a.value=!0;const t=await b.getById(u.value,m.value);C.validateResponse(t,null,()=>{Object.assign(i,t.data),y.emit(r.emitter.OBJECT_LOADED,t.data)}),a.value=!1}async function T(){a.value=!0;const t=await b.getLists(s.value);C.validateResponse(t,null,()=>{h.setLists(t.data)}),a.value=!1}x(async()=>{u.value=C.decodeId(c.params.pointOfCareId),m.value=C.decodeId(c.params.pointOfCareVersion),!u.value||!m.value?L.push({name:r.router.BACKOFFICE_POINT_OF_CARE_PAGE.name}):(await T(),await S(),P.value&&(await f.value.getHistory(),f.value.setActiveVersion(m.value),f.value.setStep()))}),z(()=>s.value,()=>{T()});const P=F(()=>!E.value&&V.value&&i.recordStateTypeId!=I.recordStateType.draft);return(t,n)=>{const _=O("breadcrumb-item"),N=O("breadcrumb"),K=O("ctimeline"),M=O("page");return p(),d(M,{title:t._lang.backoffice.pointOfCare.detailPageTitle},{breadcrumb:g(()=>[v(N,{"has-home":!e(R)},{default:g(()=>[e(E)?(p(),d(_,{key:0,label:t._lang.backoffice.tasks.breadcrumbTitle,"router-path":e(r).router.BACKOFFICE_TASKS_PAGE.path},null,8,["label","router-path"])):e(R)?(p(),d(_,{key:1,label:t._lang.search.pageTitle,"router-path":e(r).router.BACKOFFICE_SEARCH_HISTORY_PAGE.path},null,8,["label","router-path"])):(p(),d(_,{key:2,label:t._lang.backoffice.pointOfCare.breadcrumbTitle,"router-path":e(r).router.BACKOFFICE_POINT_OF_CARE_PAGE.path},null,8,["label","router-path"])),v(_,{label:t._lang.backoffice.pointOfCare.detailPageTitle},null,8,["label"])]),_:1},8,["has-home"])]),actions:g(()=>[v(Q,{loading:e(a),"onUpdate:loading":n[0]||(n[0]=o=>A(a)?a.value=o:a=o),selectedLang:e(s),"onUpdate:selectedLang":n[1]||(n[1]=o=>A(s)?s.value=o:s=o),service:e(b),backRoute:e(r).router.BACKOFFICE_POINT_OF_CARE_PAGE.name,editRoute:e(r).router.BACKOFFICE_EDIT_POINT_OF_CARE_PAGE.name,itemIdField:"pointOfCareId",itemVersionField:"pointOfCareVersion",itemId:e(u),itemVersion:e(m),formModel:e(i),"show-record-state-actions":e(E),store:e(h)},null,8,["loading","selectedLang","service","backRoute","editRoute","itemId","itemVersion","formModel","show-record-state-actions","store"])]),default:g(()=>[e(P)?(p(),d(K,{key:0,itemId:e(u),detailRoute:e(r).router.BACKOFFICE_DETAIL_POINT_OF_CARE_PAGE.name,service:e(b),versionFieldName:"pointOfCareVersion",dateFieldName:"pointOfCareApprovedDate",detailRouteIdField:"pointOfCareId",detailRouteVersionField:"pointOfCareVersion",ref_key:"timeline",ref:f},null,8,["itemId","detailRoute","service"])):J("",!0),v(G,{formModel:e(i),"onUpdate:formModel":n[2]||(n[2]=o=>A(i)?i.value=o:i=o),disabled:!0,validateForm:!1,loading:e(a),selectedLang:e(s),rules:e(B),isExternalEdit:!1,showProgress:!1},null,8,["formModel","loading","selectedLang","rules"])]),_:1},8,["title"])}}};export{Ee as default};
