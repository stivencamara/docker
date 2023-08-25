import{s as e,i as l,u as d}from"./index-074485c3.js";import{c as u,r as b,a as y,e as h}from"./index.esm-da08cc71.js";const T=[{value:e.recordStateType.approval,class:e.badgeType.primary},{value:e.recordStateType.archived,class:e.badgeType.light},{value:e.recordStateType.draft,class:e.badgeType.info},{value:e.recordStateType.obsolete,class:e.badgeType.secondary},{value:e.recordStateType.returned,class:e.badgeType.danger},{value:e.recordStateType.notApplicable,class:e.badgeType.danger},{value:e.recordStateType.published,class:e.badgeType.success},{value:e.recordStateType.submitted,class:e.badgeType.warning}],m={recordStateTypeBadgeOptions:T,contactsFormRules(){return{contactScopeId:{required:this.requiredMessage()},contactTypeId:{required:this.requiredMessage()},contactValue:{required:this.requiredMessage()}}},forEachByName(r){return u.forEach({[r]:{requiredIfFunction:this.requiredIfMessage()}})},forEachField(r,t=null){let c={};t===null&&(t=e.language.pt);for(let n in r)c[r[n]]={requiredIfFunction:this.requiredIfMessage(t)};return u.forEach(c)},forEachFieldEng(r,t=null){let c={};for(let n in r)c[r[n]]={requiredIfFunction:this.requiredMessage()};return u.forEach(c)},requiredMessage(){const r=l();return u.withMessage(r.common.requiredField,b)},requiredMessageWithDependency(r,t=null){const c=l();return u.withMessage(c.common.requiredField,y((n,a)=>{let s=r.split(".");if(s.length===1)return t?a[s[0]]!==t:a[s[0]];if(s.length===2)return t?a[s[0]][s[1]]!==t:a[s[0]][s[1]];if(s.length===3)return t?a[s[0]][s[1]][s[2]]!==t:a[s[0]][s[1]][s[2]]}))},emailMessage(){const r=l();return u.withMessage(r.common.emailField,h)},requiredIfMessage(r){const t=l();return u.withMessage(t.common.requiredField,y((c,n)=>this.checkIfIsRequired(c,n,r)))},checkIfIsRequired(r,t,c){return t.language===c},getFieldByLangAndName(r,t,c,n="texts"){let a=r[n].filter(s=>s.language===t);return a.length?a[0][c]:null},setFieldByLangAndName(r,t,c,n,a="texts"){r[a].forEach(s=>{s.language===t&&(s[c]=n)})},getLabel(r,t){const c=r.find(n=>n.value===t);return c?c.label:null},calculatePercentage(r,t,c){let n=0;for(let o in t)n=s(n,t[o]);const a=Math.round(n*100/t.length);c(a);function s(o,f){const i=p(r,f);return i==null?o:i?o+1:o}function p(o,f){const i=f.split(".");let g=null;return i.length===1?o[i[0]]:i.length===2?o[i[0]][i[1]]:i.length===3?(i[0]==="texts"&&d.sortArrayOffline("language desc",o.texts),o[i[0]][i[1]][i[2]]):g}},getAddressRules(){return{address:{zipCode:{required:this.requiredMessage()},islandId:{required:this.requiredMessage()},countyId:{required:this.requiredMessage()},parishId:{required:this.requiredMessage()},locality:{required:this.requiredMessage()},address:{required:this.requiredMessage()}}}},getMessage(r,t,c){const a=`${this.getObject(c)}Success`;switch(t){case e.recordStateType.archived:return r.backoffice.tasks.archived[a];case e.recordStateType.submitted:return r.backoffice.tasks.submitted[a];case e.recordStateType.draft:return r.backoffice.tasks.draft[a];case e.recordStateType.approval:return r.backoffice.tasks.approval[a];case e.recordStateType.published:return r.backoffice.tasks.published[a];case e.recordStateType.returned:return r.backoffice.tasks.returned[a];case e.recordStateType.obsolete:return r.backoffice.tasks.obsolete[a];default:return null}},getObject(r){switch(r){case e.objectType.organization:return d.getPropertyNameByValue(e.objectType,e.objectType.organization);case e.objectType.pointOfCare:return d.getPropertyNameByValue(e.objectType,e.objectType.pointOfCare);case e.objectType.service:return d.getPropertyNameByValue(e.objectType,e.objectType.service);case e.objectType.document:return d.getPropertyNameByValue(e.objectType,e.objectType.document);default:return null}},getObjecTypeId(r){const t=["organizationId","serviceId","pointOfCareId","locationId","documentId"];for(const n in t){let a=c(t[n]);if(a!==e.objectType.notApplicable)return a}return e.objectType.notApplicable;function c(n){const s=Object.keys(r).find(p=>p===n);if(s)switch(s){case"organizationId":return e.objectType.organization;case"serviceId":return e.objectType.service;case"pointOfCareId":return e.objectType.pointOfCare;case"locationId":return e.objectType.location;case"documentId":return e.objectType.document}return e.objectType.notApplicable}}};export{m as b};
