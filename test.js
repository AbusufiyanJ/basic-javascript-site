var myforms= document.forms.myform;
var message = document.getElementById("message");

myform.onsubmit = function()
{
    if(myform.name.value == ""){
        message.innerHTML = "Please Enter a name";
        return false;
    } else {
        message.innerHTML = "";
        return true;
    }

}