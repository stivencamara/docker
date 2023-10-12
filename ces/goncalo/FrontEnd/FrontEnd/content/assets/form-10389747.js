import{u as se}from"./index.esm-5fe78185.js";import{_ as ie,a as re,b as ue}from"./contacts-d61273ea.js";import{_ as ce,a as me}from"./address.vue_vue_type_style_index_0_scoped_5480b292_lang-1be492ce.js";import{j as L,k as c,c as k,l as N,w as _,n as t,p as e,I as B,s as f,_ as pe,u as C,r as V,N as ge,e as z,m as X,O as be,Q as fe,F as le,i as ae,J as ve,G as Z,K as te,o as oe,L as ye,M as _e,f as Ve,g as Ce,t as Oe,v as Ie,y as h}from"./index-c417b10a.js";import{b as w}from"./helpers-422844e7.js";import{u as Le}from"./organization-53b6fe99.js";import{u as ne}from"./point-of-care-870d551b.js";import{_ as ke}from"./address-c37f517b.js";import{_ as Fe,a as Be}from"./refusal-45a989d4.js";import{r as Se}from"./index.esm-29b873a2.js";import{_ as we}from"./generic-972994fb.js";import{p as ee}from"./point-of-care-86bcb545.js";import{s as Y}from"./service-e178ddc5.js";import{u as Te}from"./service-d66d7fcd.js";import{s as Ne}from"./helpers-9f3bdf36.js";const Me={__name:"description",props:{modelValue:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},selectedLang:{type:[String,Number],required:!0},validateForm:{type:Boolean,default:!1},rules:{type:Object,default:{}},vuelidate:{type:Object,default:null}},emits:["update:modelValue"],setup(g,{emit:d}){const n=g;Le();const i=L({get(){return n.modelValue},set(a){d("update:modelValue",a)}}),l=L(()=>n.selectedLang),p=L({get(){return w.getFieldByLangAndName(i.value,l.value,"description")},set(a){w.setFieldByLangAndName(i.value,l.value,"description",a)}}),b=L({get(){return w.getFieldByLangAndName(i.value,l.value,"preConditions")},set(a){w.setFieldByLangAndName(i.value,l.value,"preConditions",a)}});return L({get(){return w.getFieldByLangAndName(i.value,l.value,"keywords")},set(a){w.setFieldByLangAndName(i.value,l.value,"keywords",a)}}),(a,o)=>{const s=c("form-field"),F=c("accordion");return k(),N(F,{id:"description",title:a._lang.common.description,collapsed:!1,class:"mb-4"},{default:_(()=>[t(s,{id:"description",class:"mb-3 col-12",modelValue:e(p),"onUpdate:modelValue":o[0]||(o[0]=r=>B(p)?p.value=r:null),label:a._lang.label.description,disabled:n.disabled,loading:n.loading,type:e(f).inputs.text,maxlength:255,language:e(l)},null,8,["modelValue","label","disabled","loading","type","language"]),t(s,{id:"preConditions",class:"mb-3 col-12",modelValue:e(b),"onUpdate:modelValue":o[1]||(o[1]=r=>B(b)?b.value=r:null),label:a._lang.label.preConditions,disabled:n.disabled,loading:n.loading,type:e(f).inputs.text,maxlength:255,language:e(l)},null,8,["modelValue","label","disabled","loading","type","language"])]),_:1},8,["title"])}}},qe={class:"input-group mb-3"},Ee=["aria-describedby"],Ue=["id","disabled"],Ae={__name:"address",props:{modelValue:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},validateForm:{type:Boolean,default:!1},rules:{type:Object,default:{}},vuelidate:{type:Object,default:null}},emits:["update:modelValue"],setup(g,{emit:d}){const n=g,i=ne(),l=C.uuid();let p=V(0),b=V(0);const a=V(!1);V(!1);const o=L({get(){return n.modelValue},set(y){d("update:modelValue",y)}}),s="search-location";function F(y){Object.assign(o.value.address,y),p.value++}function r(){b.value++,window.setTimeout(function(){C.showModalById(s)},5)}return ge(o.value,y=>{y.address.locationId!=null&&(a.value?(y.address.locationId=null,y.address.code=null,a.value=!1):a.value=!0)}),(y,T)=>{const M=c("icon-search"),I=c("accordion");return k(),z(le,null,[t(I,{id:"address-accordion",title:y._lang.backoffice.entities.address,collapsed:!1,class:"mb-4"},{default:_(()=>[X("div",qe,[be(X("input",{ref:"locationQuery",id:"location-query",type:"text",class:"form-control",placeholder:"Código do património","aria-label":"placeholder","aria-describedby":e(l),disabled:"","onUpdate:modelValue":T[0]||(T[0]=E=>e(o).address.code=E)},null,8,Ee),[[fe,e(o).address.code]]),X("button",{class:"btn btn-primary",type:"button",id:e(l),disabled:n.disabled,onClick:r},[t(M,{color:"#FFF"})],8,Ue)]),(k(),N(ke,{key:e(p),modelValue:e(o).address,"onUpdate:modelValue":T[1]||(T[1]=E=>e(o).address=E),disabled:n.disabled,rules:n.rules,loading:n.loading,"validate-form":n.validateForm&&e(o).address.isRequired,store:e(i),vuelidate:n.vuelidate},null,8,["modelValue","disabled","rules","loading","validate-form","store","vuelidate"]))]),_:1},8,["title"]),(k(),N(ie,{key:e(b),onApply:F}))],64)}}},je=pe(Ae,[["__scopeId","data-v-5480b292"]]),Re={__name:"service-channel-requirements",props:{modelValue:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},validateForm:{type:Boolean,default:!1},selectedLang:{type:[String,Number],required:!0},rules:{type:Object,default:{}},vuelidate:{type:Object,default:null}},emits:["update:modelValue"],setup(g,{emit:d}){const n=g,i=L({get(){return n.modelValue},set(a){d("update:modelValue",a)}}),l=L(()=>n.selectedLang),p=L({get(){return w.getFieldByLangAndName(i.value,l.value,"openingHours")},set(a){w.setFieldByLangAndName(i.value,l.value,"openingHours",a)}}),b=L({get(){return w.getFieldByLangAndName(i.value,l.value,"attendanceRestrictions")},set(a){w.setFieldByLangAndName(i.value,l.value,"attendanceRestrictions",a)}});return(a,o)=>{const s=c("form-field"),F=c("accordion");return k(),N(F,{id:"attendance-restrictions",title:a._lang.backoffice.pointOfCare.serviceChannelRequirements,collapsed:!1,class:"mb-4"},{default:_(()=>[t(s,{id:"openingHours",class:"mb-3 col-12",modelValue:e(p),"onUpdate:modelValue":o[0]||(o[0]=r=>B(p)?p.value=r:null),label:a._lang.label.openingHours,disabled:n.disabled,loading:n.loading,type:e(f).inputs.textarea,rows:3,language:e(l),maxlength:2e3},null,8,["modelValue","label","disabled","loading","type","language"]),t(s,{id:"attendanceRestrictions",class:"mb-3 col-12",modelValue:e(b),"onUpdate:modelValue":o[1]||(o[1]=r=>B(b)?b.value=r:null),label:a._lang.label.attendanceRestrictions,disabled:n.disabled,loading:n.loading,type:e(f).inputs.textarea,rows:3,language:e(l),maxlength:2e3},null,8,["modelValue","label","disabled","loading","type","language"])]),_:1},8,["title"])}}},$e={__name:"general",props:{modelValue:{type:Object,required:!0},selectedLang:Se,disabled:{Boolean,default:!0},rules:{Boolean,default:!0},validateForm:{Boolean,default:!1},loading:{Object,default:{}},isExternalEdit:{type:Boolean,default:!1},vuelidate:{type:Object,default:null}},setup(g){const d=g,n=ne(),i=se(d.rules,d.modelValue),l=L({get(){return d.modelValue},set(a){emit("update:modelValue",a)}}),p=L(()=>d.selectedLang),b=L(()=>d.selectedLang===f.language.en);return(a,o)=>(k(),z(le,null,[t(Fe,{modelValue:e(l),"onUpdate:modelValue":o[0]||(o[0]=s=>B(l)?l.value=s:null),store:e(n)},null,8,["modelValue","store"]),t(e(ce),{modelValue:e(l),"onUpdate:modelValue":o[1]||(o[1]=s=>B(l)?l.value=s:null),disabled:d.disabled,loading:g.loading,selectedLang:d.selectedLang,validateForm:d.validateForm,rules:d.rules,isExternalEdit:d.isExternalEdit,vuelidate:e(i)},null,8,["modelValue","disabled","loading","selectedLang","validateForm","rules","isExternalEdit","vuelidate"]),t(e(Me),{modelValue:e(l),"onUpdate:modelValue":o[2]||(o[2]=s=>B(l)?l.value=s:null),disabled:d.disabled,loading:g.loading,selectedLang:d.selectedLang,validateForm:d.validateForm,rules:d.rules,vuelidate:e(i)},null,8,["modelValue","disabled","loading","selectedLang","validateForm","rules","vuelidate"]),t(e(je),{modelValue:d.modelValue,"onUpdate:modelValue":o[3]||(o[3]=s=>d.modelValue=s),disabled:d.disabled,loading:g.loading||e(b),rules:d.rules,validateForm:d.validateForm,vuelidate:e(i)},null,8,["modelValue","disabled","loading","rules","validateForm","vuelidate"]),t(e(Re),{modelValue:e(l),"onUpdate:modelValue":o[4]||(o[4]=s=>B(l)?l.value=s:null),disabled:d.disabled,loading:g.loading,selectedLang:d.selectedLang,vuelidate:e(i)},null,8,["modelValue","disabled","loading","selectedLang","vuelidate"]),t(e(ue),{modelValue:e(l).contacts,"onUpdate:modelValue":o[5]||(o[5]=s=>e(l).contacts=s),disabled:d.disabled||e(b),modal:re,store:e(n),loading:g.loading},null,8,["modelValue","disabled","store","loading"]),t(e(Be),{modelValue:e(l),"onUpdate:modelValue":o[6]||(o[6]=s=>B(l)?l.value=s:null),disabled:d.disabled,loading:g.loading,selectedLang:d.selectedLang,vuelidate:e(i)},null,8,["modelValue","disabled","loading","selectedLang","vuelidate"]),t(we,{modelValue:e(l),"onUpdate:modelValue":o[7]||(o[7]=s=>B(l)?l.value=s:null),disabled:d.disabled,loading:g.loading,selectedLang:e(p),vuelidate:e(i)},null,8,["modelValue","disabled","loading","selectedLang","vuelidate"])],64))}},ze={__name:"search-service-modal",props:{pointOfCareId:{Number,required:!0},pointOfCareVersion:{Number,required:!0}},emits:["apply"],setup(g,{emit:d}){const n=g,i=Te(),l="search-service-modal",p=ae(),b=ve();let a=Z(j()),o=V([]),s=V([]),F=V(C.createEmptyDataSource()),r=V(!1),y=V(!1),T=V(0),M=V("pt"),I=Z(E());function E(){return Ne.newForm()}function j(){return{pageNumber:1,sortBy:"Code",code:null,serviceTypeIds:null,serviceCategoryIds:null,businessEventIds:null,lifeEventIds:null,abreviation:null,name:null,organization:null,recordStateIds:[f.recordStateType.published],active:!0}}te(async()=>{r.value=!0,o.value=C.convertEnumToArray(p.enums.recordStateType);const u=await Y.getLists(b.getLanguage);C.validateResponse(u,null,()=>{i.setLists(u.data),o.value=C.convertEnumToArray(p.enums.recordStateType),s.value=C.concatItemsBadge(o.value,w.recordStateTypeBadgeOptions)}),r.value=!1}),oe(async()=>{await S()});async function P(u){a.sortBy=u,await S()}async function H(u){a.pageNumber=u,await S()}async function S(){r.value=!0;let u=await Y.search(a);C.validateResponse(u,null,()=>{F.value=u.data}),r.value=!1}async function D(){Object.assign(a,j()),await S()}async function K(){await S()}async function R(u){const v=await Y.getById(u.serviceId,u.serviceVersion);C.validateResponse(v,null,()=>{Object.assign(I,v.data),y.value=!0}),T.value++}function $(){}async function m(){r.value=!0;const u=await ee.associationCreate(n.pointOfCareId,n.pointOfCareVersion,I.serviceId,I.serviceVersion);C.validateResponse(u,p.backoffice.pointOfCare.serviceAdded,()=>{d("apply")}),r.value=!1}return(u,v)=>{const q=c("form-field"),U=c("row"),x=c("cfilter"),A=c("ccolumn"),Q=c("table-action-detail"),G=c("ctable"),J=c("container-wrapper"),W=c("cbutton"),de=c("modal");return k(),N(de,{id:l,title:u._lang.backoffice.service.searchTitle,size:e(f).modalSize.extraLarge,"remove-padding":!0},{body:_(()=>[t(x,{title:u._lang.common.filter,disabled:e(r),"clear-click":D,"apply-click":K,loading:e(r),collapsed:!0},{default:_(()=>[t(U,null,{default:_(()=>[t(q,{id:"code",modelValue:e(a).code,"onUpdate:modelValue":v[0]||(v[0]=O=>e(a).code=O),class:"mb-3 col-12 col-md-6 col-xl-4",label:u._lang.label.code,type:e(f).inputs.text,maxlength:45,disabled:e(r)},null,8,["modelValue","label","type","disabled"]),t(q,{id:"serviceTypeId",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(a).serviceTypeIds,"onUpdate:modelValue":v[1]||(v[1]=O=>e(a).serviceTypeIds=O),label:u._lang.label.serviceTypeId,type:e(f).inputs.multiselect,options:e(i).serviceTypeList,disabled:e(r),mode:e(f).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"]),t(q,{id:"serviceCategoryId",class:"mb-3 col-12 col-md-6 col-xl-4",modelValue:e(a).serviceCategoryIds,"onUpdate:modelValue":v[2]||(v[2]=O=>e(a).serviceCategoryIds=O),label:u._lang.label.serviceCategoryId,type:e(f).inputs.multiselect,options:e(i).serviceCategoryList,disabled:e(r),mode:e(f).multiselectMode.tags},null,8,["modelValue","label","type","options","disabled","mode"]),t(q,{id:"abreviation",class:"mb-3 col-12 col-md-6",modelValue:e(a).abreviation,"onUpdate:modelValue":v[3]||(v[3]=O=>e(a).abreviation=O),label:u._lang.label.abreviation,type:e(f).inputs.text,maxlength:16,disabled:e(r)},null,8,["modelValue","label","type","disabled"]),t(q,{id:"organizationId",class:"mb-3 col-12 col-md-6",modelValue:e(a).organization,"onUpdate:modelValue":v[4]||(v[4]=O=>e(a).organization=O),label:u._lang.label.organizationHost,type:e(f).inputs.multiselect,options:e(i).organizationList,disabled:e(r),valueProp:e(f).multiselectValueProp.value3},null,8,["modelValue","label","type","options","disabled","valueProp"]),t(q,{id:"name",class:"mb-3 col-12",modelValue:e(a).name,"onUpdate:modelValue":v[5]||(v[5]=O=>e(a).name=O),label:u._lang.label.name,type:e(f).inputs.text,maxlength:45,disabled:e(r)},null,8,["modelValue","label","type","disabled"])]),_:1})]),_:1},8,["title","disabled","loading"]),t(J,null,{default:_(()=>[t(G,{onSort:P,onChangePage:H,data:e(F),checkbox:!1,loading:e(r),defaultSort:"Code"},{columns:_(()=>[t(A,{name:u._lang.label.code,field:"code",sortable:!0},null,8,["name"]),t(A,{name:u._lang.label.serviceTypeId,field:"serviceType",sortField:"serviceTypeId",sortable:!0},null,8,["name"]),t(A,{name:u._lang.label.abreviation,field:"abreviation",sortable:!0},null,8,["name"]),t(A,{name:u._lang.label.name,field:"name",sortable:!0},null,8,["name"]),t(A,{name:u._lang.label.state,field:"recordStateTypeId",align:e(f).columnAlign.center,custom:ye,options:e(s),sortable:!0},null,8,["name","align","options"])]),actions:_(O=>[t(Q,{onClick:He=>R(O.item)},null,8,["onClick"])]),_:1},8,["data","loading"])]),_:1}),(k(),N(e(me),{collapsed:e(y),class:"mt-5",key:e(T),modelValue:e(I),"onUpdate:modelValue":v[6]||(v[6]=O=>B(I)?I.value=O:I=O),disabled:!0,loading:e(r),selectedLang:e(M),validateForm:!1},null,8,["collapsed","modelValue","loading","selectedLang"]))]),footer:_(()=>[t(W,{type:"primary",size:"large",title:u._lang.common.apply,"data-bs-dismiss":"modal",onClick:m,disabled:!e(I).code},null,8,["title","disabled"]),t(W,{type:"secondary",size:"large",title:u._lang.common.cancel,"data-bs-dismiss":"modal",onClick:$},null,8,["title"])]),_:1},8,["title","size"])}}},he=["id"],Pe={__name:"services",props:{formModel:{Object,required:!0}},setup(g){var R,$;const d=g,n=V(_e.havePermission(f.permissions.pointOfCare.createEdit)&&(((R=d.formModel)==null?void 0:R.recordStateTypeId)==f.recordStateType.draft||(($=d.formModel)==null?void 0:$.recordStateTypeId)==f.recordStateType.published));oe(()=>{}),te(async()=>{r.value=C.decodeId(b.params.pointOfCareId),y.value=C.decodeId(b.params.pointOfCareVersion),!r.value||!y.value?o.push({name:constants.router.BACKOFFICE_POINT_OF_CARE_PAGE.name}):(M.pointOfCareId=r.value,M.pointOfCareVersion=y.value,await S())});const i="search-service-modal",l="delete-service",p=C.uuid(),b=Ve(),a=ae(),o=Ce();let s=V(!0),F=V(0),r=V(0),y=V(0),T=V(C.createEmptyDataSource()),M=Z(E()),I=V(null);function E(){return{pageNumber:1,sortBy:"ServiceName",active:!0,pointOfCareId:null,pointOfCareVersion:null}}function j(){F.value++,window.setTimeout(function(){C.showModalById(i)},5)}async function P(m){M.sortBy=m,await S()}async function H(m){M.pageNumber=m,await S()}async function S(){s.value=!0;let m=await ee.associationSearch(M);C.validateResponse(m,null,()=>{T.value=m.data}),s.value=!1}async function D(m){I.value=m}async function K(){if(I.value){s.value=!0;const m=await ee.associationRemove(r.value,y.value,I.value.serviceId,I.value.serviceVersion);C.validateResponse(m,a.backoffice.pointOfCare.serviceRemoved,async()=>{await S()}),s.value=!1}}return(m,u)=>{const v=c("icon-plus"),q=c("table-actions"),U=c("ccolumn"),x=c("table-action-delete"),A=c("ctable"),Q=c("container-wrapper"),G=c("confirm-delete-modal");return k(),z(le,null,[t(Q,null,{default:_(()=>[t(q,{title:m._lang.common.tableActionTitle},{default:_(()=>[n.value?(k(),z("button",{key:0,class:"btn btn-primary",type:"button",id:e(p),onClick:j},[t(v,{color:"#FFF"}),Oe(" "+Ie(m._lang.common.addService),1)],8,he)):h("",!0)]),_:1},8,["title"]),t(A,{onSort:P,onChangePage:H,data:e(T),checkbox:!1,loading:e(s),defaultSort:"ServiceName",checkboxField:"code"},{columns:_(()=>[t(U,{name:m._lang.label.code,field:"serviceCode",sortable:!0},null,8,["name"]),t(U,{name:m._lang.label.channelTypeId,field:"serviceType",sortField:"serviceType",sortable:!0},null,8,["name"]),t(U,{name:m._lang.label.abreviation,field:"serviceOrganization",sortField:"serviceOrganizationId",sortable:!0},null,8,["name"]),t(U,{name:m._lang.label.name,field:"serviceName",sortable:!0},null,8,["name"]),t(U,{name:m._lang.label.organizationHost,field:"serviceOrganization",sortField:"serviceOrganizationId",sortable:!0},null,8,["name"])]),actions:_(J=>[t(x,{id:l,onClick:W=>D(J.item)},null,8,["onClick"])]),_:1},8,["data","loading"])]),_:1}),e(s)?h("",!0):(k(),N(ze,{key:e(F),pointOfCareId:e(r),pointOfCareVersion:e(y),onApply:S},null,8,["pointOfCareId","pointOfCareVersion"])),t(G,{id:l,title:m._lang.backoffice.pointOfCare.serviceDeleteTitle,message:m._lang.backoffice.pointOfCare.serviceDeleteQuestion,action:K},null,8,["title","message"])],64)}}},nl={__name:"form",props:{formModel:{Object,required:!0},loading:{type:Boolean,required:!0},validateForm:{type:Boolean,required:!0},disabled:{type:Boolean,required:!0},isExternalEdit:{type:Boolean,required:!0},selectedLang:{type:[Number,String],required:!0},rules:{type:Object,required:!0},vuelidate:{Object,default:null},showProgress:{type:Boolean,default:!0},progressValue:{type:[Number],required:!1}},emits:["update:formModel"],setup(g,{emit:d}){const n=g,i=L({get(){return n.formModel},set(l){d("update:formModel",l)}});return(l,p)=>{const b=c("progress-bar"),a=c("container-wrapper"),o=c("tab-content"),s=c("tabs");return k(),N(s,null,{default:_(()=>[t(o,{id:"general",title:l._lang.common.general,active:!0},{default:_(()=>[n.showProgress?(k(),N(a,{key:0,"margin-top":!1},{default:_(()=>[n.showProgress?(k(),N(b,{key:0,value:n.progressValue,label:l._lang.common.fill,class:"mb-4 col-12 float-end"},null,8,["value","label"])):h("",!0)]),_:1})):h("",!0),t($e,{modelValue:e(i),"onUpdate:modelValue":p[0]||(p[0]=F=>B(i)?i.value=F:null),disabled:n.disabled,validateForm:n.validateForm,loading:n.loading,selectedLang:n.selectedLang,rules:n.rules},null,8,["modelValue","disabled","validateForm","loading","selectedLang","rules"])]),_:1},8,["title"]),t(o,{id:"services",title:l._lang.backoffice.menu.services,active:!1,disabled:!1},{default:_(()=>[t(Pe,{formModel:e(i)},null,8,["formModel"])]),_:1},8,["title"])]),_:1})}}};export{nl as _};