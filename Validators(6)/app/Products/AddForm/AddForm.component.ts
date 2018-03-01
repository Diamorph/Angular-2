import {Component, OnInit} from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router"
import {Product} from "../../index";
import {ProductsServise} from "../../Shared/products.servise"


@Component({
    moduleId: module.id,
    selector: "add-form",
    templateUrl: "add.component.html",
    styleUrls: [
        "../../../node_modules/bootstrap/dist/css/bootstrap.css",
        "add.component.css"        
    ]
})

export class AddFormComponent{

    constructor(private router : Router, private activedRoute: ActivatedRoute,private service : ProductsServise){
    }

    categorys :string[] = ["Category 1", "Category 2", "Category 3"];

    model: Product = new Product(0, "", 0, "");

    submitted: boolean = false;

    onSubmit() {
        this.submitted = true;
        this.service.add(this.model);
        console.log(JSON.stringify(this.model));
    }
}
