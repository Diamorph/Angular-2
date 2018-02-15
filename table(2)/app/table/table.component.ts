import {Component, Input, OnInit, OnDestroy} from "@angular/core";
import { OnChanges} from "@angular/core/src/metadata/lifecycle_hooks";

export class Task{
    id: number;
    name: string;
    price: number;
}

const PRODUCTS : Task[] = [
    { id: 1, name : "product 1", price : 100 },
    { id: 2, name : "product 2", price : 200 },
    { id: 3, name : "product 3", price : 300 },
    { id: 4, name : "product 4", price : 400 },
    { id: 5, name : "product 5", price : 500 },
    { id: 6, name : "product 6", price : 600 },
    { id: 7, name : "product 7", price : 700 },
    { id: 8, name : "product 8", price : 800 },
    { id: 9, name : "product 9", price : 900 },
    { id: 10, name : "product 10", price : 1000 }];

    
@Component({
    moduleId: module.id,
    selector : "task",
    templateUrl: "table.component.html",
    styleUrls: ["table.component.css"],
    inputs: ["row"]
    })

export class TableComponent{
    row : number;
    data: Task[]

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

    // del(){
    //     console.log("fdsfsdfsdfsd");
    // }
}
