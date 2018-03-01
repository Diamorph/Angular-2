import {Component, OnInit} from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router"
import {Product} from "../../index";
import {ProductsServise} from "../../Shared/products.servise"


@Component({
    moduleId: module.id,
    selector: "products",
    templateUrl: "products.component.html",
    styleUrls: [
        "../../../node_modules/bootstrap/dist/css/bootstrap.css",
        "products.component.css"]
})


export class ProductsComponent implements OnInit{
    selectedId: number;
    data : Product [];
    
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private productsService: ProductsServise){}

    ngOnInit(){
        this.activatedRoute.params.forEach((params: Params) => {
            this.selectedId = +params["id"];
            this.productsService.getAll().then(result => this.data = result);
        })
        // Звертаємось до сервісу, отримуємо Promise, як тільки 
        //Promise перейде у стан Resolved його результат передаємо у data
        //this.productsService.getAll().then(result => this.data = result);
    }

    onSelect(selected: Product){
        this.router.navigate(["products", selected.id]);
    }

    addFormTemplateDriven(){
        this.router.navigate(["products","add"]);
    }

    addFormDataDriven(){
        this.router.navigate(["products","add1"]);
    }

    isSelected(product: Product){
        return product.id == this.selectedId;
    }
}
