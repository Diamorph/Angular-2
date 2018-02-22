import {RouterModule} from "@angular/router";
import { NgModule } from "@angular/core";
import {HomeComponent, AdminComponent, ProductsComponent} from "./index";

@NgModule({
    imports: [RouterModule.forRoot([
        {path: "home", component: HomeComponent},
        {path: "admin", component: AdminComponent},
        {path: "products", component: ProductsComponent},
        {path: "", redirectTo: "home", pathMatch:"full"}
    ])],
    declarations:[HomeComponent, AdminComponent, ProductsComponent],
    exports: [RouterModule]
})

export class AppRoutingModule{}