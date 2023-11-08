import{b as a,v as r}from"./index-8f6572ec.js";const s={search:t=>a.post("/location/search",t),getById:(t,e)=>a.get(`/location/${t}/${e}`),create:t=>a.post("/location",t),update:t=>{const e=new Date(t.startDate);e.setMinutes(e.getMinutes()+e.getTimezoneOffset()+60+60);const o=e.toISOString();return t.startDate=o,a.put("/location",t)},getLists:(t,e=!0)=>{const o={lang:t,onlyPublishState:e,forLocation:!0};return a.post("/location/lists",o)},submit:(t,e)=>{let o={locationId:t,locationVersion:e,recordStateId:r.recordStateType.submitted};return a.put("/location/changestate",o)},publish:(t,e)=>{let o={locationId:t,locationVersion:e,recordStateId:r.recordStateType.published};return a.put("/location/changestate",o)},changeStateToDraft:(t,e)=>{let o={locationId:t,locationVersion:e,recordStateId:r.recordStateType.draft};return a.put("/location/changestate",o)},changeState:(t,e,o,n=null,c="")=>{let i={locationId:t,locationVersion:e,recordStateId:o,overrideDuplicate:n,refusal:c};return a.put("/location/changestate",i)},delete:(t,e)=>a.delete(`/location/${t}/${e}`),extinct:(t,e,o)=>{let n={locationId:t,locationVersion:e,recordStateId:r.recordStateType.extinct,endDate:o};return a.put("/location/changestate",n)},history:t=>{let e={locationId:t};return a.post("/location/history",e)}};export{s as l};
