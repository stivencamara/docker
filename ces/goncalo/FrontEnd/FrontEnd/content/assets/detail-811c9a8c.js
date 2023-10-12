import{_ as D}from"./form-10389747.js";import{g as H,f as U,i as j,h as q,r as l,G as L,s as c,j as E,M as x,K as z,u as O,z as i,T as J,N as Q,k as b,c as f,l as _,w as g,n as v,p as e,I as A,y as W}from"./index-c417b10a.js";import{p as I}from"./point-of-care-86bcb545.js";import{p as P}from"./helpers-bb0e4cec.js";import{u as X}from"./point-of-care-870d551b.js";import"./helpers-422844e7.js";import{_ as Y}from"./detail-actions-de6909db.js";import"./index.esm-5fe78185.js";import"./contacts-d61273ea.js";import"./location-d3d0b570.js";import"./address-c37f517b.js";import"./organization-53b6fe99.js";import"./address.vue_vue_type_style_index_0_scoped_5480b292_lang-1be492ce.js";import"./service-d66d7fcd.js";import"./refusal-45a989d4.js";import"./index.esm-29b873a2.js";import"./generic-972994fb.js";import"./service-e178ddc5.js";import"./helpers-9f3bdf36.js";import"./helpers-1b7a9838.js";import"./helpers-491ef55a.js";import"./helpers-662deb59.js";import"./helpers-bbfa2101.js";import"./settings-fb41674a.js";const Ee={__name:"detail",setup(Z){const S=H(),m=U();j();const F=q(),h=X();let a=l(!0),o=L(P.newForm()),n=l(c.language.pt);l([]);let B=L(P.formRules()),p=l(0),d=l(0),R=l(!1),C=l(null);const T=E(()=>m.path.toLowerCase().indexOf("tarefas")>-1),y=E(()=>m.path.toLowerCase().indexOf("pesquisa")>-1),V=l(x.havePermission(c.permissions.pointOfCare.createEdit));async function N(){a.value=!0;const t=await I.getById(p.value,d.value);O.validateResponse(t,null,()=>{Object.assign(o,t.data),F.emit(i.emitter.OBJECT_LOADED,t.data)}),a.value=!1}async function k(){a.value=!0;const t=await I.getLists(n.value);O.validateResponse(t,null,()=>{h.setLists(t.data)}),a.value=!1}z(async()=>{p.value=O.decodeId(m.params.pointOfCareId),d.value=O.decodeId(m.params.pointOfCareVersion),R.value=m.params.association,!p.value||!d.value?S.push({name:i.router.BACKOFFICE_POINT_OF_CARE_PAGE.name}):(await k(),await N(),w.value&&(await C.value.getHistory(),C.value.setActiveVersion(d.value),C.value.setStep()),R.value&&document.querySelectorAll(".nav-tabs button.nav-link").forEach(r=>{if(r.id=="services-tab"){const u=new J(r);u.show(),F.emit(i.emitter.TAB_CLICK,u)}}))}),Q(()=>n.value,()=>{k()});const w=E(()=>!T.value&&V.value&&(o.recordStateTypeId==c.recordStateType.published||o.recordStateTypeId==c.recordStateType.extinct||o.recordStateTypeId==c.recordStateType.obsolete));return(t,r)=>{const u=b("breadcrumb-item"),K=b("breadcrumb"),M=b("ctimeline"),G=b("page");return f(),_(G,{title:t._lang.backoffice.pointOfCare.detailPageTitle},{breadcrumb:g(()=>[v(K,{"has-home":!e(y)},{default:g(()=>[e(T)?(f(),_(u,{key:0,label:t._lang.backoffice.tasks.breadcrumbTitle,"router-path":e(i).router.BACKOFFICE_TASKS_PAGE.path},null,8,["label","router-path"])):e(y)?(f(),_(u,{key:1,label:t._lang.search.pageTitle,"router-path":e(i).router.HOME_PAGE.path},null,8,["label","router-path"])):(f(),_(u,{key:2,label:t._lang.backoffice.pointOfCare.breadcrumbTitle,"router-path":e(i).router.BACKOFFICE_POINT_OF_CARE_PAGE.path},null,8,["label","router-path"])),v(u,{label:t._lang.backoffice.pointOfCare.detailPageTitle},null,8,["label"])]),_:1},8,["has-home"])]),actions:g(()=>[v(Y,{loading:e(a),"onUpdate:loading":r[0]||(r[0]=s=>A(a)?a.value=s:a=s),selectedLang:e(n),"onUpdate:selectedLang":r[1]||(r[1]=s=>A(n)?n.value=s:n=s),service:e(I),backRoute:e(i).router.BACKOFFICE_POINT_OF_CARE_PAGE.name,editRoute:e(i).router.BACKOFFICE_EDIT_POINT_OF_CARE_PAGE.name,itemIdField:"pointOfCareId",itemVersionField:"pointOfCareVersion",itemId:e(p),itemVersion:e(d),formModel:e(o),"show-record-state-actions":e(T),store:e(h)},null,8,["loading","selectedLang","service","backRoute","editRoute","itemId","itemVersion","formModel","show-record-state-actions","store"])]),default:g(()=>[e(w)?(f(),_(M,{key:0,itemId:e(p),detailRoute:e(i).router.BACKOFFICE_DETAIL_POINT_OF_CARE_PAGE.name,service:e(I),versionFieldName:"pointOfCareVersion",dateFieldName:"pointOfCareApprovedDate",detailRouteIdField:"pointOfCareId",detailRouteVersionField:"pointOfCareVersion",ref_key:"timeline",ref:C},null,8,["itemId","detailRoute","service"])):W("",!0),v(D,{formModel:e(o),"onUpdate:formModel":r[2]||(r[2]=s=>A(o)?o.value=s:o=s),disabled:!0,validateForm:!1,loading:e(a),selectedLang:e(n),rules:e(B),isExternalEdit:!1,showProgress:!1},null,8,["formModel","loading","selectedLang","rules"])]),_:1},8,["title"])}}};export{Ee as default};