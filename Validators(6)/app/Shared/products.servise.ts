import {Injectable} from "@angular/core";
import {Product} from "./products";

let products = [
    new Product(1,"name 1", 100, "category 1"),
    new Product(2,"name 2", 200, "category 2"),
    new Product(3,"name 3", 300, "category 3"),
    new Product(4,"name 4", 400, "category 1"),
    new Product(5,"name 5", 500, "category 1"),
    new Product(6,"name 6", 600, "category 2"),
    new Product(7,"name 7", 700, "category 2"),
    new Product(8,"name 8", 800, "category 3"),
    new Product(9,"name 9", 900, "category 1"),
    new Product(10,"name 10", 1000, "category 3"),
]

let productsPromise = Promise.resolve(products);



@Injectable()
export class ProductsServise{

    data : any = {
        getData: function(){
            return products;
        }
    }   
    add(elem:Product){
        productsPromise.then(data => data.push(elem));
    }

    getAll(): Promise<Product[]>{
        return productsPromise;
    }

    getId(id:number): Promise<Product>{
        return productsPromise
            .then(data => data.find(x => x.id == id ));
    }

}