import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router"; // модуль для маршрутизации
import { FormsModule } from "@angular/forms"; // для ngModel
import {AppRoutingModule} from "./index";
import {HomeComponent, AdminComponent, ProductsComponent, ProductDetailsComponent} from "./index";
import {ProductsServise} from "./Shared/products.servise";

import { AppComponent } from "./app.component";
import { ProductsModule } from "../app/Products/products.module";

@NgModule({
    imports: [
        BrowserModule, 
        AppRoutingModule,
        CommonModule, 
        ProductsModule
    ],
    declarations:[
        AppComponent, 
        HomeComponent, 
        AdminComponent
    ],
    bootstrap: [AppComponent],
    providers: [ProductsServise]
})
export class AppModule { }