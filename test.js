var content =document.getElementById("content");
var button =document.getElementById("content-button");

button.onclick = function(){
    if(content.className  == "")  {
        content.className = "open1";
        button.innerHTML = "show more if";

    }else if(content.className == "open1") {
        content.className = "open3";
        button.innerHTML = "show less else if";
    }
    else if(content.className == "open3") {
        content.className = "open2";
        button.innerHTML = "show less else if 2";
    }
    else {
        content.className = "";
        button.innerHTML = "show more else";
    }

};
