import{J as K,u as p,x as n,n as N,r as u,a as k,i as D,z as S,s as U,L as z,M as q,G as w,N as T,b as f,o as I,l as L,w as d,e as i,g as a,D as g}from"./index-5b4ebf84.js";import{u as H,_ as J,a as j}from"./address-8b7e35ae.js";import{a as x}from"./refusal-5d03193c.js";import{c as Q,r as W}from"./index.esm-85573352.js";import{l as C}from"./location-7945ac70.js";import{h as F}from"./helpers-c8652456.js";import{b as X}from"./helpers-4796f1a9.js";/* empty css                                                                     */import{_ as Y}from"./detail-actions-06232284.js";import"./address-167772ff.js";import"./helpers-56107f9e.js";import"./helpers-991a1d67.js";import"./helpers-138c884f.js";import"./helpers-28a0442c.js";import"./helpers-730fb974.js";import"./settings-fd6ffbf1.js";const ge={__name:"detail",setup(Z){K(async()=>{m.value=p.decodeId(_.params.locationId),c.value=p.decodeId(_.params.locationVersion),!m.value||!c.value?y.push({name:n.router.BACKOFFICE_LOCATION_PAGE.name}):(await E(),await R())}),N(()=>{l.value=!1});let m=u(0),c=u(0),l=u(!0);u([]);let e=k(F.newForm()),s=u(D.language.pt),O=k(F.formRules()),V=u(0);const b=H(),h=S(),y=U(),_=z(),B=q();Q.withMessage(h.common.requiredField,W);const A=w(()=>_.path.toLowerCase().indexOf("tarefas")>-1);async function R(){const t=await C.getById(m.value,c.value);p.validateResponse(t,null,()=>{Object.assign(e,t.data),B.emit(n.emitter.OBJECT_LOADED,t.data)})}async function E(){l.value=!0;const t=await C.getLists(s.value);p.validateResponse(t,null,()=>{b.setLists(t.data)}),l.value=!1}return T(()=>s.value,()=>{E()}),T(()=>[e.code,e.startDate,e.zipCode,e.islandId,e.countyId,e.parishId,e.locationTypeId,e.locationId,e.organizationId,e.address,e.locality],()=>{X.calculatePercentage(e,F.progressFields(),t=>{b.setProgress(t),V.value=t})}),w(()=>V.value===100&&!l.value),(t,r)=>{const v=f("breadcrumb-item"),P=f("breadcrumb"),M=f("card"),G=f("page");return I(),L(G,{title:t._lang.backoffice.location.detailPageTitle},{breadcrumb:d(()=>[i(P,{"has-home":!0},{default:d(()=>[a(A)?(I(),L(v,{key:0,label:t._lang.backoffice.tasks.breadcrumbTitle,"router-path":a(n).router.BACKOFFICE_TASKS_PAGE.path},null,8,["label","router-path"])):(I(),L(v,{key:1,label:t._lang.backoffice.location.breadcrumbTitle,"router-path":a(n).router.BACKOFFICE_LOCATION_PAGE.path},null,8,["label","router-path"])),i(v,{label:t._lang.backoffice.location.detailPageTitle},null,8,["label"])]),_:1})]),actions:d(()=>[i(Y,{loading:a(l),selectedLang:a(s),"onUpdate:selectedLang":r[0]||(r[0]=o=>g(s)?s.value=o:s=o),service:a(C),backRoute:a(n).router.BACKOFFICE_LOCATION_PAGE.name,editRoute:a(n).router.BACKOFFICE_EDIT_LOCATION_PAGE.name,itemIdField:"locationId",itemVersionField:"locationVersion",itemId:a(m),itemVersion:a(c),formModel:a(e),"show-record-state-actions":a(A),store:a(b)},null,8,["loading","selectedLang","service","backRoute","editRoute","itemId","itemVersion","formModel","show-record-state-actions","store"])]),default:d(()=>[i(M,{shadow:!0},{body:d(()=>[i(J,{validateForm:!1,disabled:!0,modelValue:a(e),"onUpdate:modelValue":r[1]||(r[1]=o=>g(e)?e.value=o:e=o),loading:a(l),rules:a(O),selectedLang:a(s),vuelidate:{}},null,8,["modelValue","loading","rules","selectedLang"]),i(j,{validateForm:!1,disabled:!0,modelValue:a(e),"onUpdate:modelValue":r[2]||(r[2]=o=>g(e)?e.value=o:e=o),loading:a(l),rules:a(O),vuelidate:{}},null,8,["modelValue","loading","rules"]),i(x,{validateForm:!1,disabled:!0,modelValue:a(e),"onUpdate:modelValue":r[3]||(r[3]=o=>g(e)?e.value=o:e=o),loading:a(l),selectedLang:a(s),vuelidate:{}},null,8,["modelValue","loading","selectedLang"])]),_:1})]),_:1},8,["title"])}}};export{ge as default};
