(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{471:function(t,e,n){"use strict";n.r(e);var a={data:function(){return{index:0,input:""}},methods:{onBeforeChange:function(t,e,n){0===t&&""===this.input?(this.$notify("Please fill your name first."),n(1)):n()}}},i=n(48),o=Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"uiv"},[n("tabs",{on:{"before-change":t.onBeforeChange},model:{value:t.index,callback:function(e){t.index=e},expression:"index"}},[n("tab",{attrs:{title:"Home"}},[n("div",[n("br"),t._v(" "),n("form",{staticClass:"form-inline"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"exampleInputName"}},[t._v("Name")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputName",placeholder:"Please fill this section"},domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}})])])])]),t._v(" "),n("tab",{attrs:{title:"Profile"}},[n("p",[t._v("Profile tab.")])]),t._v(" "),n("tab",{attrs:{title:"Others"}},[n("p",[t._v("Others tab.")])])],1)],1)}),[],!1,null,null,null);e.default=o.exports}}]);