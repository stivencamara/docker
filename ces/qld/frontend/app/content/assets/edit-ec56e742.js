import{_ as G}from"./form-81b1cc2a.js";import{h as j,C as H,q as U,i as s,s as A,v as D,E as B,N as R,K as q,j as l,l as c,r as I,o as _,c as Y,w as v,a as i,m as e,e as V,F as z,z as O}from"./index-a3ba1ed7.js";import{p as E}from"./point-of-care-748eca52.js";import{p as F}from"./helpers-ae560b5a.js";import{u as x}from"./point-of-care-355d6f64.js";import{u as J}from"./index.esm-9dd2f6da.js";import{b as Q}from"./helpers-4d6c1969.js";import{e as W}from"./edit-actions-8e0463cd.js";import"./contacts-b2bccd25.js";import"./location-bed63be3.js";import"./address-238902c8.js";import"./organization-ce7c2862.js";import"./address.vue_vue_type_style_index_0_scoped_2266ba05_lang-0a4ce42e.js";import"./service-e931ab78.js";import"./refusal-478c260d.js";import"./index.esm-d7202dd3.js";import"./generic-4e94cd3a.js";import"./service-dc586f40.js";import"./helpers-10c1d19c.js";import"./helpers-0cd9b2b2.js";import"./cancel-confirm-f95c31ca.js";import"./settings-4e9392c0.js";/* empty css                                                                     */const Oe={__name:"edit",setup(X){const y=j(),u=H(),L=U(),f=x();let o=s(!0),a=A(F.newForm()),n=s(D.language.pt);s([]);let k=A(F.formRules()),g=s(0),b=s(0),p=s(0),w=s(0),C=s(0);const h=J(k,a),M=B(()=>C.value===100&&!o.value);async function N(){o.value=!0;const t=await E.getById(g.value,b.value);l.validateResponse(t,null,()=>{Object.assign(a,t.data),f.setFormToCompare(l.cloneObject(t.data))}),o.value=!1}async function P(){o.value=!0;const t=await E.getLists(n.value);l.validateResponse(t,null,()=>{f.setLists(t.data)}),o.value=!1}R(()=>n.value,()=>{P()}),q(async()=>{g.value=l.decodeId(u.params.pointOfCareId),b.value=l.decodeId(u.params.pointOfCareVersion),p.value=l.decodeId(u.params.organizationId),w.value=l.decodeId(u.params.organizationVersion),!g.value||!b.value?y.push({name:c.router.BACKOFFICE_POINT_OF_CARE_PAGE.name}):(await P(),await N())}),R(()=>[a.texts[0].name,a.organization,a.organizationHost,a.startDate,a.channel.channelTypeId,a.address.zipCode,a.address.islandId,a.address.countyId,a.address.parishId,a.address.locality,a.address.address],()=>{Q.calculatePercentage(a,F.progressFields(),t=>{f.setProgress(t),C.value=t})});const T=B(()=>p.value>0?`${c.router.BACKOFFICE_EDIT_ENTITY_PAGE.path.replace(":organizationId",u.params.organizationId).replace(":organizationVersion",u.params.organizationVersion)}#pontosatendimento`:c.router.BACKOFFICE_POINT_OF_CARE_PAGE.name);return(t,d)=>{const m=I("breadcrumb-item"),S=I("breadcrumb"),K=I("page");return _(),Y(K,{title:t._lang.backoffice.pointOfCare.editPageTitle},{breadcrumb:v(()=>[i(S,{"has-home":!0},{default:v(()=>[e(p)>0?(_(),V(z,{key:0},[i(m,{label:t._lang.backoffice.entities.breadcrumbTitle,"router-path":e(c).router.BACKOFFICE_ENTITIES_PAGE.path},null,8,["label","router-path"]),i(m,{label:e(L).common.entity,"router-path":e(T)},null,8,["label","router-path"]),i(m,{label:t._lang.backoffice.pointOfCare.editPageTitle},null,8,["label"])],64)):(_(),V(z,{key:1},[i(m,{label:t._lang.backoffice.pointOfCare.breadcrumbTitle,"router-path":e(c).router.BACKOFFICE_POINT_OF_CARE_PAGE.path},null,8,["label","router-path"]),i(m,{label:t._lang.backoffice.pointOfCare.editPageTitle},null,8,["label"])],64))]),_:1})]),actions:v(()=>[i(W,{loading:e(o),"onUpdate:loading":d[0]||(d[0]=r=>O(o)?o.value=r:o=r),canSubmit:e(M),selectedLang:e(n),"onUpdate:selectedLang":d[1]||(d[1]=r=>O(n)?n.value=r:n=r),backRoute:e(T),directBackRoute:e(p)>0,service:e(E),itemId:e(g),itemVersion:e(b),formModel:e(a),vuelidate:e(h),store:e(f),resource:t._lang.backoffice.pointOfCare,itemIdField:"pointOfCareId"},null,8,["loading","canSubmit","selectedLang","backRoute","directBackRoute","service","itemId","itemVersion","formModel","vuelidate","store","resource"])]),default:v(()=>[i(G,{formModel:e(a),"onUpdate:formModel":d[2]||(d[2]=r=>O(a)?a.value=r:a=r),disabled:!1,validateForm:!0,loading:e(o),selectedLang:e(n),rules:e(k),isExternalEdit:e(p)>0,vuelidate:e(h),progressValue:e(C),"show-progress":!0},null,8,["formModel","loading","selectedLang","rules","isExternalEdit","vuelidate","progressValue"])]),_:1},8,["title"])}}};export{Oe as default};