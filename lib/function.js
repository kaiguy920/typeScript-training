"use strict";
/**
 * @returns true if the input string is a palindrome
 */
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
console.log(isPalindrome('madam')); // true
console.log(isPalindrome('madan')); // false
