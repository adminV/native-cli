(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Loan"],{"0cc7":function(t,e,o){"use strict";o.r(e);var n,a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("page-head",{attrs:{titleKey:"loanTitle",fixed:!0}}),o("div",{staticClass:"loan-formitem"},[o("div",{staticClass:"loan-div"},[o("h3",[t._v(t._s(t.$t("cn-2146")))]),o("b",[t._v(t._s(t.$t("home-unit"))+t._s(t.$formatMoney(t.loanAmount)))]),o("van-slider",{attrs:{"bar-height":"6",min:t.step,step:t.step,max:parseFloat(t.formatAmount(t.leftQuota)),"active-color":"#4252D4"},on:{change:t.onChangeLoanAmount},model:{value:t.loanAmount,callback:function(e){t.loanAmount=e},expression:"loanAmount"}}),o("i",{staticClass:"left"},[t._v(t._s(t.step))]),o("i",{staticClass:"right"},[t._v(t._s(t.formatAmount(t.leftQuota)))])],1)]),o("div",{staticClass:"loan-formitem"},[o("div",{staticClass:"loan-div"},[o("h3",[t._v(t._s(t.$t("cn-274")))]),o("div",{staticClass:"loan-term-btn"},t._l(t.productList,(function(e){return o("van-button",{key:e.periodShow,attrs:{type:t.getCellType(e)},on:{click:function(o){return t.selectProduct(e)}}},[t._v(t._s(e.periodShow))])})),1)])]),o("div",{staticClass:"loan-form"},[o("van-cell-group",[o("van-cell",{attrs:{"is-link":"","arrow-direction":t.showPayType?"down":""},on:{click:function(e){t.showPayType=!t.showPayType}},scopedSlots:t._u([{key:"icon",fn:function(){return[o("i",{staticClass:"product-icon"})]},proxy:!0},{key:"title",fn:function(){return[o("p",{staticClass:"product-title"},[o("b",[t._v(t._s(t.payName))]),o("span",[t._v(t._s(t.$t("cn-21471")))])])]},proxy:!0}])}),o("van-cell",{directives:[{name:"show",rawName:"v-show",value:t.showPayType,expression:"showPayType"}],attrs:{"arrow-direction":t.showPayType?"down":""},scopedSlots:t._u([{key:"title",fn:function(){return[o("p",{staticClass:"product-channel-title",on:{click:t.checkChannelType}},[t._v(t._s(t.$t("cn-21472")))])]},proxy:!0},{key:"right-icon",fn:function(){return[o("van-icon",{attrs:{name:t.selectPayChannel?"checked":"circle",size:"22",color:"#495FED"},on:{click:t.checkChannelType}})]},proxy:!0}])})],1)],1),o("div",{staticClass:"loan-form"},[o("van-cell-group",[t.vouCherList.length>0?o("van-cell",{attrs:{"is-link":"",title:t.$t("cn-1063")},on:{click:function(e){t.showVoucher=!0}}},[o("template",{slot:"default"},[t.$isNullOrEmpty(t.voucherGid)?t.unAutoSelect?o("span",{staticStyle:{color:"var(--theme-color)"}},[t._v(t._s(t.$t("cn-1066")))]):o("span",{staticStyle:{color:"#808080"}},[t._v(t._s(t.$t("cn-1067")))]):o("span",{staticStyle:{color:"var(--theme-color)"}},[t._v(t._s(t.$t("cn-1068"))+" "+t._s(t.$t("home-unit"))+t._s(t.$formatMoney(t.selectedVoucher.discountAmount)))]),o("span")])],2):t._e()],1)],1),o("div",{staticClass:"loan-form"},[o("van-cell-group",[o("van-cell",{attrs:{title:t.$t("cn-275"),value:t.dueTime}}),o("van-cell",{attrs:{title:t.$t("cn-1038"),value:t.$t("home-unit")+t.$formatMoney(t.leftAmount)}}),t.$isNullOrEmpty(t.discountAmount)?o("van-cell",{attrs:{title:t.$t("cn-277"),value:t.$t("home-unit")+t.$formatMoney(t.fee)}}):o("van-cell",{staticStyle:{color:"#f83d14"},attrs:{title:t.$t("cn-277")}},[o("p",{attrs:{slot:"default"},slot:"default"},[o("span",{staticStyle:{display:"block",color:"#f83d14"}},[t._v(t._s(""+t.$t("home-unit")+t.$formatMoney(t.fee)+" - "+t.$t("home-unit")+t.$formatMoney(t.discountAmount)))]),o("span",{staticStyle:{display:"block",color:"#f83d14"}},[t._v(t._s("= "+t.$t("home-unit")+t.$formatMoney(t.differenceFee)))])])])],1)],1),o("div",{staticClass:"loan-contract"},[o("van-checkbox",{model:{value:t.isReadContract,callback:function(e){t.isReadContract=e},expression:"isReadContract"}}),t._v(" "+t._s(t.$t("cn-305"))+" "),o("b",{on:{click:function(e){t.showContract(1,t.$t("cn-306"))}}},[t._v("《"+t._s(t.$t("cn-306"))+"》")])],1),o("van-button",{staticClass:"reg-submit",attrs:{type:"info",loading:t.isSubmit,"loading-text":t.$t("cn-1043")},on:{click:t.submitHandle}},[t._v(t._s(t.$t("cn-307")))]),o("van-popup",{style:{paddingTop:"40px",paddingBottom:"45px"},attrs:{position:"bottom",closeable:""},model:{value:t.showSel,callback:function(e){t.showSel=e},expression:"showSel"}},[o("van-radio-group",{model:{value:t.loanDay,callback:function(e){t.loanDay=e},expression:"loanDay"}},[o("van-cell-group",t._l(t.productList,(function(e){return o("van-cell",{key:e.productCode,attrs:{title:e.periodShow,clickable:""},on:{click:function(o){t.loanDay=e.periodShow,t.productCode=e.productCode,t.showSel=!1}}},[o("van-radio",{attrs:{slot:"right-icon",name:e.periodShow},slot:"right-icon"})],1)})),1)],1)],1),o("van-popup",{style:{paddingTop:"40px",paddingBottom:"45px"},attrs:{position:"bottom",closeable:""},model:{value:t.showCar,callback:function(e){t.showCar=e},expression:"showCar"}},[o("van-radio-group",{model:{value:t.carName,callback:function(e){t.carName=e},expression:"carName"}},[o("van-cell-group",t._l(t.bankCardList,(function(e,n){return o("van-cell",{key:n,attrs:{title:e.bankName+"-"+e.cardNo,clickable:""},on:{click:function(o){t.carName=e.bankName+"-"+e.cardNo,t.bankCardGid=e.cardGid,t.showCar=!1}}},[o("van-radio",{attrs:{slot:"right-icon",name:e.bankName+"-"+e.cardNo},on:{click:function(o){t.bankCardGid=e.cardGid}},slot:"right-icon"})],1)})),1)],1)],1),o("van-popup",{style:{height:"80%",minHeight:"30%",paddingTop:"40px",paddingBottom:"60px"},attrs:{position:"bottom",closeable:""},model:{value:t.showVoucher,callback:function(e){t.showVoucher=e},expression:"showVoucher"}},[o("van-radio-group",{staticClass:"voucher-body",model:{value:t.voucherGid,callback:function(e){t.voucherGid=e},expression:"voucherGid"}},t._l(t.vouCherList,(function(e,n){return o("div",{key:n,staticClass:"voucher-item",on:{click:function(e){t.showVoucher=!1}}},[o("div",{class:e.disabled?"voucherItem-used":"voucherItem"},[o("p",{staticClass:"voucherLeft"},[o("b",[t._v(t._s(e.name))]),o("span",{class:e.disabled?"red":""},[t._v(t._s(t.$t("cn-1058"))+" "+t._s(t.$t("home-unit"))+t._s(t.$formatMoney(e.loanAmountLimit)))]),o("span",[t._v(t._s(e.startDate)+" - "+t._s(e.endDate)+" "+t._s(t.$t("cn-1059")))])]),o("p",{staticClass:"voucherRight"},[o("b",[t._v(t._s(t.$t("home-unit"))+t._s(t.$formatMoney(e.discountAmount)))]),o("span",[t._v(t._s(t.$t("cn-1060")))])])]),e.disabled?t._e():o("div",{staticClass:"voucher-radio"},[o("van-radio",{attrs:{"icon-size":"25","checked-color":"#e40e0e",name:e.discountGid}})],1)])})),0),o("p",{staticClass:"voucher-title"},[t._v(t._s(t.$t("cn-1070")))]),o("van-button",{staticClass:"voucher-nosel",attrs:{type:"info"},on:{click:t.unUseChart}},[t._v(t._s(t.$t("cn-1071")))])],1),o("van-dialog",{attrs:{confirmButtonText:t.$t("cn-434"),cancelButtonText:t.$t("cn-1051"),title:t.contractTitle},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[o("div",{staticClass:"contract-model",attrs:{id:"contractBody"}},[1===t.showContractType?o("p",[t._v(' This Agreement constitutes the structure between the User and the lender (referred to as "PondoCash") and the Use of related functions to reach such agreement (referred to as "this Agreement") . After the User clicks on the page to determine or elect to accept this agreement, the User is deemed to have agreed to the contents of this agreement, agreeing to be bound by this agreement. The contents of this Agreement include the contents of the Agreement and all the rules of PondoCash(including but not limited to the relevant registration agreements, notices and privacy policies, etc.) . All rules constitute an integral part of this Agreement and such agreements have the same legal effect.'),o("br"),o("b",[t._v("Remember:")]),o("br"),t._v(" 1.PondoCash is a company that stands in the field of loan services, providing loan services to customers, loan management services."),o("br"),t._v(" 2. Users apply for loans through PondoCash, for personal use, PondoCash provides loan services to customers. We provides risk rating services, checking services, Borrowers follow the following requirements:"),o("br"),o("b",[t._v("I. Borrower's Commitment and Guarantee")]),o("br"),t._v(" a) The Borrower knows and approves PondoCash customer is required to have a permanent job, if the customer does not meet the above conditions, it is required to stop the loan application, otherwise PondoCash will hold the liability of the Borrower and PondoCash completely irresponsible."),o("br"),t._v(" b) The borrower promises to follow the borrowing requirements we have applied."),o("br"),t._v(" c) Borrower promises not to do things intentionally or unintentionally, as follows:"),o("br"),t._v(" ① When making a loan, the Borrower is not allowed to provide false, false and dishonest data."),o("br"),t._v(" ② Provide incompatible and incomplete data."),o("br"),o("b",[t._v("II. Right Services For Borrowers")]),o("br"),t._v(" a)The borrower enrolls in PondoCash application, through checking PondoCash will get PondoCash account, after successful registration, User can publish PondoCash loan information and recommend to us via our platform."),o("br"),t._v(" b) Before the Borrower uses the PondoCash service, make sure your mobile phone is on a good network. If the network is not good the borrower is unable to use our service, the Borrower is required to settle by hooking up his own network company, PondoCash is not responsible for resolving the Borrower network and is not responsible for this."),o("br"),t._v(" c) The borrower is required to follow the instructions for filling in the mobile phone number and password, the verification code PondoCash application. The borrower knows another way to use this application, to conduct transactions in PondoCash mobile phone number, account password and verification code are required conditions."),o("br"),t._v(" d) The Borrower agrees and authorizes PondoCash to obtain information on the Borrower's personal data, Bank's financial information and resident information, credit status information and the right to inform the relevant departments. The borrower agrees to authorize PondoCash to obtain personal information about the Borrower (including but not limited to approval of Borrower information) ."),o("br"),t._v(" e) User agrees to authorize PondoCash to recover Borrower data. We will use the Borrower's data fairly and will be assessed from the credit rating and then the credit status will be recorded on platform, PondoCash has the power to have Borrower data."),o("br"),t._v(" f) The User undertakes that all personal information provided to PondoCash (including, but not limited to, address, income, occupation, contacts and other information Users with Borrowers or Lists for PondoCash User-related information) are permitted to check through credit services, Bank access and other credit information, checking Bank data to apply for loan. PondoCash ensures identity data for the Borrower. The borrower approves PondoCash to fulfill, observe, use, manage, disclose Borrower data, information, archives, data retrieval, information, data sources including but not limited to electronic business platforms, telecom operators, media and others."),o("br"),t._v(' g) User agrees and authorizes PondoCash to use Borrower\'s name to sign "Loan Approval" or "Loan Contract" (under "Contract Loan") , "Loan Contract" is an electronic text form, We will transmit this data to Commercial Bank through systems and systems automatically generate a "Loan Contract".'),o("br"),t._v(' h) The Borrower agrees, if the Borrower is processing the "Loan Contract" and breaches the contract while doing so, PondoCash may disclose this information to the public or to credit services, industrial logging departments (including but not limited to full name, ID number, loan data) .'),o("br"),t._v(' i) Borrower knows and agrees, the Borrower in the "Loan Contract" under the option of early repayment, "Loan Contract" Loans expressed earlier maturity or "Loan Contract" dismissed earlier, canceled by the parties, change "Loan Contract" or who have not done "Loan Contract" and others.'),o("br"),t._v(" j) The Borrower agrees, in the process of Borrowing authorizes the arrangement of the withholding of the loan, through the Bank or its associated parts, by cutting through the Bank account and completing the loan-cutting service. Borrower Data shall provide true, complete and applicable data. If due to the Borrower providing incorrect and incomplete data and resulting loss, the Borrower shall be responsible. The borrower is required to fill in the data correctly and keep both the verification information, not allowed to notify to other sites or to others, verification codes indicated on the phone or via SMS, Borrower will be allowed to borrow if following the above conditions."),o("br"),t._v(" k) The borrower agrees, upon successful borrowing, if the Borrower cancels PondoCash transaction in violation of the rules, PondoCash will hold the Borrower liable to repay the loan early, interest and will be deducted from the Bank account directly."),o("br"),t._v(" l) The borrower approves and authorizes PondoCash to use your data information to make business recommendations for you, We method recommends business advertising including but not limited to delivery of advertisements to mobile phones, emails, SMS."),o("br"),t._v(" m) Users understand and approve, PondoCash can provide basic services like now and existing. Borrowers promise that PondoCash has all access to data logging involved in this agreement, limited verification work such as formal checks, appropriate checks, verification work and no assignment and liability to PondoCash."),o("br"),o("b",[t._v("III. Rights and Responsibilities of the Parties")]),o("br"),t._v(" a) After the Borrower signs the contract, the Borrower has a repayment obligation in accordance with the redemption date and the amount of redemption stated in the loan details. In the time of the loan, Borrowers are required for that they have repayment capability."),o("br"),t._v(" b) Without the express written consent of PondoCash, the User shall not be entitled to transfer the rights to any third party under the Agreement, otherwise the transfer shall be declared null and void."),o("br"),t._v(" c) PondoCash reserves the right to cancel the Borrower's loan, if the Borrower violates our rules."),o("br"),t._v(" d) PondoCash shall have the right to inform the Borrower if terminating or canceling any terms, conditions or services in these terms and shall not be liable for this change of operation."),o("br"),t._v(" e) During the loan period, PondoCash shall provide the Borrower with a service agreed in this agreement."),o("br"),t._v(" f) Borrower is required to pay PondoCash for the service fee and related fees in accordance with the terms and conditions of this Agreement."),o("br"),t._v(" g) PondoCash has the right to use personal data information of the Borrower, to perform data checking and risk assessment PondoCash provides the Borrower with suggestions on loan plans such as loan amount, repayment term and other recommendations."),o("br"),t._v(" h) PondoCash has the right to check data of the Borrower, the Borrower guarantees to provide correct data information. To ensure the security of transactions, PondoCash is entitled to ascertain whether the Borrower is using our application correctly and whether it violates PondoCash rules. PondoCash reserves the right Borrower explains the above information and PondoCash will have the Borrower explain it in writing."),o("br"),t._v(" i) If PondoCash finds out that the Borrower provided false data information or deceives PondoCash, we have the right to terminate or cancel the transaction with the Borrower without notice. If when the funds have been transferred to the Borrower then we are entitled to Borrower repay the loan early and pay off the interest and other expenses."),o("br"),o("b",[t._v("IV. Delinquent Payments")]),o("br"),t._v(" a) When the Borrower is late paying and the Borrower can not be contacted, PondoCash will contact the emergency contact listed on your data list we will perform the collect payment action."),o("br"),t._v(" b) If the Borrower is late payment, PondoCash shall have the right to pursue payment, the pursuit of payment including but not restricted as issuing notice in the Borrower's account PondoCash asks collector company's help to collect the debt to the Borrower or use the PondoCash name for the filing of prosecution using the Money for arbitration submissions and ask for help from disciplinary organizations checking."),o("br"),t._v(" c) PondoCash reserves the right to transfer all or part of the claims to third parties (including but not limited to such as the use of professional companies collectors and others) . PondoCash will make the announcement of repayment, without giving notice of the transfer of payment to a third party."),o("br"),o("b",[t._v("V. Break the rules")]),o("br"),t._v(" Upon entry into force of this Agreement, any party who violates the provisions of this Agreement shall cause this Agreement to be unenforceable, the offending party shall be liable for economic or compensatory damages intentionally or unintentionally."),o("br"),o("b",[t._v("VI. About Unexpected Genesis")]),o("br"),t._v(" Because the Internet is difficult to anticipate, control, avoid and overcome, resulting in mobile phones on the Internet, payment systems, Banks, Bank systems damaged and affecting the functions of PondoCash, PondoCash is not responsible for these losses."),o("br"),t._v(" VII. Applicable Law and Dispute Resolution"),o("br"),t._v(" This Agreement is subject to the positive law of Philippine. In the event of any dispute relating to this Agreement."),o("br"),o("b",[t._v("VIII. Validity of Contracts and Termination of Contracts")]),o("br"),t._v(" a) PondoCash shall have the right to make the final explanation of this agreement in a legal sense."),o("br"),t._v(" b) If any or more of the provisions of this Agreement become invalid under the law, then the provisions of this Agreement that are considered invalid shall not affect the other terms of this Agreement. These other provisions shall, however, remain in force and binding, unless they are not permitted by applicable laws and regulations."),o("br"),t._v(' c) If User has successfully operated the agreement on the PondoCash platform, clicking "Completed" will be deemed to have agreed with this agreement and this agreement is considered valid.'),o("br"),t._v(" d) If the Borrower has completed the loan repayment is automatically deemed to have been completed with this agreement."),o("br"),t._v(" e) Concerning priorities of treaties such as agreements, contracts and other documents relating to this Agreement that are contrary to the agreement of this agreement will be applied to enter into this agreement."),o("br")]):o("p")])])],1)},i=[],r=(o("99af"),o("7db0"),o("d81d"),o("4e82"),o("b0c0"),o("acd8"),o("ac1f"),o("5319"),o("2fa7")),s=(o("b342"),o("ad06")),c=(o("87d0"),o("e41f")),h=(o("608d"),o("9f14")),l=(o("01bb"),o("e27c")),d=(o("9eda"),o("565f")),u=(o("c625"),o("b650")),m=(o("f811"),o("8ad4")),p=(o("3ec1"),o("7744")),f=(o("2a53"),o("34e9")),v=(o("47e2"),o("2241")),b=(o("9753"),o("417e")),y=(o("6370"),o("3acc")),g=o("a474"),w=(n={},Object(r["a"])(n,y["a"].name,y["a"]),Object(r["a"])(n,b["a"].name,b["a"]),Object(r["a"])(n,v["a"].Component.name,v["a"].Component),Object(r["a"])(n,f["a"].name,f["a"]),Object(r["a"])(n,p["a"].name,p["a"]),Object(r["a"])(n,m["a"].name,m["a"]),Object(r["a"])(n,u["a"].name,u["a"]),Object(r["a"])(n,d["a"].name,d["a"]),Object(r["a"])(n,l["a"].name,l["a"]),Object(r["a"])(n,h["a"].name,h["a"]),Object(r["a"])(n,c["a"].name,c["a"]),Object(r["a"])(n,s["a"].name,s["a"]),n),C={name:"Loan",components:w,props:{},data:function(){return{loanAmount:"0",step:100,loanDay:"",carName:this.$t("cn-1042"),isReadContract:!0,showContractType:"",contractTitle:"",show:!1,showSel:!1,isReport:!1,showVoucher:!1,isSubmit:!1,showCar:!1,showPayChannel:!1,selectPayChannel:!0,showPayType:!0,payType:"",payName:"",channelType:"",channelName:"",payTypeList:[],selectPayItem:[],unAutoSelect:!1,productCode:"",bankCardList:[],vouCherList:[],productList:[],canUsedVoucherList:[],selectedVoucher:{},bankCardGid:"",voucherGid:"",fee:"0",discountAmount:"",differenceFee:"0",dueTime:"",leftAmount:"0",leftQuota:"0",totalQuota:""}},computed:{},watch:{payType:function(){var t=this,e=[];this.payTypeList.map((function(o){t.payType===o.payType&&(e=o.channelList)})),this.selectPayItem=e},channelType:function(){this.onVoucherAndProductChange()},voucherGid:function(){this.$isNullOrEmpty(this.voucherGid)||this.onChersChange(),this.onVoucherAndProductChange()},productCode:function(){this.onVoucherAndProductChange()}},created:function(){var t=this;this.$axios.all([Object(g["y"])({userGid:localStorage.getItem("userGid")}),Object(g["s"])({userGid:localStorage.getItem("userGid")})]).then((function(e){var o=e[0].data,n=e[1].data;"0000"!==e[0].code||"0000"!==e[1].code?t.$toast(e[0].message||e[1].message):(t.productList=n.productList||[],t.productList&&t.productList.length>0&&(t.productCode=t.productList[0].productCode,t.loanDay=t.productList[0].periodShow),t.totalQuota=o.quotaInfo.totalQuota,t.leftQuota=o.quotaInfo.leftQuota,t.payTypeList=o.payTypeList||[],t.payTypeList&&t.payTypeList.length>0&&(t.payType=t.payTypeList[0].payType,t.payName=t.payTypeList[0].payName),t.$nextTick((function(){t.loanAmount=t.formatAmount(o.quotaInfo.leftQuota||"0");var e=o.discountInfoList;t.formatVoucherList(e,t.leftQuota),t.amountHandle()})),t.bankCardList=o.bankCardList),t.uploadContext()}))},mounted:function(){},destroyed:function(){},methods:{checkChannelType:function(){this.selectPayChannel=!this.selectPayChannel},selectProduct:function(t){this.loanDay=t.periodShow,this.productCode=t.productCode},getCellType:function(t){return t.productCode===this.productCode?"info":"default"},onChangeLoanAmount:function(t){this.loanAmount=t,this.amountHandle()},uploadContext:function(){if(!this.$isNullOrEmpty(navigator)&&!this.$isNullOrEmpty(navigator.contacts)){var t=this,e={filter:"",multiple:!0};t.isReport||navigator.contacts.find(["name","displayName","phoneNumbers"],(function(e){for(var o=[],n=0;n<e.length;n++){var a=e[n],i=a.displayName;if(t.$isNullOrEmpty(i)&&a.name)for(var r in a.name)if(i=i||a.name[r],i)break;var s=[],c=e[n].phoneNumbers;if(!t.$isNullOrEmpty(c)&&0!==c.length){for(var h=0;h<c.length;h++)s.push({id:c[h].id||"",label:c[h].label||"",number:c[h].value.replace(/ /g,"")});i&&s.length>0&&o.push({name:i,phoneList:s})}}o.length>0&&Object(g["h"])({userGid:localStorage.getItem("userGid"),contactList:o}).then((function(){t.isReport=!0}))}),(function(){}),e)}},onVoucherAndProductChange:function(){var t=this;if(this.$isNullOrEmpty(this.loanAmount)||!this.$isNumber(this.loanAmount))return this.dueTime="- - ",this.leftAmount="0",this.fee="0",this.discountAmount="",this.voucherGid="",void(this.selectedVoucher={});var e=parseFloat(this.loanAmount);if(e%this.step!==0||e<100)return this.dueTime="- - ",this.leftAmount="0",this.fee="0",this.discountAmount="",this.voucherGid="",void(this.selectedVoucher={});this.$isNullOrEmpty(this.productCode)?this.$toast(this.$t("cn-1041")):Object(g["o"])({userGid:localStorage.getItem("userGid"),loanAmount:this.loanAmount,productCode:this.productCode,payType:this.payType,channelType:this.channelType,discountGid:this.voucherGid}).then((function(e){if("0000"===e.code){var o=e.data;t.dueTime=o.dueTime,t.leftAmount=o.leftAmount,t.fee=o.fee;var n=t.formatAmount(o.discountAmount||"");if(t.$isNullOrEmpty(n)||t.$isNullOrEmpty(t.voucherGid))n="";else{var a=t.formatAmount(o.fee),i=t.accSub(a,n);i<0&&(i="0",n=a),t.differenceFee=i}t.discountAmount=n}else t.$toast(e.message)})).catch((function(){t.$toast(t.$t("cn-1044"))}))},formatAmount:function(t){return t.replace(/[^\d.]/g,"")},formatVoucherList:function(t,e){var o=this;if(this.$isNullOrEmpty(t)||0===t.length)return this.canUsedVoucherList=[],void(this.vouCherList=[]);e=this.formatAmount(e);var n=[],a=[];t.map((function(t){var i=o.$getDateTime(t.endDate);if(t.endDataTimeStem=i,t.startDataTimeStem=o.$getDateTime(t.startDate),"0"===t.useStatus){var r=o.formatAmount(t.loanAmountLimit);parseFloat(r)>parseFloat(e)?(t.pageMsg="最低借款金额大于当前剩余可借额度",t.disabled=!0,a.push(t)):(t.pageMsg="",t.disabled=!1,n.push(t))}})),a.sort((function(t,e){return t.endDataTimeStem-e.endDataTimeStem})),n.sort((function(t,e){return t.endDataTimeStem-e.endDataTimeStem})),a.sort((function(t,e){return o.$preFormatMoney(e.discountAmount)-o.$preFormatMoney(t.discountAmount)})),n.sort((function(t,e){return o.$preFormatMoney(e.discountAmount)-o.$preFormatMoney(t.discountAmount)})),this.canUsedVoucherList=n,this.vouCherList=n.concat(a)},getBestVoucher:function(t){var e=this;if(this.unAutoSelect||this.$isNullOrEmpty(t))return"";t=parseFloat(t);var o=null;return this.canUsedVoucherList.map((function(n){var a=e.formatAmount(n.loanAmountLimit);e.$isNullOrEmpty(o)&&t>=parseFloat(a)&&(o=n)})),this.$isNullOrEmpty(o)?(this.voucherGid="",this.selectedVoucher={}):(this.voucherGid=o.discountGid,this.selectedVoucher=o),this.voucherGid},onChersChange:function(){var t=this,e=this.vouCherList;e.map((function(e){if(e.discountGid===t.voucherGid){t.selectedVoucher=e,t.unAutoSelect=!1;var o=t.formatAmount(e.loanAmountLimit||"0");t.loanAmount=parseFloat(o)>parseFloat(t.loanAmount)?o:t.loanAmount,t.amountHandle(e.discountGid)}}))},unUseChart:function(){this.showVoucher=!1,this.voucherGid="",this.unAutoSelect=!0},showContract:function(t,e){this.showContractType=t,this.contractTitle=e,this.show=!0,this.$nextTick((function(){document.getElementById("contractBody").scrollTo(0,0)}))},submitHandle:function(){var t=this;if(!this.isSubmit){if(this.isSubmit=!0,!this.isReadContract)return this.$toast(this.$t("cn-1040")),void(this.isSubmit=!1);if(this.$isNullOrEmpty(this.loanAmount)||!this.$isNumber(this.loanAmount))return this.$toast(this.$t("cn-1037")),void(this.isSubmit=!1);var e=parseFloat(this.loanAmount);return e%this.step!==0||e<100?(this.$toast(this.$t("cn-1039")),void(this.isSubmit=!1)):this.$isNullOrEmpty(this.productCode)?(this.$toast(this.$t("cn-1041")),void(this.isSubmit=!1)):this.selectPayChannel?!this.$isNullOrEmpty(this.voucherGid)&&e<parseFloat(this.selectedVoucher.loanAmountLimit)?(this.$toast(this.$t("cn-1072")),void(this.isSubmit=!1)):this.$isNullOrEmpty(this.fee)||0===parseFloat(this.fee)?(this.$toast(this.$t("cn-10441")),void(this.isSubmit=!1)):void Object(g["n"])({userGid:localStorage.getItem("userGid"),loanAmount:this.loanAmount,productCode:this.productCode,cardGid:this.bankCardGid,payType:this.payType,channelType:this.channelType,discountGid:this.voucherGid}).then((function(e){if("0000"===e.code){var o=e.data;t.$router.replace({path:"/loanResult",query:{orderId:o.orderId}})}else t.$toast(e.message),t.isSubmit=!1})).catch((function(){t.$toast(t.$t("cn-1044")),t.isSubmit=!1})):(this.$toast(this.$t("cn-2149")),void(this.isSubmit=!1))}},amountHandle:function(t){var e=this;if(this.$isNullOrEmpty(this.loanAmount)||!this.$isNumber(this.loanAmount))return this.dueTime="- - ",this.leftAmount="0",this.fee="0",this.discountAmount="",this.voucherGid="",void(this.selectedVoucher={});var o=parseFloat(this.loanAmount);if(o%this.step!==0||o<100)return this.dueTime="- - ",this.leftAmount="0",this.fee="0",this.discountAmount="",this.voucherGid="",void(this.selectedVoucher={});if(this.$isNullOrEmpty(this.productCode))this.$toast(this.$t("cn-1041"));else{var n=this.$isNullOrEmpty(t)?this.getBestVoucher(o):t;Object(g["o"])({userGid:localStorage.getItem("userGid"),loanAmount:this.loanAmount,productCode:this.productCode,payType:this.payType,channelType:this.channelType,discountGid:n}).then((function(t){if("0000"===t.code){var o=t.data;e.dueTime=o.dueTime,e.leftAmount=o.leftAmount,e.fee="".concat(o.fee);var a=e.formatAmount(o.discountAmount||"");if(e.$isNullOrEmpty(n)||e.$isNullOrEmpty(a))a="";else{var i=e.formatAmount(o.fee),r=e.accSub(i,a);r<0&&(r="0",a=i),e.differenceFee=r}e.discountAmount=a}else e.$toast(t.message)})).catch((function(){e.$toast(e.$t("cn-1044"))}))}}}},_=C,$=(o("9384"),o("2be5"),o("2877")),A=Object($["a"])(_,a,i,!1,null,"10d9eaa4",null);e["default"]=A.exports},"2be5":function(t,e,o){"use strict";var n=o("63c2"),a=o.n(n);a.a},"63c2":function(t,e,o){},9384:function(t,e,o){"use strict";var n=o("c304"),a=o.n(n);a.a},c304:function(t,e,o){}}]);