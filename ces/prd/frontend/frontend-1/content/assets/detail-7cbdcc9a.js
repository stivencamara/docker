import{_ as G}from"./general-518baca8.js";import{g as K,f as H,i as j,h as q,r as l,H as L,t as d,j as T,w as x,L as z,u as b,A as i,N as J,k as m,c as I,l as E,m as c,p,q as e,J as h,z as Y}from"./index-af43a57b.js";import{d as f}from"./document-da522e3d.js";import{d as V}from"./helpers-e1085a17.js";import{u as Q}from"./document-cf8abce2.js";import"./helpers-0b287b89.js";import{_ as W}from"./detail-actions-065076c1.js";import"./index.esm-26e5e98d.js";import"./refusal-a7068635.js";import"./index.esm-7a0fc0c5.js";import"./generic-b7841e8a.js";import"./helpers-bf231dc4.js";import"./helpers-bc77919f.js";import"./helpers-74c6ab4d.js";import"./helpers-8beca418.js";import"./helpers-817eb43d.js";import"./settings-da6dde1b.js";const _e={__name:"detail",setup(X){const R=K(),_=H();j();const k=q(),F=Q();let a=l(!0),o=L(V.newForm()),s=l(d.language.pt),S=L(V.formRules()),u=l(0),g=l(0),v=l(null);const O=T(()=>_.path.toLowerCase().indexOf("tarefas")>-1),y=T(()=>_.path.toLowerCase().indexOf("pesquisa")>-1);async function B(){a.value=!0;const t=await f.getById(u.value,g.value);b.validateResponse(t,null,()=>{Object.assign(o,t.data),k.emit(i.emitter.OBJECT_LOADED,t.data)}),a.value=!1}async function A(){a.value=!0;const t=await f.getLists(s.value);b.validateResponse(t,null,()=>{F.setLists(t.data)}),a.value=!1}x(()=>s.value,()=>{A()}),z(async()=>{u.value=b.decodeId(_.params.documentId),g.value=b.decodeId(_.params.documentVersion),!u.value||!g.value?R.push({name:i.router.BACKOFFICE_DOCUMENT_PAGE.name}):(await A(),await B(),w.value&&(await v.value.getHistory(),v.value.setActiveVersion(f.value),v.value.setStep()))});const D=l(J.havePermission(d.permissions.organization.createEdit)),w=T(()=>!O.value&&D.value&&(o.recordStateTypeId==d.recordStateType.published||o.recordStateTypeId==d.recordStateType.extinct||o.recordStateTypeId==d.recordStateType.obsolete));return(t,n)=>{const C=m("breadcrumb-item"),N=m("breadcrumb"),M=m("ctimeline"),P=m("card"),U=m("page");return I(),E(U,{title:t._lang.backoffice.document.detailPageTitle},{breadcrumb:c(()=>[p(N,{"has-home":!e(y)},{default:c(()=>[e(y)?(I(),E(C,{key:0,label:t._lang.search.pageTitle,"router-path":e(i).router.HOME_PAGE.path},null,8,["label","router-path"])):(I(),E(C,{key:1,label:t._lang.backoffice.document.breadcrumbTitle,"router-path":e(i).router.BACKOFFICE_DOCUMENT_PAGE.path},null,8,["label","router-path"])),p(C,{label:t._lang.backoffice.document.detailPageTitle},null,8,["label"])]),_:1},8,["has-home"])]),actions:c(()=>[p(W,{loading:e(a),"onUpdate:loading":n[0]||(n[0]=r=>h(a)?a.value=r:a=r),selectedLang:e(s),"onUpdate:selectedLang":n[1]||(n[1]=r=>h(s)?s.value=r:s=r),service:e(f),backRoute:e(i).router.BACKOFFICE_DOCUMENT_PAGE.name,editRoute:e(i).router.BACKOFFICE_EDIT_DOCUMENT_PAGE.name,itemIdField:"documentId",itemVersionField:"documentVersion",itemId:e(u),itemVersion:e(g),formModel:e(o),"show-record-state-actions":e(O),store:e(F)},null,8,["loading","selectedLang","service","backRoute","editRoute","itemId","itemVersion","formModel","show-record-state-actions","store"])]),default:c(()=>[e(w)?(I(),E(M,{key:0,itemId:e(u),detailRoute:e(i).router.BACKOFFICE_DETAIL_ENTITY_PAGE.name,service:e(f),versionFieldName:"documentVersion",dateFieldName:"documentApprovedDate",detailRouteIdField:"documentId",detailRouteVersionField:"documentVersion",ref_key:"timeline",ref:v},null,8,["itemId","detailRoute","service"])):Y("",!0),p(P,{shadow:!0},{body:c(()=>[p(G,{modelValue:e(o),"onUpdate:modelValue":n[2]||(n[2]=r=>h(o)?o.value=r:o=r),disabled:!0,loading:e(a),selectedLang:e(s),validateForm:!0,rules:e(S)},null,8,["modelValue","loading","selectedLang","rules"])]),_:1})]),_:1},8,["title"])}}};export{_e as default};
