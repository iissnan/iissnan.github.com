var douban = {};

douban.api = "http://api.douban.com/people/iissnan/collection?alt=xd&callback=douban.show&cat=book&status=reading&max-results=8";

douban.show = function (response){
    var doubanList = document.getElementById("douban-list");
    var items = "";
    var entry;
    if (response) {
        if (typeof response.entry !== "undefined") {
            for (var i = 0; i < response.entry.length; i ++) {
                entry = response.entry[i]["db:subject"];
                items = items + '<li><a href="' + entry["link"]["@href"] + '">' +
                    entry.title["$t"] +
                    '</a></li>';
            }
            doubanList.innerHTML = items;
        } else {
            doubanList.innerHTML = "<li>Null</li>"
        }
    }
};


window.onload = function () {
    var script = document.createElement("script");
    script.src = douban.api;
    document.body.appendChild(script);
};