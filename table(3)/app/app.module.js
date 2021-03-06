"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router"); // модуль для маршрутизации
var app_component_1 = require("./app.component");
var list1_component_1 = require("./list1/list1.component");
var table_host_component_1 = require("./table/table-host.component");
var two_way_binding_1 = require("./table/two-way-binding");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                two_way_binding_1.TwoWayBindingModule,
                router_1.RouterModule.forRoot([
                    { path: "list1", component: list1_component_1.List1Component },
                    { path: "table", component: table_host_component_1.TableHostComponent },
                    { path: "", redirectTo: "list1", pathMatch: "full" }
                ])
            ],
            declarations: [app_component_1.AppComponent, list1_component_1.List1Component],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map