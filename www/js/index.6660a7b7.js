(function(t){function e(e){for(var a,o,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);m&&m(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},o={index:0},r={index:0},i=[];function s(t){return c.p+"js/"+({AddBankCard:"AddBankCard",BankList:"BankList",BillDetail:"BillDetail",Credit:"Credit",CreditStatus:"CreditStatus",CreditUpfile:"CreditUpfile",EditPassword:"EditPassword",EditPhone:"EditPhone",ForgetPassword:"ForgetPassword",Loan:"Loan",LoanConfirm:"LoanConfirm",LoanResult:"LoanResult",Login:"Login",Myinfo:"Myinfo",Register:"Register",RegisterPassword:"RegisterPassword",Repayment:"Repayment",RepaymentResult:"RepaymentResult",Status:"Status",Wealth:"Wealth"}[t]||t)+"."+{AddBankCard:"b5a5e73d",BankList:"a1cd5412",BillDetail:"e9b80a0a",Credit:"55c5f133",CreditStatus:"381596de",CreditUpfile:"93a7c0cb",EditPassword:"0fd9ccb7",EditPhone:"2a39d5fd",ForgetPassword:"5a5c115c",Loan:"f149956f",LoanConfirm:"88cf3cb6",LoanResult:"3bc79de3",Login:"2aa2b360",Myinfo:"d7fd381a",Register:"53909812",RegisterPassword:"3bb28cc4",Repayment:"fa8ca502",RepaymentResult:"002e7d78",Status:"60e11be3",Wealth:"e1a2d4ad"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={AddBankCard:1,BankList:1,BillDetail:1,Credit:1,CreditStatus:1,CreditUpfile:1,EditPassword:1,EditPhone:1,ForgetPassword:1,Loan:1,LoanConfirm:1,LoanResult:1,Login:1,Myinfo:1,Register:1,RegisterPassword:1,Repayment:1,RepaymentResult:1,Status:1,Wealth:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var a="css/"+({AddBankCard:"AddBankCard",BankList:"BankList",BillDetail:"BillDetail",Credit:"Credit",CreditStatus:"CreditStatus",CreditUpfile:"CreditUpfile",EditPassword:"EditPassword",EditPhone:"EditPhone",ForgetPassword:"ForgetPassword",Loan:"Loan",LoanConfirm:"LoanConfirm",LoanResult:"LoanResult",Login:"Login",Myinfo:"Myinfo",Register:"Register",RegisterPassword:"RegisterPassword",Repayment:"Repayment",RepaymentResult:"RepaymentResult",Status:"Status",Wealth:"Wealth"}[t]||t)+"."+{AddBankCard:"9f1ea99a",BankList:"1484775c",BillDetail:"4ff507eb",Credit:"e303d7ab",CreditStatus:"11e5ba83",CreditUpfile:"0f14c76c",EditPassword:"a2e04b3d",EditPhone:"fc700900",ForgetPassword:"454f2ad9",Loan:"d2570cf8",LoanConfirm:"be919f4b",LoanResult:"7e185cca",Login:"a2c470d7",Myinfo:"2122ffed",Register:"a030c8f1",RegisterPassword:"e5d8fd74",Repayment:"f389af0b",RepaymentResult:"7c9f72d9",Status:"6aba46a5",Wealth:"9daef1f0"}[t]+".css",r=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===r))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===a||l===r)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var a=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[t],m.parentNode.removeChild(m),n(i)},m.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){o[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(m);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}r[t]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var m=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("86b2")},"00af":function(t,e,n){},8548:function(t){t.exports=JSON.parse('{"homeTitle":"trang chủ","loginTitle":"Ký vô.","myTitle":"Tôi","wealthTitle":"giàu","home-unit":"₫","home-quota":"Giá trị","home-buttonText":"Ứng dụng ngay"}')},"86b2":function(t,e,n){"use strict";n.r(e);n("6e75");var a,o=n("343b"),r=(n("433b"),n("d399")),i=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:t.transitionName}},[n("router-view",{staticClass:"child-view"})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showFooter,expression:"showFooter"}]},[n("van-tabbar",{attrs:{route:""}},[n("van-tabbar-item",{attrs:{replace:"",to:"/",icon:"wap-home-o"}},[t._v(t._s(t.$t("homeTitle")))]),n("van-tabbar-item",{attrs:{replace:"",to:"/wealth",icon:"orders-o"}},[t._v(t._s(t.$t("wealthTitle")))]),n("van-tabbar-item",{attrs:{replace:"",to:"/my",icon:"user-o"}},[t._v(t._s(t.$t("myTitle")))])],1)],1)],1)},c=[],u=(n("c975"),n("a434"),n("b0c0"),n("2fa7")),l=(n("4627"),n("2ed4")),d=(n("1318"),n("ac28")),m=(a={},Object(u["a"])(a,d["a"].name,d["a"]),Object(u["a"])(a,l["a"].name,l["a"]),a),f={name:"App",components:m,props:{},data:function(){var t="1"===localStorage.getItem("token");return{isLogin:t,active:"home",historyArr:[],showFooter:!0,transitionName:""}},computed:{},watch:{$route:function(t,e){var n=["/","/wealth","/my"],a="";this.historyArr.indexOf(t.path)>-1?(a="slide-right",this.historyArr.splice(this.historyArr.indexOf(t.path),1)):(a="slide-left",this.historyArr.push(e.path)),n.indexOf(t.path)>-1&&n.indexOf(e.path)>-1&&(a=""),this.transitionName=a,this.showFooter=n.indexOf(t.path)>-1}},created:function(){},mounted:function(){},destroyed:function(){},methods:{}},h=f,p=n("2877"),b=Object(p["a"])(h,s,c,!1,null,null,null),g=b.exports,v=n("9483");Object(v["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("45fc"),n("d3b7");var y,_=n("8c4f"),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("page-head",{attrs:{titleKey:"homeTitle"}}),n("div",{staticClass:"home-banner"},[n("van-swipe",{attrs:{autoplay:3e3,"indicator-color":"#fff"}},t._l(t.bannerImages,(function(t,e){return n("van-swipe-item",{key:e},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"image"}],staticClass:"home-banner-item"})])})),1)],1),t.loanList.length>0?n("ul",{staticClass:"home-loanList"},t._l(t.loanList,(function(e,a){return n("li",{key:a},[1===e.orderStatus?[n("div",{staticClass:"home-loanItem"},[n("i",{staticClass:"home-loanItem-flag"}),n("p",[n("b",[t._v(t._s(t.$t("home-unit"))+t._s(t.$formatMoney(e.leftAmount)))]),n("span",[t._v(t._s(t.$t("home-fksj"))+"："+t._s(e.dueTime))])]),n("b",{staticClass:"home-loanItem-right"},[t._v(t._s(t.$t("home-fkz")))])])]:t._e(),3===e.orderStatus?[n("div",{staticClass:"home-loanItem"},[n("i",{staticClass:"home-loanItem-flag"}),n("p",[n("b",[t._v(t._s(t.$t("home-unit"))+t._s(t.$formatMoney(e.leftAmount)))]),n("span",[t._v(t._s(t.$t("home-fksj"))+"："+t._s(e.dueTime))])]),n("b",{staticClass:"home-loanItem-right"},[t._v(t._s(t.$t("home-hkz")))])])]:t._e(),5===e.orderStatus?[n("div",{staticClass:"home-loanItem"},[n("i",{staticClass:"home-loanItem-flag"}),n("p",[n("b",[t._v(t._s(t.$t("home-unit"))+t._s(t.$formatMoney(e.leftAmount)))]),n("span",[t._v(t._s(t.$t("home-fksj"))+"："+t._s(e.dueTime))])]),n("b",{staticClass:"home-loanItem-right"},[t._v(t._s(t.$t("home-yhk")))])])]:t._e(),6===e.orderStatus?[n("div",{staticClass:"home-loanItem"},[n("i",{staticClass:"home-loanItem-flag"}),n("p",[n("b",[t._v(t._s(t.$t("home-unit"))+t._s(t.$formatMoney(e.leftAmount)))]),n("span",[t._v(t._s(t.$t("home-fksj"))+"：- - ")])]),n("b",{staticClass:"home-loanItem-right"},[t._v(t._s(t.$t("home-jksb")))])])]:t._e(),2===e.status?[n("div",{staticClass:"home-loanItem-over"},[n("i",{staticClass:"home-loanItem-flag"}),n("p",[n("i",[t._v(t._s(t.$t("home-jjdq")))]),n("b",[t._v(t._s(t.$t("home-unit"))+t._s(t.$formatMoney(e.amount)))]),n("span",[t._v(t._s(t.$t("home-dqsj"))+"："+t._s(e.dueTime))])]),n("b",{staticClass:"home-loanItem-right"},[n("van-button",{attrs:{type:"danger"},on:{click:function(n){return t.$router.push("/repayment?orderId="+e.orderId)}}},[t._v(" "+t._s(t.$t("home-ljhk"))+" "),n("van-icon",{attrs:{name:"upgrade"}})],1)],1)])]:t._e(),4===e.status?[n("div",{staticClass:"home-loanItem-over"},[n("i",{staticClass:"home-loanItem-flag"}),n("p",[n("i",[t._v(t._s(t.$t("home-yyq")))]),n("b",[t._v(t._s(t.$t("home-unit"))+t._s(t.$formatMoney(e.amount)))]),n("span",[t._v(t._s(t.$t("home-dqsj"))+"："+t._s(e.dueTime))])]),n("b",{staticClass:"home-loanItem-right"},[n("van-button",{attrs:{type:"danger"},on:{click:function(n){return t.$router.push("/repayment?orderId="+e.orderId)}}},[t._v(" "+t._s(t.$t("home-ljhk"))+" "),n("van-icon",{attrs:{name:"upgrade"}})],1)],1)])]:t._e()],2)})),0):t._e(),n("div",{staticClass:"home-body"},["1"===t.status?[n("p",{staticClass:"home-body-info"},[n("b",[t._v(t._s(t.defaultQuotaText))]),n("span",[t._v(t._s(t.$t("home-quota")))])]),n("van-divider",{style:{margin:"0",borderColor:"#EDEFF5"}}),t.tags.length>0?n("p",{staticClass:"home-tags"},t._l(t.tags,(function(e,a){return n("span",{key:a},[t._v(t._s(e))])})),0):t._e(),n("p",{staticClass:"home-body-btn"},[n("van-button",{attrs:{type:"info"},on:{click:function(e){return t.$router.push("/credit")}}},[t._v(t._s(t.$t("home-buttonText-1"))+" "),n("van-icon",{attrs:{name:"upgrade"}})],1)],1)]:t._e(),"2"===t.status?[n("div",{staticClass:"home-credit"},[n("b",[t._v(t._s(t.$t("home-credit-2-t")))]),n("p",[t._v(t._s(t.$t("cn-196")))])]),n("p",{staticClass:"home-body-btn"},[n("van-button",{staticStyle:{"text-align":"center"},attrs:{type:"info"}},[t._v(t._s(t.$t("home-buttonText-2"))+" ")])],1)]:t._e(),"3"===t.status?[n("div",{staticClass:"home-credit"},[n("b",[t._v(t._s(t.$t("home-credit-2-t")))]),n("p",[t._v(t._s(t.$t("home-credit-3"))),n("i",[t._v(t._s(t.$t("home-credit-4")))])])]),n("p",{staticClass:"home-body-btn"},[n("van-button",{staticStyle:{"text-align":"center"},attrs:{type:"info"}},[t._v(t._s(t.$t("home-buttonText-2"))+" ")])],1)]:t._e(),"4"===t.status?[n("div",{staticClass:"home-credit"},[n("b",[t._v(t._s(t.$t("cn-268")))]),n("p",[n("i",[t._v(t._s(t.$t("cn-239")))])])])]:t._e(),"5"===t.status?[n("div",{staticClass:"home-quart"},[t.tags.length>0?n("p",{staticClass:"home-tags"},t._l(t.tags,(function(e,a){return n("span",{key:a},[t._v(t._s(e))])})),0):t._e(),n("p",{staticClass:"home-quart-title"},[n("b",[t._v(t._s(t.$t("home-credit-5")))]),n("i",[t._v(t._s(t.$t("home-credit-6")))])]),n("van-divider",{style:{margin:"0",borderColor:"#EDEFF5"}}),n("div",{staticClass:"home-quart-body"},[n("div",{staticClass:"home-quart-left"},[n("b",[t._v(t._s(t.$t("home-unit"))+t._s(t.$formatMoney(5e4)))]),n("span",[t._v(t._s(t.$t("cn-260")))])])])],1),n("p",{staticClass:"home-body-btn"},[n("van-button",{attrs:{type:"info"},on:{click:function(e){return t.$router.push("/loan")}}},[t._v(t._s(t.$t("home-buttonText"))+" "),n("van-icon",{attrs:{name:"upgrade"}})],1)],1)]:t._e(),"6"===t.status?[n("div",{staticClass:"home-quart"},[t.tags.length>0?n("p",{staticClass:"home-tags"},t._l(t.tags,(function(e,a){return n("span",{key:a},[t._v(t._s(e))])})),0):t._e(),n("p",{staticClass:"home-quart-title"},[n("b",[t._v(t._s(t.$t("cn-246")))]),n("i",[t._v(t._s(t.$t("home-credit-6")))])]),n("van-divider",{style:{margin:"0",borderColor:"#EDEFF5"}}),n("div",{staticClass:"home-quart-body"},[n("div",{staticClass:"home-quart-left"},[n("b",[t._v(t._s(t.$t("home-unit"))+t._s(t.$formatMoney(t.totalQuota)))]),n("span",[t._v(t._s(t.$t("cn-260")))]),n("i",{staticClass:"home-divider"})]),n("div",{staticClass:"home-quart-right"},[n("b",[t._v(t._s(t.$t("home-unit"))+t._s(t.$formatMoney(t.accaccSub(t.totalQuota,t.leftQuota))))]),n("span",[t._v(t._s(t.$t("cn-250")))])])])],1),t.leftQuota>0?n("p",{staticClass:"home-body-btn"},[n("van-button",{attrs:{type:"info"},on:{click:function(e){return t.$router.push("/loan")}}},[t._v(t._s(t.$t("home-buttonText"))+" "),n("van-icon",{attrs:{name:"upgrade"}})],1)],1):n("p",{staticClass:"home-body-btn"},[n("van-button",{attrs:{type:"info"},on:{click:function(e){return t.$router.push("/wealth")}}},[t._v(t._s(t.$t("home-ljhk"))+" "),n("van-icon",{attrs:{name:"upgrade"}})],1)],1)]:t._e()],2)],1)},C=[],w=(n("a247"),n("9ed2")),$=(n("8d12"),n("2bb1")),S=(n("3cc4"),n("5596")),T=(n("c625"),n("b650")),P=(n("b342"),n("ad06")),L=n("a474"),R=(y={},Object(u["a"])(y,P["a"].name,P["a"]),Object(u["a"])(y,T["a"].name,T["a"]),Object(u["a"])(y,S["a"].name,S["a"]),Object(u["a"])(y,$["a"].name,$["a"]),Object(u["a"])(y,w["a"].name,w["a"]),y),j={name:"home",components:R,props:{},data:function(){return{status:"",tags:["支持无卡授信","支持银行卡","支持银行卡"],loanList:[],bannerImages:["img/banner/banner.png","img/banner/banner.png"],pageTitleKey:"homeTitle",defaultQuotaText:"",leftQuota:"",totalQuota:"",basicInfoStatus:"",idcardPicStatus:""}},computed:{},watch:{},created:function(){var t=this;Object(L["u"])({userGid:localStorage.getItem("userGid")}).then((function(e){if("0000"===e.code){var n=e.data;t.status=n.userStatus,t.defaultQuotaText=n.quotaInfo.defaultQuotaText,t.leftQuota=n.quotaInfo.leftQuota,t.totalQuota=n.quotaInfo.totalQuota,t.basicInfoStatus=n.creditInfo.basicInfoStatus,t.idcardPicStatus=n.creditInfo.idcardPicStatus,t.loanList=n.orderList||[]}else t.$toast(e.message)}))},mounted:function(){},destroyed:function(){},methods:{}},x=j,q=(n("c125"),Object(p["a"])(x,k,C,!1,null,null,null)),A=q.exports;i["a"].use(_["a"]);var I=[{path:"/",name:"home",component:A},{path:"/wealth",name:"wealth",meta:{requireAuth:!0},component:function(){return n.e("Wealth").then(n.bind(null,"2b6a"))}},{path:"/my",name:"myInfo",meta:{requireAuth:!0},component:function(){return n.e("Myinfo").then(n.bind(null,"20f3"))}},{path:"/login",name:"login",component:function(){return n.e("Login").then(n.bind(null,"e200"))}},{path:"/register",name:"register",component:function(){return n.e("Register").then(n.bind(null,"0fc6"))}},{path:"/registerPassword",name:"registerPassword",component:function(){return n.e("RegisterPassword").then(n.bind(null,"2fdd"))}},{path:"/forgetPassword",name:"forgetPassword",meta:{requireAuth:!0},component:function(){return n.e("ForgetPassword").then(n.bind(null,"8ae4"))}},{path:"/editPhone",name:"editPhone",meta:{requireAuth:!0},component:function(){return n.e("EditPhone").then(n.bind(null,"fd21"))}},{path:"/editPassword/:showType",name:"editPassword",meta:{requireAuth:!0},component:function(){return n.e("EditPassword").then(n.bind(null,"de4b"))}},{path:"/status/:showType",name:"status",meta:{requireAuth:!0},component:function(){return n.e("Status").then(n.bind(null,"56c9"))}},{path:"/addBank",name:"addBank",meta:{requireAuth:!0},component:function(){return n.e("AddBankCard").then(n.bind(null,"80ff"))}},{path:"/banklist",name:"banklist",meta:{requireAuth:!0},component:function(){return n.e("BankList").then(n.bind(null,"bba4"))}},{path:"/billDetail",name:"billDetail",meta:{requireAuth:!0},component:function(){return n.e("BillDetail").then(n.bind(null,"2a73"))}},{path:"/credit",name:"credit",meta:{requireAuth:!0},component:function(){return n.e("Credit").then(n.bind(null,"69d7"))}},{path:"/creditStatus",name:"creditStatus",meta:{requireAuth:!0},component:function(){return n.e("CreditStatus").then(n.bind(null,"19e5"))}},{path:"/creditUpfile",name:"creditUpfile",meta:{requireAuth:!0},component:function(){return n.e("CreditUpfile").then(n.bind(null,"2f84"))}},{path:"/loan",name:"loan",meta:{requireAuth:!0},component:function(){return n.e("Loan").then(n.bind(null,"0cc7"))}},{path:"/loanConfirm",name:"loanConfirm",meta:{requireAuth:!0},component:function(){return n.e("LoanConfirm").then(n.bind(null,"a8f9"))}},{path:"/loanResult",name:"loanResult",meta:{requireAuth:!0},component:function(){return n.e("LoanResult").then(n.bind(null,"f35c"))}},{path:"/repayment",name:"repayment",meta:{requireAuth:!0},component:function(){return n.e("Repayment").then(n.bind(null,"4e29"))}},{path:"/repaymentResult",name:"repaymentResult",meta:{requireAuth:!0},component:function(){return n.e("RepaymentResult").then(n.bind(null,"25f0d"))}}],O=new _["a"]({routes:I});O.beforeEach((function(t,e,n){window.scrollTo(0,0),t.matched.some((function(t){return t.meta.requireAuth}))?localStorage.getItem("Token")?n():n("/login"):n()}));var E=O,M=n("2f62");i["a"].use(M["a"]);var B=new M["a"].Store({state:{},mutations:{},actions:{},modules:{}}),N=(n("4160"),n("ac1f"),n("466d"),n("159b"),n("ddb0"),n("a925"));function F(){var t=n("dd9f"),e={};return t.keys().forEach((function(n){var a=n.match(/([A-Za-z0-9-_]+)\./i);if(a&&a.length>1){var o=a[1];e[o]=t(n)}})),e}i["a"].use(N["a"]);var D,U=new N["a"]({locale:"cn",fallbackLocale:"en",messages:F()}),Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.isLogin?"vay-head-login":"vay-head"},[n("van-nav-bar",{attrs:{title:t.$t(this.titleKey),"left-text":t.leftText,fixed:t.fixed,"right-text":"",border:!t.isLogin,"left-arrow":t.showLeftIcon},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}})],1)},W=[],z=(n("da02"),n("6b41")),K=(D={},Object(u["a"])(D,T["a"].name,T["a"]),Object(u["a"])(D,z["a"].name,z["a"]),D),G={name:"PageHead",components:K,props:{titleKey:{type:String,default:""},isLogin:{type:Boolean,default:!1},showBack:{type:Boolean,default:!1},fixed:{type:Boolean,default:!0}},data:function(){return{}},computed:{leftText:function(){return this.showBack?this.$t("back"):""},showLeftIcon:function(){return["/","/home","/login","/wealth","/my"].indexOf(this.$route.path)<0}},watch:{},created:function(){},mounted:function(){},destroyed:function(){},methods:{onClickLeft:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/")},onClickRight:function(){}}},J=G,H=(n("88d9"),Object(p["a"])(J,Q,W,!1,null,"15cb9022",null)),X=H.exports;n("a7fe");var Z={PageHead:X};i["a"].use(r["a"]),i["a"].use(o["a"],{}),i["a"].mixin({components:Z}),new i["a"]({router:E,store:B,i18n:U,render:function(t){return t(g)}}).$mount("#app")},"88d9":function(t,e,n){"use strict";var a=n("cc64"),o=n.n(a);o.a},"9e9d":function(t,e,n){"use strict";n("99af"),n("d3b7");var a=n("bc3a"),o=n.n(a),r=o.a.create({timeout:3e4});r.interceptors.request.use((function(t){return t.headers={"Content-Type":"application/json","X-Auth-Token":localStorage.getItem("Token")||""},t}),(function(t){return Promise.reject(t)})),r.interceptors.response.use((function(t){return t.data&&"1003"===t.data.code&&(localStorage.removeItem("Token"),localStorage.removeItem("userGid"),window.location.href="/#/login"),t.data}),(function(t){if(t&&t.response){var e=t.response.status;switch(e){case 400:t.message=t.response.data.message;break;case 401:t.message="未授权，请登录， 错误代码:".concat(e);break;case 403:t.message="拒绝访问， 错误代码:".concat(e);break;case 404:t.message="请求地址出错: ".concat(t.response.config.url," , 错误代码:").concat(e);break;case 408:t.message="请求超时， 错误代码:".concat(e);break;case 500:t.message="服务器内部错误， 错误代码:".concat(e);break;case 501:t.message="服务未实现， 错误代码:".concat(e);break;case 502:t.message="网关错误， 错误代码:".concat(e);break;case 503:t.message="服务不可用， 错误代码:".concat(e);break;case 504:t.message="网关超时， 错误代码:".concat(e);break;case 505:t.message="HTTP版本不受支持， 错误代码:".concat(e);break;default:t.message="服务异常， 错误代码:".concat(e);break}}return Promise.reject(t)}));var i={$axios:o.a,$axiosInstance:r,$get:function(t){return r({url:t.url,method:"get",params:t.params})},$post:function(t){return r({url:t.url,method:"post",data:JSON.stringify(t.params)})}};e["a"]=i},a474:function(t,e,n){"use strict";n.d(e,"n",(function(){return r})),n.d(e,"o",(function(){return i})),n.d(e,"l",(function(){return s})),n.d(e,"q",(function(){return c})),n.d(e,"m",(function(){return u})),n.d(e,"t",(function(){return l})),n.d(e,"u",(function(){return d})),n.d(e,"s",(function(){return m})),n.d(e,"r",(function(){return f})),n.d(e,"h",(function(){return h})),n.d(e,"i",(function(){return p})),n.d(e,"g",(function(){return b})),n.d(e,"c",(function(){return g})),n.d(e,"d",(function(){return v})),n.d(e,"b",(function(){return y})),n.d(e,"a",(function(){return _})),n.d(e,"k",(function(){return k})),n.d(e,"j",(function(){return C})),n.d(e,"p",(function(){return w})),n.d(e,"f",(function(){return $})),n.d(e,"e",(function(){return S}));var a=n("9e9d"),o="https://bee-qa.honeycombs.top:8070/galaxy",r=function(t){return a["a"].$post({url:"".concat(o,"/code/pic"),params:t})},i=function(t){return a["a"].$post({url:"".concat(o,"/register"),params:t})},s=function(t){return a["a"].$post({url:"".concat(o,"/logon"),params:t})},c=function(t){return a["a"].$post({url:"".concat(o,"/code/sms"),params:t})},u=function(t){return a["a"].$post({url:"".concat(o,"/user/logonout"),params:t})},l=function(t){return a["a"].$post({url:"".concat(o,"/user/resetPwd"),params:t})},d=function(t){return a["a"].$post({url:"".concat(o,"/user/status/query"),params:t})},m=function(t){return a["a"].$post({url:"".concat(o,"/user/multi"),params:t})},f=function(t){return a["a"].$post({url:"".concat(o,"/user/info"),params:t})},h=function(t){return a["a"].$post({url:"".concat(o,"/credit/basic/save"),params:t})},p=function(t){return a["a"].$post({url:"".concat(o,"/credit/idcardpic/save"),params:t})},b=function(t){return a["a"].$post({url:"".concat(o,"/credit/query"),params:t})},g=function(t){return a["a"].$post({url:"".concat(o,"/bankcard/delete"),params:t})},v=function(t){return a["a"].$post({url:"".concat(o,"/bank/list"),params:t})},y=function(t){return a["a"].$post({url:"".concat(o,"/bankcard/list"),params:t})},_=function(t){return a["a"].$post({url:"".concat(o,"/bankcard/add"),params:t})},k=function(t){return a["a"].$post({url:"".concat(o,"/loan/product/cal"),params:t})},C=function(t){return a["a"].$post({url:"".concat(o,"/loan/apply"),params:t})},w=function(t){return a["a"].$post({url:"".concat(o,"/repayment/apply"),params:t})},$=function(t){return a["a"].$post({url:"".concat(o,"/bill/list"),params:t})},S=function(t){return a["a"].$post({url:"".concat(o,"/bill/detail"),params:t})}},a7fe:function(t,e,n){"use strict";n.r(e);n("4160"),n("c975"),n("a15b"),n("0d03"),n("a9e3"),n("b680"),n("d3b7"),n("acd8"),n("ac1f"),n("25f0"),n("466d"),n("5319"),n("841c"),n("1276"),n("159b");var a=n("2b0e"),o=n("9e9d"),r=(n("f815"),n("ec66"),n("fe3c"));r.attach(document.body);var i={$isDev:!1,$isNullOrEmpty:function(t){return(0!==t||"0"!==t)&&(null===t||void 0===t||""===t||"null"===t||"undefined"===typeof t)},$formatMoney:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(isNaN(Number(t)))return t;var a,o,r,i,s,c,u="",l=".";for((t+"").indexOf("-")>-1&&(u="-"),t=Math.abs(parseFloat(t)).toFixed(2),t+="",a=t.split("."),o=a[0],r=a.length>1?l+a[1]:"",i="",s=0,c=o.length;s<c;++s)0!==s&&s%3===0&&(i=e+i),i=o[c-s-1]+i;o=i;var d=u+o+r;return n&&(d=d.replace(".00","")),d},$isNumber:function(t){return"NaN"!=parseFloat(t).toString()},$urlParse:function(){var t=window.location.search,e={},n=/[?&][^?&]+=[^?&]+/g,a=t.match(n);return a&&a.forEach((function(t){var n=t.substring(1).split("="),a=decodeURIComponent(n[0]),o=decodeURIComponent(n[1]);e[a]=o})),e},$getUuid:function(t,e){var n,a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),o=[];for(i.$isNullOrEmpty(t)&&(t=16),i.$isNullOrEmpty(e)&&(e=16),n=0;n<t;n++)o[n]=a[0|Math.random()*e];return o.join("")},accAdd:function(t,e){var n,a,o,r;try{n=t.toString().split(".")[1].length}catch(s){n=0}try{a=e.toString().split(".")[1].length}catch(s){a=0}if(o=Math.pow(10,Math.max(n,a)),r=Math.abs(n-a),r>0){var i=Math.pow(10,r);n>a?(t=Number(t.toString().replace(".","")),e=Number(e.toString().replace(".",""))*i):(t=Number(t.toString().replace(".",""))*i,e=Number(e.toString().replace(".","")))}else t=Number(t.toString().replace(".","")),e=Number(e.toString().replace(".",""));return(t+e)/o},accSub:function(t,e){var n,a,o;try{n=t.toString().split(".")[1].length}catch(r){n=0}try{a=e.toString().split(".")[1].length}catch(r){a=0}return o=Math.pow(10,Math.max(n,a)),(i.accMul(t,o)-i.accMul(e,o))/o},accMul:function(t,e){var n=0,a=t.toString(),o=e.toString();try{n+=a.split(".")[1].length}catch(r){n+=0}try{n+=o.split(".")[1].length}catch(r){n+=0}return Number(a.replace(".",""))*Number(o.replace(".",""))/Math.pow(10,n)},accDiv:function(t,e){var n,a,o=0,r=0;try{o=t.toString().split(".")[1].length}catch(s){o=0}try{r=e.toString().split(".")[1].length}catch(s){r=0}return n=Number(t.toString().replace(".","")),a=Number(e.toString().replace(".","")),i.accMul(n/a,Math.pow(10,r-o))},jsToFixed:function(t,e){var n=Math.round(t*Math.pow(10,e))/Math.pow(10,e);return n.toFixed(e)}};Object.assign(i,o["a"]),Object.assign(a["a"].prototype,i)},aa5a:function(t){t.exports=JSON.parse('{"homeTitle":"首页","loginTitle":"登录","myTitle":"我的","wealthTitle":"财富","registerTitle":"注册","registerPasswordTitle":"设置密码","ForgetPasswordTitle":"找回密码","editPhoneTitle":"修改手机号","editPasswordTitle":"修改密码","addBankTitle":"添加银行卡","bankListTitle":"银行卡","billDetailTitle":"订单详情","creditTitle":"授信","creditStatusTitle":"授信","creditUpfileTitle":"授信","loanTitle":"借款","loanConfirmTitle":"借款","loanResultTitle":"借款","repaymentTitle":"还款","repaymentResultTitle":"还款","statusTitle":"注册","submitText":"提交","home-unit":"¥","home-quota":"预计额度","home-buttonText":"立即申请","home-buttonText-1":"去授信","home-buttonText-2":"刷新进度","home-fksj":"还款时间","home-fkz":"放款中...","home-hkz":"还款中...","home-yhk":"已还款","home-jksb":"借款失败","home-jjdq":"即将到期","home-dqsj":"到期时间","home-ljhk":"立即还款","home-yyq":"已逾期","home-credit-2-t":"授信审核中","home-credit-3":"人工审核中，如有疑问请联系客服：","home-credit-4":"100-0010012","home-credit-5":"短期周转","home-credit-6":"(7天，14天)","addbank-tips":"账号持有人姓名必须与借款人相同","addbank-tips2":"请绑定非Gojek类型银行卡，保障借款正常到账。","addbank-name":"账号持有人姓名：","addbank-name2":"Coins.ph账户姓名","addbank-bankname":"银行名称：","addbank-bankname-p":"请选择银行","addbank-bankCode":"银行账号：","addbank-bankCode-p":"请输入银行账号","addbank-switch":"选择银行","addbank-toast1":"姓名获取失败，请刷新页面重试","addbank-toast2":"获取银行信息失败，请刷新页面重试","addbank-toast3":"请输入银行卡号","banklist-btn":"添加银行卡","banklist-tips1":"删除操作不可恢复","banklist-tips2":"确定要删除您尾号为","banklist-tips3":"的银行卡吗?","login-phonePlace":"请输入手机号","login-toForget":"忘记密码 ?","login-submit":"登录","login-tips":"登录即代表您同意","login-userContract":"用户服务协议","login-Contract":"会员协议","login-goReg":"还没有账户，","login-goRegBtn":"现在注册","login-passPlace":"请输入密码","cn-320":"银行处理中","cn-346":"借款金额","cn-86":"借款周期","cn-348":"借款时间","cn-71":"到账银行卡","cn-349":"到账时间","cn-73":"总计代还","cn-300":"服务费","cn-75":"到期时间","cn-76":"立即还款","cn-342":"还款中","cn-36":"已逾期","cn-288":"天","cn-45":"逾期费","cn-47":"逾期","cn-344":"已还款","cn-95":"还款金额","cn-345":"借款失败","cn-340":"打款中","cn-277":"手续费","cn-351":"数据异常","cn-100":"这里不知道写了一堆啥玩意儿这里不知道写了一堆啥玩意儿这里不知道写了一堆啥玩意儿这里不知道写了一堆啥玩意儿","cn-101":"姓名","cn-184":"证件类型","cn-185":"证件号码","cn-106":"联系人关系","cn-107":"联系人号码","cn-209":"下一步","cn-110":"父子","cn-111":"母子","cn-112":"兄弟姐妹","cn-114":"请输入身份证号","cn-118":"您的资料正在审核中，审核人员将在工作日内进行电话核实，请注意接听","cn-121":"提交申请","cn-122":"正在审核结果","cn-123":"审核结果","cn-124":"提示: 若不在服务时间内提交的审核，即第二天会给出结果","cn-127":"服务时间:08.00-24.00","cn-338":"返回首页","cn-130":"您暂时不能借款","cn-132":"身份证照片","cn-133":"手持身份证照片","cn-135":"拍照","cn-307":"提交","cn-149":"请上传身份证正面照片","cn-150":"请上传手持身份证照片","cn-152":"选择种验证方式，完成身份验证，确定该号码属于您","cn-155":"通过短信验让码验证","cn-156":"原有号码仍可使用时选择。我们会给您发送一条带有验证码的短信，输入验证码，完成验证。","cn-161":"通过ID证件验证","cn-162":"输入您提交过的证件号码","cn-165":"请输入您注册时使用的手机号码","cn-166":"如果您换了常用手机号，可以使用修改注册手机码功能。手机号修改后，原有的号码将被注销，以后可以使用新手机号码进行登录。","cn-167":"同一账号14天内仅可中请一次修改注册手机号","cn-169":"请输入验证码：","cn-170":"您选择了通过ID证件验证的方式，请输入您之前提交过的证件信息，进行验证。","cn-194":"请输入您的新手机号码:","cn-195":"请输入新的手机号，我们将发送一条包含验证码的短信，填入验证码进行验证。","cn-196":"正常情况下审核需要5分钟，提交更多资料可以加快审核进度","cn-443":"请输入手机号","cn-433":"请输入验证码","cn-188":"返回","cn-447":"获取验证码","cn-439":"请输入注册手机号","cn-205":"请设置登录密码","cn-207":"请再次输入登录密码","cn-213":"请输入新密码","cn-215":"请再次输入新密码","cn-446":"验证码发送失败","cn-268":"授信失败","cn-239":"暂不符合借款要求","cn-260":"总额度","cn-246":"支持短期借款","cn-250":"已用额度","cn-271":"当前可用借款额度","cn-274":"借款期限","cn-275":"还款日","cn-278":"收款账号","cn-305":"同意","cn-306":"借款服务协议","cn-332":"到账金额","cn-301":"实际到账","cn-330":"到账日期","cn-337":"查看账单","cn-328":"借款成功","cn-329":"借款已打入收款账户","cn-418":"协议内容","cn-419":"请输入登录账号","cn-420":"请输入登录密码","cn-424":"重置密码","cn-425":"关于我们","cn-426":"退出登录","cn-428":"未绑定银行卡","cn-434":"确认","cn-440":"请输入密码","cn-441":"请再次输入密码","cn-1001":"借款处理中","cn-1002":"预计10分钟后到账","cn-1003":"银行卡","cn-1004":"登录即代表您同意","cn-1005":"《用户服务协议》","cn-1006":"《用户服务协议》","cn-1007":"通过任意方式汇款到以下还款账号","cn-1008":"6210 2888 3203 2843 000","cn-1009":"1.有问题找客服，客服电话：032928390","cn-1010":"2.每个账号只对应一笔借款交易。如果您有两个以上或有新借款交易，请检查对应的还款账号。请不要一次性还两个以上借款。","cn-1011":"3.拍照记录您的所有汇款凭证。","cn-1012":"累计借款总额","cn-1013":"立即借款","cn-1014":"共有","cn-1015":"笔账单即将到期","cn-1016":"当前没有账单","cn-1017":"去借款","cn-1018":"借款日期：","cn-1019":"逾期金额","cn-1020":"本期应还","cn-1021":"今日到期","cn-1022":"明日到期","cn-1023":"借款到账中..","cn-1024":"重新借款","cn-1025":"借款失败，请重新借款","cn-1026":"请输入姓名","cn-1027":"请输入证件号码","cn-1028":"请输入联系人号码","cn-1029":"请选择联系人关系","cn-1030":"请输入联系人号码","cn-1031":"6-18位数字字母组合","cn-442":"两次输入密码不相同"}')},c125:function(t,e,n){"use strict";var a=n("00af"),o=n.n(a);o.a},cc64:function(t,e,n){},dd9f:function(t,e,n){var a={"./cn.json":"aa5a","./vn.json":"8548"};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}o.keys=function(){return Object.keys(a)},o.resolve=r,t.exports=o,o.id="dd9f"},ec66:function(t,e,n){},f815:function(t,e,n){}});