import{_ as B}from"./form-95dac400.js";import{_ as F}from"./edit-actions-04769a3d.js";import{g as O,f as N,i as h,r as c,j as v,v as M,M as P,u as m,B as g,l as u,c as R,m as V,n,q as s,s as e,K as p}from"./index-34a71b79.js";import{l as L}from"./legislation-b95eee48.js";import{h as T}from"./helpers-03c0cf27.js";import{u as y}from"./index.esm-fc651f6b.js";import{u as K}from"./legislation-6305b8a5.js";import"./helpers-9519476b.js";import"./index.esm-e19cc10d.js";import"./cancel-confirm-48e72168.js";import"./settings-3cc5a699.js";const $={__name:"edit",setup(j){const E=O(),S=N();h();const f=K();let a=c(!0),l=v(T.newForm()),i=c(M.language.pt),d=c(0),_=v(T.formRules());const b=y(_,l);async function A(){a.value=!0;const t=await L.getById(d.value);m.validateResponse(t,null,()=>{Object.assign(l,t.data),f.setFormToCompare(m.cloneObject(t.data))}),a.value=!1}return P(async()=>{d.value=m.decodeId(S.params.legislationId),d.value?await A():E.push({name:g.router.BACKOFFICE_SETTINGS_LEGISLATION_PAGE.name})}),(t,r)=>{const I=u("breadcrumb-item"),C=u("breadcrumb"),G=u("container-wrapper"),k=u("card"),w=u("page");return R(),V(w,{title:t._lang.backoffice.settings.legislation.editPageTitle},{breadcrumb:n(()=>[s(C,{"has-home":!0},{default:n(()=>[s(I,{label:t._lang.backoffice.settings.legislation.breadcrumbTitle,"router-path":e(g).router.BACKOFFICE_SETTINGS_LEGISLATION_PAGE.path},null,8,["label","router-path"]),s(I,{label:t._lang.backoffice.settings.legislation.editPageTitle},null,8,["label"])]),_:1})]),actions:n(()=>[s(F,{loading:e(a),"onUpdate:loading":r[0]||(r[0]=o=>p(a)?a.value=o:a=o),selectedLang:e(i),"onUpdate:selectedLang":r[1]||(r[1]=o=>p(i)?i.value=o:i=o),service:e(L),itemId:e(d),formModel:e(l),vuelidate:e(b),store:e(f),resource:t._lang.backoffice.settings.legislation,"back-route":e(g).router.BACKOFFICE_SETTINGS_LEGISLATION_PAGE.name,"show-lang-selector":!0,"can-delete":!0,"can-edit":!0},null,8,["loading","selectedLang","service","itemId","formModel","vuelidate","store","resource","back-route"])]),default:n(()=>[s(k,{shadow:!0},{body:n(()=>[s(G,null,{default:n(()=>[s(B,{modelValue:e(l),"onUpdate:modelValue":r[2]||(r[2]=o=>p(l)?l.value=o:l=o),selectedLang:e(i),loading:e(a),disabled:e(a),vuelidate:e(b),rules:e(_)},null,8,["modelValue","selectedLang","loading","disabled","vuelidate","rules"])]),_:1})]),_:1})]),_:1},8,["title"])}}};export{$ as default};
