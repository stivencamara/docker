import{b as D,d as X,u as c,r as g,o as $,a as Z,c as b,e as y,_ as ee,f as ae,g as te,h as ne,i as se,j as le,k as j,w as oe,l as k,m as O,n as f,p as o,q as p,s as n,t as re,v as z,x as d,y as h,F as M,z as ie,A as P,B as ue,C as V,D as de,E as ce}from"./index-ecfd29ec.js";const N={search:s=>D.post("/es/search",s),getFilters:()=>D.get("/es/filters")},pe=X("SearchStore",{state:()=>({objectTypes:[],organizationParents:[],items:[],filterModel:c.createFilterModel(),pageCount:0,page:0}),getters:{},actions:{setObjectTypes(s){this.objectTypes=[];for(let v in s)this.objectTypes.some(m=>m.value===s[v].index)||this.objectTypes.push({value:s[v].index,label:s[v].title})},setOrganizationParents(s){this.organizationParents=[];for(let v in s)this.organizationParents.some(m=>m.value===s[v].organizationParent)||this.organizationParents.push({value:s[v].organizationParent,label:s[v].organizationParent})},setFilterModel(s){this.filterModel=s},setItems(s){this.items=s},setPageCount(s){this.pageCount=s},setPage(s){this.page=s}}}),ve={__name:"observer",props:{options:Object},emits:["intersect"],setup(s,{emit:v}){const m=s,r=g(null),_=g(null);return $(()=>{const C=m.options||{};r.value=new IntersectionObserver(([u])=>{u&&u.isIntersecting&&v("intersect")},C),r.value.observe(_.value)}),Z(()=>{r.value.disconnect()}),(C,u)=>(b(),y("div",{class:"observer",ref_key:"observerRef",ref:_},null,512))}};const A=s=>(de("data-v-bc4d8509"),s=s(),ce(),s),_e={class:"image-back-home px-5"},be=A(()=>o("div",{class:"col-12 mt-5"},[o("h1",null,"Bem-vindo")],-1)),ge={class:"col-12"},fe={class:"col-12 search-btn"},me=["disabled"],he=["disabled"],ye={class:"col-12"},Ce=["innerHTML"],Ie={class:"mt-3"},ze=["onClick"],Pe={class:"title"},Ae={class:"description"},Ee={key:0,class:"f-14"},ke=A(()=>o("br",null,null,-1)),Te=A(()=>o("br",null,null,-1)),Ve={key:0,class:"f-14"},Fe=A(()=>o("br",null,null,-1)),xe=A(()=>o("br",null,null,-1)),Oe=A(()=>o("br",null,null,-1)),Se={class:"date"},Me=A(()=>o("hr",{class:"rounded"},null,-1)),we=["innerHTML"],Re={__name:"search",setup(s){const v=ae(),m=te(),r=pe();ne();const _=se();let C=g(!1),u=g(!1),F=g(!1),S=g(!1),a=g(c.createFilterModel()),E=g(0),x=g(999),I=g([]),w=g(0);le({types:[],organizations:[]});const H=j(()=>{let e="";return a.value.query&&(e+=`${a.value.query},`),a.value.abreviation&&(e+=` ${a.value.abreviation},`),a.value.index&&(e+=` ${R(a.value.index)},`),a.value.name&&(e+=` ${a.value.name},`),a.value.organizationParents&&(e+=` ${a.value.organizationParents},`),e&&e[0]===" "&&(e=e.slice(1,e.length-1)),e&&e[e.length-1]===","&&(e=e.slice(0,e.length-1)),_.common.emptyResult.replace("{0}",`<strong>${e}</strong>`)}),R=e=>{if(Array.isArray(e)){let t=[];for(let i in e)e[i]==="organization"&&t.push(_.label.organization),e[i]==="service"&&t.push(_.label.service),e[i]==="pointofcare"&&t.push(_.label.pointOfCare);return t.join(", ")}return e==="Organização"||e==="organization"?_.label.organization:e==="service"?_.label.service:e==="pointofcare"?_.label.pointOfCare:e},K=j(()=>_.common.totalRecords.replace("{0}",`<strong>${w.value}</strong>`)),q=async()=>{if(F.value=!1,!a.value.query&&!a.value.abreviation&&!a.value.organizationParents&&!a.value.index&&!a.value.name){ue.warning(_.backoffice.home.requiredFilter);return}E.value=0,r.setFilterModel(a.value),I.value=[],await L(),F.value=!1},L=async()=>{S.value=!0,u.value=!0,a.value.pageNumber=E.value;let e=await N.search(a.value);e.code!==0&&await B(),c.validateResponse(e,null,()=>{I.value.push(...G(e.data.items)),E.value++,w.value=e.data.total,x.value=Math.ceil(e.data.total/a.value.pageSize),r.setItems(I.value),r.setPageCount(x.value),r.setPage(E.value),C.value=!0}),u.value=!1};$(async()=>{F.value=!1;let e=await N.getFilters();c.validateResponse(e,null,()=>{r.setObjectTypes(e.data.types.map(t=>({title:_.label[t],index:t}))),r.setOrganizationParents(e.data.organizations.map(t=>({organizationParent:t})))}),v.hash==="#history"&&(u.value=!0,r.filterModel.query&&(I.value.push(...r.items),E.value=r.page,x.value=r.pageCount,a.value=r.filterModel,C.value=!0,F.value=!0,u.value=!1))});const B=async()=>{a.value.query=null,a.value.pageNumber=0,a.value.name=null,a.value.abreviation=null,a.value.organizationParents=null,a.value.index=null,C.value=!1};function U(e){let t="",i={};switch(e.index){case"organization":t=V.router.BACKOFFICE_SEARCH_DETAIL_ENTITY_PAGE.name,i={organizationId:c.encodeId(e.id),organizationVersion:c.encodeId(e.version)};break;case"pointofcare":t=V.router.BACKOFFICE_SEARCH_DETAIL_POINT_OF_CARE_PAGE.name,i={pointOfCareId:c.encodeId(e.id),pointOfCareVersion:c.encodeId(e.version)};break;case"service":t=V.router.BACKOFFICE_SEARCH_DETAIL_SERVICE_PAGE.name,i={serviceId:c.encodeId(e.id),serviceVersion:c.encodeId(e.version)};break;case"location":t=V.router.BACKOFFICE_SEARCH_DETAIL_LOCATION_PAGE.name,i={locationId:c.encodeId(e.id),locationVersion:c.encodeId(e.version)};break;case"document":t=V.router.BACKOFFICE_SEARCH_DETAIL_DOCUMENT_PAGE.name,i={documentId:c.encodeId(e.id),documentVersion:c.encodeId(e.version)};break}m.push({name:t,params:i})}function G(e){return e.map(t=>({id:t.id,version:t.version,title:t.pt.type,name:t.pt.name,organizationParent:t.organizationParent,address:t.address,date:c.formatDate(t.startDate),index:t.index,economicActivity:t.economicActivity,category:t.category,type:t.type}))}async function Y(){E.value<x.value&&await L()}return oe(()=>[a.value.query,a.value.abreviation,a.value.index,a.value.name,a.value.organizationParents],()=>{S.value=!1}),(e,t)=>{const i=k("row"),T=k("form-field"),J=k("icon-search"),Q=k("spinner"),W=k("card");return b(),O(W,{shadow:!0,class:"card-home",padding:!1},{body:f(()=>[o("div",_e,[p(i,null,{default:f(()=>[be]),_:1}),p(i,{class:"mt-5 mb-3"},{default:f(()=>[o("div",ge,[p(T,{id:"query",label:"Pesquisar",modelValue:n(a).query,"onUpdate:modelValue":t[0]||(t[0]=l=>n(a).query=l),placeholder:e._lang.backoffice.home.placeholderSearch,onKeyup:re(q,["enter"]),type:n(z).inputs.search,disabled:n(u)},null,8,["modelValue","placeholder","onKeyup","type","disabled"])])]),_:1}),p(i,null,{default:f(()=>[p(T,{id:"abreviation",class:"mb-3 col-12 col-md-6",label:e._lang.label.abreviation,type:n(z).inputs.text,maxlength:45,modelValue:n(a).abreviation,"onUpdate:modelValue":t[1]||(t[1]=l=>n(a).abreviation=l),disabled:n(u)},null,8,["label","type","modelValue","disabled"]),p(T,{id:"types",class:"mb-3 col-12 col-md-6",modelValue:n(a).index,"onUpdate:modelValue":t[2]||(t[2]=l=>n(a).index=l),label:e._lang.label.type,disabled:n(u),type:n(z).inputs.multiselect,mode:n(z).multiselectMode.tags,options:n(r).objectTypes},null,8,["modelValue","label","disabled","type","mode","options"])]),_:1}),p(i,null,{default:f(()=>[p(T,{id:"name",class:"mb-3 col-12 col-md-6",label:e._lang.label.name,type:n(z).inputs.text,maxlength:45,modelValue:n(a).name,"onUpdate:modelValue":t[3]||(t[3]=l=>n(a).name=l),disabled:n(u)},null,8,["label","type","modelValue","disabled"]),p(T,{id:"organizationParents",class:"mb-3 col-12 col-md-6",modelValue:n(a).organizationParents,"onUpdate:modelValue":t[4]||(t[4]=l=>n(a).organizationParents=l),label:e._lang.label.parentOrganization,disabled:n(u),type:n(z).inputs.multiselect,mode:n(z).multiselectMode.tags,options:n(r).organizationParents},null,8,["modelValue","label","disabled","type","mode","options"])]),_:1}),p(i,{class:"mt-2 pb-3"},{default:f(()=>[o("div",fe,[o("button",{class:"btn btn-secondary medium mb-3 me-3",type:"button",onClick:B,disabled:n(u)},d(e._lang.common.clear),9,me),o("button",{class:"btn btn-primary medium mb-3",type:"button",onClick:q,disabled:n(u)},[p(J,{color:"#FFF"}),h(" "+d(e._lang.common.search),1)],8,he)])]),_:1})]),n(C)?(b(),O(i,{key:0,class:"px-5"},{default:f(()=>[o("div",ye,[n(I).length?(b(),y(M,{key:0},[p(i,null,{default:f(()=>[o("div",{class:"mt-3",innerHTML:n(K)},null,8,Ce)]),_:1}),o("div",Ie,[o("ul",null,[(b(!0),y(M,null,ie(n(I),l=>(b(),y("li",{class:"infinite-scroll-item p-hand",onClick:Le=>U(l)},[o("h4",Pe,d(R(l.title)),1),o("p",Ae,[o("i",null,d(l.organizationParent),1),h(", "),o("strong",null,d(l.name),1)]),l.address?(b(),y("p",Ee,[h(d(l.address.zipCode)+" - "+d(l.address.island)+" ",1),ke,h(" "+d(l.address.county)+", "+d(l.address.parish)+", "+d(l.address.location)+" ",1),Te,h(" "+d(l.address.address),1)])):P("",!0),l.index==="service"?(b(),y(M,{key:1},[l.category?(b(),y("p",Ve,[h(d(l.type)+" ",1),Fe,h(" "+d(l.category)+" ",1),xe,h(" "+d(l.economicActivity)+" ",1),Oe])):P("",!0)],64)):P("",!0),o("p",Se,d(e._lang.label.startDate)+": "+d(l.date),1),Me],8,ze))),256))]),p(ve,{onIntersect:Y})])],64)):P("",!0),!n(I).length&&n(S)?(b(),y("div",{key:1,class:"mt-4 pb-4",innerHTML:n(H)},null,8,we)):P("",!0)])]),_:1})):P("",!0),p(i,null,{default:f(()=>[n(u)?(b(),O(Q,{key:0,class:"mt-2 mb-2"})):P("",!0)]),_:1})]),_:1})}}},qe=ee(Re,[["__scopeId","data-v-bc4d8509"]]),De={__name:"index",setup(s){return(v,m)=>{const r=k("page");return b(),O(r,{title:v._lang.backoffice.home.pageTitle},{default:f(()=>[p(qe)]),_:1},8,["title"])}}};export{De as default};