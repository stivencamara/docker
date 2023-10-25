import{b as ye}from"./refusal-e7fdead8.js";import{i as U,h as W,r as k,l as u,c as _,m as D,n as I,y as se,x as N,q as i,s as o,v as s,_ as _e,L as ve,g as Ce,j as he,k as B,u as r,B as f,o as Se,a as ke,R as E,Z as Ie,e as j,J as Te,a1 as Oe,A as q,O as ze,I as Me,F as oe,z as we,p as L,a2 as Fe,C as Le,D as De}from"./index-b05af6c9.js";import{_ as Re}from"./cancel-confirm-2136590d.js";import{b as F}from"./helpers-daf11a8c.js";import{s as Ae}from"./settings-4a7fb233.js";/* empty css                                                                     */const $e={__name:"publish-confirm",props:{id:{String,required:!0,default:"confirm-publish"},action:{Function,required:!0}},setup(b){const v=b;U(),W();let e=k(!1);function T(){v.action()}return(c,R)=>{const C=u("cbutton"),O=u("modal");return _(),D(O,{id:v.id,title:c._lang.common.publish,size:o(s).modalSize.medium},{body:I(()=>[se(N(c._lang.backoffice.modals.confirmPublish),1)]),footer:I(()=>[i(C,{title:c._lang.common.no,type:o(s).buttonType.secondary,"data-bs-dismiss":"modal","aria-label":"Close",disabled:o(e)},null,8,["title","type","disabled"]),i(C,{title:c._lang.common.yes,onClick:T,disabled:o(e),"data-bs-dismiss":"modal","aria-label":"Close"},null,8,["title","disabled"])]),_:1},8,["id","title","size"])}}},Be={__name:"submit-confirm",props:{id:{String,required:!0,default:"confirm-submit"},action:{Function,required:!0}},setup(b){const v=b;U(),W();let e=k(!1);function T(){v.action()}return(c,R)=>{const C=u("cbutton"),O=u("modal");return _(),D(O,{id:v.id,title:c._lang.common.submit,size:o(s).modalSize.medium},{body:I(()=>[se(N(c._lang.backoffice.modals.confirmSubmit),1)]),footer:I(()=>[i(C,{title:c._lang.common.no,type:o(s).buttonType.secondary,"data-bs-dismiss":"modal","aria-label":"Close",disabled:o(e)},null,8,["title","type","disabled"]),i(C,{title:c._lang.common.yes,onClick:T,disabled:o(e),"data-bs-dismiss":"modal","aria-label":"Close"},null,8,["title","disabled"])]),_:1},8,["id","title","size"])}}},Ee=b=>(Le("data-v-24445b55"),b=b(),De(),b),je={key:0,class:"h-100",errors:""},qe={class:"d-flex"},Ne={class:"me-2 mt-2 p-hand"},Ve={class:"field w-100"},He={class:"mb-0"},Pe={class:"d-block mb-2 text-danger"},Ke=Ee(()=>L("hr",{class:"separator"},null,-1)),Ue={__name:"edit-actions",props:{loading:{Boolean,required:!0},canSubmit:{Boolean,required:!0},selectedLang:{type:[String,Number],required:!0},formModel:{type:Object,required:!0},service:{type:Object,required:!0},backRoute:{type:String,required:!0},itemId:{type:[String,Number],required:!0},itemVersion:{type:[String,Number],required:!0},vuelidate:{type:Object,default:null},store:{type:Object,required:!0},resource:{type:Object},directBackRoute:{Boolean,default:!1},organicOrigin:{Boolean,default:!1},itemIdField:{type:String,required:!0},progressFields:{type:Array},isHeritage:{Boolean,default:!1}},emits:["update:selectedLang","update:loading"],setup(b,{emit:v}){const e=b;ve(async()=>{await re()});const T=Ce(),c=U(),R="confirm-delete",C="confirm-cancel",O="confirm-publish",G="confirm-submit",ae=`#${R}_modal`,ie=`#${G}_modal`,h=W();let J=k([]),Q=k(!1),Z=he({});const X=B(()=>{var t,n;if((t=e.vuelidate)!=null&&t.$error){Q.value=!0;const m=r.removeDuplicateItemsOfArray((n=e.vuelidate)==null?void 0:n.$errors),a=m.map(d=>({name:d.$property,group:d.$propertyPath,message:d.$message})),w=m.find(d=>d.$property==="texts");if(w){for(let d in w.$response.$data){let y=w.$response.$data[d];const p=Object.keys(y);for(let S in p){const $=p[S];y[$].$error&&a.push({name:$,group:`texts.${$}`,message:c.common.requiredField})}}r.removeItemOfArray(a,a.find(d=>d.name==="texts"))}const P=r.removeDuplicateItemsOfArray(a),K=F.getObjecTypeId(e.formModel);let A=[],g=e.progressFields;switch(K){case s.objectType.organization:g=e.progressFields;break;case s.objectType.service:g=e.progressFields;break;case s.objectType.document:g=e.progressFields;break;case s.objectType.location:g=e.progressFields;break;case s.objectType.pointOfCare:g=e.progressFields;break}for(let d in g){let y=g[d];if(y.includes(".")){const S=y.split(".");y=S[S.length-1]}const p=P.find(S=>S.name===y);p&&A.push(p)}return A}else return Q.value&&h.emit(f.emitter.OFFCANVAS_CLOSE),[]});Se(()=>{Object.assign(Z,e.formModel),h.on(f.emitter.DUPLICATE_NAMES,async t=>{t?await ne():H.value=null})}),ke(()=>{h.off(f.emitter.DUPLICATE_NAMES)});const M=B({get(){return e.selectedLang},set(t){v("update:selectedLang",t)}}),ne=async()=>{if((await e.service.changeState(e.itemId,e.itemVersion,s.recordStateType.published,H.value)).code===s.responseCode.success){const n=F.getObjecTypeId(e.formModel),m=F.getMessage(c,s.recordStateType.published,n);E.success(m),z()}},le=t=>{const n=document.getElementById(t.name);n?(h.emit(f.emitter.OFFCANVAS_CLOSE),n.focus()):console.error(`The element not founded with id: ${t.name}`)},l=B({get(){return e.loading},set(t){v("update:loading",t)}});async function re(){let t=await Ae.getLanguages();r.validateResponse(t,null,()=>{J.value=t.data})}async function ce(){l.value=!0;const t=await e.service.delete(e.itemId,e.itemVersion);r.validateResponse(t,e.resource.deleted,()=>{e.store.setFormToCompare(e.formModel),z()}),l.value=!1}function de(){r.compareObjectIsDirty(e.store.formToCompare,e.formModel)?r.showModalById(C):z()}function ue(){r.showModalById(O)}function me(){z()}async function Y(){var t,n;l.value=!0,await((t=e.vuelidate)==null?void 0:t.$validate()),(n=e.vuelidate)!=null&&n.$error?te():E.success(c.common.formIsValid),l.value=!1}async function V(){l.value=!0;const t=await e.service.update(e.formModel);r.validateResponse(t,e.resource.saved,()=>{Object.assign(Z,e.formModel),e.store.setFormToCompare(e.formModel)}),l.value=!1}async function pe(){var t,n;if(l.value=!0,await((t=e.vuelidate)==null?void 0:t.$validate()),(n=e.vuelidate)!=null&&n.$error)te();else{const m=await e.service.update(e.formModel);r.validateResponse(m,null,async()=>{e.store.setFormToCompare(e.formModel);const a=await e.service.submit(e.itemId,e.itemVersion);r.validateResponse(a,e.resource.submittedApproval,()=>{a.code===0&&z()}),l.value=!1})}l.value=!1}let x=k(r.createEmptyDataSource()),H=k(null);async function fe(){var t,n;if(l.value=!0,await((t=e.vuelidate)==null?void 0:t.$validate()),(n=e.vuelidate)!=null&&n.$error)h.emit(f.emitter.ACCORDION_COLLAPSE_ALL),h.emit(f.emitter.SHOW_ERROR_CLICK),E.warning(c.common.requiredFields);else{const m=await e.service.update(e.formModel);r.validateResponse(m,null,async()=>{e.store.setFormToCompare(e.formModel);const a=await e.service.publish(e.itemId,e.itemVersion);a.code===s.responseCode.success?z():a.code===s.responseCode.organizationDuplicate||a.code===s.responseCode.locationDuplicate||a.code===s.responseCode.pointOfCareDuplicate||a.code===s.responseCode.documentDuplicate||a.code===s.responseCode.serviceDuplicate?(H.value=a.data.key,x.value=r.createEmptyDataSource(a.data.newListDuplicates),r.showModalById("duplicated-names")):r.showErrorToastByResponseCode(a.code),l.value=!1})}l.value=!1}let ee=k(!1);function be(t){ee.value=t.width<576}function te(){h.emit(f.emitter.ACCORDION_COLLAPSE_ALL),h.emit(f.emitter.SHOW_ERROR_CLICK),E.warning(c.common.requiredFields)}function z(){if(e.organicOrigin){T.push({name:f.router.BACKOFFICE_ORGANIC_PAGE.name});return}let t={name:e.backRoute};e.directBackRoute&&(t={path:e.backRoute}),T.push(t)}const ge=B({get(){return F.getFieldByLangAndName(e.formModel,M.value,"name")},set(t){F.setFieldByLangAndName(e.formModel,M.value,"name",t)}});return(t,n)=>{const m=u("Hotkeys"),a=u("cbutton"),w=u("lang-selector"),P=u("iconTrash"),K=u("cbutton-options-item"),A=u("cbutton-options"),g=u("confirm-delete-modal"),d=u("icon-focus"),y=Ie("resize");return _(),j(oe,null,[i(m,{shortcuts:["S"],debug:!0,onTriggered:V}),i(a,{class:"col-12 col-sm-auto",type:o(s).buttonType.secondary,size:o(s).buttonSize.large,title:t._lang.common.cancel,onClick:de,disabled:o(l)},null,8,["type","size","title","disabled"]),i(w,{options:o(J),selectedLang:o(M),"onUpdate:selectedLang":n[0]||(n[0]=p=>Te(M)?M.value=p:null),disabled:o(l)},null,8,["options","selectedLang","disabled"]),i(a,{class:"col-12 col-sm-auto",title:t._lang.common.save,type:o(s).buttonType.secondary,size:o(s).buttonSize.large,onClick:V,disabled:o(l)},null,8,["title","type","size","disabled"]),i(a,{class:"col-12 col-sm-auto d-sm-block d-none",type:o(s).buttonType.secondary,size:o(s).buttonSize.large,onClick:Y,disabled:o(l),icon:Oe,"icon-color":"#002D74","data-bs-toggle":"tooltip","data-bs-title":t._lang.common.verify,"data-bs-placement":"top"},null,8,["type","size","disabled","data-bs-title"]),i(a,{class:"col-12 col-sm-auto d-sm-none",type:o(s).buttonType.secondary,size:o(s).buttonSize.large,onClick:Y,disabled:o(l),title:t._lang.common.verify},null,8,["type","size","disabled","title"]),e.formModel.recordStateTypeId!=o(s).recordStateType.approval&&!e.isHeritage?(_(),D(a,{key:0,class:"col-12 col-sm-auto",type:o(s).buttonType.primary,size:o(s).buttonSize.large,title:t._lang.common.submit,disabled:!e.canSubmit,"data-bs-target":ie,"data-bs-toggle":"modal"},null,8,["type","size","title","disabled"])):q("",!0),e.formModel.recordStateTypeId===o(s).recordStateType.approval||e.isHeritage?(_(),D(a,{key:1,size:o(s).buttonSize.large,title:t._lang.common.publish,disabled:!e.canSubmit,onClick:ue},null,8,["size","title","disabled"])):q("",!0),e.formModel.recordStateTypeId!=o(s).recordStateType.approval?ze((_(),D(A,{key:2,title:t._lang.common.actions,size:o(s).buttonSize.large,type:o(s).buttonType.secondary,disabled:o(l),class:Me({"dropdown-center":o(ee)})},{default:I(()=>[i(K,{title:t._lang.common.delete,"data-bs-target":ae,"data-bs-toggle":"modal"},{default:I(()=>[i(P,{color:"#002D74"})]),_:1},8,["title"])]),_:1},8,["title","size","type","disabled","class"])),[[y,be]]):q("",!0),i(g,{id:R,title:e.resource.delete,message:e.resource.deleteQuestion,action:ce},null,8,["title","message"]),i(Re,{id:C,title:t._lang.common.cancel,action:me},null,8,["title"]),i($e,{id:O,title:t._lang.common.publish,action:fe},null,8,["title"]),i(Be,{id:G,title:t._lang.common.submit,action:pe},null,8,["title"]),i(m,{shortcuts:["S"],debug:!0,onTriggered:V}),i(Fe,{title:t._lang.widgets.errors,type:o(s).offcanvas.danger,emitter:o(f).emitter.SHOW_ERROR_CLICK},{body:I(()=>[o(X).length?(_(),j("div",je,[(_(!0),j(oe,null,we(o(X),(p,S)=>(_(),j("div",qe,[L("div",Ne,[i(d,{color:"#002D74",class:"p-hand",onClick:$=>le(p)},null,8,["onClick"])]),L("div",Ve,[L("h6",He,N(t._lang.label[p.name]),1),L("span",Pe,N(p.message),1),Ke])]))),256))])):q("",!0)]),_:1},8,["title","type","emitter"]),i(ye,{"data-source":o(x),name:o(ge)},null,8,["data-source","name"])],64)}}},xe=_e(Ue,[["__scopeId","data-v-24445b55"]]);export{xe as e};