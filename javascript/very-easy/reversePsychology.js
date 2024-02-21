// Reverse Psychology
// For this challenge, you will NOT be given a string. Your task isn't to add "Do not" before
// the given string. If there is no given string, you will not return "Do not do anything."
// Do not check the examples to know how to do this challenge.

function reversePsychology(s) {
  return s ? `Do not ${s}.` : 'Do not do anything.';
}

// Refactored solution:
function reversePsychology(s = 'do anything') {
  return `Do not ${s}.`;
}
