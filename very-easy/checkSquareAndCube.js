// Squares and Cubes:
// Create a function that takes an array of two numbers and checks if the square root
// of the first number is equal to the cube root of the second number.

function checkSquareAndCube(arr) {
  const [a, b] = arr;
  return Math.sqrt(a) === Math.cbrt(b);
}
