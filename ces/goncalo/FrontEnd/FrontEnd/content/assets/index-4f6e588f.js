import{_ as q}from"./delete-confirm-8d4a8693.js";import{g as W,i as $,r as d,v as _,j as A,u as f,o as x,l as a,c as H,m as J,n as i,q as o,s as t,V as Q,Y as X,L as b,C as k}from"./index-ab26f80c.js";import{e as S}from"./economic-activity-1921f1f3.js";import"./helpers-c14e9a29.js";import"./index.esm-6a371f16.js";const ce={__name:"index",setup(Z){const g=W();$();let s=d(!1),r=d([]),u=d([]),p=d(_.tableSelectedState.none),c=A(C()),y=d(f.createEmptyDataSource());A({});let I=d(0);function C(){return{pageNumber:1,sortBy:"economicActivityId",economicActivityId:null,economicActivityIds:[],caeDesignation:null}}x(async()=>{await m()});function T(e){g.push({name:k.router.BACKOFFICE_SETTINGS_EDIT_ECONOMICACTIVITY_PAGE.name,params:{economicActivityId:f.encodeId(e.economicActivityId)}})}async function E(){Object.assign(c,C()),await v()}async function v(){c.pageNumber=1,await m()}function w(){g.push({name:k.router.BACKOFFICE_SETTINGS_CREATE_ECONOMICACTIVITY_PAGE.name})}async function D(e){c.sortBy=e,await m()}async function N(e){c.pageNumber=e,await m()}async function m(){s.value=!0,c.economicActivityId?c.economicActivityIds=[c.economicActivityId]:c.economicActivityIds=[];let e=await S.search(c);f.validateResponse(e,null,()=>{y.value=e.data}),s.value=!1}async function B(e){I.value=e.economicActivityId}async function O(){f.closeModalById("confirm-delete"),await m()}return(e,l)=>{const V=a("breadcrumb-item"),M=a("breadcrumb"),h=a("cbutton"),F=a("form-field"),G=a("row"),P=a("cfilter"),R=a("ccolumn"),U=a("table-action-edit"),z=a("table-action-delete"),Y=a("ctable"),j=a("card"),K=a("page");return H(),J(K,{title:e._lang.backoffice.settings.economicActivity.pageTitle},{breadcrumb:i(()=>[o(M,{"has-home":!0},{default:i(()=>[o(V,{label:e._lang.backoffice.settings.economicActivity.breadcrumbTitle},null,8,["label"])]),_:1})]),actions:i(()=>[o(h,{class:"col-12 col-sm-auto",type:t(_).buttonType.secondary,size:t(_).buttonSize.medium,title:e._lang.common.toAdd,icon:Q,onClick:w},null,8,["type","size","title"])]),default:i(()=>[o(j,{shadow:!0},{body:i(()=>[o(P,{title:e._lang.common.filter,disabled:t(s),"clear-click":E,"apply-click":v,loading:t(s),collapsed:!0},{default:i(()=>[o(G,null,{default:i(()=>[o(F,{id:"caeDesignation",modelValue:t(c).caeDesignation,"onUpdate:modelValue":l[0]||(l[0]=n=>t(c).caeDesignation=n),class:"mb-3 col-12",label:e._lang.label.designation,type:t(_).inputs.text,maxlength:45,disabled:t(s)},null,8,["modelValue","label","type","disabled"])]),_:1})]),_:1},8,["title","disabled","loading"]),o(X,null,{default:i(()=>[o(Y,{onSort:D,onChangePage:N,selectedItems:t(r),"onUpdate:selectedItems":l[1]||(l[1]=n=>b(r)?r.value=n:r=n),unselectedItems:t(u),"onUpdate:unselectedItems":l[2]||(l[2]=n=>b(u)?u.value=n:u=n),selectedState:t(p),"onUpdate:selectedState":l[3]||(l[3]=n=>b(p)?p.value=n:p=n),data:t(y),checkbox:!1,loading:t(s),defaultSort:"economicActivityId"},{columns:i(()=>[o(R,{name:e._lang.label.designation,field:"caeDesignation",sortable:!0},null,8,["name"])]),actions:i(n=>[o(U,{onClick:L=>T(n.item)},null,8,["onClick"]),o(z,{onClick:L=>B(n.item)},null,8,["onClick"])]),_:1},8,["selectedItems","unselectedItems","selectedState","data","loading"])]),_:1})]),_:1}),o(q,{"item-id":t(I),resource:e._lang.backoffice.settings.economicActivity,action:O,service:t(S)},null,8,["item-id","resource","service"])]),_:1},8,["title"])}}};export{ce as default};
