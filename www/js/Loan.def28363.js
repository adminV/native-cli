(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Loan"],{"0cc7":function(t,e,o){"use strict";o.r(e);var a,i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("page-head",{attrs:{titleKey:"loanTitle",fixed:!0}}),o("div",{staticClass:"loan-bg"},[o("b",[t._v(t._s(t.$formatMoney(t.leftQuota)))]),o("span",[t._v(t._s(t.$t("cn-271")))])]),o("div",{staticClass:"loan-form"},[o("van-cell-group",[o("van-field",{staticClass:"loan-input",attrs:{type:"number",label:t.$t("cn-346"),placeholder:t.$t("cn-1037")},on:{blur:function(e){return t.amountHandle()}},model:{value:t.loanAmount,callback:function(e){t.loanAmount=e},expression:"loanAmount"}},[o("span",{attrs:{slot:"right-icon"},slot:"right-icon"},[t._v(t._s(t.$t("home-unit")))])]),o("van-cell",{attrs:{"is-link":"",title:t.$t("cn-274"),value:t.loanDay},on:{click:function(e){t.showSel=!0}}}),t.vouCherList.length>0?o("van-cell",{attrs:{"is-link":"",title:t.$t("cn-1063")},on:{click:function(e){t.showVoucher=!0}}},[o("template",{slot:"default"},[t.$isNullOrEmpty(t.voucherGid)?t.unAutoSelect?o("span",{staticStyle:{color:"#476AF1"}},[t._v(t._s(t.$t("cn-1066")))]):o("span",{staticStyle:{color:"#808080"}},[t._v(t._s(t.$t("cn-1067")))]):o("span",{staticStyle:{color:"#476AF1"}},[t._v(t._s(t.$t("cn-1068"))+t._s(t.$formatMoney(t.selectedVoucher.discountAmount))+t._s(t.$t("home-unit"))+t._s(t.$t("cn-1069")))]),o("span")])],2):t._e(),o("van-cell",{staticClass:"color-red",attrs:{"is-link":"",title:t.$t("cn-278"),value:t.carName},on:{click:function(e){t.showCar=!0}}})],1)],1),o("div",{staticClass:"loan-form"},[o("van-cell-group",[o("van-cell",{attrs:{title:t.$t("cn-275"),value:t.dueTime}}),o("van-cell",{attrs:{title:t.$t("cn-1038"),value:t.$formatMoney(t.leftAmount)+t.$t("home-unit")}}),t.$isNullOrEmpty(t.discountAmount)?o("van-cell",{attrs:{title:t.$t("cn-277"),value:t.$formatMoney(t.fee)+t.$t("home-unit")}}):o("van-cell",{staticStyle:{color:"#f83d14"},attrs:{title:t.$t("cn-277")}},[o("p",{attrs:{slot:"default"},slot:"default"},[o("span",{staticStyle:{display:"block",color:"#f83d14"}},[t._v(t._s(""+t.$formatMoney(t.fee)+t.$t("home-unit")+" - "+t.$formatMoney(t.discountAmount)+t.$t("home-unit")))]),o("span",{staticStyle:{display:"block",color:"#f83d14"}},[t._v(t._s("= "+t.$formatMoney(t.differenceFee))+t._s(t.$t("home-unit")))])])])],1)],1),o("div",{staticClass:"loan-contract"},[o("van-checkbox",{attrs:{shape:"square"},model:{value:t.isReadContract,callback:function(e){t.isReadContract=e},expression:"isReadContract"}}),t._v(" "+t._s(t.$t("cn-305"))+" "),o("b",{on:{click:function(e){t.showContract(1,t.$t("cn-306"))}}},[t._v("《"+t._s(t.$t("cn-306"))+"》")])],1),o("van-button",{staticClass:"reg-submit",attrs:{type:"info",loading:t.isSubmit,"loading-text":t.$t("cn-1043")},on:{click:t.submitHandle}},[t._v(t._s(t.$t("cn-307")))]),o("van-popup",{style:{paddingTop:"40px",paddingBottom:"45px"},attrs:{position:"bottom",closeable:""},model:{value:t.showSel,callback:function(e){t.showSel=e},expression:"showSel"}},[o("van-radio-group",{model:{value:t.loanDay,callback:function(e){t.loanDay=e},expression:"loanDay"}},[o("van-cell-group",t._l(t.productList,(function(e){return o("van-cell",{key:e.productCode,attrs:{title:e.periodShow,clickable:""},on:{click:function(o){t.loanDay=e.periodShow,t.productCode=e.productCode,t.showSel=!1}}},[o("van-radio",{attrs:{slot:"right-icon",name:e.periodShow},slot:"right-icon"})],1)})),1)],1)],1),o("van-popup",{style:{paddingTop:"40px",paddingBottom:"45px"},attrs:{position:"bottom",closeable:""},model:{value:t.showCar,callback:function(e){t.showCar=e},expression:"showCar"}},[o("van-radio-group",{model:{value:t.carName,callback:function(e){t.carName=e},expression:"carName"}},[o("van-cell-group",t._l(t.bankCardList,(function(e,a){return o("van-cell",{key:a,attrs:{title:e.bankName+"-"+e.cardNo,clickable:""},on:{click:function(o){t.carName=e.bankName+"-"+e.cardNo,t.bankCardGid=e.cardGid,t.showCar=!1}}},[o("van-radio",{attrs:{slot:"right-icon",name:e.bankName+"-"+e.cardNo},on:{click:function(o){t.bankCardGid=e.cardGid}},slot:"right-icon"})],1)})),1)],1)],1),o("van-popup",{style:{height:"80%",minHeight:"30%",paddingTop:"40px",paddingBottom:"60px"},attrs:{position:"bottom",closeable:""},model:{value:t.showVoucher,callback:function(e){t.showVoucher=e},expression:"showVoucher"}},[o("van-radio-group",{staticClass:"voucher-body",model:{value:t.voucherGid,callback:function(e){t.voucherGid=e},expression:"voucherGid"}},t._l(t.vouCherList,(function(e,a){return o("div",{key:a,staticClass:"voucher-item",on:{click:function(e){t.showVoucher=!1}}},[o("div",{class:e.disabled?"voucherItem-used":"voucherItem"},[o("p",{staticClass:"voucherLeft"},[o("b",[t._v(t._s(e.name))]),o("span",{class:e.disabled?"red":""},[t._v(t._s(t.$t("cn-1058"))+t._s(t.$formatMoney(e.loanAmountLimit))+t._s(t.$t("home-unit")))]),o("span",[t._v(t._s(e.startDate)+" - "+t._s(e.endDate)+" "+t._s(t.$t("cn-1059")))])]),o("p",{staticClass:"voucherRight"},[o("b",[t._v(t._s(t.$formatMoney(e.discountAmount))+t._s(t.$t("home-unit")))]),o("span",[t._v(t._s(t.$t("cn-1060")))])])]),e.disabled?t._e():o("div",{staticClass:"voucher-radio"},[o("van-radio",{attrs:{"icon-size":"25","checked-color":"#e40e0e",name:e.discountGid}})],1)])})),0),o("p",{staticClass:"voucher-title"},[t._v(t._s(t.$t("cn-1070")))]),o("van-button",{staticClass:"voucher-nosel",attrs:{type:"info"},on:{click:t.unUseChart}},[t._v(t._s(t.$t("cn-1071")))])],1),o("van-dialog",{attrs:{confirmButtonText:t.$t("cn-434"),cancelButtonText:t.$t("cn-1051"),title:t.contractTitle},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[o("div",{staticClass:"contract-model",attrs:{id:"contractBody"}},[(t.showContractType,o("p"))])])],1)},n=[],s=(o("99af"),o("d81d"),o("4e82"),o("b0c0"),o("acd8"),o("ac1f"),o("5319"),o("2fa7")),c=(o("b342"),o("ad06")),u=(o("87d0"),o("e41f")),r=(o("608d"),o("9f14")),l=(o("01bb"),o("e27c")),d=(o("9eda"),o("565f")),h=(o("c625"),o("b650")),m=(o("3ec1"),o("7744")),p=(o("2a53"),o("34e9")),f=(o("47e2"),o("2241")),v=(o("9753"),o("417e")),$=(o("6370"),o("3acc")),b=o("a474"),C=(a={},Object(s["a"])(a,$["a"].name,$["a"]),Object(s["a"])(a,v["a"].name,v["a"]),Object(s["a"])(a,f["a"].Component.name,f["a"].Component),Object(s["a"])(a,p["a"].name,p["a"]),Object(s["a"])(a,m["a"].name,m["a"]),Object(s["a"])(a,h["a"].name,h["a"]),Object(s["a"])(a,d["a"].name,d["a"]),Object(s["a"])(a,l["a"].name,l["a"]),Object(s["a"])(a,r["a"].name,r["a"]),Object(s["a"])(a,u["a"].name,u["a"]),Object(s["a"])(a,c["a"].name,c["a"]),a),g={name:"Loan",components:C,props:{},data:function(){return{loanAmount:"",loanDay:"",carName:this.$t("cn-1042"),isReadContract:!0,showContractType:"",contractTitle:"",show:!1,showSel:!1,showVoucher:!1,isSubmit:!1,showCar:!1,unAutoSelect:!1,productCode:"",bankCardList:[],vouCherList:[],productList:[],canUsedVoucherList:[],selectedVoucher:{},bankCardGid:"",voucherGid:"",fee:"0",discountAmount:"",differenceFee:"0",dueTime:"",leftAmount:"0",leftQuota:"0",totalQuota:""}},computed:{},watch:{voucherGid:function(){this.$isNullOrEmpty(this.voucherGid)||this.onChersChange(),this.onVoucherAndProductChange()},productCode:function(){this.onVoucherAndProductChange()}},created:function(){var t=this;this.$axios.all([Object(b["x"])({userGid:localStorage.getItem("userGid")}),Object(b["q"])({userGid:localStorage.getItem("userGid")})]).then((function(e){var o=e[0].data,a=e[1].data;"0000"!==e[0].code||"0000"!==e[1].code?t.$toast(e[0].message||e[1].message):(t.productList=a.productList||[],t.productList&&t.productList.length>0&&(t.productCode=t.productList[0].productCode,t.loanDay=t.productList[0].periodShow),o.bankCardList&&o.bankCardList.length>0?(t.totalQuota=o.quotaInfo.totalQuota,t.leftQuota=o.quotaInfo.leftQuota,t.$nextTick((function(){t.loanAmount=(o.productInfo.leftAmount||"0").replace(/,/g,"");var e=o.discountInfoList;t.formatVoucherList(e,t.leftQuota),t.amountHandle()})),t.bankCardList=o.bankCardList):f["a"].alert({cancelButtonText:t.$t("cn-1051"),confirmButtonText:t.$t("cn-1036"),title:t.$t("cn-1034"),message:t.$t("cn-1035")}).then((function(){t.$router.push("/addBank")})))}))},mounted:function(){},destroyed:function(){},methods:{onVoucherAndProductChange:function(){var t=this;if(this.$isNullOrEmpty(this.loanAmount)||!this.$isNumber(this.loanAmount))return this.dueTime="- - ",this.leftAmount="0",this.fee="0",this.discountAmount="",this.voucherGid="",void(this.selectedVoucher={});var e=parseFloat(this.loanAmount);if(e%1e4!==0||e<5e4||e>1e7)return this.dueTime="- - ",this.leftAmount="0",this.fee="0",this.discountAmount="",this.voucherGid="",void(this.selectedVoucher={});this.$isNullOrEmpty(this.productCode)?this.$toast(this.$t("cn-1041")):Object(b["m"])({userGid:localStorage.getItem("userGid"),loanAmount:this.loanAmount,productCode:this.productCode,discountGid:this.voucherGid}).then((function(e){if("0000"===e.code){var o=e.data;t.dueTime=o.dueTime,t.leftAmount=o.leftAmount,t.fee=o.fee;var a=(o.discountAmount||"").replace(/,/g,"");if(t.$isNullOrEmpty(a)||t.$isNullOrEmpty(t.voucherGid))a="";else{var i=o.fee.replace(/,/g,""),n=t.accSub(i,a);n<0&&(n="0",a=i),t.differenceFee=n}t.discountAmount=a}else t.$toast(e.message)})).catch((function(){t.$toast(t.$t("cn-1044"))}))},formatVoucherList:function(t,e){var o=this;if(this.$isNullOrEmpty(t)||0===t.length)return this.canUsedVoucherList=[],void(this.vouCherList=[]);e=e.replace(/,/g,"").replace(/₫/g,"");var a=[],i=[];t.map((function(t){var n=o.$getDateTime(t.endDate);if(t.endDataTimeStem=n,t.startDataTimeStem=o.$getDateTime(t.startDate),"0"===t.useStatus){var s=t.loanAmountLimit.replace(/,/g,"");parseFloat(s)>parseFloat(e)?(t.pageMsg="最低借款金额大于当前剩余可借额度",t.disabled=!0,i.push(t)):(t.pageMsg="",t.disabled=!1,a.push(t))}})),i.sort((function(t,e){return t.endDataTimeStem-e.endDataTimeStem})),a.sort((function(t,e){return t.endDataTimeStem-e.endDataTimeStem})),i.sort((function(t,e){return o.$preFormatMoney(e.discountAmount)-o.$preFormatMoney(t.discountAmount)})),a.sort((function(t,e){return o.$preFormatMoney(e.discountAmount)-o.$preFormatMoney(t.discountAmount)})),this.canUsedVoucherList=a,this.vouCherList=a.concat(i)},getBestVoucher:function(t){var e=this;if(this.unAutoSelect||this.$isNullOrEmpty(t))return"";t=parseFloat(t);var o=null;return this.canUsedVoucherList.map((function(a){var i=a.loanAmountLimit.replace(/,/g,"");e.$isNullOrEmpty(o)&&t>=parseFloat(i)&&(o=a)})),this.$isNullOrEmpty(o)?(this.voucherGid="",this.selectedVoucher={}):(this.voucherGid=o.discountGid,this.selectedVoucher=o),this.voucherGid},onChersChange:function(){var t=this,e=this.vouCherList;e.map((function(e){if(e.discountGid===t.voucherGid){t.selectedVoucher=e,t.unAutoSelect=!1;var o=(e.loanAmountLimit||"0").replace(/,/g,"");t.loanAmount=parseFloat(o)>parseFloat(t.loanAmount)?o:t.loanAmount,t.amountHandle(e.discountGid)}}))},unUseChart:function(){this.showVoucher=!1,this.voucherGid="",this.unAutoSelect=!0},showContract:function(t,e){this.showContractType=t,this.contractTitle=e,this.show=!0,this.$nextTick((function(){document.getElementById("contractBody").scrollTo(0,0)}))},submitHandle:function(){var t=this;if(!this.isSubmit){if(this.isSubmit=!0,!this.isReadContract)return this.$toast(this.$t("cn-1040")),void(this.isSubmit=!1);if(this.$isNullOrEmpty(this.loanAmount)||!this.$isNumber(this.loanAmount))return this.$toast(this.$t("cn-1037")),void(this.isSubmit=!1);var e=parseFloat(this.loanAmount);return e%1e4!==0||e<5e4||e>1e7?(this.$toast(this.$t("cn-1039")),void(this.isSubmit=!1)):this.$isNullOrEmpty(this.productCode)?(this.$toast(this.$t("cn-1041")),void(this.isSubmit=!1)):this.$isNullOrEmpty(this.bankCardGid)?(this.$toast(this.$t("cn-1042")),void(this.isSubmit=!1)):!this.$isNullOrEmpty(this.voucherGid)&&e<parseFloat(this.selectedVoucher.loanAmountLimit)?(this.$toast(this.$t("cn-1072")),void(this.isSubmit=!1)):this.$isNullOrEmpty(this.fee)||0===parseFloat(this.fee)?(this.$toast(this.$t("cn-10441")),void(this.isSubmit=!1)):void Object(b["l"])({userGid:localStorage.getItem("userGid"),loanAmount:this.loanAmount,productCode:this.productCode,cardGid:this.bankCardGid,discountGid:this.voucherGid}).then((function(e){if("0000"===e.code){var o=e.data;t.$router.replace({path:"/loanResult",query:{orderId:o.orderId}})}else t.$toast(e.message),t.isSubmit=!1})).catch((function(){t.$toast(t.$t("cn-1044")),t.isSubmit=!1}))}},amountHandle:function(t){var e=this;if(this.$isNullOrEmpty(this.loanAmount)||!this.$isNumber(this.loanAmount))return this.$toast(this.$t("cn-1037")),this.dueTime="- - ",this.leftAmount="0",this.fee="0",this.discountAmount="",this.voucherGid="",void(this.selectedVoucher={});var o=parseFloat(this.loanAmount);if(o%1e4!==0||o<5e4||o>1e7)return this.$toast(this.$t("cn-1039")),this.dueTime="- - ",this.leftAmount="0",this.fee="0",this.discountAmount="",this.voucherGid="",void(this.selectedVoucher={});if(this.$isNullOrEmpty(this.productCode))this.$toast(this.$t("cn-1041"));else{var a=this.$isNullOrEmpty(t)?this.getBestVoucher(o):t;Object(b["m"])({userGid:localStorage.getItem("userGid"),loanAmount:this.loanAmount,productCode:this.productCode,discountGid:a}).then((function(t){if("0000"===t.code){var o=t.data;e.dueTime=o.dueTime,e.leftAmount=o.leftAmount,e.fee="".concat(o.fee);var i=(o.discountAmount||"").replace(/,/g,"");if(e.$isNullOrEmpty(a)||e.$isNullOrEmpty(i))i="";else{var n=o.fee.replace(/,/g,""),s=e.accSub(n,i);s<0&&(s="0",i=n),e.differenceFee=s}e.discountAmount=i}else e.$toast(t.message)})).catch((function(){e.$toast(e.$t("cn-1044"))}))}}}},y=g,A=(o("9384"),o("b88d"),o("2877")),_=Object(A["a"])(y,i,n,!1,null,"ffaf073e",null);e["default"]=_.exports},9384:function(t,e,o){"use strict";var a=o("c304"),i=o.n(a);i.a},b88d:function(t,e,o){"use strict";var a=o("de93"),i=o.n(a);i.a},c304:function(t,e,o){},de93:function(t,e,o){}}]);