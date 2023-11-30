import{_ as H}from"./form-ada9f763.js";import{g as U,f as q,i as x,h as J,r as a,j as S,v as o,k as h,P as z,w as Q,N as W,u as d,C as n,l as b,c as p,m as v,n as E,q as I,s as e,L as F,A as X}from"./index-8f6572ec.js";import{s as T}from"./service-e7eded46.js";import{s as k}from"./helpers-c4f94da1.js";import{u as Y}from"./service-8dc70e11.js";import"./helpers-7d049c8f.js";/* empty css                                                                     */import{_ as Z}from"./detail-actions-912db6df.js";import"./index.esm-4a513849.js";import"./address.vue_vue_type_style_index_0_scoped_5480b292_lang-927c9a51.js";import"./point-of-care-2b8f727a.js";import"./form-e936e5c0.js";import"./settings-c18f68fc.js";import"./index.esm-cf4f882d.js";import"./legislation-f0173235.js";import"./organization-7426b552.js";import"./helpers-93db4229.js";import"./refusal-ce593eff.js";import"./generic-b717e730.js";import"./point-of-care-2fd6ddaa.js";import"./helpers-9060223f.js";import"./extinct-confirm-4e238db8.js";import"./helpers-ec05c14a.js";import"./helpers-59dd2e8a.js";import"./helpers-4ad3f1da.js";const Fe={__name:"detail",setup($){const w=U(),f=q();x();const L=J(),C=Y();let s=a(!0),i=S(k.newForm()),u=a(o.language.pt);a([]);let O=a([]),P=S(k.formRules()),m=a(0),c=a(0),B=a(0),K=a(-1),g=a(null);const y=h(()=>f.path.toLowerCase().indexOf("tarefas")>-1),V=h(()=>f.path.toLowerCase().indexOf("pesquisa")>-1),M=a(z.havePermission(o.permissions.service.createEdit));async function G(){s.value=!0;const r=await T.getById(m.value,c.value);d.validateResponse(r,null,()=>{let t=r.data;t.eventTypeId=t.lifeEventId?o.eventType.life:o.eventType.business,t.processingTime.type=t.processingTime.weeks?o.processingTimeType.simplified:o.processingTimeType.advanced,Object.assign(i,t),L.emit(n.emitter.OBJECT_LOADED,r.data),C.setFormToCompare(d.cloneObject(t))}),s.value=!1}async function A(){s.value=!0;const r=await T.getLists(u.value);d.validateResponse(r,null,()=>{C.setLists(r.data)}),s.value=!1}Q(()=>u.value,()=>{A()}),W(async()=>{m.value=d.decodeId(f.params.serviceId),c.value=d.decodeId(f.params.serviceVersion),!m.value||!c.value?w.push({name:n.router.BACKOFFICE_SERVICE_PAGE.name}):(await A(),await G(),R.value&&(await g.value.getHistory(),g.value.setActiveVersion(c.value),g.value.setStep()))});const R=h(()=>!y.value&&M.value&&(i.recordStateTypeId==o.recordStateType.published||i.recordStateTypeId==o.recordStateType.extinct||i.recordStateTypeId==o.recordStateType.obsolete));return(r,t)=>{const _=b("breadcrumb-item"),D=b("breadcrumb"),N=b("ctimeline"),j=b("page");return p(),v(j,{title:r._lang.backoffice.service.detailPageTitle},{breadcrumb:E(()=>[I(D,{"has-home":!e(V)},{default:E(()=>[e(y)?(p(),v(_,{key:0,label:r._lang.backoffice.tasks.breadcrumbTitle,"router-path":e(n).router.BACKOFFICE_TASKS_PAGE.path},null,8,["label","router-path"])):e(V)?(p(),v(_,{key:1,label:r._lang.search.pageTitle,"router-path":e(n).router.HOME_PAGE.path},null,8,["label","router-path"])):(p(),v(_,{key:2,label:r._lang.backoffice.service.breadcrumbTitle,"router-path":e(n).router.BACKOFFICE_SERVICE_PAGE.path},null,8,["label","router-path"])),I(_,{label:r._lang.backoffice.service.detailPageTitle},null,8,["label"])]),_:1},8,["has-home"])]),actions:E(()=>[I(Z,{loading:e(s),"onUpdate:loading":t[0]||(t[0]=l=>F(s)?s.value=l:s=l),selectedLang:e(u),"onUpdate:selectedLang":t[1]||(t[1]=l=>F(u)?u.value=l:u=l),service:e(T),backRoute:e(n).router.BACKOFFICE_SERVICE_PAGE.name,editRoute:e(n).router.BACKOFFICE_EDIT_SERVICE_PAGE.name,itemIdField:"serviceId",itemVersionField:"serviceVersion",itemId:e(m),itemVersion:e(c),formModel:e(i),"show-record-state-actions":e(y),store:e(C)},null,8,["loading","selectedLang","service","backRoute","editRoute","itemId","itemVersion","formModel","show-record-state-actions","store"])]),default:E(()=>[e(R)?(p(),v(N,{versions:e(O),key:e(B),activeVersion:e(K),itemId:e(m),detailRoute:e(n).router.BACKOFFICE_DETAIL_SERVICE_PAGE.name,service:e(T),versionFieldName:"serviceVersion",dateFieldName:"serviceApprovedDate",detailRouteIdField:"serviceId",detailRouteVersionField:"serviceVersion",ref_key:"timeline",ref:g},null,8,["versions","activeVersion","itemId","detailRoute","service"])):X("",!0),I(H,{formModel:e(i),"onUpdate:formModel":t[2]||(t[2]=l=>F(i)?i.value=l:i=l),disabled:!0,loading:e(s),selectedLang:e(u),validateForm:!0,rules:e(P),isExternalEdit:!1,showProgress:!1,vuelidate:null},null,8,["formModel","loading","selectedLang","rules"])]),_:1},8,["title"])}}};export{Fe as default};