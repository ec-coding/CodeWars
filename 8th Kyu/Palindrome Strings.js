// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. 
// This includes capital letters, punctuation, and word dividers.

// Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

// Examples(Input ==> Output)
// "anna"   ==> true
// "walter" ==> false
// 12321    ==> true
// 123456   ==> false

function isPalindrome(line) {
    lineReverse = line.split('').reverse().join('')
    if (line === lineReverse) {
      return true
    } else {
      return false
    }
  }
  
  // PREP
  // PARAMETERS
  // enter a string
  // RETURNS
  // return true if the string is a palindrome, false if it is not
  // EXAMPLES
  // "12321" -> true
  // "walter" -> false
  // PSEUDO
  // check if the string is the exact same as its reverse
  // split is needed first, with a join following the reverse method