import{x as U,u as x,m as K,r as v,n as s,o as J,s as E,A as e,j as G,a as _,b as y,k as I,f as a,F as C,d as c,B as q,c as V,w as H,g as Q,t as Y,R as Z,L as W,I as O,V as X,Y as ee,i as te,P as ae,Z as oe,z as ie}from"./index-920dbb37.js";import{a as se}from"./comments-3b769030.js";import{b as N}from"./helpers-4c156364.js";import{p as re}from"./helpers-db4b16e6.js";import{e as ne}from"./helpers-93ac209f.js";import{d as de}from"./helpers-cd5e71d3.js";import{s as le}from"./helpers-65b02008.js";import{h as ce}from"./helpers-952742ca.js";import{s as ue}from"./settings-bb7269a2.js";const pe={__name:"record-state-actions",props:{loading:{Boolean,required:!0},canEdit:{Boolean,required:!0},recordStateTypeId:{required:!0},service:{type:Object,required:!0},itemId:{type:Number,required:!0},itemVersion:{type:Number,required:!0},objectTypeId:{required:!0},name:{type:String}},setup(b){const n=b,t=U(),w=x(),L=K();let p="record-state-type",g=v(null),f=v(0),T=v(!1),u=v(s.createEmptyDataSource()),h=v(null);const B=async()=>{switch(f.value){case e.recordStateType.archived:await R();break;case e.recordStateType.submitted:await D();break;case e.recordStateType.draft:await z();break;case e.recordStateType.approval:await M();break;case e.recordStateType.returned:await P();break;case e.recordStateType.published:await r();break}},j=async()=>{g.value=t.backoffice.tasks.archived.question,f.value=e.recordStateType.archived,s.showModalById(p)},R=async()=>{await m(e.recordStateType.archived)},F=async()=>{g.value=t.backoffice.tasks.submitted.question,f.value=e.recordStateType.submitted,s.showModalById(p)},D=async()=>{await m(e.recordStateType.submitted)},k=()=>{g.value=t.backoffice.tasks.returned.question,f.value=e.recordStateType.returned,s.showModalById(p)},P=async()=>{await m(e.recordStateType.returned)},o=()=>{g.value=t.backoffice.tasks.published.question,f.value=e.recordStateType.published,h.value=null,s.showModalById(p)},r=async()=>{await m(e.recordStateType.published)},S=()=>{g.value=t.backoffice.tasks.draft.question,f.value=e.recordStateType.draft,s.showModalById(p)},z=async()=>{await m(e.recordStateType.draft)},A=()=>{g.value=t.backoffice.tasks.approval.question,f.value=e.recordStateType.approval,s.showModalById(p)},M=async()=>{await m(e.recordStateType.approval)},m=async d=>{s.closeModalById(p);const i=await n.service.changeState(n.itemId,n.itemVersion,d,h.value);if(i.code===e.responseCode.success){const l=N.getMessage(t,f.value,n.objectTypeId);Z.success(l),L.push({name:E.router.BACKOFFICE_TASKS_PAGE.name})}else i.code===e.responseCode.organizationDuplicate||i.code===e.responseCode.locationDuplicate||i.code===e.responseCode.pointOfCareDuplicate||i.code===e.responseCode.documentDuplicate||i.code===e.responseCode.serviceDuplicate?(h.value=i.data.key,u.value=s.createEmptyDataSource(i.data.newListDuplicates),s.showModalById("duplicated-names")):s.showErrorToastByResponseCode(i.code)};return J(()=>{w.on(E.emitter.OBJECT_LOADED,d=>{if(d.recordStateTypeId===e.recordStateType.draft){let i=[];switch(n.objectTypeId){case e.objectType.organization:i=ne.progressFields();break;case e.objectType.service:i=le.progressFields();break;case e.objectType.pointOfCare:i=re.progressFields();break;case e.objectType.location:i=ce.progressFields();break;case e.objectType.document:i=de.progressFields();break}N.calculatePercentage(d,i,l=>{T.value=l===100})}}),w.on(E.emitter.DUPLICATE_NAMES,async d=>{d?await r():h.value=null})}),G(()=>{w.off(E.emitter.OBJECT_LOADED),w.off(E.emitter.DUPLICATE_NAMES)}),(d,i)=>{const l=_("cbutton"),$=_("modal");return y(),I(C,null,[n.recordStateTypeId===a(e).recordStateType.draft?(y(),I(C,{key:0},[c(l,{class:"col-12 col-sm-auto",title:a(t).enums.recordStateTypeAction[7],type:a(e).buttonType.secondary,size:a(e).buttonSize.large,onClick:j,disabled:b.loading},null,8,["title","type","size","disabled"]),c(l,{class:"col-12 col-sm-auto",title:a(t).enums.recordStateTypeAction[3],type:a(e).buttonType.primary,size:a(e).buttonSize.large,onClick:F,disabled:b.loading||!a(T)||!n.canEdit},null,8,["title","type","size","disabled"])],64)):q("",!0),n.recordStateTypeId===a(e).recordStateType.submitted?(y(),V(l,{key:1,class:"col-12 col-sm-auto",title:a(t).enums.recordStateTypeAction[4],type:a(e).buttonType.primary,size:a(e).buttonSize.large,onClick:A,disabled:b.loading},null,8,["title","type","size","disabled"])):q("",!0),n.recordStateTypeId===a(e).recordStateType.approval?(y(),I(C,{key:2},[c(l,{class:"col-12 col-sm-auto",title:a(t).enums.recordStateTypeAction[6],type:a(e).buttonType.secondary,size:a(e).buttonSize.large,onClick:k,disabled:b.loading},null,8,["title","type","size","disabled"]),c(l,{class:"col-12 col-sm-auto",title:a(t).enums.recordStateTypeAction[5],type:a(e).buttonType.primary,size:a(e).buttonSize.large,onClick:o,disabled:b.loading},null,8,["title","type","size","disabled"])],64)):q("",!0),n.recordStateTypeId===a(e).recordStateType.returned?(y(),I(C,{key:3},[c(l,{class:"col-12 col-sm-auto",title:a(t).enums.recordStateTypeAction[7],type:a(e).buttonType.secondary,size:a(e).buttonSize.large,onClick:j,disabled:b.loading},null,8,["title","type","size","disabled"]),c(l,{class:"col-12 col-sm-auto",title:a(t).enums.recordStateTypeAction[2],type:a(e).buttonType.primary,size:a(e).buttonSize.large,onClick:S,disabled:b.loading},null,8,["title","type","size","disabled"])],64)):q("",!0),c($,{title:d._lang.common.confirmation,id:a(p),size:a(e).modalSize.medium},{body:H(()=>[Q("p",null,Y(a(g)),1)]),footer:H(()=>[c(l,{type:"secondary",size:"large",title:a(t).common.cancel,"data-bs-dismiss":"modal"},null,8,["title"]),c(l,{type:"primary",title:a(t).common.confirm,onClick:B},null,8,["title"])]),_:1},8,["title","id","size"]),c(se,{"data-source":a(u),name:n.name},null,8,["data-source","name"])],64)}}},ze={__name:"detail-actions",props:{loading:{Boolean,required:!0},selectedLang:{type:[String,Number],required:!0},service:{type:Object,required:!0},backRoute:{type:String,required:!0},editRoute:{type:String,required:!0},itemIdField:{type:String,required:!0},formModel:{type:Object,required:!0},itemId:{type:Number,required:!0},itemVersion:{type:Number,required:!0},itemVersionField:{type:String,required:!0},showRecordStateActions:{type:Boolean,default:!1}},emits:["update:selectedLang","update:loading"],setup(b,{emit:n}){const t=b;W(async()=>{g.value=N.getObjecTypeId(t.formModel),await h()}),J(()=>{});const w=K();U();let L=v([]),p=v(!1),g=v(e.objectType.notApplicable);function f(o){p.value=o.width<576}const T=O({get(){return t.selectedLang},set(o){n("update:selectedLang",o)}}),u=O({get(){return t.loading},set(o){n("update:loading",o)}});async function h(){let o=await ue.getLanguages();s.validateResponse(o,null,()=>{L.value=o.data})}async function B(){let o=t.itemId,r=t.itemVersion;if(t.formModel.recordStateTypeId===e.recordStateType.submitted&&await j(),t.formModel.recordStateTypeId===e.recordStateType.published){const S=await R();await s.validateResponseAsync(S,null,async()=>{o=S.data[t.itemIdField],r=S.data[t.itemVersionField],F(o,r)})}else F(o,r)}async function j(){u.value=!0;const o=await t.service.changeStateToDraft(t.itemId,t.itemVersion);s.validateResponse(o,null,()=>{}),u.value=!1}async function R(){u.value=!0;const o=await t.service.update(t.formModel);return s.validateResponse(o,null,()=>{}),u.value=!1,o}function F(o,r){w.push({name:t.editRoute,params:{[t.itemIdField]:s.encodeId(o),[t.itemVersionField]:s.encodeId(r)}})}const D=O(()=>{var o,r,S,z,A,M,m,d,i;switch(t.itemIdField){case"organizationId":return k((o=t==null?void 0:t.formModel)==null?void 0:o.organizationId,e.permissions.organization)||k((S=(r=t==null?void 0:t.formModel)==null?void 0:r.parentOrganization)==null?void 0:S.id,e.permissions.organization);case"serviceId":return k((A=(z=t==null?void 0:t.formModel)==null?void 0:z.organization)==null?void 0:A.id,e.permissions.service);case"pointOfCareId":return k((m=(M=t==null?void 0:t.formModel)==null?void 0:M.organization)==null?void 0:m.id,e.permissions.pointOfCare);case"documentId":return k((i=(d=t==null?void 0:t.formModel)==null?void 0:d.organization)==null?void 0:i.id,e.permissions.document)}});function k(o,r){return X.havePermissionOrganization(r.createEdit,o)}const P=O(()=>N.getFieldByLangAndName(t.formModel,T.value,"name"));return(o,r)=>{const S=_("lang-selector"),z=_("cbutton"),A=_("cbutton-options-item"),M=_("cbutton-options"),m=ee("resize");return y(),I(C,null,[c(S,{options:a(L),selectedLang:a(T),"onUpdate:selectedLang":r[0]||(r[0]=d=>te(T)?T.value=d:null),disabled:a(u)},null,8,["options","selectedLang","disabled"]),t.showRecordStateActions?(y(),I(C,{key:1},[c(pe,{"record-state-type-id":t.formModel.recordStateTypeId,"object-type-id":a(g),loading:t.loading,service:t.service,"item-id":t.itemId,"item-version":t.itemVersion,canEdit:a(D),name:a(P)},null,8,["record-state-type-id","object-type-id","loading","service","item-id","item-version","canEdit","name"]),ae((y(),V(M,{title:o._lang.common.actions,size:a(e).buttonSize.large,type:a(e).buttonType.secondary,disabled:a(u),class:ie(["d-sm-block d-none",{"dropdown-center":a(p)}])},{default:H(()=>[c(A,{title:o._lang.common.edit,onClick:oe(B,["prevent"]),disabled:a(u)},null,8,["title","onClick","disabled"])]),_:1},8,["title","size","type","disabled","class"])),[[m,f]]),a(D)?(y(),V(z,{key:0,class:"col-12 col-sm-auto d-sm-none",title:o._lang.common.edit,type:a(e).buttonType.secondary,size:a(e).buttonSize.large,onClick:B,disabled:a(u)},null,8,["title","type","size","disabled"])):q("",!0)],64)):(y(),I(C,{key:0},[a(D)?(y(),V(z,{key:0,class:"col-12 col-sm-auto",title:o._lang.common.edit,type:a(e).buttonType.secondary,size:a(e).buttonSize.large,onClick:B,disabled:a(u)},null,8,["title","type","size","disabled"])):q("",!0)],64))],64)}}};export{ze as _};
