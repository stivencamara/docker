import{d as e}from"./index-8f6572ec.js";const i=e("DocumentStore",{state:()=>({organizationList:[],documentTypeList:[],refusalTypeList:[],stateTypeList:[],progress:0,formToCompare:null}),getters:{getAll:t=>({organizationList:t.organizationList,documentTypeList:t.documentTypeList,stateTypeList:t.stateTypeList,refusalTypeList:t.refusalTypeList})},actions:{setLists(t){this.organizationList=t.organizationList,this.documentTypeList=t.documentTypeList,this.stateTypeList=t.stateTypeList,this.refusalTypeList=t.refusalTypeList},setProgress(t){this.progress=t},setFormToCompare(t){this.formToCompare=t}}});export{i as u};
