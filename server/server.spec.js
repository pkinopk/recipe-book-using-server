//Testing node so we can use require!
//Browser is suppose to support require, but apparently no.
let request = require('request');
describe('Get Recipe List', () => {
  it('should return a valid recipe list object', done => {
    //need done fo asynchronous tests. It's a function
    request.get('http://localhost:8000/recipelist', (error, response, body) => {
      console.log('Stuff in here will likely happen after, the console.log outside the function');
      expect(error).toBe(null); //No errors
      let data = JSON.parse(body);

      expect(data[0].name).toBe('Potato and Carrot Stew');
      expect(data[0].estimatedTime).toBe(40);
      expect(data[0].ingredients).toContain({ name: 'large onion', quantity: 1 });
      expect(data[0].ingredients).toContain({ name: 'large carrots', quantity: 2 });
      expect(data[0].ingredients).toContain({ name: 'potatos', quantity: 5 });
      expect(data[0].ingredients).toContain({ name: 'cups of water', quantity: 2 });
      expect(data[0].ingredients).toContain({ name: 'tablespoon of oil', quantity: 1 });
      expect(data[0].instructions).toContain('Heat the oil in a large pot and add the chopped onion');
      expect(data[0].instructions).toContain('Cover potatoes with water');
      expect(data[0].instructions).toContain('Add sliced carrots');
      expect(data[0].instructions).toContain('Let it cook until the veggies are tender (about 20 minutes)');
      expect(data[0].instructions).toContain('Add sliced, peeled tomatoes');
      expect(data[0].instructions).toContain('Stir and cook for another 5 minutes');
      expect(data[0].instructions).toContain('Serve with fresh parsley on top!');

      expect(data[1].name).toBe('Scrambled Eggs');
      expect(data[1].estimatedTime).toBe(5);
      expect(data[1].ingredients).toContain({ name: 'large eggs', quantity: 4 });
      expect(data[1].ingredients).toContain({ name: 'cup of milk', quantity: 1 });
      expect(data[1].ingredients).toContain({ name: 'tablespoon of butter', quantity: 2 });
      expect(data[1].instructions).toContain('Beat eggs, milk, salt and pepper in medium bowl until blended');
      expect(data[1].instructions).toContain('Heat butter in large nonstick skillet over medium heat until hot. Pour in egg mixture');
      expect(data[1].instructions).toContain(
        'As eggs begin to set, gently pull the eggs across the pan with a spatula, forming large soft curds'
      );
      expect(data[1].instructions).toContain('Continue cooking until thickened and no visible liquid egg remains');
      expect(data[1].instructions).toContain('Remove from heat and serve immediately');

      expect(data[2].name).toBe('Vegan Pancakes');
      expect(data[2].estimatedTime).toBe(30);
      expect(data[2].ingredients).toContain({ name: 'cups of oat flour', quantity: 3 });
      expect(data[2].ingredients).toContain({ name: 'cups almond milk', quantity: 2 });
      expect(data[2].ingredients).toContain({ name: 'spotty bananas', quantity: 2 });
      expect(data[2].instructions).toContain('Place oats into a high speed blender and process until a flour is reached');
      expect(data[2].instructions).toContain('Add in the remaining ingredients until a batter is formed');
      expect(data[2].instructions).toContain(
        'Heat a non-stick pan on medium and pour 1/3 cup of batter, using a measuring cup to ensure equal size and cooking times'
      );
      expect(data[2].instructions).toContain(
        'Allow the pancake to cook until bubbles appear around the edges, then flip and cook until golde.'
      );

      expect(data[3].name).toBe('Sweet Potato Spinach Breakfast Hash');
      expect(data[3].estimatedTime).toBe(35);
      expect(data[3].ingredients).toContain({ name: 'sweet Potatoes, peeled and cut into ½" cubes', quantity: 2 });
      expect(data[3].ingredients).toContain({ name: 'package of frozen spinach', quantity: 1 });
      expect(data[3].ingredients).toContain({ name: 'egg', quantity: 1 });
      expect(data[3].instructions).toContain(
        'Preheat oven to 350 degrees. Line a baking sheet with a silicon mat or spray with non-stick spray'
      );
      expect(data[3].instructions).toContain(
        'Peel and cube sweet potato into ½" cubes. Place on baking sheet and lightly spray with cooking spray'
      );
      expect(data[3].instructions).toContain('Bake until fork tender - about 25-30 minutes. Turning once while baking');
      expect(data[3].instructions).toContain(
        'While the potatoes are roasting, in a large non-stick skillet over medium high heat, wilt the spinach turning it frequently until it gets soft. Work in small batches of spinach'
      );

      expect(data[4].name).toBe('Banana Berry Smoothie');
      expect(data[4].estimatedTime).toBe(5);
      expect(data[4].ingredients).toContain({ name: 'banana', quantity: 0.5 });
      expect(data[4].ingredients).toContain({ name: 'cup frozen berries', quantity: 1 });
      expect(data[4].ingredients).toContain({ name: 'cup almond milk', quantity: 0.5 });
      expect(data[4].instructions).toContain('Place all ingredients in a blender and mix until smooth');

      done(); //need to call done at the end of a test, if there are callbacks.
    });
    console.log('This happens first!, because above code is a callback so it happens when the request arrives.');
  });
});

describe('Get a recipe by id', () => {
  it('should return a valid recipe object', done => {
    //need done fo asynchronous tests. It's a function
    request.get('http://localhost:8000/retrieverecipe/1', (error, response, body) => {
      expect(error).toBe(null); //No errors

      let data = JSON.parse(body);

      expect(data.name).toBe('Scrambled Eggs');
      expect(data.estimatedTime).toBe(5);
      expect(data.ingredients).toContain({ name: 'large eggs', quantity: 4 });
      expect(data.ingredients).toContain({ name: 'cup of milk', quantity: 1 });
      expect(data.ingredients).toContain({ name: 'tablespoon of butter', quantity: 2 });
      expect(data.instructions).toContain('Beat eggs, milk, salt and pepper in medium bowl until blended');
      expect(data.instructions).toContain('Heat butter in large nonstick skillet over medium heat until hot. Pour in egg mixture');
      expect(data.instructions).toContain(
        'As eggs begin to set, gently pull the eggs across the pan with a spatula, forming large soft curds'
      );
      expect(data.instructions).toContain('Continue cooking until thickened and no visible liquid egg remains');
      expect(data.instructions).toContain('Remove from heat and serve immediately');

      done(); //need to call done at the end of a test, if there are callbacks.
    });
  });
});

describe('Testing sending a recipe to the server', () => {
  it('should send a recipe to the server', done => {
    let testRecipe = {
      name: 'Potato and Carrot Stew',
      ingredients: [{ name: 'large onion', quantity: 1 }],
      instructions: ['Heat the oil in a large pot and add the chopped onion'],
      estimatedTime: 40,
    };

    let options = {
      //use options to create post request, with our json data
      uri: 'http://localhost:8000/addrecipe',
      method: 'POST',
      json: testRecipe,
    };
    request.post(options, (error, response, body) => {
      console.log(body);
      let found = false;
      expect(body).toContain(testRecipe);
      done(); //need to call done at the end of a test, if there are callbacks.
    });
  });
});
