webpackJsonp([2],{Gu7x:function(t,e){},JTgh:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),o=a("TVmP"),s=a("NtCe"),i=a.n(s),c=(a("MJyj"),{name:"App",components:{MFooter:o.a},data:function(){return{showFooter:!i.a.isPlus}},mounted:function(){console.log("vigour mounted")}}),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view"),this._v(" "),e("MFooter",{directives:[{name:"show",rawName:"v-show",value:this.showFooter,expression:"showFooter"}]})],1)},staticRenderFns:[]};var u=a("VU/8")(c,r,!1,function(t){a("ja+F")},null,null).exports,l=a("/ocq"),v=(a("3Lne"),a("SSsa")),h=(a("FO5P"),a("woHG")),m=a("uKeQ"),f=a.n(m);n.a.use(v.a).use(h.a);var p={name:"Index",data:function(){return{msg:"Welcome to Your Vue.js App"}},methods:{goBack:function(){console.log("back"),f.a.back()},shareToWX:function(){f.a.openWindow({url:"vigour_share.html",extras:{name:"vigour_share.html"},waiting:{autoShow:!1}})}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-content"},[a("van-nav-bar",{attrs:{title:"标题","left-arrow":""},on:{"click-left":t.goBack}}),t._v(" "),a("div",[a("van-button",{attrs:{size:"large"}},[t._v("实名认证 +100")]),t._v(" "),a("van-button",{attrs:{size:"large"},on:{click:t.shareToWX}},[t._v("分享朋友圈 +100")]),t._v(" "),a("van-button",{attrs:{size:"large"}},[t._v("分享给通讯录好友 +100")])],1)],1)},staticRenderFns:[]};var _=a("VU/8")(p,d,!1,function(t){a("Gu7x")},"data-v-186c562d",null).exports;n.a.use(l.a);var w=new l.a({routes:[{path:"/",name:"Index",component:_}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:w,components:{App:u},template:"<App/>"})},MJyj:function(t,e){},NtCe:function(t,e){t.exports=window.MTOOL},TVmP:function(t,e,a){"use strict";a("3Lne");var n=a("SSsa"),o=(a("k3b4"),a("+2ln")),s=a("7+uW"),i=a("NtCe"),c=a.n(i);s.a.use(o.a),s.a.use(n.a);var r={name:"Nav",props:["selected"],data:function(){return{activePath:"home.html",msg:"Welcome to Your Vue.js App"}},mounted:function(){this.$nextTick(function(){console.log("footer nav mounted")});var t=window.location.pathname||"";t=t.substr(t.lastIndexOf("/")+1),console.log("pathname:"),console.log(t),this.activePath="index.html"===t?"home.html":t},methods:{handleNavTap:function(t,e){this.activePath===t&&c.a.isPlus||(c.a.switchNav({from:this.activePath,to:t}),this.activePath=t)}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("div",{staticClass:"footer-link",class:{active:"home.html"===t.activePath},on:{click:function(e){t.handleNavTap("home.html",e)}}},[a("van-icon",{staticClass:"footer-icon",attrs:{name:"wap-home"}}),t._v(" "),a("span",[t._v("Home")])],1),t._v(" "),a("div",{staticClass:"footer-link",class:{active:"vigour.html"===t.activePath},on:{click:function(e){t.handleNavTap("vigour.html",e)}}},[a("van-icon",{staticClass:"footer-icon",attrs:{name:"wap-home"}}),t._v(" "),a("span",[t._v("Vigour")])],1),t._v(" "),a("div",{staticClass:"footer-link",class:{active:"my.html"===t.activePath},on:{click:function(e){t.handleNavTap("my.html",e)}}},[a("van-icon",{staticClass:"footer-icon",attrs:{name:"contact"}}),t._v(" "),a("span",[t._v("My")])],1)])},staticRenderFns:[]};var l=a("VU/8")(r,u,!1,function(t){a("e5uj")},"data-v-590ce50b",null);e.a=l.exports},e5uj:function(t,e){},f4F5:function(t,e){},"ja+F":function(t,e){},uKeQ:function(t,e){t.exports=window.mui},znX2:function(t,e){}},["JTgh"]);
//# sourceMappingURL=speed_up.js.map