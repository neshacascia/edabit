// Transform into an Array with No Duplicates:
// A set is a collection of unique items. A set can be formed from an array by
// removing all duplicate items. Create a function that sorts an array and removes
// all duplicate items from it.

function set(arr) {
  return [...new Set(arr)].sort((a, b) => a - b);
}
