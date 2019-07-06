import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { SharedModule } from './../shared/shared.module';
import { NewEmployeeComponent } from './new-employee/new-employee.component';

@NgModule({
    declarations: [NewEmployeeComponent],
    imports: [CommonModule, SharedModule],
    // providers: [CounterService],
    // providers : [TestService],
    exports: [ NewEmployeeComponent ]
})

export class EmployeeModule { }