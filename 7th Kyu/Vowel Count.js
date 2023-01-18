// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let vowelsCount = 0;
    const vowels = ["a", "e", "i", "o", "u"];
    for(let char of str) {
      if(vowels.includes(char)) {
        vowelsCount++
      }
    }
    return vowelsCount;
  }
  
  // PREP
  // PARAMETERS
  // Enter in a string
  // RETURNS
  // Return a number based on the number of vowels within said string
  // EXAMPLES
  // ("abracadabra"), 5
  // PSEUDO
  // Set a variable that counts vowels and have its initial value set to 0
  // Create an array containing vowels as the elements and set it to a variable
  // Create a for of loop using char to scan str
  // Create an if statement that scans if char matches any of the elements in the vowel array
  // If there is a match, add +1 to the counter 
  // Return the count of vowels