// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    x = x.replace(/[.,?:;\/() _-]/g, '').toLowerCase();
    return x == x.split('').reverse().join('');
  }