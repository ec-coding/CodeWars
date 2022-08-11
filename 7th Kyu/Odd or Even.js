// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"
// Have fun!

function oddOrEven(array) {
    let sum = array.reduce((a, b) => a + b, 0);
    if (sum % 2 === 0) {
      return 'even';
    } else {
      return 'odd';
    }
  }
  
  //PREP
  //PARAMETERS
  //The function is given an array of integers
  //Add all of the numbers in the array together
  //RETURNS
  //If the sum of the numbers in the array are even, return 'even'; else return 'odd'
  //EXAMPLES
  //[0] = 'even'; [4, 1, 2] = 'odd'
  //PSEUDO
  //How do you loop through the array and add all of its numbers together? .map()?