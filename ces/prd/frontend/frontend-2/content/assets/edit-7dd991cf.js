import{d as A,g as G,f as L,i as w,j as E,r as p,N as I,v as T,L as N,u as f,B as v,l as c,c as V,m as y,n as i,q as t,s as e,J as h}from"./index-957232d9.js";import{p as C}from"./profiles-5e6503b4.js";import{h as M,p as j}from"./helpers-2f0417e2.js";import{u as D}from"./index.esm-c57f27d9.js";import"./helpers-e58dedc6.js";import{_ as K}from"./edit-actions-6232b7ba.js";import"./index.esm-b6709f5c.js";import"./cancel-confirm-5fbde36c.js";import"./settings-16081c9c.js";const q=A("ProfilesStore",{state:()=>({progress:0,formToCompare:null}),getters:{},actions:{setProgress(n){this.progress=n},setFormToCompare(n){this.formToCompare=n}}}),$={__name:"edit",setup(n){const F=G(),S=L();w();const P=E(M.formRules()),_=q(),d=p(I.havePermission(T.permissions.profiles.createEdit)),u=p(I.havePermission(T.permissions.profiles.delete));var s=p(!1);let r=p(0);var o=E({name:"",permissions:[]});const g=D(P,o);N(async()=>{r.value=f.decodeId(S.params.profileId),r.value?(d.value=u.value&&r.value!=1,u.value=u.value&&r.value!=1,await k()):F.push({name:v.router.BACKOFFICE_SETTINGS_PROFILE_PAGE.name})});async function k(){s.value=!0;const a=await C.getById(r.value);f.validateResponse(a,null,()=>{Object.assign(o,a.data),_.setFormToCompare(f.cloneObject(a.data))}),s.value=!1}return(a,m)=>{const b=c("breadcrumb-item"),B=c("breadcrumb"),O=c("card"),R=c("page");return V(),y(R,{title:a._lang.backoffice.settings.profiles.update.pageTitle},{breadcrumb:i(()=>[t(B,{"has-home":!0},{default:i(()=>[t(b,{label:a._lang.backoffice.settings.profiles.pageTitle,"router-path":e(v).router.BACKOFFICE_SETTINGS_PROFILE_PAGE.path},null,8,["label","router-path"]),t(b,{label:a._lang.backoffice.settings.profiles.update.pageTitle},null,8,["label"])]),_:1})]),actions:i(()=>[t(K,{loading:e(s),"onUpdate:loading":m[0]||(m[0]=l=>h(s)?s.value=l:s=l),service:e(C),itemId:e(r),formModel:e(o),vuelidate:e(g),store:e(_),resource:a._lang.backoffice.settings.profiles,"back-route":e(v).router.BACKOFFICE_SETTINGS_PROFILE_PAGE.name,showLangSelector:!1,canEdit:d.value,canDelete:u.value},null,8,["loading","service","itemId","formModel","vuelidate","store","resource","back-route","canEdit","canDelete"])]),default:i(()=>[t(O,{shadow:!0},{body:i(()=>[t(j,{modelValue:e(o),"onUpdate:modelValue":m[1]||(m[1]=l=>h(o)?o.value=l:o=l),required:!0,vuelidator:e(g),disabled:!d.value},null,8,["modelValue","vuelidator","disabled"])]),_:1})]),_:1},8,["title"])}}};export{$ as default};
