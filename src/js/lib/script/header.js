function URLextractor(url, iswindow) {
    if(iswindow){
        var protocol = window.location.protocol;
        var website = window.location.hostname;
        var path = window.location.pathname;//includes / at the beginning
        var filepath = path.split("/")[1].split("?")[0];
        var querystring = url.split("://")[1].split("/")[1].split("?")[1];
    } else {
        var protocol = url.split("://")[0];
        var website = url.split("://")[1].split("/")[0];
        var path = url.split("://")[1].split("/")[1];
        var filepath = url.split("://")[1].split("/")[1].split("?")[0];
        var querystring = url.split("://")[1].split("/")[1].split("?")[1];
    }

    return {
        "protocol": protocol,
        "website": website,
        "path": path,
        "filepath": filepath,
        "querystring": querystring
    };
}

let file = URLextractor(window.location.href, true).filepath;
document.querySelectorAll(".mainnav > a").forEach((link, index) => {
    if(URLextractor(link.href, false).filepath == file){
        link.className += "active";
    }
});
