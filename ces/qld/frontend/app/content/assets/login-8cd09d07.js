import{u as T}from"./index.esm-61763a8c.js";import{c as C,r as U,e as I,m as N}from"./index.esm-eed786a6.js";import{n as O,q as P,i as A,h as G,u as K,s as j,r as g,o as h,c as H,w as W,f as t,m as a,l as B,a as i,t as J,v as S,e as F,F as Q,x as X,y as L,z as Y,k as f,A as V,j as _}from"./index-60da5de7.js";import{u as Z}from"./organic-c14856e4.js";const x={login:m=>O.post("/system/login",{clientId:m.clientId,clientSecret:m.clientSecret})},ue="/images/login.svg",ee="/images/logo-blue.svg";const ae={class:"ms-4"},se=["data-bs-title","alt"],oe=t("div",{class:"text-center mb-5"},[t("img",{width:"220",alt:"CES",src:ee})],-1),te={class:"d-grid gap-4 py-3"},le={key:0,class:"m-auto"},ne={class:"d-grid gap-4 py-3"},me={__name:"login",props:{disabled:{type:Boolean,default:!1}},setup(m){const c=m,w=P();let o=A(!1);const v=G(),q=Z(),{executeRecaptcha:R,recaptchaLoaded:$}=K();let l=j({username:"stiven.camara@babelgroup.com",password:"P@ssw0rd",recaptchaToken:null}),n=A(!1);const y=C.withMessage(w.common.requiredField,U),D={username:{required:y,email:I},password:{required:y,minLength:C.withMessage(({$params:e})=>w.common.minLengthField.replace("{0}",e.min),N(8))}},r=T(D,l);async function E(){if(o.value=!0,await r.value.$validate(),!r.value.$error){await $();const e=await R("login");if(e){l.recaptchaToken=e,f.setUser(null);const s=await V.backofficeLogin(l);_.validateResponse(s,null,()=>{const b=s.data.token,p=s.data.expiration,d=f.create(b,p);f.setUser(d),q.resetLis(),v.push({name:B.router.BACKOFFICE_TASKS_PAGE.name})})}}o.value=!1}async function k(){o.value=!0;let e=await x.login({clientId:"B2881296-50A3-4FB2-A16C-2D298A718B3C",clientSecret:"25853D3A-5227-43BA-9449-D1EBC397D9D9"});await _.validateResponseAsync(e,null,async()=>{f.setSys(e.data);let s=await V.getUrl("B2881296-50A3-4FB2-A16C-2D298A718B3C");_.validateResponse(s,null,()=>{window.location.href=s.data})}),o.value=!1}function z(e){v.push({name:e})}return(e,s)=>{const b=g("iconArrowLeft"),p=g("form-field"),d=g("cbutton"),M=g("card");return h(),H(M,{"card-login":""},{body:W(()=>[t("div",ae,[t("a",{class:"p-hand","data-bs-toggle":"tooltip","data-bs-title":e._lang.common.back,alt:e._lang.header.notifications,onClick:s[0]||(s[0]=u=>z(a(B).router.HOME_PAGE.name)),"aria-controls":"offcanvasRight"},[i(b,{color:"black"})],8,se)]),t("form",null,[oe,t("div",{class:J(["login-backoffice",{show:a(n)}])},[i(p,{autocomplete:"email",type:a(S).inputs.email,id:"email",label:e._lang.label.email,required:!0,class:"mb-3",modelValue:a(l).username,"onUpdate:modelValue":s[1]||(s[1]=u=>a(l).username=u),disabled:a(o),"show-error":a(r).username.$error,"error-message":e._errorMessageField(a(r).username),placeholder:e._lang.common.add},null,8,["type","label","modelValue","disabled","show-error","error-message","placeholder"]),i(p,{type:a(S).inputs.password,id:"password",label:e._lang.label.password,required:!0,class:"mb-3",modelValue:a(l).password,"onUpdate:modelValue":s[2]||(s[2]=u=>a(l).password=u),disabled:a(o),"show-error":a(r).password.$error,"error-message":e._errorMessageField(a(r).password),placeholder:e._lang.common.add},null,8,["type","label","modelValue","disabled","show-error","error-message","placeholder"]),t("div",te,[i(d,{type:"primary",size:"large",title:e._lang.backoffice.login.enter,onClick:E,disabled:c.disabled||a(o)},null,8,["title","disabled"]),i(d,{type:"secondary",size:"large",title:e._lang.backoffice.login.graidAuthentication,onClick:k,disabled:c.disabled||a(o)},null,8,["title","disabled"])])],2),a(n)?L("",!0):(h(),F(Q,{key:0},[c.disabled?(h(),F("p",le,X(e._lang.backoffice.login.loading),1)):L("",!0),t("div",ne,[i(d,{type:"secondary",size:"large",title:e._lang.backoffice.login.graidAuthentication,onClick:k,disabled:c.disabled||a(o)},null,8,["title","disabled"]),i(d,{type:"primary",size:"large",title:e._lang.backoffice.login.enterWithAdmin,onClick:s[3]||(s[3]=u=>Y(n)?n.value=!a(n):n=!a(n)),disabled:c.disabled||a(o)},null,8,["title","disabled"])])],64))])]),_:1})}}};export{me as _,ue as a};
