import{i as T,h,g as F,k as b,u as o,r as s,w as M,l as r,c as f,m as y,n as D,y as B,x as g,s as a,L as N,v as c,p as R,q as k}from"./index-98e98595.js";const j={__name:"extinct-confirm",props:{id:{String,required:!0,default:"confirm-extinct-submit"},startDate:{Date,required:!0},endDate:{Date,required:!0},service:{type:Object,required:!0},itemId:{type:[String,Number],required:!0},itemVersion:{type:[String,Number],required:!0},backRoute:{type:String,required:!0},itemIdField:{type:String,required:!0},callbackSuccess:{type:Function}},setup(x,{expose:_}){const e=x,n=T();h();const v=F(),S=b(()=>{const t=n.label[e.itemIdField.replace("Id","")];return n.common.extinctModalTitle.replace("{0}",o.firstCharToLower(t))}),C=b(()=>{const t=n.label[e.itemIdField.replace("Id","")];return n.common.extinctModalTxt.replace("{0}",o.firstCharToLower(t))});let i=s(!1),l=s(e.endDate),d=s(0);M(()=>e.endDate,()=>{l.value=e.endDate});async function I(){l.value=null,o.closeModalById(e.id)}async function q(){i.value=!0;let t=await e.service.extinct(e.itemId,e.itemVersion,l.value);o.validateResponse(t,n.common.extinctModalSucess[e.itemIdField],()=>{o.closeModalById(e.id),e.callbackSuccess?e.callbackSuccess():v.push({name:e.backRoute})}),i.value=!1}return _({setDate:t=>{l.value=t,d.value++}}),(t,u)=>{const V=r("form-field"),m=r("cbutton"),w=r("modal");return f(),y(w,{id:e.id,title:a(S),size:a(c).modalSize.medium},{body:D(()=>[B(g(t._lang.common.extinctconfirm)+" ",1),(f(),y(V,{id:"endDate",class:"mb-3 mt-3 col-12",modelValue:a(l),"onUpdate:modelValue":u[0]||(u[0]=p=>N(l)?l.value=p:l=p),label:t._lang.label.endDate,type:a(c).inputs.datepicker,placeholder:"dd/mm/aaaa",minDate:e.startDate,maxDate:new Date,key:a(d)},null,8,["modelValue","label","type","minDate","maxDate"])),R("span",null,g(a(C)),1)]),footer:D(()=>[k(m,{title:t._lang.common.cancel,type:a(c).buttonType.secondary,onClick:I,"aria-label":"Close",disabled:a(i)},null,8,["title","type","disabled"]),k(m,{title:t._lang.common.confirm,onClick:q,disabled:a(i)||!a(l),"aria-label":"Close"},null,8,["title","disabled"])]),_:1},8,["id","title","size"])}}};export{j as _};
