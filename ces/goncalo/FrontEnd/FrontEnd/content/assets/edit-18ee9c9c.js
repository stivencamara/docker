import{_ as F}from"./form-4d6a59c6.js";import{_ as O}from"./edit-actions-34c91919.js";import{g as B,f as N,i as h,r as c,G as v,s as P,K as R,u as m,z as p,k as u,c as V,l as y,w as n,n as s,p as e,I as g}from"./index-e6787e94.js";import{l as L}from"./legislation-dd260394.js";import{h as T}from"./helpers-b39b0e24.js";import{u as K}from"./index.esm-cb55abbd.js";import{u as M}from"./legislation-c23a5b11.js";import"./helpers-1692af0f.js";import"./index.esm-7850210a.js";import"./cancel-confirm-e26bc141.js";import"./settings-8db6c4e1.js";const $={__name:"edit",setup(U){const E=B(),S=N();h();const f=M();let a=c(!0),l=v(T.newForm()),i=c(P.language.pt),d=c(0),_=v(T.formRules());const b=K(_,l);async function G(){a.value=!0;const t=await L.getById(d.value);m.validateResponse(t,null,()=>{Object.assign(l,t.data),f.setFormToCompare(m.cloneObject(t.data))}),a.value=!1}return R(async()=>{d.value=m.decodeId(S.params.legislationId),d.value?await G():E.push({name:p.router.BACKOFFICE_SETTINGS_LEGISLATION_PAGE.name})}),(t,r)=>{const I=u("breadcrumb-item"),k=u("breadcrumb"),w=u("container-wrapper"),A=u("card"),C=u("page");return V(),y(C,{title:t._lang.backoffice.settings.legislation.editPageTitle},{breadcrumb:n(()=>[s(k,{"has-home":!0},{default:n(()=>[s(I,{label:t._lang.backoffice.settings.legislation.breadcrumbTitle,"router-path":e(p).router.BACKOFFICE_SETTINGS_LEGISLATION_PAGE.path},null,8,["label","router-path"]),s(I,{label:t._lang.backoffice.settings.legislation.editPageTitle},null,8,["label"])]),_:1})]),actions:n(()=>[s(O,{loading:e(a),"onUpdate:loading":r[0]||(r[0]=o=>g(a)?a.value=o:a=o),selectedLang:e(i),"onUpdate:selectedLang":r[1]||(r[1]=o=>g(i)?i.value=o:i=o),service:e(L),itemId:e(d),formModel:e(l),vuelidate:e(b),store:e(f),resource:t._lang.backoffice.settings.legislation,"back-route":e(p).router.BACKOFFICE_SETTINGS_LEGISLATION_PAGE.name,"show-lang-selector":!0,"can-delete":!0,"can-edit":!0},null,8,["loading","selectedLang","service","itemId","formModel","vuelidate","store","resource","back-route"])]),default:n(()=>[s(A,{shadow:!0},{body:n(()=>[s(w,null,{default:n(()=>[s(F,{modelValue:e(l),"onUpdate:modelValue":r[2]||(r[2]=o=>g(l)?l.value=o:l=o),selectedLang:e(i),loading:e(a),disabled:e(a),vuelidate:e(b),rules:e(_)},null,8,["modelValue","selectedLang","loading","disabled","vuelidate","rules"])]),_:1})]),_:1})]),_:1},8,["title"])}}};export{$ as default};
