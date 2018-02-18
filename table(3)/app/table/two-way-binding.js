"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms"); // для ngModel
var table_component_1 = require("./table.component");
var table_host_component_1 = require("./table-host.component");
var TwoWayBindingModule = /** @class */ (function () {
    function TwoWayBindingModule() {
    }
    TwoWayBindingModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule],
            declarations: [table_component_1.TableComponent, table_host_component_1.TableHostComponent]
        })
    ], TwoWayBindingModule);
    return TwoWayBindingModule;
}());
exports.TwoWayBindingModule = TwoWayBindingModule;
//# sourceMappingURL=two-way-binding.js.map