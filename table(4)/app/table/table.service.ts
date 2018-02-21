import {Injectable} from "@angular/core";
import {Task,TableComponent} from "./table.component";



const PRODUCTS : Task[] = [
    { id: 1, name : "product 1", price : 100, category: "Category 1"},
    { id: 2, name : "product 2", price : 200, category: "Category 2"},
    { id: 3, name : "product 3", price : 300, category: "Category 3"},
    { id: 4, name : "product 4", price : 400, category: "Category 2"},
    { id: 5, name : "product 5", price : 500, category: "Category 1"},
    { id: 6, name : "product 6", price : 600, category: "Category 3"},
    { id: 7, name : "product 7", price : 700, category: "Category 3"},
    { id: 8, name : "product 8", price : 800, category: "Category 2"},
    { id: 9, name : "product 9", price : 900, category: "Category 3"},
    { id: 10, name : "product 10", price : 1000, category: "Category 1" }];


@Injectable()
export class TableService{
    // 1 -ий варіант:використовує обьєкт в якості сервіса
    data : any = {
        getData: function(){
            return PRODUCTS;
        }
    }
    // 2-гий варіант: використання функції в якості сервіса
    getData(){
        let data : Task[] = [];
        for(let i: number = 0; i< PRODUCTS.length; i++){
            data.push(PRODUCTS[i]);
        }
        return data;
    }


}