// Burglary Series (11): Say What:
// The insurance guy calls again. Apparently, they were informed by your spouse that some items
// were not stolen at all and you failed to mention this detail to them. This is a fraud attempt!
// You freeze and mumble something unintelligible. Find out what you said.

// Given an object, return a string that concatenates all the values and adds the 2nd key at the end.
// Make sure you keep an empty space between them but not at the beginning or end of the string.

function sayWhat(obj) {
  const arr = Object.values(obj);
  return [...arr, Object.values(obj)[1]].join(' ');
}
