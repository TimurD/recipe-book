import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "../shared/ingredient";

@Injectable()
export class RecipeService {

  recipes: Recipe[]=[new Recipe('Salad','Classic greek salad','http://kyiv.ridna.ua/wp-content/uploads/2016/07/%D0%BC3.jpg',[
    new Ingredient('meat',2),
    new Ingredient('butter',1)
  ]),
    new Recipe('Steak','Beef steak','http://www.seriouseats.com/recipes/assets_c/2015/05/Anova-Steak-Guide-Sous-Vide-Photos15-beauty-thumb-1500xauto-423558.jpg',[])];


  getRecipes(){
    return this.recipes;
  }
  constructor() { }

  getRecipe(id:number){
    return this.recipes[id];
  }
  deleteRecipe(recipe:Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe),1);
  }

}
