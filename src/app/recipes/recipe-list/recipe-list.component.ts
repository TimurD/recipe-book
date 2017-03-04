import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe";
import {NgModule} from "@angular/core/src/metadata/ng_module";
import {RecipeItemComponent} from "./recipe-item.component";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
@NgModule({
  declarations: [
    RecipeItemComponent
  ]})

export class RecipeListComponent implements OnInit {
  recipes: Recipe[]=[];


  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    this.recipes=this.recipeService.getRecipes();
  }


}
