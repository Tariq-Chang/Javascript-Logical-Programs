// returns true if the word is pallindrome
function checkPallindrome(word) {
  let reversedWord = word.split("").reverse().join("");
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}
