import{_ as D}from"./form-06acca3c.js";import{g as H,f as U,i as Y,r as o,j as V,v as E,k as z,w as S,N as $,u as p,C as f,l as F,c as T,e as h,q as s,n as I,s as e,F as k,L as A}from"./index-ecfd29ec.js";import{p as _}from"./point-of-care-242a3b32.js";import{p as C}from"./helpers-52c527b5.js";import{u as J}from"./point-of-care-6e2088e5.js";import{u as Q}from"./index.esm-cb17d3b3.js";import{b as W}from"./helpers-42575dad.js";import{e as X}from"./edit-actions-3ed65010.js";import{_ as Z}from"./unsaved-6c26e492.js";import"./contacts-eab51e2e.js";import"./location-70441179.js";import"./address-c0f7b676.js";import"./organization-8990d7d0.js";import"./address.vue_vue_type_style_index_0_scoped_5480b292_lang-2f6bbb17.js";import"./service-82dbcbc8.js";import"./refusal-64a629f9.js";import"./index.esm-8adcd136.js";import"./generic-a111898d.js";import"./service-e9b4c2c0.js";import"./helpers-29ad8680.js";import"./helpers-93b2601c.js";import"./cancel-confirm-b34d16c9.js";import"./settings-1fa7723b.js";/* empty css                                                                     */const Te={__name:"edit",setup(x){const w=H(),n=U(),M=Y(),c=J();let t=o(!0),a=V(C.newForm()),d=o(E.language.pt);o([]);let y=V(C.formRules()),g=o(0),b=o(0),m=o(0),N=o(0),O=o(0),v=o([]),P=o(!1);const R=Q(y,a),G=z(()=>O.value===100&&!t.value);async function K(){t.value=!0;const r=await _.getById(g.value,b.value);p.validateResponse(r,null,()=>{Object.assign(a,r.data),c.setFormToCompare(p.cloneObject(r.data))}),t.value=!1}async function B(){t.value=!0;const r=await _.getLists(d.value,a.recordStateTypeId!==E.recordStateType.draft);p.validateResponse(r,null,()=>{c.setLists(r.data)}),t.value=!1}S(()=>d.value,()=>{B()}),$(async()=>{g.value=p.decodeId(n.params.pointOfCareId),b.value=p.decodeId(n.params.pointOfCareVersion),m.value=p.decodeId(n.params.organizationId),N.value=p.decodeId(n.params.organizationVersion),P.value=n.params.organicOrigin==="true",!g.value||!b.value?w.push({name:f.router.BACKOFFICE_POINT_OF_CARE_PAGE.name}):(await K(),await B())}),S(()=>[a.texts[0].name,a.organization,a.organizationHost,a.startDate,a.channel.channelTypeId,a.address.zipCode,a.address.islandId,a.address.countyId,a.address.parishId,a.address.locality,a.address.address],()=>{a.channel.channelTypeId==6||a.channel.channelTypeId==2?(v.value=C.progressFieldsAddress(),a.address.isRequired=!0):(v.value=C.progressFields(),a.address.isRequired=!1),W.calculatePercentage(a,v.value,r=>{c.setProgress(r),O.value=r})});const L=z(()=>{if(m.value>0){const r=c.organizationList.find(u=>u.value3.id===m.value);let i=f.router.BACKOFFICE_EDIT_ENTITY_PAGE.path;return(r==null?void 0:r.state)!=E.recordStateType.draft&&(i=f.router.BACKOFFICE_DETAIL_ENTITY_PAGE.path),`${i.replace(":organizationId",n.params.organizationId).replace(":organizationVersion",n.params.organizationVersion)}#pontosatendimento`}else return f.router.BACKOFFICE_POINT_OF_CARE_PAGE.name});return(r,i)=>{const u=F("breadcrumb-item"),j=F("breadcrumb"),q=F("page");return T(),h(k,null,[s(q,{title:r._lang.backoffice.pointOfCare.editPageTitle},{breadcrumb:I(()=>[s(j,{"has-home":!0},{default:I(()=>[e(m)>0?(T(),h(k,{key:0},[s(u,{label:r._lang.backoffice.entities.breadcrumbTitle,"router-path":e(f).router.BACKOFFICE_ENTITIES_PAGE.path},null,8,["label","router-path"]),s(u,{label:e(M).common.entity,"router-path":e(L)},null,8,["label","router-path"]),s(u,{label:r._lang.backoffice.pointOfCare.editPageTitle},null,8,["label"])],64)):(T(),h(k,{key:1},[s(u,{label:r._lang.backoffice.pointOfCare.breadcrumbTitle,"router-path":e(f).router.BACKOFFICE_POINT_OF_CARE_PAGE.path},null,8,["label","router-path"]),s(u,{label:r._lang.backoffice.pointOfCare.editPageTitle},null,8,["label"])],64))]),_:1})]),actions:I(()=>[s(X,{loading:e(t),"onUpdate:loading":i[0]||(i[0]=l=>A(t)?t.value=l:t=l),canSubmit:e(G),selectedLang:e(d),"onUpdate:selectedLang":i[1]||(i[1]=l=>A(d)?d.value=l:d=l),backRoute:e(L),directBackRoute:e(m)>0,service:e(_),itemId:e(g),itemVersion:e(b),formModel:e(a),vuelidate:e(R),store:e(c),resource:r._lang.backoffice.pointOfCare,itemIdField:"pointOfCareId",progressFields:e(v),organicOrigin:e(P)},null,8,["loading","canSubmit","selectedLang","backRoute","directBackRoute","service","itemId","itemVersion","formModel","vuelidate","store","resource","progressFields","organicOrigin"])]),default:I(()=>[s(D,{formModel:e(a),"onUpdate:formModel":i[2]||(i[2]=l=>A(a)?a.value=l:a=l),disabled:!1,validateForm:!0,loading:e(t),selectedLang:e(d),rules:e(y),isExternalEdit:e(m)>0,vuelidate:e(R),progressValue:e(O),"show-progress":!0},null,8,["formModel","loading","selectedLang","rules","isExternalEdit","vuelidate","progressValue"])]),_:1},8,["title"]),s(Z,{store:e(c),formModel:e(a),service:e(_),resource:r._lang.backoffice.pointOfCare},null,8,["store","formModel","service","resource"])],64)}}};export{Te as default};