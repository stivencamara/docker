import{d as t}from"./index-f9e60098.js";const s=t("ServiceStore",{state:()=>({serviceTypeList:[],serviceCategoryList:[],serviceRelatedList:[],organizationList:[],stateTypeList:[],businessEventList:[],lifeEventList:[],recipientTypeList:[],legislationList:[],resultTypeList:[],economicActivityList:[],refusalTypeList:[],progress:0,formToCompare:null}),getters:{getAll:i=>({serviceTypeList:i.serviceTypeList,serviceCategoryList:i.serviceCategoryList,serviceRelatedList:i.serviceRelatedList,organizationList:i.organizationList,stateTypeList:i.stateTypeList,businessEventList:i.businessEventList,lifeEventList:i.lifeEventList,recipientTypeList:i.recipientTypeList,legislationList:i.legislationList,resultTypeList:i.resultTypeList,economicActivityList:i.economicActivityList,refusalTypeList:i.refusalTypeList})},actions:{setLists(i){this.serviceTypeList=i.serviceTypeList,this.serviceCategoryList=i.serviceCategoryList,this.serviceRelatedList=i.serviceRelatedList,this.organizationList=i.organizationList,this.stateTypeList=i.stateTypeList,this.businessEventList=i.businessEventList,this.lifeEventList=i.lifeEventList,this.recipientTypeList=i.recipientTypeList,this.legislationList=i.legislationList,this.resultTypeList=i.resultTypeList,this.economicActivityList=i.economicActivityList,this.refusalTypeList=i.refusalTypeList},setProgress(i){this.progress=i},setFormToCompare(i){this.formToCompare=i}}});export{s as u};
