import{g as G,i as I,r as w,G as m,k as o,c as R,l as A,w as s,n as l,p as e,z as n,s as i,I as U,u as p,R as z}from"./index-a14ad215.js";import{u as B}from"./users-ef3a3be5.js";import{h as N,p as O}from"./form-90167f02.js";import{_ as V}from"./cancel-confirm-ab082f5c.js";import{u as K}from"./index.esm-97dcd533.js";import"./helpers-71142cd6.js";import"./index.esm-88a1129f.js";import"./users-502ba5a3.js";const Q={__name:"create",setup(P){const c=G(),d=I(),f="confirm-cancel";let r=w(!1),a=m({name:null,email:null,profiles:[],active:!0,isGraUser:!1,password:null}),S=m({name:null,email:null,profiles:[],active:!0,isGraUser:!1,password:null}),E=m(N.formRulesCreate(a.isGraUser)),u=K(E,a);function v(){p.compareObjectIsDirty(a,S)?p.showModalById(f):c.push({name:n.router.BACKOFFICE_SETTINGS_USERS_PAGE.name})}async function T(){if(r.value=!0,await u.value.$validate(),u.value.$error)z.warning(d.common.requiredFields);else{let t=await B.create(a);p.validateResponse(t,d.backoffice.settings.users.create.created,()=>{c.push({name:n.router.BACKOFFICE_SETTINGS_USERS_PAGE.name})})}r.value=!1}function h(){c.push({name:n.router.BACKOFFICE_SETTINGS_USERS_PAGE.name})}return(t,_)=>{const b=o("breadcrumb-item"),k=o("breadcrumb"),g=o("cbutton"),y=o("card"),F=o("page");return R(),A(F,{title:t._lang.backoffice.settings.users.create.pageTitle},{breadcrumb:s(()=>[l(k,{"has-home":!0},{default:s(()=>[l(b,{label:t._lang.backoffice.settings.users.pageTitle,"router-path":e(n).router.BACKOFFICE_SETTINGS_USERS_PAGE.path},null,8,["label","router-path"]),l(b,{label:t._lang.backoffice.settings.users.create.pageTitle},null,8,["label"])]),_:1})]),actions:s(()=>[l(g,{class:"col-12 col-sm-auto",type:e(i).buttonType.secondary,size:e(i).buttonSize.large,title:t._lang.common.cancel,onClick:v,disabled:e(r)},null,8,["type","size","title","disabled"]),l(g,{class:"col-12 col-sm-auto",title:t._lang.common.create,type:e(i).buttonType.primary,size:e(i).buttonSize.large,onClick:T,disabled:e(r)},null,8,["title","type","size","disabled"])]),default:s(()=>[l(y,{shadow:!0},{body:s(()=>[l(O,{modelValue:e(a),"onUpdate:modelValue":_[0]||(_[0]=C=>U(a)?a.value=C:a=C),required:!0,vuelidator:e(u),loading:e(r),isCreate:!0},null,8,["modelValue","vuelidator","loading"])]),_:1}),l(V,{id:f,title:t._lang.common.cancel,action:h},null,8,["title"])]),_:1},8,["title"])}}};export{Q as default};