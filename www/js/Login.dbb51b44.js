(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Login"],{"2c14":function(n,t,h){},6840:function(n,t,h){},ab38:function(n,t,h){"use strict";var c=h("2c14"),i=h.n(c);i.a},cba0:function(n,t,h){"use strict";var c=h("6840"),i=h.n(c);i.a},e200:function(n,t,h){"use strict";h.r(t);var c,i=function(){var n=this,t=n.$createElement,h=n._self._c||t;return h("div",{staticClass:"vay-login"},[h("page-head",{attrs:{titleKey:"loginTitle",fixed:!0,isLogin:!0}}),n._m(0),h("div",{staticClass:"login-form"},[h("van-field",{attrs:{clearable:"",placeholder:n.$t("login-phonePlace")},model:{value:n.username,callback:function(t){n.username=t},expression:"username"}},[h("div",{staticClass:"login-phone-title",attrs:{slot:"label"},slot:"label"},[h("i",{staticClass:"login-phone-icon"}),h("span",{staticClass:"login-phone-tips"},[n._v("+84")])])]),h("van-divider",{style:{margin:"0",borderColor:"#eee"}}),h("van-field",{attrs:{type:n.passwordType?"text":"password","right-icon":n.passwordType?"eye-o":"closed-eye",placeholder:n.$t("login-passPlace")},on:{"click-right-icon":function(t){n.passwordType=!n.passwordType}},model:{value:n.password,callback:function(t){n.password=t},expression:"password"}},[h("div",{attrs:{slot:"label"},slot:"label"},[h("i",{staticClass:"login-password-icon"})])]),h("van-divider",{style:{margin:"0",borderColor:"#eee"}}),h("div",{staticClass:"login-button-group"},[h("van-button",{attrs:{type:"info",loading:n.isSubmit,"loading-text":n.$t("cn-1043")},on:{click:n.loginHandle}},[n._v(n._s(n.$t("login-submit")))]),h("div",{staticClass:"login-contract"},[h("van-checkbox",{attrs:{shape:"square"},model:{value:n.isReadContract,callback:function(t){n.isReadContract=t},expression:"isReadContract"}}),n._v(" "+n._s(n.$t("login-tips"))+" "),h("b",{on:{click:function(t){n.showContract(1,n.$t("login-userContract"))}}},[n._v("《"+n._s(n.$t("login-userContract"))+"》")]),h("b",{on:{click:function(t){n.showContract(2,n.$t("login-Contract"))}}},[n._v("《"+n._s(n.$t("login-Contract"))+"》")])],1),h("router-link",{staticClass:"login-goreg",attrs:{to:"/register"}},[n._v(n._s(n.$t("login-goReg"))),h("b",[n._v(n._s(n.$t("login-goRegBtn"))+" >>")])])],1)],1),h("van-dialog",{attrs:{confirmButtonText:n.$t("cn-434"),cancelButtonText:n.$t("cn-1051"),title:n.contractTitle},model:{value:n.show,callback:function(t){n.show=t},expression:"show"}},[h("div",{staticClass:"contract-model",attrs:{id:"contractBody"}},[1===n.showContractType?h("p",[n._v(" Điều 1: Các quy định chung"),h("br"),h("b",[n._v("1.1.Tổng quan:")]),h("br"),n._v(" a) Thỏa thuận NGƯỜI VAY này được hiểu là Biên bản thỏa thuận (Sau đây được gọi là “ Thỏa thuận”) giữa NGƯỜI VAY và Mimo Dong nhằm giải quyết nhu cầu của NGƯỜI VAY, áp dụng khi NGƯỜI VAY sử dụng dịch vụ của Mimo Dong."),h("br"),n._v(" b) NGƯỜI VAY cần đọc kỹ và đồng ý với tất cả các các quy định trong Bản thỏa thuận này trước khi sử dụng ứng dụng Mimo Dong. Khi đã sử dụng ứng dụng Mimo Dong (đã đăng ký vay tiền trên ứng dụng Mimo Dong), có nghĩa là NGƯỜI VAY đã hoàn toàn tự nguyện đồng ý với tất cả các quy định trong Thỏa thuận này."),h("br"),n._v(" c) Trừ khi được sự cho phép của pháp luật, không ai được phép mà không có sự đồng ý của Mimo Dong thực hiện những hành động sau: (1) đặt liên kết từ Ứng dụng khác đến Ứng dụng Mimo Dong; (2) sao chép, thay đổi hoặc phát tán các nội dung của Ứng dụng Mimo Dong; (3) kết nối vào Ứng dụng Mimo Dong một cách có hệ thống để thu thập nội dung hoặc dữ liệu từ Ứng dụng Mimo Dong."),h("br"),n._v(' d) Trừ khi có chỉ định khác, tất cả các tài liệu trong Ứng dụng Mimo Dong, bao gồm không giới hạn các logo và nhãn hiệu dịch vụ, là tài sản của Mimo Dong. Quý khách có thể sử dụng các nội dung từ các Ứng dụng Mimo Dong cho các mục đích được phép quy định tại các Điều khoản sử dụng, với điều kiện phải thông báo bản quyền sau đây xuất hiện trong tất cả các bản sao của bất kỳ tài liệu tải xuống hoặc in: "Bản quyềnthuộc về Công Ty TNHH Thương Mại 360 Việt Nam".'),h("br"),n._v(" e) Thỏa thuận này gồm năm (05) điều. Những tiêu đề chính và phụ trong Thỏa thuận này chỉ để tham khảo chứ không giới hạn phạm vi mỗi mục."),h("br"),h("b",[n._v("1.2.Thay đổi nội dung:")]),h("br"),n._v(" a) Mimo Dong có thể sửa đổi nội dung Thỏa thuận này vào bất cứ thời gian nào. "),h("br"),n._v(" b) Những thay đổi trong bản thỏa thuận sẽ được thông báo cho người sử dụng trên trước thời điểm áp dụng (sau đây gọi là “Ngày hiệu lực”) ít nhất là mười bốn (14) ngày."),h("br"),n._v(" c) Nếu NGƯỜI VAY không đồng ý với nội dung thay đổi thì có thể không sử dụng dịch vụ của Mimo Dong hoặc gửi văn bản phản đối đến Mimo Dong trước ngày hiệu lực. Ngược lại, nếu không có phản hồi nào thì Mimo Dong hiểu rằng NGƯỜI VAY hoàn toàn đồng ý với các nội dung thay đổi."),h("br"),n._v(" d) Trong trường hợp Mimo Dong không chấp nhận văn bản phản đối của NGƯỜI VAY thì vào ngày hiệu lực thỏa thuận hợp tác này được tự động chấm dứt."),h("br"),h("b",[n._v("Điều 2: Nội dung thoả thuận")]),h("br"),h("b",[n._v("2.1. Vai trò của Mimo Dong")]),h("br"),n._v(" a) Thông qua website Mimo Dong, fanpage Facebook Mimo Dong, Zalo Mimo Dong và App Mimo Dong (iOS, Android), Mimo Dong cung cấp dịch vụ hỗ trợ tài chính giúp NGƯỜI VAY giải quyết khó trong thời gian ngắn hạn."),h("br"),n._v(" b) Mimo Dong sẽ đánh giá uy tín của NGƯỜI VAY trên nhiều chỉ số và dựa trên căn cứ đó đưa ra hạn mức cho NGƯỜI VAY"),h("br"),n._v(" c) Đơn vị tiền tệ cho vay là tiền VIỆT NAM ĐỒNG."),h("br"),h("b",[n._v("2.2. Vai trò của Mimo Dong")]),h("br"),n._v(" Mimo Dong là bên cho vay sẽ quyết định cho những NGƯỜI VAY có nhu cầu, vay một khoản tiền nhất định từ 01 triệu đến 10 triệu theo hình thức tín chấp."),h("br"),h("b",[n._v("2.3. Vai trò của NGƯỜI VAY")]),h("br"),n._v(" NGƯỜI VAY đăng ký hồ sơ vay, dựa vào hồ sơ của NGƯỜI VAY, Mimo Dong sẽ đánh giá tín nhiệm và đưa ra hạn mức cho người vay"),h("br"),n._v(" Người vay sau khi được Mimo Dong chấp nhận cho vay, sẽ được nhận tiền về tài khoản (thông qua tài khoản ngân hàng)"),h("br"),n._v(" NGƯỜI VAY có trách nhiệm phải trả lãi suất theo mức lãi suất mà Mimo Dong đưa ra (lãi suất sẽ được trừ trước khi chuyển đến người vay)"),h("br"),n._v(" NGƯỜI VAY có trách nhiệm thanh toán gốc, lãi, phí đúng thời hạn thỏa thuận, nếu không NGƯỜI VAY sẽ phải chịu mức phí phạt tại từng thời điểm."),h("br"),h("b",[n._v("Điều 3: Thông tin liên quan đến khoản vay")]),h("br"),n._v(" Các bên tham gia giao dịch thừa nhận đã biết và đã hiểu về nội dung giao dịch vay dân sự giữa các bên theo quy định tại Hợp đồng dịch vụ và các thỏa thuận sửa đổi, bổ sung, kèm theo; đảm bảo tuân thủ các quy định liên quan của pháp luật."),h("br"),n._v(" Trường hợp NGƯỜI VAY vi phạm nghĩa vụ hợp đồng (bao gồm nghĩa vụ thanh toán đúng hạn), các Bên đồng ý áp dụng mức phạt vi phạm Hợp đồng như sau: do Mimo Dong đề xuất và có hiệu lực áp dụng với các bên ngay khi phát sinh hành vi vi phạm hợp đồng theo quy định tại Hợp đồng này, các thỏa thuận liên quan và theo quy định."),h("br"),n._v(" Mimo Dong sẽ có trách nhiệm quản lý hồ sơ, thông tin của NGƯỜI VAY, tự động nhắc nhở để NGƯỜI VAY có trách nhiệm trả nợ đúng hẹn cho Mimo Dong. "),h("br"),h("b",[n._v("Điều 4: Quyền và trách nhiệm của các bên")]),h("br"),h("b",[n._v("1. Quyền và trách nhiệm của Mimo Dong (ứng dụng Mimo Dong)")]),h("br"),n._v(" a) Hướng dẫn NGƯỜI VAYcách giao dịch và trả nợ đúng quy trình"),h("br"),n._v(" b) Giải thích rõ ràng lãi và phí kết nối cho NGƯỜI VAY"),h("br"),n._v(" c) Cam kết không yêu cầu NGƯỜI VAY trả thêm bất kỳ loại phí nào ngoài 2 loại phí được quy định trong bản thỏa thuận này."),h("br"),n._v(" Mimo Dong có quyền yêu cầu NGƯỜI VAY cung cấp các thông tin cần thiết để phục vụ duyệt khoản vay."),h("br"),n._v(" d) Trường hợp NGƯỜI VAY không trả nợ đúng hạn, Mimo Dong có quyền sử dụng thông tin cá nhân của NGƯỜI VAY, thông tin nhân thân của NGƯỜI VAY để yêu cầu thanh toán khoản vay bao gồm nhưng không giới hạn: công bố thông tin của NGƯỜI VAY trên các phương tiện xã hội, liên lạc với bạn bè, người thân của NGƯỜI VAY để yêu cầu thanh toán khoản vay."),h("br"),n._v(" Nếu NGƯỜI VAY vẫn không thanh toán khoản vay, Mimo Dong sẽ bán nợ cho tổ chức thứ 3 hoặc kiện NGƯỜI VAY ra Tòa án dân sự theo quy định Pháp luật của Việt Nam."),h("br"),n._v(" e) Bất cứ lúc nào, Mimo Dong cũng có thể từ chối cung cấp dịch vụ cho NGƯỜI VAY."),h("br"),h("b",[n._v("2.Quyền và trách nhiệm của NGƯỜI VAY")]),h("br"),n._v(" Đọc kỹ bản thỏa thuận này và đồng ý tất cả các điều khoản trước khi quyết định trở thành NGƯỜI VAY của Mimo Dong."),h("br"),n._v(" Cung cấp thông tin rõ ràng chính xác cho Mimo Dong và chịu trách nhiệm trước pháp luật về thông tin đó."),h("br"),n._v(" Nếu NGƯỜI VAY cung cấp sai lệch thông tin nhằm chiếm đoạt khoản vay, Mimo Dong sẽ kiện NGƯỜI VAY về hành vi lừa đảo chiếm đoạt tài sản."),h("br"),n._v(" Đồng ý cho Mimo Dong được sử dụng thông tin cá nhân của NGƯỜI VAY, thông tin nhân thân của NGƯỜI VAY để yêu cầu thanh toán khoản vay nếu NGƯỜI VAY vi phạm chính sách của Mimo Dong như chậm chễ, không trả nợ, v.v."),h("br"),n._v(" Đồng ý chịu mọi hình phạt, mọi biện pháp thu hồi khoản vay của Mimo Dong, của bên thứ 3 nếu NGƯỜI VAY không hoàn thành trách nhiệm cam kết về khoản vay."),h("br"),n._v(" Cam kết khôngsao chép, tiết lộ, phát triển một phần hoặc toàn bộ ứng dụng và/hoặc tải sản sở hữu trí tuệ khác của Mimo Dong dưới mọi hình thức"),h("br"),n._v(" Cam kết bảo mật thông tin, tôn trọng bản quyền và tuân thủ mọi quy định trong Thỏa thuận này của Mimo Dong."),h("br"),n._v(" Khi sử dụng Mimo Dong, NGƯỜI VAY sẽ luôn phải chịu trách nhiệm với khoản vay của mình. Có thể NGƯỜI VAY phải bồi thường cho Mimo Dong nếu NGƯỜI VAY vi phạm Bản thỏa thuận người dùng này hoặc NGƯỜI VAY gây tổn thất, thiệt hại cho Mimo Dong "),h("br"),h("b",[n._v("Điều 5: Tranh chấp với Mimo Dong")]),h("br"),n._v(" Nếu có bất cứ vấn đề tranh chấp nào giữa người vay và Mimo Dong, người vay hãy vui lòng liên hệ tới Trung tâm hỗ trợ khách hàng của Mimo Dong theo một trong các phương thức sau:"),h("br"),n._v(" a) Gửi Email tới địa chỉ: marketing@iMimo Dong.com"),h("br"),n._v(" b) Trao đổi với nhân viên hỗ trợ thông qua các nick chat được tích hợp trên website của Mimo Dong"),h("br"),n._v(" * Lưu ý: Nhân viên hành chính của Mimo Dong làm việc từ 8h30 tới 17h30 các ngày từ thứ Hai tới thứ Sáu, thứ Bảy làm từ 8h00 tới 12h00; nghỉ chiều thứ Bảy, các ngày Chủ Nhật và nghỉ lễ, tết theo quy định của pháp luật."),h("br"),n._v(" Luật áp dụng cho Thỏa thuận:"),h("br"),n._v(" NGƯỜI VAYđồng ý rằng, tất cả các vấn đề phát sinh và/hoặc liên quan (nếu có) giữa NGƯỜI VAYvà Mimo Dong theo Thỏa thuận này, được giải quyết theo quy định của luật nhà nước Việt Nam."),h("br")]):h("p",[n._v(" Mimo Dong cam kết duy trì sự riêng tư của người dùng. APP này chứa những thông tin cá nhân mà chúng tôi thu thập từ người dùng, Mimo Dong sẽ không chia sẻ thông tin cá nhân người dùng mới hoặc cũ, trừ trường hợp Mimo Dong sử dụng thông tin người dùng vào mục đích kinh doanh liên quan tới phân tích tính khả thi của các sản phẩm cho vay của chúng tôi trong việc xử lý các giao dịch, thực hiện lệnh của tòa án hoặc những quy trình, quy phạm pháp luật được áp dụng và để xử lý các báo cáo."),h("br"),h("b",[n._v("1.Các thông tin được thu thập bởi Mimo Dong – quá trình thu thập và quản lý thông tin của Mimo Dong")]),h("br"),n._v(" Mimo Dong thu thập thông tin cá nhân người dùng. Khi khách hàng cung cấp các thông tin cá nhân cho Mimo Dong, Mimo Dong sẽ thông qua ứng dụng, sử dụng thông tin từ việc sử dụng ứng dụng do người dùng tạo ra khi tương tác với ứng dụng."),h("br"),h("b",[n._v("2.Các thông tin được thu thập bởi Mimo Dong")]),h("br"),n._v(" Thông tin cá nhân : Bao gồm: Tên, số điện thoại di động, Giấy phép lái xe, thông tin liên hệ khẩn cấp, Ảnh, địa chỉ gửi thư, chức vụ, địa chỉ công ty,…."),h("br"),n._v(" Thông tin liên quan tới thiết bị đang sử dụng hoặc thẻ SIM"),h("br"),n._v(" Các thông tin liên quan tới thiết bị của bạn như : gaid, số IMSI, phiên bản Android, thông tin thiết bị trên các nhà mạng, lịch sử cuộc gọi, tin nhắn ... "),h("br"),n._v(" Thông tin vị trí (chỉ dành cho dịch vụ / tính năng đặc biệt): Các loại thông tin khác nhau liên quan đến vị trí của bạn. Ví dụ: mã quốc gia, mã thành phố, mã mạng di động, thông tin vĩ độ và kinh độ, để đảm bảo rằng vị trí của người dùng trong việc cung cấp dịch vụ của chúng tôi và để đánh giá điểm tín dụng của bạn "),h("br"),n._v(" Thông tin ngân hàng: Bao gồm tên, số tài khoản, …Chúng tôi cũng thu thập các thông tin cá nhân khác và thu thập thông tin về việc làm, thông tin của bên thứ ba,.. Khi sử dụng một số dịch vụ nhất định. Mục đích của việc thu thập thông tin này là để cải tiến các dịch vụ mà chúng tôi cung cấp cho bạn. Thông tin được cung cấp phụ thuộc vào cách bạn sử dụng, tham gia vào các sản phẩm hoặc dịch vụ của chúng tôi. Việc sử dụng các dịch vụ của chúng tôi là hoàn toàn tự nguyện và bạn không cần cung cấp thông tin như vậy trừ khi bạn chọn sử dụng dịch vụ Mimo Dong của chúng tôi. "),h("br"),h("b",[n._v("3.Mimo Dong quản lý thông tin cá nhân của bạn như thế nào?")]),h("br"),n._v(" Thông tin chúng tôi thu thập từ bạn sẽ được lưu trữ và sẽ được quản lý cho các mục đích sau: Để kiểm tra xem các thông tin mà bạn cung cấp so với thông tin thực tế của bạn, đảm bảo không phải người khác sử dụng danh tính của bạn;"),h("br"),n._v(" Để xác định khả năng của bạn có thể nhận được khoản vay theo các điều khoản áp dụng;"),h("br"),n._v(" Để liên lạc với bạn về tài khoản của bạn, cũng như để làm cho thông tin nhận dạng khi bạn gọi hoặc truy cập ứng dụng di động của chúng tôi và cung cấp thông tin cập nhật khi có thay đổi đối với các dịch vụ của chúng tôi."),h("br"),n._v(" Để xác nhận thông tin do bạn cung cấp là chính xác trong quá trình xin vay vốn. Đảm bảo quá trình giao dịch nếu khoản vay của bạn được chấp thuận."),h("br"),n._v(" Giải quyết các nghĩa vụ phát sinh từ hợp đồng đã ký kết giữa bạn và chúng tôi. "),h("br"),h("b",[n._v("4.Mimo Dong bảo vệ thông tin cá nhân của người dùng như thế nào? ")]),h("br"),n._v(" (1) Mimo Dong tìm cách bảo vệ thông tin của bạn bằng những công nghệ mới nhất. Chúng tôi sẽ tuân thủ các điều khoản áp dụng để đảm bảo thông tin của bạn được bảo mật và duy trì và hạn chế quyền truy cập để bảo vệ bạn chống lại mọi hình thức gian lận. Bạn chịu trách nhiệm bảo vệ mã truy cập tài khoản và ID người dùng và mật khẩu của mình, để đảm bảo người dùng khác không thể truy cập tài khoản của bạn. "),h("br"),n._v(" (2) Về thông tin của bạn, Mimo Dong không thể đảm bảo tính bảo mật của dữ liệu được truyền qua ứng dụng của chúng tôi. Khi chúng tôi nhận được dữ liệu hoặc thông tin của bạn, chúng tôi sẽ sử dụng các tính năng bảo mật và thủ tục để ngăn chặn truy cập trái phép."),h("br"),n._v(" (3) Mimo Dong tuân thủ đầy đủ và tuân thủ các luật và quy định về bảo vệ dữ liệu hiện hành ở Vietnam."),h("br"),h("b",[n._v("5. Các loại trừ từ Mimo Dong trong việc phân phối thông tin cá nhân của người dùng")]),h("br"),n._v(" Mimo Dong sẽ tiết lộ thông tin cá nhân của người dùng cho các nhà cung cấp dịch vụ, khách hàng vay và thành viên trong nhóm công ty của chúng tôi, những người giúp thực hiện một số phần trong hoạt động kinh doanh của chúng tôi bao gồm các quy trình dịch vụ, thanh toán, phòng ngừa gian lận."),h("br"),n._v(" Mimo Dong cũng sẽ chia sẻ thông tin về người dùng với bên thứ ba liên quan đến bất kỳ luật và tòa án nào để ngăn ngừa tổn thất về tài chính, báo cáo các hoạt động bất hợp pháp bị cáo buộc hoặc điều tra các vi phạm các thỏa thuận sử dụng của chúng tôi."),h("br"),n._v(" Mimo Dong sẽ không bán hoặc cho thuê bất kỳ dữ liệu thông tin người dùng nào cho bất kỳ bên thứ ba nào cho bất kỳ mục đích nào, trừ khi chúng tôi áp dụng thay đổi chính sách và sẽ thông báo cho bạn biết khi có bất kỳ thay đổi nào."),h("br"),h("b",[n._v("6. Tuổi")]),h("br"),n._v(" Để có thể sử dụng dịch vụ Mimo Dong của chúng tôi, bạn phải từ 22 tuổi trở lên. Nếu bạn không đáp ứng được yêu cầu về tuổi, bạn không được phép sử dụng dịch vụ Mimo Dong."),h("br"),h("b",[n._v("7. Các thay đổi đối với chính sách bảo mật")]),h("br"),n._v(" Chúng tôi sẽ gửi thông báo qua tin nhắn văn bản hoặc email liên quan đến bất kỳ thay đổi nào liên quan đến chính sách bảo mật của chúng tôi để bạn có thể xem lại chính sách bảo mật mới."),h("br")])])])],1)},o=[function(){var n=this,t=n.$createElement,h=n._self._c||t;return h("div",{staticClass:"login-head"},[h("i",{staticClass:"login-logo"})])}],g=(h("b0c0"),h("ac1f"),h("5319"),h("2fa7")),a=(h("9753"),h("417e")),u=(h("6370"),h("3acc")),r=(h("a247"),h("9ed2")),v=(h("47e2"),h("2241")),s=(h("b342"),h("ad06")),b=(h("9eda"),h("565f")),m=(h("c625"),h("b650")),e=h("a474"),l=(c={},Object(g["a"])(c,m["a"].name,m["a"]),Object(g["a"])(c,b["a"].name,b["a"]),Object(g["a"])(c,s["a"].name,s["a"]),Object(g["a"])(c,v["a"].Component.name,v["a"].Component),Object(g["a"])(c,r["a"].name,r["a"]),Object(g["a"])(c,u["a"].name,u["a"]),Object(g["a"])(c,a["a"].name,a["a"]),c),d={name:"Login",components:l,props:{},data:function(){return{show:!1,isSubmit:!1,showContractType:"",contractTitle:"",isReadContract:!0,passwordType:!1,username:"",password:""}},computed:{},watch:{},created:function(){},mounted:function(){},destroyed:function(){},methods:{showContract:function(n,t){this.showContractType=n,this.contractTitle=t,this.show=!0,this.$nextTick((function(){document.getElementById("contractBody").scrollTo(0,0)}))},loginHandle:function(){var n=this;if(!this.isSubmit){var t=this.$trim(this.username),h=this.$trim(this.password);return this.isSubmit=!0,this.$isNullOrEmpty(t)?(this.$toast(this.$t("cn-419")),void(this.isSubmit=!1)):this.$isNullOrEmpty(h)?(this.$toast(this.$t("cn-420")),void(this.isSubmit=!1)):this.isReadContract?void Object(e["n"])({phone:t,password:h}).then((function(t){if("0000"===t.code){var h=t.data.token,c=t.data.userGid;localStorage.setItem("Token",h),localStorage.setItem("userGid",c),n.$router.replace("/")}else n.$toast(t.message),n.isSubmit=!1})).catch((function(){n.$toast(n.$t("cn-1044")),n.isSubmit=!1})):(this.$toast(this.$t("cn-1056")),void(this.isSubmit=!1))}}}},p=d,y=(h("ab38"),h("cba0"),h("2877")),k=Object(y["a"])(p,i,o,!1,null,"7e701033",null);t["default"]=k.exports}}]);