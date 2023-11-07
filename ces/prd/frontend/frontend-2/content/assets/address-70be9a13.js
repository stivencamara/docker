import{r as n,k as u,o as T,w,l as b,c as M,e as W,q as s,n as y,s as t,v as p,t as q,p as X,m as Y,F as Z}from"./index-8f6572ec.js";const x={style:{height:"40vh",width:"100%"}},ae={__name:"address",props:{modelValue:{type:Object,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},validateForm:{type:Boolean,default:!1},rules:{type:Object,default:{}},store:{type:Object,required:!0},vuelidate:{type:Object,default:null},showMap:{type:Boolean,default:!0},canCreate:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(L,{expose:z,emit:$}){const l=L;n(null);const U=n(0),m=n(!0),v=n(null),o=u({get(){return l.modelValue},set(e){$("update:modelValue",e)}});let g=n([]),c=n([]),I=n(!1),h=n(!1);T(()=>{const e=l.modelValue.islandId,a=l.modelValue.countyId;e&&(g.value=V(e)),a&&(c.value=C(a))});const k=u(()=>{var e,a,d,r;return l.vuelidate?(e=l.vuelidate)!=null&&e.zipCode?(a=l.vuelidate)==null?void 0:a.zipCode.$error:(r=(d=l.vuelidate)==null?void 0:d.address)==null?void 0:r.zipCode.$error:!1}),B=u(()=>{var e,a,d,r;return l.vuelidate?(e=l.vuelidate)!=null&&e.islandId?(a=l.vuelidate)==null?void 0:a.islandId.$error:(r=(d=l.vuelidate)==null?void 0:d.address)==null?void 0:r.islandId.$error:!1}),E=u(()=>{var e,a,d,r;return l.vuelidate?(e=l.vuelidate)!=null&&e.countyId?(a=l.vuelidate)==null?void 0:a.countyId.$error:(r=(d=l.vuelidate)==null?void 0:d.address)==null?void 0:r.countyId.$error:!1}),K=u(()=>{var e,a,d,r;return l.vuelidate?(e=l.vuelidate)!=null&&e.parishId?(a=l.vuelidate)==null?void 0:a.parishId.$error:(r=(d=l.vuelidate)==null?void 0:d.address)==null?void 0:r.parishId.$error:!1}),O=u(()=>{var e,a,d,r;return l.vuelidate?(e=l.vuelidate)!=null&&e.locality?(a=l.vuelidate)==null?void 0:a.locality.$error:(r=(d=l.vuelidate)==null?void 0:d.address)==null?void 0:r.locality.$error:!1}),R=u(()=>{var e,a,d,r;return l.vuelidate?(e=l.vuelidate)!=null&&e.address.address?(a=l.vuelidate)==null?void 0:a.address.address.$error:(r=(d=l.vuelidate)==null?void 0:d.address)==null?void 0:r.$error:!1}),_=u(()=>{var e,a,d,r;return l.vuelidate?(e=l.vuelidate)!=null&&e.zipCode?(a=l.vuelidate)==null?void 0:a.zipCode:(r=(d=l.vuelidate)==null?void 0:d.address)==null?void 0:r.zipCode:null}),j=u(()=>{var e,a,d,r;return l.vuelidate?(e=l.vuelidate)!=null&&e.islandId?(a=l.vuelidate)==null?void 0:a.islandId:(r=(d=l.vuelidate)==null?void 0:d.address)==null?void 0:r.islandId:null}),S=u(()=>{var e,a,d,r;return l.vuelidate?(e=l.vuelidate)!=null&&e.countyId?(a=l.vuelidate)==null?void 0:a.countyId:(r=(d=l.vuelidate)==null?void 0:d.address)==null?void 0:r.countyId:null}),N=u(()=>{var e,a,d,r;return l.vuelidate?(e=l.vuelidate)!=null&&e.parishId?(a=l.vuelidate)==null?void 0:a.parishId:(r=(d=l.vuelidate)==null?void 0:d.address)==null?void 0:r.parishId:null}),P=u(()=>{var e,a,d,r;return l.vuelidate?(e=l.vuelidate)!=null&&e.locality?(a=l.vuelidate)==null?void 0:a.locality:(r=(d=l.vuelidate)==null?void 0:d.address)==null?void 0:r.locality:null}),A=u(()=>{var e,a,d,r;return l.vuelidate?(e=l.vuelidate)!=null&&e.address?(a=l.vuelidate)==null?void 0:a.address:(r=(d=l.vuelidate)==null?void 0:d.address)==null?void 0:r.address:null});w(()=>o.value.islandId,()=>{const e=o.value.islandId;(!o.value.islandId||I.value)&&(o.value.countyId=null,o.value.parishId=null),e?g.value=V(e):(g.value=[],c.value=[]),I.value=!0}),w(()=>o.value.countyId,()=>{const e=o.value.countyId;(!o.value.countyId||h.value)&&(o.value.parishId=null),e?c.value=C(e):c.value=[],h.value=!0});function V(e){var d;return(d=l.store.divisionList.find(r=>r.value===e))==null?void 0:d.children}function C(e){var r,f;const a=l.store.divisionList.find(i=>i.value===o.value.islandId);return(f=(r=a==null?void 0:a.children)==null?void 0:r.find(i=>i.value===e))==null?void 0:f.children}function D(e){o.value.latitude=e.y,o.value.longitude=e.x,v.value.updateMarker(e.y,e.x),v.value.recenterMap(e.y,e.x,30)}function G(e){e&&(o.value.latitude=e.lat.toString(),o.value.longitude=e.lng.toString())}function H(e){e&&(o.value.address=e)}function J(){m.value=!0}function Q(){m.value=!1}function F(){const e=o.value.latitude,a=o.value.longitude;v.value.recenterMap(e,a),v.value.updateMarker(e,a)}return z({updateMap:async(e=o.value.latitude,a=o.value.longitude)=>{v.value.recenterMap(e,a),v.value.updateMarker(e,a)}}),(e,a)=>{const d=b("form-field"),r=b("row"),f=b("cmap");return M(),W(Z,null,[s(r,null,{default:y(()=>[s(d,{id:"zipCode",class:"mb-3 col-12 col-md-6",modelValue:t(o).zipCode,"onUpdate:modelValue":a[0]||(a[0]=i=>t(o).zipCode=i),label:e._lang.label.zipCode,disabled:l.disabled,loading:l.loading,type:t(p).inputs.zipCode,maxlength:8,required:l.validateForm,"show-error":l.validateForm&&t(k),"error-message":e._errorMessageField(t(_))},null,8,["modelValue","label","disabled","loading","type","required","show-error","error-message"]),s(d,{id:"islandId",class:"mb-3 col-12 col-md-6",modelValue:t(o).islandId,"onUpdate:modelValue":a[1]||(a[1]=i=>t(o).islandId=i),label:e._lang.label.islandId,disabled:l.disabled,loading:l.loading,type:t(p).inputs.multiselect,options:l.store.divisionList,required:l.validateForm,"show-error":l.validateForm&&t(B),"error-message":e._errorMessageField(t(j))},null,8,["modelValue","label","disabled","loading","type","options","required","show-error","error-message"])]),_:1}),s(r,null,{default:y(()=>[s(d,{id:"countyId",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:t(o).countyId,"onUpdate:modelValue":a[2]||(a[2]=i=>t(o).countyId=i),label:e._lang.label.countyId,disabled:l.disabled||!t(o).islandId,loading:l.loading,type:t(p).inputs.multiselect,options:t(g),required:l.validateForm,"show-error":l.validateForm&&t(E),"error-message":e._errorMessageField(t(S))},null,8,["modelValue","label","disabled","loading","type","options","required","show-error","error-message"]),s(d,{id:"parishId",class:"mb-3 col-12 col-md-6 col-lg-4",modelValue:t(o).parishId,"onUpdate:modelValue":a[3]||(a[3]=i=>t(o).parishId=i),label:e._lang.label.parishId,disabled:l.disabled||!t(o).countyId,loading:l.loading,type:t(p).inputs.multiselect,options:t(c),required:l.validateForm,"show-error":l.validateForm&&t(K),"error-message":e._errorMessageField(t(N))},null,8,["modelValue","label","disabled","loading","type","options","required","show-error","error-message"]),s(d,{id:"locality",class:"mb-3 col-12 col-lg-4",modelValue:t(o).locality,"onUpdate:modelValue":a[4]||(a[4]=i=>t(o).locality=i),label:e._lang.label.locality,disabled:l.disabled,loading:l.loading,type:t(p).inputs.text,maxlength:45,required:l.validateForm,"show-error":l.validateForm&&t(O),"error-message":e._errorMessageField(t(P))},null,8,["modelValue","label","disabled","loading","type","required","show-error","error-message"])]),_:1}),s(r,null,{default:y(()=>[s(d,{id:"address",class:"mb-3 col-12",modelValue:t(o).address,"onUpdate:modelValue":a[5]||(a[5]=i=>t(o).address=i),label:e._lang.label.address,maxlength:255,disabled:l.disabled,loading:l.loading||m.value,type:t(p).inputs.geoSearch,required:l.validateForm,"show-error":l.validateForm&&t(R),"error-message":e._errorMessageField(t(A)),onLocationChoose:D},null,8,["modelValue","label","disabled","loading","type","required","show-error","error-message"])]),_:1}),s(r,null,{default:y(()=>[s(d,{id:"latitude",class:"mb-3 col-12 col-md-6",modelValue:t(o).latitude,"onUpdate:modelValue":a[6]||(a[6]=i=>t(o).latitude=i),label:e._lang.label.latitude,disabled:l.disabled,loading:l.loading||m.value,type:t(p).inputs.coordinate,maxlength:45,onKeyup:q(F,["enter"])},null,8,["modelValue","label","disabled","loading","type","onKeyup"]),s(d,{id:"longitude",class:"mb-3 col-12 col-md-6",modelValue:t(o).longitude,"onUpdate:modelValue":a[7]||(a[7]=i=>t(o).longitude=i),label:e._lang.label.longitude,disabled:l.disabled,loading:l.loading||m.value,type:t(p).inputs.coordinate,maxlength:45,onKeyup:q(F,["enter"])},null,8,["modelValue","label","disabled","loading","type","onKeyup"])]),_:1}),X("div",x,[(M(),Y(f,{disabled:l.disabled,ref_key:"map",ref:v,key:U.value,onUpdateCoordinates:G,onUpdateAddress:H,onMapLoading:J,onMapLoaded:Q,centerLat:t(o).latitude,centerLgn:t(o).longitude},null,8,["disabled","centerLat","centerLgn"]))])],64)}}};export{ae as _};
