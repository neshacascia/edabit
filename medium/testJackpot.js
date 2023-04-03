// Hitting the Jackpot:
// Create a function that takes in an array (slot machine outcome) and returns
// true if all elements in the array are identical, and false otherwise. The array
// will contain 4 elements.

function testJackpot(result) {
  const item = result[0];

  return result.every(elem => elem === item);
}
