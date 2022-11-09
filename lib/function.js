"use strict";
/**
 * @returns true if the input string is a palindrome
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindrome = void 0;
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
exports.isPalindrome = isPalindrome;
console.log('Logged in user:', process.env.USER);
const fs_1 = __importDefault(require("fs"));
fs_1.default.writeFileSync('hello.txt', 'Hello world');
