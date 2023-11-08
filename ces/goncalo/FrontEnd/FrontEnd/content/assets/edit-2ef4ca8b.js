import{i as k,r as E,k as T,o as O,l as b,c as C,m as N,n as g,q as o,s as e,L as F,v as V,g as P,f as R,j as S,N as U,u as h,C as B}from"./index-ab26f80c.js";import{b as _}from"./helpers-c14e9a29.js";import{u as q,p as I}from"./params-f6576d2b.js";import{_ as j}from"./edit-actions-9b9ea7c8.js";import{u as G}from"./index.esm-aff4e7f9.js";import"./index.esm-6a371f16.js";import"./cancel-confirm-f76ba4a7.js";import"./settings-d3284d0c.js";const x={__name:"form",props:{modelValue:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},validateForm:{type:Boolean,default:!1},rules:{type:Object,default:{}},selectedLang:{type:[String,Number],required:!0},vuelidate:{type:Object,default:null}},emits:["update:modelValue"],setup(f,{emit:A}){const a=f,w=q();k();let n=E([]);const r=T({get(){return a.modelValue},set(l){A("update:modelValue",l)}}),d=T({get(){return _.getFieldByLangAndName(a.modelValue,a.selectedLang,"name")},set(l){_.setFieldByLangAndName(a.modelValue,a.selectedLang,"name",l)}}),i=T({get(){return _.getFieldByLangAndName(a.modelValue,a.selectedLang,"description")},set(l){_.setFieldByLangAndName(a.modelValue,a.selectedLang,"description",l)}});return O(()=>{n.value=w.parameterTypeList}),(l,s)=>{const v=b("form-field"),u=b("row"),m=b("container-wrapper");return C(),N(m,null,{default:g(()=>[o(u,null,{default:g(()=>{var p,c,y,L;return[o(v,{id:"name",modelValue:e(d),"onUpdate:modelValue":s[0]||(s[0]=t=>F(d)?d.value=t:null),class:"mb-3 col-12 col-md-8",label:l._lang.label.name,type:e(V).inputs.text,maxlength:45,disabled:!0,required:!0,showError:l._showErrorFieldWhenTexts((p=a.vuelidate)==null?void 0:p.texts,"name"),"error-message":l._errorMessageFieldWhenTexts((c=a.vuelidate)==null?void 0:c.texts,"name"),language:f.selectedLang},null,8,["modelValue","label","type","showError","error-message","language"]),o(v,{id:"unity",modelValue:e(r).unity,"onUpdate:modelValue":s[1]||(s[1]=t=>e(r).unity=t),class:"mb-3 col-12 col-md-4",label:l._lang.label.unity,type:e(V).inputs.multiselect,disabled:f.loading,required:a.validateForm,showError:a.validateForm&&((y=a.vuelidate)==null?void 0:y.unity.$error),"error-message":l._errorMessageField((L=a.vuelidate)==null?void 0:L.unity),options:e(n)},null,8,["modelValue","label","type","disabled","required","showError","error-message","options"]),o(v,{id:"value",modelValue:e(r).value,"onUpdate:modelValue":s[2]||(s[2]=t=>e(r).value=t),class:"mb-3 col-12",label:l._lang.label.value,type:e(V).inputs[e(r).unity],disabled:f.loading},null,8,["modelValue","label","type","disabled"])]}),_:1}),o(u,null,{default:g(()=>{var p,c;return[o(v,{id:"description",modelValue:e(i),"onUpdate:modelValue":s[3]||(s[3]=y=>F(i)?i.value=y:null),class:"mb-3 col-12",label:l._lang.label.description,type:e(V).inputs.textarea,rows:3,maxlength:2048,disabled:f.loading,required:!0,showError:l._showErrorFieldWhenTexts((p=a.vuelidate)==null?void 0:p.texts,"description"),"error-message":l._errorMessageFieldWhenTexts((c=a.vuelidate)==null?void 0:c.texts,"description"),language:a.selectedLang},null,8,["modelValue","label","type","disabled","showError","error-message","language"])]}),_:1})]),_:1})}}},M={newForm(){return{validateForm:!1,value:null,group:null,notes:null,unity:null,field:null,texts:[{language:"pt",name:null,description:null},{language:"en",name:null,description:null}]}},formRules(){return{unity:{required:_.requiredMessage()},texts:{$each:_.forEachField(["name","description"])}}}},X={__name:"edit",setup(f){const A=P(),a=R();k();const w=q();let n=E(!0),r=S(M.newForm()),d=E(V.language.pt),i=E(0),l=S(M.formRules());const s=G(l,r);async function v(){n.value=!0;const u=await I.getById(i.value);h.validateResponse(u,null,()=>{Object.assign(r,u.data),w.setFormToCompare(h.cloneObject(u.data))}),n.value=!1}return U(async()=>{i.value=h.decodeId(a.params.parameterId),i.value?await v():A.push({name:B.router.BACKOFFICE_SETTINGS_PARAMS_PAGE.name})}),(u,m)=>{const p=b("breadcrumb-item"),c=b("breadcrumb"),y=b("card"),L=b("page");return C(),N(L,{title:u._lang.backoffice.settings.params.editPageTitle},{breadcrumb:g(()=>[o(c,{"has-home":!0},{default:g(()=>[o(p,{label:u._lang.backoffice.settings.params.breadcrumbTitle,"router-path":e(B).router.BACKOFFICE_SETTINGS_PARAMS_PAGE.path},null,8,["label","router-path"]),o(p,{label:u._lang.backoffice.settings.params.editPageTitle},null,8,["label"])]),_:1})]),actions:g(()=>[o(j,{loading:e(n),"onUpdate:loading":m[0]||(m[0]=t=>F(n)?n.value=t:n=t),selectedLang:e(d),"onUpdate:selectedLang":m[1]||(m[1]=t=>F(d)?d.value=t:d=t),service:e(I),itemId:e(i),formModel:e(r),vuelidate:e(s),store:e(w),resource:u._lang.backoffice.settings.params,"back-route":e(B).router.BACKOFFICE_SETTINGS_PARAMS_PAGE.name,"show-lang-selector":!0,"can-delete":!1,"can-edit":!0},null,8,["loading","selectedLang","service","itemId","formModel","vuelidate","store","resource","back-route"])]),default:g(()=>[o(y,{shadow:!0},{body:g(()=>[o(x,{modelValue:e(r),"onUpdate:modelValue":m[2]||(m[2]=t=>F(r)?r.value=t:r=t),selectedLang:e(d),loading:e(n),disabled:e(n),vuelidate:e(s),"validate-form":!0,rules:e(l)},null,8,["modelValue","selectedLang","loading","disabled","vuelidate","rules"])]),_:1})]),_:1},8,["title"])}}};export{X as default};
