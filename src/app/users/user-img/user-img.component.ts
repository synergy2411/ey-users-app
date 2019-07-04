import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-img',
  templateUrl: './user-img.component.html',
  styleUrls: ['./user-img.component.css']
})
export class UserImgComponent {
  @Input('xyz') user: any;

  @Output("childEvent") childEvent = new EventEmitter<any>()

  onInfo(usr : any){
    this.childEvent.emit(usr);
  }
}
