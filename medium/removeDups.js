// Remove Duplicates from an Array:
// Create a function that takes an array of items, removes all duplicate items
// and returns a new array in the same sequential order as the old array (minus
// duplicates).

function removeDups(arr) {
  const newArr = [];
  arr.filter(elem => {
    if (!newArr.includes(elem)) {
      newArr.push(elem);
    }
  });

  return newArr;
}

// Refactored solution:
function removeDups(arr) {
  const newArr = new Set(arr);
  return [...newArr];
}
