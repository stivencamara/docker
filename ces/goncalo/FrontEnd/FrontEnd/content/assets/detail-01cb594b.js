import{_ as D}from"./form-5525b21e.js";import{g as q,f as H,i as U,h as j,r as l,j as w,v as c,k as E,P as x,N as J,u as O,C as i,T as z,w as Q,l as b,c as f,m as _,n as g,q as v,s as e,L as A,A as W}from"./index-bb041a92.js";import{p as I}from"./point-of-care-cea4a765.js";import{p as y}from"./helpers-c3e2dc86.js";import{u as X}from"./point-of-care-b2dac6a1.js";import"./helpers-f0eb2667.js";import{_ as Y}from"./detail-actions-c770fa3b.js";import"./index.esm-aaed56ca.js";import"./contacts-d4beb946.js";import"./location-ecefce01.js";import"./address-fd2f37e5.js";import"./organization-7396450f.js";import"./address.vue_vue_type_style_index_0_scoped_5480b292_lang-4424aca9.js";import"./service-ba1c1675.js";import"./refusal-4a9e82b8.js";import"./index.esm-70b2cee2.js";import"./generic-a6ce2963.js";import"./service-05ba5811.js";import"./helpers-88e09779.js";import"./helpers-c77579e9.js";import"./extinct-confirm-9f6a5fd8.js";import"./helpers-87024433.js";import"./helpers-b7ce43f3.js";import"./helpers-b96ce24f.js";import"./settings-7b62b456.js";const Ae={__name:"detail",setup(Z){const S=q(),m=H();U();const F=j(),h=X();let a=l(!0),o=w(y.newForm()),n=l(c.language.pt);l([]);let B=w(y.formRules()),p=l(0),d=l(0),R=l(!1),C=l(null);const T=E(()=>m.path.toLowerCase().indexOf("tarefas")>-1),L=E(()=>m.path.toLowerCase().indexOf("pesquisa")>-1),V=l(x.havePermission(c.permissions.pointOfCare.createEdit));async function N(){a.value=!0;const t=await I.getById(p.value,d.value);O.validateResponse(t,null,()=>{Object.assign(o,t.data),F.emit(i.emitter.OBJECT_LOADED,t.data)}),a.value=!1}async function P(){a.value=!0;const t=await I.getLists(n.value);O.validateResponse(t,null,()=>{h.setLists(t.data)}),a.value=!1}J(async()=>{p.value=O.decodeId(m.params.pointOfCareId),d.value=O.decodeId(m.params.pointOfCareVersion),R.value=m.params.association,!p.value||!d.value?S.push({name:i.router.BACKOFFICE_POINT_OF_CARE_PAGE.name}):(await P(),await N(),k.value&&(await C.value.getHistory(),C.value.setActiveVersion(d.value),C.value.setStep()),R.value&&document.querySelectorAll(".nav-tabs button.nav-link").forEach(r=>{if(r.id=="services-tab"){const u=new z(r);u.show(),F.emit(i.emitter.TAB_CLICK,u)}}))}),Q(()=>n.value,()=>{P()});const k=E(()=>!T.value&&V.value&&(o.recordStateTypeId==c.recordStateType.published||o.recordStateTypeId==c.recordStateType.extinct||o.recordStateTypeId==c.recordStateType.obsolete));return(t,r)=>{const u=b("breadcrumb-item"),K=b("breadcrumb"),M=b("ctimeline"),G=b("page");return f(),_(G,{title:t._lang.backoffice.pointOfCare.detailPageTitle},{breadcrumb:g(()=>[v(K,{"has-home":!e(L)},{default:g(()=>[e(T)?(f(),_(u,{key:0,label:t._lang.backoffice.tasks.breadcrumbTitle,"router-path":e(i).router.BACKOFFICE_TASKS_PAGE.path},null,8,["label","router-path"])):e(L)?(f(),_(u,{key:1,label:t._lang.search.pageTitle,"router-path":e(i).router.HOME_PAGE.path},null,8,["label","router-path"])):(f(),_(u,{key:2,label:t._lang.backoffice.pointOfCare.breadcrumbTitle,"router-path":e(i).router.BACKOFFICE_POINT_OF_CARE_PAGE.path},null,8,["label","router-path"])),v(u,{label:t._lang.backoffice.pointOfCare.detailPageTitle},null,8,["label"])]),_:1},8,["has-home"])]),actions:g(()=>[v(Y,{loading:e(a),"onUpdate:loading":r[0]||(r[0]=s=>A(a)?a.value=s:a=s),selectedLang:e(n),"onUpdate:selectedLang":r[1]||(r[1]=s=>A(n)?n.value=s:n=s),service:e(I),backRoute:e(i).router.BACKOFFICE_POINT_OF_CARE_PAGE.name,editRoute:e(i).router.BACKOFFICE_EDIT_POINT_OF_CARE_PAGE.name,itemIdField:"pointOfCareId",itemVersionField:"pointOfCareVersion",itemId:e(p),itemVersion:e(d),formModel:e(o),"show-record-state-actions":e(T),store:e(h)},null,8,["loading","selectedLang","service","backRoute","editRoute","itemId","itemVersion","formModel","show-record-state-actions","store"])]),default:g(()=>[e(k)?(f(),_(M,{key:0,itemId:e(p),detailRoute:e(i).router.BACKOFFICE_DETAIL_POINT_OF_CARE_PAGE.name,service:e(I),versionFieldName:"pointOfCareVersion",dateFieldName:"pointOfCareApprovedDate",detailRouteIdField:"pointOfCareId",detailRouteVersionField:"pointOfCareVersion",ref_key:"timeline",ref:C},null,8,["itemId","detailRoute","service"])):W("",!0),v(D,{formModel:e(o),"onUpdate:formModel":r[2]||(r[2]=s=>A(o)?o.value=s:o=s),disabled:!0,validateForm:!1,loading:e(a),selectedLang:e(n),rules:e(B),isExternalEdit:!1,showProgress:!1},null,8,["formModel","loading","selectedLang","rules"])]),_:1},8,["title"])}}};export{Ae as default};
