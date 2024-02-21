// Is the Word Singular of Plural?
// Create a function that takes in a word and determines whether or not it is plural. A plural
// word is one that ends in "s".

// This is an oversimplification of the English language. We are ignoring edge cases like "goose"
// and "geese", "fungus" and "fungi", etc.

function isPlural(word) {
  return word.endsWith('s');
}
