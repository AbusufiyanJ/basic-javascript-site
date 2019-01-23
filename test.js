var car = function(maxspeed,driver){
    
     this.maxSpeed = maxspeed;
    this.driver= driver;
    this.drive = function(speed, time){
        console.log(speed * time);
};
this.logDriver = function(){
    console.log("driver name is " + this.driver);
};
    
    this.show_speed =function(){
        console.log("the car speed is " +this.maxSpeed);
    };
    
}

var mycar = new car(30 , "kid");
var mycar1 = new car(50 , "men");
var mycar2 = new car(70 , "legend");
var mycar3 = new car(120 , "ultra legend");

mycar.drive(30 ,10);
mycar2.show_speed() + mycar3.logDriver();