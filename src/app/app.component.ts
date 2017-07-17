import { Component, ViewChild } from '@angular/core';
import { RecipesService } from './recipes.service';
import { Recipe } from './recipe/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('modal') modal;
  newRecipeName: string = '';
  newIngredientList: string = '';

  constructor(private recipesService:RecipesService){}

  onAddRecipe(){
    let ingredients: string[] = this.newIngredientList.split(',');
    let recipe: Recipe = new Recipe(this.newRecipeName, ingredients);
    this.recipesService.addRecipe(recipe);
    this.modal.close();
  }
}
