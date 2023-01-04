// Is the Average of All Elements a Whole Number?:
// Create a function that takes an array as an argument and returns true or false
// depending on whether the average of all elements in the array is a whole number or not.

function isAvgWhole(arr) {
  return arr.reduce((prev, curr) => prev + curr) % arr.length === 0
    ? true
    : false;
}
