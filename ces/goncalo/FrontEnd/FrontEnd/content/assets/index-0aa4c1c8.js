import{g as j,i as D,r as y,M as J,s as p,J as q,u as f,E as x,K as H,k as a,c as w,l as E,w as n,n as t,p as l,T as Q,y as W,z as h}from"./index-17cd38fc.js";import{u as I}from"./users-891a3460.js";import{u as X}from"./users-52e475c8.js";const ne={__name:"index",setup(Y){const S=j();D();const N=y(J.havePermission(p.permissions.users.createEdit)),_=X(),T=q();let b=y(f.createEmptyDataSource()),o=y(!1),s=x(C());async function L(){o.value=!0;const e=await I.getLists(T.getLanguage);f.validateResponse(e,null,()=>{_.setLists(e.data)}),o.value=!1}H(async()=>{await L(),await c()});function C(){return{pageNumber:1,sortBy:"name",usersIds:null,name:null,active:null,deleted:null}}async function c(){o.value=!0;let e=await I.search(s);f.validateResponse(e,null,async()=>{b.value=e.data,await F()}),o.value=!1}async function R(e){s.sortBy=e,await c()}async function z(e){s.pageNumber=e,await c()}function B(e){S.push({name:h.router.BACKOFFICE_SETTINGS_USERS_EDIT_PAGE.name,params:{userId:f.encodeId(e.userId)}})}function A(){S.push({name:h.router.BACKOFFICE_SETTINGS_USERS_CREATE_PAGE.name})}async function P(){Object.assign(s,C()),await k()}async function k(){s.pageNumber=1,await c()}async function F(){b.value.items.forEach(e=>{let i=[];e.profiles.forEach(u=>{const m=_.profileList.find(r=>r.value===u.profileId),d=_.organizationList.find(r=>r.value3.id===u.organizationId);m&&d&&i.push(`${m.label} (${d.label})`)}),e.profilesStr="",e.profilesStr=i.join(", ")})}return(e,i)=>{const u=a("breadcrumb-item"),m=a("breadcrumb"),d=a("cbutton"),r=a("form-field"),V=a("row"),G=a("cfilter"),v=a("ccolumn"),M=a("table-action-edit"),U=a("ctable"),$=a("container-wrapper"),K=a("card"),O=a("page");return w(),E(O,{title:e._lang.backoffice.settings.users.pageTitle},{breadcrumb:n(()=>[t(m,{"has-home":!0},{default:n(()=>[t(u,{label:e._lang.backoffice.settings.users.pageTitle},null,8,["label"])]),_:1})]),actions:n(()=>[N.value?(w(),E(d,{key:0,class:"col-12 col-sm-auto",type:l(p).buttonType.secondary,size:l(p).buttonSize.medium,title:e._lang.common.toAdd,icon:Q,onClick:A},null,8,["type","size","title"])):W("",!0)]),default:n(()=>[t(K,{shadow:!0},{body:n(()=>[t(G,{title:e._lang.common.filter,disabled:l(o),"clear-click":P,"apply-click":k,loading:l(o),collapsed:!0},{default:n(()=>[t(V,null,{default:n(()=>[t(r,{id:"perfilName",modelValue:l(s).name,"onUpdate:modelValue":i[0]||(i[0]=g=>l(s).name=g),class:"mb-3 col-12",label:e._lang.label.perfilName,type:l(p).inputs.text,maxlength:150,disabled:l(o)},null,8,["modelValue","label","type","disabled"])]),_:1})]),_:1},8,["title","disabled","loading"]),t($,null,{default:n(()=>[t(U,{onSort:R,onChangePage:z,data:l(b),checkbox:!1,loading:l(o),defaultSort:"userId"},{columns:n(()=>[t(v,{name:e._lang.label.displayName,field:"displayName",sortable:!0},null,8,["name"]),t(v,{name:e._lang.label.profile,field:"profilesStr",sortable:!1},null,8,["name"])]),actions:n(g=>[t(M,{onClick:Z=>B(g.item)},null,8,["onClick"])]),_:1},8,["data","loading"])]),_:1})]),_:1})]),_:1},8,["title"])}}};export{ne as default};
