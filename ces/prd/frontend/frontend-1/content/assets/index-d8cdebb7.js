import{_ as W}from"./delete-confirm-ea46e080.js";import{g as Y,i as $,r as d,v as r,j as T,u as _,o as x,l as o,c as H,m as J,n as i,q as a,s as t,V as Q,Y as X,L as f,C as E}from"./index-864107e7.js";import{l as w}from"./legislation-3cdd1e44.js";const ae={__name:"index",setup(Z){const g=Y();$();let c=d(!1),m=d([]),p=d([]),b=d(r.tableSelectedState.none),n=T(C()),I=d(_.createEmptyDataSource());T({});let y=d(0);function C(){return{pageNumber:1,sortBy:"legislationId",name:null,code:null}}x(async()=>{await u()});function A(e){g.push({name:E.router.BACKOFFICE_SETTINGS_EDIT_LEGISLATION_PAGE.name,params:{legislationId:_.encodeId(e.legislationId)}})}async function N(){Object.assign(n,C()),await k()}async function k(){n.pageNumber=1,await u()}function V(){g.push({name:E.router.BACKOFFICE_SETTINGS_CREATE_LEGISLATION_PAGE.name})}async function B(e){n.sortBy=e,await u()}async function G(e){n.pageNumber=e,await u()}async function u(){c.value=!0,n.legislationId?n.legislationIds=[n.legislationId]:n.legislationIds=[];let e=await w.search(n);_.validateResponse(e,null,()=>{I.value=e.data}),c.value=!1}async function L(e){y.value=e.legislationId}async function F(){_.closeModalById("confirm-delete"),await u()}return(e,s)=>{const O=o("breadcrumb-item"),U=o("breadcrumb"),h=o("cbutton"),S=o("form-field"),M=o("row"),P=o("cfilter"),v=o("ccolumn"),R=o("table-action-edit"),z=o("table-action-delete"),D=o("ctable"),j=o("card"),K=o("page");return H(),J(K,{title:e._lang.backoffice.settings.legislation.pageTitle},{breadcrumb:i(()=>[a(U,{"has-home":!0},{default:i(()=>[a(O,{label:e._lang.backoffice.settings.legislation.breadcrumbTitle},null,8,["label"])]),_:1})]),actions:i(()=>[a(h,{class:"col-12 col-sm-auto",type:t(r).buttonType.secondary,size:t(r).buttonSize.medium,title:e._lang.common.toAdd,icon:Q,onClick:V},null,8,["type","size","title"])]),default:i(()=>[a(j,{shadow:!0},{body:i(()=>[a(P,{title:e._lang.common.filter,disabled:t(c),"clear-click":N,"apply-click":k,loading:t(c),collapsed:!0},{default:i(()=>[a(M,null,{default:i(()=>[a(S,{id:"code",modelValue:t(n).code,"onUpdate:modelValue":s[0]||(s[0]=l=>t(n).code=l),class:"mb-3 col-6",label:e._lang.label.code,type:t(r).inputs.text,maxlength:45,disabled:t(c)},null,8,["modelValue","label","type","disabled"]),a(S,{id:"name",modelValue:t(n).name,"onUpdate:modelValue":s[1]||(s[1]=l=>t(n).name=l),class:"mb-3 col-6",label:e._lang.label.name,type:t(r).inputs.text,maxlength:45,disabled:t(c)},null,8,["modelValue","label","type","disabled"])]),_:1})]),_:1},8,["title","disabled","loading"]),a(X,null,{default:i(()=>[a(D,{onSort:B,onChangePage:G,selectedItems:t(m),"onUpdate:selectedItems":s[2]||(s[2]=l=>f(m)?m.value=l:m=l),unselectedItems:t(p),"onUpdate:unselectedItems":s[3]||(s[3]=l=>f(p)?p.value=l:p=l),selectedState:t(b),"onUpdate:selectedState":s[4]||(s[4]=l=>f(b)?b.value=l:b=l),data:t(I),checkbox:!1,loading:t(c),defaultSort:"legislationId"},{columns:i(()=>[a(v,{name:e._lang.label.code,field:"code",sortable:!0},null,8,["name"]),a(v,{name:e._lang.label.name,field:"name",sortable:!0},null,8,["name"])]),actions:i(l=>[a(R,{onClick:q=>A(l.item)},null,8,["onClick"]),a(z,{onClick:q=>L(l.item)},null,8,["onClick"])]),_:1},8,["selectedItems","unselectedItems","selectedState","data","loading"])]),_:1})]),_:1}),a(W,{"item-id":t(y),resource:e._lang.backoffice.settings.legislation,action:F,service:t(w)},null,8,["item-id","resource","service"])]),_:1},8,["title"])}}};export{ae as default};