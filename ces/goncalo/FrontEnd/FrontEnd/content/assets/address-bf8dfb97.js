import{r as n,j as o,o as T,N as w,k as b,c as M,e as W,n as u,w as y,p as a,s as p,q,m as X,l as Y,F as Z}from"./index-f9e60098.js";const x={style:{height:"40vh",width:"100%"}},ae={__name:"address",props:{modelValue:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},validateForm:{type:Boolean,default:!1},rules:{type:Object,default:{}},store:{type:Object,required:!0},vuelidate:{type:Object,default:null},showMap:{type:Boolean,default:!0},canCreate:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(L,{expose:z,emit:$}){const l=L;n(null);const U=n(0),m=n(!0),v=n(null),d=o({get(){return l.modelValue},set(e){$("update:modelValue",e)}});let g=n([]),c=n([]),I=n(!1),h=n(!1);T(()=>{const e=l.modelValue.islandId,r=l.modelValue.countyId;e&&(g.value=V(e)),r&&(c.value=C(r))});const k=o(()=>{var e;return l.vuelidate?l.vuelidate.zipCode?l.vuelidate.zipCode.$error:(e=l.vuelidate.address)==null?void 0:e.zipCode.$error:!1}),B=o(()=>{var e;return l.vuelidate?l.vuelidate.islandId?l.vuelidate.islandId.$error:(e=l.vuelidate.address)==null?void 0:e.islandId.$error:!1}),E=o(()=>{var e;return l.vuelidate?l.vuelidate.countyId?l.vuelidate.countyId.$error:(e=l.vuelidate.address)==null?void 0:e.countyId.$error:!1}),K=o(()=>{var e;return l.vuelidate?l.vuelidate.parishId?l.vuelidate.parishId.$error:(e=l.vuelidate.address)==null?void 0:e.parishId.$error:!1}),O=o(()=>{var e;return l.vuelidate?l.vuelidate.locality?l.vuelidate.locality.$error:(e=l.vuelidate.address)==null?void 0:e.locality.$error:!1}),R=o(()=>{var e;return l.vuelidate?l.vuelidate.address.address?l.vuelidate.address.address.$error:(e=l.vuelidate.address)==null?void 0:e.$error:!1}),j=o(()=>{var e;return l.vuelidate?l.vuelidate.zipCode?l.vuelidate.zipCode:(e=l.vuelidate.address)==null?void 0:e.zipCode:null}),_=o(()=>{var e;return l.vuelidate?l.vuelidate.islandId?l.vuelidate.islandId:(e=l.vuelidate.address)==null?void 0:e.islandId:null}),N=o(()=>{var e;return l.vuelidate?l.vuelidate.countyId?l.vuelidate.countyId:(e=l.vuelidate.address)==null?void 0:e.countyId:null}),S=o(()=>{var e;return l.vuelidate?l.vuelidate.parishId?l.vuelidate.parishId:(e=l.vuelidate.address)==null?void 0:e.parishId:null}),P=o(()=>{var e;return l.vuelidate?l.vuelidate.locality?l.vuelidate.locality:(e=l.vuelidate.address)==null?void 0:e.locality:null}),A=o(()=>{var e;return l.vuelidate?l.vuelidate.address?l.vuelidate.address:(e=l.vuelidate.address)==null?void 0:e.address:null});w(()=>d.value.islandId,()=>{const e=d.value.islandId;(!d.value.islandId||I.value)&&(d.value.countyId=null,d.value.parishId=null),e?g.value=V(e):(g.value=[],c.value=[]),I.value=!0}),w(()=>d.value.countyId,()=>{const e=d.value.countyId;(!d.value.countyId||h.value)&&(d.value.parishId=null),e?c.value=C(e):c.value=[],h.value=!0});function V(e){var i;return(i=l.store.divisionList.find(s=>s.value===e))==null?void 0:i.children}function C(e){var s,f;const r=l.store.divisionList.find(t=>t.value===d.value.islandId);return(f=(s=r==null?void 0:r.children)==null?void 0:s.find(t=>t.value===e))==null?void 0:f.children}function D(e){d.value.latitude=e.y,d.value.longitude=e.x,v.value.updateMarker(e.y,e.x),v.value.recenterMap(e.y,e.x,30)}function G(e){e&&(d.value.latitude=e.lat.toString(),d.value.longitude=e.lng.toString())}function H(e){e&&(d.value.address=e)}function J(){m.value=!0}function Q(){m.value=!1}function F(){const e=d.value.latitude,r=d.value.longitude;v.value.recenterMap(e,r),v.value.updateMarker(e,r)}return z({updateMap:async(e=d.value.latitude,r=d.value.longitude)=>{v.value.recenterMap(e,r),v.value.updateMarker(e,r)}}),(e,r)=>{const i=b("form-field"),s=b("row"),f=b("cmap");return M(),W(Z,null,[u(s,null,{default:y(()=>[u(i,{id:"zipCode",class:"mb-3 col-12 col-md-6",modelValue:a(d).zipCode,"onUpdate:modelValue":r[0]||(r[0]=t=>a(d).zipCode=t),label:e._lang.label.zipCode,disabled:l.disabled,loading:l.loading,type:a(p).inputs.zipCode,maxlength:8,required:l.validateForm,"show-error":l.validateForm&&a(k),"error-message":e._errorMessageField(a(j))},null,8,["modelValue","label","disabled","loading","type","required","show-error","error-message"]),u(i,{id:"islandId",class:"mb-3 col-12 col-md-6",modelValue:a(d).islandId,"onUpdate:modelValue":r[1]||(r[1]=t=>a(d).islandId=t),label:e._lang.label.islandId,disabled:l.disabled,loading:l.loading,type:a(p).inputs.multiselect,options:l.store.divisionList,required:l.validateForm,"show-error":l.validateForm&&a(B),"error-message":e._errorMessageField(a(_))},null,8,["modelValue","label","disabled","loading","type","options","required","show-error","error-message"])]),_:1}),u(s,null,{default:y(()=>[u(i,{id:"countyId",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:a(d).countyId,"onUpdate:modelValue":r[2]||(r[2]=t=>a(d).countyId=t),label:e._lang.label.countyId,disabled:l.disabled||!a(d).islandId,loading:l.loading,type:a(p).inputs.multiselect,options:a(g),required:l.validateForm,"show-error":l.validateForm&&a(E),"error-message":e._errorMessageField(a(N))},null,8,["modelValue","label","disabled","loading","type","options","required","show-error","error-message"]),u(i,{id:"parishId",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:a(d).parishId,"onUpdate:modelValue":r[3]||(r[3]=t=>a(d).parishId=t),label:e._lang.label.parishId,disabled:l.disabled||!a(d).countyId,loading:l.loading,type:a(p).inputs.multiselect,options:a(c),required:l.validateForm,"show-error":l.validateForm&&a(K),"error-message":e._errorMessageField(a(S))},null,8,["modelValue","label","disabled","loading","type","options","required","show-error","error-message"]),u(i,{id:"locality",class:"mb-3 col-12 col-lg-4",modelValue:a(d).locality,"onUpdate:modelValue":r[4]||(r[4]=t=>a(d).locality=t),label:e._lang.label.locality,disabled:l.disabled,loading:l.loading,type:a(p).inputs.text,maxlength:45,required:l.validateForm,"show-error":l.validateForm&&a(O),"error-message":e._errorMessageField(a(P))},null,8,["modelValue","label","disabled","loading","type","required","show-error","error-message"])]),_:1}),u(s,null,{default:y(()=>[u(i,{id:"address",class:"mb-3 col-12",modelValue:a(d).address,"onUpdate:modelValue":r[5]||(r[5]=t=>a(d).address=t),label:e._lang.label.address,maxlength:255,disabled:l.disabled,loading:l.loading||m.value,type:a(p).inputs.geoSearch,required:l.validateForm,"show-error":l.validateForm&&a(R),"error-message":e._errorMessageField(a(A)),onLocationChoose:D},null,8,["modelValue","label","disabled","loading","type","required","show-error","error-message"])]),_:1}),u(s,null,{default:y(()=>[u(i,{id:"latitude",class:"mb-3 col-12 col-md-6",modelValue:a(d).latitude,"onUpdate:modelValue":r[6]||(r[6]=t=>a(d).latitude=t),label:e._lang.label.latitude,disabled:l.disabled,loading:l.loading||m.value,type:a(p).inputs.coordinate,maxlength:45,onKeyup:q(F,["enter"])},null,8,["modelValue","label","disabled","loading","type","onKeyup"]),u(i,{id:"longitude",class:"mb-3 col-12 col-md-6",modelValue:a(d).longitude,"onUpdate:modelValue":r[7]||(r[7]=t=>a(d).longitude=t),label:e._lang.label.longitude,disabled:l.disabled,loading:l.loading||m.value,type:a(p).inputs.coordinate,maxlength:45,onKeyup:q(F,["enter"])},null,8,["modelValue","label","disabled","loading","type","onKeyup"])]),_:1}),X("div",x,[(M(),Y(f,{disabled:l.disabled,ref_key:"map",ref:v,key:U.value,onUpdateCoordinates:G,onUpdateAddress:H,onMapLoading:J,onMapLoaded:Q,centerLat:a(d).latitude,centerLgn:a(d).longitude},null,8,["disabled","centerLat","centerLgn"]))])],64)}}};export{ae as _};
