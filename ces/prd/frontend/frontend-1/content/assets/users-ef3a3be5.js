import{b as a,a7 as i}from"./index-a14ad215.js";const c={search:e=>a.post("/users/search",e),create:e=>{var s=null;if(e.password!=null){const r=new i,n=`MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDMYJLQ2EcdtPKDiy3jV0BonMAg\r
7sjv7j/0UsISY1rQg5nv3i2nRcAnUQE3FLYIoJJzjDiL+BNC3rflW8kEwXUgbWIy\r
RsVcsvrn6t+BcsYFYgdSbTqCT4pL/XSPV0HL/ouk9M68Nig4B6/AiYpzO0TDtqNu\r
ebO+pHtamPoGpZR4yQIDAQAB`;r.setPublicKey(n),s=r.encrypt(e.password)}let t={active:e.active,displayName:e.displayName,email:e.email,isGraUser:e.isGraUser,name:e.name,password:s,profiles:e.profiles};return a.post("/users",t)},update:e=>a.put("/users",e),getById:e=>a.get(`/users/${e}`),delete:e=>a.delete(`/users/${e}`),getLists:e=>a.get(`/users/lists/${e}`),changePassword:e=>a.put("/users/changepassword",e),recover:e=>{let s={language:e.language,userId:e.userId,active:e.active,displayName:e.displayName,email:e.email,isGraUser:e.isGraUser,name:e.name,profiles:e.profiles,unDeleted:!0};return a.put("/users",s)},unblock:e=>{let s={language:e.language,userId:e.userId,active:e.active,displayName:e.displayName,email:e.email,isGraUser:e.isGraUser,name:e.name,profiles:e.profiles,unBlocked:!0};return a.put("/users",s)},generatepassword:e=>{let s={UserId:e};return a.put("/users/generatepassword",s)}};export{c as u};
