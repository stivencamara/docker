import{g as B,f as G,i as P,j as p,r as v,N as L,u as l,C as n,l as i,c as N,m as z,n as u,q as o,s as a,v as c,L as w}from"./index-6321ead1.js";import{p as C}from"./profiles-50a12e85.js";import{h as K,p as M}from"./helpers-27e0ce66.js";import{_ as V}from"./cancel-confirm-bfd1ba44.js";import{u as j}from"./index.esm-e875084b.js";import"./helpers-35400f08.js";import"./index.esm-ad78f132.js";const X={__name:"detail",setup(q){const r=B(),E=G(),F=P(),d="confirm-cancel",T=p(K.formRules());var s=v(!1);let m=v(0);var t=p({name:"",permissions:[]}),f=p({name:"",permissions:[]});const y=j(T,t);L(async()=>{m.value=l.decodeId(E.params.profileId),m.value?await O():r.push({name:n.router.BACKOFFICE_SETTINGS_PROFILE_PAGE.name})});async function O(){s.value=!0;const e=await C.getById(m.value);l.validateResponse(e,null,()=>{Object.assign(t,e.data),Object.assign(f,e.data)}),s.value=!1}function S(){l.compareObjectIsDirty(t,f)?l.showModalById(d):r.push({name:n.router.BACKOFFICE_SETTINGS_PROFILE_PAGE.name})}async function h(){s.value=!0;let e=await C.update(t);l.validateResponse(e,F.backoffice.settings.profiles.update.updated,()=>{r.push({name:n.router.BACKOFFICE_SETTINGS_PROFILE_PAGE.name})}),s.value=!1}function k(){r.push({name:n.router.BACKOFFICE_SETTINGS_PROFILE_PAGE.name})}return(e,_)=>{const b=i("breadcrumb-item"),R=i("breadcrumb"),g=i("cbutton"),A=i("page");return N(),z(A,{title:e._lang.backoffice.settings.profiles.update.pageTitle},{breadcrumb:u(()=>[o(R,{"has-home":!0},{default:u(()=>[o(b,{label:e._lang.backoffice.settings.profiles.pageTitle,"router-path":a(n).router.BACKOFFICE_SETTINGS_PROFILE_PAGE.path},null,8,["label","router-path"]),o(b,{label:e._lang.backoffice.settings.profiles.update.pageTitle},null,8,["label"])]),_:1})]),actions:u(()=>[o(g,{class:"col-12 col-sm-auto",type:a(c).buttonType.secondary,size:a(c).buttonSize.large,title:e._lang.common.cancel,onClick:S,disabled:a(s)},null,8,["type","size","title","disabled"]),o(g,{class:"col-12 col-sm-auto",title:e._lang.common.save,type:a(c).buttonType.primary,size:a(c).buttonSize.large,onClick:h,disabled:a(s)},null,8,["title","type","size","disabled"])]),default:u(()=>[o(M,{modelValue:a(t),"onUpdate:modelValue":_[0]||(_[0]=I=>w(t)?t.value=I:t=I),required:!0,vuelidator:a(y),disabled:!0},null,8,["modelValue","vuelidator"]),o(V,{id:d,title:e._lang.common.cancel,action:k},null,8,["title"])]),_:1},8,["title"])}}};export{X as default};
