// Array From a Range of Numbers:
// Create a function that returns an array of all the integers between two given numbers start and end.

function rangeOfNum(start, end) {
  let arr = [];
  for (let i = start + 1; i < end; i++) {
    arr.push(i);
  }
  return arr;
}
