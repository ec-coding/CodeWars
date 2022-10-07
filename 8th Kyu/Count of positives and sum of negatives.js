// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0 ) {
      return [];
    } else {
      let arrOne = []
      let arrTwo = []
      let arrThree = []
    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
        arrOne.push(input[i])
      } else if (input[i] < 0) {
        arrTwo.push(input[i])
      }
    } 
    let posCount = arrOne.length;
    arrThree.push(posCount)
    let negSum = arrTwo.reduce((a, b) => a + b, 0);
    arrThree.push(negSum)
    return arrThree
    } 
  }
  
  // PREP
  // PARAMETERS
  // Enter an array of positive and negative integers
  // RETURNS
  // Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers
  // EXAMPLES
  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]
  // PSEUDO
  // Create three empty arrays
  // If the input is null OR its length is empty, return an empty array
  // Use a for loop combined with an if statement to check if a number is greater than, less than, or equal 0
  // Push the positive numbers into one array and the negative numbers into the other
  // Afterwards, use .length() to determine how many numbers are in the first array, and push the result into the 3rd array
  // For the second array, use .reduce() to add all of the numbers together, and push the sum into the 3rd array
  // Return the 3rd array