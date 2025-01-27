function Alert(mag){

    var style_css = document.createElement("style");
    style_css.innerHTML = ".alert_error {padding: 16px;background-color: #ff584c; color: white;position: fixed;width: 90%;display: block;box-sizing: border-box;z-index: 10000;box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.25);border-radius: 8px;margin: 5%;}.error_contect{padding-right: 12px;padding-right: 12px;word-wrap: break-word;}.closebtn {color: white;font-weight: bold;float: left;font-size: 22px;line-height: 20px;cursor: pointer;transition: 0.3s;}.close{font-weight: bold;float: left;font-size: 22px;line-height: 20px;cursor: pointer;transition: 0.3s;color: #000000;}.closebtn:hover {color: #000000;}.close:hover {color: #8e8e8e;}";
    var text_none = "\"none\"";
    var error = document.createElement("DIV");
    error.setAttribute("class","alert_error");
    error.innerHTML = "<span class='closebtn' onclick='this.parentElement.style.display="+text_none+";'>&times;</span><span></span><span class='error_contect'>"+mag+"</span>";
    document.body.append(style_css);
    document.body.append(error);
}