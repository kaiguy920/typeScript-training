"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { isPalindrome } from './function'
const utils = __importStar(require("./function"));
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
// =============================================================================
//                               IMPORTING FUNCTION
// =============================================================================
console.log(utils.isPalindrome('madam')); // true
console.log(utils.isPalindrome('madan')); // false
