import { SharedModule } from './../shared/shared.module';
import { CounterService } from './services/counter.service';
import { LAZY_ROUTES } from './lazy.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IAmLazyComponent } from './i-am-lazy/i-am-lazy.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [IAmLazyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(LAZY_ROUTES),
    SharedModule
  ],
  // providers :   [ CounterService ]
})
export class LazyModule { }
