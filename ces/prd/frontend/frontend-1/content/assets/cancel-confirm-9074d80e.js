import{i as u,h as p,r as b,l as s,c as f,m as _,n as i,y,x as g,q as l,s as a,v as c}from"./index-80ba5b4e.js";import"./helpers-4a70dd55.js";const q={__name:"cancel-confirm",props:{id:{String,required:!0,default:"confirm-cancel"},action:{Function,required:!0}},setup(d){const o=d;u(),p();let t=b(!1);function r(){o.action()}return(e,C)=>{const n=s("cbutton"),m=s("modal");return f(),_(m,{id:o.id,title:e._lang.common.addContact,size:a(c).modalSize.medium},{body:i(()=>[y(g(e._lang.backoffice.modals.confirmCancel),1)]),footer:i(()=>[l(n,{title:e._lang.common.no,type:a(c).buttonType.secondary,"data-bs-dismiss":"modal","aria-label":"Close",disabled:a(t)},null,8,["title","type","disabled"]),l(n,{title:e._lang.common.yes,onClick:r,disabled:a(t),"data-bs-dismiss":"modal","aria-label":"Close"},null,8,["title","disabled"])]),_:1},8,["id","title","size"])}}};export{q as _};