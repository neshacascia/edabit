// Secret Society:
// A group of friends have decided to start a secret society. The name will be the first
// letter of each of their names, sorted in alphabetical order.

// Create a function that takes in an array of names and returns the name of the secret society.

function societyName(friends) {
  return friends
    .sort()
    .map(friend => friend.toString().slice(0, 1))
    .join('');
}

// Refactored solution:
function societyName(friends) {
  return friends
    .map(friend => friend[0])
    .sort()
    .join('');
}
