(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["EditPhone"],{1025:function(t,e,a){},a1b7:function(t,e,a){"use strict";var s=a("1025"),n=a.n(s);n.a},fd21:function(t,e,a){"use strict";a.r(e);var s,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vay-login"},[a("page-head",{attrs:{titleKey:"editPhoneTitle",fixed:!0}}),a("p",{staticClass:"edit-title"},[t._v(" "+t._s(t.$t("cn-195"))+" ")]),a("div",{staticClass:"reg-form"},[a("div",{staticClass:"reg-item"},[a("h3",[t._v(t._s(t.$t("cn-194")))]),a("van-field",{attrs:{clearable:"",placeholder:t.$t("cn-443")},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}},[a("div",{staticClass:"login-phone-title",attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"login-phone-icon"})])])],1),a("div",{staticClass:"reg-item"},[a("h3",[t._v(t._s(t.$t("cn-169")))]),a("van-field",{staticStyle:{"padding-top":"7px","padding-bottom":"7px"},attrs:{type:"number",maxlength:"50",placeholder:t.$t("cn-433")},model:{value:t.verifyCode,callback:function(e){t.verifyCode=e},expression:"verifyCode"}},[a("div",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"login-password-icon"})]),a("div",{staticClass:"register-send",attrs:{slot:"button"},slot:"button"},[a("van-button",{attrs:{type:"info",disabled:t.disabledSend},on:{click:t.sendVerifyCode}},[t._v(t._s(t.sendText))])],1)])],1)]),a("van-button",{staticClass:"reg-submit",attrs:{type:"info"}},[t._v(t._s(t.$t("cn-209")))])],1)},i=[],d=(a("b0c0"),a("2fa7")),o=(a("b342"),a("ad06")),l=(a("9eda"),a("565f")),c=(a("c625"),a("b650")),r=(s={},Object(d["a"])(s,c["a"].name,c["a"]),Object(d["a"])(s,l["a"].name,l["a"]),Object(d["a"])(s,o["a"].name,o["a"]),s),u={name:"EditPhone",components:r,props:{},data:function(){return{disabledSend:!1,sendText:this.$t("cn-447"),isReadContract:!0,verifyCode:!1,username:"",password:""}},computed:{},watch:{},created:function(){},mounted:function(){},destroyed:function(){},methods:{sendVerifyCode:function(){var t=this;if(!this.disabledSend){this.disabledSend=!0;var e=59;this.sendText="".concat(e,"s");var a=setInterval((function(){--e,e<=0?(clearInterval(a),t.disabledSend=!1,t.sendText=t.$t("cn-447")):t.sendText="".concat(e,"s")}),1e3)}}}},b=u,f=(a("a1b7"),a("2877")),v=Object(f["a"])(b,n,i,!1,null,"1d58bf1a",null);e["default"]=v.exports}}]);