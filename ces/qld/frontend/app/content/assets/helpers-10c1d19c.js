import{b as e}from"./helpers-4d6c1969.js";import{h as r}from"./helpers-0cd9b2b2.js";import"./index-a3ba1ed7.js";const t={newForm(l=null){return{serviceId:null,serviceVersion:null,code:null,eventTypeId:1,serviceTypeId:null,serviceCategoryId:null,businessEventId:null,lifeEventId:null,organization:l,economicActivityId:null,startDate:null,endDate:null,texts:[{language:"pt",name:null,description:null,abreviation:null,serviceProcedure:null,keywords:null,versionComments:null},{language:"en",name:null,description:null,abreviation:null,keywords:null,versionComments:null}],serviceRelated:[],recipients:[],serviceRules:[],legislations:[],requirements:[],processingTime:{type:1,years:null,months:null,weeks:null,days:null,hours:null,minutes:null,seconds:null},active:!1,diagram:null,virtual:{isVirtual:!1,url:null,externalSystemId:null,processId:null,canExecutedByThirdParty:null},stateSupport:{isStateSupport:!1,serviceUrl:null,externalSystemId:null,processId:null}}},formRules(){return{serviceTypeId:{required:e.requiredMessage()},serviceCategoryId:{required:e.requiredMessage()},organization:{required:e.requiredMessage()},economicActivityId:{required:e.requiredMessage()},startDate:{required:e.requiredMessage()},texts:{$each:e.forEachField(["name"])},virtualUrl:{required:e.requiredMessageWithDependency("virtual.isVirtual",!1)},stateSupportUrl:{required:e.requiredMessageWithDependency("stateSupport.isStateSupport",!1)}}},recipientFormRules(){return{name:{required:e.requiredMessage()}}},legislationFormRules(){return r.formRules()},legislationNewForm(){return r.newForm()},requirementFormRules(){return{name:{required:e.requiredMessage()}}},progressFields(){return["serviceTypeId","texts.0.name","serviceCategoryId","startDate","organization","economicActivityId"]}};export{t as s};
