import{J as U,u as d,x as I,n as G,r as i,a as A,i as k,z as h,s as z,L as K,N as w,G as y,b as m,o as j,l as D,w as u,e as r,g as a,D as c,C as H}from"./index-5b4ebf84.js";import{u as J,_ as W,a as q}from"./address-8b7e35ae.js";import{a as Q}from"./refusal-5d03193c.js";import{u as X}from"./index.esm-65642301.js";import{l as L}from"./location-7945ac70.js";import{h as V}from"./helpers-c8652456.js";import{b as Y}from"./helpers-4796f1a9.js";import{e as Z}from"./edit-actions-88160b2f.js";import"./address-167772ff.js";import"./index.esm-85573352.js";import"./cancel-confirm-46a9e596.js";import"./settings-fd6ffbf1.js";import"./helpers-991a1d67.js";import"./helpers-28a0442c.js";import"./helpers-730fb974.js";import"./helpers-138c884f.js";import"./helpers-56107f9e.js";/* empty css                                                                     */const ve={__name:"edit",setup(x){U(async()=>{p.value=d.decodeId(C.params.locationId),g.value=d.decodeId(C.params.locationVersion),!p.value||!g.value?R.push({name:I.router.BACKOFFICE_LOCATION_PAGE.name}):(await F(),await T())}),G(()=>{l.value=!1});let p=i(0),g=i(0),l=i(!0);i([]);let e=A(V.newForm()),n=i(k.language.pt),b=A(V.formRules()),v=i(0);const f=J();h();const R=z(),C=K(),_=X(b,e);async function T(){l.value=!0;const o=await L.getById(p.value,g.value);d.validateResponse(o,null,()=>{Object.assign(e,o.data),f.setFormToCompare(d.cloneObject(o.data))}),l.value=!1}async function F(){l.value=!0;const o=await L.getLists(n.value);d.validateResponse(o,null,()=>{f.setLists(o.data)}),l.value=!1}w(()=>n.value,()=>{F()}),w(()=>[e.code,e.startDate,e.zipCode,e.islandId,e.countyId,e.parishId,e.locationTypeId,e.locationId,e.organization,e.address,e.locality],()=>{Y.calculatePercentage(e,V.progressFields(),o=>{f.setProgress(o),v.value=o})});const B=y(()=>v.value===100&&!l.value),E=y(()=>n.value===k.language.en);return(o,s)=>{const O=m("breadcrumb-item"),P=m("breadcrumb"),N=m("progress-bar"),S=m("card"),M=m("page");return j(),D(M,{title:o._lang.backoffice.location.editPageTitle},{actions:u(()=>[r(Z,{loading:a(l),"onUpdate:loading":s[0]||(s[0]=t=>c(l)?l.value=t:l=t),canSubmit:a(B),selectedLang:a(n),"onUpdate:selectedLang":s[1]||(s[1]=t=>c(n)?n.value=t:n=t),backRoute:a(I).router.BACKOFFICE_LOCATION_PAGE.name,service:a(L),itemId:a(p),itemVersion:a(g),formModel:a(e),vuelidate:a(_),store:a(f),resource:o._lang.backoffice.location,itemIdField:"locationId"},null,8,["loading","canSubmit","selectedLang","backRoute","service","itemId","itemVersion","formModel","vuelidate","store","resource"])]),breadcrumb:u(()=>[r(P,{"has-home":!0},{default:u(()=>[r(O,{label:o._lang.backoffice.location.breadcrumbTitle,"router-path":a(I).router.BACKOFFICE_LOCATION_PAGE.path},null,8,["label","router-path"]),r(O,{label:o._lang.backoffice.location.editPageTitle},null,8,["label"])]),_:1})]),default:u(()=>[r(S,{shadow:!0},{body:u(()=>[r(H,{"margin-top":!1},{default:u(()=>[r(N,{value:a(v),label:o._lang.common.fill,class:"mb-4 col-12 float-end"},null,8,["value","label"])]),_:1}),r(W,{validateForm:!0,modelValue:a(e),"onUpdate:modelValue":s[2]||(s[2]=t=>c(e)?e.value=t:e=t),loading:a(l),rules:a(b),selectedLang:a(n),vuelidate:a(_)},null,8,["modelValue","loading","rules","selectedLang","vuelidate"]),r(q,{validateForm:!0,modelValue:a(e),"onUpdate:modelValue":s[3]||(s[3]=t=>c(e)?e.value=t:e=t),loading:a(l),rules:a(b),disabled:a(E),vuelidate:a(_)},null,8,["modelValue","loading","rules","disabled","vuelidate"]),r(Q,{validateForm:!0,modelValue:a(e),"onUpdate:modelValue":s[4]||(s[4]=t=>c(e)?e.value=t:e=t),loading:a(l),selectedLang:a(n)},null,8,["modelValue","loading","selectedLang"])]),_:1})]),_:1},8,["title"])}}};export{ve as default};
