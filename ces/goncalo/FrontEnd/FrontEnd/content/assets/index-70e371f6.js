import{b as I,h as O,r as C,K as L,o as le,z as R,u as m,j as D,k as l,c as $,l as oe,w as p,n as t,t as me,v as pe,p as a,s as f,m as ae,H,E as F,e as U,F as ie,i as Q,T as K,aa as be}from"./index-074485c3.js";import{b as x}from"./helpers-9f106e00.js";import{s as ce}from"./settings-c1957f95.js";import{_ as ye}from"./custom-label-39863d9c.js";import"./index.esm-da08cc71.js";const W={search:n=>I.post("/organizations/organizationrelatedtype/search",n),getById:n=>I.get(`/organizations/organizationrelatedtype/${n}`),delete:n=>I.delete(`/organizations/organizationrelatedtype/${n}`),create:n=>I.post("/organizations/organizationrelatedtype",n),update:n=>I.put("/organizations/organizationrelatedtype",n)},X={search:n=>I.post("/service/servicetype/search",n),getById:n=>I.get(`/service/servicetype/${n}`),delete:n=>I.delete(`/service/servicetype/${n}`),create:n=>I.post("/service/servicetype",n),update:n=>I.put("/service/servicetype",n)},Y={search:n=>I.post("/poc/channeltype/search",n),getById:n=>I.get(`/poc/channeltype/${n}`),delete:n=>I.delete(`/poc/channeltype/${n}`),create:n=>I.post("/poc/channeltype",n),update:n=>I.put("/poc/channeltype",n)},Z={search:n=>I.post("/service/servicecategory/search",n),getById:n=>I.get(`/service/servicecategory/${n}`),delete:n=>I.delete(`/service/servicecategory/${n}`),create:n=>I.post("/service/servicecategory",n),update:n=>I.put("/service/servicecategory",n)},ee={search:n=>I.post("/service/recipienttype/search",n),getById:n=>I.get(`/service/recipienttype/${n}`),delete:n=>I.delete(`/service/recipienttype/${n}`),create:n=>I.post("/service/recipienttype",n),update:n=>I.put("/service/recipienttype",n)},te={search:n=>I.post("/service/resulttype/search",n),getById:n=>I.get(`/service/resulttype/${n}`),delete:n=>I.delete(`/service/resulttype/${n}`),create:n=>I.post("/service/resulttype",n),update:n=>I.put("/service/resulttype",n)},ne={search:n=>I.post("/settings/checklist/search",n),getById:n=>I.get(`/settings/checklist/${n}`),delete:n=>I.delete(`/settings/checklist/${n}`),create:n=>I.post("/settings/checklist",n),update:n=>I.put("/settings/checklist",n)},fe={__name:"delete-modal",props:{modelValue:{type:[Number,String,Boolean,Object]},itsNew:{type:Boolean,default:!0}},emits:["update:modelValue","updated"],setup(n,{emit:k}){const u=n,_="confirm-delete",T=O();C([]),C("pt");let r=C("Eliminar"),c=C("Eliminar?"),s,g,w;L(async()=>{}),le(()=>{T.on(R.emitter.PARAMS_CONFIRM_DELETE,h=>{r.value=h.modalTitle,s=h.service,g=h.itemId,w=h.search,m.showModalById(_)})}),D({get(){return u.modelValue},set(h){k("update:modelValue",h)}});function i(){m.closeModalById(_)}async function M(){let h=await s.delete(g);m.validateResponse(h,"Eliminado com sucesso",()=>{w(),m.closeModalById(_)})}return(h,A)=>{const z=l("row"),b=l("cbutton"),S=l("modal");return $(),oe(S,{id:_,title:a(r),size:a(f).modalSize.medium,"remove-padding":!1},{body:p(()=>[t(z,null,{default:p(()=>[me(pe(a(c)),1)]),_:1})]),footer:p(()=>[t(b,{type:a(f).buttonType.link,class:"ms-auto",title:h._lang.common.cancel,onClick:i,size:a(f).buttonSize.medium,disabled:!1},null,8,["type","title","size"]),t(b,{type:a(f).buttonType.primary,title:h._lang.common.delete,onClick:M,size:a(f).buttonSize.medium,disabled:!1},null,8,["type","title","size"])]),_:1},8,["title","size"])}}},_e={class:"col-12 mb-3"},ge={__name:"edit-modal",props:{modelValue:{type:[Number,String,Boolean,Object]}},emits:["update:modelValue"],setup(n,{emit:k}){const u=n,_="edit",T=O();let r=C([]),c=C("pt"),s=C("Eliminar"),g,w=C(j()),i,M=C(!1),h=C(""),A=C("description");L(async()=>{await z()}),le(()=>{T.on(R.emitter.PARAMS_EDIT,y=>{h.value=y.value1??"name",A.value=y.value2??"description",s.value=y.modalTitle,g=y.service,w.value=y.form,i=y.search,M.value=y.itsNew,m.showModalById(_)})}),D({get(){return u.modelValue},set(y){k("update:modelValue",y)}});async function z(){let y=await ce.getLanguages();m.validateResponse(y,null,()=>{r.value=y.data})}function b(){m.closeModalById(_)}async function S(){if(M.value){let y=await g.create(w.value);m.validateResponse(y,"Criado com sucesso",()=>{i(),m.closeModalById(_)})}else{let y=await g.update(w.value);m.validateResponse(y,"Guardado com sucesso",()=>{i(),m.closeModalById(_)})}}const e=D({get(){return x.getFieldByLangAndName(w.value,c.value,h.value)},set(y){x.setFieldByLangAndName(w.value,c.value,h.value,y)}}),o=D({get(){return x.getFieldByLangAndName(w.value,c.value,h.value)},set(y){x.setFieldByLangAndName(w.value,c.value,h.value,y)}});function j(){return{texts:[{language:"pt",name:null,description:null},{language:"en",name:null,description:null}]}}return(y,d)=>{const v=l("lang-selector"),B=l("row"),V=l("table-actions"),N=l("form-field"),P=l("cbutton"),E=l("modal");return $(),oe(E,{id:_,title:a(s),size:a(f).modalSize.extraLarge,"remove-padding":!1},{body:p(()=>[t(V,null,{default:p(()=>[t(B,null,{default:p(()=>[ae("div",_e,[t(v,{options:a(r),selectedLang:a(c),"onUpdate:selectedLang":d[0]||(d[0]=q=>H(c)?c.value=q:c=q),disabled:!1},null,8,["options","selectedLang"])])]),_:1})]),_:1}),t(B,null,{default:p(()=>[t(N,{id:"value1Computed",class:"mb-3 col-12 col-md-6",modelValue:a(e),"onUpdate:modelValue":d[1]||(d[1]=q=>H(e)?e.value=q:null),label:y._lang.label[a(h)],disabled:!1,type:a(f).inputs.text,language:a(c)},null,8,["modelValue","label","type","language"]),t(N,{id:"value2Computed",class:"mb-3 col-12 col-md-6",modelValue:a(o),"onUpdate:modelValue":d[2]||(d[2]=q=>H(o)?o.value=q:null),label:y._lang.label[a(A)],disabled:!1,type:a(f).inputs.text,language:a(c)},null,8,["modelValue","label","type","language"])]),_:1})]),footer:p(()=>[t(P,{type:a(f).buttonType.link,class:"ms-auto",title:y._lang.common.cancel,onClick:b,size:a(f).buttonSize.medium,disabled:!1},null,8,["type","title","size"]),t(P,{type:a(f).buttonType.primary,title:y._lang.common.save,onClick:S,size:a(f).buttonSize.medium,disabled:!1},null,8,["type","title","size"])]),_:1},8,["title","size"])}}},ve={class:"col-12 hstack gap-2 mt-3"},J={__name:"search",props:{value1:{type:String,default:"name"},value2:{type:String,default:"description"},createFilterModel:{type:Function}},emits:["applyClick","clearClick"],setup(n,{emit:k}){const u=n;var _=F(u.createFilterModel());L(async()=>{}),le(()=>{});function T(){k("applyClick",_)}function r(){Object.assign(_,u.createFilterModel()),k("clearClick")}return(c,s)=>{const g=l("form-field"),w=l("row"),i=l("cbutton");return $(),U(ie,null,[t(w,null,{default:p(()=>[t(g,{id:"value1",class:"mb-3 col-12 col-md-6",modelValue:a(_)[u.value1],"onUpdate:modelValue":s[0]||(s[0]=M=>a(_)[u.value1]=M),label:c._lang.label[u.value1],disabled:!1,type:a(f).inputs.text},null,8,["modelValue","label","type"]),t(g,{id:"value2",class:"mb-3 col-12 col-md-6",modelValue:a(_)[u.value2],"onUpdate:modelValue":s[1]||(s[1]=M=>a(_)[u.value2]=M),label:c._lang.label[u.value2],disabled:!1,type:a(f).inputs.text},null,8,["modelValue","label","type"])]),_:1}),t(w,null,{default:p(()=>[ae("div",ve,[t(i,{type:a(f).buttonType.link,class:"ms-auto",title:c._lang.common.clear,onClick:r,size:a(f).buttonSize.medium,disabled:u.disabled||u.disabledClearButton},null,8,["type","title","size","disabled"]),t(i,{type:a(f).buttonType.primary,title:c._lang.common.apply,onClick:T,size:a(f).buttonSize.medium,disabled:u.disabled},null,8,["type","title","size","disabled"])])]),_:1})],64)}}},ke={__name:"index",setup(n){const k=O(),u=Q();let _=C(m.uuid()),T=C(m.createEmptyDataSource()),r=F(s());F(b());let c=C(!1);L(async()=>{await i()});function s(){return{pageNumber:1,sortBy:"OrganizationRelatedTypeId",organizationRelatedTypeIds:[],name:null,description:null}}async function g(e){Object.assign(r,e),i()}async function w(){Object.assign(r,s()),i()}async function i(){c.value=!0;let e=await W.search(r);m.validateResponse(e,null,async()=>{T.value=e.data,T.value.items=e.data.items.map(o=>({organizationRelatedTypeId:o.organizationRelatedTypeId,name:o.texts[0].name,description:o.texts[0].description}))}),c.value=!1}async function M(e){r.sortBy=e,await i()}async function h(e){r.pageNumber=e,await i()}async function A(e){c.value=!0;let o=await W.getById(e.organizationRelatedTypeId);m.validateResponse(o,null,async()=>{const j={form:o.data,service:W,modalTitle:u.backoffice.objectParams.organizationRelatedType.title,search:i,itsNew:!1};k.emit(R.emitter.PARAMS_EDIT,j)}),c.value=!1}function z(){const e={form:b(),service:W,modalTitle:u.backoffice.objectParams.organizationRelatedType.title,search:i,itsNew:!0};k.emit(R.emitter.PARAMS_EDIT,e)}function b(){return{texts:[{language:"pt",name:null,description:null},{language:"en",name:null,description:null}]}}function S(e){const o={itemId:e.organizationRelatedTypeId,service:W,modalTitle:u.backoffice.objectParams.organizationRelatedType.title,search:i};k.emit(R.emitter.PARAMS_CONFIRM_DELETE,o)}return(e,o)=>{const j=l("cbutton"),y=l("table-actions"),d=l("ccolumn"),v=l("table-action-edit"),B=l("table-action-delete"),V=l("ctable"),N=l("accordion");return $(),U("div",null,[t(N,{id:a(_),title:e._lang.backoffice.objectParams.organizationRelatedType.title,collapsed:!1,class:"mb-4"},{default:p(()=>[t(y,null,{default:p(()=>[t(j,{target:"create-contact",class:"d-inline",type:a(f).buttonType.secondary,title:e._lang.common.toAdd,disabled:!1,icon:K,onClick:z},null,8,["type","title"])]),_:1}),t(J,{onApplyClick:g,onClearClick:w,createFilterModel:s}),t(V,{onSort:M,onChangePage:h,data:a(T),checkbox:!1,loading:a(c),defaultSort:"OrganizationRelatedTypeId"},{columns:p(()=>[t(d,{name:e._lang.label.name,field:"name",sortable:!0},null,8,["name"]),t(d,{name:e._lang.label.description,field:"description",sortable:!1},null,8,["name"])]),actions:p(P=>[t(v,{onClick:E=>A(P.item)},null,8,["onClick"]),t(B,{onClick:E=>S(P.item)},null,8,["onClick"])]),_:1},8,["data","loading"])]),_:1},8,["id","title"])])}}},Ce={__name:"index",setup(n){const k=O(),u=Q();let _=C(m.uuid()),T=C(m.createEmptyDataSource()),r=F(s());F(b());let c=C(!1);L(async()=>{await i()});function s(){return{pageNumber:1,sortBy:"channelTypeId",channelTypeIds:[],name:null,description:null}}async function g(e){Object.assign(r,e),i()}async function w(){Object.assign(r,s()),i()}async function i(){c.value=!0;let e=await Y.search(r);m.validateResponse(e,null,async()=>{T.value=e.data,T.value.items=e.data.items.map(o=>({channelTypeId:o.channelTypeId,name:o.texts[0].name,description:o.texts[0].description}))}),c.value=!1}async function M(e){r.sortBy=e,await i()}async function h(e){r.pageNumber=e,await i()}async function A(e){c.value=!0;let o=await Y.getById(e.channelTypeId);m.validateResponse(o,null,async()=>{const j={form:o.data,service:Y,modalTitle:u.backoffice.objectParams.channelType.title,search:i,itsNew:!1};k.emit(R.emitter.PARAMS_EDIT,j)}),c.value=!1}function z(){const e={form:b(),service:Y,modalTitle:u.backoffice.objectParams.channelType.title,search:i,itsNew:!0};k.emit(R.emitter.PARAMS_EDIT,e)}function b(){return{texts:[{language:"pt",name:null,description:null},{language:"en",name:null,description:null}]}}function S(e){const o={itemId:e.channelTypeId,service:Y,modalTitle:u.backoffice.objectParams.channelType.title,search:i};k.emit(R.emitter.PARAMS_CONFIRM_DELETE,o)}return(e,o)=>{const j=l("cbutton"),y=l("table-actions"),d=l("ccolumn"),v=l("table-action-edit"),B=l("table-action-delete"),V=l("ctable"),N=l("accordion");return $(),U("div",null,[t(N,{id:a(_),title:e._lang.backoffice.objectParams.channelType.title,collapsed:!1,class:"mb-4"},{default:p(()=>[t(y,null,{default:p(()=>[t(j,{target:"create-contact",class:"d-inline",type:a(f).buttonType.secondary,title:e._lang.common.toAdd,disabled:!1,icon:K,onClick:z},null,8,["type","title"])]),_:1}),t(J,{onApplyClick:g,onClearClick:w,createFilterModel:s}),t(V,{onSort:M,onChangePage:h,data:a(T),checkbox:!1,loading:a(c),defaultSort:"channelTypeId"},{columns:p(()=>[t(d,{name:e._lang.label.name,field:"name",sortable:!0},null,8,["name"]),t(d,{name:e._lang.label.description,field:"description",sortable:!1},null,8,["name"])]),actions:p(P=>[t(v,{onClick:E=>A(P.item)},null,8,["onClick"]),t(B,{onClick:E=>S(P.item)},null,8,["onClick"])]),_:1},8,["data","loading"])]),_:1},8,["id","title"])])}}},Te={__name:"index",setup(n){const k=O(),u=Q();let _=C(m.uuid()),T=C(m.createEmptyDataSource()),r=F(s());F(b());let c=C(!1);L(async()=>{await i()});function s(){return{pageNumber:1,sortBy:"recipientTypeId",recipientTypeIds:[],name:null,description:null}}async function g(e){Object.assign(r,e),i()}async function w(){Object.assign(r,s()),i()}async function i(){c.value=!0;let e=await ee.search(r);m.validateResponse(e,null,async()=>{T.value=e.data,T.value.items=e.data.items.map(o=>({recipientTypeId:o.recipientTypeId,name:o.texts[0].name,description:o.texts[0].description}))}),c.value=!1}async function M(e){r.sortBy=e,await i()}async function h(e){r.pageNumber=e,await i()}async function A(e){c.value=!0;let o=await ee.getById(e.recipientTypeId);m.validateResponse(o,null,async()=>{const j={form:o.data,service:ee,modalTitle:u.backoffice.objectParams.recipientType.title,search:i,itsNew:!1};k.emit(R.emitter.PARAMS_EDIT,j)}),c.value=!1}function z(){const e={form:b(),service:ee,modalTitle:u.backoffice.objectParams.recipientType.title,search:i,itsNew:!0};k.emit(R.emitter.PARAMS_EDIT,e)}function b(){return{texts:[{language:"pt",name:null,description:null},{language:"en",name:null,description:null}]}}function S(e){const o={itemId:e.recipientTypeId,service:ee,modalTitle:u.backoffice.objectParams.recipientType.title,search:i};k.emit(R.emitter.PARAMS_CONFIRM_DELETE,o)}return(e,o)=>{const j=l("cbutton"),y=l("table-actions"),d=l("ccolumn"),v=l("table-action-edit"),B=l("table-action-delete"),V=l("ctable"),N=l("accordion");return $(),U("div",null,[t(N,{id:a(_),title:e._lang.backoffice.objectParams.recipientType.title,collapsed:!1,class:"mb-4"},{default:p(()=>[t(y,null,{default:p(()=>[t(j,{target:"create-contact",class:"d-inline",type:a(f).buttonType.secondary,title:e._lang.common.toAdd,disabled:!1,icon:K,onClick:z},null,8,["type","title"])]),_:1}),t(J,{onApplyClick:g,onClearClick:w,createFilterModel:s}),t(V,{onSort:M,onChangePage:h,data:a(T),checkbox:!1,loading:a(c),defaultSort:"recipientTypeId"},{columns:p(()=>[t(d,{name:e._lang.label.name,field:"name",sortable:!0},null,8,["name"]),t(d,{name:e._lang.label.description,field:"description",sortable:!1},null,8,["name"])]),actions:p(P=>[t(v,{onClick:E=>A(P.item)},null,8,["onClick"]),t(B,{onClick:E=>S(P.item)},null,8,["onClick"])]),_:1},8,["data","loading"])]),_:1},8,["id","title"])])}}},Ie={__name:"index",setup(n){const k=O(),u=Q();let _=C(m.uuid()),T=C(m.createEmptyDataSource()),r=F(s());F(b());let c=C(!1);L(async()=>{await i()});function s(){return{pageNumber:1,sortBy:"serviceTypeId",serviceTypeIds:[],name:null,description:null}}async function g(e){Object.assign(r,e),i()}async function w(){Object.assign(r,s()),i()}async function i(){c.value=!0;let e=await X.search(r);m.validateResponse(e,null,async()=>{T.value=e.data,T.value.items=e.data.items.map(o=>({serviceTypeId:o.serviceTypeId,name:o.texts[0].name,description:o.texts[0].description}))}),c.value=!1}async function M(e){r.sortBy=e,await i()}async function h(e){r.pageNumber=e,await i()}async function A(e){c.value=!0;let o=await X.getById(e.serviceTypeId);m.validateResponse(o,null,async()=>{const j={form:o.data,service:X,modalTitle:u.backoffice.objectParams.channelType.title,search:i,itsNew:!1};k.emit(R.emitter.PARAMS_EDIT,j)}),c.value=!1}function z(){const e={form:b(),service:X,modalTitle:u.backoffice.objectParams.channelType.title,search:i,itsNew:!0};k.emit(R.emitter.PARAMS_EDIT,e)}function b(){return{texts:[{language:"pt",name:null,description:null},{language:"en",name:null,description:null}]}}function S(e){const o={itemId:e.serviceTypeId,service:X,modalTitle:u.backoffice.objectParams.channelType.title,search:i};k.emit(R.emitter.PARAMS_CONFIRM_DELETE,o)}return(e,o)=>{const j=l("cbutton"),y=l("table-actions"),d=l("ccolumn"),v=l("table-action-edit"),B=l("table-action-delete"),V=l("ctable"),N=l("accordion");return $(),U("div",null,[t(N,{id:a(_),title:e._lang.backoffice.objectParams.serviceType.title,collapsed:!1,class:"mb-4"},{default:p(()=>[t(y,null,{default:p(()=>[t(j,{target:"create-contact",class:"d-inline",type:a(f).buttonType.secondary,title:e._lang.common.toAdd,disabled:!1,icon:K,onClick:z},null,8,["type","title"])]),_:1}),t(J,{onApplyClick:g,onClearClick:w,createFilterModel:s}),t(V,{onSort:M,onChangePage:h,data:a(T),checkbox:!1,loading:a(c),defaultSort:"serviceTypeId"},{columns:p(()=>[t(d,{name:e._lang.label.name,field:"name",sortable:!0},null,8,["name"]),t(d,{name:e._lang.label.description,field:"description",sortable:!1},null,8,["name"])]),actions:p(P=>[t(v,{onClick:E=>A(P.item)},null,8,["onClick"]),t(B,{onClick:E=>S(P.item)},null,8,["onClick"])]),_:1},8,["data","loading"])]),_:1},8,["id","title"])])}}},he={__name:"index",setup(n){const k=O(),u=Q();let _=C(m.uuid()),T=C(m.createEmptyDataSource()),r=F(s());F(b());let c=C(!1);L(async()=>{await i()});function s(){return{pageNumber:1,sortBy:"serviceCategoryId",serviceCategoryIds:[],name:null,description:null}}async function g(e){Object.assign(r,e),i()}async function w(){Object.assign(r,s()),i()}async function i(){c.value=!0;let e=await Z.search(r);m.validateResponse(e,null,async()=>{T.value=e.data,T.value.items=e.data.items.map(o=>({serviceCategoryId:o.serviceCategoryId,name:o.texts[0].name,description:o.texts[0].description}))}),c.value=!1}async function M(e){r.sortBy=e,await i()}async function h(e){r.pageNumber=e,await i()}async function A(e){c.value=!0;let o=await Z.getById(e.serviceCategoryId);m.validateResponse(o,null,async()=>{const j={form:o.data,service:Z,modalTitle:u.backoffice.objectParams.serviceCategory.title,search:i,itsNew:!1};k.emit(R.emitter.PARAMS_EDIT,j)}),c.value=!1}function z(){const e={form:b(),service:Z,modalTitle:u.backoffice.objectParams.serviceCategory.title,search:i,itsNew:!0};k.emit(R.emitter.PARAMS_EDIT,e)}function b(){return{texts:[{language:"pt",name:null,description:null},{language:"en",name:null,description:null}]}}function S(e){const o={itemId:e.serviceCategoryId,service:Z,modalTitle:u.backoffice.objectParams.serviceCategory.title,search:i};k.emit(R.emitter.PARAMS_CONFIRM_DELETE,o)}return(e,o)=>{const j=l("cbutton"),y=l("table-actions"),d=l("ccolumn"),v=l("table-action-edit"),B=l("table-action-delete"),V=l("ctable"),N=l("accordion");return $(),U("div",null,[t(N,{id:a(_),title:e._lang.backoffice.objectParams.serviceCategory.title,collapsed:!1,class:"mb-4"},{default:p(()=>[t(y,null,{default:p(()=>[t(j,{target:"create-contact",class:"d-inline",type:a(f).buttonType.secondary,title:e._lang.common.toAdd,disabled:!1,icon:K,onClick:z},null,8,["type","title"])]),_:1}),t(J,{onApplyClick:g,onClearClick:w,createFilterModel:s}),t(V,{onSort:M,onChangePage:h,data:a(T),checkbox:!1,loading:a(c),defaultSort:"serviceCategoryId"},{columns:p(()=>[t(d,{name:e._lang.label.name,field:"name",sortable:!0},null,8,["name"]),t(d,{name:e._lang.label.description,field:"description",sortable:!1},null,8,["name"])]),actions:p(P=>[t(v,{onClick:E=>A(P.item)},null,8,["onClick"]),t(B,{onClick:E=>S(P.item)},null,8,["onClick"])]),_:1},8,["data","loading"])]),_:1},8,["id","title"])])}}},we={__name:"index",setup(n){const k=O(),u=Q();let _=C(m.uuid()),T=C(m.createEmptyDataSource()),r=F(s());F(b());let c=C(!1);L(async()=>{await i()});function s(){return{pageNumber:1,sortBy:"resultTypeId",resultTypeIds:[],name:null,description:null}}async function g(e){Object.assign(r,e),i()}async function w(){Object.assign(r,s()),i()}async function i(){c.value=!0;let e=await te.search(r);m.validateResponse(e,null,async()=>{T.value=e.data,T.value.items=e.data.items.map(o=>({resultTypeId:o.resultTypeId,name:o.texts[0].name,description:o.texts[0].description}))}),c.value=!1}async function M(e){r.sortBy=e,await i()}async function h(e){r.pageNumber=e,await i()}async function A(e){c.value=!0;let o=await te.getById(e.resultTypeId);m.validateResponse(o,null,async()=>{const j={form:o.data,service:te,modalTitle:u.backoffice.objectParams.channelType.title,search:i,itsNew:!1};k.emit(R.emitter.PARAMS_EDIT,j)}),c.value=!1}function z(){const e={form:b(),service:te,modalTitle:u.backoffice.objectParams.channelType.title,search:i,itsNew:!0};k.emit(R.emitter.PARAMS_EDIT,e)}function b(){return{texts:[{language:"pt",name:null,description:null},{language:"en",name:null,description:null}]}}function S(e){const o={itemId:e.resultTypeId,service:te,modalTitle:u.backoffice.objectParams.channelType.title,search:i};k.emit(R.emitter.PARAMS_CONFIRM_DELETE,o)}return(e,o)=>{const j=l("cbutton"),y=l("table-actions"),d=l("ccolumn"),v=l("table-action-edit"),B=l("table-action-delete"),V=l("ctable"),N=l("accordion");return $(),U("div",null,[t(N,{id:a(_),title:e._lang.backoffice.objectParams.resultType.title,collapsed:!1,class:"mb-4"},{default:p(()=>[t(y,null,{default:p(()=>[t(j,{target:"create-contact",class:"d-inline",type:a(f).buttonType.secondary,title:e._lang.common.toAdd,disabled:!1,icon:K,onClick:z},null,8,["type","title"])]),_:1}),t(J,{onApplyClick:g,onClearClick:w,createFilterModel:s}),t(V,{onSort:M,onChangePage:h,data:a(T),checkbox:!1,loading:a(c),defaultSort:"resultTypeId"},{columns:p(()=>[t(d,{name:e._lang.label.name,field:"name",sortable:!0},null,8,["name"]),t(d,{name:e._lang.label.description,field:"description",sortable:!1},null,8,["name"])]),actions:p(P=>[t(v,{onClick:E=>A(P.item)},null,8,["onClick"]),t(B,{onClick:E=>S(P.item)},null,8,["onClick"])]),_:1},8,["data","loading"])]),_:1},8,["id","title"])])}}},je={__name:"edit-modal",props:{modelValue:{type:[Number,String,Boolean,Object]},itsNew:{type:Boolean,default:!0},search:{type:Function}},emits:["update:modelValue"],setup(n,{emit:k}){const u=n,_="edit-check-list";O();const T=Q();let r=C("Eliminar"),c=C([]),s=C(f.language.pt);L(async()=>{await w()}),le(()=>{});const g=D({get(){return u.modelValue},set(b){k("update:modelValue",b)}});async function w(){let b=await ce.getLanguages();m.validateResponse(b,null,()=>{c.value=b.data})}function i(){m.closeModalById(_)}async function M(){if(u.itsNew){let b=await ne.create(g.value);m.validateResponse(b,"Criado com sucesso",()=>{u.search(),m.closeModalById(_)})}else{let b=await ne.update(g.value);m.validateResponse(b,"Guardado com sucesso",()=>{u.search(),m.closeModalById(_)})}}const h=D(()=>m.convertEnumToArray(T.enums.checkListbjectType)),A=D({get(){return x.getFieldByLangAndName(g.value,s.value,"defaultAnswer","questionTexts")},set(b){x.setFieldByLangAndName(g.value,s.value,"defaultAnswer",b,"questionTexts")}}),z=D({get(){return x.getFieldByLangAndName(g.value,s.value,"question","questionTexts")},set(b){x.setFieldByLangAndName(g.value,s.value,"question",b,"questionTexts")}});return(b,S)=>{const e=l("lang-selector"),o=l("form-field"),j=l("row"),y=l("cbutton"),d=l("modal");return $(),oe(d,{id:_,title:a(r),size:a(f).modalSize.extraLarge,"remove-padding":!1},be({footer:p(()=>[t(y,{type:a(f).buttonType.link,class:"ms-auto",title:b._lang.common.cancel,onClick:i,size:a(f).buttonSize.medium,disabled:!1},null,8,["type","title","size"]),t(y,{type:a(f).buttonType.primary,title:b._lang.common.save,onClick:M,size:a(f).buttonSize.medium,disabled:!1},null,8,["type","title","size"])]),_:2},[u.modelValue!=null?{name:"body",fn:p(()=>[t(e,{style:{"text-align":"-webkit-right"},options:a(c),selectedLang:a(s),"onUpdate:selectedLang":S[0]||(S[0]=v=>H(s)?s.value=v:s=v)},null,8,["options","selectedLang"]),t(j,null,{default:p(()=>[t(o,{id:"objectTypeId",class:"mb-3 col-12 col-md-6",modelValue:a(g).objectTypeId,"onUpdate:modelValue":S[1]||(S[1]=v=>a(g).objectTypeId=v),label:b._lang.label.objectTypeId,disabled:!1,type:a(f).inputs.multiselect,options:a(h)},null,8,["modelValue","label","type","options"]),t(o,{id:"order",class:"mb-3 col-12 col-md-6",modelValue:a(g).order,"onUpdate:modelValue":S[2]||(S[2]=v=>a(g).order=v),label:b._lang.label.order,disabled:!1,type:a(f).inputs.number},null,8,["modelValue","label","type"]),t(o,{id:"question",class:"mb-3 col-12",modelValue:a(z),"onUpdate:modelValue":S[3]||(S[3]=v=>H(z)?z.value=v:null),label:b._lang.label.question,disabled:!1,type:a(f).inputs.text,language:a(s)},null,8,["modelValue","label","type","language"]),t(o,{id:"defaultAnswer",class:"mb-3 col-12",modelValue:a(A),"onUpdate:modelValue":S[4]||(S[4]=v=>H(A)?A.value=v:null),label:b._lang.label.defaultAnswer,disabled:!1,type:a(f).inputs.text,language:a(s)},null,8,["modelValue","label","type","language"])]),_:1})]),key:"0"}:void 0]),1032,["title","size"])}}},Se={class:"col-12 hstack gap-2 mt-3"},Ae={__name:"index",setup(n){const k=O(),u=Q(),_="edit-check-list";let T=C(m.uuid()),r=C(m.createEmptyDataSource()),c=F(i()),s=F(o()),g=C(!1),w=C(!0);L(async()=>{await A()});function i(){return{pageNumber:1,sortBy:"ObjectTypeId",objectTypeId:null}}async function M(d){Object.assign(c,d),A()}async function h(){Object.assign(c,i()),A()}async function A(){g.value=!0;let d=await ne.search(c);m.validateResponse(d,null,async()=>{r.value=d.data,r.value.items=d.data.items.map(v=>({id:v.id,checkListQuestionId:v.id,objectTypeId:v.objectTypeId,question:v.questionTexts[0].question,questionTexts:v.questionTexts,order:v.order}))}),g.value=!1}async function z(d){c.sortBy=d,await A()}async function b(d){c.pageNumber=d,await A()}async function S(d){w.value=!1,Object.assign(s,d),m.showModalById(_)}function e(){w.value=!0,Object.assign(s,o()),m.showModalById(_)}function o(){return{objectTypeId:null,checkListQuestionId:null,order:null,questionTexts:[{language:"pt",question:null,defaultAnswer:null},{language:"en",question:null,defaultAnswer:null}]}}function j(d){const v={itemId:d.id,service:ne,modalTitle:u.backoffice.objectParams.channelType.title,search:A};k.emit(R.emitter.PARAMS_CONFIRM_DELETE,v)}const y=D(()=>m.convertEnumToArray(u.enums.checkListbjectType));return(d,v)=>{const B=l("cbutton"),V=l("table-actions"),N=l("form-field"),P=l("row"),E=l("ccolumn"),q=l("table-action-edit"),se=l("table-action-delete"),re=l("ctable"),ue=l("accordion");return $(),U(ie,null,[ae("div",null,[t(ue,{id:a(T),title:d._lang.backoffice.objectParams.checkList.title,collapsed:!1,class:"mb-4"},{default:p(()=>[t(V,null,{default:p(()=>[t(B,{target:"create-contact",class:"d-inline",type:a(f).buttonType.secondary,title:d._lang.common.toAdd,disabled:!1,icon:K,onClick:e},null,8,["type","title"])]),_:1}),t(P,null,{default:p(()=>[t(N,{id:"objectTypeId",class:"mb-3 col-12",modelValue:a(c).objectTypeId,"onUpdate:modelValue":v[0]||(v[0]=G=>a(c).objectTypeId=G),label:d._lang.label.objectTypeId,disabled:!1,type:a(f).inputs.multiselect,options:a(y)},null,8,["modelValue","label","type","options"])]),_:1}),t(P,null,{default:p(()=>[ae("div",Se,[t(B,{type:a(f).buttonType.link,class:"ms-auto",title:d._lang.common.clear,onClick:h,size:a(f).buttonSize.medium,disabled:a(g)},null,8,["type","title","size","disabled"]),t(B,{type:a(f).buttonType.primary,title:d._lang.common.apply,onClick:M,size:a(f).buttonSize.medium,disabled:a(g)},null,8,["type","title","size","disabled"])])]),_:1}),t(re,{onSort:z,onChangePage:b,data:a(r),checkbox:!1,loading:a(g),defaultSort:"objectTypeId"},{columns:p(()=>[t(E,{name:d._lang.label.objectTypeId,field:"objectTypeId",sortable:!0,options:a(y),custom:ye},null,8,["name","options"]),t(E,{name:d._lang.label.question,field:"question",sortable:!1},null,8,["name"])]),actions:p(G=>[t(q,{onClick:de=>S(G.item)},null,8,["onClick"]),t(se,{onClick:de=>j(G.item)},null,8,["onClick"])]),_:1},8,["data","loading"])]),_:1},8,["id","title"])]),t(je,{modelValue:a(s),"onUpdate:modelValue":v[1]||(v[1]=G=>H(s)?s.value=G:s=G),itsNew:a(w),search:A},null,8,["modelValue","itsNew"])],64)}}},Ne={__name:"index",setup(n){return(k,u)=>{const _=l("breadcrumb-item"),T=l("breadcrumb"),r=l("card"),c=l("page");return $(),oe(c,{title:k._lang.backoffice.objectParams.pageTitle},{breadcrumb:p(()=>[t(T,{"has-home":!0},{default:p(()=>[t(_,{label:k._lang.backoffice.objectParams.pageTitle},null,8,["label"])]),_:1})]),default:p(()=>[t(r,{shadow:!0},{body:p(()=>[t(ke),t(Ce),t(Ie),t(he),t(Te),t(we),t(Ae),t(fe),t(ge)]),_:1})]),_:1},8,["title"])}}};export{Ne as default};
