import{b as e}from"./helpers-4d6c1969.js";import"./index-a3ba1ed7.js";const n={newForm(){return{validateForm:!1,code:null,url:null,legislationId:0,document:null,texts:[{language:"pt",name:null,description:null},{language:"en",name:null,description:null}]}},formRules(){return{code:{required:e.requiredMessage()},document:{required:e.requiredMessage()},texts:{$each:e.forEachField(["name","description"])}}}};export{n as h};
