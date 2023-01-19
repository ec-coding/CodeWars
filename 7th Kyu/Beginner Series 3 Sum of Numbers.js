// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.

function getSum( a,b ) {
    let newArr = []
    if (a <= b) {
     for (i = a; i <= b; i++) 
       newArr.push(i)
     } else if (a > b) {
     for (i = b; i <= a; i++) 
       newArr.push(i)     
  }
    return newArr.reduce((a, b) => a + b, 0)
  }
  
  // PREP
  // PARAMETERS
  // Enter in 2 numbers, a and b
  // RETURNS
  // Return the sum of all integers between a loop beginning at a and ending at b
  // EXAMPLES
  // (1, 0) --> 1 (1 + 0 = 1)
  // (1, 2) --> 3 (1 + 2 = 3)
  // PSEUDO
  // Create a new, empty array and set it to a variable
  // Create a conditional that checks if a is less than or greater to b
  // If a is less than b, create a for loop beginning at a and ending at or equal to b, and push each i into the new array
  // If a is greater than b, create a for loop beginning at b and ending at b, and push each i into the new array
  // Reduce the array by adding all of the elements together and return the result