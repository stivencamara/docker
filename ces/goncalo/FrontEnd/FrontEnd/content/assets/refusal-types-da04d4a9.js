import{b as e,u as s}from"./index-f1c6a491.js";const n={search:t=>e.post("/settings/refusaltype/search",t),create:t=>(s.isNullOrEmpty(t.texts[1].name)&&(t.texts[1].name=t.texts[0].name),e.post("/settings/refusaltype",t)),update:t=>(s.isNullOrEmpty(t.texts[1].name)&&(t.texts[1].name=t.texts[0].name),e.put("/settings/refusaltype",t)),delete:t=>e.delete(`/settings/refusaltype/${t}`),getById:t=>e.get(`/settings/refusaltype/${t}`)};export{n as r};
