import{g as w,f as B,i as U,j as g,r as i,P as v,v as E,N as A,u as m,C as p,l as d,c as N,m as O,n as l,q as r,s as e,L as S}from"./index-864107e7.js";import{u as I}from"./users-699fb9c0.js";import{h as V,p as y}from"./form-f901ad1d.js";import{u as M}from"./index.esm-e15864e2.js";import"./helpers-e3e3ab9f.js";import{u as j}from"./users-66001190.js";import{_ as D}from"./edit-actions-fd15654b.js";import"./index.esm-bc117818.js";import"./cancel-confirm-a0700a20.js";import"./settings-1cea3d18.js";const $={__name:"edit",setup(K){const h=w(),k=B();U();const C=g(V.formRulesEdit()),f=j(),T=i(v.havePermission(E.permissions.users.delete));let t=i(!1),n=i(0),a=g({name:null,email:null,profiles:[],active:!0,blocked:!1,deleted:!1}),c=i(!1);const _=M(C,a);A(async()=>{n.value=m.decodeId(k.params.userId),n.value?(await G(),c.value=v.havePermission(E.permissions.users.createEdit)&&!a.blocked&&!a.deleted):h.push({name:p.router.BACKOFFICE_SETTINGS_USERS_PAGE.name})});async function G(){t.value=!0;const s=await I.getById(n.value);m.validateResponse(s,null,()=>{Object.assign(a,s.data),f.setFormToCompare(m.cloneObject(s.data))}),t.value=!1}return(s,u)=>{const b=d("breadcrumb-item"),F=d("breadcrumb"),P=d("card"),R=d("page");return N(),O(R,{title:s._lang.backoffice.settings.users.update.pageTitle},{breadcrumb:l(()=>[r(F,{"has-home":!0},{default:l(()=>[r(b,{label:s._lang.backoffice.settings.users.pageTitle,"router-path":e(p).router.BACKOFFICE_SETTINGS_USERS_PAGE.path},null,8,["label","router-path"]),r(b,{label:s._lang.backoffice.settings.users.update.pageTitle},null,8,["label"])]),_:1})]),actions:l(()=>[r(D,{loading:e(t),"onUpdate:loading":u[0]||(u[0]=o=>S(t)?t.value=o:t=o),service:e(I),itemId:e(n),formModel:e(a),vuelidate:e(_),store:e(f),resource:s._lang.backoffice.settings.users,"back-route":e(p).router.BACKOFFICE_SETTINGS_USERS_PAGE.name,showLangSelector:!1,canEdit:e(c),canDelete:T.value,canGeneratePassword:!e(a).isGraUser},null,8,["loading","service","itemId","formModel","vuelidate","store","resource","back-route","canEdit","canDelete","canGeneratePassword"])]),default:l(()=>[r(P,{shadow:!0},{body:l(()=>[r(y,{modelValue:e(a),"onUpdate:modelValue":u[1]||(u[1]=o=>S(a)?a.value=o:a=o),required:!0,vuelidator:e(_),disabled:!e(c)},null,8,["modelValue","vuelidator","disabled"])]),_:1})]),_:1},8,["title"])}}};export{$ as default};
