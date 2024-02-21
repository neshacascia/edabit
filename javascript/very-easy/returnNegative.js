// Return Negative:
// Create a function that takes a number as an argument and returns negative of that
//number. Return negative numbers without any change.

function returnNegative(n) {
  return n >= 0 ? -n : n;
}

// Refactored solution:
function returnNegative(n) {
  return -Math.abs(n);
}
