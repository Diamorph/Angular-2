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
var forms_1 = require("@angular/forms");
var AddFormDataDrivenComponent = /** @class */ (function () {
    function AddFormDataDrivenComponent(fb, router, activedRoute, service) {
        this.fb = fb;
        this.router = router;
        this.activedRoute = activedRoute;
        this.service = service;
        this.product = new index_1.Product(0, "name", 0, "category 1");
        this.categorys = ["category 1", "category 2", "category 3"];
        this.formErrors = {
            "id": "",
            "name": "",
            "price": "",
            "category": ""
        };
        this.validationMessages = {
            "id": {
                "required": "Обязательное поле.",
                "pattern": "Значение должно быть целым числом."
            },
            "name": {
                "required": "Обязательное поле.",
                "minlength": "Значение должно быть не менее 4х символов.",
                "maxlength": "Значение не должно быть больше 15 символов."
            },
            "price": {
                "required": "Обязательное поле.",
                "pattern": "Значение должно быть целым числом."
            },
            "category": {
                "required": "Обязательное поле."
            }
        };
    }
    AddFormDataDrivenComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    AddFormDataDrivenComponent.prototype.buildForm = function () {
        var _this = this;
        this.addForm = this.fb.group({
            "id": [this.product.id, [
                    forms_1.Validators.required,
                    forms_1.Validators.pattern("\\d+")
                ]],
            "name": [this.product.name, [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(4),
                    forms_1.Validators.maxLength(15)
                ]],
            "price": [this.product.price, [
                    forms_1.Validators.required,
                    forms_1.Validators.pattern("\\d+")
                ]],
            "category": [this.product.category, [
                    forms_1.Validators.required
                ]]
        });
        this.addForm.valueChanges
            .subscribe(function (data) { return _this.onValueChange(data); });
        this.onValueChange();
    };
    AddFormDataDrivenComponent.prototype.onValueChange = function (data) {
        if (!this.addForm)
            return;
        var form = this.addForm;
        for (var field in this.formErrors) {
            this.formErrors[field] = "";
            // form.get - получение элемента управления
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var message = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += message[key] + " ";
                }
            }
        }
    };
    AddFormDataDrivenComponent.prototype.onSubmit = function () {
        console.log("submitted");
        this.service.add(this.addForm.value);
        console.log(this.addForm.value);
    };
    AddFormDataDrivenComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "add-form(dataDriven)",
            templateUrl: "addForm(dataDriven).component.html",
            styleUrls: [
                "../../../node_modules/bootstrap/dist/css/bootstrap.css",
                "addForm.component.css"
            ]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, router_1.Router,
            router_1.ActivatedRoute, products_servise_1.ProductsServise])
    ], AddFormDataDrivenComponent);
    return AddFormDataDrivenComponent;
}());
exports.AddFormDataDrivenComponent = AddFormDataDrivenComponent;
//# sourceMappingURL=addForm(dataDriven).component.js.map