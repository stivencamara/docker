import{_ as k}from"./form-2b334579.js";import{_ as E}from"./edit-actions-fd15654b.js";import{r as g,j as f,v as C,l as i,c as w,m as A,n as s,q as o,s as e,C as _,L as d}from"./index-864107e7.js";import{l as G}from"./legislation-3cdd1e44.js";import{h as b}from"./helpers-2033b956.js";import{u as h}from"./legislation-fec36d41.js";import{u as F}from"./index.esm-e15864e2.js";import"./helpers-e3e3ab9f.js";import"./index.esm-bc117818.js";import"./cancel-confirm-a0700a20.js";import"./settings-1cea3d18.js";const z={__name:"create",setup(N){const L=h();let l=g(!1),t=f(b.newForm()),n=g(C.language.pt),m=f(b.formRules());const c=F(m,t);return(u,r)=>{const p=i("breadcrumb-item"),v=i("breadcrumb"),I=i("container-wrapper"),S=i("card"),T=i("page");return w(),A(T,{title:u._lang.backoffice.settings.legislation.createPageTitle},{breadcrumb:s(()=>[o(v,{"has-home":!0},{default:s(()=>[o(p,{label:u._lang.backoffice.settings.legislation.breadcrumbTitle,"router-path":e(_).router.BACKOFFICE_SETTINGS_LEGISLATION_PAGE.path},null,8,["label","router-path"]),o(p,{label:u._lang.backoffice.settings.legislation.createPageTitle},null,8,["label"])]),_:1})]),actions:s(()=>[o(E,{loading:e(l),"onUpdate:loading":r[0]||(r[0]=a=>d(l)?l.value=a:l=a),selectedLang:e(n),"onUpdate:selectedLang":r[1]||(r[1]=a=>d(n)?n.value=a:n=a),service:e(G),itemId:e(t).legislationId,formModel:e(t),vuelidate:e(c),store:e(L),resource:u._lang.backoffice.settings.legislation,"back-route":e(_).router.BACKOFFICE_SETTINGS_LEGISLATION_PAGE.name,"show-lang-selector":!0,"can-edit":!0,"can-delete":!1},null,8,["loading","selectedLang","service","itemId","formModel","vuelidate","store","resource","back-route"])]),default:s(()=>[o(S,{shadow:!0},{body:s(()=>[o(I,null,{default:s(()=>[o(k,{modelValue:e(t),"onUpdate:modelValue":r[2]||(r[2]=a=>d(t)?t.value=a:t=a),selectedLang:e(n),loading:e(l),disabled:e(l),vuelidate:e(c),rules:e(m)},null,8,["modelValue","selectedLang","loading","disabled","vuelidate","rules"])]),_:1})]),_:1})]),_:1},8,["title"])}}};export{z as default};
