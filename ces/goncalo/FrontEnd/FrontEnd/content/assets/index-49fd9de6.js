import{_ as W}from"./delete-confirm-08b4a876.js";import{g as $,i as q,r as d,s as p,E as T,u as _,o as J,k as n,c as Q,l as X,w as i,n as t,p as l,T as Y,V as Z,H as f,z as E}from"./index-cce4225b.js";import{l as v}from"./legislation-7be87e2f.js";const ae={__name:"index",setup(x){const I=$();q();let c=d(!1),u=d([]),m=d([]),g=d(p.tableSelectedState.none),o=T(y()),C=d(_.createEmptyDataSource());T({});let k=d(0);function y(){return{pageNumber:1,sortBy:"legislationId",legislationId:null,legislationIds:[],caeDesignation:null}}J(async()=>{await r()});function w(e){I.push({name:E.router.BACKOFFICE_SETTINGS_EDIT_LEGISLATION_PAGE.name,params:{legislationId:_.encodeId(e.legislationId)}})}async function A(){Object.assign(o,y()),await S()}async function S(){o.pageNumber=1,await r()}function N(){I.push({name:E.router.BACKOFFICE_SETTINGS_CREATE_LEGISLATION_PAGE.name})}async function B(e){o.sortBy=e,await r()}async function G(e){o.pageNumber=e,await r()}async function r(){c.value=!0,o.legislationId?o.legislationIds=[o.legislationId]:o.legislationIds=[];let e=await v.search(o);_.validateResponse(e,null,()=>{C.value=e.data}),c.value=!1}async function h(e){k.value=e.legislationId}async function F(){_.closeModalById("confirm-delete"),await r()}return(e,s)=>{const L=n("breadcrumb-item"),O=n("breadcrumb"),V=n("cbutton"),z=n("form-field"),D=n("row"),M=n("cfilter"),b=n("ccolumn"),P=n("table-action-edit"),R=n("table-action-delete"),U=n("ctable"),K=n("card"),j=n("page");return Q(),X(j,{title:e._lang.backoffice.settings.legislation.pageTitle},{breadcrumb:i(()=>[t(O,{"has-home":!0},{default:i(()=>[t(L,{label:e._lang.backoffice.settings.legislation.breadcrumbTitle},null,8,["label"])]),_:1})]),actions:i(()=>[t(V,{class:"col-12 col-sm-auto",type:l(p).buttonType.secondary,size:l(p).buttonSize.medium,title:e._lang.common.toAdd,icon:Y,onClick:N},null,8,["type","size","title"])]),default:i(()=>[t(K,{shadow:!0},{body:i(()=>[t(M,{title:e._lang.common.filter,disabled:l(c),"clear-click":A,"apply-click":S,loading:l(c),collapsed:!0},{default:i(()=>[t(D,null,{default:i(()=>[t(z,{id:"legislationIds",modelValue:l(o).legislationId,"onUpdate:modelValue":s[0]||(s[0]=a=>l(o).legislationId=a),class:"mb-3 col-12",label:e._lang.label.id,type:l(p).inputs.number,maxlength:45,disabled:l(c)},null,8,["modelValue","label","type","disabled"])]),_:1})]),_:1},8,["title","disabled","loading"]),t(Z,null,{default:i(()=>[t(U,{onSort:B,onChangePage:G,selectedItems:l(u),"onUpdate:selectedItems":s[1]||(s[1]=a=>f(u)?u.value=a:u=a),unselectedItems:l(m),"onUpdate:unselectedItems":s[2]||(s[2]=a=>f(m)?m.value=a:m=a),selectedState:l(g),"onUpdate:selectedState":s[3]||(s[3]=a=>f(g)?g.value=a:g=a),data:l(C),checkbox:!1,loading:l(c),defaultSort:"legislationId"},{columns:i(()=>[t(b,{name:e._lang.label.id,field:"legislationId",sortable:!0},null,8,["name"]),t(b,{name:e._lang.label.code,field:"code",sortable:!0},null,8,["name"]),t(b,{name:e._lang.label.name,field:"name",sortable:!0},null,8,["name"])]),actions:i(a=>[t(P,{onClick:H=>w(a.item)},null,8,["onClick"]),t(R,{onClick:H=>h(a.item)},null,8,["onClick"])]),_:1},8,["selectedItems","unselectedItems","selectedState","data","loading"])]),_:1})]),_:1}),t(W,{"item-id":l(k),resource:e._lang.backoffice.settings.legislation,action:F,service:l(v)},null,8,["item-id","resource","service"])]),_:1},8,["title"])}}};export{ae as default};
