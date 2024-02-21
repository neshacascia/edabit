// Find the Second Largest Number:
// Create a function that takes an array of numbers and returns the second largest number.

function secondLargest(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  return sortedArr[sortedArr.length - 2];
}

//Refactored solution:
function secondLargest(arr) {
  return arr.sort((a, b) => a - b)[1];
}
