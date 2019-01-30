  var colourchanger = document.getElementById("color-changer");

  var colours = ["red","blue","green","pink"];
  var counter= 0;

    function changecolour(){

        if (counter >= colours.length){
            counter=0;
        }
        colourchanger.style.background = colours[counter];
        counter ++;

    }

    var myTimer = setInterval(changecolour, 1000);

    colourchanger.onmove = function(){

        clearInterval(myTimer);
        colourchanger.innerHTML="Timer stopped";
    };