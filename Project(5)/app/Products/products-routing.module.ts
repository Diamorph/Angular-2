import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import {ProductsComponent, ProductDetailsComponent} from "../index";


@NgModule({
    imports:[
        RouterModule.forChild([
            {
                path: "",
                redirectTo: "/products",
                pathMatch: "full"
            },
        // Определение маршрутов для feature модуля 
        // Метод forRoot должен использоваться только в AppModule
            {path: "products",
             component: ProductsComponent,
             children: [
                    {
                        path: ":id",
                        component: ProductDetailsComponent
                    },
                    {
                        path: "",
                        component: ProductDetailsComponent
                    }
             ]
        },
           // {path: "products/:id",component: ProductDetailsComponent}
        ])
    ],
    exports:[RouterModule]
})

export class ProductsRoutingModule{}