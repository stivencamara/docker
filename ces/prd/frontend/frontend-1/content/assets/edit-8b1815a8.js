import{_ as F}from"./form-2b334579.js";import{_ as N}from"./edit-actions-fd15654b.js";import{g as O,f as B,i as h,r as c,j as v,v as P,N as R,u as m,C as g,l as u,c as V,m as y,n,q as s,s as e,L as p}from"./index-864107e7.js";import{l as L}from"./legislation-3cdd1e44.js";import{h as T}from"./helpers-2033b956.js";import{u as M}from"./index.esm-e15864e2.js";import{u as j}from"./legislation-fec36d41.js";import"./helpers-e3e3ab9f.js";import"./index.esm-bc117818.js";import"./cancel-confirm-a0700a20.js";import"./settings-1cea3d18.js";const $={__name:"edit",setup(K){const E=O(),S=B();h();const f=j();let a=c(!0),l=v(T.newForm()),i=c(P.language.pt),d=c(0),_=v(T.formRules());const b=M(_,l);async function C(){a.value=!0;const t=await L.getById(d.value);m.validateResponse(t,null,()=>{Object.assign(l,t.data),f.setFormToCompare(m.cloneObject(t.data))}),a.value=!1}return R(async()=>{d.value=m.decodeId(S.params.legislationId),d.value?await C():E.push({name:g.router.BACKOFFICE_SETTINGS_LEGISLATION_PAGE.name})}),(t,r)=>{const I=u("breadcrumb-item"),A=u("breadcrumb"),G=u("container-wrapper"),k=u("card"),w=u("page");return V(),y(w,{title:t._lang.backoffice.settings.legislation.editPageTitle},{breadcrumb:n(()=>[s(A,{"has-home":!0},{default:n(()=>[s(I,{label:t._lang.backoffice.settings.legislation.breadcrumbTitle,"router-path":e(g).router.BACKOFFICE_SETTINGS_LEGISLATION_PAGE.path},null,8,["label","router-path"]),s(I,{label:t._lang.backoffice.settings.legislation.editPageTitle},null,8,["label"])]),_:1})]),actions:n(()=>[s(N,{loading:e(a),"onUpdate:loading":r[0]||(r[0]=o=>p(a)?a.value=o:a=o),selectedLang:e(i),"onUpdate:selectedLang":r[1]||(r[1]=o=>p(i)?i.value=o:i=o),service:e(L),itemId:e(d),formModel:e(l),vuelidate:e(b),store:e(f),resource:t._lang.backoffice.settings.legislation,"back-route":e(g).router.BACKOFFICE_SETTINGS_LEGISLATION_PAGE.name,"show-lang-selector":!0,"can-delete":!0,"can-edit":!0},null,8,["loading","selectedLang","service","itemId","formModel","vuelidate","store","resource","back-route"])]),default:n(()=>[s(k,{shadow:!0},{body:n(()=>[s(G,null,{default:n(()=>[s(F,{modelValue:e(l),"onUpdate:modelValue":r[2]||(r[2]=o=>p(l)?l.value=o:l=o),selectedLang:e(i),loading:e(a),disabled:e(a),vuelidate:e(b),rules:e(_)},null,8,["modelValue","selectedLang","loading","disabled","vuelidate","rules"])]),_:1})]),_:1})]),_:1},8,["title"])}}};export{$ as default};
