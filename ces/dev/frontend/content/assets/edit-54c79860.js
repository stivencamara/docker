import{h as I,_ as k}from"./form-78135f49.js";import{_ as F}from"./edit-actions-48107c1a.js";import{m as N,N as V,x as B,r as m,y as A,A as M,L as w,n as d,s as p,a as u,b as G,c as h,w as n,d as i,f as e,i as f}from"./index-920dbb37.js";import{u as P}from"./index.esm-d064d6e3.js";import{e as C}from"./economic-activity-1e9d9a31.js";import{u as R}from"./life-event-844af894.js";import"./helpers-4c156364.js";import"./index.esm-d0811cb6.js";import"./cancel-confirm-33e0b7cc.js";import"./settings-bb7269a2.js";const W={__name:"edit",setup(K){const T=N(),y=V();B();const g=R();let t=m(!0),s=A(I.newForm()),l=m(M.language.pt),c=m(0),_=A(I.formRules());const b=P(_,s);async function E(){t.value=!0;const a=await C.getById(c.value);d.validateResponse(a,null,()=>{Object.assign(s,a.data),g.setFormToCompare(d.cloneObject(a.data))}),t.value=!1}return w(async()=>{c.value=d.decodeId(y.params.economicActivityId),c.value?await E():T.push({name:p.router.BACKOFFICE_SETTINGS_ECONOMICACTIVITY_PAGE.name})}),(a,r)=>{const v=u("breadcrumb-item"),O=u("breadcrumb"),L=u("card"),S=u("page");return G(),h(S,{title:a._lang.backoffice.settings.economicActivity.editPageTitle},{breadcrumb:n(()=>[i(O,{"has-home":!0},{default:n(()=>[i(v,{label:a._lang.backoffice.settings.economicActivity.breadcrumbTitle,"router-path":e(p).router.BACKOFFICE_SETTINGS_ECONOMICACTIVITY_PAGE.path},null,8,["label","router-path"]),i(v,{label:a._lang.backoffice.settings.economicActivity.editPageTitle},null,8,["label"])]),_:1})]),actions:n(()=>[i(F,{loading:e(t),"onUpdate:loading":r[0]||(r[0]=o=>f(t)?t.value=o:t=o),selectedLang:e(l),"onUpdate:selectedLang":r[1]||(r[1]=o=>f(l)?l.value=o:l=o),service:e(C),itemId:e(c),formModel:e(s),vuelidate:e(b),store:e(g),resource:a._lang.backoffice.settings.economicActivity,"back-route":e(p).router.BACKOFFICE_SETTINGS_ECONOMICACTIVITY_PAGE.name},null,8,["loading","selectedLang","service","itemId","formModel","vuelidate","store","resource","back-route"])]),default:n(()=>[i(L,{shadow:!0},{body:n(()=>[i(k,{modelValue:e(s),"onUpdate:modelValue":r[2]||(r[2]=o=>f(s)?s.value=o:s=o),selectedLang:e(l),loading:e(t),disabled:e(t),vuelidate:e(b),rules:e(_)},null,8,["modelValue","selectedLang","loading","disabled","vuelidate","rules"])]),_:1})]),_:1},8,["title"])}}};export{W as default};
