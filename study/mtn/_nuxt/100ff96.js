(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{294:function(t,o,e){var content=e(311);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(41).default)("72d2527b",content,!0,{sourceMap:!1})},310:function(t,o,e){"use strict";e(294)},311:function(t,o,e){(o=e(40)(!1)).push([t.i,".axios-body[data-v-070e5f29]{word-break:break-all}.block-ui[data-v-070e5f29]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5)}.block-ui .spinner-border[data-v-070e5f29]{position:absolute;top:50%;left:50%;width:4rem;height:4rem;color:#d9230f!important;margin:-2rem 0 0 -2rem}",""]),t.exports=o},332:function(t,o,e){"use strict";e.r(o);e(16),e(53),e(63),e(64);var n=e(24),c={layout:"headerless",data:function(){return{axiosData:null,blockShow:!1}},methods:{fnAxiosAsyncTest:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t.blockShow=!0,o.next=3,t.$axios.get("/posts").then((function(data){console.log("posts data : ",data)}));case 3:return o.next=5,t.$axios.get("/comments").then((function(data){console.log("comments data : ",data)}));case 5:return o.next=7,t.$axios.get("/albums").then((function(data){console.log("albums data : ",data)}));case 7:return o.next=9,t.$axios.get("/photos").then((function(data){console.log("photos data : ",data)}));case 9:return o.next=11,t.$axios.get("/todos").then((function(data){console.log("todos data : ",data),t.axiosData=JSON.stringify(data)})).then((function(){console.log("aa")})).then((function(){console.log("bb")})).then((function(){console.log("cc")})).then((function(){console.log("dd"),t.blockShow=!1}));case 11:case"end":return o.stop()}}),o)})))()},fnAxiosSyncTest:function(){var t=this;this.blockShow=!0;var o=[this.$axios.get("/posts"),this.$axios.get("/comments"),this.$axios.get("/albums"),this.$axios.get("/photos"),this.$axios.get("/todos")];Promise.all(o).then((function(o){t.blockShow=!1,console.log("values : ",o)}))}}},r=(e(310),e(21)),component=Object(r.a)(c,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"container"},[t._v("\n\t전문가 Live 페이지\n\t"),e("br"),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v("Index page")]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v("Main Page")]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"p-grid button-demo"},[e("div",{staticClass:"p-col-12 p-md-6"},[e("div",{staticClass:"card"},[e("b-button",{staticClass:"p-mr-2 p-mb-2",attrs:{type:"button"},on:{click:function(o){return t.fnAxiosAsyncTest()}}},[t._v("Axios Test - Call 5 API (Request step by step)")]),t._v(" "),e("b-button",{staticClass:"p-mr-2 p-mb-2",attrs:{type:"button"},on:{click:function(o){return t.fnAxiosSyncTest()}}},[t._v("Axios Test - Call 5 API (Request all)")])],1)])]),t._v(" "),e("div",{staticClass:"axios-body"},[t._v("\n\t\t"+t._s(t.axiosData)+"\n\t")]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.blockShow,expression:"blockShow"}],staticClass:"block-ui"},[e("b-spinner",{attrs:{label:"Spinning"}})],1)],1)}),[],!1,null,"070e5f29",null);o.default=component.exports}}]);