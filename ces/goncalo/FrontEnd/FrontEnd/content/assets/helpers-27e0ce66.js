import{_ as x,k as y,l as p,c as q,m as E,n as f,q as i,s,v as n,p as e,K as b,x as u,D as k,E as j}from"./index-6321ead1.js";import{b as v}from"./helpers-35400f08.js";import{m as U}from"./index.esm-ad78f132.js";const m=c=>(k("data-v-701dc9ab"),c=c(),j(),c),w={class:"table-responsive"},z={class:"table table-container"},C={class:"table-head"},O={style:{width:"60%"},class:"table-head-column"},B={class:"text-center table-head-column"},I={class:"text-center table-head-column"},S={class:"table-body"},M={class:"level-1"},N={class:"text-center"},D={class:"d-flex justify-content-center gap-2 text-center"},F={class:"text-center"},L={class:"d-flex justify-content-center gap-2 text-center"},$={class:"level-1"},H={class:"text-center"},K={class:"d-flex justify-content-center gap-2 text-center"},R={class:"text-center"},A={class:"d-flex justify-content-center gap-2 text-center"},G={class:"level-1"},J={class:"text-center"},P={class:"d-flex justify-content-center gap-2 text-center"},Q={class:"text-center"},T={class:"d-flex justify-content-center gap-2 text-center"},W={class:"level-1"},X={class:"text-center"},Y={class:"d-flex justify-content-center gap-2 text-center"},Z={class:"text-center"},ee={class:"d-flex justify-content-center gap-2 text-center"},se={class:"level-1"},te={class:"text-center"},le={class:"d-flex justify-content-center gap-2 text-center"},de={class:"text-center"},oe={class:"d-flex justify-content-center gap-2 text-center"},ie={class:"level-1"},ae={class:"text-center"},ne={class:"d-flex justify-content-center gap-2 text-center"},re={class:"text-center"},ue={class:"d-flex justify-content-center gap-2 text-center"},ce={class:"table-head"},pe=m(()=>e("th",{style:{width:"60%"},class:"table-head-column"},null,-1)),me={class:"text-center table-head-column"},fe={class:"text-center table-head-column"},_e={class:"table-body"},be={class:"level-1"},ve={class:"text-center"},ge={class:"d-flex justify-content-center gap-2 text-center"},he={class:"text-center"},Ve={class:"d-flex justify-content-center gap-2 text-center"},xe={class:"level-1"},ye={class:"text-center"},qe={class:"d-flex justify-content-center gap-2 text-center"},Ee={class:"text-center"},ke={class:"d-flex justify-content-center gap-2 text-center"},je={class:"level-1"},Ue={class:"text-center"},we={class:"d-flex justify-content-center gap-2 text-center"},ze={class:"text-center"},Ce={class:"d-flex justify-content-center gap-2 text-center"},Oe={class:"table-head"},Be=m(()=>e("th",{style:{width:"60%"},class:"table-head-column"},null,-1)),Ie=m(()=>e("th",{class:"text-center table-head-column"},null,-1)),Se={class:"text-center table-head-column"},Me={class:"table-body"},Ne={class:"level-1"},De=m(()=>e("td",{class:"text-center"},null,-1)),Fe={class:"text-center"},Le={class:"d-flex justify-content-center gap-2 text-center"},$e={__name:"form",props:{modelValue:{type:Object,required:!0},loading:{type:Boolean,default:!1},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},vuelidator:{type:Object,default:{}}},emits:["update:modelValue"],setup(c,{emit:g}){const o=c,t=y({get(){return o.modelValue},set(a){g("update:modelValue",a)}});return(a,l)=>{const h=p("form-field"),_=p("row"),r=p("ccheckbox"),V=p("container-wrapper");return q(),E(V,null,{default:f(()=>[i(_,null,{default:f(()=>[i(h,{id:"name",class:"mb-3 col-12",modelValue:s(t).name,"onUpdate:modelValue":l[0]||(l[0]=d=>s(t).name=d),label:a._lang.label.perfilName,loading:o.loading,type:s(n).inputs.text,required:o.required,disabled:o.loading||o.disabled,maxlength:150,showError:o.required&&o.vuelidator.name.$error,"error-message":a._errorMessageField(o.vuelidator.name)},null,8,["modelValue","label","loading","type","required","disabled","showError","error-message"])]),_:1}),i(_,null,{default:f(()=>[e("div",w,[e("table",z,[e("thead",C,[e("tr",null,[e("th",O,[e("div",{"form-field":"",class:b({invalid:o.required&&o.vuelidator.permissions.$error&&!o.disabled," placeholder-glow":o.loading})},[e("label",{class:b(["form-label",{required:o.required&&!o.disabled}])},u(a._lang.backoffice.settings.profiles.permission),3)],2)]),e("th",B,u(a._lang.backoffice.settings.profiles.createEdit),1),e("th",I,u(a._lang.backoffice.settings.profiles.approve),1)])]),e("tbody",S,[e("tr",M,[e("td",null,u(a._lang.backoffice.settings.profiles.super),1),e("td",N,[e("div",D,[i(r,{modelValue:s(t).permissions,"onUpdate:modelValue":l[1]||(l[1]=d=>s(t).permissions=d),id:"super-createEdit",required:!0,disabled:!0,value:s(n).permissions.super.createEdit},null,8,["modelValue","value"])])]),e("td",F,[e("div",L,[i(r,{modelValue:s(t).permissions,"onUpdate:modelValue":l[2]||(l[2]=d=>s(t).permissions=d),id:"super-approve",required:!0,disabled:o.disabled,value:s(n).permissions.super.approve},null,8,["modelValue","disabled","value"])])])]),e("tr",$,[e("td",null,u(a._lang.backoffice.settings.profiles.organization),1),e("td",H,[e("div",K,[i(r,{modelValue:s(t).permissions,"onUpdate:modelValue":l[3]||(l[3]=d=>s(t).permissions=d),id:"organization-createEdit",required:!0,disabled:o.disabled,value:s(n).permissions.organization.createEdit},null,8,["modelValue","disabled","value"])])]),e("td",R,[e("div",A,[i(r,{modelValue:s(t).permissions,"onUpdate:modelValue":l[4]||(l[4]=d=>s(t).permissions=d),id:"organization-approve",required:!0,disabled:o.disabled,value:s(n).permissions.organization.approve},null,8,["modelValue","disabled","value"])])])]),e("tr",G,[e("td",null,u(a._lang.backoffice.settings.profiles.location),1),e("td",J,[e("div",P,[i(r,{modelValue:s(t).permissions,"onUpdate:modelValue":l[5]||(l[5]=d=>s(t).permissions=d),id:"location-createEdit",required:!0,disabled:o.disabled,value:s(n).permissions.location.createEdit},null,8,["modelValue","disabled","value"])])]),e("td",Q,[e("div",T,[i(r,{modelValue:s(t).permissions,"onUpdate:modelValue":l[6]||(l[6]=d=>s(t).permissions=d),id:"location-approve",required:!0,disabled:o.disabled,value:s(n).permissions.location.approve},null,8,["modelValue","disabled","value"])])])]),e("tr",W,[e("td",null,u(a._lang.backoffice.settings.profiles.service),1),e("td",X,[e("div",Y,[i(r,{modelValue:s(t).permissions,"onUpdate:modelValue":l[7]||(l[7]=d=>s(t).permissions=d),id:"service-createEdit",required:!0,disabled:o.disabled,value:s(n).permissions.service.createEdit},null,8,["modelValue","disabled","value"])])]),e("td",Z,[e("div",ee,[i(r,{modelValue:s(t).permissions,"onUpdate:modelValue":l[8]||(l[8]=d=>s(t).permissions=d),id:"service-approve",required:!0,disabled:o.disabled,value:s(n).permissions.service.approve},null,8,["modelValue","disabled","value"])])])]),e("tr",se,[e("td",null,u(a._lang.backoffice.settings.profiles.pointOfCare),1),e("td",te,[e("div",le,[i(r,{modelValue:s(t).permissions,"onUpdate:modelValue":l[9]||(l[9]=d=>s(t).permissions=d),id:"pointOfCare-createEdit",required:!0,disabled:o.disabled,value:s(n).permissions.pointOfCare.createEdit},null,8,["modelValue","disabled","value"])])]),e("td",de,[e("div",oe,[i(r,{modelValue:s(t).permissions,"onUpdate:modelValue":l[10]||(l[10]=d=>s(t).permissions=d),id:"pointOfCare-approve",required:!0,disabled:o.disabled,value:s(n).permissions.pointOfCare.approve},null,8,["modelValue","disabled","value"])])])]),e("tr",ie,[e("td",null,u(a._lang.backoffice.settings.profiles.document),1),e("td",ae,[e("div",ne,[i(r,{modelValue:s(t).permissions,"onUpdate:modelValue":l[11]||(l[11]=d=>s(t).permissions=d),id:"document-createEdit",required:!0,disabled:o.disabled,value:s(n).permissions.document.createEdit},null,8,["modelValue","disabled","value"])])]),e("td",re,[e("div",ue,[i(r,{modelValue:s(t).permissions,"onUpdate:modelValue":l[12]||(l[12]=d=>s(t).permissions=d),id:"document-approve",required:!0,disabled:o.disabled,value:s(n).permissions.document.approve},null,8,["modelValue","disabled","value"])])])])]),e("thead",ce,[e("tr",null,[pe,e("th",me,u(a._lang.backoffice.settings.profiles.createEdit),1),e("th",fe,u(a._lang.backoffice.settings.profiles.delete),1)])]),e("tbody",_e,[e("tr",be,[e("td",null,u(a._lang.backoffice.settings.profiles.parameter),1),e("td",ve,[e("div",ge,[i(r,{modelValue:s(t).permissions,"onUpdate:modelValue":l[13]||(l[13]=d=>s(t).permissions=d),id:"parameter-createEdit",required:!0,disabled:o.disabled,value:s(n).permissions.parameter.createEdit},null,8,["modelValue","disabled","value"])])]),e("td",he,[e("div",Ve,[i(r,{modelValue:s(t).permissions,"onUpdate:modelValue":l[14]||(l[14]=d=>s(t).permissions=d),id:"parameter-delete",required:!0,disabled:o.disabled,value:s(n).permissions.parameter.delete},null,8,["modelValue","disabled","value"])])])]),e("tr",xe,[e("td",null,u(a._lang.backoffice.settings.profiles.users),1),e("td",ye,[e("div",qe,[i(r,{modelValue:s(t).permissions,"onUpdate:modelValue":l[15]||(l[15]=d=>s(t).permissions=d),id:"users-createEdit",required:!0,disabled:o.disabled,value:s(n).permissions.users.createEdit},null,8,["modelValue","disabled","value"])])]),e("td",Ee,[e("div",ke,[i(r,{modelValue:s(t).permissions,"onUpdate:modelValue":l[16]||(l[16]=d=>s(t).permissions=d),id:"users-delete",required:!0,disabled:o.disabled,value:s(n).permissions.users.delete},null,8,["modelValue","disabled","value"])])])]),e("tr",je,[e("td",null,u(a._lang.backoffice.settings.profiles.profiles),1),e("td",Ue,[e("div",we,[i(r,{modelValue:s(t).permissions,"onUpdate:modelValue":l[17]||(l[17]=d=>s(t).permissions=d),id:"profiles-createEdit",required:!0,disabled:o.disabled,value:s(n).permissions.profiles.createEdit},null,8,["modelValue","disabled","value"])])]),e("td",ze,[e("div",Ce,[i(r,{modelValue:s(t).permissions,"onUpdate:modelValue":l[18]||(l[18]=d=>s(t).permissions=d),id:"profiles-delete",required:!0,disabled:o.disabled,value:s(n).permissions.profiles.delete},null,8,["modelValue","disabled","value"])])])])]),e("thead",Oe,[e("tr",null,[Be,Ie,e("th",Se,u(a._lang.backoffice.settings.profiles.order),1)])]),e("tbody",Me,[e("tr",Ne,[e("td",null,u(a._lang.backoffice.settings.profiles.orderOrganization),1),De,e("td",Fe,[e("div",Le,[i(r,{modelValue:s(t).permissions,"onUpdate:modelValue":l[19]||(l[19]=d=>s(t).permissions=d),id:"parameter-order",required:!0,disabled:o.disabled,value:s(n).permissions.organization.order},null,8,["modelValue","disabled","value"])])])])])])])]),_:1})]),_:1})}}},Ae=x($e,[["__scopeId","data-v-701dc9ab"]]),Ge={formRules(){return{name:{required:v.requiredMessage()},permissions:{minLength:U(1),required:v.requiredMessage()}}}};export{Ge as h,Ae as p};
