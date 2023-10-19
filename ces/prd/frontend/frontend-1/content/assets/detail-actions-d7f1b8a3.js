import{i as ee,h as oe,g as te,r as T,l as z,c as y,m as q,n as N,y as ne,x as X,s as a,J as ie,v as t,A as S,e as _,q as p,u as s,j as se,N as L,o as re,B as x,a as de,F as D,p as le,R as ae,L as ce,k as U,Y as ue,O as me,Z as pe,I as ye}from"./index-80ba5b4e.js";import{b as G}from"./helpers-4a70dd55.js";import{b as be}from"./refusal-a24432e0.js";import{p as fe}from"./helpers-dace0e20.js";import{o as ge}from"./helpers-80252163.js";import{d as Te}from"./helpers-7f969476.js";import{s as Se}from"./helpers-680aec35.js";import{h as ve}from"./helpers-13c29c73.js";import{s as Ie}from"./settings-ad5b6b99.js";const ke={key:1},ze={__name:"extinct-confirm",props:{id:{String,required:!0,default:"confirm-extinct-submit"},startDate:{Date,required:!0},endDate:{Date,required:!1},service:{type:Object,required:!0},itemId:{type:[String,Number],required:!0},itemVersion:{type:[String,Number],required:!0},backRoute:{type:String,required:!0},itemIdField:{type:String,required:!0}},setup(F){const o=F,e=ee();oe();const M=te();let h=T(!1),l=T(o.endDate);async function f(){h.value=!0;let d=await o.service.extinct(o.itemId,o.itemVersion,l.value);s.validateResponse(d,e.common.extinctModalSucess[o.itemIdField],()=>{M.push({name:o.backRoute})}),h.value=!1}return(d,V)=>{const g=z("form-field"),n=z("cbutton"),R=z("modal");return y(),q(R,{id:o.id,title:d._lang.common.extinctModalTitle,size:a(t).modalSize.medium},{body:N(()=>[ne(X(d._lang.common.extinctconfirm)+" ",1),o.endDate==null?(y(),q(g,{key:0,id:"endDate",class:"mb-3 mt-3 col-12",modelValue:a(l),"onUpdate:modelValue":V[0]||(V[0]=v=>ie(l)?l.value=v:l=v),label:d._lang.label.endDate,type:a(t).inputs.datepicker,placeholder:"dd/mm/aaaa",minDate:o.startDate,maxDate:new Date},null,8,["modelValue","label","type","minDate","maxDate"])):S("",!0),a(l)==null&&o.endDate==null?(y(),_("span",ke,X(d._lang.common.extinctModalTxt),1)):S("",!0)]),footer:N(()=>[p(n,{title:d._lang.common.cancel,type:a(t).buttonType.secondary,"data-bs-dismiss":"modal","aria-label":"Close",disabled:a(h)},null,8,["title","type","disabled"]),p(n,{title:d._lang.common.confirm,onClick:f,disabled:a(h)||a(l)==null,"data-bs-dismiss":"modal","aria-label":"Close"},null,8,["title","disabled"])]),_:1},8,["id","title","size"])}}},he={__name:"record-state-actions",props:{loading:{Boolean,required:!0},canEdit:{Boolean,required:!0},recordStateTypeId:{required:!0},service:{type:Object,required:!0},itemId:{type:Number,required:!0},itemVersion:{type:Number,required:!0},objectTypeId:{required:!0},name:{type:String},store:{type:Object,required:!0},itemVersionField:{type:String,required:!0},itemIdField:{type:String,required:!0},editRoute:{type:String,required:!0}},setup(F){const o=F,e=ee(),M=oe(),h=te();let l="record-state-type",f=T(null),d=T(0),V=T(!1),g=T(!1),n=se({refusalTypeId:null,description:""}),R=T(s.createEmptyDataSource()),v=T(null);const P=T(L.havePermission(t.permissions[t.objectTypeId[o.objectTypeId]].approve)),Q=()=>{g.value=!1},H=async()=>{switch(d.value){case t.recordStateType.archived:await w();break;case t.recordStateType.submitted:await Z();break;case t.recordStateType.draft:await C();break;case t.recordStateType.approval:await E();break;case t.recordStateType.returned:await i();break;case t.recordStateType.published:await b();break}g.value=!1},O=async()=>{f.value=e.backoffice.tasks.archived.question,d.value=t.recordStateType.archived,s.showModalById(l)},w=async()=>{await k(t.recordStateType.archived)},Y=async()=>{f.value=e.backoffice.tasks.submitted.question,d.value=t.recordStateType.submitted,s.showModalById(l)},Z=async()=>{await k(t.recordStateType.submitted)},W=()=>{f.value=e.backoffice.tasks.returned.question,d.value=t.recordStateType.returned,g.value=!0,s.showModalById(l)},i=async()=>{await k(t.recordStateType.returned)},c=()=>{f.value=e.backoffice.tasks.published.question,d.value=t.recordStateType.published,v.value=null,s.showModalById(l)},b=async()=>{await k(t.recordStateType.published)},I=()=>{f.value=e.backoffice.tasks.draft.question,d.value=t.recordStateType.draft,s.showModalById(l)},C=async()=>{await k(t.recordStateType.draft)},B=()=>{f.value=e.backoffice.tasks.approval.question,d.value=t.recordStateType.approval,s.showModalById(l)},E=async()=>{await k(t.recordStateType.approval)},k=async u=>{s.closeModalById(l);let m=u==t.recordStateType.returned?n:null;const r=await o.service.changeState(o.itemId,o.itemVersion,u,v.value,m);if(r.code===t.responseCode.success){const A=G.getMessage(e,d.value,o.objectTypeId);ae.success(A),o.recordStateTypeId===t.recordStateType.returned&&u===t.recordStateType.draft?J(r.data[o.itemIdField],r.data[o.itemVersionField]):h.push({name:x.router.BACKOFFICE_TASKS_PAGE.name})}else r.code===t.responseCode.organizationDuplicate||r.code===t.responseCode.locationDuplicate||r.code===t.responseCode.pointOfCareDuplicate||r.code===t.responseCode.documentDuplicate||r.code===t.responseCode.serviceDuplicate?(v.value=r.data.key,R.value=s.createEmptyDataSource(r.data.newListDuplicates),s.showModalById("duplicated-names")):s.showErrorToastByResponseCode(r.code)};function J(u,m){u==null||m==null?ae.error("Erro"):h.push({name:o.editRoute,params:{[o.itemIdField]:s.encodeId(u),[o.itemVersionField]:s.encodeId(m)}})}return re(()=>{M.on(x.emitter.OBJECT_LOADED,u=>{if(u.recordStateTypeId===t.recordStateType.draft){let m=[];switch(o.objectTypeId){case t.objectType.organization:m=ge.progressFields();break;case t.objectType.service:m=Se.progressFields();break;case t.objectType.pointOfCare:m=fe.progressFields();break;case t.objectType.location:m=ve.progressFields();break;case t.objectType.document:m=Te.progressFields();break}G.calculatePercentage(u,m,r=>{V.value=r===100})}}),M.on(x.emitter.DUPLICATE_NAMES,async u=>{u?await b():v.value=null})}),de(()=>{M.off(x.emitter.OBJECT_LOADED),M.off(x.emitter.DUPLICATE_NAMES)}),(u,m)=>{const r=z("cbutton"),A=z("form-field"),K=z("row"),$=z("modal");return y(),_(D,null,[o.recordStateTypeId===a(t).recordStateType.draft?(y(),_(D,{key:0},[p(r,{class:"col-12 col-sm-auto",title:a(e).enums.recordStateTypeAction[7],type:a(t).buttonType.secondary,size:a(t).buttonSize.large,onClick:O,disabled:o.loading},null,8,["title","type","size","disabled"]),p(r,{class:"col-12 col-sm-auto",title:a(e).enums.recordStateTypeAction[3],type:a(t).buttonType.primary,size:a(t).buttonSize.large,onClick:Y,disabled:o.loading||!a(V)||!o.canEdit},null,8,["title","type","size","disabled"])],64)):S("",!0),o.recordStateTypeId===a(t).recordStateType.submitted?(y(),_(D,{key:1},[P.value?(y(),q(r,{key:0,class:"col-12 col-sm-auto",title:a(e).enums.recordStateTypeAction[4],type:a(t).buttonType.primary,size:a(t).buttonSize.large,onClick:B,disabled:o.loading},null,8,["title","type","size","disabled"])):S("",!0)],64)):S("",!0),o.recordStateTypeId===a(t).recordStateType.approval&&P.value?(y(),_(D,{key:2},[p(r,{class:"col-12 col-sm-auto",title:a(e).enums.recordStateTypeAction[6],type:a(t).buttonType.secondary,size:a(t).buttonSize.large,onClick:W,disabled:o.loading},null,8,["title","type","size","disabled"]),p(r,{class:"col-12 col-sm-auto",title:a(e).enums.recordStateTypeAction[5],type:a(t).buttonType.primary,size:a(t).buttonSize.large,onClick:c,disabled:o.loading},null,8,["title","type","size","disabled"])],64)):S("",!0),o.recordStateTypeId===a(t).recordStateType.returned&&P.value?(y(),_(D,{key:3},[p(r,{class:"col-12 col-sm-auto",title:a(e).enums.recordStateTypeAction[7],type:a(t).buttonType.secondary,size:a(t).buttonSize.large,onClick:O,disabled:o.loading},null,8,["title","type","size","disabled"]),p(r,{class:"col-12 col-sm-auto",title:a(e).enums.recordStateTypeAction[2],type:a(t).buttonType.primary,size:a(t).buttonSize.large,onClick:I,disabled:o.loading},null,8,["title","type","size","disabled"])],64)):S("",!0),p($,{title:u._lang.common.confirmation,id:a(l),size:a(t).modalSize.medium},{body:N(()=>[le("p",null,X(a(f)),1),a(g)?(y(),q(K,{key:0},{default:N(()=>[p(A,{id:"refusalTypeId",class:"mb-3 col-12",modelValue:a(n).refusalTypeId,"onUpdate:modelValue":m[0]||(m[0]=j=>a(n).refusalTypeId=j),label:u._lang.label.refusalTypeId,type:a(t).inputs.multiselect,required:!0,placeholder:u._lang.common.selectOption,options:F.store.refusalTypeList},null,8,["modelValue","label","type","placeholder","options"]),p(A,{id:"refusal",class:"mb-3 col-12",modelValue:a(n).description,"onUpdate:modelValue":m[1]||(m[1]=j=>a(n).description=j),label:u._lang.label.refusal,type:a(t).inputs.textarea,maxlength:255,required:!0,disabled:!a(n).refusalTypeId},null,8,["modelValue","label","type","disabled"])]),_:1})):S("",!0)]),footer:N(()=>[p(r,{type:"secondary",size:"large",title:a(e).common.cancel,"data-bs-dismiss":"modal",onClick:Q},null,8,["title"]),p(r,{type:"primary",title:a(e).common.confirm,onClick:H,disabled:a(g)&&(!a(n).description||!a(n).refusalTypeId)},null,8,["title","disabled"])]),_:1},8,["title","id","size"]),p(be,{"data-source":a(R),name:o.name},null,8,["data-source","name"])],64)}}},Ae={__name:"detail-actions",props:{loading:{Boolean,required:!0},selectedLang:{type:[String,Number],required:!0},service:{type:Object,required:!0},backRoute:{type:String,required:!0},editRoute:{type:String,required:!0},itemIdField:{type:String,required:!0},formModel:{type:Object,required:!0},itemId:{type:Number,required:!0},itemVersion:{type:Number,required:!0},itemVersionField:{type:String,required:!0},showRecordStateActions:{type:Boolean,default:!1},store:{type:Object,required:!0}},emits:["update:selectedLang","update:loading"],setup(F,{emit:o}){const e=F;ce(async()=>{d.value=G.getObjecTypeId(e.formModel),await R()}),re(()=>{});const M=te();ee();const h="confirm-extinct-submit";let l=T([]),f=T(!1),d=T(t.objectType.notApplicable);function V(i){f.value=i.width<576}const g=U({get(){return e.selectedLang},set(i){o("update:selectedLang",i)}}),n=U({get(){return e.loading},set(i){o("update:loading",i)}});async function R(){let i=await Ie.getLanguages();s.validateResponse(i,null,()=>{l.value=i.data})}async function v(){let i=e.itemId,c=e.itemVersion;if(e.formModel.recordStateTypeId===t.recordStateType.submitted&&await P(),e.formModel.recordStateTypeId===t.recordStateType.published){const b=await Q();await s.validateResponseAsync(b,null,async()=>{i=b.data[e.itemIdField],c=b.data[e.itemVersionField],H(i,c)})}else H(i,c)}async function P(){n.value=!0;const i=await e.service.changeStateToDraft(e.itemId,e.itemVersion);s.validateResponse(i,null,()=>{}),n.value=!1}async function Q(){n.value=!0;const i=await e.service.update(e.formModel);return s.validateResponse(i,null,()=>{}),n.value=!1,i}function H(i,c){M.push({name:e.editRoute,params:{[e.itemIdField]:s.encodeId(i),[e.itemVersionField]:s.encodeId(c)}})}const O=U(()=>{var i,c,b,I,C,B,E,k,J,u,m,r,A,K,$,j;if(e.formModel.recordStateTypeId!=t.recordStateType.published&&e.formModel.recordStateTypeId!=t.recordStateType.draft&&e.formModel.recordStateTypeId!=t.recordStateType.approval&&e.formModel.recordStateTypeId!=t.recordStateType.submitted||e.formModel.recordStateTypeId==t.recordStateType.published&&e.formModel.parentOrganization==null&&e.itemIdField=="organizationId")return!1;switch(e.itemIdField){case"organizationId":return((i=e==null?void 0:e.formModel)==null?void 0:i.recordStateTypeId)!=7&&(w((c=e==null?void 0:e.formModel)==null?void 0:c.organizationId,t.permissions.organization)||w((I=(b=e==null?void 0:e.formModel)==null?void 0:b.parentOrganization)==null?void 0:I.id,t.permissions.organization));case"serviceId":return((C=e==null?void 0:e.formModel)==null?void 0:C.recordStateTypeId)!=7&&w((E=(B=e==null?void 0:e.formModel)==null?void 0:B.organization)==null?void 0:E.id,t.permissions.service);case"pointOfCareId":return((k=e==null?void 0:e.formModel)==null?void 0:k.recordStateTypeId)!=7&&w((u=(J=e==null?void 0:e.formModel)==null?void 0:J.organization)==null?void 0:u.id,t.permissions.pointOfCare);case"documentId":return((m=e==null?void 0:e.formModel)==null?void 0:m.recordStateTypeId)!=7&&w((A=(r=e==null?void 0:e.formModel)==null?void 0:r.organization)==null?void 0:A.id,t.permissions.document);case"locationId":return((K=e==null?void 0:e.formModel)==null?void 0:K.recordStateTypeId)!=7&&w((j=($=e==null?void 0:e.formModel)==null?void 0:$.organization)==null?void 0:j.id,t.permissions.location)}});function w(i,c){return i==null&&e.formModel.recordStateTypeId==t.recordStateType.draft?L.havePermission(c.createEdit):L.havePermissionOrganization(c.createEdit,i)}const Y=U(()=>G.getFieldByLangAndName(e.formModel,g.value,"name")),Z=U(()=>{var i,c,b,I,C;if(e.formModel.recordStateTypeId!=t.recordStateType.published)return!1;switch(e.itemIdField){case"organizationId":return L.havePermissionOrganization(t.permissions.super.approve,(i=e==null?void 0:e.formModel)==null?void 0:i.organizationId)||L.havePermissionOrganization(t.permissions.super.approve,(b=(c=e==null?void 0:e.formModel)==null?void 0:c.parentOrganization)==null?void 0:b.id);case"serviceId":case"pointOfCareId":case"documentId":case"locationId":return L.havePermissionOrganization(t.permissions.super.approve,(C=(I=e==null?void 0:e.formModel)==null?void 0:I.organization)==null?void 0:C.id)}});function W(){s.showModalById(h)}return(i,c)=>{const b=z("lang-selector"),I=z("cbutton"),C=z("cbutton-options-item"),B=z("cbutton-options"),E=ue("resize");return y(),_(D,null,[p(b,{options:a(l),selectedLang:a(g),"onUpdate:selectedLang":c[0]||(c[0]=k=>ie(g)?g.value=k:null),disabled:a(n)},null,8,["options","selectedLang","disabled"]),e.showRecordStateActions?(y(),_(D,{key:1},[p(he,{"record-state-type-id":e.formModel.recordStateTypeId,"object-type-id":a(d),loading:e.loading,service:e.service,"item-id":e.itemId,"item-version":e.itemVersion,canEdit:a(O),name:a(Y),store:F.store,itemVersion:e.itemVersion,itemVersionField:e.itemVersionField,itemIdField:e.itemIdField,editRoute:e.editRoute},null,8,["record-state-type-id","object-type-id","loading","service","item-id","item-version","canEdit","name","store","itemVersion","itemVersionField","itemIdField","editRoute"]),a(O)&&e.formModel.recordStateTypeId!=a(t).recordStateType.returned?me((y(),q(B,{key:0,title:i._lang.common.actions,size:a(t).buttonSize.large,type:a(t).buttonType.secondary,disabled:a(n),class:ye(["d-sm-block d-none",{"dropdown-center":a(f)}])},{default:N(()=>[p(C,{title:i._lang.common.edit,onClick:pe(v,["prevent"]),disabled:a(n)},null,8,["title","onClick","disabled"])]),_:1},8,["title","size","type","disabled","class"])),[[E,V]]):S("",!0),a(O)?(y(),q(I,{key:1,class:"col-12 col-sm-auto d-sm-none",title:i._lang.common.edit,type:a(t).buttonType.secondary,size:a(t).buttonSize.large,onClick:v,disabled:a(n)},null,8,["title","type","size","disabled"])):S("",!0)],64)):(y(),_(D,{key:0},[a(O)?(y(),q(I,{key:0,class:"col-12 col-sm-auto",title:i._lang.common.edit,type:a(t).buttonType.secondary,size:a(t).buttonSize.large,onClick:v,disabled:a(n)},null,8,["title","type","size","disabled"])):S("",!0),a(Z)?(y(),q(I,{key:1,class:"col-12 col-sm-auto",title:i._lang.common.extinctBtn,type:a(t).buttonType.secondary,size:a(t).buttonSize.large,onClick:W,disabled:a(n)},null,8,["title","type","size","disabled"])):S("",!0)],64)),p(ze,{id:h,startDate:e.formModel.startDate,endDate:e.formModel.endDate,service:e.service,itemId:e.itemId,itemVersion:e.itemVersion,backRoute:e.backRoute,itemIdField:e.itemIdField},null,8,["startDate","endDate","service","itemId","itemVersion","backRoute","itemIdField"])],64)}}};export{Ae as _};
