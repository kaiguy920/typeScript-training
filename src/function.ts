/**
 * @returns true if the input string is a palindrome
 */

 export function isPalindrome(str: string): boolean {
    return str === str.split('').reverse().join('');
  }

console.log(
    'Logged in user:',
    process.env.USER
)

import fs from 'fs'
fs.writeFileSync('hello.txt', 'Hello world')