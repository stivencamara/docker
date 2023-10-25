import{_ as U}from"./form-52c46e27.js";import{g as x,f as H,i as Y,r as s,j as R,v as m,k as w,w as z,L as q,u,B as g,l as F,c as k,e as C,q as i,n as _,s as r,F as V,J as A}from"./index-80ba5b4e.js";import{s as T}from"./service-dba6f9b8.js";import{s as b}from"./helpers-680aec35.js";import{u as J}from"./service-57b75013.js";import{u as $}from"./index.esm-5a51e55a.js";import{b as Q}from"./helpers-4a70dd55.js";import{e as W}from"./edit-actions-2d7f214b.js";import{_ as X}from"./unsaved-29fba484.js";import"./index.esm-ae8bce41.js";import"./address.vue_vue_type_style_index_0_scoped_5480b292_lang-e48d1b70.js";import"./point-of-care-96f1c715.js";import"./form-538f323e.js";import"./settings-ad5b6b99.js";import"./legislation-889d850d.js";import"./organization-3f9f41dc.js";import"./helpers-330ffe65.js";import"./refusal-a24432e0.js";import"./generic-19299c69.js";import"./point-of-care-bba055b1.js";import"./helpers-dace0e20.js";import"./cancel-confirm-9074d80e.js";/* empty css                                                                     */const ye={__name:"edit",setup(Z){const M=x(),p=H(),G=Y(),v=J();let o=s(!0),e=R(b.newForm()),c=s(m.language.pt);s([]);let h=R(b.formRules()),I=s(0),S=s(0),y=s(0),f=s(0),B=s(!1),K=s(0),d=s([]);const O=$(h,e),N=w(()=>y.value===100&&!o.value);async function j(){o.value=!0;const a=await T.getById(I.value,S.value);u.validateResponse(a,null,()=>{let t=a.data;t.eventTypeId=t.lifeEventId?m.eventType.life:m.eventType.business,t.processingTime.type=t.processingTime.weeks?m.processingTimeType.simplified:m.processingTimeType.advanced,t.virtual=t.virtual==null?b.newVirtual():t.virtual,t.stateSupport=t.stateSupport==null?b.newStateSupport():t.stateSupport,Object.assign(e,t),v.setFormToCompare(u.cloneObject(t))}),o.value=!1}async function L(){o.value=!0;const a=await T.getLists(c.value,e.recordStateTypeId!=m.recordStateType.draft);u.validateResponse(a,null,()=>{v.setLists(a.data)}),o.value=!1}z(()=>c.value,()=>{L()}),q(async()=>{I.value=u.decodeId(p.params.serviceId),S.value=u.decodeId(p.params.serviceVersion),f.value=u.decodeId(p.params.organizationId),K.value=u.decodeId(p.params.organizationVersion),B.value=p.params.organicOrigin==="true",!I.value||!S.value?M.push({name:g.router.BACKOFFICE_SERVICE_PAGE.name}):(await j(),await L())}),z(()=>{var a,t,l,E;return[e.texts[0].name,e.organization,e.serviceTypeId,e.serviceCategoryId,e.startDate,e.economicActivityId,(a=e.virtual)==null?void 0:a.isVirtual,(t=e.virtual)==null?void 0:t.url,(l=e.stateSupport)==null?void 0:l.isStateSupport,(E=e.stateSupport)==null?void 0:E.url]},()=>{var a,t;d.value=b.progressFields(),(a=e.virtual)!=null&&a.isVirtual?d.value.push("virtual.url"):(u.removeItemOfArray(d.value,"virtual.url"),e.virtual!=null&&(e.virtual.url=null,e.virtual.externalSystemId=null,e.virtual.processId=null,e.virtual.canExecutedByThirdParty=null)),(t=e.stateSupport)!=null&&t.isStateSupport?d.value.push("stateSupport.url"):(u.removeItemOfArray(d.value,"stateSupport.url"),e.stateSupport!=null&&(e.stateSupport.url=null,e.stateSupport.externalSystemId=null,e.stateSupport.processId=null)),Q.calculatePercentage(e,d.value,l=>{v.setProgress(l),y.value=l})});const P=w(()=>{if(f.value>0){const a=v.organizationList.find(l=>l.value3.id===f.value);let t=g.router.BACKOFFICE_EDIT_ENTITY_PAGE.path;return(a==null?void 0:a.state)!=m.recordStateType.draft&&(t=g.router.BACKOFFICE_DETAIL_ENTITY_PAGE.path),`${t.replace(":organizationId",p.params.organizationId).replace(":organizationVersion",p.params.organizationVersion)}#servicos`}else return g.router.BACKOFFICE_SERVICE_PAGE.name});return(a,t)=>{const l=F("breadcrumb-item"),E=F("breadcrumb"),D=F("page");return k(),C(V,null,[i(D,{title:a._lang.backoffice.service.editPageTitle},{breadcrumb:_(()=>[i(E,{"has-home":!0},{default:_(()=>[r(f)>0?(k(),C(V,{key:0},[i(l,{label:a._lang.backoffice.entities.breadcrumbTitle,"router-path":r(g).router.BACKOFFICE_ENTITIES_PAGE.path},null,8,["label","router-path"]),i(l,{label:r(G).common.entity,"router-path":r(P)},null,8,["label","router-path"]),i(l,{label:a._lang.backoffice.service.editPageTitle},null,8,["label"])],64)):(k(),C(V,{key:1},[i(l,{label:a._lang.backoffice.service.breadcrumbTitle,"router-path":r(g).router.BACKOFFICE_SERVICE_PAGE.path},null,8,["label","router-path"]),i(l,{label:a._lang.backoffice.service.editPageTitle},null,8,["label"])],64))]),_:1})]),actions:_(()=>[i(W,{loading:r(o),"onUpdate:loading":t[0]||(t[0]=n=>A(o)?o.value=n:o=n),canSubmit:r(N),selectedLang:r(c),"onUpdate:selectedLang":t[1]||(t[1]=n=>A(c)?c.value=n:c=n),backRoute:r(P),directBackRoute:r(f)>0,service:r(T),itemId:r(I),itemVersion:r(S),itemIdField:"serviceId",formModel:r(e),vuelidate:r(O),store:r(v),resource:a._lang.backoffice.service,progressFields:r(d),organicOrigin:r(B)},null,8,["loading","canSubmit","selectedLang","backRoute","directBackRoute","service","itemId","itemVersion","formModel","vuelidate","store","resource","progressFields","organicOrigin"])]),default:_(()=>[i(U,{formModel:r(e),"onUpdate:formModel":t[2]||(t[2]=n=>A(e)?e.value=n:e=n),disabled:!1,loading:r(o),selectedLang:r(c),validateForm:!0,rules:r(h),isExternalEdit:r(f)>0,progressValue:r(y),vuelidate:r(O)},null,8,["formModel","loading","selectedLang","rules","isExternalEdit","progressValue","vuelidate"])]),_:1},8,["title"]),i(X,{store:r(v),service:r(T),resource:a._lang.backoffice.service,formModel:r(e)},null,8,["store","service","resource","formModel"])],64)}}};export{ye as default};