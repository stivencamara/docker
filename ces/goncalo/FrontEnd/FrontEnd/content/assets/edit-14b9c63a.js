import{K as G,u as d,z as V,o as K,r as i,G as A,s as w,i as h,g as j,f as z,N as y,j as R,k as c,c as H,l as D,w as u,n as r,p as a,I as m,V as W}from"./index-a14ad215.js";import{l as F}from"./location-504e7ab6.js";import{u as q,_ as J,a as Q}from"./address-afd974a6.js";import{a as X}from"./refusal-4e803a93.js";import{u as Y}from"./index.esm-97dcd533.js";import{h as L}from"./helpers-bd233d9c.js";import{b as Z}from"./helpers-71142cd6.js";import{e as $}from"./edit-actions-913d0dbe.js";import"./address-809a8351.js";import"./index.esm-88a1129f.js";import"./cancel-confirm-ab082f5c.js";import"./settings-739a4c13.js";/* empty css                                                                     */const pe={__name:"edit",setup(x){G(async()=>{p.value=d.decodeId(C.params.locationId),g.value=d.decodeId(C.params.locationVersion),!p.value||!g.value?T.push({name:V.router.BACKOFFICE_LOCATION_PAGE.name}):(await O(),await B())}),K(()=>{t.value=!1});let p=i(0),g=i(0),t=i(!0);i([]);let e=A(L.newForm()),n=i(w.language.pt),v=A(L.formRules()),b=i(0),_=i([]);const f=q();h();const T=j(),C=z(),I=Y(v,e);async function B(){t.value=!0;const o=await F.getById(p.value,g.value);d.validateResponse(o,null,()=>{Object.assign(e,o.data),f.setFormToCompare(d.cloneObject(o.data))}),t.value=!1}async function O(){t.value=!0;const o=await F.getLists(n.value);d.validateResponse(o,null,()=>{f.setLists(o.data)}),t.value=!1}y(()=>n.value,()=>{O()}),y(()=>[e.code,e.startDate,e.zipCode,e.islandId,e.countyId,e.parishId,e.locationTypeId,e.locationId,e.organization,e.address,e.locality],()=>{_.value=L.progressFields(),Z.calculatePercentage(e,_.value,o=>{f.setProgress(o),b.value=o})});const E=R(()=>b.value===100&&!t.value),P=R(()=>n.value===w.language.en);return(o,s)=>{const k=c("breadcrumb-item"),N=c("breadcrumb"),S=c("progress-bar"),M=c("card"),U=c("page");return H(),D(U,{title:o._lang.backoffice.location.editPageTitle},{actions:u(()=>[r($,{loading:a(t),"onUpdate:loading":s[0]||(s[0]=l=>m(t)?t.value=l:t=l),canSubmit:a(E),selectedLang:a(n),"onUpdate:selectedLang":s[1]||(s[1]=l=>m(n)?n.value=l:n=l),backRoute:a(V).router.BACKOFFICE_LOCATION_PAGE.name,service:a(F),itemId:a(p),itemVersion:a(g),formModel:a(e),vuelidate:a(I),store:a(f),resource:o._lang.backoffice.location,itemIdField:"locationId",progressFields:a(_)},null,8,["loading","canSubmit","selectedLang","backRoute","service","itemId","itemVersion","formModel","vuelidate","store","resource","progressFields"])]),breadcrumb:u(()=>[r(N,{"has-home":!0},{default:u(()=>[r(k,{label:o._lang.backoffice.location.breadcrumbTitle,"router-path":a(V).router.BACKOFFICE_LOCATION_PAGE.path},null,8,["label","router-path"]),r(k,{label:o._lang.backoffice.location.editPageTitle},null,8,["label"])]),_:1})]),default:u(()=>[r(M,{shadow:!0},{body:u(()=>[r(W,{"margin-top":!1},{default:u(()=>[r(S,{value:a(b),label:o._lang.common.fill,class:"mb-4 col-12 float-end"},null,8,["value","label"])]),_:1}),r(J,{validateForm:!0,modelValue:a(e),"onUpdate:modelValue":s[2]||(s[2]=l=>m(e)?e.value=l:e=l),loading:a(t),rules:a(v),selectedLang:a(n),vuelidate:a(I)},null,8,["modelValue","loading","rules","selectedLang","vuelidate"]),r(Q,{validateForm:!0,modelValue:a(e),"onUpdate:modelValue":s[3]||(s[3]=l=>m(e)?e.value=l:e=l),loading:a(t),rules:a(v),disabled:a(P),vuelidate:a(I)},null,8,["modelValue","loading","rules","disabled","vuelidate"]),r(X,{validateForm:!0,modelValue:a(e),"onUpdate:modelValue":s[4]||(s[4]=l=>m(e)?e.value=l:e=l),loading:a(t),selectedLang:a(n)},null,8,["modelValue","loading","selectedLang"])]),_:1})]),_:1},8,["title"])}}};export{pe as default};
