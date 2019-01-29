var content =document.getElementById("content");
var button =document.getElementById("content-button");

button.onclick = function(){
    if(content.className== "open2"){
        content.className = "open3";
        button.innerHTML = "show less";

    } else if(content.className == "open3") {
        content.className = "open1";
        button.innerHTML = "show more";

    }
    else{
        content.className = "open2";
        button.innerHTML = "show more "
    }

};
