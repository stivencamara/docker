import{d as r}from"./index-6321ead1.js";const o=r("UsersStore",{state:()=>({organizationList:[],profileList:[],progress:0,formToCompare:null}),getters:{getAll:t=>({organizationList:t.organizationList,profileList:t.profileList})},actions:{setLists(t){this.organizationList=t.organizationList,this.profileList=t.profileList},setProgress(t){this.progress=t},setFormToCompare(t){this.formToCompare=t}},persist:{enabled:!0,strategies:[{key:"user-store",storage:localStorage,paths:["organizationList","profileList"]}]}});export{o as u};
