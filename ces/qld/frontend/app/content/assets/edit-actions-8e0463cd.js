import{b as ye}from"./refusal-478c260d.js";import{q as K,D as U,i as k,r as c,o as f,c as q,w as g,I as oe,x as B,a as n,m as o,v as s,_ as _e,K as ve,h as Ce,s as he,E as j,j as l,l as b,b as Se,d as ke,Q as E,X as Ie,e as $,z as we,Z as Oe,O as Te,F as P,t as De,H as Le,f as R,y as Me,$ as $e,p as ze,g as Re}from"./index-a3ba1ed7.js";import{_ as Fe}from"./cancel-confirm-f95c31ca.js";import{b as z}from"./helpers-4d6c1969.js";import{s as Ae}from"./settings-4e9392c0.js";/* empty css                                                                     */const je={__name:"publish-confirm",props:{id:{String,required:!0,default:"confirm-publish"},action:{Function,required:!0}},setup(m){const y=m;K(),U();let e=k(!1);function T(){y.action()}return(r,F)=>{const _=c("cbutton"),I=c("modal");return f(),q(I,{id:y.id,title:r._lang.common.publish,size:o(s).modalSize.medium},{body:g(()=>[oe(B(r._lang.backoffice.modals.confirmPublish),1)]),footer:g(()=>[n(_,{title:r._lang.common.no,type:o(s).buttonType.secondary,"data-bs-dismiss":"modal","aria-label":"Close",disabled:o(e)},null,8,["title","type","disabled"]),n(_,{title:r._lang.common.yes,onClick:T,disabled:o(e),"data-bs-dismiss":"modal","aria-label":"Close"},null,8,["title","disabled"])]),_:1},8,["id","title","size"])}}},Ee={__name:"submit-confirm",props:{id:{String,required:!0,default:"confirm-submit"},action:{Function,required:!0}},setup(m){const y=m;K(),U();let e=k(!1);function T(){y.action()}return(r,F)=>{const _=c("cbutton"),I=c("modal");return f(),q(I,{id:y.id,title:r._lang.common.submit,size:o(s).modalSize.medium},{body:g(()=>[oe(B(r._lang.backoffice.modals.confirmSubmit),1)]),footer:g(()=>[n(_,{title:r._lang.common.no,type:o(s).buttonType.secondary,"data-bs-dismiss":"modal","aria-label":"Close",disabled:o(e)},null,8,["title","type","disabled"]),n(_,{title:r._lang.common.yes,onClick:T,disabled:o(e),"data-bs-dismiss":"modal","aria-label":"Close"},null,8,["title","disabled"])]),_:1},8,["id","title","size"])}}},qe=m=>(ze("data-v-2f72d600"),m=m(),Re(),m),Be={key:0,class:"h-100",errors:""},Ne={class:"d-flex"},Ve={class:"me-2 mt-2 p-hand"},He={class:"field w-100"},Pe={class:"mb-0"},Ke={class:"d-block mb-2 text-danger"},Ue=qe(()=>R("hr",{class:"separator"},null,-1)),We={__name:"edit-actions",props:{loading:{Boolean,required:!0},canSubmit:{Boolean,required:!0},selectedLang:{type:[String,Number],required:!0},formModel:{type:Object,required:!0},service:{type:Object,required:!0},backRoute:{type:String,required:!0},itemId:{type:[String,Number],required:!0},itemVersion:{type:[String,Number],required:!0},vuelidate:{type:Object,required:!0},store:{type:Object,required:!0},resource:{type:Object},directBackRoute:{Boolean,default:!1},itemIdField:{type:String,required:!0},progressFields:{type:Array}},emits:["update:selectedLang","update:loading"],setup(m,{emit:y}){const e=m;ve(async()=>{await le()});const T=Ce(),r=K(),F="confirm-delete",_="confirm-cancel",I="confirm-publish",W="confirm-submit",se=`#${F}_modal`,ae=`#${W}_modal`,v=U();let Q=k([]),X=k(!1),Z=he({});const G=j(()=>{if(e.vuelidate.$error){X.value=!0;const t=l.removeDuplicateItemsOfArray(e.vuelidate.$errors),a=t.map(d=>({name:d.$property,group:d.$propertyPath,message:d.$message})),C=t.find(d=>d.$property==="texts");if(C){for(let d in C.$response.$data){let p=C.$response.$data[d];const S=Object.keys(p);for(let h in S){const L=S[h];p[L].$error&&a.push({name:L,group:`texts.${L}`,message:r.common.requiredField})}}l.removeItemOfArray(a,a.find(d=>d.name==="texts"))}const O=l.removeDuplicateItemsOfArray(a),H=z.getObjecTypeId(e.formModel);let A=[],u=e.progressFields;switch(H){case s.objectType.organization:u=e.progressFields;break;case s.objectType.service:u=e.progressFields;break;case s.objectType.document:u=e.progressFields;break;case s.objectType.location:u=e.progressFields;break;case s.objectType.pointOfCare:u=e.progressFields;break}for(let d in u){let p=u[d];if(p.includes(".")){const h=p.split(".");p=h[h.length-1]}const S=O.find(h=>h.name===p);S&&A.push(S)}return A}else return X.value&&v.emit(b.emitter.OFFCANVAS_CLOSE),[]});Se(()=>{Object.assign(Z,e.formModel),v.on(b.emitter.DUPLICATE_NAMES,async t=>{t?await ne():V.value=null})}),ke(()=>{v.off(b.emitter.DUPLICATE_NAMES)});const D=j({get(){return e.selectedLang},set(t){y("update:selectedLang",t)}}),ne=async()=>{if((await e.service.changeState(e.itemId,e.itemVersion,s.recordStateType.published,V.value)).code===s.responseCode.success){const a=z.getObjecTypeId(e.formModel),C=z.getMessage(r,s.recordStateType.published,a);E.success(C),w()}},ie=t=>{const a=document.getElementById(t.name);a?(v.emit(b.emitter.OFFCANVAS_CLOSE),a.focus()):console.error(`The element not founded with id: ${t.name}`)},i=j({get(){return e.loading},set(t){y("update:loading",t)}});async function le(){let t=await Ae.getLanguages();l.validateResponse(t,null,()=>{Q.value=t.data})}async function re(){i.value=!0;const t=await e.service.delete(e.itemId,e.itemVersion);l.validateResponse(t,e.resource.deleted,()=>{w()}),i.value=!1}function ce(){l.compareObjectIsDirty(e.store.formToCompare,e.formModel)?l.showModalById(_):w()}function de(){l.showModalById(I)}function ue(){w()}async function J(){i.value=!0,await e.vuelidate.$validate(),e.vuelidate.$error?ee():E.success(r.common.formIsValid),i.value=!1}async function N(){i.value=!0;const t=await e.service.update(e.formModel);l.validateResponse(t,e.resource.saved,()=>{Object.assign(Z,e.formModel),e.store.setFormToCompare(e.formModel)}),i.value=!1}async function me(){if(i.value=!0,await e.vuelidate.$validate(),e.vuelidate.$error)ee();else{const t=await e.service.update(e.formModel);l.validateResponse(t,null,async()=>{const a=await e.service.submit(e.itemId,e.itemVersion);l.validateResponse(a,e.resource.saved,()=>{a.code===0&&w()}),i.value=!1})}i.value=!1}let Y=k(l.createEmptyDataSource()),V=k(null);async function pe(){if(i.value=!0,await e.vuelidate.$validate(),e.vuelidate.$error)v.emit(b.emitter.ACCORDION_COLLAPSE_ALL),v.emit(b.emitter.SHOW_ERROR_CLICK),E.warning(r.common.requiredFields);else{const t=await e.service.update(e.formModel);l.validateResponse(t,null,async()=>{const a=await e.service.publish(e.itemId,e.itemVersion);a.code===s.responseCode.success?w():a.code===s.responseCode.organizationDuplicate||a.code===s.responseCode.locationDuplicate||a.code===s.responseCode.pointOfCareDuplicate||a.code===s.responseCode.documentDuplicate||a.code===s.responseCode.serviceDuplicate?(V.value=a.data.key,Y.value=l.createEmptyDataSource(a.data.newListDuplicates),l.showModalById("duplicated-names")):l.showErrorToastByResponseCode(a.code),i.value=!1})}i.value=!1}let x=k(!1);function be(t){x.value=t.width<576}function ee(){v.emit(b.emitter.ACCORDION_COLLAPSE_ALL),v.emit(b.emitter.SHOW_ERROR_CLICK),E.warning(r.common.requiredFields)}function w(){let t={name:e.backRoute};e.directBackRoute&&(t={path:e.backRoute}),T.push(t)}const fe=j({get(){return z.getFieldByLangAndName(e.formModel,D.value,"name")},set(t){z.setFieldByLangAndName(e.formModel,D.value,"name",t)}});return(t,a)=>{const C=c("Hotkeys"),O=c("cbutton"),H=c("lang-selector"),A=c("iconArrowRight"),u=c("cbutton-options-item"),d=c("iconSubmmit"),p=c("cbutton-options-separator"),S=c("iconTrash"),h=c("cbutton-options"),L=c("confirm-delete-modal"),te=c("icon-focus"),ge=Ie("resize");return f(),$(P,null,[n(C,{shortcuts:["S"],debug:!0,onTriggered:N}),n(O,{class:"col-12 col-sm-auto",type:o(s).buttonType.secondary,size:o(s).buttonSize.large,title:t._lang.common.cancel,onClick:ce,disabled:o(i)},null,8,["type","size","title","disabled"]),n(H,{options:o(Q),selectedLang:o(D),"onUpdate:selectedLang":a[0]||(a[0]=M=>we(D)?D.value=M:null),disabled:o(i)},null,8,["options","selectedLang","disabled"]),n(O,{class:"col-12 col-sm-auto",title:t._lang.common.save,type:o(s).buttonType.secondary,size:o(s).buttonSize.large,onClick:N,disabled:o(i)},null,8,["title","type","size","disabled"]),n(O,{class:"col-12 col-sm-auto d-sm-block d-none",type:o(s).buttonType.secondary,size:o(s).buttonSize.large,onClick:J,disabled:o(i),icon:Oe,"icon-color":"#002D74","data-bs-toggle":"tooltip","data-bs-title":t._lang.common.verify,"data-bs-placement":"top"},null,8,["type","size","disabled","data-bs-title"]),n(O,{class:"col-12 col-sm-auto d-sm-none",type:o(s).buttonType.secondary,size:o(s).buttonSize.large,onClick:J,disabled:o(i),title:t._lang.common.verify},null,8,["type","size","disabled","title"]),Te((f(),q(h,{title:t._lang.common.actions,size:o(s).buttonSize.large,type:o(s).buttonType.secondary,disabled:o(i),class:De({"dropdown-center":o(x)})},{default:g(()=>[e.formModel.recordStateTypeId===o(s).recordStateType.approval?(f(),q(u,{key:0,title:t._lang.common.publish,disabled:!e.canSubmit,onClick:de},{default:g(()=>[n(A,{color:"#002D74"})]),_:1},8,["title","disabled"])):(f(),$(P,{key:1},[n(u,{title:t._lang.common.submit,disabled:!e.canSubmit,"data-bs-target":ae,"data-bs-toggle":"modal"},{default:g(()=>[n(d,{color:"#002D74"})]),_:1},8,["title","disabled"]),n(p),n(u,{title:t._lang.common.delete,"data-bs-target":se,"data-bs-toggle":"modal"},{default:g(()=>[n(S,{color:"#002D74"})]),_:1},8,["title"])],64))]),_:1},8,["title","size","type","disabled","class"])),[[ge,be]]),n(L,{id:F,title:e.resource.delete,message:e.resource.deleteQuestion,action:re},null,8,["title","message"]),n(Fe,{id:_,title:t._lang.common.cancel,action:ue},null,8,["title"]),n(je,{id:I,title:t._lang.common.publish,action:pe},null,8,["title"]),n(Ee,{id:W,title:t._lang.common.submit,action:me},null,8,["title"]),n(C,{shortcuts:["S"],debug:!0,onTriggered:N}),n($e,{title:t._lang.widgets.errors,type:o(s).offcanvas.danger,emitter:o(b).emitter.SHOW_ERROR_CLICK},{body:g(()=>[o(G).length?(f(),$("div",Be,[(f(!0),$(P,null,Le(o(G),(M,Qe)=>(f(),$("div",Ne,[R("div",Ve,[n(te,{color:"#002D74",class:"p-hand",onClick:Xe=>ie(M)},null,8,["onClick"])]),R("div",He,[R("h6",Pe,B(t._lang.label[M.name]),1),R("span",Ke,B(M.message),1),Ue])]))),256))])):Me("",!0)]),_:1},8,["title","type","emitter"]),n(ye,{"data-source":o(Y),name:o(fe)},null,8,["data-source","name"])],64)}}},tt=_e(We,[["__scopeId","data-v-2f72d600"]]);export{tt as e};
