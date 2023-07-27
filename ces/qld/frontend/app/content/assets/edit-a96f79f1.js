import{_ as G}from"./general-8c9259bc.js";import{h as j,C as H,q,i as s,s as V,v as Y,E as w,N as y,K as J,j as i,l as f,r as c,o as E,c as Q,w as d,a as o,m as e,e as A,F as P,z as C}from"./index-d8a56bcc.js";import{d as F}from"./helpers-71f72544.js";import{u as W}from"./document-a196a5d4.js";import{u as X}from"./index.esm-90cb40dd.js";import{d as k}from"./document-3c516f4f.js";import{b as Z}from"./helpers-d89764d1.js";import{e as $}from"./edit-actions-13f6ab30.js";import"./refusal-a1b91175.js";import"./index.esm-d77c3574.js";import"./generic-0bf4d68e.js";import"./cancel-confirm-72811969.js";import"./settings-55cfd82c.js";/* empty css                                                                     */const ge={__name:"edit",setup(x){const L=j(),m=H(),O=q(),p=W();let r=s(!0),t=V(F.newForm()),n=s(Y.language.pt);s([]);let T=V(F.formRules()),_=s(0),I=s(0),g=s(0),v=s(0);const R=X(T,t),z=w(()=>I.value===100&&!r.value);async function M(){r.value=!0;let a=await k.getById(_.value,v.value);i.validateResponse(a,null,async()=>{Object.assign(t,a.data),p.setFormToCompare(i.cloneObject(a.data))}),r.value=!1}async function B(){r.value=!0;const a=await k.getLists(n.value);i.validateResponse(a,null,()=>{p.setLists(a.data),p.setFormToCompare(a.data)}),r.value=!1}y(()=>n.value,()=>{B()}),J(async()=>{_.value=i.decodeId(m.params.documentId),v.value=i.decodeId(m.params.documentVersion),g.value=i.decodeId(m.params.organizationId),!_.value||!v.value?L.push({name:f.router.BACKOFFICE_DOCUMENT_PAGE.name}):(await B(),await M())}),y(()=>[t.texts[0].name,t.organization,t.documentTypeId,t.startDate,t.document],()=>{Z.calculatePercentage(t,F.progressFields(),a=>{p.setProgress(a),I.value=a})});const h=w(()=>g.value>0?`${f.router.BACKOFFICE_EDIT_ENTITY_PAGE.path.replace(":organizationId",m.params.organizationId).replace(":organizationVersion",m.params.organizationVersion)}#documentos`:f.router.BACKOFFICE_DOCUMENT_PAGE.name);return(a,u)=>{const b=c("breadcrumb-item"),N=c("breadcrumb"),S=c("progress-bar"),D=c("container-wrapper"),K=c("card"),U=c("page");return E(),Q(U,{title:a._lang.backoffice.document.editPageTitle},{breadcrumb:d(()=>[o(N,{"has-home":!0},{default:d(()=>[e(g)>0?(E(),A(P,{key:0},[o(b,{label:a._lang.backoffice.entities.breadcrumbTitle,"router-path":e(f).router.BACKOFFICE_ENTITIES_PAGE.path},null,8,["label","router-path"]),o(b,{label:e(O).common.entity,"router-path":e(h)},null,8,["label","router-path"]),o(b,{label:a._lang.backoffice.document.editPageTitle},null,8,["label"])],64)):(E(),A(P,{key:1},[o(b,{label:a._lang.backoffice.document.breadcrumbTitle,"router-path":e(f).router.BACKOFFICE_DOCUMENT_PAGE.path},null,8,["label","router-path"]),o(b,{label:a._lang.backoffice.document.editPageTitle},null,8,["label"])],64))]),_:1})]),actions:d(()=>[o($,{loading:e(r),"onUpdate:loading":u[0]||(u[0]=l=>C(r)?r.value=l:r=l),canSubmit:e(z),selectedLang:e(n),"onUpdate:selectedLang":u[1]||(u[1]=l=>C(n)?n.value=l:n=l),backRoute:e(h),directBackRoute:e(g)>0,service:e(k),itemId:e(_),itemVersion:e(v),formModel:e(t),vuelidate:e(R),store:e(p),resource:a._lang.backoffice.document,itemIdField:"documentId"},null,8,["loading","canSubmit","selectedLang","backRoute","directBackRoute","service","itemId","itemVersion","formModel","vuelidate","store","resource"])]),default:d(()=>[o(K,{shadow:!0},{body:d(()=>[o(D,{"margin-top":!1},{default:d(()=>[o(S,{value:e(I),label:a._lang.common.fill,class:"mb-4 col-12 float-end"},null,8,["value","label"])]),_:1}),o(G,{modelValue:e(t),"onUpdate:modelValue":u[2]||(u[2]=l=>C(t)?t.value=l:t=l),disabled:!1,loading:e(r),selectedLang:e(n),validateForm:!0,rules:e(T),isExternalEdit:e(g)>0},null,8,["modelValue","loading","selectedLang","rules","isExternalEdit"])]),_:1})]),_:1},8,["title"])}}};export{ge as default};