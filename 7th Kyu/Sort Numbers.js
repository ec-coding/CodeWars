// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

function solution(nums){
    if (nums == null) {
      return []
    } else {
    return nums.sort((a, b) => a - b)
    }
  }
  
  // PREP
  // PARAMETERS
  // Enter in an array of numbers
  // RETURNS
  // Return the array with the numbers sorted
  // EXAMPLES
  // [5, 6, 2, 4] --> [2, 4, 5, 6]
  // PSEUDO
  // Use the sort method to arrange the numbers in ascending order