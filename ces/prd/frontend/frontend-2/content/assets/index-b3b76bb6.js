import{g as J,i as Q,r as d,N as W,v as n,K as X,u as r,j as Y,L as Z,o as x,l as t,c as w,m as I,n as o,q as a,s,U as ee,A as te,M as ae,B}from"./index-957232d9.js";import{u as N}from"./users-79ad1321.js";import{u as se}from"./users-b0b496cf.js";import{b as ne}from"./helpers-e58dedc6.js";import"./index.esm-b6709f5c.js";const me={__name:"index",setup(oe){const y=J(),O=Q(),T=d(W.havePermission(n.permissions.users.createEdit)),b=se(),A=X();let m=d(r.createEmptyDataSource()),l=d(!1),i=Y(E()),k=d([]),C=d([]);Z(async()=>{await L(),await p()}),x(()=>{k.value=r.convertEnumToArray(O.enums.userStatusOptions),C.value=r.concatItemsBadge(k.value,ne.userStatusBadgeOptions)});async function L(){l.value=!0;const e=await N.getLists(A.getLanguage);r.validateResponse(e,null,()=>{b.setLists(e.data)}),l.value=!1}function E(){return{pageNumber:1,sortBy:"name",usersIds:null,name:null,active:null,deleted:null}}async function p(){l.value=!0;let e=await N.search(i);r.validateResponse(e,null,async()=>{m.value=e.data,await M(),await V()}),l.value=!1}async function R(e){i.sortBy=e,await p()}async function z(e){i.pageNumber=e,await p()}function P(e){y.push({name:B.router.BACKOFFICE_SETTINGS_USERS_EDIT_PAGE.name,params:{userId:r.encodeId(e.userId)}})}function U(){y.push({name:B.router.BACKOFFICE_SETTINGS_USERS_CREATE_PAGE.name})}async function F(){Object.assign(i,E()),await h()}async function h(){i.pageNumber=1,await p()}async function M(){m.value.items.forEach(e=>{let c=[];e.profiles.forEach(f=>{const _=b.profileList.find(u=>u.value===f.profileId),g=b.organizationList.find(u=>u.value3.id===f.organizationId);_&&g&&c.push(`${_.label} (${g.label})`)}),e.profilesStr="",e.profilesStr=c.join(", ")})}async function V(){m.value.items.forEach(e=>{e.status=n.userStatusOptions.active,e.active&&!e.blocked&&!e.deleted?e.status=n.userStatusOptions.active:e.blocked?e.status=n.userStatusOptions.blocked:e.deleted?e.status=n.userStatusOptions.deleted:e.active||(e.status=n.userStatusOptions.inactive)})}return(e,c)=>{const f=t("breadcrumb-item"),_=t("breadcrumb"),g=t("cbutton"),u=t("form-field"),G=t("row"),$=t("cfilter"),S=t("ccolumn"),j=t("table-action-edit"),K=t("ctable"),D=t("container-wrapper"),q=t("card"),H=t("page");return w(),I(H,{title:e._lang.backoffice.settings.users.pageTitle},{breadcrumb:o(()=>[a(_,{"has-home":!0},{default:o(()=>[a(f,{label:e._lang.backoffice.settings.users.pageTitle},null,8,["label"])]),_:1})]),actions:o(()=>[T.value?(w(),I(g,{key:0,class:"col-12 col-sm-auto",type:s(n).buttonType.secondary,size:s(n).buttonSize.medium,title:e._lang.common.toAdd,icon:ee,onClick:U},null,8,["type","size","title"])):te("",!0)]),default:o(()=>[a(q,{shadow:!0},{body:o(()=>[a($,{title:e._lang.common.filter,disabled:s(l),"clear-click":F,"apply-click":h,loading:s(l),collapsed:!0},{default:o(()=>[a(G,null,{default:o(()=>[a(u,{id:"perfilName",modelValue:s(i).name,"onUpdate:modelValue":c[0]||(c[0]=v=>s(i).name=v),class:"mb-3 col-12",label:e._lang.label.displayName,type:s(n).inputs.text,maxlength:150,disabled:s(l)},null,8,["modelValue","label","type","disabled"])]),_:1})]),_:1},8,["title","disabled","loading"]),a(D,null,{default:o(()=>[a(K,{onSort:R,onChangePage:z,data:s(m),checkbox:!1,loading:s(l),defaultSort:"userId"},{columns:o(()=>[a(S,{name:e._lang.label.displayName,field:"displayName",sortable:!0},null,8,["name"]),a(S,{name:e._lang.label.profile,field:"profilesStr",sortable:!1},null,8,["name"]),a(S,{name:e._lang.label.state,field:"status",align:s(n).columnAlign.center,custom:ae,options:s(C),sortable:!1},null,8,["name","align","options"])]),actions:o(v=>[a(j,{onClick:le=>P(v.item)},null,8,["onClick"])]),_:1},8,["data","loading"])]),_:1})]),_:1})]),_:1},8,["title"])}}};export{me as default};
