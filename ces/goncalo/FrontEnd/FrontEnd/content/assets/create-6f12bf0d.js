import{g as S,i as O,j as m,r as w,l,c as A,m as B,n as r,q as t,s as e,C as n,v as i,L as G,u as p,B as P}from"./index-f1c6a491.js";import{p as R}from"./profiles-054a3025.js";import{h as z,p as L}from"./helpers-4a078b98.js";import{_ as N}from"./cancel-confirm-8dde2a26.js";import{u as V}from"./index.esm-2d1621cd.js";import"./helpers-72b2eb57.js";import"./index.esm-d2c73440.js";const J={__name:"create",setup(K){const c=S(),d=O(),f="confirm-cancel",v=m(z.formRules());var s=w(!1),o=m({name:"",permissions:[]}),E=m({name:"",permissions:[]});const u=V(v,o);function F(){p.compareObjectIsDirty(o,E)?p.showModalById(f):c.push({name:n.router.BACKOFFICE_SETTINGS_PROFILE_PAGE.name})}async function I(){if(s.value=!0,await u.value.$validate(),u.value.$error)P.warning(d.common.requiredFields);else{let a=await R.create(o);p.validateResponse(a,d.backoffice.settings.profiles.create.created,()=>{c.push({name:n.router.BACKOFFICE_SETTINGS_PROFILE_PAGE.name})})}s.value=!1}function T(){c.push({name:n.router.BACKOFFICE_SETTINGS_PROFILE_PAGE.name})}return(a,_)=>{const b=l("breadcrumb-item"),h=l("breadcrumb"),g=l("cbutton"),y=l("card"),k=l("page");return A(),B(k,{title:a._lang.backoffice.settings.profiles.create.pageTitle},{breadcrumb:r(()=>[t(h,{"has-home":!0},{default:r(()=>[t(b,{label:a._lang.backoffice.settings.profiles.pageTitle,"router-path":e(n).router.BACKOFFICE_SETTINGS_PROFILE_PAGE.path},null,8,["label","router-path"]),t(b,{label:a._lang.backoffice.settings.profiles.create.pageTitle},null,8,["label"])]),_:1})]),actions:r(()=>[t(g,{class:"col-12 col-sm-auto",type:e(i).buttonType.secondary,size:e(i).buttonSize.large,title:a._lang.common.cancel,onClick:F,disabled:e(s)},null,8,["type","size","title","disabled"]),t(g,{class:"col-12 col-sm-auto",title:a._lang.common.create,type:e(i).buttonType.primary,size:e(i).buttonSize.large,onClick:I,disabled:e(s)},null,8,["title","type","size","disabled"])]),default:r(()=>[t(y,{shadow:!0},{body:r(()=>[t(L,{modelValue:e(o),"onUpdate:modelValue":_[0]||(_[0]=C=>G(o)?o.value=C:o=C),required:!0,vuelidator:e(u)},null,8,["modelValue","vuelidator"])]),_:1}),t(N,{id:f,title:a._lang.common.cancel,action:T},null,8,["title"])]),_:1},8,["title"])}}};export{J as default};
