import{_ as x,j as y,k as m,c as q,l as E,w as f,n as i,p as s,s as a,m as e,H as b,v as u,A as j,B as k}from"./index-a14ad215.js";import{b as v}from"./helpers-71142cd6.js";import{m as U}from"./index.esm-88a1129f.js";const p=c=>(j("data-v-d0364f60"),c=c(),k(),c),w={class:"table-responsive"},C={class:"table table-container"},B={class:"table-head"},O={style:{width:"60%"},class:"table-head-column"},z={class:"text-center table-head-column"},I={class:"text-center table-head-column"},S={class:"table-body"},M={class:"level-1"},N={class:"text-center"},F={class:"d-flex justify-content-center gap-2 text-center"},H={class:"text-center"},L={class:"d-flex justify-content-center gap-2 text-center"},$={class:"level-1"},A={class:"text-center"},D={class:"d-flex justify-content-center gap-2 text-center"},R={class:"text-center"},G={class:"d-flex justify-content-center gap-2 text-center"},J={class:"level-1"},K={class:"text-center"},P={class:"d-flex justify-content-center gap-2 text-center"},Q={class:"text-center"},T={class:"d-flex justify-content-center gap-2 text-center"},W={class:"level-1"},X={class:"text-center"},Y={class:"d-flex justify-content-center gap-2 text-center"},Z={class:"text-center"},ee={class:"d-flex justify-content-center gap-2 text-center"},se={class:"level-1"},te={class:"text-center"},le={class:"d-flex justify-content-center gap-2 text-center"},de={class:"text-center"},oe={class:"d-flex justify-content-center gap-2 text-center"},ie={class:"level-1"},ae={class:"text-center"},ne={class:"d-flex justify-content-center gap-2 text-center"},re={class:"text-center"},ue={class:"d-flex justify-content-center gap-2 text-center"},ce={class:"table-head"},pe=p(()=>e("th",{style:{width:"60%"},class:"table-head-column"},null,-1)),me={class:"text-center table-head-column"},fe={class:"text-center table-head-column"},_e=p(()=>e("th",{class:"text-center table-head-column"},null,-1)),be={class:"table-body"},ve={class:"level-1"},ge={class:"text-center"},Ve={class:"d-flex justify-content-center gap-2 text-center"},he={class:"text-center"},xe={class:"d-flex justify-content-center gap-2 text-center"},ye=p(()=>e("td",{class:"text-center"},null,-1)),qe={class:"level-1"},Ee={class:"text-center"},je={class:"d-flex justify-content-center gap-2 text-center"},ke={class:"text-center"},Ue={class:"d-flex justify-content-center gap-2 text-center"},we=p(()=>e("td",{class:"text-center"},null,-1)),Ce={class:"level-1"},Be={class:"text-center"},Oe={class:"d-flex justify-content-center gap-2 text-center"},ze={class:"text-center"},Ie={class:"d-flex justify-content-center gap-2 text-center"},Se=p(()=>e("td",{class:"text-center"},null,-1)),Me={__name:"form",props:{modelValue:{type:Object,required:!0},loading:{type:Boolean,default:!1},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},vuelidator:{type:Object,default:{}}},emits:["update:modelValue"],setup(c,{emit:g}){const o=c,t=y({get(){return o.modelValue},set(n){g("update:modelValue",n)}});return(n,l)=>{const V=m("form-field"),_=m("row"),r=m("ccheckbox"),h=m("container-wrapper");return q(),E(h,null,{default:f(()=>[i(_,null,{default:f(()=>[i(V,{id:"name",class:"mb-3 col-12",modelValue:s(t).name,"onUpdate:modelValue":l[0]||(l[0]=d=>s(t).name=d),label:n._lang.label.perfilName,loading:o.loading,type:s(a).inputs.text,required:o.required,disabled:o.loading||o.disabled,maxlength:150,showError:o.required&&o.vuelidator.name.$error,"error-message":n._errorMessageField(o.vuelidator.name)},null,8,["modelValue","label","loading","type","required","disabled","showError","error-message"])]),_:1}),i(_,null,{default:f(()=>[e("div",w,[e("table",C,[e("thead",B,[e("tr",null,[e("th",O,[e("div",{"form-field":"",class:b({invalid:o.required&&o.vuelidator.permissions.$error&&!o.disabled," placeholder-glow":o.loading})},[e("label",{class:b(["form-label",{required:o.required&&!o.disabled}])},u(n._lang.backoffice.settings.profiles.permission),3)],2)]),e("th",z,u(n._lang.backoffice.settings.profiles.createEdit),1),e("th",I,u(n._lang.backoffice.settings.profiles.approve),1)])]),e("tbody",S,[e("tr",M,[e("td",null,u(n._lang.backoffice.settings.profiles.super),1),e("td",N,[e("div",F,[i(r,{modelValue:s(t).permissions,"onUpdate:modelValue":l[1]||(l[1]=d=>s(t).permissions=d),id:"super-createEdit",required:!0,disabled:!0,value:s(a).permissions.super.createEdit},null,8,["modelValue","value"])])]),e("td",H,[e("div",L,[i(r,{modelValue:s(t).permissions,"onUpdate:modelValue":l[2]||(l[2]=d=>s(t).permissions=d),id:"super-approve",required:!0,disabled:o.disabled,value:s(a).permissions.super.approve},null,8,["modelValue","disabled","value"])])])]),e("tr",$,[e("td",null,u(n._lang.backoffice.settings.profiles.organization),1),e("td",A,[e("div",D,[i(r,{modelValue:s(t).permissions,"onUpdate:modelValue":l[3]||(l[3]=d=>s(t).permissions=d),id:"organization-createEdit",required:!0,disabled:o.disabled,value:s(a).permissions.organization.createEdit},null,8,["modelValue","disabled","value"])])]),e("td",R,[e("div",G,[i(r,{modelValue:s(t).permissions,"onUpdate:modelValue":l[4]||(l[4]=d=>s(t).permissions=d),id:"organization-approve",required:!0,disabled:o.disabled,value:s(a).permissions.organization.approve},null,8,["modelValue","disabled","value"])])])]),e("tr",J,[e("td",null,u(n._lang.backoffice.settings.profiles.location),1),e("td",K,[e("div",P,[i(r,{modelValue:s(t).permissions,"onUpdate:modelValue":l[5]||(l[5]=d=>s(t).permissions=d),id:"location-createEdit",required:!0,disabled:o.disabled,value:s(a).permissions.location.createEdit},null,8,["modelValue","disabled","value"])])]),e("td",Q,[e("div",T,[i(r,{modelValue:s(t).permissions,"onUpdate:modelValue":l[6]||(l[6]=d=>s(t).permissions=d),id:"location-approve",required:!0,disabled:o.disabled,value:s(a).permissions.location.approve},null,8,["modelValue","disabled","value"])])])]),e("tr",W,[e("td",null,u(n._lang.backoffice.settings.profiles.service),1),e("td",X,[e("div",Y,[i(r,{modelValue:s(t).permissions,"onUpdate:modelValue":l[7]||(l[7]=d=>s(t).permissions=d),id:"service-createEdit",required:!0,disabled:o.disabled,value:s(a).permissions.service.createEdit},null,8,["modelValue","disabled","value"])])]),e("td",Z,[e("div",ee,[i(r,{modelValue:s(t).permissions,"onUpdate:modelValue":l[8]||(l[8]=d=>s(t).permissions=d),id:"service-approve",required:!0,disabled:o.disabled,value:s(a).permissions.service.approve},null,8,["modelValue","disabled","value"])])])]),e("tr",se,[e("td",null,u(n._lang.backoffice.settings.profiles.pointOfCare),1),e("td",te,[e("div",le,[i(r,{modelValue:s(t).permissions,"onUpdate:modelValue":l[9]||(l[9]=d=>s(t).permissions=d),id:"pointOfCare-createEdit",required:!0,disabled:o.disabled,value:s(a).permissions.pointOfCare.createEdit},null,8,["modelValue","disabled","value"])])]),e("td",de,[e("div",oe,[i(r,{modelValue:s(t).permissions,"onUpdate:modelValue":l[10]||(l[10]=d=>s(t).permissions=d),id:"pointOfCare-approve",required:!0,disabled:o.disabled,value:s(a).permissions.pointOfCare.approve},null,8,["modelValue","disabled","value"])])])]),e("tr",ie,[e("td",null,u(n._lang.backoffice.settings.profiles.document),1),e("td",ae,[e("div",ne,[i(r,{modelValue:s(t).permissions,"onUpdate:modelValue":l[11]||(l[11]=d=>s(t).permissions=d),id:"document-createEdit",required:!0,disabled:o.disabled,value:s(a).permissions.document.createEdit},null,8,["modelValue","disabled","value"])])]),e("td",re,[e("div",ue,[i(r,{modelValue:s(t).permissions,"onUpdate:modelValue":l[12]||(l[12]=d=>s(t).permissions=d),id:"document-approve",required:!0,disabled:o.disabled,value:s(a).permissions.document.approve},null,8,["modelValue","disabled","value"])])])])]),e("thead",ce,[e("tr",null,[pe,e("th",me,u(n._lang.backoffice.settings.profiles.createEdit),1),e("th",fe,u(n._lang.backoffice.settings.profiles.delete),1),_e])]),e("tbody",be,[e("tr",ve,[e("td",null,u(n._lang.backoffice.settings.profiles.parameter),1),e("td",ge,[e("div",Ve,[i(r,{modelValue:s(t).permissions,"onUpdate:modelValue":l[13]||(l[13]=d=>s(t).permissions=d),id:"parameter-createEdit",required:!0,disabled:o.disabled,value:s(a).permissions.parameter.createEdit},null,8,["modelValue","disabled","value"])])]),e("td",he,[e("div",xe,[i(r,{modelValue:s(t).permissions,"onUpdate:modelValue":l[14]||(l[14]=d=>s(t).permissions=d),id:"parameter-delete",required:!0,disabled:o.disabled,value:s(a).permissions.parameter.delete},null,8,["modelValue","disabled","value"])])]),ye]),e("tr",qe,[e("td",null,u(n._lang.backoffice.settings.profiles.users),1),e("td",Ee,[e("div",je,[i(r,{modelValue:s(t).permissions,"onUpdate:modelValue":l[15]||(l[15]=d=>s(t).permissions=d),id:"users-createEdit",required:!0,disabled:o.disabled,value:s(a).permissions.users.createEdit},null,8,["modelValue","disabled","value"])])]),e("td",ke,[e("div",Ue,[i(r,{modelValue:s(t).permissions,"onUpdate:modelValue":l[16]||(l[16]=d=>s(t).permissions=d),id:"users-delete",required:!0,disabled:o.disabled,value:s(a).permissions.users.delete},null,8,["modelValue","disabled","value"])])]),we]),e("tr",Ce,[e("td",null,u(n._lang.backoffice.settings.profiles.profiles),1),e("td",Be,[e("div",Oe,[i(r,{modelValue:s(t).permissions,"onUpdate:modelValue":l[17]||(l[17]=d=>s(t).permissions=d),id:"profiles-createEdit",required:!0,disabled:o.disabled,value:s(a).permissions.profiles.createEdit},null,8,["modelValue","disabled","value"])])]),e("td",ze,[e("div",Ie,[i(r,{modelValue:s(t).permissions,"onUpdate:modelValue":l[18]||(l[18]=d=>s(t).permissions=d),id:"profiles-delete",required:!0,disabled:o.disabled,value:s(a).permissions.profiles.delete},null,8,["modelValue","disabled","value"])])]),Se])])])])]),_:1})]),_:1})}}},Le=x(Me,[["__scopeId","data-v-d0364f60"]]),$e={formRules(){return{name:{required:v.requiredMessage()},permissions:{minLength:U(1),required:v.requiredMessage()}}}};export{$e as h,Le as p};
