// Fix the Bug: Simple Array Manipulation:
// Help fix all the bugs in the function incrementItems!
// It is intended to add 1 to every element in the array!

function incrementItems(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += 1;
  }
  return arr;
}
