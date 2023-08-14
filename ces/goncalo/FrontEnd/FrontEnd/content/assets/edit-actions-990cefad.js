import{b as ye}from"./refusal-a93dedcc.js";import{i as K,h as U,r as S,k as c,c as b,l as B,w as g,t as oe,v as q,n,p as o,s,_ as _e,K as ve,g as Ce,E as he,j,u as l,z as f,o as ke,a as Se,R as E,X as Ie,e as R,H as Oe,Z as we,O as Te,F as P,G as Le,x as De,m as $,y as Me,$ as Re,A as ze,B as $e}from"./index-17cd38fc.js";import{_ as Fe}from"./cancel-confirm-8dc1fd38.js";import{b as z}from"./helpers-6212aa86.js";import{s as Ae}from"./settings-0bf02062.js";/* empty css                                                                     */const je={__name:"publish-confirm",props:{id:{String,required:!0,default:"confirm-publish"},action:{Function,required:!0}},setup(m){const y=m;K(),U();let e=S(!1);function T(){y.action()}return(r,F)=>{const _=c("cbutton"),I=c("modal");return b(),B(I,{id:y.id,title:r._lang.common.publish,size:o(s).modalSize.medium},{body:g(()=>[oe(q(r._lang.backoffice.modals.confirmPublish),1)]),footer:g(()=>[n(_,{title:r._lang.common.no,type:o(s).buttonType.secondary,"data-bs-dismiss":"modal","aria-label":"Close",disabled:o(e)},null,8,["title","type","disabled"]),n(_,{title:r._lang.common.yes,onClick:T,disabled:o(e),"data-bs-dismiss":"modal","aria-label":"Close"},null,8,["title","disabled"])]),_:1},8,["id","title","size"])}}},Ee={__name:"submit-confirm",props:{id:{String,required:!0,default:"confirm-submit"},action:{Function,required:!0}},setup(m){const y=m;K(),U();let e=S(!1);function T(){y.action()}return(r,F)=>{const _=c("cbutton"),I=c("modal");return b(),B(I,{id:y.id,title:r._lang.common.submit,size:o(s).modalSize.medium},{body:g(()=>[oe(q(r._lang.backoffice.modals.confirmSubmit),1)]),footer:g(()=>[n(_,{title:r._lang.common.no,type:o(s).buttonType.secondary,"data-bs-dismiss":"modal","aria-label":"Close",disabled:o(e)},null,8,["title","type","disabled"]),n(_,{title:r._lang.common.yes,onClick:T,disabled:o(e),"data-bs-dismiss":"modal","aria-label":"Close"},null,8,["title","disabled"])]),_:1},8,["id","title","size"])}}},Be=m=>(ze("data-v-2f72d600"),m=m(),$e(),m),qe={key:0,class:"h-100",errors:""},Ne={class:"d-flex"},Ve={class:"me-2 mt-2 p-hand"},He={class:"field w-100"},Pe={class:"mb-0"},Ke={class:"d-block mb-2 text-danger"},Ue=Be(()=>$("hr",{class:"separator"},null,-1)),We={__name:"edit-actions",props:{loading:{Boolean,required:!0},canSubmit:{Boolean,required:!0},selectedLang:{type:[String,Number],required:!0},formModel:{type:Object,required:!0},service:{type:Object,required:!0},backRoute:{type:String,required:!0},itemId:{type:[String,Number],required:!0},itemVersion:{type:[String,Number],required:!0},vuelidate:{type:Object,required:!0},store:{type:Object,required:!0},resource:{type:Object},directBackRoute:{Boolean,default:!1},itemIdField:{type:String,required:!0},progressFields:{type:Array}},emits:["update:selectedLang","update:loading"],setup(m,{emit:y}){const e=m;ve(async()=>{await le()});const T=Ce(),r=K(),F="confirm-delete",_="confirm-cancel",I="confirm-publish",W="confirm-submit",se=`#${F}_modal`,ae=`#${W}_modal`,v=U();let G=S([]),Q=S(!1),X=he({});const Z=j(()=>{if(e.vuelidate.$error){Q.value=!0;const t=l.removeDuplicateItemsOfArray(e.vuelidate.$errors),a=t.map(d=>({name:d.$property,group:d.$propertyPath,message:d.$message})),C=t.find(d=>d.$property==="texts");if(C){for(let d in C.$response.$data){let p=C.$response.$data[d];const k=Object.keys(p);for(let h in k){const D=k[h];p[D].$error&&a.push({name:D,group:`texts.${D}`,message:r.common.requiredField})}}l.removeItemOfArray(a,a.find(d=>d.name==="texts"))}const w=l.removeDuplicateItemsOfArray(a),H=z.getObjecTypeId(e.formModel);let A=[],u=e.progressFields;switch(H){case s.objectType.organization:u=e.progressFields;break;case s.objectType.service:u=e.progressFields;break;case s.objectType.document:u=e.progressFields;break;case s.objectType.location:u=e.progressFields;break;case s.objectType.pointOfCare:u=e.progressFields;break}for(let d in u){let p=u[d];if(p.includes(".")){const h=p.split(".");p=h[h.length-1]}const k=w.find(h=>h.name===p);k&&A.push(k)}return A}else return Q.value&&v.emit(f.emitter.OFFCANVAS_CLOSE),[]});ke(()=>{Object.assign(X,e.formModel),v.on(f.emitter.DUPLICATE_NAMES,async t=>{t?await ne():V.value=null})}),Se(()=>{v.off(f.emitter.DUPLICATE_NAMES)});const L=j({get(){return e.selectedLang},set(t){y("update:selectedLang",t)}}),ne=async()=>{if((await e.service.changeState(e.itemId,e.itemVersion,s.recordStateType.published,V.value)).code===s.responseCode.success){const a=z.getObjecTypeId(e.formModel),C=z.getMessage(r,s.recordStateType.published,a);E.success(C),O()}},ie=t=>{const a=document.getElementById(t.name);a?(v.emit(f.emitter.OFFCANVAS_CLOSE),a.focus()):console.error(`The element not founded with id: ${t.name}`)},i=j({get(){return e.loading},set(t){y("update:loading",t)}});async function le(){let t=await Ae.getLanguages();l.validateResponse(t,null,()=>{G.value=t.data})}async function re(){i.value=!0;const t=await e.service.delete(e.itemId,e.itemVersion);l.validateResponse(t,e.resource.deleted,()=>{O()}),i.value=!1}function ce(){l.compareObjectIsDirty(e.store.formToCompare,e.formModel)?l.showModalById(_):O()}function de(){l.showModalById(I)}function ue(){O()}async function J(){i.value=!0,await e.vuelidate.$validate(),e.vuelidate.$error?ee():E.success(r.common.formIsValid),i.value=!1}async function N(){i.value=!0;const t=await e.service.update(e.formModel);l.validateResponse(t,e.resource.saved,()=>{Object.assign(X,e.formModel),e.store.setFormToCompare(e.formModel)}),i.value=!1}async function me(){if(i.value=!0,await e.vuelidate.$validate(),e.vuelidate.$error)ee();else{const t=await e.service.update(e.formModel);l.validateResponse(t,null,async()=>{const a=await e.service.submit(e.itemId,e.itemVersion);l.validateResponse(a,e.resource.saved,()=>{a.code===0&&O()}),i.value=!1})}i.value=!1}let Y=S(l.createEmptyDataSource()),V=S(null);async function pe(){if(i.value=!0,await e.vuelidate.$validate(),e.vuelidate.$error)v.emit(f.emitter.ACCORDION_COLLAPSE_ALL),v.emit(f.emitter.SHOW_ERROR_CLICK),E.warning(r.common.requiredFields);else{const t=await e.service.update(e.formModel);l.validateResponse(t,null,async()=>{const a=await e.service.publish(e.itemId,e.itemVersion);a.code===s.responseCode.success?O():a.code===s.responseCode.organizationDuplicate||a.code===s.responseCode.locationDuplicate||a.code===s.responseCode.pointOfCareDuplicate||a.code===s.responseCode.documentDuplicate||a.code===s.responseCode.serviceDuplicate?(V.value=a.data.key,Y.value=l.createEmptyDataSource(a.data.newListDuplicates),l.showModalById("duplicated-names")):l.showErrorToastByResponseCode(a.code),i.value=!1})}i.value=!1}let x=S(!1);function fe(t){x.value=t.width<576}function ee(){v.emit(f.emitter.ACCORDION_COLLAPSE_ALL),v.emit(f.emitter.SHOW_ERROR_CLICK),E.warning(r.common.requiredFields)}function O(){let t={name:e.backRoute};e.directBackRoute&&(t={path:e.backRoute}),T.push(t)}const be=j({get(){return z.getFieldByLangAndName(e.formModel,L.value,"name")},set(t){z.setFieldByLangAndName(e.formModel,L.value,"name",t)}});return(t,a)=>{const C=c("Hotkeys"),w=c("cbutton"),H=c("lang-selector"),A=c("iconArrowRight"),u=c("cbutton-options-item"),d=c("iconSubmmit"),p=c("cbutton-options-separator"),k=c("iconTrash"),h=c("cbutton-options"),D=c("confirm-delete-modal"),te=c("icon-focus"),ge=Ie("resize");return b(),R(P,null,[n(C,{shortcuts:["S"],debug:!0,onTriggered:N}),n(w,{class:"col-12 col-sm-auto",type:o(s).buttonType.secondary,size:o(s).buttonSize.large,title:t._lang.common.cancel,onClick:ce,disabled:o(i)},null,8,["type","size","title","disabled"]),n(H,{options:o(G),selectedLang:o(L),"onUpdate:selectedLang":a[0]||(a[0]=M=>Oe(L)?L.value=M:null),disabled:o(i)},null,8,["options","selectedLang","disabled"]),n(w,{class:"col-12 col-sm-auto",title:t._lang.common.save,type:o(s).buttonType.secondary,size:o(s).buttonSize.large,onClick:N,disabled:o(i)},null,8,["title","type","size","disabled"]),n(w,{class:"col-12 col-sm-auto d-sm-block d-none",type:o(s).buttonType.secondary,size:o(s).buttonSize.large,onClick:J,disabled:o(i),icon:we,"icon-color":"#002D74","data-bs-toggle":"tooltip","data-bs-title":t._lang.common.verify,"data-bs-placement":"top"},null,8,["type","size","disabled","data-bs-title"]),n(w,{class:"col-12 col-sm-auto d-sm-none",type:o(s).buttonType.secondary,size:o(s).buttonSize.large,onClick:J,disabled:o(i),title:t._lang.common.verify},null,8,["type","size","disabled","title"]),Te((b(),B(h,{title:t._lang.common.actions,size:o(s).buttonSize.large,type:o(s).buttonType.secondary,disabled:o(i),class:Le({"dropdown-center":o(x)})},{default:g(()=>[e.formModel.recordStateTypeId===o(s).recordStateType.approval?(b(),B(u,{key:0,title:t._lang.common.publish,disabled:!e.canSubmit,onClick:de},{default:g(()=>[n(A,{color:"#002D74"})]),_:1},8,["title","disabled"])):(b(),R(P,{key:1},[n(u,{title:t._lang.common.submit,disabled:!e.canSubmit,"data-bs-target":ae,"data-bs-toggle":"modal"},{default:g(()=>[n(d,{color:"#002D74"})]),_:1},8,["title","disabled"]),n(p),n(u,{title:t._lang.common.delete,"data-bs-target":se,"data-bs-toggle":"modal"},{default:g(()=>[n(k,{color:"#002D74"})]),_:1},8,["title"])],64))]),_:1},8,["title","size","type","disabled","class"])),[[ge,fe]]),n(D,{id:F,title:e.resource.delete,message:e.resource.deleteQuestion,action:re},null,8,["title","message"]),n(Fe,{id:_,title:t._lang.common.cancel,action:ue},null,8,["title"]),n(je,{id:I,title:t._lang.common.publish,action:pe},null,8,["title"]),n(Ee,{id:W,title:t._lang.common.submit,action:me},null,8,["title"]),n(C,{shortcuts:["S"],debug:!0,onTriggered:N}),n(Re,{title:t._lang.widgets.errors,type:o(s).offcanvas.danger,emitter:o(f).emitter.SHOW_ERROR_CLICK},{body:g(()=>[o(Z).length?(b(),R("div",qe,[(b(!0),R(P,null,De(o(Z),(M,Ge)=>(b(),R("div",Ne,[$("div",Ve,[n(te,{color:"#002D74",class:"p-hand",onClick:Qe=>ie(M)},null,8,["onClick"])]),$("div",He,[$("h6",Pe,q(t._lang.label[M.name]),1),$("span",Ke,q(M.message),1),Ue])]))),256))])):Me("",!0)]),_:1},8,["title","type","emitter"]),n(ye,{"data-source":o(Y),name:o(be)},null,8,["data-source","name"])],64)}}},tt=_e(We,[["__scopeId","data-v-2f72d600"]]);export{tt as e};
