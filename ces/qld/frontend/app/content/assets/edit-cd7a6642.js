import{_ as K}from"./general-470e5cd3.js";import{s as j,L as H,z as J,r as s,a as h,i as Y,G as w,N as y,J as q,u as i,x as f,b as c,o as E,l as x,w as m,e as o,g as e,c as A,F as L,D as F}from"./index-5b4ebf84.js";import{d as k}from"./helpers-138c884f.js";import{u as Q}from"./document-b8bf3d40.js";import{u as W}from"./index.esm-65642301.js";import{d as C}from"./document-07880ad5.js";import{b as X}from"./helpers-4796f1a9.js";import{e as Z}from"./edit-actions-88160b2f.js";import"./refusal-5d03193c.js";import"./index.esm-85573352.js";import"./generic-74ec479d.js";import"./cancel-confirm-46a9e596.js";import"./settings-fd6ffbf1.js";import"./helpers-991a1d67.js";import"./helpers-28a0442c.js";import"./helpers-730fb974.js";import"./helpers-c8652456.js";import"./helpers-56107f9e.js";/* empty css                                                                     */const Ie={__name:"edit",setup($){const P=j(),d=H(),O=J(),p=Q();let r=s(!0),t=h(k.newForm()),n=s(Y.language.pt);s([]);let T=h(k.formRules()),_=s(0),I=s(0),g=s(0),v=s(0);const R=W(T,t),z=w(()=>I.value===100&&!r.value);async function D(){r.value=!0;let a=await C.getById(_.value,v.value);i.validateResponse(a,null,async()=>{Object.assign(t,a.data),p.setFormToCompare(i.cloneObject(a.data))}),r.value=!1}async function B(){r.value=!0;const a=await C.getLists(n.value);i.validateResponse(a,null,()=>{p.setLists(a.data),p.setFormToCompare(a.data)}),r.value=!1}y(()=>n.value,()=>{B()}),q(async()=>{_.value=i.decodeId(d.params.documentId),v.value=i.decodeId(d.params.documentVersion),g.value=i.decodeId(d.params.organizationId),!_.value||!v.value?P.push({name:f.router.BACKOFFICE_DOCUMENT_PAGE.name}):(await B(),await D())}),y(()=>[t.texts[0].name,t.organization,t.documentTypeId,t.startDate,t.document],()=>{X.calculatePercentage(t,k.progressFields(),a=>{p.setProgress(a),I.value=a})});const V=w(()=>g.value>0?`${f.router.BACKOFFICE_EDIT_ENTITY_PAGE.path.replace(":organizationId",d.params.organizationId).replace(":organizationVersion",d.params.organizationVersion)}#documentos`:f.router.BACKOFFICE_DOCUMENT_PAGE.name);return(a,u)=>{const b=c("breadcrumb-item"),M=c("breadcrumb"),N=c("progress-bar"),S=c("container-wrapper"),G=c("card"),U=c("page");return E(),x(U,{title:a._lang.backoffice.document.editPageTitle},{breadcrumb:m(()=>[o(M,{"has-home":!0},{default:m(()=>[e(g)>0?(E(),A(L,{key:0},[o(b,{label:a._lang.backoffice.entities.breadcrumbTitle,"router-path":e(f).router.BACKOFFICE_ENTITIES_PAGE.path},null,8,["label","router-path"]),o(b,{label:e(O).common.entity,"router-path":e(V)},null,8,["label","router-path"]),o(b,{label:a._lang.backoffice.document.editPageTitle},null,8,["label"])],64)):(E(),A(L,{key:1},[o(b,{label:a._lang.backoffice.document.breadcrumbTitle,"router-path":e(f).router.BACKOFFICE_DOCUMENT_PAGE.path},null,8,["label","router-path"]),o(b,{label:a._lang.backoffice.document.editPageTitle},null,8,["label"])],64))]),_:1})]),actions:m(()=>[o(Z,{loading:e(r),"onUpdate:loading":u[0]||(u[0]=l=>F(r)?r.value=l:r=l),canSubmit:e(z),selectedLang:e(n),"onUpdate:selectedLang":u[1]||(u[1]=l=>F(n)?n.value=l:n=l),backRoute:e(V),directBackRoute:e(g)>0,service:e(C),itemId:e(_),itemVersion:e(v),formModel:e(t),vuelidate:e(R),store:e(p),resource:a._lang.backoffice.document,itemIdField:"documentId"},null,8,["loading","canSubmit","selectedLang","backRoute","directBackRoute","service","itemId","itemVersion","formModel","vuelidate","store","resource"])]),default:m(()=>[o(G,{shadow:!0},{body:m(()=>[o(S,{"margin-top":!1},{default:m(()=>[o(N,{value:e(I),label:a._lang.common.fill,class:"mb-4 col-12 float-end"},null,8,["value","label"])]),_:1}),o(K,{modelValue:e(t),"onUpdate:modelValue":u[2]||(u[2]=l=>F(t)?t.value=l:t=l),disabled:!1,loading:e(r),selectedLang:e(n),validateForm:!0,rules:e(T),isExternalEdit:e(g)>0},null,8,["modelValue","loading","selectedLang","rules","isExternalEdit"])]),_:1})]),_:1},8,["title"])}}};export{Ie as default};