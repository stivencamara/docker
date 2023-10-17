import{i as ee,h as oe,g as te,r as T,k as z,c as y,l as q,m as L,x as ne,v as X,q as a,J as ie,t,z as S,e as _,p,u as s,H as se,N as H,o as re,A as P,a as de,F as D,n as le,R as ae,L as ce,j as x,Y as ue,O as me,Z as pe,I as ye}from"./index-af43a57b.js";import{b as G}from"./helpers-0b287b89.js";import{b as be}from"./refusal-a7068635.js";import{p as fe}from"./helpers-bf231dc4.js";import{o as ge}from"./helpers-bc77919f.js";import{d as Te}from"./helpers-e1085a17.js";import{s as Se}from"./helpers-74c6ab4d.js";import{h as ve}from"./helpers-817eb43d.js";import{s as Ie}from"./settings-da6dde1b.js";const ke={key:1},ze={__name:"extinct-confirm",props:{id:{String,required:!0,default:"confirm-extinct-submit"},startDate:{Date,required:!0},endDate:{Date,required:!1},service:{type:Object,required:!0},itemId:{type:[String,Number],required:!0},itemVersion:{type:[String,Number],required:!0},backRoute:{type:String,required:!0},itemIdField:{type:String,required:!0}},setup(F){const o=F,e=ee();oe();const M=te();let h=T(!1),l=T(o.endDate);async function f(){h.value=!0;let d=await o.service.extinct(o.itemId,o.itemVersion,l.value);s.validateResponse(d,e.common.extinctModalSucess[o.itemIdField],()=>{M.push({name:o.backRoute})}),h.value=!1}return(d,V)=>{const g=z("form-field"),n=z("cbutton"),R=z("modal");return y(),q(R,{id:o.id,title:d._lang.common.extinctModalTitle,size:a(t).modalSize.medium},{body:L(()=>[ne(X(d._lang.common.extinctconfirm)+" ",1),o.endDate==null?(y(),q(g,{key:0,id:"endDate",class:"mb-3 mt-3 col-12",modelValue:a(l),"onUpdate:modelValue":V[0]||(V[0]=v=>ie(l)?l.value=v:l=v),label:d._lang.label.endDate,type:a(t).inputs.datepicker,placeholder:"dd/mm/aaaa",minDate:o.startDate,maxDate:new Date},null,8,["modelValue","label","type","minDate","maxDate"])):S("",!0),a(l)==null&&o.endDate==null?(y(),_("span",ke,X(d._lang.common.extinctModalTxt),1)):S("",!0)]),footer:L(()=>[p(n,{title:d._lang.common.cancel,type:a(t).buttonType.secondary,"data-bs-dismiss":"modal","aria-label":"Close",disabled:a(h)},null,8,["title","type","disabled"]),p(n,{title:d._lang.common.confirm,onClick:f,disabled:a(h)||a(l)==null,"data-bs-dismiss":"modal","aria-label":"Close"},null,8,["title","disabled"])]),_:1},8,["id","title","size"])}}},he={__name:"record-state-actions",props:{loading:{Boolean,required:!0},canEdit:{Boolean,required:!0},recordStateTypeId:{required:!0},service:{type:Object,required:!0},itemId:{type:Number,required:!0},itemVersion:{type:Number,required:!0},objectTypeId:{required:!0},name:{type:String},store:{type:Object,required:!0},itemVersionField:{type:String,required:!0},itemIdField:{type:String,required:!0},editRoute:{type:String,required:!0}},setup(F){const o=F,e=ee(),M=oe(),h=te();let l="record-state-type",f=T(null),d=T(0),V=T(!1),g=T(!1),n=se({refusalTypeId:null,description:""}),R=T(s.createEmptyDataSource()),v=T(null);const N=T(H.havePermission(t.permissions[t.objectTypeId[o.objectTypeId]].approve)),Q=()=>{g.value=!1},U=async()=>{switch(d.value){case t.recordStateType.archived:await w();break;case t.recordStateType.submitted:await Z();break;case t.recordStateType.draft:await C();break;case t.recordStateType.approval:await B();break;case t.recordStateType.returned:await i();break;case t.recordStateType.published:await b();break}g.value=!1},O=async()=>{f.value=e.backoffice.tasks.archived.question,d.value=t.recordStateType.archived,s.showModalById(l)},w=async()=>{await k(t.recordStateType.archived)},Y=async()=>{f.value=e.backoffice.tasks.submitted.question,d.value=t.recordStateType.submitted,s.showModalById(l)},Z=async()=>{await k(t.recordStateType.submitted)},W=()=>{f.value=e.backoffice.tasks.returned.question,d.value=t.recordStateType.returned,g.value=!0,s.showModalById(l)},i=async()=>{await k(t.recordStateType.returned)},m=()=>{f.value=e.backoffice.tasks.published.question,d.value=t.recordStateType.published,v.value=null,s.showModalById(l)},b=async()=>{await k(t.recordStateType.published)},I=()=>{f.value=e.backoffice.tasks.draft.question,d.value=t.recordStateType.draft,s.showModalById(l)},C=async()=>{await k(t.recordStateType.draft)},E=()=>{f.value=e.backoffice.tasks.approval.question,d.value=t.recordStateType.approval,s.showModalById(l)},B=async()=>{await k(t.recordStateType.approval)},k=async c=>{s.closeModalById(l);let u=c==t.recordStateType.returned?n:null;const r=await o.service.changeState(o.itemId,o.itemVersion,c,v.value,u);if(r.code===t.responseCode.success){const A=G.getMessage(e,d.value,o.objectTypeId);ae.success(A),o.recordStateTypeId===t.recordStateType.returned&&c===t.recordStateType.draft?J(r.data[o.itemIdField],r.data[o.itemVersionField]):h.push({name:P.router.BACKOFFICE_TASKS_PAGE.name})}else r.code===t.responseCode.organizationDuplicate||r.code===t.responseCode.locationDuplicate||r.code===t.responseCode.pointOfCareDuplicate||r.code===t.responseCode.documentDuplicate||r.code===t.responseCode.serviceDuplicate?(v.value=r.data.key,R.value=s.createEmptyDataSource(r.data.newListDuplicates),s.showModalById("duplicated-names")):s.showErrorToastByResponseCode(r.code)};function J(c,u){c==null||u==null?ae.error("Erro"):h.push({name:o.editRoute,params:{[o.itemIdField]:s.encodeId(c),[o.itemVersionField]:s.encodeId(u)}})}return re(()=>{M.on(P.emitter.OBJECT_LOADED,c=>{if(c.recordStateTypeId===t.recordStateType.draft){let u=[];switch(o.objectTypeId){case t.objectType.organization:u=ge.progressFields();break;case t.objectType.service:u=Se.progressFields();break;case t.objectType.pointOfCare:u=fe.progressFields();break;case t.objectType.location:u=ve.progressFields();break;case t.objectType.document:u=Te.progressFields();break}G.calculatePercentage(c,u,r=>{V.value=r===100})}}),M.on(P.emitter.DUPLICATE_NAMES,async c=>{c?await b():v.value=null})}),de(()=>{M.off(P.emitter.OBJECT_LOADED),M.off(P.emitter.DUPLICATE_NAMES)}),(c,u)=>{const r=z("cbutton"),A=z("form-field"),K=z("row"),$=z("modal");return y(),_(D,null,[o.recordStateTypeId===a(t).recordStateType.draft?(y(),_(D,{key:0},[p(r,{class:"col-12 col-sm-auto",title:a(e).enums.recordStateTypeAction[7],type:a(t).buttonType.secondary,size:a(t).buttonSize.large,onClick:O,disabled:o.loading},null,8,["title","type","size","disabled"]),p(r,{class:"col-12 col-sm-auto",title:a(e).enums.recordStateTypeAction[3],type:a(t).buttonType.primary,size:a(t).buttonSize.large,onClick:Y,disabled:o.loading||!a(V)||!o.canEdit},null,8,["title","type","size","disabled"])],64)):S("",!0),o.recordStateTypeId===a(t).recordStateType.submitted?(y(),_(D,{key:1},[N.value?(y(),q(r,{key:0,class:"col-12 col-sm-auto",title:a(e).enums.recordStateTypeAction[4],type:a(t).buttonType.primary,size:a(t).buttonSize.large,onClick:E,disabled:o.loading},null,8,["title","type","size","disabled"])):S("",!0)],64)):S("",!0),o.recordStateTypeId===a(t).recordStateType.approval&&N.value?(y(),_(D,{key:2},[p(r,{class:"col-12 col-sm-auto",title:a(e).enums.recordStateTypeAction[6],type:a(t).buttonType.secondary,size:a(t).buttonSize.large,onClick:W,disabled:o.loading},null,8,["title","type","size","disabled"]),p(r,{class:"col-12 col-sm-auto",title:a(e).enums.recordStateTypeAction[5],type:a(t).buttonType.primary,size:a(t).buttonSize.large,onClick:m,disabled:o.loading},null,8,["title","type","size","disabled"])],64)):S("",!0),o.recordStateTypeId===a(t).recordStateType.returned&&N.value?(y(),_(D,{key:3},[p(r,{class:"col-12 col-sm-auto",title:a(e).enums.recordStateTypeAction[7],type:a(t).buttonType.secondary,size:a(t).buttonSize.large,onClick:O,disabled:o.loading},null,8,["title","type","size","disabled"]),p(r,{class:"col-12 col-sm-auto",title:a(e).enums.recordStateTypeAction[2],type:a(t).buttonType.primary,size:a(t).buttonSize.large,onClick:I,disabled:o.loading},null,8,["title","type","size","disabled"])],64)):S("",!0),p($,{title:c._lang.common.confirmation,id:a(l),size:a(t).modalSize.medium},{body:L(()=>[le("p",null,X(a(f)),1),a(g)?(y(),q(K,{key:0},{default:L(()=>[p(A,{id:"refusalTypeId",class:"mb-3 col-12",modelValue:a(n).refusalTypeId,"onUpdate:modelValue":u[0]||(u[0]=j=>a(n).refusalTypeId=j),label:c._lang.label.refusalTypeId,type:a(t).inputs.multiselect,required:!0,placeholder:c._lang.common.selectOption,options:F.store.refusalTypeList},null,8,["modelValue","label","type","placeholder","options"]),p(A,{id:"refusal",class:"mb-3 col-12",modelValue:a(n).description,"onUpdate:modelValue":u[1]||(u[1]=j=>a(n).description=j),label:c._lang.label.refusal,type:a(t).inputs.textarea,maxlength:255,required:!0,disabled:!a(n).refusalTypeId},null,8,["modelValue","label","type","disabled"])]),_:1})):S("",!0)]),footer:L(()=>[p(r,{type:"secondary",size:"large",title:a(e).common.cancel,"data-bs-dismiss":"modal",onClick:Q},null,8,["title"]),p(r,{type:"primary",title:a(e).common.confirm,onClick:U,disabled:a(g)&&(!a(n).description||!a(n).refusalTypeId)},null,8,["title","disabled"])]),_:1},8,["title","id","size"]),p(be,{"data-source":a(R),name:o.name},null,8,["data-source","name"])],64)}}},Ae={__name:"detail-actions",props:{loading:{Boolean,required:!0},selectedLang:{type:[String,Number],required:!0},service:{type:Object,required:!0},backRoute:{type:String,required:!0},editRoute:{type:String,required:!0},itemIdField:{type:String,required:!0},formModel:{type:Object,required:!0},itemId:{type:Number,required:!0},itemVersion:{type:Number,required:!0},itemVersionField:{type:String,required:!0},showRecordStateActions:{type:Boolean,default:!1},store:{type:Object,required:!0}},emits:["update:selectedLang","update:loading"],setup(F,{emit:o}){const e=F;ce(async()=>{d.value=G.getObjecTypeId(e.formModel),await R()}),re(()=>{});const M=te();ee();const h="confirm-extinct-submit";let l=T([]),f=T(!1),d=T(t.objectType.notApplicable);function V(i){f.value=i.width<576}const g=x({get(){return e.selectedLang},set(i){o("update:selectedLang",i)}}),n=x({get(){return e.loading},set(i){o("update:loading",i)}});async function R(){let i=await Ie.getLanguages();s.validateResponse(i,null,()=>{l.value=i.data})}async function v(){let i=e.itemId,m=e.itemVersion;if(e.formModel.recordStateTypeId===t.recordStateType.submitted&&await N(),e.formModel.recordStateTypeId===t.recordStateType.published){const b=await Q();await s.validateResponseAsync(b,null,async()=>{i=b.data[e.itemIdField],m=b.data[e.itemVersionField],U(i,m)})}else U(i,m)}async function N(){n.value=!0;const i=await e.service.changeStateToDraft(e.itemId,e.itemVersion);s.validateResponse(i,null,()=>{}),n.value=!1}async function Q(){n.value=!0;const i=await e.service.update(e.formModel);return s.validateResponse(i,null,()=>{}),n.value=!1,i}function U(i,m){M.push({name:e.editRoute,params:{[e.itemIdField]:s.encodeId(i),[e.itemVersionField]:s.encodeId(m)}})}const O=x(()=>{var i,m,b,I,C,E,B,k,J,c,u,r,A,K,$,j;if(e.formModel.recordStateTypeId!=t.recordStateType.published&&e.formModel.recordStateTypeId!=t.recordStateType.draft&&e.formModel.recordStateTypeId!=t.recordStateType.approval&&e.formModel.recordStateTypeId!=t.recordStateType.submitted||e.formModel.recordStateTypeId==t.recordStateType.published&&e.formModel.parentOrganization==null&&e.itemIdField=="organizationId")return!1;switch(e.itemIdField){case"organizationId":return((i=e==null?void 0:e.formModel)==null?void 0:i.recordStateTypeId)!=7&&(w((m=e==null?void 0:e.formModel)==null?void 0:m.organizationId,t.permissions.organization)||w((I=(b=e==null?void 0:e.formModel)==null?void 0:b.parentOrganization)==null?void 0:I.id,t.permissions.organization));case"serviceId":return((C=e==null?void 0:e.formModel)==null?void 0:C.recordStateTypeId)!=7&&w((B=(E=e==null?void 0:e.formModel)==null?void 0:E.organization)==null?void 0:B.id,t.permissions.service);case"pointOfCareId":return((k=e==null?void 0:e.formModel)==null?void 0:k.recordStateTypeId)!=7&&w((c=(J=e==null?void 0:e.formModel)==null?void 0:J.organization)==null?void 0:c.id,t.permissions.pointOfCare);case"documentId":return((u=e==null?void 0:e.formModel)==null?void 0:u.recordStateTypeId)!=7&&w((A=(r=e==null?void 0:e.formModel)==null?void 0:r.organization)==null?void 0:A.id,t.permissions.document);case"locationId":return((K=e==null?void 0:e.formModel)==null?void 0:K.recordStateTypeId)!=7&&w((j=($=e==null?void 0:e.formModel)==null?void 0:$.organization)==null?void 0:j.id,t.permissions.location)}});function w(i,m){return H.havePermissionOrganization(m.createEdit,i)}const Y=x(()=>G.getFieldByLangAndName(e.formModel,g.value,"name")),Z=x(()=>{var i,m,b,I,C;if(e.formModel.recordStateTypeId!=t.recordStateType.published)return!1;switch(e.itemIdField){case"organizationId":return H.havePermissionOrganization(t.permissions.super.approve,(i=e==null?void 0:e.formModel)==null?void 0:i.organizationId)||H.havePermissionOrganization(t.permissions.super.approve,(b=(m=e==null?void 0:e.formModel)==null?void 0:m.parentOrganization)==null?void 0:b.id);case"serviceId":case"pointOfCareId":case"documentId":case"locationId":return H.havePermissionOrganization(t.permissions.super.approve,(C=(I=e==null?void 0:e.formModel)==null?void 0:I.organization)==null?void 0:C.id)}});function W(){s.showModalById(h)}return(i,m)=>{const b=z("lang-selector"),I=z("cbutton"),C=z("cbutton-options-item"),E=z("cbutton-options"),B=ue("resize");return y(),_(D,null,[p(b,{options:a(l),selectedLang:a(g),"onUpdate:selectedLang":m[0]||(m[0]=k=>ie(g)?g.value=k:null),disabled:a(n)},null,8,["options","selectedLang","disabled"]),e.showRecordStateActions?(y(),_(D,{key:1},[p(he,{"record-state-type-id":e.formModel.recordStateTypeId,"object-type-id":a(d),loading:e.loading,service:e.service,"item-id":e.itemId,"item-version":e.itemVersion,canEdit:a(O),name:a(Y),store:F.store,itemVersion:e.itemVersion,itemVersionField:e.itemVersionField,itemIdField:e.itemIdField,editRoute:e.editRoute},null,8,["record-state-type-id","object-type-id","loading","service","item-id","item-version","canEdit","name","store","itemVersion","itemVersionField","itemIdField","editRoute"]),a(O)&&e.formModel.recordStateTypeId!=a(t).recordStateType.returned?me((y(),q(E,{key:0,title:i._lang.common.actions,size:a(t).buttonSize.large,type:a(t).buttonType.secondary,disabled:a(n),class:ye(["d-sm-block d-none",{"dropdown-center":a(f)}])},{default:L(()=>[p(C,{title:i._lang.common.edit,onClick:pe(v,["prevent"]),disabled:a(n)},null,8,["title","onClick","disabled"])]),_:1},8,["title","size","type","disabled","class"])),[[B,V]]):S("",!0),a(O)?(y(),q(I,{key:1,class:"col-12 col-sm-auto d-sm-none",title:i._lang.common.edit,type:a(t).buttonType.secondary,size:a(t).buttonSize.large,onClick:v,disabled:a(n)},null,8,["title","type","size","disabled"])):S("",!0)],64)):(y(),_(D,{key:0},[a(O)?(y(),q(I,{key:0,class:"col-12 col-sm-auto",title:i._lang.common.edit,type:a(t).buttonType.secondary,size:a(t).buttonSize.large,onClick:v,disabled:a(n)},null,8,["title","type","size","disabled"])):S("",!0),a(Z)?(y(),q(I,{key:1,class:"col-12 col-sm-auto",title:i._lang.common.extinctBtn,type:a(t).buttonType.secondary,size:a(t).buttonSize.large,onClick:W,disabled:a(n)},null,8,["title","type","size","disabled"])):S("",!0)],64)),p(ze,{id:h,startDate:e.formModel.startDate,endDate:e.formModel.endDate,service:e.service,itemId:e.itemId,itemVersion:e.itemVersion,backRoute:e.backRoute,itemIdField:e.itemIdField},null,8,["startDate","endDate","service","itemId","itemVersion","backRoute","itemIdField"])],64)}}};export{Ae as _};
