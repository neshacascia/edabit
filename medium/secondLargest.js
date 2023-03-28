function secondLargest(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  return sortedArr[sortedArr.length - 2];
}
