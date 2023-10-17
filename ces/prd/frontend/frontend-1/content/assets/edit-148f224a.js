import{g as R,f as B,i as h,r as i,G as k,s as v,j as N,M as G,K,u as l,z as b,N as A,k as I,c as j,l as U,w as g,n as m,p as a,I as _}from"./index-a14ad215.js";import{o as z}from"./organization-b89a586c.js";import{u as H}from"./organization-4f7bdfd2.js";import{o as F}from"./helpers-d171baff.js";import{b as D}from"./helpers-71142cd6.js";import{u as q}from"./index.esm-97dcd533.js";import{e as x}from"./edit-actions-913d0dbe.js";import{_ as J}from"./form-2869ce5f.js";import"./index.esm-88a1129f.js";import"./refusal-4e803a93.js";import"./cancel-confirm-ab082f5c.js";import"./settings-739a4c13.js";/* empty css                                                                     */import"./contacts-5142be00.js";import"./location-504e7ab6.js";import"./address-809a8351.js";import"./generic-90322b29.js";import"./point-of-care-4055b36e.js";import"./helpers-bdeacb10.js";import"./service-a0c37778.js";import"./helpers-11fd24aa.js";import"./helpers-a264fdb9.js";import"./document-fd012777.js";import"./helpers-682b85b1.js";const _e={__name:"edit",setup(Q){const L=R(),C=B();h();const p=H();let d=i(0),u=i(0),o=i(!0),e=k(F.newForm()),s=i(v.language.pt),E=k(F.formRules()),f=i(0),c=i([]);const T=q(E,e,{$stopPropagation:!0}),w=N(()=>f.value===100&&!o.value),P=i(G.havePermission(v.permissions.organization.createEdit));K(async()=>{d.value=l.decodeId(C.params.organizationId),u.value=l.decodeId(C.params.organizationVersion),!d.value||!u.value?L.push({name:b.router.BACKOFFICE_ENTITIES_PAGE.name}):(await y(),await S())});async function S(){o.value=!0;const t=await z.getById(d.value,u.value);l.validateResponse(t,null,()=>{Object.assign(e,t.data),p.setFormToCompare(l.cloneObject(t.data))}),o.value=!1}async function y(){o.value=!0;const t=await z.getLists(s.value);l.validateResponse(t,null,()=>{p.setLists(t.data)}),o.value=!1}return A(()=>s.value,()=>{y()}),A(()=>[e.nipc,e.texts[0].name,e.groupName,e.organizationTypeId,e.parentOrganization,e.startDate,e.economicActivityId,e.divisionTypeId,e.divisionId,e.address.zipCode,e.address.islandId,e.address.countyId,e.address.parishId,e.address.locality,e.address.address],()=>{c.value=F.progressFields(),e.divisionTypeId===v.notApplicable&&l.removeItemOfArray(c.value,"divisionId"),D.calculatePercentage(e,c.value,t=>{p.setProgress(t),f.value=t})}),(t,n)=>{const V=I("breadcrumb-item"),M=I("breadcrumb"),O=I("page");return j(),U(O,{title:t._lang.backoffice.entities.editPageTitle},{breadcrumb:g(()=>[m(M,{"has-home":!0},{default:g(()=>[m(V,{label:t._lang.backoffice.entities.breadcrumbTitle,"router-path":a(b).router.BACKOFFICE_ENTITIES_PAGE.path},null,8,["label","router-path"]),m(V,{label:t._lang.backoffice.entities.editPageTitle},null,8,["label"])]),_:1})]),actions:g(()=>[m(x,{loading:a(o),"onUpdate:loading":n[0]||(n[0]=r=>_(o)?o.value=r:o=r),canSubmit:a(w),selectedLang:a(s),"onUpdate:selectedLang":n[1]||(n[1]=r=>_(s)?s.value=r:s=r),backRoute:a(b).router.BACKOFFICE_ENTITIES_PAGE.name,service:a(z),itemId:a(d),itemVersion:a(u),formModel:a(e),vuelidate:a(T),store:a(p),resource:t._lang.backoffice.entities,itemIdField:"organizationId",progressFields:a(c)},null,8,["loading","canSubmit","selectedLang","backRoute","service","itemId","itemVersion","formModel","vuelidate","store","resource","progressFields"])]),default:g(()=>[m(J,{formModel:a(e),"onUpdate:formModel":n[2]||(n[2]=r=>_(e)?e.value=r:e=r),disabled:!1,validateForm:!0,selectedLang:a(s),rules:a(E),loading:a(o),organizationId:a(d),organizationVersion:a(u),progressValue:a(f),"show-progress":!0,vuelidate:a(T),canCreate:P.value},null,8,["formModel","selectedLang","rules","loading","organizationId","organizationVersion","progressValue","vuelidate","canCreate"])]),_:1},8,["title"])}}};export{_e as default};
