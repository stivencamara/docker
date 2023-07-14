import{m as ee,x as te,K as le,r,A as d,y as F,n as i,L as ae,o as oe,a as c,b as S,c as C,w as u,d as a,f as e,T as ne,H as de,W as se,i as k,M as ce,B as M,s as E}from"./index-920dbb37.js";import{d as w}from"./document-875ae5ad.js";import{u as ie}from"./document-d7f3e26b.js";import{d as ue}from"./helpers-cd5e71d3.js";import{b as me}from"./helpers-4c156364.js";import"./index.esm-d0811cb6.js";const Ie={__name:"index",setup(re){const I=ee(),v=te(),T=ie(),z=le();let s=r(!1),b=r([]),g=r([]),f=r(d.tableSelectedState.none),n=F(B()),y=r([]),A=r([]),U=r(i.createEmptyDataSource());F({});function B(){return{pageNumber:1,sortBy:"Code",code:null,documentTypeIds:null,abreviation:null,name:null,recordStateIds:null,active:!0,organization:null}}ae(async()=>{s.value=!0,y.value=i.convertEnumToArray(v.enums.recordStateType);const t=await w.getLists(z.getLanguage);i.validateResponse(t,null,()=>{T.setLists(t.data),y.value=i.convertEnumToArray(v.enums.recordStateType),A.value=i.concatItemsBadge(y.value,me.recordStateTypeBadgeOptions)}),s.value=!1}),oe(async()=>{await _()});function D(t){I.push({name:E.router.BACKOFFICE_EDIT_DOCUMENT_PAGE.name,params:{documentId:i.encodeId(t.documentId),documentVersion:i.encodeId(t.documentVersion)}})}function L(t){I.push({name:E.router.BACKOFFICE_DETAIL_DOCUMENT_PAGE.name,params:{documentId:i.encodeId(t.documentId),documentVersion:i.encodeId(t.documentVersion)}})}async function N(){Object.assign(n,B()),await O()}async function O(){n.pageNumber=1,await _()}async function P(){s.value=!0;const t=await w.create(ue.newForm());i.validateResponse(t,null,()=>{const o=i.encodeId(t.data.documentId),V=i.encodeId(t.data.documentVersion);I.push({name:E.router.BACKOFFICE_EDIT_DOCUMENT_PAGE.name,params:{documentId:o,documentVersion:V}})}),s.value=!1}async function R(t){n.sortBy=t,await _()}async function x(t){n.pageNumber=t,await _()}async function _(){s.value=!0;let t=await w.search(n);i.validateResponse(t,null,()=>{U.value=t.data}),s.value=!1}return(t,o)=>{const V=c("breadcrumb-item"),H=c("breadcrumb"),K=c("cbutton"),m=c("form-field"),G=c("row"),W=c("cfilter"),$=c("icon-import"),j=c("cbutton-options"),q=c("table-actions"),p=c("ccolumn"),J=c("table-action-edit"),Q=c("table-action-detail"),X=c("ctable"),Y=c("card"),Z=c("page");return S(),C(Z,{title:t._lang.backoffice.document.pageTitle},{breadcrumb:u(()=>[a(H,{"has-home":!0},{default:u(()=>[a(V,{label:t._lang.backoffice.document.breadcrumbTitle},null,8,["label"])]),_:1})]),actions:u(()=>[a(K,{class:"col-12 col-sm-auto",type:e(d).buttonType.secondary,size:e(d).buttonSize.medium,title:t._lang.common.toAdd,icon:ne,onClick:P},null,8,["type","size","title"])]),default:u(()=>[a(Y,{shadow:!0},{body:u(()=>[a(W,{title:t._lang.common.filter,disabled:e(s),"clear-click":N,"apply-click":O,loading:e(s),collapsed:!0},{default:u(()=>[a(G,null,{default:u(()=>[a(m,{id:"code",modelValue:e(n).code,"onUpdate:modelValue":o[0]||(o[0]=l=>e(n).code=l),class:"mb-3 col-12 col-md-6 col-xl-4",label:t._lang.label.code,type:e(d).inputs.text,maxlength:45,disabled:e(s)},null,8,["modelValue","label","type","disabled"]),a(m,{class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(n).documentTypeIds,"onUpdate:modelValue":o[1]||(o[1]=l=>e(n).documentTypeIds=l),label:t._lang.label.documentTypeId,type:e(d).inputs.multiselect,options:e(T).documentTypeList,disabled:e(s),mode:e(d).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"]),a(m,{class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(n).abreviation,"onUpdate:modelValue":o[2]||(o[2]=l=>e(n).abreviation=l),label:t._lang.label.abreviation,type:e(d).inputs.text,maxlength:16,disabled:e(s)},null,8,["modelValue","label","type","disabled"]),a(m,{id:"organization",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(n).organization,"onUpdate:modelValue":o[3]||(o[3]=l=>e(n).organization=l),label:t._lang.label.organizationHost,type:e(d).inputs.multiselect,options:e(T).organizationList,disabled:e(s),valueProp:e(d).multiselectValueProp.value3},null,8,["modelValue","label","type","options","disabled","valueProp"]),a(m,{id:"name",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(n).name,"onUpdate:modelValue":o[4]||(o[4]=l=>e(n).name=l),label:t._lang.label.name,type:e(d).inputs.text,maxlength:45,disabled:e(s)},null,8,["modelValue","label","type","disabled"]),a(m,{id:"recordStateIds",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(n).recordStateIds,"onUpdate:modelValue":o[5]||(o[5]=l=>e(n).recordStateIds=l),label:t._lang.label.state,type:e(d).inputs.multiselect,options:e(y),disabled:e(s),mode:e(d).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"]),a(m,{id:"active",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(n).active,"onUpdate:modelValue":o[6]||(o[6]=l=>e(n).active=l),label:t._lang.label.active,type:e(d).inputs.checkbox,disabled:e(s)},null,8,["modelValue","label","type","disabled"])]),_:1})]),_:1},8,["title","disabled","loading"]),a(de,null,{default:u(()=>[a(q,{title:t._lang.common.tableActionTitle},{default:u(()=>[a(j,{type:e(d).buttonType.secondary},{default:u(()=>[a(se,{title:e(v).common.import},{default:u(()=>[a($,{color:"#002D74"})]),_:1},8,["title"])]),_:1},8,["type"])]),_:1},8,["title"]),a(X,{onSort:R,onChangePage:x,selectedItems:e(b),"onUpdate:selectedItems":o[7]||(o[7]=l=>k(b)?b.value=l:b=l),unselectedItems:e(g),"onUpdate:unselectedItems":o[8]||(o[8]=l=>k(g)?g.value=l:g=l),selectedState:e(f),"onUpdate:selectedState":o[9]||(o[9]=l=>k(f)?f.value=l:f=l),data:e(U),checkbox:!0,loading:e(s),defaultSort:"pointOfCareId",checkboxField:"code"},{columns:u(()=>[a(p,{name:t._lang.label.code,field:"code",sortable:!0},null,8,["name"]),a(p,{name:t._lang.label.documentTypeId,field:"documentType",sortField:"documentTypeId",sortable:!0},null,8,["name"]),a(p,{name:t._lang.label.abreviation,field:"abreviation",sortable:!0},null,8,["name"]),a(p,{name:t._lang.label.name,field:"name",sortable:!0},null,8,["name"]),a(p,{name:t._lang.label.state,field:"recordStateTypeId",align:e(d).columnAlign.center,custom:ce,options:e(A),sortable:!0},null,8,["name","align","options"])]),actions:u(l=>[l.item.recordStateTypeId==e(d).recordStateType.draft?(S(),C(J,{key:0,onClick:h=>D(l.item)},null,8,["onClick"])):M("",!0),l.item.recordStateTypeId>e(d).recordStateType.draft?(S(),C(Q,{key:1,onClick:h=>L(l.item)},null,8,["onClick"])):M("",!0)]),_:1},8,["selectedItems","unselectedItems","selectedState","data","loading"])]),_:1})]),_:1})]),_:1},8,["title"])}}};export{Ie as default};