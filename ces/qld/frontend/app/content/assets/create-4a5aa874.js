import{h as g,_ as y}from"./form-21566166.js";import{_ as E}from"./edit-actions-e3b815e6.js";import{B as S,i as _,s as b,v as k,r as m,o as V,c as h,w as l,a as s,m as e,l as v,z as u}from"./index-a3ba1ed7.js";import{e as F}from"./economic-activity-8899a8dd.js";import{u as L}from"./index.esm-9dd2f6da.js";import"./helpers-4d6c1969.js";import"./index.esm-d7202dd3.js";import"./cancel-confirm-f95c31ca.js";import"./settings-4e9392c0.js";const O=S("EconomicActivityStore",{state:()=>({progress:0,formToCompare:null}),getters:{},actions:{setProgress(c){this.progress=c},setFormToCompare(c){this.formToCompare=c}}}),Y={__name:"create",setup(c){const A=O();let a=_(!1),o=b(g.newForm()),i=_(k.language.pt),d=b(g.formRules());const p=L(d,o);return(n,r)=>{const f=m("breadcrumb-item"),C=m("breadcrumb"),T=m("card"),I=m("page");return V(),h(I,{title:n._lang.backoffice.settings.economicActivity.createPageTitle},{breadcrumb:l(()=>[s(C,{"has-home":!0},{default:l(()=>[s(f,{label:n._lang.backoffice.settings.economicActivity.breadcrumbTitle,"router-path":e(v).router.BACKOFFICE_SETTINGS_ECONOMICACTIVITY_PAGE.path},null,8,["label","router-path"]),s(f,{label:n._lang.backoffice.settings.economicActivity.createPageTitle},null,8,["label"])]),_:1})]),actions:l(()=>[s(E,{loading:e(a),"onUpdate:loading":r[0]||(r[0]=t=>u(a)?a.value=t:a=t),selectedLang:e(i),"onUpdate:selectedLang":r[1]||(r[1]=t=>u(i)?i.value=t:i=t),service:e(F),itemId:e(o).economicActivityId,formModel:e(o),vuelidate:e(p),store:e(A),resource:n._lang.backoffice.settings.economicActivity,"back-route":e(v).router.BACKOFFICE_SETTINGS_ECONOMICACTIVITY_PAGE.name},null,8,["loading","selectedLang","service","itemId","formModel","vuelidate","store","resource","back-route"])]),default:l(()=>[s(T,{shadow:!0},{body:l(()=>[s(y,{modelValue:e(o),"onUpdate:modelValue":r[2]||(r[2]=t=>u(o)?o.value=t:o=t),selectedLang:e(i),loading:e(a),disabled:e(a),vuelidate:e(p),rules:e(d)},null,8,["modelValue","selectedLang","loading","disabled","vuelidate","rules"])]),_:1})]),_:1},8,["title"])}}};export{Y as default};
