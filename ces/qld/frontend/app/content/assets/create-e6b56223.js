import{u as y,h as f,_ as L}from"./refusal-types-66e2f3a1.js";import{_ as w}from"./edit-actions-e3b815e6.js";import{i as _,s as g,v as F,r as u,o as A,c as C,w as s,a as t,m as e,l as b,z as c}from"./index-a3ba1ed7.js";import{r as P}from"./refusal-types-cb77884c.js";import{u as h}from"./index.esm-9dd2f6da.js";import"./helpers-4d6c1969.js";import"./index.esm-d7202dd3.js";import"./cancel-confirm-f95c31ca.js";import"./settings-4e9392c0.js";const Y={__name:"create",setup(I){const T=y();let r=_(!1),l=g(f.newForm()),n=_(F.language.pt),d=g(f.formRules());const m=h(d,l);return(i,o)=>{const p=u("breadcrumb-item"),v=u("breadcrumb"),S=u("container-wrapper"),E=u("card"),k=u("page");return A(),C(k,{title:i._lang.backoffice.settings.refusalType.createPageTitle},{breadcrumb:s(()=>[t(v,{"has-home":!0},{default:s(()=>[t(p,{label:i._lang.backoffice.settings.refusalType.breadcrumbTitle,"router-path":e(b).router.BACKOFFICE_SETTINGS_REFUSAL_TYPES_PAGE.path},null,8,["label","router-path"]),t(p,{label:i._lang.backoffice.settings.refusalType.createPageTitle},null,8,["label"])]),_:1})]),actions:s(()=>[t(w,{loading:e(r),"onUpdate:loading":o[0]||(o[0]=a=>c(r)?r.value=a:r=a),selectedLang:e(n),"onUpdate:selectedLang":o[1]||(o[1]=a=>c(n)?n.value=a:n=a),service:e(P),itemId:-1,formModel:e(l),vuelidate:e(m),store:e(T),resource:i._lang.backoffice.settings.refusalType,"back-route":e(b).router.BACKOFFICE_SETTINGS_REFUSAL_TYPES_PAGE.name,"show-lang-selector":!0,"can-edit":!0,"can-delete":!1},null,8,["loading","selectedLang","service","formModel","vuelidate","store","resource","back-route"])]),default:s(()=>[t(E,{shadow:!0},{body:s(()=>[t(S,null,{default:s(()=>[t(L,{modelValue:e(l),"onUpdate:modelValue":o[2]||(o[2]=a=>c(l)?l.value=a:l=a),selectedLang:e(n),loading:e(r),disabled:e(r),vuelidate:e(m),rules:e(d)},null,8,["modelValue","selectedLang","loading","disabled","vuelidate","rules"])]),_:1})]),_:1})]),_:1},8,["title"])}}};export{Y as default};
