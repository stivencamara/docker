import{m as k,x as S,y as m,r as A,a as r,b as O,c as R,w as s,d as o,f as e,s as n,A as i,i as w,n as p,R as G}from"./index-920dbb37.js";import{h as P,p as B}from"./helpers-fde5cb2f.js";import{_ as z}from"./cancel-confirm-33e0b7cc.js";import{p as N}from"./profiles-ddb48857.js";import{u as L}from"./index.esm-d064d6e3.js";import"./helpers-4c156364.js";import"./index.esm-d0811cb6.js";const H={__name:"create",setup(V){const c=k(),f=S(),d="confirm-cancel",E=m(P.formRules());var l=A(!1),t=m({name:"",permissions:[]}),F=m({name:"",permissions:[]});const u=L(E,t);function v(){p.compareObjectIsDirty(t,F)?p.showModalById(d):c.push({name:n.router.BACKOFFICE_SETTINGS_PROFILE_PAGE.name})}async function I(){if(l.value=!0,await u.value.$validate(),u.value.$error)G.warning(f.common.requiredFields);else{let a=await N.create(t);p.validateResponse(a,f.backoffice.settings.profiles.create.created,()=>{c.push({name:n.router.BACKOFFICE_SETTINGS_PROFILE_PAGE.name})})}l.value=!1}function T(){c.push({name:n.router.BACKOFFICE_SETTINGS_PROFILE_PAGE.name})}return(a,_)=>{const b=r("breadcrumb-item"),y=r("breadcrumb"),g=r("cbutton"),h=r("page");return O(),R(h,{title:a._lang.backoffice.settings.profiles.create.pageTitle},{breadcrumb:s(()=>[o(y,{"has-home":!0},{default:s(()=>[o(b,{label:a._lang.backoffice.settings.profiles.pageTitle,"router-path":e(n).router.BACKOFFICE_SETTINGS_PROFILE_PAGE.path},null,8,["label","router-path"]),o(b,{label:a._lang.backoffice.settings.profiles.create.pageTitle},null,8,["label"])]),_:1})]),actions:s(()=>[o(g,{class:"col-12 col-sm-auto",type:e(i).buttonType.secondary,size:e(i).buttonSize.large,title:a._lang.common.cancel,onClick:v,disabled:e(l)},null,8,["type","size","title","disabled"]),o(g,{class:"col-12 col-sm-auto",title:a._lang.common.create,type:e(i).buttonType.primary,size:e(i).buttonSize.large,onClick:I,disabled:e(l)},null,8,["title","type","size","disabled"])]),default:s(()=>[o(B,{modelValue:e(t),"onUpdate:modelValue":_[0]||(_[0]=C=>w(t)?t.value=C:t=C),required:!0,vuelidator:e(u)},null,8,["modelValue","vuelidator"]),o(z,{id:d,title:a._lang.common.cancel,action:T},null,8,["title"])]),_:1},8,["title"])}}};export{H as default};