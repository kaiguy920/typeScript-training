"use strict";
let message = "Hello world";
message += ' again';
console.log(message);
// =============================================================================
//                                 PRIMITIVE TYPES
// =============================================================================
let isPresent = false;
let magic = 66.6;
let hello = 'world';
let notDefined = undefined;
let notPresent = null;
let penta = Symbol('star');
let biggy = 24n;
// =============================================================================
//                                 INSTANCE TYPES
// =============================================================================
let regexp = new RegExp('ab+c');
let array = [1, 2, 3];
let set = new Set([1, 2, 3]);
// a first in first out collection
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) { this.data.push(item); }
    pop() { return this.data.shift(); }
}
let queue = new Queue();
// =============================================================================
//                                 ARRAYS & TUPLES
// =============================================================================
let array2 = [1, 2, 3];
// fixed length array = tuple
let tuple = [0, 0];
let center = {
    x: 0,
    y: 0,
};
let unit = {
    x: 1,
    y: 1,
};
// =============================================================================
//                                CONST DECLARATION
// =============================================================================
const point = { x: 0, y: 0 };
// point = {x:1, y:1} // Error
// All other behaviors are the same as 'let'
point.x = 123;
point.y = 456;
