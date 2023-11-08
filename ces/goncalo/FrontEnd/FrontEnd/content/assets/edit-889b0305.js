import{g as j,f as D,i as U,r as o,j as V,v as g,k,P as H,N as Y,u as s,C as f,w as P,l as E,c as $,e as q,q as p,n as z,s as a,L as T,F as J}from"./index-bb041a92.js";import{o as v}from"./organization-e761b3c4.js";import{u as Q}from"./organization-7396450f.js";import{o as F}from"./helpers-87024433.js";import{b as W}from"./helpers-f0eb2667.js";import{u as X}from"./index.esm-aaed56ca.js";import{e as Z}from"./edit-actions-7faa71d8.js";import{_ as x}from"./form-3539a0eb.js";import{_ as ee}from"./unsaved-f8ab89eb.js";import"./index.esm-70b2cee2.js";import"./refusal-4a9e82b8.js";import"./cancel-confirm-91946768.js";import"./settings-7b62b456.js";/* empty css                                                                     */import"./contacts-d4beb946.js";import"./location-ecefce01.js";import"./address-fd2f37e5.js";import"./generic-a6ce2963.js";import"./point-of-care-cea4a765.js";import"./helpers-c3e2dc86.js";import"./service-05ba5811.js";import"./helpers-88e09779.js";import"./helpers-c77579e9.js";import"./document-da1af287.js";import"./helpers-b7ce43f3.js";const Le={__name:"edit",setup(ae){const S=j(),d=D();U();const u=Q();let c=o(0),m=o(0),r=o(!0),e=V(F.newForm()),n=o(g.language.pt),y=V(F.formRules()),O=o(0),I=o([]),C=o(!1),b=o(0),h=o(0);const L=X(y,e,{$stopPropagation:!0}),B=k(()=>O.value===100&&!r.value),w=o(H.havePermission(g.permissions.organization.createEdit));Y(async()=>{c.value=s.decodeId(d.params.organizationId),m.value=s.decodeId(d.params.organizationVersion),C.value=d.params.organicOrigin==="true",b.value=s.decodeId(d.params.parentOrganizationId),h.value=s.decodeId(d.params.parentOrganizationVersion),!c.value||!m.value?S.push({name:f.router.BACKOFFICE_ENTITIES_PAGE.name}):(await R(),await A(),await M())});async function R(){r.value=!0;const t=await v.getById(c.value,m.value);s.validateResponse(t,null,()=>{Object.assign(e,t.data),u.setFormToCompare(s.cloneObject(t.data))}),r.value=!1}async function A(){r.value=!0;const t=await v.getLists(n.value,e.recordStateTypeId!=g.recordStateType.draft,e.parentOrganization);s.validateResponse(t,null,()=>{u.setLists(t.data)}),r.value=!1}async function M(){r.value=!0;const t=await v.getLists(n.value,!0);s.validateResponse(t,null,()=>{u.setOrganizationOnlypublishedList(t.data)}),r.value=!1}P(()=>n.value,()=>{A()}),P(()=>[e.nipc,e.texts[0].name,e.groupName,e.organizationTypeId,e.parentOrganization,e.startDate,e.economicActivityId,e.divisionTypeId,e.divisionId,e.address.zipCode,e.address.islandId,e.address.countyId,e.address.parishId,e.address.locality,e.address.address],()=>{I.value=F.progressFields(),e.divisionTypeId===g.notApplicable&&s.removeItemOfArray(I.value,"divisionId"),W.calculatePercentage(e,I.value,t=>{u.setProgress(t),O.value=t})});const N=k(()=>{if(b.value>0){const t=u.organizationList.find(_=>_.value3.id===b.value);let i=f.router.BACKOFFICE_EDIT_ENTITY_PAGE.path;return(t==null?void 0:t.state)!=g.recordStateType.draft&&(i=f.router.BACKOFFICE_DETAIL_ENTITY_PAGE.path),`${i.replace(":organizationId",d.params.parentOrganizationId).replace(":organizationVersion",d.params.parentOrganizationVersion)}#pontosatendimento`}else return f.router.BACKOFFICE_ENTITIES_PAGE.name});return(t,i)=>{const _=E("breadcrumb-item"),G=E("breadcrumb"),K=E("page");return $(),q(J,null,[p(K,{title:t._lang.backoffice.entities.editPageTitle},{breadcrumb:z(()=>[p(G,{"has-home":!0},{default:z(()=>[p(_,{label:t._lang.backoffice.entities.breadcrumbTitle,"router-path":a(f).router.BACKOFFICE_ENTITIES_PAGE.path},null,8,["label","router-path"]),p(_,{label:t._lang.backoffice.entities.editPageTitle},null,8,["label"])]),_:1})]),actions:z(()=>[p(Z,{loading:a(r),"onUpdate:loading":i[0]||(i[0]=l=>T(r)?r.value=l:r=l),canSubmit:a(B),selectedLang:a(n),"onUpdate:selectedLang":i[1]||(i[1]=l=>T(n)?n.value=l:n=l),backRoute:a(N),service:a(v),itemId:a(c),itemVersion:a(m),formModel:a(e),vuelidate:a(L),store:a(u),directBackRoute:a(b)>0,resource:t._lang.backoffice.entities,itemIdField:"organizationId",progressFields:a(I),organicOrigin:a(C)},null,8,["loading","canSubmit","selectedLang","backRoute","service","itemId","itemVersion","formModel","vuelidate","store","directBackRoute","resource","progressFields","organicOrigin"])]),default:z(()=>[p(x,{formModel:a(e),"onUpdate:formModel":i[2]||(i[2]=l=>T(e)?e.value=l:e=l),disabled:!1,validateForm:!0,selectedLang:a(n),rules:a(y),loading:a(r),organizationId:a(c),organizationVersion:a(m),progressValue:a(O),"show-progress":!0,vuelidate:a(L),canCreate:w.value},null,8,["formModel","selectedLang","rules","loading","organizationId","organizationVersion","progressValue","vuelidate","canCreate"])]),_:1},8,["title"]),p(ee,{store:a(u),formModel:a(e),service:a(v),resource:t._lang.backoffice.entities},null,8,["store","formModel","service","resource"])],64)}}};export{Le as default};
