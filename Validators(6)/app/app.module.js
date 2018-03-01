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
var common_1 = require("@angular/common");
var index_1 = require("./index");
var index_2 = require("./index");
var products_servise_1 = require("./Shared/products.servise");
var app_component_1 = require("./app.component");
var products_module_1 = require("../app/Products/products.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                index_1.AppRoutingModule,
                common_1.CommonModule,
                products_module_1.ProductsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                index_2.HomeComponent,
                index_2.AdminComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [products_servise_1.ProductsServise]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map