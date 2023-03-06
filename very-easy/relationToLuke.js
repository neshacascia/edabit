// Luke, I Am Your ...
// Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name,
// return the relation of that person to Luke.

// Person	    Relation
// Darth Vader	father
// Leia	        sister
// Han	        brother in law
// R2D2	        droid

function relationToLuke(name) {
  const relations = {
    'Darth Vader': 'father',
    Leia: 'sister',
    Han: 'brother in law',
    R2D2: 'droid',
  };

  return `Luke, I am your ${relations[name]}.`;
}
