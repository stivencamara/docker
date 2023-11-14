import{g as z,ab as F,i as f,j as D,r as g,k as _,l,c as G,m as T,n as c,q as r,s as e,v as t,C as y,u as U}from"./index-98e98595.js";import{u as I}from"./users-d89ccb96.js";import{b as w}from"./helpers-8c1ef5f8.js";import{u as Y}from"./index.esm-b8a70fe6.js";import{c as v,m as A}from"./index.esm-baab58fe.js";const W={__name:"index",setup($){const M=z(),u=new F,N=f(),E=`MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDMYJLQ2EcdtPKDiy3jV0BonMAg\r
7sjv7j/0UsISY1rQg5nv3i2nRcAnUQE3FLYIoJJzjDiL+BNC3rflW8kEwXUgbWIy\r
RsVcsvrn6t+BcsYFYgdSbTqCT4pL/XSPV0HL/ouk9M68Nig4B6/AiYpzO0TDtqNu\r
ebO+pHtamPoGpZR4yQIDAQAB`;u.setPublicKey(E);var o=D({oldPassword:"",newPassword:"",confirmNewPassword:""}),d=g(!1),i=g(!1);const h=_(()=>o.newPassword),V=_(()=>o.confirmNewPassword),k=g({oldPassword:{required:w.requiredMessage()},newPassword:{required:w.requiredMessage(),sameAsRef:w.sameAs(V,"confirmNewPassword"),minLength:v.withMessage(({$params:s})=>f().common.minLengthField.replace("{0}",s.min),A(8))},confirmNewPassword:{required:w.requiredMessage(),sameAsRef:w.sameAs(h,"newPassword"),minLength:v.withMessage(({$params:s})=>f().common.minLengthField.replace("{0}",s.min),A(8))}}),a=Y(k,o);function q(){P(y.router.HOME_PAGE.name)}async function C(){if(d.value=!0,i.value=!0,await a.value.$validate(),!a.value.$error){const s={newPassword:u.encrypt(o.newPassword),oldPassword:u.encrypt(o.oldPassword)},n=await I.changePassword(s);U.validateResponse(n,N.common.passwordChanged,()=>{P(y.router.HOME_PAGE.name),i.value=!1})}d.value=!1}function P(s){M.push({name:s})}return(s,n)=>{const p=l("form-field"),L=l("row"),b=l("cbutton"),B=l("table-actions"),Q=l("container-wrapper"),R=l("card"),S=l("page");return G(),T(S,{title:s._lang.backoffice.changePassword.pageTitle},{default:c(()=>[r(R,{shadow:!0},{body:c(()=>[r(Q,null,{default:c(()=>[r(L,null,{default:c(()=>[r(p,{type:e(t).inputs.password,id:"oldPassword",label:s._lang.label.oldPassword,required:!0,class:"mb-3 col-12",modelValue:e(o).oldPassword,"onUpdate:modelValue":n[0]||(n[0]=m=>e(o).oldPassword=m),disabled:e(d),showError:e(i)&&e(a).oldPassword.$error,"error-message":s._errorMessageField(e(a).oldPassword)},null,8,["type","label","modelValue","disabled","showError","error-message"]),r(p,{id:"newPassword",modelValue:e(o).newPassword,"onUpdate:modelValue":n[1]||(n[1]=m=>e(o).newPassword=m),class:"mb-3 col-12 col-md-6",label:s._lang.label.newPassword,type:e(t).inputs.password,disabled:e(d),required:!0,showError:e(i)&&e(a).newPassword.$error,"error-message":s._errorMessageField(e(a).newPassword)},null,8,["modelValue","label","type","disabled","showError","error-message"]),r(p,{id:"confirmNewPassword",modelValue:e(o).confirmNewPassword,"onUpdate:modelValue":n[2]||(n[2]=m=>e(o).confirmNewPassword=m),class:"mb-3 col-12 col-md-6",label:s._lang.label.confirmNewPassword,type:e(t).inputs.password,disabled:e(d),required:!0,showError:e(i)&&e(a).confirmNewPassword.$error,"error-message":s._errorMessageField(e(a).confirmNewPassword)},null,8,["modelValue","label","type","disabled","showError","error-message"])]),_:1}),r(B,{title:""},{default:c(()=>[r(b,{class:"col-12 col-sm-auto",type:e(t).buttonType.secondary,size:e(t).buttonSize.large,title:s._lang.common.cancel,onClick:q},null,8,["type","size","title"]),r(b,{class:"col-12 col-sm-auto",type:e(t).buttonType.primary,size:e(t).buttonSize.large,title:s._lang.common.confirm,onClick:C},null,8,["type","size","title"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"])}}};export{W as default};
