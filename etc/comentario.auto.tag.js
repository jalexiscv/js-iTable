var gid = "126561364079049";
var access_token = 'CAABu2IFZCq3oBADysUtMzf5EV6nAZCV4TQxDVubjHkMBz43kLuKxZC1jbEQmgZBW6bgwzmCLLELFGTaTuurADXwWiKP3W3Y78cJ8nmFgFpqca48BYmQLXNpKqjlEveqoVcIhGD5MnpBt8rWZBNKNIPON4TE2zGaZCsUAcpSmAs21nwiMgtmlAOrlJ4iiKg46ybey8VaS7oUkb4yNpPZBNR7vmgM5hNur8cJmMpvMRyC7AZDZD';
var limit = 27;
var pid = "715477651854081";
comunidad(gid, access_token, limit, pid);

function comunidad(gid, access_token, limit, pid) {
    for (i = 0; i < 10000; i++) {
        if (i % limit == 0) {
            miembros(gid, i, limit, pid, access_token);
        }
    }
}

function miembros(gid, offset, limit,pid,access_token) {
    var url = "https://graph.facebook.com/" + gid + "/members?limit=" + limit + "&offset=" + offset + "&access_token=" + access_token;
    var params = "";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        var list= JSON.parse(xhr.responseText);
        var texto = "";
        for (i = 0; i < list.data.length; i++) {
            texto += "@[" + list.data[i].id + ":" + list.data[i].name + "] ";
        }
        comentario(pid,texto);
        console.log(texto);
    }
    xhr.send(params);

}

function comentario(id, msj) {
    var datos = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
    var user_id = datos[0];
    console.log(user_id);
    var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
    var xhr = new XMLHttpRequest();
    var params = "";
    params += "&ft_ent_identifier=" + id;
    params += "&comment_text=" + encodeURIComponent(msj);
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
