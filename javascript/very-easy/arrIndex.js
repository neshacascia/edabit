//
//

function arrIndex(arr, idx) {
  const newArr = arr.flat();
  let str = '';
  for (let j = 1; j < idx.length; j++) {
    str += newArr.at(idx[j - 1]);
  }
  console.log(newArr);
  return str;
}

console.log(
  arrIndex(
    [
      ['m', 'u', 'b'],
      ['a', 's', 'h'],
      ['i', 'r', '1'],
    ],
    [1, 3, 5, 8]
  )
);
