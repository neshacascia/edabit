// Filter Strings from Array:
// Create a function that takes an array of strings and numbers, and filters out the array
// so that it returns an array of integers only.

function filterArray(arr) {
  return arr.filter(elem => Number.isInteger(elem));
}
