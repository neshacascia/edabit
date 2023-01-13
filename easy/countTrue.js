// How Much is True?:
// Create a function which returns the number of true values there are in an array.

function countTrue(arr) {
  return arr.filter(elem => elem === true).length;
}
