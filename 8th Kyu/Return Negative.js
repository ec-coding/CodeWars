// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

function makeNegative(num) {
  return -Math.abs(num)
}

//PREP
//PARAMETERS
//You enter in any number via num

//RETURNS
//The function returns the negative version of that number, even if the one input was initially negative

//EXAMPLES
//makeNegative(4) = -4
//makeNegative(-23) = -23

//PSEUDO
//What is a way to always return negative numbers?