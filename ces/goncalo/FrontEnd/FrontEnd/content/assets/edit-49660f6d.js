import{g as R,f as B,i as h,r as i,E as k,s as v,j as N,M as K,K as j,u as l,z as b,N as A,k as I,c as G,l as H,w as g,n as m,p as a,H as _}from"./index-f9e60098.js";import{o as z}from"./organization-19840f2b.js";import{u as U}from"./organization-c676f695.js";import{o as E}from"./helpers-56436fd7.js";import{b as D}from"./helpers-c3825dec.js";import{u as q}from"./index.esm-cf21939f.js";import{e as x}from"./edit-actions-4d12a9ca.js";import{_ as J}from"./form-13516777.js";import"./index.esm-7b4c8e23.js";import"./refusal-59842998.js";import"./cancel-confirm-1eaa0e1f.js";import"./settings-d00b4206.js";/* empty css                                                                     */import"./contacts-b46689c8.js";import"./location-a89f8fd9.js";import"./address-bf8dfb97.js";import"./generic-3abf2d5e.js";import"./point-of-care-71dd5696.js";import"./helpers-4005990d.js";import"./service-83e15c92.js";import"./helpers-b2b11f1a.js";import"./helpers-4fff0916.js";import"./document-a17141ed.js";import"./helpers-47f8b2d1.js";const _e={__name:"edit",setup(Q){const L=R(),F=B();h();const p=U();let d=i(0),u=i(0),o=i(!0),e=k(E.newForm()),s=i(v.language.pt),C=k(E.formRules()),f=i(0),c=i([]);const T=q(C,e,{$stopPropagation:!0}),w=N(()=>f.value===100&&!o.value),P=i(K.havePermission(v.permissions.organization.createEdit));j(async()=>{d.value=l.decodeId(F.params.organizationId),u.value=l.decodeId(F.params.organizationVersion),!d.value||!u.value?L.push({name:b.router.BACKOFFICE_ENTITIES_PAGE.name}):(await y(),await S())});async function S(){o.value=!0;const t=await z.getById(d.value,u.value);l.validateResponse(t,null,()=>{Object.assign(e,t.data),p.setFormToCompare(l.cloneObject(t.data))}),o.value=!1}async function y(){o.value=!0;const t=await z.getLists(s.value);l.validateResponse(t,null,()=>{p.setLists(t.data)}),o.value=!1}return A(()=>s.value,()=>{y()}),A(()=>[e.nipc,e.texts[0].name,e.groupName,e.organizationTypeId,e.parentOrganization,e.startDate,e.economicActivityId,e.divisionTypeId,e.divisionId,e.address.zipCode,e.address.islandId,e.address.countyId,e.address.parishId,e.address.locality,e.address.address],()=>{c.value=E.progressFields(),e.divisionTypeId===v.notApplicable&&l.removeItemOfArray(c.value,"divisionId"),D.calculatePercentage(e,c.value,t=>{p.setProgress(t),f.value=t})}),(t,n)=>{const V=I("breadcrumb-item"),M=I("breadcrumb"),O=I("page");return G(),H(O,{title:t._lang.backoffice.entities.editPageTitle},{breadcrumb:g(()=>[m(M,{"has-home":!0},{default:g(()=>[m(V,{label:t._lang.backoffice.entities.breadcrumbTitle,"router-path":a(b).router.BACKOFFICE_ENTITIES_PAGE.path},null,8,["label","router-path"]),m(V,{label:t._lang.backoffice.entities.editPageTitle},null,8,["label"])]),_:1})]),actions:g(()=>[m(x,{loading:a(o),"onUpdate:loading":n[0]||(n[0]=r=>_(o)?o.value=r:o=r),canSubmit:a(w),selectedLang:a(s),"onUpdate:selectedLang":n[1]||(n[1]=r=>_(s)?s.value=r:s=r),backRoute:a(b).router.BACKOFFICE_ENTITIES_PAGE.name,service:a(z),itemId:a(d),itemVersion:a(u),formModel:a(e),vuelidate:a(T),store:a(p),resource:t._lang.backoffice.entities,itemIdField:"organizationId",progressFields:a(c)},null,8,["loading","canSubmit","selectedLang","backRoute","service","itemId","itemVersion","formModel","vuelidate","store","resource","progressFields"])]),default:g(()=>[m(J,{formModel:a(e),"onUpdate:formModel":n[2]||(n[2]=r=>_(e)?e.value=r:e=r),disabled:!1,validateForm:!0,selectedLang:a(s),rules:a(C),loading:a(o),organizationId:a(d),organizationVersion:a(u),progressValue:a(f),"show-progress":!0,vuelidate:a(T),canCreate:P.value},null,8,["formModel","selectedLang","rules","loading","organizationId","organizationVersion","progressValue","vuelidate","canCreate"])]),_:1},8,["title"])}}};export{_e as default};
