// Tuck in Array:
// Create a function that takes two arrays and insert the second array in the middle of the first array.

function tuckIn(arr1, arr2) {
  return [arr1[0], ...arr2, arr1[1]];
}
