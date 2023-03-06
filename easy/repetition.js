// Repeat a String n Number of Times
// Create a function that takes two parameters and repeats the string n number of times. The first
// parameter txt is the string to be repeated and the second parameter is the number of times the
// string is to be repeated.

// String.prototype.repeat() is not allowed

function repetition(txt, n) {
  let str = '';
  for (let i = 0; i < n; i++) {
    str += txt;
  }
  return str;
}
