import{b as B,d as W,u,r as m,o as j,a as X,c as v,e as y,_ as Z,f as ee,g as ae,h as te,i as se,j as ne,k as D,w as le,l as A,m as M,n as b,p as o,q as p,s as a,t as oe,v as C,x as d,y as f,F as x,z as re,A as P,B as T,C as ie,D as de}from"./index-80ba5b4e.js";const N={search:s=>B.post("/es/search",s),getFilters:()=>B.get("/es/filters")},ce=W("SearchStore",{state:()=>({objectTypes:[],organizationParents:[],items:[],filterModel:u.createFilterModel(),pageCount:0,page:0}),getters:{},actions:{setObjectTypes(s){this.objectTypes=[];for(let _ in s)this.objectTypes.some(g=>g.value===s[_].index)||this.objectTypes.push({value:s[_].index,label:s[_].title})},setOrganizationParents(s){this.organizationParents=[];for(let _ in s)this.organizationParents.some(g=>g.value===s[_].organizationParent)||this.organizationParents.push({value:s[_].organizationParent,label:s[_].organizationParent})},setFilterModel(s){this.filterModel=s},setItems(s){this.items=s},setPageCount(s){this.pageCount=s},setPage(s){this.page=s}}}),ue={__name:"observer",props:{options:Object},emits:["intersect"],setup(s,{emit:_}){const g=s,r=m(null),E=m(null);return j(()=>{const h=g.options||{};r.value=new IntersectionObserver(([i])=>{i&&i.isIntersecting&&_("intersect")},h),r.value.observe(E.value)}),X(()=>{r.value.disconnect()}),(h,i)=>(v(),y("div",{class:"observer",ref_key:"observerRef",ref:E},null,512))}};const z=s=>(ie("data-v-69ca9779"),s=s(),de(),s),pe={class:"image-back-home px-5"},_e=z(()=>o("div",{class:"col-12 mt-5"},[o("h1",null,"Bem-vindo")],-1)),ve={class:"col-12"},me={class:"col-12 search-btn"},be=["disabled"],ge=["disabled"],he={class:"col-12"},fe=["innerHTML"],ye={class:"mt-3"},Ie=["onClick"],Ce={class:"title"},Pe={class:"description"},ze={key:0,class:"f-14"},Ee=z(()=>o("br",null,null,-1)),ke=z(()=>o("br",null,null,-1)),Ae={key:0,class:"f-14"},Ve=z(()=>o("br",null,null,-1)),Te=z(()=>o("br",null,null,-1)),Fe=z(()=>o("br",null,null,-1)),Se={class:"date"},Me=z(()=>o("hr",{class:"rounded"},null,-1)),Oe=["innerHTML"],xe={__name:"search",setup(s){const _=ee(),g=ae(),r=ce();te();const E=se();let h=m(!1),i=m(!1),F=m(!1),O=m(!1),l=m(u.createFilterModel()),k=m(0),S=m(999),I=m([]),R=m(0);ne({types:[],organizations:[]});const H=D(()=>E.common.emptyResult.replace("{0}",`<strong>${l.value.query}</strong>`)),K=D(()=>E.common.totalRecords.replace("{0}",`<strong>${R.value}</strong>`)),w=async()=>{F.value=!1,l.value.query&&(k.value=0,r.setFilterModel(l.value),I.value=[],await L(),F.value=!1)},L=async()=>{O.value=!0,i.value=!0,l.value.pageNumber=k.value;let t=await N.search(l.value);t.code!==0&&await q(),u.validateResponse(t,null,()=>{I.value.push(...G(t.data.items)),k.value++,R.value=t.data.total,S.value=Math.ceil(t.data.total/l.value.pageSize),r.setItems(I.value),r.setPageCount(S.value),r.setPage(k.value),O.value=!1,h.value=!0}),i.value=!1};j(async()=>{F.value=!1;let t=await N.getFilters();u.validateResponse(t,null,()=>{r.setObjectTypes(t.data.types.map(e=>(console.log(e),{title:E.label[e],index:e}))),r.setOrganizationParents(t.data.organizations.map(e=>({organizationParent:e})))}),_.hash==="#history"&&(i.value=!0,r.filterModel.query&&(I.value.push(...r.items),k.value=r.page,S.value=r.pageCount,l.value=r.filterModel,h.value=!0,F.value=!0,i.value=!1))});const q=async()=>{l.value.query=null,l.value.pageNumber=0,l.value.name=null,l.value.abreviation=null,l.value.organizationParents=null,l.value.index=null,h.value=!1};function U(t){let e="",c={};switch(t.index){case"organization":e=T.router.BACKOFFICE_SEARCH_DETAIL_ENTITY_PAGE.name,c={organizationId:u.encodeId(t.id),organizationVersion:u.encodeId(t.version)};break;case"pointofcare":e=T.router.BACKOFFICE_SEARCH_DETAIL_POINT_OF_CARE_PAGE.name,c={pointOfCareId:u.encodeId(t.id),pointOfCareVersion:u.encodeId(t.version)};break;case"service":e=T.router.BACKOFFICE_SEARCH_DETAIL_SERVICE_PAGE.name,c={serviceId:u.encodeId(t.id),serviceVersion:u.encodeId(t.version)};break;case"location":e=T.router.BACKOFFICE_SEARCH_DETAIL_LOCATION_PAGE.name,c={locationId:u.encodeId(t.id),locationVersion:u.encodeId(t.version)};break;case"document":e=T.router.BACKOFFICE_SEARCH_DETAIL_DOCUMENT_PAGE.name,c={documentId:u.encodeId(t.id),documentVersion:u.encodeId(t.version)};break}g.push({name:e,params:c})}function G(t){return t.map(e=>({id:e.id,version:e.version,title:e.pt.type,name:e.pt.name,organizationParent:e.organizationParent,address:e.address,date:u.formatDate(e.startDate),index:e.index,economicActivity:e.economicActivity,category:e.category,type:e.type}))}async function $(){k.value<S.value&&await L()}return le(()=>l.value.query,()=>{l.value.query||(h.value=!1)}),(t,e)=>{const c=A("row"),V=A("form-field"),Y=A("icon-search"),J=A("spinner"),Q=A("card");return v(),M(Q,{shadow:!0,class:"card-home",padding:!1},{body:b(()=>[o("div",pe,[p(c,null,{default:b(()=>[_e]),_:1}),p(c,{class:"mt-5 mb-3"},{default:b(()=>[o("div",ve,[p(V,{id:"query",label:"Pesquisar",modelValue:a(l).query,"onUpdate:modelValue":e[0]||(e[0]=n=>a(l).query=n),placeholder:t._lang.backoffice.home.placeholderSearch,onKeyup:oe(w,["enter"]),type:a(C).inputs.search,disabled:a(i)},null,8,["modelValue","placeholder","onKeyup","type","disabled"])])]),_:1}),p(c,null,{default:b(()=>[p(V,{id:"abreviation",class:"mb-3 col-12 col-md-6",label:t._lang.label.abreviation,type:a(C).inputs.text,maxlength:45,modelValue:a(l).abreviation,"onUpdate:modelValue":e[1]||(e[1]=n=>a(l).abreviation=n),disabled:a(i)},null,8,["label","type","modelValue","disabled"]),p(V,{id:"types",class:"mb-3 col-12 col-md-6",modelValue:a(l).index,"onUpdate:modelValue":e[2]||(e[2]=n=>a(l).index=n),label:t._lang.label.type,disabled:a(i),type:a(C).inputs.multiselect,mode:a(C).multiselectMode.tags,options:a(r).objectTypes},null,8,["modelValue","label","disabled","type","mode","options"])]),_:1}),p(c,null,{default:b(()=>[p(V,{id:"name",class:"mb-3 col-12 col-md-6",label:t._lang.label.name,type:a(C).inputs.text,maxlength:45,modelValue:a(l).name,"onUpdate:modelValue":e[3]||(e[3]=n=>a(l).name=n),disabled:a(i)},null,8,["label","type","modelValue","disabled"]),p(V,{id:"organizationParents",class:"mb-3 col-12 col-md-6",modelValue:a(l).organizationParents,"onUpdate:modelValue":e[4]||(e[4]=n=>a(l).organizationParents=n),label:t._lang.label.parentOrganization,disabled:a(i),type:a(C).inputs.multiselect,mode:a(C).multiselectMode.tags,options:a(r).organizationParents},null,8,["modelValue","label","disabled","type","mode","options"])]),_:1}),p(c,{class:"mt-2 pb-3"},{default:b(()=>[o("div",me,[o("button",{class:"btn btn-secondary medium mb-3 me-3",type:"button",onClick:q,disabled:a(i)},d(t._lang.common.clear),9,be),o("button",{class:"btn btn-primary medium mb-3",type:"button",onClick:w,disabled:a(i)},[p(Y,{color:"#FFF"}),f(" "+d(t._lang.common.search),1)],8,ge)])]),_:1})]),a(h)?(v(),M(c,{key:0,class:"px-5"},{default:b(()=>[o("div",he,[a(I).length?(v(),y(x,{key:0},[p(c,null,{default:b(()=>[o("div",{class:"mt-3",innerHTML:a(K)},null,8,fe)]),_:1}),o("div",ye,[o("ul",null,[(v(!0),y(x,null,re(a(I),n=>(v(),y("li",{class:"infinite-scroll-item p-hand",onClick:we=>U(n)},[o("h4",Ce,d(n.title),1),o("p",Pe,[o("i",null,d(n.organizationParent),1),f(", "),o("strong",null,d(n.name),1)]),n.address?(v(),y("p",ze,[f(d(n.address.zipCode)+" - "+d(n.address.island)+" ",1),Ee,f(" "+d(n.address.county)+", "+d(n.address.parish)+", "+d(n.address.location)+" ",1),ke,f(" "+d(n.address.address),1)])):P("",!0),n.index==="service"?(v(),y(x,{key:1},[n.category?(v(),y("p",Ae,[f(d(n.type)+" ",1),Ve,f(" "+d(n.category)+" ",1),Te,f(" "+d(n.economicActivity)+" ",1),Fe])):P("",!0)],64)):P("",!0),o("p",Se,d(t._lang.label.startDate)+": "+d(n.date),1),Me],8,Ie))),256))]),p(ue,{onIntersect:$})])],64)):P("",!0),!a(I).length&&!a(O)?(v(),y("div",{key:1,class:"mt-4 pb-4",innerHTML:a(H)},null,8,Oe)):P("",!0)])]),_:1})):P("",!0),p(c,null,{default:b(()=>[a(i)?(v(),M(J,{key:0,class:"mt-2 mb-2"})):P("",!0)]),_:1})]),_:1})}}},Re=Z(xe,[["__scopeId","data-v-69ca9779"]]),qe={__name:"index",setup(s){return(_,g)=>{const r=A("page");return v(),M(r,{title:_._lang.backoffice.home.pageTitle},{default:b(()=>[p(Re)]),_:1},8,["title"])}}};export{qe as default};
