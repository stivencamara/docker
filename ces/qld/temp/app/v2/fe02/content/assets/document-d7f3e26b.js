import{J as e}from"./index-920dbb37.js";const o=e("DocumentStore",{state:()=>({organizationList:[],documentTypeList:[],stateTypeList:[],progress:0,formToCompare:null}),getters:{getAll:t=>({organizationList:t.organizationList,documentTypeList:t.documentTypeList,stateTypeList:t.stateTypeList})},actions:{setLists(t){this.organizationList=t.organizationList,this.documentTypeList=t.documentTypeList,this.stateTypeList=t.stateTypeList},setProgress(t){this.progress=t},setFormToCompare(t){this.formToCompare=t}}});export{o as u};