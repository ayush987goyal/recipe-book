import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { Recipe } from './recipe/recipe.model';

@Injectable()
export class RecipesService {

  private recipes: Recipe[];
  recipeChanged = new Subject<Recipe[]>();

  constructor() {
    let recievedRecipes: Recipe[] = JSON.parse(localStorage.getItem('_ayush987goyal_recipes'));
    if (typeof recievedRecipes != "undefined" && recievedRecipes != null && recievedRecipes.length != null && recievedRecipes.length > 0) {
      this.recipes = recievedRecipes;
    }
    else {
      this.recipes = [
        new Recipe('Pizza', ['Cheese', 'Ketchup']),
        new Recipe('Burger', ['Potato', 'Lettuce']),
        new Recipe('Noodels', ['Ketchup', 'Noodel'])
      ];
    }
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.updateLocalStorage();
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.updateLocalStorage();
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.updateLocalStorage();
    this.recipeChanged.next(this.recipes.slice());
  }

  updateLocalStorage() {
    localStorage.setItem('_ayush987goyal_recipes', JSON.stringify(this.recipes));
  }


}
