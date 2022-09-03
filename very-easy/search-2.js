/* Find the Index (Part #2):
Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1. */

function search(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }
  return -1;
}
