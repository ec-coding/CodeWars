// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
    return str.replace(/a|e|i|o|u/gi, '')
  }
  
  // PREP
  // PARAMETERS
  // Enter in a string
  // RETURNS
  // Remove all of the vowels from the string and return the result
  // EXAMPLES
  // "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
  // PSEUDO
  // Use replace with /gi to remove all vowels from the string and replace them with a blank
  // Return the result