import{g as M,i as K,r as i,M as L,s as r,u as m,E as D,K as $,k as a,c as g,l as y,w as t,n,p as o,T as j,y as x,z as C}from"./index-cce4225b.js";import{p as U}from"./profiles-e4a7bb36.js";const W={__name:"index",setup(q){const d=M();K();const k=i(L.havePermission(r.permissions.profiles.createEdit));let p=i(m.createEmptyDataSource()),c=i(!1),l=D(_());i([]),$(async()=>{await s()});function _(){return{pageNumber:1,sortBy:"name",profilesIds:null,name:null,active:null,deleted:null}}async function s(){c.value=!0;let e=await U.search(l);m.validateResponse(e,null,()=>{p.value=e.data}),c.value=!1}async function E(e){l.sortBy=e,await s()}async function w(e){l.pageNumber=e,await s()}function h(e){d.push({name:C.router.BACKOFFICE_SETTINGS_PROFILE_EDIT_PAGE.name,params:{profileId:m.encodeId(e.profileId)}})}function I(){d.push({name:C.router.BACKOFFICE_SETTINGS_PROFILE_CREATE_PAGE.name})}async function v(){Object.assign(l,_()),await f()}async function f(){l.pageNumber=1,await s()}return(e,b)=>{const S=a("breadcrumb-item"),T=a("breadcrumb"),N=a("cbutton"),B=a("form-field"),F=a("row"),P=a("cfilter"),A=a("ccolumn"),O=a("table-action-edit"),R=a("ctable"),V=a("container-wrapper"),z=a("card"),G=a("page");return g(),y(G,{title:e._lang.backoffice.settings.profiles.pageTitle},{breadcrumb:t(()=>[n(T,{"has-home":!0},{default:t(()=>[n(S,{label:e._lang.backoffice.settings.profiles.pageTitle},null,8,["label"])]),_:1})]),actions:t(()=>[k.value?(g(),y(N,{key:0,class:"col-12 col-sm-auto",type:o(r).buttonType.secondary,size:o(r).buttonSize.medium,title:e._lang.common.toAdd,icon:j,onClick:I},null,8,["type","size","title"])):x("",!0)]),default:t(()=>[n(z,{shadow:!0},{body:t(()=>[n(P,{title:e._lang.common.filter,disabled:o(c),"clear-click":v,"apply-click":f,loading:o(c),collapsed:!0},{default:t(()=>[n(F,null,{default:t(()=>[n(B,{id:"perfilName",modelValue:o(l).name,"onUpdate:modelValue":b[0]||(b[0]=u=>o(l).name=u),class:"mb-3 col-12",label:e._lang.label.perfilName,type:o(r).inputs.text,maxlength:150,disabled:o(c)},null,8,["modelValue","label","type","disabled"])]),_:1})]),_:1},8,["title","disabled","loading"]),n(V,null,{default:t(()=>[n(R,{onSort:E,onChangePage:w,data:o(p),checkbox:!1,loading:o(c),defaultSort:"profileId"},{columns:t(()=>[n(A,{name:e._lang.label.name,field:"name",sortable:!0},null,8,["name"])]),actions:t(u=>[n(O,{onClick:H=>h(u.item)},null,8,["onClick"])]),_:1},8,["data","loading"])]),_:1})]),_:1})]),_:1},8,["title"])}}};export{W as default};
