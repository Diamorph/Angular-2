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
var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(router, activedRoute, service) {
        this.router = router;
        this.activedRoute = activedRoute;
        this.service = service;
    }
    // OBSERVABLE PARAMS
    // forEach - устанавливаем обработчик на каждое изменение params
    ProductDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activedRoute.params.forEach(function (params) {
            var id = +params["id"];
            // обращаемся к сервису и запрашиваем фразу по id. Получаем Promise
            // как только Promise перейдет в состояние resolved присваиваем его значение свойству product
            _this.service.getId(id).then(function (result) { return _this.product = result; });
        });
    };
    ProductDetailsComponent.prototype.goToProdList = function () {
        var pId = this.product ? this.product.id : null;
        // Объект в массиве с сегментами пути расценивается как опциональные параметры
        // В адресной строке опциональные параметры будут разделены точкой с запятой
        this.router.navigate(["products", { id: pId, param1: "test" }]); // перенаправляем пользователя на ProductsComponent
    };
    ProductDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "product-details",
            templateUrl: "product-details.component.html",
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, products_servise_1.ProductsServise])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());
exports.ProductDetailsComponent = ProductDetailsComponent;
//# sourceMappingURL=product-details.component.js.map