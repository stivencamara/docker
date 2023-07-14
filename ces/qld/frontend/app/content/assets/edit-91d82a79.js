import{z as I,r as w,G as E,n as C,b as y,o as M,l as h,w as u,e as o,g as e,D as V,i as f,s as N,L as O,a as T,J as P,u as A,x as _}from"./index-5b4ebf84.js";import{b as v}from"./helpers-4796f1a9.js";import{u as x,p as B}from"./params-de6a9a0b.js";import{_ as R}from"./edit-actions-eb4d23af.js";import{u as G}from"./index.esm-65642301.js";import"./index.esm-85573352.js";import"./cancel-confirm-46a9e596.js";import"./settings-fd6ffbf1.js";const j={__name:"form",props:{modelValue:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},validateForm:{type:Boolean,default:!1},rules:{type:Object,default:{}},selectedLang:{type:[String,Number],required:!0},vuelidate:{type:Object,required:!0}},emits:["update:modelValue"],setup(i,{emit:L}){const a=i,F=x();I();let d=w([]);const t=E({get(){return a.modelValue},set(l){L("update:modelValue",l)}}),m=E({get(){return v.getFieldByLangAndName(a.modelValue,a.selectedLang,"name")},set(l){v.setFieldByLangAndName(a.modelValue,a.selectedLang,"name",l)}}),g=E({get(){return v.getFieldByLangAndName(a.modelValue,a.selectedLang,"description")},set(l){v.setFieldByLangAndName(a.modelValue,a.selectedLang,"description",l)}});return C(()=>{d.value=F.parameterTypeList}),(l,n)=>{const p=y("form-field"),s=y("row"),b=y("container-wrapper");return M(),h(b,null,{default:u(()=>[o(s,null,{default:u(()=>[o(p,{id:"name",modelValue:e(m),"onUpdate:modelValue":n[0]||(n[0]=r=>V(m)?m.value=r:null),class:"mb-3 col-12 col-md-8",label:l._lang.label.name,type:e(f).inputs.text,maxlength:45,disabled:i.loading,required:!0,showError:l._showErrorFieldWhenTexts(a.vuelidate.texts,"name"),"error-message":l._errorMessageFieldWhenTexts(a.vuelidate.texts,"name"),language:i.selectedLang},null,8,["modelValue","label","type","disabled","showError","error-message","language"]),o(p,{id:"group",modelValue:e(t).group,"onUpdate:modelValue":n[1]||(n[1]=r=>e(t).group=r),class:"mb-3 col-12 col-md-4",label:l._lang.label.group,type:e(f).inputs.text,maxlength:64,disabled:i.loading},null,8,["modelValue","label","type","disabled"])]),_:1}),o(s,null,{default:u(()=>[o(p,{id:"value",modelValue:e(t).value,"onUpdate:modelValue":n[2]||(n[2]=r=>e(t).value=r),class:"mb-3 col-12",label:l._lang.label.value,type:e(f).inputs.textarea,disabled:i.loading},null,8,["modelValue","label","type","disabled"])]),_:1}),o(s,null,{default:u(()=>[o(p,{id:"field",modelValue:e(t).field,"onUpdate:modelValue":n[3]||(n[3]=r=>e(t).field=r),class:"mb-3 col-12 col-md-6",label:l._lang.label.field,type:e(f).inputs.text,maxlength:64,disabled:i.loading},null,8,["modelValue","label","type","disabled"]),o(p,{id:"unity",modelValue:e(t).unity,"onUpdate:modelValue":n[4]||(n[4]=r=>e(t).unity=r),class:"mb-3 col-12 col-md-6",label:l._lang.label.unity,type:e(f).inputs.multiselect,disabled:i.loading,required:a.validateForm,showError:a.validateForm&&a.vuelidate.unity.$error,"error-message":l._errorMessageField(a.vuelidate.unity),options:e(d)},null,8,["modelValue","label","type","disabled","required","showError","error-message","options"])]),_:1}),o(s,null,{default:u(()=>[o(p,{id:"description",modelValue:e(g),"onUpdate:modelValue":n[5]||(n[5]=r=>V(g)?g.value=r:null),class:"mb-3 col-12",label:l._lang.label.description,type:e(f).inputs.textarea,rows:3,maxlength:2048,disabled:i.loading,required:!0,showError:l._showErrorFieldWhenTexts(a.vuelidate.texts,"description"),"error-message":l._errorMessageFieldWhenTexts(a.vuelidate.texts,"description"),language:a.selectedLang},null,8,["modelValue","label","type","disabled","showError","error-message","language"])]),_:1}),o(s,null,{default:u(()=>[o(p,{id:"notes",modelValue:e(t).notes,"onUpdate:modelValue":n[6]||(n[6]=r=>e(t).notes=r),class:"mb-3 col-12",label:l._lang.label.notes,type:e(f).inputs.textarea,maxlength:512,disabled:i.loading},null,8,["modelValue","label","type","disabled"])]),_:1})]),_:1})}}},S={newForm(){return{validateForm:!1,value:null,group:null,notes:null,unity:null,field:null,texts:[{language:"pt",name:null,description:null},{language:"en",name:null,description:null}]}},formRules(){return{unity:{required:v.requiredMessage()},texts:{$each:v.forEachField(["name","description"])}}}},X={__name:"edit",setup(i){const L=N(),a=O();I();const F=x();let d=w(!0),t=T(S.newForm()),m=w(f.language.pt),g=w(0),l=T(S.formRules());const n=G(l,t);async function p(){d.value=!0;const s=await B.getById(g.value);A.validateResponse(s,null,()=>{Object.assign(t,s.data),F.setFormToCompare(A.cloneObject(s.data))}),d.value=!1}return P(async()=>{g.value=A.decodeId(a.params.parameterId),g.value?await p():L.push({name:_.router.BACKOFFICE_SETTINGS_PARAMS_PAGE.name})}),(s,b)=>{const r=y("breadcrumb-item"),U=y("breadcrumb"),k=y("card"),q=y("page");return M(),h(q,{title:s._lang.backoffice.settings.params.editPageTitle},{breadcrumb:u(()=>[o(U,{"has-home":!0},{default:u(()=>[o(r,{label:s._lang.backoffice.settings.params.breadcrumbTitle,"router-path":e(_).router.BACKOFFICE_SETTINGS_PARAMS_PAGE.path},null,8,["label","router-path"]),o(r,{label:s._lang.backoffice.settings.params.editPageTitle},null,8,["label"])]),_:1})]),actions:u(()=>[o(R,{loading:e(d),"onUpdate:loading":b[0]||(b[0]=c=>V(d)?d.value=c:d=c),selectedLang:e(m),"onUpdate:selectedLang":b[1]||(b[1]=c=>V(m)?m.value=c:m=c),service:e(B),itemId:e(g),formModel:e(t),vuelidate:e(n),store:e(F),resource:s._lang.backoffice.settings.params,"back-route":e(_).router.BACKOFFICE_SETTINGS_PARAMS_PAGE.name,"show-lang-selector":!0,"can-delete":!1,"can-edit":!0},null,8,["loading","selectedLang","service","itemId","formModel","vuelidate","store","resource","back-route"])]),default:u(()=>[o(k,{shadow:!0},{body:u(()=>[o(j,{modelValue:e(t),"onUpdate:modelValue":b[2]||(b[2]=c=>V(t)?t.value=c:t=c),selectedLang:e(m),loading:e(d),disabled:e(d),vuelidate:e(n),"validate-form":!0,rules:e(l)},null,8,["modelValue","selectedLang","loading","disabled","vuelidate","rules"])]),_:1})]),_:1},8,["title"])}}};export{X as default};
