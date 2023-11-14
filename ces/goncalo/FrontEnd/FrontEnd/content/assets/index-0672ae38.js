import{b as P,h as U,r as k,N as q,o as oe,C as N,u as r,k as $,l as o,c as L,m as J,n as b,q as a,y as be,x as ge,s as e,v as y,i as G,w as ye,p as le,L as Q,A as me,B as fe,j as E,e as H,F as pe,V as K,ak as _e,H as ve,_ as ke}from"./index-98e98595.js";import{b as D}from"./helpers-8c1ef5f8.js";import{s as ne}from"./settings-8742f9d4.js";import{s as Ce}from"./service-1201cb3d.js";import{u as Te}from"./service-e838f8b7.js";import{u as Ie}from"./index.esm-b8a70fe6.js";import{_ as he}from"./custom-label-aa2663f1.js";import{t as we}from"./treeview-27d5b93f.js";import"./index.esm-baab58fe.js";const Y={search:l=>P.post("/organizations/organizationrelatedtype/search",l),getById:l=>P.get(`/organizations/organizationrelatedtype/${l}`),delete:l=>P.delete(`/organizations/organizationrelatedtype/${l}`),create:l=>P.post("/organizations/organizationrelatedtype",l),update:l=>P.put("/organizations/organizationrelatedtype",l)},Z={search:l=>P.post("/service/servicetype/search",l),getById:l=>P.get(`/service/servicetype/${l}`),delete:l=>P.delete(`/service/servicetype/${l}`),create:l=>P.post("/service/servicetype",l),update:l=>P.put("/service/servicetype",l)},ee={search:l=>P.post("/poc/channeltype/search",l),getById:l=>P.get(`/poc/channeltype/${l}`),delete:l=>P.delete(`/poc/channeltype/${l}`),create:l=>P.post("/poc/channeltype",l),update:l=>P.put("/poc/channeltype",l)},te={search:l=>P.post("/service/servicecategory/search",l),getById:l=>P.get(`/service/servicecategory/${l}`),delete:l=>P.delete(`/service/servicecategory/${l}`),create:l=>P.post("/service/servicecategory",l),update:l=>P.put("/service/servicecategory",l)},ae={search:l=>P.post("/service/recipienttype/search",l),getById:l=>P.get(`/service/recipienttype/${l}`),delete:l=>P.delete(`/service/recipienttype/${l}`),create:l=>P.post("/service/recipienttype",l),update:l=>P.put("/service/recipienttype",l)},ce={search:l=>P.post("/settings/checklist/search",l),getById:l=>P.get(`/settings/checklist/${l}`),delete:l=>P.delete(`/settings/checklist/${l}`),create:l=>P.post("/settings/checklist",l),update:l=>P.put("/settings/checklist",l)},je={__name:"delete-modal",props:{modelValue:{type:[Number,String,Boolean,Object]},itsNew:{type:Boolean,default:!0}},emits:["update:modelValue","updated"],setup(l,{emit:v}){const m=l,p="confirm-delete",_=U();k([]),k("pt");let d=k("Eliminar"),s=k("Eliminar?"),i,h,z;q(async()=>{}),oe(()=>{_.on(N.emitter.PARAMS_CONFIRM_DELETE,T=>{d.value=T.modalTitle,i=T.service,h=T.itemId,z=T.search,r.showModalById(p)})}),$({get(){return m.modelValue},set(T){v("update:modelValue",T)}});function c(){r.closeModalById(p)}async function A(){let T=await i.delete(h);r.validateResponse(T,"Eliminado com sucesso",()=>{z(),r.closeModalById(p)})}return(T,w)=>{const n=o("row"),g=o("cbutton"),j=o("modal");return L(),J(j,{id:p,title:e(d),size:e(y).modalSize.medium,"remove-padding":!1},{body:b(()=>[a(n,null,{default:b(()=>[be(ge(e(s)),1)]),_:1})]),footer:b(()=>[a(g,{type:e(y).buttonType.link,class:"ms-auto",title:T._lang.common.cancel,onClick:c,size:e(y).buttonSize.medium,disabled:!1},null,8,["type","title","size"]),a(g,{type:e(y).buttonType.primary,title:T._lang.common.delete,onClick:A,size:e(y).buttonSize.medium,disabled:!1},null,8,["type","title","size"])]),_:1},8,["title","size"])}}},Se={class:"col-12 mb-3"},Pe={__name:"edit-modal",props:{modelValue:{type:[Number,String,Boolean,Object]}},emits:["update:modelValue"],setup(l,{emit:v}){const m=l,p="edit",_=U(),d=Te();let s=k([]),i=k("pt"),h=k("Eliminar"),z,c,A=k(!1),T=k(!1),w=k(!1),n=k("name"),g=k("description"),j=k(F());const t=G(),u={texts:{$each:D.forEachField([n.value])}},I=Ie(u,j);q(async()=>{await M()}),oe(()=>{_.on(N.emitter.PARAMS_EDIT,async f=>{n.value=f.value1??"name",g.value=f.value2??"description",h.value=f.modalTitle,z=f.service,j.value=f.form,c=f.search,A.value=f.itsNew,T.value=f.haveParent,r.showModalById(p),I.value.$reset(),T.value&&await V()})}),$({get(){return m.modelValue},set(f){v("update:modelValue",f)}});async function M(){let f=await ne.getLanguages();r.validateResponse(f,null,()=>{s.value=f.data})}function S(){r.closeModalById(p)}async function C(){if(w.value=!0,await I.value.$validate(),I.value.$error)fe.warning(t.common.objectParamsRequired.replace("{0}",t.label[n.value]));else if(A.value){let f=await z.create(j.value);r.validateResponse(f,"Criado com sucesso",()=>{c(),r.closeModalById(p)})}else{let f=await z.update(j.value);r.validateResponse(f,"Guardado com sucesso",()=>{c(),r.closeModalById(p)})}w.value=!1}const B=$({get(){return D.getFieldByLangAndName(j.value,i.value,n.value)},set(f){D.setFieldByLangAndName(j.value,i.value,n.value,f)}}),R=$({get(){return D.getFieldByLangAndName(j.value,i.value,g.value)},set(f){D.setFieldByLangAndName(j.value,i.value,g.value,f)}});function F(){return{texts:[{language:"pt",[n.value]:null,[g.value]:null},{language:"en",[n.value]:null,[g.value]:null}]}}async function V(){w.value=!0;const f=await Ce.getLists(i.value);r.validateResponse(f,null,()=>{d.setLists(f.data)}),w.value=!1}return ye(()=>i.value,async()=>{T.value&&await V()}),(f,O)=>{const re=o("lang-selector"),se=o("row"),ue=o("table-actions"),X=o("form-field"),x=o("cbutton"),de=o("modal");return L(),J(de,{id:p,title:e(h),size:e(y).modalSize.extraLarge,"remove-padding":!1},{body:b(()=>[a(ue,null,{default:b(()=>[a(se,null,{default:b(()=>[le("div",Se,[a(re,{options:e(s),selectedLang:e(i),"onUpdate:selectedLang":O[0]||(O[0]=W=>Q(i)?i.value=W:i=W),disabled:!1},null,8,["options","selectedLang"])])]),_:1})]),_:1}),a(se,null,{default:b(()=>[a(X,{id:"value1Computed",class:"mb-3 col-12 col-md-6",modelValue:e(B),"onUpdate:modelValue":O[1]||(O[1]=W=>Q(B)?B.value=W:null),label:f._lang.label[e(n)],disabled:e(w),type:e(y).inputs.text,language:e(i),showError:f._showErrorFieldWhenTexts(e(I).texts,e(n)),"error-message":f._errorMessageFieldWhenTexts(e(I).texts,e(n))},null,8,["modelValue","label","disabled","type","language","showError","error-message"]),e(T)?(L(),J(X,{key:0,id:"serviceCategoryParent",class:"mb-3 col-12 col-md-6",modelValue:e(j).serviceCategoryParentId,"onUpdate:modelValue":O[2]||(O[2]=W=>e(j).serviceCategoryParentId=W),label:f._lang.label.serviceCategoryParent,disabled:e(w),type:e(y).inputs.multiselect,options:e(d).serviceCategoryList},null,8,["modelValue","label","disabled","type","options"])):me("",!0),a(X,{id:"value2Computed",class:"mb-3 col-12 col-md-6",modelValue:e(R),"onUpdate:modelValue":O[3]||(O[3]=W=>Q(R)?R.value=W:null),label:f._lang.label[e(g)],disabled:e(w),type:e(y).inputs.text,language:e(i)},null,8,["modelValue","label","disabled","type","language"])]),_:1})]),footer:b(()=>[a(x,{type:e(y).buttonType.link,class:"ms-auto",title:f._lang.common.cancel,onClick:S,size:e(y).buttonSize.medium,disabled:e(w)},null,8,["type","title","size","disabled"]),a(x,{type:e(y).buttonType.primary,title:f._lang.common.save,onClick:C,size:e(y).buttonSize.medium,disabled:e(w)},null,8,["type","title","size","disabled"])]),_:1},8,["title","size"])}}},ze={class:"col-12 hstack gap-2 mt-3"},ie={__name:"search",props:{value1:{type:String,default:"name"},value2:{type:String,default:"description"},createFilterModel:{type:Function}},emits:["applyClick","clearClick"],setup(l,{emit:v}){const m=l;var p=E(m.createFilterModel());q(async()=>{}),oe(()=>{});function _(){v("applyClick",p)}function d(){Object.assign(p,m.createFilterModel()),v("clearClick")}return(s,i)=>{const h=o("form-field"),z=o("row"),c=o("cbutton");return L(),H(pe,null,[a(z,null,{default:b(()=>[a(h,{id:"value1",class:"mb-3 col-12 col-md-6",modelValue:e(p)[m.value1],"onUpdate:modelValue":i[0]||(i[0]=A=>e(p)[m.value1]=A),label:s._lang.label[m.value1],disabled:!1,type:e(y).inputs.text},null,8,["modelValue","label","type"]),a(h,{id:"value2",class:"mb-3 col-12 col-md-6",modelValue:e(p)[m.value2],"onUpdate:modelValue":i[1]||(i[1]=A=>e(p)[m.value2]=A),label:s._lang.label[m.value2],disabled:!1,type:e(y).inputs.text},null,8,["modelValue","label","type"])]),_:1}),a(z,null,{default:b(()=>[le("div",ze,[a(c,{type:e(y).buttonType.link,class:"ms-auto",title:s._lang.common.clear,onClick:d,size:e(y).buttonSize.medium,disabled:m.disabled||m.disabledClearButton},null,8,["type","title","size","disabled"]),a(c,{type:e(y).buttonType.primary,title:s._lang.common.apply,onClick:_,size:e(y).buttonSize.medium,disabled:m.disabled},null,8,["type","title","size","disabled"])])]),_:1})],64)}}},Ae={__name:"index",setup(l){const v=U(),m=G();let p=k(r.uuid()),_=k(r.createEmptyDataSource()),d=E(i());E(g());let s=k(!1);q(async()=>{await c()});function i(){return{pageNumber:1,sortBy:"OrganizationRelatedTypeId",organizationRelatedTypeIds:[],name:null,description:null}}async function h(t){Object.assign(d,t),c()}async function z(){Object.assign(d,i()),c()}async function c(){s.value=!0;let t=await Y.search(d);r.validateResponse(t,null,async()=>{_.value=t.data,_.value.items=t.data.items.map(u=>({organizationRelatedTypeId:u.organizationRelatedTypeId,name:u.texts[0].name,description:u.texts[0].description}))}),s.value=!1}async function A(t){d.sortBy=t,await c()}async function T(t){d.pageNumber=t,await c()}async function w(t){s.value=!0;let u=await Y.getById(t.organizationRelatedTypeId);r.validateResponse(u,null,async()=>{const I={form:u.data,service:Y,modalTitle:m.backoffice.objectParams.organizationRelatedType.title,search:c,itsNew:!1};v.emit(N.emitter.PARAMS_EDIT,I)}),s.value=!1}function n(){const t={form:g(),service:Y,modalTitle:m.backoffice.objectParams.organizationRelatedType.title,search:c,itsNew:!0};v.emit(N.emitter.PARAMS_EDIT,t)}function g(){return{texts:[{language:"pt",name:null,description:null},{language:"en",name:null,description:null}]}}function j(t){const u={itemId:t.organizationRelatedTypeId,service:Y,modalTitle:m.backoffice.objectParams.organizationRelatedType.title,search:c};v.emit(N.emitter.PARAMS_CONFIRM_DELETE,u)}return(t,u)=>{const I=o("cbutton"),M=o("table-actions"),S=o("ccolumn"),C=o("table-action-edit"),B=o("table-action-delete"),R=o("ctable"),F=o("accordion");return L(),H("div",null,[a(F,{id:e(p),title:t._lang.backoffice.objectParams.organizationRelatedType.title,collapsed:!1,class:"mb-4"},{default:b(()=>[a(M,null,{default:b(()=>[a(I,{target:"create-contact",class:"d-inline",type:e(y).buttonType.secondary,title:t._lang.common.toAdd,disabled:!1,icon:K,onClick:n},null,8,["type","title"])]),_:1}),a(ie,{onApplyClick:h,onClearClick:z,createFilterModel:i}),a(R,{onSort:A,onChangePage:T,data:e(_),checkbox:!1,loading:e(s),defaultSort:"OrganizationRelatedTypeId"},{columns:b(()=>[a(S,{name:t._lang.label.name,field:"name",sortable:!0},null,8,["name"]),a(S,{name:t._lang.label.description,field:"description",sortable:!1},null,8,["name"])]),actions:b(V=>[a(C,{onClick:f=>w(V.item)},null,8,["onClick"]),a(B,{onClick:f=>j(V.item)},null,8,["onClick"])]),_:1},8,["data","loading"])]),_:1},8,["id","title"])])}}},Be={__name:"index",setup(l){const v=U(),m=G();let p=k(r.uuid()),_=k(r.createEmptyDataSource()),d=E(i());E(g());let s=k(!1);q(async()=>{await c()});function i(){return{pageNumber:1,sortBy:"channelTypeId",channelTypeIds:[],name:null,description:null}}async function h(t){Object.assign(d,t),c()}async function z(){Object.assign(d,i()),c()}async function c(){s.value=!0;let t=await ee.search(d);r.validateResponse(t,null,async()=>{_.value=t.data,_.value.items=t.data.items.map(u=>({channelTypeId:u.channelTypeId,name:u.texts[0].name,description:u.texts[0].description}))}),s.value=!1}async function A(t){d.sortBy=t,await c()}async function T(t){d.pageNumber=t,await c()}async function w(t){s.value=!0;let u=await ee.getById(t.channelTypeId);r.validateResponse(u,null,async()=>{const I={form:u.data,service:ee,modalTitle:m.backoffice.objectParams.channelType.title,search:c,itsNew:!1};v.emit(N.emitter.PARAMS_EDIT,I)}),s.value=!1}function n(){const t={form:g(),service:ee,modalTitle:m.backoffice.objectParams.channelType.title,search:c,itsNew:!0};v.emit(N.emitter.PARAMS_EDIT,t)}function g(){return{texts:[{language:"pt",name:null,description:null},{language:"en",name:null,description:null}]}}function j(t){const u={itemId:t.channelTypeId,service:ee,modalTitle:m.backoffice.objectParams.channelType.title,search:c};v.emit(N.emitter.PARAMS_CONFIRM_DELETE,u)}return(t,u)=>{const I=o("cbutton"),M=o("table-actions"),S=o("ccolumn"),C=o("table-action-edit"),B=o("table-action-delete"),R=o("ctable"),F=o("accordion");return L(),H("div",null,[a(F,{id:e(p),title:t._lang.backoffice.objectParams.channelType.title,collapsed:!1,class:"mb-4"},{default:b(()=>[a(M,null,{default:b(()=>[a(I,{target:"create-contact",class:"d-inline",type:e(y).buttonType.secondary,title:t._lang.common.toAdd,disabled:!1,icon:K,onClick:n},null,8,["type","title"])]),_:1}),a(ie,{onApplyClick:h,onClearClick:z,createFilterModel:i}),a(R,{onSort:A,onChangePage:T,data:e(_),checkbox:!1,loading:e(s),defaultSort:"channelTypeId"},{columns:b(()=>[a(S,{name:t._lang.label.name,field:"name",sortable:!0},null,8,["name"]),a(S,{name:t._lang.label.description,field:"description",sortable:!1},null,8,["name"])]),actions:b(V=>[a(C,{onClick:f=>w(V.item)},null,8,["onClick"]),a(B,{onClick:f=>j(V.item)},null,8,["onClick"])]),_:1},8,["data","loading"])]),_:1},8,["id","title"])])}}},Me={__name:"index",setup(l){const v=U(),m=G();let p=k(r.uuid()),_=k(r.createEmptyDataSource()),d=E(i());E(g());let s=k(!1);q(async()=>{await c()});function i(){return{pageNumber:1,sortBy:"recipientTypeId",recipientTypeIds:[],name:null,description:null}}async function h(t){Object.assign(d,t),c()}async function z(){Object.assign(d,i()),c()}async function c(){s.value=!0;let t=await ae.search(d);r.validateResponse(t,null,async()=>{_.value=t.data,_.value.items=t.data.items.map(u=>({recipientTypeId:u.recipientTypeId,name:u.texts[0].name,description:u.texts[0].description}))}),s.value=!1}async function A(t){d.sortBy=t,await c()}async function T(t){d.pageNumber=t,await c()}async function w(t){s.value=!0;let u=await ae.getById(t.recipientTypeId);r.validateResponse(u,null,async()=>{const I={form:u.data,service:ae,modalTitle:m.backoffice.objectParams.recipientType.title,search:c,itsNew:!1};v.emit(N.emitter.PARAMS_EDIT,I)}),s.value=!1}function n(){const t={form:g(),service:ae,modalTitle:m.backoffice.objectParams.recipientType.title,search:c,itsNew:!0};v.emit(N.emitter.PARAMS_EDIT,t)}function g(){return{texts:[{language:"pt",name:null,description:null},{language:"en",name:null,description:null}]}}function j(t){const u={itemId:t.recipientTypeId,service:ae,modalTitle:m.backoffice.objectParams.recipientType.title,search:c};v.emit(N.emitter.PARAMS_CONFIRM_DELETE,u)}return(t,u)=>{const I=o("cbutton"),M=o("table-actions"),S=o("ccolumn"),C=o("table-action-edit"),B=o("table-action-delete"),R=o("ctable"),F=o("accordion");return L(),H("div",null,[a(F,{id:e(p),title:t._lang.backoffice.objectParams.recipientType.title,collapsed:!1,class:"mb-4"},{default:b(()=>[a(M,null,{default:b(()=>[a(I,{target:"create-contact",class:"d-inline",type:e(y).buttonType.secondary,title:t._lang.common.toAdd,disabled:!1,icon:K,onClick:n},null,8,["type","title"])]),_:1}),a(ie,{onApplyClick:h,onClearClick:z,createFilterModel:i}),a(R,{onSort:A,onChangePage:T,data:e(_),checkbox:!1,loading:e(s),defaultSort:"recipientTypeId"},{columns:b(()=>[a(S,{name:t._lang.label.name,field:"name",sortable:!0},null,8,["name"]),a(S,{name:t._lang.label.description,field:"description",sortable:!1},null,8,["name"])]),actions:b(V=>[a(C,{onClick:f=>w(V.item)},null,8,["onClick"]),a(B,{onClick:f=>j(V.item)},null,8,["onClick"])]),_:1},8,["data","loading"])]),_:1},8,["id","title"])])}}},Ve={__name:"index",setup(l){const v=U(),m=G();let p=k(r.uuid()),_=k(r.createEmptyDataSource()),d=E(i());E(g());let s=k(!1);q(async()=>{await c()});function i(){return{pageNumber:1,sortBy:"serviceTypeId",serviceTypeIds:[],name:null,description:null}}async function h(t){Object.assign(d,t),c()}async function z(){Object.assign(d,i()),c()}async function c(){s.value=!0;let t=await Z.search(d);r.validateResponse(t,null,async()=>{_.value=t.data,_.value.items=t.data.items.map(u=>({serviceTypeId:u.serviceTypeId,name:u.texts[0].name,description:u.texts[0].description}))}),s.value=!1}async function A(t){d.sortBy=t,await c()}async function T(t){d.pageNumber=t,await c()}async function w(t){s.value=!0;let u=await Z.getById(t.serviceTypeId);r.validateResponse(u,null,async()=>{const I={form:u.data,service:Z,modalTitle:m.backoffice.objectParams.channelType.title,search:c,itsNew:!1};v.emit(N.emitter.PARAMS_EDIT,I)}),s.value=!1}function n(){const t={form:g(),service:Z,modalTitle:m.backoffice.objectParams.channelType.title,search:c,itsNew:!0};v.emit(N.emitter.PARAMS_EDIT,t)}function g(){return{texts:[{language:"pt",name:null,description:null},{language:"en",name:null,description:null}]}}function j(t){const u={itemId:t.serviceTypeId,service:Z,modalTitle:m.backoffice.objectParams.channelType.title,search:c};v.emit(N.emitter.PARAMS_CONFIRM_DELETE,u)}return(t,u)=>{const I=o("cbutton"),M=o("table-actions"),S=o("ccolumn"),C=o("table-action-edit"),B=o("table-action-delete"),R=o("ctable"),F=o("accordion");return L(),H("div",null,[a(F,{id:e(p),title:t._lang.backoffice.objectParams.serviceType.title,collapsed:!1,class:"mb-4"},{default:b(()=>[a(M,null,{default:b(()=>[a(I,{target:"create-contact",class:"d-inline",type:e(y).buttonType.secondary,title:t._lang.common.toAdd,disabled:!1,icon:K,onClick:n},null,8,["type","title"])]),_:1}),a(ie,{onApplyClick:h,onClearClick:z,createFilterModel:i}),a(R,{onSort:A,onChangePage:T,data:e(_),checkbox:!1,loading:e(s),defaultSort:"serviceTypeId"},{columns:b(()=>[a(S,{name:t._lang.label.name,field:"name",sortable:!0},null,8,["name"]),a(S,{name:t._lang.label.description,field:"description",sortable:!1},null,8,["name"])]),actions:b(V=>[a(C,{onClick:f=>w(V.item)},null,8,["onClick"]),a(B,{onClick:f=>j(V.item)},null,8,["onClick"])]),_:1},8,["data","loading"])]),_:1},8,["id","title"])])}}},Ne={__name:"index",setup(l){const v=U(),m=G();let p=k(r.uuid()),_=k(r.createEmptyDataSource()),d=E(i());E(g());let s=k(!1);q(async()=>{await c()});function i(){return{pageNumber:1,sortBy:"serviceCategoryId",serviceCategoryIds:[],name:null,description:null}}async function h(t){Object.assign(d,t),c()}async function z(){Object.assign(d,i()),c()}async function c(){s.value=!0;let t=await te.search(d);r.validateResponse(t,null,async()=>{_.value=t.data,_.value.items=t.data.items.map(u=>({serviceCategoryId:u.serviceCategoryId,serviceCategoryParentName:u.serviceCategoryParentName,name:u.texts[0].name,description:u.texts[0].description}))}),s.value=!1}async function A(t){d.sortBy=t,await c()}async function T(t){d.pageNumber=t,await c()}async function w(t){s.value=!0;let u=await te.getById(t.serviceCategoryId);r.validateResponse(u,null,async()=>{const I={form:u.data,service:te,modalTitle:m.backoffice.objectParams.serviceCategory.title,search:c,itsNew:!1,haveParent:!0};v.emit(N.emitter.PARAMS_EDIT,I)}),s.value=!1}function n(){const t={form:g(),service:te,modalTitle:m.backoffice.objectParams.serviceCategory.title,search:c,itsNew:!0,haveParent:!0};v.emit(N.emitter.PARAMS_EDIT,t)}function g(){return{texts:[{language:"pt",name:null,description:null},{language:"en",name:null,description:null}]}}function j(t){const u={itemId:t.serviceCategoryId,service:te,modalTitle:m.backoffice.objectParams.serviceCategory.title,search:c};v.emit(N.emitter.PARAMS_CONFIRM_DELETE,u)}return(t,u)=>{const I=o("cbutton"),M=o("table-actions"),S=o("ccolumn"),C=o("table-action-edit"),B=o("table-action-delete"),R=o("ctable"),F=o("accordion");return L(),H("div",null,[a(F,{id:e(p),title:t._lang.backoffice.objectParams.serviceCategory.title,collapsed:!1,class:"mb-4"},{default:b(()=>[a(M,null,{default:b(()=>[a(I,{target:"create-contact",class:"d-inline",type:e(y).buttonType.secondary,title:t._lang.common.toAdd,disabled:!1,icon:K,onClick:n},null,8,["type","title"])]),_:1}),a(ie,{onApplyClick:h,onClearClick:z,createFilterModel:i}),a(R,{onSort:A,onChangePage:T,data:e(_),checkbox:!1,loading:e(s),defaultSort:"serviceCategoryId"},{columns:b(()=>[a(S,{name:t._lang.label.name,field:"name",sortable:!0,sortField:"serviceCategoryId"},null,8,["name"]),a(S,{name:t._lang.label.serviceCategoryParent,field:"serviceCategoryParentName",sortField:"serviceCategoryParentId",sortable:!0},null,8,["name"]),a(S,{name:t._lang.label.description,field:"description",sortable:!1},null,8,["name"])]),actions:b(V=>[a(C,{onClick:f=>w(V.item)},null,8,["onClick"]),a(B,{onClick:f=>j(V.item)},null,8,["onClick"])]),_:1},8,["data","loading"])]),_:1},8,["id","title"])])}}},Re={__name:"edit-modal",props:{modelValue:{type:[Number,String,Boolean,Object]},itsNew:{type:Boolean,default:!0},search:{type:Function}},emits:["update:modelValue"],setup(l,{emit:v}){const m=l,p="edit-check-list";U();const _=G();let d=k([]),s=k(y.language.pt);q(async()=>{await h()}),oe(()=>{});const i=$({get(){return m.modelValue},set(n){v("update:modelValue",n)}});async function h(){let n=await ne.getLanguages();r.validateResponse(n,null,()=>{d.value=n.data})}function z(){r.closeModalById(p)}async function c(){if(m.itsNew){r.isNullOrEmpty(r.getObjByLang(i.value.questionTexts,"en").defaultAnswer)&&(r.getObjByLang(i.value.questionTexts,"en").defaultAnswer=r.getObjByLang(i.value.questionTexts,"pt").defaultAnswer),r.isNullOrEmpty(r.getObjByLang(i.value.questionTexts,"en").question)&&(r.getObjByLang(i.value.questionTexts,"en").question=r.getObjByLang(i.value.questionTexts,"pt").question);let n=await ce.create(i.value);r.validateResponse(n,"Criado com sucesso",()=>{m.search(),r.closeModalById(p)})}else{let n=await ce.update(i.value);r.validateResponse(n,"Guardado com sucesso",()=>{m.search(),r.closeModalById(p)})}}const A=$(()=>r.convertEnumToArray(_.enums.checkListbjectType)),T=$({get(){return D.getFieldByLangAndName(i.value,s.value,"defaultAnswer","questionTexts")},set(n){D.setFieldByLangAndName(i.value,s.value,"defaultAnswer",n,"questionTexts")}}),w=$({get(){return D.getFieldByLangAndName(i.value,s.value,"question","questionTexts")},set(n){D.setFieldByLangAndName(i.value,s.value,"question",n,"questionTexts")}});return(n,g)=>{const j=o("lang-selector"),t=o("form-field"),u=o("row"),I=o("cbutton"),M=o("modal");return L(),J(M,{id:p,title:n._lang.backoffice.objectParams.checkList.title,size:e(y).modalSize.extraLarge,"remove-padding":!1},_e({footer:b(()=>[a(I,{type:e(y).buttonType.link,class:"ms-auto",title:n._lang.common.cancel,onClick:z,size:e(y).buttonSize.medium,disabled:!1},null,8,["type","title","size"]),a(I,{type:e(y).buttonType.primary,title:n._lang.common.save,onClick:c,size:e(y).buttonSize.medium,disabled:!1},null,8,["type","title","size"])]),_:2},[m.modelValue!=null?{name:"body",fn:b(()=>[a(j,{style:{"text-align":"-webkit-right"},options:e(d),selectedLang:e(s),"onUpdate:selectedLang":g[0]||(g[0]=S=>Q(s)?s.value=S:s=S)},null,8,["options","selectedLang"]),a(u,null,{default:b(()=>[a(t,{id:"objectTypeId",class:"mb-3 col-12 col-md-6",modelValue:e(i).objectTypeId,"onUpdate:modelValue":g[1]||(g[1]=S=>e(i).objectTypeId=S),label:n._lang.label.objectTypeId,disabled:!1,type:e(y).inputs.multiselect,options:e(A)},null,8,["modelValue","label","type","options"]),a(t,{id:"order",class:"mb-3 col-12 col-md-6",modelValue:e(i).order,"onUpdate:modelValue":g[2]||(g[2]=S=>e(i).order=S),label:n._lang.label.order,disabled:!1,type:e(y).inputs.number},null,8,["modelValue","label","type"]),a(t,{id:"question",class:"mb-3 col-12",modelValue:e(w),"onUpdate:modelValue":g[3]||(g[3]=S=>Q(w)?w.value=S:null),label:n._lang.label.question,disabled:!1,type:e(y).inputs.text,language:e(s)},null,8,["modelValue","label","type","language"]),a(t,{id:"defaultAnswer",class:"mb-3 col-12",modelValue:e(T),"onUpdate:modelValue":g[4]||(g[4]=S=>Q(T)?T.value=S:null),label:n._lang.label.defaultAnswer,disabled:!1,type:e(y).inputs.textarea,language:e(s),maxlength:1e4},null,8,["modelValue","label","type","language"])]),_:1})]),key:"0"}:void 0]),1032,["title","size"])}}},Ee={class:"col-12 hstack gap-2 mt-3"},Le={__name:"index",setup(l){const v=U(),m=G(),p="edit-check-list";let _=k(r.uuid()),d=k(r.createEmptyDataSource()),s=E(A()),i=E(I()),h=k(!1),z=k(!0);const c=$(()=>{let C=ve.getUser();return!C||!C.name?!1:C.name.toLowerCase()==="guest"});q(async()=>{c.value||await n()});function A(){return{pageNumber:1,sortBy:"ObjectTypeId",objectTypeId:null}}async function T(C){Object.assign(s,C),n()}async function w(){Object.assign(s,A()),n()}async function n(){h.value=!0;let C=await ce.search(s);r.validateResponse(C,null,async()=>{d.value=C.data,d.value.items=C.data.items.map(B=>({id:B.id,checkListQuestionId:B.id,objectTypeId:B.objectTypeId,question:B.questionTexts[0].question,questionTexts:B.questionTexts,order:B.order}))}),h.value=!1}async function g(C){s.sortBy=C,await n()}async function j(C){s.pageNumber=C,await n()}async function t(C){z.value=!1,Object.assign(i,C),r.showModalById(p)}function u(){z.value=!0,Object.assign(i,I()),r.showModalById(p)}function I(){return{objectTypeId:null,checkListQuestionId:null,order:null,questionTexts:[{language:"pt",question:null,defaultAnswer:null},{language:"en",question:null,defaultAnswer:null}]}}function M(C){const B={itemId:C.id,service:ce,modalTitle:m.backoffice.objectParams.channelType.title,search:n};v.emit(N.emitter.PARAMS_CONFIRM_DELETE,B)}const S=$(()=>r.convertEnumToArray(m.enums.checkListbjectType));return(C,B)=>{const R=o("cbutton"),F=o("table-actions"),V=o("form-field"),f=o("row"),O=o("ccolumn"),re=o("table-action-edit"),se=o("table-action-delete"),ue=o("ctable"),X=o("accordion");return L(),H(pe,null,[le("div",null,[a(X,{id:e(_),title:C._lang.backoffice.objectParams.checkList.title,collapsed:!1,class:"mb-4"},{default:b(()=>[a(F,null,{default:b(()=>[a(R,{target:"create-contact",class:"d-inline",type:e(y).buttonType.secondary,title:C._lang.common.toAdd,disabled:!1,icon:K,onClick:u},null,8,["type","title"])]),_:1}),a(f,null,{default:b(()=>[a(V,{id:"objectTypeId",class:"mb-3 col-12",modelValue:e(s).objectTypeId,"onUpdate:modelValue":B[0]||(B[0]=x=>e(s).objectTypeId=x),label:C._lang.label.objectTypeId,disabled:!1,type:e(y).inputs.multiselect,options:e(S)},null,8,["modelValue","label","type","options"])]),_:1}),a(f,null,{default:b(()=>[le("div",Ee,[a(R,{type:e(y).buttonType.link,class:"ms-auto",title:C._lang.common.clear,onClick:w,size:e(y).buttonSize.medium,disabled:e(h)},null,8,["type","title","size","disabled"]),a(R,{type:e(y).buttonType.primary,title:C._lang.common.apply,onClick:T,size:e(y).buttonSize.medium,disabled:e(h)},null,8,["type","title","size","disabled"])])]),_:1}),a(ue,{onSort:g,onChangePage:j,data:e(d),checkbox:!1,loading:e(h),defaultSort:"objectTypeId"},{columns:b(()=>[a(O,{name:C._lang.label.objectTypeId,field:"objectTypeId",sortable:!0,options:e(S),custom:he},null,8,["name","options"]),a(O,{name:C._lang.label.question,field:"question",sortable:!1},null,8,["name"]),a(O,{name:C._lang.label.order,field:"order",sortable:!0},null,8,["name"])]),actions:b(x=>[a(re,{onClick:de=>t(x.item)},null,8,["onClick"]),a(se,{onClick:de=>M(x.item)},null,8,["onClick"])]),_:1},8,["data","loading"])]),_:1},8,["id","title"])]),e(c)?me("",!0):(L(),J(Re,{key:0,modelValue:e(i),"onUpdate:modelValue":B[1]||(B[1]=x=>Q(i)?i.value=x:i=x),itsNew:e(z),search:n},null,8,["modelValue","itsNew"]))],64)}}},Fe={__name:"edit-modal",props:{modelValue:{type:[Number,String,Boolean,Object]}},emits:["update:modelValue","search"],setup(l,{emit:v}){const m=l;q(async()=>{await c()}),oe(()=>{});const p=$({get(){return m.modelValue},set(n){v("update:modelValue",n)}});let _=k([]),d=k("pt"),s=k(!1);const i="edit-icon",h=G();let z=k(h.common.editIconModalTitle);async function c(){let n=await ne.getLanguages();r.validateResponse(n,null,()=>{_.value=n.data})}function A(){r.closeModalById(i)}async function T(){s.value=!0;let n=await ne.updateIcon(p.value);r.validateResponse(n,h.backoffice.objectParams.icons.update,()=>{v("search"),r.closeModalById(i)}),s.value=!1}const w=$({get(){return D.getFieldByLangAndName(p.value,d.value,"name")}});return(n,g)=>{const j=o("form-field"),t=o("row"),u=o("cbutton"),I=o("modal");return L(),J(I,{id:i,title:e(z),size:e(y).modalSize.extraLarge,"remove-padding":!1},{body:b(()=>[a(t,null,{default:b(()=>[a(j,{id:"name",class:"mb-3 col-12",modelValue:e(w),"onUpdate:modelValue":g[0]||(g[0]=M=>Q(w)?w.value=M:null),label:n._lang.label.name,disabled:!0,type:e(y).inputs.text,language:e(d)},null,8,["modelValue","label","type","language"]),a(j,{id:"icon",class:"mb-3 col-12",modelValue:e(p).icon,"onUpdate:modelValue":g[1]||(g[1]=M=>e(p).icon=M),label:n._lang.label.icon,disabled:m.disabled,loading:m.loading,type:e(y).inputs.file,required:!1,showPreview:!0,accept:".jpeg,.svg,.jpg,.png"},null,8,["modelValue","label","disabled","loading","type"])]),_:1})]),footer:b(()=>[a(u,{type:e(y).buttonType.link,class:"ms-auto",title:n._lang.common.cancel,onClick:A,size:e(y).buttonSize.medium,disabled:e(s)},null,8,["type","title","size","disabled"]),a(u,{type:e(y).buttonType.primary,title:n._lang.common.save,onClick:T,size:e(y).buttonSize.medium,disabled:e(s)},null,8,["type","title","size","disabled"])]),_:1},8,["title","size"])}}};const $e=["src"],Oe={__name:"icon",props:{value:{type:Object,required:!1}},setup(l){const v=l,m=$(()=>{var _,d;let p=null;return v.value&&(p=`data:${(_=v.value)==null?void 0:_.mime};base64,${(d=v.value)==null?void 0:d.data}`),p});return(p,_)=>e(m)!=null?(L(),H("img",{key:0,src:e(m),class:"previewImg"},null,8,$e)):me("",!0)}},qe=ke(Oe,[["__scopeId","data-v-44cd3c43"]]),xe={__name:"index",setup(l){U(),G();let v=k(r.uuid()),m=k(r.createEmptyDataSource()),p=E(i());E(T());let _=k(!1),d=E(w());const s="edit-icon";q(async()=>{await h()});function i(){return{pageNumber:1,sortBy:"serviceTypeId",serviceTypeIds:[],name:null,description:null}}async function h(){_.value=!0;let n=await we.getIcons();r.validateResponse(n,null,async()=>{m.value.items=n.data,m.value.total=n.data.length}),_.value=!1}async function z(n){p.sortBy=n,await h()}async function c(n){p.pageNumber=n,await h()}async function A(n){_.value=!0;let g=await ne.getIconById(n.id);r.validateResponse(g,null,async()=>{Object.assign(d,g.data),r.showModalById(s)}),_.value=!1}function T(){return{texts:[{language:"pt",name:null,description:null},{language:"en",name:null,description:null}]}}function w(){return{icon:null,id:null,texts:[{language:"pt",name:null,description:null},{language:"en",name:null,description:null}]}}return(n,g)=>{const j=o("ccolumn"),t=o("table-action-edit"),u=o("ctable"),I=o("accordion");return L(),H(pe,null,[le("div",null,[a(I,{id:e(v),title:n._lang.backoffice.objectParams.icons.title,collapsed:!1,class:"mb-4"},{default:b(()=>[a(u,{onSort:z,onChangePage:c,data:e(m),checkbox:!1,loading:e(_),defaultSort:"serviceTypeId"},{columns:b(()=>[a(j,{name:n._lang.label.name,field:"name",sortable:!1},null,8,["name"]),a(j,{name:n._lang.label.icon,field:"icon",sortable:!1,align:e(y).columnAlign.center,custom:qe},null,8,["name","align"])]),actions:b(M=>[a(t,{onClick:S=>A(M.item)},null,8,["onClick"])]),_:1},8,["data","loading"])]),_:1},8,["id","title"])]),a(Fe,{modelValue:e(d),"onUpdate:modelValue":g[0]||(g[0]=M=>Q(d)?d.value=M:d=M),onSearch:h},null,8,["modelValue"])],64)}}},Ye={__name:"index",setup(l){return(v,m)=>{const p=o("breadcrumb-item"),_=o("breadcrumb"),d=o("card"),s=o("page");return L(),J(s,{title:v._lang.backoffice.objectParams.pageTitle},{breadcrumb:b(()=>[a(_,{"has-home":!0},{default:b(()=>[a(p,{label:v._lang.backoffice.objectParams.pageTitle},null,8,["label"])]),_:1})]),default:b(()=>[a(d,{shadow:!0},{body:b(()=>[a(Ae),a(Be),a(Ve),a(Ne),a(Me),a(Le),a(xe),a(je),a(Pe)]),_:1})]),_:1},8,["title"])}}};export{Ye as default};
