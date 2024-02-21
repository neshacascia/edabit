// Sum of Number Elements in an Array:
// Arrays can be mixed with various types. Your task for this challenge is to sum
// all the number elements in the given array. Create a function that takes an array
// and returns the sum of all numbers in the array.

function numbersSum(arr) {
  const newArr = arr.filter(elem => typeof elem === 'number');

  return newArr.reduce((acc, curr) => acc + curr, 0);
}
