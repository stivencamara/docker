import{h as g,_ as y}from"./form-5b2d6ba9.js";import{_ as E}from"./edit-actions-275df427.js";import{d as S,r as _,j as b,v as k,l as m,c as V,m as h,n as l,q as s,s as e,B as v,J as d}from"./index-80ba5b4e.js";import{e as F}from"./economic-activity-1d7a5698.js";import{u as L}from"./index.esm-5a51e55a.js";import"./helpers-4a70dd55.js";import"./index.esm-ae8bce41.js";import"./cancel-confirm-9074d80e.js";import"./settings-ad5b6b99.js";const O=S("EconomicActivityStore",{state:()=>({progress:0,formToCompare:null}),getters:{},actions:{setProgress(n){this.progress=n},setFormToCompare(n){this.formToCompare=n}}}),Y={__name:"create",setup(n){const A=O();let a=_(!1),o=b(g.newForm()),i=_(k.language.pt),u=b(g.formRules());const p=L(u,o);return(c,r)=>{const f=m("breadcrumb-item"),C=m("breadcrumb"),T=m("card"),I=m("page");return V(),h(I,{title:c._lang.backoffice.settings.economicActivity.createPageTitle},{breadcrumb:l(()=>[s(C,{"has-home":!0},{default:l(()=>[s(f,{label:c._lang.backoffice.settings.economicActivity.breadcrumbTitle,"router-path":e(v).router.BACKOFFICE_SETTINGS_ECONOMICACTIVITY_PAGE.path},null,8,["label","router-path"]),s(f,{label:c._lang.backoffice.settings.economicActivity.createPageTitle},null,8,["label"])]),_:1})]),actions:l(()=>[s(E,{loading:e(a),"onUpdate:loading":r[0]||(r[0]=t=>d(a)?a.value=t:a=t),selectedLang:e(i),"onUpdate:selectedLang":r[1]||(r[1]=t=>d(i)?i.value=t:i=t),service:e(F),itemId:e(o).economicActivityId,formModel:e(o),vuelidate:e(p),store:e(A),resource:c._lang.backoffice.settings.economicActivity,"back-route":e(v).router.BACKOFFICE_SETTINGS_ECONOMICACTIVITY_PAGE.name},null,8,["loading","selectedLang","service","itemId","formModel","vuelidate","store","resource","back-route"])]),default:l(()=>[s(T,{shadow:!0},{body:l(()=>[s(y,{modelValue:e(o),"onUpdate:modelValue":r[2]||(r[2]=t=>d(o)?o.value=t:o=t),selectedLang:e(i),loading:e(a),disabled:e(a),vuelidate:e(p),rules:e(u)},null,8,["modelValue","selectedLang","loading","disabled","vuelidate","rules"])]),_:1})]),_:1},8,["title"])}}};export{Y as default};
