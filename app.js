//objects
    //creating objects
    //factories and Constructors
    //Primitives and Reference Types
    //Working with Properties
    //Private Properties
    //Geters / Seters

// OOP 
//     Encapsulation
//     Abstraction
//     Inheritance
//     Polymorphism


//Object Literals
let circle = {
    radius : 1,
    location : {
        x : 1,
        y : 1
    },
    draw : function () {
        console.log('draw');
    }
};

// circle.draw();

//Factories
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw');            
        }
    };
}
const circle2 = createCircle(1);
// circle2.draw();

//Constructors function
function Circle(radius) {
    this.radius;
    this.draw = function() {
        console.log('draw')
    }    
}
const another = new Circle(1);
//there, if we dont use `new` keyword this keyword will be window object in browser which is global object;
//this key word won't be only for constructors function
another.draw();

//Constructor Property
let x = {};
// that will be same with below one
// let x = new Object();
// every object have constructor property

//Functions are Objects
function Circle1(radius) {
    this.radius;
    this.draw = function() {
        console.log('draw')
    }    
}
//here circle1 is also the object coz we can try console in Circle1.radius;
Circle1.call({}, 1)
// this upper one is smae with below one
// in there {} this will be this keyword

Circle1.apply({}, [1]);
// this apply method is also smae with call method but we have to pass all arguments as a array
const circle3 = new Circle1(1);


//Value vs Reference Types
    // Value Types
    //     Number
    //     String
    //     Boolean
    //     Symbol
    //     undefined
    //     null

    // Reference Types
    //     Object()
    //     Function
    //     Array

//value type
let a = 10;
let b = x;
b = 20;
//this two variable are independent coz b value wont be change when
//we reassign value for a

// Reference Types
let c = { value : 10};
let d = x;

c.value = 20;
//this will be same with c and d value 
// when we declare the object as c variable that object will store somewhere else
// in memory location not in that variable but the address of that memory 
// location will store in that variable
// Conclusion
// Primitives are copied by their value
// Objects are copied by their reference

let number = 10;
function increase(number) {
    number++;
}
increase(number)
console.log(number);
//that will be still 10 coz the number variable between function scope is independent with the number variable outside of the function scope


let obj = { value : 10};
function increase(obj) {
    obj.value++;
}
increase(obj)
console.log(obj);
// in here that will be increase that obj coz the obj are reference data types


// Adding / Removing Properties
function Circle4(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

let circle5 = new Circle4(10); 
circle5.location = { x : 1}; //add the new property
// the upper one is same with the under one;
// circle5['location'] = { x : 1};

delete circle5['location'] // removing properties form object


// Enumeration Properties

function Circle6(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const circle7 = new Circle6(10);

for (let key in circle7) {
    if (typeof circle7[key] != 'function') {
        console.log(key, circle7[key]);
    }
}

const keys = Object.keys(circle7);
console.log(keys);

if ('radius' in circle7) {
    console.log('Circle has a radius');
}

// Abstraction
// hide the details show the essentials
// Private Properties and Methods
function Circle8(radius) {
    this.radius = radius;
    let defaultLocation = { x: 0, y: 0 }; // this is local variable fot that function 
    let computeOptimumLocation = function (factor) { // this is also private method not accessable by outside of that function
        // ...
    }
    this.draw = function() {
        computeOptimumLocation(0.1);
        console.log('draw');
    }
}
const circle9 = new Circle6(10);

// Geters / Seters
function Circle10(radius) {
    this.radius = radius;
    let defaultLocation = { x: 0, y: 0 };
    this.getDefaultLocation = function () {
        return defaultLocation;
    };
    this.draw = function () {
        console.log('draw');
    };

    Object.defineProperty(this, 'defaultLocation', { // that will read only property
        get : function () {
            return defaultLocation;
        },
        set : function (value) {
            if (!value.x || !value.y)
            throw new Error('Invalid location')
            defaultLocation = value;
        }
    })
}
const circle11 = new Circle10();
circle11.draw();
// exercise stop watch

function Stopwatch () {
    let startTime , endTime , running , duration = 0;
    this.start = function () {
        if (running) {
            throw new Error('Stopwatch has already started.');
        }
        running = true;
        
        startTime = new Date();
    };    

    this.stop = function () {
       if(!running) {
           throw new Error('Stopwatch is not started.');
       }
       running = false;

       endTime = new Date();

       const seconds = (endTime.getTime() - startTime.getTime()) / 1000 ;
       duration += seconds
    };

    this.reset = function () {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', { // readOnly property
        get : function () {
            return duration;
        }
    });
}




