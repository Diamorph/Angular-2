import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import {ProductsComponent, ProductDetailsComponent, AddFormComponent, AddFormDataDrivenComponent} from "../index";


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
                     path: "add1",
                     component: AddFormDataDrivenComponent
                 },
                {
                    path: "add",
                    component: AddFormComponent
                },
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