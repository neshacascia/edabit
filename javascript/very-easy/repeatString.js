// Repeat String
// Create a function that takes a string txt and a number n and returns the repeated string
// n number of times.

// If given argument txt is not a string, return Not A String !!

function repeatString(txt, n) {
  if (typeof txt !== 'string') {
    return 'Not A String !!';
  } else {
    return txt.repeat(n);
  }
}

// Refactored solution:
function repeatString(txt, n) {
  return typeof txt !== 'string' ? 'Not A String !!' : txt.repeat(n);
}
