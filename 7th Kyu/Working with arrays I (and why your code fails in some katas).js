// In this kata the function returns an array/list of numbers without its last element. 
// The function is already written for you and the basic tests pass, but random tests fail. Your task is to figure out why and fix it.

// Good luck!

// Hint: watch out for side effects.

function withoutLast(arr) {
    return arr.slice(0, -1);
  
  }
  
  // PREP
  // PARAMETERS
  // Enter an array
  // RETURNS
  // Return the array, but with the last element removed
  // EXAMPLES
  // [1, 2, 3] --> [1, 2]
  // PSEUDO
  // Use .slice on the array with the parameters (0, -1) and return it