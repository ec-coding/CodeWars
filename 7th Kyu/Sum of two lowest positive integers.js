// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. 
// No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {  
  let numberSort = numbers.sort((a, b) => a - b);
  return numberSort[0] + numberSort[1]
}
//PREP
//PARAMETERS
//You are given an array of at least 4 positive integers
//
//RETURNS
//Take the sum of the 2 lowest numbers and return it
//
//EXAMPLES
//[5, 8, 12, 19, 22] = 13
//
//PSEUDO
//How do you sort a list from lowest to highest?
//How would you then take the first 2 numbers from that sorted list and add them together?
