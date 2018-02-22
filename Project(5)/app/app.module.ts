import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router"; // модуль для маршрутизации
import { FormsModule } from "@angular/forms"; // для ngModel
import {AppRoutingModule} from "./index";

import { AppComponent } from "./app.component";

@NgModule({
    imports: [BrowserModule, AppRoutingModule],
    declarations: [AppComponent, ],
    bootstrap: [AppComponent]
})
export class AppModule { }