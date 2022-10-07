// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    let stringSort = s.split(' ').sort((a, b) => b.length - a.length)
    return stringSort.slice(-1).join().length
  }
  
  // PREP
  // PARAMETERS
  // Enter in a string of words
  // RETURNS
  // Return the length of the shortest word
  // EXAMPLES
  // ("bitcoin take over the world maybe who knows perhaps"), 3
  // ("Let's travel abroad shall we"), 2
  // PSEUDO
  // Split the array
  // Sort the array based on string length
  // Slice the first element of the array, join it, and obtain its length
  // Return said length