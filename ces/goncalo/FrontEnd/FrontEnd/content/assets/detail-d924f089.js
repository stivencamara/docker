import{g as A,f as B,i as P,G as p,r as v,K as z,u as l,z as n,k as i,c as w,l as K,w as u,n as o,p as a,s as c,I as L}from"./index-c417b10a.js";import{p as E}from"./profiles-8885b839.js";import{h as N,p as M}from"./helpers-06a07881.js";import{_ as V}from"./cancel-confirm-f07f887e.js";import{u as j}from"./index.esm-5fe78185.js";import"./helpers-422844e7.js";import"./index.esm-29b873a2.js";const X={__name:"detail",setup(q){const r=A(),C=B(),F=P(),d="confirm-cancel",T=p(N.formRules());var s=v(!1);let m=v(0);var t=p({name:"",permissions:[]}),f=p({name:"",permissions:[]});const y=j(T,t);z(async()=>{m.value=l.decodeId(C.params.profileId),m.value?await O():r.push({name:n.router.BACKOFFICE_SETTINGS_PROFILE_PAGE.name})});async function O(){s.value=!0;const e=await E.getById(m.value);l.validateResponse(e,null,()=>{Object.assign(t,e.data),Object.assign(f,e.data)}),s.value=!1}function S(){l.compareObjectIsDirty(t,f)?l.showModalById(d):r.push({name:n.router.BACKOFFICE_SETTINGS_PROFILE_PAGE.name})}async function h(){s.value=!0;let e=await E.update(t);l.validateResponse(e,F.backoffice.settings.profiles.update.updated,()=>{r.push({name:n.router.BACKOFFICE_SETTINGS_PROFILE_PAGE.name})}),s.value=!1}function k(){r.push({name:n.router.BACKOFFICE_SETTINGS_PROFILE_PAGE.name})}return(e,_)=>{const b=i("breadcrumb-item"),G=i("breadcrumb"),g=i("cbutton"),R=i("page");return w(),K(R,{title:e._lang.backoffice.settings.profiles.update.pageTitle},{breadcrumb:u(()=>[o(G,{"has-home":!0},{default:u(()=>[o(b,{label:e._lang.backoffice.settings.profiles.pageTitle,"router-path":a(n).router.BACKOFFICE_SETTINGS_PROFILE_PAGE.path},null,8,["label","router-path"]),o(b,{label:e._lang.backoffice.settings.profiles.update.pageTitle},null,8,["label"])]),_:1})]),actions:u(()=>[o(g,{class:"col-12 col-sm-auto",type:a(c).buttonType.secondary,size:a(c).buttonSize.large,title:e._lang.common.cancel,onClick:S,disabled:a(s)},null,8,["type","size","title","disabled"]),o(g,{class:"col-12 col-sm-auto",title:e._lang.common.save,type:a(c).buttonType.primary,size:a(c).buttonSize.large,onClick:h,disabled:a(s)},null,8,["title","type","size","disabled"])]),default:u(()=>[o(M,{modelValue:a(t),"onUpdate:modelValue":_[0]||(_[0]=I=>L(t)?t.value=I:t=I),required:!0,vuelidator:a(y),disabled:!0},null,8,["modelValue","vuelidator"]),o(V,{id:d,title:e._lang.common.cancel,action:k},null,8,["title"])]),_:1},8,["title"])}}};export{X as default};
