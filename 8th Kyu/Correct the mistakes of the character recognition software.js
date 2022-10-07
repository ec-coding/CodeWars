// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

function correct(string)
{
	let swapper = {'5' : 'S', '0' : 'O', '1' : 'I'}
  let newStr = ''

  for (let i = 0; i < string.length; i++) {
    let currentChar = string.charAt(i)
    if (swapper[currentChar]) {
      newStr += swapper[currentChar]
    } else {
      newStr += currentChar
    }
  }
  return newStr
}

// PREP
// PARAMETERS
// Enter in a string
// RETURNS
// Return the string with certain characters replaced with others
// EXAMPLES
// ("L0ND0N"),"LONDON"
// ("DUBL1N"),"DUBLIN"
// PSEUDO
// Create an object of key-value pairs
// Create an empty string
// Create a for loop based off the length of the entered array
// Create a variable and set it to charAt(i)
// Create an if statement that checks every element in the array
// If the element matches one in the object array, call its value from the object and add it to the empty string
// Otherwise, if no element in the array matches one from the object array, add the original element to the empty string
// Return the new string

// Return the result