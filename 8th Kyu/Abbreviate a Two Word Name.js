// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
    let strSplit = name.split(' ')
    let firstLet = strSplit[0].charAt(0)
    let secondLet = strSplit[1].charAt(0)
    return firstLet.concat('.', secondLet).toUpperCase()
  }
  
  // PREP
  // PARAMETERS
  // Enter in a string with 2 words with a space between them
  // RETURNS
  // Return the initials of the 2 words, joined by a period
  // EXAMPLES
  // Sam Harris => S.H
  // PSEUDO
  // Create an empty array.
  // Convert the string into an array.
  // Take the letter at the first index of each word and concat them together with a period
  // Upper case the result and return it