import{s as L,z as M,r as i,U as x,i as r,u as m,a as D,J as K,b as a,o as g,l as y,w as t,e as n,g as o,S as U,B as $,x as C}from"./index-5b4ebf84.js";import{p as j}from"./profiles-49e37a13.js";const W={__name:"index",setup(J){const d=L();M();const k=i(x.havePermission(r.permissions.profiles.createEdit));let p=i(m.createEmptyDataSource()),c=i(!1),l=D(_());i([]),K(async()=>{await s()});function _(){return{pageNumber:1,sortBy:"name",profilesIds:null,name:null,active:null,deleted:null}}async function s(){c.value=!0;let e=await j.search(l);m.validateResponse(e,null,()=>{p.value=e.data}),c.value=!1}async function w(e){l.sortBy=e,await s()}async function E(e){l.pageNumber=e,await s()}function h(e){d.push({name:C.router.BACKOFFICE_SETTINGS_PROFILE_EDIT_PAGE.name,params:{profileId:m.encodeId(e.profileId)}})}function I(){d.push({name:C.router.BACKOFFICE_SETTINGS_PROFILE_CREATE_PAGE.name})}async function v(){Object.assign(l,_()),await f()}async function f(){l.pageNumber=1,await s()}return(e,b)=>{const S=a("breadcrumb-item"),N=a("breadcrumb"),T=a("cbutton"),B=a("form-field"),F=a("row"),P=a("cfilter"),A=a("ccolumn"),O=a("table-action-edit"),R=a("ctable"),V=a("container-wrapper"),z=a("card"),G=a("page");return g(),y(G,{title:e._lang.backoffice.settings.profiles.pageTitle},{breadcrumb:t(()=>[n(N,{"has-home":!0},{default:t(()=>[n(S,{label:e._lang.backoffice.settings.profiles.pageTitle},null,8,["label"])]),_:1})]),actions:t(()=>[k.value?(g(),y(T,{key:0,class:"col-12 col-sm-auto",type:o(r).buttonType.secondary,size:o(r).buttonSize.medium,title:e._lang.common.toAdd,icon:U,onClick:I},null,8,["type","size","title"])):$("",!0)]),default:t(()=>[n(z,{shadow:!0},{body:t(()=>[n(P,{title:e._lang.common.filter,disabled:o(c),"clear-click":v,"apply-click":f,loading:o(c),collapsed:!0},{default:t(()=>[n(F,null,{default:t(()=>[n(B,{id:"perfilName",modelValue:o(l).name,"onUpdate:modelValue":b[0]||(b[0]=u=>o(l).name=u),class:"mb-3 col-12",label:e._lang.label.perfilName,type:o(r).inputs.text,maxlength:150,disabled:o(c)},null,8,["modelValue","label","type","disabled"])]),_:1})]),_:1},8,["title","disabled","loading"]),n(V,null,{default:t(()=>[n(R,{onSort:w,onChangePage:E,data:o(p),checkbox:!1,loading:o(c),defaultSort:"profileId"},{columns:t(()=>[n(A,{name:e._lang.label.name,field:"name",sortable:!0},null,8,["name"])]),actions:t(u=>[n(O,{onClick:q=>h(u.item)},null,8,["onClick"])]),_:1},8,["data","loading"])]),_:1})]),_:1})]),_:1},8,["title"])}}};export{W as default};
