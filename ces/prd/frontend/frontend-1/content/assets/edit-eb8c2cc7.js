import{g as j,f as D,i as H,r as o,H as V,t as g,j as k,N as U,L as Y,u as s,A as f,w as P,k as E,c as $,e as q,p,m as z,q as a,J as T,F as J}from"./index-af43a57b.js";import{o as v}from"./organization-a53dc518.js";import{u as Q}from"./organization-25c5b553.js";import{o as F}from"./helpers-bc77919f.js";import{b as W}from"./helpers-0b287b89.js";import{u as X}from"./index.esm-26e5e98d.js";import{e as Z}from"./edit-actions-e0b46285.js";import{_ as x}from"./form-664a9ddb.js";import{_ as ee}from"./unsaved-df2d10f6.js";import"./index.esm-7a0fc0c5.js";import"./refusal-a7068635.js";import"./cancel-confirm-3c568d61.js";import"./settings-da6dde1b.js";/* empty css                                                                     */import"./contacts-154c5a4f.js";import"./location-5ea34e4e.js";import"./address-7a25e4a7.js";import"./generic-b7841e8a.js";import"./point-of-care-9754b2ef.js";import"./helpers-bf231dc4.js";import"./service-9ee13c2f.js";import"./helpers-74c6ab4d.js";import"./helpers-8beca418.js";import"./document-da522e3d.js";import"./helpers-e1085a17.js";const Ae={__name:"edit",setup(ae){const S=j(),d=D();H();const u=Q();let c=o(0),m=o(0),r=o(!0),e=V(F.newForm()),n=o(g.language.pt),y=V(F.formRules()),O=o(0),I=o([]),C=o(!1),b=o(0),h=o(0);const A=X(y,e,{$stopPropagation:!0}),B=k(()=>O.value===100&&!r.value),w=o(U.havePermission(g.permissions.organization.createEdit));Y(async()=>{c.value=s.decodeId(d.params.organizationId),m.value=s.decodeId(d.params.organizationVersion),C.value=d.params.organicOrigin==="true",b.value=s.decodeId(d.params.parentOrganizationId),h.value=s.decodeId(d.params.parentOrganizationVersion),!c.value||!m.value?S.push({name:f.router.BACKOFFICE_ENTITIES_PAGE.name}):(await R(),await L(),await M())});async function R(){r.value=!0;const t=await v.getById(c.value,m.value);s.validateResponse(t,null,()=>{Object.assign(e,t.data),u.setFormToCompare(s.cloneObject(t.data))}),r.value=!1}async function L(){r.value=!0;const t=await v.getLists(n.value,e.recordStateTypeId!=g.recordStateType.draft);s.validateResponse(t,null,()=>{u.setLists(t.data)}),r.value=!1}async function M(){r.value=!0;const t=await v.getLists(n.value,!0);s.validateResponse(t,null,()=>{u.setOrganizationOnlypublishedList(t.data)}),r.value=!1}P(()=>n.value,()=>{L()}),P(()=>[e.nipc,e.texts[0].name,e.groupName,e.organizationTypeId,e.parentOrganization,e.startDate,e.economicActivityId,e.divisionTypeId,e.divisionId,e.address.zipCode,e.address.islandId,e.address.countyId,e.address.parishId,e.address.locality,e.address.address],()=>{I.value=F.progressFields(),e.divisionTypeId===g.notApplicable&&s.removeItemOfArray(I.value,"divisionId"),W.calculatePercentage(e,I.value,t=>{u.setProgress(t),O.value=t})});const N=k(()=>{if(b.value>0){const t=u.organizationList.find(_=>_.value3.id===b.value);let i=f.router.BACKOFFICE_EDIT_ENTITY_PAGE.path;return(t==null?void 0:t.state)!=g.recordStateType.draft&&(i=f.router.BACKOFFICE_DETAIL_ENTITY_PAGE.path),`${i.replace(":organizationId",d.params.parentOrganizationId).replace(":organizationVersion",d.params.parentOrganizationVersion)}#pontosatendimento`}else return f.router.BACKOFFICE_ENTITIES_PAGE.name});return(t,i)=>{const _=E("breadcrumb-item"),G=E("breadcrumb"),K=E("page");return $(),q(J,null,[p(K,{title:t._lang.backoffice.entities.editPageTitle},{breadcrumb:z(()=>[p(G,{"has-home":!0},{default:z(()=>[p(_,{label:t._lang.backoffice.entities.breadcrumbTitle,"router-path":a(f).router.BACKOFFICE_ENTITIES_PAGE.path},null,8,["label","router-path"]),p(_,{label:t._lang.backoffice.entities.editPageTitle},null,8,["label"])]),_:1})]),actions:z(()=>[p(Z,{loading:a(r),"onUpdate:loading":i[0]||(i[0]=l=>T(r)?r.value=l:r=l),canSubmit:a(B),selectedLang:a(n),"onUpdate:selectedLang":i[1]||(i[1]=l=>T(n)?n.value=l:n=l),backRoute:a(N),service:a(v),itemId:a(c),itemVersion:a(m),formModel:a(e),vuelidate:a(A),store:a(u),directBackRoute:a(b)>0,resource:t._lang.backoffice.entities,itemIdField:"organizationId",progressFields:a(I),organicOrigin:a(C)},null,8,["loading","canSubmit","selectedLang","backRoute","service","itemId","itemVersion","formModel","vuelidate","store","directBackRoute","resource","progressFields","organicOrigin"])]),default:z(()=>[p(x,{formModel:a(e),"onUpdate:formModel":i[2]||(i[2]=l=>T(e)?e.value=l:e=l),disabled:!1,validateForm:!0,selectedLang:a(n),rules:a(y),loading:a(r),organizationId:a(c),organizationVersion:a(m),progressValue:a(O),"show-progress":!0,vuelidate:a(A),canCreate:w.value},null,8,["formModel","selectedLang","rules","loading","organizationId","organizationVersion","progressValue","vuelidate","canCreate"])]),_:1},8,["title"]),p(ee,{store:a(u),formModel:a(e),service:a(v),resource:t._lang.backoffice.entities},null,8,["store","formModel","service","resource"])],64)}}};export{Ae as default};
