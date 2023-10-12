import{_ as x}from"./form-0f895123.js";import{g as D,f as H,i as Y,r as l,G as w,s as m,j as z,N as L,K as $,u,z as f,k as F,c as k,e as V,n as i,w as E,p as t,F as C,I as A}from"./index-c417b10a.js";import{s as y}from"./service-e178ddc5.js";import{s as b}from"./helpers-9f3bdf36.js";import{u as q}from"./service-d66d7fcd.js";import{u as J}from"./index.esm-5fe78185.js";import{b as Q}from"./helpers-422844e7.js";import{e as W}from"./edit-actions-af789f62.js";import{_ as X}from"./unsaved-769b1fd6.js";import"./index.esm-29b873a2.js";import"./address.vue_vue_type_style_index_0_scoped_5480b292_lang-1be492ce.js";import"./point-of-care-870d551b.js";import"./form-c514d62a.js";import"./settings-fb41674a.js";import"./legislation-da693227.js";import"./organization-53b6fe99.js";import"./helpers-1b7a9838.js";import"./refusal-45a989d4.js";import"./generic-972994fb.js";import"./point-of-care-86bcb545.js";import"./helpers-bb0e4cec.js";import"./cancel-confirm-f07f887e.js";/* empty css                                                                     */const Te={__name:"edit",setup(Z){const M=D(),p=H(),G=Y(),v=q();let s=l(!0),e=w(b.newForm()),c=l(m.language.pt);l([]);let h=w(b.formRules()),I=l(0),S=l(0),T=l(0),g=l(0),B=l(!1),K=l(0),d=l([]);const O=J(h,e),N=z(()=>T.value===100&&!s.value);async function j(){s.value=!0;const a=await y.getById(I.value,S.value);u.validateResponse(a,null,()=>{let r=a.data;r.eventTypeId=r.lifeEventId?m.eventType.life:m.eventType.business,r.processingTime.type=r.processingTime.weeks?m.processingTimeType.simplified:m.processingTimeType.advanced,r.virtual=r.virtual==null?b.newVirtual():r.virtual,r.stateSupport=r.stateSupport==null?b.newStateSupport():r.stateSupport,Object.assign(e,r),v.setFormToCompare(u.cloneObject(r))}),s.value=!1}async function R(){s.value=!0;const a=await y.getLists(c.value,e.recordStateTypeId!=m.recordStateType.draft);u.validateResponse(a,null,()=>{v.setLists(a.data)}),s.value=!1}L(()=>c.value,()=>{R()}),$(async()=>{I.value=u.decodeId(p.params.serviceId),S.value=u.decodeId(p.params.serviceVersion),g.value=u.decodeId(p.params.organizationId),K.value=u.decodeId(p.params.organizationVersion),B.value=p.params.organicOrigin==="true",!I.value||!S.value?M.push({name:f.router.BACKOFFICE_SERVICE_PAGE.name}):(await j(),await R())}),L(()=>{var a,r,o,_;return[e.texts[0].name,e.organization,e.serviceTypeId,e.serviceCategoryId,e.startDate,e.economicActivityId,(a=e.virtual)==null?void 0:a.isVirtual,(r=e.virtual)==null?void 0:r.url,(o=e.stateSupport)==null?void 0:o.isStateSupport,(_=e.stateSupport)==null?void 0:_.url]},()=>{var a,r;d.value=b.progressFields(),(a=e.virtual)!=null&&a.isVirtual?d.value.push("virtual.url"):(u.removeItemOfArray(d.value,"virtual.url"),e.virtual!=null&&(e.virtual.url=null,e.virtual.externalSystemId=null,e.virtual.processId=null,e.virtual.canExecutedByThirdParty=null)),(r=e.stateSupport)!=null&&r.isStateSupport?d.value.push("stateSupport.url"):(u.removeItemOfArray(d.value,"stateSupport.url"),e.stateSupport!=null&&(e.stateSupport.url=null,e.stateSupport.externalSystemId=null,e.stateSupport.processId=null)),Q.calculatePercentage(e,d.value,o=>{v.setProgress(o),T.value=o})});const P=z(()=>g.value>0?`${f.router.BACKOFFICE_EDIT_ENTITY_PAGE.path.replace(":organizationId",p.params.organizationId).replace(":organizationVersion",p.params.organizationVersion)}#servicos`:f.router.BACKOFFICE_SERVICE_PAGE.name);return(a,r)=>{const o=F("breadcrumb-item"),_=F("breadcrumb"),U=F("page");return k(),V(C,null,[i(U,{title:a._lang.backoffice.service.editPageTitle},{breadcrumb:E(()=>[i(_,{"has-home":!0},{default:E(()=>[t(g)>0?(k(),V(C,{key:0},[i(o,{label:a._lang.backoffice.entities.breadcrumbTitle,"router-path":t(f).router.BACKOFFICE_ENTITIES_PAGE.path},null,8,["label","router-path"]),i(o,{label:t(G).common.entity,"router-path":t(P)},null,8,["label","router-path"]),i(o,{label:a._lang.backoffice.service.editPageTitle},null,8,["label"])],64)):(k(),V(C,{key:1},[i(o,{label:a._lang.backoffice.service.breadcrumbTitle,"router-path":t(f).router.BACKOFFICE_SERVICE_PAGE.path},null,8,["label","router-path"]),i(o,{label:a._lang.backoffice.service.editPageTitle},null,8,["label"])],64))]),_:1})]),actions:E(()=>[i(W,{loading:t(s),"onUpdate:loading":r[0]||(r[0]=n=>A(s)?s.value=n:s=n),canSubmit:t(N),selectedLang:t(c),"onUpdate:selectedLang":r[1]||(r[1]=n=>A(c)?c.value=n:c=n),backRoute:t(P),directBackRoute:t(g)>0,service:t(y),itemId:t(I),itemVersion:t(S),itemIdField:"serviceId",formModel:t(e),vuelidate:t(O),store:t(v),resource:a._lang.backoffice.service,progressFields:t(d),organicOrigin:t(B)},null,8,["loading","canSubmit","selectedLang","backRoute","directBackRoute","service","itemId","itemVersion","formModel","vuelidate","store","resource","progressFields","organicOrigin"])]),default:E(()=>[i(x,{formModel:t(e),"onUpdate:formModel":r[2]||(r[2]=n=>A(e)?e.value=n:e=n),disabled:!1,loading:t(s),selectedLang:t(c),validateForm:!0,rules:t(h),isExternalEdit:t(g)>0,progressValue:t(T),vuelidate:t(O)},null,8,["formModel","loading","selectedLang","rules","isExternalEdit","progressValue","vuelidate"])]),_:1},8,["title"]),i(X,{store:t(v),service:t(y),resource:a._lang.backoffice.service,formModel:t(e)},null,8,["store","service","resource","formModel"])],64)}}};export{Te as default};
