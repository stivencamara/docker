import{h as g,_ as y}from"./form-b5aee28e.js";import{_ as E}from"./edit-actions-88cd0d6d.js";import{d as k,r as _,G as b,s as S,k as m,c as V,l as h,w as l,n as s,p as e,z as v,I as d}from"./index-a14ad215.js";import{e as F}from"./economic-activity-9106c0f2.js";import{u as L}from"./index.esm-97dcd533.js";import"./helpers-71142cd6.js";import"./index.esm-88a1129f.js";import"./cancel-confirm-ab082f5c.js";import"./settings-739a4c13.js";const O=k("EconomicActivityStore",{state:()=>({progress:0,formToCompare:null}),getters:{},actions:{setProgress(n){this.progress=n},setFormToCompare(n){this.formToCompare=n}}}),Y={__name:"create",setup(n){const A=O();let a=_(!1),o=b(g.newForm()),i=_(S.language.pt),u=b(g.formRules());const p=L(u,o);return(c,r)=>{const f=m("breadcrumb-item"),C=m("breadcrumb"),I=m("card"),T=m("page");return V(),h(T,{title:c._lang.backoffice.settings.economicActivity.createPageTitle},{breadcrumb:l(()=>[s(C,{"has-home":!0},{default:l(()=>[s(f,{label:c._lang.backoffice.settings.economicActivity.breadcrumbTitle,"router-path":e(v).router.BACKOFFICE_SETTINGS_ECONOMICACTIVITY_PAGE.path},null,8,["label","router-path"]),s(f,{label:c._lang.backoffice.settings.economicActivity.createPageTitle},null,8,["label"])]),_:1})]),actions:l(()=>[s(E,{loading:e(a),"onUpdate:loading":r[0]||(r[0]=t=>d(a)?a.value=t:a=t),selectedLang:e(i),"onUpdate:selectedLang":r[1]||(r[1]=t=>d(i)?i.value=t:i=t),service:e(F),itemId:e(o).economicActivityId,formModel:e(o),vuelidate:e(p),store:e(A),resource:c._lang.backoffice.settings.economicActivity,"back-route":e(v).router.BACKOFFICE_SETTINGS_ECONOMICACTIVITY_PAGE.name},null,8,["loading","selectedLang","service","itemId","formModel","vuelidate","store","resource","back-route"])]),default:l(()=>[s(I,{shadow:!0},{body:l(()=>[s(y,{modelValue:e(o),"onUpdate:modelValue":r[2]||(r[2]=t=>d(o)?o.value=t:o=t),selectedLang:e(i),loading:e(a),disabled:e(a),vuelidate:e(p),rules:e(u)},null,8,["modelValue","selectedLang","loading","disabled","vuelidate","rules"])]),_:1})]),_:1},8,["title"])}}};export{Y as default};
