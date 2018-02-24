import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {ProductsComponent, ProductDetailsComponent} from "../index";

import {ProductsRoutingModule} from "../Products/products-routing.module";

@NgModule({
    imports:[
        CommonModule,
        ProductsRoutingModule
    ],
    declarations:[
        ProductsComponent,
        ProductDetailsComponent
    ]
})

export class ProductsModule{}