import{b as e,s as r}from"./index-074485c3.js";const z={search:t=>e.post("/organizations/organization/search",t),create:t=>e.post("/organizations/organization",t),update:t=>(t.canHaveServices=t.canHaveServices??!1,t.canHavePointsOfCare=t.canHavePointsOfCare??!1,t.organizationPublic=t.organizationPublic??!1,e.put("/organizations/organization",t)),delete:(t,a)=>e.delete(`/organizations/organization/${t}/${a}`),getLists:t=>e.get(`/organizations/organization/lists/${t}`),getById:(t,a)=>e.get(`/organizations/organization/${t}/${a}`),submit:(t,a)=>{let n={organizationId:t,organizationVersion:a,recordStateId:r.recordStateType.submitted};return e.put("/organizations/organization/changestate",n)},publish:(t,a)=>{let n={organizationId:t,organizationVersion:a,recordStateId:r.recordStateType.published};return e.put("/organizations/organization/changestate",n)},changeStateToDraft:(t,a)=>{let n={organizationId:t,organizationVersion:a,recordStateId:r.recordStateType.draft};return e.put("/organizations/organization/changestate",n)},changeState:(t,a,n,o=null,i="")=>{let s={organizationId:t,organizationVersion:a,recordStateId:n,overrideDuplicate:o,refusal:i};return e.put("/organizations/organization/changestate",s)},history:t=>{let a={organizationId:t};return e.post("/organizations/organization/history",a)}};export{z as o};
