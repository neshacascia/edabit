// To the Power of _____:
// Create a function that takes a base number and an exponent number and returns the calculation.

function calculateExponent(num, exp) {
  return num ** exp;
}

// Refactored solution:
function calculateExponent(num, exp) {
  return Math.pow(num, exp);
}
