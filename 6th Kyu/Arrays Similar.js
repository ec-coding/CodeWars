// Write a function that determines whether the passed in arrays are similar. 
// Similar means they contain the same elements, and the same number of occurrences of elements.

// const arr1 = [1, 2, 2, 3, 4],
//       arr2 = [2, 1, 2, 4, 3],
//       arr3 = [1, 2, 3, 4],
//       arr4 = [1, 2, 3, "4"]

// arraysSimilar(arr1, arr2); // Should equal true
// arraysSimilar(arr2, arr3); // Should equal false
// arraysSimilar(arr3, arr4); // Should equal false

function arraysSimilar(arr1, arr2) {
    if (arr1.length !== arr2.length) 
      return false
    
    arr1.sort()
    arr2.sort()
    
    for (i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) 
        return false
    }
    return true
  }
  
  
  // PREP
  // PARAMETERS
  // Enter in 2 arrays
  // RETURNS
  // Return true if the arrays are similar, return false if they are not.
  // To be similar, both arrays should contain the same elements, and the same number of occurences of elements.
  // EXAMPLES
  // arr1 = [1, 2, 2, 3, 4],
  // arr2 = [2, 1, 2, 4, 3],
  // arr3 = [1, 2, 3, 4],
  // arr4 = [1, 2, 3, "4"]
  
  // arraysSimilar(arr1, arr2); // Should equal true
  // arraysSimilar(arr2, arr3); // Should equal false
  // arraysSimilar(arr3, arr4); // Should equal false
  
  // PSEUDO
  // Should I measure array length?
  // How do I check to see if the arrays contain the same elements, if they do not exist on the same index as each other?
  // Sort each array
  // Afterwards, loop through the index of each array to see if they match and return the result