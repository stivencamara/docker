import{b as r,d as t}from"./index-4fe030fb.js";const a={search:e=>r.post("/parameter/search",e),update:e=>r.put("/parameter",e),getLists:e=>r.get(`/parameter/lists/${e}`),getById:e=>r.get(`/parameter/${e}`)},p=t("ParamsStore",{state:()=>({parameterTypeList:[],progress:0,formToCompare:null}),getters:{getAll:e=>({parameterTypeList:e.parameterTypeList})},actions:{setLists(e){this.parameterTypeList=e.parameterTypeList},setProgress(e){this.progress=e},setFormToCompare(e){this.formToCompare=e}},persist:{enabled:!0,strategies:[{key:"params-store",storage:localStorage,paths:["parameterTypeList"]}]}});export{a as p,p as u};
