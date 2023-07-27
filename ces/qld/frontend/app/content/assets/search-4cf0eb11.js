import{n as Y,B as J,j as i,i as _,b as N,d as Q,o as m,e as f,C as W,h as X,D as Z,q as ee,E as L,r as M,c as B,w as h,f as s,a as d,m as a,G as ae,v as b,F,H as te,x as u,I as C,y as P,l as k}from"./index-d8a56bcc.js";const le={search:n=>Y.post("/es/search",n)},se=J("SearchStore",{state:()=>({objectTypes:[],organizationParents:[],items:[],filterModel:i.createFilterModel(),pageCount:0,page:0}),getters:{},actions:{setObjectTypes(n){this.objectTypes=[];for(let p in n)this.objectTypes.some(y=>y.value===n[p].index)||this.objectTypes.push({value:n[p].index,label:n[p].title})},setOrganizationParents(n){this.organizationParents=[];for(let p in n)this.organizationParents.some(y=>y.value===n[p].organizationParent)||this.organizationParents.push({value:n[p].organizationParent,label:n[p].organizationParent})},setFilterModel(n){this.filterModel=n},setItems(n){this.items=n},setPageCount(n){this.pageCount=n},setPage(n){this.page=n}}}),oe={__name:"observer",props:{options:Object},emits:["intersect"],setup(n,{emit:p}){const y=n,r=_(null),A=_(null);return N(()=>{const I=y.options||{};r.value=new IntersectionObserver(([v])=>{v&&v.isIntersecting&&p("intersect")},I),r.value.observe(A.value)}),Q(()=>{r.value.disconnect()}),(I,v)=>(m(),f("div",{class:"observer",ref_key:"observerRef",ref:A},null,512))}};const ne={class:"image-back-home pt-3"},re=s("div",{class:"col-1 col-sm-1"},null,-1),ie=s("div",{class:"col-10 col-sm-10"},[s("h1",null,"Bem-vindo")],-1),ce=s("div",{class:"col-1 col-sm-1"},null,-1),ue=s("div",{class:"col-1 col-sm-1"},null,-1),de={class:"col-10 col-sm-10"},pe=s("div",{class:"col-1 col-sm-1"},null,-1),_e=s("div",{class:"col-1"},null,-1),ve={class:"col-10"},me=["innerHTML"],ge={class:"mt-3"},he=["onClick"],fe={class:"title"},ye={class:"description"},be={key:0,class:"f-14"},Ce=s("br",null,null,-1),Ie=s("br",null,null,-1),Ee={key:0,class:"f-14"},Pe=s("br",null,null,-1),Ae=s("br",null,null,-1),Ve=s("br",null,null,-1),ke={class:"date"},ze=s("hr",{class:"rounded"},null,-1),Te=["innerHTML"],Me=s("div",{class:"col-1"},null,-1),Re={__name:"search",setup(n){const p=W(),y=X(),r=se();Z();const A=ee();let I=_(!1),v=_(!1),z=_(!1),O=_(!1),o=_(i.createFilterModel()),E=_(0),T=_(999),g=_([]),R=_(0);const D=L(()=>A.common.emptyResult.replace("{0}",`<strong>${o.value.query}</strong>`)),H=L(()=>A.common.totalRecords.replace("{0}",`<strong>${R.value}</strong>`)),S=async()=>{z.value=!1,o.value.query&&(E.value=0,r.setFilterModel(o.value),g.value=[],await w(),I.value=!0,v.value=!1,z.value=!1)},w=async()=>{O.value=!0,o.value.pageNumber=E.value;let l=await le.search(o.value);i.validateResponse(l,null,()=>{g.value.push(...K(l.data.items)),E.value++,R.value=l.data.total,T.value=Math.ceil(l.data.total/o.value.pageSize),r.setObjectTypes(g.value),r.setOrganizationParents(g.value),r.setItems(g.value),r.setPageCount(T.value),r.setPage(E.value),O.value=!1})};N(()=>{v.value=!0,z.value=!1,p.hash==="#history"&&r.filterModel.query&&(g.value.push(...r.items),E.value=r.page,T.value=r.pageCount,o.value=r.filterModel,I.value=!0,z.value=!0,v.value=!1)});const j=async()=>{o.value.pageNumber=0,o.value.name=null,o.value.abreviation=null,o.value.organizationParents=null,o.value.index=null,await x()},x=async()=>{o.value.pageNumber=0,await S()};function q(l){let e="",c={};switch(l.index){case"organization":e=k.router.BACKOFFICE_SEARCH_DETAIL_ENTITY_PAGE.name,c={organizationId:i.encodeId(l.id),organizationVersion:i.encodeId(l.version)};break;case"pointofcare":e=k.router.BACKOFFICE_SEARCH_DETAIL_POINT_OF_CARE_PAGE.name,c={pointOfCareId:i.encodeId(l.id),pointOfCareVersion:i.encodeId(l.version)};break;case"service":e=k.router.BACKOFFICE_SEARCH_DETAIL_SERVICE_PAGE.name,c={serviceId:i.encodeId(l.id),serviceVersion:i.encodeId(l.version)};break;case"location":e=k.router.BACKOFFICE_SEARCH_DETAIL_LOCATION_PAGE.name,c={locationId:i.encodeId(l.id),locationVersion:i.encodeId(l.version)};break;case"document":e=k.router.BACKOFFICE_SEARCH_DETAIL_DOCUMENT_PAGE.name,c={documentId:i.encodeId(l.id),documentVersion:i.encodeId(l.version)};break}y.push({name:e,params:c})}function K(l){return l.map(e=>({id:e.id,version:e.version,title:e.pt.type,name:e.pt.name,organizationParent:e.organizationParent,address:e.address,date:i.formatDate(e.startDate),index:e.index,economicActivity:e.economicActivity,category:e.category,type:e.type}))}async function U(){E.value<T.value&&await w()}return(l,e)=>{const c=M("row"),V=M("form-field"),G=M("cfilter"),$=M("card");return m(),B($,{shadow:!0,class:"card-home"},{body:h(()=>[s("div",ne,[d(c,null,{default:h(()=>[re,ie,ce]),_:1}),d(c,{class:"mt-5"},{default:h(()=>[ue,s("div",de,[d(V,{id:"query",label:"Pesquisar",modelValue:a(o).query,"onUpdate:modelValue":e[0]||(e[0]=t=>a(o).query=t),placeholder:l._lang.backoffice.home.placeholderSearch,onKeyup:ae(S,["enter"]),type:a(b).inputs.search},null,8,["modelValue","placeholder","onKeyup","type"])]),pe]),_:1})]),a(I)?(m(),B(c,{key:0},{default:h(()=>[_e,s("div",ve,[a(g).length?(m(),f(F,{key:0},[d(c,null,{default:h(()=>[s("div",{class:"mt-3",innerHTML:a(H)},null,8,me)]),_:1}),d(G,{class:"mt-4",title:l._lang.common.filter,"clear-click":j,"apply-click":x,loading:a(v),"disable-margin":!0},{default:h(()=>[d(c,null,{default:h(()=>[d(V,{id:"abreviation",class:"mb-3 col-12 col-md-6",label:l._lang.label.abreviation,type:a(b).inputs.text,maxlength:45,modelValue:a(o).abreviation,"onUpdate:modelValue":e[1]||(e[1]=t=>a(o).abreviation=t)},null,8,["label","type","modelValue"]),d(V,{id:"types",class:"mb-3 col-12 col-md-6",modelValue:a(o).index,"onUpdate:modelValue":e[2]||(e[2]=t=>a(o).index=t),label:l._lang.label.type,loading:a(v),type:a(b).inputs.multiselect,mode:a(b).multiselectMode.tags,options:a(r).objectTypes},null,8,["modelValue","label","loading","type","mode","options"])]),_:1}),d(c,null,{default:h(()=>[d(V,{id:"name",class:"mb-3 col-12 col-md-6",label:l._lang.label.name,type:a(b).inputs.text,maxlength:45,modelValue:a(o).name,"onUpdate:modelValue":e[3]||(e[3]=t=>a(o).name=t)},null,8,["label","type","modelValue"]),d(V,{id:"organizationParents",class:"mb-3 col-12 col-md-6",modelValue:a(o).organizationParents,"onUpdate:modelValue":e[4]||(e[4]=t=>a(o).organizationParents=t),label:l._lang.label.parentOrganization,loading:a(v),type:a(b).inputs.multiselect,mode:a(b).multiselectMode.tags,options:a(r).organizationParents},null,8,["modelValue","label","loading","type","mode","options"])]),_:1})]),_:1},8,["title","loading"]),s("div",ge,[s("ul",null,[(m(!0),f(F,null,te(a(g),t=>(m(),f("li",{class:"infinite-scroll-item p-hand",onClick:Oe=>q(t)},[s("h4",fe,u(t.title),1),s("p",ye,[s("i",null,u(t.organizationParent),1),C(", "),s("strong",null,u(t.name),1)]),t.address?(m(),f("p",be,[C(u(t.address.zipCode)+" - "+u(t.address.island)+" ",1),Ce,C(" "+u(t.address.county)+", "+u(t.address.parish)+", "+u(t.address.location)+" ",1),Ie,C(" "+u(t.address.address),1)])):P("",!0),t.index==="service"?(m(),f(F,{key:1},[t.category?(m(),f("p",Ee,[C(u(t.type)+" ",1),Pe,C(" "+u(t.category)+" ",1),Ae,C(" "+u(t.economicActivity)+" ",1),Ve])):P("",!0)],64)):P("",!0),s("p",ke,u(t.date),1),ze],8,he))),256))]),d(oe,{onIntersect:U})])],64)):P("",!0),!a(g).length&&!a(O)?(m(),f("div",{key:1,class:"mt-4",innerHTML:a(D)},null,8,Te)):P("",!0)]),Me]),_:1})):P("",!0)]),_:1})}}};export{Re as _};
