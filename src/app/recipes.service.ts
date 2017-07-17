import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { Recipe } from './recipe/recipe.model';

@Injectable()
export class RecipesService {

  recipeChanged = new Subject<Recipe[]>();

  constructor() { }

  private recipes: Recipe[] = [
    new Recipe('Pizza', ['Cheese', 'Ketchup']),
    new Recipe('Burger', ['Potato', 'Lettuce']),
    new Recipe('Noodels', ['Ketchup', 'Noodel'])
  ];


  getRecipes() {
    return this.recipes.slice();
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }


}
