function comentario(id,msj) {
    var datos = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
    var user_id=datos[0];console.log(user_id);
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

comentario("715340028534510","Viernes!!!!");
