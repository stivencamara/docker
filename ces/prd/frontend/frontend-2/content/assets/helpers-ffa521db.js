import{b as e}from"./helpers-e58dedc6.js";const l={newForm(){return{locationId:null,locationVersion:null,divisionId:null,code:null,islandId:null,zipCode:null,countyId:null,parishId:null,locality:null,address:null,latitude:null,longitude:null,startDate:new Date,endDate:null,locationTypeId:null,organization:null,texts:[{language:"pt",tutelage:null,versionComments:null},{language:"en",tutelage:null,versionComments:null}]}},formRules(){return{code:{required:e.requiredMessage()},startDate:{required:e.requiredMessage()},locationTypeId:{required:e.requiredMessage()},organization:{required:e.requiredMessage()},zipCode:{required:e.requiredMessage()},islandId:{required:e.requiredMessage()},countyId:{required:e.requiredMessage()},parishId:{required:e.requiredMessage()},locality:{required:e.requiredMessage()},address:{required:e.requiredMessage()}}},progressFields(){return["organization","startDate","locationTypeId","zipCode","islandId","countyId","parishId","locality","address"]}};export{l as h};
