import{d as i,u as s}from"./index-255cb3f5.js";const n=i("OrganicStore",{state:()=>({selectedItem:{id:null,level:null},itemList:[{id:`tab${s.formatDate(new Date,"DDMMyyyy")}`,name:"Hoje",date:new Date,showSearch:!0,showIconClose:!1}]}),getters:{},actions:{setSelectedItem(e){this.selectedItem.id=e.id,this.selectedItem.level=e.level},resetSelectedItem(){this.selectedItem={id:null,level:null}},addItem(e){this.itemList.push(e)},revomeItemById(e){const t=this.itemList.findIndex(a=>a.id===e);return t>-1?(this.itemList.splice(t,1),!0):!1},resetLis(){this.itemList=[{id:`tab${s.formatDate(new Date,"DDMMyyyy")}`,name:"Hoje",date:new Date,showSearch:!0,showIconClose:!1}]},checkToday(){if(!(this.itemList.findIndex(a=>a.id===`tab${s.formatDate(new Date,"DDMMyyyy")}`)>-1)){var t=this.itemList;t[0].name=s.formatDate(t[0].date),this.itemList=[{id:`tab${s.formatDate(new Date,"DDMMyyyy")}`,name:"Hoje",date:new Date,showSearch:!0,showIconClose:!1}],this.itemList.concat(t)}}},persist:{enabled:!0,strategies:[{key:"params-organic",storage:localStorage,paths:["itemList"]}]}});export{n as u};