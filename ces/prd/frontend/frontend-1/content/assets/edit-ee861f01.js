import{d as G,g as w,f as A,i as L,G as E,r as p,M as I,s as T,K as M,u as f,z as v,k as c,c as V,l as y,w as i,n as t,p as e,I as h}from"./index-a14ad215.js";import{p as C}from"./profiles-c6af97b9.js";import{h as K,p as N}from"./helpers-94887700.js";import{u as D}from"./index.esm-97dcd533.js";import"./helpers-71142cd6.js";import{_ as j}from"./edit-actions-88cd0d6d.js";import"./index.esm-88a1129f.js";import"./cancel-confirm-ab082f5c.js";import"./settings-739a4c13.js";const U=G("ProfilesStore",{state:()=>({progress:0,formToCompare:null}),getters:{},actions:{setProgress(n){this.progress=n},setFormToCompare(n){this.formToCompare=n}}}),$={__name:"edit",setup(n){const F=w(),S=A();L();const P=E(K.formRules()),_=U(),d=p(I.havePermission(T.permissions.profiles.createEdit)),u=p(I.havePermission(T.permissions.profiles.delete));var s=p(!1);let r=p(0);var o=E({name:"",permissions:[]});const g=D(P,o);M(async()=>{r.value=f.decodeId(S.params.profileId),r.value?(d.value=u.value&&r.value!=1,u.value=u.value&&r.value!=1,await k()):F.push({name:v.router.BACKOFFICE_SETTINGS_PROFILE_PAGE.name})});async function k(){s.value=!0;const a=await C.getById(r.value);f.validateResponse(a,null,()=>{Object.assign(o,a.data),_.setFormToCompare(f.cloneObject(a.data))}),s.value=!1}return(a,m)=>{const b=c("breadcrumb-item"),O=c("breadcrumb"),R=c("card"),B=c("page");return V(),y(B,{title:a._lang.backoffice.settings.profiles.update.pageTitle},{breadcrumb:i(()=>[t(O,{"has-home":!0},{default:i(()=>[t(b,{label:a._lang.backoffice.settings.profiles.pageTitle,"router-path":e(v).router.BACKOFFICE_SETTINGS_PROFILE_PAGE.path},null,8,["label","router-path"]),t(b,{label:a._lang.backoffice.settings.profiles.update.pageTitle},null,8,["label"])]),_:1})]),actions:i(()=>[t(j,{loading:e(s),"onUpdate:loading":m[0]||(m[0]=l=>h(s)?s.value=l:s=l),service:e(C),itemId:e(r),formModel:e(o),vuelidate:e(g),store:e(_),resource:a._lang.backoffice.settings.profiles,"back-route":e(v).router.BACKOFFICE_SETTINGS_PROFILE_PAGE.name,showLangSelector:!1,canEdit:d.value,canDelete:u.value},null,8,["loading","service","itemId","formModel","vuelidate","store","resource","back-route","canEdit","canDelete"])]),default:i(()=>[t(R,{shadow:!0},{body:i(()=>[t(N,{modelValue:e(o),"onUpdate:modelValue":m[1]||(m[1]=l=>h(o)?o.value=l:o=l),required:!0,vuelidator:e(g),disabled:!d.value},null,8,["modelValue","vuelidator","disabled"])]),_:1})]),_:1},8,["title"])}}};export{$ as default};
