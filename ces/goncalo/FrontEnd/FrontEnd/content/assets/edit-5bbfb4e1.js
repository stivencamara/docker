import{K,u as d,z as V,o as h,r as i,E as A,s as w,i as j,g as z,f as G,N as y,j as E,k as c,c as H,l as D,w as u,n as r,p as a,H as m,V as W}from"./index-cce4225b.js";import{l as F}from"./location-001f1ee8.js";import{u as q,_ as J,a as Q}from"./address-bbbbe5b4.js";import{a as X}from"./refusal-6e99b2c3.js";import{u as Y}from"./index.esm-7471f5f2.js";import{h as L}from"./helpers-2414d58e.js";import{b as Z}from"./helpers-2be1e0ad.js";import{e as $}from"./edit-actions-7f99b154.js";import"./address-912ce123.js";import"./index.esm-840476f1.js";import"./cancel-confirm-7c9616d5.js";import"./settings-a51ee9a9.js";/* empty css                                                                     */const pe={__name:"edit",setup(x){K(async()=>{p.value=d.decodeId(C.params.locationId),g.value=d.decodeId(C.params.locationVersion),!p.value||!g.value?R.push({name:V.router.BACKOFFICE_LOCATION_PAGE.name}):(await O(),await T())}),h(()=>{t.value=!1});let p=i(0),g=i(0),t=i(!0);i([]);let e=A(L.newForm()),n=i(w.language.pt),v=A(L.formRules()),b=i(0),_=i([]);const f=q();j();const R=z(),C=G(),I=Y(v,e);async function T(){t.value=!0;const o=await F.getById(p.value,g.value);d.validateResponse(o,null,()=>{Object.assign(e,o.data),f.setFormToCompare(d.cloneObject(o.data))}),t.value=!1}async function O(){t.value=!0;const o=await F.getLists(n.value);d.validateResponse(o,null,()=>{f.setLists(o.data)}),t.value=!1}y(()=>n.value,()=>{O()}),y(()=>[e.code,e.startDate,e.zipCode,e.islandId,e.countyId,e.parishId,e.locationTypeId,e.locationId,e.organization,e.address,e.locality],()=>{_.value=L.progressFields(),Z.calculatePercentage(e,_.value,o=>{f.setProgress(o),b.value=o})});const B=E(()=>b.value===100&&!t.value),P=E(()=>n.value===w.language.en);return(o,s)=>{const k=c("breadcrumb-item"),N=c("breadcrumb"),S=c("progress-bar"),M=c("card"),U=c("page");return H(),D(U,{title:o._lang.backoffice.location.editPageTitle},{actions:u(()=>[r($,{loading:a(t),"onUpdate:loading":s[0]||(s[0]=l=>m(t)?t.value=l:t=l),canSubmit:a(B),selectedLang:a(n),"onUpdate:selectedLang":s[1]||(s[1]=l=>m(n)?n.value=l:n=l),backRoute:a(V).router.BACKOFFICE_LOCATION_PAGE.name,service:a(F),itemId:a(p),itemVersion:a(g),formModel:a(e),vuelidate:a(I),store:a(f),resource:o._lang.backoffice.location,itemIdField:"locationId",progressFields:a(_)},null,8,["loading","canSubmit","selectedLang","backRoute","service","itemId","itemVersion","formModel","vuelidate","store","resource","progressFields"])]),breadcrumb:u(()=>[r(N,{"has-home":!0},{default:u(()=>[r(k,{label:o._lang.backoffice.location.breadcrumbTitle,"router-path":a(V).router.BACKOFFICE_LOCATION_PAGE.path},null,8,["label","router-path"]),r(k,{label:o._lang.backoffice.location.editPageTitle},null,8,["label"])]),_:1})]),default:u(()=>[r(M,{shadow:!0},{body:u(()=>[r(W,{"margin-top":!1},{default:u(()=>[r(S,{value:a(b),label:o._lang.common.fill,class:"mb-4 col-12 float-end"},null,8,["value","label"])]),_:1}),r(J,{validateForm:!0,modelValue:a(e),"onUpdate:modelValue":s[2]||(s[2]=l=>m(e)?e.value=l:e=l),loading:a(t),rules:a(v),selectedLang:a(n),vuelidate:a(I)},null,8,["modelValue","loading","rules","selectedLang","vuelidate"]),r(Q,{validateForm:!0,modelValue:a(e),"onUpdate:modelValue":s[3]||(s[3]=l=>m(e)?e.value=l:e=l),loading:a(t),rules:a(v),disabled:a(P),vuelidate:a(I)},null,8,["modelValue","loading","rules","disabled","vuelidate"]),r(X,{validateForm:!0,modelValue:a(e),"onUpdate:modelValue":s[4]||(s[4]=l=>m(e)?e.value=l:e=l),loading:a(t),selectedLang:a(n)},null,8,["modelValue","loading","selectedLang"])]),_:1})]),_:1},8,["title"])}}};export{pe as default};
