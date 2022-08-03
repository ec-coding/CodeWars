// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
    return a.filter((repeatNum) => {
      //If the number is also in b, don't return
      return ! b.includes(repeatNum)
      //Needs to return true or false
    })
  }
  
  //PREP 
  //PARAMETERS
  // Same values from array a and array b must be eliminated
  
  //RETURN
  // numbers that are exclusive to their arrays
  
  //EXAMPLE
  //arrayDiff([4,3,1], [3,4,2,6]) == [1]
  
  //PSEUDO