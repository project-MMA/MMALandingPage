(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{UV0H:function(t,e,s){"use strict";var a=s("Xdfe"),i=s.n(a);i.a},Xdfe:function(t,e,s){},YDMh:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"flex flex-center"},[s("div",{staticClass:"q-pa-sm",staticStyle:{width:"450px","max-width":"90vw"}},[s("div",{staticClass:"container flex flex-center row q-pa-lg",staticStyle:{"background-color":"rgba(255, 255, 255, 0.8)","border-radius":"20px",height:"auto","text-align":"center"}},[s("div",{staticClass:"col-12 full-width"},[s("h4",[s("b",[t._v("Account Settings")])])])]),s("div",{staticClass:"container flex flex-center row q-pa-sm",staticStyle:{"background-color":"rgba(255, 255, 255, 0.8)","border-radius":"20px",height:"auto","text-align":"center"}},[s("div",{staticClass:"col-12 full-width"},[s("q-card",{staticClass:"card-notif full-width",staticStyle:{"border-radius":"20px"},attrs:{inline:"",color:"dark"}},[s("q-card-title",[s("h4",[t._v("Security and Login")]),s("q-icon",{attrs:{slot:"right",name:"security"},slot:"right"})],1),s("q-card-media",{staticClass:"bg-white"},[s("div",{staticClass:"container flex flex-center"},[s("div",{staticClass:"col-12 full-width q-pa-sm"},[s("q-input",{staticClass:"text-dark",attrs:{value:"",readonly:"",inverted:"",type:"text","float-label":"Username",color:"light",before:[{icon:"account_box",handler:function(){}}]},model:{value:t.accountNumber,callback:function(e){t.accountNumber=e},expression:"accountNumber"}})],1)])]),s("q-card-separator"),s("q-card-actions",[s("q-btn",{staticClass:"full-width",attrs:{flat:"",label:"Change Password"},on:{click:function(e){t.opened=!0}}})],1)],1)],1)]),s("div",{staticClass:"container flex flex-center row q-pa-sm",staticStyle:{"background-color":"rgba(255, 255, 255, 0.8)","border-radius":"20px",height:"auto","text-align":"center"}},[s("div",{staticClass:"col-12 full-width"},[s("q-card",{staticClass:"card-notif full-width",staticStyle:{"border-radius":"20px"},attrs:{inline:"",color:"secondary"}},[s("q-card-title",[s("h4",[t._v("Contact Details")]),s("q-icon",{attrs:{slot:"right",name:"contact_phone"},slot:"right"})],1),s("q-card-media",{staticClass:"bg-white"},[s("q-list",{staticClass:"bg-white"},[s("q-item",[s("q-item-main",[s("q-item-tile",{staticClass:"text-dark",attrs:{label:""}},[t._v(t._s(t.getModelInfo.email))]),s("q-item-tile",{staticClass:"q-caption",attrs:{sublabel:"",capitalize:""}},[t._v("Email Address")])],1),s("q-item-side",[s("q-btn",{staticClass:"text-dark",attrs:{flat:"",icon:"edit"}})],1)],1),s("q-item-separator"),s("q-item",[s("q-item-main",[s("q-item-tile",{staticClass:"text-dark",attrs:{label:""}},[t._v(t._s(t.getModelInfo.mobileNumber))]),s("q-item-tile",{staticClass:"q-caption",attrs:{sublabel:"",capitalize:""}},[t._v("Mobile Number")])],1),s("q-item-side",[s("q-btn",{staticClass:"text-dark",attrs:{flat:"",icon:"edit"}})],1)],1)],1)],1)],1)],1)]),s("q-modal",{attrs:{minimized:"","content-css":{minWidth:"35vw",minHeight:"35vh"}},on:{hide:t.clearPassModal},model:{value:t.opened,callback:function(e){t.opened=e},expression:"opened"}},[s("q-modal-layout",[s("q-toolbar",{staticClass:"bg-dark"},[s("q-toolbar-title",[t._v("\n              Change Password\n            ")])],1),s("div",{staticClass:"q-pa-md"},[s("div",{staticClass:"col-12 full-width q-pa-sm"},[s("q-input",{attrs:{value:"",type:"password","float-label":"Previous Password",color:"dark"},model:{value:t.oldPass,callback:function(e){t.oldPass=e},expression:"oldPass"}})],1),s("div",{staticClass:"col-12 full-width q-pa-sm"},[s("q-input",{attrs:{value:"",type:"password","float-label":"New Password",color:"dark"},model:{value:t.newPass,callback:function(e){t.newPass=e},expression:"newPass"}})],1),s("div",{staticClass:"col-12 full-width q-pa-sm"},[s("q-input",{attrs:{value:"",type:"password","float-label":"Re-type New Password",color:"dark"},model:{value:t.newPassRetype,callback:function(e){t.newPassRetype=e},expression:"newPassRetype"}})],1),s("q-btn",{staticClass:"full-width q-ma-md",attrs:{color:"primary",label:"Change Password"},on:{click:t.changeAccountPassword}})],1),s("q-inner-loading",{attrs:{visible:t.changePass}},[s("q-spinner-cube",{attrs:{size:"50px",color:"primary"}})],1)],1)],1)],1)])},i=[];a._withStripped=!0;s("INYr");var o=s("r7Fz"),n={components:{PayPal:o["a"]},created:function(){this.$bindAsArray("contractsigned",this.$database.ref("contractSigned")),this.accountNumber=this.$route.params.id,console.log("cs",this.contractsigned)},computed:{getModelInfo:function(){var t=this,e=this.$lodash.filter(this.contractsigned,function(e){return e.accountNumber===t.accountNumber});return console.log("list",e),e[0]}},name:"ModelDashboard",mounted:function(){this.$bindAsArray("events_activities",this.$database.ref("event_schedules/-LLTvAOc7i_U1_aEozvn/activities")),console.log("all events",this.events_activities),this.$bindAsArray("models",this.$database.ref("models")),this.$bindAsArray("events",this.$database.ref("events")),console.log("signed",this.contractsigned)},data:function(){return{opened:!1,changePass:!1,credentials:{sandbox:"Aczd4UCMH9RAugd6i1kzpNObiavUymIwatwju9Y8rE0641ybi1277VWnLxleBMjf7rhtqF78EEAE2TqH",production:"<production client id>"},models:[],events_activities:[],events:[],total:0,progress:!1,totalAmount:0,model:{},activities:[],items:0,accountNumber:"",contractsigned:[],newPass:"",newPassRetype:"",oldPass:""}},methods:{changeAccountPassword:function(){var t=this,e=this.$lodash.findIndex(this.contractsigned,function(e){return e.accountNumber===t.accountNumber&&e.password===t.oldPass});-1!==e?(console.log("index",e),""===this.newPass||""===this.newPassRetype?this.$q.notify({message:"Empty Field",type:"negative",color:"negative",textColor:"white",icon:"warning"}):this.newPass===this.newPassRetype?(console.log("same",this.newPass+this.newPassRetype),this.$database.ref("contractSigned/"+this.getModelInfo[".key"]+"/password").set(this.newPass).then(function(){t.$q.notify({message:"Password Change Successful",type:"positive",color:"positive",textColor:"white",icon:"info"}),t.opened=!1}).catch(function(){t.$q.notify({message:"Error: Password not changed.",type:"negative",color:"negative",textColor:"white",icon:"warning"})})):this.$q.notify({message:"New Password does not match",type:"negative",color:"negative",textColor:"white",icon:"warning"})):this.$q.notify({message:"Incorrect Password",type:"negative",color:"negative",textColor:"white",icon:"warning"})},clearPassModal:function(){this.newPass="",this.oldPass="",this.newPassRetype=""}}},l=n,c=(s("UV0H"),s("KHd+")),r=Object(c["a"])(l,a,i,!1,null,null,null);e["default"]=r.exports}}]);