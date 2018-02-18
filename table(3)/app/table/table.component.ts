import {Component, Input, OnInit, OnDestroy, OnChanges} from "@angular/core";
import { FormsModule } from "@angular/forms"; // для ngModel


export class Task{
    id: number;
    name: string;
    price: number;
    category: string;
}

export class Category{
    name: string;
}

const Cat: Category[] = [
    {name: "Category 1"},
    {name: "Category 2"},
    {name: "Category 3"}
]

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

    
@Component({
    moduleId: module.id,
    selector : "task",
    templateUrl: "table.component.html",
    styleUrls: ["table.component.css"],
    inputs: ["row"]
    })

export class TableComponent extends Task{
    row : number;
    data: Task[];
    categ : Category[] = Cat;

    ngOnInit(){
         this.data = PRODUCTS.slice(0,this.row);
    }

    delete(elem:Task){
        const index: number = this.data.indexOf(elem);
        if (index !== -1) {
            this.data.splice(index, 1);
        }  
        console.log(elem.id);
    }

    add(){
        let newElem : Task = new Task();
        newElem.id = this.id;
        newElem.name = this.name;
        newElem.price = this.price;
        newElem.category = this.category;
        this.data.push(newElem);
        console.log(newElem.id);

        //newElem.id = +this.id;
        //newElem.name = this.name;
        //newElem.price = +this.price;
        //newElem.category = this.category;
        //this.data.push(newElem);
        //console.log(newElem);
    }

    changeColor(elem:Task){
        if(elem.price > 500){
            return "red";
        }
    }

   filterByCategory(category:string){
       this.data = PRODUCTS.slice(0,this.row); // Забираємо початковий масив
       this.data = this.data.filter(data => data.category == category); // Фільтруємо його
   }
    // del(){
    //     console.log("fdsfsdfsdfsd");
    // }
}
   