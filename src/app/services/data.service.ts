import { AuthService } from './auth.service';
import { IUser } from './../models/user';
import { USER_DATA } from './../models/mocks';
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {
    counter: number = 0;

    constructor(
        private httpClient: HttpClient,
        private authService : AuthService
        ) { }

    getApiData() {
        return this.httpClient.get<IUser[]>("https://ey-users-app.firebaseio.com/userdata.json")
        

        // return this.httpClient.get<IUser[]>("https://ey-users-app.firebaseio.com/userdata.json?auth=" + this.authService.getToken(), {
        //     responseType: "json"
        // });
    }

    getJsonData() {
        return this.httpClient.get("assets/model/user-data.json", {
            responseType: "json"
        }).pipe(map(response => <IUser[]>response['userdata']))
    }

    getData() {
        return USER_DATA;
    }

    
}