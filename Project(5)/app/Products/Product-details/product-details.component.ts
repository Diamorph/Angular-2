import {Component, OnInit} from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import {Product} from "../../index";
import {ProductsServise} from "../../Shared/products.servise"


@Component({
    moduleId: module.id,
    selector: "product-details",
    templateUrl: "product-details.component.html",
})

export class ProductDetailsComponent implements OnInit{
    product : Product;

    constructor(private router : Router, private activedRoute: ActivatedRoute,private service : ProductsServise){}
        // OBSERVABLE PARAMS
        // forEach - устанавливаем обработчик на каждое изменение params
    ngOnInit(){
        this.activedRoute.params.forEach((params:Params) => {
            let id = +params["id"];
            // обращаемся к сервису и запрашиваем фразу по id. Получаем Promise
            // как только Promise перейдет в состояние resolved присваиваем его значение свойству product
            this.service.getId(id).then(result => this.product = result);
        })
    }

    goToProdList(){
        let pId = this.product ? this.product.id : null
        // Объект в массиве с сегментами пути расценивается как опциональные параметры
        // В адресной строке опциональные параметры будут разделены точкой с запятой
        this.router.navigate(["products", {id:pId, param1:"test"}]); // перенаправляем пользователя на ProductsComponent
    }

}
