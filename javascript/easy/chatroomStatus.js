// Chat Room Status:
// Write a function that returns the number of users in a chatroom based on the following rules:

// If there is no one, return "no one online".
// If there is 1 person, return "user1 online".
// If there are 2 people, return "user1 and user2 online".
// If there are n>2 people, return the first two names and add "and n-2 more online".

function chatroomStatus(users) {
  return users.length === 0
    ? 'no one online'
    : users.length === 1
    ? `${users[0]} online`
    : users.length === 2
    ? `${users[0]} and ${users[1]} online`
    : `${users[0]}, ${users[1]} and ${users.length - 2} more online`;
}
