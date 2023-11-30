import{_ as U}from"./form-d8ac3deb.js";import{g as x,f as H,i as Y,r as s,j as R,v as m,k as w,w as z,N as q,u,C as f,l as F,c as C,e as k,q as i,n as _,s as r,F as V,L as A}from"./index-864107e7.js";import{s as T}from"./service-306d46f6.js";import{s as b}from"./helpers-eda893e5.js";import{u as $}from"./service-4a5a3512.js";import{u as J}from"./index.esm-e15864e2.js";import{b as Q}from"./helpers-e3e3ab9f.js";import{e as W}from"./edit-actions-2ed98c3b.js";import{_ as X}from"./unsaved-7baacb4c.js";import"./index.esm-bc117818.js";import"./address.vue_vue_type_style_index_0_scoped_5480b292_lang-4d378bb8.js";import"./point-of-care-ecde6227.js";import"./form-2b334579.js";import"./settings-1cea3d18.js";import"./legislation-3cdd1e44.js";import"./organization-5dc596e2.js";import"./helpers-2033b956.js";import"./refusal-7ac09a70.js";import"./generic-984469e4.js";import"./point-of-care-37f973a8.js";import"./helpers-33459f07.js";import"./cancel-confirm-a0700a20.js";/* empty css                                                                     */const ye={__name:"edit",setup(Z){const M=x(),p=H(),G=Y(),v=$();let l=s(!0),e=R(b.newForm()),c=s(m.language.pt);s([]);let h=R(b.formRules()),I=s(0),S=s(0),y=s(0),g=s(0),B=s(!1),K=s(0),d=s([]);const O=J(h,e),N=w(()=>y.value===100&&!l.value);async function j(){l.value=!0;const a=await T.getById(I.value,S.value);u.validateResponse(a,null,()=>{let t=a.data;t.eventTypeId=t.lifeEventId?m.eventType.life:m.eventType.business,t.processingTime.type=t.processingTime.weeks?m.processingTimeType.simplified:m.processingTimeType.advanced,t.virtual=t.virtual==null?b.newVirtual():t.virtual,t.stateSupport=t.stateSupport==null?b.newStateSupport():t.stateSupport,Object.assign(e,t),v.setFormToCompare(u.cloneObject(t))}),l.value=!1}async function L(){l.value=!0;const a=await T.getLists(c.value,e.recordStateTypeId!==m.recordStateType.draft,e.organization);u.validateResponse(a,null,()=>{v.setLists(a.data)}),l.value=!1}z(()=>c.value,()=>{L()}),q(async()=>{I.value=u.decodeId(p.params.serviceId),S.value=u.decodeId(p.params.serviceVersion),g.value=u.decodeId(p.params.organizationId),K.value=u.decodeId(p.params.organizationVersion),B.value=p.params.organicOrigin==="true",!I.value||!S.value?M.push({name:f.router.BACKOFFICE_SERVICE_PAGE.name}):(await j(),await L())}),z(()=>{var a,t,o,E;return[e.texts[0].name,e.organization,e.serviceTypeId,e.serviceCategoryId,e.startDate,e.economicActivityId,(a=e.virtual)==null?void 0:a.isVirtual,(t=e.virtual)==null?void 0:t.url,(o=e.stateSupport)==null?void 0:o.isStateSupport,(E=e.stateSupport)==null?void 0:E.url]},()=>{var a,t;d.value=b.progressFields(),(a=e.virtual)!=null&&a.isVirtual?d.value.push("virtual.url"):(u.removeItemOfArray(d.value,"virtual.url"),e.virtual!=null&&(e.virtual.url=null,e.virtual.externalSystemId=null,e.virtual.processId=null,e.virtual.canExecutedByThirdParty=null)),(t=e.stateSupport)!=null&&t.isStateSupport?d.value.push("stateSupport.url"):(u.removeItemOfArray(d.value,"stateSupport.url"),e.stateSupport!=null&&(e.stateSupport.url=null,e.stateSupport.externalSystemId=null,e.stateSupport.processId=null)),Q.calculatePercentage(e,d.value,o=>{v.setProgress(o),y.value=o})});const P=w(()=>{if(g.value>0){const a=v.organizationList.find(o=>o.value3.id===g.value);let t=f.router.BACKOFFICE_EDIT_ENTITY_PAGE.path;return(a==null?void 0:a.state)!==m.recordStateType.draft&&(t=f.router.BACKOFFICE_DETAIL_ENTITY_PAGE.path),`${t.replace(":organizationId",p.params.organizationId).replace(":organizationVersion",p.params.organizationVersion)}#servicos`}else return f.router.BACKOFFICE_SERVICE_PAGE.name});return(a,t)=>{const o=F("breadcrumb-item"),E=F("breadcrumb"),D=F("page");return C(),k(V,null,[i(D,{title:a._lang.backoffice.service.editPageTitle},{breadcrumb:_(()=>[i(E,{"has-home":!0},{default:_(()=>[r(g)>0?(C(),k(V,{key:0},[i(o,{label:a._lang.backoffice.entities.breadcrumbTitle,"router-path":r(f).router.BACKOFFICE_ENTITIES_PAGE.path},null,8,["label","router-path"]),i(o,{label:r(G).common.entity,"router-path":r(P)},null,8,["label","router-path"]),i(o,{label:a._lang.backoffice.service.editPageTitle},null,8,["label"])],64)):(C(),k(V,{key:1},[i(o,{label:a._lang.backoffice.service.breadcrumbTitle,"router-path":r(f).router.BACKOFFICE_SERVICE_PAGE.path},null,8,["label","router-path"]),i(o,{label:a._lang.backoffice.service.editPageTitle},null,8,["label"])],64))]),_:1})]),actions:_(()=>[i(W,{loading:r(l),"onUpdate:loading":t[0]||(t[0]=n=>A(l)?l.value=n:l=n),canSubmit:r(N),selectedLang:r(c),"onUpdate:selectedLang":t[1]||(t[1]=n=>A(c)?c.value=n:c=n),backRoute:r(P),directBackRoute:r(g)>0,service:r(T),itemId:r(I),itemVersion:r(S),itemIdField:"serviceId",formModel:r(e),vuelidate:r(O),store:r(v),resource:a._lang.backoffice.service,progressFields:r(d),organicOrigin:r(B)},null,8,["loading","canSubmit","selectedLang","backRoute","directBackRoute","service","itemId","itemVersion","formModel","vuelidate","store","resource","progressFields","organicOrigin"])]),default:_(()=>[i(U,{formModel:r(e),"onUpdate:formModel":t[2]||(t[2]=n=>A(e)?e.value=n:e=n),disabled:!1,loading:r(l),selectedLang:r(c),validateForm:!0,rules:r(h),isExternalEdit:r(g)>0,progressValue:r(y),vuelidate:r(O)},null,8,["formModel","loading","selectedLang","rules","isExternalEdit","progressValue","vuelidate"])]),_:1},8,["title"]),i(X,{store:r(v),service:r(T),resource:a._lang.backoffice.service,formModel:r(e)},null,8,["store","service","resource","formModel"])],64)}}};export{ye as default};