import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipes: Recipe[];
  isOpen: boolean[] = [];
  openIndex: number = -1;

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
    for (let i = 0; i < this.recipes.length; i++) {
      this.isOpen.push(false);
    }

    this.recipesService.recipeChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
        this.isOpen = [];
        for (let i = 0; i < this.recipes.length; i++) {
          this.isOpen.push(false);
        }
      }
    );
  }

  onChange(index: number) {
    this.isOpen[index] = !this.isOpen[index];
    if (this.openIndex >= 0 && (this.openIndex !== index)) {
      this.isOpen[this.openIndex] = false;
    }
    this.openIndex = index;
  }

}
