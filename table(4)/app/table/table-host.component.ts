import { Component, ViewChild } from "@angular/core";
import { TableComponent, Task} from "./table.component";

@Component({
    moduleId: module.id,
    selector: "tab",
    templateUrl: "table-host.component.html"
})
export class TableHostComponent { 

    @ViewChild(TableComponent)
    table1: TableComponent;

    // deleteRow(){
    //     this.table1.del();
    // }
    // deleteRow(elem:Task){
    //     this.table1.delete(elem);
    //     console.log("(((");
    // }



}