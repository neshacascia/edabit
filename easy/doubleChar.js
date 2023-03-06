// Repeating Letters
// Create a function that takes a string and returns a string in which each character is repeated once.

function doubleChar(str) {
  const newStr = [];

  str.split('').forEach(letter => newStr.push(letter.repeat(2)));
  return newStr.join('');
}

// Refactored solution
function doubleChar(str) {
  return str
    .split('')
    .map(letter => letter.repeat(2))
    .join('');
}
