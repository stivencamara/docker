import{y as r,i as n}from"./index-5b4ebf84.js";const c={search:e=>r.post("/poc/search",e),create:e=>r.post("/poc",e),update:e=>r.put("/poc",e),delete:(e,t)=>r.delete(`/poc/${e}/${t}`),getLists:e=>r.get(`/poc/lists/${e}`),getById:(e,t)=>r.get(`/poc/${e}/${t}`),submit:(e,t)=>{let o={pointOfCareId:e,pointOfCareVersion:t,recordStateId:n.recordStateType.submitted};return r.put("/poc/changestate",o)},publish:(e,t)=>{let o={pointOfCareId:e,pointOfCareVersion:t,recordStateId:n.recordStateType.published};return r.put("/poc/changestate",o)},changeStateToDraft:(e,t)=>{let o={pointOfCareId:e,pointOfCareVersion:t,recordStateId:n.recordStateType.draft};return r.put("/poc/changestate",o)},changeState:(e,t,o,a=null,s="")=>{let i={pointOfCareId:e,pointOfCareVersion:t,recordStateId:o,overrideDuplicate:a,refusal:s};return r.put("/poc/changestate",i)},associationSearch:e=>r.post("/poc/association/search",e),associationCreate:(e,t,o,a)=>{let s={pointOfCareId:e,pointOfCareVersion:t,serviceId:o,serviceVersion:a};return r.post("/poc/association/add",s)},associationRemove:(e,t,o,a)=>{let s={pointOfCareId:e,pointOfCareVersion:t,serviceId:o,serviceVersion:a};return r.post("/poc/association/remove",s)}};export{c as p};
