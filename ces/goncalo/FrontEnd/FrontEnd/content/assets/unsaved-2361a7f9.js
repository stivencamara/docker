import{i as _,h as C,a1 as g,r as n,l as d,c as k,m as M,n as u,y as h,x as j,q as c,s as t,v as m,u as r}from"./index-98e98595.js";import"./helpers-8c1ef5f8.js";const O={__name:"unsaved",props:{store:{Object,required:!0},formModel:{Object,required:!0},service:{type:Object,required:!0},resource:{type:Object}},setup(p){const a=p;_(),C(),g((e,b,o)=>{r.isDirty(a.store.formToCompare,a.formModel)?(r.showModalById(i.value,!0),l.value=o):o()});let s=n(!1),l=n(null);const i=n("unsaved-modal");function v(){l.value()}async function f(){s.value=!0;const e=await a.service.update(a.formModel);r.validateResponse(e,a.resource.saved,()=>{l.value()}),s.value=!1}return(e,b)=>{const o=d("cbutton"),y=d("modal");return k(),M(y,{id:i.value,title:e._lang.common.unsavedModalTitle,size:t(m).modalSize.medium},{body:u(()=>[h(j(e._lang.backoffice.modals.unsaved),1)]),footer:u(()=>[c(o,{title:e._lang.common.notSave,type:t(m).buttonType.secondary,"data-bs-dismiss":"modal","aria-label":"Close2",disabled:t(s),onClick:v},null,8,["title","type","disabled"]),c(o,{title:e._lang.common.save,onClick:f,disabled:t(s),"data-bs-dismiss":"modal","aria-label":"Close2"},null,8,["title","disabled"])]),_:1},8,["id","title","size"])}}};export{O as _};
