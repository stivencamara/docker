import{h as g,_ as y}from"./form-483e4182.js";import{_ as E}from"./edit-actions-50cec0eb.js";import{d as S,r as _,j as b,v as k,l as m,c as L,m as V,n as l,q as s,s as e,C as v,L as d}from"./index-f1c6a491.js";import{e as h}from"./economic-activity-cd2a5e87.js";import{u as F}from"./index.esm-2d1621cd.js";import"./helpers-72b2eb57.js";import"./index.esm-d2c73440.js";import"./cancel-confirm-8dde2a26.js";import"./settings-8b0f1143.js";const O=S("EconomicActivityStore",{state:()=>({progress:0,formToCompare:null}),getters:{},actions:{setProgress(n){this.progress=n},setFormToCompare(n){this.formToCompare=n}}}),Y={__name:"create",setup(n){const C=O();let a=_(!1),o=b(g.newForm()),i=_(k.language.pt),u=b(g.formRules());const p=F(u,o);return(c,r)=>{const f=m("breadcrumb-item"),A=m("breadcrumb"),T=m("card"),I=m("page");return L(),V(I,{title:c._lang.backoffice.settings.economicActivity.createPageTitle},{breadcrumb:l(()=>[s(A,{"has-home":!0},{default:l(()=>[s(f,{label:c._lang.backoffice.settings.economicActivity.breadcrumbTitle,"router-path":e(v).router.BACKOFFICE_SETTINGS_ECONOMICACTIVITY_PAGE.path},null,8,["label","router-path"]),s(f,{label:c._lang.backoffice.settings.economicActivity.createPageTitle},null,8,["label"])]),_:1})]),actions:l(()=>[s(E,{loading:e(a),"onUpdate:loading":r[0]||(r[0]=t=>d(a)?a.value=t:a=t),selectedLang:e(i),"onUpdate:selectedLang":r[1]||(r[1]=t=>d(i)?i.value=t:i=t),service:e(h),itemId:e(o).economicActivityId,formModel:e(o),vuelidate:e(p),store:e(C),resource:c._lang.backoffice.settings.economicActivity,"back-route":e(v).router.BACKOFFICE_SETTINGS_ECONOMICACTIVITY_PAGE.name},null,8,["loading","selectedLang","service","itemId","formModel","vuelidate","store","resource","back-route"])]),default:l(()=>[s(T,{shadow:!0},{body:l(()=>[s(y,{modelValue:e(o),"onUpdate:modelValue":r[2]||(r[2]=t=>d(o)?o.value=t:o=t),selectedLang:e(i),loading:e(a),disabled:e(a),vuelidate:e(p),rules:e(u)},null,8,["modelValue","selectedLang","loading","disabled","vuelidate","rules"])]),_:1})]),_:1},8,["title"])}}};export{Y as default};
