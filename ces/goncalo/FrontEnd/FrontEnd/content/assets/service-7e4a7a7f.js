import{b as s,u as n,v as c}from"./index-ab26f80c.js";const d={search:e=>{let r=e.serviceCategoryIds;e.serviceSubCategoryIds!=null&&(r=r.concat(e.serviceSubCategoryIds));let t={serviceCategoryIds:r,pageNumber:e.pageNumber,sortBy:e.sortBy,code:e.code,serviceTypeIds:e.serviceTypeIds,businessEventIds:e.businessEventIds,lifeEventIds:e.lifeEventIds,abreviation:e.abreviation,name:e.name,organization:e.organization,recordStateIds:e.recordStateIds,active:e.active};return s.post("/service/search",t)},create:e=>s.post("/service",e),update:e=>{let r=n.cloneObject(e);return e.serviceSubCategoryId!=null&&(r.serviceCategoryId=e.serviceSubCategoryId),s.put("/service",r)},delete:(e,r)=>s.delete(`/service/${e}/${r}`),getLists:(e,r=!0)=>{const t={lang:e,onlyPublishState:r};return s.post("/service/lists",t)},getById:(e,r)=>s.get(`/service/${e}/${r}`),submit:(e,r)=>{let t={serviceId:e,serviceVersion:r,recordStateId:c.recordStateType.submitted};return s.put("/service/changestate",t)},publish:(e,r)=>{let t={serviceId:e,serviceVersion:r,recordStateId:c.recordStateType.published};return s.put("/service/changestate",t)},changeStateToDraft:(e,r)=>{let t={serviceId:e,serviceVersion:r,recordStateId:c.recordStateType.draft};return s.put("/service/changestate",t)},changeState:(e,r,t,i=null,a="")=>{let o={serviceId:e,serviceVersion:r,recordStateId:t,overrideDuplicate:i,refusal:a};return s.put("/service/changestate",o)},associationSearch:e=>s.post("/service/association/search",e),associationCreate:(e,r,t,i)=>{let a={serviceId:e,serviceVersion:r,pointOfCareId:t,pointOfCareVersion:i};return s.post("/service/association/add",a)},associationRemove:(e,r,t,i)=>{let a={serviceId:e,serviceVersion:r,pointOfCareId:t,pointOfCareVersion:i};return s.post("/service/association/remove",a)},associationApprove:e=>s.post("/service/association/approve",e),history:e=>{let r={serviceId:e};return s.post("/service/history",r)},checklist:()=>s.get("/service/checklist"),extinct:(e,r,t)=>{let i={serviceId:e,serviceVersion:r,recordStateId:c.recordStateType.extinct,endDate:t};return s.put("/service/changestate",i)}};export{d as s};
