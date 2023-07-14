import{_ as B}from"./form-526fb979.js";import{s as M,L as V,z as y,M as G,r as l,a as F,i as K,G as N,J as S,u as p,x as s,N as D,b as C,o as O,l as g,w as d,e as c,g as e,D as A}from"./index-5b4ebf84.js";import{p as R}from"./helpers-56107f9e.js";import{u as x}from"./point-of-care-640dbae0.js";import{p as b}from"./point-of-care-11ca6bee.js";import"./helpers-4796f1a9.js";import{_ as J}from"./detail-actions-06232284.js";import"./contacts-6a9568fc.js";import"./index.esm-65642301.js";import"./address-167772ff.js";import"./organization-cd538fe2.js";import"./location-7945ac70.js";import"./address.vue_vue_type_style_index_0_scoped_ab5200bc_lang-84b5de6f.js";import"./service-ddb39df3.js";import"./refusal-5d03193c.js";import"./index.esm-85573352.js";import"./generic-74ec479d.js";import"./service-09bdae54.js";import"./helpers-28a0442c.js";import"./helpers-730fb974.js";import"./helpers-991a1d67.js";import"./helpers-138c884f.js";import"./helpers-c8652456.js";import"./settings-fd6ffbf1.js";const fe={__name:"detail",setup(U){const L=M(),f=V();y();const P=G(),v=x();let o=l(!0),r=F(R.newForm()),a=l(K.language.pt);l([]);let h=F(R.formRules()),n=l(0),u=l(0);const E=N(()=>f.path.toLowerCase().indexOf("tarefas")>-1);async function k(){o.value=!0;const t=await b.getById(n.value,u.value);p.validateResponse(t,null,()=>{Object.assign(r,t.data),P.emit(s.emitter.OBJECT_LOADED,t.data)}),o.value=!1}async function I(){o.value=!0;const t=await b.getLists(a.value);p.validateResponse(t,null,()=>{v.setLists(t.data)}),o.value=!1}return S(async()=>{n.value=p.decodeId(f.params.pointOfCareId),u.value=p.decodeId(f.params.pointOfCareVersion),!n.value||!u.value?L.push({name:s.router.BACKOFFICE_POINT_OF_CARE_PAGE.name}):(await I(),await k())}),D(()=>a.value,()=>{I()}),(t,m)=>{const _=C("breadcrumb-item"),w=C("breadcrumb"),T=C("page");return O(),g(T,{title:t._lang.backoffice.pointOfCare.detailPageTitle},{breadcrumb:d(()=>[c(w,{"has-home":!0},{default:d(()=>[e(E)?(O(),g(_,{key:0,label:t._lang.backoffice.tasks.breadcrumbTitle,"router-path":e(s).router.BACKOFFICE_TASKS_PAGE.path},null,8,["label","router-path"])):(O(),g(_,{key:1,label:t._lang.backoffice.pointOfCare.breadcrumbTitle,"router-path":e(s).router.BACKOFFICE_POINT_OF_CARE_PAGE.path},null,8,["label","router-path"])),c(_,{label:t._lang.backoffice.pointOfCare.detailPageTitle},null,8,["label"])]),_:1})]),actions:d(()=>[c(J,{loading:e(o),selectedLang:e(a),"onUpdate:selectedLang":m[0]||(m[0]=i=>A(a)?a.value=i:a=i),service:e(b),backRoute:e(s).router.BACKOFFICE_POINT_OF_CARE_PAGE.name,editRoute:e(s).router.BACKOFFICE_EDIT_POINT_OF_CARE_PAGE.name,itemIdField:"pointOfCareId",itemVersionField:"pointOfCareVersion",itemId:e(n),itemVersion:e(u),formModel:e(r),"show-record-state-actions":e(E),store:e(v)},null,8,["loading","selectedLang","service","backRoute","editRoute","itemId","itemVersion","formModel","show-record-state-actions","store"])]),default:d(()=>[c(B,{formModel:e(r),"onUpdate:formModel":m[1]||(m[1]=i=>A(r)?r.value=i:r=i),disabled:!0,validateForm:!1,loading:e(o),selectedLang:e(a),rules:e(h),isExternalEdit:!1,showProgress:!1},null,8,["formModel","loading","selectedLang","rules"])]),_:1},8,["title"])}}};export{fe as default};
