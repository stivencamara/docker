import{s as w,L as A,z as G,a as g,r as i,U as v,i as E,J as O,u as m,x as d,b as c,o as P,l as V,w as l,e as o,g as e,D as S}from"./index-5b4ebf84.js";import{h as y,_ as D}from"./form-0314808e.js";import{u as M}from"./index.esm-65642301.js";import"./helpers-4796f1a9.js";import{u as I}from"./users-d8dbf72b.js";import{u as N}from"./users-f6b26c46.js";import{_ as K}from"./edit-actions-eb4d23af.js";import"./index.esm-85573352.js";import"./cancel-confirm-46a9e596.js";import"./settings-fd6ffbf1.js";const Y={__name:"edit",setup(L){const h=w(),T=A();G();const C=g(y.formRules()),p=N(),f=i(v.havePermission(E.permissions.users.createEdit)),k=i(v.havePermission(E.permissions.users.delete));let t=i(!1),u=i(0),s=g({name:null,email:null,profiles:[],active:!0});const _=M(C,s);O(async()=>{u.value=m.decodeId(T.params.userId),u.value?await R():h.push({name:d.router.BACKOFFICE_SETTINGS_USERS_PAGE.name})});async function R(){t.value=!0;const a=await I.getById(u.value);m.validateResponse(a,null,()=>{Object.assign(s,a.data),p.setFormToCompare(m.cloneObject(a.data))}),t.value=!1}return(a,n)=>{const b=c("breadcrumb-item"),B=c("breadcrumb"),F=c("card"),U=c("page");return P(),V(U,{title:a._lang.backoffice.settings.users.update.pageTitle},{breadcrumb:l(()=>[o(B,{"has-home":!0},{default:l(()=>[o(b,{label:a._lang.backoffice.settings.users.pageTitle,"router-path":e(d).router.BACKOFFICE_SETTINGS_USERS_PAGE.path},null,8,["label","router-path"]),o(b,{label:a._lang.backoffice.settings.users.update.pageTitle},null,8,["label"])]),_:1})]),actions:l(()=>[o(K,{loading:e(t),"onUpdate:loading":n[0]||(n[0]=r=>S(t)?t.value=r:t=r),service:e(I),itemId:e(u),formModel:e(s),vuelidate:e(_),store:e(p),resource:a._lang.backoffice.settings.users,"back-route":e(d).router.BACKOFFICE_SETTINGS_USERS_PAGE.name,showLangSelector:!1,canEdit:f.value,canDelete:k.value},null,8,["loading","service","itemId","formModel","vuelidate","store","resource","back-route","canEdit","canDelete"])]),default:l(()=>[o(F,{shadow:!0},{body:l(()=>[o(D,{modelValue:e(s),"onUpdate:modelValue":n[1]||(n[1]=r=>S(s)?s.value=r:s=r),required:!0,vuelidator:e(_),disabled:!f.value},null,8,["modelValue","vuelidator","disabled"])]),_:1})]),_:1},8,["title"])}}};export{Y as default};
