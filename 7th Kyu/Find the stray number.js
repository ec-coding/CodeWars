// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
    numbers.sort()
    if (numbers[0] != numbers[1]) {
      return numbers[0]
    } else {
      return numbers[numbers.length-1]
    }
  }
  
  // PREP
  // PARAMETERS
  // Enter in an array of numbers
  // RETURNS
  // Return the number that is unique
  // EXAMPLES
  // [1, 1, 2] ==> 2
  // [17, 17, 3, 17, 17, 17, 17] ==> 3
  // PSEUDO
  // Sort the array
  // Check if the first element equals the one at index 1
  // If it does, check if the last element equals the one at index 1
  // Return the result that doesn't end up equaling the number at index 1