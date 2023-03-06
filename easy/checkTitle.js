// Check If It's a Title String
// Check if a string title is a title string or not. A title string is one which has all
// the words in the string start with a upper case letter.

function checkTitle(title) {
  return title.split(' ').every(str => str[0] === str[0].toUpperCase());
}
