import{g as L,i as M,r as i,N as D,t as r,u as m,H as K,L as U,k as a,c as g,l as y,m as t,p as n,q as o,U as $,z as j,A as C}from"./index-46c4d077.js";import{p as q}from"./profiles-03cabf5d.js";const W={__name:"index",setup(x){const d=L();M();const k=i(D.havePermission(r.permissions.profiles.createEdit));let p=i(m.createEmptyDataSource()),c=i(!1),l=K(_());i([]),U(async()=>{await s()});function _(){return{pageNumber:1,sortBy:"name",profilesIds:null,name:null,active:null,deleted:null}}async function s(){c.value=!0;let e=await q.search(l);m.validateResponse(e,null,()=>{p.value=e.data}),c.value=!1}async function E(e){l.sortBy=e,await s()}async function h(e){l.pageNumber=e,await s()}function w(e){d.push({name:C.router.BACKOFFICE_SETTINGS_PROFILE_EDIT_PAGE.name,params:{profileId:m.encodeId(e.profileId)}})}function I(){d.push({name:C.router.BACKOFFICE_SETTINGS_PROFILE_CREATE_PAGE.name})}async function v(){Object.assign(l,_()),await f()}async function f(){l.pageNumber=1,await s()}return(e,b)=>{const N=a("breadcrumb-item"),S=a("breadcrumb"),T=a("cbutton"),A=a("form-field"),B=a("row"),F=a("cfilter"),P=a("ccolumn"),O=a("table-action-edit"),R=a("ctable"),V=a("container-wrapper"),z=a("card"),G=a("page");return g(),y(G,{title:e._lang.backoffice.settings.profiles.pageTitle},{breadcrumb:t(()=>[n(S,{"has-home":!0},{default:t(()=>[n(N,{label:e._lang.backoffice.settings.profiles.pageTitle},null,8,["label"])]),_:1})]),actions:t(()=>[k.value?(g(),y(T,{key:0,class:"col-12 col-sm-auto",type:o(r).buttonType.secondary,size:o(r).buttonSize.medium,title:e._lang.common.toAdd,icon:$,onClick:I},null,8,["type","size","title"])):j("",!0)]),default:t(()=>[n(z,{shadow:!0},{body:t(()=>[n(F,{title:e._lang.common.filter,disabled:o(c),"clear-click":v,"apply-click":f,loading:o(c),collapsed:!0},{default:t(()=>[n(B,null,{default:t(()=>[n(A,{id:"perfilName",modelValue:o(l).name,"onUpdate:modelValue":b[0]||(b[0]=u=>o(l).name=u),class:"mb-3 col-12",label:e._lang.label.perfilName,type:o(r).inputs.text,maxlength:150,disabled:o(c)},null,8,["modelValue","label","type","disabled"])]),_:1})]),_:1},8,["title","disabled","loading"]),n(V,null,{default:t(()=>[n(R,{onSort:E,onChangePage:h,data:o(p),checkbox:!1,loading:o(c),defaultSort:"profileId"},{columns:t(()=>[n(P,{name:e._lang.label.name,field:"name",sortable:!0},null,8,["name"])]),actions:t(u=>[n(O,{onClick:H=>w(u.item)},null,8,["onClick"])]),_:1},8,["data","loading"])]),_:1})]),_:1})]),_:1},8,["title"])}}};export{W as default};