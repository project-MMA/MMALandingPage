(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"0tVQ":function(t,e,n){n("FlQf"),n("VJsP"),t.exports=n("WEpk").Array.from},"6jPk":function(t,e,n){},Bnag:function(t,e){function n(){throw new TypeError("Invalid attempt to spread non-iterable instance")}t.exports=n},CIZw:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-layout",{attrs:{view:"lHh Lpr lff"}},[r("q-layout-header",[r("div",{},[r("q-toolbar",{attrs:{color:"white"}},[r("q-btn",{staticClass:"text-faded",attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}},[r("q-icon",{attrs:{name:"menu"}})],1),r("q-toolbar-title",{staticClass:"absolute-center"},[r("img",{attrs:{id:"logo_memp",alt:"Maleficent Models Academy",src:n("Znib")}})]),r("q-btn",{staticClass:"text-primary  absolute-right q-mt-sm q-mr-sm",attrs:{flat:"",dense:"",round:"","aria-label":"Log-Out"},on:{click:function(e){t.$router.push("/chat/"+t.getAccountNumber)}}},[r("q-icon",{attrs:{name:"message"}}),t.showCount?r("q-chip",{attrs:{floating:"",color:"red"}},[t._v(t._s(t.showCount))]):t._e()],1)],1),r("q-layout-drawer",{attrs:{"content-class":"mat"===t.$q.theme?"bg-white":null},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[r("q-list",{attrs:{"no-border":"",link:"","inset-delimiter":""}},[r("q-list-header",[t._v("Navigation")]),r("q-item",{staticClass:"text-dark",attrs:{to:"/settings/"+t.getAccountNumber}},[r("q-item-side",{attrs:{icon:"settings"}}),r("q-item-main",{attrs:{label:"Account Settings"}})],1),r("div",{on:{click:t.setUnreadTrue}},[r("q-item",{staticClass:"text-dark",attrs:{to:"/chat/"+t.getAccountNumber}},[r("q-item-side",{attrs:{icon:"message"}}),r("q-item-main",{attrs:{label:"Message Coordinator"}}),t.showCount?r("q-chip",{attrs:{color:"red",small:""}},[t._v(t._s(t.showCount))]):t._e()],1)],1),r("q-item",{staticClass:"bg-dark text-white",attrs:{to:"/"}},[r("q-item-side",{staticClass:"text-white",attrs:{icon:"power_settings_new"}}),r("q-item-main",{staticClass:"text-white",attrs:{label:"Log - Out"}})],1)],1)],1),r("q-tabs",{staticClass:"shadow-2 full-width",attrs:{align:"justify",color:"dark"}},[r("q-tab",{attrs:{slot:"title",icon:"dashboard",label:""},on:{click:function(e){t.$router.push("/accounts/"+t.getAccountNumber)}},slot:"title"},[r("label",{staticClass:"hide-mobile"},[t._v(" Dashboard ")])]),r("q-tab",{attrs:{slot:"title",icon:"ballot",label:""},on:{click:function(e){t.$router.push("/newsfeed/"+t.getAccountNumber)}},slot:"title"},[r("label",{staticClass:"hide-mobile"},[t._v(" Latest News ")])]),r("q-tab",{attrs:{slot:"title",count:t.getCountNotification,icon:"notifications",label:""},on:{click:function(e){t.$router.push("/notifications/"+t.getAccountNumber)}},slot:"title"},[r("label",{staticClass:"hide-mobile"},[t._v(" Notfications ")])])],1)],1)]),r("q-page-container",{staticClass:"bgimg"},[r("router-view")],1),r("q-layout-footer",{staticStyle:{"background-color":"#232428"}},[r("div",{staticClass:"justify center"},[r("div",{staticClass:"q-pa-lg container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 text-white text-center",attrs:{id:"social"}},[r("p",{staticClass:"q-caption text-light"},[t._v("Copyright © 2018 Maleficent Models Academy")]),r("a",{attrs:{href:""}},[t._v("FAQ")]),t._v(" | "),r("a",{attrs:{href:""}},[t._v("Terms and Conditions")]),t._v(" | "),r("a",{attrs:{href:""}},[t._v("Privacy Policy")])])])])])]),t.showCount?r("q-page-sticky",{attrs:{position:"top-right",offset:[18,18]}},[r("q-btn",{attrs:{round:"",color:"primary",icon:"message",size:"lg",to:"/chat/"+t.getModelInfo.accountNumber},on:{click:t.setUnreadTrue}}),r("q-chip",{attrs:{floating:"",color:"red"}},[t._v(t._s(t.showCount))])],1):t._e()],1)},a=[];r._withStripped=!0;var s=n("RIqP"),i=n.n(s),o=n("MVZn"),c=n.n(o),u=(n("rGqo"),n("yt8O"),n("RW0V"),n("91GP"),n("lqHd")),l=n("9JDm"),h={name:"ModelAccountLayout",data:function(){return{leftDrawerOpen:!1,state:!0,accountNumber:"",allMessage:[],contractsigned:[]}},created:function(){this.$bindAsArray("contractsigned",this.$database.ref("contractSigned")),this.$bindAsArray("allMessage",this.$database.ref("messages")),this.accountNumber=this.$route.params.id},mounted:function(){this.$bindAsArray("event_schedules1",this.$database.ref("event_schedules"))},computed:{getAccountNumber:function(){try{return this.$route.params.id}catch(t){return""}},getModelInfo:function(){var t=this;try{var e=this.$lodash.filter(this.contractsigned,function(e){return e.accountNumber===t.getAccountNumber});return e[0]}catch(t){return[]}},getDuePayments:function(){try{return this.getModelInfo.paymentDueDate}catch(t){return[]}},get1stPaidAmount:function(){return this.getDuePayments[0].amount},get2ndPaidAmount:function(){return this.getDuePayments[1].amount},get3rdPaidAmount:function(){return this.getDuePayments[2].amount},getDuePaymentsTotal:function(){try{for(var t=this.getDuePayments,e=0,n=0;n<t.length;n++)e+=t[n].amount;return e}catch(t){return 0}},getDuePaymentsOB:function(){var t=this;try{this.$bindAsArray("temporary",this.$database.ref("contractSigned"));var e=this.$lodash.filter(this.temporary,function(e){return e.accountNumber===t.getAccountNumber});return e[0].paymentDueDate}catch(t){return[]}},getModelsPaymentTransactions:function(){try{var t=this.getModelInfo[".key"];this.$bindAsArray("payment_transactions",this.$database.ref("payment_transactions"));var e=this.$lodash.filter(this.payment_transactions,function(e){return e.modelKey===t});return e}catch(t){return console.log("error",t),[]}},getTotalModelPayment:function(){try{for(var t=this.getModelsPaymentTransactions,e=0,n=0;n<t.length;n++)e+=parseInt(t[n].transaction_amount);return e}catch(t){return console.log(t),0}},get1stPaidStatus:function(){return this.getDuePayments[0].paidStatus},get2ndPaidStatus:function(){return this.getDuePayments[1].paidStatus},get3rdPaidStatus:function(){return this.getDuePayments[2].paidStatus},getActivies:function(){var t=this;try{var e=this.getModelInfo.balance,n=this.$lodash.filter(this.getModelInfo.activitiesAttended,function(n){if(0===e)return"orientation"===n.type?0:n;if("orientation"===n.type)return 0;if("photoshoot"===n.type){if(!0===t.get1stPaidStatus)return n}else if("photoliking"===n.type){if(!0===t.get2ndPaidStatus)return n}else if(!0===t.get3rdPaidStatus)return n});return n}catch(t){return[]}},getCountNotification:function(){return this.CheckOutdated.length+this.getOutStandingBalance.length},getModelMessages:function(){this.$bindAsArray("modelmsgs",this.$database.ref("messages/"+this.$route.params.id));var t=[];try{for(var e=0;e<this.modelmsgs.length;e++){var n=Object.assign([],this.modelmsgs[e]);"Model Coordinator"!==n.from?(delete n.sent,t.push(Object.assign({},n))):t.push(Object.assign({},n))}return t}catch(t){}},MessageCounter:function(){for(var t=[],e=0;e<this.allMessage.length;e++){for(var n=this.allMessage[e][".key"],r=Object.keys(this.allMessage[e]),a=[],s=0;s<r.length-1;s++)a.push(c()({},this.allMessage[e][r[s]]));var i=this.$lodash.filter(a,function(t){return"Model Coordinator"===t.from&&!1===t.seen});t.push({count:i.length,key:n})}return t},showCount:function(){var t=this.$route.params.id,e=0;try{for(var n=0;n<this.MessageCounter.length;n++){var r=this.MessageCounter[n].key;r===t&&(e=this.MessageCounter[n].count)}return 0===e?0:e}catch(t){}},getActivitiesFromBatchKey:function(){try{var t=this.getModelInfo.balance,e=this.getModelInfo.batchKey;this.$bindAsArray("event_schedules2",this.$database.ref("event_schedules"));var n=this.$lodash.filter(this.event_schedules2,function(t){return t[".key"]===e}),r=[],a=[],s=(this.$lodash.filter(n[0].activities,function(t){"payment"===t.type||"orientation"===t.type?r.push(t):a.push(t)}),this.$lodash.filter(a,function(e){return 0===t?"orientation"===e.type?0:e:"orientation"===e.type?0:"photoshoot"===e.type?totalpaid>=D1?e:0:"photoliking"===e.type?totalpaid>=D1+D2?e:0:totalpaid>=D1+D2+D3?e:0}));return s}catch(t){return[]}},CheckRescheduled:function(){try{for(var t=this.$lodash.filter(this.getModelInfo.rescheduledActivity,function(t){return t}),e=[],n=[],r=i()(this.getActivitiesFromBatchKey),a=0;a<t.length;a++)for(var s=0;s<this.event_schedules1.length;s++)t[a].batchKey===this.event_schedules1[s][".key"]?e.push(this.event_schedules1[s]):n.push(this.event_schedules1[s]);for(var o=0;o<e.length;o++)for(var c=0;c<e[o].activities.length;c++)t[o].newActivityID===e[o].activities[c].id?(e[o].activities[c].rescheduled=!0,r.push(e[o].activities[c])):n.push(e[o].activities[c]);var u=this.$lodash.orderBy(r,function(t){return new Date(t.startDate)},"asc");return u}catch(t){return[]}},CheckOutdated:function(){for(var t=this.CheckRescheduled,e=new Date,n=[],r=[],a=[],s=0;s<t.length;s++){var i=new Date(t[s].startDate),o=l["d"].getDateDiff(i,e);o<0?r.push(t[s]):o<7?n.push(t[s]):a.push(t[s])}return n},getOutStandingBalance:function(){try{if(0!==this.getModelInfo.balance){for(var t=this.getDuePaymentsOB,e=this.getTotalModelPayment,n=[],r=[],a=0,s=0;s<t.length;s++)if(a+=t[s].amount,e>=a)r.push(t[s]);else{var i=a-e;i>t[s].amount?n.push(t[s]):(t[s].amount=i,n.push(t[s]))}return n}return 0}catch(t){return console.log(t),[]}}},methods:{openURL:u["a"],setUnreadTrue:function(){for(var t=this.$route.params.id,e=0;e<this.getModelMessages.length;e++)"Model Coordinator"===this.getModelMessages[e].from&&!1===this.getModelMessages[e].seen&&this.$database.ref("messages/"+t+"/"+this.getModelMessages[e][".key"]+"/seen").set(!0)}},toggleHeader:function(){this.state=!this.state}},d=h,f=(n("U2kp"),n("KHd+")),g=Object(f["a"])(d,r,a,!1,null,null,null);e["default"]=g.exports},EbDI:function(t,e,n){var r=n("Kgbp"),a=n("iD3k");function s(t){if(a(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return r(t)}t.exports=s},IP1Z:function(t,e,n){"use strict";var r=n("2faE"),a=n("rr1i");t.exports=function(t,e,n){e in t?r.f(t,e,a(0,n)):t[e]=n}},Ijbi:function(t,e){function n(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}t.exports=n},Kgbp:function(t,e,n){t.exports=n("0tVQ")},NwJ3:function(t,e,n){var r=n("SBuE"),a=n("UWiX")("iterator"),s=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||s[a]===t)}},RIqP:function(t,e,n){var r=n("Ijbi"),a=n("EbDI"),s=n("Bnag");function i(t){return r(t)||a(t)||s()}t.exports=i},TuGD:function(t,e,n){var r=n("UWiX")("iterator"),a=!1;try{var s=[7][r]();s["return"]=function(){a=!0},Array.from(s,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!a)return!1;var n=!1;try{var s=[7],i=s[r]();i.next=function(){return{done:n=!0}},s[r]=function(){return i},t(s)}catch(t){}return n}},U2kp:function(t,e,n){"use strict";var r=n("6jPk"),a=n.n(r);a.a},VJsP:function(t,e,n){"use strict";var r=n("2GTP"),a=n("Y7ZC"),s=n("JB68"),i=n("sNwI"),o=n("NwJ3"),c=n("tEej"),u=n("IP1Z"),l=n("fNZA");a(a.S+a.F*!n("TuGD")(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,a,h,d=s(t),f="function"==typeof this?this:Array,g=arguments.length,m=g>1?arguments[1]:void 0,p=void 0!==m,y=0,v=l(d);if(p&&(m=r(m,g>2?arguments[2]:void 0,2)),void 0==v||f==Array&&o(v))for(e=c(d.length),n=new f(e);e>y;y++)u(n,y,p?m(d[y],y):d[y]);else for(h=v.call(d),n=new f;!(a=h.next()).done;y++)u(n,y,p?i(h,m,[a.value,y],!0):a.value);return n.length=y,n}})},VKFn:function(t,e,n){n("bBy9"),n("FlQf"),t.exports=n("ldVq")},iD3k:function(t,e,n){t.exports=n("VKFn")},ldVq:function(t,e,n){var r=n("QMMT"),a=n("UWiX")("iterator"),s=n("SBuE");t.exports=n("WEpk").isIterable=function(t){var e=Object(t);return void 0!==e[a]||"@@iterator"in e||s.hasOwnProperty(r(e))}},sNwI:function(t,e,n){var r=n("5K7Z");t.exports=function(t,e,n,a){try{return a?e(r(n)[0],n[1]):e(n)}catch(e){var s=t["return"];throw void 0!==s&&r(s.call(t)),e}}}}]);