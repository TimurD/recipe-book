
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {APP_ROUTE_PROVIDER} from "./app.routes";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ShoppingListAddComponent } from './shop-list/shopping-list-add.component';
import { DropdownDirective } from './drop-down.directive';
import {RecipeService} from "./recipes/recipe.service";
import {ShopingListService} from "./shop-list/shoping-list.service";
import {RouterModule} from "@angular/router";
import { RecipeStartComponent } from './recipes/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    ShopListComponent,
    ShoppingListAddComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTE_PROVIDER)
  ],
  providers: [RecipeService,ShopingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
