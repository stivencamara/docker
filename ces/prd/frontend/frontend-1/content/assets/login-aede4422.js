import{b as z,_ as T,i as U,r as A,g as G,J as N,G as O,j as H,l as g,c as h,m as P,n as j,p as l,s as a,C as B,q as r,K as J,v as S,t as L,e as F,F as W,x as Q,A as V,L as X,H as b,I,u as y,D as Y,E as Z}from"./index-864107e7.js";import{u as x}from"./index.esm-e15864e2.js";import{c as q,r as ee,e as ae,m as se}from"./index.esm-bc117818.js";const oe={login:t=>z.post("/system/login",{clientId:t.clientId,clientSecret:t.clientSecret})},fe="/images/login.svg",te="/images/logo-blue.svg";const le=t=>(Y("data-v-a78785b1"),t=t(),Z(),t),ne={class:"ms-4"},ie=["data-bs-title","alt"],re=le(()=>l("div",{class:"text-center mb-5"},[l("img",{width:"220",alt:"CES",src:te})],-1)),de={class:"d-grid gap-4 py-3"},ce={key:0,class:"m-auto"},ue={class:"d-grid gap-4 py-3"},pe={__name:"login",props:{disabled:{type:Boolean,default:!1}},setup(t){const u=t,v=U();let o=A(!1);const w=G(),D=N(),{executeRecaptcha:E,recaptchaLoaded:K}=O();let n=H({username:null,password:null,recaptchaToken:null}),i=A(!1);const k=q.withMessage(v.common.requiredField,ee),R={username:{required:k,email:ae},password:{required:k,minLength:q.withMessage(({$params:e})=>v.common.minLengthField.replace("{0}",e.min),se(8))}},d=x(R,n);async function f(){if(o.value=!0,await d.value.$validate(),!d.value.$error){await K();const e=await E("login");if(e){n.recaptchaToken=e,b.setUser(null);const s=await I.backofficeLogin(n);y.validateResponse(s,null,()=>{const _=s.data.token,m=s.data.expiration,c=b.create(_,m);b.setUser(c),D.resetLis(),w.push({name:B.router.BACKOFFICE_TASKS_PAGE.name})})}}o.value=!1}async function C(){o.value=!0;let e=await oe.login({clientId:"B2881296-50A3-4FB2-A16C-2D298A718B3C",clientSecret:"25853D3A-5227-43BA-9449-D1EBC397D9D9"});await y.validateResponseAsync(e,null,async()=>{b.setSys(e.data);let s=await I.getUrl("B2881296-50A3-4FB2-A16C-2D298A718B3C");y.validateResponse(s,null,()=>{window.location.href=s.data})}),o.value=!1}function $(e){w.push({name:e})}return(e,s)=>{const _=g("iconArrowLeft"),m=g("form-field"),c=g("cbutton"),M=g("card");return h(),P(M,{"card-login":""},{body:j(()=>[l("div",ne,[l("a",{class:"p-hand","data-bs-toggle":"tooltip","data-bs-title":e._lang.common.back,alt:e._lang.header.notifications,onClick:s[0]||(s[0]=p=>$(a(B).router.HOME_PAGE.name)),"aria-controls":"offcanvasRight"},[r(_,{color:"black"})],8,ie)]),l("form",null,[re,l("div",{class:J(["login-backoffice",{show:a(i)}])},[r(m,{autocomplete:"email",type:a(S).inputs.email,id:"email",label:e._lang.label.email,required:!0,class:"mb-3",modelValue:a(n).username,"onUpdate:modelValue":s[1]||(s[1]=p=>a(n).username=p),disabled:a(o),"show-error":a(d).username.$error,"error-message":e._errorMessageField(a(d).username),placeholder:e._lang.common.add,onKeyup:L(f,["enter"])},null,8,["type","label","modelValue","disabled","show-error","error-message","placeholder","onKeyup"]),r(m,{type:a(S).inputs.password,id:"password",label:e._lang.label.password,required:!0,class:"mb-3",modelValue:a(n).password,"onUpdate:modelValue":s[2]||(s[2]=p=>a(n).password=p),disabled:a(o),"show-error":a(d).password.$error,"error-message":e._errorMessageField(a(d).password),placeholder:e._lang.common.add,onKeyup:L(f,["enter"])},null,8,["type","label","modelValue","disabled","show-error","error-message","placeholder","onKeyup"]),l("div",de,[r(c,{type:"primary",size:"large",title:e._lang.backoffice.login.enter,onClick:f,disabled:u.disabled||a(o)},null,8,["title","disabled"]),r(c,{type:"secondary",size:"large",title:e._lang.backoffice.login.graidAuthentication,onClick:C,disabled:u.disabled||a(o)},null,8,["title","disabled"])])],2),a(i)?V("",!0):(h(),F(W,{key:0},[u.disabled?(h(),F("p",ce,Q(e._lang.backoffice.login.loading),1)):V("",!0),l("div",ue,[r(c,{type:"secondary",size:"large",title:e._lang.backoffice.login.graidAuthentication,onClick:C,disabled:u.disabled||a(o)},null,8,["title","disabled"]),r(c,{type:"primary",size:"large",title:e._lang.backoffice.login.enterWithAdmin,onClick:s[3]||(s[3]=p=>X(i)?i.value=!a(i):i=!a(i)),disabled:u.disabled||a(o)},null,8,["title","disabled"])])],64))])]),_:1})}}},_e=T(pe,[["__scopeId","data-v-a78785b1"]]);export{_e as L,fe as _};