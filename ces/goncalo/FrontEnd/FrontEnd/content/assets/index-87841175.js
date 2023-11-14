import{b as J,r as t,o as ee,u as o,l as f,c as O,m as N,n as _,e as Q,F as W,z as be,s as e,d as ve,M as le,i as oe,g as ce,j as Z,v as n,N as se,q as l,L as U,O as te,C as j,f as _e,h as de,a as fe,P as ne,A as X,y as Ie,x as Se}from"./index-6321ead1.js";import{_ as ue}from"./custom-label-cba5d34c.js";import{b as re}from"./helpers-35400f08.js";import{p as Te}from"./point-of-care-7c96ffab.js";import{s as ge}from"./service-7a7e3271.js";import{o as me}from"./organization-73a17f3e.js";import{_ as Ce}from"./extinct-confirm-26802525.js";import"./index.esm-ad78f132.js";const K={cards:()=>J.get("/task/cards"),search:y=>J.post("/task/search",y),cardsAssociations:()=>J.get("/task/cards/associations"),searchAssociations:y=>J.post("/task/search/associations",y),searchEndTerms:y=>J.post("/task/search/endterms",y),getLists:(y,T=!0)=>{const k={lang:y,onlyPublishState:T};return J.post("/task/lists",k)},cardEndTerms:()=>J.get("/task/cards/endterms")},ke={__name:"cards",props:{filter:{type:Function,required:!0},selected:{type:Object}},setup(y,{expose:T}){const k=y;let C=t(!0),u=t([]),i=t(null);ee(async()=>{C.value=!0;const g=await K.cards();i.value=k.selected,o.validateResponse(g,null,()=>{u.value=g.data}),C.value=!1});const m=g=>{i.value=g,k.filter(g)};return T({clearSelection:()=>{i.value=null}}),(g,A)=>{const E=f("filter-card"),V=f("filter-cards");return O(),N(V,null,{default:_(()=>[(O(!0),Q(W,null,be(e(u),d=>(O(),N(E,{label:g._lang.enums.recordStateType[d.recordStateId],counter:d.total,active:d.recordStateId===e(i).recordStateId,loading:e(C),onClick:w=>m(d)},null,8,["label","counter","active","loading","onClick"]))),256))]),_:1})}}},ie=ve("TasksStore",{state:()=>({stateTypeList:[],objectTypeList:[],organizationList:[],formToCompare:null}),getters:{getAll:y=>({stateTypeList:y.stateTypeList,objectTypeList:y.objectTypeList,organizationList:y.organizationList})},actions:{setLists(y){this.stateTypeList=y.stateTypeList,this.objectTypeList=y.objectTypeList,this.organizationList=y.organizationList},setFormToCompare(y){this.formToCompare=y}}}),Ae={__name:"index",setup(y){const T=le(),k=ie();oe();const C=ce(),u=Z(H());let i=t(!1),m=t([]),S=t([]),g=t(n.tableSelectedState.none),A=t(o.createEmptyDataSource()),E=t([]),V=t([]),d=t([]),w=t([]),h=t(0),z=t({recordStateId:n.recordStateType.draft}),B=t(null),p=t(0);function H(){return{pageNumber:0,sortBy:"Name",objectTypeIds:[],organization:null,recordStateTypeIds:[n.recordStateType.published],name:null}}const x=async r=>{u.sortBy=r,await G()},Y=()=>{Object.assign(u,H())},q=async(r=!0)=>{B.value.clearSelection(),Y(),r&&await M()},M=async()=>{await G()},G=async()=>{i.value=!0;const r=await K.search(u);o.validateResponse(r,null,()=>{A.value=r.data}),i.value=!1},c=async r=>{z.value=r,Y();const a=V.value.find(b=>r.recordStateId===b.value);u.recordStateTypeIds.push(a.value),h.value++,p.value++,await G()},v=async r=>{u.pageNumber=r,await G()};se(async()=>{i.value=!0;const r=await K.getLists(T.getLanguage);o.validateResponse(r,null,()=>{k.setLists(r.data),E.value=r.data.organizationList,V.value=r.data.stateTypeList,d.value=r.data.objectTypeList,w.value=o.concatItemsBadge(V.value,re.recordStateTypeBadgeOptions)}),i.value=!1}),ee(async()=>{u.recordStateTypeIds.push(n.recordStateType.draft),await G()});function D(r){let a=null,b=null;switch(r.objectTypeId){case 2:a=j.router.BACKOFFICE_TASKS_DETAIL_ENTITY_PAGE.name,b={organizationId:o.encodeId(r.id.id),organizationVersion:o.encodeId(r.id.version)};break;case 3:a=j.router.BACKOFFICE_TASKS_DETAIL_SERVICE_PAGE.name,b={serviceId:o.encodeId(r.id.id),serviceVersion:o.encodeId(r.id.version)};break;case 4:a=j.router.BACKOFFICE_TASKS_DETAIL_POINT_OF_CARE_PAGE.name,b={pointOfCareId:o.encodeId(r.id.id),pointOfCareVersion:o.encodeId(r.id.version)};break;case 5:a=j.router.BACKOFFICE_TASKS_DETAIL_DOCUMENT_PAGE.name,b={documentId:o.encodeId(r.id.id),documentVersion:o.encodeId(r.id.version)};break;case 6:a=j.router.BACKOFFICE_DETAIL_LOCATION_PAGE.name,b={locationId:o.encodeId(r.id.id),locationVersion:o.encodeId(r.id.version)};break}C.push({name:a,params:b})}return(r,a)=>{const b=f("form-field"),s=f("row"),P=f("cfilter"),R=f("ccolumn"),I=f("table-action-detail"),F=f("ctable"),ae=f("container-wrapper");return O(),Q(W,null,[l(ke,{filter:c,ref_key:"cardsRef",ref:B,selected:e(z)},null,8,["selected"]),(O(),N(P,{title:r._lang.common.filter,disabled:e(i),"clear-click":q,"apply-click":M,loading:e(i),class:"mt-30",key:e(h)},{default:_(()=>[l(s,null,{default:_(()=>[l(b,{id:"name",class:"mb-3 col-12 col-md-6",modelValue:u.name,"onUpdate:modelValue":a[0]||(a[0]=L=>u.name=L),label:r._lang.label.name,type:e(n).inputs.text,maxlength:45,disabled:e(i)},null,8,["modelValue","label","type","disabled"]),l(b,{id:"objectTypeIds",class:"mb-3 col-12 col-md-6",modelValue:u.objectTypeIds,"onUpdate:modelValue":a[1]||(a[1]=L=>u.objectTypeIds=L),label:r._lang.label.objectTypeId,type:e(n).inputs.multiselect,options:e(d),disabled:e(i),mode:e(n).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"])]),_:1}),l(s,null,{default:_(()=>[l(b,{id:"organization",class:"mb-3 col-12",modelValue:u.organization,"onUpdate:modelValue":a[2]||(a[2]=L=>u.organization=L),label:r._lang.label.parentOrganization,type:e(n).inputs.multiselect,options:e(E),disabled:e(i),valueProp:e(n).multiselectValueProp.value3},null,8,["modelValue","label","type","options","disabled","valueProp"])]),_:1})]),_:1},8,["title","disabled","loading"])),l(ae,null,{default:_(()=>[(O(),N(F,{onSort:x,onChangePage:v,selectedItems:e(m),"onUpdate:selectedItems":a[3]||(a[3]=L=>U(m)?m.value=L:m=L),unselectedItems:e(S),"onUpdate:unselectedItems":a[4]||(a[4]=L=>U(S)?S.value=L:S=L),selectedState:e(g),"onUpdate:selectedState":a[5]||(a[5]=L=>U(g)?g.value=L:g=L),data:e(A),checkbox:!1,loading:e(i),defaultSort:"Name",checkboxField:"Name",key:e(p)},{columns:_(()=>[l(R,{name:r._lang.label.objectTypeId,field:"objectTypeId",align:e(n).columnAlign.center,custom:ue,options:e(d),sortable:!0},null,8,["name","align","options"]),l(R,{name:r._lang.label.name,field:"name",sortable:!0},null,8,["name"]),l(R,{name:r._lang.label.updatedBy,field:"updatedBy",sortable:!0},null,8,["name"]),l(R,{name:r._lang.label.state,field:"recordStateTypeId",align:e(n).columnAlign.center,custom:te,options:e(w),sortable:!0},null,8,["name","align","options"])]),actions:_(L=>[l(I,{onClick:pe=>D(L.item)},null,8,["onClick"])]),_:1},8,["selectedItems","unselectedItems","selectedState","data","loading"]))]),_:1})],64)}}},Oe={__name:"cards",props:{filter:{type:Function,required:!0},selected:{type:Object}},setup(y,{expose:T}){const k=y;_e();const C=de();let u=t(!0),i=t([]),m=t(null);ee(async()=>{C.on(j.emitter.UPDATE_ASSOCIATION_CARD,async d=>{if(await A(),await E(),await V(),d&&d===+d){const w=i.value.filter(h=>h.id===d)[0];S(w)}}),m.value=k.selected,await A(),await E(),await V()}),fe(()=>{C.off(j.emitter.UPDATE_ASSOCIATION_CARD)});const S=d=>{m.value=d,k.filter(d)};T({clearSelection:()=>{m.value=null}});async function A(){u.value=!0;const d=await K.cards();o.validateResponse(d,null,()=>{i.value=d.data.filter(w=>w.recordStateId===n.recordStateType.approval).map(w=>({id:0,recordStateId:w.recordStateId,label:"Objectos",total:w.total,hash:"objetos"}))}),u.value=!1}async function E(){u.value=!0;const d=await K.cardsAssociations();o.validateResponse(d,null,()=>{d.data.length>0&&d.data[0].recordStateId!==n.recordStateType.returned?i.value.push({id:1,recordStateId:n.recordStateType.draft,label:"Associações",total:d.data[0].total,hash:"associacoes"}):i.value.push({id:1,recordStateId:n.recordStateType.draft,label:"Associações",total:0,hash:"associacoes"})}),u.value=!1}async function V(){u.value=!0;const d=await K.cardEndTerms();o.validateResponse(d,null,()=>{d.data.length>0&&d.data[0].recordStateId!==n.recordStateType.returned?i.value.push({id:2,recordStateId:n.recordStateType.extinct,label:"Final de Vigência",total:d.data[0].total,hash:"final-vigencia"}):i.value.push({id:2,recordStateId:n.recordStateType.extinct,label:"Final de Vigência",total:0,hash:"final-vigencia"})}),u.value=!1}return(d,w)=>{const h=f("filter-card"),z=f("filter-cards");return O(),N(z,{style:{"justify-content":"start !important"}},{default:_(()=>[(O(!0),Q(W,null,be(e(i),(B,p)=>(O(),N(h,{key:p,label:B.label,counter:B.total,active:B.recordStateId===e(m).recordStateId,loading:e(u),onClick:H=>S(B)},null,8,["label","counter","active","loading","onClick"]))),128))]),_:1})}}},Ee={__name:"objects",setup(y){const T=le(),k=ie(),C=oe(),u=ce(),i=Z(B());let m=t(!1),S=t([]),g=t([]),A=t(n.tableSelectedState.none),E=t(o.createEmptyDataSource()),V=t([]),d=t([]),w=t([]),h=t([]),z=t(0);t({recordStateId:n.recordStateType.draft});function B(){return{pageNumber:0,sortBy:"Name",objectTypeIds:[],organization:null,recordStateTypeIds:[n.recordStateType.approval],name:null}}const p=async c=>{i.sortBy=c,await q()},H=()=>{Object.assign(i,B())},x=async(c=!0)=>{H(),c&&await Y()},Y=async()=>{await q()},q=async()=>{m.value=!0;const c=await K.search(i);o.validateResponse(c,null,()=>{E.value=c.data}),m.value=!1},M=async c=>{i.pageNumber=c,await q()};se(async()=>{m.value=!0;const c=await K.getLists(T.getLanguage);o.validateResponse(c,null,()=>{k.setLists(c.data),V.value=c.data.organizationList,d.value=o.convertEnumToArray(C.enums.recordStateType),w.value=c.data.objectTypeList,h.value=o.concatItemsBadge(d.value,re.recordStateTypeBadgeOptions)}),m.value=!1}),ee(async()=>{await q()});function G(c){let v=null,D=null;switch(c.objectTypeId){case 2:v=j.router.BACKOFFICE_TASKS_DETAIL_ENTITY_PAGE.name,D={organizationId:o.encodeId(c.id.id),organizationVersion:o.encodeId(c.id.version)};break;case 3:v=j.router.BACKOFFICE_TASKS_DETAIL_SERVICE_PAGE.name,D={serviceId:o.encodeId(c.id.id),serviceVersion:o.encodeId(c.id.version)};break;case 4:v=j.router.BACKOFFICE_TASKS_DETAIL_POINT_OF_CARE_PAGE.name,D={pointOfCareId:o.encodeId(c.id.id),pointOfCareVersion:o.encodeId(c.id.version)};break;case 5:v=j.router.BACKOFFICE_TASKS_DETAIL_DOCUMENT_PAGE.name,D={documentId:o.encodeId(c.id.id),documentVersion:o.encodeId(c.id.version)};break;case 6:v=j.router.BACKOFFICE_DETAIL_LOCATION_PAGE.name,D={locationId:o.encodeId(c.id.id),locationVersion:o.encodeId(c.id.version)};break}u.push({name:v,params:D})}return(c,v)=>{const D=f("form-field"),r=f("row"),a=f("cfilter"),b=f("ccolumn"),s=f("table-action-detail"),P=f("ctable"),R=f("container-wrapper");return O(),Q(W,null,[(O(),N(a,{title:c._lang.common.filter,disabled:e(m),"clear-click":x,"apply-click":Y,loading:e(m),class:"mt-30",key:e(z)},{default:_(()=>[l(r,null,{default:_(()=>[l(D,{class:"mb-3 col-12 col-md-6",modelValue:i.name,"onUpdate:modelValue":v[0]||(v[0]=I=>i.name=I),label:c._lang.label.name,type:e(n).inputs.text,maxlength:45,disabled:e(m)},null,8,["modelValue","label","type","disabled"]),l(D,{class:"mb-3 col-12 col-md-6",modelValue:i.objectTypeIds,"onUpdate:modelValue":v[1]||(v[1]=I=>i.objectTypeIds=I),label:c._lang.label.objectTypeId,type:e(n).inputs.multiselect,options:e(w),disabled:e(m),mode:e(n).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"])]),_:1}),l(r,null,{default:_(()=>[l(D,{class:"mb-3 col-12 col-md-6",modelValue:i.organization,"onUpdate:modelValue":v[2]||(v[2]=I=>i.organization=I),label:c._lang.label.parentOrganization,type:e(n).inputs.multiselect,options:e(V),disabled:e(m),valueProp:e(n).multiselectValueProp.value3},null,8,["modelValue","label","type","options","disabled","valueProp"]),l(D,{class:"mb-3 col-12 col-md-6",modelValue:i.recordStateTypeIds,"onUpdate:modelValue":v[3]||(v[3]=I=>i.recordStateTypeIds=I),label:c._lang.label.state,type:e(n).inputs.multiselect,options:e(d),disabled:e(m),mode:e(n).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"])]),_:1})]),_:1},8,["title","disabled","loading"])),l(R,null,{default:_(()=>[l(P,{onSort:p,onChangePage:M,selectedItems:e(S),"onUpdate:selectedItems":v[4]||(v[4]=I=>U(S)?S.value=I:S=I),unselectedItems:e(g),"onUpdate:unselectedItems":v[5]||(v[5]=I=>U(g)?g.value=I:g=I),selectedState:e(A),"onUpdate:selectedState":v[6]||(v[6]=I=>U(A)?A.value=I:A=I),data:e(E),checkbox:!1,loading:e(m),defaultSort:"Name",checkboxField:"Name"},{columns:_(()=>[l(b,{name:c._lang.label.objectTypeId,field:"objectTypeId",align:e(n).columnAlign.center,custom:ue,options:e(w),sortable:!0},null,8,["name","align","options"]),l(b,{name:c._lang.label.name,field:"name",sortable:!0},null,8,["name"]),l(b,{name:c._lang.label.updatedBy,field:"updatedBy",sortable:!0},null,8,["name"]),l(b,{name:c._lang.label.state,field:"recordStateTypeId",align:e(n).columnAlign.center,custom:te,options:e(h),sortable:!0},null,8,["name","align","options"])]),actions:_(I=>[l(s,{onClick:F=>G(I.item)},null,8,["onClick"])]),_:1},8,["selectedItems","unselectedItems","selectedState","data","loading"])]),_:1})],64)}}},we={__name:"associations",setup(y){const T=le(),k=ie(),C=oe();ce();const u=de(),i=Z(Y()),m="confirm-verify";let S=t(!1),g=t([]),A=t([]),E=t(n.tableSelectedState.none),V=t(o.createEmptyDataSource()),d=t([]),w=t([]),h=t([]),z=t([]);t(0);let B=t(!1);t({recordStateId:n.recordStateType.draft});let p=Z({pointOfCareId:null,pointOfCareVersion:null,serviceId:null,serviceVersion:null,approve:null});const H=t(ne.havePermission(n.permissions.service.approve)),x=t(ne.havePermission(n.permissions.pointOfCare.approve));function Y(){return{pageNumber:0,sortBy:"ServiceName",objectTypeIds:[],organization:null,recordStateTypeIds:[n.recordStateType.approval,n.recordStateType.draft,n.recordStateType.submitted],name:null}}const q=async s=>{i.sortBy=s,await M()},M=async()=>{S.value=!0;const s=await K.searchAssociations(i);o.validateResponse(s,null,()=>{V.value=s.data}),S.value=!1},G=async s=>{i.pageNumber=s,await M()};se(async()=>{S.value=!0;const s=await K.getLists(T.getLanguage);o.validateResponse(s,null,()=>{k.setLists(s.data),d.value=s.data.organizationList,w.value=o.convertEnumToArray(C.enums.recordStateType),h.value=s.data.objectTypeList,z.value=o.concatItemsBadge(w.value,re.recordStateTypeBadgeOptions)}),S.value=!1}),ee(async()=>{await M()});function c(s){p.pointOfCareId=s.pointOfCare.id,p.pointOfCareVersion=s.pointOfCare.version,p.serviceId=s.service.id,p.serviceVersion=s.service.version}function v(s){c(s),B.value=!0,o.showModalById(m)}function D(s){c(s),B.value=!1,o.showModalById(m)}async function r(){p.approve=!0,await b(),await M()}async function a(){p.approve=!1,await b(),await M()}async function b(){S.value=!0;let s;B.value?s=await ge.associationApprove(p):s=await Te.associationApprove(p);let P=p.approve?C.common.associationApproveSucess:C.common.associationRefuseSucess;o.validateResponse(s,P,()=>{u.emit(j.emitter.UPDATE_ASSOCIATION_CARD)}),S.value=!1}return(s,P)=>{const R=f("ccolumn"),I=f("table-action-approve"),F=f("ctable"),ae=f("container-wrapper"),L=f("cbutton"),pe=f("modal");return O(),Q(W,null,[l(ae,{class:"mt-30"},{default:_(()=>[l(F,{onSort:q,onChangePage:G,selectedItems:e(g),"onUpdate:selectedItems":P[0]||(P[0]=$=>U(g)?g.value=$:g=$),unselectedItems:e(A),"onUpdate:unselectedItems":P[1]||(P[1]=$=>U(A)?A.value=$:A=$),selectedState:e(E),"onUpdate:selectedState":P[2]||(P[2]=$=>U(E)?E.value=$:E=$),data:e(V),checkbox:!1,loading:e(S),defaultSort:"pointOfCareName",checkboxField:"Name"},{columns:_(()=>[l(R,{name:s._lang.label.pointOfCare,field:"pointOfCareName",sortable:!0},null,8,["name"]),l(R,{name:s._lang.label.state,field:"pointOfCareRecordStateTypeId",align:e(n).columnAlign.center,custom:te,options:e(z),sortable:!0},null,8,["name","align","options"]),l(R,{name:s._lang.label.service,field:"serviceName",sortable:!0},null,8,["name"]),l(R,{name:s._lang.label.updatedBy,field:"updatedBy",sortable:!0},null,8,["name"]),l(R,{name:s._lang.label.state,field:"serviceRecordStateTypeId",align:e(n).columnAlign.center,custom:te,options:e(z),sortable:!0},null,8,["name","align","options"])]),actions:_($=>[H.value?(O(),N(I,{key:0,onClick:ye=>v($.item),"data-bs-toggle":"tooltip","data-bs-title":s._lang.common.verifyServiço,"data-bs-placement":"top"},null,8,["onClick","data-bs-title"])):X("",!0),x.value?(O(),N(I,{key:1,onClick:ye=>D($.item),"data-bs-toggle":"tooltip","data-bs-title":s._lang.common.verifyPointOfCare,"data-bs-placement":"top"},null,8,["onClick","data-bs-title"])):X("",!0)]),_:1},8,["selectedItems","unselectedItems","selectedState","data","loading"])]),_:1}),l(pe,{id:m,size:e(n).modalSize.medium,title:s._lang.common.confirmation},{body:_(()=>[Ie(Se(s._lang.common.associationModalTxt),1)]),footer:_(()=>[l(L,{title:s._lang.common.close,type:e(n).buttonType.secondary,"data-bs-dismiss":"modal","aria-label":"Close",disabled:!1},null,8,["title","type"]),l(L,{onClick:a,title:s._lang.common.refuse,disabled:!1,"data-bs-dismiss":"modal","aria-label":"Close"},null,8,["title"]),l(L,{onClick:r,title:s._lang.common.approve,disabled:!1,"data-bs-dismiss":"modal","aria-label":"Close"},null,8,["title"])]),_:1},8,["size","title"])],64)}}},De={__name:"end-terms",emits:["refreshOnExtinct"],setup(y,{emit:T}){const k=de(),C=le(),u=ie(),i=oe(),m=Z(G()),S="confirm-extinct-submit";let g=t(!1),A=t([]),E=t([]),V=t(n.tableSelectedState.none),d=t(o.createEmptyDataSource()),w=t([]),h=t([]),z=t([]),B=t([]),p=Z({startDate:null,endDate:null,service:me,itemId:0,itemVersion:0,backRoute:j.router.BACKOFFICE_TASKS_PAGE.name,itemIdField:"organizationId"}),H=t(null),x=t(null);const Y=t(ne.havePermission(n.permissions.service.approve)),q=t(ne.havePermission(n.permissions.organization.approve));function M(a){H.value=a,p.startDate=a.startDate,p.endDate=a.endDate,p.itemId=a.id.id,p.itemVersion=a.id.version,a.objectTypeId===2&&(p.itemIdField="organizationId",p.service=me),a.objectTypeId===3&&(p.itemIdField="serviceId",p.service=ge),o.showModalById(S),x.value.setDate(a.endDate)}function G(){return{pageNumber:0,sortBy:"objectTypeId",objectTypeIds:[],organization:null,recordStateTypeIds:[n.recordStateType.approval,n.recordStateType.draft,n.recordStateType.submitted],name:null}}const c=async()=>{k.emit(j.emitter.UPDATE_ASSOCIATION_CARD,2),k.emit(j.emitter.UPDATE_ENDTERM_CARD,null)},v=async a=>{m.sortBy=a,await D()},D=async()=>{g.value=!0;const a=await K.searchEndTerms(m);o.validateResponse(a,null,()=>{d.value=a.data,d.value.items.forEach(b=>{o.isDate(b.endDate)&&(b.endDateFormated=o.formatDate(new Date(b.endDate)))})}),g.value=!1},r=async a=>{m.pageNumber=a,await D()};return se(async()=>{g.value=!0;const a=await K.getLists(C.getLanguage);o.validateResponse(a,null,()=>{u.setLists(a.data),w.value=a.data.organizationList,h.value=o.convertEnumToArray(i.enums.recordStateType),z.value=a.data.objectTypeList,B.value=o.concatItemsBadge(h.value,re.recordStateTypeBadgeOptions)}),g.value=!1}),ee(async()=>{k.on(j.emitter.UPDATE_ENDTERM_CARD,async()=>{await D()}),await D()}),fe(()=>{k.off(j.emitter.UPDATE_ENDTERM_CARD)}),(a,b)=>{const s=f("ccolumn"),P=f("table-action-delete"),R=f("ctable"),I=f("container-wrapper");return O(),Q(W,null,[l(I,{class:"mt-30"},{default:_(()=>[l(R,{onSort:v,onChangePage:r,selectedItems:e(A),"onUpdate:selectedItems":b[0]||(b[0]=F=>U(A)?A.value=F:A=F),unselectedItems:e(E),"onUpdate:unselectedItems":b[1]||(b[1]=F=>U(E)?E.value=F:E=F),selectedState:e(V),"onUpdate:selectedState":b[2]||(b[2]=F=>U(V)?V.value=F:V=F),data:e(d),checkbox:!1,loading:e(g),defaultSort:"objectTypeId",checkboxField:"objectTypeId"},{columns:_(()=>[l(s,{name:a._lang.label.objectTypeId,field:"objectTypeId",align:e(n).columnAlign.center,custom:ue,options:e(z),sortable:!0},null,8,["name","align","options"]),l(s,{name:a._lang.label.name,field:"name",sortable:!0},null,8,["name"]),l(s,{name:a._lang.label.updatedBy,field:"updatedBy",sortable:!0},null,8,["name"]),l(s,{name:a._lang.label.endDate,field:"endDateFormated",sortField:"endDate",sortable:!0},null,8,["name"]),l(s,{name:a._lang.label.state,field:"recordStateTypeId",align:e(n).columnAlign.center,custom:te,options:e(B),sortable:!0},null,8,["name","align","options"])]),actions:_(F=>[q.value&&F.item.objectTypeId===2||Y.value&&F.item.objectTypeId===3?(O(),N(P,{key:0,onClick:ae=>M(F.item),"data-bs-toggle":"tooltip","data-bs-title":a._lang.common.extinctBtn,"data-bs-placement":"top"},null,8,["onClick","data-bs-title"])):X("",!0)]),_:1},8,["selectedItems","unselectedItems","selectedState","data","loading"])]),_:1}),l(Ce,{id:S,startDate:e(p).startDate,endDate:e(p).endDate,service:e(p).service,itemId:e(p).itemId,itemVersion:e(p).itemVersion,backRoute:e(p).backRoute,itemIdField:e(p).itemIdField,ref_key:"extinctConfirmModalRef",ref:x,"callback-success":c},null,8,["startDate","endDate","service","itemId","itemVersion","backRoute","itemIdField"])],64)}}},Le={__name:"index",setup(y){let T=t({recordStateId:n.recordStateType.approval,id:0});const k=async C=>{T.value=C};return(C,u)=>(O(),Q(W,null,[l(Oe,{filter:k,ref:"cardsRef",selected:e(T)},null,8,["selected"]),e(T).id===0?(O(),N(Ee,{key:0})):X("",!0),e(T).id===1?(O(),N(we,{key:1})):X("",!0),e(T).id===2?(O(),N(De,{key:2})):X("",!0)],64))}},ze={__name:"index",setup(y){return(T,k)=>{const C=f("tab-content"),u=f("tabs"),i=f("page");return O(),N(i,{title:T._lang.backoffice.tasks.pageTitle},{default:_(()=>[l(u,null,{default:_(()=>[l(C,{id:"edicao",title:T._lang.backoffice.tasks.inEdition,active:!0,"always-refresh":!0},{default:_(()=>[l(Ae)]),_:1},8,["title"]),l(C,{id:"aprovacao",title:T._lang.backoffice.tasks.toApprove,icon:e(n).tabIcons.plus,"always-refresh":!0},{default:_(()=>[l(Le)]),_:1},8,["title","icon"])]),_:1})]),_:1},8,["title"])}}};export{ze as default};
