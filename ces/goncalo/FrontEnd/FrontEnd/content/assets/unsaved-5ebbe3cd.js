import{i as y,h as C,$ as k,r as n,k as d,c as g,l as M,m as u,x as h,v as j,p as c,q as s,t as m,u as r}from"./index-61b82425.js";import"./helpers-6dcc39e2.js";const O={__name:"unsaved",props:{store:{Object,required:!0},formModel:{Object,required:!0},service:{type:Object,required:!0},resource:{type:Object}},setup(p){const a=p;y(),C(),k((e,b,o)=>{r.isDirty(a.store.formToCompare,a.formModel)?(r.showModalById(i.value,!0),l.value=o):o()});let t=n(!1),l=n(null);const i=n("unsaved-modal");function v(){l.value()}async function f(){t.value=!0;const e=await a.service.update(a.formModel);r.validateResponse(e,a.resource.saved,()=>{l.value()}),t.value=!1}return(e,b)=>{const o=d("cbutton"),_=d("modal");return g(),M(_,{id:i.value,title:e._lang.common.unsavedModalTitle,size:s(m).modalSize.medium},{body:u(()=>[h(j(e._lang.backoffice.modals.unsaved),1)]),footer:u(()=>[c(o,{title:e._lang.common.notSave,type:s(m).buttonType.secondary,"data-bs-dismiss":"modal","aria-label":"Close2",disabled:s(t),onClick:v},null,8,["title","type","disabled"]),c(o,{title:e._lang.common.save,onClick:f,disabled:s(t),"data-bs-dismiss":"modal","aria-label":"Close2"},null,8,["title","disabled"])]),_:1},8,["id","title","size"])}}};export{O as _};
