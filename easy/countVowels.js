// How Many Vowels?
// Create a function that takes a string and returns the number (count) of vowels contained within it.

function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return str.split('').filter(letter => vowels.includes(letter)).length;
}
