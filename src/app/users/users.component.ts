import { USER_DATA } from './../models/mocks';
import { IUser } from './../models/user';
import { Component, 
    Input, 
    ViewEncapsulation,
    OnChanges, OnInit, DoCheck, AfterContentInit, 
    AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, 
    SimpleChanges,
    ChangeDetectionStrategy,
} from '@angular/core';


@Component({
    selector: "app-users",
    templateUrl: "./users.component.html",
    styleUrls : [`./users.component.css`],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection : ChangeDetectionStrategy.Default
})

export class UsersComponent
//  implements OnChanges, OnInit, DoCheck, AfterContentInit, 
// AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy 
{

    @Input('title') title: string;

    users : IUser[];

    constructor(){}

    moreInfo(usr: IUser) {
        alert(`${usr.firstName} is working with ${usr.company}!
        Votes : ${usr.vote}`)
    }

    // ngOnChanges(changes : SimpleChanges){
    //     console.log("ngOnChanges", changes)
    // }
    ngOnInit(){
        // console.log("ngOnInit");
        this.users = USER_DATA;
    }
    // ngDoCheck(){console.log("ngDoCheck")}
    // ngAfterContentInit(){console.log("ngAfterContentInit")}
    // ngAfterContentChecked(){console.log("ngAfterContentChecked")}
    // ngAfterViewInit(){console.log("ngAfterViewInit")}
    // ngAfterViewChecked() {console.log("ngAfterViewChecked")}
    // ngOnDestroy(){console.log("ngOnDestroy")}


}