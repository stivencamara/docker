import{u as k,h as p,_ as A}from"./business-event-86d6417f.js";import{_ as F}from"./edit-actions-48107c1a.js";import{m as T,N as V,x as y,r as m,y as v,A as C,I as _,a as i,b as h,c as w,w as u,d as r,f as e,s as E,i as c}from"./index-920dbb37.js";import{u as U}from"./index.esm-d064d6e3.js";import{b as G}from"./business-event-05a0ae81.js";import{b as d}from"./helpers-4c156364.js";import"./cancel-confirm-33e0b7cc.js";import"./settings-bb7269a2.js";import"./index.esm-d0811cb6.js";const D={__name:"create",setup(P){T(),V(),y();const L=k();let l=m(!1),s=v(p.newForm()),t=m(C.language.pt),b=v(p.formRules()),S=m(0);const g=U(b,s);return _({get(){return d.getFieldByLangAndName(s,t.value,"businessEventLevel1")},set(a){d.setFieldByLangAndName(s,t.value,"businessEventLevel1",a)}}),_({get(){return d.getFieldByLangAndName(s,t.value,"businessEventLevel2")},set(a){d.setFieldByLangAndName(s,t.value,"businessEventLevel2",a)}}),(a,o)=>{const f=i("breadcrumb-item"),N=i("breadcrumb"),B=i("card"),I=i("page");return h(),w(I,{title:a._lang.backoffice.settings.businessEvent.createPageTitle},{breadcrumb:u(()=>[r(N,{"has-home":!0},{default:u(()=>[r(f,{label:a._lang.backoffice.settings.businessEvent.breadcrumbTitle,"router-path":e(E).router.BACKOFFICE_SETTINGS_BUSINESSEVENT_PAGE.path},null,8,["label","router-path"]),r(f,{label:a._lang.backoffice.settings.businessEvent.createPageTitle},null,8,["label"])]),_:1})]),actions:u(()=>[r(F,{loading:e(l),"onUpdate:loading":o[0]||(o[0]=n=>c(l)?l.value=n:l=n),selectedLang:e(t),"onUpdate:selectedLang":o[1]||(o[1]=n=>c(t)?t.value=n:t=n),service:e(G),itemId:e(S),formModel:e(s),vuelidate:e(g),store:e(L),resource:a._lang.backoffice.settings.businessEvent,"back-route":e(E).router.BACKOFFICE_SETTINGS_BUSINESSEVENT_PAGE.name,"show-lang-selector":!0,"can-delete":!1,"can-edit":!0},null,8,["loading","selectedLang","service","itemId","formModel","vuelidate","store","resource","back-route"])]),default:u(()=>[r(B,{shadow:!0},{body:u(()=>[r(A,{modelValue:e(s),"onUpdate:modelValue":o[2]||(o[2]=n=>c(s)?s.value=n:s=n),selectedLang:e(t),loading:e(l),disabled:e(l),vuelidate:e(g),rules:e(b)},null,8,["modelValue","selectedLang","loading","disabled","vuelidate","rules"])]),_:1})]),_:1},8,["title"])}}};export{D as default};
