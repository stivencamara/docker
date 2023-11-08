import{_ as W}from"./delete-confirm-8d4a8693.js";import{g as Y,i as z,M as H,r as u,v as S,j as C,u as i,o as J,N as Q,l as s,c as X,m as Z,n as r,q as a,s as l,Y as $,L as g,C as x}from"./index-ab26f80c.js";import{u as ee,p as v}from"./params-f6576d2b.js";import"./helpers-c14e9a29.js";import"./index.esm-6a371f16.js";const re={__name:"index",setup(ae){const w=Y();z();const B=ee(),M=H();let c=u(!1),m=u([]),p=u([]),f=u(S.tableSelectedState.none),o=C(k()),b=u(i.createEmptyDataSource());C({});let I=u(0);function k(){return{pageNumber:1,sortBy:"description",name:null}}J(async()=>{await d()});function D(e){w.push({name:x.router.BACKOFFICE_SETTINGS_EDIT_PARAMS_PAGE.name,params:{parameterId:i.encodeId(e.parameterId)}})}async function E(){Object.assign(o,k()),await y()}async function y(){o.pageNumber=1,await d()}async function L(e){o.sortBy=e,await d()}async function N(e){o.pageNumber=e,await d()}async function d(){c.value=!0,o.parameterId?o.parameterIds=[o.parameterId]:o.parameterIds=[];let e=await v.search(o);i.validateResponse(e,null,()=>{b.value=e.data,b.value.items.forEach(n=>{i.isDate(n.value)&&(n.value=i.formatDate(new Date(n.value)))})}),c.value=!1}async function T(e){I.value=e.parameterId}async function h(){i.closeModalById("confirm-delete"),await d()}return Q(async()=>{c.value=!0;const e=await v.getLists(M.getLanguage);i.validateResponse(e,null,()=>{B.setLists(e.data)}),c.value=!1}),(e,n)=>{const P=s("breadcrumb-item"),R=s("breadcrumb"),A=s("form-field"),U=s("row"),V=s("cfilter"),_=s("ccolumn"),F=s("table-action-edit"),j=s("table-action-delete"),G=s("ctable"),O=s("card"),q=s("page");return X(),Z(q,{title:e._lang.backoffice.settings.params.pageTitle},{breadcrumb:r(()=>[a(R,{"has-home":!0},{default:r(()=>[a(P,{label:e._lang.backoffice.settings.params.breadcrumbTitle},null,8,["label"])]),_:1})]),default:r(()=>[a(O,{shadow:!0},{body:r(()=>[a(V,{title:e._lang.common.filter,disabled:l(c),"clear-click":E,"apply-click":y,loading:l(c),collapsed:!0},{default:r(()=>[a(U,null,{default:r(()=>[a(A,{id:"name",modelValue:l(o).name,"onUpdate:modelValue":n[0]||(n[0]=t=>l(o).name=t),class:"mb-3 col-12",label:e._lang.label.name,type:l(S).inputs.text,maxlength:45,disabled:l(c)},null,8,["modelValue","label","type","disabled"])]),_:1})]),_:1},8,["title","disabled","loading"]),a($,null,{default:r(()=>[a(G,{onSort:L,onChangePage:N,selectedItems:l(m),"onUpdate:selectedItems":n[1]||(n[1]=t=>g(m)?m.value=t:m=t),unselectedItems:l(p),"onUpdate:unselectedItems":n[2]||(n[2]=t=>g(p)?p.value=t:p=t),selectedState:l(f),"onUpdate:selectedState":n[3]||(n[3]=t=>g(f)?f.value=t:f=t),data:l(b),checkbox:!1,loading:l(c),defaultSort:"description"},{columns:r(()=>[a(_,{name:e._lang.label.name,field:"name",sortable:!0},null,8,["name"]),a(_,{name:e._lang.label.description,field:"description",sortable:!0},null,8,["name"]),a(_,{name:e._lang.label.value,field:"value",sortable:!0},null,8,["name"])]),actions:r(t=>[a(F,{onClick:K=>D(t.item)},null,8,["onClick"]),a(j,{onClick:K=>T(t.item)},null,8,["onClick"])]),_:1},8,["selectedItems","unselectedItems","selectedState","data","loading"])]),_:1})]),_:1}),a(W,{"item-id":l(I),resource:e._lang.backoffice.settings.params,action:h,service:l(v)},null,8,["item-id","resource","service"])]),_:1},8,["title"])}}};export{re as default};
