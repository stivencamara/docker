import{g as B,f as N,i as G,r as s,G as S,s as f,j as K,M as j,K as U,u as n,z as _,N as k,k as z,c as H,e as D,n as l,w as v,p as a,I as y,F as $}from"./index-c417b10a.js";import{o as p}from"./organization-a3608ff3.js";import{u as q}from"./organization-53b6fe99.js";import{o as F}from"./helpers-491ef55a.js";import{b as J}from"./helpers-422844e7.js";import{u as Q}from"./index.esm-5fe78185.js";import{e as W}from"./edit-actions-af789f62.js";import{_ as X}from"./form-5b3d41db.js";import{_ as Y}from"./unsaved-769b1fd6.js";import"./index.esm-29b873a2.js";import"./refusal-45a989d4.js";import"./cancel-confirm-f07f887e.js";import"./settings-fb41674a.js";/* empty css                                                                     */import"./contacts-d61273ea.js";import"./location-d3d0b570.js";import"./address-c37f517b.js";import"./generic-972994fb.js";import"./point-of-care-86bcb545.js";import"./helpers-bb0e4cec.js";import"./service-e178ddc5.js";import"./helpers-9f3bdf36.js";import"./helpers-1b7a9838.js";import"./document-b3374c30.js";import"./helpers-662deb59.js";const Te={__name:"edit",setup(Z){const w=B(),b=N();G();const u=q();let m=s(0),c=s(0),o=s(!0),e=S(F.newForm()),r=s(f.language.pt),O=S(F.formRules()),I=s(0),g=s([]),T=s(!1);const E=Q(O,e,{$stopPropagation:!0}),V=K(()=>I.value===100&&!o.value),A=s(j.havePermission(f.permissions.organization.createEdit));U(async()=>{m.value=n.decodeId(b.params.organizationId),c.value=n.decodeId(b.params.organizationVersion),T.value=b.params.organicOrigin==="true",!m.value||!c.value?w.push({name:_.router.BACKOFFICE_ENTITIES_PAGE.name}):(await M(),await C(),await P())});async function M(){o.value=!0;const t=await p.getById(m.value,c.value);n.validateResponse(t,null,()=>{Object.assign(e,t.data),u.setFormToCompare(n.cloneObject(t.data))}),o.value=!1}async function C(){o.value=!0;const t=await p.getLists(r.value,e.recordStateTypeId!=f.recordStateType.draft);n.validateResponse(t,null,()=>{u.setLists(t.data)}),o.value=!1}async function P(){o.value=!0;const t=await p.getLists(r.value,!0);n.validateResponse(t,null,()=>{u.setOrganizationOnlypublishedList(t.data)}),o.value=!1}return k(()=>r.value,()=>{C()}),k(()=>[e.nipc,e.texts[0].name,e.groupName,e.organizationTypeId,e.parentOrganization,e.startDate,e.economicActivityId,e.divisionTypeId,e.divisionId,e.address.zipCode,e.address.islandId,e.address.countyId,e.address.parishId,e.address.locality,e.address.address],()=>{g.value=F.progressFields(),e.divisionTypeId===f.notApplicable&&n.removeItemOfArray(g.value,"divisionId"),J.calculatePercentage(e,g.value,t=>{u.setProgress(t),I.value=t})}),(t,d)=>{const L=z("breadcrumb-item"),R=z("breadcrumb"),h=z("page");return H(),D($,null,[l(h,{title:t._lang.backoffice.entities.editPageTitle},{breadcrumb:v(()=>[l(R,{"has-home":!0},{default:v(()=>[l(L,{label:t._lang.backoffice.entities.breadcrumbTitle,"router-path":a(_).router.BACKOFFICE_ENTITIES_PAGE.path},null,8,["label","router-path"]),l(L,{label:t._lang.backoffice.entities.editPageTitle},null,8,["label"])]),_:1})]),actions:v(()=>[l(W,{loading:a(o),"onUpdate:loading":d[0]||(d[0]=i=>y(o)?o.value=i:o=i),canSubmit:a(V),selectedLang:a(r),"onUpdate:selectedLang":d[1]||(d[1]=i=>y(r)?r.value=i:r=i),backRoute:a(_).router.BACKOFFICE_ENTITIES_PAGE.name,service:a(p),itemId:a(m),itemVersion:a(c),formModel:a(e),vuelidate:a(E),store:a(u),resource:t._lang.backoffice.entities,itemIdField:"organizationId",progressFields:a(g),organicOrigin:a(T)},null,8,["loading","canSubmit","selectedLang","backRoute","service","itemId","itemVersion","formModel","vuelidate","store","resource","progressFields","organicOrigin"])]),default:v(()=>[l(X,{formModel:a(e),"onUpdate:formModel":d[2]||(d[2]=i=>y(e)?e.value=i:e=i),disabled:!1,validateForm:!0,selectedLang:a(r),rules:a(O),loading:a(o),organizationId:a(m),organizationVersion:a(c),progressValue:a(I),"show-progress":!0,vuelidate:a(E),canCreate:A.value},null,8,["formModel","selectedLang","rules","loading","organizationId","organizationVersion","progressValue","vuelidate","canCreate"])]),_:1},8,["title"]),l(Y,{store:a(u),formModel:a(e),service:a(p),resource:t._lang.backoffice.entities},null,8,["store","formModel","service","resource"])],64)}}};export{Te as default};