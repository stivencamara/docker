import{_ as W}from"./delete-confirm-c7c4e24d.js";import{m as $,x as q,r as d,A as u,y as S,n as b,o as x,a as o,b as J,c as Q,w as s,d as n,f as t,T as X,H as Y,i as _,s as T}from"./index-920dbb37.js";import{l as w}from"./life-event-017db2a7.js";import"./helpers-4c156364.js";import"./index.esm-d0811cb6.js";const oe={__name:"index",setup(Z){const v=$();q();let c=d(!1),m=d([]),f=d([]),p=d(u.tableSelectedState.none),a=S(g()),E=d(b.createEmptyDataSource());S({});let I=d(0);function g(){return{pageNumber:1,sortBy:"lifeEventId",lifeEventId:null,lifeEventIds:[],lifeEventLevel1:null}}x(async()=>{await r()});function L(e){v.push({name:T.router.BACKOFFICE_SETTINGS_EDIT_LIFEEVENT_PAGE.name,params:{lifeEventId:b.encodeId(e.lifeEventId)}})}async function V(){Object.assign(a,g()),await y()}async function y(){a.pageNumber=1,await r()}function N(){v.push({name:T.router.BACKOFFICE_SETTINGS_CREATE_LIFEEVENT_PAGE.name})}async function A(e){a.sortBy=e,await r()}async function B(e){a.pageNumber=e,await r()}async function r(){c.value=!0,a.lifeEventId?a.lifeEventIds=[a.lifeEventId]:a.lifeEventIds=[];let e=await w.search(a);b.validateResponse(e,null,()=>{E.value=e.data}),c.value=!1}async function F(e){I.value=e.lifeEventId}async function U(){b.closeModalById("confirm-delete"),await r()}return(e,i)=>{const h=o("breadcrumb-item"),G=o("breadcrumb"),M=o("cbutton"),C=o("form-field"),P=o("row"),R=o("cfilter"),k=o("ccolumn"),z=o("table-action-edit"),D=o("table-action-delete"),O=o("ctable"),K=o("card"),j=o("page");return J(),Q(j,{title:e._lang.backoffice.settings.lifeEvent.pageTitle},{breadcrumb:s(()=>[n(G,{"has-home":!0},{default:s(()=>[n(h,{label:e._lang.backoffice.settings.lifeEvent.breadcrumbTitle},null,8,["label"])]),_:1})]),actions:s(()=>[n(M,{class:"col-12 col-sm-auto",type:t(u).buttonType.secondary,size:t(u).buttonSize.medium,title:e._lang.common.toAdd,icon:X,onClick:N},null,8,["type","size","title"])]),default:s(()=>[n(K,{shadow:!0},{body:s(()=>[n(R,{title:e._lang.common.filter,disabled:t(c),"clear-click":V,"apply-click":y,loading:t(c),collapsed:!0},{default:s(()=>[n(P,null,{default:s(()=>[n(C,{id:"lifeEventIds",modelValue:t(a).lifeEventId,"onUpdate:modelValue":i[0]||(i[0]=l=>t(a).lifeEventId=l),class:"mb-3 col-12 col-md-6",label:e._lang.label.id,type:t(u).inputs.number,maxlength:45,disabled:t(c)},null,8,["modelValue","label","type","disabled"]),n(C,{id:"lifeEventLevel1",modelValue:t(a).lifeEventLevel1,"onUpdate:modelValue":i[1]||(i[1]=l=>t(a).lifeEventLevel1=l),class:"mb-3 col-12 col-md-6",label:e._lang.label.lifeEventLevel1,type:t(u).inputs.text,maxlength:45,disabled:t(c)},null,8,["modelValue","label","type","disabled"])]),_:1})]),_:1},8,["title","disabled","loading"]),n(Y,null,{default:s(()=>[n(O,{onSort:A,onChangePage:B,selectedItems:t(m),"onUpdate:selectedItems":i[2]||(i[2]=l=>_(m)?m.value=l:m=l),unselectedItems:t(f),"onUpdate:unselectedItems":i[3]||(i[3]=l=>_(f)?f.value=l:f=l),selectedState:t(p),"onUpdate:selectedState":i[4]||(i[4]=l=>_(p)?p.value=l:p=l),data:t(E),checkbox:!1,loading:t(c),defaultSort:"lifeEventId"},{columns:s(()=>[n(k,{name:e._lang.label.id,field:"lifeEventId",sortable:!0},null,8,["name"]),n(k,{name:e._lang.label.lifeEventLevel1,field:"lifeEventLevel1",sortable:!0},null,8,["name"])]),actions:s(l=>[n(z,{onClick:H=>L(l.item)},null,8,["onClick"]),n(D,{onClick:H=>F(l.item)},null,8,["onClick"])]),_:1},8,["selectedItems","unselectedItems","selectedState","data","loading"])]),_:1})]),_:1}),n(W,{"item-id":t(I),resource:e._lang.backoffice.settings.lifeEvent,action:U,service:t(w)},null,8,["item-id","resource","service"])]),_:1},8,["title"])}}};export{oe as default};