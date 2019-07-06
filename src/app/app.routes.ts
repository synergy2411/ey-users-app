import { NewEmployeeComponent } from './employee/new-employee/new-employee.component';
// import 'rxjs/add/operator/map';
// import * as firebase from 'firbase';

import { SpecificationComponent } from './product/specification/specification.component';
import { ProductComponent } from './product/product.component';
import { LoginGaurdService } from './services/login-gaurd.service';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { UsersComponent } from './users/users.component';
import { OverviewComponent } from './product/overview/overview.component';

export const APP_ROUTES: Routes = [{
    path: "",                          // http://localhost:4200
    redirectTo: "login",
    pathMatch: "full"
}, {
    path: "login",                     // http://localhost:4200/login
    component: LoginComponent
}, {
    path: "register",                  // http://localhost:4200/register
    component: RegisterComponent
}, {
    path: "users",
    component: UsersComponent,
    canActivate: [LoginGaurdService]
}, {
    path: "observable",
    component: ObservableDemoComponent
}, {
    path: "pipe",
    component: PipeDemoComponent
},{
    path : "employee",
    component : NewEmployeeComponent
},{
    path : "lazy",
    loadChildren : "./lazy/lazy.module#LazyModule"
}, {
    path: "product",
    component: ProductComponent,
    children: [{
        path: "overview",
        component: OverviewComponent
    },{
        path: "overview/:id",
        component: OverviewComponent
    },{
        path: "overview/:id/:name",
        component: OverviewComponent
    }, {
        path: "spec",
        component: SpecificationComponent
    }]
}, {
    path: "**",
    redirectTo: "login",              // http://localhost:4200/pipe/demo
    pathMatch: "full"
}]