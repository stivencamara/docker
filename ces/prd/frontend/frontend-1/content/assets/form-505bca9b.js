import{b}from"./helpers-e3e3ab9f.js";import{i as w,k as f,l as m,c as x,m as S,n as c,q as t,s as e,v as u,L as F}from"./index-864107e7.js";const C={newForm(){return{validateForm:!1,economicActivityId:0,caeSection:null,caeDivision:null,caeGroup:null,caeClass:null,caeSubclass:null,texts:[{language:"pt",designation:null},{language:"en",designation:null}]}},formRules(){return{texts:{$each:b.forEachField(["designation"])}}}},U={__name:"form",props:{modelValue:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},validateForm:{type:Boolean,default:!1},rules:{type:Object,default:{}},selectedLang:{type:[String,Number],required:!0},vuelidate:{type:Object,default:null}},emits:["update:modelValue"],setup(d,{emit:V}){const s=d;w();const o=f({get(){return s.modelValue},set(l){V("update:modelValue",l)}}),r=f({get(){return b.getFieldByLangAndName(s.modelValue,s.selectedLang,"designation")},set(l){b.setFieldByLangAndName(s.modelValue,s.selectedLang,"designation",l)}});return(l,a)=>{const i=m("form-field"),g=m("row"),y=m("container-wrapper");return x(),S(y,null,{default:c(()=>[t(g,null,{default:c(()=>[t(i,{id:"caeSection",modelValue:e(o).caeSection,"onUpdate:modelValue":a[0]||(a[0]=n=>e(o).caeSection=n),class:"mb-3 col-6 col-md-4",label:l._lang.label.section,type:e(u).inputs.text,maxlength:2,disabled:d.loading},null,8,["modelValue","label","type","disabled"]),t(i,{id:"caeDivision",modelValue:e(o).caeDivision,"onUpdate:modelValue":a[1]||(a[1]=n=>e(o).caeDivision=n),class:"mb-3 col-6 col-md-4",label:l._lang.label.division,type:e(u).inputs.number,maxlength:9,disabled:d.loading},null,8,["modelValue","label","type","disabled"]),t(i,{id:"caeGroup",modelValue:e(o).caeGroup,"onUpdate:modelValue":a[2]||(a[2]=n=>e(o).caeGroup=n),class:"mb-3 col-6 col-md-4",label:l._lang.label.group,type:e(u).inputs.number,maxlength:9,disabled:d.loading},null,8,["modelValue","label","type","disabled"]),t(i,{id:"caeClass",modelValue:e(o).caeClass,"onUpdate:modelValue":a[3]||(a[3]=n=>e(o).caeClass=n),class:"mb-3 col-6 col-md-4",label:l._lang.label.class,type:e(u).inputs.number,maxlength:9,disabled:d.loading},null,8,["modelValue","label","type","disabled"]),t(i,{id:"caeSubclass",modelValue:e(o).caeSubclass,"onUpdate:modelValue":a[4]||(a[4]=n=>e(o).caeSubclass=n),class:"mb-3 col-6 col-md-4",label:l._lang.label.subclass,type:e(u).inputs.number,maxlength:9,disabled:d.loading},null,8,["modelValue","label","type","disabled"])]),_:1}),t(g,null,{default:c(()=>{var n,p;return[t(i,{id:"designation",modelValue:e(r),"onUpdate:modelValue":a[5]||(a[5]=v=>F(r)?r.value=v:null),class:"mb-3 col-12",label:l._lang.label.designation,type:e(u).inputs.textarea,rows:3,maxlength:512,disabled:d.loading,required:!0,showError:l._showErrorFieldWhenTexts((n=s.vuelidate)==null?void 0:n.texts,"designation"),"error-message":l._errorMessageFieldWhenTexts((p=s.vuelidate)==null?void 0:p.texts,"designation"),language:s.selectedLang},null,8,["modelValue","label","type","disabled","showError","error-message","language"])]}),_:1})]),_:1})}}};export{U as _,C as h};
