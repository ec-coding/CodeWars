// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x){
  let product = x.reduce((prev, current) => prev * current, 1)
  return product
}

// PREP
// PARAMETERS
// Enter an array of integers
// RETURNS
// Return the product of all of those integers multiplied
// EXAMPLES
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
// PSEUDO
// Use the .reduce() method to multiply the mumbers together and return the product