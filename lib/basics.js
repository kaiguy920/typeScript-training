"use strict";
// =============================================================================
//                                FUNCTIONS
// =============================================================================
function add(a, b) {
    return a + b;
}
// if function isn't designed to return a value you can annotate with :void
function log(message) {
    console.log('LOG', message);
}
// indefinfinate # of arguments '...values'
function sum(...values) {
    return values.reduce((previous, current) => {
        return previous + current;
    });
}
console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3)); // 6
let add2;
add2 = function (a, b) {
    return a + b;
};
let user = { id: 'user123' };
let product = { id: 'product-fwefw575' };
// since types are structural, if they are the same, it doesn't care about the name
user = product;
product = user;
let point2D = { x: 0, y: 10 };
let point3D = { x: 0, y: 10, z: 20 };
/** Extra info is okay */ // has the required input variables of x & y
point2D = point3D;
function takesPoint2D(point) { }
takesPoint2D(point3D);
// point3D = point2D // Error: missing info
// =============================================================================
//                                      CLASS
// =============================================================================
class Animal {
    constructor(name) {
        this.name = name;
    }
    // public keeps variable accessable outside of the class
    move(distanceInMeters) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
let cat = new Animal('Cat');
cat.move(10);
// cat.name = 'Dog' // Error: Property 'name' is private and only accessible within class 'Animal'
class Bird extends Animal {
    fly(distanceInMeters) {
        console.log(`${this.name} flew ${distanceInMeters}m.`);
    }
}
let bird = new Bird('Pigeon');
bird.fly(24);
// =============================================================================
//                                      GENERICS
// =============================================================================
/** a FIFO collection */
class Queue2 {
    constructor() {
        this.data = [];
    }
    push(item) { this.data.push(item); }
    pop() { return this.data.shift; }
}
const queue2 = new Queue2();
queue2.push(123);
queue2.push(54);
// toPrecision() is used to return the string representation in exponential or fixed-point to the specified precision
console.log(queue2.pop()?.toPrecision(1));
console.log(queue2.pop()?.toPrecision(1));
// =============================================================================
//                                      ANY VS UNKNOWN
// =============================================================================
// any doesn't put up any checks on inputs
// unknown allows for all input types, but if there's a specific function requiring a type, it will throw an internal error
function util(value) {
    if (typeof value == 'number') { //if statement helps with the internal error that woudl occur with the 'hello world' string being passed through
        console.log(value.toFixed(2)); //toFixed is only for #'s
    }
    else {
        console.log(value);
    }
}
util(123.456);
util('Hello world');
// =============================================================================
//                                      TYPE CASTING
// =============================================================================
let leet;
// later
leet = '1337';
// use as a number
// const number =  leet as number
// console.log(number === 1337); //false
// console.log(number); // '1337'
// + operator changes string to a number in TS
const number = +leet;
console.log(number === 1337); //true
console.log(number); // 1337
