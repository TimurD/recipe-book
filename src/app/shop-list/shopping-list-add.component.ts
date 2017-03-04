import {Component, OnInit, OnChanges, Input} from '@angular/core';
import {ShopingListService} from "./shoping-list.service";
import {Ingredient} from "../shared/ingredient";

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnChanges {
 @Input() item:Ingredient;
  isAdd=true;





  onSubmit(ingredient:Ingredient){
    const newItem= new Ingredient(ingredient.name,ingredient.amount);
    if(!this.isAdd){
      this.sls.editItem(this.item,newItem)

    }else {
   this.item= newItem;
    this.sls.addItem(this.item);
    }
  }


  constructor(private sls:ShopingListService) { }

  ngOnChanges(changes){
    if(changes.item.currentValue===null){
      this.isAdd=true;
      this.item={name:null,amount:null}
    }else {this.isAdd=false;}

  }

}
