import{i as m,h as p,r as b,l,c as y,m as _,n as r,y as f,x as g,q as n,s as o,v as i,u as v}from"./index-34a71b79.js";const C={__name:"delete-confirm",props:{resource:{Object,required:!0},itemId:{type:Number,required:!0},service:{type:Object,required:!0},action:{type:Function,required:!0}},setup(c){const e=c;m(),p();let a=b(!1);async function d(){a.value=!0;let t=await e.service.delete(e.itemId);v.validateResponse(t,e.resource.deleted,()=>{e.action()}),a.value=!1}return(t,q)=>{const s=l("cbutton"),u=l("modal");return y(),_(u,{id:"confirm-delete",title:e.resource.delete,size:o(i).modalSize.medium},{body:r(()=>[f(g(e.resource.deleteQuestion),1)]),footer:r(()=>[n(s,{title:t._lang.common.no,type:o(i).buttonType.secondary,"data-bs-dismiss":"modal","aria-label":t._lang.common.no,disabled:o(a)},null,8,["title","type","aria-label","disabled"]),n(s,{title:t._lang.common.yes,onClick:d,disabled:o(a),"aria-label":t._lang.common.yes},null,8,["title","disabled","aria-label"])]),_:1},8,["title","size"])}}};export{C as _};
