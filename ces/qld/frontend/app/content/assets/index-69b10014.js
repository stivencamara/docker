import{n as Y,i as s,b as J,j as o,r as p,o as E,c as N,w as _,e as Q,F as W,H as ie,m as e,B as re,J as Z,q as x,h as ee,s as te,v as d,K as ae,a as n,z as B,L as le,l as v}from"./index-d8a56bcc.js";import{_ as oe}from"./custom-label-ac933cb3.js";import{b as ne}from"./helpers-d89764d1.js";import"./index.esm-d77c3574.js";const U={cards:()=>Y.get("/task/cards"),search:m=>Y.post("/task/search",m),getLists:m=>Y.get(`/task/lists/${m}`)},de={__name:"cards",props:{filter:{type:Function,required:!0},selected:{type:Object}},setup(m,{expose:C}){const L=m;let T=s(!0),u=s([]),l=s(null);J(async()=>{T.value=!0;const g=await U.cards();l.value=L.selected,o.validateResponse(g,null,()=>{u.value=g.data}),T.value=!1});const b=g=>{l.value=g,L.filter(g)};return C({clearSelection:()=>{l.value=null}}),(g,k)=>{const O=p("filter-card"),A=p("filter-cards");return E(),N(A,null,{default:_(()=>[(E(!0),Q(W,null,ie(e(u),y=>(E(),N(O,{label:g._lang.enums.recordStateType[y.recordStateId],counter:y.total,active:y.recordStateId===e(l).recordStateId,loading:e(T),onClick:V=>b(y)},null,8,["label","counter","active","loading","onClick"]))),256))]),_:1})}}},se=re("TasksStore",{state:()=>({stateTypeList:[],objectTypeList:[],organizationList:[],formToCompare:null}),getters:{getAll:m=>({stateTypeList:m.stateTypeList,objectTypeList:m.objectTypeList,organizationList:m.organizationList})},actions:{setLists(m){this.stateTypeList=m.stateTypeList,this.objectTypeList=m.objectTypeList,this.organizationList=m.organizationList},setFormToCompare(m){this.formToCompare=m}}}),ce={__name:"in-edition",setup(m){const C=Z(),L=se();x();const T=ee(),u=te(R());let l=s(!1),b=s([]),S=s([]),g=s(d.tableSelectedState.none),k=s(o.createEmptyDataSource()),O=s([]),A=s([]),y=s([]),V=s([]),z=s(0),D=s({recordStateId:d.recordStateType.draft}),P=s(null);function R(){return{pageNumber:0,sortBy:"Name",objectTypeIds:[],organization:null,recordStateTypeIds:[],name:null}}const h=async t=>{u.sortBy=t,await F()},M=()=>{Object.assign(u,R())},G=async(t=!0)=>{P.value.clearSelection(),M(),t&&await w()},w=async()=>{await F()},F=async()=>{l.value=!0;const t=await U.search(u);o.validateResponse(t,null,()=>{k.value=t.data}),l.value=!1},H=async t=>{D.value=t,M();const i=A.value.find(f=>t.recordStateId===f.value);u.recordStateTypeIds.push(i.value),z.value++,await F()},a=async t=>{u.pageNumber=t,await F()};ae(async()=>{l.value=!0;const t=await U.getLists(C.getLanguage);o.validateResponse(t,null,()=>{L.setLists(t.data),O.value=t.data.organizationList,A.value=t.data.stateTypeList,y.value=t.data.objectTypeList,V.value=o.concatItemsBadge(A.value,ne.recordStateTypeBadgeOptions)}),l.value=!1}),J(async()=>{u.recordStateTypeIds.push(d.recordStateType.draft),await F()});function r(t){let i=null,f=null;switch(t.objectTypeId){case 2:i=v.router.BACKOFFICE_TASKS_DETAIL_ENTITY_PAGE.name,f={organizationId:o.encodeId(t.id.id),organizationVersion:o.encodeId(t.id.version)};break;case 3:i=v.router.BACKOFFICE_TASKS_DETAIL_SERVICE_PAGE.name,f={serviceId:o.encodeId(t.id.id),serviceVersion:o.encodeId(t.id.version)};break;case 4:i=v.router.BACKOFFICE_TASKS_DETAIL_POINT_OF_CARE_PAGE.name,f={pointOfCareId:o.encodeId(t.id.id),pointOfCareVersion:o.encodeId(t.id.version)};break;case 5:i=v.router.BACKOFFICE_TASKS_DETAIL_DOCUMENT_PAGE.name,f={documentId:o.encodeId(t.id.id),documentVersion:o.encodeId(t.id.version)};break;case 6:i=v.router.BACKOFFICE_DETAIL_LOCATION_PAGE.name,f={locationId:o.encodeId(t.id.id),locationVersion:o.encodeId(t.id.version)};break}T.push({name:i,params:f})}return(t,i)=>{const f=p("form-field"),j=p("row"),$=p("cfilter"),K=p("ccolumn"),q=p("table-action-detail"),c=p("ctable"),X=p("container-wrapper");return E(),Q(W,null,[n(de,{filter:H,ref_key:"cardsRef",ref:P,selected:e(D)},null,8,["selected"]),(E(),N($,{title:t._lang.common.filter,disabled:e(l),"clear-click":G,"apply-click":w,loading:e(l),class:"mt-30",key:e(z)},{default:_(()=>[n(j,null,{default:_(()=>[n(f,{id:"name",class:"mb-3 col-12 col-md-6",modelValue:u.name,"onUpdate:modelValue":i[0]||(i[0]=I=>u.name=I),label:t._lang.label.name,type:e(d).inputs.text,maxlength:45,disabled:e(l)},null,8,["modelValue","label","type","disabled"]),n(f,{id:"objectTypeIds",class:"mb-3 col-12 col-md-6",modelValue:u.objectTypeIds,"onUpdate:modelValue":i[1]||(i[1]=I=>u.objectTypeIds=I),label:t._lang.label.objectTypeId,type:e(d).inputs.multiselect,options:e(y),disabled:e(l),mode:e(d).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"])]),_:1}),n(j,null,{default:_(()=>[n(f,{id:"organization",class:"mb-3 col-12",modelValue:u.organization,"onUpdate:modelValue":i[2]||(i[2]=I=>u.organization=I),label:t._lang.label.parentOrganization,type:e(d).inputs.multiselect,options:e(O),disabled:e(l),valueProp:e(d).multiselectValueProp.value3},null,8,["modelValue","label","type","options","disabled","valueProp"])]),_:1})]),_:1},8,["title","disabled","loading"])),n(X,null,{default:_(()=>[n(c,{onSort:h,onChangePage:a,selectedItems:e(b),"onUpdate:selectedItems":i[3]||(i[3]=I=>B(b)?b.value=I:b=I),unselectedItems:e(S),"onUpdate:unselectedItems":i[4]||(i[4]=I=>B(S)?S.value=I:S=I),selectedState:e(g),"onUpdate:selectedState":i[5]||(i[5]=I=>B(g)?g.value=I:g=I),data:e(k),checkbox:!1,loading:e(l),defaultSort:"Name",checkboxField:"Name"},{columns:_(()=>[n(K,{name:t._lang.label.objectTypeId,field:"objectTypeId",align:e(d).columnAlign.center,custom:oe,options:e(y),sortable:!0},null,8,["name","align","options"]),n(K,{name:t._lang.label.name,field:"name",sortable:!0},null,8,["name"]),n(K,{name:t._lang.label.state,field:"recordStateTypeId",align:e(d).columnAlign.center,custom:le,options:e(V),sortable:!0},null,8,["name","align","options"])]),actions:_(I=>[n(q,{onClick:pe=>r(I.item)},null,8,["onClick"])]),_:1},8,["selectedItems","unselectedItems","selectedState","data","loading"])]),_:1})],64)}}},ue={__name:"to-approve",setup(m){const C=Z(),L=se(),T=x(),u=ee(),l=te(P());let b=s(!1),S=s([]),g=s([]),k=s(d.tableSelectedState.none),O=s(o.createEmptyDataSource()),A=s([]),y=s([]),V=s([]),z=s([]),D=s(0);function P(){return{pageNumber:0,sortBy:"Name",objectTypeIds:[],organization:null,recordStateTypeIds:[d.recordStateType.approval],name:null}}const R=async a=>{l.sortBy=a,await w()},h=()=>{Object.assign(l,P())},M=async(a=!0)=>{h(),a&&await G()},G=async()=>{await w()},w=async()=>{b.value=!0;const a=await U.search(l);o.validateResponse(a,null,()=>{O.value=a.data}),b.value=!1},F=async a=>{l.pageNumber=a,await w()};ae(async()=>{b.value=!0;const a=await U.getLists(C.getLanguage);o.validateResponse(a,null,()=>{L.setLists(a.data),A.value=a.data.organizationList,y.value=o.convertEnumToArray(T.enums.recordStateType),V.value=a.data.objectTypeList,z.value=o.concatItemsBadge(y.value,ne.recordStateTypeBadgeOptions)}),b.value=!1}),J(async()=>{await w()});function H(a){let r=null,t=null;switch(a.objectTypeId){case 2:r=v.router.BACKOFFICE_TASKS_DETAIL_ENTITY_PAGE.name,t={organizationId:o.encodeId(a.id.id),organizationVersion:o.encodeId(a.id.version)};break;case 3:r=v.router.BACKOFFICE_TASKS_DETAIL_SERVICE_PAGE.name,t={serviceId:o.encodeId(a.id.id),serviceVersion:o.encodeId(a.id.version)};break;case 4:r=v.router.BACKOFFICE_TASKS_DETAIL_POINT_OF_CARE_PAGE.name,t={pointOfCareId:o.encodeId(a.id.id),pointOfCareVersion:o.encodeId(a.id.version)};break;case 5:r=v.router.BACKOFFICE_TASKS_DETAIL_DOCUMENT_PAGE.name,t={documentId:o.encodeId(a.id.id),documentVersion:o.encodeId(a.id.version)};break;case 6:r=v.router.BACKOFFICE_DETAIL_LOCATION_PAGE.name,t={locationId:o.encodeId(a.id.id),locationVersion:o.encodeId(a.id.version)};break}u.push({name:r,params:t})}return(a,r)=>{const t=p("form-field"),i=p("row"),f=p("cfilter"),j=p("ccolumn"),$=p("table-action-detail"),K=p("ctable"),q=p("container-wrapper");return E(),Q(W,null,[(E(),N(f,{title:a._lang.common.filter,disabled:e(b),"clear-click":M,"apply-click":G,loading:e(b),class:"mt-30",key:e(D)},{default:_(()=>[n(i,null,{default:_(()=>[n(t,{class:"mb-3 col-12 col-md-6",modelValue:l.name,"onUpdate:modelValue":r[0]||(r[0]=c=>l.name=c),label:a._lang.label.name,type:e(d).inputs.text,maxlength:45,disabled:e(b)},null,8,["modelValue","label","type","disabled"]),n(t,{class:"mb-3 col-12 col-md-6",modelValue:l.objectTypeIds,"onUpdate:modelValue":r[1]||(r[1]=c=>l.objectTypeIds=c),label:a._lang.label.objectTypeId,type:e(d).inputs.multiselect,options:e(V),disabled:e(b),mode:e(d).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"])]),_:1}),n(i,null,{default:_(()=>[n(t,{class:"mb-3 col-12 col-md-6",modelValue:l.organization,"onUpdate:modelValue":r[2]||(r[2]=c=>l.organization=c),label:a._lang.label.parentOrganization,type:e(d).inputs.multiselect,options:e(A),disabled:e(b),valueProp:e(d).multiselectValueProp.value3},null,8,["modelValue","label","type","options","disabled","valueProp"]),n(t,{class:"mb-3 col-12 col-md-6",modelValue:l.recordStateTypeIds,"onUpdate:modelValue":r[3]||(r[3]=c=>l.recordStateTypeIds=c),label:a._lang.label.state,type:e(d).inputs.multiselect,options:e(y),disabled:e(b),mode:e(d).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"])]),_:1})]),_:1},8,["title","disabled","loading"])),n(q,null,{default:_(()=>[n(K,{onSort:R,onChangePage:F,selectedItems:e(S),"onUpdate:selectedItems":r[4]||(r[4]=c=>B(S)?S.value=c:S=c),unselectedItems:e(g),"onUpdate:unselectedItems":r[5]||(r[5]=c=>B(g)?g.value=c:g=c),selectedState:e(k),"onUpdate:selectedState":r[6]||(r[6]=c=>B(k)?k.value=c:k=c),data:e(O),checkbox:!1,loading:e(b),defaultSort:"Name",checkboxField:"Name"},{columns:_(()=>[n(j,{name:a._lang.label.objectTypeId,field:"objectTypeId",align:e(d).columnAlign.center,custom:oe,options:e(V),sortable:!0},null,8,["name","align","options"]),n(j,{name:a._lang.label.name,field:"name",sortable:!0},null,8,["name"]),n(j,{name:a._lang.label.state,field:"recordStateTypeId",align:e(d).columnAlign.center,custom:le,options:e(z),sortable:!0},null,8,["name","align","options"])]),actions:_(c=>[n($,{onClick:X=>H(c.item)},null,8,["onClick"])]),_:1},8,["selectedItems","unselectedItems","selectedState","data","loading"])]),_:1})],64)}}},Ie={__name:"index",setup(m){return(C,L)=>{const T=p("tab-content"),u=p("tabs"),l=p("page");return E(),N(l,{title:C._lang.backoffice.tasks.pageTitle},{default:_(()=>[n(u,null,{default:_(()=>[n(T,{id:"edicao",title:C._lang.backoffice.tasks.inEdition,active:!0,"always-refresh":!0},{default:_(()=>[n(ce)]),_:1},8,["title"]),n(T,{id:"aprovacao",title:C._lang.backoffice.tasks.toApprove,icon:e(d).tabIcons.plus,"always-refresh":!0},{default:_(()=>[n(ue)]),_:1},8,["title","icon"])]),_:1})]),_:1},8,["title"])}}};export{Ie as default};
