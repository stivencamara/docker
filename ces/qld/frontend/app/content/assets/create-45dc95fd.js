import{s as y,z as S,a as m,r as O,b as r,o as w,l as A,w as s,e as o,g as e,x as n,i,D as G,u as p,Q as P}from"./index-5b4ebf84.js";import{h as R,p as z}from"./helpers-53420a8a.js";import{_ as B}from"./cancel-confirm-46a9e596.js";import{p as N}from"./profiles-49e37a13.js";import{u as L}from"./index.esm-65642301.js";import"./helpers-4796f1a9.js";import"./index.esm-85573352.js";const U={__name:"create",setup(V){const c=y(),f=S(),d="confirm-cancel",E=m(R.formRules());var l=O(!1),t=m({name:"",permissions:[]}),F=m({name:"",permissions:[]});const u=L(E,t);function v(){p.compareObjectIsDirty(t,F)?p.showModalById(d):c.push({name:n.router.BACKOFFICE_SETTINGS_PROFILE_PAGE.name})}async function I(){if(l.value=!0,await u.value.$validate(),u.value.$error)P.warning(f.common.requiredFields);else{let a=await N.create(t);p.validateResponse(a,f.backoffice.settings.profiles.create.created,()=>{c.push({name:n.router.BACKOFFICE_SETTINGS_PROFILE_PAGE.name})})}l.value=!1}function T(){c.push({name:n.router.BACKOFFICE_SETTINGS_PROFILE_PAGE.name})}return(a,_)=>{const b=r("breadcrumb-item"),h=r("breadcrumb"),g=r("cbutton"),k=r("page");return w(),A(k,{title:a._lang.backoffice.settings.profiles.create.pageTitle},{breadcrumb:s(()=>[o(h,{"has-home":!0},{default:s(()=>[o(b,{label:a._lang.backoffice.settings.profiles.pageTitle,"router-path":e(n).router.BACKOFFICE_SETTINGS_PROFILE_PAGE.path},null,8,["label","router-path"]),o(b,{label:a._lang.backoffice.settings.profiles.create.pageTitle},null,8,["label"])]),_:1})]),actions:s(()=>[o(g,{class:"col-12 col-sm-auto",type:e(i).buttonType.secondary,size:e(i).buttonSize.large,title:a._lang.common.cancel,onClick:v,disabled:e(l)},null,8,["type","size","title","disabled"]),o(g,{class:"col-12 col-sm-auto",title:a._lang.common.create,type:e(i).buttonType.primary,size:e(i).buttonSize.large,onClick:I,disabled:e(l)},null,8,["title","type","size","disabled"])]),default:s(()=>[o(z,{modelValue:e(t),"onUpdate:modelValue":_[0]||(_[0]=C=>G(t)?t.value=C:t=C),required:!0,vuelidator:e(u)},null,8,["modelValue","vuelidator"]),o(B,{id:d,title:a._lang.common.cancel,action:T},null,8,["title"])]),_:1},8,["title"])}}};export{U as default};