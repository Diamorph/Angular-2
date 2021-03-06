import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms"; // для ngModel
import { TableComponent} from "./table.component";
import { TableHostComponent} from "./table-host.component";

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [TableComponent, TableHostComponent]
})

export class TwoWayBindingModule {

}