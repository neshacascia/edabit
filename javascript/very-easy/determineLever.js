// First Class, Second Class and Third Class Levers:
// Given an array that contains the fulcrum "f", the effort "e", and the load "l",
// write a function that determines whether or not the array shows a first class lever,
// second class lever, or a third class lever.

function determineLever(arr) {
  const [, second, third] = arr;

  return second == 'f' && third === 'l'
    ? 'first class lever'
    : second == 'l' && third === 'f'
    ? 'second class lever'
    : 'third class lever';
}
