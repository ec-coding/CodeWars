// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
// Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. 
// DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function DNAStrand(dna){
    //Find a way to replace a letter with its partner
    var dnaSplitter = dna.split("")
    for (i = 0; i < dna.length; i++) {
      if (dnaSplitter[i] == "A") {
        dnaSplitter[i] = "T";
      } else if (dnaSplitter[i] == "T") {
        dnaSplitter[i] = "A";
      } else if (dnaSplitter[i] == "C") {
        dnaSplitter[i] = "G";
      } else if (dnaSplitter[i] == "G") {
        dnaSplitter[i] = "C";
      } 
    }
    let momentum = dnaSplitter.join("");
    return momentum;
  }
  
  //Parameters
  // "A"
  // "T"
  // "C"
  // "G"
  //Returns
  // "A" returns "T" and vice-versa
  // "C" returns "G" and vice-versa
  
  //Example
  // AACGTA === TTGCAT
  
  //Psuedo