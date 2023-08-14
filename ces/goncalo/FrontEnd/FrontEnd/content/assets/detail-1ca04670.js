import{K as z,u as F,z as i,o as q,r as n,E as R,s as L,i as j,g as J,f as Y,h as x,j as A,M as Q,N as B,k as m,c,l as p,w as f,n as d,p as e,H as g,y as W}from"./index-255cb3f5.js";import{l as _}from"./location-57e1d8fb.js";import{u as X,_ as Z,a as $}from"./address-60f922f6.js";import{a as ee}from"./refusal-75797cf7.js";import{c as ae,r as te}from"./index.esm-d39b5f1a.js";import{h as V}from"./helpers-6842f765.js";import{b as oe}from"./helpers-3a01797c.js";/* empty css                                                                     */import{_ as le}from"./detail-actions-037d2a34.js";import"./address-7b900d98.js";import"./helpers-44dc3ba0.js";import"./helpers-65435ba7.js";import"./helpers-7e304096.js";import"./helpers-840084e0.js";import"./helpers-3aeae646.js";import"./settings-5eb417a0.js";const Ae={__name:"detail",setup(re){z(async()=>{u.value=F.decodeId(I.params.locationId),v.value=F.decodeId(I.params.locationVersion),!u.value||!v.value?S.push({name:i.router.BACKOFFICE_LOCATION_PAGE.name}):(await w(),await G(),y.value&&(await b.value.getHistory(),b.value.setActiveVersion(_.value),b.value.setStep()))}),q(()=>{l.value=!1});let u=n(0),v=n(0),l=n(!0);n([]);let a=R(V.newForm()),s=n(L.language.pt),h=R(V.formRules()),T=n(0),b=n(null);const O=X(),P=j(),S=J(),I=Y(),N=x();ae.withMessage(P.common.requiredField,te);const E=A(()=>I.path.toLowerCase().indexOf("tarefas")>-1),k=A(()=>I.path.toLowerCase().indexOf("pesquisa")>-1),K=n(Q.havePermission(L.permissions.organization.createEdit)),y=A(()=>!E.value&&K.value&&a.recordStateTypeId!=L.recordStateType.draft);async function G(){const t=await _.getById(u.value,v.value);F.validateResponse(t,null,()=>{Object.assign(a,t.data),N.emit(i.emitter.OBJECT_LOADED,t.data)})}async function w(){l.value=!0;const t=await _.getLists(s.value);F.validateResponse(t,null,()=>{O.setLists(t.data)}),l.value=!1}return B(()=>s.value,()=>{w()}),B(()=>[a.code,a.startDate,a.zipCode,a.islandId,a.countyId,a.parishId,a.locationTypeId,a.locationId,a.organizationId,a.address,a.locality],()=>{oe.calculatePercentage(a,V.progressFields(),t=>{O.setProgress(t),T.value=t})}),A(()=>T.value===100&&!l.value),(t,r)=>{const C=m("breadcrumb-item"),M=m("breadcrumb"),D=m("ctimeline"),H=m("card"),U=m("page");return c(),p(U,{title:t._lang.backoffice.location.detailPageTitle},{breadcrumb:f(()=>[d(M,{"has-home":!e(k)},{default:f(()=>[e(E)?(c(),p(C,{key:0,label:t._lang.backoffice.tasks.breadcrumbTitle,"router-path":e(i).router.BACKOFFICE_TASKS_PAGE.path},null,8,["label","router-path"])):e(k)?(c(),p(C,{key:1,label:t._lang.search.pageTitle,"router-path":e(i).router.BACKOFFICE_SEARCH_HISTORY_PAGE.path},null,8,["label","router-path"])):(c(),p(C,{key:2,label:t._lang.backoffice.location.breadcrumbTitle,"router-path":e(i).router.BACKOFFICE_LOCATION_PAGE.path},null,8,["label","router-path"])),d(C,{label:t._lang.backoffice.location.detailPageTitle},null,8,["label"])]),_:1},8,["has-home"])]),actions:f(()=>[d(le,{loading:e(l),"onUpdate:loading":r[0]||(r[0]=o=>g(l)?l.value=o:l=o),selectedLang:e(s),"onUpdate:selectedLang":r[1]||(r[1]=o=>g(s)?s.value=o:s=o),service:e(_),backRoute:e(i).router.BACKOFFICE_LOCATION_PAGE.name,editRoute:e(i).router.BACKOFFICE_EDIT_LOCATION_PAGE.name,itemIdField:"locationId",itemVersionField:"locationVersion",itemId:e(u),itemVersion:e(v),formModel:e(a),"show-record-state-actions":e(E),store:e(O)},null,8,["loading","selectedLang","service","backRoute","editRoute","itemId","itemVersion","formModel","show-record-state-actions","store"])]),default:f(()=>[e(y)?(c(),p(D,{key:0,itemId:e(u),detailRoute:e(i).router.BACKOFFICE_DETAIL_LOCATION_PAGE.name,service:e(_),versionFieldName:"locationVersion",dateFieldName:"locationApprovedDate",detailRouteIdField:"locationId",detailRouteVersionField:"locationVersion",ref_key:"timeline",ref:b},null,8,["itemId","detailRoute","service"])):W("",!0),d(H,{shadow:!0},{body:f(()=>[d(Z,{validateForm:!1,disabled:!0,modelValue:e(a),"onUpdate:modelValue":r[2]||(r[2]=o=>g(a)?a.value=o:a=o),loading:e(l),rules:e(h),selectedLang:e(s),vuelidate:{}},null,8,["modelValue","loading","rules","selectedLang"]),d($,{validateForm:!1,disabled:!0,modelValue:e(a),"onUpdate:modelValue":r[3]||(r[3]=o=>g(a)?a.value=o:a=o),loading:e(l),rules:e(h),vuelidate:{}},null,8,["modelValue","loading","rules"]),d(ee,{validateForm:!1,disabled:!0,modelValue:e(a),"onUpdate:modelValue":r[4]||(r[4]=o=>g(a)?a.value=o:a=o),loading:e(l),selectedLang:e(s),vuelidate:{}},null,8,["modelValue","loading","selectedLang"])]),_:1})]),_:1},8,["title"])}}};export{Ae as default};
