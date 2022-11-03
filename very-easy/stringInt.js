// Return a String as an Integer:
// Create a function that takes a string and returns it as an integer.

function stringInt(str) {
  return parseInt(str);
}

// Refactored solution:
function stringInt(str) {
  return Number(str);
}

function stringInt(str) {
  return +str;
}
