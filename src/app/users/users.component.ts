import { DataService } from './../services/data.service';
import { IUser } from './../models/user';

import {
    Component,
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
    styleUrls: [`./users.component.css`],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.Default,
    providers: [DataService]
})

export class UsersComponent
//  implements OnChanges, OnInit, DoCheck, AfterContentInit, 
// AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy 
{

    @Input('title') title: string;

    users: IUser[];

    constructor(public dataService: DataService) { }

    moreInfo(usr: IUser) {
        alert(`${usr.firstName} is working with ${usr.company}!
        Votes : ${usr.vote}`)
    }

    onIncrease() {
        this.dataService.counter++;
    }

    ngOnInit() {
        // - ACCESSING DATA FROM REST API

        this.dataService.getApiData()
        .subscribe(response => this.users = response);

        // this.users = this.dataService.getData();

        // - ACCESSING MODEL LOCALY
        // this.dataService.getJsonData()
        //     .subscribe(
        //         // response => this.users =  <IUser[]>response['userdata'],
        //         response => this.users = response,
        //         err => console.log(err),
        //         () => { console.log("Completed") }
        //     );
    }




    // ngOnChanges(changes : SimpleChanges){
    //     console.log("ngOnChanges", changes)
    // }
    // ngDoCheck(){console.log("ngDoCheck")}
    // ngAfterContentInit(){console.log("ngAfterContentInit")}
    // ngAfterContentChecked(){console.log("ngAfterContentChecked")}
    // ngAfterViewInit(){console.log("ngAfterViewInit")}
    // ngAfterViewChecked() {console.log("ngAfterViewChecked")}
    // ngOnDestroy(){console.log("ngOnDestroy")}


}