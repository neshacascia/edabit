// Invert an Array:
// Create a function that takes an array of numbers arr and returns an inverted array.

function invertArray(arr) {
  return arr.map(num => (num === 0 ? 0 : (num *= -1)));
}
