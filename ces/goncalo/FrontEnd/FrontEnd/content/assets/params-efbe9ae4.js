import{b as r,d as a}from"./index-f1c6a491.js";const o={search:e=>r.post("/parameter/search",e),update:e=>r.put("/parameter",e),getLists:(e,t=!0)=>{const s={lang:e,onlyPublishState:t};return r.post("/parameter/lists",s)},getById:e=>r.get(`/parameter/${e}`)},m=a("ParamsStore",{state:()=>({parameterTypeList:[],progress:0,formToCompare:null}),getters:{getAll:e=>({parameterTypeList:e.parameterTypeList})},actions:{setLists(e){this.parameterTypeList=e.parameterTypeList},setProgress(e){this.progress=e},setFormToCompare(e){this.formToCompare=e}},persist:{enabled:!0,strategies:[{key:"params-store",storage:localStorage,paths:["parameterTypeList"]}]}});export{o as p,m as u};
