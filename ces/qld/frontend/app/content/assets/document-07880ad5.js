import{y as r,i as u}from"./index-5b4ebf84.js";const m={search:e=>r.post("/document/search",e),create:e=>r.post("/document",e),update:e=>r.put("/document",e),delete:(e,t)=>r.delete(`/document/${e}/${t}`),getLists:e=>r.get(`/document/lists/${e}`),getById:(e,t)=>r.get(`/document/${e}/${t}`),submit:(e,t)=>{let d={documentId:e,documentVersion:t,recordStateId:u.recordStateType.submitted};return r.put("/document/changestate",d)},publish:(e,t)=>{let d={documentId:e,documentVersion:t,recordStateId:u.recordStateType.published};return r.put("/document/changestate",d)},changeStateToDraft:(e,t)=>{let d={documentId:e,documentVersion:t,recordStateId:u.recordStateType.draft};return r.put("/document/changestate",d)},changeState:(e,t,d,n=null,o="")=>{let c={documentId:e,documentVersion:t,recordStateId:d,overrideDuplicate:n,refusal:o};return r.put("/document/changestate",c)}};export{m as d};
