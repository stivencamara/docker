import{N as j,u as d,C as L,o as G,r as i,j as A,v as F,i as H,g as K,f as z,w as T,k as w,l as c,c as q,m as D,n as u,q as r,s as a,L as m,Y as W}from"./index-ab26f80c.js";import{l as V}from"./location-05071af4.js";import{u as Y,_ as J,a as Q}from"./address-44623d5d.js";import{a as X}from"./refusal-583c28ea.js";import{u as Z}from"./index.esm-aff4e7f9.js";import{h as C}from"./helpers-c1e81980.js";import{b as $}from"./helpers-c14e9a29.js";import{e as x}from"./edit-actions-083ef1ff.js";import"./address-8746b3bd.js";import"./index.esm-6a371f16.js";import"./cancel-confirm-f76ba4a7.js";import"./settings-d3284d0c.js";/* empty css                                                                     */const ge={__name:"edit",setup(ee){j(async()=>{p.value=d.decodeId(O.params.locationId),g.value=d.decodeId(O.params.locationVersion),!p.value||!g.value?S.push({name:L.router.BACKOFFICE_LOCATION_PAGE.name}):(await B(),await k())}),G(()=>{t.value=!1});let p=i(0),g=i(0),t=i(!0);i([]);let e=A(C.newForm()),n=i(F.language.pt),v=A(C.formRules()),b=i(0),_=i([]),R=i(!1);const f=Y();H();const S=K(),O=z(),I=Z(v,e);async function B(){t.value=!0;const o=await V.getById(p.value,g.value);d.validateResponse(o,null,()=>{Object.assign(e,o.data),f.setFormToCompare(d.cloneObject(o.data))}),t.value=!1}async function k(){t.value=!0;const o=await V.getLists(n.value,e.recordStateTypeId!=F.recordStateType.draft);d.validateResponse(o,null,()=>{f.setLists(o.data)}),t.value=!1}T(()=>n.value,()=>{k()}),T(()=>[e.code,e.startDate,e.zipCode,e.islandId,e.countyId,e.parishId,e.locationTypeId,e.locationId,e.organization,e.address,e.locality],()=>{_.value=C.progressFields(),$.calculatePercentage(e,_.value,o=>{f.setProgress(o),b.value=o})});const E=w(()=>b.value===100&&!t.value),P=w(()=>n.value===F.language.en);return(o,s)=>{const y=c("breadcrumb-item"),N=c("breadcrumb"),M=c("progress-bar"),U=c("card"),h=c("page");return q(),D(h,{title:o._lang.backoffice.location.editPageTitle},{actions:u(()=>[r(x,{loading:a(t),"onUpdate:loading":s[0]||(s[0]=l=>m(t)?t.value=l:t=l),canSubmit:a(E),selectedLang:a(n),"onUpdate:selectedLang":s[1]||(s[1]=l=>m(n)?n.value=l:n=l),backRoute:a(L).router.BACKOFFICE_LOCATION_PAGE.name,service:a(V),itemId:a(p),itemVersion:a(g),formModel:a(e),vuelidate:a(I),store:a(f),resource:o._lang.backoffice.location,itemIdField:"locationId",progressFields:a(_),organicOrigin:a(R),isHeritage:!0},null,8,["loading","canSubmit","selectedLang","backRoute","service","itemId","itemVersion","formModel","vuelidate","store","resource","progressFields","organicOrigin"])]),breadcrumb:u(()=>[r(N,{"has-home":!0},{default:u(()=>[r(y,{label:o._lang.backoffice.location.breadcrumbTitle,"router-path":a(L).router.BACKOFFICE_LOCATION_PAGE.path},null,8,["label","router-path"]),r(y,{label:o._lang.backoffice.location.editPageTitle},null,8,["label"])]),_:1})]),default:u(()=>[r(U,{shadow:!0},{body:u(()=>[r(W,{"margin-top":!1},{default:u(()=>[r(M,{value:a(b),label:o._lang.common.fill,class:"mb-4 col-12 float-end"},null,8,["value","label"])]),_:1}),r(J,{validateForm:!0,modelValue:a(e),"onUpdate:modelValue":s[2]||(s[2]=l=>m(e)?e.value=l:e=l),loading:a(t),rules:a(v),selectedLang:a(n),vuelidate:a(I)},null,8,["modelValue","loading","rules","selectedLang","vuelidate"]),r(Q,{validateForm:!0,modelValue:a(e),"onUpdate:modelValue":s[3]||(s[3]=l=>m(e)?e.value=l:e=l),loading:a(t),rules:a(v),disabled:a(P),vuelidate:a(I)},null,8,["modelValue","loading","rules","disabled","vuelidate"]),r(X,{validateForm:!0,modelValue:a(e),"onUpdate:modelValue":s[4]||(s[4]=l=>m(e)?e.value=l:e=l),loading:a(t),selectedLang:a(n)},null,8,["modelValue","loading","selectedLang"])]),_:1})]),_:1},8,["title"])}}};export{ge as default};
