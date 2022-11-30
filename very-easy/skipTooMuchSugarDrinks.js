//
//

function skipTooMuchSugarDrinks(drinks) {
  drinks.forEach(drink => {
    console.log(drink !== 'fanta');
  });
}

skipTooMuchSugarDrinks(['lemonade', 'beer', 'fanta']);
