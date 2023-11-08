import{i as N,h as A,j as D,r as $,k as w,l as m,c as z,m as j,n as g,q as s,s as e,v as p,u as E,B as F,_ as T,w as H,e as B,A as L,p as Q,x as S,U as W,V as J,F as K}from"./index-8f6572ec.js";import{u as X}from"./index.esm-cf4f882d.js";import{b as u}from"./helpers-7d049c8f.js";import{c as Y,m as Z}from"./index.esm-4a513849.js";import{u as G}from"./users-eae46e24.js";const x={formRulesCreate(){return{name:{required:u.requiredMessage()},displayName:{required:u.requiredMessage()},password:{required:u.requiredMessageWithDependency("isGraUser",!0),minLength:Y.withMessage(({$params:_})=>N().common.minLengthField.replace("{0}",_.min),Z(8))},email:{required:u.requiredMessage(),email:u.emailMessage()},profiles:{required:u.requiredMessage()}}},formRulesEdit(){return{name:{required:u.requiredMessage()},displayName:{required:u.requiredMessage()},email:{required:u.requiredMessage(),email:u.emailMessage()},profiles:{required:u.requiredMessage()}}},newProfileRules(){return{profileId:{required:u.requiredMessage()},organization:{required:u.requiredMessage()}}}},ee={__name:"create-profile-modal",props:{modelValue:{type:Array,required:!0}},emits:["update:modelValue"],setup(_,{emit:M}){const a=_,I=N();A();const v="create-profile",y=G();let i=D(t()),h=x.newProfileRules(),r=$(!1);const c=X(h,i,{$scope:!1}),q=w({get(){return a.modelValue},set(l){M("update:modelValue",l)}});function t(){return{profileId:null,organization:null}}function U(){i=Object.assign(i,t()),c.value.$reset()}async function C(){if(r.value=!0,await c.value.$validate(),!c.value.$error){const l={profileId:i.profileId,organizationId:i.organization.id};q.value.filter(d=>d.profileId===i.profileId&&d.organizationId===i.organization.id).length?F.warning(I.common.profileExists):(q.value.push(l),i=Object.assign(i,t()),c.value.$reset(),E.closeModalById(v),F.success(I.common.profileAdded))}r.value=!1}return(l,o)=>{const d=m("form-field"),b=m("row"),f=m("cbutton"),k=m("modal");return z(),j(k,{id:v,title:l._lang.common.addContact,size:e(p).modalSize.extraLarge},{body:g(()=>[s(b,null,{default:g(()=>[s(d,{id:"profileId",class:"mb-3 col-12 col-md-6",modelValue:e(i).profileId,"onUpdate:modelValue":o[0]||(o[0]=V=>e(i).profileId=V),label:l._lang.label.profile,disabled:a.disabled,loading:a.loading,type:e(p).inputs.multiselect,options:e(y).profileList,required:!0,"show-error":e(c).profileId.$error,"error-message":l._errorMessageField(e(c).profileId)},null,8,["modelValue","label","disabled","loading","type","options","show-error","error-message"]),s(d,{id:"organization",class:"mb-3 col-12 col-md-6",modelValue:e(i).organization,"onUpdate:modelValue":o[1]||(o[1]=V=>e(i).organization=V),label:l._lang.label.organization,disabled:a.disabled,loading:a.loading,type:e(p).inputs.multiselect,required:!0,"show-error":e(c).organization.$error,options:e(y).organizationList,"error-message":l._errorMessageField(e(c).organization),"value-prop":e(p).multiselectValueProp.value3},null,8,["modelValue","label","disabled","loading","type","show-error","options","error-message","value-prop"])]),_:1})]),footer:g(()=>[s(f,{title:l._lang.common.cancel,type:e(p).buttonType.secondary,"data-bs-dismiss":"modal","aria-label":"Close",disabled:e(r),onClick:U},null,8,["title","type","disabled"]),s(f,{title:l._lang.common.save,onClick:C,disabled:e(r)},null,8,["title","disabled"])]),_:1},8,["title","size"])}}};const le={class:"label col-12 mt-3"},ae={key:0,class:"profile-error"},oe={__name:"form",props:{modelValue:{type:Object,required:!0,default:{name:"",email:"",profiles:[],active:!0}},loading:{type:Boolean,default:!1},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},isCreate:{type:Boolean,default:!1},vuelidator:{type:Object,default:{}}},emits:["update:modelValue"],setup(_,{emit:M}){const a=_,I=N(),v=G(),y="delete-profile";let i=$(null),h=$(!1);const r=w({get(){return a.modelValue},set(l){M("update:modelValue",l)}});H(()=>r.value.isGraUser,()=>{r.value.password=null});const c=w(()=>E.createEmptyDataSource(q.value)),q=w(()=>{let l=[];return r.value.profiles.forEach(o=>{const d=v.profileList.find(f=>f.value===o.profileId),b=v.organizationList.find(f=>f.value3.id===o.organizationId);d&&b&&l.push({profile:d.label,organization:b.label})}),l}),t=w(()=>a.loading||h.value);function U(l){i.value=l}function C(){if(i.value){let l=E.proxyToObj(i.value);const o=q.value.indexOf(l);o!=-1&&(r.value.profiles.splice(o,1),F.success(I.backoffice.settings.users.profileRemoved)),i.value=null}}return(l,o)=>{const d=m("form-field"),b=m("row"),f=m("table-actions"),k=m("ccolumn"),V=m("table-action-delete"),O=m("ctable"),R=m("container-wrapper"),P=m("confirm-delete-modal");return z(),B(K,null,[s(R,null,{default:g(()=>[s(b,null,{default:g(()=>[s(d,{id:"email",class:"mb-3 col-12 col-md-6",modelValue:e(r).email,"onUpdate:modelValue":o[0]||(o[0]=n=>e(r).email=n),label:l._lang.label.email,loading:e(t),type:e(p).inputs.text,required:a.required,disabled:e(t)||a.disabled,maxlength:150,showError:a.required&&a.vuelidator.email.$error,"error-message":l._errorMessageField(a.vuelidator.email)},null,8,["modelValue","label","loading","type","required","disabled","showError","error-message"]),s(d,{id:"name",class:"mb-3 col-12 col-md-6",modelValue:e(r).name,"onUpdate:modelValue":o[1]||(o[1]=n=>e(r).name=n),label:l._lang.label.name,loading:e(t),type:e(p).inputs.text,required:a.required,disabled:e(t)||a.disabled,maxlength:150,showError:a.required&&a.vuelidator.name.$error,"error-message":l._errorMessageField(a.vuelidator.name)},null,8,["modelValue","label","loading","type","required","disabled","showError","error-message"]),s(d,{id:"displayName",class:"mb-3 col-12",modelValue:e(r).displayName,"onUpdate:modelValue":o[2]||(o[2]=n=>e(r).displayName=n),label:l._lang.label.displayName,loading:e(t),type:e(p).inputs.text,required:a.required,disabled:e(t)||a.disabled,maxlength:150,showError:a.required&&a.vuelidator.displayName.$error,"error-message":l._errorMessageField(a.vuelidator.displayName)},null,8,["modelValue","label","loading","type","required","disabled","showError","error-message"]),!e(r).isGraUser&&a.isCreate?(z(),j(d,{key:0,id:"password",class:"mb-3 col-12",modelValue:e(r).password,"onUpdate:modelValue":o[3]||(o[3]=n=>e(r).password=n),label:l._lang.label.password,loading:e(t),type:e(p).inputs.password,required:a.required,disabled:e(t)||a.disabled,maxlength:150,showError:a.required&&a.vuelidator.password.$error,"error-message":l._errorMessageField(a.vuelidator.password)},null,8,["modelValue","label","loading","type","required","disabled","showError","error-message"])):L("",!0),s(d,{id:"active",class:"mb-3 col-12 col-lg-3",modelValue:e(r).active,"onUpdate:modelValue":o[4]||(o[4]=n=>e(r).active=n),label:l._lang.label.active,disabled:a.disabled,loading:e(t),type:e(p).inputs.checkbox},null,8,["modelValue","label","disabled","loading","type"]),s(d,{id:"isGraUser",class:"mb-3 col-12 col-lg-3",modelValue:e(r).isGraUser,"onUpdate:modelValue":o[5]||(o[5]=n=>e(r).isGraUser=n),label:l._lang.label.isGraUser,disabled:!a.isCreate,loading:e(t),type:e(p).inputs.checkbox},null,8,["modelValue","label","disabled","loading","type"])]),_:1}),s(b,null,{default:g(()=>[Q("h5",le,S(l._lang.backoffice.settings.users.profiles),1),a.required&&a.vuelidator.profiles.$error?(z(),B("span",ae,S(l._lang.backoffice.settings.users.profilesError),1)):L("",!0)]),_:1}),s(f,null,{default:g(()=>[s(W,{target:"create-profile",class:"d-inline",type:e(p).buttonType.secondary,title:l._lang.common.toAdd,disabled:a.disabled,icon:J},null,8,["type","title","disabled"])]),_:1}),s(O,{data:e(c),loading:e(t),checkbox:!1,showPagination:!1},{columns:g(()=>[s(k,{name:l._lang.label.profile,field:"profile",fieldSort:"profileId",sortable:!0},null,8,["name"]),s(k,{name:l._lang.label.organization,field:"organization",fieldSort:"organizationId",sortable:!0},null,8,["name"])]),actions:g(n=>[s(V,{id:y,onClick:re=>U(n.item),disabled:a.disabled},null,8,["onClick","disabled"])]),_:1},8,["data","loading"])]),_:1}),s(ee,{modelValue:e(r).profiles,"onUpdate:modelValue":o[6]||(o[6]=n=>e(r).profiles=n)},null,8,["modelValue"]),s(P,{id:y,title:l._lang.backoffice.settings.users.deleteProfile,message:l._lang.backoffice.settings.users.deleteProfileQuestion,action:C},null,8,["title","message"])],64)}}},ue=T(oe,[["__scopeId","data-v-d38da337"]]);export{x as h,ue as p};
