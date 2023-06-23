import{L as U,n as d,s as I,o as h,r as i,y as A,A as k,x as G,m as H,N as K,O as w,I as y,a as m,b as j,c as z,w as u,d as r,f as a,i as c,H as D}from"./index-920dbb37.js";import{u as W,_ as q,a as J}from"./address-87dae4f1.js";import{_ as Q}from"./comments-3b769030.js";import{u as X}from"./index.esm-d064d6e3.js";import{l as L}from"./location-be767322.js";import{h as V}from"./helpers-952742ca.js";import{b as Y}from"./helpers-4c156364.js";import{e as Z}from"./edit-actions-4d0f80fb.js";import"./address-38fb745b.js";import"./index.esm-d0811cb6.js";import"./cancel-confirm-33e0b7cc.js";import"./settings-bb7269a2.js";import"./helpers-93ac209f.js";import"./helpers-65b02008.js";import"./helpers-6935922b.js";import"./helpers-cd5e71d3.js";import"./helpers-db4b16e6.js";/* empty css                                                                     */const ve={__name:"edit",setup(x){U(async()=>{p.value=d.decodeId(C.params.locationId),g.value=d.decodeId(C.params.locationVersion),!p.value||!g.value?R.push({name:I.router.BACKOFFICE_LOCATION_PAGE.name}):(await F(),await T())}),h(()=>{l.value=!1});let p=i(0),g=i(0),l=i(!0);i([]);let e=A(V.newForm()),n=i(k.language.pt),b=A(V.formRules()),v=i(0);const f=W();G();const R=H(),C=K(),_=X(b,e);async function T(){l.value=!0;const o=await L.getById(p.value,g.value);d.validateResponse(o,null,()=>{Object.assign(e,o.data),f.setFormToCompare(d.cloneObject(o.data))}),l.value=!1}async function F(){l.value=!0;const o=await L.getLists(n.value);d.validateResponse(o,null,()=>{f.setLists(o.data)}),l.value=!1}w(()=>n.value,()=>{F()}),w(()=>[e.code,e.startDate,e.zipCode,e.islandId,e.countyId,e.parishId,e.locationTypeId,e.locationId,e.organization,e.address,e.locality],()=>{Y.calculatePercentage(e,V.progressFields(),o=>{f.setProgress(o),v.value=o})});const B=y(()=>v.value===100&&!l.value),E=y(()=>n.value===k.language.en);return(o,s)=>{const O=m("breadcrumb-item"),P=m("breadcrumb"),N=m("progress-bar"),S=m("card"),M=m("page");return j(),z(M,{title:o._lang.backoffice.location.editPageTitle},{actions:u(()=>[r(Z,{loading:a(l),"onUpdate:loading":s[0]||(s[0]=t=>c(l)?l.value=t:l=t),canSubmit:a(B),selectedLang:a(n),"onUpdate:selectedLang":s[1]||(s[1]=t=>c(n)?n.value=t:n=t),backRoute:a(I).router.BACKOFFICE_LOCATION_PAGE.name,service:a(L),itemId:a(p),itemVersion:a(g),formModel:a(e),vuelidate:a(_),store:a(f),resource:o._lang.backoffice.location,itemIdField:"locationId"},null,8,["loading","canSubmit","selectedLang","backRoute","service","itemId","itemVersion","formModel","vuelidate","store","resource"])]),breadcrumb:u(()=>[r(P,{"has-home":!0},{default:u(()=>[r(O,{label:o._lang.backoffice.location.breadcrumbTitle,"router-path":a(I).router.BACKOFFICE_LOCATION_PAGE.path},null,8,["label","router-path"]),r(O,{label:o._lang.backoffice.location.editPageTitle},null,8,["label"])]),_:1})]),default:u(()=>[r(S,{shadow:!0},{body:u(()=>[r(D,{"margin-top":!1},{default:u(()=>[r(N,{value:a(v),label:o._lang.common.fill,class:"mb-4 col-12 float-end"},null,8,["value","label"])]),_:1}),r(q,{validateForm:!0,modelValue:a(e),"onUpdate:modelValue":s[2]||(s[2]=t=>c(e)?e.value=t:e=t),loading:a(l),rules:a(b),selectedLang:a(n),vuelidate:a(_)},null,8,["modelValue","loading","rules","selectedLang","vuelidate"]),r(J,{validateForm:!0,modelValue:a(e),"onUpdate:modelValue":s[3]||(s[3]=t=>c(e)?e.value=t:e=t),loading:a(l),rules:a(b),disabled:a(E),vuelidate:a(_)},null,8,["modelValue","loading","rules","disabled","vuelidate"]),r(Q,{validateForm:!0,modelValue:a(e),"onUpdate:modelValue":s[4]||(s[4]=t=>c(e)?e.value=t:e=t),loading:a(l),selectedLang:a(n)},null,8,["modelValue","loading","selectedLang"])]),_:1})]),_:1},8,["title"])}}};export{ve as default};
