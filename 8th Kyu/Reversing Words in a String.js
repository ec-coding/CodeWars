// You need to write a function that reverses the words in a given string. A word can also fit an empty string. 
// If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"
// Happy coding!

function reverse(string){
    return string.split(' ').reverse().join(' ')
  }
  
  // PREP
  // PARAMETERS
  // Enter in a string
  // RETURNS
  // Return the string with each word reversed
  // EXAMPLES
  // "Hello World" -> "World Hello"
  // PSEUDO
  // Split each string where it has a space.
  // Then reverse.
  // Then rejoin.