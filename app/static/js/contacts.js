webpackJsonp([1],{"7UXC":function(e,s){},EKmj:function(e,s){},"M/XU":function(e,s){},MJyj:function(e,s){},NtCe:function(e,s){e.exports=window.MTOOL},aZQy:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o=t("7+uW"),n=t("NtCe"),a=t.n(n),i=(t("MJyj"),{render:function(){var e=this.$createElement,s=this._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]});var u=t("VU/8")({name:"App",data:function(){return{}},mounted:function(){}},i,!1,function(e){t("dagC")},null,null).exports,l=t("/ocq"),d=t("lHA8"),c=t.n(d),r=t("Gu7T"),p=t.n(r),m=(t("3Lne"),t("SSsa")),h=(t("FO5P"),t("woHG")),v=(t("cZ0s"),t("fIxc")),f=(t("RIEG"),t("zjGD")),N=t("uKeQ"),g=t.n(N);o.a.use(m.a).use(h.a).use(v.a).use(f.a);var b={name:"Index",data:function(){return{list:[{id:"1",displayName:"aname1",phoneNumbers:[{id:"1",value:"10086"},{id:"2",value:"10010"}],photos:[{id:"1",value:""}]},{id:"2",displayName:"bname2",phoneNumbers:[{id:"1",value:"1008601"}],photos:[{id:"1",value:""}]},{id:"3",displayName:"cnam3",phoneNumbers:[{id:"1",value:"1008602"}],photos:[{id:"1",value:""}]},{id:"4",displayName:"dname4",phoneNumbers:[{id:"1",value:"1008603"}],photos:[{id:"1",value:""}]},{id:"5",displayName:"ename5",phoneNumbers:[{id:"1",value:"1008600"}],photos:[{id:"1",value:""}]},{id:"6",displayName:"fname6",phoneNumbers:[{id:"1",value:"1008600"}],photos:[{id:"1",value:""}]},{id:"7",displayName:"name7",phoneNumbers:[{id:"1",value:"1008600"}],photos:[{id:"1",value:""}]},{id:"8",displayName:"name8",phoneNumbers:[{id:"1",value:"1008600"}],photos:[{id:"1",value:""}]},{id:"9",displayName:"name9",phoneNumbers:[{id:"1",value:"1008600"}],photos:[{id:"1",value:""}]},{id:"10",displayName:"name10",phoneNumbers:[{id:"1",value:"1008600"}],photos:[{id:"1",value:""}]},{id:"11",displayName:"name11",phoneNumbers:[{id:"1",value:"1008600"}],photos:[{id:"1",value:""}]},{id:"12",displayName:"name12",phoneNumbers:[{id:"1",value:"1008600"}],photos:[{id:"1",value:""}]},{id:"13",displayName:"name13",phoneNumbers:[{id:"1",value:"1008600"}],photos:[{id:"1",value:""}]}],result:[],msg:"Welcome to Your Vue.js App"}},mounted:function(){var e=this;this.$nextTick(function(){g.a.plusReady(function(){e.list=e.getAddress()})})},methods:{goBack:function(){g.a.back()},send:function(){if(a.a.isPlus){var e=plus.messaging.createMessage(plus.messaging.TYPE_SMS);e.to=this.getPhoneNumbersById(this.result),e.body="This is DIC test message.",plus.messaging.sendMessage(e)}console.log("send to:",this.getPhoneNumbersById(this.result))},getPhoneNumbersById:function(e){var s=[];return e.length?(this.list.forEach(function(t,o){-1!==e.indexOf(t.id)&&t.phoneNumbers.length&&t.phoneNumbers.forEach(function(e,t){s.push(e.value)})}),s=[].concat(p()(new c.a(s)))):s},getAddress:function(){var e=[];return"undefined"!=typeof plus&&plus.contacts.getAddressBook(plus.contacts.ADDRESSBOOK_PHONE,function(s){console.log("Get address book success!"),console.log(s),s.find(null,function(s){console.log("address find success"),s.forEach(function(s){var t={};console.log("contacts item displayName:"+s.displayName),console.log("contacts item id:"+s.id),console.log("contacts item photos:"+s.photos),s.photos&&s.photos.length&&s.photos.forEach(function(e,s){for(var t in e)console.log("photos."+t+": "+e[t])}),t.id=s.id,t.displayName=s.displayName,t.phoneNumbers=s.phoneNumbers,t.photos=s.photos,e.push(t)})},function(){console.log("address find error")},{multiple:!0})},function(e){console.log("Get address book failed: "+e.message)}),e}}},y={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"page-content"},[t("van-nav-bar",{attrs:{title:"标题","left-text":"活力加速",fixed:"","left-arrow":""},on:{"click-left":e.goBack}}),e._v(" "),t("div",{staticClass:"list-content"},[t("van-checkbox-group",{model:{value:e.result,callback:function(s){e.result=s},expression:"result"}},[t("ul",{staticClass:"list"},e._l(e.list,function(s){return t("li",{key:s.id,staticClass:"list-item"},[t("van-checkbox",{key:s.id,attrs:{shape:"square",name:s.id}},[t("div",{staticClass:"item-img"},[t("img",{attrs:{src:s.photos&&s.photos[0]&&s.photos[0].value,alt:""}})]),e._v(" "),t("div",{staticClass:"item-name"},[e._v(e._s(s.displayName))])])],1)}))]),e._v(" "),t("div",{staticClass:"footer"},[t("van-button",{attrs:{size:"large"},on:{click:e.send}},[e._v("发送")])],1)],1)],1)},staticRenderFns:[]};var k=t("VU/8")(b,y,!1,function(e){t("M/XU"),t("EKmj")},"data-v-4f45dbca",null).exports;o.a.use(l.a);var _=new l.a({routes:[{path:"/",name:"Index",component:k}]});o.a.config.productionTip=!1,new o.a({el:"#app",router:_,components:{App:u},template:"<App/>"})},dagC:function(e,s){},f4F5:function(e,s){},uKeQ:function(e,s){e.exports=window.mui},znX2:function(e,s){}},["aZQy"]);
//# sourceMappingURL=contacts.js.map