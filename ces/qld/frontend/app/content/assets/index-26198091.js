import{h as Y,q as Z,J as h,i as r,v as s,s as z,j as c,K as ee,b as le,r as i,o as V,c as T,w as u,a as o,m as e,S as te,U as ae,z as C,L as oe,y as F,l as k}from"./index-d8a56bcc.js";import{d as E}from"./document-3c516f4f.js";import{u as ne}from"./document-a196a5d4.js";import{d as de}from"./helpers-71f72544.js";import{b as se}from"./helpers-d89764d1.js";import"./index.esm-d77c3574.js";const ge={__name:"index",setup(ce){const _=Y(),w=Z(),v=ne(),L=h();let d=r(!1),b=r([]),g=r([]),f=r(s.tableSelectedState.none),n=z(B()),y=r([]),U=r([]),A=r(c.createEmptyDataSource());z({});function B(){return{pageNumber:1,sortBy:"Code",code:null,documentTypeIds:null,abreviation:null,name:null,recordStateIds:null,active:!0,organization:null}}ee(async()=>{d.value=!0,y.value=c.convertEnumToArray(w.enums.recordStateType);const l=await E.getLists(L.getLanguage);c.validateResponse(l,null,()=>{v.setLists(l.data),y.value=c.convertEnumToArray(w.enums.recordStateType),U.value=c.concatItemsBadge(y.value,se.recordStateTypeBadgeOptions)}),d.value=!1}),le(async()=>{await I()});function M(l){_.push({name:k.router.BACKOFFICE_EDIT_DOCUMENT_PAGE.name,params:{documentId:c.encodeId(l.documentId),documentVersion:c.encodeId(l.documentVersion)}})}function D(l){_.push({name:k.router.BACKOFFICE_DETAIL_DOCUMENT_PAGE.name,params:{documentId:c.encodeId(l.documentId),documentVersion:c.encodeId(l.documentVersion)}})}async function N(){Object.assign(n,B()),await O()}async function O(){n.pageNumber=1,await I()}async function P(){d.value=!0;const l=await E.create(de.newForm());c.validateResponse(l,null,()=>{const a=c.encodeId(l.data.documentId),S=c.encodeId(l.data.documentVersion);_.push({name:k.router.BACKOFFICE_EDIT_DOCUMENT_PAGE.name,params:{documentId:a,documentVersion:S}})}),d.value=!1}async function R(l){n.sortBy=l,await I()}async function x(l){n.pageNumber=l,await I()}async function I(){d.value=!0;let l=await E.search(n);c.validateResponse(l,null,()=>{A.value=l.data}),d.value=!1}return(l,a)=>{const S=i("breadcrumb-item"),K=i("breadcrumb"),G=i("cbutton"),m=i("form-field"),H=i("row"),j=i("cfilter"),p=i("ccolumn"),q=i("table-action-edit"),J=i("table-action-detail"),W=i("ctable"),$=i("card"),Q=i("page");return V(),T(Q,{title:l._lang.backoffice.document.pageTitle},{breadcrumb:u(()=>[o(K,{"has-home":!0},{default:u(()=>[o(S,{label:l._lang.backoffice.document.breadcrumbTitle},null,8,["label"])]),_:1})]),actions:u(()=>[o(G,{class:"col-12 col-sm-auto",type:e(s).buttonType.secondary,size:e(s).buttonSize.medium,title:l._lang.common.toAdd,icon:te,onClick:P},null,8,["type","size","title"])]),default:u(()=>[o($,{shadow:!0},{body:u(()=>[o(j,{title:l._lang.common.filter,disabled:e(d),"clear-click":N,"apply-click":O,loading:e(d),collapsed:!0},{default:u(()=>[o(H,null,{default:u(()=>[o(m,{id:"code",modelValue:e(n).code,"onUpdate:modelValue":a[0]||(a[0]=t=>e(n).code=t),class:"mb-3 col-12 col-md-6 col-xl-4",label:l._lang.label.code,type:e(s).inputs.text,maxlength:45,disabled:e(d)},null,8,["modelValue","label","type","disabled"]),o(m,{class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(n).documentTypeIds,"onUpdate:modelValue":a[1]||(a[1]=t=>e(n).documentTypeIds=t),label:l._lang.label.documentTypeId,type:e(s).inputs.multiselect,options:e(v).documentTypeList,disabled:e(d),mode:e(s).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"]),o(m,{class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(n).abreviation,"onUpdate:modelValue":a[2]||(a[2]=t=>e(n).abreviation=t),label:l._lang.label.abreviation,type:e(s).inputs.text,maxlength:16,disabled:e(d)},null,8,["modelValue","label","type","disabled"]),o(m,{id:"organization",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(n).organization,"onUpdate:modelValue":a[3]||(a[3]=t=>e(n).organization=t),label:l._lang.label.organizationHost,type:e(s).inputs.multiselect,options:e(v).organizationList,disabled:e(d),valueProp:e(s).multiselectValueProp.value3},null,8,["modelValue","label","type","options","disabled","valueProp"]),o(m,{id:"name",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(n).name,"onUpdate:modelValue":a[4]||(a[4]=t=>e(n).name=t),label:l._lang.label.name,type:e(s).inputs.text,maxlength:45,disabled:e(d)},null,8,["modelValue","label","type","disabled"]),o(m,{id:"recordStateIds",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(n).recordStateIds,"onUpdate:modelValue":a[5]||(a[5]=t=>e(n).recordStateIds=t),label:l._lang.label.state,type:e(s).inputs.multiselect,options:e(y),disabled:e(d),mode:e(s).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"]),o(m,{id:"active",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(n).active,"onUpdate:modelValue":a[6]||(a[6]=t=>e(n).active=t),label:l._lang.label.active,type:e(s).inputs.checkbox,disabled:e(d)},null,8,["modelValue","label","type","disabled"])]),_:1})]),_:1},8,["title","disabled","loading"]),o(ae,null,{default:u(()=>[o(W,{onSort:R,onChangePage:x,selectedItems:e(b),"onUpdate:selectedItems":a[7]||(a[7]=t=>C(b)?b.value=t:b=t),unselectedItems:e(g),"onUpdate:unselectedItems":a[8]||(a[8]=t=>C(g)?g.value=t:g=t),selectedState:e(f),"onUpdate:selectedState":a[9]||(a[9]=t=>C(f)?f.value=t:f=t),data:e(A),checkbox:!1,loading:e(d),defaultSort:"pointOfCareId",checkboxField:"code"},{columns:u(()=>[o(p,{name:l._lang.label.code,field:"code",sortable:!0},null,8,["name"]),o(p,{name:l._lang.label.documentTypeId,field:"documentType",sortField:"documentTypeId",sortable:!0},null,8,["name"]),o(p,{name:l._lang.label.abreviation,field:"abreviation",sortable:!0},null,8,["name"]),o(p,{name:l._lang.label.name,field:"name",sortable:!0},null,8,["name"]),o(p,{name:l._lang.label.state,field:"recordStateTypeId",align:e(s).columnAlign.center,custom:oe,options:e(U),sortable:!0},null,8,["name","align","options"])]),actions:u(t=>[t.item.recordStateTypeId==e(s).recordStateType.draft?(V(),T(q,{key:0,onClick:X=>M(t.item)},null,8,["onClick"])):F("",!0),t.item.recordStateTypeId>e(s).recordStateType.draft?(V(),T(J,{key:1,onClick:X=>D(t.item)},null,8,["onClick"])):F("",!0)]),_:1},8,["selectedItems","unselectedItems","selectedState","data","loading"])]),_:1})]),_:1})]),_:1},8,["title"])}}};export{ge as default};
