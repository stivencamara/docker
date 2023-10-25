import{a2 as oe,r as E,L as ie,w,J as k,j as F,a3 as ce,k as h,s as g,a4 as de,a5 as $e,a6 as z,a7 as B,a8 as M}from"./index-957232d9.js";function W(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Object.keys(t).reduce((n,e)=>(s.includes(e)||(n[e]=g(t[e])),n),{})}function b(t){return typeof t=="function"}function ve(t){return de(t)||$e(t)}function Q(t,s,n){let e=t;const a=s.split(".");for(let l=0;l<a.length;l++){if(!e[a[l]])return n;e=e[a[l]]}return e}function T(t,s,n){return h(()=>t.some(e=>Q(s,e,{[n]:!1})[n]))}function H(t,s,n){return h(()=>t.reduce((e,a)=>{const l=Q(s,a,{[n]:!1})[n]||[];return e.concat(l)},[]))}function X(t,s,n,e){return t.call(e,g(s),g(n),e)}function Y(t){return t.$valid!==void 0?!t.$valid:!t}function fe(t,s,n,e,a,l,m){let{$lazy:u,$rewardEarly:v}=a,i=arguments.length>7&&arguments[7]!==void 0?arguments[7]:[],c=arguments.length>8?arguments[8]:void 0,$=arguments.length>9?arguments[9]:void 0,p=arguments.length>10?arguments[10]:void 0;const f=E(!!e.value),r=E(0);n.value=!1;const d=w([s,e].concat(i,p),()=>{if(u&&!e.value||v&&!$.value&&!n.value)return;let o;try{o=X(t,s,c,m)}catch(y){o=Promise.reject(y)}r.value++,n.value=!!r.value,f.value=!1,Promise.resolve(o).then(y=>{r.value--,n.value=!!r.value,l.value=y,f.value=Y(y)}).catch(y=>{r.value--,n.value=!!r.value,l.value=y,f.value=!0})},{immediate:!0,deep:typeof s=="object"});return{$invalid:f,$unwatch:d}}function ge(t,s,n,e,a,l,m,u){let{$lazy:v,$rewardEarly:i}=e;const c=()=>({}),$=h(()=>{if(v&&!n.value||i&&!u.value)return!1;let p=!0;try{const f=X(t,s,m,l);a.value=f,p=Y(f)}catch(f){a.value=f}return p});return{$unwatch:c,$invalid:$}}function me(t,s,n,e,a,l,m,u,v,i,c){const $=E(!1),p=t.$params||{},f=E(null);let r,d;t.$async?{$invalid:r,$unwatch:d}=fe(t.$validator,s,$,n,e,f,a,t.$watchTargets,v,i,c):{$invalid:r,$unwatch:d}=ge(t.$validator,s,n,e,f,a,v,i);const o=t.$message;return{$message:b(o)?h(()=>o(W({$pending:$,$invalid:r,$params:W(p),$model:s,$response:f,$validator:l,$propertyPath:u,$property:m}))):o||"",$params:p,$pending:$,$invalid:r,$response:f,$unwatch:d}}function he(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const s=g(t),n=Object.keys(s),e={},a={},l={};let m=null;return n.forEach(u=>{const v=s[u];switch(!0){case b(v.$validator):e[u]=v;break;case b(v):e[u]={$validator:v};break;case u==="$validationGroups":m=v;break;case u.startsWith("$"):l[u]=v;break;default:a[u]=v}}),{rules:e,nestedValidators:a,config:l,validationGroups:m}}function pe(){}const Re="__root";function Z(t,s,n){if(n)return s?s(t()):t();try{var e=Promise.resolve(t());return s?e.then(s):e}catch(a){return Promise.reject(a)}}function ye(t,s){return Z(t,pe,s)}function Ee(t,s){var n=t();return n&&n.then?n.then(s):s(n)}function Ce(t){return function(){for(var s=[],n=0;n<arguments.length;n++)s[n]=arguments[n];try{return Promise.resolve(t.apply(this,s))}catch(e){return Promise.reject(e)}}}function Oe(t,s,n,e,a,l,m,u,v){const i=Object.keys(t),c=e.get(a,t),$=E(!1),p=E(!1),f=E(0);if(c){if(!c.$partial)return c;c.$unwatch(),$.value=c.$dirty.value}const r={$dirty:$,$path:a,$touch:()=>{$.value||($.value=!0)},$reset:()=>{$.value&&($.value=!1)},$commit:()=>{}};return i.length?(i.forEach(d=>{r[d]=me(t[d],s,r.$dirty,l,m,d,n,a,v,p,f)}),r.$externalResults=h(()=>u.value?[].concat(u.value).map((d,o)=>({$propertyPath:a,$property:n,$validator:"$externalResults",$uid:`${a}-externalResult-${o}`,$message:d,$params:{},$response:null,$pending:!1})):[]),r.$invalid=h(()=>{const d=i.some(o=>g(r[o].$invalid));return p.value=d,!!r.$externalResults.value.length||d}),r.$pending=h(()=>i.some(d=>g(r[d].$pending))),r.$error=h(()=>r.$dirty.value?r.$pending.value||r.$invalid.value:!1),r.$silentErrors=h(()=>i.filter(d=>g(r[d].$invalid)).map(d=>{const o=r[d];return F({$propertyPath:a,$property:n,$validator:d,$uid:`${a}-${d}`,$message:o.$message,$params:o.$params,$response:o.$response,$pending:o.$pending})}).concat(r.$externalResults.value)),r.$errors=h(()=>r.$dirty.value?r.$silentErrors.value:[]),r.$unwatch=()=>i.forEach(d=>{r[d].$unwatch()}),r.$commit=()=>{p.value=!0,f.value=Date.now()},e.set(a,t,r),r):(c&&e.set(a,t,r),r)}function je(t,s,n,e,a,l,m){const u=Object.keys(t);return u.length?u.reduce((v,i)=>(v[i]=A({validations:t[i],state:s,key:i,parentKey:n,resultsCache:e,globalConfig:a,instance:l,externalResults:m}),v),{}):{}}function _e(t,s,n){const e=h(()=>[s,n].filter(r=>r).reduce((r,d)=>r.concat(Object.values(g(d))),[])),a=h({get(){return t.$dirty.value||(e.value.length?e.value.every(r=>r.$dirty):!1)},set(r){t.$dirty.value=r}}),l=h(()=>{const r=g(t.$silentErrors)||[],d=e.value.filter(o=>(g(o).$silentErrors||[]).length).reduce((o,y)=>o.concat(...y.$silentErrors),[]);return r.concat(d)}),m=h(()=>{const r=g(t.$errors)||[],d=e.value.filter(o=>(g(o).$errors||[]).length).reduce((o,y)=>o.concat(...y.$errors),[]);return r.concat(d)}),u=h(()=>e.value.some(r=>r.$invalid)||g(t.$invalid)||!1),v=h(()=>e.value.some(r=>g(r.$pending))||g(t.$pending)||!1),i=h(()=>e.value.some(r=>r.$dirty)||e.value.some(r=>r.$anyDirty)||a.value),c=h(()=>a.value?v.value||u.value:!1),$=()=>{t.$touch(),e.value.forEach(r=>{r.$touch()})},p=()=>{t.$commit(),e.value.forEach(r=>{r.$commit()})},f=()=>{t.$reset(),e.value.forEach(r=>{r.$reset()})};return e.value.length&&e.value.every(r=>r.$dirty)&&$(),{$dirty:a,$errors:m,$invalid:u,$anyDirty:i,$error:c,$pending:v,$touch:$,$reset:f,$silentErrors:l,$commit:p}}function A(t){const s=Ce(function(){return I(),Ee(function(){if(o.$rewardEarly)return D(),ye(M)},function(){return Z(M,function(){return new Promise(R=>{if(!L.value)return R(!x.value);const j=w(L,()=>{R(!x.value),j()})})})})});let{validations:n,state:e,key:a,parentKey:l,childResults:m,resultsCache:u,globalConfig:v={},instance:i,externalResults:c}=t;const $=l?`${l}.${a}`:a,{rules:p,nestedValidators:f,config:r,validationGroups:d}=he(n),o=Object.assign({},v,r),y=a?h(()=>{const R=g(e);return R?g(R[a]):void 0}):e,_=Object.assign({},g(c)||{}),N=h(()=>{const R=g(c);return a?R?g(R[a]):void 0:R}),S=Oe(p,y,a,u,$,o,i,N,e),O=je(f,y,$,u,o,i,N),G={};d&&Object.entries(d).forEach(R=>{let[j,C]=R;G[j]={$invalid:T(C,O,"$invalid"),$error:T(C,O,"$error"),$pending:T(C,O,"$pending"),$errors:H(C,O,"$errors"),$silentErrors:H(C,O,"$silentErrors")}});const{$dirty:V,$errors:ee,$invalid:x,$anyDirty:te,$error:ne,$pending:L,$touch:I,$reset:re,$silentErrors:ae,$commit:D}=_e(S,O,m),se=a?h({get:()=>g(y),set:R=>{V.value=!0;const j=g(e),C=g(c);C&&(C[a]=_[a]),k(j[a])?j[a].value=R:j[a]=R}}):null;a&&o.$autoDirty&&w(y,()=>{V.value||I();const R=g(c);R&&(R[a]=_[a])},{flush:"sync"});function le(R){return(m.value||{})[R]}function ue(){k(c)?c.value=_:Object.keys(_).length===0?Object.keys(c).forEach(R=>{delete c[R]}):Object.assign(c,_)}return F(Object.assign({},S,{$model:se,$dirty:V,$error:ne,$errors:ee,$invalid:x,$anyDirty:te,$pending:L,$touch:I,$reset:re,$path:$||Re,$silentErrors:ae,$validate:s,$commit:D},m&&{$getResultsForChild:le,$clearExternalResults:ue,$validationGroups:G},O))}class we{constructor(){this.storage=new Map}set(s,n,e){this.storage.set(s,{rules:n,result:e})}checkRulesValidity(s,n,e){const a=Object.keys(e),l=Object.keys(n);return l.length!==a.length||!l.every(u=>a.includes(u))?!1:l.every(u=>n[u].$params?Object.keys(n[u].$params).every(v=>g(e[u].$params[v])===g(n[u].$params[v])):!0)}get(s,n){const e=this.storage.get(s);if(!e)return;const{rules:a,result:l}=e,m=this.checkRulesValidity(s,n,a),u=l.$unwatch?l.$unwatch:()=>({});return m?l:{$dirty:l.$dirty,$partial:!0,$unwatch:u}}}const P={COLLECT_ALL:!0,COLLECT_NONE:!1},J=Symbol("vuelidate#injectChildResults"),U=Symbol("vuelidate#removeChildResults");function Pe(t){let{$scope:s,instance:n}=t;const e={},a=E([]),l=h(()=>a.value.reduce((c,$)=>(c[$]=g(e[$]),c),{}));function m(c,$){let{$registerAs:p,$scope:f,$stopPropagation:r}=$;r||s===P.COLLECT_NONE||f===P.COLLECT_NONE||s!==P.COLLECT_ALL&&s!==f||(e[p]=c,a.value.push(p))}n.__vuelidateInjectInstances=[].concat(n.__vuelidateInjectInstances||[],m);function u(c){a.value=a.value.filter($=>$!==c),delete e[c]}n.__vuelidateRemoveInstances=[].concat(n.__vuelidateRemoveInstances||[],u);const v=z(J,[]);B(J,n.__vuelidateInjectInstances);const i=z(U,[]);return B(U,n.__vuelidateRemoveInstances),{childResults:l,sendValidationResultsToParent:v,removeValidationResultsFromParent:i}}function K(t){return new Proxy(t,{get(s,n){return typeof s[n]=="object"?K(s[n]):h(()=>s[n])}})}let q=0;function Ve(t,s){var n;let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};arguments.length===1&&(e=t,t=void 0,s=void 0);let{$registerAs:a,$scope:l=P.COLLECT_ALL,$stopPropagation:m,$externalResults:u,currentVueInstance:v}=e;const i=v||((n=oe())===null||n===void 0?void 0:n.proxy),c=i?i.$options:{};a||(q+=1,a=`_vuelidate_${q}`);const $=E({}),p=new we,{childResults:f,sendValidationResultsToParent:r,removeValidationResultsFromParent:d}=i?Pe({$scope:l,instance:i}):{childResults:E({})};if(!t&&c.validations){const o=c.validations;s=E({}),ie(()=>{s.value=i,w(()=>b(o)?o.call(s.value,new K(s.value)):o,y=>{$.value=A({validations:y,state:s,childResults:f,resultsCache:p,globalConfig:e,instance:i,externalResults:u||i.vuelidateExternalResults})},{immediate:!0})}),e=c.validationsConfig||e}else{const o=k(t)||ve(t)?t:F(t||{});w(o,y=>{$.value=A({validations:y,state:s,childResults:f,resultsCache:p,globalConfig:e,instance:i??{},externalResults:u})},{immediate:!0})}return i&&(r.forEach(o=>o($,{$registerAs:a,$scope:l,$stopPropagation:m})),ce(()=>d.forEach(o=>o(a)))),h(()=>Object.assign({},g($.value),f.value))}export{Ve as u};
