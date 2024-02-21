// Converting Objects to Arrays
// Write a function that converts an object into an array, where each element represents a
// key-value pair in the form of an array.

function toArray(obj) {
  return Array.from(obj);
}

console.log(
  toArray({
    first: 'Nesha',
    last: 'Mervin',
  })
);
