class Garage {
    constructor(num, mark, wheelsnumber, numPlaces) {
        this.mark = mark;
        this.wheelsnumber = wheelsnumber;
        this.numPlaces = numPlaces;
        this.petrol = petrol;
    };

    introduce() {
        console.log("Hello, this is garage, here is a " + num.size + " transports.");
    };
}

class Truck extends Garage {
    constructor(num, mark, wheelsnumber, numPlaces, diesel) {
        super(num, wheelsnumber, numPlaces);
        this.mark = mark;
        diesel = true;
        this.diesel = diesel;
        wheelsnumber = 8;
        this.wheelsnumber = wheelsnumber;
    };

    introduce() {
        console.log("Hello, this is truck " + this.mark + " and ");
        if (this.diesel)
            console.log("diesel engine.");
        else console.log("benzine engine.");
    };
}

class Auto extends Garage {
    constructor(num, mark, wheelsnumber, numPlaces, diesel) {
        super(num, wheelsnumber, numPlaces);
        this.mark = mark;
        diesel = false;
        this.diesel = diesel;
        wheelsnumber = 4;
        this.wheelsnumber = wheelsnumber;
    };

    introduce() {
        console.log("Hello, this is truck " + this.mark + " and ");
        if (this.diesel)
            console.log("diesel engine.");
        else console.log("benzine engine.");
    };
}

class Moto extends Garage {
    constructor(num, mark, wheelsnumber, numPlaces, diesel) {
        super(num, wheelsnumber, numPlaces);
        this.mark = mark;
        diesel = false;
        this.diesel = diesel;
        wheelsnumber = 2;
        this.wheelsnumber = wheelsnumber;
    };

    introduce() {
        console.log("Hello, this is truck " + this.mark + " and ");
        if (this.diesel)
            console.log("diesel engine.");
        else console.log("benzine engine.");
    };
}

//
// Take as a basis an airport or a car park (or something that you want) and create
// structure of classes using Prototypes and ES6 classes. Nesting should be at least 3 objects;
