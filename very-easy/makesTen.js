// Two Makes Ten:
// Create a function that takes two arguments. Both arguments are integers, a and b.
// Return true if one of them is 10 or if their sum is 10.

function makesTen(a, b) {
  return a + b === 10 || a == 10 || b === 10 ? true : false;
}
