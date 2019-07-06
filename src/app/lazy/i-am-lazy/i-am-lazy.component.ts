import { TestService } from './../../services/test.service';
import { CounterService } from './../services/counter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-i-am-lazy',
  templateUrl: './i-am-lazy.component.html',
  styleUrls: ['./i-am-lazy.component.css']
})
export class IAmLazyComponent implements OnInit {

  constructor(public counterService : CounterService,
          public test : TestService) { }

  onIncrease(){
    this.counterService.counter++;
    this.test.testCounter++;
  }

  ngOnInit() {
  }

}
