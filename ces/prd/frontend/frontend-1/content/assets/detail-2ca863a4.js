import{_ as H}from"./form-d8ac3deb.js";import{g as U,f as q,i as x,h as J,r as a,j as S,v as o,k as h,P as z,w as Q,N as W,u as d,C as n,l as b,c as p,m as v,n as E,q as I,s as e,L as F,A as X}from"./index-864107e7.js";import{s as T}from"./service-306d46f6.js";import{s as k}from"./helpers-eda893e5.js";import{u as Y}from"./service-4a5a3512.js";import"./helpers-e3e3ab9f.js";/* empty css                                                                     */import{_ as Z}from"./detail-actions-9b8d78b0.js";import"./index.esm-bc117818.js";import"./address.vue_vue_type_style_index_0_scoped_5480b292_lang-4d378bb8.js";import"./point-of-care-ecde6227.js";import"./form-2b334579.js";import"./settings-1cea3d18.js";import"./index.esm-e15864e2.js";import"./legislation-3cdd1e44.js";import"./organization-5dc596e2.js";import"./helpers-2033b956.js";import"./refusal-7ac09a70.js";import"./generic-984469e4.js";import"./point-of-care-37f973a8.js";import"./helpers-33459f07.js";import"./extinct-confirm-e470566d.js";import"./helpers-9e4778bc.js";import"./helpers-b4e0852e.js";import"./helpers-3d04a57c.js";const Fe={__name:"detail",setup($){const w=U(),f=q();x();const L=J(),C=Y();let s=a(!0),i=S(k.newForm()),u=a(o.language.pt);a([]);let O=a([]),P=S(k.formRules()),m=a(0),c=a(0),B=a(0),K=a(-1),g=a(null);const y=h(()=>f.path.toLowerCase().indexOf("tarefas")>-1),V=h(()=>f.path.toLowerCase().indexOf("pesquisa")>-1),M=a(z.havePermission(o.permissions.service.createEdit));async function G(){s.value=!0;const r=await T.getById(m.value,c.value);d.validateResponse(r,null,()=>{let t=r.data;t.eventTypeId=t.lifeEventId?o.eventType.life:o.eventType.business,t.processingTime.type=t.processingTime.weeks?o.processingTimeType.simplified:o.processingTimeType.advanced,Object.assign(i,t),L.emit(n.emitter.OBJECT_LOADED,r.data),C.setFormToCompare(d.cloneObject(t))}),s.value=!1}async function A(){s.value=!0;const r=await T.getLists(u.value);d.validateResponse(r,null,()=>{C.setLists(r.data)}),s.value=!1}Q(()=>u.value,()=>{A()}),W(async()=>{m.value=d.decodeId(f.params.serviceId),c.value=d.decodeId(f.params.serviceVersion),!m.value||!c.value?w.push({name:n.router.BACKOFFICE_SERVICE_PAGE.name}):(await A(),await G(),R.value&&(await g.value.getHistory(),g.value.setActiveVersion(c.value),g.value.setStep()))});const R=h(()=>!y.value&&M.value&&(i.recordStateTypeId==o.recordStateType.published||i.recordStateTypeId==o.recordStateType.extinct||i.recordStateTypeId==o.recordStateType.obsolete));return(r,t)=>{const _=b("breadcrumb-item"),D=b("breadcrumb"),N=b("ctimeline"),j=b("page");return p(),v(j,{title:r._lang.backoffice.service.detailPageTitle},{breadcrumb:E(()=>[I(D,{"has-home":!e(V)},{default:E(()=>[e(y)?(p(),v(_,{key:0,label:r._lang.backoffice.tasks.breadcrumbTitle,"router-path":e(n).router.BACKOFFICE_TASKS_PAGE.path},null,8,["label","router-path"])):e(V)?(p(),v(_,{key:1,label:r._lang.search.pageTitle,"router-path":e(n).router.HOME_PAGE.path},null,8,["label","router-path"])):(p(),v(_,{key:2,label:r._lang.backoffice.service.breadcrumbTitle,"router-path":e(n).router.BACKOFFICE_SERVICE_PAGE.path},null,8,["label","router-path"])),I(_,{label:r._lang.backoffice.service.detailPageTitle},null,8,["label"])]),_:1},8,["has-home"])]),actions:E(()=>[I(Z,{loading:e(s),"onUpdate:loading":t[0]||(t[0]=l=>F(s)?s.value=l:s=l),selectedLang:e(u),"onUpdate:selectedLang":t[1]||(t[1]=l=>F(u)?u.value=l:u=l),service:e(T),backRoute:e(n).router.BACKOFFICE_SERVICE_PAGE.name,editRoute:e(n).router.BACKOFFICE_EDIT_SERVICE_PAGE.name,itemIdField:"serviceId",itemVersionField:"serviceVersion",itemId:e(m),itemVersion:e(c),formModel:e(i),"show-record-state-actions":e(y),store:e(C)},null,8,["loading","selectedLang","service","backRoute","editRoute","itemId","itemVersion","formModel","show-record-state-actions","store"])]),default:E(()=>[e(R)?(p(),v(N,{versions:e(O),key:e(B),activeVersion:e(K),itemId:e(m),detailRoute:e(n).router.BACKOFFICE_DETAIL_SERVICE_PAGE.name,service:e(T),versionFieldName:"serviceVersion",dateFieldName:"serviceApprovedDate",detailRouteIdField:"serviceId",detailRouteVersionField:"serviceVersion",ref_key:"timeline",ref:g},null,8,["versions","activeVersion","itemId","detailRoute","service"])):X("",!0),I(H,{formModel:e(i),"onUpdate:formModel":t[2]||(t[2]=l=>F(i)?i.value=l:i=l),disabled:!0,loading:e(s),selectedLang:e(u),validateForm:!0,rules:e(P),isExternalEdit:!1,showProgress:!1,vuelidate:null},null,8,["formModel","loading","selectedLang","rules"])]),_:1},8,["title"])}}};export{Fe as default};
