//

function isSpecialArray(arr) {
  return arr.every((num, ind) => {
    if (ind % 2 === 0) {
      if (num % 2 === 0) {
        return true;
      }
    }
  });
}

console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]));
