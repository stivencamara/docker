import{_ as B}from"./form-30f035bb.js";import{m as y,N as M,x as V,u as K,r as l,y as I,A as N,I as G,L as S,n as p,s,O as D,a as O,b as C,c as b,w as d,d as c,f as e,i as F}from"./index-920dbb37.js";import{p as A}from"./helpers-db4b16e6.js";import{u as x}from"./point-of-care-98c47a98.js";import{p as g}from"./point-of-care-5c4c4d1a.js";import"./helpers-4c156364.js";import{_ as U}from"./detail-actions-cf004e7e.js";import"./contacts-9da7813e.js";import"./index.esm-d064d6e3.js";import"./base-information-c108b44d.js";import"./service-e327b247.js";import"./organization-481d97d6.js";import"./address-38fb745b.js";import"./comments-3b769030.js";import"./index.esm-d0811cb6.js";import"./generic-9b68486a.js";import"./service-6e6aa2ba.js";import"./helpers-65b02008.js";import"./helpers-6935922b.js";import"./helpers-93ac209f.js";import"./helpers-cd5e71d3.js";import"./helpers-952742ca.js";import"./settings-bb7269a2.js";const ce={__name:"detail",setup(j){const R=y(),f=M();V();const L=K(),k=x();let o=l(!0),r=I(A.newForm()),a=l(N.language.pt);l([]);let P=I(A.formRules()),n=l(0),u=l(0);const v=G(()=>f.path.toLowerCase().indexOf("tarefas")>-1);async function T(){o.value=!0;const t=await g.getById(n.value,u.value);p.validateResponse(t,null,()=>{Object.assign(r,t.data),L.emit(s.emitter.OBJECT_LOADED,t.data)}),o.value=!1}async function E(){o.value=!0;const t=await g.getLists(a.value);p.validateResponse(t,null,()=>{k.setLists(t.data)}),o.value=!1}return S(async()=>{n.value=p.decodeId(f.params.pointOfCareId),u.value=p.decodeId(f.params.pointOfCareVersion),!n.value||!u.value?R.push({name:s.router.BACKOFFICE_POINT_OF_CARE_PAGE.name}):(await E(),await T())}),D(()=>a.value,()=>{E()}),(t,m)=>{const _=O("breadcrumb-item"),h=O("breadcrumb"),w=O("page");return C(),b(w,{title:t._lang.backoffice.pointOfCare.detailPageTitle},{breadcrumb:d(()=>[c(h,{"has-home":!0},{default:d(()=>[e(v)?(C(),b(_,{key:0,label:t._lang.backoffice.tasks.breadcrumbTitle,"router-path":e(s).router.BACKOFFICE_TASKS_PAGE.path},null,8,["label","router-path"])):(C(),b(_,{key:1,label:t._lang.backoffice.pointOfCare.breadcrumbTitle,"router-path":e(s).router.BACKOFFICE_POINT_OF_CARE_PAGE.path},null,8,["label","router-path"])),c(_,{label:t._lang.backoffice.pointOfCare.detailPageTitle},null,8,["label"])]),_:1})]),actions:d(()=>[c(U,{loading:e(o),selectedLang:e(a),"onUpdate:selectedLang":m[0]||(m[0]=i=>F(a)?a.value=i:a=i),service:e(g),backRoute:e(s).router.BACKOFFICE_POINT_OF_CARE_PAGE.name,editRoute:e(s).router.BACKOFFICE_EDIT_POINT_OF_CARE_PAGE.name,itemIdField:"pointOfCareId",itemVersionField:"pointOfCareVersion",itemId:e(n),itemVersion:e(u),formModel:e(r),"show-record-state-actions":e(v)},null,8,["loading","selectedLang","service","backRoute","editRoute","itemId","itemVersion","formModel","show-record-state-actions"])]),default:d(()=>[c(B,{formModel:e(r),"onUpdate:formModel":m[1]||(m[1]=i=>F(r)?r.value=i:r=i),disabled:!0,validateForm:!1,loading:e(o),selectedLang:e(a),rules:e(P),isExternalEdit:!1},null,8,["formModel","loading","selectedLang","rules"])]),_:1},8,["title"])}}};export{ce as default};