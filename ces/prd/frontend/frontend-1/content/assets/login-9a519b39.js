import{b as M,_ as T,i as U,r as A,g as G,D as N,H as O,k as g,c as h,l as H,m as P,n as l,q as a,A as B,p as r,I as J,t as S,s as L,e as F,F as W,v as j,z as V,J as Q,E as b,G as I,u as y,B as X,C as Y}from"./index-46c4d077.js";import{u as Z}from"./index.esm-f67cd286.js";import{c as q,r as x,e as ee,m as ae}from"./index.esm-b6ca17d6.js";import{u as se}from"./organic-51518cd7.js";const oe={login:t=>M.post("/system/login",{clientId:t.clientId,clientSecret:t.clientSecret})},_e="/images/login.svg",te="/images/logo-blue.svg";const le=t=>(X("data-v-a78785b1"),t=t(),Y(),t),ne={class:"ms-4"},ie=["data-bs-title","alt"],re=le(()=>l("div",{class:"text-center mb-5"},[l("img",{width:"220",alt:"CES",src:te})],-1)),de={class:"d-grid gap-4 py-3"},ce={key:0,class:"m-auto"},ue={class:"d-grid gap-4 py-3"},pe={__name:"login",props:{disabled:{type:Boolean,default:!1}},setup(t){const u=t,v=U();let o=A(!1);const w=G(),D=se(),{executeRecaptcha:E,recaptchaLoaded:R}=N();let n=O({username:null,password:null,recaptchaToken:null}),i=A(!1);const k=q.withMessage(v.common.requiredField,x),$={username:{required:k,email:ee},password:{required:k,minLength:q.withMessage(({$params:e})=>v.common.minLengthField.replace("{0}",e.min),ae(8))}},d=Z($,n);async function f(){if(o.value=!0,await d.value.$validate(),!d.value.$error){await R();const e=await E("login");if(e){n.recaptchaToken=e,b.setUser(null);const s=await I.backofficeLogin(n);y.validateResponse(s,null,()=>{const _=s.data.token,m=s.data.expiration,c=b.create(_,m);b.setUser(c),D.resetLis(),w.push({name:B.router.BACKOFFICE_TASKS_PAGE.name})})}}o.value=!1}async function C(){o.value=!0;let e=await oe.login({clientId:"B2881296-50A3-4FB2-A16C-2D298A718B3C",clientSecret:"25853D3A-5227-43BA-9449-D1EBC397D9D9"});await y.validateResponseAsync(e,null,async()=>{b.setSys(e.data);let s=await I.getUrl("B2881296-50A3-4FB2-A16C-2D298A718B3C");y.validateResponse(s,null,()=>{window.location.href=s.data})}),o.value=!1}function K(e){w.push({name:e})}return(e,s)=>{const _=g("iconArrowLeft"),m=g("form-field"),c=g("cbutton"),z=g("card");return h(),H(z,{"card-login":""},{body:P(()=>[l("div",ne,[l("a",{class:"p-hand","data-bs-toggle":"tooltip","data-bs-title":e._lang.common.back,alt:e._lang.header.notifications,onClick:s[0]||(s[0]=p=>K(a(B).router.HOME_PAGE.name)),"aria-controls":"offcanvasRight"},[r(_,{color:"black"})],8,ie)]),l("form",null,[re,l("div",{class:J(["login-backoffice",{show:a(i)}])},[r(m,{autocomplete:"email",type:a(S).inputs.email,id:"email",label:e._lang.label.email,required:!0,class:"mb-3",modelValue:a(n).username,"onUpdate:modelValue":s[1]||(s[1]=p=>a(n).username=p),disabled:a(o),"show-error":a(d).username.$error,"error-message":e._errorMessageField(a(d).username),placeholder:e._lang.common.add,onKeyup:L(f,["enter"])},null,8,["type","label","modelValue","disabled","show-error","error-message","placeholder","onKeyup"]),r(m,{type:a(S).inputs.password,id:"password",label:e._lang.label.password,required:!0,class:"mb-3",modelValue:a(n).password,"onUpdate:modelValue":s[2]||(s[2]=p=>a(n).password=p),disabled:a(o),"show-error":a(d).password.$error,"error-message":e._errorMessageField(a(d).password),placeholder:e._lang.common.add,onKeyup:L(f,["enter"])},null,8,["type","label","modelValue","disabled","show-error","error-message","placeholder","onKeyup"]),l("div",de,[r(c,{type:"primary",size:"large",title:e._lang.backoffice.login.enter,onClick:f,disabled:u.disabled||a(o)},null,8,["title","disabled"]),r(c,{type:"secondary",size:"large",title:e._lang.backoffice.login.graidAuthentication,onClick:C,disabled:u.disabled||a(o)},null,8,["title","disabled"])])],2),a(i)?V("",!0):(h(),F(W,{key:0},[u.disabled?(h(),F("p",ce,j(e._lang.backoffice.login.loading),1)):V("",!0),l("div",ue,[r(c,{type:"secondary",size:"large",title:e._lang.backoffice.login.graidAuthentication,onClick:C,disabled:u.disabled||a(o)},null,8,["title","disabled"]),r(c,{type:"primary",size:"large",title:e._lang.backoffice.login.enterWithAdmin,onClick:s[3]||(s[3]=p=>Q(i)?i.value=!a(i):i=!a(i)),disabled:u.disabled||a(o)},null,8,["title","disabled"])])],64))])]),_:1})}}},he=T(pe,[["__scopeId","data-v-a78785b1"]]);export{he as L,_e as _};