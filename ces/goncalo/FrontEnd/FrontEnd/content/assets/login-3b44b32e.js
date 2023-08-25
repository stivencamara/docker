import{u as M}from"./index.esm-ba4feb27.js";import{c as C,r as T,e as U,m as G}from"./index.esm-da08cc71.js";import{b as N,_ as O,i as H,r as A,g as K,C as P,E as W,k as g,c as _,l as j,w as J,m as l,p as a,z as B,n as r,G as Q,s as S,e as L,F as X,v as Y,y as F,H as Z,D as f,I as V,u as h,A as x,B as ee}from"./index-074485c3.js";import{u as ae}from"./organic-d9a69501.js";const se={login:t=>N.post("/system/login",{clientId:t.clientId,clientSecret:t.clientSecret})},be="/images/login.svg",oe="/images/logo-blue.svg";const te=t=>(x("data-v-f4d0135c"),t=t(),ee(),t),le={class:"ms-4"},ne=["data-bs-title","alt"],ie=te(()=>l("div",{class:"text-center mb-5"},[l("img",{width:"220",alt:"CES",src:oe})],-1)),re={class:"d-grid gap-4 py-3"},de={key:0,class:"m-auto"},ce={class:"d-grid gap-4 py-3"},ue={__name:"login",props:{disabled:{type:Boolean,default:!1}},setup(t){const u=t,v=H();let o=A(!1);const w=K(),I=ae(),{executeRecaptcha:D,recaptchaLoaded:E}=P();let n=W({username:null,password:null,recaptchaToken:null}),i=A(!1);const y=C.withMessage(v.common.requiredField,T),R={username:{required:y,email:U},password:{required:y,minLength:C.withMessage(({$params:e})=>v.common.minLengthField.replace("{0}",e.min),G(8))}},d=M(R,n);async function $(){if(o.value=!0,await d.value.$validate(),!d.value.$error){await E();const e=await D("login");if(e){n.recaptchaToken=e,f.setUser(null);const s=await V.backofficeLogin(n);h.validateResponse(s,null,()=>{const b=s.data.token,p=s.data.expiration,c=f.create(b,p);f.setUser(c),I.resetLis(),w.push({name:B.router.BACKOFFICE_TASKS_PAGE.name})})}}o.value=!1}async function k(){o.value=!0;let e=await se.login({clientId:"B2881296-50A3-4FB2-A16C-2D298A718B3C",clientSecret:"25853D3A-5227-43BA-9449-D1EBC397D9D9"});await h.validateResponseAsync(e,null,async()=>{f.setSys(e.data);let s=await V.getUrl("B2881296-50A3-4FB2-A16C-2D298A718B3C");h.validateResponse(s,null,()=>{window.location.href=s.data})}),o.value=!1}function q(e){w.push({name:e})}return(e,s)=>{const b=g("iconArrowLeft"),p=g("form-field"),c=g("cbutton"),z=g("card");return _(),j(z,{"card-login":""},{body:J(()=>[l("div",le,[l("a",{class:"p-hand","data-bs-toggle":"tooltip","data-bs-title":e._lang.common.back,alt:e._lang.header.notifications,onClick:s[0]||(s[0]=m=>q(a(B).router.HOME_PAGE.name)),"aria-controls":"offcanvasRight"},[r(b,{color:"black"})],8,ne)]),l("form",null,[ie,l("div",{class:Q(["login-backoffice",{show:a(i)}])},[r(p,{autocomplete:"email",type:a(S).inputs.email,id:"email",label:e._lang.label.email,required:!0,class:"mb-3",modelValue:a(n).username,"onUpdate:modelValue":s[1]||(s[1]=m=>a(n).username=m),disabled:a(o),"show-error":a(d).username.$error,"error-message":e._errorMessageField(a(d).username),placeholder:e._lang.common.add},null,8,["type","label","modelValue","disabled","show-error","error-message","placeholder"]),r(p,{type:a(S).inputs.password,id:"password",label:e._lang.label.password,required:!0,class:"mb-3",modelValue:a(n).password,"onUpdate:modelValue":s[2]||(s[2]=m=>a(n).password=m),disabled:a(o),"show-error":a(d).password.$error,"error-message":e._errorMessageField(a(d).password),placeholder:e._lang.common.add},null,8,["type","label","modelValue","disabled","show-error","error-message","placeholder"]),l("div",re,[r(c,{type:"primary",size:"large",title:e._lang.backoffice.login.enter,onClick:$,disabled:u.disabled||a(o)},null,8,["title","disabled"]),r(c,{type:"secondary",size:"large",title:e._lang.backoffice.login.graidAuthentication,onClick:k,disabled:u.disabled||a(o)},null,8,["title","disabled"])])],2),a(i)?F("",!0):(_(),L(X,{key:0},[u.disabled?(_(),L("p",de,Y(e._lang.backoffice.login.loading),1)):F("",!0),l("div",ce,[r(c,{type:"secondary",size:"large",title:e._lang.backoffice.login.graidAuthentication,onClick:k,disabled:u.disabled||a(o)},null,8,["title","disabled"]),r(c,{type:"primary",size:"large",title:e._lang.backoffice.login.enterWithAdmin,onClick:s[3]||(s[3]=m=>Z(i)?i.value=!a(i):i=!a(i)),disabled:u.disabled||a(o)},null,8,["title","disabled"])])],64))])]),_:1})}}},_e=O(ue,[["__scopeId","data-v-f4d0135c"]]);export{_e as L,be as _};
