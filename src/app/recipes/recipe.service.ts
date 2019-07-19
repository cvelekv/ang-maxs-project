import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      "Schnitzel",
      "This is a test",
      "https://www.momontimeout.com/wp-content/uploads/2018/11/chicken-stir-fry.jpg",
      [new Ingredient("Meat", 1), new Ingredient("French fries", 20)]
    ),
    new Recipe(
      "Big Fat Burger",
      "This is another test",
      "https://91dat.com.mx/wp-content/uploads/2019/01/Chicken-Tinga-Tacos-1-2.jpg",
      [new Ingredient("Buns", 2), new Ingredient("Meat", 1)]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(id: number) {
    return this.recipes[id];
  }
}
