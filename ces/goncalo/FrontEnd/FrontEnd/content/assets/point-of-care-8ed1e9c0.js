import{d as i}from"./index-ab26f80c.js";const e=i("PointOfCareStore",{state:()=>({organizationList:[],channelTypeList:[],stateTypeList:[],contactScopeList:[],contactTypeList:[],divisionList:[],refusalTypeList:[],progress:0,formToCompare:null}),getters:{getAll:t=>({organizationList:t.organizationList,channelTypeList:t.channelTypeList,stateTypeList:t.stateTypeList,contactScopeList:t.contactScopeList,contactTypeList:t.contactTypeList,divisionList:t.divisionList,refusalTypeList:t.refusalTypeList})},actions:{setLists(t){this.organizationList=t.organizationList,this.channelTypeList=t.channelTypeList,this.stateTypeList=t.stateTypeList,this.contactScopeList=t.contactScopeList,this.contactTypeList=t.contactTypeList,this.divisionList=t.divisionList,this.refusalTypeList=t.refusalTypeList},setProgress(t){this.progress=t},setFormToCompare(t){this.formToCompare=t}}});export{e as u};
