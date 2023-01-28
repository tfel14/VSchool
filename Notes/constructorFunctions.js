// Constructor Functions build out objects.
//"new"- instantiates the object(initializes/creates it)

function Car(make, model, year, honkSound){
    this.make = make
    this.model = model
    this.year = year
    this.honkSound = honkSound
    // this.honk = function(){
    //     console.log(honkSound)
    // }
}

Car.prototype.honk = function(){
    console.log(this.honkSound)
}

var jeep = new Car("Jeep", "Cherokee", 1995, "MEERRP")
var mazda = new Car("Mazda", "3 hatchback", 2015, "BLARP")

jeep.honk()
mazda.honk()