// Hashes and Pluses
// Create a function that returns the number of hashes and pluses in a string.
// Return in the order of [hashes, pluses].

function hashPlusCount(str) {
  let hashCount = 0;
  let plusCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '#') {
      hashCount++;
    } else {
      plusCount++;
    }
  }
  return [hashCount, plusCount];
}

// Refactored solution:
function hashPlusCount(str) {
  return [str.split('+').join('').length, str.split('#').join('').length];
}
