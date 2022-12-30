// Check if One Array can be Nested in Another:
// Create a function that returns true if the first array can be nested inside the second
// and false otherwise.

// arr1 can be nested inside arr2 if arr1's min is greater than arr2's min and
// arr1's max is less than arr2's max.

function canNest(arr1, arr2) {
  return Math.min(...arr1) > Math.min(...arr2) &&
    Math.max(...arr1) < Math.max(...arr2)
    ? true
    : false;
}
