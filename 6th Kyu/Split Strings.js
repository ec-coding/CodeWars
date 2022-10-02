// Complete the solution so that it splits the string into pairs of two characters. 
// If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
  let stringSplit = str.match(/.{1,2}/g)
 if (str != "") {
  let lastEl = stringSplit.slice(-1)
  let lastElStr = lastEl.toString()
  
  if (lastElStr.length != 2) {
    stringSplit.pop()
    let finalStr = stringSplit.concat(lastEl + '_')
    return finalStr
  } else {
   return stringSplit
  }
 }
 return str.split('')
}

// PREP
// PARAMETERS
// Enter in a string
// RETURNS
// Return the string into pairs of 2 characters
// EXAMPLES
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']
// PSEUDO
// Use .match() with a value of {1,2} to split the array into pairs of elements.
// If str === "", return it back as an array with .split('')
// Otherwise, convert the last element of the array into a string.
// If the length of said string equals 2, return the split array.
// If the length of said string does not equal 2, pop the last element of the array.
// Afterwards, concat the array with initial last element of the array, combined with '_' and return the result.