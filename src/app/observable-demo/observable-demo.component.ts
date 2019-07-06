import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent{
  myObservable = Observable.create( observer => {

    setTimeout(()=>{
      observer.next("First Package");
    }, 1000);

    setTimeout(()=>{
      observer.next("Second Package");
    }, 2000);

    // setTimeout(()=>{
    //   observer.error(new Error("Something went wrong"));
    // }, 4000);

    setTimeout(()=>{
      observer.next("Third Package");
    }, 5000);

    setTimeout(()=>{
      observer.complete();
    }, 6000);
  })

  data : string;

  unsub : any;

  onSubscribe(){
    this.unsub = this.myObservable.subscribe(
      response => this.data = response,
      err => console.log(err),
      () => console.log("Completed")
    )
  }
  
  onUnsubscribe(){
    this.unsub.unsubscribe();
  }

}
