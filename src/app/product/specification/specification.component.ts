import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.css']
})
export class SpecificationComponent implements OnInit {
  qty : number;
  price : number;
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.price = +this.route.snapshot.queryParams['price']
    this.route.queryParams.subscribe(params => {
      this.qty = +params['qty'];
    })
  }

}
