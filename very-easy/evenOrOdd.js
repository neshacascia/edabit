// Even or Odd?:
// Given an array of integers, determine whether the sum of its elements is even or odd.
// The return value should be a string ("odd" or "even").
// If the input array is empty, consider it as an array with a zero ([0]).

// function evenOrOdd(arr) {
function evenOrOdd(arr) {
  if (arr.length === 0) {
    return 'even';
  } else {
    const sum = arr.reduce((prev, current) => prev + current);
    return sum % 2 === 0 ? 'even' : 'odd';
  }
}
