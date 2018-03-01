import {RouterModule} from "@angular/router";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {HomeComponent, AdminComponent, ProductsComponent} from "./index";
import {ProductDetailsComponent} from "./Products/Product-details/product-details.component";
import {ProductsServise} from "./Shared/products.servise";
import { Routes } from "@angular/router";

@NgModule({
    imports: [RouterModule.forRoot([
        {path: "home", component: HomeComponent},
        {path: "admin", component: AdminComponent},
        //{path: "products", component: ProductsComponent},
        //{path: "products/:id",component: ProductDetailsComponent},
        {path: "", redirectTo: "home", pathMatch:"full"}
    ]), BrowserModule],
    
    exports: [RouterModule]
})

export class AppRoutingModule{}