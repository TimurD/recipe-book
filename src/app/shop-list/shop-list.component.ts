import { Component, OnInit } from '@angular/core';
import {ShoppingListAddComponent} from "./shopping-list-add.component";
import {NgModule} from "@angular/core/src/metadata/ng_module";
import {Ingredient} from "../shared/ingredient";
import {ShopingListService} from "./shoping-list.service";

@Component({
  selector: 'rb-shop-list',
  templateUrl: './shop-list.component.html'
})
@NgModule({
  declarations: [
    ShoppingListAddComponent
  ]})
export class ShopListComponent implements OnInit {

  selectedItem:Ingredient=null

  onSelect(item:Ingredient){
    this.selectedItem=item;
  }

    items:Ingredient[]=[];

  constructor(private sls:ShopingListService) { }

  ngOnInit() {
    this.items=this.sls.getItems();
  }

}
