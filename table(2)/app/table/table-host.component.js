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
var table_component_1 = require("./table.component");
var TableHostComponent = /** @class */ (function () {
    function TableHostComponent() {
    }
    __decorate([
        core_1.ViewChild(table_component_1.TableComponent),
        __metadata("design:type", table_component_1.TableComponent)
    ], TableHostComponent.prototype, "table1", void 0);
    TableHostComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "tab",
            templateUrl: "table-host.component.html"
        })
    ], TableHostComponent);
    return TableHostComponent;
}());
exports.TableHostComponent = TableHostComponent;
//# sourceMappingURL=table-host.component.js.map