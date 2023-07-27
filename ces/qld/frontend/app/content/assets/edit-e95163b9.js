import{q as h,i as w,E as L,b as x,r as y,o as I,c as M,w as u,a as o,m as e,z as V,v as f,h as N,C as O,s as T,K as P,j as A,l as _}from"./index-60da5de7.js";import{b as v}from"./helpers-870863ae.js";import{u as q,p as B}from"./params-6e5313de.js";import{_ as R}from"./edit-actions-9a09d643.js";import{u as j}from"./index.esm-61763a8c.js";import"./index.esm-eed786a6.js";import"./cancel-confirm-20b5837b.js";import"./settings-bac024a5.js";const G={__name:"form",props:{modelValue:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},validateForm:{type:Boolean,default:!1},rules:{type:Object,default:{}},selectedLang:{type:[String,Number],required:!0},vuelidate:{type:Object,required:!0}},emits:["update:modelValue"],setup(i,{emit:E}){const a=i,F=q();h();let d=w([]);const t=L({get(){return a.modelValue},set(l){E("update:modelValue",l)}}),m=L({get(){return v.getFieldByLangAndName(a.modelValue,a.selectedLang,"name")},set(l){v.setFieldByLangAndName(a.modelValue,a.selectedLang,"name",l)}}),g=L({get(){return v.getFieldByLangAndName(a.modelValue,a.selectedLang,"description")},set(l){v.setFieldByLangAndName(a.modelValue,a.selectedLang,"description",l)}});return x(()=>{d.value=F.parameterTypeList}),(l,r)=>{const p=y("form-field"),s=y("row"),b=y("container-wrapper");return I(),M(b,null,{default:u(()=>[o(s,null,{default:u(()=>[o(p,{id:"name",modelValue:e(m),"onUpdate:modelValue":r[0]||(r[0]=n=>V(m)?m.value=n:null),class:"mb-3 col-12 col-md-8",label:l._lang.label.name,type:e(f).inputs.text,maxlength:45,disabled:i.loading,required:!0,showError:l._showErrorFieldWhenTexts(a.vuelidate.texts,"name"),"error-message":l._errorMessageFieldWhenTexts(a.vuelidate.texts,"name"),language:i.selectedLang},null,8,["modelValue","label","type","disabled","showError","error-message","language"]),o(p,{id:"group",modelValue:e(t).group,"onUpdate:modelValue":r[1]||(r[1]=n=>e(t).group=n),class:"mb-3 col-12 col-md-4",label:l._lang.label.group,type:e(f).inputs.text,maxlength:64,disabled:i.loading},null,8,["modelValue","label","type","disabled"])]),_:1}),o(s,null,{default:u(()=>[o(p,{id:"value",modelValue:e(t).value,"onUpdate:modelValue":r[2]||(r[2]=n=>e(t).value=n),class:"mb-3 col-12",label:l._lang.label.value,type:e(f).inputs.textarea,disabled:i.loading},null,8,["modelValue","label","type","disabled"])]),_:1}),o(s,null,{default:u(()=>[o(p,{id:"field",modelValue:e(t).field,"onUpdate:modelValue":r[3]||(r[3]=n=>e(t).field=n),class:"mb-3 col-12 col-md-6",label:l._lang.label.field,type:e(f).inputs.text,maxlength:64,disabled:i.loading},null,8,["modelValue","label","type","disabled"]),o(p,{id:"unity",modelValue:e(t).unity,"onUpdate:modelValue":r[4]||(r[4]=n=>e(t).unity=n),class:"mb-3 col-12 col-md-6",label:l._lang.label.unity,type:e(f).inputs.multiselect,disabled:i.loading,required:a.validateForm,showError:a.validateForm&&a.vuelidate.unity.$error,"error-message":l._errorMessageField(a.vuelidate.unity),options:e(d)},null,8,["modelValue","label","type","disabled","required","showError","error-message","options"])]),_:1}),o(s,null,{default:u(()=>[o(p,{id:"description",modelValue:e(g),"onUpdate:modelValue":r[5]||(r[5]=n=>V(g)?g.value=n:null),class:"mb-3 col-12",label:l._lang.label.description,type:e(f).inputs.textarea,rows:3,maxlength:2048,disabled:i.loading,required:!0,showError:l._showErrorFieldWhenTexts(a.vuelidate.texts,"description"),"error-message":l._errorMessageFieldWhenTexts(a.vuelidate.texts,"description"),language:a.selectedLang},null,8,["modelValue","label","type","disabled","showError","error-message","language"])]),_:1}),o(s,null,{default:u(()=>[o(p,{id:"notes",modelValue:e(t).notes,"onUpdate:modelValue":r[6]||(r[6]=n=>e(t).notes=n),class:"mb-3 col-12",label:l._lang.label.notes,type:e(f).inputs.textarea,maxlength:512,disabled:i.loading},null,8,["modelValue","label","type","disabled"])]),_:1})]),_:1})}}},S={newForm(){return{validateForm:!1,value:null,group:null,notes:null,unity:null,field:null,texts:[{language:"pt",name:null,description:null},{language:"en",name:null,description:null}]}},formRules(){return{unity:{required:v.requiredMessage()},texts:{$each:v.forEachField(["name","description"])}}}},X={__name:"edit",setup(i){const E=N(),a=O();h();const F=q();let d=w(!0),t=T(S.newForm()),m=w(f.language.pt),g=w(0),l=T(S.formRules());const r=j(l,t);async function p(){d.value=!0;const s=await B.getById(g.value);A.validateResponse(s,null,()=>{Object.assign(t,s.data),F.setFormToCompare(A.cloneObject(s.data))}),d.value=!1}return P(async()=>{g.value=A.decodeId(a.params.parameterId),g.value?await p():E.push({name:_.router.BACKOFFICE_SETTINGS_PARAMS_PAGE.name})}),(s,b)=>{const n=y("breadcrumb-item"),C=y("breadcrumb"),U=y("card"),k=y("page");return I(),M(k,{title:s._lang.backoffice.settings.params.editPageTitle},{breadcrumb:u(()=>[o(C,{"has-home":!0},{default:u(()=>[o(n,{label:s._lang.backoffice.settings.params.breadcrumbTitle,"router-path":e(_).router.BACKOFFICE_SETTINGS_PARAMS_PAGE.path},null,8,["label","router-path"]),o(n,{label:s._lang.backoffice.settings.params.editPageTitle},null,8,["label"])]),_:1})]),actions:u(()=>[o(R,{loading:e(d),"onUpdate:loading":b[0]||(b[0]=c=>V(d)?d.value=c:d=c),selectedLang:e(m),"onUpdate:selectedLang":b[1]||(b[1]=c=>V(m)?m.value=c:m=c),service:e(B),itemId:e(g),formModel:e(t),vuelidate:e(r),store:e(F),resource:s._lang.backoffice.settings.params,"back-route":e(_).router.BACKOFFICE_SETTINGS_PARAMS_PAGE.name,"show-lang-selector":!0,"can-delete":!1,"can-edit":!0},null,8,["loading","selectedLang","service","itemId","formModel","vuelidate","store","resource","back-route"])]),default:u(()=>[o(U,{shadow:!0},{body:u(()=>[o(G,{modelValue:e(t),"onUpdate:modelValue":b[2]||(b[2]=c=>V(t)?t.value=c:t=c),selectedLang:e(m),loading:e(d),disabled:e(d),vuelidate:e(r),"validate-form":!0,rules:e(l)},null,8,["modelValue","selectedLang","loading","disabled","vuelidate","rules"])]),_:1})]),_:1},8,["title"])}}};export{X as default};
