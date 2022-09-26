// Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

// Example:

// keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]

// Style Points (JS/CoffeeScript only): This kata only tests for data that uses object literal notation (simple objects). 
// For extra style, can you get your method to check for objects that extend their prototype?

function keysAndValues(data){
    let keys = [];
    let values = [];
      for (let key in data) {
        keys.push(key);
        values.push(data[key]);
      }
    return [keys, values];
  }
  
  // PREP
  // PARAMETERS
  // Enter in an array with key/value pairs
  // RETURNS
  // Return the keys and values and separate arrays
  // EXAMPLES
  // ({a: 1, b: 2, c: 3}) -> [['a', 'b', 'c'], [1, 2, 3]]
  // PSEUDO
  // Create 2 separate arrays and use them to fill with keys and values, respectively.
  // Use the .push() method combined with a for loop to insert said keys and values into the appropriate arrays.
  // Return the result as an array