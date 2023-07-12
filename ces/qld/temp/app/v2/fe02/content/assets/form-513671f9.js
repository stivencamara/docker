import{I as B,A as _,a as s,b as $,c as N,w as f,d as l,f as e,i as z,x as j,u as te,r as I,y as D,o as x,n as v,R as P,k as K,S as ne,T as oe,B as ee,U as ie,F as Q,K as pe,L as se,s as ge,N as fe,m as be,g as ve}from"./index-920dbb37.js";import{u as de}from"./service-e327b247.js";import{r as ye}from"./index.esm-d0811cb6.js";import{b as q}from"./helpers-4c156364.js";import{a as _e,_ as Ve}from"./base-information-c108b44d.js";import{u as le}from"./index.esm-d064d6e3.js";import{_ as Ce}from"./form-90b3a9cf.js";import{s as H}from"./helpers-65b02008.js";import{s as ke}from"./settings-bb7269a2.js";import{_ as Ie}from"./comments-3b769030.js";import{_ as we}from"./generic-9b68486a.js";import{u as Oe}from"./point-of-care-98c47a98.js";import{p as Y}from"./point-of-care-5c4c4d1a.js";import{s as Z}from"./service-6e6aa2ba.js";import"./organization-481d97d6.js";import{p as Le}from"./helpers-db4b16e6.js";const Fe={__name:"description",props:{modelValue:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},selectedLang:{type:[String,Number],required:!0},validateForm:{type:Boolean,default:!1},rules:{type:Object,default:{}}},emits:["update:modelValue"],setup(k,{emit:m}){const t=k,y=de(),V=le(t.rules,t.modelValue),p=B({get(){return t.modelValue},set(i){m("update:modelValue",i)}}),a=B(()=>t.selectedLang),n=B({get(){return q.getFieldByLangAndName(p.value,a.value,"description")},set(i){q.setFieldByLangAndName(p.value,a.value,"description",i)}});B({get(){return q.getFieldByLangAndName(p.value,a.value,"serviceProcedure")},set(i){q.setFieldByLangAndName(p.value,a.value,"serviceProcedure",i)}});const d=B(()=>a.value===_.language.en);return(i,C)=>{const g=s("form-field"),L=s("row"),o=s("accordion");return $(),N(o,{id:"description",title:i._lang.common.description,collapsed:!1,class:"mb-4"},{default:f(()=>[l(L,null,{default:f(()=>[l(g,{id:"economicActivityId",class:"mb-3 col-12",modelValue:e(p).economicActivityId,"onUpdate:modelValue":C[0]||(C[0]=r=>e(p).economicActivityId=r),label:i._lang.label.economicActivityId,disabled:t.disabled||e(d),loading:t.loading,type:e(_).inputs.multiselect,required:t.validateForm,placeholder:i._lang.common.selectOption,showError:t.validateForm&&e(V).economicActivityId.$error,"error-message":i._errorMessageField(e(V).economicActivityId),options:e(y).economicActivityList},null,8,["modelValue","label","disabled","loading","type","required","placeholder","showError","error-message","options"])]),_:1}),l(g,{id:"description",class:"mb-3 col-12",modelValue:e(n),"onUpdate:modelValue":C[1]||(C[1]=r=>z(n)?n.value=r:null),label:i._lang.label.description,disabled:t.disabled,loading:t.loading,type:e(_).inputs.richtext,language:e(a),maxlength:4e3},null,8,["modelValue","label","disabled","loading","type","language"])]),_:1},8,["title"])}}},Te={__name:"create",props:{modelValue:{type:Array,required:!0}},emits:["update:modelValue"],setup(k,{emit:m}){const t=k,y=j();te();const V="create-legislation";let p=I([]),a=D(H.legislationNewForm()),n=I(!1),d=I(_.language.pt);const i=le(H.legislationFormRules(),a,{$scope:!1}),C=B({get(){return t.modelValue},set(r){m("update:modelValue",r)}});async function g(){n.value=!0;let r=await ke.getLanguages();v.validateResponse(r,null,()=>{p.value=r.data}),n.value=!1}function L(){a=Object.assign(a,H.legislationNewForm()),i.value.$reset()}async function o(){if(n.value=!0,await i.value.$validate(),!i.value.$error){const r={legislationId:a.legislationId,name:a.texts[0].name,code:a.code,document:a.document,texts:a.texts};C.value.find(F=>F.name===r.name&&F.description===r.description)?P.warning(y.backoffice.service.legislationExists):(C.value.push(r),a=Object.assign(a,H.legislationNewForm()),i.value.$reset(),v.closeModalById(V),P.success(y.backoffice.service.legislationAdded))}n.value=!1}return x(async()=>{await g()}),(r,b)=>{const F=s("lang-selector"),A=s("top-actions"),w=s("cbutton"),E=s("modal");return $(),N(E,{id:V,title:r._lang.backoffice.service.addLegislation,size:e(_).modalSize.extraLarge},{body:f(()=>[l(A,null,{default:f(()=>[l(F,{options:e(p),selectedLang:e(d),"onUpdate:selectedLang":b[0]||(b[0]=T=>z(d)?d.value=T:d=T),disabled:e(n)},null,8,["options","selectedLang","disabled"])]),_:1}),l(Ce,{modelValue:e(a),"onUpdate:modelValue":b[1]||(b[1]=T=>z(a)?a.value=T:a=T),selectedLang:e(d),loading:e(n),disabled:e(n),vuelidate:e(i)},null,8,["modelValue","selectedLang","loading","disabled","vuelidate"])]),footer:f(()=>[l(w,{title:r._lang.common.cancel,type:e(_).buttonType.secondary,"data-bs-dismiss":"modal","aria-label":"Close",disabled:e(n),onClick:L},null,8,["title","type","disabled"]),l(w,{title:r._lang.common.save,onClick:o,disabled:e(n)},null,8,["title","disabled"])]),_:1},8,["title","size"])}}},Se={__name:"legislations",props:{modelValue:{type:Array,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},rules:{type:Object,default:{}}},emits:["update:modelValue"],setup(k,{emit:m}){const t=k,y=j();let V=I(!1);const p=B(()=>v.createEmptyDataSource(n.value)),a="confirm-delete-legislation",n=B({get(){return t.modelValue},set(o){m("update:modelValue",o)}});let d=I(null);function i(o){d.value=o}function C(){d.value&&(v.removeItemOfArray(n.value,d),P.success(y.backoffice.service.legislationRemoved),d.value=null)}function g(o){v.sortArrayOffline(o,p.value.items)}function L(o){o.download&&v.downloadFile(o.download)}return(o,r)=>{const b=s("table-actions"),F=s("ccolumn"),A=s("table-action-download"),w=s("table-action-delete"),E=s("ctable"),T=s("confirm-delete-modal");return $(),K(Q,null,[l(ie,{id:"legislations",title:o._lang.backoffice.service.legislations,collapsed:!1,class:"mb-4"},{default:f(()=>[l(b,null,{default:f(()=>[l(ne,{target:"create-legislation",class:"d-inline",type:e(_).buttonType.secondary,title:o._lang.common.toAdd,disabled:t.disabled,icon:oe},null,8,["type","title","disabled"])]),_:1}),l(E,{data:e(p),loading:e(V),checkbox:!1,showPagination:!1,onSort:g},{columns:f(()=>[l(F,{name:o._lang.label.code,field:"code",sortable:!0},null,8,["name"]),l(F,{name:o._lang.common.name,field:"name",sortable:!0},null,8,["name"])]),actions:f(c=>[c.item.download?($(),N(A,{key:0,onClick:h=>L(c.item)},null,8,["onClick"])):ee("",!0),l(w,{id:a,onClick:h=>i(c.item)},null,8,["onClick"])]),_:1},8,["data","loading"])]),_:1},8,["title"]),l(Te,{modelValue:e(n),"onUpdate:modelValue":r[0]||(r[0]=c=>z(n)?n.value=c:null)},null,8,["modelValue"]),l(T,{id:a,title:o._lang.backoffice.service.deleteLegislation,message:o._lang.backoffice.service.deleteLegislationQuestion,action:C},null,8,["title","message"])],64)}}},Be={__name:"create",props:{modelValue:{type:Array,required:!0}},emits:["update:modelValue"],setup(k,{emit:m}){const t=k,y=de(),V=j();te();const p="create-recipient";let a=D(C()),n=I(!1);const d=le(H.recipientFormRules(),a,{$scope:!1}),i=B({get(){return t.modelValue},set(o){m("update:modelValue",o)}});function C(){return{recipientId:null,name:null,description:null,informationLevel:!1,recipientTypeId:null,recipientType:null}}function g(){a=Object.assign(a,C()),d.value.$reset()}async function L(){if(n.value=!0,await d.value.$validate(),!d.value.$error){const o={recipientId:a.recipientId,recipientTypeId:a.recipientTypeId,recipientType:q.getLabel(y.recipientTypeList,a.recipientTypeId),name:a.name,description:a.description,document:a.document};i.value.find(b=>b.name===a.name&&b.description===a.description)?P.warning(V.backoffice.service.recipientExists):(i.value.push(o),a=Object.assign(a,C()),d.value.$reset(),v.closeModalById(p),P.success(V.backoffice.service.recipientAdded))}n.value=!1}return(o,r)=>{const b=s("form-field"),F=s("cbutton"),A=s("modal");return $(),N(A,{id:p,title:o._lang.backoffice.service.addRecipient,size:e(_).modalSize.extraLarge},{body:f(()=>[l(b,{id:"name",class:"mb-3 col-12",modelValue:e(a).name,"onUpdate:modelValue":r[0]||(r[0]=w=>e(a).name=w),label:o._lang.label.name,disabled:t.disabled,loading:t.loading,type:e(_).inputs.text,maxlength:255,required:!0,"show-error":e(d).name.$error,"error-message":o._errorMessageField(e(d).name)},null,8,["modelValue","label","disabled","loading","type","show-error","error-message"]),l(b,{id:"description",class:"mb-3 col-12",modelValue:e(a).description,"onUpdate:modelValue":r[1]||(r[1]=w=>e(a).description=w),label:o._lang.label.description,disabled:t.disabled,loading:t.loading,type:e(_).inputs.text,maxlength:255},null,8,["modelValue","label","disabled","loading","type"]),l(b,{id:"recipientTypeId",class:"mb-3 col-12",modelValue:e(a).recipientTypeId,"onUpdate:modelValue":r[2]||(r[2]=w=>e(a).recipientTypeId=w),label:o._lang.label.recipientTypeId,disabled:t.disabled,loading:t.loading,type:e(_).inputs.multiselect,placeholder:o._lang.common.selectOption,options:e(y).recipientTypeList},null,8,["modelValue","label","disabled","loading","type","placeholder","options"])]),footer:f(()=>[l(F,{title:o._lang.common.cancel,type:e(_).buttonType.secondary,"data-bs-dismiss":"modal","aria-label":"Close",disabled:e(n),onClick:g},null,8,["title","type","disabled"]),l(F,{title:o._lang.common.save,onClick:L,disabled:e(n)},null,8,["title","disabled"])]),_:1},8,["title","size"])}}},$e={__name:"recipients",props:{modelValue:{type:Array,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},rules:{type:Object,default:{}}},emits:["update:modelValue"],setup(k,{emit:m}){const t=k,y=j();let V=I(!1);const p=B(()=>v.createEmptyDataSource(n.value)),a="confirm-delete",n=B({get(){return t.modelValue},set(o){m("update:modelValue",o)}});let d=I(null);function i(o){d.value=o}function C(){d.value&&(v.removeItemOfArray(n.value,d),P.success(y.backoffice.service.recipientRemoved),d.value=null)}function g(o){v.sortArrayOffline(o,p.value.items)}function L(o){o.download&&v.downloadFile(o.download)}return(o,r)=>{const b=s("table-actions"),F=s("ccolumn"),A=s("table-action-download"),w=s("table-action-delete"),E=s("ctable"),T=s("confirm-delete-modal");return $(),K(Q,null,[l(ie,{id:"recipients",title:o._lang.backoffice.service.recipients,collapsed:!1,class:"mb-4"},{default:f(()=>[l(b,null,{default:f(()=>[l(ne,{target:"create-recipient",class:"d-inline",type:e(_).buttonType.secondary,title:o._lang.common.toAdd,disabled:t.disabled,icon:oe},null,8,["type","title","disabled"])]),_:1}),l(E,{data:e(p),loading:e(V),checkbox:!1,showPagination:!1,onSort:g},{columns:f(()=>[l(F,{name:o._lang.label.name,field:"name",sortable:!0},null,8,["name"]),l(F,{name:o._lang.label.description,field:"description",sortable:!0},null,8,["name"]),l(F,{name:o._lang.label.recipientTypeId,sortField:"recipientTypeId",field:"recipientType",sortable:!0},null,8,["name"])]),actions:f(c=>[c.item.download?($(),N(A,{key:0,onClick:h=>L(c.item)},null,8,["onClick"])):ee("",!0),l(w,{id:a,onClick:h=>i(c.item),disabled:t.disabled},null,8,["onClick","disabled"])]),_:1},8,["data","loading"])]),_:1},8,["title"]),l(Be,{modelValue:e(n),"onUpdate:modelValue":r[0]||(r[0]=c=>z(n)?n.value=c:null)},null,8,["modelValue"]),l(T,{id:a,title:o._lang.backoffice.service.deleteRecipient,message:o._lang.backoffice.service.deleteRecipientQuestion,action:C},null,8,["title","message"])],64)}}},Ae={__name:"general",props:{modelValue:{type:Object,required:!0},selectedLang:ye,disabled:{Boolean,default:!0},rules:{Boolean,default:!0},validateForm:{Boolean,default:!1},loading:{Object,default:{}},isExternalEdit:{type:Boolean,default:!1},progressValue:{type:Number,default:0}},setup(k){const m=k,t=B({get(){return m.modelValue},set(p){emit("update:modelValue",p)}}),y=B(()=>m.selectedLang),V=B(()=>y.value===_.language.en);return(p,a)=>{const n=s("progress-bar"),d=s("container-wrapper");return $(),K(Q,null,[l(d,{"margin-top":!1},{default:f(()=>[l(n,{value:k.progressValue,label:p._lang.common.fill,class:"mb-4 col-12 float-end"},null,8,["value","label"])]),_:1}),l(e(_e),{modelValue:e(t),"onUpdate:modelValue":a[0]||(a[0]=i=>z(t)?t.value=i:null),disabled:m.disabled,loading:k.loading,selectedLang:m.selectedLang,validateForm:m.validateForm,rules:m.rules,isExternalEdit:m.isExternalEdit},null,8,["modelValue","disabled","loading","selectedLang","validateForm","rules","isExternalEdit"]),l(e(Fe),{modelValue:e(t),"onUpdate:modelValue":a[1]||(a[1]=i=>z(t)?t.value=i:null),disabled:m.disabled,loading:k.loading,selectedLang:m.selectedLang,validateForm:m.validateForm,rules:m.rules},null,8,["modelValue","disabled","loading","selectedLang","validateForm","rules"]),l(e($e),{modelValue:e(t).recipients,"onUpdate:modelValue":a[2]||(a[2]=i=>e(t).recipients=i),disabled:m.disabled||e(V),loading:k.loading},null,8,["modelValue","disabled","loading"]),l(e(Se),{modelValue:e(t).legislations,"onUpdate:modelValue":a[3]||(a[3]=i=>e(t).legislations=i),disabled:m.disabled,loading:k.loading},null,8,["modelValue","disabled","loading"]),l(e(Ie),{modelValue:e(t),"onUpdate:modelValue":a[4]||(a[4]=i=>z(t)?t.value=i:null),disabled:m.disabled,loading:k.loading,selectedLang:m.selectedLang},null,8,["modelValue","disabled","loading","selectedLang"]),l(we,{modelValue:e(t),"onUpdate:modelValue":a[5]||(a[5]=i=>z(t)?t.value=i:null),disabled:m.disabled,loading:k.loading,selectedLang:e(y)},null,8,["modelValue","disabled","loading","selectedLang"])],64)}}},ze={__name:"search-service-points-modal",props:{serviceId:{Number,required:!0},serviceVersion:{Number,required:!0}},emits:["apply"],setup(k,{emit:m}){const t=k,y=Oe(),V="search-pointOfCare-modal",p=j(),a=pe();let n=D(A()),d=I([]),i=I([]),C=I(v.createEmptyDataSource()),g=I(!1),L=I(!1),o=I(0),r=I("pt"),b=D(F());function F(){return Le.newForm()}function A(){return{pageNumber:1,sortBy:"Code",recordStateIds:[_.recordStateType.published],active:!0}}se(async()=>{g.value=!0,d.value=v.convertEnumToArray(p.enums.recordStateType);const u=await Y.getLists(a.getLanguage);v.validateResponse(u,null,()=>{y.setLists(u.data),d.value=v.convertEnumToArray(p.enums.recordStateType),i.value=v.concatItemsBadge(d.value,q.recordStateTypeBadgeOptions)}),g.value=!1}),x(async()=>{await T()});async function w(u){n.sortBy=u,await T()}async function E(u){n.pageNumber=u,await T()}async function T(){g.value=!0;let u=await Y.search(n);v.validateResponse(u,null,()=>{C.value=u.data}),g.value=!1}async function c(){Object.assign(n,A()),await T()}async function h(){await T()}async function G(u){const O=await Y.getById(u.pointOfCareId,u.pointOfCareVersion);v.validateResponse(O,null,()=>{Object.assign(b,O.data),L.value=!0}),o.value++}function J(){}async function M(){g.value=!0;const u=await Z.associationCreate(t.serviceId,t.serviceVersion,b.pointOfCareId,b.pointOfCareVersion);v.validateResponse(u,p.backoffice.pointOfCare.serviceAdded,()=>{m("apply")}),g.value=!1}return(u,O)=>{const U=s("form-field"),W=s("row"),X=s("cfilter"),R=s("ccolumn"),re=s("table-action-detail"),ce=s("ctable"),ue=s("container-wrapper"),ae=s("cbutton"),me=s("modal");return $(),N(me,{id:V,title:u._lang.backoffice.pointOfCare.searchTitle,size:e(_).modalSize.extraLarge,"remove-padding":!0},{body:f(()=>[l(X,{title:u._lang.common.filter,disabled:e(g),"clear-click":c,"apply-click":h,loading:e(g),collapsed:!1},{default:f(()=>[l(W,null,{default:f(()=>[l(U,{id:"code",modelValue:e(n).code,"onUpdate:modelValue":O[0]||(O[0]=S=>e(n).code=S),class:"mb-3 col-12 col-md-6 col-lg-4",label:u._lang.label.code,type:e(_).inputs.text,maxlength:45,disabled:e(g)},null,8,["modelValue","label","type","disabled"]),l(U,{id:"channelTypeIds",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(n).channelTypeIds,"onUpdate:modelValue":O[1]||(O[1]=S=>e(n).channelTypeIds=S),label:u._lang.label.channelTypeId,type:e(_).inputs.multiselect,options:e(y).channelTypeList,disabled:e(g),mode:e(_).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"]),l(U,{id:"abreviation",class:"mb-3 col-12 col-lg-4",modelValue:e(n).abreviation,"onUpdate:modelValue":O[2]||(O[2]=S=>e(n).abreviation=S),label:u._lang.label.abreviation,type:e(_).inputs.text,maxlength:16,disabled:e(g)},null,8,["modelValue","label","type","disabled"]),l(U,{id:"name",class:"mb-3 col-12",modelValue:e(n).name,"onUpdate:modelValue":O[3]||(O[3]=S=>e(n).name=S),label:u._lang.label.name,type:e(_).inputs.text,maxlength:45,disabled:e(g)},null,8,["modelValue","label","type","disabled"]),l(U,{id:"organization",class:"mb-3 col-12 col-md-6",modelValue:e(n).organization,"onUpdate:modelValue":O[4]||(O[4]=S=>e(n).organization=S),label:u._lang.label.organizationHost,type:e(_).inputs.multiselect,options:e(y).organizationList,disabled:e(g),valueProp:e(_).multiselectValueProp.value3},null,8,["modelValue","label","type","options","disabled","valueProp"]),l(U,{id:"organizationHost",class:"mb-3 col-12 col-md-6",modelValue:e(n).organizationHost,"onUpdate:modelValue":O[5]||(O[5]=S=>e(n).organizationHost=S),label:u._lang.label.hostOrganization,type:e(_).inputs.multiselect,options:e(y).organizationList,disabled:e(g),valueProp:e(_).multiselectValueProp.value3},null,8,["modelValue","label","type","options","disabled","valueProp"])]),_:1})]),_:1},8,["title","disabled","loading"]),l(ue,null,{default:f(()=>[l(ce,{onSort:w,onChangePage:E,data:e(C),checkbox:!1,loading:e(g),defaultSort:"Code"},{columns:f(()=>[l(R,{name:u._lang.label.code,field:"code",sortable:!0},null,8,["name"]),l(R,{name:u._lang.label.channelTypeId,field:"channelType",sortField:"channelTypeId",sortable:!0},null,8,["name"]),l(R,{name:u._lang.label.abreviation,field:"abreviation",sortable:!0},null,8,["name"]),l(R,{name:u._lang.label.name,field:"name",sortable:!0},null,8,["name"]),l(R,{name:u._lang.label.organizationHost,field:"organization",sortField:"organizationId",sortable:!0},null,8,["name"]),l(R,{name:u._lang.label.hostOrganization,field:"organizationHost",sortField:"organizationHostId",sortable:!0},null,8,["name"])]),actions:f(S=>[l(re,{onClick:Ue=>G(S.item)},null,8,["onClick"])]),_:1},8,["data","loading"])]),_:1}),($(),N(e(Ve),{collapsed:e(L),class:"mt-5",key:e(o),modelValue:e(b),"onUpdate:modelValue":O[6]||(O[6]=S=>z(b)?b.value=S:b=S),disabled:!0,loading:e(g),selectedLang:e(r),validateForm:!1},null,8,["collapsed","modelValue","loading","selectedLang"]))]),footer:f(()=>[l(ae,{type:"primary",size:"large",title:u._lang.common.apply,"data-bs-dismiss":"modal",onClick:M,disabled:!e(b).code},null,8,["title","disabled"]),l(ae,{type:"secondary",size:"large",title:u._lang.common.cancel,"data-bs-dismiss":"modal",onClick:J},null,8,["title"])]),_:1},8,["title","size"])}}},Ee=["id"],Ne={__name:"service-points",props:{},setup(k){x(()=>{}),se(async()=>{i.value=v.decodeId(V.params.serviceId),C.value=v.decodeId(V.params.serviceVersion),!i.value||!C.value?a.push({name:ge.router.BACKOFFICE_SERVICE_PAGE.name}):(L.serviceId=i.value,L.serviceVersion=C.value,await w())});const m="search-pointOfCare-modal",t="delete-pointOfCare",y=v.uuid(),V=fe(),p=j(),a=be();let n=I(!0),d=I(0),i=I(0),C=I(0),g=I(v.createEmptyDataSource()),L=D(r()),o=I(null);function r(){return{pageNumber:1,sortBy:"pointOfCareName",active:!0,serviceId:null,serviceVersion:null}}function b(){d.value++,window.setTimeout(function(){v.showModalById(m)},5)}async function F(c){L.sortBy=c,await w()}async function A(c){L.pageNumber=c,await w()}async function w(){n.value=!0;let c=await Z.associationSearch(L);v.validateResponse(c,null,()=>{g.value=c.data}),n.value=!1}async function E(c){o.value=c}async function T(){if(o.value){n.value=!0;const c=await Z.associationRemove(i.value,C.value,o.value.pointOfCareId,o.value.pointOfCareVersion);v.validateResponse(c,p.backoffice.service.pointOfCareRemoved,async()=>{await w()}),n.value=!1}}return(c,h)=>{const G=s("icon-search"),J=s("table-actions"),M=s("ccolumn"),u=s("table-action-delete"),O=s("ctable"),U=s("container-wrapper"),W=s("confirm-delete-modal");return $(),K(Q,null,[l(U,null,{default:f(()=>[l(J,{title:c._lang.common.tableActionTitle},{default:f(()=>[ve("button",{class:"btn btn-primary",type:"button",id:e(y),onClick:b},[l(G,{color:"#FFF"})],8,Ee)]),_:1},8,["title"]),l(O,{onSort:F,onChangePage:A,data:e(g),checkbox:!1,loading:e(n),defaultSort:"pointOfCareCode",checkboxField:"code"},{columns:f(()=>[l(M,{name:c._lang.label.code,field:"pointOfCareCode",sortable:!0},null,8,["name"]),l(M,{name:c._lang.label.channelTypeId,field:"pointOfCareType",sortField:"pointOfCareTypeId",sortable:!0},null,8,["name"]),l(M,{name:c._lang.label.abreviation,field:"pointOfCareAbreviation",sortField:"pointOfCareAbreviation",sortable:!0},null,8,["name"]),l(M,{name:c._lang.label.name,field:"pointOfCareName",sortable:!0},null,8,["name"]),l(M,{name:c._lang.label.organizationHost,field:"pointOfCareOrganization",sortField:"pointOfCareOrganizationId",sortable:!0},null,8,["name"])]),actions:f(X=>[l(u,{id:t,onClick:R=>E(X.item)},null,8,["onClick"])]),_:1},8,["data","loading"])]),_:1}),e(n)?ee("",!0):($(),N(ze,{key:e(d),serviceId:e(i),serviceVersion:e(C),onApply:w},null,8,["serviceId","serviceVersion"])),l(W,{id:t,title:c._lang.backoffice.service.pointOfCareDeleteTitle,message:c._lang.backoffice.service.pointOfCareDeleteQuestion,action:T},null,8,["title","message"])],64)}}},xe={__name:"form",props:{formModel:{Object,required:!0},loading:{type:Boolean,required:!0},validateForm:{type:Boolean,required:!0},disabled:{type:Boolean,required:!0},isExternalEdit:{type:Boolean,required:!0},selectedLang:{type:[Number,String],required:!0},rules:{type:Object,required:!0},vuelidate:{Object,default:null},progressValue:{type:Number,default:0}},emits:["update:formModel"],setup(k,{emit:m}){const t=k,y=B({get(){return t.formModel},set(V){m("update:formModel",V)}});return(V,p)=>{const a=s("tab-content"),n=s("tabs");return $(),N(n,null,{default:f(()=>[l(a,{id:"general",title:V._lang.common.general,active:!0},{default:f(()=>[l(Ae,{modelValue:e(y),"onUpdate:modelValue":p[0]||(p[0]=d=>z(y)?y.value=d:null),disabled:t.disabled,validateForm:t.validateForm,loading:t.loading,selectedLang:t.selectedLang,rules:t.rules,progressValue:t.progressValue},null,8,["modelValue","disabled","validateForm","loading","selectedLang","rules","progressValue"])]),_:1},8,["title"]),l(a,{id:"service-points",title:V._lang.backoffice.menu.servicePoints,active:!1,disabled:!1},{default:f(()=>[l(Ne)]),_:1},8,["title"])]),_:1})}}};export{xe as _};
