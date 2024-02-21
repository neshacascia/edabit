// Similar Bread:
// Given two arrays, which represent two sandwiches, return whether both sandwiches use the same
// type of bread. The bread will always be found at the start and end of the array.

function hasSameBread(arr1, arr2) {
  return arr1[0] === arr2[0] && arr1[2] === arr2[2] ? true : false;
}

// Refactored solution:
function hasSameBread(arr1, arr2) {
  const [a, , b] = arr1;
  const [c, , d] = arr2;
  return a === c && b === d;
}
