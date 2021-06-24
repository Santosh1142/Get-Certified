var templates = {
    simple : {
        style : '@page { size: landscape; }\
                #org{ text-align: center;margin-top: 35px;font-family: "Arima Madurai"; }\
                #head{ text-align: center;font-family: "Arvo";margin-top: 10px;font-size: 60px; }\
                #sub-head{ text-align: center;margin-top: 30px;font-family: "Barlow Semi Condensed"; }\
                #name{ text-align: center;margin-top: 20px;font-family: "Bai Jamjuree";text-decoration: underline; }\
                #remarks{ text-align: center;margin-top: 30px;font-family: "Baloo 2"; }\
                #issued{ font-family: "Baloo 2";margin-left: 15px;margin-bottom: 15px; }\
                .credits{ font-family: "Barlow";font-size: 18px;margin-bottom: 50px; }',
        main : '<div class="container" style="border: 13px solid rgb(144, 201, 255);">\
                    <h3 id="org"></h3>\
                    <h1 id="head"></h1>\
                    <h4 id="sub-head">This Certificate is presented to</h4>\
                    <h2 id="name"></h2>\
                    <h4 id="remarks"></h4>\
                    <h6>Issued on : </h6><h6 id="issued"></h6>\
                    <div class="d-flex justify-content-around" style="margin-left: 25px;">\
                        <div>Issued By: <h3 align="center" class="credits" id="issuer"></h3>\
                        </div>\
                        <div>Hosted By: <h3 align="center" class="credits" id="host"></h3>\
                        </div>\
                        <div>Sponsored By: <h3 align="center" class="credits" id="sponsor"></h3>\
                        </div>\
                    </div>\
                </div>'
    },

    simpleTwo : {
        style : '@page { size: landscape; }\
                .tag-center{\
                    height: 50px;\
                    width: 80px;\
                    background-color: #ffd000;\
                    margin-left: 20px;\
                }\
                .tag-left{\
                    width: 0;\
                    height: 0;\
                    border-left: 0px solid transparent;\
                    border-right: 40px solid transparent;\
                    border-top: 50px solid #ffd000;\
                    margin-left: 20px;\
                }\
                .tag-right{\
                    width: 0;\
                    height: 0;\
                    border-left: 40px solid transparent;\
                    border-right: 0px solid transparent;\
                    border-top: 50px solid #ffd000;\
                }\
                #org{ text-align: center;font-family: "Arima Madurai"; }\
                #head{ text-align: center;font-family: "Arvo";margin-top: 10px;font-size: 60px; }\
                #sub-head{ text-align: center;margin-top: 30px;font-family: "Barlow Semi Condensed"; }\
                #name{ text-align: center;margin-top: 20px;font-family: "Bai Jamjuree";text-decoration: underline; }\
                #remarks{ text-align: center;margin-top: 30px;font-family: "Baloo 2"; }\
                #issued{ font-family: "Baloo 2";margin-left: 15px;margin-bottom: 15px; }\
                .credits{ font-family: "Barlow";font-size: 18px;margin-bottom: 50px; }',
        main : '<div class="container" style="border: 15px solid rgb(164, 144, 255);background-color: rgb(252, 253, 255);">\
                    <div class="tag-center"></div>\
                    <div class="d-flex justify-content">\
                        <div class="tag-left"></div>\
                        <div class="tag-right"></div>\
                    </div>\
                    <h3 id="org"></h3>\
                    <h1 id="head"></h1>\
                    <h4 id="sub-head">This Certificate is presented to</h4>\
                    <h2 id="name"></h2>\
                    <h4 id="remarks">\
                        <p> --remarks-- </p>\
                    </h4>\
                    <h6>Issued on : </h6><h6 id="issued"></h6>\
                    <div class="d-flex justify-content-around" style="margin-left: 25px;">\
                        <div>Issued By: <h3 align="center" class="credits" id="issuer"></h3>\
                        </div>\
                        <div>Hosted By: <h3 align="center" class="credits" id="host"></h3>\
                        </div>\
                        <div>Sponsored By: <h3 align="center" class="credits" id="sponsor"></h3>\
                        </div>\
                    </div>\
                </div>'
    },

    BZ:{
        style: '@page { size: landscape; }\
                    span.cls_009{\
                        font-family: "Aparajita", serif;\
                        font-size: 36.1px;\
                        color: rgb(0, 0, 0);\
                        font-weight: normal;\
                        font-style: normal;\
                        text-decoration: none\
                    }\
                    div.cls_009 {\
                        font-family: "Aparajita", serif;\
                        font-size: 36.1px;\
                        color: rgb(0, 0, 0);\
                        font-weight: normal;\
                        font-style: normal;\
                        text-decoration: none\
                    }\
                    span.cls_005{\
                        font-family: Arial, serif;\
                        font-size: 30.0px;\
                        color: rgb(0, 0, 0);\
                        font-weight: bold;\
                        font-style: normal;\
                        text-decoration: none\
                    }\
                    div.cls_005 {\
                        font-family: Arial, serif;\
                        font-size: 30.0px;\
                        color: rgb(0, 0, 0);\
                        font-weight: bold;\
                        font-style: normal;\
                        text-decoration: none\
                    }\
                    span.cls_006 {\
                        font-family: "Calibri", serif;\
                        font-size: 24.0px;\
                        color: rgb(0, 0, 0);\
                        font-weight: normal;\
                        font-style: normal;\
                        text-decoration: none\
                    }\
                    div.cls_006 {\
                        font-family: "Calibri", serif;\
                        font-size: 24.0px;\
                        color: rgb(0, 0, 0);\
                        font-weight: normal;\
                        font-style: normal;\
                        text-decoration: none\
                    }\
                    span.cls_007 {\
                        font-family: "Edwardian Script ITC", serif;\
                        font-size: 48.0px;\
                        color: rgb(0, 0, 0);\
                        font-weight: normal;\
                        font-style: normal;\
                        text-decoration: none\
                    }\
                    div.cls_007 {\
                        font-family: "Edwardian Script ITC", serif;\
                        font-size: 48.0px;\
                        color: rgb(0, 0, 0);\
                        font-weight: normal;\
                        font-style: normal;\
                        text-decoration: none\
                    }\
                    span.cls_008 {\
                        font-family: "Aparajita", serif;\
                        font-size: 24.0px;\
                        color: rgb(0, 0, 0);\
                        font-weight: normal;\
                        font-style: normal;\
                        text-decoration: none\
                    }\
                    div.cls_008 {\
                        font-family: "Aparajita", serif;\
                        font-size: 24.0px;\
                        color: rgb(0, 0, 0);\
                        font-weight: normal;\
                        font-style: normal;\
                        text-decoration: none\
                    }\
                    span.cls_003 {\
                        font-family: "Calibri", serif;\
                        font-size: 18.1px;\
                        color: rgb(0, 0, 0);\
                        font-weight: normal;\
                        font-style: normal;\
                        text-decoration: none\
                    }\
                    div.cls_003 {\
                        font-family: "Calibri", serif;\
                        font-size: 18.1px;\
                        color: rgb(0, 0, 0);\
                        font-weight: normal;\
                        font-style: normal;\
                        text-decoration: none\
                    }\
                    span.cls_004 {\
                        font-family: "Calibri Bold", serif;\
                        font-size: 24.0px;\
                        color: rgb(0, 0, 0);\
                        font-weight: bold;\
                        font-style: normal;\
                        text-decoration: none\
                    }\
                    div.cls_004 {\
                        font-family: "Calibri Bold", serif;\
                        font-size: 24.0px;\
                        color: rgb(0, 0, 0);\
                        font-weight: bold;\
                        font-style: normal;\
                        text-decoration: none\
                    }\
                    span.cls_002 {\
                        font-family: "Aparajita", serif;\
                        font-size: 18.1px;\
                        color: rgb(0, 0, 0);\
                        font-weight: normal;\
                        font-style: normal;\
                        text-decoration: none\
                    }\
                    div.cls_002 {\
                        font-family: "Aparajita", serif;\
                        font-size: 18.1px;\
                        color: rgb(0, 0, 0);\
                        font-weight: normal;\
                        font-style: normal;\
                        text-decoration: none\
                    }\
                    span.cls_010 {\
                        font-family: "Aparajita", serif;\
                        font-size: 20.1px;\
                        color: rgb(0, 0, 0);\
                        font-weight: normal;\
                        font-style: normal;\
                        text-decoration: none\
                    }\
                    div.cls_010 {\
                        font-family: "Aparajita", serif;\
                        font-size: 20.1px;\
                        color: rgb(0, 0, 0);\
                        font-weight: normal;\
                        font-style: normal;\
                        text-decoration: none\
                    }\
                </style>',
        main: '<div style="position:absolute;left:50%;margin-left:-430px;top:0px;width:860px;height:615px;border-style:outset;overflow:hidden">\
                    <div style="position:absolute;left:0px;top:0px"> <img src="../img/BZ_bg.jpg" width=860 height=615> </div>\
                    <div style="position:absolute;left:151.55px;top:61.46px" class="cls_009"><span class="cls_009" style="color: white;" id="head">CERTIFICATE OF COMPLETION</span></div>\
                    <div style="position:absolute;left:151.94px;top:110.00px" class="cls_005"><span class="cls_005" style="color: white;" id="org"></span></div>\
                    <div style="position:absolute;left:302.14px;top:259.95px" class="cls_006"><span class="cls_006">This certificate is presented to</span></div>\
                    <div style="position:absolute;left:347.34px;top:276.00px" class="cls_007"><span class="cls_007" id="name"></span></div>\
                    <div style="position:absolute;left:300px;top:314.69px" class="cls_008"><span class="cls_008">-------------------------------------</span></div>\
                    <div style="position:absolute;left:298.29px;top:354.90px" class="cls_006"><span class="cls_006"></span></div>\
                    <div style="position:absolute;left:305.11px;top:354.90px" class="cls_006"><span class="cls_006">for successfully completing the</span></div>\
                    <div style="position:absolute;left:221.94px;top:402.00px" class="cls_005"><span class="cls_005" id="host"></span></div>\
                    <div style="position:absolute;left:264.46px;top:452.90px" class="cls_003"><span class="cls_003">organized by Being Zero Pvt Ltd with</span><span class="cls_004">100%</span><span class="cls_003">score</span></div>\
                    <div style="position:absolute;left:55.86px;top:554.17px" class="cls_002"><span class="cls_002">Sandeep Kumar</span></div>\
                    <div style="position:absolute;left:563.19px;top:551.17px" class="cls_010"><span class="cls_010" id="issued"></span></div>\
                    <div style="position:absolute;left:32.73px;top:575.77px" class="cls_002"><span class="cls_002">Chief Executive Officer</span></div>\
                    <div style="position:absolute;left:608.13px;top:575.17px" class="cls_010"><span class="cls_010">Date</span></div><br>\
                </div>'
    }
}

module.exports = templates