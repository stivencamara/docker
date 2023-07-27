import{_ as j}from"./form-a0bb127e.js";import{h as D,C as H,q,i as o,s as h,v,E as B,N as R,K as Y,j as i,l as g,r as T,o as F,c as x,w as E,a as n,m as e,e as P,F as z,z as S}from"./index-a3ba1ed7.js";import{s as y}from"./service-dc586f40.js";import{s as k}from"./helpers-10c1d19c.js";import{u as J}from"./service-e931ab78.js";import{u as Q}from"./index.esm-9dd2f6da.js";import{b as W}from"./helpers-4d6c1969.js";import{e as X}from"./edit-actions-8e0463cd.js";import"./index.esm-d7202dd3.js";import"./address.vue_vue_type_style_index_0_scoped_2266ba05_lang-0a4ce42e.js";import"./point-of-care-355d6f64.js";import"./form-c4dc8a79.js";import"./settings-4e9392c0.js";import"./refusal-478c260d.js";import"./generic-4e94cd3a.js";import"./point-of-care-748eca52.js";import"./organization-ce7c2862.js";import"./helpers-ae560b5a.js";import"./helpers-0cd9b2b2.js";import"./cancel-confirm-f95c31ca.js";/* empty css                                                                     */const _e={__name:"edit",setup(Z){const L=D(),p=H(),w=q(),f=J();let s=o(!0),a=h(k.newForm()),u=o(v.language.pt);o([]);let C=h(k.formRules()),b=o(0),I=o(0),_=o(0),m=o(0),O=o(0),c=o([]);const M=Q(C,a),U=B(()=>_.value===100&&!s.value);async function K(){s.value=!0;const t=await y.getById(b.value,I.value);i.validateResponse(t,null,()=>{let r=t.data;r.eventTypeId=r.lifeEventId?v.eventType.life:v.eventType.business,r.processingTime.type=r.processingTime.weeks?v.processingTimeType.simplified:v.processingTimeType.advanced,Object.assign(a,r),f.setFormToCompare(i.cloneObject(r))}),s.value=!1}async function V(){s.value=!0;const t=await y.getLists(u.value);i.validateResponse(t,null,()=>{f.setLists(t.data)}),s.value=!1}R(()=>u.value,()=>{V()}),Y(async()=>{b.value=i.decodeId(p.params.serviceId),I.value=i.decodeId(p.params.serviceVersion),m.value=i.decodeId(p.params.organizationId),O.value=i.decodeId(p.params.organizationVersion),!b.value||!I.value?L.push({name:g.router.BACKOFFICE_SERVICE_PAGE.name}):(await V(),await K())}),R(()=>[a.texts[0].name,a.organization,a.serviceTypeId,a.serviceCategoryId,a.startDate,a.economicActivityId,a.virtual.isVirtual,a.stateSupport.isStateSupport],()=>{c.value=k.progressFields(),a.virtual.isVirtual?c.value.push("virtualUrl"):(i.removeItemOfArray(c.value,"virtualUrl"),a.virtual.url=null),a.stateSupport.isStateSupport?c.value.push("stateSupportUrl"):(i.removeItemOfArray(c.value,"stateSupportUrl"),a.stateSupport.url=null),W.calculatePercentage(a,c.value,t=>{f.setProgress(t),_.value=t})});const A=B(()=>m.value>0?`${g.router.BACKOFFICE_EDIT_ENTITY_PAGE.path.replace(":organizationId",p.params.organizationId).replace(":organizationVersion",p.params.organizationVersion)}#servicos`:g.router.BACKOFFICE_SERVICE_PAGE.name);return(t,r)=>{const d=T("breadcrumb-item"),G=T("breadcrumb"),N=T("page");return F(),x(N,{title:t._lang.backoffice.service.editPageTitle},{breadcrumb:E(()=>[n(G,{"has-home":!0},{default:E(()=>[e(m)>0?(F(),P(z,{key:0},[n(d,{label:t._lang.backoffice.entities.breadcrumbTitle,"router-path":e(g).router.BACKOFFICE_ENTITIES_PAGE.path},null,8,["label","router-path"]),n(d,{label:e(w).common.entity,"router-path":e(A)},null,8,["label","router-path"]),n(d,{label:t._lang.backoffice.service.editPageTitle},null,8,["label"])],64)):(F(),P(z,{key:1},[n(d,{label:t._lang.backoffice.service.breadcrumbTitle,"router-path":e(g).router.BACKOFFICE_SERVICE_PAGE.path},null,8,["label","router-path"]),n(d,{label:t._lang.backoffice.service.editPageTitle},null,8,["label"])],64))]),_:1})]),actions:E(()=>[n(X,{loading:e(s),"onUpdate:loading":r[0]||(r[0]=l=>S(s)?s.value=l:s=l),canSubmit:e(U),selectedLang:e(u),"onUpdate:selectedLang":r[1]||(r[1]=l=>S(u)?u.value=l:u=l),backRoute:e(A),directBackRoute:e(m)>0,service:e(y),itemId:e(b),itemVersion:e(I),itemIdField:"serviceId",formModel:e(a),vuelidate:e(M),store:e(f),resource:t._lang.backoffice.service,progressFields:e(c)},null,8,["loading","canSubmit","selectedLang","backRoute","directBackRoute","service","itemId","itemVersion","formModel","vuelidate","store","resource","progressFields"])]),default:E(()=>[n(j,{formModel:e(a),"onUpdate:formModel":r[2]||(r[2]=l=>S(a)?a.value=l:a=l),disabled:!1,loading:e(s),selectedLang:e(u),validateForm:!0,rules:e(C),isExternalEdit:e(m)>0,progressValue:e(_)},null,8,["formModel","loading","selectedLang","rules","isExternalEdit","progressValue"])]),_:1},8,["title"])}}};export{_e as default};
