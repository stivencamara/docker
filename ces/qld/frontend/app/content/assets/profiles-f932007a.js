import{n as r}from"./index-60da5de7.js";const s={search:e=>r.post("/profiles/search",e),create:e=>r.post("/profiles",e),update:e=>r.put("/profiles",e),getById:e=>r.get(`/profiles/${e}`),delete:e=>r.delete(`/profiles/${e}`)};export{s as p};