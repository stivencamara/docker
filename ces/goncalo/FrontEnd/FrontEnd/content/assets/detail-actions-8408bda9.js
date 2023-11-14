import{i as te,h as ie,g as ae,r as S,j as re,u as n,P as E,v as t,o as oe,C as x,a as se,l as M,c as u,e as h,s as a,F as C,q as c,A as I,m as R,n as $,p as ne,x as de,B as ee,N as le,k as H,$ as ce,L as ue,Q as me,a0 as pe,K as ye}from"./index-6321ead1.js";import{_ as fe}from"./extinct-confirm-26802525.js";import{b as be}from"./refusal-ceade101.js";import{b as J}from"./helpers-35400f08.js";import{p as ge}from"./helpers-a785f85c.js";import{o as Te}from"./helpers-4a0e8b5f.js";import{d as Se}from"./helpers-404ede5d.js";import{s as ve}from"./helpers-fc4952c2.js";import{h as Ie}from"./helpers-61195e5e.js";import{s as ke}from"./settings-6ea49640.js";const ze={__name:"record-state-actions",props:{loading:{Boolean,required:!0},canEdit:{Boolean,required:!0},recordStateTypeId:{required:!0},service:{type:Object,required:!0},itemId:{type:Number,required:!0},itemVersion:{type:Number,required:!0},objectTypeId:{required:!0},name:{type:String},store:{type:Object,required:!0},itemVersionField:{type:String,required:!0},itemIdField:{type:String,required:!0},editRoute:{type:String,required:!0}},setup(j){const i=j,e=te(),D=ie(),L=ae();let f="record-state-type",v=S(null),b=S(0),P=S(!1),w=S(!1),m=re({refusalTypeId:null,description:""}),p=S(n.createEmptyDataSource()),q=S(null);const _=S(E.havePermission(t.permissions[t.objectTypeId[i.objectTypeId]].approve)),Q=()=>{w.value=!1},G=async()=>{switch(b.value){case t.recordStateType.archived:await V();break;case t.recordStateType.submitted:await W();break;case t.recordStateType.draft:await g();break;case t.recordStateType.approval:await A();break;case t.recordStateType.returned:await Y();break;case t.recordStateType.published:await s();break}w.value=!1},N=async()=>{v.value=e.backoffice.tasks.archived.question,b.value=t.recordStateType.archived,n.showModalById(f)},V=async()=>{await T(t.recordStateType.archived)},z=async()=>{v.value=e.backoffice.tasks.submitted.question,b.value=t.recordStateType.submitted,n.showModalById(f)},W=async()=>{await T(t.recordStateType.submitted)},X=()=>{v.value=e.backoffice.tasks.returned.question,b.value=t.recordStateType.returned,w.value=!0,n.showModalById(f)},Y=async()=>{await T(t.recordStateType.returned)},o=()=>{v.value=e.backoffice.tasks.published.question,b.value=t.recordStateType.published,q.value=null,n.showModalById(f)},s=async()=>{await T(t.recordStateType.published)},y=()=>{v.value=e.backoffice.tasks.draft.question,b.value=t.recordStateType.draft,n.showModalById(f)},g=async()=>{await T(t.recordStateType.draft)},k=()=>{v.value=e.backoffice.tasks.approval.question,b.value=t.recordStateType.approval,n.showModalById(f)},A=async()=>{await T(t.recordStateType.approval)},T=async d=>{n.closeModalById(f);let l=d==t.recordStateType.returned?m:null;const r=await i.service.changeState(i.itemId,i.itemVersion,d,q.value,l);if(r.code===t.responseCode.success){const F=J.getMessage(e,b.value,i.objectTypeId);ee.success(F),i.recordStateTypeId===t.recordStateType.returned&&d===t.recordStateType.draft?O(r.data[i.itemIdField],r.data[i.itemVersionField]):L.push({name:x.router.BACKOFFICE_TASKS_PAGE.name})}else r.code===t.responseCode.organizationDuplicate||r.code===t.responseCode.locationDuplicate||r.code===t.responseCode.pointOfCareDuplicate||r.code===t.responseCode.documentDuplicate||r.code===t.responseCode.serviceDuplicate?(q.value=r.data.key,p.value=n.createEmptyDataSource(r.data.newListDuplicates),n.showModalById("duplicated-names")):n.showErrorToastByResponseCode(r.code)};function O(d,l){d==null||l==null?ee.error("Erro"):L.push({name:i.editRoute,params:{[i.itemIdField]:n.encodeId(d),[i.itemVersionField]:n.encodeId(l)}})}return oe(()=>{D.on(x.emitter.OBJECT_LOADED,d=>{if(d.recordStateTypeId===t.recordStateType.draft){let l=[];switch(i.objectTypeId){case t.objectType.organization:l=Te.progressFields();break;case t.objectType.service:l=ve.progressFields();break;case t.objectType.pointOfCare:l=ge.progressFields();break;case t.objectType.location:l=Ie.progressFields();break;case t.objectType.document:l=Se.progressFields();break}J.calculatePercentage(d,l,r=>{P.value=r===100})}}),D.on(x.emitter.DUPLICATE_NAMES,async d=>{d?await s():q.value=null})}),se(()=>{D.off(x.emitter.OBJECT_LOADED),D.off(x.emitter.DUPLICATE_NAMES)}),(d,l)=>{const r=M("cbutton"),F=M("form-field"),U=M("row"),K=M("modal");return u(),h(C,null,[i.recordStateTypeId===a(t).recordStateType.draft?(u(),h(C,{key:0},[c(r,{class:"col-12 col-sm-auto",title:a(e).enums.recordStateTypeAction[7],type:a(t).buttonType.secondary,size:a(t).buttonSize.large,onClick:N,disabled:i.loading},null,8,["title","type","size","disabled"]),c(r,{class:"col-12 col-sm-auto",title:a(e).enums.recordStateTypeAction[3],type:a(t).buttonType.primary,size:a(t).buttonSize.large,onClick:z,disabled:i.loading||!a(P)||!i.canEdit},null,8,["title","type","size","disabled"])],64)):I("",!0),i.recordStateTypeId===a(t).recordStateType.submitted?(u(),h(C,{key:1},[_.value?(u(),R(r,{key:0,class:"col-12 col-sm-auto",title:a(e).enums.recordStateTypeAction[4],type:a(t).buttonType.primary,size:a(t).buttonSize.large,onClick:k,disabled:i.loading},null,8,["title","type","size","disabled"])):I("",!0)],64)):I("",!0),i.recordStateTypeId===a(t).recordStateType.approval&&_.value?(u(),h(C,{key:2},[c(r,{class:"col-12 col-sm-auto",title:a(e).enums.recordStateTypeAction[6],type:a(t).buttonType.secondary,size:a(t).buttonSize.large,onClick:X,disabled:i.loading},null,8,["title","type","size","disabled"]),c(r,{class:"col-12 col-sm-auto",title:a(e).enums.recordStateTypeAction[5],type:a(t).buttonType.primary,size:a(t).buttonSize.large,onClick:o,disabled:i.loading},null,8,["title","type","size","disabled"])],64)):I("",!0),i.recordStateTypeId===a(t).recordStateType.returned&&_.value?(u(),h(C,{key:3},[c(r,{class:"col-12 col-sm-auto",title:a(e).enums.recordStateTypeAction[7],type:a(t).buttonType.secondary,size:a(t).buttonSize.large,onClick:N,disabled:i.loading},null,8,["title","type","size","disabled"]),c(r,{class:"col-12 col-sm-auto",title:a(e).enums.recordStateTypeAction[2],type:a(t).buttonType.primary,size:a(t).buttonSize.large,onClick:y,disabled:i.loading},null,8,["title","type","size","disabled"])],64)):I("",!0),c(K,{title:d._lang.common.confirmation,id:a(f),size:a(t).modalSize.medium},{body:$(()=>[ne("p",null,de(a(v)),1),a(w)?(u(),R(U,{key:0},{default:$(()=>[c(F,{id:"refusalTypeId",class:"mb-3 col-12",modelValue:a(m).refusalTypeId,"onUpdate:modelValue":l[0]||(l[0]=B=>a(m).refusalTypeId=B),label:d._lang.label.refusalTypeId,type:a(t).inputs.multiselect,required:!0,placeholder:d._lang.common.selectOption,options:j.store.refusalTypeList},null,8,["modelValue","label","type","placeholder","options"]),c(F,{id:"refusal",class:"mb-3 col-12",modelValue:a(m).description,"onUpdate:modelValue":l[1]||(l[1]=B=>a(m).description=B),label:d._lang.label.refusal,type:a(t).inputs.textarea,maxlength:255,required:!0,disabled:!a(m).refusalTypeId},null,8,["modelValue","label","type","disabled"])]),_:1})):I("",!0)]),footer:$(()=>[c(r,{type:"secondary",size:"large",title:a(e).common.cancel,"data-bs-dismiss":"modal",onClick:Q},null,8,["title"]),c(r,{type:"primary",title:a(e).common.confirm,onClick:G,disabled:a(w)&&(!a(m).description||!a(m).refusalTypeId)},null,8,["title","disabled"])]),_:1},8,["title","id","size"]),c(be,{"data-source":a(p),name:i.name},null,8,["data-source","name"])],64)}}},Oe={__name:"detail-actions",props:{loading:{Boolean,required:!0},selectedLang:{type:[String,Number],required:!0},service:{type:Object,required:!0},backRoute:{type:String,required:!0},editRoute:{type:String,required:!0},itemIdField:{type:String,required:!0},formModel:{type:Object,required:!0},itemId:{type:Number,required:!0},itemVersion:{type:Number,required:!0},itemVersionField:{type:String,required:!0},showRecordStateActions:{type:Boolean,default:!1},store:{type:Object,required:!0}},emits:["update:selectedLang","update:loading"],setup(j,{emit:i}){const e=j;le(async()=>{b.value=J.getObjecTypeId(e.formModel),await q()}),oe(()=>{});const D=ae();te();const L="confirm-extinct-submit";let f=S([]),v=S(!1),b=S(t.objectType.notApplicable),P=S(null);function w(o){v.value=o.width<576}const m=H({get(){return e.selectedLang},set(o){i("update:selectedLang",o)}}),p=H({get(){return e.loading},set(o){i("update:loading",o)}});async function q(){let o=await ke.getLanguages();n.validateResponse(o,null,()=>{f.value=o.data})}async function _(){let o=e.itemId,s=e.itemVersion;if(e.formModel.recordStateTypeId===t.recordStateType.submitted&&await Q(),e.formModel.recordStateTypeId===t.recordStateType.published){const y=await G();await n.validateResponseAsync(y,null,async()=>{o=y.data[e.itemIdField],s=y.data[e.itemVersionField],N(o,s)})}else N(o,s)}async function Q(){p.value=!0;const o=await e.service.changeStateToDraft(e.itemId,e.itemVersion);n.validateResponse(o,null,()=>{}),p.value=!1}async function G(){p.value=!0;const o=await e.service.update(e.formModel);return n.validateResponse(o,null,()=>{}),p.value=!1,o}function N(o,s){D.push({name:e.editRoute,params:{[e.itemIdField]:n.encodeId(o),[e.itemVersionField]:n.encodeId(s)}})}const V=H(()=>{var o,s,y,g,k,A,T,O,d,l,r,F,U,K,B,Z;if(e.formModel.recordStateTypeId!==t.recordStateType.published&&e.formModel.recordStateTypeId!==t.recordStateType.draft&&e.formModel.recordStateTypeId!==t.recordStateType.approval&&e.formModel.recordStateTypeId!==t.recordStateType.submitted||e.formModel.recordStateTypeId===t.recordStateType.published&&e.formModel.parentOrganization===null&&e.itemIdField==="organizationId")return!1;switch(e.itemIdField){case"organizationId":return((o=e==null?void 0:e.formModel)==null?void 0:o.recordStateTypeId)!=7&&(z((s=e==null?void 0:e.formModel)==null?void 0:s.organizationId,t.permissions.organization)||z((g=(y=e==null?void 0:e.formModel)==null?void 0:y.parentOrganization)==null?void 0:g.id,t.permissions.organization));case"serviceId":return((k=e==null?void 0:e.formModel)==null?void 0:k.recordStateTypeId)!=7&&z((T=(A=e==null?void 0:e.formModel)==null?void 0:A.organization)==null?void 0:T.id,t.permissions.service);case"pointOfCareId":return((O=e==null?void 0:e.formModel)==null?void 0:O.recordStateTypeId)!=7&&z((l=(d=e==null?void 0:e.formModel)==null?void 0:d.organization)==null?void 0:l.id,t.permissions.pointOfCare);case"documentId":return((r=e==null?void 0:e.formModel)==null?void 0:r.recordStateTypeId)!=7&&z((U=(F=e==null?void 0:e.formModel)==null?void 0:F.organization)==null?void 0:U.id,t.permissions.document);case"locationId":return((K=e==null?void 0:e.formModel)==null?void 0:K.recordStateTypeId)!=7&&z((Z=(B=e==null?void 0:e.formModel)==null?void 0:B.organization)==null?void 0:Z.id,t.permissions.location)}});function z(o,s){return o==null&&e.formModel.recordStateTypeId===t.recordStateType.draft?E.havePermission(s.createEdit):E.havePermissionOrganization(s.createEdit,o)}const W=H(()=>J.getFieldByLangAndName(e.formModel,m.value,"name")),X=H(()=>{var o,s,y,g,k;if(e.formModel.recordStateTypeId!=t.recordStateType.published)return!1;switch(e.itemIdField){case"organizationId":return E.havePermissionOrganization(t.permissions.super.approve,(o=e==null?void 0:e.formModel)==null?void 0:o.organizationId)||E.havePermissionOrganization(t.permissions.super.approve,(y=(s=e==null?void 0:e.formModel)==null?void 0:s.parentOrganization)==null?void 0:y.id);case"serviceId":case"pointOfCareId":case"documentId":case"locationId":return E.havePermissionOrganization(t.permissions.super.approve,(k=(g=e==null?void 0:e.formModel)==null?void 0:g.organization)==null?void 0:k.id)}});function Y(){n.showModalById(L),P.value.setDate(e.formModel.endDate),console.log(e.formModel.endDate)}return(o,s)=>{const y=M("lang-selector"),g=M("cbutton"),k=M("cbutton-options-item"),A=M("cbutton-options"),T=ce("resize");return u(),h(C,null,[c(y,{options:a(f),selectedLang:a(m),"onUpdate:selectedLang":s[0]||(s[0]=O=>ue(m)?m.value=O:null),disabled:a(p)},null,8,["options","selectedLang","disabled"]),e.showRecordStateActions?(u(),h(C,{key:1},[c(ze,{"record-state-type-id":e.formModel.recordStateTypeId,"object-type-id":a(b),loading:e.loading,service:e.service,"item-id":e.itemId,"item-version":e.itemVersion,canEdit:a(V),name:a(W),store:j.store,itemVersion:e.itemVersion,itemVersionField:e.itemVersionField,itemIdField:e.itemIdField,editRoute:e.editRoute},null,8,["record-state-type-id","object-type-id","loading","service","item-id","item-version","canEdit","name","store","itemVersion","itemVersionField","itemIdField","editRoute"]),a(V)&&e.formModel.recordStateTypeId!=a(t).recordStateType.returned?me((u(),R(A,{key:0,title:o._lang.common.actions,size:a(t).buttonSize.large,type:a(t).buttonType.secondary,disabled:a(p),class:ye(["d-sm-block d-none",{"dropdown-center":a(v)}])},{default:$(()=>[c(k,{title:o._lang.common.edit,onClick:pe(_,["prevent"]),disabled:a(p)},null,8,["title","onClick","disabled"])]),_:1},8,["title","size","type","disabled","class"])),[[T,w]]):I("",!0),a(V)?(u(),R(g,{key:1,class:"col-12 col-sm-auto d-sm-none",title:o._lang.common.edit,type:a(t).buttonType.secondary,size:a(t).buttonSize.large,onClick:_,disabled:a(p)},null,8,["title","type","size","disabled"])):I("",!0)],64)):(u(),h(C,{key:0},[a(V)?(u(),R(g,{key:0,class:"col-12 col-sm-auto",title:o._lang.common.edit,type:a(t).buttonType.secondary,size:a(t).buttonSize.large,onClick:_,disabled:a(p)},null,8,["title","type","size","disabled"])):I("",!0),a(X)?(u(),R(g,{key:1,class:"col-12 col-sm-auto",title:o._lang.common.extinctBtn,type:a(t).buttonType.secondary,size:a(t).buttonSize.large,onClick:Y,disabled:a(p)},null,8,["title","type","size","disabled"])):I("",!0)],64)),c(fe,{id:L,startDate:e.formModel.startDate,endDate:e.formModel.endDate,service:e.service,itemId:e.itemId,itemVersion:e.itemVersion,backRoute:e.backRoute,itemIdField:e.itemIdField,ref_key:"extinctConfirmModalRef",ref:P},null,8,["startDate","endDate","service","itemId","itemVersion","backRoute","itemIdField"])],64)}}};export{Oe as _};
