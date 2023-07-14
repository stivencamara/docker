import{_ as $}from"./delete-confirm-df034be7.js";import{s as q,z as H,r as d,i as b,a as T,u as _,n as J,b as n,o as Q,l as X,w as i,e as t,g as l,S as Y,C as Z,D as f,x as v}from"./index-5b4ebf84.js";import{l as w}from"./legislation-51787428.js";const ae={__name:"index",setup(x){const I=q();H();let c=d(!1),u=d([]),m=d([]),g=d(b.tableSelectedState.none),o=T(k()),C=d(_.createEmptyDataSource());T({});let y=d(0);function k(){return{pageNumber:1,sortBy:"legislationId",legislationId:null,legislationIds:[],caeDesignation:null}}J(async()=>{await r()});function E(e){I.push({name:v.router.BACKOFFICE_SETTINGS_EDIT_LEGISLATION_PAGE.name,params:{legislationId:_.encodeId(e.legislationId)}})}async function A(){Object.assign(o,k()),await S()}async function S(){o.pageNumber=1,await r()}function N(){I.push({name:v.router.BACKOFFICE_SETTINGS_CREATE_LEGISLATION_PAGE.name})}async function B(e){o.sortBy=e,await r()}async function G(e){o.pageNumber=e,await r()}async function r(){c.value=!0,o.legislationId?o.legislationIds=[o.legislationId]:o.legislationIds=[];let e=await w.search(o);_.validateResponse(e,null,()=>{C.value=e.data}),c.value=!1}async function h(e){y.value=e.legislationId}async function D(){_.closeModalById("confirm-delete"),await r()}return(e,s)=>{const F=n("breadcrumb-item"),L=n("breadcrumb"),O=n("cbutton"),z=n("form-field"),M=n("row"),P=n("cfilter"),p=n("ccolumn"),R=n("table-action-edit"),U=n("table-action-delete"),V=n("ctable"),K=n("card"),j=n("page");return Q(),X(j,{title:e._lang.backoffice.settings.legislation.pageTitle},{breadcrumb:i(()=>[t(L,{"has-home":!0},{default:i(()=>[t(F,{label:e._lang.backoffice.settings.legislation.breadcrumbTitle},null,8,["label"])]),_:1})]),actions:i(()=>[t(O,{class:"col-12 col-sm-auto",type:l(b).buttonType.secondary,size:l(b).buttonSize.medium,title:e._lang.common.toAdd,icon:Y,onClick:N},null,8,["type","size","title"])]),default:i(()=>[t(K,{shadow:!0},{body:i(()=>[t(P,{title:e._lang.common.filter,disabled:l(c),"clear-click":A,"apply-click":S,loading:l(c),collapsed:!0},{default:i(()=>[t(M,null,{default:i(()=>[t(z,{id:"legislationIds",modelValue:l(o).legislationId,"onUpdate:modelValue":s[0]||(s[0]=a=>l(o).legislationId=a),class:"mb-3 col-12",label:e._lang.label.id,type:l(b).inputs.number,maxlength:45,disabled:l(c)},null,8,["modelValue","label","type","disabled"])]),_:1})]),_:1},8,["title","disabled","loading"]),t(Z,null,{default:i(()=>[t(V,{onSort:B,onChangePage:G,selectedItems:l(u),"onUpdate:selectedItems":s[1]||(s[1]=a=>f(u)?u.value=a:u=a),unselectedItems:l(m),"onUpdate:unselectedItems":s[2]||(s[2]=a=>f(m)?m.value=a:m=a),selectedState:l(g),"onUpdate:selectedState":s[3]||(s[3]=a=>f(g)?g.value=a:g=a),data:l(C),checkbox:!1,loading:l(c),defaultSort:"legislationId"},{columns:i(()=>[t(p,{name:e._lang.label.id,field:"legislationId",sortable:!0},null,8,["name"]),t(p,{name:e._lang.label.code,field:"code",sortable:!0},null,8,["name"]),t(p,{name:e._lang.label.name,field:"name",sortable:!0},null,8,["name"])]),actions:i(a=>[t(R,{onClick:W=>E(a.item)},null,8,["onClick"]),t(U,{onClick:W=>h(a.item)},null,8,["onClick"])]),_:1},8,["selectedItems","unselectedItems","selectedState","data","loading"])]),_:1})]),_:1}),t($,{"item-id":l(y),resource:e._lang.backoffice.settings.legislation,action:D,service:l(w)},null,8,["item-id","resource","service"])]),_:1},8,["title"])}}};export{ae as default};