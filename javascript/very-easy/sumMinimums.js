// Sum of Minimums:
// Create a function that takes a 2D array arr and returns the sum of the minimum value in each row.

function sumMinimums(arr) {
  return arr.map(row => Math.min(...row)).reduce((prev, curr) => prev + curr);
}
