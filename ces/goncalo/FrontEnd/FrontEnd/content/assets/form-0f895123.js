import{r as V,K as le,j as T,s as b,u as I,k as d,c as O,l as U,w as v,n as l,p as e,I as A,y as x,i as W,h as ce,G as R,o as X,R as H,W as ye,M as de,e as G,S as me,U as pe,V as ge,F as ae,v as fe,J as _e,z as Ve,f as ke,g as Ce,t as Se}from"./index-c417b10a.js";import{u as Y}from"./service-d66d7fcd.js";import{r as Ie}from"./index.esm-29b873a2.js";import{b as K}from"./helpers-422844e7.js";import{a as we,_ as Le}from"./address.vue_vue_type_style_index_0_scoped_5480b292_lang-1be492ce.js";import{s as ee}from"./service-e178ddc5.js";import{_ as be}from"./form-c514d62a.js";import{s as Oe}from"./settings-fb41674a.js";import{u as re}from"./index.esm-5fe78185.js";import{s as Q}from"./helpers-9f3bdf36.js";import{l as ue}from"./legislation-da693227.js";import{u as Fe}from"./organization-53b6fe99.js";import{h as ie}from"./helpers-1b7a9838.js";import{_ as Ee,a as Te}from"./refusal-45a989d4.js";import{_ as Be}from"./generic-972994fb.js";import{p as se}from"./point-of-care-86bcb545.js";import{u as $e}from"./point-of-care-870d551b.js";import{p as Ue}from"./helpers-bb0e4cec.js";const he={__name:"description",props:{modelValue:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},selectedLang:{type:[String,Number],required:!0},validateForm:{type:Boolean,default:!1},rules:{type:Object,default:{}},vuelidate:{type:Object,default:null}},emits:["update:modelValue"],setup(C,{emit:r}){const n=C,t=Y();let g=V(!0),m=V([]);le(async()=>{await p()});const a=T({get(){return n.modelValue},set(s){r("update:modelValue",s)}}),o=T(()=>n.selectedLang),u=T({get(){return K.getFieldByLangAndName(a.value,o.value,"description")},set(s){K.setFieldByLangAndName(a.value,o.value,"description",s)}});T({get(){return K.getFieldByLangAndName(a.value,o.value,"serviceProcedure")},set(s){K.setFieldByLangAndName(a.value,o.value,"serviceProcedure",s)}});const y=T(()=>o.value===b.language.en);async function p(){g.value=!0;const s=await ee.checklist();I.validateResponse(s,null,()=>{m.value=s.data}),g.value=!1}return(s,f)=>{const S=d("form-field"),c=d("row"),_=d("accordion");return O(),U(_,{id:"description",title:s._lang.common.description,collapsed:!1,class:"mb-4"},{default:v(()=>[l(c,null,{default:v(()=>[l(S,{id:"economicActivityId",class:"mb-3 col-12",modelValue:e(a).economicActivityId,"onUpdate:modelValue":f[0]||(f[0]=L=>e(a).economicActivityId=L),label:s._lang.label.economicActivityId,disabled:n.disabled||e(y),loading:n.loading,type:e(b).inputs.multiselect,required:n.validateForm,placeholder:s._lang.common.selectOption,showError:n.validateForm&&n.vuelidate.economicActivityId.$error,"error-message":s._errorMessageField(n.vuelidate.economicActivityId),options:e(t).economicActivityList},null,8,["modelValue","label","disabled","loading","type","required","placeholder","showError","error-message","options"])]),_:1}),e(g)?x("",!0):(O(),U(S,{key:0,id:"description",class:"mb-3 col-12",modelValue:e(u),"onUpdate:modelValue":f[1]||(f[1]=L=>A(u)?u.value=L:null),label:s._lang.label.description,disabled:n.disabled,loading:n.loading,type:e(b).inputs.richtext,language:e(o),maxlength:4e3,templates:e(m)},null,8,["modelValue","label","disabled","loading","type","language","templates"]))]),_:1},8,["title"])}}},qe={__name:"create",props:{modelValue:{type:Array,required:!0}},emits:["update:modelValue"],setup(C,{emit:r}){const n=C,t=W();ce();const g="create-legislation";let m=V([]),a=R(Q.legislationNewForm()),o=V(!1),u=V(b.language.pt);const y=re(Q.legislationFormRules(),a,{$scope:!1}),p=T({get(){return n.modelValue},set(c){r("update:modelValue",c)}});async function s(){o.value=!0;let c=await Oe.getLanguages();I.validateResponse(c,null,()=>{m.value=c.data}),o.value=!1}function f(){a=Object.assign(a,Q.legislationNewForm()),y.value.$reset()}async function S(){if(o.value=!0,await y.value.$validate(),!y.value.$error){const c={legislationId:a.legislationId,name:a.texts[0].name,code:a.code,document:a.document,texts:a.texts};p.value.find(L=>L.name===c.name&&L.description===c.description)?H.warning(t.backoffice.service.legislationExists):(p.value.push(c),a=Object.assign(a,Q.legislationNewForm()),y.value.$reset(),I.closeModalById(g),H.success(t.backoffice.service.legislationAdded))}o.value=!1}return X(async()=>{await s()}),(c,_)=>{const L=d("lang-selector"),q=d("top-actions"),B=d("cbutton"),N=d("modal");return O(),U(N,{id:g,title:c._lang.backoffice.service.addLegislation,size:e(b).modalSize.extraLarge},{body:v(()=>[l(q,null,{default:v(()=>[l(L,{options:e(m),selectedLang:e(u),"onUpdate:selectedLang":_[0]||(_[0]=i=>A(u)?u.value=i:u=i),disabled:e(o)},null,8,["options","selectedLang","disabled"])]),_:1}),l(be,{modelValue:e(a),"onUpdate:modelValue":_[1]||(_[1]=i=>A(a)?a.value=i:a=i),selectedLang:e(u),loading:e(o),disabled:e(o),vuelidate:e(y)},null,8,["modelValue","selectedLang","loading","disabled","vuelidate"])]),footer:v(()=>[l(B,{title:c._lang.common.cancel,type:e(b).buttonType.secondary,"data-bs-dismiss":"modal","aria-label":"Close",disabled:e(o),onClick:f},null,8,["title","type","disabled"]),l(B,{title:c._lang.common.save,onClick:S,disabled:e(o)},null,8,["title","disabled"])]),_:1},8,["title","size"])}}},Me={__name:"search-legislation",props:{modelValue:{type:Object,required:!0},selectedLang:{type:[String,Number],required:!0},vuelidate:{type:Object,default:null}},emits:["update:modelValue","apply"],setup(C,{emit:r}){const n=C;Fe();const t="search-legislation";let g=V(!1),m=V(0),a=V(!1),o=R(I.createEmptyDataSource()),u=R(S()),y=R(n.modelValue);le(async()=>{await L()});const p=T({get(){return n.modelValue},set(i){r("update:modelValue",i)}});async function s(i){u.sortBy=i,await L()}async function f(i){u.pageIndex=i,await L()}function S(){return{pageNumber:1,sortBy:"legislationId",name:null,code:null}}async function c(){Object.assign(u,S()),await N()}async function _(){await L()}async function L(){g.value=!0,u.legislationId?u.legislationIds=[u.legislationId]:u.legislationIds=[];let i=await ue.search(u);I.validateResponse(i,null,()=>{o=i.data}),g.value=!1}async function q(i){const F=await ue.getById(i.legislationId,i.legislationVersion);I.validateResponse(F,null,()=>{Object.assign(y,F.data),p.value=F.data,a.value=!0}),m.value++}function B(){}function N(){r("apply")}return(i,F)=>{const h=d("form-field"),P=d("row"),D=d("cfilter"),w=d("ccolumn"),k=d("table-action-detail"),E=d("ctable"),$=d("accordion"),z=d("cbutton"),J=d("modal");return O(),U(J,{id:t,title:i._lang.backoffice.settings.legislation.searchTitle,size:e(b).modalSize.extraLarge,"remove-padding":!0},{body:v(()=>[l(D,{title:i._lang.common.filter,"clear-click":c,"apply-click":_,loading:e(g),collapsed:!1},{default:v(()=>[l(P,null,{default:v(()=>[l(h,{id:"code-filter",class:"mb-3 col-12 col-md-6",label:i._lang.label.code,type:e(b).inputs.text,maxlength:45,modelValue:e(u).organizationId,"onUpdate:modelValue":F[0]||(F[0]=M=>e(u).organizationId=M)},null,8,["label","type","modelValue"]),l(h,{id:"name-filter",class:"mb-3 col-12 col-md-6",label:i._lang.label.name,type:e(b).inputs.text,maxlength:45,modelValue:e(u).name,"onUpdate:modelValue":F[1]||(F[1]=M=>e(u).name=M)},null,8,["label","type","modelValue"])]),_:1})]),_:1},8,["title","loading"]),l(ye,null,{default:v(()=>[l(E,{onSort:s,onChangePage:f,data:e(o),loading:e(g),checkbox:!1},{columns:v(()=>[l(w,{name:i._lang.label.code,field:"code",sortable:!0},null,8,["name"]),l(w,{name:i._lang.label.name,field:"name",sortable:!0},null,8,["name"])]),actions:v(M=>[l(k,{onClick:Z=>q(M.item)},null,8,["onClick"])]),_:1},8,["data","loading"])]),_:1}),(O(),U($,{id:"legislation",title:i._lang.backoffice.entities.legislation,collapsed:e(a),class:"mt-4",key:e(m)},{default:v(()=>[l(be,{modelValue:e(y),"onUpdate:modelValue":F[2]||(F[2]=M=>A(y)?y.value=M:y=M),disabled:!1,validateForm:!1,vuelidate:n.vuelidate,selectedLang:n.selectedLang},null,8,["modelValue","vuelidate","selectedLang"])]),_:1},8,["title","collapsed"]))]),footer:v(()=>[l(z,{type:"primary",size:"large",title:i._lang.common.apply,"data-bs-dismiss":"modal",onClick:N},null,8,["title"]),l(z,{type:"secondary",size:"large",title:i._lang.common.cancel,"data-bs-dismiss":"modal",onClick:B},null,8,["title"])]),_:1},8,["title","size"])}}},Ae={__name:"legislations",props:{modelValue:{type:Array,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},rules:{type:Object,default:{}},selectedLang:{type:[String,Number],required:!0}},emits:["update:modelValue"],setup(C,{emit:r}){const n=C,t=W();let g=V(!1),m=V(0),a=R(ie.newForm()),o=R(ie.formRules());const u=T(()=>I.createEmptyDataSource(s.value)),y=re(o,a,{$scope:!1}),p="confirm-delete-legislation",s=T({get(){return n.modelValue},set(i){r("update:modelValue",i)}});let f=V(null);const S=V(de.havePermission(b.permissions.service.createEdit));function c(i){f.value=i}function _(){f.value&&(I.removeItemOfArray(s.value,f),H.success(t.backoffice.service.legislationRemoved),f.value=null)}function L(i){I.sortArrayOffline(i,u.value.items)}function q(i){i.download&&I.downloadFile(i.download)}async function B(){if(g.value=!0,await y.value.$validate(),!y.value.$error){const i={legislationId:a.legislationId,name:a.texts[0].name,code:a.code,document:a.document,texts:a.texts};s.value.find(h=>h.name===i.name&&h.description===i.description)?H.warning(t.backoffice.service.legislationExists):(s.value.push(i),a=Object.assign(a,Q.legislationNewForm()),y.value.$reset(),H.success(t.backoffice.service.legislationAdded))}g.value=!1}function N(){Object.assign(a,ie.newForm())}return(i,F)=>{const h=d("table-actions"),P=d("ccolumn"),D=d("table-action-download"),w=d("table-action-delete"),k=d("ctable"),E=d("confirm-delete-modal");return O(),G(ae,null,[l(ge,{id:"legislations",title:i._lang.backoffice.service.legislations,collapsed:!1,class:"mb-4"},{default:v(()=>[S.value?(O(),U(h,{key:0},{default:v(()=>[l(me,{target:"search-legislation",class:"d-inline",type:e(b).buttonType.secondary,title:i._lang.common.toAdd,disabled:n.disabled,icon:pe,onClick:N},null,8,["type","title","disabled"])]),_:1})):x("",!0),l(k,{data:e(u),loading:e(g),checkbox:!1,showPagination:!1,onSort:L},{columns:v(()=>[l(P,{name:i._lang.label.code,field:"code",sortable:!0},null,8,["name"]),l(P,{name:i._lang.common.name,field:"name",sortable:!0},null,8,["name"])]),actions:v($=>[$.item.download?(O(),U(D,{key:0,onClick:z=>q($.item)},null,8,["onClick"])):x("",!0),l(w,{id:p,onClick:z=>c($.item)},null,8,["onClick"])]),_:1},8,["data","loading"])]),_:1},8,["title"]),l(qe,{modelValue:e(s),"onUpdate:modelValue":F[0]||(F[0]=$=>A(s)?s.value=$:null)},null,8,["modelValue"]),l(E,{id:p,title:i._lang.backoffice.service.deleteLegislation,message:i._lang.backoffice.service.deleteLegislationQuestion,action:_},null,8,["title","message"]),(O(),U(Me,{modelValue:e(a),"onUpdate:modelValue":F[1]||(F[1]=$=>A(a)?a.value=$:a=$),key:e(m),onApply:B,selectedLang:n.selectedLang,vuelidate:e(y)},null,8,["modelValue","selectedLang","vuelidate"]))],64)}}},je={__name:"create",props:{modelValue:{type:Array,required:!0}},emits:["update:modelValue"],setup(C,{emit:r}){const n=C,t=Y(),g=W();ce();const m="create-recipient";let a=R(p()),o=V(!1);const u=re(Q.recipientFormRules(),a,{$scope:!1}),y=T({get(){return n.modelValue},set(S){r("update:modelValue",S)}});function p(){return{recipientId:null,name:null,description:null,informationLevel:!1,recipientTypeId:null,recipientType:null}}function s(){a=Object.assign(a,p()),u.value.$reset()}async function f(){if(o.value=!0,await u.value.$validate(),!u.value.$error){const S={recipientId:a.recipientId,recipientTypeId:a.recipientTypeId,recipientType:K.getLabel(t.recipientTypeList,a.recipientTypeId),name:a.name,description:a.description,document:a.document};y.value.find(_=>_.name===a.name&&_.description===a.description)?H.warning(g.backoffice.service.recipientExists):(y.value.push(S),a=Object.assign(a,p()),u.value.$reset(),I.closeModalById(m),H.success(g.backoffice.service.recipientAdded))}o.value=!1}return(S,c)=>{const _=d("form-field"),L=d("cbutton"),q=d("modal");return O(),U(q,{id:m,title:S._lang.backoffice.service.addRecipient,size:e(b).modalSize.extraLarge},{body:v(()=>[l(_,{id:"name",class:"mb-3 col-12",modelValue:e(a).name,"onUpdate:modelValue":c[0]||(c[0]=B=>e(a).name=B),label:S._lang.label.name,disabled:n.disabled,loading:n.loading,type:e(b).inputs.text,maxlength:255,required:!0,"show-error":e(u).name.$error,"error-message":S._errorMessageField(e(u).name)},null,8,["modelValue","label","disabled","loading","type","show-error","error-message"]),l(_,{id:"description",class:"mb-3 col-12",modelValue:e(a).description,"onUpdate:modelValue":c[1]||(c[1]=B=>e(a).description=B),label:S._lang.label.description,disabled:n.disabled,loading:n.loading,type:e(b).inputs.text,maxlength:255},null,8,["modelValue","label","disabled","loading","type"]),l(_,{id:"recipientTypeId",class:"mb-3 col-12",modelValue:e(a).recipientTypeId,"onUpdate:modelValue":c[2]||(c[2]=B=>e(a).recipientTypeId=B),label:S._lang.label.recipientTypeId,disabled:n.disabled,loading:n.loading,type:e(b).inputs.multiselect,placeholder:S._lang.common.selectOption,options:e(t).recipientTypeList},null,8,["modelValue","label","disabled","loading","type","placeholder","options"])]),footer:v(()=>[l(L,{title:S._lang.common.cancel,type:e(b).buttonType.secondary,"data-bs-dismiss":"modal","aria-label":"Close",disabled:e(o),onClick:s},null,8,["title","type","disabled"]),l(L,{title:S._lang.common.save,onClick:f,disabled:e(o)},null,8,["title","disabled"])]),_:1},8,["title","size"])}}},Ne={__name:"recipients",props:{modelValue:{type:Array,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},rules:{type:Object,default:{}}},emits:["update:modelValue"],setup(C,{emit:r}){const n=C,t=W();let g=V(!1);const m=T(()=>I.createEmptyDataSource(o.value)),a="confirm-delete",o=T({get(){return n.modelValue},set(c){r("update:modelValue",c)}});let u=V(null);const y=V(de.havePermission(b.permissions.service.createEdit));function p(c){u.value=c}function s(){u.value&&(I.removeItemOfArray(o.value,u),H.success(t.backoffice.service.recipientRemoved),u.value=null)}function f(c){I.sortArrayOffline(c,m.value.items)}function S(c){c.download&&I.downloadFile(c.download)}return(c,_)=>{const L=d("table-actions"),q=d("ccolumn"),B=d("table-action-download"),N=d("table-action-delete"),i=d("ctable"),F=d("confirm-delete-modal");return O(),G(ae,null,[l(ge,{id:"recipients",title:c._lang.backoffice.service.recipients,collapsed:!1,class:"mb-4"},{default:v(()=>[y.value?(O(),U(L,{key:0},{default:v(()=>[l(me,{target:"create-recipient",class:"d-inline",type:e(b).buttonType.secondary,title:c._lang.common.toAdd,disabled:n.disabled,icon:pe},null,8,["type","title","disabled"])]),_:1})):x("",!0),l(i,{data:e(m),loading:e(g),checkbox:!1,showPagination:!1,onSort:f},{columns:v(()=>[l(q,{name:c._lang.label.name,field:"name",sortable:!0},null,8,["name"]),l(q,{name:c._lang.label.description,field:"description",sortable:!0},null,8,["name"]),l(q,{name:c._lang.label.recipientTypeId,sortField:"recipientTypeId",field:"recipientType",sortable:!0},null,8,["name"])]),actions:v(h=>[h.item.download?(O(),U(B,{key:0,onClick:P=>S(h.item)},null,8,["onClick"])):x("",!0),l(N,{id:a,onClick:P=>p(h.item),disabled:n.disabled},null,8,["onClick","disabled"])]),_:1},8,["data","loading"])]),_:1},8,["title"]),l(je,{modelValue:e(o),"onUpdate:modelValue":_[0]||(_[0]=h=>A(o)?o.value=h:null)},null,8,["modelValue"]),l(F,{id:a,title:c._lang.backoffice.service.deleteRecipient,message:c._lang.backoffice.service.deleteRecipientQuestion,action:s},null,8,["title","message"])],64)}}},ze={__name:"state-support",props:{vuelidate:{type:Object,default:{}},modelValue:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},validateForm:{type:Boolean,default:!1},rules:{type:Object,default:{}},selectedLang:{type:[String,Number],required:!0}},emits:["update:modelValue"],setup(C,{emit:r}){const n=C;Y(),V(!1),X(async()=>{});const t=T({get(){return n.modelValue},set(m){r("update:modelValue",m)}}),g=T(()=>n.selectedLang===b.language.en);return(m,a)=>{const o=d("form-field"),u=d("row"),y=d("accordion");return O(),U(y,{id:"stateSupport",title:m._lang.backoffice.service.stateSupport,collapsed:!1,class:"mb-4"},{default:v(()=>[l(u,null,{default:v(()=>{var p,s;return[l(o,{id:"stateSupport",class:"mb-3 col-12 col-md-6 col-lg-3",modelValue:e(t).stateSupport.isStateSupport,"onUpdate:modelValue":a[0]||(a[0]=f=>e(t).stateSupport.isStateSupport=f),label:m._lang.label.stateSupport,disabled:n.disabled||e(g),loading:n.loading,type:e(b).inputs.checkbox},null,8,["modelValue","label","disabled","loading","type"]),l(o,{id:"stateSupportUrl",class:"mb-3 col-12",modelValue:e(t).stateSupport.url,"onUpdate:modelValue":a[1]||(a[1]=f=>e(t).stateSupport.url=f),required:e(t).stateSupport.isStateSupport,label:m._lang.label.serviceUrl,disabled:n.disabled||e(g)||!e(t).stateSupport.isStateSupport,loading:n.loading,type:e(b).inputs.text,showError:n.validateForm&&((p=n.vuelidate)==null?void 0:p.stateSupport.url.$error),"error-message":m._errorMessageField((s=n.vuelidate)==null?void 0:s.stateSupport.url),maxlength:2048},null,8,["modelValue","required","label","disabled","loading","type","showError","error-message"]),l(o,{id:"externalSystemId",class:"mb-3 col-12 col-md-6",modelValue:e(t).stateSupport.externalSystemId,"onUpdate:modelValue":a[2]||(a[2]=f=>e(t).stateSupport.externalSystemId=f),required:!1,label:m._lang.label.externalSystemId,disabled:n.disabled||e(g)||!e(t).stateSupport.isStateSupport,loading:n.loading,type:e(b).inputs.text,maxlength:1024},null,8,["modelValue","label","disabled","loading","type"]),l(o,{id:"processId",class:"mb-3 col-12 col-md-6",modelValue:e(t).stateSupport.processId,"onUpdate:modelValue":a[3]||(a[3]=f=>e(t).stateSupport.processId=f),required:!1,label:m._lang.label.processId,disabled:n.disabled||e(g)||!e(t).stateSupport.isStateSupport,loading:n.loading,type:e(b).inputs.text,maxlength:1024},null,8,["modelValue","label","disabled","loading","type"])]}),_:1})]),_:1},8,["title"])}}},Pe={key:0,class:"mb-3 col-12"},Re={__name:"virtual",props:{vuelidate:{type:Object,default:{}},modelValue:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},validateForm:{type:Boolean,default:!1},rules:{type:Object,default:{}},selectedLang:{type:[String,Number],required:!0}},emits:["update:modelValue"],setup(C,{emit:r}){const n=C;Y(),X(async()=>{}),V(null),V(null),V(null),V(null);const t=T({get(){return n.modelValue},set(m){r("update:modelValue",m)}}),g=T(()=>n.selectedLang===b.language.en);return(m,a)=>{const o=d("form-field"),u=d("row"),y=d("accordion");return O(),U(y,{id:"virtual",title:m._lang.backoffice.service.virtual,collapsed:!1,class:"mb-4"},{default:v(()=>[l(u,null,{default:v(()=>{var p,s;return[l(o,{id:"virtual",class:"col-12 col-md-6 col-lg-3",modelValue:e(t).virtual.isVirtual,"onUpdate:modelValue":a[0]||(a[0]=f=>e(t).virtual.isVirtual=f),label:m._lang.label.virtual,disabled:n.disabled||e(g),loading:n.loading,type:e(b).inputs.checkbox},null,8,["modelValue","label","disabled","loading","type"]),e(t).virtual.isVirtual?(O(),G("span",Pe,fe(m._lang.backoffice.service.virtualText),1)):x("",!0),l(o,{id:"virtualUrl",class:"mb-3 col-12",modelValue:e(t).virtual.url,"onUpdate:modelValue":a[1]||(a[1]=f=>e(t).virtual.url=f),required:e(t).virtual.isVirtual,label:m._lang.label.serviceUrl,disabled:n.disabled||e(g)||!e(t).virtual.isVirtual,loading:n.loading,type:e(b).inputs.text,showError:n.validateForm&&((p=n.vuelidate)==null?void 0:p.virtual.url.$error),"error-message":m._errorMessageField((s=n.vuelidate)==null?void 0:s.virtual.url),maxlength:2048},null,8,["modelValue","required","label","disabled","loading","type","showError","error-message"]),l(o,{id:"externalSystemId",class:"mb-3 col-12 col-md-6",modelValue:e(t).virtual.externalSystemId,"onUpdate:modelValue":a[2]||(a[2]=f=>e(t).virtual.externalSystemId=f),required:!1,label:m._lang.label.externalSystemId,disabled:n.disabled||e(g)||!e(t).virtual.isVirtual,loading:n.loading,type:e(b).inputs.text,maxlength:1024},null,8,["modelValue","label","disabled","loading","type"]),l(o,{id:"processId",class:"mb-3 col-12 col-md-6",modelValue:e(t).virtual.processId,"onUpdate:modelValue":a[3]||(a[3]=f=>e(t).virtual.processId=f),required:!1,label:m._lang.label.processId,disabled:n.disabled||e(g)||!e(t).virtual.isVirtual,loading:n.loading,type:e(b).inputs.text,maxlength:1024},null,8,["modelValue","label","disabled","loading","type"]),l(o,{id:"canExecutedByThirdParty",class:"mb-3 col-12",modelValue:e(t).virtual.canExecutedByThirdParty,"onUpdate:modelValue":a[4]||(a[4]=f=>e(t).virtual.canExecutedByThirdParty=f),required:!1,label:m._lang.label.canExecutedByThirdParty,disabled:n.disabled||e(g)||!e(t).virtual.isVirtual,loading:n.loading,type:e(b).inputs.checkbox,maxlength:1024},null,8,["modelValue","label","disabled","loading","type"])]}),_:1})]),_:1},8,["title"])}}},xe={__name:"general",props:{modelValue:{type:Object,required:!0},selectedLang:Ie,disabled:{Boolean,default:!0},rules:{Boolean,default:!0},validateForm:{Boolean,default:!1},loading:{Object,default:{}},isExternalEdit:{type:Boolean,default:!1},showProgress:{type:Boolean,default:!0},progressValue:{type:Number,default:0},vuelidate:{type:Object,default:{}}},setup(C){const r=C,n=Y(),t=T({get(){return r.modelValue},set(a){emit("update:modelValue",a)}}),g=T(()=>r.selectedLang),m=T(()=>g.value===b.language.en);return(a,o)=>{const u=d("progress-bar"),y=d("container-wrapper");return O(),G(ae,null,[r.showProgress?(O(),U(y,{key:0,"margin-top":!1},{default:v(()=>[l(u,{value:C.progressValue,label:a._lang.common.fill,class:"mb-4 col-12 float-end"},null,8,["value","label"])]),_:1})):x("",!0),l(Ee,{modelValue:e(t),"onUpdate:modelValue":o[0]||(o[0]=p=>A(t)?t.value=p:null),store:e(n)},null,8,["modelValue","store"]),l(e(we),{modelValue:e(t),"onUpdate:modelValue":o[1]||(o[1]=p=>A(t)?t.value=p:null),disabled:r.disabled,loading:C.loading,selectedLang:r.selectedLang,validateForm:r.validateForm,rules:r.rules,isExternalEdit:r.isExternalEdit,vuelidate:r.vuelidate},null,8,["modelValue","disabled","loading","selectedLang","validateForm","rules","isExternalEdit","vuelidate"]),l(e(ze),{modelValue:e(t),"onUpdate:modelValue":o[2]||(o[2]=p=>A(t)?t.value=p:null),disabled:r.disabled,loading:C.loading,selectedLang:r.selectedLang,validateForm:r.validateForm,rules:r.rules,isExternalEdit:r.isExternalEdit,vuelidate:r.vuelidate},null,8,["modelValue","disabled","loading","selectedLang","validateForm","rules","isExternalEdit","vuelidate"]),l(e(Re),{modelValue:e(t),"onUpdate:modelValue":o[3]||(o[3]=p=>A(t)?t.value=p:null),disabled:r.disabled,loading:C.loading,selectedLang:r.selectedLang,validateForm:r.validateForm,rules:r.rules,isExternalEdit:r.isExternalEdit,vuelidate:r.vuelidate},null,8,["modelValue","disabled","loading","selectedLang","validateForm","rules","isExternalEdit","vuelidate"]),l(e(he),{modelValue:e(t),"onUpdate:modelValue":o[4]||(o[4]=p=>A(t)?t.value=p:null),disabled:r.disabled,loading:C.loading,selectedLang:r.selectedLang,validateForm:r.validateForm,rules:r.rules,vuelidate:r.vuelidate},null,8,["modelValue","disabled","loading","selectedLang","validateForm","rules","vuelidate"]),l(e(Ne),{modelValue:e(t).recipients,"onUpdate:modelValue":o[5]||(o[5]=p=>e(t).recipients=p),disabled:r.disabled||e(m),loading:C.loading},null,8,["modelValue","disabled","loading"]),l(e(Ae),{modelValue:e(t).legislations,"onUpdate:modelValue":o[6]||(o[6]=p=>e(t).legislations=p),disabled:r.disabled,loading:C.loading,selectedLang:r.selectedLang},null,8,["modelValue","disabled","loading","selectedLang"]),l(e(Te),{modelValue:e(t),"onUpdate:modelValue":o[7]||(o[7]=p=>A(t)?t.value=p:null),disabled:r.disabled,loading:C.loading,selectedLang:r.selectedLang},null,8,["modelValue","disabled","loading","selectedLang"]),l(Be,{modelValue:e(t),"onUpdate:modelValue":o[8]||(o[8]=p=>A(t)?t.value=p:null),disabled:r.disabled,loading:C.loading,selectedLang:e(g)},null,8,["modelValue","disabled","loading","selectedLang"])],64)}}},De={__name:"search-service-points-modal",props:{serviceId:{Number,required:!0},serviceVersion:{Number,required:!0}},emits:["apply"],setup(C,{emit:r}){const n=C,t=$e(),g="search-pointOfCare-modal",m=W(),a=_e();let o=R(q()),u=V([]),y=V([]),p=V(I.createEmptyDataSource()),s=V(!1),f=V(!1),S=V(0),c=V("pt"),_=R(L());function L(){return Ue.newForm()}function q(){return{pageNumber:1,sortBy:"Code",recordStateIds:[b.recordStateType.published],active:!0}}le(async()=>{s.value=!0,u.value=I.convertEnumToArray(m.enums.recordStateType);const k=await se.getLists(a.getLanguage);I.validateResponse(k,null,()=>{t.setLists(k.data),u.value=I.convertEnumToArray(m.enums.recordStateType),y.value=I.concatItemsBadge(u.value,K.recordStateTypeBadgeOptions)}),s.value=!1}),X(async()=>{await i()});async function B(k){o.sortBy=k,await i()}async function N(k){o.pageNumber=k,await i()}async function i(){s.value=!0;let k=await se.search(o);I.validateResponse(k,null,()=>{p.value=k.data}),s.value=!1}async function F(){Object.assign(o,q()),await i()}async function h(){await i()}async function P(k){const E=await se.getById(k.pointOfCareId,k.pointOfCareVersion);I.validateResponse(E,null,()=>{Object.assign(_,E.data),f.value=!0}),S.value++}function D(){}async function w(){s.value=!0;const k=await ee.associationCreate(n.serviceId,n.serviceVersion,_.pointOfCareId,_.pointOfCareVersion);I.validateResponse(k,m.backoffice.pointOfCare.serviceAdded,()=>{r("apply")}),s.value=!1}return(k,E)=>{const $=d("form-field"),z=d("row"),J=d("cfilter"),M=d("ccolumn"),Z=d("table-action-detail"),te=d("ctable"),oe=d("container-wrapper"),ne=d("cbutton"),ve=d("modal");return O(),U(ve,{id:g,title:k._lang.backoffice.pointOfCare.searchTitle,size:e(b).modalSize.extraLarge,"remove-padding":!0},{body:v(()=>[l(J,{title:k._lang.common.filter,disabled:e(s),"clear-click":F,"apply-click":h,loading:e(s),collapsed:!0},{default:v(()=>[l(z,null,{default:v(()=>[l($,{id:"code",modelValue:e(o).code,"onUpdate:modelValue":E[0]||(E[0]=j=>e(o).code=j),class:"mb-3 col-12 col-md-6 col-lg-4",label:k._lang.label.code,type:e(b).inputs.text,maxlength:45,disabled:e(s)},null,8,["modelValue","label","type","disabled"]),l($,{id:"channelTypeIds",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(o).channelTypeIds,"onUpdate:modelValue":E[1]||(E[1]=j=>e(o).channelTypeIds=j),label:k._lang.label.channelTypeId,type:e(b).inputs.multiselect,options:e(t).channelTypeList,disabled:e(s),mode:e(b).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"]),l($,{id:"abreviation",class:"mb-3 col-12 col-lg-4",modelValue:e(o).abreviation,"onUpdate:modelValue":E[2]||(E[2]=j=>e(o).abreviation=j),label:k._lang.label.abreviation,type:e(b).inputs.text,maxlength:16,disabled:e(s)},null,8,["modelValue","label","type","disabled"]),l($,{id:"name",class:"mb-3 col-12",modelValue:e(o).name,"onUpdate:modelValue":E[3]||(E[3]=j=>e(o).name=j),label:k._lang.label.name,type:e(b).inputs.text,maxlength:45,disabled:e(s)},null,8,["modelValue","label","type","disabled"]),l($,{id:"organization",class:"mb-3 col-12 col-md-6",modelValue:e(o).organization,"onUpdate:modelValue":E[4]||(E[4]=j=>e(o).organization=j),label:k._lang.label.organizationHost,type:e(b).inputs.multiselect,options:e(t).organizationList,disabled:e(s),valueProp:e(b).multiselectValueProp.value3},null,8,["modelValue","label","type","options","disabled","valueProp"])]),_:1})]),_:1},8,["title","disabled","loading"]),l(oe,null,{default:v(()=>[l(te,{onSort:B,onChangePage:N,data:e(p),checkbox:!1,loading:e(s),defaultSort:"Code"},{columns:v(()=>[l(M,{name:k._lang.label.code,field:"code",sortable:!0},null,8,["name"]),l(M,{name:k._lang.label.channelTypeId,field:"channelType",sortField:"channelTypeId",sortable:!0},null,8,["name"]),l(M,{name:k._lang.label.abreviation,field:"abreviation",sortable:!0},null,8,["name"]),l(M,{name:k._lang.label.name,field:"name",sortable:!0},null,8,["name"]),l(M,{name:k._lang.label.organizationHost,field:"organization",sortField:"organizationId",sortable:!0},null,8,["name"])]),actions:v(j=>[l(Z,{onClick:Qe=>P(j.item)},null,8,["onClick"])]),_:1},8,["data","loading"])]),_:1}),(O(),U(e(Le),{collapsed:e(f),class:"mt-5",key:e(S),modelValue:e(_),"onUpdate:modelValue":E[5]||(E[5]=j=>A(_)?_.value=j:_=j),disabled:!0,loading:e(s),selectedLang:e(c),validateForm:!1},null,8,["collapsed","modelValue","loading","selectedLang"]))]),footer:v(()=>[l(ne,{type:"primary",size:"large",title:k._lang.common.apply,"data-bs-dismiss":"modal",onClick:w,disabled:!e(_).code},null,8,["title","disabled"]),l(ne,{type:"secondary",size:"large",title:k._lang.common.cancel,"data-bs-dismiss":"modal",onClick:D},null,8,["title"])]),_:1},8,["title","size"])}}},He=["id"],Ke={__name:"service-points",props:{formModel:{Object,required:!0}},setup(C){var P,D;const r=C,n=V(de.havePermission(b.permissions.service.createEdit)&&(((P=r.formModel)==null?void 0:P.recordStateTypeId)==b.recordStateType.draft||((D=r.formModel)==null?void 0:D.recordStateTypeId)==b.recordStateType.published));X(()=>{}),le(async()=>{s.value=I.decodeId(a.params.serviceId),f.value=I.decodeId(a.params.serviceVersion),!s.value||!f.value?u.push({name:Ve.router.BACKOFFICE_SERVICE_PAGE.name}):(c.serviceId=s.value,c.serviceVersion=f.value,await i())});const t="search-pointOfCare-modal",g="delete-pointOfCare",m=I.uuid(),a=ke(),o=W(),u=Ce();let y=V(!0),p=V(0),s=V(0),f=V(0),S=V(I.createEmptyDataSource()),c=R(L()),_=V(null);function L(){return{pageNumber:1,sortBy:"pointOfCareName",active:!0,serviceId:null,serviceVersion:null}}function q(){p.value++,window.setTimeout(function(){I.showModalById(t)},5)}async function B(w){c.sortBy=w,await i()}async function N(w){c.pageNumber=w,await i()}async function i(){y.value=!0;let w=await ee.associationSearch(c);I.validateResponse(w,null,()=>{S.value=w.data}),y.value=!1}async function F(w){_.value=w}async function h(){if(_.value){y.value=!0;const w=await ee.associationRemove(s.value,f.value,_.value.pointOfCareId,_.value.pointOfCareVersion);I.validateResponse(w,o.backoffice.service.pointOfCareRemoved,async()=>{await i()}),y.value=!1}}return(w,k)=>{const E=d("icon-plus"),$=d("table-actions"),z=d("ccolumn"),J=d("table-action-delete"),M=d("ctable"),Z=d("container-wrapper"),te=d("confirm-delete-modal");return O(),G(ae,null,[l(Z,null,{default:v(()=>[l($,{title:w._lang.common.tableActionTitle},{default:v(()=>[n.value?(O(),G("button",{key:0,class:"btn btn-primary",type:"button",id:e(m),onClick:q},[l(E,{color:"#FFF"}),Se(" "+fe(w._lang.common.addServicePoint),1)],8,He)):x("",!0)]),_:1},8,["title"]),l(M,{onSort:B,onChangePage:N,data:e(S),checkbox:!1,loading:e(y),defaultSort:"pointOfCareCode",checkboxField:"code"},{columns:v(()=>[l(z,{name:w._lang.label.code,field:"pointOfCareCode",sortable:!0},null,8,["name"]),l(z,{name:w._lang.label.channelTypeId,field:"pointOfCareType",sortField:"pointOfCareTypeId",sortable:!0},null,8,["name"]),l(z,{name:w._lang.label.abreviation,field:"pointOfCareAbreviation",sortField:"pointOfCareAbreviation",sortable:!0},null,8,["name"]),l(z,{name:w._lang.label.name,field:"pointOfCareName",sortable:!0},null,8,["name"]),l(z,{name:w._lang.label.organizationHost,field:"pointOfCareOrganization",sortField:"pointOfCareOrganizationId",sortable:!0},null,8,["name"])]),actions:v(oe=>[l(J,{id:g,onClick:ne=>F(oe.item)},null,8,["onClick"])]),_:1},8,["data","loading"])]),_:1}),e(y)?x("",!0):(O(),U(De,{key:e(p),serviceId:e(s),serviceVersion:e(f),onApply:i},null,8,["serviceId","serviceVersion"])),l(te,{id:g,title:w._lang.backoffice.service.pointOfCareDeleteTitle,message:w._lang.backoffice.service.pointOfCareDeleteQuestion,action:h},null,8,["title","message"])],64)}}},ml={__name:"form",props:{formModel:{Object,required:!0},loading:{type:Boolean,required:!0},validateForm:{type:Boolean,required:!0},disabled:{type:Boolean,required:!0},isExternalEdit:{type:Boolean,required:!0},selectedLang:{type:[Number,String],required:!0},rules:{type:Object,required:!0},vuelidate:{Object,default:null},progressValue:{type:Number,default:0},showProgress:{type:Boolean,default:!0}},emits:["update:formModel"],setup(C,{emit:r}){const n=C,t=T({get(){return n.formModel},set(g){r("update:formModel",g)}});return(g,m)=>{const a=d("tab-content"),o=d("tabs");return O(),U(o,null,{default:v(()=>[l(a,{id:"general",title:g._lang.common.general,active:!0},{default:v(()=>[l(xe,{modelValue:e(t),"onUpdate:modelValue":m[0]||(m[0]=u=>A(t)?t.value=u:null),disabled:n.disabled,validateForm:n.validateForm,loading:n.loading,selectedLang:n.selectedLang,rules:n.rules,progressValue:n.progressValue,showProgress:n.showProgress,vuelidate:n.vuelidate},null,8,["modelValue","disabled","validateForm","loading","selectedLang","rules","progressValue","showProgress","vuelidate"])]),_:1},8,["title"]),l(a,{id:"service-points",title:g._lang.backoffice.menu.servicePoints,active:!1,disabled:!1},{default:v(()=>[l(Ke,{formModel:e(t)},null,8,["formModel"])]),_:1},8,["title"])]),_:1})}}};export{ml as _};
