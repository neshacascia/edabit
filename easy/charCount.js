//
// Count Instances of a Character in a String
// Create a function that takes two strings as arguments and returns the number of times
// the first string (the single character) is found in the second string.

function charCount(myChar, str) {
  let count = 0;
  str.split('').forEach(letter => {
    if (letter === myChar) {
      count++;
    }
  });
  return count;
}
