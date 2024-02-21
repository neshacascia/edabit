//
//

function toArray(num) {
  return num
    .toString()
    .split('')
    .join('')
    .map(num => num);
}

console.log(toArray(235));
