import{_ as U}from"./general-34d496eb.js";import{g as G,f as H,i as j,h as z,r as l,E as V,s as I,j as F,N as Y,K as q,u as v,z as n,M as x,k as m,c as b,l as E,w as c,n as p,p as e,H as h,y as J}from"./index-074485c3.js";import{d as f}from"./document-70e5cc70.js";import{d as L}from"./helpers-130c44c2.js";import{u as Q}from"./document-14bd3e5d.js";import"./helpers-9f106e00.js";import{_ as W}from"./detail-actions-eb96f18d.js";import"./index.esm-ba4feb27.js";import"./refusal-f524e0ab.js";import"./index.esm-da08cc71.js";import"./generic-9fc3b9dd.js";import"./helpers-3438087c.js";import"./helpers-6136d4cb.js";import"./helpers-1bacd47d.js";import"./helpers-d98c457a.js";import"./helpers-c25ab84a.js";import"./settings-c1957f95.js";const _e={__name:"detail",setup(X){const k=G(),_=H();j();const y=z(),O=Q();let a=l(!0),r=V(L.newForm()),s=l(I.language.pt),B=V(L.formRules()),u=l(0),d=l(0),g=l(null);const T=F(()=>_.path.toLowerCase().indexOf("tarefas")>-1),A=F(()=>_.path.toLowerCase().indexOf("pesquisa")>-1);async function D(){a.value=!0;const t=await f.getById(u.value,d.value);v.validateResponse(t,null,()=>{Object.assign(r,t.data),y.emit(n.emitter.OBJECT_LOADED,t.data)}),a.value=!1}async function R(){a.value=!0;const t=await f.getLists(s.value,d.value);v.validateResponse(t,null,()=>{O.setLists(t.data)}),a.value=!1}Y(()=>s.value,()=>{R()}),q(async()=>{u.value=v.decodeId(_.params.documentId),d.value=v.decodeId(_.params.documentVersion),!u.value||!d.value?k.push({name:n.router.BACKOFFICE_DOCUMENT_PAGE.name}):(await R(),await D(),w.value&&(await g.value.getHistory(),g.value.setActiveVersion(f.value),g.value.setStep()))});const N=l(x.havePermission(I.permissions.organization.createEdit)),w=F(()=>!T.value&&N.value&&r.recordStateTypeId!=I.recordStateType.draft);return(t,i)=>{const C=m("breadcrumb-item"),M=m("breadcrumb"),P=m("ctimeline"),S=m("card"),K=m("page");return b(),E(K,{title:t._lang.backoffice.document.detailPageTitle},{breadcrumb:c(()=>[p(M,{"has-home":!e(A)},{default:c(()=>[e(A)?(b(),E(C,{key:0,label:t._lang.search.pageTitle,"router-path":e(n).router.BACKOFFICE_SEARCH_HISTORY_PAGE.path},null,8,["label","router-path"])):(b(),E(C,{key:1,label:t._lang.backoffice.document.breadcrumbTitle,"router-path":e(n).router.BACKOFFICE_DOCUMENT_PAGE.path},null,8,["label","router-path"])),p(C,{label:t._lang.backoffice.document.detailPageTitle},null,8,["label"])]),_:1},8,["has-home"])]),actions:c(()=>[p(W,{loading:e(a),"onUpdate:loading":i[0]||(i[0]=o=>h(a)?a.value=o:a=o),selectedLang:e(s),"onUpdate:selectedLang":i[1]||(i[1]=o=>h(s)?s.value=o:s=o),service:e(f),backRoute:e(n).router.BACKOFFICE_DOCUMENT_PAGE.name,editRoute:e(n).router.BACKOFFICE_EDIT_DOCUMENT_PAGE.name,itemIdField:"documentId",itemVersionField:"documentVersion",itemId:e(u),itemVersion:e(d),formModel:e(r),"show-record-state-actions":e(T),store:e(O)},null,8,["loading","selectedLang","service","backRoute","editRoute","itemId","itemVersion","formModel","show-record-state-actions","store"])]),default:c(()=>[e(w)?(b(),E(P,{key:0,itemId:e(u),detailRoute:e(n).router.BACKOFFICE_DETAIL_ENTITY_PAGE.name,service:e(f),versionFieldName:"documentVersion",dateFieldName:"documentApprovedDate",detailRouteIdField:"documentId",detailRouteVersionField:"documentVersion",ref_key:"timeline",ref:g},null,8,["itemId","detailRoute","service"])):J("",!0),p(S,{shadow:!0},{body:c(()=>[p(U,{modelValue:e(r),"onUpdate:modelValue":i[2]||(i[2]=o=>h(r)?r.value=o:r=o),disabled:!0,loading:e(a),selectedLang:e(s),validateForm:!0,rules:e(B)},null,8,["modelValue","loading","selectedLang","rules"])]),_:1})]),_:1},8,["title"])}}};export{_e as default};