import{b as e}from"./helpers-72b2eb57.js";const s={newForm(r=null){return{code:null,pointOfCareId:null,pointOfCareVersion:null,recordStateTypeId:null,organization:r,startDate:new Date,endDate:null,address:{isRequired:null,address:null,locationId:null,zipCode:null,islandId:null,countyId:null,parishId:null,locality:null,latitude:null,longitude:null},channel:{channelId:null,channelTypeId:null},texts:[{language:"pt",name:null,description:null,abreviation:null,preConditions:null,keywords:null,versionComments:null},{language:"en",name:null,description:null,abreviation:null,preConditions:null,keywords:null,versionComments:null}],contacts:[],externalSystems:[]}},formRules(){return{recordStateTypeId:{required:e.requiredMessage()},organization:{required:e.requiredMessage()},startDate:{required:e.requiredMessage()},address:{zipCode:{required:e.requiredMessageWithDependency("isRequired",!1)},islandId:{required:e.requiredMessageWithDependency("isRequired",!1)},countyId:{required:e.requiredMessageWithDependency("isRequired",!1)},parishId:{required:e.requiredMessageWithDependency("isRequired",!1)},locality:{required:e.requiredMessageWithDependency("isRequired",!1)},address:{required:e.requiredMessageWithDependency("isRequired",!1)}},channel:{channelTypeId:{required:e.requiredMessage()}},texts:{$each:e.forEachField(["name"])}}},externalSystemsFormRules(){return{externalSystemId:{required:e.requiredMessage()},ExternalSystemName:{required:e.requiredMessage()}}},progressFieldsAddress(){return["organization","texts.0.name","channel.channelTypeId","startDate","address.zipCode","address.islandId","address.countyId","address.parishId","address.locality","address.address"]},progressFields(){return["organization","texts.0.name","channel.channelTypeId","startDate"]}};export{s as p};
