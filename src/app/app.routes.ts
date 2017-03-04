import {provideRoutes, Routes} from "@angular/router";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShopListComponent} from "./shop-list/shop-list.component";
import {RECIPE_ROUTES} from "./recipes/recipes.routes";
export const APP_ROUTE_PROVIDER:Routes=[
    {path:'',redirectTo: '/recipes',pathMatch:'full'},
    {path:'recipes',component: RecipesComponent, children: RECIPE_ROUTES},
    {path:'shopping-list',component:ShopListComponent}
];
