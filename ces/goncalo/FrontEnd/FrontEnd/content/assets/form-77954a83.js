import{r as y,k as B,H as pe,N as oe,v as m,u as C,l as s,c as O,m as q,n as v,q as l,s as e,L as j,A as R,i as J,h as ge,j as x,o as X,B as K,Y as Se,P as ae,e as Y,U as fe,V as be,W as ve,F as ne,x as ye,M as ke,C as Ce,f as Ie,g as we,y as Le,O as Oe}from"./index-bb041a92.js";import{u as Z}from"./service-ba1c1675.js";import{r as Te}from"./index.esm-70b2cee2.js";import{b as Q}from"./helpers-f0eb2667.js";import{a as Fe,_ as Ee}from"./address.vue_vue_type_style_index_0_scoped_5480b292_lang-4424aca9.js";import{s as te}from"./service-05ba5811.js";import{_ as _e}from"./form-22e2108a.js";import{s as he}from"./settings-7b62b456.js";import{u as ue}from"./index.esm-aaed56ca.js";import{s as W}from"./helpers-88e09779.js";import{l as me}from"./legislation-266f6f86.js";import{u as Be}from"./organization-7396450f.js";import{h as de}from"./helpers-c77579e9.js";import{_ as Ue,a as $e}from"./refusal-4a9e82b8.js";import{_ as qe}from"./generic-a6ce2963.js";import{p as re}from"./point-of-care-cea4a765.js";import{u as Ae}from"./point-of-care-b2dac6a1.js";import{p as Me}from"./helpers-c3e2dc86.js";const Pe={__name:"description",props:{modelValue:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},selectedLang:{type:[String,Number],required:!0},validateForm:{type:Boolean,default:!1},rules:{type:Object,default:{}},vuelidate:{type:Object,default:null}},emits:["update:modelValue"],setup(I,{emit:d}){const n=I,t=Z();let b=y(!0),p=y([]);const a=B(()=>{let u=pe.getUser();return!u||!u.name?!1:u.name.toLowerCase()==="guest"});oe(async()=>{a.value||await g()});const o=B({get(){return n.modelValue},set(u){d("update:modelValue",u)}}),r=B(()=>n.selectedLang),_=B({get(){return Q.getFieldByLangAndName(o.value,r.value,"description")},set(u){Q.setFieldByLangAndName(o.value,r.value,"description",u)}});B({get(){return Q.getFieldByLangAndName(o.value,r.value,"serviceProcedure")},set(u){Q.setFieldByLangAndName(o.value,r.value,"serviceProcedure",u)}});const f=B(()=>r.value===m.language.en);async function g(){b.value=!0;const u=await te.checklist();C.validateResponse(u,null,()=>{p.value=u.data}),b.value=!1}return(u,V)=>{const c=s("form-field"),k=s("row"),L=s("accordion");return O(),q(L,{id:"description",title:u._lang.common.description,collapsed:!1,class:"mb-4"},{default:v(()=>[l(k,null,{default:v(()=>{var T,F,M;return[l(c,{id:"economicActivityId",class:"mb-3 col-12",modelValue:e(o).economicActivityId,"onUpdate:modelValue":V[0]||(V[0]=i=>e(o).economicActivityId=i),label:u._lang.label.economicActivityId,disabled:n.disabled||e(f),loading:n.loading,type:e(m).inputs.multiselect,required:n.validateForm,placeholder:u._lang.common.selectOption,showError:n.validateForm&&((F=(T=n.vuelidate)==null?void 0:T.economicActivityId)==null?void 0:F.$error),"error-message":u._errorMessageField((M=n.vuelidate)==null?void 0:M.economicActivityId),options:e(t).economicActivityList},null,8,["modelValue","label","disabled","loading","type","required","placeholder","showError","error-message","options"])]}),_:1}),e(b)?R("",!0):(O(),q(c,{key:0,id:"description",class:"mb-3 col-12",modelValue:e(_),"onUpdate:modelValue":V[1]||(V[1]=T=>j(_)?_.value=T:null),label:u._lang.label.description,disabled:n.disabled,loading:n.loading,type:e(m).inputs.richtext,language:e(r),maxlength:4e3,templates:e(p)},null,8,["modelValue","label","disabled","loading","type","language","templates"]))]),_:1},8,["title"])}}},je={__name:"create",props:{modelValue:{type:Array,required:!0}},emits:["update:modelValue"],setup(I,{emit:d}){const n=I,t=J();ge();const b="create-legislation";let p=y([]),a=x(W.legislationNewForm()),o=y(!1),r=y(m.language.pt);const _=ue(W.legislationFormRules(),a,{$scope:!1}),f=B({get(){return n.modelValue},set(c){d("update:modelValue",c)}});async function g(){o.value=!0;let c=await he.getLanguages();C.validateResponse(c,null,()=>{p.value=c.data}),o.value=!1}function u(){a=Object.assign(a,W.legislationNewForm()),_.value.$reset()}async function V(){if(o.value=!0,await _.value.$validate(),!_.value.$error){const c={legislationId:a.legislationId,name:a.texts[0].name,code:a.code,document:a.document,texts:a.texts};f.value.find(L=>L.name===c.name&&L.description===c.description)?K.warning(t.backoffice.service.legislationExists):(f.value.push(c),a=Object.assign(a,W.legislationNewForm()),_.value.$reset(),C.closeModalById(b),K.success(t.backoffice.service.legislationAdded))}o.value=!1}return X(async()=>{await g()}),(c,k)=>{const L=s("lang-selector"),T=s("top-actions"),F=s("cbutton"),M=s("modal");return O(),q(M,{id:b,title:c._lang.backoffice.service.addLegislation,size:e(m).modalSize.extraLarge},{body:v(()=>[l(T,null,{default:v(()=>[l(L,{options:e(p),selectedLang:e(r),"onUpdate:selectedLang":k[0]||(k[0]=i=>j(r)?r.value=i:r=i),disabled:e(o)},null,8,["options","selectedLang","disabled"])]),_:1}),l(_e,{modelValue:e(a),"onUpdate:modelValue":k[1]||(k[1]=i=>j(a)?a.value=i:a=i),selectedLang:e(r),loading:e(o),disabled:e(o),vuelidate:e(_)},null,8,["modelValue","selectedLang","loading","disabled","vuelidate"])]),footer:v(()=>[l(F,{title:c._lang.common.cancel,type:e(m).buttonType.secondary,"data-bs-dismiss":"modal","aria-label":"Close",disabled:e(o),onClick:u},null,8,["title","type","disabled"]),l(F,{title:c._lang.common.save,onClick:V,disabled:e(o)},null,8,["title","disabled"])]),_:1},8,["title","size"])}}},Ne={__name:"search-legislation",props:{modelValue:{type:Object,required:!0},selectedLang:{type:[String,Number],required:!0},vuelidate:{type:Object,default:null}},emits:["update:modelValue","apply"],setup(I,{emit:d}){const n=I;Be();const t="search-legislation";let b=y(!1),p=y(0),a=y(!1),o=x(C.createEmptyDataSource()),r=x(V()),_=x(n.modelValue);oe(async()=>{await L()});const f=B({get(){return n.modelValue},set(i){d("update:modelValue",i)}});async function g(i){r.sortBy=i,await L()}async function u(i){r.pageIndex=i,await L()}function V(){return{pageNumber:1,sortBy:"legislationId",name:null,code:null}}async function c(){Object.assign(r,V()),await M()}async function k(){await L()}async function L(){b.value=!0,r.legislationId?r.legislationIds=[r.legislationId]:r.legislationIds=[];let i=await me.search(r);C.validateResponse(i,null,()=>{o=i.data}),b.value=!1}async function T(i){const h=await me.getById(i.legislationId,i.legislationVersion);C.validateResponse(h,null,()=>{Object.assign(_,h.data),f.value=h.data,a.value=!0}),p.value++}function F(){}function M(){d("apply")}return(i,h)=>{const A=s("form-field"),z=s("row"),G=s("cfilter"),N=s("ccolumn"),S=s("table-action-detail"),U=s("ctable"),$=s("accordion"),D=s("cbutton"),w=s("modal");return O(),q(w,{id:t,title:i._lang.backoffice.settings.legislation.searchTitle,size:e(m).modalSize.extraLarge,"remove-padding":!0},{body:v(()=>[l(G,{title:i._lang.common.filter,"clear-click":c,"apply-click":k,loading:e(b),collapsed:!1},{default:v(()=>[l(z,null,{default:v(()=>[l(A,{id:"code-filter",class:"mb-3 col-12 col-md-6",label:i._lang.label.code,type:e(m).inputs.text,maxlength:45,modelValue:e(r).organizationId,"onUpdate:modelValue":h[0]||(h[0]=E=>e(r).organizationId=E)},null,8,["label","type","modelValue"]),l(A,{id:"name-filter",class:"mb-3 col-12 col-md-6",label:i._lang.label.name,type:e(m).inputs.text,maxlength:45,modelValue:e(r).name,"onUpdate:modelValue":h[1]||(h[1]=E=>e(r).name=E)},null,8,["label","type","modelValue"])]),_:1})]),_:1},8,["title","loading"]),l(Se,null,{default:v(()=>[l(U,{onSort:g,onChangePage:u,data:e(o),loading:e(b),checkbox:!1},{columns:v(()=>[l(N,{name:i._lang.label.code,field:"code",sortable:!0},null,8,["name"]),l(N,{name:i._lang.label.name,field:"name",sortable:!0},null,8,["name"])]),actions:v(E=>[l(S,{onClick:ee=>T(E.item)},null,8,["onClick"])]),_:1},8,["data","loading"])]),_:1}),(O(),q($,{id:"legislation",title:i._lang.backoffice.entities.legislation,collapsed:e(a),class:"mt-4",key:e(p)},{default:v(()=>[l(_e,{modelValue:e(_),"onUpdate:modelValue":h[2]||(h[2]=E=>j(_)?_.value=E:_=E),disabled:!1,validateForm:!1,vuelidate:n.vuelidate,selectedLang:n.selectedLang},null,8,["modelValue","vuelidate","selectedLang"])]),_:1},8,["title","collapsed"]))]),footer:v(()=>[l(D,{type:"primary",size:"large",title:i._lang.common.apply,"data-bs-dismiss":"modal",onClick:M},null,8,["title"]),l(D,{type:"secondary",size:"large",title:i._lang.common.cancel,"data-bs-dismiss":"modal",onClick:F},null,8,["title"])]),_:1},8,["title","size"])}}},ze={__name:"legislations",props:{modelValue:{type:Array,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},rules:{type:Object,default:{}},selectedLang:{type:[String,Number],required:!0}},emits:["update:modelValue"],setup(I,{emit:d}){const n=I,t=J();let b=y(!1),p=y(0),a=x(de.newForm()),o=x(de.formRules());const r=B(()=>C.createEmptyDataSource(g.value)),_=ue(o,a,{$scope:!1}),f="confirm-delete-legislation",g=B({get(){return n.modelValue},set(i){d("update:modelValue",i)}});let u=y(null);const V=y(ae.havePermission(m.permissions.service.createEdit));function c(i){u.value=i}function k(){u.value&&(C.removeItemOfArray(g.value,u),K.success(t.backoffice.service.legislationRemoved),u.value=null)}function L(i){C.sortArrayOffline(i,r.value.items)}function T(i){i.download&&C.downloadFile(i.download)}async function F(){if(b.value=!0,await _.value.$validate(),!_.value.$error){const i={legislationId:a.legislationId,name:a.texts[0].name,code:a.code,document:a.document,texts:a.texts};g.value.find(A=>A.name===i.name&&A.description===i.description)?K.warning(t.backoffice.service.legislationExists):(g.value.push(i),a=Object.assign(a,W.legislationNewForm()),_.value.$reset(),K.success(t.backoffice.service.legislationAdded))}b.value=!1}function M(){Object.assign(a,de.newForm())}return(i,h)=>{const A=s("table-actions"),z=s("ccolumn"),G=s("table-action-download"),N=s("table-action-delete"),S=s("ctable"),U=s("confirm-delete-modal");return O(),Y(ne,null,[l(ve,{id:"legislations",title:i._lang.backoffice.service.legislations,collapsed:!1,class:"mb-4"},{default:v(()=>[V.value?(O(),q(A,{key:0},{default:v(()=>[l(fe,{target:"search-legislation",class:"d-inline",type:e(m).buttonType.secondary,title:i._lang.common.toAdd,disabled:n.disabled,icon:be,onClick:M},null,8,["type","title","disabled"])]),_:1})):R("",!0),l(S,{data:e(r),loading:e(b),checkbox:!1,showPagination:!1,onSort:L},{columns:v(()=>[l(z,{name:i._lang.label.code,field:"code",sortable:!0},null,8,["name"]),l(z,{name:i._lang.common.name,field:"name",sortable:!0},null,8,["name"])]),actions:v($=>[$.item.download?(O(),q(G,{key:0,onClick:D=>T($.item)},null,8,["onClick"])):R("",!0),l(N,{id:f,onClick:D=>c($.item)},null,8,["onClick"])]),_:1},8,["data","loading"])]),_:1},8,["title"]),l(je,{modelValue:e(g),"onUpdate:modelValue":h[0]||(h[0]=$=>j(g)?g.value=$:null)},null,8,["modelValue"]),l(U,{id:f,title:i._lang.backoffice.service.deleteLegislation,message:i._lang.backoffice.service.deleteLegislationQuestion,action:k},null,8,["title","message"]),(O(),q(Ne,{modelValue:e(a),"onUpdate:modelValue":h[1]||(h[1]=$=>j(a)?a.value=$:a=$),key:e(p),onApply:F,selectedLang:n.selectedLang,vuelidate:e(_)},null,8,["modelValue","selectedLang","vuelidate"]))],64)}}},Re={__name:"create",props:{modelValue:{type:Array,required:!0}},emits:["update:modelValue"],setup(I,{emit:d}){const n=I,t=Z(),b=J();ge();const p="create-recipient";let a=x(f()),o=y(!1);const r=ue(W.recipientFormRules(),a,{$scope:!1}),_=B({get(){return n.modelValue},set(V){d("update:modelValue",V)}});function f(){return{recipientId:null,name:null,description:null,informationLevel:!1,recipientTypeId:null,recipientType:null}}function g(){a=Object.assign(a,f()),r.value.$reset()}async function u(){if(o.value=!0,await r.value.$validate(),!r.value.$error){const V={recipientId:a.recipientId,recipientTypeId:a.recipientTypeId,recipientType:Q.getLabel(t.recipientTypeList,a.recipientTypeId),name:a.name,description:a.description,document:a.document};_.value.find(k=>k.name===a.name&&k.description===a.description)?K.warning(b.backoffice.service.recipientExists):(_.value.push(V),a=Object.assign(a,f()),r.value.$reset(),C.closeModalById(p),K.success(b.backoffice.service.recipientAdded))}o.value=!1}return(V,c)=>{const k=s("form-field"),L=s("cbutton"),T=s("modal");return O(),q(T,{id:p,title:V._lang.backoffice.service.addRecipient,size:e(m).modalSize.extraLarge},{body:v(()=>[l(k,{id:"name",class:"mb-3 col-12",modelValue:e(a).name,"onUpdate:modelValue":c[0]||(c[0]=F=>e(a).name=F),label:V._lang.label.name,disabled:n.disabled,loading:n.loading,type:e(m).inputs.text,maxlength:255,required:!0,"show-error":e(r).name.$error,"error-message":V._errorMessageField(e(r).name)},null,8,["modelValue","label","disabled","loading","type","show-error","error-message"]),l(k,{id:"description",class:"mb-3 col-12",modelValue:e(a).description,"onUpdate:modelValue":c[1]||(c[1]=F=>e(a).description=F),label:V._lang.label.description,disabled:n.disabled,loading:n.loading,type:e(m).inputs.text,maxlength:255},null,8,["modelValue","label","disabled","loading","type"]),l(k,{id:"recipientTypeId",class:"mb-3 col-12",modelValue:e(a).recipientTypeId,"onUpdate:modelValue":c[2]||(c[2]=F=>e(a).recipientTypeId=F),label:V._lang.label.recipientTypeId,disabled:n.disabled,loading:n.loading,type:e(m).inputs.multiselect,placeholder:V._lang.common.selectOption,options:e(t).recipientTypeList},null,8,["modelValue","label","disabled","loading","type","placeholder","options"])]),footer:v(()=>[l(L,{title:V._lang.common.cancel,type:e(m).buttonType.secondary,"data-bs-dismiss":"modal","aria-label":"Close",disabled:e(o),onClick:g},null,8,["title","type","disabled"]),l(L,{title:V._lang.common.save,onClick:u,disabled:e(o)},null,8,["title","disabled"])]),_:1},8,["title","size"])}}},xe={__name:"recipients",props:{modelValue:{type:Array,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},rules:{type:Object,default:{}}},emits:["update:modelValue"],setup(I,{emit:d}){const n=I,t=J();let b=y(!1);const p=B(()=>C.createEmptyDataSource(o.value)),a="confirm-delete",o=B({get(){return n.modelValue},set(c){d("update:modelValue",c)}});let r=y(null);const _=y(ae.havePermission(m.permissions.service.createEdit));function f(c){r.value=c}function g(){r.value&&(C.removeItemOfArray(o.value,r),K.success(t.backoffice.service.recipientRemoved),r.value=null)}function u(c){C.sortArrayOffline(c,p.value.items)}function V(c){c.download&&C.downloadFile(c.download)}return(c,k)=>{const L=s("table-actions"),T=s("ccolumn"),F=s("table-action-download"),M=s("table-action-delete"),i=s("ctable"),h=s("confirm-delete-modal");return O(),Y(ne,null,[l(ve,{id:"recipients",title:c._lang.backoffice.service.recipients,collapsed:!1,class:"mb-4"},{default:v(()=>[_.value?(O(),q(L,{key:0},{default:v(()=>[l(fe,{target:"create-recipient",class:"d-inline",type:e(m).buttonType.secondary,title:c._lang.common.toAdd,disabled:n.disabled,icon:be},null,8,["type","title","disabled"])]),_:1})):R("",!0),l(i,{data:e(p),loading:e(b),checkbox:!1,showPagination:!1,onSort:u},{columns:v(()=>[l(T,{name:c._lang.label.name,field:"name",sortable:!0},null,8,["name"]),l(T,{name:c._lang.label.description,field:"description",sortable:!0},null,8,["name"]),l(T,{name:c._lang.label.recipientTypeId,sortField:"recipientTypeId",field:"recipientType",sortable:!0},null,8,["name"])]),actions:v(A=>[A.item.download?(O(),q(F,{key:0,onClick:z=>V(A.item)},null,8,["onClick"])):R("",!0),l(M,{id:a,onClick:z=>f(A.item),disabled:n.disabled},null,8,["onClick","disabled"])]),_:1},8,["data","loading"])]),_:1},8,["title"]),l(Re,{modelValue:e(o),"onUpdate:modelValue":k[0]||(k[0]=A=>j(o)?o.value=A:null)},null,8,["modelValue"]),l(h,{id:a,title:c._lang.backoffice.service.deleteRecipient,message:c._lang.backoffice.service.deleteRecipientQuestion,action:g},null,8,["title","message"])],64)}}},De={__name:"state-support",props:{vuelidate:{type:Object,default:{}},modelValue:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},validateForm:{type:Boolean,default:!1},rules:{type:Object,default:{}},selectedLang:{type:[String,Number],required:!0}},emits:["update:modelValue"],setup(I,{emit:d}){const n=I;Z(),y(!1),X(async()=>{});const t=B({get(){return n.modelValue},set(p){d("update:modelValue",p)}}),b=B(()=>n.selectedLang===m.language.en);return(p,a)=>{const o=s("form-field"),r=s("row"),_=s("accordion");return O(),q(_,{id:"stateSupport",title:p._lang.backoffice.service.stateSupport,collapsed:!1,class:"mb-4"},{default:v(()=>[l(r,null,{default:v(()=>{var f,g;return[l(o,{id:"stateSupport",class:"mb-3 col-12 col-md-6 col-lg-3",modelValue:e(t).stateSupport.isStateSupport,"onUpdate:modelValue":a[0]||(a[0]=u=>e(t).stateSupport.isStateSupport=u),label:p._lang.label.stateSupport,disabled:n.disabled||e(b),loading:n.loading,type:e(m).inputs.checkbox},null,8,["modelValue","label","disabled","loading","type"]),l(o,{id:"stateSupportUrl",class:"mb-3 col-12",modelValue:e(t).stateSupport.url,"onUpdate:modelValue":a[1]||(a[1]=u=>e(t).stateSupport.url=u),required:e(t).stateSupport.isStateSupport,label:p._lang.label.serviceUrl,disabled:n.disabled||e(b)||!e(t).stateSupport.isStateSupport,loading:n.loading,type:e(m).inputs.text,showError:n.validateForm&&((f=n.vuelidate)==null?void 0:f.stateSupport.url.$error),"error-message":p._errorMessageField((g=n.vuelidate)==null?void 0:g.stateSupport.url),maxlength:2048},null,8,["modelValue","required","label","disabled","loading","type","showError","error-message"]),l(o,{id:"externalSystemId",class:"mb-3 col-12 col-md-6",modelValue:e(t).stateSupport.externalSystemId,"onUpdate:modelValue":a[2]||(a[2]=u=>e(t).stateSupport.externalSystemId=u),required:!1,label:p._lang.label.externalSystemId,disabled:n.disabled||e(b)||!e(t).stateSupport.isStateSupport,loading:n.loading,type:e(m).inputs.text,maxlength:1024},null,8,["modelValue","label","disabled","loading","type"]),l(o,{id:"processId",class:"mb-3 col-12 col-md-6",modelValue:e(t).stateSupport.processId,"onUpdate:modelValue":a[3]||(a[3]=u=>e(t).stateSupport.processId=u),required:!1,label:p._lang.label.processId,disabled:n.disabled||e(b)||!e(t).stateSupport.isStateSupport,loading:n.loading,type:e(m).inputs.text,maxlength:1024},null,8,["modelValue","label","disabled","loading","type"])]}),_:1})]),_:1},8,["title"])}}},He={key:0,class:"mb-3 col-12"},Ke={__name:"virtual",props:{vuelidate:{type:Object,default:{}},modelValue:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},validateForm:{type:Boolean,default:!1},rules:{type:Object,default:{}},selectedLang:{type:[String,Number],required:!0}},emits:["update:modelValue"],setup(I,{emit:d}){const n=I;Z(),X(async()=>{}),y(null),y(null),y(null),y(null);const t=B({get(){return n.modelValue},set(p){d("update:modelValue",p)}}),b=B(()=>n.selectedLang===m.language.en);return(p,a)=>{const o=s("form-field"),r=s("row"),_=s("accordion");return O(),q(_,{id:"virtual",title:p._lang.backoffice.service.virtual,collapsed:!1,class:"mb-4"},{default:v(()=>[l(r,null,{default:v(()=>{var f,g;return[l(o,{id:"virtual",class:"col-12 col-md-6 col-lg-3",modelValue:e(t).virtual.isVirtual,"onUpdate:modelValue":a[0]||(a[0]=u=>e(t).virtual.isVirtual=u),label:p._lang.label.virtual,disabled:n.disabled||e(b),loading:n.loading,type:e(m).inputs.checkbox},null,8,["modelValue","label","disabled","loading","type"]),e(t).virtual.isVirtual?(O(),Y("span",He,ye(p._lang.backoffice.service.virtualText),1)):R("",!0),l(o,{id:"virtualUrl",class:"mb-3 col-12",modelValue:e(t).virtual.url,"onUpdate:modelValue":a[1]||(a[1]=u=>e(t).virtual.url=u),required:e(t).virtual.isVirtual,label:p._lang.label.serviceUrl,disabled:n.disabled||e(b)||!e(t).virtual.isVirtual,loading:n.loading,type:e(m).inputs.text,showError:n.validateForm&&((f=n.vuelidate)==null?void 0:f.virtual.url.$error),"error-message":p._errorMessageField((g=n.vuelidate)==null?void 0:g.virtual.url),maxlength:2048},null,8,["modelValue","required","label","disabled","loading","type","showError","error-message"]),l(o,{id:"externalSystemId",class:"mb-3 col-12 col-md-6",modelValue:e(t).virtual.externalSystemId,"onUpdate:modelValue":a[2]||(a[2]=u=>e(t).virtual.externalSystemId=u),required:!1,label:p._lang.label.externalSystemId,disabled:n.disabled||e(b)||!e(t).virtual.isVirtual,loading:n.loading,type:e(m).inputs.text,maxlength:1024},null,8,["modelValue","label","disabled","loading","type"]),l(o,{id:"processId",class:"mb-3 col-12 col-md-6",modelValue:e(t).virtual.processId,"onUpdate:modelValue":a[3]||(a[3]=u=>e(t).virtual.processId=u),required:!1,label:p._lang.label.processId,disabled:n.disabled||e(b)||!e(t).virtual.isVirtual,loading:n.loading,type:e(m).inputs.text,maxlength:1024},null,8,["modelValue","label","disabled","loading","type"]),l(o,{id:"canExecutedByThirdParty",class:"mb-3 col-12",modelValue:e(t).virtual.canExecutedByThirdParty,"onUpdate:modelValue":a[4]||(a[4]=u=>e(t).virtual.canExecutedByThirdParty=u),required:!1,label:p._lang.label.canExecutedByThirdParty,disabled:n.disabled||e(b)||!e(t).virtual.isVirtual,loading:n.loading,type:e(m).inputs.checkbox,maxlength:1024},null,8,["modelValue","label","disabled","loading","type"])]}),_:1})]),_:1},8,["title"])}}},Ge={__name:"general",props:{modelValue:{type:Object,required:!0},selectedLang:Te,disabled:{Boolean,default:!0},rules:{Boolean,default:!0},validateForm:{Boolean,default:!1},loading:{Object,default:{}},isExternalEdit:{type:Boolean,default:!1},showProgress:{type:Boolean,default:!0},progressValue:{type:Number,default:0},vuelidate:{type:Object,default:{}}},setup(I){const d=I,n=Z(),t=B({get(){return d.modelValue},set(a){emit("update:modelValue",a)}}),b=B(()=>d.selectedLang),p=B(()=>b.value===m.language.en);return(a,o)=>{const r=s("progress-bar"),_=s("container-wrapper");return O(),Y(ne,null,[d.showProgress?(O(),q(_,{key:0,"margin-top":!1},{default:v(()=>[l(r,{value:I.progressValue,label:a._lang.common.fill,class:"mb-4 col-12 float-end"},null,8,["value","label"])]),_:1})):R("",!0),l(Ue,{modelValue:e(t),"onUpdate:modelValue":o[0]||(o[0]=f=>j(t)?t.value=f:null),store:e(n)},null,8,["modelValue","store"]),l(e(Fe),{modelValue:e(t),"onUpdate:modelValue":o[1]||(o[1]=f=>j(t)?t.value=f:null),disabled:d.disabled,loading:I.loading,selectedLang:d.selectedLang,validateForm:d.validateForm,rules:d.rules,isExternalEdit:d.isExternalEdit,vuelidate:d.vuelidate},null,8,["modelValue","disabled","loading","selectedLang","validateForm","rules","isExternalEdit","vuelidate"]),l(e(De),{modelValue:e(t),"onUpdate:modelValue":o[2]||(o[2]=f=>j(t)?t.value=f:null),disabled:d.disabled,loading:I.loading,selectedLang:d.selectedLang,validateForm:d.validateForm,rules:d.rules,isExternalEdit:d.isExternalEdit,vuelidate:d.vuelidate},null,8,["modelValue","disabled","loading","selectedLang","validateForm","rules","isExternalEdit","vuelidate"]),l(e(Ke),{modelValue:e(t),"onUpdate:modelValue":o[3]||(o[3]=f=>j(t)?t.value=f:null),disabled:d.disabled,loading:I.loading,selectedLang:d.selectedLang,validateForm:d.validateForm,rules:d.rules,isExternalEdit:d.isExternalEdit,vuelidate:d.vuelidate},null,8,["modelValue","disabled","loading","selectedLang","validateForm","rules","isExternalEdit","vuelidate"]),l(e(Pe),{modelValue:e(t),"onUpdate:modelValue":o[4]||(o[4]=f=>j(t)?t.value=f:null),disabled:d.disabled,loading:I.loading,selectedLang:d.selectedLang,validateForm:d.validateForm,rules:d.rules,vuelidate:d.vuelidate},null,8,["modelValue","disabled","loading","selectedLang","validateForm","rules","vuelidate"]),l(e(xe),{modelValue:e(t).recipients,"onUpdate:modelValue":o[5]||(o[5]=f=>e(t).recipients=f),disabled:d.disabled||e(p),loading:I.loading},null,8,["modelValue","disabled","loading"]),l(e(ze),{modelValue:e(t).legislations,"onUpdate:modelValue":o[6]||(o[6]=f=>e(t).legislations=f),disabled:d.disabled,loading:I.loading,selectedLang:d.selectedLang},null,8,["modelValue","disabled","loading","selectedLang"]),l(e($e),{modelValue:e(t),"onUpdate:modelValue":o[7]||(o[7]=f=>j(t)?t.value=f:null),disabled:d.disabled,loading:I.loading,selectedLang:d.selectedLang},null,8,["modelValue","disabled","loading","selectedLang"]),l(qe,{modelValue:e(t),"onUpdate:modelValue":o[8]||(o[8]=f=>j(t)?t.value=f:null),disabled:d.disabled,loading:I.loading,selectedLang:e(b)},null,8,["modelValue","disabled","loading","selectedLang"])],64)}}},Qe={__name:"search-service-points-modal",props:{serviceId:{Number,required:!0},serviceVersion:{Number,required:!0}},emits:["apply"],setup(I,{emit:d}){const n=I,t=Ae(),b="search-pointOfCare-modal",p=J(),a=ke();let o=x(T()),r=y([]),_=y([]),f=y(C.createEmptyDataSource()),g=y(!1),u=y(!1),V=y(0),c=y("pt"),k=x(L());function L(){return Me.newForm()}function T(){return{pageNumber:1,sortBy:"Code",recordStateIds:[m.recordStateType.published],active:!0}}oe(async()=>{g.value=!0,r.value=C.convertEnumToArray(p.enums.recordStateType);const S=await re.getLists(a.getLanguage);C.validateResponse(S,null,()=>{t.setLists(S.data),r.value=C.convertEnumToArray(p.enums.recordStateType),_.value=C.concatItemsBadge(r.value,Q.recordStateTypeBadgeOptions)}),g.value=!1}),X(async()=>{await i()});async function F(S){o.sortBy=S,await i()}async function M(S){o.pageNumber=S,await i()}async function i(){g.value=!0;let S=await re.search(o);C.validateResponse(S,null,()=>{f.value=S.data}),g.value=!1}async function h(){Object.assign(o,T()),await i()}async function A(){await i()}async function z(S){const U=await re.getById(S.pointOfCareId,S.pointOfCareVersion);C.validateResponse(U,null,()=>{Object.assign(k,U.data),u.value=!0}),V.value++}function G(){}async function N(){g.value=!0;const S=await te.associationCreate(n.serviceId,n.serviceVersion,k.pointOfCareId,k.pointOfCareVersion);C.validateResponse(S,p.backoffice.pointOfCare.serviceAdded,()=>{d("apply")}),g.value=!1}return(S,U)=>{const $=s("form-field"),D=s("row"),w=s("cfilter"),E=s("ccolumn"),ee=s("table-action-detail"),ie=s("ctable"),H=s("container-wrapper"),le=s("cbutton"),se=s("modal");return O(),q(se,{id:b,title:S._lang.backoffice.pointOfCare.searchTitle,size:e(m).modalSize.extraLarge,"remove-padding":!0},{body:v(()=>[l(w,{title:S._lang.common.filter,disabled:e(g),"clear-click":h,"apply-click":A,loading:e(g),collapsed:!0},{default:v(()=>[l(D,null,{default:v(()=>[l($,{id:"code",modelValue:e(o).code,"onUpdate:modelValue":U[0]||(U[0]=P=>e(o).code=P),class:"mb-3 col-12 col-md-6 col-lg-4",label:S._lang.label.code,type:e(m).inputs.text,maxlength:45,disabled:e(g)},null,8,["modelValue","label","type","disabled"]),l($,{id:"channelTypeIds",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(o).channelTypeIds,"onUpdate:modelValue":U[1]||(U[1]=P=>e(o).channelTypeIds=P),label:S._lang.label.channelTypeId,type:e(m).inputs.multiselect,options:e(t).channelTypeList,disabled:e(g),mode:e(m).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"]),l($,{id:"abreviation",class:"mb-3 col-12 col-lg-4",modelValue:e(o).abreviation,"onUpdate:modelValue":U[2]||(U[2]=P=>e(o).abreviation=P),label:S._lang.label.abreviation,type:e(m).inputs.text,maxlength:16,disabled:e(g)},null,8,["modelValue","label","type","disabled"]),l($,{id:"name",class:"mb-3 col-12",modelValue:e(o).name,"onUpdate:modelValue":U[3]||(U[3]=P=>e(o).name=P),label:S._lang.label.name,type:e(m).inputs.text,maxlength:45,disabled:e(g)},null,8,["modelValue","label","type","disabled"]),l($,{id:"organization",class:"mb-3 col-12 col-md-6",modelValue:e(o).organization,"onUpdate:modelValue":U[4]||(U[4]=P=>e(o).organization=P),label:S._lang.label.organizationHost,type:e(m).inputs.multiselect,options:e(t).organizationList,disabled:e(g),valueProp:e(m).multiselectValueProp.value3},null,8,["modelValue","label","type","options","disabled","valueProp"])]),_:1})]),_:1},8,["title","disabled","loading"]),l(H,null,{default:v(()=>[l(ie,{onSort:F,onChangePage:M,data:e(f),checkbox:!1,loading:e(g),defaultSort:"code"},{columns:v(()=>[l(E,{name:S._lang.label.code,field:"code",sortable:!0},null,8,["name"]),l(E,{name:S._lang.label.channelTypeId,field:"channelType",sortField:"channelTypeId",sortable:!0},null,8,["name"]),l(E,{name:S._lang.label.abreviation,field:"abreviation",sortable:!0},null,8,["name"]),l(E,{name:S._lang.label.name,field:"name",sortable:!0},null,8,["name"]),l(E,{name:S._lang.label.organizationHost,field:"organization",sortField:"organizationId",sortable:!0},null,8,["name"])]),actions:v(P=>[l(ee,{onClick:ce=>z(P.item)},null,8,["onClick"])]),_:1},8,["data","loading"])]),_:1}),(O(),q(e(Ee),{collapsed:e(u),class:"mt-5",key:e(V),modelValue:e(k),"onUpdate:modelValue":U[5]||(U[5]=P=>j(k)?k.value=P:k=P),disabled:!0,loading:e(g),selectedLang:e(c),validateForm:!1},null,8,["collapsed","modelValue","loading","selectedLang"]))]),footer:v(()=>[l(le,{type:"primary",size:"large",title:S._lang.common.apply,"data-bs-dismiss":"modal",onClick:N,disabled:!e(k).code},null,8,["title","disabled"]),l(le,{type:"secondary",size:"large",title:S._lang.common.cancel,"data-bs-dismiss":"modal",onClick:G},null,8,["title"])]),_:1},8,["title","size"])}}},We=["id"],Ye={__name:"service-points",props:{formModel:{Object,required:!0}},setup(I){var $,D;const d=I,n=y(ae.havePermission(m.permissions.service.createEdit)&&((($=d.formModel)==null?void 0:$.recordStateTypeId)==m.recordStateType.draft||((D=d.formModel)==null?void 0:D.recordStateTypeId)==m.recordStateType.published)),t=y(ae.havePermission(m.permissions.service.approve)),b=B(()=>{let w=pe.getUser();return!w||!w.name?!1:w.name.toLowerCase()==="guest"});X(()=>{}),oe(async()=>{V.value=C.decodeId(r.params.serviceId),c.value=C.decodeId(r.params.serviceVersion),F.value=C.convertEnumToArray(_.enums.recordStateType),!V.value||!c.value?f.push({name:Ce.router.BACKOFFICE_SERVICE_PAGE.name}):(L.serviceId=V.value,L.serviceVersion=c.value,await N(),F.value=C.convertEnumToArray(_.enums.recordStateType),M.value=C.concatItemsBadge(F.value,Q.recordStateTypeBadgeOptions))});const p="search-pointOfCare-modal",a="delete-pointOfCare",o=C.uuid(),r=Ie(),_=J(),f=we();let g=y(!0),u=y(0),V=y(0),c=y(0),k=y(C.createEmptyDataSource()),L=x(h()),T=y(null),F=y([]),M=y([]),i=y(!1);function h(){let w=null;return b.value&&(w=[m.recordStateType.published]),{pageNumber:1,sortBy:"pointOfCareCode",active:!0,serviceId:null,serviceVersion:null,recordStateTypeIds:w}}function A(){u.value++,i.value=!0,window.setTimeout(function(){C.showModalById(p)},5)}async function z(w){L.sortBy=w,await N()}async function G(w){L.pageNumber=w,await N()}async function N(){g.value=!0;let w=await te.associationSearch(L);C.validateResponse(w,null,()=>{k.value=w.data,k.value.items.forEach(E=>{E.recordStateTypeId=m.recordStateType.submitted,E.pointOfCareRecordStateTypeId===m.recordStateType.published&&E.serviceRecordStateTypeId===m.recordStateType.published?E.recordStateTypeId=m.recordStateType.published:(E.pointOfCareRecordStateTypeId===m.recordStateType.returned||E.serviceRecordStateTypeId===m.recordStateType.returned)&&(E.recordStateTypeId=m.recordStateType.returned)})}),g.value=!1}async function S(w){T.value=w}async function U(){if(T.value){g.value=!0;const w=await te.associationRemove(V.value,c.value,T.value.pointOfCareId,T.value.pointOfCareVersion);C.validateResponse(w,_.backoffice.service.pointOfCareRemoved,async()=>{await N()}),g.value=!1}}return(w,E)=>{const ee=s("icon-plus"),ie=s("table-actions"),H=s("ccolumn"),le=s("table-action-delete"),se=s("ctable"),P=s("container-wrapper"),ce=s("confirm-delete-modal");return O(),Y(ne,null,[l(P,null,{default:v(()=>[l(ie,{title:w._lang.common.tableActionTitle},{default:v(()=>[n.value?(O(),Y("button",{key:0,class:"btn btn-primary",type:"button",id:e(o),onClick:A},[l(ee,{color:"#FFF"}),Le(" "+ye(w._lang.common.addServicePoint),1)],8,We)):R("",!0)]),_:1},8,["title"]),l(se,{onSort:z,onChangePage:G,data:e(k),checkbox:!1,loading:e(g),defaultSort:"pointOfCareCode",checkboxField:"code"},{columns:v(()=>[l(H,{name:w._lang.label.code,field:"pointOfCareCode",sortable:!0},null,8,["name"]),l(H,{name:w._lang.label.channelTypeId,field:"pointOfCareChannelType",sortField:"pointOfCareChannelTypeId",sortable:!0},null,8,["name"]),l(H,{name:w._lang.label.abreviation,field:"pointOfCareAbreviation",sortField:"pointOfCareAbreviation",sortable:!0},null,8,["name"]),l(H,{name:w._lang.label.name,field:"pointOfCareName",sortable:!0},null,8,["name"]),l(H,{name:w._lang.label.organizationHost,field:"pointOfCareOrganization",sortField:"pointOfCareOrganizationId",sortable:!0},null,8,["name"]),l(H,{name:w._lang.label.state,field:"recordStateTypeId",sortField:"pointOfCareRecordStateTypeId",align:e(m).columnAlign.center,custom:Oe,options:e(M),sortable:!0},null,8,["name","align","options"])]),actions:v(Ve=>[t.value?(O(),q(le,{key:0,id:a,onClick:Je=>S(Ve.item)},null,8,["onClick"])):R("",!0)]),_:1},8,["data","loading"])]),_:1}),!e(g)&&e(i)?(O(),q(Qe,{key:e(u),serviceId:e(V),serviceVersion:e(c),onApply:N},null,8,["serviceId","serviceVersion"])):R("",!0),l(ce,{id:a,title:w._lang.backoffice.service.pointOfCareDeleteTitle,message:w._lang.backoffice.service.pointOfCareDeleteQuestion,action:U},null,8,["title","message"])],64)}}},bl={__name:"form",props:{formModel:{Object,required:!0},loading:{type:Boolean,required:!0},validateForm:{type:Boolean,required:!0},disabled:{type:Boolean,required:!0},isExternalEdit:{type:Boolean,required:!0},selectedLang:{type:[Number,String],required:!0},rules:{type:Object,required:!0},vuelidate:{Object,default:null},progressValue:{type:Number,default:0},showProgress:{type:Boolean,default:!0}},emits:["update:formModel"],setup(I,{emit:d}){const n=I,t=B({get(){return n.formModel},set(b){d("update:formModel",b)}});return(b,p)=>{const a=s("tab-content"),o=s("tabs");return O(),q(o,null,{default:v(()=>[l(a,{id:"general",title:b._lang.common.general,active:!0,"always-refresh":!0},{default:v(()=>[l(Ge,{modelValue:e(t),"onUpdate:modelValue":p[0]||(p[0]=r=>j(t)?t.value=r:null),disabled:n.disabled,validateForm:n.validateForm,loading:n.loading,selectedLang:n.selectedLang,rules:n.rules,progressValue:n.progressValue,showProgress:n.showProgress,vuelidate:n.vuelidate},null,8,["modelValue","disabled","validateForm","loading","selectedLang","rules","progressValue","showProgress","vuelidate"])]),_:1},8,["title"]),l(a,{id:"service-points",title:b._lang.backoffice.menu.servicePoints,active:!1,disabled:!1,"always-refresh":!0},{default:v(()=>[l(Ye,{formModel:e(t)},null,8,["formModel"])]),_:1},8,["title"])]),_:1})}}};export{bl as _};
