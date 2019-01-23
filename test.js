var myArray = new Array();
myArray[0] = 8;
myArray[1]= "hello";

var myCar = new Object();
myCar.maxspeed = 50;
myCar.driver = "Abu";

myCar.drive =function(){console.log("Now Driving : "  );};

myCar.drive( );

var myCar2 = {
    maxSpeed: 70, 
    driver: "sufiyan",
    drive: function(speed, time)
{ console.log( speed * time);} 
 
};

console.log(myCar2.maxSpeed);

myCar2.drive(50,3);