(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CreditStatus"],{"19e5":function(t,s,a){"use strict";a.r(s);var e,i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("page-head",{attrs:{titleKey:"creditStatusTitle",fixed:!0}}),"1"===t.showType?[a("div",{staticClass:"loanRes-title"},[a("p",{staticClass:"loanRes-img"},[a("i",{staticClass:"wait"}),a("span",[t._v(t._s(t.$t("cn-118")))])])]),a("div",{staticClass:"credit-step"},[a("div",{staticClass:"step-item"},[a("i",{staticClass:"done"}),t._v(t._s(t.$t("cn-121")))]),a("b",{staticClass:"split"}),a("div",{staticClass:"step-item"},[a("i",{staticClass:"ing"}),t._v(t._s(t.$t("cn-122")))]),a("b",{staticClass:"split"}),a("div",{staticClass:"step-item",staticStyle:{color:"#999"}},[t._m(0),t._v(t._s(t.$t("cn-123")))])]),a("p",{staticClass:"credit-desc"},[t._v(" "+t._s(t.$t("cn-124"))),a("br"),t._v("("+t._s(t.$t("cn-127"))+") ")]),a("van-button",{staticClass:"reg-submit-1",attrs:{plain:"",type:"info"},on:{click:function(s){return t.$router.replace("/")}}},[t._v(t._s(t.$t("cn-338")))])]:t._e(),"2"===t.showType?[a("div",{staticClass:"loanRes-title"},[a("p",{staticClass:"loanRes-img"},[a("i",{staticClass:"error"}),a("span",[t._v(t._s(t.$t("cn-130")))])])]),a("van-button",{staticClass:"reg-submit",attrs:{type:"info"}},[t._v(t._s(t.$t("cn-338")))])]:t._e()],2)},c=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("i",{staticClass:"more"},[a("b"),a("b"),a("b")])}],n=(a("b0c0"),a("ac1f"),a("5319"),a("2fa7")),o=(a("b342"),a("ad06")),r=(a("9eda"),a("565f")),l=(a("c625"),a("b650")),d=a("a474"),u=(e={},Object(n["a"])(e,l["a"].name,l["a"]),Object(n["a"])(e,r["a"].name,r["a"]),Object(n["a"])(e,o["a"].name,o["a"]),e),f={name:"CreditUpfile",components:u,props:{},data:function(){return{showType:"2"}},computed:{},watch:{},created:function(){var t=this;setTimeout((function(){t.$router.replace("/")}),1e4)},mounted:function(){},destroyed:function(){},methods:{getCreditQuery:function(){var t=this;Object(d["h"])({userGid:localStorage.getItem("userGid")}).then((function(s){if("0000"===s.code){var a=s.data;t.name=a.basicInfo.name,t.idcard=a.basicInfo.idcard,t.contactPhone=a.basicInfo.contactPhone,t.relation=a.basicInfo.relation,t.frontPicUrl=a.idcardPic.frontPicUrl,t.holdPicUrl=a.idcardPic.holdPicUrl}else t.$toast(s.message)})).catch((function(){t.$toast(t.$t("cn-1044"))}))}}},p=f,v=(a("e361"),a("2877")),_=Object(v["a"])(p,i,c,!1,null,"156c3f8d",null);s["default"]=_.exports},d413:function(t,s,a){},e361:function(t,s,a){"use strict";var e=a("d413"),i=a.n(e);i.a}}]);