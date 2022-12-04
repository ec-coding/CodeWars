// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
    let logRes = url.replace('https://', ' ')
    let log2Res = logRes.replace('http://', ' ')
    let log3Res = log2Res.replace('www.', ' ')
    let log4Res = log3Res.replace('.', ' ').trim()
    let final = log4Res.split(' ')
    let finalRes = final.shift()
    return finalRes
  }
  
  // PREP
  // PARAMETERS
  // Enter in a url as a string
  // RETURNS
  // Return only the domain name of the string
  // EXAMPLES
  // * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
  // PSEUDO
  // Use replaceAll methods to filter through the string and replace http://, https://, and www. with a blank space
  // Do the same for any instances of periods
  // Afterwards, convert the result into an array and return the .shift()