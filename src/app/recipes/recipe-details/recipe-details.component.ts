import {Component, OnInit, OnDestroy} from '@angular/core';
import {Recipe} from "../recipe";
import {Input} from "@angular/core/src/metadata/directives";
import {ShopingListService} from "../../shop-list/shoping-list.service";
import {Router, ActivatedRoute} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'rb-recipe-details',
  templateUrl: './recipe-details.component.html'
})
export class RecipeDetailsComponent implements OnInit,OnDestroy {
  selectedRecipe:Recipe;
  private recipeIndex:number;
  private subscription:Subscription;
  constructor(private sls:ShopingListService,private router:Router,private route:ActivatedRoute,private recipeService:RecipeService) { }

  ngOnInit() {
  this.subscription=this.route.params.subscribe(
    (params:any)=>{
          this.recipeIndex=params['id'];
          this.selectedRecipe=this.recipeService.getRecipe(this.recipeIndex);
        }
      );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onEdit(){
   this.router.navigate(['/recipes',this.recipeIndex,'edit']);
  }
  onDelete(){
    this.recipeService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipes']);
  }

  onAddToShoppingListItems(){
    this.sls.addItems(this.selectedRecipe.ingredients);
  }


}
