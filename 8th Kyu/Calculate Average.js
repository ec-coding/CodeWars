// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
    let total = array.reduce((a, b) => a += b, 0)
    if (total != 0) {
      return (total / array.length)
    } else if (array.length == 0) {
      return 0
    }
  }
  
  // PARAMETERS - RETURNS - EXAMPLES - PSEUDO CODE
  // PARAMETERS: array of numbers
  // RETURNS: average of array numbers
  // EXAMPLE: [5, 10, 15] = 10
  // PSEUDO CODE