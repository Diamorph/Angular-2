import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router"; // модуль для маршрутизации

import { AppComponent } from "./app.component";
import { List1Component } from "./list1/list1.component";
import { TableComponent } from "./table/table.component";
import { TableHostComponent} from "./table/table-host.component"

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([ // настройка маршрутов
            { path: "list1", component: List1Component }, // при переходе по адресу localhost:3000/component1 должен активироваться компонент List1Component
            { path: "table", component: TableHostComponent },
            { path: "", redirectTo: "list1", pathMatch: "full" }
        ])
    ],
    declarations: [AppComponent, List1Component, TableComponent, TableHostComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
