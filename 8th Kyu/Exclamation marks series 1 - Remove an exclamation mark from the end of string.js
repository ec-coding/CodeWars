// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") == "Hi"
// remove("Hi!!!") == "Hi!!"
// remove("!Hi") == "!Hi"
// remove("!Hi!") == "!Hi"
// remove("Hi! Hi!") == "Hi! Hi"
// remove("Hi") == "Hi"

function remove (string) {
  const markCheck = string.charAt(string.length - 1)
  console.log(markCheck)
  console.log(string)
  if (markCheck == "!") {
    return string.slice(0, -1)
  } else {
    return string
  }
}

// PREP
// PARAMETERS
// Enter in a string
// RETURNS
// Return the string with an exclamation mark at the end removed
// EXAMPLES
// "Hello!" --> "Hello"
// PSEUDO
// Find out if the last character is an exclamation mark
// If it is, remove it
// Afterwards, return the string