import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router"; // модуль для маршрутизации
import { FormsModule } from "@angular/forms"; // для ngModel

import { AppComponent } from "./app.component";
import { List1Component } from "./list1/list1.component";
import { TableComponent } from "./table/table.component";
import { TableHostComponent} from "./table/table-host.component";
import { TwoWayBindingModule} from "./table/two-way-binding";


@NgModule({
    imports: [
        BrowserModule,
        TwoWayBindingModule,
        RouterModule.forRoot([ // настройка маршрутов
            { path: "list1", component: List1Component }, // при переходе по адресу localhost:3000/component1 должен активироваться компонент List1Component
            { path: "table", component: TableHostComponent },
            { path: "", redirectTo: "list1", pathMatch: "full" }
        ])
    ],
    declarations: [AppComponent, List1Component],
    bootstrap: [AppComponent]
})
export class AppModule { }
