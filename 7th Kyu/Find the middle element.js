// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

function gimme (triplet) {
    let sortedTriplet = triplet.slice().sort((a, b) => a - b)
    let num = sortedTriplet[1]
    return triplet.indexOf(num)
  }
  
  // PREP
  // PARAMETERS
  // Enter in a triplet array with 3 numbers
  // RETURNS
  // Return the index of the middle number when sorted in ascending order
  // EXAMPLES
  // gimme([2, 3, 1]) => 0
  // PSEUDO
  // Create a duplicate, sorted version of the array using .slice() and .sort()
  // Find the index of the 2nd element in the array and return it.