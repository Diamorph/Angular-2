"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var table_service_1 = require("./table.service");
var Task = /** @class */ (function () {
    function Task() {
    }
    return Task;
}());
exports.Task = Task;
var Category = /** @class */ (function () {
    function Category() {
    }
    return Category;
}());
exports.Category = Category;
var Cat = [
    { name: "Category 1" },
    { name: "Category 2" },
    { name: "Category 3" }
];
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
var TableComponent = /** @class */ (function (_super) {
    __extends(TableComponent, _super);
    function TableComponent(tableService) {
        var _this = _super.call(this) || this;
        _this.tableService = tableService;
        _this.categ = Cat;
        return _this;
    }
    TableComponent.prototype.ngOnInit = function () {
        this.data = this.tableService.data.getData().slice(0, this.row);
        //this.data = this.tableService.getData().slice(0, this.row);
    };
    TableComponent.prototype.delete = function (elem) {
        var index = this.data.indexOf(elem);
        if (index !== -1) {
            this.data.splice(index, 1);
        }
        console.log(elem.id);
    };
    TableComponent.prototype.add = function () {
        var newElem = new Task();
        newElem.id = this.id;
        newElem.name = this.name;
        newElem.price = this.price;
        newElem.category = this.category;
        this.data.push(newElem);
        console.log(newElem.id);
        //newElem.id = +this.id;
        //newElem.name = this.name;
        //newElem.price = +this.price;
        //newElem.category = this.category;
        //this.data.push(newElem);
        //console.log(newElem);
    };
    TableComponent.prototype.changeColor = function (elem) {
        if (elem.price > 500) {
            return "red";
        }
    };
    TableComponent.prototype.filterByCategory = function (category) {
        this.data = PRODUCTS.slice(0, this.row); // Забираємо початковий масив
        this.data = this.data.filter(function (data) { return data.category == category; }); // Фільтруємо його
    };
    TableComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "task",
            templateUrl: "table.component.html",
            styleUrls: ["table.component.css"],
            inputs: ["row"]
        }),
        __metadata("design:paramtypes", [table_service_1.TableService])
    ], TableComponent);
    return TableComponent;
}(Task));
exports.TableComponent = TableComponent;
//# sourceMappingURL=table.component.js.map