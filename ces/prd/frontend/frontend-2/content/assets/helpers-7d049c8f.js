import{v as e,i as d,u as l}from"./index-8f6572ec.js";import{c as u,r as b,s as h,a as f,e as T}from"./index.esm-4a513849.js";const q=[{value:e.recordStateType.approval,class:e.badgeType.primary},{value:e.recordStateType.archived,class:e.badgeType.light},{value:e.recordStateType.draft,class:e.badgeType.info},{value:e.recordStateType.obsolete,class:e.badgeType.secondary},{value:e.recordStateType.extinct,class:e.badgeType.secondary},{value:e.recordStateType.returned,class:e.badgeType.danger},{value:e.recordStateType.notApplicable,class:e.badgeType.danger},{value:e.recordStateType.published,class:e.badgeType.success},{value:e.recordStateType.submitted,class:e.badgeType.warning}],m=[{value:e.userStatusOptions.active,class:e.badgeType.primary},{value:e.userStatusOptions.blocked,class:e.badgeType.warning},{value:e.userStatusOptions.deleted,class:e.badgeType.danger},{value:e.userStatusOptions.inactive,class:e.badgeType.danger}],k={recordStateTypeBadgeOptions:q,userStatusBadgeOptions:m,contactsFormRules(){return{contactScopeId:{required:this.requiredMessage()},contactTypeId:{required:this.requiredMessage()},contactValue:{required:this.requiredMessage()}}},forEachByName(r){return u.forEach({[r]:{requiredIfFunction:this.requiredIfMessage()}})},forEachField(r,a=null){let n={};a===null&&(a=e.language.pt);for(let i in r)n[r[i]]={requiredIfFunction:this.requiredIfMessage(a)};return u.forEach(n)},forEachFieldEng(r,a=null){let n={};for(let i in r)n[r[i]]={requiredIfFunction:this.requiredMessage()};return u.forEach(n)},requiredMessage(){const r=d();return u.withMessage(r.common.requiredField,b)},sameAs(r,a){const n=d();return u.withMessage(n.common.sameAsField.replace("{0}",n.label[a]),h(r))},requiredMessageWithDependency(r,a=null){const n=d();return u.withMessage(n.common.requiredField,f((i,s)=>{let t=r.split(".");if(t.length===1)return a?s[t[0]]!==a:s[t[0]];if(t.length===2)return a?s[t[0]][t[1]]!==a:s[t[0]][t[1]];if(t.length===3)return a?s[t[0]][t[1]][t[2]]!==a:s[t[0]][t[1]][t[2]]}))},requiredMessageWithDependencyArray(r,a=[]){const n=d();return u.withMessage(n.common.requiredField,f((i,s)=>{let t=r.split(".");if(t.length===1)return a.length?s[t[0]]:a.cotains(s[t[0]]);if(t.length===2)return a.length?s[t[0]][t[1]]:a.cotains(s[t[0]][t[1]]);if(t.length===3)return a.length?s[t[0]][t[1]][t[2]]:a.cotains(s[t[0]][t[1]][t[2]])}))},emailMessage(){const r=d();return u.withMessage(r.common.emailField,T)},requiredIfMessage(r){const a=d();return u.withMessage(a.common.requiredField,f((n,i)=>this.checkIfIsRequired(n,i,r)))},checkIfIsRequired(r,a,n){return a.language===n},getFieldByLangAndName(r,a,n,i="texts"){let s=r[i].filter(t=>t.language===a);return s.length?s[0][n]:null},setFieldByLangAndName(r,a,n,i,s="texts"){r[s].forEach(t=>{t.language===a&&(t[n]=i)})},getLabel(r,a){const n=r.find(s=>s.value===a),i=r.find(s=>{var t;return((t=s.value3)==null?void 0:t.id)===(a==null?void 0:a.id)});return n?n.label:i?i.label:null},calculatePercentage(r,a,n){let i=0;for(let o in a)i=t(i,a[o]);const s=Math.round(i*100/a.length);n(s);function t(o,g){const c=p(r,g);return c==null?o:c?o+1:o}function p(o,g){const c=g.split(".");let y=null;return c.length===1?o[c[0]]:c.length===2?o[c[0]][c[1]]:c.length===3?(c[0]==="texts"&&l.sortArrayOffline("language desc",o.texts),o[c[0]][c[1]][c[2]]):y}},getAddressRules(){return{address:{zipCode:{required:this.requiredMessage()},islandId:{required:this.requiredMessage()},countyId:{required:this.requiredMessage()},parishId:{required:this.requiredMessage()},locality:{required:this.requiredMessage()},address:{required:this.requiredMessage()}}}},getMessage(r,a,n){const s=`${this.getObject(n)}Success`;switch(a){case e.recordStateType.archived:return r.backoffice.tasks.archived[s];case e.recordStateType.submitted:return r.backoffice.tasks.submitted[s];case e.recordStateType.draft:return r.backoffice.tasks.draft[s];case e.recordStateType.approval:return r.backoffice.tasks.approval[s];case e.recordStateType.published:return r.backoffice.tasks.published[s];case e.recordStateType.returned:return r.backoffice.tasks.returned[s];case e.recordStateType.obsolete:return r.backoffice.tasks.obsolete[s];case e.recordStateType.extinct:return r.backoffice.tasks.extinct[s];default:return null}},getObject(r){switch(r){case e.objectType.organization:return l.getPropertyNameByValue(e.objectType,e.objectType.organization);case e.objectType.pointOfCare:return l.getPropertyNameByValue(e.objectType,e.objectType.pointOfCare);case e.objectType.service:return l.getPropertyNameByValue(e.objectType,e.objectType.service);case e.objectType.document:return l.getPropertyNameByValue(e.objectType,e.objectType.document);default:return null}},getObjecTypeId(r){const a=["organizationId","serviceId","pointOfCareId","locationId","documentId"];for(const i in a){let s=n(a[i]);if(s!==e.objectType.notApplicable)return s}return e.objectType.notApplicable;function n(i){const t=Object.keys(r).find(p=>p===i);if(t)switch(t){case"organizationId":return e.objectType.organization;case"serviceId":return e.objectType.service;case"pointOfCareId":return e.objectType.pointOfCare;case"locationId":return e.objectType.location;case"documentId":return e.objectType.document}return e.objectType.notApplicable}}};export{k as b};
