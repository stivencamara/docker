import{_ as H}from"./general-11a7971d.js";import{g as Y,f as $,i as q,r as n,G as A,s as P,j as L,N as O,K as J,u as i,z as b,k as c,c as k,e as T,n as o,w as d,p as e,F as C,I as y}from"./index-c417b10a.js";import{d as I}from"./document-b3374c30.js";import{d as B}from"./helpers-662deb59.js";import{u as Q}from"./document-09adde81.js";import{u as W}from"./index.esm-5fe78185.js";import{b as X}from"./helpers-422844e7.js";import{e as Z}from"./edit-actions-af789f62.js";import{_ as x}from"./unsaved-769b1fd6.js";import"./refusal-45a989d4.js";import"./index.esm-29b873a2.js";import"./generic-972994fb.js";import"./cancel-confirm-f07f887e.js";import"./settings-fb41674a.js";/* empty css                                                                     */const be={__name:"edit",setup(ee){const R=Y(),m=$(),M=q(),p=Q();let r=n(!0),t=A(B.newForm()),s=n(P.language.pt);n([]);let V=A(B.formRules()),_=n(0),E=n(0),f=n(0),v=n(0),F=n([]);const S=W(V,t),z=L(()=>E.value===100&&!r.value);async function N(){r.value=!0;let a=await I.getById(_.value,v.value);i.validateResponse(a,null,async()=>{Object.assign(t,a.data),p.setFormToCompare(i.cloneObject(a.data))}),r.value=!1}async function h(){r.value=!0;const a=await I.getLists(s.value,t.recordStateTypeId!=P.recordStateType.draft);i.validateResponse(a,null,()=>{p.setLists(a.data)}),r.value=!1}O(()=>s.value,()=>{h()}),J(async()=>{_.value=i.decodeId(m.params.documentId),v.value=i.decodeId(m.params.documentVersion),f.value=i.decodeId(m.params.organizationId),!_.value||!v.value?R.push({name:b.router.BACKOFFICE_DOCUMENT_PAGE.name}):(await N(),await h())}),O(()=>[t.texts[0].name,t.organization,t.documentTypeId,t.startDate,t.document],()=>{F.value=B.progressFields(),X.calculatePercentage(t,F.value,a=>{p.setProgress(a),E.value=a})});const w=L(()=>f.value>0?`${b.router.BACKOFFICE_EDIT_ENTITY_PAGE.path.replace(":organizationId",m.params.organizationId).replace(":organizationVersion",m.params.organizationVersion)}#documentos`:b.router.BACKOFFICE_DOCUMENT_PAGE.name);return(a,u)=>{const g=c("breadcrumb-item"),D=c("breadcrumb"),G=c("progress-bar"),K=c("container-wrapper"),U=c("card"),j=c("page");return k(),T(C,null,[o(j,{title:a._lang.backoffice.document.editPageTitle},{breadcrumb:d(()=>[o(D,{"has-home":!0},{default:d(()=>[e(f)>0?(k(),T(C,{key:0},[o(g,{label:a._lang.backoffice.entities.breadcrumbTitle,"router-path":e(b).router.BACKOFFICE_ENTITIES_PAGE.path},null,8,["label","router-path"]),o(g,{label:e(M).common.entity,"router-path":e(w)},null,8,["label","router-path"]),o(g,{label:a._lang.backoffice.document.editPageTitle},null,8,["label"])],64)):(k(),T(C,{key:1},[o(g,{label:a._lang.backoffice.document.breadcrumbTitle,"router-path":e(b).router.BACKOFFICE_DOCUMENT_PAGE.path},null,8,["label","router-path"]),o(g,{label:a._lang.backoffice.document.editPageTitle},null,8,["label"])],64))]),_:1})]),actions:d(()=>[o(Z,{loading:e(r),"onUpdate:loading":u[0]||(u[0]=l=>y(r)?r.value=l:r=l),canSubmit:e(z),selectedLang:e(s),"onUpdate:selectedLang":u[1]||(u[1]=l=>y(s)?s.value=l:s=l),backRoute:e(w),directBackRoute:e(f)>0,service:e(I),itemId:e(_),itemVersion:e(v),formModel:e(t),vuelidate:e(S),store:e(p),resource:a._lang.backoffice.document,itemIdField:"documentId",progressFields:e(F)},null,8,["loading","canSubmit","selectedLang","backRoute","directBackRoute","service","itemId","itemVersion","formModel","vuelidate","store","resource","progressFields"])]),default:d(()=>[o(U,{shadow:!0},{body:d(()=>[o(K,{"margin-top":!1},{default:d(()=>[o(G,{value:e(E),label:a._lang.common.fill,class:"mb-4 col-12 float-end"},null,8,["value","label"])]),_:1}),o(H,{modelValue:e(t),"onUpdate:modelValue":u[2]||(u[2]=l=>y(t)?t.value=l:t=l),disabled:!1,loading:e(r),selectedLang:e(s),validateForm:!0,rules:e(V),isExternalEdit:e(f)>0},null,8,["modelValue","loading","selectedLang","rules","isExternalEdit"])]),_:1})]),_:1},8,["title"]),o(x,{formModel:e(t),store:e(p),service:e(I),resource:a._lang.backoffice.document},null,8,["formModel","store","service","resource"])],64)}}};export{be as default};