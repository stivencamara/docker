import{_ as W}from"./delete-confirm-c7c4e24d.js";import{m as $,x as q,r as d,A as g,y as T,n as _,o as J,a as n,b as Q,c as X,w as i,d as t,f as l,T as Y,H as Z,i as p,s as v}from"./index-920dbb37.js";import{l as w}from"./legislation-dea5630f.js";const ae={__name:"index",setup(x){const I=$();q();let c=d(!1),u=d([]),m=d([]),b=d(g.tableSelectedState.none),o=T(k()),y=d(_.createEmptyDataSource());T({});let C=d(0);function k(){return{pageNumber:1,sortBy:"legislationId",legislationId:null,legislationIds:[],caeDesignation:null}}J(async()=>{await r()});function E(e){I.push({name:v.router.BACKOFFICE_SETTINGS_EDIT_LEGISLATION_PAGE.name,params:{legislationId:_.encodeId(e.legislationId)}})}async function A(){Object.assign(o,k()),await S()}async function S(){o.pageNumber=1,await r()}function N(){I.push({name:v.router.BACKOFFICE_SETTINGS_CREATE_LEGISLATION_PAGE.name})}async function B(e){o.sortBy=e,await r()}async function G(e){o.pageNumber=e,await r()}async function r(){c.value=!0,o.legislationId?o.legislationIds=[o.legislationId]:o.legislationIds=[];let e=await w.search(o);_.validateResponse(e,null,()=>{y.value=e.data}),c.value=!1}async function h(e){C.value=e.legislationId}async function F(){_.closeModalById("confirm-delete"),await r()}return(e,s)=>{const L=n("breadcrumb-item"),O=n("breadcrumb"),D=n("cbutton"),M=n("form-field"),P=n("row"),R=n("cfilter"),f=n("ccolumn"),U=n("table-action-edit"),V=n("table-action-delete"),z=n("ctable"),K=n("card"),j=n("page");return Q(),X(j,{title:e._lang.backoffice.settings.legislation.pageTitle},{breadcrumb:i(()=>[t(O,{"has-home":!0},{default:i(()=>[t(L,{label:e._lang.backoffice.settings.legislation.breadcrumbTitle},null,8,["label"])]),_:1})]),actions:i(()=>[t(D,{class:"col-12 col-sm-auto",type:l(g).buttonType.secondary,size:l(g).buttonSize.medium,title:e._lang.common.toAdd,icon:Y,onClick:N},null,8,["type","size","title"])]),default:i(()=>[t(K,{shadow:!0},{body:i(()=>[t(R,{title:e._lang.common.filter,disabled:l(c),"clear-click":A,"apply-click":S,loading:l(c),collapsed:!0},{default:i(()=>[t(P,null,{default:i(()=>[t(M,{id:"legislationIds",modelValue:l(o).legislationId,"onUpdate:modelValue":s[0]||(s[0]=a=>l(o).legislationId=a),class:"mb-3 col-12",label:e._lang.label.id,type:l(g).inputs.number,maxlength:45,disabled:l(c)},null,8,["modelValue","label","type","disabled"])]),_:1})]),_:1},8,["title","disabled","loading"]),t(Z,null,{default:i(()=>[t(z,{onSort:B,onChangePage:G,selectedItems:l(u),"onUpdate:selectedItems":s[1]||(s[1]=a=>p(u)?u.value=a:u=a),unselectedItems:l(m),"onUpdate:unselectedItems":s[2]||(s[2]=a=>p(m)?m.value=a:m=a),selectedState:l(b),"onUpdate:selectedState":s[3]||(s[3]=a=>p(b)?b.value=a:b=a),data:l(y),checkbox:!1,loading:l(c),defaultSort:"legislationId"},{columns:i(()=>[t(f,{name:e._lang.label.id,field:"legislationId",sortable:!0},null,8,["name"]),t(f,{name:e._lang.label.code,field:"code",sortable:!0},null,8,["name"]),t(f,{name:e._lang.label.name,field:"name",sortable:!0},null,8,["name"])]),actions:i(a=>[t(U,{onClick:H=>E(a.item)},null,8,["onClick"]),t(V,{onClick:H=>h(a.item)},null,8,["onClick"])]),_:1},8,["selectedItems","unselectedItems","selectedState","data","loading"])]),_:1})]),_:1}),t(W,{"item-id":l(C),resource:e._lang.backoffice.settings.legislation,action:F,service:l(w)},null,8,["item-id","resource","service"])]),_:1},8,["title"])}}};export{ae as default};
