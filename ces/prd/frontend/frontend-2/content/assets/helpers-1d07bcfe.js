import{b as e}from"./helpers-e58dedc6.js";const t={newForm(n=null){return{documentId:null,documentVersion:null,organization:n,code:null,documentTypeId:null,startDate:new Date,endDate:null,texts:[{language:"pt",name:null,description:null,abreviation:null,keywords:null,versionComments:null},{language:"en",name:null,description:null,abreviation:null,keywords:null,versionComments:null}],document:null}},formRules(){return{documentTypeId:{required:e.requiredMessage()},organization:{required:e.requiredMessage()},startDate:{required:e.requiredMessage()},texts:{$each:e.forEachField(["name"])},document:{required:e.requiredMessage()}}},progressFields(){return["documentTypeId","texts.0.name","organization","startDate","document"]}};export{t as d};
