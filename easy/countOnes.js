// Count Ones in a 2D Array:
// Create a function to count the number of 1s in a 2D array.

function countOnes(matrix) {
  let newArr = matrix.flat();
  let count = 0;
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === 1) {
      count++;
    }
  }
  return count;
}
