import{_ as J}from"./delete-confirm-b6384dc8.js";import{g as W,i as q,J as H,r as i,s as v,G as C,u,o as Q,K as X,k as o,c as Y,l as Z,w as s,n as a,p as l,V as $,I as _,z as x}from"./index-e6787e94.js";import{u as ee,p as g}from"./params-9fbb2d43.js";import"./helpers-1692af0f.js";import"./index.esm-7850210a.js";const re={__name:"index",setup(ae){const w=W();q();const B=ee(),M=H();let r=i(!1),m=i([]),p=i([]),f=i(v.tableSelectedState.none),n=C(y()),I=i(u.createEmptyDataSource());C({});let k=i(0);function y(){return{pageNumber:1,sortBy:"description",name:null}}Q(async()=>{await d()});function T(e){w.push({name:x.router.BACKOFFICE_SETTINGS_EDIT_PARAMS_PAGE.name,params:{parameterId:u.encodeId(e.parameterId)}})}async function E(){Object.assign(n,y()),await S()}async function S(){n.pageNumber=1,await d()}async function L(e){n.sortBy=e,await d()}async function N(e){n.pageNumber=e,await d()}async function d(){r.value=!0,n.parameterId?n.parameterIds=[n.parameterId]:n.parameterIds=[];let e=await g.search(n);u.validateResponse(e,null,()=>{I.value=e.data}),r.value=!1}async function P(e){k.value=e.parameterId}async function R(){u.closeModalById("confirm-delete"),await d()}return X(async()=>{r.value=!0;const e=await g.getLists(M.getLanguage);u.validateResponse(e,null,()=>{B.setLists(e.data)}),r.value=!1}),(e,c)=>{const V=o("breadcrumb-item"),h=o("breadcrumb"),A=o("form-field"),U=o("row"),D=o("cfilter"),b=o("ccolumn"),F=o("table-action-edit"),G=o("table-action-delete"),K=o("ctable"),O=o("card"),j=o("page");return Y(),Z(j,{title:e._lang.backoffice.settings.params.pageTitle},{breadcrumb:s(()=>[a(h,{"has-home":!0},{default:s(()=>[a(V,{label:e._lang.backoffice.settings.params.breadcrumbTitle},null,8,["label"])]),_:1})]),default:s(()=>[a(O,{shadow:!0},{body:s(()=>[a(D,{title:e._lang.common.filter,disabled:l(r),"clear-click":E,"apply-click":S,loading:l(r),collapsed:!0},{default:s(()=>[a(U,null,{default:s(()=>[a(A,{id:"name",modelValue:l(n).name,"onUpdate:modelValue":c[0]||(c[0]=t=>l(n).name=t),class:"mb-3 col-12",label:e._lang.label.name,type:l(v).inputs.text,maxlength:45,disabled:l(r)},null,8,["modelValue","label","type","disabled"])]),_:1})]),_:1},8,["title","disabled","loading"]),a($,null,{default:s(()=>[a(K,{onSort:L,onChangePage:N,selectedItems:l(m),"onUpdate:selectedItems":c[1]||(c[1]=t=>_(m)?m.value=t:m=t),unselectedItems:l(p),"onUpdate:unselectedItems":c[2]||(c[2]=t=>_(p)?p.value=t:p=t),selectedState:l(f),"onUpdate:selectedState":c[3]||(c[3]=t=>_(f)?f.value=t:f=t),data:l(I),checkbox:!1,loading:l(r),defaultSort:"description"},{columns:s(()=>[a(b,{name:e._lang.label.name,field:"name",sortable:!0},null,8,["name"]),a(b,{name:e._lang.label.description,field:"description",sortable:!0},null,8,["name"]),a(b,{name:e._lang.label.value,field:"value",sortable:!0},null,8,["name"])]),actions:s(t=>[a(F,{onClick:z=>T(t.item)},null,8,["onClick"]),a(G,{onClick:z=>P(t.item)},null,8,["onClick"])]),_:1},8,["selectedItems","unselectedItems","selectedState","data","loading"])]),_:1})]),_:1}),a(J,{"item-id":l(k),resource:e._lang.backoffice.settings.params,action:R,service:l(g)},null,8,["item-id","resource","service"])]),_:1},8,["title"])}}};export{re as default};
