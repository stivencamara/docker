import{K as H,u as F,z as i,o as q,r as n,G as R,s as V,i as j,g as J,f as x,h as Q,j as O,M as W,N as P,k as m,c,l as p,w as f,n as d,p as e,I as g,y as X}from"./index-a14ad215.js";import{l as v}from"./location-504e7ab6.js";import{u as Y,_ as Z,a as $}from"./address-afd974a6.js";import{a as ee}from"./refusal-4e803a93.js";import{c as ae,r as te}from"./index.esm-88a1129f.js";import{h}from"./helpers-bd233d9c.js";import{b as oe}from"./helpers-71142cd6.js";/* empty css                                                                     */import{_ as le}from"./detail-actions-e07ee9c0.js";import"./address-809a8351.js";import"./helpers-bdeacb10.js";import"./helpers-d171baff.js";import"./helpers-682b85b1.js";import"./helpers-11fd24aa.js";import"./helpers-a264fdb9.js";import"./settings-739a4c13.js";const Oe={__name:"detail",setup(re){H(async()=>{u.value=F.decodeId(I.params.locationId),_.value=F.decodeId(I.params.locationVersion),!u.value||!_.value?N.push({name:i.router.BACKOFFICE_LOCATION_PAGE.name}):(await w(),await K(),y.value&&(await b.value.getHistory(),b.value.setActiveVersion(v.value),b.value.setStep()))}),q(()=>{l.value=!1});let u=n(0),_=n(0),l=n(!0);n([]);let a=R(h.newForm()),s=n(V.language.pt),E=R(h.formRules()),T=n(0),b=n(null);const A=Y(),B=j(),N=J(),I=x(),S=Q();ae.withMessage(B.common.requiredField,te);const L=O(()=>I.path.toLowerCase().indexOf("tarefas")>-1),k=O(()=>I.path.toLowerCase().indexOf("pesquisa")>-1),G=n(W.havePermission(V.permissions.organization.createEdit)),y=O(()=>!L.value&&G.value&&a.recordStateTypeId!=V.recordStateType.draft);async function K(){const t=await v.getById(u.value,_.value);F.validateResponse(t,null,()=>{Object.assign(a,t.data),S.emit(i.emitter.OBJECT_LOADED,t.data)})}async function w(){l.value=!0;const t=await v.getLists(s.value);F.validateResponse(t,null,()=>{A.setLists(t.data)}),l.value=!1}return P(()=>s.value,()=>{w()}),P(()=>[a.code,a.startDate,a.zipCode,a.islandId,a.countyId,a.parishId,a.locationTypeId,a.locationId,a.organizationId,a.address,a.locality],()=>{oe.calculatePercentage(a,h.progressFields(),t=>{A.setProgress(t),T.value=t})}),O(()=>T.value===100&&!l.value),(t,r)=>{const C=m("breadcrumb-item"),M=m("breadcrumb"),D=m("ctimeline"),U=m("card"),z=m("page");return c(),p(z,{title:t._lang.backoffice.location.detailPageTitle},{breadcrumb:f(()=>[d(M,{"has-home":!e(k)},{default:f(()=>[e(L)?(c(),p(C,{key:0,label:t._lang.backoffice.tasks.breadcrumbTitle,"router-path":e(i).router.BACKOFFICE_TASKS_PAGE.path},null,8,["label","router-path"])):e(k)?(c(),p(C,{key:1,label:t._lang.search.pageTitle,"router-path":e(i).router.HOME_PAGE.path},null,8,["label","router-path"])):(c(),p(C,{key:2,label:t._lang.backoffice.location.breadcrumbTitle,"router-path":e(i).router.BACKOFFICE_LOCATION_PAGE.path},null,8,["label","router-path"])),d(C,{label:t._lang.backoffice.location.detailPageTitle},null,8,["label"])]),_:1},8,["has-home"])]),actions:f(()=>[d(le,{loading:e(l),"onUpdate:loading":r[0]||(r[0]=o=>g(l)?l.value=o:l=o),selectedLang:e(s),"onUpdate:selectedLang":r[1]||(r[1]=o=>g(s)?s.value=o:s=o),service:e(v),backRoute:e(i).router.BACKOFFICE_LOCATION_PAGE.name,editRoute:e(i).router.BACKOFFICE_EDIT_LOCATION_PAGE.name,itemIdField:"locationId",itemVersionField:"locationVersion",itemId:e(u),itemVersion:e(_),formModel:e(a),"show-record-state-actions":e(L),store:e(A)},null,8,["loading","selectedLang","service","backRoute","editRoute","itemId","itemVersion","formModel","show-record-state-actions","store"])]),default:f(()=>[e(y)?(c(),p(D,{key:0,itemId:e(u),detailRoute:e(i).router.BACKOFFICE_DETAIL_LOCATION_PAGE.name,service:e(v),versionFieldName:"locationVersion",dateFieldName:"locationApprovedDate",detailRouteIdField:"locationId",detailRouteVersionField:"locationVersion",ref_key:"timeline",ref:b},null,8,["itemId","detailRoute","service"])):X("",!0),d(U,{shadow:!0},{body:f(()=>[d(Z,{validateForm:!1,disabled:!0,modelValue:e(a),"onUpdate:modelValue":r[2]||(r[2]=o=>g(a)?a.value=o:a=o),loading:e(l),rules:e(E),selectedLang:e(s),vuelidate:{}},null,8,["modelValue","loading","rules","selectedLang"]),d($,{validateForm:!1,disabled:!0,modelValue:e(a),"onUpdate:modelValue":r[3]||(r[3]=o=>g(a)?a.value=o:a=o),loading:e(l),rules:e(E),vuelidate:{}},null,8,["modelValue","loading","rules"]),d(ee,{validateForm:!1,disabled:!0,modelValue:e(a),"onUpdate:modelValue":r[4]||(r[4]=o=>g(a)?a.value=o:a=o),loading:e(l),selectedLang:e(s),vuelidate:{}},null,8,["modelValue","loading","selectedLang"])]),_:1})]),_:1},8,["title"])}}};export{Oe as default};
