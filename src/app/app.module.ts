import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ChangeRecipeComponent } from './change-recipe/change-recipe.component';
import { RecipesService } from './recipes.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    ChangeRecipeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
