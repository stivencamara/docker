import{h as I,_ as k}from"./form-5b2d6ba9.js";import{_ as B}from"./edit-actions-275df427.js";import{d as V,g as h,f as M,i as N,r as d,j as T,v as G,L as P,u as p,B as f,l as m,c as w,m as R,n as l,q as i,s as e,J as g}from"./index-80ba5b4e.js";import{e as A}from"./economic-activity-1d7a5698.js";import{u as j}from"./index.esm-5a51e55a.js";import"./helpers-4a70dd55.js";import"./index.esm-ae8bce41.js";import"./cancel-confirm-9074d80e.js";import"./settings-ad5b6b99.js";const K=V("LifeEventStore",{state:()=>({progress:0,formToCompare:null}),getters:{},actions:{setProgress(c){this.progress=c},setFormToCompare(c){this.formToCompare=c}}}),X={__name:"edit",setup(c){const E=h(),y=M();N();const _=K();let t=d(!0),s=T(I.newForm()),n=d(G.language.pt),u=d(0),b=T(I.formRules());const v=j(b,s);async function O(){t.value=!0;const o=await A.getById(u.value);p.validateResponse(o,null,()=>{Object.assign(s,o.data),_.setFormToCompare(p.cloneObject(o.data))}),t.value=!1}return P(async()=>{u.value=p.decodeId(y.params.economicActivityId),u.value?await O():E.push({name:f.router.BACKOFFICE_SETTINGS_ECONOMICACTIVITY_PAGE.name})}),(o,r)=>{const C=m("breadcrumb-item"),S=m("breadcrumb"),L=m("card"),F=m("page");return w(),R(F,{title:o._lang.backoffice.settings.economicActivity.editPageTitle},{breadcrumb:l(()=>[i(S,{"has-home":!0},{default:l(()=>[i(C,{label:o._lang.backoffice.settings.economicActivity.breadcrumbTitle,"router-path":e(f).router.BACKOFFICE_SETTINGS_ECONOMICACTIVITY_PAGE.path},null,8,["label","router-path"]),i(C,{label:o._lang.backoffice.settings.economicActivity.editPageTitle},null,8,["label"])]),_:1})]),actions:l(()=>[i(B,{loading:e(t),"onUpdate:loading":r[0]||(r[0]=a=>g(t)?t.value=a:t=a),selectedLang:e(n),"onUpdate:selectedLang":r[1]||(r[1]=a=>g(n)?n.value=a:n=a),service:e(A),itemId:e(u),formModel:e(s),vuelidate:e(v),store:e(_),resource:o._lang.backoffice.settings.economicActivity,"back-route":e(f).router.BACKOFFICE_SETTINGS_ECONOMICACTIVITY_PAGE.name},null,8,["loading","selectedLang","service","itemId","formModel","vuelidate","store","resource","back-route"])]),default:l(()=>[i(L,{shadow:!0},{body:l(()=>[i(k,{modelValue:e(s),"onUpdate:modelValue":r[2]||(r[2]=a=>g(s)?s.value=a:s=a),selectedLang:e(n),loading:e(t),disabled:e(t),vuelidate:e(v),rules:e(b)},null,8,["modelValue","selectedLang","loading","disabled","vuelidate","rules"])]),_:1})]),_:1},8,["title"])}}};export{X as default};