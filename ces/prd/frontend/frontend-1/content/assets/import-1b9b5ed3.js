import{i as g,h as y,r as u,k as t,c as C,l as k,m as c,p as i,q as e,J as V,t as n}from"./index-46c4d077.js";import"./helpers-27fc0e50.js";const B={__name:"import",props:{id:{String,default:"import"},action:{Function,required:!0}},setup(p){const o=p;g(),y();let s=u(!1),l=u(null);function b(){o.action(l)}return(a,d)=>{const f=t("form-field"),m=t("cbutton"),_=t("modal");return C(),k(_,{id:o.id,title:a._lang.common.submit,size:e(n).modalSize.large},{body:c(()=>[i(f,{id:"document",class:"mb-3 col-12",modelValue:e(l),"onUpdate:modelValue":d[0]||(d[0]=r=>V(l)?l.value=r:l=r),label:a._lang.label.document,disabled:o.disabled,loading:o.loading,type:e(n).inputs.file,required:!0},null,8,["modelValue","label","disabled","loading","type"])]),footer:c(()=>[i(m,{title:a._lang.common.cancel,type:e(n).buttonType.secondary,"data-bs-dismiss":"modal","aria-label":"Close",disabled:e(s)},null,8,["title","type","disabled"]),i(m,{title:a._lang.common.import,onClick:b,disabled:e(s)||e(l)==null,"data-bs-dismiss":"modal","aria-label":"Close"},null,8,["title","disabled"])]),_:1},8,["id","title","size"])}}};export{B as _};