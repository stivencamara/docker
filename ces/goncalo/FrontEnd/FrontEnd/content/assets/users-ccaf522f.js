import{b as s,aa as i}from"./index-82cc5ade.js";const c={search:e=>s.post("/users/search",e),create:e=>{var a=null;if(e.password!=null){const t=new i,n=`MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDMYJLQ2EcdtPKDiy3jV0BonMAg\r
7sjv7j/0UsISY1rQg5nv3i2nRcAnUQE3FLYIoJJzjDiL+BNC3rflW8kEwXUgbWIy\r
RsVcsvrn6t+BcsYFYgdSbTqCT4pL/XSPV0HL/ouk9M68Nig4B6/AiYpzO0TDtqNu\r
ebO+pHtamPoGpZR4yQIDAQAB`;t.setPublicKey(n),a=t.encrypt(e.password)}let r={active:e.active,displayName:e.displayName,email:e.email,isGraUser:e.isGraUser,name:e.name,password:a,profiles:e.profiles};return s.post("/users",r)},update:e=>s.put("/users",e),getById:e=>s.get(`/users/${e}`),delete:e=>s.delete(`/users/${e}`),getLists:(e,a=!0)=>{const r={lang:e,onlyPublishState:a};return s.post("/users/lists",r)},changePassword:e=>s.put("/users/changepassword",e),recover:e=>{let a={language:e.language,userId:e.userId,active:e.active,displayName:e.displayName,email:e.email,isGraUser:e.isGraUser,name:e.name,profiles:e.profiles,unDeleted:!0};return s.put("/users",a)},unblock:e=>{let a={language:e.language,userId:e.userId,active:e.active,displayName:e.displayName,email:e.email,isGraUser:e.isGraUser,name:e.name,profiles:e.profiles,unBlocked:!0};return s.put("/users",a)},generatepassword:e=>{let a={UserId:e};return s.put("/users/generatepassword",a)}};export{c as u};
