import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  // private recipes: Recipe[] = [
  //   new Recipe(
  //     "Schnitzel",
  //     "This is a test",
  //     "https://www.momontimeout.com/wp-content/uploads/2018/11/chicken-stir-fry.jpg",
  //     [new Ingredient("Meat", 1), new Ingredient("French fries", 20)]
  //   ),
  //   new Recipe(
  //     "Big Fat Burger",
  //     "This is another test",
  //     "https://91dat.com.mx/wp-content/uploads/2019/01/Chicken-Tinga-Tacos-1-2.jpg",
  //     [new Ingredient("Buns", 2), new Ingredient("Meat", 1)]
  //   )
  // ];

  private recipes: Recipe[] = [];

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(id: number) {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
