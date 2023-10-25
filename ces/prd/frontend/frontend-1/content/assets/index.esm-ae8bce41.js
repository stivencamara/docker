import{s as i}from"./index-80ba5b4e.js";function l(r){return typeof r=="function"}function w(r){return r!==null&&typeof r=="object"&&!Array.isArray(r)}function p(r){return l(r.$validator)?Object.assign({},r):{$validator:r}}function O(r){return typeof r=="object"?r.$valid:r}function V(r){return r.$validator||r}function T(r,t){if(!w(r))throw new Error(`[@vuelidate/validators]: First parameter to "withParams" should be an object, provided ${typeof r}`);if(!w(t)&&!l(t))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const e=p(t);return e.$params=Object.assign({},e.$params||{},r),e}function F(r,t){if(!l(r)&&typeof i(r)!="string")throw new Error(`[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided ${typeof r}`);if(!w(t)&&!l(t))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const e=p(t);return e.$message=r,e}function L(r){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];const e=p(r);return Object.assign({},e,{$async:!0,$watchTargets:t})}function M(r){return{$validator(t){for(var e=arguments.length,a=new Array(e>1?e-1:0),n=1;n<e;n++)a[n-1]=arguments[n];return i(t).reduce((d,j,E)=>{const h=Object.entries(j).reduce((u,N)=>{let[f,x]=N;const R=r[f]||{},b=Object.entries(R).reduce((s,S)=>{let[v,y]=S;const c=V(y).call(this,x,j,E,...a),m=O(c);if(s.$data[v]=c,s.$data.$invalid=!m||!!s.$data.$invalid,s.$data.$error=s.$data.$invalid,!m){let g=y.$message||"";const z=y.$params||{};typeof g=="function"&&(g=g({$pending:!1,$invalid:!m,$params:z,$model:x,$response:c})),s.$errors.push({$property:f,$message:g,$params:z,$response:c,$model:x,$pending:!1,$validator:v})}return{$valid:s.$valid&&m,$data:s.$data,$errors:s.$errors}},{$valid:!0,$data:{},$errors:[]});return u.$data[f]=b.$data,u.$errors[f]=b.$errors,{$valid:u.$valid&&b.$valid,$data:u.$data,$errors:u.$errors}},{$valid:!0,$data:{},$errors:{}});return{$valid:d.$valid&&h.$valid,$data:d.$data.concat(h.$data),$errors:d.$errors.concat(h.$errors)}},{$valid:!0,$data:[],$errors:[]})},$message:t=>{let{$response:e}=t;return e?e.$errors.map(a=>Object.values(a).map(n=>n.map(d=>d.$message)).reduce((n,d)=>n.concat(d),[])):[]}}}const $=r=>{if(r=i(r),Array.isArray(r))return!!r.length;if(r==null)return!1;if(r===!1)return!0;if(r instanceof Date)return!isNaN(r.getTime());if(typeof r=="object"){for(let t in r)return!0;return!1}return!!String(r).length},q=r=>(r=i(r),Array.isArray(r)?r.length:typeof r=="object"?Object.keys(r).length:String(r).length);function o(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];return a=>(a=i(a),!$(a)||t.every(n=>n.test(a)))}var K=Object.freeze({__proto__:null,withParams:T,withMessage:F,withAsync:L,forEach:M,req:$,len:q,regex:o,unwrap:i,unwrapNormalizedValidator:V,unwrapValidatorResponse:O,normalizeValidatorObject:p});o(/^[a-zA-Z]*$/);o(/^[a-zA-Z0-9]*$/);o(/^\d*(\.\d+)?$/);const P=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;var I=o(P),Q={$validator:I,$message:"Value is not a valid email address",$params:{type:"email"}};function Z(r){return t=>!$(t)||q(t)>=i(r)}function U(r){return{$validator:Z(r),$message:t=>{let{$params:e}=t;return`This field should be at least ${e.min} characters long`},$params:{min:r,type:"minLength"}}}function D(r){return typeof r=="string"&&(r=r.trim()),$(r)}var W={$validator:D,$message:"Value is required",$params:{type:"required"}};const A=(r,t)=>r?$(typeof t=="string"?t.trim():t):!0;function B(r){return function(t,e){if(typeof r!="function")return A(i(r),t);const a=r.call(this,t,e);return A(a,t)}}function X(r){return{$validator:B(r),$message:"The value is required",$params:{type:"requiredIf",prop:r}}}function C(r){return t=>i(t)===i(r)}function Y(r){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"other";return{$validator:C(r),$message:e=>`The value must be equal to the ${t} value`,$params:{equalTo:r,otherName:t,type:"sameAs"}}}const G=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;o(G);o(/(^[0-9]*$)|(^-[0-9]+$)/);o(/^[-]?\d*(\.\d+)?$/);export{X as a,K as c,Q as e,U as m,W as r,Y as s};
