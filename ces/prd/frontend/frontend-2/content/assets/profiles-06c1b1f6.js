import{b as r}from"./index-8f6572ec.js";const s={search:e=>r.post("/profiles/search",e),create:e=>r.post("/profiles",e),update:e=>r.put("/profiles",e),getById:e=>r.get(`/profiles/${e}`),delete:e=>r.delete(`/profiles/${e}`)};export{s as p};
