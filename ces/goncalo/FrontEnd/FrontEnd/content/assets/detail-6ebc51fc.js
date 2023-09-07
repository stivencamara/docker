import{g as M,f as G,i as D,h as H,r as s,E as w,s as T,j as F,M as U,K as Y,u as v,z as o,N as j,k as _,c as d,l as c,w as I,n as b,p as e,H as h,y as q}from"./index-4fe030fb.js";import{o as E}from"./organization-660efcd3.js";import{u as J}from"./organization-ee9170b1.js";import{o as L}from"./helpers-31f34bd7.js";import{_ as x}from"./detail-actions-a4d1a3d7.js";import{_ as Q}from"./form-2a355099.js";import"./helpers-79f72589.js";import"./index.esm-bce4ceba.js";import"./refusal-7a8f2f5e.js";import"./helpers-58870a2d.js";import"./helpers-f7854627.js";import"./helpers-7189282a.js";import"./helpers-8b4bcdba.js";import"./helpers-45818705.js";import"./settings-364df236.js";import"./contacts-e1f3718d.js";import"./index.esm-cfa4c1f7.js";import"./location-218f3a85.js";import"./address-5eeef571.js";import"./generic-31c2de5a.js";import"./point-of-care-9174b5ec.js";import"./service-6ce3c872.js";import"./document-9e7447eb.js";const Ee={__name:"detail",setup(W){const S=M(),p=G();D();const V=H(),z=J(),l=s(0),u=s(0);let r=s(!0),i=w(L.newForm()),n=s(T.language.pt);s([]);let y=w(L.formRules()),g=s(null);const C=F(()=>p.path.toLowerCase().indexOf("tarefas")>-1),A=F(()=>p.path.toLowerCase().indexOf("pesquisa")>-1),k=s(U.havePermission(T.permissions.organization.createEdit));Y(async()=>{l.value=v.decodeId(p.params.organizationId),u.value=v.decodeId(p.params.organizationVersion),!l.value||!u.value?S.push({name:o.router.BACKOFFICE_ENTITIES_PAGE.name}):(await R(),await B(),O.value&&(await g.value.getHistory(),g.value.setActiveVersion(u.value),g.value.setStep()))});const O=F(()=>!C.value&&k.value&&i.recordStateTypeId!=T.recordStateType.draft);async function B(){const t=await E.getById(l.value,u.value);v.validateResponse(t,null,()=>{Object.assign(i,t.data),V.emit(o.emitter.OBJECT_LOADED,t.data)})}async function R(){r.value=!0;const t=await E.getLists(n.value);v.validateResponse(t,null,()=>{z.setLists(t.data)}),r.value=!1}return j(()=>n.value,()=>{R()}),(t,m)=>{const f=_("breadcrumb-item"),N=_("breadcrumb"),K=_("ctimeline"),P=_("page");return d(),c(P,{title:t._lang.backoffice.entities.detailPageTitle},{breadcrumb:I(()=>[b(N,{"has-home":!e(A)},{default:I(()=>[e(C)?(d(),c(f,{key:0,label:t._lang.backoffice.tasks.breadcrumbTitle,"router-path":e(o).router.BACKOFFICE_TASKS_PAGE.path},null,8,["label","router-path"])):e(A)?(d(),c(f,{key:1,label:t._lang.search.pageTitle,"router-path":e(o).router.BACKOFFICE_SEARCH_HISTORY_PAGE.path},null,8,["label","router-path"])):(d(),c(f,{key:2,label:t._lang.backoffice.entities.breadcrumbTitle,"router-path":e(o).router.BACKOFFICE_ENTITIES_PAGE.path},null,8,["label","router-path"])),b(f,{label:t._lang.backoffice.entities.detail},null,8,["label"])]),_:1},8,["has-home"])]),actions:I(()=>[b(x,{loading:e(r),"onUpdate:loading":m[0]||(m[0]=a=>h(r)?r.value=a:r=a),selectedLang:e(n),"onUpdate:selectedLang":m[1]||(m[1]=a=>h(n)?n.value=a:n=a),service:e(E),backRoute:e(o).router.BACKOFFICE_ENTITIES_PAGE.name,editRoute:e(o).router.BACKOFFICE_EDIT_ENTITY_PAGE.name,itemIdField:"organizationId",itemVersionField:"organizationVersion",itemId:l.value,itemVersion:u.value,formModel:e(i),"show-record-state-actions":e(C),store:e(z)},null,8,["loading","selectedLang","service","backRoute","editRoute","itemId","itemVersion","formModel","show-record-state-actions","store"])]),default:I(()=>[e(O)?(d(),c(K,{key:0,itemId:l.value,detailRoute:e(o).router.BACKOFFICE_DETAIL_ENTITY_PAGE.name,service:e(E),versionFieldName:"organizationVersion",dateFieldName:"organizationApprovedDate",detailRouteIdField:"organizationId",detailRouteVersionField:"organizationVersion",ref_key:"timeline",ref:g},null,8,["itemId","detailRoute","service"])):q("",!0),b(Q,{formModel:e(i),"onUpdate:formModel":m[2]||(m[2]=a=>h(i)?i.value=a:i=a),disabled:!0,validateForm:!0,selectedLang:e(n),rules:e(y),loading:e(r),organizationId:l.value,organizationVersion:u.value,"show-progress":!1,vuelidate:null,canCreate:k.value},null,8,["formModel","selectedLang","rules","loading","organizationId","organizationVersion","canCreate"])]),_:1},8,["title"])}}};export{Ee as default};