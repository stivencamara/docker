import{_ as T}from"./form-4d6a59c6.js";import{_ as E}from"./edit-actions-34c91919.js";import{r as g,G as f,s as w,k as i,c as G,l as A,w as s,n as o,p as e,z as _,I as d}from"./index-e6787e94.js";import{l as C}from"./legislation-dd260394.js";import{h as b}from"./helpers-b39b0e24.js";import{u as h}from"./legislation-c23a5b11.js";import{u as F}from"./index.esm-cb55abbd.js";import"./helpers-1692af0f.js";import"./index.esm-7850210a.js";import"./cancel-confirm-e26bc141.js";import"./settings-8db6c4e1.js";const q={__name:"create",setup(N){const I=h();let l=g(!1),t=f(b.newForm()),n=g(w.language.pt),m=f(b.formRules());const c=F(m,t);return(u,r)=>{const p=i("breadcrumb-item"),L=i("breadcrumb"),v=i("container-wrapper"),k=i("card"),S=i("page");return G(),A(S,{title:u._lang.backoffice.settings.legislation.createPageTitle},{breadcrumb:s(()=>[o(L,{"has-home":!0},{default:s(()=>[o(p,{label:u._lang.backoffice.settings.legislation.breadcrumbTitle,"router-path":e(_).router.BACKOFFICE_SETTINGS_LEGISLATION_PAGE.path},null,8,["label","router-path"]),o(p,{label:u._lang.backoffice.settings.legislation.createPageTitle},null,8,["label"])]),_:1})]),actions:s(()=>[o(E,{loading:e(l),"onUpdate:loading":r[0]||(r[0]=a=>d(l)?l.value=a:l=a),selectedLang:e(n),"onUpdate:selectedLang":r[1]||(r[1]=a=>d(n)?n.value=a:n=a),service:e(C),itemId:e(t).legislationId,formModel:e(t),vuelidate:e(c),store:e(I),resource:u._lang.backoffice.settings.legislation,"back-route":e(_).router.BACKOFFICE_SETTINGS_LEGISLATION_PAGE.name,"show-lang-selector":!0,"can-edit":!0,"can-delete":!1},null,8,["loading","selectedLang","service","itemId","formModel","vuelidate","store","resource","back-route"])]),default:s(()=>[o(k,{shadow:!0},{body:s(()=>[o(v,null,{default:s(()=>[o(T,{modelValue:e(t),"onUpdate:modelValue":r[2]||(r[2]=a=>d(t)?t.value=a:t=a),selectedLang:e(n),loading:e(l),disabled:e(l),vuelidate:e(c),rules:e(m)},null,8,["modelValue","selectedLang","loading","disabled","vuelidate","rules"])]),_:1})]),_:1})]),_:1},8,["title"])}}};export{q as default};
