import{n as o,v as r}from"./index-60da5de7.js";const d={search:t=>o.post("/location/search",t),getById:(t,e)=>o.get(`/location/${t}/${e}`),create:t=>o.post("/location",t),update:t=>o.put("/location",t),getLists:t=>o.get(`/location/lists/${t}`),submit:(t,e)=>{let a={locationId:t,locationVersion:e,recordStateId:r.recordStateType.submitted};return o.put("/location/changestate",a)},publish:(t,e)=>{let a={locationId:t,locationVersion:e,recordStateId:r.recordStateType.published};return o.put("/location/changestate",a)},changeStateToDraft:(t,e)=>{let a={locationId:t,locationVersion:e,recordStateId:r.recordStateType.draft};return o.put("/location/changestate",a)},changeState:(t,e,a,n=null,c="")=>{let l={locationId:t,locationVersion:e,recordStateId:a,overrideDuplicate:n,refusal:c};return o.put("/location/changestate",l)},delete:(t,e)=>o.delete(`/location/${t}/${e}`)};export{d as l};
