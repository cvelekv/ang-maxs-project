import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from './../recipe.service';

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private slService: ShoppingListService,
    private aRoute: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    // const recipeID = this.aRoute.snapshot.params["id"];
    this.aRoute.params.subscribe((params: Params) => {
      this.id = +params["id"];
    });
    this.recipe = this.recipeService.getRecipe(this.id);
  }
  addToShoppingList() {
    this.slService.addToShoppingList(this.recipe.ingredients);
  }
  onEditRecipe() {
    this.router.navigate(["edit"], { relativeTo: this.aRoute });
  }
  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(["/recipes"]);
  }
}
