import{i as X,h as oe,g as ee,r as v,k as z,c as y,l as w,w as L,t as ne,v as W,p as a,I as ie,s as t,y as k,e as D,n as p,u as s,G as se,o as re,z as P,a as de,F as O,m as le,R as ae,K as ce,j as x,M as K,Y as ue,O as me,Z as pe,H as ye}from"./index-c417b10a.js";import{b as G}from"./helpers-422844e7.js";import{b as be}from"./refusal-45a989d4.js";import{p as fe}from"./helpers-bb0e4cec.js";import{o as ge}from"./helpers-491ef55a.js";import{d as Te}from"./helpers-662deb59.js";import{s as Se}from"./helpers-9f3bdf36.js";import{h as Ie}from"./helpers-bbfa2101.js";import{s as ve}from"./settings-fb41674a.js";const ke={key:1},ze={__name:"extinct-confirm",props:{id:{String,required:!0,default:"confirm-extinct-submit"},startDate:{Date,required:!0},endDate:{Date,required:!1},service:{type:Object,required:!0},itemId:{type:[String,Number],required:!0},itemVersion:{type:[String,Number],required:!0},backRoute:{type:String,required:!0},itemIdField:{type:String,required:!0}},setup(q){const o=q,e=X();oe();const _=ee();let h=v(!1),l=v(o.endDate);async function f(){h.value=!0;let d=await o.service.extinct(o.itemId,o.itemVersion,l.value);s.validateResponse(d,e.common.extinctModalSucess[o.itemIdField],()=>{_.push({name:o.backRoute})}),h.value=!1}return(d,F)=>{const g=z("form-field"),n=z("cbutton"),A=z("modal");return y(),w(A,{id:o.id,title:d._lang.common.extinctModalTitle,size:a(t).modalSize.medium},{body:L(()=>[ne(W(d._lang.common.extinctconfirm)+" ",1),o.endDate==null?(y(),w(g,{key:0,id:"endDate",class:"mb-3 mt-3 col-12",modelValue:a(l),"onUpdate:modelValue":F[0]||(F[0]=T=>ie(l)?l.value=T:l=T),label:d._lang.label.endDate,type:a(t).inputs.datepicker,placeholder:"dd/mm/aaaa",minDate:o.startDate,maxDate:new Date},null,8,["modelValue","label","type","minDate","maxDate"])):k("",!0),a(l)==null&&o.endDate==null?(y(),D("span",ke,W(d._lang.common.extinctModalTxt),1)):k("",!0)]),footer:L(()=>[p(n,{title:d._lang.common.cancel,type:a(t).buttonType.secondary,"data-bs-dismiss":"modal","aria-label":"Close",disabled:a(h)},null,8,["title","type","disabled"]),p(n,{title:d._lang.common.confirm,onClick:f,disabled:a(h)||a(l)==null,"data-bs-dismiss":"modal","aria-label":"Close"},null,8,["title","disabled"])]),_:1},8,["id","title","size"])}}},he={__name:"record-state-actions",props:{loading:{Boolean,required:!0},canEdit:{Boolean,required:!0},recordStateTypeId:{required:!0},service:{type:Object,required:!0},itemId:{type:Number,required:!0},itemVersion:{type:Number,required:!0},objectTypeId:{required:!0},name:{type:String},store:{type:Object,required:!0},itemVersionField:{type:String,required:!0},itemIdField:{type:String,required:!0},editRoute:{type:String,required:!0}},setup(q){const o=q,e=X(),_=oe(),h=ee();let l="record-state-type",f=v(null),d=v(0),F=v(!1),g=v(!1),n=se({refusalTypeId:null,description:""}),A=v(s.createEmptyDataSource()),T=v(null);const J=()=>{g.value=!1},$=async()=>{switch(d.value){case t.recordStateType.archived:await R();break;case t.recordStateType.submitted:await Q();break;case t.recordStateType.draft:await S();break;case t.recordStateType.approval:await E();break;case t.recordStateType.returned:await Z();break;case t.recordStateType.published:await c();break}g.value=!1},N=async()=>{f.value=e.backoffice.tasks.archived.question,d.value=t.recordStateType.archived,s.showModalById(l)},R=async()=>{await I(t.recordStateType.archived)},M=async()=>{f.value=e.backoffice.tasks.submitted.question,d.value=t.recordStateType.submitted,s.showModalById(l)},Q=async()=>{await I(t.recordStateType.submitted)},Y=()=>{f.value=e.backoffice.tasks.returned.question,d.value=t.recordStateType.returned,g.value=!0,s.showModalById(l)},Z=async()=>{await I(t.recordStateType.returned)},i=()=>{f.value=e.backoffice.tasks.published.question,d.value=t.recordStateType.published,T.value=null,s.showModalById(l)},c=async()=>{await I(t.recordStateType.published)},b=()=>{f.value=e.backoffice.tasks.draft.question,d.value=t.recordStateType.draft,s.showModalById(l)},S=async()=>{await I(t.recordStateType.draft)},C=()=>{f.value=e.backoffice.tasks.approval.question,d.value=t.recordStateType.approval,s.showModalById(l)},E=async()=>{await I(t.recordStateType.approval)},I=async u=>{s.closeModalById(l);let m=u==t.recordStateType.returned?n:null;const r=await o.service.changeState(o.itemId,o.itemVersion,u,T.value,m);if(r.code===t.responseCode.success){const V=G.getMessage(e,d.value,o.objectTypeId);ae.success(V),o.recordStateTypeId===t.recordStateType.returned&&u===t.recordStateType.draft?B(r.data[o.itemIdField],r.data[o.itemVersionField]):h.push({name:P.router.BACKOFFICE_TASKS_PAGE.name})}else r.code===t.responseCode.organizationDuplicate||r.code===t.responseCode.locationDuplicate||r.code===t.responseCode.pointOfCareDuplicate||r.code===t.responseCode.documentDuplicate||r.code===t.responseCode.serviceDuplicate?(T.value=r.data.key,A.value=s.createEmptyDataSource(r.data.newListDuplicates),s.showModalById("duplicated-names")):s.showErrorToastByResponseCode(r.code)};function B(u,m){u==null||m==null?ae.error("Erro"):h.push({name:o.editRoute,params:{[o.itemIdField]:s.encodeId(u),[o.itemVersionField]:s.encodeId(m)}})}return re(()=>{_.on(P.emitter.OBJECT_LOADED,u=>{if(u.recordStateTypeId===t.recordStateType.draft){let m=[];switch(o.objectTypeId){case t.objectType.organization:m=ge.progressFields();break;case t.objectType.service:m=Se.progressFields();break;case t.objectType.pointOfCare:m=fe.progressFields();break;case t.objectType.location:m=Ie.progressFields();break;case t.objectType.document:m=Te.progressFields();break}G.calculatePercentage(u,m,r=>{F.value=r===100})}}),_.on(P.emitter.DUPLICATE_NAMES,async u=>{u?await c():T.value=null})}),de(()=>{_.off(P.emitter.OBJECT_LOADED),_.off(P.emitter.DUPLICATE_NAMES)}),(u,m)=>{const r=z("cbutton"),V=z("form-field"),H=z("row"),U=z("modal");return y(),D(O,null,[o.recordStateTypeId===a(t).recordStateType.draft?(y(),D(O,{key:0},[p(r,{class:"col-12 col-sm-auto",title:a(e).enums.recordStateTypeAction[7],type:a(t).buttonType.secondary,size:a(t).buttonSize.large,onClick:N,disabled:o.loading},null,8,["title","type","size","disabled"]),p(r,{class:"col-12 col-sm-auto",title:a(e).enums.recordStateTypeAction[3],type:a(t).buttonType.primary,size:a(t).buttonSize.large,onClick:M,disabled:o.loading||!a(F)||!o.canEdit},null,8,["title","type","size","disabled"])],64)):k("",!0),o.recordStateTypeId===a(t).recordStateType.submitted?(y(),w(r,{key:1,class:"col-12 col-sm-auto",title:a(e).enums.recordStateTypeAction[4],type:a(t).buttonType.primary,size:a(t).buttonSize.large,onClick:C,disabled:o.loading},null,8,["title","type","size","disabled"])):k("",!0),o.recordStateTypeId===a(t).recordStateType.approval?(y(),D(O,{key:2},[p(r,{class:"col-12 col-sm-auto",title:a(e).enums.recordStateTypeAction[6],type:a(t).buttonType.secondary,size:a(t).buttonSize.large,onClick:Y,disabled:o.loading},null,8,["title","type","size","disabled"]),p(r,{class:"col-12 col-sm-auto",title:a(e).enums.recordStateTypeAction[5],type:a(t).buttonType.primary,size:a(t).buttonSize.large,onClick:i,disabled:o.loading},null,8,["title","type","size","disabled"])],64)):k("",!0),o.recordStateTypeId===a(t).recordStateType.returned?(y(),D(O,{key:3},[p(r,{class:"col-12 col-sm-auto",title:a(e).enums.recordStateTypeAction[7],type:a(t).buttonType.secondary,size:a(t).buttonSize.large,onClick:N,disabled:o.loading},null,8,["title","type","size","disabled"]),p(r,{class:"col-12 col-sm-auto",title:a(e).enums.recordStateTypeAction[2],type:a(t).buttonType.primary,size:a(t).buttonSize.large,onClick:b,disabled:o.loading},null,8,["title","type","size","disabled"])],64)):k("",!0),p(U,{title:u._lang.common.confirmation,id:a(l),size:a(t).modalSize.medium},{body:L(()=>[le("p",null,W(a(f)),1),a(g)?(y(),w(H,{key:0},{default:L(()=>[p(V,{id:"refusalTypeId",class:"mb-3 col-12",modelValue:a(n).refusalTypeId,"onUpdate:modelValue":m[0]||(m[0]=j=>a(n).refusalTypeId=j),label:u._lang.label.refusalTypeId,type:a(t).inputs.multiselect,required:!0,placeholder:u._lang.common.selectOption,options:q.store.refusalTypeList},null,8,["modelValue","label","type","placeholder","options"]),p(V,{id:"refusal",class:"mb-3 col-12",modelValue:a(n).description,"onUpdate:modelValue":m[1]||(m[1]=j=>a(n).description=j),label:u._lang.label.refusal,type:a(t).inputs.textarea,maxlength:255,required:!0,disabled:!a(n).refusalTypeId},null,8,["modelValue","label","type","disabled"])]),_:1})):k("",!0)]),footer:L(()=>[p(r,{type:"secondary",size:"large",title:a(e).common.cancel,"data-bs-dismiss":"modal",onClick:J},null,8,["title"]),p(r,{type:"primary",title:a(e).common.confirm,onClick:$,disabled:a(g)&&(!a(n).description||!a(n).refusalTypeId)},null,8,["title","disabled"])]),_:1},8,["title","id","size"]),p(be,{"data-source":a(A),name:o.name},null,8,["data-source","name"])],64)}}},Ae={__name:"detail-actions",props:{loading:{Boolean,required:!0},selectedLang:{type:[String,Number],required:!0},service:{type:Object,required:!0},backRoute:{type:String,required:!0},editRoute:{type:String,required:!0},itemIdField:{type:String,required:!0},formModel:{type:Object,required:!0},itemId:{type:Number,required:!0},itemVersion:{type:Number,required:!0},itemVersionField:{type:String,required:!0},showRecordStateActions:{type:Boolean,default:!1},store:{type:Object,required:!0}},emits:["update:selectedLang","update:loading"],setup(q,{emit:o}){const e=q;ce(async()=>{d.value=G.getObjecTypeId(e.formModel),await A()}),re(()=>{});const _=ee();X();const h="confirm-extinct-submit";let l=v([]),f=v(!1),d=v(t.objectType.notApplicable);function F(i){f.value=i.width<576}const g=x({get(){return e.selectedLang},set(i){o("update:selectedLang",i)}}),n=x({get(){return e.loading},set(i){o("update:loading",i)}});async function A(){let i=await ve.getLanguages();s.validateResponse(i,null,()=>{l.value=i.data})}async function T(){let i=e.itemId,c=e.itemVersion;if(e.formModel.recordStateTypeId===t.recordStateType.submitted&&await J(),e.formModel.recordStateTypeId===t.recordStateType.published){const b=await $();await s.validateResponseAsync(b,null,async()=>{i=b.data[e.itemIdField],c=b.data[e.itemVersionField],N(i,c)})}else N(i,c)}async function J(){n.value=!0;const i=await e.service.changeStateToDraft(e.itemId,e.itemVersion);s.validateResponse(i,null,()=>{}),n.value=!1}async function $(){n.value=!0;const i=await e.service.update(e.formModel);return s.validateResponse(i,null,()=>{}),n.value=!1,i}function N(i,c){_.push({name:e.editRoute,params:{[e.itemIdField]:s.encodeId(i),[e.itemVersionField]:s.encodeId(c)}})}const R=x(()=>{var i,c,b,S,C,E,I,B,u,m,r,V,H,U,j,te;if(e.formModel.recordStateTypeId!=t.recordStateType.published&&e.formModel.recordStateTypeId!=t.recordStateType.draft&&e.formModel.recordStateTypeId!=t.recordStateType.approval&&e.formModel.recordStateTypeId!=t.recordStateType.submitted||e.formModel.recordStateTypeId==t.recordStateType.published&&e.formModel.parentOrganization==null&&e.itemIdField=="organizationId")return!1;switch(e.itemIdField){case"organizationId":return((i=e==null?void 0:e.formModel)==null?void 0:i.recordStateTypeId)!=7&&(M((c=e==null?void 0:e.formModel)==null?void 0:c.organizationId,t.permissions.organization)||M((S=(b=e==null?void 0:e.formModel)==null?void 0:b.parentOrganization)==null?void 0:S.id,t.permissions.organization));case"serviceId":return((C=e==null?void 0:e.formModel)==null?void 0:C.recordStateTypeId)!=7&&M((I=(E=e==null?void 0:e.formModel)==null?void 0:E.organization)==null?void 0:I.id,t.permissions.service);case"pointOfCareId":return((B=e==null?void 0:e.formModel)==null?void 0:B.recordStateTypeId)!=7&&M((m=(u=e==null?void 0:e.formModel)==null?void 0:u.organization)==null?void 0:m.id,t.permissions.pointOfCare);case"documentId":return((r=e==null?void 0:e.formModel)==null?void 0:r.recordStateTypeId)!=7&&M((H=(V=e==null?void 0:e.formModel)==null?void 0:V.organization)==null?void 0:H.id,t.permissions.document);case"locationId":return((U=e==null?void 0:e.formModel)==null?void 0:U.recordStateTypeId)!=7&&M((te=(j=e==null?void 0:e.formModel)==null?void 0:j.organization)==null?void 0:te.id,t.permissions.location)}});function M(i,c){return K.havePermissionOrganization(c.createEdit,i)}const Q=x(()=>G.getFieldByLangAndName(e.formModel,g.value,"name")),Y=x(()=>{var i,c,b,S,C;if(e.formModel.recordStateTypeId!=t.recordStateType.published)return!1;switch(e.itemIdField){case"organizationId":return K.havePermissionOrganization(t.permissions.super.approve,(i=e==null?void 0:e.formModel)==null?void 0:i.organizationId)||K.havePermissionOrganization(t.permissions.super.approve,(b=(c=e==null?void 0:e.formModel)==null?void 0:c.parentOrganization)==null?void 0:b.id);case"serviceId":case"pointOfCareId":case"documentId":case"locationId":return K.havePermissionOrganization(t.permissions.super.approve,(C=(S=e==null?void 0:e.formModel)==null?void 0:S.organization)==null?void 0:C.id)}});function Z(){s.showModalById(h)}return(i,c)=>{const b=z("lang-selector"),S=z("cbutton"),C=z("cbutton-options-item"),E=z("cbutton-options"),I=ue("resize");return y(),D(O,null,[p(b,{options:a(l),selectedLang:a(g),"onUpdate:selectedLang":c[0]||(c[0]=B=>ie(g)?g.value=B:null),disabled:a(n)},null,8,["options","selectedLang","disabled"]),e.showRecordStateActions?(y(),D(O,{key:1},[p(he,{"record-state-type-id":e.formModel.recordStateTypeId,"object-type-id":a(d),loading:e.loading,service:e.service,"item-id":e.itemId,"item-version":e.itemVersion,canEdit:a(R),name:a(Q),store:q.store,itemVersion:e.itemVersion,itemVersionField:e.itemVersionField,itemIdField:e.itemIdField,editRoute:e.editRoute},null,8,["record-state-type-id","object-type-id","loading","service","item-id","item-version","canEdit","name","store","itemVersion","itemVersionField","itemIdField","editRoute"]),a(R)&&e.formModel.recordStateTypeId!=a(t).recordStateType.returned?me((y(),w(E,{key:0,title:i._lang.common.actions,size:a(t).buttonSize.large,type:a(t).buttonType.secondary,disabled:a(n),class:ye(["d-sm-block d-none",{"dropdown-center":a(f)}])},{default:L(()=>[p(C,{title:i._lang.common.edit,onClick:pe(T,["prevent"]),disabled:a(n)},null,8,["title","onClick","disabled"])]),_:1},8,["title","size","type","disabled","class"])),[[I,F]]):k("",!0),a(R)?(y(),w(S,{key:1,class:"col-12 col-sm-auto d-sm-none",title:i._lang.common.edit,type:a(t).buttonType.secondary,size:a(t).buttonSize.large,onClick:T,disabled:a(n)},null,8,["title","type","size","disabled"])):k("",!0)],64)):(y(),D(O,{key:0},[a(R)?(y(),w(S,{key:0,class:"col-12 col-sm-auto",title:i._lang.common.edit,type:a(t).buttonType.secondary,size:a(t).buttonSize.large,onClick:T,disabled:a(n)},null,8,["title","type","size","disabled"])):k("",!0),a(Y)?(y(),w(S,{key:1,class:"col-12 col-sm-auto",title:i._lang.common.extinctBtn,type:a(t).buttonType.secondary,size:a(t).buttonSize.large,onClick:Z,disabled:a(n)},null,8,["title","type","size","disabled"])):k("",!0)],64)),p(ze,{id:h,startDate:e.formModel.startDate,endDate:e.formModel.endDate,service:e.service,itemId:e.itemId,itemVersion:e.itemVersion,backRoute:e.backRoute,itemIdField:e.itemIdField},null,8,["startDate","endDate","service","itemId","itemVersion","backRoute","itemIdField"])],64)}}};export{Ae as _};
