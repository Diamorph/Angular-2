import {Component, OnInit} from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router"
import {Product} from "../../index";
import {ProductsServise} from "../../Shared/products.servise"
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
    moduleId: module.id,
    selector: "add-form(dataDriven)",
    templateUrl: "addForm(dataDriven).component.html",
    styleUrls: [
        "../../../node_modules/bootstrap/dist/css/bootstrap.css",
        "addForm.component.css"        
    ]
})

export class AddFormDataDrivenComponent{

    addForm : FormGroup;
    product : Product = new Product(0,"name",0,"category 1");

    categorys : string[] = ["category 1", "category 2", "category 3"];

    formErrors={
        "id":"",
        "name":"",
        "price":"",
        "category":""
    };


    validationMessages = {
        "id": {
            "required": "Обязательное поле.",
            "pattern": "Значение должно быть целым числом."
        }
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

    constructor(private fb: FormBuilder, private router : Router, 
        private activedRoute: ActivatedRoute,private service : ProductsServise) { }

    ngOnInit() {
        this.buildForm();
    }


    buildForm() {
        this.addForm = this.fb.group({
            
            "id": [this.product.id,[
                Validators.required,
                Validators.pattern("\\d+")
            ]],
            "name": [this.product.name, [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(15)
            ]],
            "price": [this.product.price,[
                Validators.required,
                Validators.pattern("\\d+")
            ]],
            "category": [this.product.category, [
                Validators.required
            ]]
        });

        this.addForm.valueChanges
            .subscribe(data => this.onValueChange(data));

        this.onValueChange();
    }

    onValueChange(data?: any) {
        if (!this.addForm) return;
        let form = this.addForm;

        for (let field in this.formErrors) {
            this.formErrors[field] = "";
            // form.get - получение элемента управления
            let control = form.get(field);

            if (control && control.dirty && !control.valid) {
                let message = this.validationMessages[field];
                for (let key in control.errors) {
                    this.formErrors[field] += message[key] + " ";
                }
            }
        }
    }

    onSubmit() {
        console.log("submitted");
        this.service.add(this.addForm.value);
        console.log(this.addForm.value);
    }

}