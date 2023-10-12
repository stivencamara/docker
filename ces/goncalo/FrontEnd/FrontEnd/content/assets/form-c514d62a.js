import{i as E,j as y,k as v,c as h,e as B,n as r,w as p,p as a,s as m,I as F,F as x}from"./index-c417b10a.js";import{b}from"./helpers-422844e7.js";const U={__name:"form",props:{modelValue:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},validateForm:{type:Boolean,default:!1},selectedLang:{type:[String,Number],required:!0},vuelidate:{type:Object,default:null}},emits:["update:modelValue"],setup(u,{emit:L}){const e=u;E();const s=y({get(){return e.modelValue},set(l){L("update:modelValue",l)}}),c=y({get(){return b.getFieldByLangAndName(e.modelValue,e.selectedLang,"name")},set(l){b.setFieldByLangAndName(e.modelValue,e.selectedLang,"name",l)}}),f=y({get(){return b.getFieldByLangAndName(e.modelValue,e.selectedLang,"description")},set(l){b.setFieldByLangAndName(e.modelValue,e.selectedLang,"description",l)}});return(l,d)=>{const i=v("form-field"),g=v("row");return h(),B(x,null,[r(g,null,{default:p(()=>{var o,t,n,w;return[r(i,{id:"code",modelValue:a(s).code,"onUpdate:modelValue":d[0]||(d[0]=V=>a(s).code=V),class:"mb-3 col-12",label:l._lang.label.code,type:a(m).inputs.text,rows:3,maxlength:64,disabled:u.loading,required:!0,showError:(o=e.vuelidate)==null?void 0:o.code.$error,"error-message":l._errorMessageField((t=e.vuelidate)==null?void 0:t.code)},null,8,["modelValue","label","type","disabled","showError","error-message"]),r(i,{id:"name",modelValue:a(c),"onUpdate:modelValue":d[1]||(d[1]=V=>F(c)?c.value=V:null),class:"mb-3 col-12",label:l._lang.label.name,type:a(m).inputs.text,rows:3,maxlength:255,disabled:u.loading,required:!0,showError:l._showErrorFieldWhenTexts((n=e.vuelidate)==null?void 0:n.texts,"name"),"error-message":l._errorMessageFieldWhenTexts((w=e.vuelidate)==null?void 0:w.texts,"name"),language:e.selectedLang},null,8,["modelValue","label","type","disabled","showError","error-message","language"])]}),_:1}),r(g,null,{default:p(()=>{var o,t;return[r(i,{id:"description",modelValue:a(f),"onUpdate:modelValue":d[2]||(d[2]=n=>F(f)?f.value=n:null),class:"mb-3 col-12",label:l._lang.label.description,type:a(m).inputs.textarea,rows:3,maxlength:2048,disabled:u.loading,required:!0,showError:l._showErrorFieldWhenTexts((o=e.vuelidate)==null?void 0:o.texts,"description"),"error-message":l._errorMessageFieldWhenTexts((t=e.vuelidate)==null?void 0:t.texts,"description"),language:e.selectedLang},null,8,["modelValue","label","type","disabled","showError","error-message","language"])]}),_:1}),r(g,null,{default:p(()=>[r(i,{id:"url",modelValue:a(s).url,"onUpdate:modelValue":d[3]||(d[3]=o=>a(s).url=o),class:"mb-3 col-12",label:l._lang.label.url,type:a(m).inputs.text,rows:3,maxlength:2048,disabled:u.loading},null,8,["modelValue","label","type","disabled"])]),_:1}),r(g,null,{default:p(()=>{var o,t;return[r(i,{id:"document",class:"mb-3 col-12",modelValue:a(s).document,"onUpdate:modelValue":d[4]||(d[4]=n=>a(s).document=n),label:l._lang.label.document,disabled:e.disabled,loading:e.loading,type:a(m).inputs.file,required:!0,showError:(o=e.vuelidate)==null?void 0:o.document.$error,"error-message":l._errorMessageField((t=e.vuelidate)==null?void 0:t.document)},null,8,["modelValue","label","disabled","loading","type","showError","error-message"])]}),_:1})],64)}}};export{U as _};
