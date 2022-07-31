// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
  //Take a number and create an array of all the digits
  let arr = num.toString().split('')
  //If it's a zero, we keep it as a zero, so we can get rid of it later
  return arr.map((element, index) => {
    if (element == "0") {
      return element;
    }
    //This is where we pad the zeros
    const zeroAdd = arr.length - 1 - index
    return element + "0".repeat(zeroAdd)
    }).filter((element) => {
    //We get rid of every instance where we have a "0"
      return element != "0"
    //And then we join the numbers all together with " + "
    }).join(' + ')
}

//PARAMETERS
//Number --> convert to array

//RETURNS
//String --> Expanded Form

//EXAMPLE
//5830 --> 5000 + 800 + 30

//PSEUDO
//turn the number into an array of numbers
//anything you do with the array, you make it into a loop
// split map join
// num.length

//You can't convert a number into an array- you have to convert it into a string first.