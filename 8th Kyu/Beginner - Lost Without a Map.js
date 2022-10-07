// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

function maps(x){
    return x.map((a) => a * 2)
  }
  
  // PREP
  // PARAMETERS
  // Enter in an array of integers
  // RETURNS
  // Return a new version of the array with each integer's value doubled
  // EXAMPLES
  // ([1, 2, 3]), [2, 4, 6])
  // PSEUDO
  // Use the .map() method to do a callback on each element in the array and have them multiplied by 2