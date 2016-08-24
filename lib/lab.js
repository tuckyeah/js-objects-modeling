'use strict';

// recipe properties:
  // name (name)
  // author (author)
  // list of steps (instructions)
  // list of ingredient quantites (ingredientList)
  // number of servings (numServings)

// an ingredient quantity must have:
  // ingredient (ingredient)
  // a unit of measure (measureUnits)
  // quantity (quantity)
  // notes (notes)

// an ingredient must have:
  // a name (name)
  // haveIngredient (do we have it or not?)


let recipe = {
  name: 'Grilled Cheese',
  author: 'Chef Tucker',
  instructions: ['Melt 2 tbsps of butter in pan',
    'Place one slice of cheese between two slices of bread',
    'Place cheese sandwich on pan',
    'When cheese has begun to melt, flip sandwich',
    'When both sides are desired level of toastiness, place bread on plate',
    'Salt and pepper to taste',
    'Enjoy!'],
  numServings: 1,
  ingredientList: {
    cheese: {
      units: 'slice',
      quantity: 1,
      notes: 'fresh eggs are best!',
      haveIngredient: true
    },
    bread: {
      units: 'slice',
      quantity: 2,
      notes: 'Use wheat bread to be extra healthy!',
      haveIngredient: false
    },
    butter: {
      units: 'tablespoon',
      quantity: 2,
      haveIngredient: false
    }
  },
  listIngredients: function() {
    // makes a variable to store all keys to trim down on
    // length in the for loop
    let allIngredients = Object.keys(this.ingredientList);
    console.log("LIST OF INGREDIENTS:");
    console.log("---");

    //loop through each of the ingredients/keys and print out
    // <quantity> <measurement> of <ingredient> as a string
    for (let i = 0; i < allIngredients.length; i++) {
      // set variable 'ingredient' to current iteration from allIngredients
      // again, just to make things more readable further down.
      let ingredient = allIngredients[i];
      let currentQty;

      // pluralize the measurement units based on ingredient quantity
      if (this.ingredientList[ingredient].quantity > 1) {
        currentQty = this.ingredientList[ingredient].units + 's';
      } else {
        currentQty = this.ingredientList[ingredient].units;
      }

      //print out each ingredient
      console.log(this.ingredientList[ingredient].quantity +
      " " + currentQty + " of " + ingredient);
    }
  },
  listInstructions: function() {
    console.log("INSTRUCTIONS");
    console.log("---");
    //loop through instructions and print out each line
    for (let i = 0; i < this.instructions.length; i++) {
      console.log(this.instructions[i]);
    }
  },
  needSomething: function() {
    let needs = [];

    //loop through the keys in ingredientList and checks
    // if haveIngredient is false.
    // if it is, add it to the needs array.
    for (let key in this.ingredientList) {
      if(!this.ingredientList[key].haveIngredient) {
        needs.push(key);
      }
    }
    // if the needs length isn't empty, print out all the items in needs
    // otherwise, say we're good to go!
    if (needs.length > 0) {
      console.log("We need " + needs.join(" and "));
    } else {
      console.log("We have everything! Let's get cooking!");
    }
  }
};

recipe.needSomething();



// let recipe = {
//   name: 'Great Brownies',
//   author: 'Chef Tucker',
//   instructions: ['Preheat oven', 'Mix ingredients in bowl',
//     'Pour batter into baking pan', 'Bake at 350*F for 45 minutes',
//     'Remove brownies and let cool on counter for 30 minutes', 'Enjoy!'],
//   ingredientList: {
//     ingredient: {
//       ingredientName: 'Butter',
//       haveIngredient: true,
//       unitOfMeasurement: 'teaspoon',
//       amount: 0,
//       notes: ''
//     }
//   }
// };
