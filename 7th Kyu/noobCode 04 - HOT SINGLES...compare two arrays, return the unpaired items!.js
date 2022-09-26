// Write a function that takes two arguments, and returns a new array populated with the elements that only appear once, 
// in either one array or the other, taken only once; display order should follow what appears in arr1 first, then arr2:

// hotSingles([1, 2, 3, 3], [3, 2, 1, 4, 5]) // [4, 5]
// hotSingles(["tartar", "blanket", "cinnamon"], ["cinnamon", "blanket", "domino"]) // ["tartar", "domino"]
// hotSingles([77, "ciao"], [78, 42, "ciao"]) // [77, 78, 42]
// hotSingles([1, 2, 3, 3], [3, 2, 1, 4, 5, 4]) // [4,5]

function hotSingles(arr1, arr2) {
    let resultArr = [
      ...arr1.filter(element1 => arr2.every(element2 => element2 != element1)),
      ...arr2.filter(element1 => arr1.every(element2 => element2 != element1))
    ];
    let finalFilter = resultArr.filter((element, index) => {
      return resultArr.indexOf(element) === index;
    });
    return finalFilter
  }
  
  // PREP
  // PARAMETERS
  // Enter in 2 arguments into the function, both should be arrays
  // RETURNS
  // Return an array that contains the elements that only appear once in either array
  // EXAMPLES
  // ([1, 2, 3, 3], [3, 2, 1, 4, 5]) -> [4, 5]
  // PSEUDO
  // Use the .filter() method to check each arrays elements against another's.
  // .every() should be used within the parameters of the filter methods to scan every element of each array.
  // Do this twice for each argument.
  // Filter the resulting array one more time and return an array with each element that appears only once
  