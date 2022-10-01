// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. 
// You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. 
// Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

function smash (words) {
    return words.join(' ')
 };
 
 // PREP
 // PARAMETERS
 // Enter in an array of words
 // RETURNS
 // Return the words joined together
 // EXAMPLES
 // ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
 // PSEUDO
 // Use the .join(' ') method on the array