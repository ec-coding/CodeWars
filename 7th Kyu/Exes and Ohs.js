// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    var x = [];
    var o = [];
    for (var i = 0; i < str.length; i++) { // i must be lower than length
        // str[i] or str.charAt(i), not str(i)
        if (str[i].toLowerCase() === 'x') { // toLowerCase is function, it must be called with toLowerCase()
            x.push(str[i]); // should push character
        } else if (str[i].toLowerCase() === 'o') {
            o.push(str[i]);
        }
    }
    // return statement must be located at the end
    if (x.length == o.length) {
        return true;
    } else {
        return false;
    }
}