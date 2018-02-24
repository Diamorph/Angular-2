"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var products_servise_1 = require("../../Shared/products.servise");
var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(router, activatedRoute, productsService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.productsService = productsService;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.forEach(function (params) {
            _this.selectedId = +params["id"];
            _this.productsService.getAll().then(function (result) { return _this.data = result; });
        });
        // Звертаємось до сервісу, отримуємо Promise, як тільки 
        //Promise перейде у стан Resolved його результат передаємо у data
        //this.productsService.getAll().then(result => this.data = result);
    };
    ProductsComponent.prototype.onSelect = function (selected) {
        this.router.navigate(["products", selected.id]);
    };
    ProductsComponent.prototype.isSelected = function (product) {
        return product.id == this.selectedId;
    };
    ProductsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "products",
            templateUrl: "products.component.html",
            styleUrls: ["products.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            products_servise_1.ProductsServise])
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=products.component.js.map