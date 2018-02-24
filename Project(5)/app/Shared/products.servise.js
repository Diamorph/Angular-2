"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var products_1 = require("./products");
var products = [
    new products_1.Product(1, "name 1", 100, "category 1"),
    new products_1.Product(2, "name 2", 200, "category 2"),
    new products_1.Product(3, "name 3", 300, "category 3"),
    new products_1.Product(4, "name 4", 400, "category 1"),
    new products_1.Product(5, "name 5", 500, "category 1"),
    new products_1.Product(6, "name 6", 600, "category 2"),
    new products_1.Product(7, "name 7", 700, "category 2"),
    new products_1.Product(8, "name 8", 800, "category 3"),
    new products_1.Product(9, "name 9", 900, "category 1"),
    new products_1.Product(10, "name 10", 1000, "category 3"),
];
var productsPromise = Promise.resolve(products);
var ProductsServise = /** @class */ (function () {
    function ProductsServise() {
        this.data = {
            getData: function () {
                return products;
            }
        };
    }
    ProductsServise.prototype.getAll = function () {
        return productsPromise;
    };
    ProductsServise.prototype.getId = function (id) {
        return productsPromise
            .then(function (data) { return data.find(function (x) { return x.id == id; }); });
    };
    ProductsServise = __decorate([
        core_1.Injectable()
    ], ProductsServise);
    return ProductsServise;
}());
exports.ProductsServise = ProductsServise;
//# sourceMappingURL=products.servise.js.map