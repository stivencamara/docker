import{h as g,_ as y}from"./form-d231201a.js";import{_ as E}from"./edit-actions-0e53b0ed.js";import{d as k,r as _,H as b,t as S,k as m,c as V,l as h,m as l,p as s,q as e,A as v,J as d}from"./index-46c4d077.js";import{e as F}from"./economic-activity-fc6381de.js";import{u as L}from"./index.esm-f67cd286.js";import"./helpers-27fc0e50.js";import"./index.esm-b6ca17d6.js";import"./cancel-confirm-16683dff.js";import"./settings-ebdc96d5.js";const O=k("EconomicActivityStore",{state:()=>({progress:0,formToCompare:null}),getters:{},actions:{setProgress(c){this.progress=c},setFormToCompare(c){this.formToCompare=c}}}),Y={__name:"create",setup(c){const A=O();let a=_(!1),o=b(g.newForm()),i=_(S.language.pt),u=b(g.formRules());const p=L(u,o);return(n,r)=>{const f=m("breadcrumb-item"),C=m("breadcrumb"),T=m("card"),I=m("page");return V(),h(I,{title:n._lang.backoffice.settings.economicActivity.createPageTitle},{breadcrumb:l(()=>[s(C,{"has-home":!0},{default:l(()=>[s(f,{label:n._lang.backoffice.settings.economicActivity.breadcrumbTitle,"router-path":e(v).router.BACKOFFICE_SETTINGS_ECONOMICACTIVITY_PAGE.path},null,8,["label","router-path"]),s(f,{label:n._lang.backoffice.settings.economicActivity.createPageTitle},null,8,["label"])]),_:1})]),actions:l(()=>[s(E,{loading:e(a),"onUpdate:loading":r[0]||(r[0]=t=>d(a)?a.value=t:a=t),selectedLang:e(i),"onUpdate:selectedLang":r[1]||(r[1]=t=>d(i)?i.value=t:i=t),service:e(F),itemId:e(o).economicActivityId,formModel:e(o),vuelidate:e(p),store:e(A),resource:n._lang.backoffice.settings.economicActivity,"back-route":e(v).router.BACKOFFICE_SETTINGS_ECONOMICACTIVITY_PAGE.name},null,8,["loading","selectedLang","service","itemId","formModel","vuelidate","store","resource","back-route"])]),default:l(()=>[s(T,{shadow:!0},{body:l(()=>[s(y,{modelValue:e(o),"onUpdate:modelValue":r[2]||(r[2]=t=>d(o)?o.value=t:o=t),selectedLang:e(i),loading:e(a),disabled:e(a),vuelidate:e(p),rules:e(u)},null,8,["modelValue","selectedLang","loading","disabled","vuelidate","rules"])]),_:1})]),_:1},8,["title"])}}};export{Y as default};