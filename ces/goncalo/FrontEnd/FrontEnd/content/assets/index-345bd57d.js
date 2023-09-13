import{g as Z,i as $,J as h,r as m,s,G as z,u as c,K as ee,o as le,k as u,c as T,l as S,w as i,n as o,p as e,T as te,V as ae,I as C,L as oe,y as F,z as k}from"./index-e6787e94.js";import{d as E}from"./document-7d8e49bb.js";import{u as ne}from"./document-be6216ed.js";import{d as de}from"./helpers-ee63bdf4.js";import{b as se}from"./helpers-1692af0f.js";import"./index.esm-7850210a.js";const ge={__name:"index",setup(ce){const _=Z(),w=$(),v=ne(),L=h();let d=m(!1),b=m([]),g=m([]),y=m(s.tableSelectedState.none),n=z(B()),f=m([]),U=m([]),A=m(c.createEmptyDataSource());z({});function B(){return{pageNumber:1,sortBy:"Code",code:null,documentTypeIds:null,abreviation:null,name:null,recordStateIds:null,active:!0,organization:null}}ee(async()=>{d.value=!0,f.value=c.convertEnumToArray(w.enums.recordStateType);const l=await E.getLists(L.getLanguage);c.validateResponse(l,null,()=>{v.setLists(l.data),f.value=c.convertEnumToArray(w.enums.recordStateType),U.value=c.concatItemsBadge(f.value,se.recordStateTypeBadgeOptions)}),d.value=!1}),le(async()=>{await I()});function M(l){_.push({name:k.router.BACKOFFICE_EDIT_DOCUMENT_PAGE.name,params:{documentId:c.encodeId(l.documentId),documentVersion:c.encodeId(l.documentVersion)}})}function D(l){_.push({name:k.router.BACKOFFICE_DETAIL_DOCUMENT_PAGE.name,params:{documentId:c.encodeId(l.documentId),documentVersion:c.encodeId(l.documentVersion)}})}async function N(){Object.assign(n,B()),await O()}async function O(){n.pageNumber=1,await I()}async function P(){d.value=!0;const l=await E.create(de.newForm());c.validateResponse(l,null,()=>{const a=c.encodeId(l.data.documentId),V=c.encodeId(l.data.documentVersion);_.push({name:k.router.BACKOFFICE_EDIT_DOCUMENT_PAGE.name,params:{documentId:a,documentVersion:V}})}),d.value=!1}async function R(l){n.sortBy=l,await I()}async function x(l){n.pageNumber=l,await I()}async function I(){d.value=!0;let l=await E.search(n);c.validateResponse(l,null,()=>{A.value=l.data}),d.value=!1}return(l,a)=>{const V=u("breadcrumb-item"),G=u("breadcrumb"),K=u("cbutton"),r=u("form-field"),H=u("row"),j=u("cfilter"),p=u("ccolumn"),J=u("table-action-edit"),W=u("table-action-detail"),q=u("ctable"),Q=u("card"),X=u("page");return T(),S(X,{title:l._lang.backoffice.document.pageTitle},{breadcrumb:i(()=>[o(G,{"has-home":!0},{default:i(()=>[o(V,{label:l._lang.backoffice.document.breadcrumbTitle},null,8,["label"])]),_:1})]),actions:i(()=>[o(K,{class:"col-12 col-sm-auto",type:e(s).buttonType.secondary,size:e(s).buttonSize.medium,title:l._lang.common.toAdd,icon:te,onClick:P},null,8,["type","size","title"])]),default:i(()=>[o(Q,{shadow:!0},{body:i(()=>[o(j,{title:l._lang.common.filter,disabled:e(d),"clear-click":N,"apply-click":O,loading:e(d),collapsed:!0},{default:i(()=>[o(H,null,{default:i(()=>[o(r,{id:"code",modelValue:e(n).code,"onUpdate:modelValue":a[0]||(a[0]=t=>e(n).code=t),class:"mb-3 col-12 col-md-6 col-xl-4",label:l._lang.label.code,type:e(s).inputs.text,maxlength:45,disabled:e(d)},null,8,["modelValue","label","type","disabled"]),o(r,{class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(n).documentTypeIds,"onUpdate:modelValue":a[1]||(a[1]=t=>e(n).documentTypeIds=t),label:l._lang.label.documentTypeId,type:e(s).inputs.multiselect,options:e(v).documentTypeList,disabled:e(d),mode:e(s).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"]),o(r,{class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(n).abreviation,"onUpdate:modelValue":a[2]||(a[2]=t=>e(n).abreviation=t),label:l._lang.label.abreviation,type:e(s).inputs.text,maxlength:16,disabled:e(d)},null,8,["modelValue","label","type","disabled"]),o(r,{id:"organization",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(n).organization,"onUpdate:modelValue":a[3]||(a[3]=t=>e(n).organization=t),label:l._lang.label.organizationHost,type:e(s).inputs.multiselect,options:e(v).organizationList,disabled:e(d),valueProp:e(s).multiselectValueProp.value3},null,8,["modelValue","label","type","options","disabled","valueProp"]),o(r,{id:"name",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(n).name,"onUpdate:modelValue":a[4]||(a[4]=t=>e(n).name=t),label:l._lang.label.name,type:e(s).inputs.text,maxlength:45,disabled:e(d)},null,8,["modelValue","label","type","disabled"]),o(r,{id:"recordStateIds",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(n).recordStateIds,"onUpdate:modelValue":a[5]||(a[5]=t=>e(n).recordStateIds=t),label:l._lang.label.state,type:e(s).inputs.multiselect,options:e(f),disabled:e(d),mode:e(s).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"]),o(r,{id:"active",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(n).active,"onUpdate:modelValue":a[6]||(a[6]=t=>e(n).active=t),label:l._lang.label.active,type:e(s).inputs.checkbox,disabled:e(d)},null,8,["modelValue","label","type","disabled"])]),_:1})]),_:1},8,["title","disabled","loading"]),o(ae,null,{default:i(()=>[o(q,{onSort:R,onChangePage:x,selectedItems:e(b),"onUpdate:selectedItems":a[7]||(a[7]=t=>C(b)?b.value=t:b=t),unselectedItems:e(g),"onUpdate:unselectedItems":a[8]||(a[8]=t=>C(g)?g.value=t:g=t),selectedState:e(y),"onUpdate:selectedState":a[9]||(a[9]=t=>C(y)?y.value=t:y=t),data:e(A),checkbox:!1,loading:e(d),defaultSort:"pointOfCareId",checkboxField:"code"},{columns:i(()=>[o(p,{name:l._lang.label.code,field:"code",sortable:!0},null,8,["name"]),o(p,{name:l._lang.label.documentTypeId,field:"documentType",sortField:"documentTypeId",sortable:!0},null,8,["name"]),o(p,{name:l._lang.label.abreviation,field:"abreviation",sortable:!0},null,8,["name"]),o(p,{name:l._lang.label.name,field:"name",sortable:!0},null,8,["name"]),o(p,{name:l._lang.label.state,field:"recordStateTypeId",align:e(s).columnAlign.center,custom:oe,options:e(U),sortable:!0},null,8,["name","align","options"])]),actions:i(t=>[t.item.recordStateTypeId==e(s).recordStateType.draft?(T(),S(J,{key:0,onClick:Y=>M(t.item)},null,8,["onClick"])):F("",!0),t.item.recordStateTypeId>e(s).recordStateType.draft?(T(),S(W,{key:1,onClick:Y=>D(t.item)},null,8,["onClick"])):F("",!0)]),_:1},8,["selectedItems","unselectedItems","selectedState","data","loading"])]),_:1})]),_:1})]),_:1},8,["title"])}}};export{ge as default};
