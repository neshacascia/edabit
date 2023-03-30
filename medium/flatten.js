// Fix the Error: Flattening an Array:
// I'm trying to write a function to flatten an array of subarrays into one array.
// (Suppose I am unware there is a .flat() method in the Array prototype). In other
// words, I want to transform this: [[1, 2], [3, 4]] into [1, 2, 3, 4].

// Fix this incorrect code so that all tests pass!
function flatten(arr) {
  const arr2 = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      arr2.push(arr[i][j]);
    }
  }
  return arr2;
}
