import{m as R,N as V,x as S,u as y,r as l,y as C,A as M,I as K,L as N,n as d,s as r,O as P,a as _,b,c as I,w as c,d as p,f as e,i as F}from"./index-920dbb37.js";import{u as G}from"./organization-481d97d6.js";import{e as z}from"./helpers-93ac209f.js";import{o as v}from"./organization-485b520a.js";import{_ as D}from"./detail-actions-cf004e7e.js";import{_ as U}from"./form-983cc03d.js";import"./helpers-4c156364.js";import"./index.esm-d0811cb6.js";import"./comments-3b769030.js";import"./helpers-db4b16e6.js";import"./helpers-cd5e71d3.js";import"./helpers-65b02008.js";import"./helpers-6935922b.js";import"./helpers-952742ca.js";import"./settings-bb7269a2.js";import"./contacts-9da7813e.js";import"./index.esm-d064d6e3.js";import"./address-38fb745b.js";import"./location-be767322.js";import"./generic-9b68486a.js";import"./point-of-care-5c4c4d1a.js";import"./service-6e6aa2ba.js";import"./document-875ae5ad.js";const pe={__name:"detail",setup(j){const A=R(),g=V();S();const L=y(),h=G(),i=l(0),s=l(0);let u=l(!0),o=C(z.newForm()),a=l(M.language.pt);l([]);let k=C(z.formRules());const E=K(()=>g.path.toLowerCase().indexOf("tarefas")>-1);N(async()=>{i.value=d.decodeId(g.params.organizationId),s.value=d.decodeId(g.params.organizationVersion),!i.value||!s.value?A.push({name:r.router.BACKOFFICE_ENTITIES_PAGE.name}):(await T(),await w())});async function w(){const t=await v.getById(i.value,s.value);d.validateResponse(t,null,()=>{Object.assign(o,t.data),L.emit(r.emitter.OBJECT_LOADED,t.data)})}async function T(){u.value=!0;const t=await v.getLists(a.value);d.validateResponse(t,null,()=>{h.setLists(t.data)}),u.value=!1}return P(()=>a.value,()=>{T()}),(t,m)=>{const f=_("breadcrumb-item"),O=_("breadcrumb"),B=_("page");return b(),I(B,{title:t._lang.backoffice.entities.detailPageTitle},{breadcrumb:c(()=>[p(O,{"has-home":!0},{default:c(()=>[e(E)?(b(),I(f,{key:0,label:t._lang.backoffice.tasks.breadcrumbTitle,"router-path":e(r).router.BACKOFFICE_TASKS_PAGE.path},null,8,["label","router-path"])):(b(),I(f,{key:1,label:t._lang.backoffice.entities.breadcrumbTitle,"router-path":e(r).router.BACKOFFICE_ENTITIES_PAGE.path},null,8,["label","router-path"])),p(f,{label:t._lang.backoffice.entities.detail},null,8,["label"])]),_:1})]),actions:c(()=>[p(D,{loading:e(u),selectedLang:e(a),"onUpdate:selectedLang":m[0]||(m[0]=n=>F(a)?a.value=n:a=n),service:e(v),backRoute:e(r).router.BACKOFFICE_ENTITIES_PAGE.name,editRoute:e(r).router.BACKOFFICE_EDIT_ENTITY_PAGE.name,itemIdField:"organizationId",itemVersionField:"organizationVersion",itemId:i.value,itemVersion:s.value,formModel:e(o),"show-record-state-actions":e(E)},null,8,["loading","selectedLang","service","backRoute","editRoute","itemId","itemVersion","formModel","show-record-state-actions"])]),default:c(()=>[p(U,{formModel:e(o),"onUpdate:formModel":m[1]||(m[1]=n=>F(o)?o.value=n:o=n),disabled:!0,validateForm:!0,selectedLang:e(a),rules:e(k),loading:e(u),organizationId:i.value,organizationVersion:s.value,"show-progress":!1,vuelidate:null},null,8,["formModel","selectedLang","rules","loading","organizationId","organizationVersion"])]),_:1},8,["title"])}}};export{pe as default};