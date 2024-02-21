// Difference of Volumes of Cuboids:
// Create a program that will take two arrays of integers, a and b. Each array will consist
// of 3 positive integers, representing the dimensions of cuboids a and b. Find the difference
// of the cuboids' volumes.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the
// volume of b is 20. Therefore, the function should return 8.

function findDifference(a, b) {
  let volA = a.reduce((prev, curr) => prev * curr);
  let volB = b.reduce((prev, curr) => prev * curr);

  return Math.abs(volA - volB);
}

// Refactored solution:
function findDifference(cube1, cube2) {
  const [[a, b, c], [d, e, f]] = [cube1, cube2];
  return Math.abs(a * b * c - d * e * f);
}
