import{d as H,_ as K,L as M,a3 as W,o as G,B as R,h as U,r as b,l as i,c,e as v,s as e,F as A,q as r,n as d,p as n,y as Q,x as z,m as T,A as B,u as I,af as X,z as F,v as p,ak as Y,I as Z,C as ee,D as te,i as ae,a as oe,J as E}from"./index-80ba5b4e.js";import{i as k}from"./import-2e2c57b3.js";const j=H("ImportStore",{state:()=>({importCodeList:[]}),getters:{},actions:{addImportCode(u){this.importCodeList.push(u)},revomeImportCodeById(u){const h=this.importCodeList.findIndex(C=>C.code===u);return h>-1?(this.importCodeList.splice(h,1),!0):!1},resetList(){this.importCodeList=[]}},persist:{enabled:!0,strategies:[{key:"params-import",storage:localStorage,paths:["importCodeList"]}]}});const D=u=>(ee("data-v-9e029bfa"),u=u(),te(),u),se=D(()=>n("span",{class:"label placeholder"},null,-1)),le=D(()=>n("span",{class:"counter placeholder"},null,-1)),ne={key:1},re={class:"label col-9"},ie={class:"col-3 card-date"},ce={class:"progress"},de=["aria-valuenow"],ue={class:"table table-container"},me=D(()=>n("thead",{class:"table-head"},[n("tr",null,[n("th",{class:"table-head-column"},"Descrição")])],-1)),pe={class:"table-body"},_e={__name:"import-card",props:{item:{type:Object,required:!0},loading:{type:Boolean,default:!1}},setup(u){const h=u;M(async()=>{}),W(()=>{}),G(()=>{C.on(R.emitter.SEND_IMPORT_STATUS,async a=>{let y=JSON.parse(a);t.value.id==y.id&&(t.value=y)})}),j();const C=U();var _=b(!1),t=b(h.item);async function m(){_.value=!0;let a=await k.getFile(t.value.id);I.validateResponse(a,null,async()=>{L(a.data)}),_.value=!1}const L=a=>{const y=`data:${a.mime};base64,${a.data}`,f=document.createElement("a");f.href=y,f.download=a.name,f.click()};return(a,y)=>{var s;const f=i("icon-danger"),w=i("row"),S=i("accordion"),o=i("cbutton");return c(),v("div",{class:Z(["mb-3 row home-card placeholder-glow",{active:!1}])},[e(_)?(c(),v(A,{key:0},[se,le],64)):(c(),v("div",ne,[r(w,{class:""},{default:d(()=>{var l;return[n("h6",re,[Q(z(e(t).filenameInitial)+" ",1),((l=e(t).errors)==null?void 0:l.length)>0?(c(),T(f,{key:0,class:"p-hand","data-bs-toggle":"tooltip","data-bs-title":a._lang.common.importWithErrors},null,8,["data-bs-title"])):B("",!0)]),n("div",ie,z(e(I).formatDate(e(t).created,"DD/MM/yyyy HH:mm")),1)]}),_:1}),r(w,{class:"mb-3"},{default:d(()=>[n("div",ce,[n("div",{class:"progress-bar bg-success",role:"progressbar",style:X({width:e(t).status+"%"}),"aria-valuenow":e(t).status,"aria-valuemin":"0","aria-valuemax":"100"},z(e(t).status)+"% ",13,de)])]),_:1}),((s=e(t).errors)==null?void 0:s.length)>0?(c(),T(S,{key:0,id:"errors",title:a._lang.common.errors,collapsed:!1,class:"mb-4 bg-transparent"},{default:d(()=>[r(w,null,{default:d(()=>[n("table",ue,[me,n("tbody",pe,[(c(!0),v(A,null,F(e(t).errors,(l,V)=>(c(),v("tr",{key:V},[n("td",null,[n("span",null,z(l),1)])]))),128))])])]),_:1})]),_:1},8,["title"])):B("",!0),e(t).status===100?(c(),T(w,{key:1,style:{"justify-content":"right"}},{default:d(()=>[r(o,{class:"col-12 col-sm-auto",id:"download-file",onClick:m,"data-bs-toggle":"tooltip",title:a._lang.common.downloadAttachment,size:e(p).buttonSize.small,icon:Y,type:e(p).buttonType.secondary},null,8,["title","size","type"])]),_:1})):B("",!0)]))])}}},be=K(_e,[["__scopeId","data-v-9e029bfa"]]),ye={class:"col-12 hstack gap-2 mt-3"},ve={__name:"index",setup(u){const h=ae();j();const C=U();var _=b(!1),t=b(null),m=b(null),L=b([]);b([]);var a=b([]),y=b(0);M(async()=>{L.value=I.convertEnumToArray(h.enums.importType),C.on(R.emitter.SEND_IMPORT_STATUS,async o=>{let s=JSON.parse(o);a.value.some(l=>l.id==s.id)||await S()}),await S()}),oe(()=>{});function f(){m.value=null,t.value=null}async function w(o){_.value=!0;let s={data:m.value.data,name:m.value.name},l=null;switch(t.value){case p.importType.organization:l=await k.organization(s);break;case p.importType.service:l=await k.service(s);break;case p.importType.location:l=await k.location(s);break;case p.importType.servicePoint:l=await k.pointOfCare(s);break}I.validateResponseAsync(l,"Importação iniciada",async()=>{f(),await S(),y.value++}),_.value=!1}async function S(){const o=await k.getAll();I.validateResponse(o,null,()=>{a.value=o.data})}return(o,s)=>{const l=i("breadcrumb-item"),V=i("breadcrumb"),N=i("form-field"),O=i("row"),q=i("cbutton"),J=i("accordion"),P=i("card"),$=i("page");return c(),T($,{title:o._lang.backoffice.settings.import.pageTitle},{breadcrumb:d(()=>[r(V,{"has-home":!0},{default:d(()=>[r(l,{label:o._lang.backoffice.settings.import.pageTitle},null,8,["label"])]),_:1})]),default:d(()=>[r(P,{shadow:!0},{body:d(()=>[r(J,{id:"newImport",title:o._lang.common.newImport,collapsed:!0,class:"mb-4"},{default:d(()=>[r(O,null,{default:d(()=>[r(N,{id:"importType",class:"mb-3 col-12 col-lg-4",modelValue:e(t),"onUpdate:modelValue":s[0]||(s[0]=g=>E(t)?t.value=g:t=g),label:o._lang.label.objectType,loading:e(_),type:e(p).inputs.multiselect,placeholder:o._lang.common.selectOption,options:e(L)},null,8,["modelValue","label","loading","type","placeholder","options"]),r(N,{id:"document",class:"mb-3 col-12 col-lg-8",modelValue:e(m),"onUpdate:modelValue":s[1]||(s[1]=g=>E(m)?m.value=g:m=g),label:o._lang.label.document,loading:e(_),type:e(p).inputs.file,required:!0},null,8,["modelValue","label","loading","type"])]),_:1}),r(O,null,{default:d(()=>[n("div",ye,[r(q,{class:"ms-auto",type:e(p).buttonType.primary,title:o._lang.common.import,onClick:w,size:e(p).buttonSize.medium,disabled:e(t)==null||e(m)==null||e(_)},null,8,["type","title","size","disabled"])])]),_:1})]),_:1},8,["title"]),(c(),v("div",{class:"mb-3 gap-5",cards:"",key:e(y)},[(c(!0),v(A,null,F(e(a),(g,x)=>(c(),T(be,{key:x,item:g},null,8,["item"]))),128))]))]),_:1})]),_:1},8,["title"])}}};export{ve as default};
