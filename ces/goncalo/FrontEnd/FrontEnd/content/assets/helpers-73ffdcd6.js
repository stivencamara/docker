import{b as e}from"./helpers-72b2eb57.js";import{v as i}from"./index-f1c6a491.js";const d={newForm(r=null){return{organizationId:null,organizationVersion:null,code:null,nipc:null,organizationActive:!0,organizationTypeId:null,startDate:new Date,endDate:null,groupName:null,parentOrganization:r,economicActivityId:null,canHaveServices:!1,canHavePointsOfCare:!1,recordStateTypeId:1,divisionTypeId:null,icon:null,address:{address:null,locationId:null,zipCode:null,islandId:null,countyId:null,parishId:null,locality:null,latitude:null,longitude:null,addressId:null,code:null},texts:[{language:"pt",name:null,abreviation:null,legislation:null,mission:null,keywords:null,versionComments:null},{language:"en",name:null,abreviation:null,legislation:null,mission:null,keywords:null,versionComments:null}],organizationRelated:[],contacts:[]}},formRules(){return{address:{zipCode:{required:e.requiredMessage()},islandId:{required:e.requiredMessage()},countyId:{required:e.requiredMessage()},parishId:{required:e.requiredMessage()},locality:{required:e.requiredMessage()},address:{required:e.requiredMessage()}},code:{required:e.requiredMessage()},nipc:{required:e.requiredMessage()},groupName:{required:e.requiredMessage()},texts:{$each:e.forEachField(["name"])},parentOrganization:{required:e.requiredMessage()},startDate:{required:e.requiredMessage()},organizationTypeId:{required:e.requiredMessage()},economicActivityId:{required:e.requiredMessage()},divisionTypeId:{required:e.requiredMessage()},divisionId:{required:e.requiredMessageWithDependency("divisionTypeId",i.notApplicable)}}},organizationRelatedFormRules(){return{organizationId:{required:e.requiredMessage()},organizationRelatedTypeId:{required:e.requiredMessage()}}},contactsFormRules(){return{contactScopeId:{required:e.requiredMessage()},contactTypeId:{required:e.requiredMessage()},contactValue:{required:e.requiredMessage()}}},progressFields(){return["nipc","groupName","organizationTypeId","texts.0.name","parentOrganization","startDate","economicActivityId","divisionTypeId","divisionId","address.zipCode","address.islandId","address.countyId","address.parishId","address.locality","address.address"]}};export{d as o};
