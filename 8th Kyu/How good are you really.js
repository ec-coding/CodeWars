// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
    let combinedScore = classPoints.concat(yourPoints)
    let avg = combinedScore.reduce((a, b) => a + b, 0) / combinedScore.length
    if (avg < yourPoints) {
      return true
    } else if (avg > yourPoints) {
      return false
    }
  }
  
  // PREP
  // PARAMETERS
  // Enter an array of numbers
  // RETURNS
  // Return the average of classPoints and compare it with yourPoints
  // If yourPoints is greater than the average of classPoints, return True
  // Otherwise, return False
  // EXAMPLES
  // ([2, 3], 5) should return True
  // PSEUDO
  // Join the classPoints and yourPoints together into a single array
  // Divide the resulting sum by the length of the combined array
  // Use an if statement to compare the average to yourPoints and return the appropriate boolean