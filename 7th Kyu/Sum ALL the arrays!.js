// You are given an array of values.

// Sum every number value in the array, and any nested arrays (to any depth).

// Ignore all other types of values.

function arraySum(arr) {
  let finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      finalArr.push(arr[i]);
    }
    if (Array.isArray(arr[i])) {
      finalArr.push(arraySum(arr[i]));
    }
  }
  return finalArr.reduce((a, b) => a + b, 0)
}

// PREP
// PARAMETERS
// Enter an array of values
// RETURNS
// Take all the numbers from the array, including nested ones, and return the sum
// EXAMPLES
// [1, 2, [1, 2]] -> 6
// PSEUDO
// Create an empty array and set it to a variable
// Loop through arr and shift each number in it to the empty array.
// If the loop encounters a number, call the function recursively to remove the next layer of array brackets.
// Sum the totals of all numbers in the empty array and return the result.