import { CounterService } from './../../lazy/services/counter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  constructor(public cs : CounterService) { }

  onIncrease(){
    this.cs.counter++;
  }
  ngOnInit() {
  }

}
