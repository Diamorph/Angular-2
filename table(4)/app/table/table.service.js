"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PRODUCTS = [
    { id: 1, name: "product 1", price: 100, category: "Category 1" },
    { id: 2, name: "product 2", price: 200, category: "Category 2" },
    { id: 3, name: "product 3", price: 300, category: "Category 3" },
    { id: 4, name: "product 4", price: 400, category: "Category 2" },
    { id: 5, name: "product 5", price: 500, category: "Category 1" },
    { id: 6, name: "product 6", price: 600, category: "Category 3" },
    { id: 7, name: "product 7", price: 700, category: "Category 3" },
    { id: 8, name: "product 8", price: 800, category: "Category 2" },
    { id: 9, name: "product 9", price: 900, category: "Category 3" },
    { id: 10, name: "product 10", price: 1000, category: "Category 1" }
];
var TableService = /** @class */ (function () {
    function TableService() {
        // 1 -ий варіант:використовує обьєкт в якості сервіса
        this.data = {
            getData: function () {
                return PRODUCTS;
            }
        };
    }
    // 2-гий варіант: використання функції в якості сервіса
    TableService.prototype.getData = function () {
        var data = [];
        for (var i = 0; i < PRODUCTS.length; i++) {
            data.push(PRODUCTS[i]);
        }
        return data;
    };
    TableService = __decorate([
        core_1.Injectable()
    ], TableService);
    return TableService;
}());
exports.TableService = TableService;
//# sourceMappingURL=table.service.js.map