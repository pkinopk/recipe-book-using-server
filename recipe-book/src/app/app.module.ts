import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { RecipeDisplayComponent } from './recipe/recipe-display/recipe-display.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { FridgeDisplayComponent } from './fridge/fridge-display/fridge-display.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RecipeEditComponent,
    RecipeDisplayComponent,
    RecipeListComponent,
    FridgeDisplayComponent,
    ShoppingListComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
