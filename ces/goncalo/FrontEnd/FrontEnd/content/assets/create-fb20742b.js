import{u as y,h as f,_ as L}from"./refusal-types-9d888fd3.js";import{_ as w}from"./edit-actions-32557b79.js";import{r as _,E as g,s as F,k as u,c as A,l as C,w as s,n as t,p as e,z as b,H as c}from"./index-17cd38fc.js";import{r as P}from"./refusal-types-054532cf.js";import{u as h}from"./index.esm-7f2b9cb9.js";import"./helpers-6212aa86.js";import"./index.esm-1c5732a5.js";import"./cancel-confirm-8dc1fd38.js";import"./settings-0bf02062.js";const Y={__name:"create",setup(I){const T=y();let r=_(!1),l=g(f.newForm()),n=_(F.language.pt),d=g(f.formRules());const m=h(d,l);return(i,o)=>{const p=u("breadcrumb-item"),E=u("breadcrumb"),S=u("container-wrapper"),v=u("card"),k=u("page");return A(),C(k,{title:i._lang.backoffice.settings.refusalType.createPageTitle},{breadcrumb:s(()=>[t(E,{"has-home":!0},{default:s(()=>[t(p,{label:i._lang.backoffice.settings.refusalType.breadcrumbTitle,"router-path":e(b).router.BACKOFFICE_SETTINGS_REFUSAL_TYPES_PAGE.path},null,8,["label","router-path"]),t(p,{label:i._lang.backoffice.settings.refusalType.createPageTitle},null,8,["label"])]),_:1})]),actions:s(()=>[t(w,{loading:e(r),"onUpdate:loading":o[0]||(o[0]=a=>c(r)?r.value=a:r=a),selectedLang:e(n),"onUpdate:selectedLang":o[1]||(o[1]=a=>c(n)?n.value=a:n=a),service:e(P),itemId:-1,formModel:e(l),vuelidate:e(m),store:e(T),resource:i._lang.backoffice.settings.refusalType,"back-route":e(b).router.BACKOFFICE_SETTINGS_REFUSAL_TYPES_PAGE.name,"show-lang-selector":!0,"can-edit":!0,"can-delete":!1},null,8,["loading","selectedLang","service","formModel","vuelidate","store","resource","back-route"])]),default:s(()=>[t(v,{shadow:!0},{body:s(()=>[t(S,null,{default:s(()=>[t(L,{modelValue:e(l),"onUpdate:modelValue":o[2]||(o[2]=a=>c(l)?l.value=a:l=a),selectedLang:e(n),loading:e(r),disabled:e(r),vuelidate:e(m),rules:e(d)},null,8,["modelValue","selectedLang","loading","disabled","vuelidate","rules"])]),_:1})]),_:1})]),_:1},8,["title"])}}};export{Y as default};
