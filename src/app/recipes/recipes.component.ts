import { Component, OnInit } from '@angular/core';
import {NgModule} from "@angular/core/src/metadata/ng_module";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipeDetailsComponent} from "./recipe-details/recipe-details.component";
import {Recipe} from "./recipe";

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html'})
@NgModule({
  declarations: [
    RecipeListComponent
   ]})

export class RecipesComponent {

}
