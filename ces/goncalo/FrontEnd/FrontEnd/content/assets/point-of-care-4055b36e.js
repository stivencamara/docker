import{b as r,s}from"./index-a14ad215.js";const c={search:e=>r.post("/poc/search",e),create:e=>r.post("/poc",e),update:e=>r.put("/poc",e),delete:(e,t)=>r.delete(`/poc/${e}/${t}`),getLists:e=>r.get(`/poc/lists/${e}`),getById:(e,t)=>r.get(`/poc/${e}/${t}`),submit:(e,t)=>{let o={pointOfCareId:e,pointOfCareVersion:t,recordStateId:s.recordStateType.submitted};return r.put("/poc/changestate",o)},publish:(e,t)=>{let o={pointOfCareId:e,pointOfCareVersion:t,recordStateId:s.recordStateType.published};return r.put("/poc/changestate",o)},changeStateToDraft:(e,t)=>{let o={pointOfCareId:e,pointOfCareVersion:t,recordStateId:s.recordStateType.draft};return r.put("/poc/changestate",o)},changeState:(e,t,o,a=null,n="")=>{let p={pointOfCareId:e,pointOfCareVersion:t,recordStateId:o,overrideDuplicate:a,refusal:n};return r.put("/poc/changestate",p)},associationSearch:e=>r.post("/poc/association/search",e),associationCreate:(e,t,o,a)=>{let n={pointOfCareId:e,pointOfCareVersion:t,serviceId:o,serviceVersion:a};return r.post("/poc/association/add",n)},associationRemove:(e,t,o,a)=>{let n={pointOfCareId:e,pointOfCareVersion:t,serviceId:o,serviceVersion:a};return r.post("/poc/association/remove",n)},associationApprove:e=>r.post("/poc/association/approve",e),history:e=>{let t={pointOfCareId:e};return r.post("/poc/history",t)},extinct:(e,t,o)=>{let a={pointOfCareId:e,pointOfCareVersion:t,recordStateId:s.recordStateType.extinct,endDate:o};return r.put("/poc/changestate",a)}};export{c as p};
