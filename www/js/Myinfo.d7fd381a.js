(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Myinfo"],{"20f3":function(t,a,e){"use strict";e.r(a);var n,s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"vay-login"},[e("page-head",{attrs:{titleKey:"myTitle"}}),e("div",{staticClass:"myInfo-head"},[e("div",{staticClass:"myInfo-logo"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:(t.name,"img/defaultPhoto.png"),expression:"name ? 'img/defaultPhoto.png' : 'img/defaultPhoto.png'"}]})]),e("div",{staticClass:"myInfo-base"},[e("b",[t._v(t._s(t.name?t.name:t.phone))]),e("p",t._l(t.tags,(function(a,n){return e("span",{key:n},[t._v(t._s(a))])})),0)])]),e("ul",{staticClass:"myInfo-entry"},[e("li",{staticClass:"myInfo-entry-item",on:{click:function(a){return t.$router.push("/banklist")}}},[e("b",{staticClass:"bank"}),e("span",[t._v(t._s(t.$t("cn-1003")))]),e("van-icon",{attrs:{name:"arrow"}})],1)]),e("ul",{staticClass:"myInfo-entry"},[e("li",{staticClass:"myInfo-entry-item",on:{click:function(a){return t.$router.push("/forgetPassword")}}},[e("b",{staticClass:"msg"}),e("span",[t._v(t._s(t.$t("cn-424")))]),e("van-icon",{attrs:{name:"arrow"}})],1),e("li",{staticClass:"myInfo-entry-item"},[e("b",{staticClass:"abort"}),e("span",[t._v(t._s(t.$t("cn-425")))]),e("i",{staticClass:"myInfo-version"},[t._v("1.1.1")])])]),e("div",{staticClass:"myInfo-logout"},[e("van-button",{attrs:{type:"default"},on:{click:t.logout}},[t._v(t._s(t.$t("cn-426")))])],1)],1)},o=[],i=(e("b0c0"),e("2fa7")),c=(e("b342"),e("ad06")),r=(e("c625"),e("b650")),l=e("a474"),u=(n={},Object(i["a"])(n,r["a"].name,r["a"]),Object(i["a"])(n,c["a"].name,c["a"]),n),m={name:"Login",components:u,props:{},data:function(){return{tags:["未实名授信","未绑定银行卡"],name:"",phone:""}},computed:{},watch:{},created:function(){var t=this;Object(l["r"])({userGid:localStorage.getItem("userGid")}).then((function(a){if("0000"===a.code){var e=a.data;t.phone=e.phone,t.name=e.name}else t.$toast(a.message)}))},mounted:function(){},destroyed:function(){},methods:{logout:function(){var t=this;Object(l["m"])({userGid:localStorage.getItem("userGid")}).then((function(a){"0000"===a.code?(localStorage.removeItem("Token"),localStorage.removeItem("userGid"),t.$router.push("/login")):t.$toast(a.message)}))}}},f=m,d=(e("7609"),e("2877")),p=Object(d["a"])(f,s,o,!1,null,null,null);a["default"]=p.exports},7609:function(t,a,e){"use strict";var n=e("9e7f"),s=e.n(n);s.a},"9e7f":function(t,a,e){}}]);