// Rotate the Array by One:
// Given an array, rotate the values clockwise by one (the last value is sent to the first position).

function rotateByOne(arr) {
  const lastEl = [arr.pop()];
  return lastEl.concat(arr);
}

// Refactored solution:
function rotateByOne(arr) {
  return [arr.pop(), ...arr];
}
