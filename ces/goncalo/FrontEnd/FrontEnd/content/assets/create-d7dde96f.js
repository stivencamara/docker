import{_ as S}from"./form-cf112997.js";import{_ as T}from"./edit-actions-a13538a6.js";import{r as g,E as f,s as w,k as i,c as A,l as C,w as s,n as o,p as e,z as _,H as d}from"./index-f9e60098.js";import{l as G}from"./legislation-d9aa1deb.js";import{h as b}from"./helpers-4fff0916.js";import{u as h}from"./legislation-56dbd473.js";import{u as F}from"./index.esm-cf21939f.js";import"./helpers-c3825dec.js";import"./index.esm-7b4c8e23.js";import"./cancel-confirm-1eaa0e1f.js";import"./settings-d00b4206.js";const j={__name:"create",setup(N){const I=h();let l=g(!1),t=f(b.newForm()),n=g(w.language.pt),m=f(b.formRules());const c=F(m,t);return(u,r)=>{const p=i("breadcrumb-item"),L=i("breadcrumb"),v=i("container-wrapper"),k=i("card"),E=i("page");return A(),C(E,{title:u._lang.backoffice.settings.legislation.createPageTitle},{breadcrumb:s(()=>[o(L,{"has-home":!0},{default:s(()=>[o(p,{label:u._lang.backoffice.settings.legislation.breadcrumbTitle,"router-path":e(_).router.BACKOFFICE_SETTINGS_LEGISLATION_PAGE.path},null,8,["label","router-path"]),o(p,{label:u._lang.backoffice.settings.legislation.createPageTitle},null,8,["label"])]),_:1})]),actions:s(()=>[o(T,{loading:e(l),"onUpdate:loading":r[0]||(r[0]=a=>d(l)?l.value=a:l=a),selectedLang:e(n),"onUpdate:selectedLang":r[1]||(r[1]=a=>d(n)?n.value=a:n=a),service:e(G),itemId:e(t).legislationId,formModel:e(t),vuelidate:e(c),store:e(I),resource:u._lang.backoffice.settings.legislation,"back-route":e(_).router.BACKOFFICE_SETTINGS_LEGISLATION_PAGE.name,"show-lang-selector":!0,"can-edit":!0,"can-delete":!1},null,8,["loading","selectedLang","service","itemId","formModel","vuelidate","store","resource","back-route"])]),default:s(()=>[o(k,{shadow:!0},{body:s(()=>[o(v,null,{default:s(()=>[o(S,{modelValue:e(t),"onUpdate:modelValue":r[2]||(r[2]=a=>d(t)?t.value=a:t=a),selectedLang:e(n),loading:e(l),disabled:e(l),vuelidate:e(c),rules:e(m)},null,8,["modelValue","selectedLang","loading","disabled","vuelidate","rules"])]),_:1})]),_:1})]),_:1},8,["title"])}}};export{j as default};
