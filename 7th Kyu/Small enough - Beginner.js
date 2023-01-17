// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

function smallEnough(a, limit){
  const belowLimit = (currentValue) => currentValue <= limit
  return a.every(belowLimit)
}

// PREP
// PARAMETERS
// Enter in an array, and a number
// RETURNS
// If all of the numbers in the array are lower or equal to the number, return true; otherwise return false
// EXAMPLES
// ([66, 101], 200), true
// ([78, 117, 110, 99, 104, 117, 107, 115], 100), false
// PSEUDO
// Create a callback function that measures if a value is less than or equal to 'limit'
// Use the .every() method on 'a' with the callback function to check if each number fulfills the conditions of the callback function
// Return the corresponding boolean