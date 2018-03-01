import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {ProductsComponent, ProductDetailsComponent, AddFormComponent, AddFormDataDrivenComponent} from "../index";

import {ProductsRoutingModule} from "../Products/products-routing.module";


@NgModule({
    imports:[
        CommonModule,
        ProductsRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations:[
        ProductsComponent,
        ProductDetailsComponent,
        AddFormComponent,
        AddFormDataDrivenComponent
    ]
})

export class ProductsModule{}