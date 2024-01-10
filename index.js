function reverseString(word) {
  //create an array from the input string
  const wordArray = word.split("");
  //reverse the array
  const reverseArray = wordArray.reverse();
  //create a string from the reversed array
  const reversedWordNew = reverseArray.join("");
  //return the reversed string
  return reversedWordNew;
}

function isPalindrome(word) {
  // Write your algorithm here
  //reverse word
  const reverseWord = reverseString(word);
  
  if (word === reverseWord) {
    return true;
  } else {
    return false;
  }


 /* const len = word.length;

  for (let i = 0 ; i < len/2; i++) {
    if (word[i] !== word[len - 1 - i]){
    return false
  }
  return true 
  }*/
}
console.log(isPalindrome("mom"));
/* 
  Add your pseudocode here

  function receives one argument
  return true if string is palindrome(read the same forwards and backwards)  Input is same after reversing.
  return false if not a palindrom

  function () {
    if reversed word is same as input;
    return true
    else 
    return false
  }
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"))

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
