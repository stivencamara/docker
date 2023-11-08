import{b as T,M as O,r as p,j as S,u,N as B,l as i,c as k,e as h,q as e,n as s,s as c,v as m,ah as x,F,L,m as N}from"./index-f1c6a491.js";import{o as D}from"./organization-34110ca4.js";const v={organization:f=>T.post("/report/organization",f),service:f=>T.post("/report/service",f)},P={__name:"service-by-organizations",setup(f){O();let n=p(!1);p([]);let o=S(r()),t=p(u.createEmptyDataSource());B(async()=>{await d()});function r(){return{organization:null,groupByOrganization:null,groupByCategory:null,filterOnline:null,export:!1}}async function d(){n.value=!0;let a=await v.service(o);u.validateResponse(a,null,async()=>{t.value.items=a.data,t.value.total=a.data.length}),n.value=!1}async function b(){n.value=!0,o.export=!0;let a=await v.service(o);u.validateResponse(a,null,async()=>{u.downloadFile(a.data)}),o.export=!1,n.value=!1}return(a,C)=>{const y=i("icon-import"),l=i("cbutton-options"),g=i("table-actions"),_=i("ccolumn"),z=i("ctable");return k(),h(F,null,[e(g,{title:a._lang.common.tableActionTitle},{default:s(()=>[e(l,{type:c(m).buttonType.secondary},{default:s(()=>[e(x,{title:a._lang.common.export,onClick:b},{default:s(()=>[e(y,{color:"#002D74"})]),_:1},8,["title"])]),_:1},8,["type"])]),_:1},8,["title"]),e(z,{data:c(t),checkbox:!1,showPagination:!1,loading:c(n),defaultSort:"OrganizationId",checkboxField:"organizationId"},{columns:s(()=>[e(_,{name:a._lang.label.organizationName,field:"organizationName",sortable:!1},null,8,["name"]),e(_,{name:a._lang.label.servicesCount,field:"servicesCount",sortable:!1},null,8,["name"])]),_:1},8,["data","loading"])],64)}}},I={__name:"online-services",setup(f){O();let n=p(!1);p([]);let o=S(r()),t=p(u.createEmptyDataSource());B(async()=>{await d()});function r(){return{organization:null,groupByOrganization:null,groupByCategory:null,filterOnline:!0,export:!1}}async function d(){n.value=!0;let a=await v.service(o);u.validateResponse(a,null,async()=>{t.value.items=a.data,t.value.total=a.data.length}),n.value=!1}async function b(){n.value=!0,o.export=!0;let a=await v.service(o);u.validateResponse(a,null,async()=>{u.downloadFile(a.data)}),o.export=!1,n.value=!1}return(a,C)=>{const y=i("icon-import"),l=i("cbutton-options"),g=i("table-actions"),_=i("ccolumn"),z=i("ctable");return k(),h(F,null,[e(g,{title:a._lang.common.tableActionTitle},{default:s(()=>[e(l,{type:c(m).buttonType.secondary},{default:s(()=>[e(x,{title:a._lang.common.export,onClick:b},{default:s(()=>[e(y,{color:"#002D74"})]),_:1},8,["title"])]),_:1},8,["type"])]),_:1},8,["title"]),e(z,{data:c(t),checkbox:!1,showPagination:!1,loading:c(n),defaultSort:"OrganizationId",checkboxField:"organizationId"},{columns:s(()=>[e(_,{name:a._lang.label.organizationName,field:"organizationName",sortable:!1},null,8,["name"]),e(_,{name:a._lang.label.servicesCount,field:"servicesCount",sortable:!1},null,8,["name"])]),_:1},8,["data","loading"])],64)}}},A={__name:"gov-total-organizations",setup(f){const n=O();let o=p(!1),t=p(0),r=S(b()),d=p([]);B(async()=>{await y()});function b(){return{organization:null,groupByOrganization:null,groupByCategory:null,filterOnline:!0,export:!1}}async function a(){if(r.organization==null){t.value=0;return}o.value=!0;let l=await v.organization(r);u.validateResponse(l,null,async()=>{t.value=l.data}),o.value=!1}async function C(){if(r.organization==null){t.value=0;return}o.value=!0,r.export=!0;let l=await v.organization(r);u.validateResponse(l,null,async()=>{u.downloadFile(l.data)}),r.export=!1,o.value=!1}async function y(){o.value=!0;const l=await D.getLists(n.getLanguage);u.validateResponse(l,null,()=>{d.value=l.data.organizationList,r.organization=l.data.organizationList[0].value3,a()}),o.value=!1}return(l,g)=>{const _=i("form-field"),z=i("row"),M=i("icon-import"),R=i("cbutton-options"),V=i("table-actions");return k(),h(F,null,[e(z,null,{default:s(()=>[e(_,{class:"mb-3 col-12",modelValue:c(r).organization,"onUpdate:modelValue":g[0]||(g[0]=w=>c(r).organization=w),label:l._lang.label.organization,type:c(m).inputs.multiselect,options:c(d),disabled:c(o),valueProp:c(m).multiselectValueProp.value3,onOnChange:a},null,8,["modelValue","label","type","options","disabled","valueProp"])]),_:1}),e(V,{title:l._lang.common.tableActionTitle},{default:s(()=>[e(R,{type:c(m).buttonType.secondary,disabled:c(r).organization==null},{default:s(()=>[e(x,{title:l._lang.common.export,onClick:C},{default:s(()=>[e(M,{color:"#002D74"})]),_:1},8,["title"])]),_:1},8,["type","disabled"])]),_:1},8,["title"]),e(_,{class:"mb-3 col-14",modelValue:c(t),"onUpdate:modelValue":g[1]||(g[1]=w=>L(t)?t.value=w:t=w),label:l._lang.backoffice.reports.govTotalOrganizations,type:c(m).inputs.text,disabled:!0},null,8,["modelValue","label","type"])],64)}}},U={__name:"index",setup(f){return(n,o)=>{const t=i("accordion"),r=i("card"),d=i("page");return k(),N(d,{title:n._lang.backoffice.reports.pageTitle},{default:s(()=>[e(r,{shadow:!0},{body:s(()=>[e(t,{id:"id",title:n._lang.backoffice.reports.serviceByOrganizations,collapsed:!1,class:"mb-4"},{default:s(()=>[e(P)]),_:1},8,["title"]),e(t,{id:"onlineServices",title:n._lang.backoffice.reports.onlineServices,collapsed:!1,class:"mb-4"},{default:s(()=>[e(I)]),_:1},8,["title"]),e(t,{id:"govTotalOrganizations",title:n._lang.backoffice.reports.govTotalOrganizations,collapsed:!1,class:"mb-4"},{default:s(()=>[e(A)]),_:1},8,["title"])]),_:1})]),_:1},8,["title"])}}};export{U as default};
