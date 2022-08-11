// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    if (number % 2 === 0) {
      return number * 8
    } else {
      return number * 9
    }
}

//PREP
//PARAMETERS
//Enter in any number
//RETURNS
//If the number is even, multiply it by 8; if it is odd, multiply it by 9; return the result
//EXAMPLES
//(4) = (4 * 8): 32
//(5) = (5 * 9): 45
//PSEUDO
//How do you determine if a number is odd or even?
//Use % 2; if the result is 0, the number is even, if not, the number is odd
//Use an 'if' statement to detect either variation