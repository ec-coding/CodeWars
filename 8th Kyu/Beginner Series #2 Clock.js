// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

function past(h, m, s){
  return ((h * 3600000) + (m * 60000) + (s * 1000))
}

//PREP
//PARAMETERS
//The function takes in values for hours, minutes, and seconds
//
//RETURNS
//The function returns all of the values above, added together, in milliseconds
//1 hour = 3,600,000 ms
//1 minute = 60,000 ms
//1 second = 1,000 ms
//EXAMPLES
//1,1,1 = 3,661,000 ms
//1,0,0 = 3,600,000 ms
//PSEUDO
//Multiply each time aspect by its respective conversion rate to ms
//Add all of them together afterwards