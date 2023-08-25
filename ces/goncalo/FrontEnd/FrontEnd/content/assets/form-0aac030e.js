import{_ as se,a as ue,b as ce}from"./contacts-6b20bf02.js";import{i as $,r as S,j as O,u,N as G,s as d,k as p,c as k,l as A,w as _,n,p as e,H as L,O as H,P as W,_ as me,e as Q,m as oe,Q as pe,y as h,F as le,h as ge,E as K,R as ae,S as be,T as Y,U as fe,M as J,K as X,g as Z,L as x,z as P}from"./index-074485c3.js";import{u as j}from"./organization-0a1af671.js";import{u as ee}from"./index.esm-ba4feb27.js";import{b as B}from"./helpers-9f106e00.js";import{_ as ve}from"./address-7818ed07.js";import{o as de}from"./helpers-6136d4cb.js";import{_ as ye,a as Ie}from"./refusal-f524e0ab.js";import{r as _e}from"./index.esm-da08cc71.js";import{_ as Ve}from"./generic-9fc3b9dd.js";import{p as ne}from"./point-of-care-69e1e40c.js";import{p as ze}from"./helpers-3438087c.js";import{s as te}from"./service-1dc5fd50.js";import{s as Te}from"./helpers-1bacd47d.js";import{d as ie}from"./document-70e5cc70.js";import{d as Ce}from"./helpers-130c44c2.js";import{o as re}from"./organization-77309d9d.js";const Fe={__name:"base-information",props:{modelValue:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},validateForm:{type:Boolean,default:!1},selectedLang:{type:[String,Number],required:!0},rules:{type:Object,default:{}},canCreate:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(y,{emit:r}){const l=y,m=j(),b=$(),i=ee(l.rules,l.modelValue);let t=S(!0),c=S(!1);const o=O({get(){return l.modelValue},set(f){r("update:modelValue",f)}}),C=O(()=>u.convertEnumToArray(b.enums.groupType)),z=O(()=>l.selectedLang),T=O({get(){return B.getFieldByLangAndName(o.value,z.value,"abreviation")},set(f){B.setFieldByLangAndName(o.value,z.value,"abreviation",f)}}),F=O({get(){return B.getFieldByLangAndName(o.value,z.value,"name")},set(f){B.setFieldByLangAndName(o.value,z.value,"name",f)}});G(()=>o.value.groupName,()=>{I()}),G(()=>i.value.$error,()=>{i.value.$error&&(t.value=!0)}),G(()=>o.value.startDate,(f,a)=>{new Date(f)>new Date(o.value.endDate)&&(o.value.endDate=null)});let s=S([]);function I(){switch(c.value=!1,o.value.groupName||(o.value.organizationTypeId=null),o.value.groupName){case d.organizationGroupType.notApplicable:case d.organizationGroupType.folder:s.value=[{label:b.enums.objectType[1],value:1}],o.value.organizationTypeId=1,c.value=!0;break;case d.organizationGroupType.regionalPublicAdministration:s.value=m.organizationRegionalPublicAdministrationTypeList;break;case d.organizationGroupType.localAuthorities:s.value=m.organizationLocalAuthoritiesTypeList;break;case d.organizationGroupType.legislativeAssembly:s.value=m.organizationLegislativeAssemblyTypeList;break;case d.organizationGroupType.regionalPublicBusinessSector:s.value=m.organizationRegionalPublicBusinessSectorTypeList;break}}O(()=>l.modelValue.recordStateTypeId);const v=O(()=>l.selectedLang===d.language.en);return(f,a)=>{const V=p("form-field"),E=p("row"),N=p("accordion");return k(),A(N,{id:"base-information",title:f._lang.common.baseInformation,collapsed:e(t),class:"mb-4"},{default:_(()=>[n(E,null,{default:_(()=>[n(V,{id:"code",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(o).code,"onUpdate:modelValue":a[0]||(a[0]=g=>e(o).code=g),label:f._lang.label.entityCode,disabled:!0,loading:l.loading,type:e(d).inputs.text,maxlength:45,required:l.validateForm,showError:l.validateForm&&e(i).code.$error,"error-message":f._errorMessageField(e(i).code)},null,8,["modelValue","label","loading","type","required","showError","error-message"]),n(V,{id:"state",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:f._lang.enums.recordStateType[e(o).recordStateTypeId],"onUpdate:modelValue":a[1]||(a[1]=g=>f._lang.enums.recordStateType[e(o).recordStateTypeId]=g),label:f._lang.label.state,disabled:!0,loading:l.loading,type:e(d).inputs.text},null,8,["modelValue","label","loading","type"]),n(V,{id:"nipc",class:"mb-3 col-12 col-lg-4",modelValue:e(o).nipc,"onUpdate:modelValue":a[2]||(a[2]=g=>e(o).nipc=g),label:f._lang.label.nipc,disabled:l.disabled||e(v),loading:l.loading,type:e(d).inputs.text,maxlength:9,required:l.validateForm,placeholder:"ex: 123456789",showError:l.validateForm&&e(i).nipc.$error,"error-message":f._errorMessageField(e(i).nipc)},null,8,["modelValue","label","disabled","loading","type","required","showError","error-message"])]),_:1}),n(E,null,{default:_(()=>[n(V,{id:"groupName",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(o).groupName,"onUpdate:modelValue":a[3]||(a[3]=g=>e(o).groupName=g),label:f._lang.label.groupName,disabled:l.disabled||e(v),loading:l.loading,type:e(d).inputs.multiselect,options:e(C),required:l.validateForm,showError:l.validateForm&&e(i).groupName.$error,"error-message":f._errorMessageField(e(i).groupName)},null,8,["modelValue","label","disabled","loading","type","options","required","showError","error-message"]),n(V,{id:"organizationTypeId",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(o).organizationTypeId,"onUpdate:modelValue":a[4]||(a[4]=g=>e(o).organizationTypeId=g),label:f._lang.label.organizationTypeId,disabled:l.disabled||!e(o).groupName||e(v)||e(c),loading:l.loading,type:e(d).inputs.multiselect,options:e(s),required:l.validateForm,showError:l.validateForm&&e(i).organizationTypeId.$error,"error-message":f._errorMessageField(e(i).organizationTypeId)},null,8,["modelValue","label","disabled","loading","type","options","required","showError","error-message"]),n(V,{id:"abreviation",class:"mb-3 col-12 col-lg-4",modelValue:e(T),"onUpdate:modelValue":a[5]||(a[5]=g=>L(T)?T.value=g:null),label:f._lang.label.abreviation,disabled:l.disabled,loading:l.loading,type:e(d).inputs.text,maxlength:45,language:e(z)},null,8,["modelValue","label","disabled","loading","type","language"])]),_:1}),n(E,null,{default:_(()=>[n(V,{id:"name",class:"mb-3 col-12",modelValue:e(F),"onUpdate:modelValue":a[6]||(a[6]=g=>L(F)?F.value=g:null),label:f._lang.label.name,disabled:l.disabled,loading:l.loading,type:e(d).inputs.text,maxlength:255,required:l.validateForm,showError:l.validateForm&&f._showErrorFieldWhenTexts(e(i).texts,"name"),"error-message":f._errorMessageFieldWhenTexts(e(i).texts,"name"),language:e(z)},null,8,["modelValue","label","disabled","loading","type","required","showError","error-message","language"])]),_:1}),n(E,null,{default:_(()=>[n(V,{id:"parentOrganization",class:"mb-3 col-12 col-lg-4",modelValue:e(o).parentOrganization,"onUpdate:modelValue":a[7]||(a[7]=g=>e(o).parentOrganization=g),label:f._lang.label.parentOrganization,disabled:l.disabled||e(v),loading:l.loading,type:e(d).inputs.multiselect,required:l.validateForm,placeholder:f._lang.common.selectOption,showError:l.validateForm&&e(i).parentOrganization.$error,"error-message":f._errorMessageField(e(i).parentOrganization),options:e(m).organizationList,valueProp:e(d).multiselectValueProp.value3},null,8,["modelValue","label","disabled","loading","type","required","placeholder","showError","error-message","options","valueProp"]),n(V,{id:"startDate",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(o).startDate,"onUpdate:modelValue":a[8]||(a[8]=g=>e(o).startDate=g),label:f._lang.label.startDate,disabled:l.disabled||e(v),loading:l.loading,type:e(d).inputs.datepicker,required:l.validateForm,placeholder:"dd/mm/aaaa",showError:l.validateForm&&e(i).startDate.$error,"error-message":f._errorMessageField(e(i).startDate)},null,8,["modelValue","label","disabled","loading","type","required","showError","error-message"]),n(V,{id:"endDate",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:e(o).endDate,"onUpdate:modelValue":a[9]||(a[9]=g=>e(o).endDate=g),label:f._lang.label.endDate,disabled:l.disabled||e(v),loading:l.loading,type:e(d).inputs.datepicker,placeholder:"dd/mm/aaaa",minDate:e(o).startDate},null,8,["modelValue","label","disabled","loading","type","minDate"]),H(n(V,{id:"organizationPublic",class:"mb-3 col-12 col-lg-4",modelValue:e(o).organizationPublic,"onUpdate:modelValue":a[10]||(a[10]=g=>e(o).organizationPublic=g),label:f._lang.label.public,disabled:l.disabled||e(v),loading:l.loading,type:e(d).inputs.checkbox},null,8,["modelValue","label","disabled","loading","type"]),[[W,l.canCreate]]),H(n(V,{id:"canHavePointsOfCare'.",class:"mb-3 col-12 col-lg-4",modelValue:e(o).canHavePointsOfCare,"onUpdate:modelValue":a[11]||(a[11]=g=>e(o).canHavePointsOfCare=g),label:f._lang.label.canHavePointsOfCare,disabled:l.disabled||e(v),loading:l.loading,type:e(d).inputs.checkbox},null,8,["modelValue","label","disabled","loading","type"]),[[W,l.canCreate]]),H(n(V,{id:"canHaveServices",class:"mb-3 col-12 col-lg-4",modelValue:e(o).canHaveServices,"onUpdate:modelValue":a[12]||(a[12]=g=>e(o).canHaveServices=g),label:f._lang.label.canHaveServices,disabled:l.disabled||e(v),loading:l.loading,type:e(d).inputs.checkbox},null,8,["modelValue","label","disabled","loading","type"]),[[W,l.canCreate]])]),_:1})]),_:1},8,["title","collapsed"])}}},Se={__name:"description",props:{modelValue:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},selectedLang:{type:[String,Number],required:!0},validateForm:{type:Boolean,default:!1},rules:{type:Object,default:{}},canCreate:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(y,{emit:r}){const l=y,m=j(),b=ee(l.rules,l.modelValue),i=O({get(){return l.modelValue},set(s){r("update:modelValue",s)}}),t=O(()=>l.selectedLang),c=O({get(){return B.getFieldByLangAndName(i.value,t.value,"description")},set(s){B.setFieldByLangAndName(i.value,t.value,"description",s)}}),o=O({get(){return B.getFieldByLangAndName(i.value,t.value,"legislation")},set(s){B.setFieldByLangAndName(i.value,t.value,"legislation",s)}}),C=O({get(){return B.getFieldByLangAndName(i.value,t.value,"mission")},set(s){B.setFieldByLangAndName(i.value,t.value,"mission",s)}}),z=O({get(){return B.getFieldByLangAndName(i.value,t.value,"managerRoleDescription")},set(s){B.setFieldByLangAndName(i.value,t.value,"managerRoleDescription",s)}}),T=O({get(){return B.getFieldByLangAndName(i.value,t.value,"keywords")},set(s){B.setFieldByLangAndName(i.value,t.value,"keywords",s)}}),F=O(()=>l.selectedLang===d.language.en);return(s,I)=>{const v=p("form-field"),f=p("accordion");return k(),A(f,{id:"description",title:s._lang.common.description,collapsed:!1,class:"mb-4"},{default:_(()=>[n(v,{id:"economicActivityId",class:"mb-3 col-12",modelValue:e(i).economicActivityId,"onUpdate:modelValue":I[0]||(I[0]=a=>e(i).economicActivityId=a),label:s._lang.label.economicActivityId,disabled:l.disabled||e(F),loading:l.loading,type:e(d).inputs.multiselect,options:e(m).economicActivityList,required:l.validateForm,showError:l.validateForm&&e(b).economicActivityId.$error,"error-message":s._errorMessageField(e(b).economicActivityId)},null,8,["modelValue","label","disabled","loading","type","options","required","showError","error-message"]),n(v,{id:"description",class:"mb-3 col-12",modelValue:e(c),"onUpdate:modelValue":I[1]||(I[1]=a=>L(c)?c.value=a:null),label:s._lang.label.description,disabled:l.disabled,loading:l.loading,type:e(d).inputs.text,maxlength:255,language:e(t)},null,8,["modelValue","label","disabled","loading","type","language"]),n(v,{id:"legislation",class:"mb-3 col-12",modelValue:e(o),"onUpdate:modelValue":I[2]||(I[2]=a=>L(o)?o.value=a:null),label:s._lang.label.legislation,disabled:l.disabled,loading:l.loading,type:e(d).inputs.text,maxlength:255,language:e(t)},null,8,["modelValue","label","disabled","loading","type","language"]),n(v,{id:"mission",class:"mb-3 col-12",modelValue:e(C),"onUpdate:modelValue":I[3]||(I[3]=a=>L(C)?C.value=a:null),label:s._lang.label.mission,disabled:l.disabled,loading:l.loading,type:e(d).inputs.text,maxlength:255,language:e(t)},null,8,["modelValue","label","disabled","loading","type","language"]),n(v,{id:"managerRoleDescription",class:"mb-3 col-12",modelValue:e(z),"onUpdate:modelValue":I[4]||(I[4]=a=>L(z)?z.value=a:null),label:s._lang.label.managerRoleDescription,disabled:l.disabled,loading:l.loading,type:e(d).inputs.text,maxlength:255,language:e(t)},null,8,["modelValue","label","disabled","loading","type","language"]),n(v,{id:"keyWords",class:"mb-3 col-12",modelValue:e(T),"onUpdate:modelValue":I[5]||(I[5]=a=>L(T)?T.value=a:null),label:s._lang.label.keyWords,disabled:l.disabled,loading:l.loading,type:e(d).inputs.text,maxlength:255,language:e(t)},null,8,["modelValue","label","disabled","loading","type","language"]),n(v,{id:"logo",class:"mb-3 col-12",modelValue:e(i).icon,"onUpdate:modelValue":I[6]||(I[6]=a=>e(i).icon=a),label:s._lang.label.logo,disabled:l.disabled,loading:l.loading,type:e(d).inputs.file,required:!1,showPreview:!0,accept:".jpeg,.svg,.jpg"},null,8,["modelValue","label","disabled","loading","type"])]),_:1},8,["title"])}}},ke={__name:"territorial-scope",props:{modelValue:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},validateForm:{type:Boolean,default:!1},canCreate:{type:Boolean,default:!1},rules:{type:Object,default:{}}},emits:["update:modelValue"],setup(y,{emit:r}){const l=y,m=ee(l.rules,l.modelValue),b=j(),i=$(),t=O({get(){return l.modelValue},set(z){r("update:modelValue",z)}});let c=S([]),o=S(!1);G(()=>t.value.divisionTypeId,()=>{C()});function C(){(!t.value.divisionTypeId||o.value)&&(t.value.divisionId=null),t.value.divisionTypeId===d.divisionType.notApplicable?(t.value.divisionId=d.divisionType.notApplicable,c.value=[{label:i.enums.objectType[d.divisionType.notApplicable],value:d.divisionType.notApplicable}]):t.value.divisionTypeId===d.divisionType.island?c.value=b.divisionIslandList:t.value.divisionTypeId===d.divisionType.county?c.value=b.divisionCountyList:t.value.divisionTypeId===d.divisionType.parish&&(c.value=b.divisionParishList),o.value=!0}return(z,T)=>{const F=p("form-field"),s=p("row"),I=p("accordion");return k(),A(I,{id:"territorial-scope",title:z._lang.backoffice.entities.territorialScope,collapsed:!1,class:"mb-4"},{default:_(()=>[n(s,null,{default:_(()=>[n(F,{id:"divisionTypeId",class:"mb-3 col-12 col-md-6",modelValue:e(t).divisionTypeId,"onUpdate:modelValue":T[0]||(T[0]=v=>e(t).divisionTypeId=v),label:z._lang.label.divisionTypeId,disabled:l.disabled,loading:l.loading,type:e(d).inputs.multiselect,required:l.validateForm,showError:l.validateForm&&e(m).divisionTypeId.$error,"error-message":z._errorMessageField(e(m).divisionTypeId),options:e(b).divisionTypeList},null,8,["modelValue","label","disabled","loading","type","required","showError","error-message","options"]),n(F,{id:"divisionId",class:"mb-3 col-12 col-md-6",modelValue:e(t).divisionId,"onUpdate:modelValue":T[1]||(T[1]=v=>e(t).divisionId=v),label:z._lang.label.divisionId,disabled:l.disabled||e(t).divisionTypeId===e(d).notApplicable,loading:l.loading,type:e(d).inputs.multiselect,required:l.validateForm,showError:l.validateForm&&e(m).divisionId.$error,"error-message":z._errorMessageField(e(m).divisionId),options:e(c)},null,8,["modelValue","label","disabled","loading","type","required","showError","error-message","options"])]),_:1})]),_:1},8,["title"])}}};const Ee={key:0,class:"input-group mb-3"},Oe=["aria-describedby"],Ae=["id","disabled"],Be={__name:"address",props:{modelValue:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},validateForm:{type:Boolean,default:!1},rules:{type:Object,default:{}},vuelidate:{type:Object,default:null},canCreate:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(y,{emit:r}){const l=y,m=j(),b=u.uuid();let i=S(0),t=S(0),c=S(null);const o=S(!1);S(!1);const C=O({get(){return l.modelValue},set(s){r("update:modelValue",s)}}),z="search-location";function T(s){Object.assign(C.value.address,s),i.value++,c.value.updateMap()}function F(){t.value++,window.setTimeout(function(){u.showModalById(z)},5)}return G(C.value,s=>{s.address.locationId!=null&&(o.value?(s.address.locationId=null,s.address.code=null,o.value=!1):o.value=!0)}),(s,I)=>{const v=p("icon-search"),f=p("accordion");return k(),Q(le,null,[n(f,{id:"address-accordion",title:s._lang.backoffice.entities.address,collapsed:!1,class:"mb-4"},{default:_(()=>[l.canCreate?(k(),Q("div",Ee,[H(oe("input",{ref:"locationQuery",id:"location-query",type:"text",class:"form-control",placeholder:"Código do património","aria-label":"placeholder","aria-describedby":e(b),disabled:"","onUpdate:modelValue":I[0]||(I[0]=a=>e(C).address.code=a)},null,8,Oe),[[pe,e(C).address.code]]),oe("button",{class:"btn btn-primary",type:"button",id:e(b),disabled:l.disabled,onClick:F},[n(v,{color:"#FFF"})],8,Ae)])):h("",!0),(k(),A(ve,{key:e(i),ref_key:"addressRef",ref:c,modelValue:e(C).address,"onUpdate:modelValue":I[1]||(I[1]=a=>e(C).address=a),disabled:l.disabled,rules:l.rules,loading:l.loading,"validate-form":l.validateForm,store:e(m),vuelidate:l.vuelidate},null,8,["modelValue","disabled","rules","loading","validate-form","store","vuelidate"]))]),_:1},8,["title"]),(k(),A(se,{key:e(t),onApply:T}))],64)}}},we=me(Be,[["__scopeId","data-v-939c5a41"]]),Ne={__name:"create",props:{modelValue:{type:Array,required:!0}},emits:["update:modelValue"],setup(y,{emit:r}){const l=y,m=j(),b=$();ge();const i="create-related-entity";let t=K(z()),c=S(!1);const o=ee(de.organizationRelatedFormRules(),t,{$scope:!1}),C=O({get(){return l.modelValue},set(s){r("update:modelValue",s)}});function z(){return{organizationId:null,organizationRelatedTypeId:null}}function T(){t=Object.assign(t,z()),o.value.$reset()}async function F(){if(c.value=!0,await o.value.$validate(),!o.value.$error){const s={organizationId:t.organizationId,organizationName:B.getLabel(m.organizationList,t.organizationId),organizationRelatedTypeId:t.organizationRelatedTypeId,organizationRelatedTypeName:B.getLabel(m.organizationRelatedTypeList,t.organizationRelatedTypeId)};C.value.find(v=>v.organizationId===t.organizationId&&v.organizationRelatedTypeId===t.organizationRelatedTypeId)?ae.warning(b.backoffice.entities.relatedOrganizationExists):(C.value.push(s),t=Object.assign(t,z()),o.value.$reset(),u.closeModalById(i),ae.success(b.backoffice.entities.relatedOrganizationAdded))}c.value=!1}return(s,I)=>{const v=p("form-field"),f=p("row"),a=p("cbutton"),V=p("modal");return k(),A(V,{id:i,title:s._lang.backoffice.entities.addRelatedOrganizations,size:e(d).modalSize.extraLarge},{body:_(()=>[n(f,null,{default:_(()=>[n(v,{id:"name",class:"mb-3 mb-lg-0 col-12 col-md-12 col-lg-6",modelValue:e(t).organizationId,"onUpdate:modelValue":I[0]||(I[0]=E=>e(t).organizationId=E),label:s._lang.label.organization,loading:e(c),type:e(d).inputs.multiselect,required:!0,"show-error":e(o).organizationId.$error,"error-message":s._errorMessageField(e(o).organizationId),options:e(m).organizationList,valueProp:e(d).multiselectValueProp.value3},null,8,["modelValue","label","loading","type","show-error","error-message","options","valueProp"]),n(v,{id:"relationshipType",class:"mb-3 mb-lg-0 col-12 col-md-12 col-lg-6",modelValue:e(t).organizationRelatedTypeId,"onUpdate:modelValue":I[1]||(I[1]=E=>e(t).organizationRelatedTypeId=E),label:s._lang.label.relationshipType,loading:e(c),type:e(d).inputs.multiselect,required:!0,"show-error":e(o).organizationRelatedTypeId.$error,"error-message":s._errorMessageField(e(o).organizationRelatedTypeId),options:e(m).organizationRelatedTypeList},null,8,["modelValue","label","loading","type","show-error","error-message","options"])]),_:1})]),footer:_(()=>[n(a,{title:s._lang.common.cancel,type:e(d).buttonType.secondary,"data-bs-dismiss":"modal","aria-label":"Close",disabled:e(c),onClick:T},null,8,["title","type","disabled"]),n(a,{title:s._lang.common.save,onClick:F,disabled:e(c)},null,8,["title","disabled"])]),_:1},8,["title","size"])}}},Le={__name:"related-entities",props:{modelValue:{type:Array,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},rules:{type:Object,default:{}},validateForm:{type:Boolean,default:!1},canCreate:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(y,{emit:r}){const l=y,m=$();let b=S(!1);const i=O(()=>u.createEmptyDataSource(c.value)),t="confirm-delete",c=O({get(){return l.modelValue},set(F){r("update:modelValue",F)}});let o=S(null);function C(F){o.value=F}function z(){o.value&&(u.removeItemOfArray(c.value,o),ae.success(m.backoffice.entities.organizationRelatedRemoved),o.value=null)}function T(F){u.sortArrayOffline(F,i.value.items)}return(F,s)=>{const I=p("table-actions"),v=p("ccolumn"),f=p("table-action-delete"),a=p("ctable"),V=p("confirm-delete-modal");return k(),Q(le,null,[n(fe,{id:"related-entities",title:F._lang.backoffice.entities.relatedEntities,collapsed:!1,class:"mb-4"},{default:_(()=>[H(n(I,null,{default:_(()=>[n(be,{target:"create-related-entity",class:"d-inline",type:e(d).buttonType.secondary,title:F._lang.common.toAdd,disabled:l.disabled,icon:Y},null,8,["type","title","disabled"])]),_:1},512),[[W,l.canCreate]]),n(a,{data:e(i),loading:e(b),checkbox:!1,showPagination:!1,onSort:T},{columns:_(()=>[n(v,{name:F._lang.common.organization,fieldSort:"organizationId",field:"organizationName",sortable:!0},null,8,["name"]),n(v,{name:F._lang.backoffice.entities.relationshipType,field:"organizationRelatedTypeName",fieldSort:"organizationRelatedTypeId",sortable:!0},null,8,["name"])]),actions:_(E=>[n(f,{id:t,onClick:N=>C(E.item),disabled:l.disabled},null,8,["onClick","disabled"])]),_:1},8,["data","loading"])]),_:1},8,["title"]),n(Ne,{modelValue:e(c),"onUpdate:modelValue":s[0]||(s[0]=E=>L(c)?c.value=E:null)},null,8,["modelValue"]),n(V,{id:t,title:F._lang.backoffice.entities.deleteOrganizationRelated,message:F._lang.backoffice.entities.deleteOrganizationRelatedQuestion,action:z},null,8,["title","message"])],64)}}},he={__name:"general",props:{modelValue:{type:Object,required:!0},selectedLang:_e,disabled:{Boolean,default:!0},rules:{Boolean,default:!0},validateForm:{Boolean,default:!1},canCreate:{Boolean,default:!1},loading:{Object,default:{}},vuelidate:{Object,default:null}},setup(y){const r=y,l=j(),m=O({get(){return r.modelValue},set(t){emit("update:modelValue",t)}}),b=O(()=>r.selectedLang),i=O(()=>r.selectedLang===d.language.en);return(t,c)=>(k(),Q(le,null,[n(ye,{modelValue:e(m),"onUpdate:modelValue":c[0]||(c[0]=o=>L(m)?m.value=o:null),store:e(l)},null,8,["modelValue","store"]),n(e(Fe),{modelValue:e(m),"onUpdate:modelValue":c[1]||(c[1]=o=>L(m)?m.value=o:null),disabled:r.disabled,loading:y.loading,selectedLang:e(b),validateForm:r.validateForm,rules:r.rules,canCreate:r.canCreate},null,8,["modelValue","disabled","loading","selectedLang","validateForm","rules","canCreate"]),n(e(Se),{modelValue:e(m),"onUpdate:modelValue":c[2]||(c[2]=o=>L(m)?m.value=o:null),disabled:r.disabled,loading:y.loading,selectedLang:e(b),validateForm:r.validateForm,rules:r.rules,canCreate:r.canCreate},null,8,["modelValue","disabled","loading","selectedLang","validateForm","rules","canCreate"]),n(e(ke),{modelValue:e(m),"onUpdate:modelValue":c[3]||(c[3]=o=>L(m)?m.value=o:null),disabled:r.disabled||e(i),loading:y.loading,validateForm:r.validateForm,rules:r.rules,selectedLang:e(b),canCreate:r.canCreate},null,8,["modelValue","disabled","loading","validateForm","rules","selectedLang","canCreate"]),n(e(we),{modelValue:e(m),"onUpdate:modelValue":c[4]||(c[4]=o=>L(m)?m.value=o:null),disabled:r.disabled||e(i),loading:y.loading,rules:r.rules,validateForm:r.validateForm,vuelidate:r.vuelidate,canCreate:r.canCreate},null,8,["modelValue","disabled","loading","rules","validateForm","vuelidate","canCreate"]),n(e(ce),{modelValue:e(m).contacts,"onUpdate:modelValue":c[5]||(c[5]=o=>e(m).contacts=o),disabled:r.disabled||e(i),modal:ue,store:e(l),loading:y.loading,canCreate:r.canCreate},null,8,["modelValue","disabled","store","loading","canCreate"]),n(e(Le),{modelValue:e(m).organizationRelated,"onUpdate:modelValue":c[6]||(c[6]=o=>e(m).organizationRelated=o),disabled:r.disabled||e(i),loading:y.loading,canCreate:r.canCreate},null,8,["modelValue","disabled","loading","canCreate"]),n(e(Ie),{modelValue:e(m),"onUpdate:modelValue":c[7]||(c[7]=o=>L(m)?m.value=o:null),disabled:r.disabled,loading:y.loading,selectedLang:e(b),rules:r.rules.baseInformations,canCreate:r.canCreate},null,8,["modelValue","disabled","loading","selectedLang","rules","canCreate"]),n(Ve,{modelValue:e(m),"onUpdate:modelValue":c[8]||(c[8]=o=>L(m)?m.value=o:null),disabled:r.disabled,loading:y.loading,selectedLang:e(b),canCreate:r.canCreate},null,8,["modelValue","disabled","loading","selectedLang","canCreate"])],64))}},Pe={__name:"points-of-care",props:{organizationId:{type:[Number,String],required:!0},organizationVersion:{type:[Number,String],required:!0},disabled:{Boolean,default:!0}},setup(y){const r=y,l=S(J.havePermission(d.permissions.organization.createEdit));X(async()=>{await T(),C.value=u.convertEnumToArray(m.enums.recordStateType),o.value=u.concatItemsBadge(C.value,B.recordStateTypeBadgeOptions)});const m=$(),b=Z();let i=S(!1),t=K(z()),c=S(u.createEmptyDataSource()),o=S([]),C=S([]);function z(){return{pageNumber:0,sortBy:"Code",code:null,channelTypeIds:null,abreviation:null,name:null,organization:{id:r.organizationId,version:null},organizationHostId:null,recordStateIds:null,active:!0}}async function T(){i.value=!0;let a=await ne.search(t);u.validateResponse(a,null,()=>{c.value=a.data}),i.value=!1}async function F(a){t.sortBy=a,await T()}async function s(a){t.pageNumber=a,await T()}function I(a){b.push({name:P.router.BACKOFFICE_DETAIL_POINT_OF_CARE_PAGE.name,params:{pointOfCareId:u.encodeId(a.pointOfCareId),pointOfCareVersion:u.encodeId(a.pointOfCareVersion)}})}async function v(){i.value=!0;const a={id:r.organizationId,version:r.organizationVersion},V=await ne.create(ze.newForm(a));u.validateResponseAsync(V,null,async()=>{const E=u.encodeId(V.data.pointOfCareId),N=u.encodeId(V.data.pointOfCareVersion);b.push({name:P.router.BACKOFFICE_EDIT_ENTITY_POINT_OF_CARE_PAGE.name,params:{pointOfCareId:E,pointOfCareVersion:N,organizationId:u.encodeId(r.organizationId),organizationVersion:u.encodeId(r.organizationVersion)}})}),i.value=!1}function f(a){b.push({name:P.router.BACKOFFICE_EDIT_ENTITY_POINT_OF_CARE_PAGE.name,params:{pointOfCareId:u.encodeId(a.pointOfCareId),pointOfCareVersion:u.encodeId(a.pointOfCareVersion),organizationId:u.encodeId(r.organizationId),organizationVersion:u.encodeId(r.organizationVersion)}})}return(a,V)=>{const E=p("cbutton"),N=p("table-actions"),g=p("ccolumn"),q=p("table-action-edit"),R=p("table-action-detail"),D=p("ctable"),U=p("container-wrapper");return k(),A(U,null,{default:_(()=>[l.value?(k(),A(N,{key:0},{default:_(()=>[n(E,{class:"col-12 col-sm-auto",type:e(d).buttonType.secondary,size:e(d).buttonSize.medium,title:a._lang.common.toAdd,icon:Y,onClick:v},null,8,["type","size","title"])]),_:1})):h("",!0),n(D,{onSort:F,onChangePage:s,data:e(c),checkbox:!1,loading:e(i),defaultSort:"pointOfCareId"},{columns:_(()=>[n(g,{name:a._lang.label.code,field:"code",sortable:!0},null,8,["name"]),n(g,{name:a._lang.label.channelTypeId,field:"channelType",sortField:"channelTypeId",sortable:!0},null,8,["name"]),n(g,{name:a._lang.label.abreviation,field:"abreviation",sortable:!0},null,8,["name"]),n(g,{name:a._lang.label.name,field:"name",sortable:!0},null,8,["name"]),n(g,{name:a._lang.label.state,field:"recordStateTypeId",sortField:"recordStateTypeId",align:e(d).columnAlign.center,custom:x,options:e(o),sortable:!0},null,8,["name","align","options"])]),actions:_(w=>[w.item.recordStateTypeId==e(d).recordStateType.draft?(k(),A(q,{key:0,onClick:M=>f(w.item)},null,8,["onClick"])):h("",!0),w.item.recordStateTypeId>e(d).recordStateType.draft?(k(),A(R,{key:1,onClick:M=>I(w.item)},null,8,["onClick"])):h("",!0)]),_:1},8,["data","loading"])]),_:1})}}},$e={__name:"services",props:{organizationId:{type:[Number,String],required:!0},organizationVersion:{type:[Number,String],required:!0},disabled:{Boolean,default:!0}},setup(y){const r=y,l=S(J.havePermission(d.permissions.organization.createEdit));X(async()=>{await T(),C.value=u.convertEnumToArray(m.enums.recordStateType),o.value=u.concatItemsBadge(C.value,B.recordStateTypeBadgeOptions)});const m=$(),b=Z();let i=S(!1),t=K(z()),c=S(u.createEmptyDataSource()),o=S([]),C=S([]);function z(){return{pageNumber:0,sortBy:"Code",code:null,channelTypeIds:null,abreviation:null,name:null,organization:{id:r.organizationId,version:null},organizationHostId:null,recordStateIds:null,active:!0}}async function T(){i.value=!0;let a=await te.search(t);u.validateResponse(a,null,()=>{c.value=a.data}),i.value=!1}async function F(a){t.sortBy=a,await T()}async function s(a){t.pageNumber=a,await T()}function I(a){b.push({name:P.router.BACKOFFICE_DETAIL_SERVICE_PAGE.name,params:{serviceId:u.encodeId(a.serviceId),serviceVersion:u.encodeId(a.serviceVersion)}})}async function v(){i.value=!0;const a={id:r.organizationId,version:r.organizationVersion},V=await te.create(Te.newForm(a));u.validateResponseAsync(V,null,async()=>{const E=u.encodeId(V.data.serviceId),N=u.encodeId(V.data.serviceVersion);b.push({name:P.router.BACKOFFICE_EDIT_ENTITY_SERVICE_PAGE.name,params:{serviceId:E,serviceVersion:N,organizationId:u.encodeId(r.organizationId),organizationVersion:u.encodeId(r.organizationVersion)}})}),i.value=!1}function f(a){b.push({name:P.router.BACKOFFICE_EDIT_ENTITY_SERVICE_PAGE.name,params:{serviceId:u.encodeId(a.serviceId),serviceVersion:u.encodeId(a.serviceVersion),organizationId:u.encodeId(r.organizationId),organizationVersion:u.encodeId(r.organizationVersion)}})}return(a,V)=>{const E=p("cbutton"),N=p("table-actions"),g=p("ccolumn"),q=p("table-action-edit"),R=p("table-action-detail"),D=p("ctable"),U=p("container-wrapper");return k(),A(U,null,{default:_(()=>[l.value?(k(),A(N,{key:0},{default:_(()=>[n(E,{class:"col-12 col-sm-auto",type:e(d).buttonType.secondary,size:e(d).buttonSize.medium,title:a._lang.common.toAdd,icon:Y,onClick:v},null,8,["type","size","title"])]),_:1})):h("",!0),n(D,{onSort:F,onChangePage:s,data:e(c),checkbox:!1,loading:e(i),defaultSort:"code"},{columns:_(()=>[n(g,{name:a._lang.label.code,field:"code",sortable:!0},null,8,["name"]),n(g,{name:a._lang.label.serviceTypeId,field:"serviceType",sortField:"serviceTypeId",sortable:!0},null,8,["name"]),n(g,{name:a._lang.label.abreviation,field:"abreviation",sortable:!0},null,8,["name"]),n(g,{name:a._lang.label.name,field:"name",sortable:!0},null,8,["name"]),n(g,{name:a._lang.label.state,field:"recordStateTypeId",align:e(d).columnAlign.center,custom:x,options:e(o),sortable:!0},null,8,["name","align","options"])]),actions:_(w=>[w.item.recordStateTypeId==e(d).recordStateType.draft?(k(),A(q,{key:0,onClick:M=>f(w.item)},null,8,["onClick"])):h("",!0),w.item.recordStateTypeId>e(d).recordStateType.draft?(k(),A(R,{key:1,onClick:M=>I(w.item)},null,8,["onClick"])):h("",!0)]),_:1},8,["data","loading"])]),_:1})}}},qe={__name:"documents",props:{organizationId:{type:[Number,String],required:!0},organizationVersion:{type:[Number,String],required:!0},disabled:{Boolean,default:!0}},setup(y){const r=y,l=S(J.havePermission(d.permissions.organization.createEdit));X(async()=>{await T(),C.value=u.convertEnumToArray(m.enums.recordStateType),o.value=u.concatItemsBadge(C.value,B.recordStateTypeBadgeOptions)});const m=$(),b=Z();let i=S(!1),t=K(z()),c=S(u.createEmptyDataSource()),o=S([]),C=S([]);function z(){return{pageNumber:0,sortBy:"Code",code:null,documentTypeIds:null,abreviation:null,name:null,recordStateIds:null,active:!0,organization:{id:r.organizationId,version:null}}}async function T(){i.value=!0;let a=await ie.search(t);u.validateResponse(a,null,()=>{c.value=a.data}),i.value=!1}async function F(a){t.sortBy=a,await T()}async function s(a){t.pageNumber=a,await T()}function I(a){b.push({name:P.router.BACKOFFICE_DETAIL_DOCUMENT_PAGE.name,params:{documentId:u.encodeId(a.documentId),documentVersion:u.encodeId(a.documentVersion)}})}async function v(){i.value=!0;const a={id:r.organizationId,version:r.organizationVersion},V=await ie.create(Ce.newForm(a));u.validateResponseAsync(V,null,async()=>{const E=u.encodeId(V.data.documentId),N=u.encodeId(V.data.documentVersion);b.push({name:P.router.BACKOFFICE_EDIT_ENTITY_DOCUMENT_PAGE.name,params:{documentId:E,documentVersion:N,organizationId:u.encodeId(r.organizationId),organizationVersion:u.encodeId(r.organizationVersion)}})}),i.value=!1}function f(a){b.push({name:P.router.BACKOFFICE_EDIT_ENTITY_DOCUMENT_PAGE.name,params:{documentId:u.encodeId(a.documentId),documentVersion:u.encodeId(a.documentVersion),organizationId:u.encodeId(r.organizationId),organizationVersion:u.encodeId(r.organizationVersion)}})}return(a,V)=>{const E=p("cbutton"),N=p("table-actions"),g=p("ccolumn"),q=p("table-action-edit"),R=p("table-action-detail"),D=p("ctable"),U=p("container-wrapper");return k(),A(U,null,{default:_(()=>[l.value?(k(),A(N,{key:0},{default:_(()=>[n(E,{class:"col-12 col-sm-auto",type:e(d).buttonType.secondary,size:e(d).buttonSize.medium,title:a._lang.common.toAdd,icon:Y,onClick:v},null,8,["type","size","title"])]),_:1})):h("",!0),n(D,{onSort:F,onChangePage:s,data:e(c),checkbox:!1,loading:e(i),defaultSort:"code"},{columns:_(()=>[n(g,{name:a._lang.label.code,field:"code",sortable:!0},null,8,["name"]),n(g,{name:a._lang.label.documentTypeId,field:"documentType",sortField:"documentTypeId",sortable:!0},null,8,["name"]),n(g,{name:a._lang.label.abreviation,field:"abreviation",sortable:!0},null,8,["name"]),n(g,{name:a._lang.label.name,field:"name",sortable:!0},null,8,["name"]),n(g,{name:a._lang.label.state,field:"recordStateTypeId",align:e(d).columnAlign.center,custom:x,options:e(o),sortable:!0},null,8,["name","align","options"])]),actions:_(w=>[w.item.recordStateTypeId==e(d).recordStateType.draft?(k(),A(q,{key:0,onClick:M=>f(w.item)},null,8,["onClick"])):h("",!0),w.item.recordStateTypeId>e(d).recordStateType.draft?(k(),A(R,{key:1,onClick:M=>I(w.item)},null,8,["onClick"])):h("",!0)]),_:1},8,["data","loading"])]),_:1})}}},Re={__name:"sub-entities",props:{organizationId:{type:[Number,String],required:!0},organizationVersion:{type:[Number,String],required:!0},disabled:{Boolean,default:!0}},setup(y){const r=y,l=S(J.havePermission(d.permissions.organization.createEdit));X(async()=>{await T(),C.value=u.convertEnumToArray(m.enums.recordStateType),o.value=u.concatItemsBadge(C.value,B.recordStateTypeBadgeOptions)});const m=$(),b=Z();let i=S(!1),t=K(z()),c=S(u.createEmptyDataSource()),o=S([]),C=S([]);function z(){return{pageNumber:0,sortBy:"Code",parentOrganization:{id:r.organizationId,version:null},active:!0}}async function T(){i.value=!0;let a=await re.search(t);u.validateResponse(a,null,()=>{c.value=a.data}),i.value=!1}async function F(a){t.sortBy=a,await T()}async function s(a){t.pageNumber=a,await T()}function I(a){b.push({name:P.router.BACKOFFICE_DETAIL_ENTITY_PAGE.name,params:{organizationId:u.encodeId(a.organizationId),organizationVersion:u.encodeId(a.organizationVersion)}})}async function v(){i.value=!0;const a={id:r.organizationId,version:r.organizationVersion},V=await re.create(de.newForm(a));u.validateResponseAsync(V,null,async()=>{b.push({name:P.router.BACKOFFICE_EDIT_ENTITY_PAGE.name,params:{organizationId:u.encodeId(V.data.organizationId),organizationVersion:u.encodeId(V.data.organizationVersion)}})}),i.value=!1}function f(a){b.push({name:P.router.BACKOFFICE_EDIT_ENTITY_PAGE.name,params:{organizationId:u.encodeId(a.organizationId),organizationVersion:u.encodeId(a.organizationVersion)}})}return(a,V)=>{const E=p("cbutton"),N=p("table-actions"),g=p("ccolumn"),q=p("table-action-edit"),R=p("table-action-detail"),D=p("ctable"),U=p("container-wrapper");return k(),A(U,null,{default:_(()=>[l.value?(k(),A(N,{key:0},{default:_(()=>[n(E,{class:"col-12 col-sm-auto",type:e(d).buttonType.secondary,size:e(d).buttonSize.medium,title:a._lang.common.toAdd,icon:Y,onClick:v},null,8,["type","size","title"])]),_:1})):h("",!0),n(D,{onSort:F,onChangePage:s,data:e(c),checkbox:!1,loading:e(i),defaultSort:"code"},{columns:_(()=>[n(g,{name:a._lang.label.code,field:"code",sortable:!0},null,8,["name"]),n(g,{name:a._lang.label.organizationTypeId,field:"organizationType",sortField:"organizationTypeId",sortable:!0},null,8,["name"]),n(g,{name:a._lang.label.abreviation,field:"abreviation",sortable:!0},null,8,["name"]),n(g,{name:a._lang.common.name,field:"name",sortable:!0},null,8,["name"]),n(g,{name:a._lang.label.parentOrganization,field:"organizationParent",sortField:"organizationParentId",sortable:!0},null,8,["name"]),n(g,{name:a._lang.common.state,field:"recordStateTypeId",align:e(d).columnAlign.center,custom:x,options:e(o),sortable:!0},null,8,["name","align","options"])]),actions:_(w=>[w.item.recordStateTypeId==e(d).recordStateType.draft?(k(),A(q,{key:0,onClick:M=>f(w.item)},null,8,["onClick"])):h("",!0),w.item.recordStateTypeId>e(d).recordStateType.draft?(k(),A(R,{key:1,onClick:M=>I(w.item)},null,8,["onClick"])):h("",!0)]),_:1},8,["data","loading"])]),_:1})}}},oa={__name:"form",props:{formModel:{Object,required:!0},selectedLang:{type:[Number,String],required:!0},loading:{type:Boolean,required:!0},disabled:{type:Boolean,required:!0},validateForm:{type:Boolean,required:!0},rules:{type:Object,required:!0},organizationId:{type:[Number,String],required:!0},organizationVersion:{type:[Number,String],required:!0},progressValue:{type:[Number],required:!1},showProgress:{type:Boolean,default:!0},canCreate:{type:Boolean,default:!1},vuelidate:{Object,default:null}},emits:["update:formModel"],setup(y,{emit:r}){const l=y,m=O({get(){return l.formModel},set(b){r("update:formModel",b)}});return(b,i)=>{const t=p("progress-bar"),c=p("container-wrapper"),o=p("tab-content"),C=p("tabs");return k(),A(C,null,{default:_(()=>[n(o,{id:"general",title:b._lang.common.general,active:!0},{default:_(()=>[n(c,{"margin-top":!1},{default:_(()=>[l.showProgress?(k(),A(t,{key:0,value:l.progressValue,label:b._lang.common.fill,class:"mb-4 col-12 float-end"},null,8,["value","label"])):h("",!0)]),_:1}),n(he,{modelValue:e(m),"onUpdate:modelValue":i[0]||(i[0]=z=>L(m)?m.value=z:null),disabled:l.disabled,loading:l.loading,selectedLang:l.selectedLang,validateForm:l.validateForm,rules:l.rules,vuelidate:l.vuelidate,canCreate:l.canCreate},null,8,["modelValue","disabled","loading","selectedLang","validateForm","rules","vuelidate","canCreate"])]),_:1},8,["title"]),n(o,{id:"pontosatendimento",title:b._lang.backoffice.menu.servicePoints,active:!1,disabled:!1},{default:_(()=>[n(Pe,{organizationId:y.organizationId,organizationVersion:y.organizationVersion,disabled:l.disabled},null,8,["organizationId","organizationVersion","disabled"])]),_:1},8,["title"]),n(o,{id:"servicos",title:b._lang.backoffice.menu.services,active:!1,disabled:!1},{default:_(()=>[n($e,{organizationId:y.organizationId,organizationVersion:y.organizationVersion,disabled:l.disabled},null,8,["organizationId","organizationVersion","disabled"])]),_:1},8,["title"]),n(o,{id:"documentos",title:b._lang.backoffice.menu.documents,active:!1,disabled:!1},{default:_(()=>[n(qe,{organizationId:y.organizationId,organizationVersion:y.organizationVersion,disabled:l.disabled},null,8,["organizationId","organizationVersion","disabled"])]),_:1},8,["title"]),n(o,{id:"sub-entities",title:b._lang.backoffice.menu.subEntities,active:!1,disabled:!1},{default:_(()=>[n(Re,{organizationId:y.organizationId,organizationVersion:y.organizationVersion,disabled:l.disabled},null,8,["organizationId","organizationVersion","disabled"])]),_:1},8,["title"])]),_:1})}}};export{oa as _};
