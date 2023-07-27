import{h as O,q as D,i as y,M as q,v as p,J,j as f,s as x,K as H,r as a,o as h,c as w,w as n,a as t,m as o,S as Q,y as W,l as E}from"./index-a3ba1ed7.js";import{u as I}from"./users-e18dd293.js";import{u as X}from"./users-a644a4be.js";const ne={__name:"index",setup(Y){const S=O();D();const N=y(q.havePermission(p.permissions.users.createEdit)),_=X(),T=J();let b=y(f.createEmptyDataSource()),l=y(!1),s=x(C());async function L(){l.value=!0;const e=await I.getLists(T.getLanguage);f.validateResponse(e,null,()=>{_.setLists(e.data)}),l.value=!1}H(async()=>{await L(),await c()});function C(){return{pageNumber:1,sortBy:"name",usersIds:null,name:null,active:null,deleted:null}}async function c(){l.value=!0;let e=await I.search(s);f.validateResponse(e,null,async()=>{b.value=e.data,await F()}),l.value=!1}async function R(e){s.sortBy=e,await c()}async function B(e){s.pageNumber=e,await c()}function z(e){S.push({name:E.router.BACKOFFICE_SETTINGS_USERS_EDIT_PAGE.name,params:{userId:f.encodeId(e.userId)}})}function A(){S.push({name:E.router.BACKOFFICE_SETTINGS_USERS_CREATE_PAGE.name})}async function P(){Object.assign(s,C()),await v()}async function v(){s.pageNumber=1,await c()}async function F(){b.value.items.forEach(e=>{let i=[];e.profiles.forEach(u=>{const m=_.profileList.find(r=>r.value===u.profileId),d=_.organizationList.find(r=>r.value3.id===u.organizationId);m&&d&&i.push(`${m.label} (${d.label})`)}),e.profilesStr="",e.profilesStr=i.join(", ")})}return(e,i)=>{const u=a("breadcrumb-item"),m=a("breadcrumb"),d=a("cbutton"),r=a("form-field"),V=a("row"),G=a("cfilter"),k=a("ccolumn"),M=a("table-action-edit"),U=a("ctable"),$=a("container-wrapper"),j=a("card"),K=a("page");return h(),w(K,{title:e._lang.backoffice.settings.users.pageTitle},{breadcrumb:n(()=>[t(m,{"has-home":!0},{default:n(()=>[t(u,{label:e._lang.backoffice.settings.users.pageTitle},null,8,["label"])]),_:1})]),actions:n(()=>[N.value?(h(),w(d,{key:0,class:"col-12 col-sm-auto",type:o(p).buttonType.secondary,size:o(p).buttonSize.medium,title:e._lang.common.toAdd,icon:Q,onClick:A},null,8,["type","size","title"])):W("",!0)]),default:n(()=>[t(j,{shadow:!0},{body:n(()=>[t(G,{title:e._lang.common.filter,disabled:o(l),"clear-click":P,"apply-click":v,loading:o(l),collapsed:!0},{default:n(()=>[t(V,null,{default:n(()=>[t(r,{id:"perfilName",modelValue:o(s).name,"onUpdate:modelValue":i[0]||(i[0]=g=>o(s).name=g),class:"mb-3 col-12",label:e._lang.label.perfilName,type:o(p).inputs.text,maxlength:150,disabled:o(l)},null,8,["modelValue","label","type","disabled"])]),_:1})]),_:1},8,["title","disabled","loading"]),t($,null,{default:n(()=>[t(U,{onSort:R,onChangePage:B,data:o(b),checkbox:!1,loading:o(l),defaultSort:"userId"},{columns:n(()=>[t(k,{name:e._lang.label.name,field:"name",sortable:!0},null,8,["name"]),t(k,{name:e._lang.label.profile,field:"profilesStr",sortable:!1},null,8,["name"])]),actions:n(g=>[t(M,{onClick:Z=>z(g.item)},null,8,["onClick"])]),_:1},8,["data","loading"])]),_:1})]),_:1})]),_:1},8,["title"])}}};export{ne as default};
