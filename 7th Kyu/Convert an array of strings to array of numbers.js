// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.

function toNumberArray(stringarray){
    numArray = stringarray.map(Number)
    return numArray
  }
  
  // PREP
  // PARAMETERS
  // Enter a sequence of numbers represented as strings
  // RETURNS
  // Return the sequence as numbers
  // EXAMPLES
  // ["1", "2", "3"]
  // PSEUDO
  // Loop through each element in the array and convert it to a number