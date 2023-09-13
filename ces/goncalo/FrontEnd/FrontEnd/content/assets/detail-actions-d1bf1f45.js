import{i as Y,h as x,g as W,r as S,G as ee,u as s,o as Z,z as j,s as t,a as te,k,c as p,e as _,p as a,F as q,n as u,y as I,l as L,w as G,m as ae,v as oe,R as re,K as ie,j as K,M as se,X as ne,I as de,O as le,Y as ce,H as ue}from"./index-e6787e94.js";import{b as pe}from"./refusal-82cd23d2.js";import{b as J}from"./helpers-1692af0f.js";import{p as me}from"./helpers-3e986238.js";import{o as ye}from"./helpers-3c2faf50.js";import{d as be}from"./helpers-ee63bdf4.js";import{s as fe}from"./helpers-8a70ee11.js";import{h as ge}from"./helpers-30a39e68.js";import{s as Te}from"./settings-8db6c4e1.js";const Se={__name:"record-state-actions",props:{loading:{Boolean,required:!0},canEdit:{Boolean,required:!0},recordStateTypeId:{required:!0},service:{type:Object,required:!0},itemId:{type:Number,required:!0},itemVersion:{type:Number,required:!0},objectTypeId:{required:!0},name:{type:String},store:{type:Object,required:!0},itemVersionField:{type:String,required:!0},editRoute:{type:String,required:!0}},setup(O){const r=O,e=Y(),V=x(),R=W();let m="record-state-type",y=S(null),b=S(0),z=S(!1),l=S(!1),f=ee({refusalTypeId:null,description:""}),A=S(s.createEmptyDataSource()),F=S(null);const $=()=>{l.value=!1},N=async()=>{switch(b.value){case t.recordStateType.archived:await v();break;case t.recordStateType.submitted:await o();break;case t.recordStateType.draft:await B();break;case t.recordStateType.approval:await H();break;case t.recordStateType.returned:await g();break;case t.recordStateType.published:await w();break}l.value=!1},C=async()=>{y.value=e.backoffice.tasks.archived.question,b.value=t.recordStateType.archived,s.showModalById(m)},v=async()=>{await T(t.recordStateType.archived)},Q=async()=>{y.value=e.backoffice.tasks.submitted.question,b.value=t.recordStateType.submitted,s.showModalById(m)},o=async()=>{await T(t.recordStateType.submitted)},c=()=>{y.value=e.backoffice.tasks.returned.question,b.value=t.recordStateType.returned,l.value=!0,s.showModalById(m)},g=async()=>{await T(t.recordStateType.returned)},h=()=>{y.value=e.backoffice.tasks.published.question,b.value=t.recordStateType.published,F.value=null,s.showModalById(m)},w=async()=>{await T(t.recordStateType.published)},D=()=>{y.value=e.backoffice.tasks.draft.question,b.value=t.recordStateType.draft,s.showModalById(m)},B=async()=>{await T(t.recordStateType.draft)},E=()=>{y.value=e.backoffice.tasks.approval.question,b.value=t.recordStateType.approval,s.showModalById(m)},H=async()=>{await T(t.recordStateType.approval)},T=async n=>{s.closeModalById(m);let d=n==t.recordStateType.returned?f:null;const i=await r.service.changeState(r.itemId,r.itemVersion,n,F.value,d);if(i.code===t.responseCode.success){const M=J.getMessage(e,b.value,r.objectTypeId);re.success(M),r.recordStateTypeId===t.recordStateType.returned&&n===t.recordStateType.draft?R.push({name:r.editRoute,params:{[r.itemIdField]:s.encodeId(r.itemId),[r.itemVersionField]:s.encodeId(i.data.organizationVersion)}}):R.push({name:j.router.BACKOFFICE_TASKS_PAGE.name})}else i.code===t.responseCode.organizationDuplicate||i.code===t.responseCode.locationDuplicate||i.code===t.responseCode.pointOfCareDuplicate||i.code===t.responseCode.documentDuplicate||i.code===t.responseCode.serviceDuplicate?(F.value=i.data.key,A.value=s.createEmptyDataSource(i.data.newListDuplicates),s.showModalById("duplicated-names")):s.showErrorToastByResponseCode(i.code)};return Z(()=>{V.on(j.emitter.OBJECT_LOADED,n=>{if(n.recordStateTypeId===t.recordStateType.draft){let d=[];switch(r.objectTypeId){case t.objectType.organization:d=ye.progressFields();break;case t.objectType.service:d=fe.progressFields();break;case t.objectType.pointOfCare:d=me.progressFields();break;case t.objectType.location:d=ge.progressFields();break;case t.objectType.document:d=be.progressFields();break}J.calculatePercentage(n,d,i=>{z.value=i===100})}}),V.on(j.emitter.DUPLICATE_NAMES,async n=>{n?await w():F.value=null})}),te(()=>{V.off(j.emitter.OBJECT_LOADED),V.off(j.emitter.DUPLICATE_NAMES)}),(n,d)=>{const i=k("cbutton"),M=k("form-field"),P=k("row"),U=k("modal");return p(),_(q,null,[r.recordStateTypeId===a(t).recordStateType.draft?(p(),_(q,{key:0},[u(i,{class:"col-12 col-sm-auto",title:a(e).enums.recordStateTypeAction[7],type:a(t).buttonType.secondary,size:a(t).buttonSize.large,onClick:C,disabled:r.loading},null,8,["title","type","size","disabled"]),u(i,{class:"col-12 col-sm-auto",title:a(e).enums.recordStateTypeAction[3],type:a(t).buttonType.primary,size:a(t).buttonSize.large,onClick:Q,disabled:r.loading||!a(z)||!r.canEdit},null,8,["title","type","size","disabled"])],64)):I("",!0),r.recordStateTypeId===a(t).recordStateType.submitted?(p(),L(i,{key:1,class:"col-12 col-sm-auto",title:a(e).enums.recordStateTypeAction[4],type:a(t).buttonType.primary,size:a(t).buttonSize.large,onClick:E,disabled:r.loading},null,8,["title","type","size","disabled"])):I("",!0),r.recordStateTypeId===a(t).recordStateType.approval?(p(),_(q,{key:2},[u(i,{class:"col-12 col-sm-auto",title:a(e).enums.recordStateTypeAction[6],type:a(t).buttonType.secondary,size:a(t).buttonSize.large,onClick:c,disabled:r.loading},null,8,["title","type","size","disabled"]),u(i,{class:"col-12 col-sm-auto",title:a(e).enums.recordStateTypeAction[5],type:a(t).buttonType.primary,size:a(t).buttonSize.large,onClick:h,disabled:r.loading},null,8,["title","type","size","disabled"])],64)):I("",!0),r.recordStateTypeId===a(t).recordStateType.returned?(p(),_(q,{key:3},[u(i,{class:"col-12 col-sm-auto",title:a(e).enums.recordStateTypeAction[7],type:a(t).buttonType.secondary,size:a(t).buttonSize.large,onClick:C,disabled:r.loading},null,8,["title","type","size","disabled"]),u(i,{class:"col-12 col-sm-auto",title:a(e).enums.recordStateTypeAction[2],type:a(t).buttonType.primary,size:a(t).buttonSize.large,onClick:D,disabled:r.loading},null,8,["title","type","size","disabled"])],64)):I("",!0),u(U,{title:n._lang.common.confirmation,id:a(m),size:a(t).modalSize.medium},{body:G(()=>[ae("p",null,oe(a(y)),1),a(l)?(p(),L(P,{key:0},{default:G(()=>[u(M,{id:"refusalTypeId",class:"mb-3 col-12",modelValue:a(f).refusalTypeId,"onUpdate:modelValue":d[0]||(d[0]=X=>a(f).refusalTypeId=X),label:n._lang.label.refusalTypeId,type:a(t).inputs.multiselect,required:!0,placeholder:n._lang.common.selectOption,options:O.store.refusalTypeList},null,8,["modelValue","label","type","placeholder","options"]),u(M,{id:"refusal",class:"mb-3 col-12",modelValue:a(f).description,"onUpdate:modelValue":d[1]||(d[1]=X=>a(f).description=X),label:n._lang.label.refusal,type:a(t).inputs.textarea,maxlength:255,required:!0,disabled:!a(f).refusalTypeId},null,8,["modelValue","label","type","disabled"])]),_:1})):I("",!0)]),footer:G(()=>[u(i,{type:"secondary",size:"large",title:a(e).common.cancel,"data-bs-dismiss":"modal",onClick:$},null,8,["title"]),u(i,{type:"primary",title:a(e).common.confirm,onClick:N,disabled:a(l)&&(!a(f).description||!a(f).refusalTypeId)},null,8,["title","disabled"])]),_:1},8,["title","id","size"]),u(pe,{"data-source":a(A),name:r.name},null,8,["data-source","name"])],64)}}},qe={__name:"detail-actions",props:{loading:{Boolean,required:!0},selectedLang:{type:[String,Number],required:!0},service:{type:Object,required:!0},backRoute:{type:String,required:!0},editRoute:{type:String,required:!0},itemIdField:{type:String,required:!0},formModel:{type:Object,required:!0},itemId:{type:Number,required:!0},itemVersion:{type:Number,required:!0},itemVersionField:{type:String,required:!0},showRecordStateActions:{type:Boolean,default:!1},store:{type:Object,required:!0}},emits:["update:selectedLang","update:loading"],setup(O,{emit:r}){const e=O;ie(async()=>{y.value=J.getObjecTypeId(e.formModel),await f()}),Z(()=>{});const V=W();Y();let R=S([]),m=S(!1),y=S(t.objectType.notApplicable);function b(o){m.value=o.width<576}const z=K({get(){return e.selectedLang},set(o){r("update:selectedLang",o)}}),l=K({get(){return e.loading},set(o){r("update:loading",o)}});async function f(){let o=await Te.getLanguages();s.validateResponse(o,null,()=>{R.value=o.data})}async function A(){let o=e.itemId,c=e.itemVersion;if(e.formModel.recordStateTypeId===t.recordStateType.submitted&&await F(),e.formModel.recordStateTypeId===t.recordStateType.published){const g=await $();await s.validateResponseAsync(g,null,async()=>{o=g.data[e.itemIdField],c=g.data[e.itemVersionField],N(o,c)})}else N(o,c)}async function F(){l.value=!0;const o=await e.service.changeStateToDraft(e.itemId,e.itemVersion);s.validateResponse(o,null,()=>{}),l.value=!1}async function $(){l.value=!0;const o=await e.service.update(e.formModel);return s.validateResponse(o,null,()=>{}),l.value=!1,o}function N(o,c){V.push({name:e.editRoute,params:{[e.itemIdField]:s.encodeId(o),[e.itemVersionField]:s.encodeId(c)}})}const C=K(()=>{var o,c,g,h,w,D,B,E,H,T,n,d,i,M,P,U;if(e.formModel.recordStateTypeId!=t.recordStateType.published&&e.formModel.recordStateTypeId!=t.recordStateType.draft&&e.formModel.recordStateTypeId!=t.recordStateType.submitted||e.formModel.recordStateTypeId==t.recordStateType.published&&e.formModel.parentOrganization==null&&e.itemIdField=="organizationId")return!1;switch(e.itemIdField){case"organizationId":return((o=e==null?void 0:e.formModel)==null?void 0:o.recordStateTypeId)!=7&&(v((c=e==null?void 0:e.formModel)==null?void 0:c.organizationId,t.permissions.organization)||v((h=(g=e==null?void 0:e.formModel)==null?void 0:g.parentOrganization)==null?void 0:h.id,t.permissions.organization));case"serviceId":return((w=e==null?void 0:e.formModel)==null?void 0:w.recordStateTypeId)!=7&&v((B=(D=e==null?void 0:e.formModel)==null?void 0:D.organization)==null?void 0:B.id,t.permissions.service);case"pointOfCareId":return((E=e==null?void 0:e.formModel)==null?void 0:E.recordStateTypeId)!=7&&v((T=(H=e==null?void 0:e.formModel)==null?void 0:H.organization)==null?void 0:T.id,t.permissions.pointOfCare);case"documentId":return((n=e==null?void 0:e.formModel)==null?void 0:n.recordStateTypeId)!=7&&v((i=(d=e==null?void 0:e.formModel)==null?void 0:d.organization)==null?void 0:i.id,t.permissions.document);case"locationId":return((M=e==null?void 0:e.formModel)==null?void 0:M.recordStateTypeId)!=7&&v((U=(P=e==null?void 0:e.formModel)==null?void 0:P.organization)==null?void 0:U.id,t.permissions.location)}});function v(o,c){return se.havePermissionOrganization(c.createEdit,o)}const Q=K(()=>J.getFieldByLangAndName(e.formModel,z.value,"name"));return(o,c)=>{const g=k("lang-selector"),h=k("cbutton"),w=k("cbutton-options-item"),D=k("cbutton-options"),B=ne("resize");return p(),_(q,null,[u(g,{options:a(R),selectedLang:a(z),"onUpdate:selectedLang":c[0]||(c[0]=E=>de(z)?z.value=E:null),disabled:a(l)},null,8,["options","selectedLang","disabled"]),e.showRecordStateActions?(p(),_(q,{key:1},[u(Se,{"record-state-type-id":e.formModel.recordStateTypeId,"object-type-id":a(y),loading:e.loading,service:e.service,"item-id":e.itemId,"item-version":e.itemVersion,canEdit:a(C),name:a(Q),store:O.store,itemVersion:e.itemVersion,itemVersionField:e.itemVersionField,editRoute:e.editRoute},null,8,["record-state-type-id","object-type-id","loading","service","item-id","item-version","canEdit","name","store","itemVersion","itemVersionField","editRoute"]),a(C)&&e.formModel.recordStateTypeId!=a(t).recordStateType.returned?le((p(),L(D,{key:0,title:o._lang.common.actions,size:a(t).buttonSize.large,type:a(t).buttonType.secondary,disabled:a(l),class:ue(["d-sm-block d-none",{"dropdown-center":a(m)}])},{default:G(()=>[u(w,{title:o._lang.common.edit,onClick:ce(A,["prevent"]),disabled:a(l)},null,8,["title","onClick","disabled"])]),_:1},8,["title","size","type","disabled","class"])),[[B,b]]):I("",!0),a(C)?(p(),L(h,{key:1,class:"col-12 col-sm-auto d-sm-none",title:o._lang.common.edit,type:a(t).buttonType.secondary,size:a(t).buttonSize.large,onClick:A,disabled:a(l)},null,8,["title","type","size","disabled"])):I("",!0)],64)):(p(),_(q,{key:0},[a(C)?(p(),L(h,{key:0,class:"col-12 col-sm-auto",title:o._lang.common.edit,type:a(t).buttonType.secondary,size:a(t).buttonSize.large,onClick:A,disabled:a(l)},null,8,["title","type","size","disabled"])):I("",!0)],64))],64)}}};export{qe as _};
