// Instant JAZZ:
// Create a function which concatenates the number 7 to the end of every chord in
// an array. Ignore all chords which already end with 7.

function jazzify(arr) {
  return arr.map(elem => (!elem.includes('7') ? `${elem}7` : elem));
}
