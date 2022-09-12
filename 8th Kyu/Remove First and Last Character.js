// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
// You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
    return str.slice(1, -1)
  };
  
  //PREP
  //PARAMETERS
  //Take in any string.
  //
  //RETURNS
  //Return the string, but with the first and last characters removed.
  //
  //EXAMPLES
  //place = lac
  //country = ountr
  //
  //PSEUDO
  //Split the string into separate characters
  //Remove the first and last characters of the split string
  //Rejoin the remaining characters into a single string