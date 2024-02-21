// Factors of a Given Number:
// Create a function that finds each factor of a given number n.
// Your solution should return an array of the number(s) that meet this
// criteria. Return an empty array if the given number is less than 1.

function findFactors(num) {
  const arr = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      arr.push(i);
    }
  }
  return arr;
}
