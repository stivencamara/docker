import{g as y,i as S,j as m,r as O,l as r,c as R,m as A,n as s,q as o,s as e,B as n,v as i,J as B,u as p,R as G}from"./index-82cc5ade.js";import{p as P}from"./profiles-e325150f.js";import{h as w,p as z}from"./helpers-8ed0a66d.js";import{_ as N}from"./cancel-confirm-8d5b70b7.js";import{u as L}from"./index.esm-2c6c03b0.js";import"./helpers-99584788.js";import"./index.esm-e88984bb.js";const U={__name:"create",setup(V){const c=y(),f=S(),d="confirm-cancel",v=m(w.formRules());var l=O(!1),t=m({name:"",permissions:[]}),E=m({name:"",permissions:[]});const u=L(v,t);function F(){p.compareObjectIsDirty(t,E)?p.showModalById(d):c.push({name:n.router.BACKOFFICE_SETTINGS_PROFILE_PAGE.name})}async function I(){if(l.value=!0,await u.value.$validate(),u.value.$error)G.warning(f.common.requiredFields);else{let a=await P.create(t);p.validateResponse(a,f.backoffice.settings.profiles.create.created,()=>{c.push({name:n.router.BACKOFFICE_SETTINGS_PROFILE_PAGE.name})})}l.value=!1}function T(){c.push({name:n.router.BACKOFFICE_SETTINGS_PROFILE_PAGE.name})}return(a,_)=>{const b=r("breadcrumb-item"),h=r("breadcrumb"),g=r("cbutton"),k=r("page");return R(),A(k,{title:a._lang.backoffice.settings.profiles.create.pageTitle},{breadcrumb:s(()=>[o(h,{"has-home":!0},{default:s(()=>[o(b,{label:a._lang.backoffice.settings.profiles.pageTitle,"router-path":e(n).router.BACKOFFICE_SETTINGS_PROFILE_PAGE.path},null,8,["label","router-path"]),o(b,{label:a._lang.backoffice.settings.profiles.create.pageTitle},null,8,["label"])]),_:1})]),actions:s(()=>[o(g,{class:"col-12 col-sm-auto",type:e(i).buttonType.secondary,size:e(i).buttonSize.large,title:a._lang.common.cancel,onClick:F,disabled:e(l)},null,8,["type","size","title","disabled"]),o(g,{class:"col-12 col-sm-auto",title:a._lang.common.create,type:e(i).buttonType.primary,size:e(i).buttonSize.large,onClick:I,disabled:e(l)},null,8,["title","type","size","disabled"])]),default:s(()=>[o(z,{modelValue:e(t),"onUpdate:modelValue":_[0]||(_[0]=C=>B(t)?t.value=C:t=C),required:!0,vuelidator:e(u)},null,8,["modelValue","vuelidator"]),o(N,{id:d,title:a._lang.common.cancel,action:T},null,8,["title"])]),_:1},8,["title"])}}};export{U as default};
