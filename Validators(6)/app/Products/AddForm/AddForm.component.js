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
var index_1 = require("../../index");
var products_servise_1 = require("../../Shared/products.servise");
var AddFormComponent = /** @class */ (function () {
    function AddFormComponent(router, activedRoute, service) {
        this.router = router;
        this.activedRoute = activedRoute;
        this.service = service;
        this.categorys = ["Category 1", "Category 2", "Category 3"];
        this.model = new index_1.Product(0, "", 0, "");
        this.submitted = false;
    }
    AddFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.service.add(this.model);
        console.log(JSON.stringify(this.model));
    };
    AddFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "add-form",
            templateUrl: "add.component.html",
            styleUrls: [
                "../../../node_modules/bootstrap/dist/css/bootstrap.css",
                "add.component.css"
            ]
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, products_servise_1.ProductsServise])
    ], AddFormComponent);
    return AddFormComponent;
}());
exports.AddFormComponent = AddFormComponent;
//# sourceMappingURL=AddForm.component.js.map