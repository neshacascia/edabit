// Is the String Empty?:
// Create a function that returns true if a string is empty and false otherwise.

function isEmpty(s) {
  return s ? false : true;
}

// Refactored solution:
function isEmpty(s) {
  return !s;
}
