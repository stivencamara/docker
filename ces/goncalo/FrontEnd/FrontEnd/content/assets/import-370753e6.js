import{b as r}from"./index-ecfd29ec.js";const i={getAll:()=>r.get("/import"),get:t=>r.get(`/import/${t}`),getFile:t=>r.get(`/import/file/${t}`),organization:t=>r.put("/import/organization",t),location:t=>r.put("/import/location",t),service:t=>r.put("/import/service",t),pointOfCare:t=>r.put("/import/pointofcare",t)};export{i};