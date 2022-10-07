// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

function getAge(inputString){
    return parseInt(inputString.split('').shift(0))
  }
  
  // PREP
  // PARAMETERS
  // Enter in a string, where the first element is always a random number
  // RETURNS
  // Return the number in said string
  // EXAMPLES
  // ("4 years old"), 4
  // PSEUDO
  // Convert the string into an array with .split('')
  // Use .shift(0) to remove the last element of the array
  // Return the shifted element with the parseInt method applied to it to convert it into an integer