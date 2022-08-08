// A hero is on his way to the castle to complete his mission. 
// However, he's been told that the castle is surrounded with a couple of powerful dragons! 
// Each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.
// ssuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)

function hero(bullets, dragons){
    if (bullets / dragons >= 2 || 0) {
      return true;
    } else {
      return false;
    } 
  }
  
  //PARAMETERS
  //Bullets + Dragons
  
  //RETURNS
  //Enough bullets (2 bullets per dragon) = True
  //Not enough = False
  
  //EXAMPLES
  //bullets = 4; dragons = 2; True
  //bullets = 5; dragons 5; False
  
  //PSEUDO
  //Will have to do less than or equal to
  //(bullets * 2) >= dragons