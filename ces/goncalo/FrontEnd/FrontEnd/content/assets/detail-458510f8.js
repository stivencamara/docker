import{g as B,f as G,i as P,E as p,r as E,K as z,u as l,z as n,k as i,c as w,l as K,w as u,n as o,p as a,s as c,H as L}from"./index-255cb3f5.js";import{p as v}from"./profiles-216149e6.js";import{h as N,p as M}from"./helpers-cf12a1e7.js";import{_ as V}from"./cancel-confirm-7ef04aba.js";import{u as j}from"./index.esm-a0301e1b.js";import"./helpers-3a01797c.js";import"./index.esm-d39b5f1a.js";const X={__name:"detail",setup(q){const r=B(),C=G(),F=P(),d="confirm-cancel",T=p(N.formRules());var s=E(!1);let m=E(0);var t=p({name:"",permissions:[]}),f=p({name:"",permissions:[]});const y=j(T,t);z(async()=>{m.value=l.decodeId(C.params.profileId),m.value?await O():r.push({name:n.router.BACKOFFICE_SETTINGS_PROFILE_PAGE.name})});async function O(){s.value=!0;const e=await v.getById(m.value);l.validateResponse(e,null,()=>{Object.assign(t,e.data),Object.assign(f,e.data)}),s.value=!1}function S(){l.compareObjectIsDirty(t,f)?l.showModalById(d):r.push({name:n.router.BACKOFFICE_SETTINGS_PROFILE_PAGE.name})}async function h(){s.value=!0;let e=await v.update(t);l.validateResponse(e,F.backoffice.settings.profiles.update.updated,()=>{r.push({name:n.router.BACKOFFICE_SETTINGS_PROFILE_PAGE.name})}),s.value=!1}function k(){r.push({name:n.router.BACKOFFICE_SETTINGS_PROFILE_PAGE.name})}return(e,_)=>{const b=i("breadcrumb-item"),R=i("breadcrumb"),g=i("cbutton"),A=i("page");return w(),K(A,{title:e._lang.backoffice.settings.profiles.update.pageTitle},{breadcrumb:u(()=>[o(R,{"has-home":!0},{default:u(()=>[o(b,{label:e._lang.backoffice.settings.profiles.pageTitle,"router-path":a(n).router.BACKOFFICE_SETTINGS_PROFILE_PAGE.path},null,8,["label","router-path"]),o(b,{label:e._lang.backoffice.settings.profiles.update.pageTitle},null,8,["label"])]),_:1})]),actions:u(()=>[o(g,{class:"col-12 col-sm-auto",type:a(c).buttonType.secondary,size:a(c).buttonSize.large,title:e._lang.common.cancel,onClick:S,disabled:a(s)},null,8,["type","size","title","disabled"]),o(g,{class:"col-12 col-sm-auto",title:e._lang.common.save,type:a(c).buttonType.primary,size:a(c).buttonSize.large,onClick:h,disabled:a(s)},null,8,["title","type","size","disabled"])]),default:u(()=>[o(M,{modelValue:a(t),"onUpdate:modelValue":_[0]||(_[0]=I=>L(t)?t.value=I:t=I),required:!0,vuelidator:a(y),disabled:!0},null,8,["modelValue","vuelidator"]),o(V,{id:d,title:e._lang.common.cancel,action:k},null,8,["title"])]),_:1},8,["title"])}}};export{X as default};