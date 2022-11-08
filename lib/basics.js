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
