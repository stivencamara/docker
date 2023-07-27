import{_ as L}from"./delete-confirm-815e8228.js";import{h as W,q as $,i as d,v as r,s as S,j as _,b as H,r as l,o as J,c as Q,w as c,a as o,m as t,S as X,U as Z,z as f,l as T}from"./index-d8a56bcc.js";import{e as w}from"./economic-activity-5208f575.js";import"./helpers-d89764d1.js";import"./index.esm-d77c3574.js";const le={__name:"index",setup(x){const y=W();$();let s=d(!1),u=d([]),p=d([]),b=d(r.tableSelectedState.none),a=S(v()),g=d(_.createEmptyDataSource());S({});let I=d(0);function v(){return{pageNumber:1,sortBy:"economicActivityId",economicActivityId:null,economicActivityIds:[],caeDesignation:null}}H(async()=>{await m()});function E(e){y.push({name:T.router.BACKOFFICE_SETTINGS_EDIT_ECONOMICACTIVITY_PAGE.name,params:{economicActivityId:_.encodeId(e.economicActivityId)}})}async function V(){Object.assign(a,v()),await C()}async function C(){a.pageNumber=1,await m()}function D(){y.push({name:T.router.BACKOFFICE_SETTINGS_CREATE_ECONOMICACTIVITY_PAGE.name})}async function N(e){a.sortBy=e,await m()}async function B(e){a.pageNumber=e,await m()}async function m(){s.value=!0,a.economicActivityId?a.economicActivityIds=[a.economicActivityId]:a.economicActivityIds=[];let e=await w.search(a);_.validateResponse(e,null,()=>{g.value=e.data}),s.value=!1}async function O(e){I.value=e.economicActivityId}async function M(){_.closeModalById("confirm-delete"),await m()}return(e,i)=>{const U=l("breadcrumb-item"),h=l("breadcrumb"),F=l("cbutton"),A=l("form-field"),z=l("row"),G=l("cfilter"),k=l("ccolumn"),P=l("table-action-edit"),R=l("table-action-delete"),j=l("ctable"),K=l("card"),Y=l("page");return J(),Q(Y,{title:e._lang.backoffice.settings.economicActivity.pageTitle},{breadcrumb:c(()=>[o(h,{"has-home":!0},{default:c(()=>[o(U,{label:e._lang.backoffice.settings.economicActivity.breadcrumbTitle},null,8,["label"])]),_:1})]),actions:c(()=>[o(F,{class:"col-12 col-sm-auto",type:t(r).buttonType.secondary,size:t(r).buttonSize.medium,title:e._lang.common.toAdd,icon:X,onClick:D},null,8,["type","size","title"])]),default:c(()=>[o(K,{shadow:!0},{body:c(()=>[o(G,{title:e._lang.common.filter,disabled:t(s),"clear-click":V,"apply-click":C,loading:t(s),collapsed:!0},{default:c(()=>[o(z,null,{default:c(()=>[o(A,{id:"economicActivityIds",modelValue:t(a).economicActivityId,"onUpdate:modelValue":i[0]||(i[0]=n=>t(a).economicActivityId=n),class:"mb-3 col-12 col-md-6",label:e._lang.label.id,type:t(r).inputs.number,maxlength:45,disabled:t(s)},null,8,["modelValue","label","type","disabled"]),o(A,{id:"caeDesignation",modelValue:t(a).caeDesignation,"onUpdate:modelValue":i[1]||(i[1]=n=>t(a).caeDesignation=n),class:"mb-3 col-12 col-md-6",label:e._lang.label.designation,type:t(r).inputs.text,maxlength:45,disabled:t(s)},null,8,["modelValue","label","type","disabled"])]),_:1})]),_:1},8,["title","disabled","loading"]),o(Z,null,{default:c(()=>[o(j,{onSort:N,onChangePage:B,selectedItems:t(u),"onUpdate:selectedItems":i[2]||(i[2]=n=>f(u)?u.value=n:u=n),unselectedItems:t(p),"onUpdate:unselectedItems":i[3]||(i[3]=n=>f(p)?p.value=n:p=n),selectedState:t(b),"onUpdate:selectedState":i[4]||(i[4]=n=>f(b)?b.value=n:b=n),data:t(g),checkbox:!1,loading:t(s),defaultSort:"economicActivityId"},{columns:c(()=>[o(k,{name:e._lang.label.id,field:"economicActivityId",sortable:!0},null,8,["name"]),o(k,{name:e._lang.label.designation,field:"caeDesignation",sortable:!0},null,8,["name"])]),actions:c(n=>[o(P,{onClick:q=>E(n.item)},null,8,["onClick"]),o(R,{onClick:q=>O(n.item)},null,8,["onClick"])]),_:1},8,["selectedItems","unselectedItems","selectedState","data","loading"])]),_:1})]),_:1}),o(L,{"item-id":t(I),resource:e._lang.backoffice.settings.economicActivity,action:M,service:t(w)},null,8,["item-id","resource","service"])]),_:1},8,["title"])}}};export{le as default};