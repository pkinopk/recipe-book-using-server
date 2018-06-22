'use strict';
Object.defineProperty(exports, '__esModule', { value: true });

class Recipe {
  constructor(name, ingredients, instructions, estimatedTime) {
    this.name = name;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.estimatedTime = estimatedTime;
  }
}
exports.Recipe = Recipe;

class Ingredient {
  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
  }
}
exports.Ingredient = Ingredient;

var recipes = [
  new Recipe(
    'Potato and Carrot Stew',
    [
      new Ingredient('large onion', 1),
      new Ingredient('large carrots', 2),
      new Ingredient('potatos', 5),
      new Ingredient('cups of water', 2),
      new Ingredient('tablespoon of oil', 1),
    ],
    [
      'Heat the oil in a large pot and add the chopped onion',
      'Cover potatoes with water',
      'Add sliced carrots',
      'Let it cook until the veggies are tender (about 20 minutes)',
      'Add sliced, peeled tomatoes',
      'Stir and cook for another 5 minutes',
      'Serve with fresh parsley on top!',
    ],
    40
  ),
  new Recipe(
    'Scrambled Eggs',
    [new Ingredient('large eggs', 4), new Ingredient('cup of milk', 1), new Ingredient('tablespoon of butter', 2)],
    [
      'Beat eggs, milk, salt and pepper in medium bowl until blended',
      'Heat butter in large nonstick skillet over medium heat until hot. Pour in egg mixture',
      'As eggs begin to set, gently pull the eggs across the pan with a spatula, forming large soft curds',
      'Continue cooking until thickened and no visible liquid egg remains',
      'Remove from heat and serve immediately',
    ],
    5
  ),
  new Recipe(
    'Vegan Pancakes',
    [new Ingredient('cups of oat flour', 3), new Ingredient('cups almond milk', 2), new Ingredient('spotty bananas', 2)],
    [
      'Place oats into a high speed blender and process until a flour is reached',
      'Add in the remaining ingredients until a batter is formed',
      'Heat a non-stick pan on medium and pour 1/3 cup of batter, using a measuring cup to ensure equal size and cooking times',
      'Allow the pancake to cook until bubbles appear around the edges, then flip and cook until golde.',
    ],
    30
  ),
  new Recipe(
    'Sweet Potato Spinach Breakfast Hash',
    [
      new Ingredient('sweet Potatoes, peeled and cut into ½" cubes', 2),
      new Ingredient('package of frozen spinach', 1),
      new Ingredient('egg', 1),
    ],
    [
      'Preheat oven to 350 degrees. Line a baking sheet with a silicon mat or spray with non-stick spray',
      'Peel and cube sweet potato into ½" cubes. Place on baking sheet and lightly spray with cooking spray',
      'Bake until fork tender - about 25-30 minutes. Turning once while baking',
      'While the potatoes are roasting, in a large non-stick skillet over medium high heat, wilt the spinach turning it frequently until it gets soft. Work in small batches of spinach',
    ],
    35
  ),
  new Recipe(
    'Banana Berry Smoothie',
    [new Ingredient('banana', 1 / 2), new Ingredient('cup frozen berries', 1), new Ingredient('cup almond milk', 1 / 2)],
    ['Place all ingredients in a blender and mix until smooth'],
    5
  ),
];
exports.recipes = recipes;
