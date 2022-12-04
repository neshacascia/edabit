// Sum Greater Than Five:
// Write a function that returns the sum of elements greater than 5, in the given array.

function sumFive(arr) {
  return arr.filter(num => num > 5).reduce((prev, curr) => prev + curr, 0);
}
