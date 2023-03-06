// Emotify the Sentence
// Create a function that changes specific words into emoticons. Given a sentence as a string,
// replace the words smile, grin, sad and mad with their corresponding emoticons.

// word	    emoticon
// smile 	:D
// grin	    :)
// sad	    :(
// mad	    :P

function emotify(str) {
  const emoticons = {
    smile: ':D',
    grin: ':)',
    sad: ':(',
    mad: ':P',
  };

  return str
    .split(' ')
    .map(str => emoticons[str] || str)
    .join(' ');
}
