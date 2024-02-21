// Even All the Way:
// Given an array of numbers, return an array which contains all the even numbers in the original
// array, which also have even indices.

function getOnlyEvens(nums) {
  return nums.filter((num, ind) => num % 2 === 0 && ind % 2 === 0);
}
