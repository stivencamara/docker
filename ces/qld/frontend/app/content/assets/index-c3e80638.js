import{h as z,q as K,i,M as L,v as r,j as m,s as j,K as D,r as a,o as g,c as y,w as t,a as n,m as o,S as $,y as q,l as C}from"./index-a3ba1ed7.js";import{p as x}from"./profiles-4fa015ae.js";const W={__name:"index",setup(U){const d=z();K();const k=i(L.havePermission(r.permissions.profiles.createEdit));let p=i(m.createEmptyDataSource()),c=i(!1),l=j(_());i([]),D(async()=>{await s()});function _(){return{pageNumber:1,sortBy:"name",profilesIds:null,name:null,active:null,deleted:null}}async function s(){c.value=!0;let e=await x.search(l);m.validateResponse(e,null,()=>{p.value=e.data}),c.value=!1}async function h(e){l.sortBy=e,await s()}async function w(e){l.pageNumber=e,await s()}function E(e){d.push({name:C.router.BACKOFFICE_SETTINGS_PROFILE_EDIT_PAGE.name,params:{profileId:m.encodeId(e.profileId)}})}function v(){d.push({name:C.router.BACKOFFICE_SETTINGS_PROFILE_CREATE_PAGE.name})}async function I(){Object.assign(l,_()),await f()}async function f(){l.pageNumber=1,await s()}return(e,b)=>{const S=a("breadcrumb-item"),N=a("breadcrumb"),T=a("cbutton"),B=a("form-field"),F=a("row"),P=a("cfilter"),A=a("ccolumn"),O=a("table-action-edit"),R=a("ctable"),V=a("container-wrapper"),G=a("card"),M=a("page");return g(),y(M,{title:e._lang.backoffice.settings.profiles.pageTitle},{breadcrumb:t(()=>[n(N,{"has-home":!0},{default:t(()=>[n(S,{label:e._lang.backoffice.settings.profiles.pageTitle},null,8,["label"])]),_:1})]),actions:t(()=>[k.value?(g(),y(T,{key:0,class:"col-12 col-sm-auto",type:o(r).buttonType.secondary,size:o(r).buttonSize.medium,title:e._lang.common.toAdd,icon:$,onClick:v},null,8,["type","size","title"])):q("",!0)]),default:t(()=>[n(G,{shadow:!0},{body:t(()=>[n(P,{title:e._lang.common.filter,disabled:o(c),"clear-click":I,"apply-click":f,loading:o(c),collapsed:!0},{default:t(()=>[n(F,null,{default:t(()=>[n(B,{id:"perfilName",modelValue:o(l).name,"onUpdate:modelValue":b[0]||(b[0]=u=>o(l).name=u),class:"mb-3 col-12",label:e._lang.label.perfilName,type:o(r).inputs.text,maxlength:150,disabled:o(c)},null,8,["modelValue","label","type","disabled"])]),_:1})]),_:1},8,["title","disabled","loading"]),n(V,null,{default:t(()=>[n(R,{onSort:h,onChangePage:w,data:o(p),checkbox:!1,loading:o(c),defaultSort:"profileId"},{columns:t(()=>[n(A,{name:e._lang.label.name,field:"name",sortable:!0},null,8,["name"])]),actions:t(u=>[n(O,{onClick:H=>E(u.item)},null,8,["onClick"])]),_:1},8,["data","loading"])]),_:1})]),_:1})]),_:1},8,["title"])}}};export{W as default};
