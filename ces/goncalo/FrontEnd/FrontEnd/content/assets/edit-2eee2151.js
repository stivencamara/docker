import{h as I,_ as L}from"./form-ad31076c.js";import{_ as V}from"./edit-actions-fe192c86.js";import{d as h,g as B,f as M,i as N,r as d,E as T,s as w,K as G,u as p,z as f,k as m,c as P,l as R,w as l,n as i,p as e,H as g}from"./index-4fe030fb.js";import{e as A}from"./economic-activity-0d254a9e.js";import{u as K}from"./index.esm-cfa4c1f7.js";import"./helpers-79f72589.js";import"./index.esm-bce4ceba.js";import"./cancel-confirm-c911a58b.js";import"./settings-364df236.js";const U=h("LifeEventStore",{state:()=>({progress:0,formToCompare:null}),getters:{},actions:{setProgress(c){this.progress=c},setFormToCompare(c){this.formToCompare=c}}}),X={__name:"edit",setup(c){const E=B(),y=M();N();const _=U();let t=d(!0),s=T(I.newForm()),n=d(w.language.pt),u=d(0),b=T(I.formRules());const v=K(b,s);async function O(){t.value=!0;const o=await A.getById(u.value);p.validateResponse(o,null,()=>{Object.assign(s,o.data),_.setFormToCompare(p.cloneObject(o.data))}),t.value=!1}return G(async()=>{u.value=p.decodeId(y.params.economicActivityId),u.value?await O():E.push({name:f.router.BACKOFFICE_SETTINGS_ECONOMICACTIVITY_PAGE.name})}),(o,r)=>{const C=m("breadcrumb-item"),S=m("breadcrumb"),k=m("card"),F=m("page");return P(),R(F,{title:o._lang.backoffice.settings.economicActivity.editPageTitle},{breadcrumb:l(()=>[i(S,{"has-home":!0},{default:l(()=>[i(C,{label:o._lang.backoffice.settings.economicActivity.breadcrumbTitle,"router-path":e(f).router.BACKOFFICE_SETTINGS_ECONOMICACTIVITY_PAGE.path},null,8,["label","router-path"]),i(C,{label:o._lang.backoffice.settings.economicActivity.editPageTitle},null,8,["label"])]),_:1})]),actions:l(()=>[i(V,{loading:e(t),"onUpdate:loading":r[0]||(r[0]=a=>g(t)?t.value=a:t=a),selectedLang:e(n),"onUpdate:selectedLang":r[1]||(r[1]=a=>g(n)?n.value=a:n=a),service:e(A),itemId:e(u),formModel:e(s),vuelidate:e(v),store:e(_),resource:o._lang.backoffice.settings.economicActivity,"back-route":e(f).router.BACKOFFICE_SETTINGS_ECONOMICACTIVITY_PAGE.name},null,8,["loading","selectedLang","service","itemId","formModel","vuelidate","store","resource","back-route"])]),default:l(()=>[i(k,{shadow:!0},{body:l(()=>[i(L,{modelValue:e(s),"onUpdate:modelValue":r[2]||(r[2]=a=>g(s)?s.value=a:s=a),selectedLang:e(n),loading:e(t),disabled:e(t),vuelidate:e(v),rules:e(b)},null,8,["modelValue","selectedLang","loading","disabled","vuelidate","rules"])]),_:1})]),_:1},8,["title"])}}};export{X as default};
