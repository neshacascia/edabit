// First Class, Second Class and Third Class Levers:
//Given an array that contains the fulcrum "f", the effort "e", and the load "l",
// write a function that determines whether or not the array shows a first class lever,
// second class lever, or a third class lever.

function determineLever(arr) {
  const [item1, item2, item3] = arr;

  return item1 === 'e' && item2 == 'f' && item3 === 'l'
    ? 'first class lever'
    : item1 === 'e' && item2 == 'l' && item3 === 'f'
    ? 'second class lever'
    : 'third class lever';
}
