import{_ as $}from"./delete-confirm-e6e6978f.js";import{g as q,i as x,r as d,s as r,G as v,u as _,o as H,k as o,c as J,l as Q,w as i,n as a,p as t,U as X,W as Y,I as f,z as w}from"./index-c417b10a.js";import{l as E}from"./legislation-da693227.js";const ae={__name:"index",setup(Z){const g=q();x();let c=d(!1),m=d([]),p=d([]),b=d(r.tableSelectedState.none),n=v(C()),I=d(_.createEmptyDataSource());v({});let y=d(0);function C(){return{pageNumber:1,sortBy:"legislationId",name:null,code:null}}H(async()=>{await u()});function A(e){g.push({name:w.router.BACKOFFICE_SETTINGS_EDIT_LEGISLATION_PAGE.name,params:{legislationId:_.encodeId(e.legislationId)}})}async function N(){Object.assign(n,C()),await k()}async function k(){n.pageNumber=1,await u()}function B(){g.push({name:w.router.BACKOFFICE_SETTINGS_CREATE_LEGISLATION_PAGE.name})}async function G(e){n.sortBy=e,await u()}async function V(e){n.pageNumber=e,await u()}async function u(){c.value=!0,n.legislationId?n.legislationIds=[n.legislationId]:n.legislationIds=[];let e=await E.search(n);_.validateResponse(e,null,()=>{I.value=e.data}),c.value=!1}async function U(e){y.value=e.legislationId}async function F(){_.closeModalById("confirm-delete"),await u()}return(e,s)=>{const L=o("breadcrumb-item"),O=o("breadcrumb"),h=o("cbutton"),S=o("form-field"),z=o("row"),M=o("cfilter"),T=o("ccolumn"),P=o("table-action-edit"),R=o("table-action-delete"),D=o("ctable"),K=o("card"),W=o("page");return J(),Q(W,{title:e._lang.backoffice.settings.legislation.pageTitle},{breadcrumb:i(()=>[a(O,{"has-home":!0},{default:i(()=>[a(L,{label:e._lang.backoffice.settings.legislation.breadcrumbTitle},null,8,["label"])]),_:1})]),actions:i(()=>[a(h,{class:"col-12 col-sm-auto",type:t(r).buttonType.secondary,size:t(r).buttonSize.medium,title:e._lang.common.toAdd,icon:X,onClick:B},null,8,["type","size","title"])]),default:i(()=>[a(K,{shadow:!0},{body:i(()=>[a(M,{title:e._lang.common.filter,disabled:t(c),"clear-click":N,"apply-click":k,loading:t(c),collapsed:!0},{default:i(()=>[a(z,null,{default:i(()=>[a(S,{id:"code",modelValue:t(n).code,"onUpdate:modelValue":s[0]||(s[0]=l=>t(n).code=l),class:"mb-3 col-6",label:e._lang.label.code,type:t(r).inputs.text,maxlength:45,disabled:t(c)},null,8,["modelValue","label","type","disabled"]),a(S,{id:"name",modelValue:t(n).name,"onUpdate:modelValue":s[1]||(s[1]=l=>t(n).name=l),class:"mb-3 col-6",label:e._lang.label.name,type:t(r).inputs.text,maxlength:45,disabled:t(c)},null,8,["modelValue","label","type","disabled"])]),_:1})]),_:1},8,["title","disabled","loading"]),a(Y,null,{default:i(()=>[a(D,{onSort:G,onChangePage:V,selectedItems:t(m),"onUpdate:selectedItems":s[2]||(s[2]=l=>f(m)?m.value=l:m=l),unselectedItems:t(p),"onUpdate:unselectedItems":s[3]||(s[3]=l=>f(p)?p.value=l:p=l),selectedState:t(b),"onUpdate:selectedState":s[4]||(s[4]=l=>f(b)?b.value=l:b=l),data:t(I),checkbox:!1,loading:t(c),defaultSort:"legislationId"},{columns:i(()=>[a(T,{name:e._lang.label.code,field:"code",sortable:!0},null,8,["name"]),a(T,{name:e._lang.label.name,field:"name",sortable:!0},null,8,["name"])]),actions:i(l=>[a(P,{onClick:j=>A(l.item)},null,8,["onClick"]),a(R,{onClick:j=>U(l.item)},null,8,["onClick"])]),_:1},8,["selectedItems","unselectedItems","selectedState","data","loading"])]),_:1})]),_:1}),a($,{"item-id":t(y),resource:e._lang.backoffice.settings.legislation,action:F,service:t(E)},null,8,["item-id","resource","service"])]),_:1},8,["title"])}}};export{ae as default};
