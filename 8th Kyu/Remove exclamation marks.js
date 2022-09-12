// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    return s.split('!').join('')
  }
  
  //PREP
  //PARAMETERS
  //Enter any given string
  //RETURNS
  //Return the string without any exclamation marks
  //
  //EXAMPLES
  //"Hello World!" -> "Hello World"
  //
  //PSEUDO
  //Can we use .split() at each !, and then .join('')? 