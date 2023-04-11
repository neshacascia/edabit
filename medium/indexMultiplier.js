// Index Multiplier:
// Return the sum of all items in an array, where each item is multiplied by its
// index (zero-based). For empty arrays, return 0.

function indexMultiplier(arr) {
  const newArr = arr.map((num, ind) => num * ind);
  return newArr.reduce((acc, curr) => acc + curr, 0);
}
