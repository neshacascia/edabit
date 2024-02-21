// Buggy Code (Part 5):
// Mubashir created an infinite loop! Help him by fixing the code in the code
// tab to pass this challenge. Look at the examples below to get an idea of what
// the function should do.

function printArray(n) {
  const newArray = [];

  for (let i = 1; i <= n; i++) {
    newArray.push(i);
  }

  return newArray;
}
