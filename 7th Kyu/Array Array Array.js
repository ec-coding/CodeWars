// You are given an initial 2-value array (x). You will use this to calculate a score.

// If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

// Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

// For example:

// if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].

function explode(x){
    let emptyArr = []
    if (isNaN(x[0]) && isNaN(x[1])) {
      return 'Void!'
    } else if (isNaN(x[0]) && !isNaN(x[1])) {
      let arrSecondNum = x[1]
      for (i = 0; i < arrSecondNum; i++) {
        emptyArr.push(x)
      }
      return emptyArr
    } else if (!isNaN(x[0]) && isNaN(x[1])) {
      let arrFirstNum = x[0]
      for (i = 0; i < arrFirstNum; i++) {
        emptyArr.push(x)
      }
      return emptyArr
    } else {
      let arrSum = Number(x[0]) + Number(x[1])
      for (i = 0; i < arrSum; i++) {
        emptyArr.push(x)
      }
      return emptyArr
    }
  }
  
  // PREP
  // PARAMETERS
  // 2-value array (x)
  // RETURNS
  // Array of arrays, number of arrays is equal to the score
  // EXAMPLES
  // if x == ['a', 3] -> [['a', 3],['a', 3], ['a', 3]]
  // PSEUDO
  // Create an empty array
  // Check if both elements in the x array are numbers
  // If they are, add them together into a sum variable
  // If only one is a number, put that into a sum variable
  // If neither are numbers, return "Void!"
  // Create a for loop whose length is less than the sum variable
  // Push the x array into the empty array for each time the loop runs
  // Return the resulting array