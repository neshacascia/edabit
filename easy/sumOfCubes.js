// Sum of Cubes:
// Create a function that takes in an array of numbers and returns the sum of its cubes.

function sumOfCubes(nums) {
  return nums.length > 0
    ? nums.map(num => Math.pow(num, 3)).reduce((prev, curr) => prev + curr)
    : 0;
}

// Refactored solution:
function sumOfCubes(nums) {
  return nums.reduce((prev, curr) => prev + Math.pow(curr, 3), 0);
}
