import{v as ee,_ as G,u as R,r as u,a9 as te,o as F,s as r,j as Y,n as y,A as o,aa as q,I as ae,a as b,b as I,k as D,g as _,f as e,z as K,B as U,t as X,F as B,G as ne,c as V,J as le,m as H,x as oe,y as J,w as L,d as p,M as se,ab as re,H as ie,P as de,ac as ce}from"./index-920dbb37.js";import{o as ue}from"./organization-485b520a.js";import{b as me}from"./helpers-4c156364.js";import"./index.esm-d0811cb6.js";const W={get:x=>ee.post("/treeview/getV2",x)},pe="/images/organic/item-close.png",ve="/images/organic/item-open.png";const _e={class:"d-flex align-items-center"},ge={key:0,src:pe,class:"me-2 ms-2"},ye={key:1,src:ve,class:"me-2 ms-2"},fe={key:0,class:"ms-5"},Ie={__name:"item",props:{item:{type:Object,required:!0},index:{type:Number,required:!0},level:{type:Number,required:!0},parent:{type:String,required:!0},selectedNode:{type:String,required:!0},onlyPublish:{type:Boolean,required:!0},openAll:{type:Boolean,required:!0}},setup(x){const n=x,h=R(),S=u(null),k=te();let i=u(!1),t=u(n.item),m=u(n.openAll),f=u(`${n.parent}${n.level}${n.index}`),v=u(n.openAll||n.level==1&&n.index==1),T=u(!1),C={x:0,y:0};F(async()=>{M()&&a(),w(),h.on(r.emitter.OPENALL,async l=>{l==f.value&&(T.value=!1,m.value=!0,v.value=!1,await P(),v.value=!0)}),t.value.children==null&&(t.value.children=[])}),Y(()=>{});async function O(){v.value=!v.value,v.value||(m.value=!1),!T.value&&v.value&&(t.value.typeId==o.organicEnum.folder||t.value.typeId==o.organicEnum.entity)&&t.value.id!=0&&(await P(),T.value=!0)}const P=async()=>{const l=m.value?null:2,d={Id:t.value.id,version:t.value.version,TypeId:t.value.typeId,LevelDeep:l,onlyPublish:n.onlyPublish};i.value=!0;let A=await W.get(d);t.value.children==null&&(t.value.children=[]),y.validateResponse(A,null,()=>{t.value=A.data}),i.value=!1,v.value=!0};function s(l){l.preventDefault();let d={item:t.value,e:l,itemKey:f.value};h.emit(r.emitter.OPEN_CONTEXT_MENU,d)}function g(){if((t.value.typeId==o.organicEnum.entity||t.value.typeId==o.organicEnum.service||t.value.typeId==o.organicEnum.folder||t.value.typeId==o.organicEnum.servicePoint)&&t.value.id!=0){let l={itemKey:f.value,item:t.value};h.emit(r.emitter.OPEN_SUMMARY_CLICK,l)}}function M(){return t.value.typeId==o.organicEnum.service||t.value.typeId==o.organicEnum.servicePoint}function a(){q(S.value).draggable({inertia:!0,autoScroll:!0,snap:{targets:[]},listeners:{start(l){l.target.style.zIndex=10,k.setItem(t.value)},move(l){C.x+=l.dx,C.y+=l.dy,l.target.style.transform=`translate(${C.x}px, ${C.y}px)`},end(l){C.x=0,C.y=0,l.target.style.zIndex=1,E(l),k.resetItem()}}})}function c(l){l.target.classList.remove("can-drop-target"),l.target.classList.remove("can-not-drop-target"),l.relatedTarget.classList.remove("can-drop"),l.relatedTarget.classList.remove("can-not-drop")}function N(){return t.value.typeId==o.organicEnum.serviceFolder||t.value.typeId==o.organicEnum.servicePoint}function w(){q(S.value).dropzone({ondragenter:function(l){var d=l.relatedTarget,A=l.target;N()?(d.classList.add("can-drop"),A.classList.add("can-drop-target")):(d.classList.add("can-not-drop"),A.classList.add("can-not-drop-target"))},ondragleave:function(l){c(l)},ondrop:function(l){N(),c(l)}})}function E(l){var d=l.target;d.style.webkitTransform=d.style.transform="translate(0px, 0px)",d.setAttribute("data-x",0),d.setAttribute("data-y",0),d.style.webkitTransform=d.style.transform=""}return ae(()=>n.openAll||m.value),(l,d)=>{var z;const A=b("spinner");return I(),D(B,null,[_("div",{onContextmenu:d[0]||(d[0]=$=>s($)),class:K(["node d-flex align-items-center draggableElement",{gov:n.level==1&&n.index==1,"is-selected":n.selectedNode===e(f)}]),ref_key:"draggableElement",ref:S,onDblclick:g},[_("div",_e,[((z=e(t))==null?void 0:z.typeId)!=e(o).organicEnum.service?(I(),D("button",{key:0,class:K(["icon-btn",{gov:n.level==1&&n.index==1}]),onClick:O},[e(v)?(I(),D("img",ye)):(I(),D("img",ge))],2)):U("",!0),_("div",{class:K(["status me-2 vr",{published:e(t).recordStateId==e(o).recordStateType.published,folder:e(t).recordStateId==e(o).recordStateType.folder,submitted:e(t).recordStateId==e(o).recordStateType.submitted,"ms-5":e(t).typeId==e(o).organicEnum.service}])},null,2),_("span",null,X(e(t).name),1)])],34),e(v)?(I(),D("div",fe,[(I(!0),D(B,null,ne(e(t).children,($,Z)=>(I(),V(j,{item:$,index:Z+1,level:n.level+1,selectedNode:n.selectedNode,parent:`${n.parent}${n.level}${n.index}`,onlyPublish:n.onlyPublish,openAll:e(m)},null,8,["item","index","level","selectedNode","parent","onlyPublish","openAll"]))),256))])):U("",!0),_("div",null,[e(i)?(I(),V(A,{key:0,class:"mt-2 mb-2"})):U("",!0)])],64)}}},j=G(Ie,[["__scopeId","data-v-238d312e"]]),Q=le("OrganicStore",{state:()=>({selectedItem:{id:null,level:null}}),getters:{},actions:{setSelectedItem(x){this.selectedItem.id=x.id,this.selectedItem.level=x.level},resetSelectedItem(){this.selectedItem={id:null,level:null}}}});const be={class:"summary-header d-flex align-items-center"},Ce={class:""},Ee={class:""},he={class:"p-4"},Se={__name:"summary",setup(x){F(()=>{n.on(r.emitter.OPEN_SUMMARY_CLICK,s=>{i=s.item,t.value++,T(i)}),f.value=y.convertEnumToArray(k.enums.recordStateType),m.value=y.concatItemsBadge(f.value,me.recordStateTypeBadgeOptions)}),Y(()=>{n.off(r.emitter.OPEN_SUMMARY_CLICK)});const n=R(),h=Q(),S=H(),k=oe();var i=J({name:""}),t=u(0);u(!1),u(!1);let m=u([]),f=u([]);function v(){h.resetSelectedItem(),n.emit(r.emitter.CLOSE_SUMMARY_CLICK)}async function T(s){switch(s.typeId){case o.objectType.organization:case o.objectType.folder:await C(s);break}}async function C(s){const g=await ue.getById(s.id,s.version);y.validateResponse(g,null,()=>{Object.assign(s,g.data)})}function O(){switch(i.typeId){case o.objectType.organization:case o.objectType.folder:P();break}}function P(){S.push({name:r.router.BACKOFFICE_DETAIL_ENTITY_PAGE.name,params:{organizationId:y.encodeId(i.id),organizationVersion:y.encodeId(i.version)}})}return(s,g)=>{const M=b("icon-eye"),a=b("icon-close-circle"),c=b("form-field"),N=b("row"),w=b("card");return I(),V(w,{shadow:!0,class:"summary-card sticky-xl-top p-c",key:e(t)},{body:L(()=>[_("div",null,[_("div",be,[_("div",Ce,[_("h2",Ee,X(s._lang.backoffice.organic.summary),1)]),p(M,{color:"#002D74",class:"p-hand ms-1",onClick:O,"data-bs-toggle":"tooltip","data-bs-title":s._lang.common.seeDetail},null,8,["data-bs-title"]),p(a,{color:"#002D74",class:"p-hand ms-auto",onClick:v,"aria-label":s._lang.common.close},null,8,["aria-label"])]),_("div",he,[p(N,null,{default:L(()=>[p(se,{value:e(i).recordStateTypeId,options:e(m)},null,8,["value","options"]),p(c,{id:"description",class:"mb-3 col-12",modelValue:e(i).name,"onUpdate:modelValue":g[0]||(g[0]=E=>e(i).name=E),label:s._lang.label.name,disabled:!0,loading:!1,type:e(o).inputs.text},null,8,["modelValue","label","type"]),p(c,{id:"description",class:"mb-3 col-12",modelValue:e(i).startDate,"onUpdate:modelValue":g[1]||(g[1]=E=>e(i).startDate=E),label:s._lang.label.startDate,disabled:!0,loading:!1,type:e(o).inputs.datepicker},null,8,["modelValue","label","type"]),p(c,{id:"description",class:"mb-3 col-12",modelValue:e(i).endDate,"onUpdate:modelValue":g[2]||(g[2]=E=>e(i).endDate=E),label:s._lang.label.endDate,disabled:!0,loading:!1,type:e(o).inputs.endDate},null,8,["modelValue","label","type"])]),_:1})])])]),_:1})}}};const Ae={class:"col-6"},xe={class:"col-6"},ke={class:"col-12 col-xl-4 mt-4 mt-xl-0"},Te={__name:"index",setup(x){F(async()=>{n.on(r.emitter.OPEN_SUMMARY_CLICK,a=>{h.setSelectedItem(a.item),k.value=a.itemKey,t.value=!0}),n.on(r.emitter.CLOSE_SUMMARY_CLICK,()=>{h.resetSelectedItem(),k.value="",t.value=!1}),n.on(r.emitter.OPEN_CONTEXT_MENU,a=>{const c=O(a);re.showContextMenu({x:a.e.x,y:a.e.y,items:c})}),await v()}),Y(()=>{n.off(r.emitter.OPEN_SUMMARY_CLICK),n.off(r.emitter.CLOSE_SUMMARY_CLICK),n.off(r.emitter.OPEN_CONTEXT_MENU),n.off(r.emitter.OPENALL),h.resetSelectedItem()});const n=R(),h=Q(),S=H();var k=u(""),i=u(0),t=u(!1),m=u(!0),f=J({Id:null,version:null,TypeId:null,LevelDeep:2,onlyPublish:!0});async function v(){m.value=!0;let a=await W.get(f);y.validateResponse(a,null,()=>{C.value=a.data,T(a.data),i.value++}),m.value=!1,n.emit(r.emitter.CLOSE_SUMMARY_CLICK)}const T=a=>{};var C=u(null);function O(a){var c=[];return c.push({label:"Abrir tudo",onClick:()=>M(a.itemKey)}),a.item.typeId==o.organicEnum.entity&&c.push({label:"Ver detalhe",onClick:()=>P(a.item)}),a.item.typeId==o.organicEnum.service&&c.push({label:"Ver detalhe",onClick:()=>s(a.item)}),a.item.typeId==o.organicEnum.servicePoint&&c.push({label:"Ver detalhe",onClick:()=>g(a.item)}),c}function P(a){S.push({name:r.router.BACKOFFICE_DETAIL_ENTITY_PAGE.name,params:{organizationId:y.encodeId(a.id),organizationVersion:y.encodeId(a.version)}})}function s(a){S.push({name:r.router.BACKOFFICE_DETAIL_SERVICE_PAGE.name,params:{serviceId:y.encodeId(a.id),serviceVersion:y.encodeId(a.version)}})}function g(a){S.push({name:r.router.BACKOFFICE_DETAIL_POINT_OF_CARE_PAGE.name,params:{pointOfCareId:y.encodeId(a.id),pointOfCareVersion:y.encodeId(a.version)}})}function M(a){n.emit(r.emitter.OPENALL,a)}return(a,c)=>{const N=b("form-field"),w=b("cbutton"),E=b("row"),l=b("spinner"),d=b("card"),A=b("page");return I(),V(A,{title:a._lang.backoffice.organic.pageTitle},{default:L(()=>[p(E,null,{default:L(()=>[_("div",{class:K([{"col-xl-8":e(t)},"col-12"])},[p(d,{shadow:!0},{body:L(()=>[e(m)?(I(),V(l,{key:1})):(I(),D(B,{key:0},[p(ie,{"margin-top":!1,"margin-bottom":!0},{default:L(()=>[p(E,null,{default:L(()=>[_("div",Ae,[p(N,{id:"active",class:"mt-2",modelValue:e(f).onlyPublish,"onUpdate:modelValue":c[0]||(c[0]=z=>e(f).onlyPublish=z),label:a._lang.backoffice.organic.publishedRecords,type:e(o).inputs.checkbox,disabled:e(m),loading:e(m)},null,8,["modelValue","label","type","disabled","loading"])]),_("div",xe,[p(w,{class:"float-end",type:e(o).buttonType.secondary,size:e(o).buttonSize.large,title:a._lang.common.search,onClick:v,disabled:e(m)},null,8,["type","size","title","disabled"])])]),_:1})]),_:1}),p(j,{item:e(C),index:1,level:1,parent:"",openAll:!1,selectedNode:e(k),onlyPublish:e(f).onlyPublish},null,8,["item","selectedNode","onlyPublish"])],64))]),_:1})],2),de(_("div",ke,[p(Se)],512),[[ce,e(t)]])]),_:1})]),_:1},8,["title"])}}},Oe=G(Te,[["__scopeId","data-v-110def58"]]);export{Oe as default};